---
title: 题解P1781[宇宙总统]
date: 2019-02-16 10:34:53
tags:
 - 题解
 - 字符串
 - 难度★☆☆☆☆
categories:
 - 题解
mathjax: true
toc: true
thumbnail: /gallery/15.jpg
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1781" target="_blank">$P1781$</a>
<!-- more -->
---
## 题目背景

　　宇宙总统竞选

---
## 题目描述

地球历公元$6036$年，全宇宙准备竞选一个最贤能的人当总统，共有$n$个非凡拔尖的人竞选总统，现在票数已经统计完毕，请你算出谁能够当上总统。

---
## 输入输出格式

### 输入格式：

第一行为一个整数$n$,代表竞选总统的人数。

接下来有$n$行，分别为第一个候选人到第$n$个候选人的票数。

### 输出格式：

共两行，第一行是一个整数$m$，为当上总统的人的号数。

第二行是当上总统的人的选票。

---
## 输入输出样例

### 输入样例`#1`
```
5
98765
12365
87954
1022356
985678
```
### 输出样例`#1`
```
4
1022356
```

---
## 说明

票数可能会很大，可能会到$100$位数字。

$n\leqslant20$

---
## 解答

**这个题，乍一看，我还以为是用高精...**

~~相信很多人都会和我想的一样~~

实际上，只要好好想一想，就很容易想到$string$字符串的比较。

此解法核心：当当前输入和当前最大值字符串位数相同时，直接用$">"$比较，位数不同时，直接比位数(特别感谢[@crab-in-the-northeast](https://crab-in-the-northeast.gitee.io/)提醒)

我们用$maxs$来记录最大的票数，用$maxi$记录最大票数的排号，依次判断更新如下
```cpp
int tmplen=tmp.length();
int maxslen=maxs.length();
if((tmp>maxs && tmplen==maxslen) || tmplen>maxslen)
{
    maxs=tmp;
    maxi=i;
}
```
完整的代码如下
```cpp
#include<iostream>
#include<string>
using namespace std;
string tmp,maxs;
int n,maxi=0;
int main()
{
    cin>>n;
    for(int i=1;i<=n;i++)
    {
        cin>>tmp;
        int tmplen=tmp.length();
        int maxslen=maxs.length();
        if((tmp>maxs && tmplen==maxslen) || tmplen>maxslen)
        {
            maxs=tmp;
            maxi=i;
        }
    }
    cout<<maxi<<endl<<maxs;
    return 0;
}
```