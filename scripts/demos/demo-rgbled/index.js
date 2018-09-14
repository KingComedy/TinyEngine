console.log('=================================');
console.log('           demo-rgbled           ');
console.log('=================================');

var rbgled = require('rgbled');
var led = new rbgled('rgbled.r', 'rgbled.g', 'rgbled.b');

var i = 0
setInterval(function() {
  switch (i) {
    case 0:
      led.red();
      console.log("点亮红灯");
      break;

    case 1:
      led.blue();
      console.log("点亮蓝灯");
      break;

    case 2:
      led.green();
      console.log("点亮绿灯");
      break;

    default:
      break;
  }

  i = (i + 1) % 3;
}, 1000);