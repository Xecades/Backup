#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<conio.h>
#include<windows.h>
#include<ctime>
using namespace std;
void delay();
void gotoxy(int x,int y);
void SetValue(bool first); 
void ShowThings();
void CloseThings();
#define UP_LEFT 	1		//左上 
#define UP_RIGHT 	2		//右上 
#define DOWN_LEFT 	3		//左下 
#define DOWN_RIGHT 	4		//右下 
FILE *talk,*log;
int board_lengh,board_up_ini;											//常量 
int ball_up,ball_left,board_left,ball_way,fail,num1,num2;	  			//变量 
char map[70][70]={"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
				  "$###################################################$",	
			  	  "$###################################################$",	
			  	  "$###################################################$",	
				  "$###################################################$",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "$                                                   $",
				  "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
				  };
//a[0][0],a[0][1],a[0][2],a[0][3]
//a[1][0],a[1][1],a[1][2],a[1][3]
//a[2][0],a[2][1],a[2][2],a[2][3]
int main()
{
	bool close=false,isfail=false;
	system("mode con:cols=53  lines=20");
	cout<<"You can start this game after opening robot.exe"<<endl;
	cout<<"Waiting..."<<endl;
	
	log=fopen("log.txt","w");										//清空文件 
	fprintf(log,"Self check:\n");
	fprintf(log,"\tboard_lengh:%2d---√\n",board_lengh);
	fprintf(log,"\tboard_up_ini:%2d---√\n",board_up_ini);
	fprintf(log,"OK!\n\n");
	fclose(log);
	
	talk=fopen("talk.txt","w");
	fprintf(talk,"system--OK!\n");
	fclose(talk);
	talk=fopen("talk.txt","r+");
	while(!fscanf(talk,"robot--OK!\n"))
	{
		fclose(talk);
		talk=fopen("talk.txt","r+");
	}
	fclose(talk);
	
	cout<<"Press any key to start..."<<endl;
	getch();
	system("cls");
	
	for(int i=0;i<=17;i++)
		puts(map[i]);	
	SetValue(true);
	ShowThings();
	
	while(close!=true)												//A和D键,按E退出 
	{
		if(kbhit())
		{
			CloseThings();
			switch(getch())
			{
				case 'A':case 'a':
					if(board_left>2)
					{
						board_left-=2; 
						log=fopen("log.txt","a+");
						fprintf(log,"%4d:board_left-=2,board_left:%2d\n",++num1,board_left);
						fclose(log); 
					}
					break;	
				case 'D':case 'd':
					if(board_left<52-board_lengh)
					{
						board_left+=2;
						log=fopen("log.txt","a+");
						fprintf(log,"%4d:board_left+=2,board_left:%2d\n",++num1,board_left);
						fclose(log);
					}
					break;
				case 'E':case 'e':
					log=fopen("log.txt","a+");
					fprintf(log,"%4d:Exit game\n",++num1);
					fclose(log);
					close=true;
					break;
			}
			ShowThings();
		}
		switch(ball_way)
		{
			case DOWN_RIGHT: 
				delay();
				if(map[ball_up+1][ball_left+1]=='=')
				{
					//反弹右上 
					ball_way=UP_RIGHT;
				}
				else if(map[ball_up+1][ball_left+1]=='$')
				{
					//反弹左下 
					ball_way=DOWN_LEFT;
				}
				else if(map[ball_up+1][ball_left+1]=='^')
				{
					//失败 
					gotoxy(ball_left,ball_up);
					cout<<" ";
					talk=fopen("talk.txt","a+");
					fprintf(talk,"Fail×%d:",++fail);
					fclose(talk);
					isfail=true;
					gotoxy(0,18);
					cout<<"Fail×"<<fail<<"!";
				}
				else 
				{
					gotoxy(ball_left,ball_up);
					cout<<" ";
					ball_up++;ball_left++;
					gotoxy(ball_left,ball_up);
					cout<<"O";
				}
				break;
			case UP_RIGHT:
				delay();
				if(map[ball_up-1][ball_left+1]=='$')
				{
					//反弹左上 
					ball_way=UP_LEFT;
				}
				else if(map[ball_up-1][ball_left]=='#')
				{
					//反弹右下 
					map[ball_up-1][ball_left]=' ';
					gotoxy(ball_left,ball_up-1);
					cout<<" "; 
					ball_way=DOWN_RIGHT;
				}
				else
				{
					gotoxy(ball_left,ball_up);
					cout<<" ";
					ball_up--;ball_left++;
					gotoxy(ball_left,ball_up);
					cout<<"O";
				}
				break;
			case DOWN_LEFT:
				delay();
				if(map[ball_up+1][ball_left-1]=='=')
				{
					//反弹左上 
					ball_way=UP_LEFT;
				}
				else if(map[ball_up+1][ball_left-1]=='$')
				{
					//反弹右下 
					ball_way=DOWN_RIGHT;
				}
				else if(map[ball_up+1][ball_left-1]=='^')
				{
					//失败 
					gotoxy(ball_left,ball_up);
					cout<<" ";
					talk=fopen("talk.txt","a+");
					fprintf(talk,"Fail×%d:",++fail);
					fclose(talk);
					isfail=true;
					gotoxy(0,18);
					cout<<"Fail×"<<fail<<"!";
				}
				else
				{
					gotoxy(ball_left,ball_up);
					cout<<" ";
					ball_up++;ball_left--;
					gotoxy(ball_left,ball_up);
					cout<<"O";
				}
				break;
			case UP_LEFT:
				delay();
				if(map[ball_up-1][ball_left-1]=='$')
				{
					//反弹右上 
					ball_way=UP_RIGHT;
				}
				else if(map[ball_up-1][ball_left]=='#')
				{
					//反弹左下 
					map[ball_up-1][ball_left]=' ';
					gotoxy(ball_left,ball_up-1);
					cout<<" ";
					ball_way=DOWN_LEFT;
				}
				else
				{
					gotoxy(ball_left,ball_up);
					cout<<" ";
					ball_up--;ball_left--;
					gotoxy(ball_left,ball_up);
					cout<<"O";
				}
				break;
		}
		if(isfail)
		{
			SetValue(false);
			isfail=false;
		}
		talk=fopen("talk.txt","a+");
		fprintf(talk,"Fail×%d:",fail);
		fprintf(talk,"%4d:\n",++num2);
		fprintf(talk,"\tball_up:%2d\n",ball_up);
		fprintf(talk,"\tball_left:%2d\n",ball_left);
		fprintf(talk,"\tboard_left:%2d\n",board_left); 
		fclose(talk);
		gotoxy(0,18);
	}
	return 0;
}
void delay()
{
	for(int i=0;i<=99999950;i++);										//99999950
}
void gotoxy(int x,int y)												//x为left,y为up,包括0 
{   
	COORD c;   
	c.X=x;
	c.Y=y;   
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),c);   
}
void SetValue(bool first)
{
	srand((unsigned)time(NULL)+8564);
	ball_up=rand()%3+6;															//以0开头
	srand((unsigned)time(NULL)+4233);
	ball_left=rand()%25*2-1;
	board_lengh=15;
	srand((unsigned)time(NULL)+2225);
	ball_way=rand()%4+1;
	board_up_ini=16;
	if(first)
	{
		srand((unsigned)time(NULL)+9384);
		board_left=rand()%17*2-1;
	}
}
void ShowThings()
{
	gotoxy(ball_left,ball_up);
	cout<<"O";
	gotoxy(board_left,board_up_ini);
	cout<<"===============";
	for(int i=0;i<board_lengh;i++)
		map[board_up_ini][board_left+i]='=';
	gotoxy(0,18);
}
void CloseThings()
{
	gotoxy(ball_left,ball_up);
	cout<<" ";
	gotoxy(board_left,board_up_ini);
	cout<<"               ";
	for(int i=0;i<board_lengh;i++)
		map[board_up_ini][board_left+i]=' ';
	gotoxy(0,18);
}
