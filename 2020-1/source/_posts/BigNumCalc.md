---
title: 高精度计算代码
date: 2019-06-30 09:50:50
tags:
 - 高精度
 - 算法
categories:
 - 算法
---

列举一些常用的高精度计算代码

<!-- more -->

## 高精加

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
#include<algorithm>
using namespace std;

struct LargeInt
{
    int len;
    int num[100001];
};

LargeInt a,b,ans;
string c,d;

void Input();
void Plus();

int main()
{
    Input();
    Plus();
    for(int i=ans.len;i>=1;i--)
        cout<<ans.num[i];
    cout<<endl;
    return 0;
}

void Input()
{
    cin>>c>>d;
    a.len=c.length();
    b.len=d.length();
    for(int i=0;i<a.len;i++)
        a.num[a.len-i]=c[i]-'0';
    for(int i=0;i<b.len;i++)
        b.num[b.len-i]=d[i]-'0';
}
void Plus()
{
    ans.len=max(a.len,b.len);
    for(int i=1;i<=ans.len;i++)
    {
        ans.num[i]+=a.num[i]+b.num[i];
        ans.num[i+1]+=ans.num[i]/10;
        ans.num[i]%=10;
    }
    if(ans.num[ans.len+1]!=0)
        ans.len++;
}
```

## 高精减

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
#include<algorithm>
using namespace std;

struct LargeInt
{
    int len;
    int num[100001];
}a,b,ans;
string c,d;
bool negative;

void Input();
void Minus();

int main()
{
    Input();
    Minus();

    if(negative)
        cout<<"-";
    for(int i=ans.len;i>=1;i--)
        cout<<ans.num[i];
    cout<<endl;
    return 0;
}
void Input()
{
    cin>>c>>d;
    if(c.length()<d.length() || (c.length()<d.length() && c<d))
    {
        negative=true;
        swap(c,d);
    }

    a.len=c.length();
    b.len=d.length();

    for(int i=0;i<a.len;i++)
        a.num[a.len-i]=c[i]-'0';
    for(int i=0;i<b.len;i++)
        b.num[b.len-i]=d[i]-'0';
}
void Minus()
{
    ans.len=a.len;
    for(int i=1;i<=ans.len;i++)
    {
        if(a.num[i]<b.num[i])
        {
            a.num[i+1]--;
            a.num[i]+=10;
        }
        ans.num[i]+=a.num[i]-b.num[i];
    }
    while(ans.num[ans.len]==0 && ans.len!=1)
        ans.len--;
}
```

## 高精乘

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
#include<algorithm>
using namespace std;

struct LargeInt
{
    int len;
    int num[100001];
}a,b,ans;
string c,d;

void Input();
void Multiply();

int main()
{
    Input();
    Multiply();

    for(int i=ans.len;i>=1;i--)
        cout<<ans.num[i];
    cout<<endl;
    return 0;
}
void Input()
{
    cin>>c>>d;
    a.len=c.length();
    b.len=d.length();
    for(int i=0;i<a.len;i++)
        a.num[a.len-i]=c[i]-'0';
    for(int i=0;i<b.len;i++)
        b.num[b.len-i]=d[i]-'0';
}

void Multiply()
{
    int x;
    for(int i=1;i<=a.len;i++)
    {
        x=0;
        for(int j=1;j<=b.len;j++)
        {
            ans.num[i+j-1]+=a.num[i]*b.num[j]+x;
            x=ans.num[i+j-1]/10;
            ans.num[i+j-1]%=10;
        }
        ans.num[i+b.len]=x;
    }
    ans.len=a.len+b.len;
    while(ans.num[ans.len]==0 && ans.len!=1)
        ans.len--;
}
```

## 高精除低精

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
#include<algorithm>
using namespace std;
const int MAX=10e9;

int b,i,la,lc,x;
int a[MAX],c[MAX];
string str;

int main()
{
    memset(a,0,sizeof(a));
    memset(c,0,sizeof(c));
    cin>>str>>b;

    la=str.length();
    for(i=0;i<la;i++)
        a[la-i-1]=str[i]-'0';

    x=0;
    for(i=la-1;i>=0;i--)
    {
        c[i]=(x*10+a[i])/b;
        x=(x*10+a[i])%b;
    }
    lc=la;
    while(lc>1 && c[lc-1]==0)lc--;

    for(i=0;i<lc;i++)
        cout<<c[lc-i-1];
    cout<<" "<<x<<endl;
    return 0;
}
```

