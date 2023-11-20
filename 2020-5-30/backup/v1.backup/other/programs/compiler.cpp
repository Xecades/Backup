#include<iostream>
#include<cstdio>
#include<windows.h>
#include<string>
#include<fstream>
using namespace std;
string path,code;
void input();
void print(string);
void outputP1();
void outputP2();
bool inputRun();
int main()
{
	//freopen("out.txt","w+",stdout);
	//C:\Users\Administrator\Desktop\file ks
	input();
	outputP1();
	outputP2();
	cin.get();
	cin.get();
	return 0;
}
void input()
{
	char tmp[3000];
	cin.clear();
	cout<<"┏ 输入文件完整路径(不用输入\".cpp\"):"<<endl;
	cout<<"┗ ";
	cin.getline(tmp,3000);
	path=tmp;
	fstream file;
	file.open((path+".cpp").c_str());
	if(!file)
	{
		cout<<"┏━━ERROR!━━┓"<<endl;
		cout<<"┃未找到目标文件┃"<<endl;
		cout<<"┗━━━━━━━┛"<<endl;
		cin.get();
		cin.get();
		exit(-1);
	}
	cout<<endl;
}
void outputP1()
{
	code="g++ \""+path+".cpp\" -g -o \""+path+".exe\"";
	cout<<"┏━━━━━━━━━━━━━━━━━━━━部分 1"<<endl;
	cout<<"┣ 文件地址:"<<endl;
	print(path+".cpp");
	cout<<"┣ 生成文件:"<<endl;
	print(path+".exe");
	cout<<"┣ 编译指令:"<<endl;
	print(code);
	cout<<"┗ 执行报告(编译成功则无显示):"<<endl;
	system(code.c_str());
	cout<<endl;
}
void outputP2()
{
	cout<<"┏━━━━━━━━━━━━━━━━━━━━部分 2"<<endl;
	cout<<"┣ 已生成:"<<endl;
	print(path+".exe");
	cout<<"┣ 是否运行程序?(Y/N)";
	if(inputRun())
	{
		code="start \"\" \""+path+".exe\"";
		cout<<"┣ 运行指令:"<<endl;
		print(code);
		cout<<"┗ 执行报告(编译成功则无显示):"<<endl;
		system(code.c_str());
	}
	else
		cout<<"┗ 已取消运行"<<endl;
}
bool inputRun()
{
	cin.clear();
	char c;
	cin>>c;
	if(c=='y' || c=='Y')
		return true;
	return false;
}
void print(string str)
{
	cout<<"┃ ";
	for(int i=0,j=0,len=str.length(); i<len; i++,j++)
	{
		if(j==60)
		{
			j=0;
			cout<<endl<<"┃ ";
		}
		cout<<str[i];
	}
	cout<<endl;
}
