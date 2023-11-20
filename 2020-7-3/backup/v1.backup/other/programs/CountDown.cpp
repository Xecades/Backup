#include<iostream>
#include<cstdio>
#include<windows.h>
using namespace std;
int main()
{
	int H,M,S;
	cout<<"Hour:";
	cin>>H;
	cout<<"Minute:";
	cin>>M;
	cout<<"Second:";
	cin>>S;
	system("cls");
	while(H>=0)
	{
		printf("%d:%02d:%02d",H,M,S);
		S--;
		if(S<0)
		{
			M--;
			S=59;
		}
		if(M<0)
		{
			H--;
			M=59;
		}
		Sleep(1000);
		system("cls");
	}
	return 0;
}
