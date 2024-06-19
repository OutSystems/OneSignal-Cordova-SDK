require(["PluginManager","OneSignalPluginManager"], function(module, oneSignalMgr){
    
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
        
        oneSignalMgr.setNotificationReceivedCallback(scope.handleNotificationReceived);
        oneSignalMgr.setNotificationOpenedCallback(scope.handleNotificationOpened);

    }
    
    var onDestroy = function(scope) {
        console.log("onDestroy scope");
        oneSignalMgr.unregisterReceivedCallback(scope.handleNotificationReceived);
        oneSignalMgr.unregisterOpenedCallback(scope.handleNotificationOpened);
    }

    module.createScope(`OneSignalPlugin_${$parameters.Token}`,  onReady, onDestroy);
    
    $resolve();
});