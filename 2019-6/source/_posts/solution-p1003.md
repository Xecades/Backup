---
title: 题解P1003[铺地毯]
date: 2019-04-05 16:42:51
tags:
 - 题解
 - 模拟
 - 难度★☆☆☆☆
categories:
 - 题解
mathjax: true
comments: true
sidebar: true
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1003" target="_blank">$P1003$</a>
<!-- more -->
---
## 题目描述

为了准备一个独特的颁奖典礼，组织者在会场的一片矩形区域（可看做是平面直角坐标系的第一象限）铺上一些矩形地毯。一共有$n$张地毯，编号从$1$到$n$。现在将这些地毯按照编号从小到大的顺序平行于坐标轴先后铺设，后铺的地毯覆盖在前面已经铺好的地毯之上。

地毯铺设完成后，组织者想知道覆盖地面某个点的最上面的那张地毯的编号。注意：在矩形地毯边界和四个顶点上的点也算被地毯覆盖。

---
## 输入输出格式

### 输入格式

输入共$n+2$行

第一行，一个整数$n$，表示总共有$n$张地毯

接下来的$n$行中，第$i+1$行表示编号$i$的地毯的信息，包含四个正整数$a,b,g,k$，每两个整数之间用一个空格隔开，分别表示铺设地毯的左下角的坐标$(a,b)$以及地毯在$x$轴和$y$轴方向的长度

第$n+2$行包含两个正整数$x$和$y$，表示所求的地面的点的坐标$(x,y)$

### 输出格式

输出共$1$行，一个整数，表示所求的地毯的编号；若此处没有被地毯覆盖则输出$−1$

---
## 输入输出样例

### 输入样例`#1`
```
3
1 0 2 3
0 2 3 3
2 1 3 3
2 2
```
### 输出样例`#1`
```
3
```
### 输入样例`#2`
```
3
1 0 2 3
0 2 3 3
2 1 3 3
4 5
```
### 输出样例`#2`
```
-1
```

---
## 说明

### 样例$1$解释

如下图，$1$号地毯用实线表示，$2$号地毯用虚线表示，$3$号用双实线表示，覆盖点$(2,2)$的最上面一张地毯是$3$号地毯。
![](https://i.loli.net/2019/04/05/5ca716f76ecb6.png)

### 数据范围

对于$30\%$的数据，有$n≤2$

对于$50\%$的数据，$0≤a,b,g,k≤100$

对于$100\%$的数据，有$0≤n≤10,000$ ，$0≤a,b,g,k≤100,000$。

$NOIP2011$提高组$Day1$第$1$题

---
## 解答

这道题，一般人会想到用二维数组来模拟地毯覆盖，如下：
```cpp
int m[MAX][MAX];
```
但因为$0≤a,b,g,k≤100,000$，$MAX$必须设的很大，为$200002$，明显 ~~超量程了(哦，对不起物理学多了)~~ 会超内存限制。

所以进而容易想到判断题目给的要求的点是否在每个地毯范围内，我的代码如下：

```cpp
#include<iostream>
#include<cstring>
#include<cstdio>
#include<vector>
using namespace std;

vector<int> a,b,lenx,leny;//用STL的vector存储,方便快捷
int n,x,y,set=0;

void cover(int);

int main()
{
    cin>>n;
    int tmp;//用临时变量读入a,b,lenx,leny
    for(int i=0;i<n;i++)
    {
        cin>>tmp;
        a.push_back(tmp);
        //push_back()是vector的追加命令
        cin>>tmp;
        b.push_back(tmp);
        cin>>tmp;
        lenx.push_back(tmp);
        cin>>tmp;
        leny.push_back(tmp);
    }
    cin>>x>>y;
    for(int i=0;i<n;i++)//依次判断是否覆盖
        cover(i);//覆盖第i号地毯

    if(set==0) cout<<-1;//别忘了这一步
    else       cout<<set;

    return 0;
}
void cover(int k)
{
    int i=x-a[k],j=y-b[k];
    if(i>=0 && i<=lenx[k] && j>=0 && j<=leny[k])
        set=k+1;//因为k是从0到n-1的，所以最后要加1
}
```