---
title: test - 内容模板
mathjax: true
date: 2020-02-18 10:45:33
# top: true
---

My Awesome Test!

本博客包含的组件，用于测试

<!-- more -->

## 文本居中标签

{% cq %} 我不去想是否能够成功，既然选择了远方，便只顾风雨兼程。 {% endcq %}

## 代码块

``` cpp Hello World https://xecades.xyz/ homepage
cout << "Hello World" << endl;
```

删减行

``` diff
- cout << "Goodbye World" << endl;
+ cout << "Hello World" << endl;
```

## note 标签

{% note primary %}
**primary** note tag
{% endnote %}

{% note success %}
**success** note tag
{% endnote %}

{% note info %}
**info** note tag
{% endnote %}

{% note warning %}
**warning** note tag
{% endnote %}

{% note danger %}
**danger** note tag
{% endnote %}

{% note default %}
**default** note tag
{% endnote %}

{% note %}
**none class** note tag
{% endnote %}

## Label 标签

{% cq %}I heard the echo, {% label default@from the valleys and the heart %}
Open to the lonely soul of {% label info@sickle harvesting %}
Repeat outrightly, but also repeat the well-being of
Eventually {% label warning@swaying in the desert oasis %}
{% label success@I believe %} I am
{% label primary@Born as the bright summer flowers %}
Do not withered undefeated fiery demon rule
Heart rate and breathing to bear {% label danger@the load of the cumbersome %}
Bored{% endcq %}

## 按钮

{% btn https://xecades.xyz/, 文本 %}
{% btn https://xecades.xyz/, 文本 & 标题,, 标题 %}
{% btn https://xecades.xyz/, 文本 & 图标, home %}
{% btn https://xecades.xyz/, 文本 & 大图标 (固定宽度), home fa-fw fa-lg %}

## tab 标签

语法:

```html
{% tabs [Unique name], [index] %}
  <!-- tab [Tab caption]@[icon] -->
  标签页内容（支持行内标签）
  <!-- endtab -->
{% endtabs %}
```

- Unique name: 全局唯一的 Tab 名称，将作为各个标签页的 id 属性前缀
- index: 当前激活的标签页索引，如果未定义则默认选中显示第一个标签页，如果设为 - 1 则默认隐藏所有标签页
- Tab caption: 当前标签页的标题，如果不指定则会以 Unique name 加上索引作为标题
- icon: 在标签页标题中添加 Font awesome 图标

{% tabs Tab标签列表 %}
  <!-- tab 标签页1 -->
    标签页1文本内容
  <!-- endtab -->
  <!-- tab 标签页2 -->
    标签页2文本内容
  <!-- endtab -->
  <!-- tab 标签页3 -->
    标签页3文本内容
  <!-- endtab -->
{% endtabs %}

## 插入 Swig 代码

可用于插入 html 等代码

```
{% raw %}
content
{% endraw %}
```

## Dplayer 视频播放器

```
{% dplayer "url=video-url" "pic=image-url" ... ["key=value"] %}
```

{% tabs key简介 %}
  <!-- tab 播放器 -->
    - autoplay：是否开启视频自动播放，默认为 fasle
    - loop：是否开启视频循环播放，默认为 false
    - screenshot：是否开启截图，默认为 false
    - mutex：是否禁止多个播放器同时播放，默认为 true
    - dmunlimited：是否开启海量弹幕模式，默认为 false
    - preload：预加载模式，可选 note metadata auto
    - theme：主题色
    - lang：语言，可选 en zh-cn zh-tw
    - logo：左上角的 Logo
    - volume：默认音量，默认为 0.7
    - width：播放器宽度
    - height：播放器长度
  <!-- endtab -->
  <!-- tab 视频 -->
    - url：视频链接
    - pic：视频封面
    - thumbnails：视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成
    - vidtype：视频类型，可选 auto hls flv dash 或其他自定义类型
  <!-- endtab -->
  <!-- tab 字幕 -->
    - suburl：字幕链接
    - subtype：字幕类型，可选 webvtt ass，目前只支持 webvtt
    - subbottom：字幕距离播放器底部的距离，如 10px 10%
    - subcolor：字幕颜色
  <!-- endtab -->
  <!-- tab 弹幕 -->
    - id：弹幕 id
    - api：弹幕 api
    - token：弹幕后端验证 token
    - addition：额外外挂弹幕
    - dmuser：弹幕用户名
    - maximum：弹幕最大数量
  <!-- endtab -->
{% endtabs %}

{% dplayer "url=https://cdn.xecades.xyz/image/fractal-vid1.mp4" "loop=true" %}

{% note info %}
更多配置参数请参考 [Dplayer 官方中文文档](http://dplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0)
{% endnote %}

## Keyboard 标签

 - {% kbd W %}
 - {% kbd Ctrl %} + {% kbd ALT %} + {% kbd DELETE %}
 - {% kbd Enter %}
 - {% kbd Shift %}
 - {% kbd Command %}
 - {% kbd Option %}

可用于展示按键操作

## Linkcard

<a href="https://www.luogu.com.cn/" class="LinkCard">Luogu</a>

<a href="https://xecades.xyz/" class="LinkCard">Xecades</a>

## TIY html 代码展示

<iframe frameborder="no" src="https://tiy.xecades.xyz/?file=MarginCollapse1" width="100%" height="500px"></iframe>