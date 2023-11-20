async function loader() {
    await loadCSS("css/style.css");
    await loadCSS("css/common.css");

    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ace.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ext-beautify.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/ext-language_tools.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/mode-html.min.js");
    await loadJS("https://cdn.bootcss.com/ace/1.4.9/theme-clouds.min.js");

    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js");
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-css.min.js");
    await loadJS("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js");

    await loadJS("lib/vue.develop.js");
    await loadJS("lib/element-ui.js");
    await loadJS("lib/jquery.js");
    await loadJS("js/variable.js");
    await loadJS("js/component.js");
    await loadJS("js/editor.js");
    await loadJS("js/script.js");
}

loader();