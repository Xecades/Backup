var total = 82;
var masonry = document.getElementById("masonry");

masonry.innerHTML = "";
for (var i = 1; i < total; i++) {
    masonry.innerHTML += "<div data-fancybox='gallery' class='post-item col-xs-6 col-sm-4 col-md-3 col-lg-2' data-src='image/" + i + ".jpg'><img class='post-item-img lazy' data-original='image/" + i + ".jpg'></div>";
}

// fancybox3
$(function () {
    $('[data-fancybox="gallery"]').fancybox({
        toolbar: true,
        loop: false,
        smallBtn: false,
        buttons: ["zoom", "fullScreen", "download", "thumbs", "close"],
        iframe: {
            preload: false
        }
    });
});

// lazyload
$(function () {
    $("img.lazy").lazyload({
        placeholder: "./lazy.gif",
        effect: "fadeIn",
        load: function (ele) {
            var $container = $('#masonry');
            $container.imagesLoaded(function () {
                $container.masonry({
                    itemSelector: '.post-item',
                    gutter: 0,
                    isAnimated: true,
                });
            });
        },
    });
});