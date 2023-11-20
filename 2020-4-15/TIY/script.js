var btn = document.getElementsByClassName("btn")[0];
var iframe = document.getElementById('run');
var more = document.getElementsByClassName("more")[0];
var full = document.getElementsByClassName("full")[0];
var plate = document.getElementById("plate");
var notice = document.getElementById("notice");
var close = document.getElementsByClassName("close")[0];
var editor = ace.edit("code");
var doc;

function loadPageVar(sVar) {
    return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function setEditor() {
    editor = ace.edit("code");
    ace.config.set('basePath', '.');
    editor.setTheme("ace/theme/clouds");
    editor.session.setMode("ace/mode/html");
    editor.setFontSize(17);
    editor.setReadOnly(false);
    editor.setOption("wrap", "free");
    ace.require("ace/ext/language_tools");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    editor.session.on('change', function (delta) {
        btn.innerHTML = "● 运行";
    });
}

function launch() {
    btn.innerHTML = "运行";
    doc.open();
    doc.write(editor.getValue());
    doc.close();
}

function setContent() {
    var value = loadPageVar("file");
    if (value) {
        var reader;
        if (window.XMLHttpRequest)
            reader = new XMLHttpRequest();
        else
            reader = new ActiveXObject("Microsoft.XMLHTTP");
        reader.onreadystatechange = function () {
            if (reader.readyState == 4 && reader.status == 200) {
                editor.session.setValue(reader.responseText);
                btn.innerHTML = "运行";
                launch();
            }
        };
        reader.open("GET", "files/" + value + ".html", true);
        reader.send();
    }
}

window.onload = function () {
    doc = document.all ? iframe.contentWindow.document : iframe.contentDocument;
    setEditor();
    setContent();
    launch();
};

btn.onclick = function () {
    launch();
};

more.onclick = function () {
    plate.setAttribute("class", "plate appear");
};

full.onclick = function () {
    window.open(window.location.href, "_blank");
};

close.onclick = function () {
    plate.setAttribute("style", "z-index: 123456");
    plate.setAttribute("class", "plate");
    setTimeout(function () {
        plate.setAttribute("style", "");
    }, 400);
};

function hotkey() {
    if (window.event.keyCode == 120)
        launch();
}

document.onkeydown = hotkey;