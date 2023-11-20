---
layout: post
title: Q - 佬鼠喝药水
date: 2019-12-28 19:54:20
tags:
 - 题目
categories:
 - 题目
mathjax: true
---

## 题目

你面前有100瓶药水，标号1~100。其中只有一瓶毒药，其余都是农夫山泉。

这瓶毒药比较特殊，喝了它并不会立即死掉，而是会在第二天**立刻同时**显现药性（就是死掉），也就是说，第二天喝过毒药的生物都会死去，而第一天全部安然无恙。

你有7只佬鼠，编号1~7，每只佬鼠可以喝下无限量的药水，而且每瓶药水无限供应。

假定你有无限的计算能力，只要信息足够，你可以在一瞬间计算出是哪一瓶药水有毒。

问：如何仅通过这7只佬鼠，在第二天到来后，根据它们的死活找出那一瓶毒药<!-- more -->，~~并把它喝掉~~

当然，这道题还有些可有可无的规定：

1. 你不能喝任何药水
2. 佬鼠只存在死或者活，不存在半死不活的状态
3. 毒药的毒性不会减少
4. 毒药是很毒的，喝了哪怕是一滴都会死去
5. 假定农夫山泉没有毒

## 提示

没有头绪时，再**依次**单击展开提示

<details>
<summary>HINT 1</summary>
每只佬鼠有两种状态：生和死
</details>

<details>
<summary>HINT 2</summary>
每瓶药水有两种状态：有毒或没毒
</details>

<details>
<summary>HINT 3</summary>
$2^7 = 128 \approx 100$，且$128 > 100$
</details>

<details>
<summary>HINT 4</summary>
考虑二进制
</details>

<details>
<summary>HINT 5</summary>
死为1，生为0；有毒为1，没毒为0
</details>

<details>
<summary>HINT 6</summary>
类似状态压缩
</details>

<details>
<summary>HINT 7</summary>
$1 = 1_{(2)}, 2 = 10_{(2)}, 3 = 11_{(2)}, 4 = 100_{(2)} , \dots , 100 = 1100100‬_{(2)}$
</details>

<details>
<summary>HINT 8</summary>
$100 = 1100100‬_{(2)}$，恰好7位，可以对应每一只佬鼠
</details>

<details>
<summary>HINT 9</summary>
一只佬鼠对应一个数位
</details>

## 答案

<details>
<summary>ANSWER</summary>
把1~100的每一个数改写成二进制，让第1只佬鼠喝二进制下第1位为1的药水，第2只老鼠喝第7位为1的药水，以此类推，第7只佬鼠喝第7位为1的药水。

到了第二天，枚举i从7到1，统计第i只佬鼠死了与否，若死去，把第i位标记为1，反之为0。这样得到一个0-1串。

把这个0-1串转换为十进制，即为毒药的编号。
</details>

<details>
<summary>EXAMPLE</summary>
实施ANSWER的做法，假设只有1、3、7号佬鼠死掉，得到的0-1串就是：1000101。对应十进制69，即第69瓶药水为毒药。
</details>

<details>
<summary>EXPLANATION</summary>
如上例，1、3、7死去，说明二进制表示下1、3、7位为1的药水有嫌疑，而其他喝了药水的佬鼠安然无恙，说明二进制下2、4、5、6位为1的药水没有嫌疑，这样就可以写出药水的二进制表达式。
</details>

