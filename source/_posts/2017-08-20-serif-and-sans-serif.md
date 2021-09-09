---
title: 衬线字体与非衬线字体
categories: 笔记
cover: 'https://ooo.0o0.ooo/2017/06/06/593697b7b77d8.jpg'
layout: post
copyright: true
abbrlink: 4b02
date: 2017-08-20 00:00:05
---
我们将字体分为衬线字体和非衬线字体两大类。衬线字体以 宋体 和 Times New Roman 为代表 ，非衬线字体以微软雅黑为代表。

![衬线字体于非衬线字体。jpg](https://ooo.0o0.ooo/2017/06/06/593697b7b77d8.jpg)

【图】：衬线字体与非衬线字体对比

衬线字体在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同。无衬线字体没有这些额外的装饰，而且笔画的粗细差不多。我们推荐在会议手册等文字较多的印刷品中采用衬线字体，其中中文使用宋体，英文选用 Times New Roman。衬线字体较非衬线字体更有表现力，在字体较大时，例如席位卡、背景板、签名版等，可以考虑采用衬线字体。

在屏幕中，特别是移动设备屏幕上，非衬线字体比衬线字体更易辨识。我们推荐在需要在屏幕显示的内容使用非衬线字体。推荐方案如下：

```
font-family: "SF UI Display", ".PingFang SC", "PingFang SC", "Neue Haas Grotesk Text Pro", "Arial Nova", "Segoe UI", "Microsoft YaHei", "Microsoft JhengHei", "Helvetica Neue", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "Helvetica", "Hiragino Sans GB", sans-serif;
```

以上为 CSS 样式表文件节选，含义如下：

SF UI Display 、苹方（华康信凭黑）为 OS X El Capitan 开始附赠的两款字体；

Neue Haas Grotesk Text Pro、Arial Nova、Segoe UI 为 Windows 10 中附带的两款不错的西文字体，相应的中文字体使用微软雅黑（简体中文）和微软正黑（正体中文）；

OS X 没有 Segoe UI，在 Yosemite 及往前版本的 OS X 当中则使用 Helvetica 和冬青黑体简体中文成对出现的组合；

Helvetica Neue 搭配思源黑体，为 Linux 等其它场合准备的，按顺序写入“ Source Han Sans SC, Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC, Source Han Sans TC, Noto Sans CJK TC ”；

sans-serif 表示以上字体均不存在时由系统自行选择非衬线字体。

> 非衬线字体 CSS 代码和解释节选自 https://zhuanlan.zhihu.com/p/20186806