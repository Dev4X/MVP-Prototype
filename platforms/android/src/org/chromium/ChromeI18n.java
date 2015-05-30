// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.CordovaResourceApi.OpenForReadResult;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginManager;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.annotation.SuppressLint;
import android.content.res.AssetFileDescriptor;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Base64;
import android.util.Log;
import android.view.View;

public class ChromeI18n extends CordovaPlugin implements ChromeExtensionURLs.RequestModifyInterface {

    private static final String LOG_TAG = "ChromeI18n";
    // Save the locale chain so we don't have to recalculate each time
    private List<String> chosenLocales;
    private List<String> availableLocales;
    // Save any retrieved message.json contents in memory so that we don't have to retrieve it again
    private Map<String, JSONObject> memoizedJsonContents = new HashMap<String, JSONObject>();
    // The pattern of any messages we need to replace
    private Pattern patterRegex = Pattern.compile("__MSG_(@@)?[a-zA-Z0-9_-]*__");
    private static boolean HAS_CDV_PLUGIN_API;
    static {
        try {
            CordovaPlugin.class.getMethod("handleOpenForRead", Uri.class);
            HAS_CDV_PLUGIN_API = true;
        } catch (NoSuchMethodException e) {
            HAS_CDV_PLUGIN_API = false;
        }
    }

    ChromeExtensionURLs chromeExtensionURLsPlugin;

    @Override
    public void pluginInitialize() {
        PluginManager pm = null;
        try {
            Method gpm = webView.getClass().getMethod("getPluginManager");
            pm = (PluginManager) gpm.invoke(webView);
        } catch (Exception e) {}
        if (pm == null) {
            try {
                Field pmf = webView.getClass().getField("pluginManager");
                pm = (PluginManager)pmf.get(webView);
            } catch (Exception e) {}
        }
        chromeExtensionURLsPlugin = (ChromeExtensionURLs)pm.getPlugin("ChromeExtensionURLs");
        chromeExtensionURLsPlugin.i18nPlugin = this;

        // TODO: This should probably be a build step.
        availableLocales = new ArrayList<String>();
        try {
            File localesDir = new File(webView.getResourceApi().remapUri(Uri.parse("file:///android_asset/www/_locales")).getPath());
            String[] localesArr;
            if (localesDir.getAbsolutePath().startsWith("/android_asset/")) {
                String assetPath = localesDir.getAbsolutePath().substring("/android_asset/".length());
                localesArr = webView.getContext().getAssets().list(assetPath);
            } else {
                localesArr = localesDir.list();
            }
            availableLocales.addAll(Arrays.asList(localesArr));
        } catch (IOException e) {
        }
    }

    @Override
    public boolean execute(String action, CordovaArgs args, final CallbackContext callbackContext) throws JSONException {
        if ("getAcceptLanguages".equals(action)) {
            getAcceptLanguages(args, callbackContext);
            return true;
        }

        return false;
    }

    private void getAcceptLanguages(final CordovaArgs args, final CallbackContext callbackContext) {
        try {
            JSONArray ret = new JSONArray();
            Locale locale = Locale.getDefault();
            String localString = locale.toString().replace('_', '-');
            ret.put(localString);
            callbackContext.success(ret);
        } catch (Exception e) {
            callbackContext.error("Could not retrieve supported locales");
            Log.e(LOG_TAG, "Could not retrieve supported locales", e);
        }
    }

