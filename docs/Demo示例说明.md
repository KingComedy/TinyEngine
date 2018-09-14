# Demo示例说明

这里介绍在LinkDevelop页面展示的三个代表性Demo，分别为 demo-helloworld, demo-rgbled, demo-linkdevelop。

通过这三个demo的使用，使开发者能快速上手嵌入式JavaScript开发。



## demo-helloworld示例

* 功能说明：这是一个最简单的示例，实现在输出 helloworld 字符的功能。

* 如何使用：

  * 进入嵌入式应用工作台，点击 demo-helloworld即可打开该demo项目。

  * 该应用可以运行在模拟器上面，即不用真实的嵌入式硬件设备。

  * 点击 “连接“， 选择”Tiny模拟器“，最后点击“运行”。

  * 运行成功后，可以在 嵌入式应用工作台页面的 右侧Console栏里面看到 “helloworld” 和“每隔三秒的

    “app running”打印。

* 代码解析：

  * console.log为tinyengine js语法的log输出方法，类似于C语言的printf。

  * setInterval为启动一个定时器，定时器的功能是每隔三秒输出一个"app running"。

  * 更多API的使用方法请查看API文档。

    

## demo-rgbled

* 功能说明：该示例演示了如何在控制一个三色灯。用于展示如何控制硬件。

* 如何使用：

  * 进入嵌入式应用工作台，点击 demo-rgbled即可打开该demo项目。

  * 该应用需要运行在实际的嵌入式设备上，demo默认的配置是运行在ESP32上面，

    并使用了三个GPIO引脚，GPIO27，GPIO33，GPIO32分别对应红、绿、蓝三个灯。

    用户可以直接使用“*Goouuu*-ESP32开发板“（该开发板上已经连接了三色灯,淘宝京东有卖）。

    也可以自己连接三个GPIO管脚到LED上面。

  * 连接ESP32的usb口到PC，并点击"连接"，选择对应的串口。最后点击"运行"。

  * 运行成功后，可以看到三色灯闪烁。

* 代码解析：

  * var rbgled = require('rgbled');  引用rgbled驱动，该驱动已经默认在demo中导入好。

    驱动引入成功后，则可以使用驱动中提供的控制红、绿、蓝三个灯的方法。

  * var led = new rbgled('rgbled.r', 'rgbled.g', 'rgbled.b'); 初始化一个rgbled对象，三个参数对应board.json中GPIO管脚的定义及rgbled.r代表GPIO27 ，rgbled.g 代表GPIO33， rgbled.b代表GPIO32。

  * 这个例子中使用的已有的driver，当然用户也可以自己参照[rgbled驱动](https://github.com/aliyun/TinyEngine/tree/master/scripts/drivers/led/rgbled)实现自己的driver。

    

## demo-linkdevelop

* 功能说明：该示例展示了如何快速连接上云，即通过mqtt连接到linkdevlop云端。

* 代码解析：

  * var client = require('deviceShadow'); 引用了设备上云模块。
  * client.bindDevID绑定一个设备三要素，即在LinkDevelop上生成的设备三要素。
  * client.start 连接云端。
  * client.addDevSetPropertyNotify注册一个属性通知的回调，即云端下发该属性设置则会进入回调函数。
  * client.postProperty('LightStatus', 1): 向云端发送一个属性(LightStatus) 的 状态(数字1）的通知。
  * 

* 如何使用：

  * 进入嵌入式应用工作台，点击 demo-linkdevelop即可打开该demo项目。

  * 该应用即可以在实际的嵌入式硬件上运行，也可以在PC模拟器上运行。**运行前需要保证设备/PC是联网的**。

  * 该demo需要连接云端，所以需要在云端建立对应的设备模型和设备。方法如下：

    * 创建产品

      ![ld-create-product](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-create-product.jpg)

      

      

      * 填写产品详细信息

      ![ld-create-product2](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-create-product2.jpg)

      

      * 在产品模型里面，自定义功能，点击 自定义功能->新增。

      ![ld-new-fun](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-new-fun.jpg)

      

      * 在自定义功能中新增一个属性，名为LightStatus，以跟demo程序对应上。

      ![ld-new-fun2](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-new-fun2.jpg)

      

      * 点击设备开发，新增设备。添加一个测试设备，DeviceName可随意取。

      ![ld-create-device](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-create-device.jpg)

      

      * 添加设备成功后，将生成的设备三要素 拷贝到 linkdevelop-demo的index.js中。

      ![ld-3-key](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-3-key.jpg)

      

      * 点击设备连接，并运行。运行成功，可以在Console控制台提示连接成功的log。

      ![ld-ide-run](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-ide-run.jpg)

      

      * 设备连接成功后，可以在LD平台的设备列表中看到在线。

      ![ld-online](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-online.jpg)

      

      * 点击在线设备的调试。按如下方式下发指令到客户端。

        ![ld-server-set](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-server-set.jpg)

      * 发送成功后，Console控制台会有收到消息的打印，并会回复数字1到云端。

        ![ld-server-get](https://github.com/aliyun/TinyEngine/tree/master/docs/graph/ld-demo-png/ld-server-get.jpg)

  