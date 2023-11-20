#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <conio.h>
#include <windows.h>
using namespace std;
#define color() SetConsoleTextAttribute(h, FOREGROUND_RED | FOREGROUND_INTENSITY);
#define recolor() SetConsoleTextAttribute(h, wOldColorAttrs);
#define cls() system("cls")

const int maxn = 20;

HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);
WORD wOldColorAttrs;
string repo[]  = {"blog", "xecades",  "about", "file", "friend", "game", "tool", "acg", "cdn", ""};
string names[] = {"blog", "homepage", "about", "file", "friend", "game", "tool", "ACG", "CDN", ""};
bool check[maxn];
string cmt[maxn];
string git[maxn];
int len;

void blog();
void work(int);
void config(int);
void config_blog();
int cnt();
void welcome();
void request();

int main()
{
    CONSOLE_SCREEN_BUFFER_INFO csbiInfo;
    // Save current color
    GetConsoleScreenBufferInfo(h, &csbiInfo);
    wOldColorAttrs = csbiInfo.wAttributes;
	if (len == 0) len = cnt();
	welcome();
	request();
	for (int i = 0; i < len; i++) if (check[i])
	{
		if (i == 0) config_blog();
		else 		config(i);
		getchar();
	}
	cls();
	cout << "Press to continue."; getchar();
	for (int i = 0; i < len; i++) if (check[i])
	{
		if (i == 0) blog();
		else 		work(i);
	}
	return 0;
}

void blog()
{
	string head = "cd ./" + names[0];
	color(); cout << "$ cd ./" << names[0] << endl; recolor();
	color(); cout << "$ hexo d -g" << endl; recolor();
	system((head + "&hexo d -g").c_str());
}

void work(int pwd)
{
	string head = "cd ./" + names[pwd];
	color(); cout << "$ cd ./" << names[pwd] << endl; recolor();
	color(); cout << "$ git add ." << endl; recolor();
	system((head + "&git add .").c_str());
	color(); cout << "$ git commit -m \"" << cmt[pwd] << "\"" << endl; recolor();
	system((head + "&git commit -m \"" + cmt[pwd] + "\"").c_str());
	color(); cout << "$ git push" << endl; recolor();
	system((head + "&git push").c_str());
}

void config_blog()
{
	cls();
	cout << "Now config ./" << names[0] << " (1)" << endl;
	cout << endl;
	color();
	cout << "$ cd ./" << names[0] << endl;
	cout << "$ hexo d -g" << endl;
	recolor();
	getchar();
}

void config(int pwd)
{
	cls();
	git[pwd] = "git@e.coding.net:Xecades-01/" + repo[pwd] + ".git";
	cout << "Now config ./" << names[pwd] << " (" << pwd + 1 << ")" << endl;
	cout << "Commit to repo " << git[pwd] << endl;
	cout << "Enter commit (NO SPACE): "; cin >> cmt[pwd];
	cout << endl;
	color();
	cout << "$ cd ./" << names[pwd] << endl;
	cout << "$ git add ." << endl;
	cout << "$ git commit -m \"" << cmt[pwd] << "\"" << endl;
	cout << "$ git push" << endl;
	recolor();
	getchar();
}

void request()
{
	cout << "Select some directorys to work." << endl;
	cout << "Input 0 to exit selection." << endl;
	for (int i = 0; i < len; i++)
	{
		cout << "[";
		color(); cout << (check[i] ? "x" : " "); recolor();
		cout << "] " << i + 1 << " " << names[i] << endl;
	}
	int req = 0;
	if (len < 10) req = getch() ^ 48;
	else cin >> req;
	if (req == 0) return;
	check[req - 1] ^= 1;
	cls();
	request();
}

int cnt()
{
	len = 0;
	while (names[len] != "") len++;
	return len;
}

void welcome()
{
	cout << "Hi, Xecades." << endl;
	cout << "It seems that you are going to upgrade your blog!" << endl;
}