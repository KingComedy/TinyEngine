console.log("=================================");
console.log("         demo-miio-scene         ");
console.log("=================================");

// miio 为 Natvie Modules，按照小米设备接入协议实现的扩展对象
// 如下设备的Did，token需要填入真实设备的信息，具体获取方法请参考README
var lightDevice;
var xiaoMiMotionSentorDid = '158d000208e44a';  //小米人体感应器的deviceID
var xiaoMiGatewayDid = 87383843;   //小米网关的deviceID
var xiaoMiLightDid = 61632282;   //小米WIFI灯的deviceID
var xiaoMiGatewayToken = "2e7605a92dedd89171a9aa761ba74adb";  //小米网关的Token
var xiaoMiLightToken = "ae65d127852df5c2b86f38b6878e8706";  //小米WIFI灯的Token
var WiFiSSID = 'xxx'; //小米设备连接的WiFi热点名称
var WiFiPasswd = 'xxxx'; //小米设备连接的WiFi热点密码

// 控制开灯
function lightOn() {
  console.log("lightOn");
  if (lightDevice) {
    miio.deviceControl(lightDevice, "set_power", '["on"]');
  }
}

// 控制开关
function lightOff() {
  console.log("lightOff");
  if (lightDevice) {
    miio.deviceControl(lightDevice, "set_power", '["off"]');
  }
}

function setupLight(host) {
  // 创建小米灯设备，如何获取小米设备的token，
  //其具体方法和步骤请见：
  lightDevice = miio.createDevice(
    host,
    xiaoMiLightToken
  );

  // 初次启动时，第一次关闭小米灯
  lightOff();
}

function setupGateway(host) {
  // 创建小米 Zigbee 网关设备：如何获取小米设备的token，
  //其具体方法和步骤请见：https://lark.alipay.com/tinyenginedev/developer-documentation/wbm6d5
  var gatewayDevice = miio.createDevice(
    host,
    xiaoMiGatewayToken
  );

  var motionSensorId = null;
  var timeout = null;
  // 注册监听事件，回调函数
  miio.deviceOnEvent(gatewayDevice, function (event) {
    console.log("gateway receive event:"+event);

    var obj = JSON.parse(event);

    var open = false;

    if (obj.data) {
      open = JSON.parse(obj.data).status === "motion";
    }

    console.log('hellosid'+obj.sid);
    //如果人体感应器检测到人，则开灯，如果一分钟没有感应到人存在，则关灯
    if (obj.cmd === "report" && obj.sid === xiaoMiMotionSentorDid && open) {
      lightOn();
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      //每分钟接收一次
      timeout = setTimeout(function () {
        lightOff();
      }, 60 * 1000);
    }
  });

  // 获取小米网关的设备列表
  var device_list = miio.deviceControl(
    gatewayDevice,
    "get_device_prop",
    '["lumi.0","device_list"]'
  );
  console.log("device list: " + device_list);
}

WIFI.connect(WiFiSSID, WiFiPasswd,function(){
  var ip = WIFI.getip();
  console.log('ip=', ip);
  miio.discover(20, function (host, deviceId) {
    console.log('discovered device, host: ' + host + ', deviceId: ' + deviceId);
    if (deviceId === xiaoMiLightDid) {
      setupLight(host);
    } else if (deviceId === xiaoMiGatewayDid) {
      setupGateway(host);
    }
  });
});


