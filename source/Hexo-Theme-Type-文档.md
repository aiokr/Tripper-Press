---
title: Hexo-Theme-Type 文档
author: aiokr
permalink: 'type/'
abbrlink: '8998'
---

# 简介

Type 是一个简洁、专注于文字、照片展示的 Hexo 主题。本主题尚未正式发布，使用过程中可能遇到一些问题，请见谅。

# 快速开始

要使用 Type，必须首先安装 Hexo。你可以访问 Hexo 的文档来了解如何安装 Hexo 
> [hexo.io/zh-cn/](https://hexo.io/zh-cn/)。

Hexo 中有两份配置文件，分别为站点目录下的 `_config.yml` 和 主题目录下的 `_config.yml`，后文将前者称为“站点配置文件”，后者称之为“主题配置文件”。

## 下载主题

你可以通过 Git 或下载压缩包的方式下载本主题

**通过 Git 下载**

进入你的 Hexo 项目的 themes 文件夹，执行以下命令克隆最新版的主题

```bash
git clone https://github.com/aiokr/hexo-theme-type.git
```

**直接下载**

在主题仓库的 [Releases · aiokr/hexo-theme-type](https://github.com/aiokr/hexo-theme-type/releases) 页面可以下载一个较为完整的版本，下载后将文件解压到 Hexo 项目的 themes 文件夹中

## 启用主题

与所有 Hexo 主题启用的模式一样。 当下载完成后，打开**站点配置文件**， 找到 theme 字段，并将其值更改为 hexo-theme-type。

```yaml
theme: next
```

随后，将**主题配置文件模板** `_config.template.yml` 文件更名为 `_config.yml`。并根据下文内容进行配置。使用**主题配置文件模板**，有助于在更新主题时，避免需要重新配置**主题配置文件**。

接下来需要安装主题需要使用的依赖

```bash
npm install lodash hexo-symbols-count-time --save
```

其中，lodash 为主题的归档功能需要使用的依赖，在 Hexo 5.0.0 中，[Hexo 移除了内置的 lodash 函数](https://blog.skk.moe/post/hexo-5/#全局变量中不再包含-Lodash)，因此需要额外安装 lodash。

hexo-symbols-count-time 是主题的文章计数功能需要使用的依赖。

# 主题设定

打开**主题配置文件**，根据下文内容逐项配置主题。

## 图标设置

```yaml
favicon: https://imgur.lzmun.com/picgo/after2022/presslogo.png_avatar（仅作为范例）
avatar: （此项目暂未被使用）
apple_icon:
  # iPhone 57x57 
  iphone: 
  # iPad 72x72
  ipad: 
  # Retina iPhone 114x114
  iphone_hd: 
  # Retina iPad 144x144
  ipad_hd: 
```

图标设置部分控制网页在浏览器标签页、收藏夹、手机首页的图标。填写链接时，链接必须以 `http://`、`https://`、`//` 作为开头

- **favicon**: 浏览器图标
- **avatar**: 网页内作者头像（此项目暂未被使用）
- **apple_icon**: 在 Apple 设备上的图标，需要 57x57、72x72、114x114、144x144 等不同尺寸的图标以适应不同设备

## 样式设置

```yaml
# Schemes
schemes: column
schemes: m3

# Random Pictures
random_pic_switch: true
random_pics: 19
random_thumbnail: ../img/random/randompic-
```

- **Schemes**: 样式分支，可选 column（普通样式设计）、m3（Material Design 3 风格设计）
- **random_pic_switch**: 布尔值，开启或关闭随机文章头图
- **random_pics**: 数值，随机文章头图的张数
- **random_thumbnail**: 随机文章头图的地址