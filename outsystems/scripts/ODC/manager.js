(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.OSOneSignal = {}));
})(this, function(exports2) {
  "use strict";
  let notificationReceivedCallback = [];
  let notificationOpenedCallback = [];
  function notificationReceivedDelegate(jsonData) {
    notificationReceivedCallback.forEach(function(callback) {
      callback(jsonData);
    });
  }
  function notificationOpenedDelegate(jsonData) {
    notificationOpenedCallback.forEach(function(callback) {
      callback(jsonData);
    });
  }
  function setNotificationReceivedCallback(callback) {
    notificationReceivedCallback.push(callback);
  }
  function setNotificationOpenedCallback(callback) {
    notificationOpenedCallback.push(callback);
  }
  function unregisterReceivedCallback(callback) {
    let cbIndex = notificationReceivedCallback.indexOf(callback);
    if (cbIndex >= 0) {
      notificationReceivedCallback.splice(cbIndex, 1);
    }
  }
  function unregisterOpenedCallback(callback) {
    let cbIndex = notificationOpenedCallback.indexOf(callback);
    if (cbIndex >= 0) {
      notificationOpenedCallback.splice(cbIndex, 1);
    }
  }
  exports2.notificationOpenedDelegate = notificationOpenedDelegate;
  exports2.notificationReceivedDelegate = notificationReceivedDelegate;
  exports2.setNotificationOpenedCallback = setNotificationOpenedCallback;
  exports2.setNotificationReceivedCallback = setNotificationReceivedCallback;
  exports2.unregisterOpenedCallback = unregisterOpenedCallback;
  exports2.unregisterReceivedCallback = unregisterReceivedCallback;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
