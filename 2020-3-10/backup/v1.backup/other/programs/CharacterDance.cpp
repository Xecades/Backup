#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>

#define BUF_SIZE	150*150
//					大小 
#define FILE_COUNT	1045
//					文件数 
#define FILE_PATH	"C:/Users/Administrator/Desktop/zfw/ASCII-change %05d.txt"
//					图片转码到的地址 
int main()
{
	int size=0;
	char fileName[32]={0};

	for(int i=1;i<=FILE_COUNT;i++)
	{
		//格式化输出
		sprintf(fileName,FILE_PATH,i);
		FILE* fp=fopen(fileName,"r");
		if(NULL==fp)
		{
			printf("文件打开失败\n");
			return -1;
		}

		//读取（写入）内容
		char buf[BUF_SIZE]={0};
		size=fread(buf,1,BUF_SIZE,fp);
		if (size<=0)
		{
			printf("文件读取失败\n");
			return -1;
		}
		//关闭
		fclose(fp);
		
		//内容打印到dos窗口
		printf("%s", buf);
		Sleep(1000.0/(FILE_COUNT/10.0));
		//光标定位到0，0位置 设置控制台光标位置
		COORD pos;
		pos.X=0;
		pos.Y=0;
		SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),pos);
	}
	return 0;
}
