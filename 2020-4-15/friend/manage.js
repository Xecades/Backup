var nick = new Array("Decoration", "Lemir3", "MMMsc0.618", "SocialistZhao", "Acenaphthene", "Mivik", "宫治冰汐", "UserUnknown", "vHenry", "饭饭");
var pic = new Array("Decoration.jpg", "Lemir3.jpg", "MMMsc0.618.jpg", "SocialistZhao.jpg", "Acenaphthene.jpg", "Mivik.jpg", "Snowsant.jpg", "UserUnknown.png", "vHenry.png", "noisky.png");
var link = new Array("https://decorationqwq.com/", "https://www.lemir3.red/", "https://zsx6.com/", "https://socialzxy.github.io/", "https://www.cnblogs.com/forth", "https://mivik.gitee.io/", "https://www.cnblogs.com/fox-nest/", "https://www.cnblogs.com/UserUnknown/", "https://zhr.wiki", "https://noisky.cn/");

var num = nick.length;
var arr = new Array();

// setObjProperty('--container-height', '70%');

for (var i = 0; i < num; i++) arr.push(i);
arr.sort(function (a, b) {
    return Math.random() > .5 ? -1 : 1;
});
navigation.innerHTML = "";
for (var i = 0; i < num; i++) {
    navigation.innerHTML += "<li><a class='friend' href='" + link[arr[i]] + "' target='_blank'><img class='friend-avatar' src='https://cdn.xecades.xyz/image-friend/" + pic[arr[i]] + "'><div class='friend-name'>" + nick[arr[i]] + "</div></a></li>";
}

/*
<li>
    <a class="friend" href="#">
        <img class="friend-avatar" src="https://cdn.xecades.xyz/image-friend/vHenry.png">
        <div class="friend-name">vHenry</div>
    </a>
</li>
*/