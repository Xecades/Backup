(function(a,d){var c="fancybox-thumbs",f=c+"-active",e=c+"-loading";d.fancybox.defaults=d.extend(true,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">'+'<svg viewBox="0 0 120 120">'+'<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />'+"</svg>"+"</button>"},thumbs:{autoStart:false,hideOnClose:true,parentEl:".fancybox-container",axis:"y"}},d.fancybox.defaults);var b=function(g){this.init(g)};d.extend(b.prototype,{$button:null,$grid:null,$list:null,isVisible:false,isActive:false,init:function(g){var h=this,j,i;h.instance=g;g.Thumbs=h;h.opts=g.group[g.currIndex].opts.thumbs;j=g.group[0];j=j.opts.thumb||(j.opts.$thumb&&j.opts.$thumb.length?j.opts.$thumb.attr("src"):false);if(g.group.length>1){i=g.group[1];i=i.opts.thumb||(i.opts.$thumb&&i.opts.$thumb.length?i.opts.$thumb.attr("src"):false)}h.$button=g.$refs.toolbar.find("[data-fancybox-thumbs]");if(h.opts&&j&&i&&j&&i){h.$button.show().on("click",function(){h.toggle()});h.isActive=true}else{h.$button.hide()}},create:function(){var h=this,g=h.instance,i=h.opts.parentEl,j=[],k;if(!h.$grid){h.$grid=d('<div class="'+c+" "+c+"-"+h.opts.axis+'"></div>').appendTo(g.$refs.container.find(i).addBack().filter(i));h.$grid.on("click","li",function(){g.jumpTo(d(this).attr("data-index"))})}if(!h.$list){h.$list=d("<ul>").appendTo(h.$grid)}d.each(g.group,function(l,m){k=m.opts.thumb||(m.opts.$thumb?m.opts.$thumb.attr("data-original"):null);if(!k&&m.type==="image"){k=m.src}j.push('<li data-index="'+l+'" tabindex="0" class="'+e+'"'+(k&&k.length?' style="background-image:url('+k+')" />':"")+"></li>")});h.$list[0].innerHTML=j.join("");if(h.opts.axis==="x"){h.$list.width(parseInt(h.$grid.css("padding-right"),10)+g.group.length*h.$list.children().eq(0).outerWidth(true))}},focus:function(l){var i=this,j=i.$list,g=i.$grid,h,k;if(!i.instance.current){return}h=j.children().removeClass(f).filter('[data-index="'+i.instance.current.index+'"]').addClass(f);k=h.position();if(i.opts.axis==="y"&&(k.top<0||k.top>j.height()-h.outerHeight())){j.stop().animate({scrollTop:j.scrollTop()+k.top},l)}else{if(i.opts.axis==="x"&&(k.left<g.scrollLeft()||k.left>g.scrollLeft()+(g.width()-h.outerWidth()))){j.parent().stop().animate({scrollLeft:k.left},l)}}},update:function(){var g=this;g.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible);if(g.isVisible){if(!g.$grid){g.create()}g.instance.trigger("onThumbsShow");g.focus(0)}else{if(g.$grid){g.instance.trigger("onThumbsHide")}}g.instance.update()},hide:function(){this.isVisible=false;this.update()},show:function(){this.isVisible=true;this.update()},toggle:function(){this.isVisible=!this.isVisible;this.update()}});d(a).on({"onInit.fb":function(i,h){var g;if(h&&!h.Thumbs){g=new b(h);if(g.isActive&&g.opts.autoStart===true){g.show()}}},"beforeShow.fb":function(k,h,i,j){var g=h&&h.Thumbs;if(g&&g.isVisible){g.focus(j?0:250)}},"afterKeydown.fb":function(l,i,k,j,h){var g=i&&i.Thumbs;if(g&&g.isActive&&h===71){j.preventDefault();g.toggle()}},"beforeClose.fb":function(i,h){var g=h&&h.Thumbs;if(g&&g.isVisible&&g.opts.hideOnClose!==false){g.$grid.hide()}}})})(document,window.jQuery||jQuery);