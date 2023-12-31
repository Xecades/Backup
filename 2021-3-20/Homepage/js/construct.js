(async () => {
    await loadCSS("/css/reset.css");
    await loadCSS("/css/main.css");
    await loadCSS("/css/cursor.css");

    await loadJS("https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js");
    await loadJS("https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.8/vue-router.min.js");
    await loadJS("/js/script.js");
    await loadJS("/js/cursor.js");
})();