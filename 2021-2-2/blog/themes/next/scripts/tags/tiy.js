/* global hexo */

'use strict';

function tiy(args) {
    var file = "";
    var title = "";
    
    if (args[0] != ""){
        file = "?file=" + args[0];
        title = `<figcaption><span>${args[0]}.html</span></figcaption>`;
    }

    var height = args[1] || "500px";
    return `<div class="TIY-container">${title}<iframe class="TIY-frame" frameborder="no" src="https://tiy.xecades.xyz/${file}" width="100%" height="${height}"></iframe></div>`;
}

hexo.extend.tag.register('tiy', tiy, {
    ends: false
});