$(document).ready(function () {
    /**
     * 随机获取背景图片
     */
	var BG = new Array(
"https://s2.ax1x.com/2020/02/03/1NHRfO.jpg",
"https://s2.ax1x.com/2020/02/03/1NHDX9.jpg",
"https://s2.ax1x.com/2020/02/03/1NH46H.jpg",
"https://s2.ax1x.com/2020/02/03/1NHgk6.jpg",
"https://s2.ax1x.com/2020/02/03/1NH0l4.jpg",
"https://s2.ax1x.com/2020/02/03/1NHT0I.jpg",
"https://s2.ax1x.com/2020/02/03/1NHbAP.jpg",
"https://s2.ax1x.com/2020/02/03/1NHX9S.jpg",
"https://s2.ax1x.com/2020/02/03/1NHxXj.jpg",
"https://s2.ax1x.com/2020/02/03/1NbpBn.jpg",
"https://s2.ax1x.com/2020/02/03/1NbiNV.jpg",
"https://s2.ax1x.com/2020/02/03/1NbZjJ.jpg",
"https://s2.ax1x.com/2020/02/03/1NbuH1.jpg",
"https://s2.ax1x.com/2020/02/03/1Nb83D.jpg",
"https://s2.ax1x.com/2020/02/03/1Nbtud.jpg",
"https://s2.ax1x.com/2020/02/03/1NbUHI.jpg",
"https://s2.ax1x.com/2020/02/03/1Nbr8S.jpg",
"https://s2.ax1x.com/2020/02/03/1NbyvQ.jpg",
"https://s2.ax1x.com/2020/02/03/1Nb2bn.jpg",
"https://s2.ax1x.com/2020/02/03/1NbfU0.jpg",
"https://s2.ax1x.com/2020/02/03/1Nbo2F.jpg",
"https://s2.ax1x.com/2020/02/03/1NbqbR.jpg",
"https://s2.ax1x.com/2020/02/03/1NbXUx.jpg",
"https://s2.ax1x.com/2020/02/03/1NbxPK.jpg",
"https://s2.ax1x.com/2020/02/03/1Nqpxe.jpg",
"https://s2.ax1x.com/2020/02/03/1NqCKH.jpg",
"https://s2.ax1x.com/2020/02/03/1NqiqA.jpg",
"https://s2.ax1x.com/2020/02/03/1NqZPf.jpg",
"https://s2.ax1x.com/2020/02/03/1Nqnxg.jpg")
    var bgNum = 29; // 和图片数量保持一致
    var randomNum = Math.floor(Math.random() * bgNum);
    // 替换页面中的背景图片地址
    $("header").css("background-image", "url(" + BG[randomNum] + ")");

    /**
     * 移动端下拉菜单栏
     */
    var nw = $('.navigation-wrapper');

    // 定义菜单关闭事件
    function bounceOutUp() {
        nw.on(function () {
            nw.toggleClass('visible animated bounceOutUp');
        });
        nw.toggleClass('animated bounceInDown animated bounceOutUp');
    }

    // 根据菜单状态定义单击的操作
    $('.btn-mobile-menu').click(function () {
        if (nw.css('display') === "block") {
            bounceOutUp();
        } else {
            nw.toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(".panel-main").on('click', ':not(.mobile,.btn-mobile-menu,.navigation-wrapper)', function () {
        if (nw.hasClass("bounceInDown")) {
            bounceOutUp();
            $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });
    // 阻止冒泡事件执行
    nw.click(function (event) {
        event.stopPropagation();
    });
    /**
     * 底部年份动态化
     */
    $('.year').html(new Date().getFullYear());

    /**
     * 异步加载一言
     */
    // (function getHitokoto() {
    //     $.ajax({
    //         //url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=50",
    //         url: "https://v1.hitokoto.cn/?c=f&encode=json&charset=utf-8",
    //         dataType: "jsonp",
    //         async: true,
    //         jsonp: "callback",
    //         jsonpCallback: "hitokoto",
    //         success: function (result) {
    //             $('#hitokoto').html("<p>" + result.hitokoto + "</p>")
    //         },
    //         error: function () {
    //             $('#hitokoto').html("<p>数据读取失败……_(:з」∠)_</p>")
    //         }
    //     });
    // })();
    /**
     * 随机个性签名
     * 函数名懒得改了
     */
    (function getHitokoto() {
        var Sentences = new Array(
            "与其诅咒黑暗， 不如点亮烛光",
            "Think twice, code once.",
            "我们擦身而过，是为了相识或者遗忘",
            "你还有好多未完成的梦，你有什么理由停下脚步",
            "愿人生如剑、立起寒光四射、躺倒四射寒光",
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
            "我不去想是否能够成功，既然选择了远方，便只顾风雨兼程")
        var bgNum = 25;
        var randomNum = Math.floor(Math.random() * bgNum);
        // 替换页面中的个性签名
        $('#hitokoto').html("<p>" + Sentences[randomNum] + "</p>")
    })();
});
