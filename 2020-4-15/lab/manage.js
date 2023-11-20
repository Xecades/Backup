var details = document.getElementsByClassName("lab-detail");
var situations = new Array(100);

var obj = new Array(
    {"title" : 'Nazo by Xecades', "description" : '自制网页解密游戏', "link": 'https://nazo.xecades.xyz/'},
    {"title" : 'Code Editor', "description" : '代码高亮编辑器<br>注意它不是编译器', "link": 'CodeEditor'},
    // {"title" : 'Game of Life', "description" : '元胞自动机 - 生命游戏模拟器<br>介绍：<a style="color: cyan" href="https://blog.xecades.xyz/articles/LifeGame/" target="_blank">地址</a>', "link": 'GameOfLife'},
    {"title" : 'CA by Xecades', "description" : '元胞自动机 - 生命游戏模拟器<br>自制，目前测试版<br>介绍：<a style="color: cyan" href="https://blog.xecades.xyz/articles/LifeGame/" target="_blank">地址</a>', 'link': 'CA'},
    {"title" : 'Canvas Dancing Time', "description" : '使用 Canvas 实现的粒子时钟<br>来源: <a style="color: cyan" href="https://github.com/guji-david/test/tree/master/canvas/html_Canvas/dance-time" target="_blank">Github</a>', "link": 'CanvasDanceTime'},
    {"title" : 'Piet Code Generator', "description" : '生成 Piet 语言下循环输出给定文本的程序<br>注意这不是 interpreter<br>我优化了 UI<br>来源: <a style="color: cyan" href="https://github.com/helenwa/PietWeb" target="_blank">Github</a>', "link": 'PietWeb'},
    {"title" : 'Xecades TIY', "description" : '在线运行 html 代码<br>Developed by Xecades', 'link' : "https://tiy.xecades.xyz/"}
);
// {"title" : '', "description" : '', "link": ''},
var num = obj.length;

navigation.innerHTML = "";
situations.fill(0);

function expand(num) {
    if (situations[num] == 0) {
        details[num].setAttribute("class", "lab-detail more");
        situations[num] = 1;
    } else {
        details[num].setAttribute("class", "lab-detail");
        situations[num] = 0;
    }
}

function getData() {
    for (var i = 0; i < num; i++)
        navigation.innerHTML += '<li class="lab"><a class="lab-name" href="' + obj[i].link + '" target="_blank">' + obj[i].title + '</a><div class="lab-description" title="more" onclick="expand(' + i + ')"><i class="fa fa-flask" aria-hidden="true"></i></div></li><div class="lab-detail"><br>' + obj[i].description + '<br>&nbsp;</div>';
}

getData();