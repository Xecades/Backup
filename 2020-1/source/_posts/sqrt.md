---
layout: post
title: 手动开平方
date: 2019-11-10 22:50:52
tags:
 - 数学
categories:
 - 数学
---

$\sqrt n$可以用如下方法计算

<!-- more -->

---
## 例子

假设要求$\sqrt{13}$的粗略值

$\because3<\sqrt{13}<4$

$\therefore设 x=\sqrt{13}-3$

$\therefore\sqrt{13}=3+x$

$\therefore13=3^2+2\times3x+x^2=9+6x+x^2$

$\because x<1$

$\therefore x^2小到可以忽略不计$

$\therefore 13=9+6x$

$解得x\approx0.667$

$\therefore\sqrt{13}\approx3+0.667=3.667,但一次计算,不精确$

$\therefore继续设 x=\sqrt{13}-3.667$

$平方:13=13.4469+7.334x+x^2$

$x^2忽略$

$\therefore13.4469+7.334x=13$

$解得x\approx-0.061$

$\therefore\sqrt{13}\approx3.667+(-0.061)=3.606$

和准确值$(3.605551275464...)$相差无几，要求更精确的值，多次计算即可

---
## 代码

```cpp
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <algorithm>
#include <map>
using namespace std;

int wd, t;
double apx = 0;
map<double, bool> mem;

int main()
{
	cin >> wd;
	if (wd < 0)
	{
		printf("Num shouldn\'t be negative.");
		return 0;
	}
	for (apx = 1; apx * apx <= wd; apx++);
	apx--;
	// wd = apx * apx + 2 * apx * x
	getchar();
	while (true)
	{
		apx += (wd - apx * apx) / (2 * apx);
		if (mem[apx])
		{
			printf("This is my best...\n");
			break;
		}
		printf("sqrt(%d) = %.14lf", wd, apx);
		getchar();
		mem[apx] = true;
	}
	return 0;
}
```