---
title: 笔记
date: 2019-02-14 07:37:05
mathjax: true
---
# 算法

## 贪心
1. 贪心是只在对问题求解时总是做出当前看来是最好的选择
2. 在使用贪心算法时，要求当前问题的每一个局部最优解是全局最优解

---
## 动态规划($DP$)
1. $DP$全称为$Dynamic$ $Programming$
2. 动态规划是一种将问题**分阶段求解**的算法
3. 通过利用先前阶段的计算结果快速得到后续阶段的结果，减少不必要的重复计算
4. 状态的设计是解决动态规划问题的关键
5. 设计状态时要考虑：
   - 状态是否能够转移
   - 转移的效率
   - 求出所有所需状态的总时间复杂度
6. $DP$包含：
   - 线性$DP$
   - 区间$DP$
   - 树形$DP$
   - 背包$DP$
   - 数位$DP$
   - 状压$DP$
7. $bitset$用于加速$DP$
8. 线性$DP$是在线性序列上进行$DP$的一类问题
9. 某些线性$DP$实质是递归，例如求斐波那契数列的第$n$项

---
## 快速幂
1. 折半计算，分治

---
## 前缀和
1. $O(1)$的时间复杂度计算一个区间的和
2. $pre[]$用于计算前缀和，$a[]$为原数组
   - 初始化:
     ```cpp
     pre[i]=pre[i-1]+a[i];//循环执行
     ```
   - $pre[r]-pre[l-1]$为$a[l..r]$的和
3. 一维的$pre[i]$表示$a[1..i]$的和
4. 前缀和预处理$O(n)$，查询是$O(1)$
5. 一维前缀和示例程序
   ```cpp
   #include <iostream>
   #include <cstring>
   #include <cstdlib>
   #include <cstdio>
   using namespace std;
   #define MAX 10000
   
   int a[MAX],pre[MAX]={0};
   int n,l,r;
   
   int main()
   {
       cout<<"How many numbers? ";
       cin>>n;
          cout<<"Enter "<<n<<" numbers:"<<endl;
       for(int i=1;i<=n;i++)
       {
           cin>>a[i];
           pre[i]=pre[i-1]+a[i];
       }
       cout<<"From ";    cin>>l;
       cout<<"To ";    cin>>r;
       
       cout<<"a["<<l<<".."<<r<<"]=";
       cout<<pre[r]-pre[l-1]<<endl;
       return 0;
   }
   ```
   运行结果
   ```cpp
   How many numbers? 10
   Enter 10 numbers:
   123 123 5 34 354 -12 54 -21 0 21
   From 3
   To 8
   a[3..8]=414
   ```
6. 二维前缀和可以在不修改元数据的前提下，在$O(1)$下算出一个矩阵的数字和
7. 二位前缀和应用容斥原理
8. $pre[][]$用于计算前缀和，$a[][]$为原数组
   - 初始化:
     ```cpp
     pre[i][j]=pre[i-1][j]+pre[i][j-1]-pre[i-1][j-1]+a[i][j]
     //容斥原理
     ```
   - 记矩形左上角坐标为$[x1][y1]$，右下角坐标为$[x2][y2]$，则从此矩形的和求法如下
     ```cpp
     pre[x2][y2]-pre[x1-1][y2]-pre[x2][y1-1]+pre[x1-1][y1-1]
     ```
