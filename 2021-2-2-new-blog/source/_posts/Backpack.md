---
title: 动态规划-01背包问题
date: 2019-06-28 19:21:36
tags:
 - DP
 - 背包
categories:
 - DP
mathjax: true
---
有$N$件物品和一容量为$V$的背包. 第$i$件物品的费用为`c[i]`，价值为`w[i]`. 求解将哪些物品装入背包可使这些物品的费用总和不超过背包容量，且价值总和最大. 

这是一道$01$背包的题，这个问题的特点是：每种物品只有一件，可以选择放或者不放. 

<!-- more -->

---
## 算法基本思想

利用动态规划思想，子问题为：`f[i][v]`表示前$i$件物品恰放入一个容量为$v$的背包可以获得的最大价值. 

其状态转移方程是：

```cpp
f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]};
//这个方程非常重要，基本上所有跟背包相关的问题的方程都是由它衍生出来的. 
```

解释一下上面的方程：“将前$i$件物品放入容量为$v$的背包中”这个子问题，如果只考虑第$i$件物品放或者不放，那么就可以转化为只涉及前$i-1$件物品的问题，即：

1. 如果不放第$i$件物品，则问题转化为“前$i-1$件物品放入容量为$v$的背包中”. 

2. 如果放第$i$件物品，则问题转化为“前$i-1$件物品放入剩下的容量为`v-c[i]`的背包中”（此时能获得的最大价值就是`f[i-1][v-c[i]]`再加上通过放入第$i$件物品获得的价值`w[i]`）. 

则`f[i][v]`的值就是$1$、$2$中最大的值. 

### 注意

`f[i][v]`有意义当且仅当存在一个前$i$件物品的子集，其费用总和为$v$. 所以按照这个方程递推完毕后，最终的答案并不一定是`f[N][V]`，而是`f[N][0..V]`的最大值. 

---
## 优化空间复杂度

以上方法的时间和空间复杂度均为$O(N*V)$，其中时间复杂度基本已经不能再优化了，但空间复杂度却可以优化到$O(V)$. 

上面`f[i][v]`使用二维数组存储的，可以优化为一维数组`f[v]`，将主循环改为：

```cpp
for i=1..N;
for v=V..0;
f[v]=max{f[v],f[v-c[i]]+w[i]};
```

即将第二层循环改为从$V..0$，逆序. 

### 举个栗子

假设最大容量$M=10$，物品个数$N=3$，物品大小$w$是{$3,4,5$}，物品价值$p$是{$4,5,6$}. 

当进行第$i$次循环时，`f[v]`中保存的是上次循环产生的结果，即第$i-1$次循环的结果$(i>=1)$. 所以`f[v]=max{f[v],f[v-c[i]]+w[i]}`这个式子中，等号右边的`f[v]`和`f[v-c[i]]+w[i]`都是前一次循环产生的值. 

 - 当$i=1$时，`f[0..10]`初始值都为$0$. 所以：
```cpp
f[10]=max{f[10],f[10-c[1]]+w[1]}=max{0,f[7]+4}=max{0,0+4}=4;
f[9]=max{f[9],f[9-c[1]]+w[1]}=max{0,f[6]+4}=max{0,0+4}=4;
... ...
f[3]=max{f[3],f[3-c[1]]+w[1]}=max{0,f[3]+4}=max{0,0+4}=4;
f[2]=max{f[2],f[2-c[1]]+w[1]}=max{0,f[2-3]+4}=0;//数组越界？
f[1]=0;
f[0]=0;
```

 - 当$i=2$时，此时`f[0..10]`经过上次循环后，都已经被重新赋值，即`f[0..2]=0`,`f[3..10]=4`. 利用`f[v]=max{f[v],f[v-c[i]]+w[i]}`这个公式计算$i=2$时的`f[0..10]`的值. 

 - 当$i=3$时，同理. 

### 具体的值

如下表所示：

![](/assets/Backpack-pic1.png)

因此，利用逆序循环就可以保证在计算`f[v]`时，公式`f[v]=max{f[v],f[v-c[i]]+w[i]}`中等号右边的`f[v]`和`f[v-c[i]]+w[i]`保存的是`f[i-1][v]`和`f[i -1][v-c[i]]`的值. 

当$i=N$时，得到的`f[V]`即为要求的最优值. 

---
## 初始化的细节问题

在求最优解的背包问题中，一般有两种不同的问法：

