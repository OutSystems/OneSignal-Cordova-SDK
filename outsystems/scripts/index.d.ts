import { OneSignalCallback } from './definitions';

declare class OneSignalManagerClass {
    #private;
    /**
     * Public delegate for OneSignal's handleNotificationReceived
     */
    notificationReceivedDelegate(jsonData: any): void;
    /**
     * Public delegate for OneSignal's handleNotificationOpened
     */
    notificationOpenedDelegate(jsonData: any): void;
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
export declare const Manager: OneSignalManagerClass;
export {};
