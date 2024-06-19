require(["PluginManager"], function(module){
    module.destroyScope(`OneSignalPlugin_${$parameters.Token}`);
    $resolve();
});