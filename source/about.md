---
layout: post
title: about
date: 2019-07-02 00:00:00
---

## 关于我

你好。

我是陈王，来自柳州，现在南宁不知名师范大学学习文化产业管理。

## 关于本博客

很荣幸你能找到这里，并且浏览这里的任何一篇文章。

其实这是一个摄影博客。

~不管你信不信，反正我是信了。~

一款名为「一字千钧」的游戏有这样的标语：

> 若不被神的意识感知，原本存在之物将不复存在。一件事如果没被报道，就没有发生过。 “新闻”就是新世界的神。

对我个人而言，没有记录下的事情会慢慢地在记忆中被遗忘，进而找不到他存在的任何证据。我在这里写下的文字，是我存在的最好的证明。

本博客采用 [Hexo](https://hexo.io/zh-cn/)，主题是自己写的 [Type](https://itypen.app/2020/HEXO-THEME-TYPE/)。可能你看到 Github 上的截图和博客的不太一样，那是因为很多修改都没有更新到主题的那个仓库上，等我写好文档了一定上传（咕咕咕）

有一段时间切换到了 Wordpress，但是为了用阿里云的学生机把域名换到阿里云之后 ~因为太懒~ 备案被取消了，于是乎买了 **itypen.app** 这个域名，继续用 Hexo 来写博客。

现在这个博客由 Hexo 驱动，使用 Github 托管，由 Travis CI 自动构建并上传到 Github Pages，CDN 和域名 DNS 由 Cloudflare 完成。

## 在其他地方找到我

**ShutterStock:** [https://www.shutterstock.com/zh/g/aiokr](https://www.shutterstock.com/zh/g/aiokr)

**500px:** [https://500px.me/aiokr](https://500px.me/aiokr)

**Email:** aiokr@outlook.com

## 字数统计

{% antvG2 c1 %}
const data = [
  { date: '2020-01-25', value: 37 },
  { date: '2020-02-01', value: 38 },
  { date: '2020-02-08', value: 51 }
];
const chart = new G2.Chart({
  container: 'c1',
  forceFit: true,
  height: 300,
  padding: [ 20, 40, 50, 50 ]
});
chart.source(data);
chart.scale({
  value: {
    min: 1
  },
  date: {
    range: [ 0, 1 ]
  }
});
chart.axis('value', {
  label: {
    formatter: val => {
      return (val / 1 ).toFixed(1) + 'k';
    }
  }
});
chart.tooltip({
  crosshairs: {
    type: 'line'
  }
});
chart.area().position('date*value');
chart.line().position('date*value').size(2);
chart.render();
{% endantvG2 %}

## Events

**2020 年 2 月：** 启用 iTypen.**app** 域名
**2020 年 1 月：** TYPE 主题正式发布
**2019 年 2 月：** 修改并启用 Daily 主题
**2018 年 8 月：** 启用 iTypen.com 域名
**2018 年 5 月：** 开设同名微信公众号
**2016 年 11 月：** 发起博客
