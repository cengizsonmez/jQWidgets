/*
jQWidgets v10.1.5 (2020-Sep)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxLoader","",{});a.extend(a.jqx._jqxLoader.prototype,{defineInstance:function(){var b={width:200,height:150,text:"Loading...",html:null,textPosition:"bottom",imagePosition:"center",isModal:false,autoOpen:false,rtl:false,events:["create"]};if(this===a.jqx._jqxLoader.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){var c=this;c._render(true);c._raiseEvent("0")},render:function(){this._render()},open:function(d,c){var b=this;if(this.width!==null&&this.width.toString().indexOf("%")!==-1){b.host.css("width",this.width)}if(this.height!==null&&this.height.toString().indexOf("%")!==-1){b.host.css("height",this.height)}b.host.show();b.host.css("left",-b.host.width()/2);b.host.css("top",-b.host.height()/2);if(d&&c){b.host.css("left",d);b.host.css("top",c)}if(b.isModal){b._modal.show()}},close:function(){var b=this;b.host.hide();if(b.isModal){b._modal.hide()}},_checkBrowser:function(){var b=this;if(a.jqx.browser.browser==="msie"){if(a.jqx.browser.version==="7.0"){if(b.isModal===false){b.host.addClass(b.toThemeProperty("jqx-loader-ie-transparency"))}b.host.css("top",Math.max(0,((a(window).height()-a(b.host).outerHeight())/2)+a(window).scrollTop())+"px");b.host.css("left",Math.max(0,((a(window).width()-a(b.host).outerWidth())/2)+a(window).scrollLeft())+"px");a(window).resize(function(){b.host.css("top",Math.max(0,((a(window).height()-a(b.host).outerHeight())/2)+a(window).scrollTop())+"px");b.host.css("left",Math.max(0,((a(window).width()-a(b.host).outerWidth())/2)+a(window).scrollLeft())+"px")});this.host.css({"margin-top":"0","margin-left":"0"})}else{if(a.jqx.browser.version==="8.0"){if(b.isModal===false){b.host.addClass(b.toThemeProperty("jqx-loader-ie-transparency"))}}}}},_textPos:function(){var b=this;this._text=b.host.children("div:eq(1)");if(this._image){this._image.css("background-position-y",b.imagePosition)}if(b.textPosition==="top"){this._text.addClass(b.toThemeProperty("jqx-loader-text-top"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-bottom"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-left"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-right"))}else{if(b.textPosition==="bottom"){this._text.addClass(b.toThemeProperty("jqx-loader-text-bottom"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-top"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-left"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-right"))}else{if(b.textPosition==="left"){this._text.addClass(b.toThemeProperty("jqx-loader-text-left"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-right"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-top"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-bottom"))}else{if(b.textPosition==="right"){this._text.addClass(b.toThemeProperty("jqx-loader-text-right"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-left"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-top"));this._text.removeClass(b.toThemeProperty("jqx-loader-text-bottom"))}}}}},refresh:function(b){if(b!==true){this._render(false)}},destroy:function(){var b=this;b._removeHandlers();b.host.remove()},propertyChangedHandler:function(b,c,e,d){if(d!==e){switch(c){case"width":b.host.width(d);break;case"height":b.host.height(d);break;case"text":b._text.text(d);break;case"html":b.host.html(d);break;case"textPosition":b._textPos(d);break;case"rtl":if(d===true){b._text.addClass(b.toThemeProperty("jqx-loader-rtl"))}else{b._text.removeClass(b.toThemeProperty("jqx-loader-rtl"))}break}}},_raiseEvent:function(h,e){var g=this;var c=g.events[h];var f=new a.Event(c);f.owner=g;f.args=e;try{var b=g.host.trigger(f)}catch(d){}return b},_render:function(b){var c=this;c.host.width(c.width);c.host.height(c.height);if(c.autoOpen===false){c.host.hide()}if(b){if(c.html===null){c.host.append('<div class="'+c.toThemeProperty("jqx-loader-icon")+'"></div><div class="'+c.toThemeProperty("jqx-loader-text")+'">'+c.text+"</div>");c._image=c.host.children("div:eq(0)");c._text=c.host.children("div:eq(1)")}else{c.host.html(this.html)}if(c.isModal===true){var d=c.host.css("display");c._modal=a('<div id="'+c.element.id+'Modal" class="'+c.toThemeProperty("jqx-loader-modal")+'" style="display: '+d+';"></div>');a("body").append(c._modal)}}c._checkBrowser();c._textPos();c._addClass();c._removeHandlers();c._addHandlers()},_addHandlers:function(){var b=this;if(b.isModal===true){b.addHandler(a(document),"keyup.loader"+b.element.id,function(c){if(c.keyCode===27){b.close()}})}},_removeHandlers:function(){var b=this;b.removeHandler(a(document),"keyup.loader"+b.element.id)},_addClass:function(){var b=this;b.host.addClass(b.toThemeProperty("jqx-widget"));b.host.addClass(b.toThemeProperty("jqx-loader"));b.host.addClass(b.toThemeProperty("jqx-rc-all"));b.host.addClass(b.toThemeProperty("jqx-fill-state-normal"));if(b.rtl){b._text.addClass(b.toThemeProperty("jqx-loader-rtl"))}if(a.jqx.browser.msie){b.host.addClass(this.toThemeProperty("jqx-noshadow"))}b.host.addClass(this.toThemeProperty("jqx-rc-t"));b.host.addClass(this.toThemeProperty("jqx-rc-b"));b.host.addClass(this.toThemeProperty("jqx-popup"))}})})(jqxBaseFramework);

