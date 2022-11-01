---
title: App Plus | iA Presenter 初体验
author: aiokr
categories: 'App Plus'
abbrlink: 7cce
date: 2022-10-26 08:54:19
cover: https://imgur.lzmun.com/picgo/after2022/202211011420163.png_itp
---

> 本文首发于少数派

iA Writer 是一款非常著名的，以简洁优美的界面和不错的使用体验著称的 Markdown 写作软件（虽然我没用过）。而最近，iA Writer 的开发商 iA.net 发布了一款名为 iA Presenter 的幻灯片制作软件，旨在通过简单的 Markdown 创作出精美的幻灯片。

市面上制作幻灯片的软件已经是数不胜数，除了常见的 PowerPoint、Keynote，还有基于 HTML5 技术的 Prezi、reveal.js、Canva 等，基于文档生成幻灯片的软件也有不少，比如双链笔记软件 Obsidian、文档工具语雀、飞书文档、石墨文档都有演示模式。

在这么多软件之中，iA Presenter 又有哪些优势，值得我们从繁杂的工作中抬起头来呢。

首先说明一下，目前 iA Presenter 还处于一个非常早期的阶段，文中提到的一些内容随时可能会因为软件的版本更新而发生变更。

另外，下文中会将 iA Presenter 简称为 iA Pre。

