// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "onesignal-cordova-plugin",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "onesignal-cordova-plugin",
            targets: ["onesignal-cordova-plugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(
            url: "https://github.com/OutSystems/OneSignal-iOS-SDK.git",
            exact: "2.16.7-outsystems.2")
    ],
    targets: [
        .target(
            name: "onesignal-cordova-plugin",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "OneSignal", package: "OneSignal-iOS-SDK")
            ],
            path: "src/ios",
            publicHeadersPath: ".")
    ]
)
