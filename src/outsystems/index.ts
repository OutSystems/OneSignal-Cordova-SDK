import { OneSignalCallback } from "./definitions";

let notificationReceivedCallback: OneSignalCallback[] = [];
let notificationOpenedCallback: OneSignalCallback[] = [];

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
    let cbIndex = notificationReceivedCallback.indexOf(callback);
    if(cbIndex >= 0) {
        notificationReceivedCallback.splice(cbIndex, 1);
    }
}

/**
 * Unregister the old callback of OneSignal's Notification Opened
 */
export function unregisterOpenedCallback(callback:OneSignalCallback) {
    let cbIndex = notificationOpenedCallback.indexOf(callback);
    if(cbIndex >= 0) {
        notificationOpenedCallback.splice(cbIndex, 1);
    }

}