9.  二维的$pre[i][j]$表示从$a[1][1]$到$a[i][j]$的矩形和
10. 二维前缀和示例程序
    ```cpp
    #include <iostream>
    #include <cstring>
    #include <cstdlib>
    #include <cstdio>
    using namespace std;
    #define MAX 10000
    
    int a[MAX][MAX],pre[MAX][MAX]={0};
    int sizeA,sizeB;
    int x1,x2,y1,y2;
    
    int main()
    {
        cout<<"Size?(a*b) ";
        scanf("%d*%d",&sizeA,&sizeB);
        cout<<"Enter the rectangle:"<<endl;
        for(int i=1;i<=sizeB;i++)
        {
            for(int j=1;j<=sizeA;j++)
            {
                cin>>a[i][j];
                pre[i][j]=pre[i-1][j]+pre[i][j-1]-pre[i-1][j-1]+a[i][j];
            }
        }
        
        cout<<"Point 1(a,b):";
        scanf("%d,%d",&x1,&y1);
        cout<<"Point 2(a,b):";
        scanf("%d,%d",&x2,&y2);
        
        printf("Range (%d,%d) to (%d,%d),sum=",x1,y1,x2,y2);
        cout<<pre[x2][y2]-pre[x1-1][y2]-pre[x2][y1-1]+pre[x1-1][y1-1]<<endl;
        return 0;
    }
    ```
    运行结果
    ```cpp
    Size?(a*b) 5*6
    Enter the rectangle:
    1   5   8   23  5
    -2  -54 34  0   3
    1   1   1   1   0
    0   0   23  43  4
    32  32  44  98  -23
    6   9   4   7   5
    Point 1(a,b):2,3
    Point 2(a,b):4,4
    Range (2,3) to (4,4),sum=102
    //从值为34的点到值为43的点
    ```

---
## 快读
1.  用$getchar()$来读入每个字符，再计算出值
2.  常见表示如下：
    ```cpp
    inline int Read()
    {
      int x=0,f=1;
      char ch=getchar();
      while(ch<'0' || ch>'9')
      {
        if(ch=='-')
          f=-1;
        ch=getchar();
      }
      while(ch>='0' && ch<='9')
      {
        x=(x<<1)+(x<<3)+(ch^48);//相当于x=x*10-'0'
        ch=getchar();
      }
      return x*f;//正负号
    }
    ```
3.  读入速度比较：
    假如有一个丧心病狂的输入数据，它生成的方法如下：
    ```cpp
    #include<iostream>
    using namespace std;
    int main()
    {
      freopen("input.txt","w+",stdout);
      for(int i=1;i<=1000000;i++)        cout<<"12345 ";
      for(int i=1;i<=1000000;i++)        cout<<"12345 ";
      for(int i=1;i<=1000000;i++)        cout<<"12345 ";
      return 0;
    }
    ```
    那么，如下程序用于验证$cin$、$scanf()$和$Read()$快慢
    ```cpp
    #include<ctime>
    #include<iostream>
    using namespace std;

    clock_t s,e;
    int a;

    inline int Read()
    {
      int x=0,f=1;
      char ch=getchar();
      while(ch<'0' || ch>'9')
      {
        if(ch=='-')
          f=-1;
        ch=getchar();
      }
      while(ch>='0' && ch<='9')
      {
        x=(x<<1)+(x<<3)+(ch^48);
        ch=getchar();
      }
      return x*f;
    }

    int main()
    {
      freopen("input.txt","r+",stdin);//从input.txt中读入数据 
      
      //cin part
      cout<<"cin takes ";
      s=clock();
      for(int i=1;i<=1000000;i++)   cin>>a;
      e=clock();
      cout<<(double)(e-s)<<endl;
        
      //scanf() part
      cout<<"scanf() takes ";
      s=clock();
      for(int i=1;i<=1000000;i++)   scanf("%d",&a);
      e=clock();
      cout<<(double)(e-s)<<endl;
        
      //Read() part
      cout<<"Read() takes ";
      s=clock();
      for(int i=1;i<=1000000;i++)   a=Read();
      e=clock();
      cout<<(double)(e-s)<<endl;

      return 0;
    }
    ```
    在我的电脑上输出如下：
    ```cpp
    cin takes 1984
    scanf() takes 2507
    Read() takes 191
    ```
    由此可见，快读名不虚传

---
# 数据结构

