# TinyEngine 说明

### 概述

TinyEngine 提供了在设备端用 Javascript 语言开发产品的应用开发框架，运行环境，以及开发和部署工具集，旨在让 IoT 设备应用和开发者不用过度关注硬件平台的差异性，底层驱动和系统的实现细节，也不用关注具体云端设备接入技术，就可以快速开发出IoT产品，并能实现最终应用跨硬件平台的运行能力，真正做到“ 一份代码，到处运行 ”

TinyEngine 具备如下特点：

* 提供针对IoT应用特点而优化的高性能 JS 引擎：
	* 资源占用少：RAM< 15KB,ROM(Footprint) < 15KB；
	* CPU性能优化：优化的词法和句法分析器，精简的Javascript的语法支持；
	* 完备的JS语法支持能力：IoT应用的精简语法，CommonJS扩展语法，大量IoT Builtin模块；
* 包含IoT设备端的应用编程框架和设备模型：
	* 设备模型兼容阿里的标准设备模型（属性，事件，方法）；
	* 自带设备上云能力模块，与阿里的Link Platform IoT平台对接；
	* 支持板级驱动，模块及设备驱动的动态加载能力，应用可本地和云端加载；
	* 框架和JSE支持多OS (OSAL)，支持 AliOS，FreeRTOS；  
	* 支持多芯片平台移植(HAL)，已涵盖了庆科，乐鑫，STM，MTK等主流芯片；
* 提供方便的本地和云端开发工具：
	* WebIDE 支持本地和云端应用代码编辑，调试和发布；
	* be-cli 命令行工具可让开发者在本地开发，调试设备端应用；

* 提供丰富的设备，驱动，设备应用开发的工具，模块：
	* 实现并开源大量的通用设备驱动模块，场景应用，供开发者引用；
	* 提供应用，设备模块下载和分发通道和能力；
	* 开发者可提交模块供第三方应用；

TinyEngine 适用于IoT设备端的场景应用开发，设备开发，驱动模块等开发者。

### 代码目录结构说明

```
├── LICENSE
├── README.MD
├── docs
|
├── firmware
│   ├── esp32
│   └── stm32
├── scripts
│   ├── demos
│   ├── drivers
│   └── modules
├── tinyengine
│   └── README.MD
└── tools
    └── flash-burn-tools
```

#### docs:
	包含 TinyEngine 开发指南，编程 API 接口文档，驱动模块使用说明。
#### firmware
	TinyEngine官方编译的TinyEngine固件，固件包含：TinyEngine JSE，RTOS，Bootloader，TinyEngine Framework。
#### scripts
	所有用Javascript 编写的脚本，包括 demos 目录下的 Javascript 应用程序，Drivers 目录下的用Javascript 编写  
    的驱动程序，Modules 用 Javascript 编写的软件模块如cloud-client。 
#### TinyEngine
	整个TinyEngine框架的实现代码，包含：TinyEngine 的 JSE，编程框架，Native modules，该代码正在整理中，安全  
    扫描，即将开源。
#### tools
	开发调试工具，包括本地和云端的 WebIDE，命令行工具 be-cli，设备调试的 DeviceAgent，虚拟设备等。	
	

