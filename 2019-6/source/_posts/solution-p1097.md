---
title: 题解P1097[统计数字]
date: 2019-04-05 17:50:35
tags:
 - 题解
 - STL
 - 难度★★☆☆☆
categories:
 - 题解
mathjax: true
comments: true
sidebar: true
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1097" target="_blank">$P1097$</a>
<!-- more -->
---
## 题目描述

某次科研调查时得到了$n$个自然数，每个数均不超过$1500000000(1.5\times10^9)$。已知不相同的数不超过$10000$个，现在需要统计这些自然数各自出现的次数，并按照自然数从小到大的顺序输出统计结果。

---
## 输入输出格式

### 输入格式

共$n+1$行。

第一行是整数$n$，表示自然数的个数；

第$2$至$n+1$每行一个自然数。

### 输出格式

共$m$行（$m$为$n$个自然数中不相同数的个数），按照自然数从小到大的顺序输出。

每行输出$2$个整数，分别是自然数和该数出现的次数，其间用一个空格隔开。

---
## 输入输出样例

### 输入样例`#1`
```
8
2
4
2
4
5
100
2
100
```
### 输出样例`#1`
```
2 3
4 2
5 1
100 2
```

---
## 说明

$40\%$的数据满足：$1≤n≤1000$

$80\%$的数据满足：$1≤n≤50000$

$100\%$的数据满足：$1≤n≤200000$，每个数均不超过$1500000000(1.5\times10^9)$

$NOIP$ $2007$提高第一题

---
## 解答

精通$STL$的人很容易会想到用神器$map$来存储，它相对于普通数组有如下优点：

- 默认按升序排序
- 对每一个数都有一个映射
- 简便，遍历方便
- $\dots$

因为每个数均不超过$1.5\times10^9$，所以大可以用$int$而不是$string$。

代码如下：

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<map>//map必备的头文件
using namespace std;
typedef map<int,int> map_i;//太长一串太烦人

int n;
map_i m;

int main()
{
    cin>>n;
    int tmp;
    for(int i=0;i<n;i++)
    {
        cin>>tmp;
        m[tmp]++;//如果没有tmp，m会自动创建，其映射默认值为0
    }

    for(map_i::iterator i=m.begin();i!=m.end();i++)//iterator是迭代器，用于遍历m
    {
        cout<<i->first<<" "<<i->second<<endl;
        //直接输出key和value即可
    }
    return 0;
}
```