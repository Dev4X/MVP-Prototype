//alert("Alert!")

//angular.module('Dev4XProto', ['ngCordova'])

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	//alert("Ready")
	if (window.cordova) {
		//alert("Cordova");
	}
		
	//There no keyboard plugin so commented this code as it was breaking app: Hiren
    /*if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }*/
}

var packageName = '';//var to store package name.

//This function is called from html page by onclick event
function launchApp(_packageName){
    packageName = _packageName;
    //first check if app is available
    window.plugins.launcher.canLaunch({packageName: _packageName}, successCallback, errorCallback);
}

function successCallback(){
	//launch the app with package name;
	window.plugins.launcher.launch({packageName: packageName}, appLaunchSuccessCallback, appLaunchErrorCallback);
}

function errorCallback(){
	alert('Application not found');
}

function appLaunchSuccessCallback(){
	//app launched. do the next steps
}

function appLaunchErrorCallback(){
	alert('Error in launching app');
}

function translatePage(){
    var nodes = document.querySelectorAll('.i18n');
    for(var i=0 ;i<nodes.length;i++){
        var node = nodes[i];
        node.innerHTML = chrome.i18n.getMessage(node.getAttribute('data-i18n'));
    }
}