console.log('=================================');
console.log('      demo-demo-linkdevelop      ');
console.log('=================================');

var client = require('deviceShadow');

// 从linkdevelop.aliyun.com获取设备三元组
client.bindDevID({
  productKey: '##替换productKey##',
  deviceName: '##替换deviceName##',
  deviceSecret: '##替换deviceSecret##'
});

client.start(function(err) {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
    client.addDevSetPropertyNotify('LightStatus', function(value) {
      console.log('receive: ' + value);
      client.postProperty('LightStatus', 1);
    });
  }
});