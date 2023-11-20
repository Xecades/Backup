var base_font_size = removeBack(getObjProperty("--base-font-size"), 2);
var panel_min_padding = getObjProperty("--panel-padding-min");
var inner_padding_tb = removeBack(getObjProperty("--inner-padding-tb"), 3) * base_font_size;

function adjust() {
    var document_height = getObjHeight(body);
    var document_width = getObjWidth(body);

    var panel_inner_height = getObjHeight(inner);
    var panel_inner_width = getObjWidth(inner);

    var content_height = getObjHeight(title) + getObjHeight(hr) + getObjHeight(content);
    var adjusted_inner_padding;

    /* adjust inner height */
    if (panel_inner_height < document_height)
        adjusted_inner_padding = (document_height - panel_inner_height) / 2 + "px";
    else
        adjusted_inner_padding = panel_min_padding;
    setObjProperty("--panel-padding", adjusted_inner_padding);
    /* done! */

    /* adjust content margin */
    var padding = inner_padding_tb;
    if (content_height < document_height) {
        var adjusted = content_height + 2 * inner_padding_tb;
        if (adjusted < document_height) {
            setObjProperty("--inner-padding-tb", padding + 'px');
        } else {
            setObjProperty("--inner-padding-tb", (document_height - content_height) / 2 + 'px');
        }
    } else {
        setObjProperty("--inner-padding-tb", padding + 'px');
    }
    /* done! */

    // console.clear();
    console.log("%cdocument size adjusted", style = "font-weight: bold");
    console.log("document height: " + document_height);
    console.log("document width:　" + document_width);
    console.log("panel inner height: " + panel_inner_height);
    console.log("panel inner width: " + panel_inner_width);

}

window.onresize = function() {adjust(); adjust();}
adjust(); adjust();

if (is404 == false)
    getQuote();