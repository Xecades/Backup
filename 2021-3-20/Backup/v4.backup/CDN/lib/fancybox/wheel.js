(function(a,c){var b=new Date().getTime();c(a).on({"onInit.fb":function(g,d,f){d.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(j){var i=d.current,h=new Date().getTime();if(d.group.length<2||i.opts.wheel===false||(i.opts.wheel==="auto"&&i.type!=="image")){return}j.preventDefault();j.stopPropagation();if(i.$slide.hasClass("fancybox-animated")){return}j=j.originalEvent||j;if(h-b<250){return}b=h;d[(-j.deltaY||-j.deltaX||j.wheelDelta||-j.detail)<0?"next":"previous"]()})}})})(document,window.jQuery||jQuery);