---
layout: post
title: 分形
date: 2020-01-17 13:43:45
tags:
 - 数学
 - 捣鼓
categories:
 - 捣鼓
mathjax: true
---

寒假的研究性学习……

![弦图分形](https://s2.ax1x.com/2020/01/18/1SqsPK.gif)

<!-- more -->

这只是一个小例子

~~用几何画板画的~~

---
## 科赫雪花

![科赫雪花](https://s2.ax1x.com/2020/01/18/1Sq1U0.png)

---
## 朱利亚集

这是Ultra Fractal自带的分形，蛮经典的图了

![朱利亚集](https://s2.ax1x.com/2020/01/18/1SqGCT.png)

---
## 曼德勃罗集

> 人类**有史以来**做出的最奇异,最瑰丽的几何图形

$$Z_{i + 1} = Z_{i}^2 + C(Z,C\in\mathbf{C})$$

曼德勃罗集就是所有使得该式无限迭代后的结果能保持有限数值的复数C的集合

将其画在复平面上就成了下面的 ~~乌龟~~ 图形

用几何画板、C++、Python、~~文言文~~都实现过，其中C++的最快，Python次之，几何画板最慢(但最直观)

### 几何画板

这个gif特别难做(制作总耗时2h)，压缩之前有700MB，压缩后7MB(所以有点不清晰)，都是泪啊

这是加速10倍的效果，再加速会出现异常，将就着看吧……

![几何画板-曼德勃罗集](https://s2.ax1x.com/2020/01/18/1Sqcxe.gif)

### C++

其实可以弄高清彩图的，但源码搞掉了(~~噗嗤~~)，所以临时写了一个贼简单的曼德勃罗集

档次突然变低，请见谅

![C++曼德勃罗集](https://s2.ax1x.com/2020/01/18/1Sbx3D.png)

给一下源码吧，想看就看

<a href="https://file.xecades.xyz/Program/Mandelbrot.html" class="LinkCard">Mandelbrot</a>

### Python

Python的程序不是我写的，相对来说比较高清，支持放大。但由于不是矢量图，不能无限放大，下面的图是$2000\times2000$的。那天被同学怂恿画$10000\times10000$，画了10多分钟，消耗内存3.5G(舒服~)，效果特别好，但放大到一定倍数还是花了

![Python-曼德勃罗集](https://s2.ax1x.com/2020/01/18/1Sbzge.png)

还有放大了的

![Python-曼德勃罗集](https://s2.ax1x.com/2020/01/18/1SqSjH.png)

还行吧……

### Ultra Fractal

Ultra Fractal是个好东西，它是个专门画分形的软件，画的是矢量图，因此可以无限放大

看看吧

![Ultra Fractal-曼德勃罗集](https://s2.ax1x.com/2020/01/18/1SqCDA.png)

![Ultra Fractal-曼德勃罗集](https://s2.ax1x.com/2020/01/18/1Sq9ud.png)

还整了一个gif，显示曼德勃罗集的各点对应的朱利亚集

显然，这是我加了速的gif，外加剪辑，左下角的时间没有任何意义

![曼德勃罗对应的朱利亚](https://img.vim-cn.com/74/005f241273f204411072a16eaf3c0610bd904b.gif)

### Ultra Fractal导出视频

我用的是它自带的例子: Mandelbrot Zoom

下面是一个比较好看的放大的图片:

![吊一波胃口](https://s2.ax1x.com/2020/02/02/1JWd41.png)

下面就是视频了

做这个视频真的历经千辛万苦，每次制作都要花大概8个小时的时间，还有可能失败(还好我运气好，2次就成功了)。

最终导出的视频有3.5G，经过ffmpeg压缩后就只有13MB了，清晰度应该没变。

<iframe height=498 width=100% src="https://cdn.xecades.xyz/image/fractal - vid1.mp4" frameborder=0 allowfullscreen></iframe>

---
还没弄完

如果想要源码的，下面评论，私发。