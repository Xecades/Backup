function setEditor() {
    editor = ace.edit("code");
    ace.config.set('basePath', '.');
    editor.setTheme("ace/theme/clouds");
    editor.session.setMode("ace/mode/html");
    editor.setFontSize(17);
    editor.setReadOnly(false);
    editor.setOption("wrap", "none");
    ace.require("ace/ext/language_tools");
    editor.setShowPrintMargin(false);
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });

    editor.session.on('change', () => {
        vm.launch_color = "warning";
        vm.textCount = countText();
        vm.textCountSpc = countText(true);
    });
    editor.selection.on('changeSelection', () => {
        vm.selectCount = countSelect();
        vm.selectCountSpc = countSelect(true);
    });
    editor.focus();
    editor.gotoLine(10, 4, true);
}

function setContent() {
    var path = loadPageVar("file");
    if (!path) return;

    $.ajax({
        url: `files/${path}.html`,
        success: result => {
            editor.session.setValue(result);
            launchCode();
        }
    });
}