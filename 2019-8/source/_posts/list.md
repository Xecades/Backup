---
title: list类
date: 2019-02-13 11:38:42
tags:
 - STL
 - 类
 - 数据结构
categories:
 - STL
mathjax: true
toc: true
thumbnail: /gallery/4.jpg
---
## list介绍

$list$是双向链表结构，它的数据由若干个节点构成，每一个节点都包括一个信息块（即实际存储的数据）、一个前驱指针和一个后驱指针。
<!-- more -->
---
## 特点

1. 不能随机访问
2. 插入或删除数据非常迅速

---
## 方法
```cpp
1. assign()
   //给list赋值 
2. back()
   //返回最后一个元素 
3. begin()
   //返回指向第一个元素的迭代器 
4. clear()
   //删除所有元素 
5. empty()
   //如果list是空的则返回true 
6. end()
   //返回末尾的迭代器 
7. erase()
   //删除一个元素 
8. front()
   //返回第一个元素 
9. get_allocator()
   //返回list的配置器 
10.insert()
   //插入一个元素到list中 
11.max_size()
   //返回list能容纳的最大元素数量 
12.merge()
   //合并两个list 
13.pop_back()
   //删除最后一个元素 
14.pop_front()
   //删除第一个元素 
15.push_back()
   //在list的末尾添加一个元素 
16.push_front()
   //在list的头部添加一个元素 
17.rbegin()
   //返回指向第一个元素的逆向迭代器 
18.remove()
   //从list删除元素 
19.remove_if()
   //按指定条件删除元素 
20.rend()
   //指向list末尾的逆向迭代器 
21.resize()
   //改变list的大小 
22.reverse()
   //把list的元素倒转 
23.size()
   //返回list中的元素个数 
24.sort()
   //给list排序 
25.splice()
   //合并两个list 
26.unique()
   //删除list中重复的元素
```

---
此文根据网络资源整理修改。
