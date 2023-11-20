var hrc = document.getElementsByClassName("hrc")[0];
var quote = document.getElementsByClassName("quote")[0];
var bg = document.getElementById("bg");
var title = document.getElementsByClassName("title")[0];
var lnk = document.getElementsByClassName("lnk");
var container = document.getElementsByClassName("container")[0];

function mkblur() {
    bg.setAttribute("style", "transform: scale(1.2)");
    hrc.setAttribute("style", "transform: translate(0, calc(20 * 0.14vh));");
    quote.setAttribute("style", "color: #111");
    title.setAttribute("style", "transform: scale(1.06)")
    for (var i = 0; i < lnk.length; i++)
        lnk[i].setAttribute("style", "border: 1px solid transparent;background-color:transparent;");
}

function mkglass() {
    bg.setAttribute("style", "transform: scale(1)");
    hrc.setAttribute("style", "transform: translate(0, 0);");
    quote.setAttribute("style", "color: transparent");
    title.setAttribute("style", "transform: scale(1)");
    for (var i = 0; i < lnk.length; i++)
        lnk[i].setAttribute("style", "border: 1px solid #111;background-color: #eeeeee4d;");
}

function getQuote() {
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
    // 首先他们会忽略你，接着他们会嘲笑你，然后他们会打你，最后他们会输给你。
    var total = 35;
    var randomNum = Math.floor(Math.random() * total);
    quote.innerHTML = Sentences[randomNum];
}

// console.log("1px = " + 100 / window.innerWidth + "vw");
// console.log("1px = " + 100 / window.innerHeight + "vh");