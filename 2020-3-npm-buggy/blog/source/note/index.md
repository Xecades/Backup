---
title: 笔记
date: 2019-02-14 07:37:05
mathjax: true
sidebar: false
notoc: true
---

一些笔记内容

---

# 算法

## 快速幂

1. 折半计算，分治
2. 代码实现(`ll`是`long long`)：
   求$a^b\operatorname{mod}k$
   ```cpp
   ll power(ll a, ll b, ll k) //(a ^ b) % k
   {
       ll ans = 1 % k;
       for (; b; b >>= 1)
       {
           if (b & 1)
               ans = ans * a % k;
           a = a * a % k;
       }
       return ans;
   }
   ```
3. 思想：二进制拆分

---

# 数据结构

## $STL$

1. $\mathtt{STL}$中包含如下头文件
   - $\mathtt{algorithm}$，算法
   - $\mathtt{deque}$，双端队列
   - $\mathtt{iterator}$，迭代器
   - $\mathtt{vector}$，可变长数组
   - $\mathtt{list}$，表
   - $\mathtt{map}$，一对一关联容器
   - $\mathtt{queue}$，队列，线性表
   - $\mathtt{set}$，排序不重存储
   - $\mathtt{multiset}$，排序可重存储
   - $\mathtt{stack}$，栈
2. $\mathtt{priority}$_$\mathtt{queue}$是优先队列，本质是一个堆

---

# 数学

## 二进制

1. 一个数的相反数的二进制表示是原数的二进制每一位取反再加$1$
2. $lowbit(x)=x$&$(-x)$，其值二进制只会有$1$个$1$，标志$x$二进制下从后往前数$0$截止的位置，可以这样遍历所有$1$的位置

---

## 基姆拉尔森计算公式

就是星期运算法则

计算今天星期几

$$W=(d+2m+\lfloor\frac{3(m+1)}{5}\rfloor+y+\lfloor\frac{y}{4}\rfloor-\lfloor\frac{y}{100}\rfloor+\lfloor\frac{y}{400}\rfloor+1)\operatorname{mod}7$$

```cpp
#include <iostream>
using namespace std;

int d, m, y, W;

int main()
{
    //year month day
    cin >> y >> m >> d;
    W = (d + 2 * m + (3 * m + 3) / 5 + y + y / 4 - y / 100 + y / 400 + 1) % 7;
    cout << W;
    return 0;
}
```
