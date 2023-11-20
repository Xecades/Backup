{% if theme.valine.enable %}

<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<script src="{{ theme.vendors.valine }}"></script>
<script src="//cdnjs.loli.net/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
    new Valine({
        av: AV,
        lang: '{{ theme.valine.language }}' || 'zh-cn',
        el: '.comments',
        // emoticon_url : '//cdn.xecades.xyz/emoji/',
        // emoticon_list: ["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif","16.gif","17.gif","18.gif","19.gif","20.gif","21.gif","22.gif","23.gif","24.gif","25.gif","26.gif","27.gif","28.gif","29.gif","30.gif","31.gif","32.gif","33.gif","34.gif","35.gif","36.gif","37.gif","38.gif","39.gif","40.gif","41.gif","42.gif","43.gif","44.gif","45.gif","46.gif","47.gif","48.gif","49.gif","50.gif","51.gif","52.gif","53.gif","54.gif","55.gif","56.gif","57.gif","58.gif","59.gif","60.gif","61.gif","62.gif","63.gif","64.gif","65.gif","66.gif","67.gif","68.gif","69.gif","70.gif","71.gif","72.gif","73.gif","74.gif","75.gif","76.gif","77.gif","78.gif","79.gif","80.gif","81.gif","82.gif","83.gif","84.gif","85.gif","86.gif","87.gif","88.gif","89.gif","90.gif","91.gif","92.gif","93.gif","94.gif","95.gif","96.gif","97.gif","98.gif","99.gif","100.gif","101.gif","102.gif","103.gif","104.gif","105.gif","106.gif","107.gif","108.gif","109.gif","110.gif","111.gif","112.gif","113.gif","114.gif","115.gif","116.gif","117.gif","118.gif","119.gif","120.gif","121.gif","122.gif","123.gif","124.gif","125.gif","126.gif","127.gif","128.gif","129.gif","130.gif","131.gif","132.gif","133.gif","134.gif","135.gif","136.gif","137.gif","138.gif","139.gif","140.gif","141.gif","142.gif","143.gif","144.gif","145.gif","146.gif","147.gif","148.gif","149.gif","150.gif","151.gif","152.gif","153.gif","154.gif","155.gif","156.gif","157.gif","158.gif","159.gif","160.gif","161.gif","162.gif","163.gif","164.gif","165.gif","166.gif","167.gif","168.gif","169.gif","170.gif","171.gif","172.gif","173.gif","174.gif","175.gif","176.gif","177.gif","178.gif","179.gif","180.gif","181.gif","182.gif","183.gif"],
        emoticon_url: 'https://cdn.xecades.xyz/emoji/alu',
        emoticon_list: ["吐.png", "狂汗.png", "不说话.png", "汗.png", "献花.png", "不高兴.png",
            "中刀.png", "皱眉.png", "小眼睛.png", "中指.png", "尴尬.png", "瞅你.png", "想一想.png", "中枪.png",
            "得意.png", "肿包.png", "扇耳光.png", "亲亲.png", "惊喜.png", "脸红.png", "无所谓.png", "便便.png", "愤怒.png",
            "蜡烛.png", "献黄瓜.png", "内伤.png", "投降.png", "观察.png", "看不见.png", "击掌.png", "抠鼻.png", "邪恶.png",
            "看热闹.png", "口水.png", "抽烟.png", "锁眉.png", "装大款.png", "吐舌.png", "无奈.png", "长草.png", "赞一个.png",
            "无语.png", "阴暗.png", "不出所料.png", "咽气.png", "期待.png", "高兴.png", "吐血倒地.png", "哭泣.png",
            "欢呼.png", "黑线.png", "喷水.png", "深思.png", "鼓掌.png", "暗地观察.png"
        ],
        app_id: '{{ theme.valine.appid }}',
        app_key: '{{ theme.valine.appkey }}',
        placeholder: "{{ theme.valine.placeholder }}"
    });
    if (window.location.hash) {
        var checkExist = setInterval(function () {
                if ($(window.location.hash).length) {
                    $('html, body').animate({
                            scrollTop: $(window.location.hash).offset().top - 90
                        },
                        1000);
                    clearInterval(checkExist);
                }
            },
            100);
    }
</script>

{% endif %}