1. 要求“恰好装满背包”时的最优解
2. 求小于等于背包容量的最优解，即不一定恰好装满背包. 

这两种问法，在初始化的时候是不同的. 

1. 要求恰好装满背包时的最优解：

在初始化时除了`f[0]`为$0$其它`f[1..V]`均设为$-∞$，这样就可以保证最终得到的`f[N]`是一种恰好装满背包的最优解. 如果不能恰好满足背包容量，即不能得到`f[V]`的最优值，则此时`f[V]=-∞`，这样就能表示没有找到恰好满足背包容量的最优值. 

1. 求小于等于背包容量的最优解，即不一定恰好装满背包：

如果并没有要求必须把背包装满，而是只希望价值尽量大，初始化时应该将`f[0..V]`全部设为$0$. 

---
## 总结

$01$背包问题是最基本的背包问题，它包含了背包问题中设计状态、方程的最基本思想，另外，别的类型的背包问题往往也可以转换成$01$背包问题求解. 故一定要仔细体会上面基本思路的得出方法，状态转移方程的意义，以及最后怎样优化的空间复杂度. 

---
## 01背包问题代码

解法一
```cpp
#include <iostream>
#include <vector>
using namespace std;

const int MIN=0x80000000;
const int N=3;                //物品数量
const int V=5;                //背包容量
int f[N+1][V+1];

int Package(int *W,int *C,int N,int V);

int main()
{
    int W[4]= {0,7,5,8};      //物品权重
    int C[4]= {0,2,3,4};      //物品大小
    int result=Package(W,C,N,V);
    if(result>0)
    {
        cout<<endl<<"the opt value:"<<result<<endl;

        int i=N,j=V;
        while(i)
        {
            if(f[i][j]==(f[i-1][j-C[i]]+W[i]))
            {
                cout<<i<<":"<<"w="<<W[i]<<",c="<<C[i]<<endl;
                j-=C[i];
            }
            i--;
        }
    }
    else
        cout<<"can not find the opt value"<<endl;
    return 0;
}

int Package(int *W,int *C,int N,int V)
{
    int i,j;
    memset(f,0,sizeof(f));    //初始化为0

    for(i=0; i<=N; i++)
        for(j=1; j<=V; j++)   
        //此步骤是解决是否恰好满足背包容量，
            f[i][j]=MIN;      
            //若“恰好”满足背包容量，即正好装满背包
            //则加上此步骤，若不需要“恰好”，则初始化为0

    for(i=1; i<=N; i++)
        for(j=C[i]; j<=V; j++)
        {
            f[i][j]=(f[i-1][j] > f[i-1][j-C[i]]+W[i]) ? f[i-1][j] : (f[i-1][j-C[i]]+W[i]);
            cout<<"f["<<i<<"]["<<j<<"]="<<f[i][j]<<endl;
        }
    return f[N][V];
}
```

解法二
```cpp
#include <iostream>
#include <vector>
using namespace std;

const int MIN=0x80000000;
const int N=3;                //物品数量
const int V=5;                //背包容量
int f[V+1];

int Package(int *W,int *C,int N,int V);

int main()
{
	int W[4]= {0,7,5,8};      //物品权重
	int C[4]= {0,2,3,4};      //物品大小
	int result=Package(W,C,N,V);

	if(result>0)
	{
		cout<<endl;
		cout<<"the opt value:"<<result<<endl;
	}
	else
		cout<<"can not find the opt value"<<endl;
	return 0;
}
int Package(int *W,int *C,int N,int V)
{
	int i,j;
	memset(f,0,sizeof(f));    //初始化为0

	for(i=1; i<=V; i++)
    //此步骤是解决是否恰好满足背包容量，
		f[i]=MIN;
        //若“恰好”满足背包容量，即正好装满背包
        //则加上此步骤，若不需要“恰好”，则初始化为0

	for(i=1; i<=N; i++)
		for(j=V; j>=C[i]; j--)//注意此处与解法一是顺序不同的，弄清原因
		{
			f[j]=(f[j] > f[j-C[i]]+W[i]) ? f[j] : (f[j-C[i]]+W[i]);
			cout<<"f["<<i<<"]["<<j<<"]="<<f[j]<<endl;
		}
	return f[V];
}
```

---
本文转载[$fly1988happy$的文章](https://www.cnblogs.com/fly1988happy/archive/2011/12/13/2285377.html)

向原作者表示感谢(侵删)！