var builder = window.plugins.OneSignal.startInit($parameters.ApiKey);
builder.handleNotificationReceived(OSOneSignal.Manager.notificationReceivedDelegate);
builder.handleNotificationOpened(OSOneSignal.Manager.notificationOpenedDelegate);
builder.inFocusDisplaying($parameters.InFocusDisplayOption);

// Set your iOS Settings
var iosSettings = {};
iosSettings["kOSSettingsKeyAutoPrompt"] = true;
iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

builder.iOSSettings(iosSettings);

builder.endInit();