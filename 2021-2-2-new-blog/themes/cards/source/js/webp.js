const isSupportWebp = (document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0);
const webpSuffix = isSupportWebp ? ".webp" : "";

document.querySelectorAll([".post-thumbnail", ".LinkCard-image"]).forEach((item) => {
    item.style["backgroundImage"] = item.style["backgroundImage"].replace(".picSuffix", webpSuffix);
});
document.querySelectorAll("img").forEach((item) => {
    item.outerHTML = item.outerHTML.replace(".picSuffix", webpSuffix);
});