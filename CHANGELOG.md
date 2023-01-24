# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Feat
- Replaces dependency to Jitpack with dependency to Azure repo [RNMT-2036](https://outsystemsrd.atlassian.net/browse/RNMT-2124)

## [2.11.1-OS5]
### Fixes
- Removes jcenter from Gradle by updating OneSignal-Android-SDK version [RNMT-2036](https://outsystemsrd.atlassian.net/browse/RNMT-2036)

## [2.11.1-OS4]
### Fixes
- Change OneSignal-Android-SDK to point to newer version 3.15.5-OS2 [RNMT-1495](https://outsystemsrd.atlassian.net/browse/RNMT-1495)

## [2.11.0-OS3]
### Changes
- New plugin release to include prompt for notifications permissions on Android.

## [2.11.0-OS2]
### Changes
- New plugin release to include metadata tag for MABS 7.2.0 compatibility

## [2.11.0-OS]
### Changes
- Update android library to work with android 12 [RMET-824] (https://outsystemsrd.atlassian.net/browse/RMET-824) 

## [2.11.0-OS]
### Changes
- Merge upstream (2.11.0) into OutSystems branch
- Change OneSignal-Android-SDK to point to newer version 3.15.0-OS [RMET-12](https://outsystemsrd.atlassian.net/browse/RMET-12)

## [2.6.0-OS2] - 2019-12-04
### Additions
- Add plugin action to remove SubscriptionObserver [RNMT-3623](https://outsystemsrd.atlassian.net/browse/RNMT-3623)

## [2.6.0-OS1] - 2019-10-10
### Fixes
- Change OneSignal-Android-SDK to point to newer version 3.11.4-OS [RNMT-3314](https://outsystemsrd.atlassian.net/browse/RNMT-3314)
- Change android support versions dependency to fallback to version 26.1.+ when compileSDK is inferior to 28 [RNMT-3266](https://outsystemsrd.atlassian.net/browse/RNMT-3266)

## [2.6.0-OS] 
### Changes
- Merge upstream (2.6.0) into OutSystems branch


## [2.4.5-OS3] - 2019-09-10
### Fixes
- Fixed compatibility with plugins that make use of Google Services [
RNMT-3264](https://outsystemsrd.atlassian.net/browse/RNMT-3264)

## [2.4.5-OS2] - 2019-04-12
### Changes
- **BREAKING:** Update used version of Android support libraries to 28 [RNMT-2726](https://outsystemsrd.atlassian.net/browse/RNMT-2726)
- Update usage of compile to implementation in gradle dependencies [RNMT-2655](https://outsystemsrd.atlassian.net/browse/RNMT-2655)

## [2.4.5-OS1] - 2019-03-26
### Additions
- Update prepare_drawables hook to compute resource paths based on cordova engine from project [RNMT-2651](https://outsystemsrd.atlassian.net/browse/RNMT-2651)

## [2.4.5-OS] - 2018-12-06
### Changes
- Merge upstream (2.4.5) into OutSystems branch

[Unreleased]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.6.0-OS2...HEAD
[2.6.0-OS2]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.6.0-OS1...2.6.0-OS2
[2.6.0-OS1]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.6.0-OS...2.6.0-OS1
[2.6.0-OS]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.4.5-OS3...2.6.0-OS
[2.4.5-OS3]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.4.5-OS2...2.4.5-OS3
[2.4.5-OS2]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.4.5-OS1...2.4.5-OS2
[2.4.5-OS1]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.4.5-OS...2.4.5-OS1
[2.4.5-OS]: https://github.com/OutSystems/OneSignal-Cordova-SDK/compare/2.3.2-OS2...2.4.5-OS