在此，也感谢 [@南山居氪](https://sspai.com/u/nsjkr/posts) 提供的 iA Presenter 的邀请码。

## PowerPoint 发生了什么

似乎现在很多软件都在以一种革命性的姿态来发布——认为自己的诞生能够颠覆一个行业，至少在发布时会伴随着一些阐述自己设计哲学的文章。Roam 和 Arc 是如此，iA Pre 也有些这样的味道。

iA 在其新闻页面上发了两篇文章，主要在说 [PowerPoint 等传统幻灯片工具有什么问题](https://ia.net/topics/being-boring)，和 [iA Pre 怎样使幻灯片更好？](https://ia.net/topics/how-can-we-make-presentations-better)。

在第一篇 [^1] 文章中，iA 认为，以 PPT 为代表的传统幻灯片工具有着入门难 [^2]、耗时长 [^3]、会让演讲者忘记他想说的东西[^4]、以及搭配 PPT 的演讲大多很无聊，这种无聊是我们的职业杀手[^5]以及事业杀手[^6]。

[^1]: [Being Boring: What's Wrong With PowerPoint?](https://ia.net/topics/being-boring)

[^2]: 原文是：Getting started is hard

[^3]: 原文是：Slides are weird and take ages to create

[^4]: 原文是：Forgetting what we need to say: the stuff of nightmares

[^5]: 原文是：Boredom, the silent career killer

[^6]: 原文是：Boredom, the silent business killer

## iA 怎样使幻灯片更好？

而在第二篇[^7]文章中，iA 提出了他们认为的让演讲和幻灯片制作变得更好的方法：

*   内容上

    *   写作阶段，只关注内容

    *   可以直接复制粘贴已经写好的文稿、邮件

    *   保持所说的内容与展示出来的内容分离（也就是演讲不要念PPT）

    *   幻灯片需要有图片等内容来吸引眼球

    *   演讲需要排练，在演说时才能更从容

*   设计上

    *   像网页一样的响应式设计

    *   布局由软件自动完成

    *   高可读性的讲义

总的来说，iA Pre 既然作为 Markdown 制作幻灯片的工具，其设计哲学也和 Markdown 有异曲同工之处。接下来，我也从内容写作和幻灯片设计两方面，来介绍 iA Pre 的使用体验。

[^7]: [How Can We Make Presentations Better?](https://ia.net/topics/how-can-we-make-presentations-better)

### 内容上，Markdown 为核的创作过程

首次打开 iA Pre，与一般熟知的 PPT 最大的不同在于界面中间的部分，即“编辑器”部分。PPT 的编辑器是幻灯片的制作和设计，而 iA Pre 的编辑器却是一个 Markdown 文档编辑器。

![](https://imgur.lzmun.com/picgo/after2022/202210271534607.png_itp)

![](https://imgur.lzmun.com/picgo/after2022/202210271534509.png_itp)

如果你愿意的话，隐藏 iA Pre 两边的栏目，甚至可以将它作为一个 Markdown 编辑器使用，只不过不同于其他 Markdown 编辑器的是， iA Pre 的保存格式是专有的 `*.iapresenter` 格式。

![](https://imgur.lzmun.com/picgo/after2022/202210271456046.png_itp)

或许是继承了 iA Writer 的优秀的编辑体验，iA Pre 的编辑也很不错，并且还支持聚焦模式、语法提示与等宽字体的切换，同时，Markdown 的老大难问题：一个回车换段还是两个回车换段，也在设置里可以选择。

可以将写好的讲稿以 Markdown 文本的格式粘贴上来，或者直接在 iA Pre 的编辑器中完成写作，然后就可以在讲稿的基础上稍加改动，生成一份完整的幻灯片了。

修改的方式也很简单，在需要展示的段落中，按下 Tab 按键即可。同时，幻灯片分页也是通过使用 Markdown 的分割线 `---` 来分页的。

![在 Markdown 文稿的基础上生成幻灯片](https://imgur.lzmun.com/picgo/after2022/202210271643248.png_itp)

也就是说，iA Pre 并不像语雀文档（下图）或飞书文档等其他文档工具的演示模式一样，直接将文档放大重排就成为了演示版本，而是需要作者在文档的基础上挑选需要向观众展示的段落文字，而没有被挑选出来的内容，依然是演讲的一部分。

![语雀文档的演示模式](https://imgur.lzmun.com/picgo/after2022/202210280919972.png_itp)

这种文稿与演示分离的设计，或许是 iA Pre 处理的比 Obsididan、飞书文档等文档工具自带的演示模式更好的地方，也使 iA Pre 相比其他文档工具更像一个幻灯片制作工具。这种制作幻灯片的方式，一定程度上能强迫演讲者在讲稿中挑选重要的段落，或许能避免「上台念PPT」的尴尬场面。

幻灯片制作完成后，点击左上角的「播放」按钮，就可以开始幻灯片放映。与 PPT 不同的是，iA Pre 不会默认将放映页面全屏幕打开，而是会打开一个小窗口进行幻灯片放映。你可以手动将这个窗口拖动到外接的显示器上放映。而软件的主体窗口则会变成一个提词器页面。

![20221028171710-2022-10-28](https://imgur.lzmun.com/picgo/after2022/20221028171710-2022-10-28.png_itp/fw/1280)

如果是 PPT 和 Keynote 等幻灯片软件，在放映时则会提供更加丰富但是繁杂的选项。在默认情况下，PPT 放映幻灯片页面是全屏幕显示的，软件的主体窗口也会退到后台，当然 PPT 和 Keynote 也有一个演讲者窗口，也均有 「在小窗口中放映」的功能，只不过需要手动开启。

iA Pre 在放映时的软件主窗口，可以完整地预览 Markdown 格式撰写的文稿，并且通过色块反映出当前正在放映的幻灯片是哪一张。

相比起来，PPT 和 Keynote 的演讲者提示功能，就稍微有些简陋和显得「不那么重要」。虽然也可以使用一些简单的富文本选项，Keynote 还支持彩色字体。但是和 iA Pre 比起来，PPT 和 Keynote 的演讲者提示更多是居于次要地位，只是起到「提示」的作用，而 iA 的 更像是一个主要的「提词器」。

PPT 和 Keynote 还有一个功能，就是在放映幻灯片的同时，可以在软件主体窗口中继续编辑幻灯片。还出现了「史上最悲伤的发布会」——一边演讲一边做幻灯片。这种一边放映一一边编辑的能力，在 iA Pre 里好像还不能实现。

![锤子科技2015年8月25日发布会 图源虎嗅网](https://imgur.lzmun.com/picgo/after2022/20221028173040-2022-10-28.png_itp)

在导出方面，iA Pre 可以将幻灯片导出为 Markdown、PDF 以及 HTML 格式，在选择导出为 PDF 的时候，还可以进一步选择导出的选项，可以在这里选择幻灯片导出的板式，或将 Markdown 文档导出为讲义。

![image-20221031194458889](https://imgur.lzmun.com/picgo/after2022/202210311945806.png_itp)

iA Pre 导出的 PDF 讲义，格式上没有太大的问题，相比起 PPT 还需要另外在备注部分填入文字，iA Pre 直接通过 Markdown 文本生成讲义似乎更方便一些。图文混排相比起其他的 Markdown 编辑器也精致很多，但是中文字体的似乎有一些小问题。即使是在软件内将字体调整为系统默认，也只会影响到幻灯片的字体，讲义字体似乎无法自定义。

![image-20221031203127323](https://imgur.lzmun.com/picgo/after2022/202210312031069.png_itp)

也可以选择仅导出幻灯片、幻灯片与讲义共同导出的方式。此时的字体似乎应用了软件内的自定义字体，没有出现部分中文字符字体不同的情况。

![image-20221031203549449](https://imgur.lzmun.com/picgo/after2022/202210312035032.png_itp)

不过，iA Pre 没有提供  `*.pptx`、 `*.key`  这两个在两大系统上常见的幻灯片格式，但 HTML 格式可以尽可能地保证在大部分系统上都能顺利地完成幻灯片的播放。

另外，iA Pre 也支持通过 macOS 自带的文件版本回溯功能，恢复到先前的文件版本。

![截屏2022-10-31 19.42.49](https://imgur.lzmun.com/picgo/after2022/202210311943717.png_itp)

### 设计上，较为简陋的可定制性

大多数的演讲或许都是彰显个性的地方，而幻灯片的设计风格是演讲个性最重要的组成之一。iA Pre 在这方面，相比起 PPT 或者更加被人称颂的 Keynote，以及 iA Pre 在内容写作方面的可圈可点，就显得有些泛善可陈。

![Apple 发布会上用的应该是 Keynote 吧](https://imgur.lzmun.com/picgo/after2022/202210312049820.png_itp)

iA Pre 软件内置了不少主题，以城市命名。也可以在设置中过新建主题，然后打开主题文件夹，通过编辑主题的 CSS 和 JSON 文件来进行自定义。也可以拷贝软件自带的主题，并在自带主题的基础上进行修改。

![iA Pre 的内置主题之一「Tokyo」](https://imgur.lzmun.com/picgo/after2022/202210312054797.png_itp)

看起来，可以通过 CSS 自定义主题是非常自由的，但是 iA Pre 的主题只涉及了字体和幻灯片的背景颜色（至少目前，软件自带的主题都是这样）。对于幻灯片的排版布局并不涉及。也就是说，现阶段的幻灯片布局只能由 iA Pre 使用其内置模板自动完成，而不能自定义。

不过，iA Pre 提供导出为 HTML 的功能，可以在导出 HTML 之后对原文件进行修改，但这一来，就会显得有些本末倒置了。（导出为 HTML 之后还可以看到一些彩蛋）

许多会场的大屏幕并不是标准的 16:9 或 4:3 的屏幕，在使用 PPT 或放映时，常常会因为屏幕比例的不同而使文字和图片发生变形，这一点上，iA Pre 做的或许比 PPT 更好。iA Pre 在演示场景时，幻灯片是像网页一样自适应的，可以自动适应各种尺寸的屏幕尺寸，方便观众在不同的设备上进行观看，也可以适配不同尺寸的会场屏幕。当然，也可以在软件设置里选择锁定「4:3」「16:9」或「9:16」尺寸。

<img src="https://imgur.lzmun.com/picgo/after2022/20221028164007-2022-10-28.png_itp" alt="20221028164007-2022-10-28" style="height: 600px;" />

总体而言，iA Pre 的使用体验很有  的味道，即在内容部分提供了还不错的创作体验，但在设计部分，能进行自定义的选项就比较贫乏。不过，目前 iA Pre 还处于一个非常初期的阶段，尚且不知道在正式发布后，iA Pre 会想着什么方向发展。

### 幻灯片的两个方向

或许，幻灯片的发展应该向着两个不同的方向，一个是以 Keynote 以及 PPT 为代表的，设计精美的幻灯片，用在发布会、重大的演讲上。而另一个方向，就是以 iA Pre 这种「从文档到幻灯片」的工具为代表的，用于在小组会、答辩这种更注重内容和制作幻灯片的速度，而不是很注重设计的，不是很盛大的场合上。

## 关于 Markdown 的方言问题

每出现一个 Markdown 的软件，最绕不开的话题就是 Markdown 的方言问题。由于原生的 Markdown 支持的格式极少，不少编辑器都在 Markdown 的基础上扩展了语法，比如 Ulysses 的 Markdown XL，都属于 Markdown 的「方言」。只是一些方言的接受程度较高，逐渐成了主流，比如 Github 的 GitHub Flavored Markdown。

iA Pre 也不例外，它将 Markdown 的格式分为了不同的部分，一个部分只能在讲义中使用，另一部分才能在幻灯片中显示。但是诸如粗体、斜体、公示、代码、表格等格式则是同时可以在讲义和幻灯片中使用的。

![image-20221101084130468](https://imgur.lzmun.com/picgo/after2022/202211010841545.png_itp)

## 关于 `*.iapresenter` 格式

前文提到了 iA Pre 使用的文件格式是专有的 `*.iapresenter`，而不是 `*.md`、`*.markdown` 这两个通用的 Makrdown 文件格式。主要在于，iA Pre 除了编辑文本之外，还需要储存图片或视频文件，标记幻灯片使用的主题等参数。

但其实 `*.iapresenter` 并不是一个封闭的格式，使用 Mac 的「查看包内容」的功能可以直接浏览 `*.iapresenter` 文件的内容。

![\*.iapresenter\` 的包内容](https://imgur.lzmun.com/picgo/after2022/202210271631907.png_itp/fw/800)

可以看到，`*.iapresenter` 文件其实是由文本内容、配置文件以及图片和视频等资源文件组成的文件包。

## 关于导出 HTML 之后看到的彩蛋

在 iA Pre 中将幻灯片导出为 HTML 之后，可以在导出的 `main.css` 文件中看到以下信息。

```css
/**
 * reveal.js
 * http://revealjs.com
 * MIT licensed
 *
 * Copyright (C) Hakim El Hattab, https://hakim.se
 */
```

没错，iA Pre 导出的文件，是一个由 reveal.js 驱动的页面。也就是说，iA Pre 实际上一个体验良好的 Markdown 编辑器，加上一个图形化的 reveal.js 生成器。

## 总结

总体而言，iA Pre 给了我们一种新的，更可视化地用 Markdown 制作幻灯片的工具，相比起 reveal.js，手写 Markdown 肯定是比手写 HTML 更方便的选择，相比起 Obsidian，iA Pre 的精致美观程度都要高很多。

诚然，现阶段的 iA Pre 仍然比不上 PPT 和 Keynote 这些专业的幻灯片制作工具，但在需要快速制作幻灯片的场合，iA Pre 给我们提供了一个比其他文档工具更为优雅的解决方案。
