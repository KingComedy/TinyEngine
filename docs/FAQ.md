# 常见问题(FAQ)

* 运行应用时，控制台输出 `WARNING: FUNC: at 2:9 current tolken=` 类似错误是什么原因？

  答：通常是由于语法错误或者语法不支持引起的，请根据`tolken=`的提示检查该语法是不是支持，

  详情请查看[TinyEngine编程指南](https://linkdevelop.aliyun.com/device-doc#ebagtb.html)，若使用了本地扩展对象，请参考[JavaScript扩展对象及API使用](https://linkdevelop.aliyun.com/device-doc#ebagtb.html).

  

* 点击嵌入式应用控制台的“运行”按钮，出现一直在“更新中…",是什么原因？

  答：该问题的一种可能原因是：终端设备未升级TinyEngine固件，所以控制台更新失败。

  解决方法是：先升级TinyEngine固件，升级固件的方法，请查看docs中的固件升级文档。



* 哪些应用或功能可以在模拟器上调试？

  答：TinyEngine模拟器运行在PC上，所以与硬件控制无关的功能都可以在模拟器上测试，如deviceShadow上云模块，net，http等。



* 是否可以自己移植一款新的支持硬件？

  答：TinyEngine SDK即将开源，届时可以参考SDK移植文档进行新的硬件移植。

  敬请关注github更新[TinyEngine](https://github.com/aliyun/TinyEngine).

  

* 当前可以引入的驱动或模块有哪些？

  答：当前我们基于iot应用场景开发了多款driver和module，包括了多达几十款传感器驱动，如温度传感器，湿度传感器，陀螺仪，加速度传感器等，模块如deviceShadow上云模块，红外学习模块等。

  我们希望更多的开发者能使用上这些驱动和模块，并欢迎开发者能贡献自己开发的驱动或模块。



* 如果实际硬件连接有变化，还能使用导入的这些模块/驱动吗？

  答：可以的，驱动/模块是跟实际硬件连接无关的，决定当前的硬件版型和连接的是board.json文件，该文件中定义每个对象对应的实际管脚号及管脚的用途，所以硬件版型或连接有变化时只需修改board.json文件即可。具体详情请查看文档[board.json配置说明](%E6%9D%BF%E7%BA%A7%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6board.json%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md).



* 为什么要安装nodejs及be-cli？

  答：nodejs是跨平台的，可以实现在多平台上与嵌入式硬件通信。

  be-cli是一个与嵌入式应用控制台通信的Agent。



