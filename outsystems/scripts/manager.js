(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.OSOneSignal = {}));
})(this, function(exports2) {
  "use strict";var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);

  var _notificationReceivedCallback, _notificationOpenedCallback;
  class OneSignalManagerClass {
    constructor() {
      __privateAdd(this, _notificationReceivedCallback, []);
      __privateAdd(this, _notificationOpenedCallback, []);
    }
    /**
     * Public delegate for OneSignal's handleNotificationReceived
     */
    notificationReceivedDelegate(jsonData) {
      __privateGet(this, _notificationReceivedCallback).forEach(function(callback) {
        callback.call(void 0, jsonData);
      });
    }
    /**
     * Public delegate for OneSignal's handleNotificationOpened
     */
    notificationOpenedDelegate(jsonData) {
      __privateGet(this, _notificationOpenedCallback).forEach(function(callback) {
        callback.call(void 0, jsonData);
      });
    }
    /**
     * Sets the current callback for OneSignal's Notification Received events. 
     */
    setNotificationReceivedCallback(callback) {
      __privateGet(this, _notificationReceivedCallback).push(callback);
    }
    /**
     * Sets the current callback for OneSignal's Notification Opened events. 
     */
    setNotificationOpenedCallback(callback) {
      __privateGet(this, _notificationOpenedCallback).push(callback);
    }
    /**
     * Unregister the old callback of OneSignal's Notification Received 
     */
    unregisterReceivedCallback(callback) {
      var cbIndex = __privateGet(this, _notificationReceivedCallback).indexOf(callback);
      if (cbIndex >= 0) {
        delete __privateGet(this, _notificationReceivedCallback)[cbIndex];
      }
    }
    /**
     * Unregister the old callback of OneSignal's Notification Opened
     */
    unregisterOpenedCallback(callback) {
      var cbIndex = __privateGet(this, _notificationOpenedCallback).indexOf(callback);
      if (cbIndex >= 0) {
        delete __privateGet(this, _notificationOpenedCallback)[cbIndex];
      }
    }
  }
  _notificationReceivedCallback = new WeakMap();
  _notificationOpenedCallback = new WeakMap();
  const Manager = new OneSignalManagerClass();
  exports2.Manager = Manager;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
