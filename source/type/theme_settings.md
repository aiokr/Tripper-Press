# 主题设定

## 设置「图标」

```yaml
# ---------------------------------------------------------------
# ICON Settings 图标设置
# ---------------------------------------------------------------

favicon: 
avatar: 
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

编辑「主题配置文件」中的图标设置部分

**favicon**: 浏览器标签页的小图标  
**avatar**: 首页、文章封面处的头像  
**apple_icon**: 负责苹果不同尺寸设备上的图标

## 设置「样式」

```yaml
# ---------------------------------------------------------------
# Style Settings 样式设置
# ---------------------------------------------------------------

# Schemes
# Use column ｜ m3
schemes: m3

# Fonts
# Use LXGW ｜ 
fonts: LXGW


# Random Pictures
random_pic_switch: false
random_pics: 19
random_thumbnail: https://cdn.jsdelivr.net/gh/photup/hexo-theme-type-random_pics@v1.0.0/randompic-
# random_thumbnail: ../img/random/randompic-
```

**schemes**: Type 主题目前提供 column、m3 两种样式，可以根据您的喜好进行选择，将所选的样式名称填入 schemes 设置项即可。

**fonts**: Type 主题内置有霞鹜文楷字体，在 fonts 设置项填入 LXGW 即可启用全局霞鹜文楷字体。

Type 主题提供文章随机封面图的功能，启用该功能后，没有设置 cover 项目的文章会在首页启用随机封面图，但是注意文章内页并不会启用。  
随机封面图有两个来源，一是主题文件内置的本地文件，二是由 jsdelivr 提供的在线文件。您也可以自定义随机封面图。

**random_pic_switch**: 布尔值，开启或关闭随机封面图功能
**random_pics**: 随机封面图的数量
**random_thumbnail**: 随机封面图地址


