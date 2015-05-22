alert("Alert!")

//angular.module('Dev4XProto', ['ngCordova'])

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	alert("Ready")
	if (window.cordova) {
		alert("Cordova");
		}
		
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
	var successCallback = function(data) {
        alert("Success!");
        // if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
    };
    var errorCallback = function(errMsg) {
        alert("Error! " + errMsg);
    }
	
	window.plugins.launcher.canLaunch({packageName:'com.facebook.katana'}, successCallback, errorCallback);
}
