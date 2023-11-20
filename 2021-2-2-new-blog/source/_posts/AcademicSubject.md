---
layout: post
title: 复数笔记
date: 2020-01-23 08:54:41
tags:
 - 复数
 - 数学
categories:
 - 复数
---

记录一下一些好玩的东西

<!-- more -->

{% note warning warning %}
并非文章，内容可能有些许 confusing.
{% endnote %}

---

## 笔记

### 复数的四种表达形式

 - 代数形式：$z=a+b i(a, b \in R)$

 - 几何形式：复平面上的点$Z(a, b)$或由原点出发的向量$\overrightarrow{OZ}$

 - 三角形式：$z=r(\cos \theta+i \sin \theta), r \geq 0$

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
### 一些小定理的证明 - 单位复数根

> 解方程$z^n-1=0(z\in\mathbb C)$

显然$z$为单位复数. 

把右式$1$看作辐角为$0$的单位复数，显然有$z_0=1$

看作辐角为$2\pi$的单位复数，有$z_1=\cos\frac{2\pi}{n}+i\sin\frac{2\pi}{n}$

看作辐角为$4\pi$的单位复数，有$z_2=\cos\frac{4\pi}{n}+i\sin\frac{4\pi}{n}$

$\dots$

$z_{n-1}=\cos\frac{2(n-1)\pi}{n}+i\sin\frac{2(n-1)\pi}{n}$

一共只有这n个根，因为$z_n=\cos\frac{2n\pi}{n}+i\sin\frac{2n\pi}{n}=z_0$

不妨设 $z_1=\varepsilon$.

那么：

$$z_2=\varepsilon^2,\cdots,z_{n-1}=\varepsilon^{n-1},z_0=\varepsilon^0=1$$

若把它们画在复平面上（此处取 $n=11$），可以直观地发现它们把一个单位圆 $n$ 等分：

![](/assets/AcademicSubject-pic1.png)

所以 $z^n-1=0$ 有 $n$ 个解为 $\varepsilon^0$，$\varepsilon$，$\varepsilon^2$，$\cdots$，$\varepsilon^{n-1}$，下面看看这些根有什么特性.

把方程$z^n-1=0$展开：

$$(z-1)(1+z+z^2+\cdots+z^{n-1})=0$$

显然 $z_0=1$ 是 $z-1=0$ 的根，其余$\varepsilon,\varepsilon^2$， $\cdots$，$\varepsilon^{n-1}$ 是 $1+z+z^2+\cdots+z^{n-1}$ 的根.

把 $\varepsilon$ 带入：

$$1+\varepsilon+\varepsilon^2+\dots+\varepsilon^{n-1}=0$$

可得其实部之和为 $0$：

$$1+\cos\frac{2\pi}{n}+\dots+\cos\frac{2(n-1)\pi}{n}=0$$

其虚部之和也为 $0$：

$$\sin\frac{2\pi}{n}+\dots+\sin\frac{2(n-1)\pi}{n}=0$$