#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#include <time.h>
int main()
{
	while(1)
    {
		char s;
		float xa1,xb1,xc1,xd1;
		int a,a1,b1,c1,d1,a2,b2,c2;
		printf("1:整数加法计算机，2:小数加法计算机，3：使用方法，4:聊天（暂时无法运行），5:迷宫，6:猜数，7:战斗（双人），8:找质数，9:求因素（千万不要输入字符！）\n");
		scanf ("%d",&a);
		if(a==1)
		{
			system("cls");
			printf("整数加法计算机\n欢迎使用\n");
			printf("__________________________________________\n");
			printf("请输入第一个数，再按回车\n");
			scanf("%d",&a1);
			printf("请输入第二个数，再按回车\n");
			scanf("%d",&b1);
			printf("请输入第三个数，再按回车\n");
			scanf("%d",&c1);
			d1=a1+b1+c1;
			printf("%d+%d+%d=%d\n",a1,b1,c1,d1);
            Sleep(2000);
            system("cls");
		}
		if(a==2)
		{
			system("cls");
			printf("小数加法计算机\n欢迎使用\n");
			printf("__________________________________________\n");
			printf("请输入第一个数，再按回车\n");
			scanf("%f",&xa1);
			printf("请输入第二个数，再按回车\n");
			scanf("%f",&xb1);
			printf("请输入第三个数，再按回车\n");
			scanf("%f",&xc1);
			xd1=xa1+xb1+xc1;
			printf("%f+%f+%f=%f\n",xa1,xb1,xc1,xd1);
            Sleep(2000);
            system("cls");
		}
		if(a==3)
		{
			system("cls");
			printf("进入程序，按照指示输入你想使用应用的代码，然后使用（注意：不能乱输入！）。\n");
			Sleep(2000);
			printf("使用一次后可以再使用\n");
			Sleep(2000);
            system("cls");
		}
		if(a==4)
		{
			system("cls");
			int c8,e8;
			char a8[100],b8[100],d8[100];
			printf("暂时无法运行\n");
			system("cls");
		}
		if(a==5)
		{
			system("cls");
			printf("这是一个迷宫，请用“WASD”键控制行走。Q为终点。欢迎使用！");
			Sleep(2000);
			system("cls");
			char a[50][50]= {"################################",
			                 "#O   #     #  #  #   #  #  #  ##",
			                 "##     #   #       ###     #   #",
			                 "#    # #####  ## #   #  # #### #",
			                 "##   #       #   ### #  # ##   #",
			                 "##   ##### #  #  #      #  # ###",
			                 "#      #   #  ####   #  ## #   #",
			                 "##   ##### #     ########      #",
			                 "#    # #      #      #     ### #",
			                 "##   # #   #  ####   #  #  #   Q",
			                 "################################",
			                };
			int i,x,y,p,q;
			char ch;

			x=1;
			y=1;
			p=9;
			q=31;
			for(i=0; i<=12; i++)
				puts(a[i]);
			while(x!=p||y!=q)
			{
				ch=getch();
				if(ch=='s')
				{
					if(a[x+1][y]!='#')
					{
						a[x][y]=' ';
						x++;
						a[x][y]='O';
					}
				}
				if(ch=='w')
				{
					if(a[x-1][y]!='#')
					{
						a[x][y]=' ';
						x--;
						a[x][y]='O';
					}
				}
				if(ch=='a')
				{
					if(a[x][y-1]!='#')
					{
						a[x][y]=' ';
						y--;
						a[x][y]='O';
					}
				}
				if(ch=='d')
				{
					if(a[x][y+1]!='#')
					{
						a[x][y]=' ';
						y++;
						a[x][y]='O';
					}
				}
				system("cls");
				for(i=0; i<=12; i++)
					puts(a[i]);
			}
			system("cls");
			printf("你赢了！！！\n");
			Sleep(2000);
			system("cls");
		}
		if(a==6)
		{
			system("cls");
			printf("这是一个猜数游戏，电脑随机选一个数，你随便猜，根据提示找出这个数");
			Sleep(3500);
			system("cls");
			int a7,b7,sum7;
			sum7=10;
			srand((unsigned)time(NULL));
			a7=rand()%100;
			while(1)
			{
				sum7--;
				scanf("%d",&b7);
				if(b7>a7)
					printf("大了！还有%d次机会，请继续\n",sum7);
				if(b7<a7)
					printf("小了！还有%d次机会，请继续\n",sum7);
				if(b7==a7)
				{
					printf("恭喜你！对了!这个数就是%d\n",a7);
					break;
				}
				if(sum7==0)
				{
					printf("没有机会了！这个数是%d\n",a7);
					break;
				}
			}
            Sleep(2000);
            system("cls");
		}
		if(a==7)
		{
			char a[100][100]= {"####################",
			                   "#                  #",
			                   "#                  #",
			                   "#                  #",
			                   "#                  #",
			                   "#                  #",
			                   "#                  #",
			                   "####################",
			                  };
			int xue,x,y,cxue,cx,cy,i;
			char dong,cdong;
			xue=100;
			cxue=100;
			x=6;
			y=1;
			cx=6;
			cy=18;
			a[x][y]=1;
			a[cx][cy]=2;
			system("cls");
			printf("控制%c的人用WSAD键控制行走，1键脚踢（扣20血），2键手打（扣10血）\n控制%c的人用IKJL键控制，3键脚踢（扣20血），4键手打（扣10血）\n",1,2);
			Sleep(3000);
			system("cls");
			printf("3\n");
			Sleep(1000);
			system("cls");
			printf("2\n");
			Sleep(1000);
			system("cls");
			printf("1\n");
			Sleep(1000);
			system("cls");
			for(i=0; i<=7; i++)
				puts(a[i]);
			printf("%c有%d血，%c有%d滴血\n",2,cxue,1,xue);
			while(xue>0&&cxue>0)
			{
				dong=getch();
				if(dong=='s')
				{
					if(a[x+1][y]==' ')
					{
						a[x][y]=' ';
						x++;
						a[x][y]=1;
					}
				}
				if(dong=='w')
				{
					if(a[x-1][y]==' ')
					{
						a[x][y]=' ';
						x--;
						a[x][y]=1;
					}
				}
				if(dong=='a')
				{
					if(a[x][y-1]==' ')
					{
						a[x][y]=' ';
						y--;
						a[x][y]=1;
					}
				}
				if(dong=='d')
				{
					if(a[x][y+1]==' ')
					{
						a[x][y]=' ';
						y++;
						a[x][y]=1;
					}
				}
				if(dong=='1')
				{
					if(a[cx+1][cy]==1||a[cx-1][cy]==1||a[cx][cy+1]==1||a[cx][cy-1]==1)
					{
						cxue=cxue-20;
					}
				}
				if(dong=='2')
				{
					if(a[cx+1][cy]==1||a[cx-1][cy]==1||a[cx][cy+1]==1||a[cx][cy-1]==1)
					{
						cxue=cxue-10;
					}
				}
				/*另一个人部分*/
				cdong=getch();
				if(cdong=='k')//下
				{
					if(a[cx+1][cy]==' ')
					{
						a[cx][cy]=' ';
						cx++;
						a[cx][cy]=2;
					}
				}
				if(cdong=='i')//上
				{
					if(a[cx-1][cy]==' ')
					{
						a[cx][cy]=' ';
						cx--;
						a[cx][cy]=2;
					}
				}
				if(cdong=='j')//左
				{
					if(a[cx][cy-1]==' ')
					{
						a[cx][cy]=' ';
						cy--;
						a[cx][cy]=2;
					}
				}
				if(cdong=='l')//右
				{
					if(a[cx][cy+1]==' ')
					{
						a[cx][cy]=' ';
						cy++;
						a[cx][cy]=2;
					}
				}
				if(cdong=='3')//脚
				{
					if(a[x+1][y]==2||a[x-1][y]==2||a[x][y+1]==2||a[x][y-1]==2)
					{
						xue=xue-20;
					}
				}
				if(cdong=='4')//手
				{
					if(a[x+1][y]==2||a[x-1][y]==2||a[x][y+1]==2||a[x][y-1]==2)
					{
						xue=xue-10;
					}
				}
				system("cls");
				for(i=0; i<=7; i++)
					puts(a[i]);
				printf("%c有%d血，%c有%d滴血\n",2,cxue,1,xue);
			}
			system("cls");
			if(xue<=0)
				printf("%c赢了！\n",2);
			if(cxue<=0)
				printf("%c赢了！\n",1);
			Sleep(3500);
			system("cls");
		}
		if(a==8)
		{
			int m8;
			int i8;
			int k8;
			system("cls");
			printf("请输入一个整数（除了1和0，反正它们不是质数）：");
			scanf("%d",&m8);
			k8=(int)sqrt((double)m8 );
			for(i8=2; i8<=k8; i8++)
				if(m8%i8==0)
					break;
			if(i8>k8)
				printf("%d是质数\n",m8);
			else
				printf("%d不是质数\n",m8);
			Sleep(2000);
			system("cls");
		}
		if(a==9)
		{
			int n9;
			int i9;
			system("cls");
			printf("请输入一个整数:");
			scanf("%d",&n9);
			printf("%d=",n9);
			for(i9=2; i9<=n9; i9++)
			{
				while(n9!=i9)
				{
					if(n9%i9==0)
					{
						printf("%d*",i9);
						n9=n9/i9;
					}
					else
						break;
				}
			}
			printf("%d\n",n9);
			Sleep(2000);
			system("cls");
		}
    }
	system("pause");
    return 0;
}
