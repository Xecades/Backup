---
title: map类
date: 2019-02-13 11:38:42
tags:
 - STL
 - 数据结构
categories:
 - STL
---
$map$是$STL$的一个**关联容器**，它提供一对一（其中第一个可以称为关键字，每个关键字只能在$map$中出现一次，第二个可能称为该关键字的值）的数据 处理能力，由于这个特性，它完成有可能在我们处理一对一数据的时候，在编程上提供快速通道。$map$内部自建一颗红黑树(一 种非严格意义上的平衡二叉树)，这颗树具有对数据自动排序的功能，所以在$map$内部所有的数据都是**有序的**。

<!-- more -->

---
## 优点及功能

- 自动建立$key-value$（下表-值）的对应。$key$和$value$可以是**任意**需要的类型。
- 根据$key$值快速查找记录，查找的复杂度基本是**Log(N)**，如果有$1000$个记录，最多查找$10$次；$1,000,000$个记录，最多查找$20$次。
- 快速**插入**$Key$-$Value$ 记录。
- 快速**删除**记录
- 根据$key$修改$value$记录。
- 遍历所有记录。

---
## 声明

头文件如下:
```cpp
#include <map>
```
声明$map$需要关键字和存储对象两个模板参数：
```cpp
std::map<int,string> m;
```
其中$int$为索引，$string$为存储对象

---
## 插入数据

1. 用$insert$函数插入$pair$数据:
```cpp
#include <map>
#include <string>
#include <iostream>
using namespace std;
int main()
{
    map<int, string> mapStudent;
    mapStudent.insert(pair<int, string>(1, "student_one"));
    mapStudent.insert(pair<int, string>(2, "student_two"));
    mapStudent.insert(pair<int, string>(3, "student_three"));
    map<int, string>::iterator iter;
    for(iter = mapStudent.begin(); iter != mapStudent.end(); iter++)
        cout<<iter->first<<' '<<iter->second<<endl;
    return 0;
}
```