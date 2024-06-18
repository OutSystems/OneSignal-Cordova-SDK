import { OneSignalCallback } from "./definitions";

class OneSignalManagerClass {
    
    #notificationReceivedCallback: OneSignalCallback[] = [];
    #notificationOpenedCallback: OneSignalCallback[] = [];

    /**
     * Public delegate for OneSignal's handleNotificationReceived
     */    
    notificationReceivedDelegate(jsonData: any) {        
        this.#notificationReceivedCallback.forEach(function(callback:OneSignalCallback){
            callback.call(undefined, jsonData);
        });
    }

    /**
     * Public delegate for OneSignal's handleNotificationOpened
     */
    notificationOpenedDelegate(jsonData: any) {
        this.#notificationOpenedCallback.forEach(function(callback:OneSignalCallback){
            callback.call(undefined, jsonData);
        });
    }

    /**
     * Sets the current callback for OneSignal's Notification Received events. 
     */
    setNotificationReceivedCallback(callback:OneSignalCallback) {
        this.#notificationReceivedCallback.push(callback);
    }

    /**
     * Sets the current callback for OneSignal's Notification Opened events. 
     */
    setNotificationOpenedCallback(callback:OneSignalCallback) {
        this.#notificationOpenedCallback.push(callback);
    }

    /**
     * Unregister the old callback of OneSignal's Notification Received 
     */
    unregisterReceivedCallback(callback:OneSignalCallback) {
        var cbIndex = this.#notificationReceivedCallback.indexOf(callback);
        if(cbIndex >= 0) {
            //this.#notificationReceivedCallback[cbIndex] = undefined;
            delete this.#notificationReceivedCallback[cbIndex];
        }
    }

    /**
     * Unregister the old callback of OneSignal's Notification Opened
     */
    unregisterOpenedCallback(callback:OneSignalCallback) {
        var cbIndex = this.#notificationOpenedCallback.indexOf(callback);
        if(cbIndex >= 0) {
            //this.#notificationOpenedCallback[cbIndex] = undefined;
            delete this.#notificationOpenedCallback[cbIndex];
        }
    }
}

export const Manager = new OneSignalManagerClass();