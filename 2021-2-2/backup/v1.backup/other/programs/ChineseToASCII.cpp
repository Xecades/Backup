#include<iostream>
#include<cstdio>
#include<string>
using namespace std;
int main()
{
	string s;
    
	cout<<"Enter a sentence in Chinese:"<<endl;
    cin>>s;
    int len=s.length();
    
	cout<<"ASCII:"<<endl;
    for(int i=0;i<len;i+=2)
    	cout<<(int)s[i]<<","<<(int)s[i+1]<<" ";
    
	cout<<"Code(simple):"<<endl;
    cout<<"printf(\"";
    for(int i=0;i<len;i++)
    	cout<<"%c";
    cout<<"\"";
    for(int i=0;i<len;i++)
    	cout<<","<<(int)s[i];
    cout<<");"<<endl;
    
    cout<<"Code(delay):"<<endl;
    cout<<"#include<cstdio>"<<endl;
    cout<<"#include<windows.h>"<<endl;
    cout<<"int main()"<<endl;
    cout<<"{"<<endl;
    cout<<"    int array["<<len+2<<"]"<<endl;
    cout<<"        ={0";
    for(int i=0;i<len;i++)
    	cout<<","<<(int)s[i];
    cout<<"};"<<endl;
    cout<<"    for(int i=1;i<="<<len<<";i++)"<<endl;
    cout<<"    {"<<endl;
    cout<<"        printf(\"%c\",array[i]);"<<endl;
    cout<<"        Sleep(100);"<<endl;
    cout<<"    }"<<endl;
    cout<<"    return 0;"<<endl;
    cout<<"}";
	return 0;
}