## $STL$
1. $STL$是$Standard$ $Template$ $Library$的简称，中文名是“标准模板库”。
2. $STL$中包含如下头文件
   - $algorithm$，算法
   - $deque$，双端队列
   - $iterator$，迭代器
   - $vector$，可变长数组
   - $list$，表
   - $map$，一对一关联容器
   - $queue$，队列，线性表
   - $set$，排序不重存储
   - $multiset$，排序可重存储
   - $stack$，栈
   - $unity$，一对值，类是$pair$
   - 其余部分$OIer$暂时不需掌握
3. $priority$_$queue$是优先队列，本质是一个堆，在头文件$queue$中，[资料](https://www.cnblogs.com/Deribs4/p/5657746.html)

---
## 树状数组
1. 树状数组的$lowbit$测试：
   ```cpp
   #include<iostream>
   #include<cstdio>
   using namespace std;
   #define lowbit(x) (x&(-x))
   int main()
   {
       cout<<"lowbit test:"<<endl;
       for(int i=1;i<=16;i++)
           printf("lowbit(%d)+%d=%d\n",i,i,lowbit(i)+i);
       cout<<endl;
       return 0;
   }
   ```
   运行结果：
   ```cpp
   lowbit test:
   lowbit(1)+1=2
   lowbit(2)+2=4
   lowbit(3)+3=4
   lowbit(4)+4=8
   lowbit(5)+5=6
   lowbit(6)+6=8
   lowbit(7)+7=8
   lowbit(8)+8=16
   lowbit(9)+9=10
   lowbit(10)+10=12
   lowbit(11)+11=12
   lowbit(12)+12=16
   lowbit(13)+13=14
   lowbit(14)+14=16
   lowbit(15)+15=16
   lowbit(16)+16=32
   ```
2. 树状数组示意图：
![](https://i.loli.net/2019/02/13/5c63c01c50a22.png)
3. 树状数组可借鉴的[资料](https://blog.csdn.net/Small_Orange_glory/article/details/81290634)
4. 树状数组通常用于表示和
5. 树状数组每个节点是它二进制下$lowbit$得的点的信息合并而来的
6. 每次`+=lowbit()`查询一个点被包含在的位置
7. 每次`-=lowbit()`查询$1~n$包含了哪些段

---
## 线段树
1. 线段树是每个点储存一段信息的树
2. 根节点储存所有线段的信息
3. 线段树示意图：
![](https://i.loli.net/2019/02/13/5c63c01c94f90.png)
4. 如上图，若要查询$2$~$6$，则需查询的点有：$[2,3]$、$[4,5]$、$6$这三个节点
5. 线段树每个节点是它左儿子和右儿子的信息合并而来的
6. 线段树可用于取最大值、求和等操作

---
# 数学

## 二进制
1. 一个数的相反数的二进制表示是原数的二进制每一位取反再加$1$
2. $lowbit(x)=x$&$(-x)$，其值二进制只会有$1$个$1$，标志$x$二进制下从后往前数$0$截止的位置

---
## 手动开平方
$\sqrt n$可以用如下方法计算

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
## 四位保存除法
通常用于高精除以低精

例如求$123456789\div45$的值和余数：

$123456789\div45=1'2345'6789\div45$

$1/45=0$

$\because1\%45=1$

$\therefore余数1接上2345计算即12345$

$\therefore12345/45=274$

$\because12345\%45=15$

$\therefore余数15接上6789计算即156789$

$\therefore156789/45=3484$

$\because156789\%45=9$

$\therefore123456789\div45=2743484\cdots9$

---
# 系统

## 常规操作
1. `Win+R`输入`calc`快速打开计算器
2. `Win+R`输入`cmd`快速打开命令行
3. `Win+R`输入`explorer.exe`重新显示桌面
4. `Win+R`输入`notepad`快速打开记事本
5. $win10$自带录屏工具用`Win+G`打开
6. $cmd$中"$>$"是输出重定向，"$<$"是输入重定向