    @Override
    public Uri remapChromeUri(Uri uri) {
        Uri ret = Uri.parse(replacePatternsInLine(uri.toString()));
        if (ret.getPath().endsWith(".css") || uri.getPath().equals("manifest.json")) {
            if (HAS_CDV_PLUGIN_API) {
                return new Uri.Builder()
                        .scheme("cdvplugin")
                        .authority("ChromeI18n")
                        .appendQueryParameter("origUri", uri.toString())
                        .build();
            }
            Uri fileUri = chromeExtensionURLsPlugin.remapToRealLocation(uri);
            try {
                OpenForReadResult readResult = webView.getResourceApi().openForRead(fileUri, true);
                try {
                    byte[] newData = replaceI18nPlaceholders(readResult.inputStream);
                    String encoded = Base64.encodeToString(newData, Base64.NO_WRAP);
                    return Uri.parse("data:text/css;charset=utf-8;base64," + encoded);
                } finally {
                    if (readResult != null) {
                        readResult.inputStream.close();
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return ret;
    }

    public CordovaResourceApi.OpenForReadResult handleOpenForRead(Uri uri) throws IOException {
        Uri origUri = Uri.parse(uri.getQueryParameter("origUri"));
        Uri fileUri = chromeExtensionURLsPlugin.remapToRealLocation(origUri);
        OpenForReadResult readResult = webView.getResourceApi().openForRead(fileUri);
        try {
            ByteArrayInputStream inputStream = new ByteArrayInputStream(replaceI18nPlaceholders(readResult.inputStream));
            // Use reflection to be compilable before the constructor was made public.
            try {
                Constructor<OpenForReadResult> ctor = OpenForReadResult.class.getConstructor(Uri.class, InputStream.class, String.class, long.class, AssetFileDescriptor.class);
                return ctor.newInstance(uri, inputStream, webView.getResourceApi().getMimeType(fileUri), (long)inputStream.available(), null);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } finally {
            readResult.inputStream.close();
        }
    }

    private byte[] replaceI18nPlaceholders(InputStream is) throws IOException {
        // Process the input stream line by line
        // Default byte array size is 32 bytes. Use something more reasonable for web resources - 32K
        int defaultByteArraySize = 32768;
        String ls = System.getProperty("line.separator");
        ByteArrayOutputStream os = new ByteArrayOutputStream(defaultByteArraySize);
        String line = null;
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        while((line = reader.readLine()) != null) {
            line = replacePatternsInLine(line);
            // Note the last line might get an extra \n pushed in. This shouldn't affect the loading of web resources
            os.write((line + ls).getBytes());
        }
        return os.toByteArray();
    }

    private String replacePatternsInLine(String line) {
        try {
            Matcher matcher = patterRegex.matcher(line);
            StringBuilder constructedLine = new StringBuilder();
            int currStart = 0;

            while (currStart < line.length() && matcher.find(currStart)) {
                String preString = line.substring(currStart, matcher.start());
                String match = matcher.group();

                constructedLine.append(preString);
                constructedLine.append(getReplacement(match));
                currStart = matcher.end();
            }
            //get the remaining piece
            constructedLine.append(line.substring(currStart));

            return constructedLine.toString();
        } catch (Exception e) {
            Log.e(LOG_TAG, "An error occurred during the i18n of line : " + line, e);
            // Return the line itself as it is a more graceful fallback than return nothing
            return line;
        }
    }

    @SuppressLint("NewApi")
    private static boolean isRtlLocale(Locale l) {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN_MR1) {
            return View.LAYOUT_DIRECTION_RTL == TextUtils.getLayoutDirectionFromLocale(l);
        }
        String lang = l.getLanguage().toLowerCase(Locale.ENGLISH);
        return (lang.equals("ar") ||
                lang.equals("fa") ||
                lang.equals("ur") ||
                lang.equals("ps") ||
                lang.equals("syr") ||
                lang.equals("dv") ||
                lang.equals("he") ||
                lang.equals("yi"));
    }

    private String getReplacement(String match) {
        // get the message from __MSG_messagename__
        String messageName = match.substring(6, match.length() - 2).toLowerCase(Locale.ENGLISH);
        if(messageName.startsWith("@@")){
            Locale locale = Locale.getDefault();
            if("@@extension_id".equals(messageName)) {
                return "{appId}";
            } else if("@@ui_locale".equals(messageName)) {
                return locale.toString();
            } else if("@@bidi_dir".equals(messageName)) {
                return isRtlLocale(locale) ? "rtl" : "ltr";
            } else if("@@bidi_reversed_dir".equals(messageName)) {
                return isRtlLocale(locale) ? "ltr" : "rtl";
            } else if("@@bidi_start_edge".equals(messageName)) {
                return isRtlLocale(locale) ? "right" : "left";
            } else if("@@bidi_end_edge".equals(messageName)) {
                return isRtlLocale(locale) ? "left" : "right";
            }
        }

        // Look for replacement in messages.json files
        List<String> localeChain = getLocalesToUse();
        JSONObject messageObject = getMessageFromMessageJson(messageName, localeChain);
        if(messageObject != null) {
            String ret = messageObject.optString("message");
            if (ret != null) {
                return ret;
            }
        }
        // Didn't find a match, just return string as is
        return match;
    }

    private List<String> getLocalesToUse() {
        try {
            if(chosenLocales == null) {
                List<String> localesToUse = new ArrayList<String>();
                String windowLocale = Locale.getDefault().toString().toLowerCase().replace('-', '_');
                localesToUse.add(windowLocale);

                // Construct fallback chain
                int lastIndex;
                while((lastIndex = windowLocale.lastIndexOf('_')) != -1) {
                    windowLocale = windowLocale.substring(0, lastIndex);
                    localesToUse.add(windowLocale);
                }
                String defaultLocale = getDefaultLocale();
                if(!localesToUse.contains(defaultLocale)) {
                    localesToUse.add(defaultLocale);
                }

                chosenLocales = new ArrayList<String>();
                for(int i = 0; i < localesToUse.size(); i++) {
                    String currentLocale = localesToUse.get(i);
                    if (availableLocales.contains(currentLocale)) {
                        chosenLocales.add(currentLocale);
                    }
                }
            }
        } catch (Exception e) {
            Log.e(LOG_TAG, "Error occurred while retrieving usable locales", e);
        }
        return chosenLocales;
    }

    private JSONObject getMessageFromMessageJson(String messageName, List<String> localeChain) {
        try {
            for(int i = 0; i < localeChain.size(); i++) {
                String locale = localeChain.get(i);
                if (memoizedJsonContents.get(locale) == null) {
                    String fileName = "www/_locales/" + locale + "/messages.json";
                    JSONObject contents = getAssetContents(fileName);
                    // convert all fields to lower case to check case insensitively
                    contents = toLowerCaseMessage(contents);
                    memoizedJsonContents.put(locale, contents);
                }
                JSONObject ret = memoizedJsonContents.get(locale).optJSONObject(messageName);
                if(ret != null) {
                    return ret;
                }
            }
        } catch (Exception e) {
            Log.e(LOG_TAG, "Error occurred while reading through the messages.json files", e);
        }
        return null;
    }

    private static List<String> toStringList(JSONArray array) throws JSONException {
        if (array == null) {
            return null;
        }
        List<String> list = new ArrayList<String>();

        for (int i = 0, l = array.length(); i < l; i++) {
            list.add(array.get(i).toString());
        }

        return list;
    }

    private JSONObject toLowerCaseMessage(JSONObject contents) throws JSONException {
        List<String> messages = toStringList(contents.names());
        for(String message : messages) {
            JSONObject value = contents.getJSONObject(message);
            contents.remove(message);
            contents.put(message.toLowerCase(), value);
        }
        return contents;
    }

    private String getDefaultLocale() throws JSONException, IOException {
        JSONObject manifestContents = getAssetContents("www/manifest.json");
        String defaultLocale = manifestContents.optString("default_locale");
        if(defaultLocale == null) {
            throw new IllegalArgumentException("Default Locale not defined");
        }
        return defaultLocale;
    }

    private JSONObject getAssetContents(String assetName) throws IOException, JSONException {
        Uri messagesUri = webView.getResourceApi().remapUri(Uri.parse("file:///android_asset/" + assetName));
        OpenForReadResult offr = webView.getResourceApi().openForRead(messagesUri);
        //Small trick to get the scanner to pull the entire input stream in one go
        Scanner s = new java.util.Scanner(offr.inputStream).useDelimiter("\\A");
        String contents = s.hasNext() ? s.next() : "";
        s.close();
        return new JSONObject(contents);
    }
}
