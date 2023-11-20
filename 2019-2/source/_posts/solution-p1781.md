---
title: 题解P1781[宇宙总统]
date: 2019-02-16 10:34:53
tags:
 - 题解
categories: 题解
mathjax: true
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1781" target="_blank">$P1781$</a>

洛谷博客：<a href="https://tlblog.blog.luogu.org/solution-p1781" target="_blank">$P1781$</a>

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

实际上，这道题只要好好想一想，就很容易想到$string$字符串的比较。

**Q:字符串的长度不一样，怎么比较啊！**

**A:**长度不一样，就弄得一样呗，直接在不足长度的字符串前加空格就是了

我的解法可能很麻烦，但好理解

- 先用$num$变量来统计竞选人数
   ```cpp
   cin>>num;
   ```
- 为了保存方便，我们用一个结构体来统计
   ```cpp
   struct node{
	   string p;  //票数
	   int w;     //排号
   }n[30];
   ```
- 用$len$来统计最大长度，用$max()$选择最大长度，输入和最大长度可以放在一起解决
   ```cpp
   for(int i=1;i<=num;i++)
   {
	   cin>>n[i].p;
	   n[i].w=i;
	   len=max(len,(int)(n[i].p).length());
   }
   ```
- 在每一个票数前加上空格，用一个简简单单的$while$就好了
   ```cpp
   while((int)(n[i].p).length()<=len)//转换成int类型,不然编译器报错不好看^+_+^
	   n[i].p=' '+n[i].p;
   ```
- 我们用$maxs$来记录最大的票数，用$maxi$记录最大票数的排号，依次判断更新如下
   ```cpp
   if(n[i].p>maxs)
   {
	   maxs=n[i].p;
	   maxi=n[i].w;
   }
   ```
- 判断完后就要输出，只不过问题就来了：最大票数前面的空格怎么办？于是我们可以一位一位地输出：
   ```cpp
   for(int i=1;i<=len;i++)
	   if(maxs[i]!=' ')//不是空格就输出
		   cout<<maxs[i];
   ```

### 好了，完整的代码如下
```cpp
#include<iostream>
#include<string>
using namespace std;
struct node{
	string p;
	int w;
}n[30];
string maxs;
int num,len=0,maxi=0;
int main()
{
	cin>>num;
	for(int i=1;i<=num;i++)
	{
		cin>>n[i].p;
		n[i].w=i;
		len=max(len,(int)(n[i].p).length());
	}
	for(int i=1;i<=num;i++)
	{
		while((int)(n[i].p).length()<=len)
			n[i].p=' '+n[i].p;
		if(n[i].p>maxs)
		{
			maxs=n[i].p;
			maxi=n[i].w;
		}
	}
	cout<<maxi<<endl;
	for(int i=1;i<=len;i++)
		if(maxs[i]!=' ')
			cout<<maxs[i];
	return 0;
}
```
