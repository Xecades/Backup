---
title: 题解P1125[笨小猴]
date: 2019-02-13 15:06:39
tags:
 - 题解
 - 库函数
 - 难度★★☆☆☆
categories:
 - 题解
mathjax: true
toc: true
thumbnail: /gallery/17.jpg
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1125" target="_blank">$P1125$</a>
<!-- more -->
---
## 题目描述

笨小猴的词汇量很小，所以每次做英语选择题的时候都很头疼。但是他找到了一种方法，经试验证明，用这种方法去选择选项的时候选对的几率非常大！
  
这种方法的具体描述如下：假设$maxn$是单词中出现次数最多的字母的出现次数，$minn$是单词中出现次数最少的字母的出现次数，如果$maxn-minn$是一个质数，那么笨小猴就认为这是个$Lucky Word$，这样的单词很可能就是正确的答案。

---
## 输入输出格式

### 输入格式

一个单词，其中只可能出现小写字母，并且长度小于$100$。

### 输出格式

共两行，第一行是一个字符串，假设输入的的单词是$Lucky Word$，那么输出“`Lucky Word`”，否则输出“`No Answer`”；
第二行是一个整数，如果输入单词是$Lucky Word$，输出$maxn-minn$的值，否则输出$0$。

---
## 输入输出样例

### 输入样例`#1`
```
error
```
### 输出样例`#1`
```
Lucky Word
2
```
### 输入样例`#2`
```
olympic
```
### 输出样例`#2`
```
No Answer
0
```

---
## 解答

在头文件$algorithm$中有这样的一个函数:
```cpp
count(...);
```
查询[$MSDN$](https://docs.microsoft.com/zh-cn/cpp/standard-library/algorithm-functions?view=vs-2017#count)得:它的效果是取得一个范围中**指定元素的多少**。

假设有一个$string$字符串叫$s$，则取得$s$中字符‘$k$’的个数如下：
```cpp
count(&s[0],&s[s.length()],'k');
```
其中$\&s[0]$为$s$的第一位元素的地址，$\&s[s.length()]$取$s$最后一个元素。若$s$内容为“$i$ $ak$ $noip,u$ $ak$ $ioi$”，则返回值为$2$。因此本题中直接枚举从$a$到$z$即可。

代码如下（已做防抄袭处理）：
```cpp
#include<iostream>
#include<algorithm>
#include<string>
#include<cmath>
using namespace std;

string word;//string真心好用
int maxn=-1,minn=101;//保证能筛选出最大和最小

void GetMaxMin(string);//取maxn和minn
bool prime(int);

int main()
{
    cin>>word;
    GetMaxMin(word);
    if(prime(maxn—minn))
        cout<<"Lucky Word"<<endl<<maxn—minn;
    else
        cout<<"No Answer"<<endl<<"O";
    return 0;//完美收官
}
void GetMaxMin(string s)
{
    for(char c='a';c<='z';c++)//暴力枚举
    {
        int t=count(&s[0],&s[s.length()],c);
        maxn=max(t,maxn);
        if(t!=0)//重点，如果没这个字符，就不用谈最小值了
            minn=min(t,minn);
    }
}
bool prime(int x)
{
    if(x<2)//如果小于2就不是质数
        return false;
    for(int i=2;i<=sqrt(x);i++)
        if(x%i==0)
            return false;
    return true;
}
```