## 综合起来

```cpp
const int MAX_SIZE=10e9;

struct Int
{
    int len,n[MAX_SIZE];
    void Set(intl)
    {
        len=l;
        for(inti=1;i<=len;i++)
            n[i]=0;
    }
    Int(char* s)
    {
        len=strlen(s);
        for(inti=len-1;~i;i--)
        {
            if(s[i]<='9' && s[i]>='0')
            {
                len=i+1;
                break;
            }
        }
        for(int i=len;i>=1;i--)
            n[i]=s[len-i]-'0';
    }
    Int(long long x=0)
    {
        len=0;
        do
        {
            n[++len]=x%10;
            x/=10;
        }while(x);
    }
    bool operator<(const Int b)
    {
        if(len!=b.len)
            return len<b.len;
        for(int i=len;i;i--)
            if(n[i]!=b.n[i])
                return n[i]<b.n[i];
        return false;
    }
    Int operator+(const Int b)const
    {
        Int ans;
        ans.Set(max(len,b.len)+1);
        for(int i=1;i<=ans.len;i++)
        {
            if(i<=len)
                ans.n[i]+=n[i];
            if(i<=b.len)
                ans.n[i]+=b.n[i];
            ans.n[i+1]+=ans.n[i]/10;
            ans.n[i]%=10;
        }
        while(!ans.n[ans.len] && ans.len>1)ans.len--;
        return ans;
    }
    Int operator-(const Int b)
    {
        Int ans,a=*(this);
        ans.Set(len);
        for(int i=1;i<=ans.len;i++)
        {
            if(a.n[i]<b.n[i])
                a.n[i+1]--,a.n[i]+=10;
            ans.n[i]+=a.n[i]-(i>b.len?0:b.n[i]);
        }
        while(!ans.n[ans.len] && ans.len>1)ans.len--;
        return ans;
    }
    Int operator*(Int b)
    {
        Int ans;
        ans.Set(len+b.len);
        for(int i=1;i<=len;i++)
        {
            for(int j=1;j<=b.len;j++)
            {
                ans.n[i+j-1]+=n[i]*b.n[j];
                ans.n[i+j]+=ans.n[i+j-1]/10;
                ans.n[i+j-1]%=10;
            }
        }
        while(!ans.n[ans.len] && ans.len>1)ans.len--;
        returnans;
    }
    Int operator/(const int &b)//高除低
    {
        if(*this<Int(b))
            return Int(0LL);
        Int ans;ans.len=len;
        int r=0;
        for(int i=ans.len;i;i--)
        {
            r=r*10+n[i];
            ans.n[i]=r/b;
            r%=b;
        }
        while(ans.len>1 && !ans.a[ans.len])ans.len--;
        return ans;
    }
    Int operator/(const Int b)//高除高
    {
        if((*this)<b)
            return Int(0LL);
        Int ans;
        ans.Set(len-b.len+1);
        for(int i=ans.len;i;i--)
        {
            for(int j=1;j<=9;j++)
            {
                ans.n[i]++;
                if(*this<ans*b)
                {
                    ans.n[i]--;
                    break;
                }
            }
        }
        while(ans.len>1 && !ans.n[ans.len])ans.len--;
        return ans;
    }
    void print()
    {
        for(int i=len;i;i--)
            cout<<n[i];
        cout<<endl;
    }
};
```