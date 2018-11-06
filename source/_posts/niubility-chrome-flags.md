---
date: 2018-09-27 00:00:00
tags:
    - Chrome
    - 浏览器
    - Google
category: 软件
title: 神奇的自定义功能 | Chrome flags 中值得调整的选项
---

Chrome浏览器有一个神奇的地方在于，用户可以通过一些操作开启实验性特性，从而对浏览器进行定制以满足自己的需求。而这些定制通常是在Chrome的flags页面中完成的。

![](https://imgur.itypen.com/picgo/Chrome Flags.png)

flags页面罗列了Chrome所有实验性特性，并且还附带有对该特性的解释。（本文基于Chrome69）

## 体验优化项目

Smooth Scrolling - 开启

平滑滚动，滚动页面内容时能顺利地进行动画处理，在开启后可在Windows设备上体验类似于Edge浏览器以及macOS的Safari浏览器的平滑滚动。

![](https://imgur.itypen.com/picgo/Smooth-scrolling.png)

Omnibox UI Hide Steady-State URL Scheme and Trivial Subdomains - 关闭

在上一篇文章中有提到过，Chrome69一项新特性，即自动隐藏多功能框中的常见二级域名，你在访问www.itypen.com时，Chrome将在多功能框中显示itypen.com，在部分网站上，这会带来一些歧义，因此建议关闭此特性。

![](https://imgur.itypen.com/picgo/subdomain-omnibox.png)

Overlay Scrollbars - 开启

叠加滚动条，当滚动条不适用时，将会自动隐藏。

![](https://imgur.itypen.com/picgo/chrome-overlay-scrollbars.png)

Tab audio muting UI control - 开启

在标签页的小喇叭上控制网页静音

![](https://imgur.itypen.com/picgo/tab-audio-muting-ui-control.png)

Experimental QUIC protocol - 开启

Quic 全称 Quick UDP Internet Connection，即“快速 UDP 互联网连接”，是由 google 提出的使用 UDP 进行多路并发传输的协议。将此选项开启后，访问支持QUIC协议的网站时，速度会有一定程度的提高。

![](https://imgur.itypen.com/picgo/QUIC-protocol.png)

Save Page as MHTML - 开启

将网页保存为MHTML格式，即单个网页文件，无需再分别拷贝网页html文件及文件夹。

![](https://imgur.itypen.com/picgo/save-as-mht.png)

## 安全增强项目

Automatic password generation - 开启

自动生成密码，当注册一个新网站需要输入密码时，Chrome会自动生成一个较为复杂的密码以保护您的账户，自动生成的密码将被保存在Chrome的密码库中，可以随时查看和使用。

![](https://imgur.itypen.com/picgo/auto-pass-generation.png)

