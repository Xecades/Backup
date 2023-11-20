---
title: Bookmarklet 小书签
mathjax: true
date: 2020-02-23 09:31:12
tags:
 - 捣鼓
categories:
 - 捣鼓
---

![](https://cdn.xecades.xyz/image/bookmarklet-pic1.png)

网页仍可以正常浏览

你有没有想过以上图片的翻转效果是怎么实现的？

~~如果你告诉我你的关注点是谷歌，我也拿你没办法~~

<!-- more -->

一些浏览器支持在网址栏运行 Javascript 代码

## 测试一下

先打开**任意一个网页**，不能是浏览器内置页，就打开百度吧

在网址栏输入以下代码：

```javascript
javascript: alert("啦啦啦");
```

{% note warning %}
注意是输入，如果复制，前面的`javascript:`会被吃掉
{% endnote %}

回车运行，若出现弹窗如下，说明你的浏览器支持运行 JS 代码（小书签）

![](https://cdn.xecades.xyz/image/BookmarkJS-pic2.png)

~~话说这个 stylus 美化真的好看~~

---
## 试一下书签

新建一个书签，名字任意，链接就填上面的 JS 代码

随便开个网页，点击这个书签，应该会弹出和上图一样的窗口

![没错这个图和上个图一模一样](https://cdn.xecades.xyz/image/BookmarkJS-pic2.png)

{% btn 'javascript: alert(&quot;啦啦啦&quot;);', 点击试试 %}

---

## 实例

如果把网页搞烂了，刷新即可

### 翻转网页

```javascript
javascript: let deg = prompt('输入旋转角度（0~360, 默认180）') || 180; eval(document.querySelector('body').style.transform = "rotateY("+deg+"deg)");
```

{% btn 'javascript: let deg = prompt(&quot;输入旋转角度（0~360&#44; 默认180）&quot;) || 180; eval(document.querySelector(&quot;body&quot;).style.transform = &quot;rotateY(&quot;+deg+&quot;deg)&quot;);', 点这个按钮试试吧 %}

### 色调翻转

```javascript
javascript: let deg = prompt('输入角度（0~360, 默认180）：') || 180; eval(document.querySelector('html').style.filter = "hue-rotate("+deg+"deg)");
```

{% btn 'javascript: let deg = prompt(&quot;输入角度（0~360&#44; 默认180）：&quot;) || 180; eval(document.querySelector(&quot;html&quot;).style.filter = &quot;hue-rotate(&quot;+deg+&quot;deg)&quot;);', 点这个按钮试试吧 %}

## 黑白色调

```javascript
javascript: let baifenbi = prompt('输入黑白百分比（0~100, 默认100）') || 100; eval(document.querySelector('html').style.filter = "grayscale("+baifenbi+"%)");
```

{% btn 'javascript: let baifenbi = prompt(&quot;输入黑白百分比（0~100&#44; 默认100）&quot;) || 100; eval(document.querySelector(&quot;html&quot;).style.filter = &quot;grayscale(&quot;+baifenbi+&quot;%)&quot;);', 点这个按钮试试吧 %}

## 解除右键限制

```javascript
javascript: void(document.onselectstart = document.onbeforecopy = document.oncontextmenu = document.onmousedown = document.onkeydown = function(){return true;});void(document.body.onmouseup=''); void(document.body.onselectstart=''); void(document.body.onmouseup=''); void(document.body.oncopy='');
```

{% btn 'javascript:void(document.onselectstart = document.onbeforecopy = document.oncontextmenu = document.onmousedown = document.onkeydown = function(){return true;});void(document.body.onmouseup=&quot;&quot;); void(document.body.onselectstart=&quot;&quot;); void(document.body.onmouseup=&quot;&quot;); void(document.body.oncopy=&quot;&quot;);', 点这个按钮试试吧 %}

~~貌似在这里点了和没点一样~~

## 页面可编辑

最好玩的一个

```javascript
javascript: document.body.setAttribute('contenteditable', true);
```

{% btn 'javascript: document.body.setAttribute(&quot;contenteditable&quot;&#44; true);', 点这个按钮试试吧 %}