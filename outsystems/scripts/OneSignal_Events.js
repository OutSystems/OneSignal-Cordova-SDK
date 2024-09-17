/**
 * Due to the nature of OutSystems Screens' & Blocks' Lifecyle
 * We keep track of the active callbacks (valid client actions) via this window object
 */
(function() {

    var callbacks = {
        onDispatchNotificationOpened: null,
        onDispatchNotificationReceived: null
    }
    
    var token;
    
    var OneSignalEventsSync = {
         registerCallbacks: function (onDispatchNotificationReceived, onDispatchNotificationOpened){
            token = (new Date()).getTime().toString();    

            callbacks.onDispatchNotificationReceived = onDispatchNotificationReceived;
            callbacks.onDispatchNotificationOpened = onDispatchNotificationOpened;

            return token
        },

         unregisterCallbacks: function (previousToken){
            if(token === previousToken) {
                callbacks = null;
            }
        },

         triggerOnDispatchNotificationReceived: function (json){
            if(callbacks && callbacks.onDispatchNotificationReceived) {
                callbacks.onDispatchNotificationReceived(JSON.stringify(json));
            }
        },

         triggerOnDispatchNotificationOpened: function (json){
            if(callbacks && callbacks.onDispatchNotificationOpened) {
                callbacks.onDispatchNotificationOpened(JSON.stringify(json));
            }
        }

    }

    if (!window.oneSignalEvents) {
        window.oneSignalEvents = OneSignalEventsSync;
    }    
})();
