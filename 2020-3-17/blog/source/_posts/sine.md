---
title: 手动求正弦
mathjax: true
date: 2020-02-27 23:46:53
tags:
 - 数学
categories:
 - 数学
---

呃……看这公式的复杂程度，貌似不好手动求来着……

<!-- more -->

## 泰勒展开

正弦函数的泰勒展开式：

$$\sin\alpha=\sum_{i=1}^{+\infty}\frac{\alpha^{2i-1}}{(2i-1)!}\cdot(-1)^{i+1}$$

人话版本：

$$\sin\alpha=\frac{\alpha^1}{1!}-\frac{\alpha^3}{3!}+\frac{\alpha^5}{5!}-\frac{\alpha^7}{7!}\cdots$$

可见，当式子中的 i 越大时，$\sin\alpha$ 的求得值与实际值的偏移量越小

## 代码实现

```cpp TaylorSine
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <algorithm>
#include <cmath>
using namespace std;
#define int long long

double calc[100];
// double power[100];
// int fc[100];
double x;
int esp;
double ans = 0;

void init(int);

signed main()
{
	// 对 x 求 sin，x 用弧度制表示
	// 参考: pi / 4 = 0.78539815
	// esp 是精度，即计算次数
	cin >> x >> esp;
	init(esp);
	for (int i = 1; i <= esp && calc[i] != 0; i++)
	{
		// printf("%.15lf\n", calc[i]);
		ans += (i & 1) ? calc[i] : -calc[i];
	}
	printf("%.15lf", ans);
	return 0;
}

void init(int esp)
{
	calc[1] = x;
	for (int i = 2; i <= esp; i++)
	{
		calc[i] = calc[i - 1] / (double)(i * 2 - 1) / (double)(i * 2 - 2) * x * x;
		// 此处采用继承加速，注释为没有使用继承的版本
		// power[i] = power[i - 1] * x * x;
		// fc[i] = fc[i - 1] * (i * 2 - 1) * (i * 2 - 2);
	}
}
```