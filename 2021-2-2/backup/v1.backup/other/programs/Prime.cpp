#include<iostream>
#include<cmath>
using namespace std;
int main()
{
	int m;
	int i;
	int k; 
	while(1)
	{
		cout<<"输入一个整数:";
		cin>>m;
		k=(int)sqrt((double)m);
		for(i=2;i<=k && m%i!=0;i++);
		if(i>k)
			cout<<m<<"是素数"<<endl;
		else
			cout<<m<<"不是素数"<<endl;
	}
    system("pause");
	return 0;
}
