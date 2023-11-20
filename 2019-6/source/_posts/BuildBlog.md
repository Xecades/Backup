---
title: 用hexo和GitHub搭建个人博客
date: 2019-02-22 09:19:33
tags:
 - 教程
 - hexo
 - GitHub
categories:
 - 博客
mathjax: true
---
## 前言
　　由于版本更新缘故，$2018$年及以前的$hexo$博客搭建教程都对当前不适用，为了防止误导想搭建个人博客的小白，我总结并修改了网上部分搭建教程，如有不当请联系我，谢谢！
<!-- more -->
---
## 推荐
为了方便搭建个人博客，我推荐如下软件:
1. $VScode$:可以当作方便的$markdown$编**辑**器(功能不止这一个)，但启动速度慢
2. $notepad++$:轻量级编**辑**器，对不同编程语言有不同颜色的区分，启动速度快
3. $chrome$:在设计过程中预览效果较快

---
## 搭建$GitHub$仓库
### 注册$GitHub$
　　$GitHub$是一个面向开源及私有软件项目的托管平台，[官网地址](https://github.com/)，因为只支持git作为唯一的版本库格式进行托管，故名$GitHub$。

　　注册$GitHub$仓库用于存储你的博客，其实还可以用其他仓库，我还是推荐用$GitHub$。

　　注册过程很简单，我草草过一下(我创建名为$waterdrop100$的账号用于演示)。

![注册方法](https://i.loli.net/2019/02/20/5c6d3e2d2e658.png)

　　注册后还需要验证，它会给你的邮箱发一个链接，打开链接完成验证。
### 创建仓库
　　注册好后，单击左边提示栏的"$Create$ $a$ $repository$"，创建仓库。

　　在"$Repository$ $name$"栏里按`用户名.github.io`的格式填入，比如我应该填`waterdrop100.github.io`。

　　其他的不用填，直接点"$Create$ $repository$"，$GitHub$仓库创建完成！等待半个小时仓库才会生效。

---
## 搭建环境
### 下载$node.js$和$git$
　　下载链接:[$node.js$](https://nodejs.org/en/download/),[$git$](https://git-scm.com/downloads)。

　　$node.js$和$git$的安装很简单，网上资料很多，我就不多赘述了。

　　最好验证一下安装是否成功。打开$cmd$，输入`node -v`、`npm -v`和`git --version`，若输出正常则配置成功。

![配置成功!](https://i.loli.net/2019/02/20/5c6d44f5ae83e.png)

### 安装$hexo$
　　找一个你觉得~~安全~~好的地方新建文件夹用于存储本地博客，最好不要在系统盘($C$盘)建。我再E盘建了一个$blog$文件夹，再用$cmd$进入。

![进入文件夹](https://i.loli.net/2019/02/20/5c6d462777f7f.png)

　　再输入`npm install hexo -g`安装$hexo$，前面会有$3$个$WARN$不用管他(我也不知道是干嘛的)。

　　输入`hexo -v`，若输出版本信息，则安装成功。输入`hexo init`初始化文件夹(慢慢等)。

![更进一步](https://i.loli.net/2019/02/20/5c6d481bac403.png)

　　输入`npm install`安装插件.

![安装插件](https://i.loli.net/2019/02/20/5c6d489734d6a.png)

　　它的警告一样的不管(求大神告诉我到底是什么意思……)。至此$hexo$安装完毕。

### 体验$hexo$
　　如果你想看一下成果，那继续往下看。
　　输入`hexo g`更新文件，再输入`hexo s`开启本地测试用服务器。

![体验一下!](https://i.loli.net/2019/02/20/5c6d4ba074791.png)

　　在浏览器中输入网址`http://localhost:4000`预览你的博客！页面默认如下($hexo$默认创建了名为`Hello World`的文章)

![默认页面](https://i.loli.net/2019/02/20/5c6d4c62ac1eb.png)

---
## 连接$hexo$和$GitHub$
### 设置$git$用户名和邮箱
　　在博客目录(我的是$E:/blog$)右键，选择`Git Bash Here`，输入`git config --global user.name "你注册GitHub的用户名"`，设置$git$的用户名。

　　输入`git config --global user.email "你注册GitHub的邮箱"`，设置$git$的邮箱。

![设置用户名和邮箱](https://i.loli.net/2019/02/20/5c6d4ddbcd672.png)

### 配置$ssh$
　　采用$ssh$加密传输，防止信息被窃。

　　下面的教程适用于用户目录下没有$.ssh$文件夹的人，如果有且有3个文件($id\_rsa$、$id\_rsa.pub$和$known\_hosts$)，则可以直接跳过此节。

　　在$git$中输入`ssh-keygen -t rsa -C "你的邮箱"`，显示如下

![git的显示](https://i.loli.net/2019/02/20/5c6d4f134a664.png)

　　输入`eval "$(ssh-agent -s)"`将密钥添加到$ssh-agent$。

　　再输入`ssh-add ~/.ssh/id_rsa`(我不知道是干啥用的，这样输就对了…)。

![效果](https://i.loli.net/2019/02/20/5c6d50148e8bb.png)

　　打开$GitHub$，单击头像，选择`settings`，再选择`SSH and GPG keys`

![打开settings](https://i.loli.net/2019/02/20/5c6d509a71acc.png)
![选择SSH and GPG keys](https://i.loli.net/2019/02/20/5c6d512a3134f.png)

　　选择`New SSH key`，新建$ssh key$，粘贴用户目录下$.ssh$文件夹中$id\_rsa.pub$文件的内容。

![SSH key](https://i.loli.net/2019/02/20/5c6d51e0a09d1.png)

　　在$git$中输入`ssh -T git@github.com`，输入`yes`，若显示大概如下，则标准$ssh$配置成功。

![配置成功!](https://i.loli.net/2019/02/20/5c6d52bebc75c.png)

### 配置$\_config.yml$
　　在博客文件夹中有一个文件叫`_config.yml`，它是博客核心配置，用编辑器打开，在文件末尾有如下内容。

![_config.yml](https://i.loli.net/2019/02/20/5c6d53725becb.png)

　　将其修改为如下格式(注意，在每一个"$:$"后都必须有一个空格)

```yaml
deploy:
  type: git
  repository: git@github.com:你的GitHub用户名/你的GitHub用户名.github.io.git
  branch: master
```

　　其中`repository`一项是$GitHub$仓库页面的$ssh$地址。

![repository](https://i.loli.net/2019/02/20/5c6d54a23e507.png)

### 完成连接
　　现在$GitHub$和本地文件夹已经连接好了，下面讲解本地上传到$GitHub$的方法

　　打开$cmd$，安装扩展:`npm install hexo-deployer-git --save`。

　　先`hexo clean`清一下缓存。

　　输入`hexo d -g`生成$+$部署，这个命令很重要，以后每次对博客有更改都要上传部署。

![生成部署](https://i.loli.net/2019/02/20/5c6d579c2cf61.png)

　　等个几分钟，你的网页就可以访问了，地址是`GitHub用户名.github.io`，比如我的是`waterdrop100.github.io`。

---
## 发布文章
　　有了博客还不会发布文章怎么行呢，下面来讲如何发布文章。文章一般在主页显示，就是你日常写博客的文章啦！

　　在cmd中输入`hexo new 文章名`就会在`source\_posts`目录下创建一个名为`文章名.md`的文件，推荐用$VScode$打开，用$markdown$继续编辑。

![新建名为article的文章](https://i.loli.net/2019/02/21/5c6de407db7a3.png)

　　打开文件后，可以在右上角选择![按钮](https://i.loli.net/2019/02/21/5c6de498c2560.png)继续预览编辑。在文件开头有如下几行字:
```yaml
---
title: article　　　　　　　//文章名
date: 2019-02-21 07:32:26　//创建时间
tags:　　　　　　　　　　　　//标签
---
```
　　这些是此文章的配置，后面可以增添删改一些内容。

---
## 配置文件
　　前面说过$\_config.yml$是重要的配置文件，下面对其内容进行讲解(暂时不必更改)。
```yaml
# 字前面加"#"的是注释
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: Hexo # 网站主标题，可改
subtitle: # 网站副标题，可改
description: # 站点描述
keywords: # 在搜索引擎搜索到的关键词
author: John Doe # 博主名字，可改
language: # 语言
timezone: # 时区

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com # 站点地址
root: / # 主页位置
permalink: :year/:month/:day/:title/ # 日期显示方式
permalink_defaults:

# Directory
# 以下内容默认即可
source_dir: source 
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # 新文章的名称
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # 在新页面打开第三方链接
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight: # 高亮
  enable: true #是否启用
  line_number: true # 行号
  auto_detect: false # 自动检测代码语言
  tab_replace: # 替换Tab
  
# 主页设置
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  
# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# 日期/时间格式化
## Hexo用Moment.js插件来分析和显示日期
## 可以使用在以下网站定义的格式化类型
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD # 日期类型
time_format: HH:mm:ss # 时间类型

# 分页设置
## 把per_page设置成0来关闭分页
per_page: 10 # 每页显示文章数量
pagination_dir: page

# 扩展
## 插件下载地址: https://hexo.io/plugins/
## 主题下载地址: https://hexo.io/themes/
theme: landscape # 主题默认是landscape，后面教如何修改

# 部署
## 文档教程: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: git@github.com:waterdrop100/waterdrop100.github.io.git
  branch: master
```

---
## 小结
　　经过一番折腾，你的博客终于配置好了，但默认的页面不是很好看，下一篇文章讲解进一步的美化，让你的博客更个性化！

　　我的博客:`xecades.github.io`，欢迎访问！

---
编辑此文章我查阅的资料:
- https://www.cnblogs.com/fengxiongZz/p/7707219.html
- https://www.jianshu.com/p/9f0e90cc32c2
- https://www.jianshu.com/p/21c94eb7bcd1