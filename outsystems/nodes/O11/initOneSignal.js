require(["OneSignalPluginManager"], function(oneSignalMgr){
    var builder = window.plugins.OneSignal.startInit($parameters.ApiKey);
    builder.handleNotificationReceived(oneSignalMgr.notificationReceivedDelegate);
    builder.handleNotificationOpened(oneSignalMgr.notificationOpenedDelegate);
    builder.inFocusDisplaying($parameters.InFocusDisplayOption);
    
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    
    builder.iOSSettings(iosSettings);
    
    builder.endInit();
    
    $resolve();
    
});