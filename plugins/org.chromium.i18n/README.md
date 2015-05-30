# chrome.i18n Plugin

This plugin allows apps to present localised content to users according to the language / locale settings on their device.

## Status

Stable on Android and iOS.

## Reference

The API reference is [here](https://developer.chrome.com/apps/i18n.html).

## Usage (with a Chrome Apps)

To use the plugin, create a `_locales` directory within your web assets directory. Inside this, create a directory for each locale for which you can supply translations. See the API reference above for the format of the files to place in those directories, and for the documentation of functions in the chrome.i18n namespace.

## Usage (with a vanilla Apache Cordova App)

This plugin can be used by Apache Cordova applications, but some of the automated installation steps must be done manually:

  * The specific locale directories within `CCA_locales` must be lower-cased, with an underscores separating the country code from the language code, if it is present. For example, `en` and `en_us` will be read as locale directories, but `en-us`, `en_US` and `en-US` will not.

## Limitations

* On iOS, placeholders within manifest.json and .css files are not replaced (if you want this, file an issue!)

# Release Notes
## 2.0.0 (Mar 24, 2015)
* `CCA_locales` -> `_locales` now that we build with gradle
* Now works better in CADT (but paths need to be lower-case and use `_`s rather than `-`s)

## 1.1.1 (Mar 18, 2015)
* Improved performance of CSS substitutions

## 1.1.0 (Mar 17, 2015)
* Fix to work with non-`file:///android_asset` start URLs

## 1.0.3 (Jan 27, 2015)
* Change from using okhttp's Base64 to Android's Base64

## 1.0.2 (October 21, 2014)
- Documentation updates.

## 1.0.1 (March 10, 2014)
- Fix incorrect file: URL building in ChromeI18n.java
