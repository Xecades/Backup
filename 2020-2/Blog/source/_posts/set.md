---
title: set类
date: 2019-02-13 11:38:42
tags:
 - STL
 - 数据结构
categories:
 - STL
mathjax: true
---

$set$的特性是，所有元素都会根据元素的键值**自动排序**，$set$的元素不像$map$那样可以同时拥有实值($value$)和键值($key$),$set$元素的键值就是实值，实值就是键值。$set$不允许两个元素有相同的键值(即不能重复，而$multiset$允许重复)。

<!-- more -->

---
## 建立

包含$set$的头文件如下：
```cpp
#include<set>
```
$set$类型名称：$set$<$T$>或是$set$<$T$,$Ordering$>，表明由$T$类型的元素构成的一个$set$，$Ordering$用于对元素进行排序，以便存储，如果没有指定，默认为小于。

迭代器：$iterator$、$const$_$iterator$、$reverse$_$iterator$、$const$_$reverse$_$iterator$，所有迭代器都是双向的，除了$const$_修饰的都是可变的，$begin()$、$end()$、$rbegin()$、$rend()$具有预期的行为，**一般的增删元素不影响迭代器**，除非定位的是要删除的元素。

---
## 方法

```cpp
1. s.insert()
   //将元素的一个副本插入set，不能重复插入相同的元素，
   //而set中的a和b重复："a必须排在b前面"和"b必须排在a前面"都不成立  
2. s.erase()
   //从set中删除元素，没有则没有任何效果 
3. s.erase()
   //删除迭代器定位的位置处的元素
4. s.find()
   //返回一个可变迭代器，它定位到set中的元素的一个副本，如果元素不在set中则返回s.end() 
5. s.size()
   //返回set的元素数量 
6. s.empty()
   //判断set是否为空 
7. s1==s2
   //如果set中包含相同的元素就返回true，否则返回false
8. s.begin()
   //返回set的第一个元素
9. s.end()
   //返回set的最后一个元素
10.s.clear()
   //删除set中的所有的元素
11.s.empty()
   //判断set是否为空
12.s.max_size()
   //返回set可能包含的元素最大个数
13.s.rbegin()
   //返回指向集合中最后一个元素的反向迭代器
14.s.rend()
   //返回指向集合中第一个元素的反向迭代器
```

---
## 示例

```cpp
#include<iostream>
#include<set>
using namespace std;
int main()
{
    set<char> s;
    s.insert('A');
    s.insert('D');
    s.insert('D');
    s.insert('C');
    s.insert('C');
    s.insert('B');
    cout<<"The set contains:\n";
    set<char>::const_iterator p;
    for(p=s.begin();p!=s.end();p++)
        cout<<*p<<" ";
    cout<<endl;
    cout<<"Removing C.\n";
    s.erase('C');
    for(p=s.begin();p!=s.end();p++)
        cout<<*p<<" ";
    cout<<endl;
    return 0;
}
```
输出：
```cpp
The set contains:
A B C D
Removing C.
A B D
```