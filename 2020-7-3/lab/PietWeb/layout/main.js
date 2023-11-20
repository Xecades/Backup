$(document).ready(function () {
    /* 背景图片 */
    var bgNum = 47; // 和图片数量保持一致
    var randomNum = Math.floor(Math.random() * bgNum) + 1;
    $("header").css("background-image", "url(https://cdn.xecades.xyz/wallpaper-small/" + randomNum + ".jpg)");
    var ele = document.querySelector('.panel-cover');
    var imgUrl = 'https://cdn.xecades.xyz/wallpaper/' + randomNum + '.jpg';
    var imgObject = new Image;
    imgObject.src = imgUrl;
    imgObject.onload = function () {
        $("header").css("background-image", "url(" + imgUrl + ")");
        ele.setAttribute('class', 'panel-cover complete');
    };
    var ele2 = document.querySelector('.panel-cover_logo');
    var imgUrl2 = 'https://cdn.xecades.xyz/image/logo.png';
    var imgObject2 = new Image;
    imgObject2.src = imgUrl2;
    imgObject2.onload = function () {
        ele2.src = imgUrl2;
        ele2.setAttribute('class', 'panel-cover_logo_complete logo');
    };
});