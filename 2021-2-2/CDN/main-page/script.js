var body = document.body;
var root = document.documentElement;
var panel = document.getElementById("panel");
var inner = document.getElementById("inner");

var background = document.getElementsByClassName("background")[0];
var title = document.getElementsByClassName("title")[0];
var hr = document.getElementsByClassName("hr")[0];
var quote = document.getElementsByClassName("quote")[0];
var line = document.getElementsByClassName("line")[0];
var items = document.getElementsByClassName("item");
var content = document.getElementsByClassName("content")[0];
var navigation = document.getElementsByClassName("navigation")[0];
var labs = document.getElementsByClassName("lab");
var lab_names = document.getElementsByClassName("lab-name");

var dark_num = 4;
var light_num = 3;
var dark_mode = false;
var bg_src = "404";
var bg_src_small = "404";

var Sentences = new Array(
    "与其诅咒黑暗，不如点亮烛光",
    "Think twice, code once.",
    "我们擦身而过，为了相识或者遗忘",
    "你还有好多未完成的梦，你有什么理由停下脚步",
    "既然认准这条路，何必去打听要走多久",
    "心之所向，素履以往",
    "给时光以生命，给岁月以文明",
    "给岁月以文明，而不是给文明以岁月",
    "碑是那么小，与其说是为了纪念，更像是为了忘却",
    "人做过的，神都记着",
    "像墓碑一样简洁",
    "这一刻，沧海桑田",
    "众星因你，皆降为尘",
    "你的无畏来源于无知",
    "夜晚的灯塔一直都在，只是灯亮的时候，你才看见它",
    "空不是无，空是一种存在，你得用空这种存在填满自己",
    "欢迎加入，现在我们是同志了",
    "无言是最大的轻蔑",
    "我们都是阴沟里的虫子，但总还是得有人仰望星空",
    "大自然真是自然的吗？",
    "值得获取的东西，就在风险的彼岸",
    "人类最高级别的安慰，就是理解别人的痛苦，并陪伴他",
    "窗外的每一片树叶，都使人类的科学显得那么幼稚无力",
    "我不去想是否能够成功，既然选择了远方，便只顾风雨兼程",
    "我殚精竭虑，只为度过平凡的一生",
    "来了，爱了，给了她一颗星星，走了",
    "sqrt(-1) love you",
    "我爱你，与你有何相干？毁灭你，又与你有何相干？",
    "要么孤独，要么庸俗",
    "时光之外，即为永恒",
    "迷途漫漫，终有一归",
    "凛冬散尽，星河长明",
    "Just sudo it!",
    "Go for I.T.",
    "要多想");
// exceed: 首先他们会忽略你，接着他们会嘲笑你，然后他们会打你，最后他们会输给你。

function getObjHeight(obj)           {return obj.offsetHeight;}
function getObjWidth(obj)            {return obj.offsetWidth;}
function getObjProperty(name)        {return getComputedStyle(root).getPropertyValue(name).trim();}
function setObjProperty(name, data)  {root.style.setProperty(name, data);}
function removeBack(str, len)        {return str.substr(0, str.length - len);}

inner.onmouseover = function () {
    inner.setAttribute("class", "inner hover");
    background.setAttribute("class", "background hover");
    title.setAttribute("class", "title hover");
    quote.setAttribute("class", "quote hover");
    line.setAttribute("class", "line hover");
    for (var i = 0; i < items.length; i++)
        items[i].setAttribute("class", "item hover");
    for (var i = 0; i < lab_names.length; i++)
        lab_names[i].setAttribute("class", "lab-name hover");
}

inner.onmouseout = function () {
    inner.setAttribute("class", "inner");
    background.setAttribute("class", "background");
    title.setAttribute("class", "title");
    quote.setAttribute("class", "quote");
    line.setAttribute("class", "line");
    for (var i = 0; i < items.length; i++)
        items[i].setAttribute("class", "item");
    for (var i = 0; i < lab_names.length; i++)
        lab_names[i].setAttribute("class", "lab-name");
}

function setCookie(cname, cvalue, exdays, path) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires  + ';path=' + path + ';domain=xecades.xyz';
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getQuote() {
    var randomNum = Math.floor(Math.random() * Sentences.length);
    quote.innerHTML = Sentences[randomNum];
}

function getBackground(mode) {
    bg_src_small = "https://cdn.xecades.xyz/main-page/background/" + (mode == true ? "dark" : "light") + "-small.jpg";
    bg_src = "https://cdn.xecades.xyz/main-page/background/" + (mode == true ? "dark" : "light") + ".jpg";
    refresh_bg();
}

function checkMode() {
    var cookie = getCookie("DarkMode");
    if (cookie == "") {
        cookie = "false";
        setCookie("DarkMode", "false", 123456, '/');
    }
    if (cookie == "true") {
        transferMode();
    } else {
        getBackground(false);
    }
}

function transferMode() {
    dark_mode = !dark_mode;
    body.setAttribute("class", (dark_mode ? "dark" : "light"));
    console.log(dark_mode);
    getBackground(dark_mode);
    setCookie("DarkMode", (dark_mode ? "true" : "false"), 123456, '/');
}

function refresh_bg () {
    background.setAttribute("class", "background unloaded");
    background.setAttribute("style", "background-image: url(" + bg_src_small + ")");
    var image = new Image;
    image.src = bg_src;
    image.onload = function () {
        background.setAttribute("style", "background-image: url(" + bg_src + ")");
        background.setAttribute("class", "background");
    }
}

window.onload = function () {body.style["opacity"] = 1;}

checkMode();
var is404 = false;

// eval(document.querySelector('html').style.filter = "grayscale(100%)");