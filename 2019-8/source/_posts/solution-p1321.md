---
title: 题解P1321[单词覆盖还原]
date: 2019-05-12 08:37:30
tags:
 - 题解
 - 字符串
 - 难度★★★☆☆
categories:
 - 题解
mathjax: true
toc: true
thumbnail: /gallery/16.jpg
---
## 链接

题目来源：<a href="https://www.luogu.org/problemnew/show/P1321" target="_blank">$P1321$</a>
<!-- more -->
---
## 题目描述

在一长串($3\leq l\leq255$)中被反复贴有$boy$和$girl$两单词，后贴上的可能覆盖已贴上的单词(没有被覆盖的用句点表示)，最终每个单词至少有一个字符没有被覆盖。问贴有几个$boy$几个$girl$?

---
## 输入输出格式

### 输入格式

一行被被反复贴有$boy$和$girl$两单词的字符串。

### 输出格式

两行，两个整数。第一行为$boy$的个数，第二行为$girl$的个数。

---
## 输入输出样例

### 输入样例`#1`
```
..boyogirlyy..girl...
```
### 输出样例`#1`
```
4
2
```

---
## 解答

仔细观察，$boy$和$girl$两词中没有重复的字母，并且题中说到字符串中只有$boy$、$girl$和句点，即只有以下字符：

$b$,$o$,$y$,$g$,$i$,$r$,$l$,$.$

但这不意味着直接统计非句点的字符数，因为每一个单词有可能不被遮完，如样例中分解如下：

1. $boy$
2. $o$
3. $girl$
4. $y$
5. $y$
6. $girl$

于是，我们可以把$boy$和$girl$中可能出现的重叠形式替换成某个字符(我用$a$替换$boy$的组合，用$z$替换$girl$的组合)

就可以得出这样的函数来替换：

```cpp
void replace_boy(char* sub,int len)//sub为boy可能的组合
{
    char *boy=strstr(str,sub);
    //strstr(str1,str2)函数在字符串str1中找str2并返回其首次出现的地址
    while(boy!=NULL)
    {
        *boy='a';//替换为a
        for(int i=1;i<len;i++)
            *(boy+i)='.';//后用句点替换
        boy=strstr(str,sub);//找下一个符合的
    }
}
void replace_girl(char* sub,int len)//本质上和replace_boy(char*,int)一样
{
    char *girl=strstr(str,sub);
    while(girl!=NULL)
    {
        *girl='z';
        for(int i=1;i<len;i++)
            *(girl+i)='.';
        girl=strstr(str,sub);
    }
}
```

可得出$boy$和$girl$有可能的组合如下：

1. $boy$
2. $bo$
3. $oy$
4. $b$
5. $o$
6. $y$
7. $girl$
8. $gir$
9. $irl$
10. $gi$
11. $ir$
12. $rl$
13. $g$
14. $i$
15. $r$
16. $l$

其中单个字母的($b$,$o$,$y$,$g$,$i$,$r$,$l$)可在判断$a$和$z$时一同判断

代码如下：
```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
using namespace std;

char str[260];

void init();
void replace_boy(char*,int);
void replace_girl(char*,int);

int main()
{
    cin>>str;
    init();
    int boy=0,girl=0;
    for(int i=0,len=strlen(str);i<len;i++)
    {
        if(str[i]=='a' || str[i]=='b' || str[i]=='o' || str[i]=='y')
            boy++;
        else if(str[i]=='z' || str[i]=='g' || str[i]=='i' || str[i]=='r' || str[i]=='l')
            girl++;
    }
    cout<<boy<<endl<<girl;
    cin.get();cin.get();
	return 0;
}
void init()
{
    replace_boy("boy",3);
    replace_boy("bo",2);
    replace_boy("oy",2);

    replace_girl("girl",4);
    replace_girl("gir",3);
    replace_girl("irl",3);
    replace_girl("gi",2);
    replace_girl("ir",2);
    replace_girl("rl",2);
    
}
void replace_boy(char* sub,int len)
{
    char *boy=strstr(str,sub);
    while(boy!=NULL)
    {
        *boy='a';
        for(int i=1;i<len;i++)
            *(boy+i)='.';
        boy=strstr(str,sub);
    }
}
void replace_girl(char* sub,int len)
{
    char *girl=strstr(str,sub);
    while(girl!=NULL)
    {
        *girl='z';
        for(int i=1;i<len;i++)
            *(girl+i)='.';
        girl=strstr(str,sub);
    }
}
```