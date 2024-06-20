import { OneSignalCallback } from './definitions';

/**
 * Public delegate for OneSignal's handleNotificationReceived
 */
export declare function notificationReceivedDelegate(jsonData: any): void;
/**
 * Public delegate for OneSignal's handleNotificationOpened
 */
export declare function notificationOpenedDelegate(jsonData: any): void;
/**
 * Sets the current callback for OneSignal's Notification Received events.
 */
export declare function setNotificationReceivedCallback(callback: OneSignalCallback): void;
/**
 * Sets the current callback for OneSignal's Notification Opened events.
 */
export declare function setNotificationOpenedCallback(callback: OneSignalCallback): void;
/**
 * Unregister the old callback of OneSignal's Notification Received
 */
export declare function unregisterReceivedCallback(callback: OneSignalCallback): void;
/**
 * Unregister the old callback of OneSignal's Notification Opened
 */
export declare function unregisterOpenedCallback(callback: OneSignalCallback): void;
