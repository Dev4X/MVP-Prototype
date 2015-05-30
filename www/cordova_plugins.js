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
        "file": "plugins/cordova-plugin-chrome-apps-bootstrap/api/helpers/ChromeExtensionURLs.android.js",
        "id": "cordova-plugin-chrome-apps-bootstrap.helpers.ChromeExtensionURLs"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.hutchind.cordova.plugins.launcher": "0.2.2",
    "org.apache.cordova.device": "0.2.13",
    "org.apache.cordova.splashscreen": "0.3.5",
    "org.chromium.i18n": "2.0.0",
    "cordova-plugin-chrome-apps-bootstrap": "2.0.8-dev"
}
// BOTTOM OF METADATA
});