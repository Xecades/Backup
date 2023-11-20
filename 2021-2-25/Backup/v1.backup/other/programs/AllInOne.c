#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
#include<time.h>
#include<math.h>
int dl(int zzh,int zmm)
{
	int zh,mm;
	printf("请输入账号(初始为1)：");
	scanf("%d",&zh);
	printf("\n请输入密码(初始也为1)：");
	scanf("%d",&mm);
	system("cls");
	if(zzh==zh && zmm==mm)
	{
		printf("登陆成功！\n");
		Sleep(2000);
		system("cls");
		return 1;
	}
	else
	{
		printf("登陆失败！\n");
		Sleep(2000);
		system("cls");
		return 2;
	}
}
int main()
{
	system("color f0");
	int szh,smm,s;
	szh=1;
	smm=1;
	s=dl(szh,smm);
	if(s==1)
	{
		while(1)
		{
			char s;
			float xa1,xb1,xc1,xd1;
			int a,a1,b1,c1,d1,a2,b2,c2;
			printf("你好！用户%d！\n",szh);
			printf("功能大全:\n0:退出,\n1:整数加法计算机,\n2:小数加法计算机,\n3:使用方法,\n4:聊天（暂时不能使用）,\n5:迷宫,\n6:猜数,\n7:战斗（双人）,\n8:找质数,\n9:求因素（千万不要输入字符！）,\n10:倒计时,\n11:2D类MC游戏,\n12:颜色秀,\n13:简易加减乘除计算器,\n14:求π\n");
			scanf ("%d",&a);
			if(a==0)
			{
				system("cls");
				printf("拜拜，常来哦！我的主人：%d\n",szh);
				Sleep(2000);
				break;
			}
			else if(a==1)
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
			}
			else if(a==2)
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
			}
			else if(a==3)
			{
				system("cls");
				printf("使用方法:\n");
				Sleep(2000);
				printf("进入程序，按照指示输入你想使用应用的代码，然后使用（注意：不能乱输入！）。\n");
				Sleep(2000);
				printf("使用一次后可以再使用\n");
			}
			else if(a==4)
			{
				system("cls");
				printf("现在这个系统不是很完善，会继续修改的~");
				Sleep(2000);
				system("cls");
			}
			else if(a==5)
			{
				system("cls");
				printf("这是一个迷宫，请用WSAD键控制行走。Q为终点。欢迎使用！");
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
			}
			else if(a==6)
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
			}
			else if(a==7)
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
					if(cdong=='k')   //下
					{
						if(a[cx+1][cy]==' ')
						{
							a[cx][cy]=' ';
							cx++;
							a[cx][cy]=2;
						}
					}
					if(cdong=='i')   //上
					{
						if(a[cx-1][cy]==' ')
						{
							a[cx][cy]=' ';
							cx--;
							a[cx][cy]=2;
						}
					}
					if(cdong=='j')   //左
					{
						if(a[cx][cy-1]==' ')
						{
							a[cx][cy]=' ';
							cy--;
							a[cx][cy]=2;
						}
					}
					if(cdong=='l')   //右
					{
						if(a[cx][cy+1]==' ')
						{
							a[cx][cy]=' ';
							cy++;
							a[cx][cy]=2;
						}
					}
					if(cdong=='3')   //脚
					{
						if(a[x+1][y]==2||a[x-1][y]==2||a[x][y+1]==2||a[x][y-1]==2)
						{
							xue=xue-20;
						}
					}
					if(cdong=='4')   //手
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
			}
			else if(a==8)
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
			}
			else if(a==9)
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
			}
			else if(a==10)
			{
				int H10,M10,S10;
				system("cls");
				printf("请输入以下初始条件：\n");
				printf("开始的小时：");
				scanf("%d",&H10);
				system("cls");
				printf("开始的分钟：");
				scanf("%d",&M10);
				system("cls");
				printf("开始的秒：");
				scanf("%d",&S10);
				system("cls");
				while(H10>=0)
				{
					printf("%d:%02d:%02d",H10,M10,S10);
					S10--;
					if(S10<0)
					{
						M10--;
						S10=59;
					}
					if(M10<0)
					{
						H10--;
						M10=59;
					}
					Sleep(1000);
					system("cls");
				}
				printf("结束了，欢迎您使用！拜拜！\n");
			}
			else if(a==11)
			{
				int i11,wp=49,x11=1,y11=1,xue11=100,xueb=49,xues=48,xueg=48,xy=9,yy=11,xn=6,yn=38,xz=17,yz=6,yjs,njs,zjs,xuey=100,xueyb=49,xueys=48,xueyg=48,xuen=100,xuenb=49,xuens=48,xueng=48,xuez=100,xuezb=49,xuezs=48,xuezg=48;
				//数字血量+48=字符血量
				char qp[100][100]= {"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
				                    "$             #              #              $  $你的血量：100 $所有物品：    $",
				                    "$             #              #              $  $羊的血量：100 $1:普通方块@   $",
				                    "$             #              #              $  $牛的血量：100 $2:门|或_      $",
				                    "$             #              #              $  $猪的血量：100 $3:            $",
				                    "$             #              #              $  $按h获得帮助   $4:炸药        $",
				                    "$             #              #        N     $  $$$$$$$$$$$$$$$$5:电线x或X    $",
				                    "$             #              #              $  $现选择物品：  $6:发电机O或o  $",
				                    "$             #              #              $  $              $              $",
				                    "$          Y  #              #              $  $═══╦═══$              $",
				                    "$             #              #              $  $      ║*     $              $",
				                    "$###########################################$  $      ║*     $              $",
				                    "$             #              #              $  $      ║*     $              $",
				                    "$             #              #              $  $      ║*     $              $",
				                    "$             #              #              $  $现在的→1     $              $",
				                    "$             #              #              $  $      ║2     $              $",
				                    "$             #              #              $  $      ║3     $              $",
				                    "$     Z       #              #              $  $      ║4     $              $",
				                    "$             #              #              $  $      ║5     $              $",
				                    "$             #              #              $  $═══╩═══$              $",
				                    "$             #              #              $  $(使用'-'或'+' $              $",
				                    "$             #              #              $  $更换物品栏)   $              $",
				                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
				                   },z,close;
				printf("用WSAD键控制人物移动\n使用'-'或'+'更换物品栏\n按1往人物所指方向放置方块，按2在人物所指方向破坏方块\n动物：Y：羊，N：牛，Z：猪\n按h提示帮助");
				Sleep(2000);
				system("cls");
				qp[1][1]=24;
				qp[5][69]=19;
				for(i11=0; i11<=22; i11++)
					puts(qp[i11]);
				while(xue11>0)
				{
					z=getch();
					if(z=='+')
					{
						wp++;
					}
					if(z=='-')
					{
						wp--;
					}
					if(z=='h')
					{
						system("cls");
						printf("用WSAD键控制人物移动\n使用'-'或'+'更换物品栏\n按1在人物所指方向放置方块，按2在人物所指方向破坏方块\n动物：Y：羊，N：牛，Z：猪\n你的血量：%d\n羊的血量：%d，猪的血量：%d，牛的血量：%d\n任意输入关闭提示帮助\n",xue11,xuey,xuez,xuen);
						close=getch();
						system("cls");
					}
					if(z=='w')
					{
						qp[x11][y11]=' ';
						if(qp[x11-1][y11]==' ')
						{
							x11--;
						}
						else if(qp[x11-1][y11]=='|'&&qp[x11-2][y11]!='$')
						{
							x11=x11-2;
							qp[x11+1][y11]='|';
						}
						qp[x11][y11]=24;
					}


					if(z=='a')
					{
						qp[x11][y11]=' ';
						if(qp[x11][y11-1]==' ')
						{
							y11--;
						}
						else if(qp[x11][y11-1]=='|'&&qp[x11][y11-2]!='$')
						{
							y11=y11-2;
							qp[x11][y11+1]='|';
						}
						qp[x11][y11]=27;
					}


					if(z=='d')
					{
						qp[x11][y11]=' ';
						if(qp[x11][y11+1]==' ')
						{
							y11++;
						}
						else if(qp[x11][y11+1]=='|'&&qp[x11][y11+2]!='$')
						{
							y11=y11+2;
							qp[x11][y11-1]='|';
						}
						qp[x11][y11]=26;
					}


					if(z=='s')
					{
						qp[x11][y11]=' ';
						if(qp[x11+1][y11]==' ')
						{
							x11++;
						}
						else if(qp[x11+1][y11]=='|'&&qp[x11+2][y11]!='$')
						{
							x11=x11+2;
							qp[x11-1][y11]='|';
						}
						qp[x11][y11]=25;
					}


					if(wp=='1'&&z=='1')
					{
						if(qp[x11][y11]==24&&qp[x11-1][y11]==' ')
						{
							qp[x11-1][y11]='@';
						}
						if(qp[x11][y11]==25&&qp[x11+1][y11]==' ')
						{
							qp[x11+1][y11]='@';
						}
						if(qp[x11][y11]==27&&qp[x11][y11-1]==' ')
						{
							qp[x11][y11-1]='@';
						}
						if(qp[x11][y11]==26&&qp[x11][y11+1]==' ')
						{
							qp[x11][y11+1]='@';
						}
					}


					if(z=='2')
					{
						if(qp[x11][y11]==24&&qp[x11-1][y11]!='#'&&qp[x11-1][y11]!='Y'&&qp[x11-1][y11]!='N'&&qp[x11-1][y11]!='Z')
						{
							qp[x11-1][y11]=' ';
						}
						if(qp[x11][y11]==25&&qp[x11+1][y11]!='#'&&qp[x11+1][y11]!='Y'&&qp[x11+1][y11]!='N'&&qp[x11+1][y11]!='Z')
						{
							qp[x11+1][y11]=' ';
						}
						if(qp[x11][y11]==27&&qp[x11][y11-1]!='#'&&qp[x11][y11-1]!='Y'&&qp[x11][y11-1]!='N'&&qp[x11][y11-1]!='Z')
						{
							qp[x11][y11-1]=' ';
						}
						if(qp[x11][y11]==26&&qp[x11][y11+1]!='#'&&qp[x11][y11+1]!='Y'&&qp[x11][y11+1]!='N'&&qp[x11][y11+1]!='Z')
						{
							qp[x11][y11+1]=' ';
						}
					}

					srand((unsigned)time(NULL));
					yjs=rand()%4+1;
					if(yjs==1&&qp[xy-1][yy]==' ')   //W
					{
						qp[xy][yy]=' ';
						xy--;
						qp[xy][yy]='Y';
					}
					if(yjs==2&&qp[xy+1][yy]==' ')   //S
					{
						qp[xy][yy]=' ';
						xy++;
						qp[xy][yy]='Y';
					}
					if(yjs==3&&qp[xy][yy-1]==' ')   //A
					{
						qp[xy][yy]=' ';
						yy--;
						qp[xy][yy]='Y';
					}
					if(yjs==4&&qp[xy][yy+1]==' ')   //D
					{
						qp[xy][yy]=' ';
						yy++;
						qp[xy][yy]='Y';
					}

					srand((unsigned)time(NULL));
					njs=rand()%4;
					if(njs==1&&qp[xn-1][yn]==' ')   //W
					{
						qp[xn][yn]=' ';
						xn--;
						qp[xn][yn]='N';
					}
					if(njs==2&&qp[xn+1][yn]==' ')   //S
					{
						qp[xn][yn]=' ';
						xn++;
						qp[xn][yn]='N';
					}
					if(njs==3&&qp[xn][yn-1]==' ')   //A
					{
						qp[xn][yn]=' ';
						yn--;
						qp[xn][yn]='N';
					}
					if(njs==0&&qp[xn][yn+1]==' ')   //D
					{
						qp[xn][yn]=' ';
						yn++;
						qp[xn][yn]='N';
					}

					srand((unsigned)time(NULL));
					zjs=rand()%4-1;
					if(zjs==1&&qp[xz-1][yz]==' ')   //W
					{
						qp[xz][yz]=' ';
						xz--;
						qp[xz][yz]='Z';
					}
					if(zjs==2&&qp[xz+1][yz]==' ')   //S
					{
						qp[xz][yz]=' ';
						xz++;
						qp[xz][yz]='Z';
					}
					if(zjs==0&&qp[xz][yz-1]==' ')   //A
					{
						qp[xz][yz]=' ';
						yz--;
						qp[xz][yz]='Z';
					}
					if(zjs==-1&&qp[xz][yz+1]==' ')   //D
					{
						qp[xz][yz]=' ';
						yz++;
						qp[xz][yz]='Z';
					}

					if(qp[xy+1][yy]==24||qp[xy+1][yy]==25||qp[xy+1][yy]==27||qp[xy+1][yy]==26||qp[xy-1][yy]==24||qp[xy-1][yy]==25||qp[xy-1][yy]==27||qp[xy-1][yy]==26||qp[xy][yy-1]==24||qp[xy][yy-1]==25||qp[xy][yy-1]==27||qp[xy][yy-1]==26||qp[xy][yy+1]==24||qp[xy][yy+1]==25||qp[xy][yy+1]==27||qp[xy][yy+1]==26)
					{
						xue11=xue11-15;
					}


					if(qp[xn+1][yn]==24||qp[xn+1][yn]==25||qp[xn+1][yn]==27||qp[xn+1][yn]==26||qp[xn-1][yn]==24||qp[xn-1][yn]==25||qp[xn-1][yn]==27||qp[xn-1][yn]==26||qp[xn][yn-1]==24||qp[xn][yn-1]==25||qp[xn][yn-1]==27||qp[xn][yn-1]==26||qp[xn][yn+1]==24||qp[xn][yn+1]==25||qp[xn][yn+1]==27||qp[xn][yn+1]==26)
					{
						xue11=xue11-25;
					}


					if(qp[xz+1][yz]==24||qp[xz+1][yz]==25||qp[xz+1][yz]==27||qp[xz+1][yz]==26||qp[xz-1][yz]==24||qp[xz-1][yz]==25||qp[xz-1][yz]==27||qp[xz-1][yz]==26||qp[xz][yz-1]==24||qp[xz][yz-1]==25||qp[xz][yz-1]==27||qp[xz][yz-1]==26||qp[xz][yz+1]==24||qp[xz][yz+1]==25||qp[xz][yz+1]==27||qp[xz][yz+1]==26)
					{
						xue11=xue11-20;
					}
					/*省略1—门 */
					if(wp=='2'&&z=='1')
					{
						if(qp[x11][y11]==24)
						{
							if(qp[x11-1][y11]==' ')
							{
								qp[x11-1][y11]='_';
							}
							else if(qp[x11-1][y11]=='_')
							{
								qp[x11-1][y11]='|';
							}
							else if(qp[x11-1][y11]=='|')
							{
								qp[x11-1][y11]='_';
							}
						}
						else if(qp[x11][y11]==25)
						{
							if(qp[x11+1][y11]==' ')
							{
								qp[x11+1][y11]='_';
							}
							else if(qp[x11+1][y11]=='_')
							{
								qp[x11+1][y11]='|';
							}
							else if(qp[x11+1][y11]=='|')
							{
								qp[x11+1][y11]='_';
							}
						}
						else if(qp[x11][y11]==27)
						{
							if(qp[x11][y11-1]==' ')
							{
								qp[x11][y11-1]='_';
							}
							else if(qp[x11][y11-1]=='_')
							{
								qp[x11][y11-1]='|';
							}
							else if(qp[x11][y11-1]=='|')
							{
								qp[x11][y11-1]='_';
							}
						}
						else if(qp[x11][y11]==26)
						{
							if(qp[x11][y11+1]==' ')
							{
								qp[x11][y11+1]='_';
							}
							else if(qp[x11][y11+1]=='_')
							{
								qp[x11][y11+1]='|';
							}
							else if(qp[x11][y11+1]=='|')
							{
								qp[x11][y11+1]='_';
							}
						}
					}
					/*省略2—陷阱*/
					/*省略3—炸药*/
					if(wp=='4'&&z=='1')
					{
						if(qp[x11][y11]==24)
						{
							if(qp[x11-1][y11]==' ')
							{
								qp[x11-1][y11]=19;
							}
							else if(qp[x11-1][y11]==19)
							{
								qp[x11-1][y11]=' ';
								if(qp[x11-2][y11]!='#'&&qp[x11-2][y11]!='$'&&qp[x11-2][y11]!='Y'&&qp[x11-2][y11]!='N'&&qp[x11-2][y11]!='Z')
									qp[x11-2][y11]=' ';
								if(qp[x11-1][y11-1]!='#'&&qp[x11-1][y11-1]!='$'&&qp[x11-1][y11-1]!='Y'&&qp[x11-1][y11-1]!='N'&&qp[x11-1][y11-1]!='Z')
									qp[x11-1][y11-1]=' ';
								if(qp[x11-1][y11+1]!='#'&&qp[x11-1][y11+1]!='$'&&qp[x11-1][y11+1]!='Y'&&qp[x11-1][y11+1]!='N'&&qp[x11-1][y11+1]!='Z')
									qp[x11-1][y11+1]=' ';
							}
						}
						else if(qp[x11][y11]==25)
						{
							if(qp[x11+1][y11]==' ')
							{
								qp[x11+1][y11]=19;
							}
							else if(qp[x11+1][y11]==19)
							{
								qp[x11+1][y11]=' ';
								if(qp[x11+2][y11]!='#'&&qp[x11+2][y11]!='$'&&qp[x11+2][y11]!='Y'&&qp[x11+2][y11]!='N'&&qp[x11+2][y11]!='Z')
									qp[x11+2][y11]=' ';
								if(qp[x11+1][y11-1]!='#'&&qp[x11+1][y11-1]!='$'&&qp[x11+1][y11-1]!='Y'&&qp[x11+1][y11-1]!='N'&&qp[x11+1][y11-1]!='Z')
									qp[x11+1][y11-1]=' ';
								if(qp[x11+1][y11+1]!='#'&&qp[x11+1][y11+1]!='$'&&qp[x11+1][y11+1]!='Y'&&qp[x11+1][y11+1]!='N'&&qp[x11+1][y11+1]!='Z')
									qp[x11+1][y11+1]=' ';
							}
						}
						else if(qp[x11][y11]==26)
						{
							if(qp[x11][y11+1]==' ')
							{
								qp[x11][y11+1]=19;
							}
							else if(qp[x11][y11+1]==19)
							{
								qp[x11][y11+1]=' ';
								if(qp[x11-1][y11+1]!='#'&&qp[x11-1][y11+1]!='$'&&qp[x11-1][y11+1]!='Y'&&qp[x11-1][y11+1]!='N'&&qp[x11-1][y11+1]!='Z')
									qp[x11-1][y11+1]=' ';
								if(qp[x11+1][y11+1]!='#'&&qp[x11+1][y11+1]!='$'&&qp[x11+1][y11+1]!='Y'&&qp[x11+1][y11+1]!='N'&&qp[x11+1][y11+1]!='Z')
									qp[x11+1][y11+1]=' ';
								if(qp[x11][y11+2]!='#'&&qp[x11][y11+2]!='$'&&qp[x11][y11+2]!='Y'&&qp[x11][y11+2]!='N'&&qp[x11][y11+2]!='Z')
									qp[x11][y11+2]=' ';
							}
						}
						else if(qp[x11][y11]==27)
						{
							if(qp[x11][y11-1]==' ')
							{
								qp[x11][y11-1]=19;
							}
							else if(qp[x11][y11-1]==19)
							{
								qp[x11][y11-1]=' ';
								if(qp[x11-1][y11-1]!='#'&&qp[x11-1][y11-1]!='$'&&qp[x11-1][y11-1]!='Y'&&qp[x11-1][y11-1]!='N'&&qp[x11-1][y11-1]!='Z')
									qp[x11-1][y11-1]=' ';
								if(qp[x11+1][y11-1]!='#'&&qp[x11+1][y11-1]!='$'&&qp[x11+1][y11-1]!='Y'&&qp[x11+1][y11-1]!='N'&&qp[x11+1][y11-1]!='Z')
									qp[x11+1][y11-1]=' ';
								if(qp[x11][y11-2]!='#'&&qp[x11][y11-2]!='$'&&qp[x11][y11-2]!='Y'&&qp[x11][y11-2]!='N'&&qp[x11][y11-2]!='Z')
									qp[x11][y11-2]=' ';
							}
						}
					}
					if(wp=='5'&&z=='1')
					{
						if(qp[x11][y11]==24&&qp[x11-1][y11]==' ')
						{
							qp[x11-1][y11]='x';
							if(qp[x11-2][y11]=='X'||qp[x11-2][y11]=='O'||qp[x11-1][y11-1]=='X'||qp[x11-1][y11-1]=='O'||qp[x11-1][y11+1]=='X'||qp[x11-1][y11+1]=='O')
							{
								qp[x11-1][y11]='X';
							}
						}
						if(qp[x11][y11]==25&&qp[x11+1][y11]==' ')
						{
							qp[x11+1][y11]='x';
							if(qp[x11+2][y11]=='X'||qp[x11+2][y11]=='O'||qp[x11+1][y11-1]=='X'||qp[x11+1][y11-1]=='O'||qp[x11+1][y11+1]=='X'||qp[x11+1][y11+1]=='O')
							{
								qp[x11+1][y11]='X';
							}
						}
						if(qp[x11][y11]==27&&qp[x11][y11-1]==' ')
						{
							qp[x11][y11-1]='x';
							if(qp[x11-1][y11-1]=='X'||qp[x11-1][y11-1]=='O'||qp[x11+1][y11-1]=='X'||qp[x11+1][y11-1]=='O'||qp[x11][y11-2]=='X'||qp[x11][y11-2]=='O')
							{
								qp[x11][y11-1]='X';
							}
						}
						if(qp[x11][y11]==26&&qp[x11][y11+1]==' ')
						{
							qp[x11][y11+1]='x';
							if(qp[x11-1][y11+1]=='X'||qp[x11-1][y11+1]=='O'||qp[x11+1][y11+1]=='X'||qp[x11+1][y11+1]=='O'||qp[x11][y11+2]=='X'||qp[x11][y11+2]=='O')
							{
								qp[x11][y11+1]='X';
							}
						}

					}
					if(wp=='6'&&z=='1')
					{
						if(qp[x11][y11]==24&&qp[x11-1][y11]==' '||qp[x11-1][y11]=='o')
						{
							qp[x11-1][y11]='O';
						}
						else if(qp[x11][y11]==25&&qp[x11+1][y11]==' '||qp[x11+1][y11]=='o')
						{
							qp[x11+1][y11]='O';
						}
						else if(qp[x11][y11]==27&&qp[x11][y11-1]==' '||qp[x11][y11-1]=='o')
						{
							qp[x11][y11-1]='O';
						}
						else if(qp[x11][y11]==26&&qp[x11][y11+1]==' '||qp[x11][y11+1]=='o')
						{
							qp[x11][y11+1]='O';
						}
						else if(qp[x11][y11]==24&&qp[x11-1][y11]=='O')
						{
							qp[x11-1][y11]='o';
						}
						else if(qp[x11][y11]==25&&qp[x11+1][y11]=='O')
						{
							qp[x11+1][y11]='o';
						}
						else if(qp[x11][y11]==27&&qp[x11][y11-1]=='O')
						{
							qp[x11][y11-1]='o';
						}
						else if(qp[x11][y11]==26&&qp[x11][y11+1]=='O')
						{
							qp[x11][y11+1]='o';
						}
					}
					system("cls");
					if(wp==48)
						wp=57;
					if(wp==58)
						wp=49;
					qp[10][56]='*';
					qp[11][56]='*';
					qp[12][56]='*';
					qp[13][56]='*';
					qp[15][56]='*';
					qp[16][56]='*';
					qp[17][56]='*';
					qp[18][56]='*';
					if(wp-4>48)
						qp[10][56]=wp-4;
					if(wp-3>48)
						qp[11][56]=wp-3;
					if(wp-2>48)
						qp[12][56]=wp-2;
					if(wp-1>48)
						qp[13][56]=wp-1;
					qp[14][56]=wp;
					if(wp+1<58)
						qp[15][56]=wp+1;
					if(wp+2<58)
						qp[16][56]=wp+2;
					if(wp+3<58)
						qp[17][56]=wp+3;
					if(wp+4<58)
						qp[18][56]=wp+4;

					xueb=xue11/100+48;
					xues=xue11%100/10+48;
					xueg=xue11%100%10+48;
					qp[1][58]=xueb;
					qp[1][59]=xues;
					qp[1][60]=xueg;
					xueyb=xuey/100+48;
					xueys=xuey%100/10+48;
					xueyg=xuey%100%10+48;
					qp[2][58]=xueyb;
					qp[2][59]=xueys;
					qp[2][60]=xueyg;
					xuenb=xuen/100+48;
					xuens=xuen%100/10+48;
					xueng=xuen%100%10+48;
					qp[3][58]=xuenb;
					qp[3][59]=xuens;
					qp[3][60]=xueng;
					xuezb=xuez/100+48;
					xuezs=xuez%100/10+48;
					xuezg=xuez%100%10+48;
					qp[2][58]=xuezb;
					qp[2][59]=xuezs;
					qp[2][60]=xuezg;
					for(i11=0; i11<=22; i11++)
						puts(qp[i11]);
				}
				system("cls");
				printf("游戏结束…\n谢谢使用！");
			}
			else if(a==12)
			{
				system("cls");
				printf("3");
				Sleep(1000);
				system("cls");
				printf("2");
				Sleep(1000);
				system("cls");
				printf("1");
				Sleep(1000);
				system("cls");
				system("color 00");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color f0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 00");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color f0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 00");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color f0");
				Sleep(200);
				system("color e0");
				Sleep(200);
				system("color d0");
				Sleep(200);
				system("color c0");
				Sleep(200);
				system("color b0");
				Sleep(200);
				system("color a0");
				Sleep(200);
				system("color 90");
				Sleep(200);
				system("color 80");
				Sleep(200);
				system("color 70");
				Sleep(200);
				system("color 60");
				Sleep(200);
				system("color 50");
				Sleep(200);
				system("color 40");
				Sleep(200);
				system("color 30");
				Sleep(200);
				system("color 20");
				Sleep(200);
				system("color 10");
				Sleep(200);
				system("color 00");
			}
			else if(a==13)
			{
				float a,c,sc;
				char b;
				system("cls");
				printf("格式：数字1 符号(+-*/) 数字2\n");
				Sleep(2000);
				scanf("%f %c %f",&a,&b,&c);
				if(b=='+')
				{
					sc=a+c;
				}
				if(b=='-')
				{
					sc=a-c;
				}
				if(b=='*')
				{
					sc=a*c;
				}
				if(b=='/'&&c!=0)
				{
					sc=a/c;
				}
				if(b=='/'&&c==0)
				{
					printf("除数不能为0！！！");
				}
				if(b=='/'&&c!=0||b!='/')
				{
					printf("结果为%.4f",sc);
				}
			}
			else if(a==14)
			{
				float s14;
				long long b14,x14,n14,c14,i14,j14,d14,l14,a14[50000];
				system("cls");
				printf("请输入求π的位数:");
				scanf("%d",&x14);
				for(s14=0,n14=1; n14<=50000; n14++) //累加确定项数.
				{
					s14=s14+log10((2*n14+1)/n14);
					if(s14>x14+1)
						break;
				}
				for(i14=0; i14<=x14+5; i14++)
					a14[i14]=0;
				for(c14=1,j14=n14; j14>=1; j14--) //按公式分布计算。
				{
					d14=2*j14+1;
					for(i14=0; i14<=x14+4; i14++) //各位实施除2j+1.
					{
						a14[i14]=c14/d14;
						c14=(c14%d14)*10+a14[i14+1];
					}
					a14[x14+5]=c14/d14;
					for(b14=0,i14=x14+5; i14>=0; i14--) //各位实施乘j
					{
						a14[i14]=a14[i14]*j14+b14;
						b14=a14[i14]/10;
						a14[i14]=a14[i14]%10;
					}
					a14[0]=a14[0]+1;
					c14=a14[0];//整数加1.
				}
				for(b14=0,i14=x14+5; i14>=0; i14--) //按公式各位乘2
				{
					a14[i14]=a14[i14]*2+b14;
					b14=a14[i14]/10;
					a14[i14]=a14[i14]%10;
				}
				printf("π=     %d.",a14[0]);//诸位输出计算结果。
				for(l14=10,i14=1; i14<=x14; i14++)
				{
					printf("%d",a14[i14]);
					l14++;
					if(l14%70==0)
						printf("\n");
				}
			}
			else
			{
				system("cls");
				printf("没有这个数字，请不要乱输入！");
			}
			system("color f0");
			Sleep(2000);
			system("cls");
		}
	}
	else
	{
		printf("请再试一次！\n");
	}
	system("pause");
	return 0;
}
