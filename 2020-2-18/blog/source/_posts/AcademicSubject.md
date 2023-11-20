---
layout: post
title: 颓文化课
date: 2020-01-23 08:54:41
tags:
 - 文化课
 - 数学
categories:
 - 文化课
mathjax: true
---

记录一下一些好玩的题

<!-- more -->

貌似这不属于文化课来着（~~不管了~~

---
## 关于复数

### T1

设$z_1,z_2\in\mathbb C$，且$|z_1|=2$，$|z_2|=9$，$|5z_1-z_2|=7$，求$|5z_1+z_2|$的值。

### T2

模长为$1$的复数$A$、$B$、$C$，满足$A+B+C \neq 0$，求$\frac{A B+B C+C A}{A+B+C}$的模长

### T3

已知$z_{1}, z_{2}, z_{3}$的辐角分别为$\alpha, \beta, \gamma$，又$\left|z_{1}\right|=1,\left|z_{2}\right|=k,\left|z_{3}\right|=2-k$，且$z_{1}+z_{2}+z_{3}=0$，求$\cos (\beta-\gamma)$的取值范围

### T4

非零复数$z_{1}, z_{2}$的辐角分别为$\theta_{1}, \theta_{2}$，若$z_{1}+z_{2}=5 i$，$\left|z_{1} z_{2}\right|=14$，求$\cos \left(\theta_{1}-\theta_{2}\right)$的最大值，并求$\cos \left(\theta_{1}-\theta_{2}\right)$取得最小值时$z_{1}, z_{2}$的值

### T5

已知复数z满足$|z|=1, \omega=z^{4}-z^{3}-3 z^{2} i-z+1$，求使$|\omega|$取得最小值的复数$z$

### T6

已知$x, y, A, B \in R, A=x \cos ^{2} \theta+y \sin ^{2} \theta, B=x \sin ^{2} \theta+y \cos ^{2} \theta$，证明：$x^{2}+y^{2} \geq A^{2}+B^{2}$

---
## 笔记

### 复数的四种表达形式

 - 代数形式：$z=a+b i(a, b \in R)$

 - 几何形式：复平面上的点$Z(a, b)$或由原点出发的向量$\overrightarrow{O Z}$

 - 三角形式：$z=r(\cos \theta+i \sin \theta), r \geq 0,0 \in R$

 - 指数形式：$z=r e^{i \theta}$

---
### 复数的运算法则

加减法

$$(a+b i) \pm(c+d i)=(a \pm c)+(b \pm d) i$$

乘法

$$(a+b i)(c+d i)=(a c-b d)+(b c+a d) i$$

$$r_{1}\left(\cos \theta_{1}+i \sin \theta_{1}\right) \cdot r_{2}\left(\cos \theta_{2}+i \sin \theta_{2}\right)=r_{1} r_{2}\left[\cos \left(\theta_{1}+\theta_{2}\right)+i \sin \left(\theta_{1}+\theta_{2}\right)\right]$$

除法

$$\frac{a+b i}{c+b i}=\frac{a c+b d}{c^{2}+d^{2}}+\frac{b c-a d}{c^{2}+d^{2}} i(c+d i \neq 0)$$

$$\frac{r_{1}\left(\cos \theta_{1}+i \sin \theta_{1}\right)}{r_{2}\left(\cos \theta_{2}+i \sin \theta_{2}\right)}=\frac{r_1}{r_2}[\cos \left(\theta_{1}-\theta_{2}\right)+i \sin \left(\theta_{1}-\theta_{2}\right)]$$

乘方

$$[r(\cos \theta+i \sin \theta)]^{n}=r^{n}(\cos n \theta+i \sin n \theta)(n \in \mathbf{N})$$

开方　复数$r(\cos \theta+i \sin \theta)$的$n$次方根是

$$\sqrt[n]{r}\left(\cos \frac{\theta+2 k \pi}{n}+i \sin \frac{\theta+2 k \pi}{n}\right)(k-0,1,\dots, n-1)$$

---
### 复数解题常用技巧

圆：$\left|Z-Z_{0}\right|=r$

线段中垂线：$\left|Z-Z_{1}\right|=\left|Z-Z_{2}\right|$

椭圆：$|Z-Z_{1}|+| Z-Z_{2}\left|=2 a\left(2 a>\left|Z_{1}-Z_{2} \right|\right)\right.$

双曲线：$\left\|Z-Z_{1}|-| Z-Z_{2}\right\|=2 a\left(2 a<\left|Z_{1}-Z_{2}\right|\right)$

---
### 一些小定理的证明 - 单位复数根

> 解方程$Z^n=1(z\in\mathbb C)$

显然$Z$为单位复数。

把右式$1$看作辐角为$0$的单位复数，显然有$Z_0=1$

看作辐角为$2\pi$的单位复数，有$Z_1=\cos\frac{2\pi}{n}+i\sin\frac{2\pi}{n}$

看作辐角为$4\pi$的单位复数，有$Z_2=\cos\frac{4\pi}{n}+i\sin\frac{4\pi}{n}$

$\dots$

$Z_{n-1}=\cos\frac{2(n-1)\pi}{n}+i\sin\frac{2(n-1)\pi}{n}$

一共只有这n个根，因为$Z_n=\cos\frac{2n\pi}{n}+i\sin\frac{2n\pi}{n}=Z_0$

然后一直循环下去

然后设$Z_1=\omega$，可得$Z_2=\omega^2\dots$，$Z_{n-1}=\omega^{n-1}$，$Z_0=1$不变

把它们画在复平面上，可得它们把一个单位圆$n$等分

![复平面n等分](https://cdn.xecades.xyz/image/AcademicSubject-pic1.png)

所以$Z^n=1$有$n$个复数解为$1,\omega,\omega^2\dots,\omega^{n-1}$，下面看看这些根有什么特性

把方程$Z^n=1$展开：

$$Z^n=1\Rightarrow Z^n-1=0$$

$$\Rightarrow (Z-1)(1+Z+Z^2+\dots+Z^{n-1})=0$$

显然$Z_0=1$是$Z-1=0$的根，这说明其余$\omega,\omega^2\dots,\omega^{n-1}$是$1+Z+Z^2+\dots+Z^{n-1}$的根

把$\omega$带入：

$$1+\omega+\omega^2+\dots+\omega^{n-1}=0$$

可得其实部之和为$0$：

$$1+\cos\frac{2\pi}{n}+\dots+\cos\frac{2(n-1)\pi}{n}=0$$

其虚部之和也为$0$

$$\sin\frac{2\pi}{n}+\dots+\sin\frac{2(n-1)\pi}{n}=0$$