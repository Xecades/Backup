#include<iostream>
#include<cstdio>
#include<cstdlib>
using namespace std;
#define UP_LEFT 	1		//左上
#define UP_RIGHT 	2		//右上
#define DOWN_LEFT 	3		//左下
#define DOWN_RIGHT 	4		//右下
FILE *talk;
int ball_up,ball_left,board_left,fail,num;
void exit_game();
int main()
{
	atexit(exit_game);
	
	talk=fopen("talk.txt","w+");
	fprintf(talk,"robot--OK!\n");
	fclose(talk);
	talk=fopen("talk.txt","a+");
	fscanf(talk,"robot--OK!\n");
	while(1)
	{
		system("cls");
		fscanf(talk,"Fail×%d:%4d:\n",&fail,&num);
		if(num==0)
			continue;
		fscanf(talk,"\tball_up:%2d\n",&ball_up);
		fscanf(talk,"\tball_left:%2d\n",&ball_left);
		fscanf(talk,"\tboard_left:%2d\n",&board_left);
		printf("num:      %4d\n",num);
		printf("fail:      %3d\n",fail);
		printf("ball_up:    %2d\n",ball_up);
		printf("ball_left:  %2d\n",ball_left);
		printf("board_left: %2d\n",board_left);
	}
	return 0;
}
void exit_game()
{
	fclose(talk);
}
