---
title: 迁移到 Github Actions
date: 2020-02-11 00:33:56
tags:
- 博客
- 'GitHub Actions'
- 持续集成
- 技术
categories: 笔记
permalink: move-to-github-actions
author: aiokr
---

今天突发奇想地把博客的自动构建从 Travis CI 迁移到了 Github Actions，感觉构建的速度快了不少，而且提交 commit 到开始构建的反应时间也缩短了。

![](https://imgur.lzmun.com/picgo/20200211004629.png)

GitHub Actions 是 Github 推出的自动化构建工具，在这之前也有 Travis CI，Jenkins 等工具可以进行自动化构建的工作。不过 Github 官方推出自动化构建工具，颇有点 iOS 的新增功能迫使 APP 下架的感觉😂。

GitHub Actions 的配置挺简单的，把 Travis CI 的脚本拿来改一下就好了。然后我并没有用 Github 推荐的引用其他脚本的办法，而是自己写了一遍构建的命令。

这是我的 Github Actions 脚本。整个博客的仓库开源在 [https://github.com/aiokr/iTypen-Hexo](https://github.com/aiokr/iTypen-Hexo)

``` yaml
name: iTypen.APP auto publish

on:
  push:
    branches:
      - master
      - contents
  pull_request:
    branches:
      - master

jobs:
  publish_ITPN:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1
        with:
          submodules: true # Checkout private submodules(themes or something else).
      - uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: install_env
        run: npm install
      - name: hexo_generate
        run: |
          ls
          npm run clean
          npm run generate
      - name: hexo_publish
        run: |
          \cp -f assets/CNAME public/CNAME
          cd ./public
          git init
          git config --global push.default matching
          git config --global user.email "hiaiokr@gmail.com"
          git config --global user.name "aiokr"
          git add --all .
          git commit -m "Auto Builder of aiokr's blog"
          git push --force "https://${{secrets.action_key}}@github.com/aiokr/iTypen-Pages.git" master
```

这是自动化构建的结果 ![iTypen.APP auto publish](https://github.com/aiokr/iTypen-Hexo/workflows/iTypen.APP%20auto%20publish/badge.svg)

其中有一个小问题就是需要事先在博客的仓库里设置 Git 用到的 sshkey，在 [https://github.com/settings/tokens](https://github.com/settings/tokens) 申请，然后到仓库设置页面的 secrets 选项卡中设置，我设置的名称是 action_key，如果你设置了其他的名称，记得在脚本里作出相应的修改。
