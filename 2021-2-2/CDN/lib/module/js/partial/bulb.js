var bulb = document.getElementById("tool");
var panel = document.getElementById("panel");
var title = document.getElementsByTagName("path");
var textDes = document.getElementsByClassName("text")[0];
var $404emoji = document.getElementsByClassName("emoji")[0];
var $404above = document.getElementsByClassName("above")[0];
var body = document.body;
var dark = false;

var lightBG = "linear-gradient(339deg, rgba(47, 47, 47, 0.02) 0%, rgba(47, 47, 47, 0.02) 42%, transparent 42%, transparent 99%, rgba(17, 17, 17, 0.02) 99%, rgba(17, 17, 17, 0.02) 100%), linear-gradient(257deg, rgba(65, 65, 65, 0.02) 0%, rgba(65, 65, 65, 0.02) 11%, transparent 11%, transparent 92%, rgba(53, 53, 53, 0.02) 92%, rgba(53, 53, 53, 0.02) 100%), linear-gradient(191deg, rgba(5, 5, 5, 0.02) 0%, rgba(5, 5, 5, 0.02) 1%, transparent 1%, transparent 45%, rgba(19, 19, 19, 0.02) 45%, rgba(19, 19, 19, 0.02) 100%), linear-gradient(29deg, rgba(28, 28, 28, 0.02) 0%, rgba(28, 28, 28, 0.02) 33%, transparent 33%, transparent 40%, rgba(220, 220, 220, 0.02) 40%, rgba(220, 220, 220, 0.02) 100%), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))";
var darkBG = "linear-gradient(12deg, rgba(193, 193, 193, 0.08) 0%, rgba(193, 193, 193, 0.08) 2%,rgba(129, 129, 129, 0.08) 2%, rgba(129, 129, 129, 0.08) 27%,rgba(185, 185, 185, 0.08) 27%, rgba(185, 185, 185, 0.08) 66%,rgba(83, 83, 83, 0.08) 66%, rgba(83, 83, 83, 0.08) 100%),linear-gradient(321deg, rgba(240, 240, 240, 0.08) 0%, rgba(240, 240, 240, 0.08) 13%,rgba(231, 231, 231, 0.08) 13%, rgba(231, 231, 231, 0.08) 34%,rgba(139, 139, 139, 0.08) 34%, rgba(139, 139, 139, 0.08) 71%,rgba(112, 112, 112, 0.08) 71%, rgba(112, 112, 112, 0.08) 100%),linear-gradient(236deg, rgba(189, 189, 189, 0.08) 0%, rgba(189, 189, 189, 0.08) 47%,rgba(138, 138, 138, 0.08) 47%, rgba(138, 138, 138, 0.08) 58%,rgba(108, 108, 108, 0.08) 58%, rgba(108, 108, 108, 0.08) 85%,rgba(143, 143, 143, 0.08) 85%, rgba(143, 143, 143, 0.08) 100%),linear-gradient(96deg, rgba(53, 53, 53, 0.08) 0%, rgba(53, 53, 53, 0.08) 53%,rgba(44, 44, 44, 0.08) 53%, rgba(44, 44, 44, 0.08) 82%,rgba(77, 77, 77, 0.08) 82%, rgba(77, 77, 77, 0.08) 98%,rgba(8, 8, 8, 0.08) 98%, rgba(8, 8, 8, 0.08) 100%),linear-gradient(334deg, hsl(247,0%,2%),hsl(247,0%,2%))";
var lightBulbColor = "#000";
var darkBulbColor = "#fff";
var titleTrans = 100;

function setCookie(cname, cvalue, exdays, path, domain) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ';path=' + path + ';domain=' + domain;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function transferDark() {
    dark = true;
    setCookie("DarkMode", "true", 123456, '/', 'xecades.xyz');
    panel.style["backgroundImage"] = darkBG;
    bulb.style["color"] = darkBulbColor;
    try {
        textDes.style["color"] = "#fff";
    } catch (error) {}
    try {
        $404emoji.style["color"] = "#fff";
        $404above.style["color"] = "#fff";
    } catch (error) {}
    for (var i = 0; i < title.length; i++)
        setTimeout('title[' + i + '].style["fill"] = "#fff"', titleTrans * i - (i == title.length - 1 ? titleTrans : 0))
}

function transferLight() {
    dark = false;
    setCookie("DarkMode", "false", 123456, '/', 'xecades.xyz');
    panel.style["backgroundImage"] = lightBG;
    bulb.style["color"] = lightBulbColor;
    try {
        textDes.style["color"] = "#000";
    } catch (error) {}
    try {
        $404emoji.style["color"] = "#000";
        $404above.style["color"] = "#000";
    } catch (error) {}
    for (var i = 0; i < title.length; i++)
        setTimeout('title[' + i + '].style["fill"] = "#000"', titleTrans * i - (i == title.length - 1 ? titleTrans : 0))
}

bulb.onclick = function transMode() {
    panel.setAttribute("class", "mA hide");
    setTimeout(function () {
        dark ? transferLight() : transferDark();
        panel.setAttribute("class", "mA");
    }, 300);
}

window.onload = function () {
    var cookie = getCookie("DarkMode");
    if (cookie == "") {
        cookie = "false";
        setCookie("DarkMode", "false", 123456, '/', 'xecades.xyz');
    }
    if (cookie == "true") transferDark();
    else transferLight();
    setTimeout(function () {
        body.setAttribute("class", "show");
    }, 300);
}