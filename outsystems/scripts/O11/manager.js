define("OneSignalPluginManager", ["exports"], function(exports) { 
    
  var notificationReceivedCallback = [];
  var notificationOpenedCallback = [];
  
  /**
   * Public delegate for OneSignal's handleNotificationReceived
   */    
  function notificationReceivedDelegate(jsonData) {
      notificationReceivedCallback.forEach(function(callback){
          callback.call(undefined, jsonData);
      });
  }
  
  /**
   * Public delegate for OneSignal's handleNotificationOpened
   */
  function notificationOpenedDelegate(jsonData) {
      notificationOpenedCallback.forEach(function(callback){
          callback.call(undefined, jsonData);
      });
  }
  
  /**
   * Sets the current callback for OneSignal's Notification Received events. 
   */
  function setNotificationReceivedCallback(callback) {
      notificationReceivedCallback.push(callback);
  }
  
  /**
   * Sets the current callback for OneSignal's Notification Opened events. 
   */
  function setNotificationOpenedCallback(callback) {
      notificationOpenedCallback.push(callback);
  }
  
  /**
   * Unregister the old callback of OneSignal's Notification Received 
   */
  function unregisterReceivedCallback(callback) {
      var cbIndex = notificationReceivedCallback.indexOf(callback);
      if(cbIndex >= 0) {
          notificationReceivedCallback[cbIndex] = undefined;
          delete notificationReceivedCallback[cbIndex];
      }
  }
  
  /**
   * Unregister the old callback of OneSignal's Notification Opened
   */
  function unregisterOpenedCallback(callback) {
      var cbIndex = notificationOpenedCallback.indexOf(callback);
      if(cbIndex >= 0) {
          notificationOpenedCallback[cbIndex] = undefined;
          delete notificationOpenedCallback[cbIndex];
      }
  }
  
  exports.notificationReceivedDelegate = notificationReceivedDelegate;
  exports.notificationOpenedDelegate = notificationOpenedDelegate;
  
  exports.setNotificationReceivedCallback = setNotificationReceivedCallback;
  exports.setNotificationOpenedCallback = setNotificationOpenedCallback;
  
  exports.unregisterReceivedCallback = unregisterReceivedCallback;
  exports.unregisterOpenedCallback = unregisterOpenedCallback;
});