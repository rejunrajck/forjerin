cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.jaeger.Html5Video/www/Html5Video.js",
        "id": "com.jaeger.Html5Video.Html5Video",
        "clobbers": [
            "plugins.html5Video"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jaeger.Html5Video": "1.2.1",
    "org.apache.cordova.device": "0.2.14-dev"
}
// BOTTOM OF METADATA
});