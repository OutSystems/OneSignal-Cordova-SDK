import { OneSignalCallback } from './definitions';

declare class OneSignalManagerClass {
    #private;
    /**
     * Public delegate for OneSignal's handleNotificationReceived
     */
    notificationReceivedDelegate(jsonData: JSON): void;
    /**
     * Public delegate for OneSignal's handleNotificationOpened
     */
    notificationOpenedDelegate(jsonData: JSON): void;
    /**
     * Sets the current callback for OneSignal's Notification Received events.
     */
    setNotificationReceivedCallback(callback: OneSignalCallback): void;
    /**
     * Sets the current callback for OneSignal's Notification Opened events.
     */
    setNotificationOpenedCallback(callback: OneSignalCallback): void;
    /**
     * Unregister the old callback of OneSignal's Notification Received
     */
    unregisterReceivedCallback(callback: OneSignalCallback): void;
    /**
     * Unregister the old callback of OneSignal's Notification Opened
     */
    unregisterOpenedCallback(callback: OneSignalCallback): void;
}
export declare const OneSignalPluginManager: OneSignalManagerClass;
export {};
