---
title: bitset类
date: 2019-07-24 18:45:44
tags:
 - STL
 - 数据结构
categories:
 - STL
---

`bitset`是一种类似数组的结构，包含于头文件`bitset`，它的每一个元素只能是$0$或$1$，每个元素仅占用$1\space bit$的空间
<!-- more -->

---
## 构造函数

举例如下
```cpp
bitset<4> b1;              //无参构造，长度4，默认每一位为0

bitset<8> b2(12);          //值为12的二进制，长度8，前面用0补充

string s="100101";         //字符串内容只能是1或者0
bitset<10> b3(s);          //长度10
    
char str[]="10101";        //同上
bitset<13> b4(str);        //长度13

cout<<b1<<endl;            //0000
cout<<b2<<endl;            //00001100
cout<<b3<<endl;            //0000100101
cout<<b4<<endl;            //0000000010101
```

构造时，需在`<  >`中表明`bitset`的大小（$size$）

在进行有参构造时，若参数的二进制表示比$size$小，则在前面用$0$补充(如上)；若比`bitsize`大，参数为整数时取后面部分，**参数为字符串时取前面部分**(如下)：

```cpp
bitset<2> b1(12);
//12的二进制(1100)长度为4，但b1的size=2，只取后面部分，即00

string s="100101";
bitset<4> b2(s);
//s的size=6，而bitset的size=4，只取前面部分，即1001

char str[]="11101";
bitset<4> b3(str);
//与b2同理，只取前面部分，即1110

cout<<b1<<endl;            //00
cout<<b2<<endl;            //1001
cout<<b3<<endl;            //1110
```

---
## 运算符

```cpp
bitset<4> foo(string("1001"));
bitset<4> bar(string("0011"));

cout<<(foo^=bar)<<endl;    //1010(foo对bar按位异或后赋值给foo)
cout<<(foo&=bar)<<endl;    //0010(按位与后赋值给foo)
cout<<(foo|=bar)<<endl;    //0011(按位或后赋值给foo)

cout<<(foo<<=2)<<endl;     //1100(左移2位，低位补0，有自身赋值)
cout<<(foo>>=1)<<endl;     //0110(右移1位，高位补0，有自身赋值)

cout<<(~bar)<<endl;        //1100(按位取反)
cout<<(bar<<1)<<endl;      //0110(左移)
cout<<(bar>>1)<<endl;      //0001(右移)

cout<<(foo==bar)<<endl;    //false(0110==0011为false)
cout<<(foo!=bar)<<endl;    //true(0110!=0011为true)

cout<<(foo&bar)<<endl;     //0010(按位与)
cout<<(foo|bar)<<endl;     //0111(按位或)
cout<<(foo^bar)<<endl;     //0101(按位异或)
```

除此之外，可以通过`[   ]`访问元素(类似数组)，**最低位下标为$0$**

```cpp
 bitset<4> foo ("1011");
    
cout<<foo[0]<<endl;        //1
cout<<foo[1]<<endl;        //1
cout<<foo[2]<<endl;        //0
```

---
## 一些函数

```cpp
bitset<8> foo("10011011");

cout<<foo.count()<<endl;
//5       count函数用来求bitset中1的位数，foo中共有5个1

cout<<foo.size()<<endl;
//8       size函数用来求bitset的大小，一共有8位

cout<<foo.test(0)<<endl;
//true    test函数用来查下标处的元素是0还是1，并返回false或true，此处foo[0]为1，返回true

cout<<foo.test(2)<<endl;
//false   同理，foo[2]为0，返回false

cout<<foo.any()<<endl;
//true    any函数检查bitset中是否有1

cout<<foo.none()<<endl;
//false   none函数检查bitset中是否没有1

cout<<foo.all()<<endl;
//false   all函数检查bitset中是全部为1
```

`test`和`[   ]`的区别：`test`函数会对下标越界作出检查，而通过`[   ]`访问元素却不会经过下标检查，所以，在两种方式通用的情况下，选择`test`函数更安全一些

---
## 另一些函数：

```cpp
bitset<8> foo("10011011");

cout<<foo.flip(2)<<endl;
//10011111 flip函数传参数时，用于将参数位取反
//         本行代码将foo下标2处取反，即0变1，1变0

cout<<foo.flip()<<endl;
//01100000 flip函数不指定参数时
//         将bitset每一位全部取反

cout<<foo.set()<<endl;
//11111111 set函数不指定参数时
//         将bitset的每一位全部置为1

cout<<foo.set(3,0)<<endl;
//11110111 set函数指定两位参数时
//         将第一参数位的元素置为第二参数的值
//         本行对foo的操作相当于foo[3]=0

cout<<foo.set(3)<<endl;
//11111111 set函数只有一个参数时
//         将参数下标处置为1

cout<<foo.reset(4)<<endl;
//11101111 reset函数传一个参数时
//         将参数下标处置为1

cout<<foo.reset()<<endl;
//00000000 reset函数不传参数时
//         将bitset的每一位全部置为0
```

同样，它们也都会检查下标是否越界，如果越界就会抛出异常

最后，还有一些类型转换的函数：

```cpp
bitset<8>foo("10011011");

string s=foo.to_string();
//将bitset转换成string类型

unsigned long a=foo.to_ulong();
//将bitset转换成unsigned long类型

unsigned long long b=foo.to_ullong();
//将bitset转换成unsigned long long类型

cout<<s<<endl;             //10011011
cout<<a<<endl;             //155
cout<<b<<endl;             //155
```

---
## 一些算法

### 比较两个`bitset`的大小

直接用大于小于号比较是明显不可取的（`bitset`连`operator>`都没有，~~差评~~）

但`to_ulong()`函数给了蒟蒻我的一线生路

```cpp
bool compare(bitset<N> a,bitset<N> b)
{
    unsigned long ula=a.to_ulong();
    unsigned long ulb=b.to_ulong();
    return ula>ulb;
}
```