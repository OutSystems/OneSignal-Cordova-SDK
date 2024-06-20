import { OneSignalCallback } from "./definitions";

var notificationReceivedCallback: OneSignalCallback[] = [];
var notificationOpenedCallback: OneSignalCallback[] = [];

/**
 * Public delegate for OneSignal's handleNotificationReceived
 */    
export function notificationReceivedDelegate(jsonData: any) {
    notificationReceivedCallback.forEach(function(callback:OneSignalCallback){
        callback(jsonData);
    });
}

/**
 * Public delegate for OneSignal's handleNotificationOpened
 */
export function notificationOpenedDelegate(jsonData: any) {
    notificationOpenedCallback.forEach(function(callback:OneSignalCallback){
        callback(jsonData);
    });
}

/**
 * Sets the current callback for OneSignal's Notification Received events. 
 */
export function setNotificationReceivedCallback(callback:OneSignalCallback) {
    notificationReceivedCallback.push(callback);
}

/**
 * Sets the current callback for OneSignal's Notification Opened events. 
 */
export function setNotificationOpenedCallback(callback:OneSignalCallback) {
    notificationOpenedCallback.push(callback);
}

/**
 * Unregister the old callback of OneSignal's Notification Received 
 */
export function unregisterReceivedCallback(callback:OneSignalCallback) {
    var cbIndex = notificationReceivedCallback.indexOf(callback);
    if(cbIndex >= 0) {
        //notificationReceivedCallback[cbIndex] = undefined;
        delete notificationReceivedCallback[cbIndex];
    }
}

/**
 * Unregister the old callback of OneSignal's Notification Opened
 */
export function unregisterOpenedCallback(callback:OneSignalCallback) {
    var cbIndex = notificationOpenedCallback.indexOf(callback);
    if(cbIndex >= 0) {
        //notificationOpenedCallback[cbIndex] = undefined;
        delete notificationOpenedCallback[cbIndex];
    }

}