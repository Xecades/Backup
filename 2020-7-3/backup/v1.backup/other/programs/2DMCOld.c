#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
int main()
{
	int i,gtime=1,timew,timeq,timeb,times,timeg,xi,yi,xu=0,yu=0,xii,yii,wp=49,x11=12,y11=22,xue11=100,xueb=49,xues=48,xueg=48,xy=9,yy=11,xn=6,yn=38,xz=17,yz=6,yjs,njs,zjs,xuey=100,xueyb=49,xueys=48,xueyg=48,xuen=100,xuenb=49,xuens=48,xueng=48,xuez=100,xuezb=49,xuezs=48,xuezg=48;
	//����Ѫ��+48=�ַ�Ѫ��
	char qp[300][300]= {"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$                                                                                                                                                              $",
	                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
	                   };
	char xx[100][100]= {"��*--------------*-----------------*",
	                    "��|���Ѫ����100 |��Ʒ��           |",
	                    "��|���Ѫ����100 |1:��ͨ����@      |",
	                    "��|ţ��Ѫ����100 |2:��|��_         |",
	                    "��|����Ѫ����100 |3:               |",
	                    "��|              |4:ըҩ           |",
	                    "��*--------------*5:����x��X       |",
	                    "��|����Ʒ����:001|6:�����O��o     |",
	                    "��|(ʹ��'-'��'+' |                 |",
	                    "��|������Ʒ��)   |                 |",
	                    "��*--------------*                 |",
	                    "��|��Ϸʱ��:00000|                 |",
	                    "��*--------------*                 |",
	                    "��|��H��ð���   |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |                 |",
	                    "��|              |(����ϳ�����)   |",
	                   },z,close;
	printf("��WSAD�����������ƶ�\nʹ��'-'��'+'������Ʒ��\n��1��������ָ������÷��飬��2��������ָ�����ƻ�����\n���Y����N��ţ��Z����\n��h��ʾ����");
	//Sleep(3000);
	system("cls");
	qp[x11][y11]=24;
	xx[5][69]=19;
	//ˢ������
	xii=0;
	for(xi=xu; xi<=xu+22; xi++)
	{
		for(yi=yu; yi<=yu+42; yi++)
			printf("%c",qp[xi][yi]);
		puts(xx[xii]);
		xii++;
	}
	printf("*--------------------------------------------*--------------*-----------------*\n");
	//
	while(xue11>0)
	{
		z=getch();
		if(z=='+')
			wp++;
		else if(z=='-')
			wp--;
		else if(z=='h' || z=='H')
		{
			system("cls");
			printf("��WSAD�����������ƶ�\nʹ��'-'��'+'������Ʒ��\n��1��������ָ������÷��飬��2��������ָ�����ƻ�����\n���Y����N��ţ��Z����\n���Ѫ����%d\n���Ѫ����%d������Ѫ����%d��ţ��Ѫ����%d\n��������ر���ʾ����\n",xue11,xuey,xuez,xuen);
			close=getch();
			system("cls");
		}
		else if(z=='w' || z=='W')
		{
			qp[x11][y11]=' ';
			if(qp[x11-1][y11]==' ')
			{
				xu--;
				x11--;
			}
			else if(qp[x11-1][y11]=='|'&&qp[x11-2][y11]!='$')
			{
				x11=x11-2;
				xu=xu-2;
				qp[x11+1][y11]='|';
			}
			qp[x11][y11]=24;
		}


		else if(z=='a')
		{
			qp[x11][y11]=' ';
			if(qp[x11][y11-1]==' ')
			{
				yu--;
				y11--;
			}
			else if(qp[x11][y11-1]=='|'&&qp[x11][y11-2]!='$')
			{
				y11=y11-2;
				xu=xu-2;
				qp[x11][y11+1]='|';
			}
			qp[x11][y11]=27;
		}


		else if(z=='d' || z=='D')
		{
			qp[x11][y11]=' ';
			if(qp[x11][y11+1]==' ')
			{
				yu++;
				y11++;
			}
			else if(qp[x11][y11+1]=='|'&&qp[x11][y11+2]!='$')
			{
				yu=yu+2;
				y11=y11+2;
				qp[x11][y11-1]='|';
			}
			qp[x11][y11]=26;
		}


		else if(z=='s' || z=='S')
		{
			qp[x11][y11]=' ';
			if(qp[x11+1][y11]==' ')
			{
				xu++;
				x11++;
			}
			else if(qp[x11+1][y11]=='|'&&qp[x11+2][y11]!='$')
			{
				x11=x11+2;
				xu=xu+2;
				qp[x11-1][y11]='|';
			}
			qp[x11][y11]=25;
		}


		else if(wp=='1' && z=='1')
		{
			if(qp[x11][y11]==24&&qp[x11-1][y11]==' ')
				qp[x11-1][y11]='@';
			
			if(qp[x11][y11]==25&&qp[x11+1][y11]==' ')
				qp[x11+1][y11]='@';
			
			if(qp[x11][y11]==27&&qp[x11][y11-1]==' ')
				qp[x11][y11-1]='@';
			
			if(qp[x11][y11]==26&&qp[x11][y11+1]==' ')
				qp[x11][y11+1]='@';
		}


		else if(z=='2')
		{
			if(qp[x11][y11]==24&&qp[x11-1][y11]!='#'&&qp[x11-1][y11]!='Y'&&qp[x11-1][y11]!='N'&&qp[x11-1][y11]!='Z')
				qp[x11-1][y11]=' ';
			
			if(qp[x11][y11]==25&&qp[x11+1][y11]!='#'&&qp[x11+1][y11]!='Y'&&qp[x11+1][y11]!='N'&&qp[x11+1][y11]!='Z')
				qp[x11+1][y11]=' ';
			
			if(qp[x11][y11]==27&&qp[x11][y11-1]!='#'&&qp[x11][y11-1]!='Y'&&qp[x11][y11-1]!='N'&&qp[x11][y11-1]!='Z')
				qp[x11][y11-1]=' ';
			
			if(qp[x11][y11]==26&&qp[x11][y11+1]!='#'&&qp[x11][y11+1]!='Y'&&qp[x11][y11+1]!='N'&&qp[x11][y11+1]!='Z')
				qp[x11][y11+1]=' ';
		}

		srand((unsigned)time(NULL));
		yjs=rand()%4+1;
		if(yjs==1&&qp[xy-1][yy]==' ')   //W
		{
			qp[xy][yy]=' ';
			xy--;
			qp[xy][yy]='Y';
		}
		else if(yjs==2&&qp[xy+1][yy]==' ')     //S
		{
			qp[xy][yy]=' ';
			xy++;
			qp[xy][yy]='Y';
		}
		else if(yjs==3&&qp[xy][yy-1]==' ')     //A
		{
			qp[xy][yy]=' ';
			yy--;
			qp[xy][yy]='Y';
		}
		else if(yjs==4&&qp[xy][yy+1]==' ')     //D
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
		else if(njs==2&&qp[xn+1][yn]==' ')     //S
		{
			qp[xn][yn]=' ';
			xn++;
			qp[xn][yn]='N';
		}
		else if(njs==3&&qp[xn][yn-1]==' ')     //A
		{
			qp[xn][yn]=' ';
			yn--;
			qp[xn][yn]='N';
		}
		else if(njs==0&&qp[xn][yn+1]==' ')     //D
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
		else if(zjs==2&&qp[xz+1][yz]==' ')     //S
		{
			qp[xz][yz]=' ';
			xz++;
			qp[xz][yz]='Z';
		}
		else if(zjs==0&&qp[xz][yz-1]==' ')     //A
		{
			qp[xz][yz]=' ';
			yz--;
			qp[xz][yz]='Z';
		}
		else if(zjs==-1&&qp[xz][yz+1]==' ')     //D
		{
			qp[xz][yz]=' ';
			yz++;
			qp[xz][yz]='Z';
		}

		if(qp[xy+1][yy]==24||qp[xy+1][yy]==25||qp[xy+1][yy]==27||qp[xy+1][yy]==26||qp[xy-1][yy]==24||qp[xy-1][yy]==25||qp[xy-1][yy]==27||qp[xy-1][yy]==26||qp[xy][yy-1]==24||qp[xy][yy-1]==25||qp[xy][yy-1]==27||qp[xy][yy-1]==26||qp[xy][yy+1]==24||qp[xy][yy+1]==25||qp[xy][yy+1]==27||qp[xy][yy+1]==26)
			xue11=xue11-15;


		if(qp[xn+1][yn]==24||qp[xn+1][yn]==25||qp[xn+1][yn]==27||qp[xn+1][yn]==26||qp[xn-1][yn]==24||qp[xn-1][yn]==25||qp[xn-1][yn]==27||qp[xn-1][yn]==26||qp[xn][yn-1]==24||qp[xn][yn-1]==25||qp[xn][yn-1]==27||qp[xn][yn-1]==26||qp[xn][yn+1]==24||qp[xn][yn+1]==25||qp[xn][yn+1]==27||qp[xn][yn+1]==26)
			xue11=xue11-25;


		if(qp[xz+1][yz]==24||qp[xz+1][yz]==25||qp[xz+1][yz]==27||qp[xz+1][yz]==26||qp[xz-1][yz]==24||qp[xz-1][yz]==25||qp[xz-1][yz]==27||qp[xz-1][yz]==26||qp[xz][yz-1]==24||qp[xz][yz-1]==25||qp[xz][yz-1]==27||qp[xz][yz-1]==26||qp[xz][yz+1]==24||qp[xz][yz+1]==25||qp[xz][yz+1]==27||qp[xz][yz+1]==26)
			xue11=xue11-20;
		
		/*ʡ��1���� */
		else if(wp=='2'&&z=='1')
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
		/*ʡ��2������*/
		/*ʡ��3��ըҩ*/
		else if(wp=='4'&&z=='1')
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
		else if(wp=='5'&&z=='1')
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
		else if(wp=='6'&&z=='1')
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
		xx[7][14]=(wp-48)/100+48;
		xx[7][15]=(wp-48)%100/10+48;
		xx[7][16]=(wp-48)%100%10+48;

		if(gtime==99999)
			gtime=0;
		timew=gtime/10000+48;
		timeq=gtime%10000/1000+48;
		timeb=gtime%10000%1000/100+48;
		times=gtime%10000%1000%100/10+48;
		timeg=gtime%10000%1000%100%10+48;
		xx[11][12]=timew;
		xx[11][13]=timeq;
		xx[11][14]=timeb;
		xx[11][15]=times;
		xx[11][16]=timeg;

		xueb=xue11/100+48;
		xues=xue11%100/10+48;
		xueg=xue11%100%10+48;
		xx[1][13]=xueb;
		xx[1][14]=xues;
		xx[1][15]=xueg;
		xueyb=xuey/100+48;
		xueys=xuey%100/10+48;
		xueyg=xuey%100%10+48;
		xx[2][13]=xueyb;
		xx[2][14]=xueys;
		xx[2][15]=xueyg;
		xuenb=xuen/100+48;
		xuens=xuen%100/10+48;
		xueng=xuen%100%10+48;
		xx[3][13]=xuenb;
		xx[3][14]=xuens;
		xx[3][15]=xueng;
		xuezb=xuez/100+48;
		xuezs=xuez%100/10+48;
		xuezg=xuez%100%10+48;
		xx[2][13]=xuezb;
		xx[2][14]=xuezs;
		xx[2][15]=xuezg;
		gtime++;
		//ˢ������
		xii=0;
		for(xi=xu; xi<=xu+22; xi++)
		{
			for(yi=yu; yi<=yu+42; yi++)
				printf("%c",qp[xi][yi]);
			puts(xx[xii]);
			xii++;
		}
		printf("*--------------------------------------------*--------------*-----------------*\n");
		//
	}
	system("cls");
	printf("��Ϸ������\nллʹ�ã�");
}