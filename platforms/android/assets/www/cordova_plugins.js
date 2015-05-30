cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.hutchind.cordova.plugins.launcher/www/Launcher.js",
        "id": "com.hutchind.cordova.plugins.launcher.Launcher",
        "clobbers": [
            "plugins.launcher"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.chromium.i18n/i18n.js",
        "id": "org.chromium.i18n.I18n",
        "clobbers": [
            "chrome.i18n"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/app/window.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.app.window",
        "clobbers": [
            "chrome.app.window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/mobile.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.mobile.impl",
        "clobbers": [
            "chrome.mobile.impl"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/helpers/ChromeExtensionURLs.android.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.helpers.ChromeExtensionURLs"
    },
    {
        "file": "plugins/org.chromium.common/events.js",
        "id": "org.chromium.common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/org.chromium.common/errors.js",
        "id": "org.chromium.common.errors"
    },
    {
        "file": "plugins/org.chromium.common/stubs.js",
        "id": "org.chromium.common.stubs"
    },
    {
        "file": "plugins/org.chromium.common/helpers.js",
        "id": "org.chromium.common.helpers"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
        "id": "cordova-plugin-chrome-apps-common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
        "id": "cordova-plugin-chrome-apps-common.errors"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
        "id": "cordova-plugin-chrome-apps-common.stubs"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
        "id": "cordova-plugin-chrome-apps-common.helpers"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
        "id": "cordova-plugin-chrome-apps-storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/app/runtime.js",
        "id": "cordova-plugin-chrome-apps-runtime.app.runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/api/runtime.js",
        "id": "cordova-plugin-chrome-apps-runtime.runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/sha256.js",
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-sha256"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-runtime/lib/CryptoJS/enc-base64-min.js",
        "id": "cordova-plugin-chrome-apps-runtime.CryptoJS-enc-base64-min"
    },
    {
        "file": "plugins/cordova-plugin-background-app/backgroundapp.js",
        "id": "cordova-plugin-background-app.backgroundapp",
        "clobbers": [
            "cordova.backgroundapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.hutchind.cordova.plugins.launcher": "0.2.2",
    "org.apache.cordova.device": "0.2.13",
    "org.apache.cordova.splashscreen": "0.3.5",
    "org.chromium.i18n": "2.0.0",
    "cordova-plugin-chrome-apps-bootstrap": "2.0.8-dev",
    "org.chromium.common": "1.0.6",
    "cordova-plugin-chrome-apps-common": "1.0.7",
    "cordova-plugin-chrome-apps-storage": "1.0.4",
    "cordova-plugin-chrome-apps-runtime": "1.1.1",
    "cordova-plugin-background-app": "2.0.2"
}
// BOTTOM OF METADATA
});