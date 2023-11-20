/* global hexo */

'use strict';

function linkcard(args) {
    var link = args[0];
    var title = args[1];

    var logo = "https://cdn.xecades.xyz/image/linkcard.png";
    if (link.indexOf("luogu") != -1)
        logo = "https://cdn.xecades.xyz/image/luogu.png";

    return `
    <a class="LinkCard" href="${link}">
        <span class="LinkCard-backdrop"></span>
        <span class="LinkCard-content">
            <span class="LinkCard-text">
                <span class="LinkCard-title">${title}</span>
                <span class="LinkCard-meta">
                    <span class="LinkCard-link">
                        <i class="fa fa-link" aria-hidden="true"></i>
                    </span>
                    ${link}
                </span>
            </span>
            <span class="LinkCard-imageCell">
                <span class="LinkCard-image" style="background-image: url(${logo});" alt="Xecades"></span>
            </span>
        </span>
    </a>`;
}

hexo.extend.tag.register('linkcard', linkcard, {
    ends: false
});