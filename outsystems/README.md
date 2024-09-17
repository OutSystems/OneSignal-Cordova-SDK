# OutSystems Wrapper


Welcome! Here lies the code related to the OutSystems Wrapper *aka* the JavaScript code that is present on the OutSystems Plugin, downloadable from Forge.

## Structure

In an OutSystems Plugin, there's two ways to host JavaScript code: JavaScript Nodes and script files.

* `nodes` holds the JavaScript code inside a OutSystems Javascript node, with the same name
* `scripts` JavaScript files that the plugin imports

And lastly, but not least, the wrapper differs depending on the platform (ODC vs O11) and, as such, so does this folder.

## How is it used

This repository holds the code related to the OneSignal Plugin's module, `OneSignal_Manager`. Up until 2024, this manager was counting on the existence of RequireJS in an OutSystems' App Runtime to create this module. Since RequireJS will no longer be part of OutSystems' Runtime, `OneSignal_Manager` needed to be updated. The approach was to create an UMD module, available to any plugin/app that imports `OneSignal_Manager`.

Additionally, this module assumes the Common Plugin's `PluginManager` is imported in the app. 