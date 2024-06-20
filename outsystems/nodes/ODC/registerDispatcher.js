var onReady = function(scope) {
    console.log("onReady scope");
    scope.handleNotificationOpened = scope.newCallback(function(jsonData) {
        try{
            console.log("handleNotificationOpened");
            window.oneSignalEvents.triggerOnDispatchNotificationOpened(jsonData);
        } catch(err) {
            console.error(err);
        }
    });
    
    scope.handleNotificationReceived = scope.newCallback(function(jsonData) {
        try{
            console.log("handleNotificationReceived");
            window.oneSignalEvents.triggerOnDispatchNotificationReceived(jsonData);
        } catch(err) {
            console.error(err);
        }
    });
    
    OSOneSignal.setNotificationReceivedCallback(scope.handleNotificationReceived);
    OSOneSignal.setNotificationOpenedCallback(scope.handleNotificationOpened);

}

var onDestroy = function(scope) {
    console.log("onDestroy scope");
    OSOneSignal.unregisterReceivedCallback(scope.handleNotificationReceived);
    OSOneSignal.unregisterOpenedCallback(scope.handleNotificationOpened);
}

OSCommonPlugin.PluginManager.createScope(`OneSignalPlugin_${$parameters.Token}`,  onReady, onDestroy);