# HXD091


###Driver功能: 红外模块

hxd091是一款红外发送和学习模块。


###硬件连接

####硬件资源
1.esp32Kit开发板

2.hxd091模块;

####接线
 hxd091模块 SCL 引脚接 esp32Kit 25引脚；
 
 hxd091模块 SDA 引脚接 esp32Kit 26引脚；
 
 hxd091模块 BUSY引脚接 esp32Kit 21引脚；
 
 hxd091模块 VCC 引脚接 esp32Kit VCC引脚；
 
 hxd091模块 GND 引脚接 esp32Kit GND引脚；
 
###Driver配置

esp32Kit示范：

```
{
  "hxd019.sda":{
    "type":"GPIO",
    "port":26,
    "dir": 3,
    "pull": 1
  },
  "hxd019.scl":{
    "type":"GPIO",
    "port":25,
    "dir": 3,
    "pull": 1
  },
  "hxd019.busy":{
    "type":"GPIO",
    "port":21,
    "dir": 1,
    "pull": 1
  }
}

```

###API说明
```
class：hxd091
param：@scl_id  scl引脚ID，对应board.json中的hxd019.scl;
       @sda_id  sda引脚ID，对应board.json中的hxd019.sda;
       @busy_id busy引脚ID，对应board.json中的hxd019.busy;
method:
      send()  发送红外码
      learn() 学习红外码
```

###示例

学习红外码并发送：

```
var hxd091 = require('hxd091/src/index.js');
var handle = new hxd091('hxd019.scl','hxd019.sda','hxd019.busy');

var getVal = function(){
  var val = handle.learn();
  if(null == val){
    console.log('read wrong!');
    return;
  }
  handle.send(val);
}
var t = setInterval(getVal, 2000);

```