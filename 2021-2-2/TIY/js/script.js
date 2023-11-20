vm = new Vue({
    el: "#app",
    data: {
        launch_color: "primary",
        console_output: [],
        setting_visible: false,
        auto_warp: false,
        font_size: 17,
        selectCount: 0,
        selectCountSpc: 0,
        textCount: 0,
        textCountSpc: 0
    },
    watch: {
        font_size: () => {
            setCookie("FontSize", vm.font_size, 123456, '/', 'tiy.xecades.xyz');
            editor.setFontSize(vm.font_size);
        },
        auto_warp: () => {
            setCookie("AutoWarp", vm.auto_warp, 123456, '/', 'tiy.xecades.xyz');
            editor.setOption("wrap", vm.auto_warp ? "free" : "none");
        }
    }
});

$(() => {
    $(".right").prepend(frameIns);

    var FontSizeCookie = getCookie("FontSize");
    var AutoWarpCookie = getCookie("AutoWarp");

    setEditor();
    setContent();
    launchCode();

    if (FontSizeCookie != "") vm.font_size = FontSizeCookie;
    if (AutoWarpCookie != "") vm.auto_warp = AutoWarpCookie;

    vm.textCount = countText();
    vm.textCountSpc = countText(true);

    vm.selectCount = countSelect();
    vm.selectCountSpc = countSelect(true);
});

$(document).keydown(e => {
    if (e.which == 120 && !ctrlKey())
        launchCode();
    if (e.which == 115 && !ctrlKey())
        formatCode();
    if (e.which == 83 && ctrlKey())
        window.event.preventDefault();
});

$("#console").mouseup(() => {
    if (getSelectedText() == "") {
        commandLine.focus();
        setTimeout(function () {
            document.getElementById("console").scrollIntoView(true);
        }, 300);
    }
});

function commandLineKeydown(o) {
    var keyCode = window.event.keyCode || window.event.which || window.event.charCode;

    if (keyCode == 13 && commandLine.value && !ctrlKey()) {
        window.event.preventDefault();
        lastCommand = commandLine.value;
        handleConsole("commanded", lastCommand);
        codeFrame.window.__handleCommand(lastCommand);
        commandLine.value = "";
        commandLine.focus();
    }
    if (keyCode == 13 && ctrlKey())
        commandLine.value += "\n";
    if (keyCode == 38 && !ctrlKey())
        commandLine.value = lastCommand;

    scrollOutput();
    o.style.height = o.scrollTop + o.scrollHeight + "px";
}

window.onbeforeunload = () => true;