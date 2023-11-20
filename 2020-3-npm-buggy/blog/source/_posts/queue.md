---
title: queue类
date: 2019-02-13 11:38:42
tags:
 - STL
 - 数据结构
categories:
 - STL
mathjax: true
---

$queue$类是$STL$的一个模板类,队列,是一种先进先出($FIFO$)的数据结构,读音和$Q$类似

<!-- more -->

$queue$包含在头文件$queue$中:
```cpp
#include<queue>
```

---
## 定义方式

```cpp
queue<int> Q;
```
即
```cpp
queue<operator> name;
```

---
## 使用方法

```cpp
1. Q.empty();
   //返回队列是否为空
2. Q.size();
   //返回当前队列长度
3. Q.front();
   //返回当前队列的第一个元素
4. Q.back();
   //返回当前队列的最后一个元素
5. Q.push();
   //在队列后面插入一个元素, 比如插入数字5:Q.push(5)
6. Q.pop();
   //从当前队列里,移出第一个元素
```

---
## 代码示例

```cpp
#include<iostream>
#include<queue>
using namespace std;
typedef queue<int> q_i;

q_i Q;

int main()
{
    cout<<"Queue empty?\t"<<Q.empty()<<endl;

    for(int i=1;i<=10;i++)
        Q.push(i);//入队

    cout<<"Queue empty?\t"<<Q.empty()<<endl;
    cout<<"Queue size:\t"<<Q.size()<<endl;
    cout<<endl;
    
    //出队法遍历清空原数据 
    for(int i=1;i<=10;i++)
    { 
        cout<<"Queue front:\t"<<Q.front()<<endl;    
        Q.pop();//出队
    }
    cout<<endl;
    cout<<"Queue empty?\t"<<Q.empty()<<endl;
    return 0;
}
```

输出
```cpp
Queue empty?    1   //true
Queue empty?    0   //false
Queue size:     10

Queue front:    1
Queue front:    2
Queue front:    3
Queue front:    4
Queue front:    5
Queue front:    6
Queue front:    7
Queue front:    8
Queue front:    9
Queue front:    10

Queue empty?    1   //true
```