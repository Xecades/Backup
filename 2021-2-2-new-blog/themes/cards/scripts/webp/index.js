'use strict';

const fs = require('hexo-fs');

function replacePic(content) {
    return content.replace(/\/assets\/(.*?)\.(jpg|jpeg|png)/gi, (word) => {
        return word + ".picSuffix";
    });
}

function webpProcess(content) {
    return content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (str, p1, p2) {
        if (/webp-comp/gi.test(p1) || !/\/assets\/(.*?)\.(jpg|jpeg|png)/gi.test(p2)) {
            return str;
        }
        return `<picture><source srcset="${p2.replace(/\.(jpg|jpeg|png)/gi, '.webp')}" type="image/webp">${str.replace('<img', '<img webp-comp')}</picture>`;
    });
}

if (hexo.config.use_webp) {
    // hexo.extend.filter.register('after_render:html', (content) => {
    //     return webpProcess.call(this, content);
    // });
    hexo.extend.filter.register('after_render:html', (content) => {
        return replacePic.call(this, content);
    });
}