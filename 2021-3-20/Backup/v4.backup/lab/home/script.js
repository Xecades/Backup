var con = document.getElementById("wd");
var shown = getCookie("NoAnimation");

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
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

window.onload = function () {
    if (shown == "") setTimeout(function () {
        con.innerHTML = "<div class='name' id='name'>Xecades</div>";
        con.style["color"] = "#111";
        setTimeout(function () {
            var name = document.getElementById("name");
            name.style["textShadow"] = "0px 0px 50px cyan";
            name.style["transform"] = "scale(1.2)";
        }, 700);
        setTimeout(function () {
            bg.style["opacity"] = 1;
        }, 900);
        setTimeout(function () {
            var name = document.getElementById("name");
            con.style["color"] = "transparent";
            name.style["textShadow"] = "none";
            container.style["opacity"] = 1;
            container.setAttribute("onmouseover", "mkblur();");
            container.setAttribute("onmouseout", "mkglass();");
        }, 1900);
        setTimeout(function () {
            con.innerHTML = "";
            setCookie("NoAnimation", "true", 1024);
        }, 3400);
    }, 500);
    else {
        bg.style["opacity"] = 1;
        container.style["opacity"] = 1;
        container.setAttribute("onmouseover", "mkblur();");
        container.setAttribute("onmouseout", "mkglass();");
    }
}

console.log("我采用 cookie 来判断是否播放过开头动画，如果您每次访问都出现开头动画，可能是禁止了保存 cookie，为了更好的浏览体验，请您取消禁止。");

// console.log("1px = " + 100 / window.innerWidth + "vw");
// console.log("1px = " + 100 / window.innerHeight + "vh");