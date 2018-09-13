# SPK

###Driver功能: DAC驱动蜂鸣器


###硬件资源

1.Esp32开发板;

2.蜂鸣器模块;

3.接线

蜂鸣器模块 +引脚接ESP32 25引脚；

蜂鸣器模块 -引脚接ESP32 GND引脚；


## Driver配置
esp32Kit示范：

```
{
    "spk.dac1":{
      "type":"DAC",
      "port":1,
      "voltage":255
    }
}

```

###API说明
```
class：spk
param：@spk_id  dac端口信息，对应board.json中的spk.dac1;
method:
      once() 驱动一次蜂鸣器

```


## 示例

每间隔5s驱动一次蜂鸣器:

```
var spk = require('spk/src/index.js');
var handle = new spk('spk.dac1');
var index = 0;
setInterval(function() {
  console.log('speaker bleep every 5 senconds')
  handle.once();
}, 5000);

```






