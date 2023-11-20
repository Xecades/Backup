var num = 10;
var nick = new Array("Decoration", "Lemir3", "MMMsc0.618", "SocialZhao", "Acenaphthene", "Mivik", "宫治冰汐", "UserUnknown", "vHenry", "饭饭");
var pic = new Array("Decoration.jpg", "Lemir3.jpg", "MMMsc0.618.jpg", "SocialistZhao.jpg", "Acenaphthene.jpg", "Mivik.jpg", "Snowsant.jpg", "UserUnknown.png", "vHenry.png", "noisky.png");
var link = new Array("https://decorationqwq.com/", "https://www.lemir3.red/", "https://zsx6.com/", "https://socialzxy.github.io/", "https://www.cnblogs.com/forth", "https://mivik.gitee.io/", "https://www.cnblogs.com/fox-nest/", "https://www.cnblogs.com/UserUnknown/", "https://zhr.wiki", "https://noisky.cn/");
var tag = new Array("lhy", "OIer", "Orz", "<del>CSPer</del>NOIPer", "AFO(?)", "Fantastic", "Snowsant", "锟斤拷锟斤", "ZHR", "Noisky");

var ins = document.getElementById("content");
var arr = new Array();

for (var i = 0; i < num; i++) arr.push(i);
arr.sort(function (a, b) {
    return Math.random() > .5 ? -1 : 1;
});

ins.innerHTML = "";
for (var i = 0; i < num; i++) {
    ins.innerHTML += "<a class='lnk' href='" + link[arr[i]] + "'>" + nick[arr[i]] + "</a>";
    if ((i + 1) % 3 == 0)
        ins.innerHTML += "<br>";
}