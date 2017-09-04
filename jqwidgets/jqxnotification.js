/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxNotification","",{}),t.extend(t.jqx._jqxNotification.prototype,{defineInstance:function(){var e={width:"auto",height:"auto",appendContainer:null,position:"top-right",zIndex:99999,browserBoundsOffset:5,notificationOffset:5,opacity:.9,hoverOpacity:1,autoOpen:!1,animationOpenDelay:400,animationCloseDelay:800,closeOnClick:!0,autoClose:!0,autoCloseDelay:3e3,showCloseButton:!0,template:"info",icon:null,blink:!1,disabled:!1,rtl:!1,events:["open","close","click"]};return this===t.jqx._jqxNotification.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(t){var e=this;e.render(),1==e.autoOpen&&e.open()},render:function(){var e=this;if(0==e.host.hasClass("jqx-notification")){e.host.addClass(e.toThemeProperty("jqx-rc-all")),e.host.addClass(e.toThemeProperty("jqx-notification")),e.host.css({zIndex:e.zIndex,display:"none",opacity:e.opacity}),e._container=e._notificationContainer(),e._appendContent(),e._setHoverFunctions(),e._instances=new Array,e._instanceKey=0;var n=t.data(document.body,"jqxNotifications");void 0==n&&(n=0),t.data(document.body,"jqxNotifications",n+1)}else e.refresh()},refresh:function(t){t||this._appendContent(!0)},open:function(){var t=this;if(0==t.disabled){var e=t.host.clone();e.removeAttr("id"),e.width(t.width),e.height(t.height),null!=this.width&&-1!=this.width.toString().indexOf("%")&&e.css("width",this.width),null!=this.height&&-1!=this.height.toString().indexOf("%")&&e.css("height",this.height),t.appendContainer||"bottom-left"!=t.position&&"bottom-right"!=t.position?(e.css("margin-bottom",t.notificationOffset),t._container.append(e)):(e.css("margin-top",t.notificationOffset),t._container.prepend(e)),t._addHandlers(e),e.fadeIn(t.animationOpenDelay,function(){t._raiseEvent("0",{element:e})}),1==t.blink&&(e._blinkInterval=setInterval(function(){e.fadeTo(400,t.opacity/1.5,function(){e.fadeTo(400,t.opacity)})},850)),1==t.autoClose&&(e._autoCloseTimeout=setTimeout(function(){t._close(e)},t.autoCloseDelay)),e._key=t._instanceKey,t._instances[t._instanceKey]=e,t._instanceKey++}},closeAll:function(){for(var t=this,e=0;e<t._instances.length;e++)t._instances[e]&&t._close(t._instances[e])},closeLast:function(){for(var t=this,e=t._instances.length;e>=0;e--)if(t._instances[e]){t._close(t._instances[e]);break}},destroy:function(){var e=this;e.closeAll(),e.host.remove();var n=t.data(document.body,"jqxNotifications");t.data(document.body,"jqxNotifications",n-1),e._destroyContainers(n-1)},propertyChangedHandler:function(t,e,n,o){var i=this;if(o!=n)switch(e){case"width":case"height":var a=n.indexOf&&-1!=n.indexOf("%");a=void 0!=a&&a;var s=o.indexOf&&-1!=o.indexOf("%");(s=void 0!=s&&s)!=a&&(i[e]=n);break;case"appendContainer":case"position":i._container=i._notificationContainer();break;case"browserBoundsOffset":i.appendContainer||i._position(i._container);break;case"opacity":i.host.css("opacity",o);break;case"showCloseButton":case"template":case"icon":case"rtl":i._appendContent(!0)}},_raiseEvent:function(e,n){var o=this,i=o.events[e],a=new t.Event(i);a.owner=o,a.args=n;try{var s=o.host.trigger(a)}catch(t){}return s},_close:function(t){var e=this;e._instances[t._key]&&(e._instances[t._key]=!1,clearInterval(t._blinkInterval),clearTimeout(t._autoCloseTimeout),t.fadeOut(e.animationCloseDelay,function(){e._removeHandlers(t),t.remove(),e._raiseEvent("1")}))},_addHandlers:function(t){var e=this;if(e.addHandler(t,"click.notification"+e.element.id,function(n){e._raiseEvent("2"),1==e.closeOnClick&&e._close(t)}),e.addHandler(t,"mouseenter.notification"+e.element.id,function(n){t._blinkInterval||e.mouseenterFunction(t)}),e.addHandler(t,"mouseleave.notification"+e.element.id,function(n){t._blinkInterval||"none"==t.css("display")||e.mouseleaveFunction(t)}),1==e.showCloseButton){var n=t.find(".jqx-notification-close-button");e.addHandler(n,"click.notification"+e.element.id,function(n){n.stopPropagation(),e._close(t)})}},_removeHandlers:function(t){var e=this;e.removeHandler(t,"click.notification"+e.element.id),e.removeHandler(t,"click.mouseenter"+e.element.id),e.removeHandler(t,"click.mouseleave"+e.element.id);var n=t.find(".jqx-notification-close-button");n.length>0&&e.removeHandler(n,"click.notification"+e.element.id)},_appendContent:function(e){var n,o=this,i=o.host.html();e||(n=o.host.children().detach()),e&&(o.host.removeAttr("class"),o.host.addClass(o.toThemeProperty("jqx-rc-all")),o.host.addClass(o.toThemeProperty("jqx-notification")));var a=t("<table class='"+o.toThemeProperty("jqx-notification-table")+"'></table>"),s=t("<tr></tr>");a.append(s);var r=o.rtl?"jqx-notification-content-rtl":"";if(e)i=(c=o.host.find(".jqx-notification-content")).html(),n=c.detach(),o.rtl?c.addClass("jqx-notification-content-rtl"):c.removeClass("jqx-notification-content-rtl");else var c=t("<td class='"+o.toThemeProperty("jqx-notification-content")+" "+r+"'></td>");s.html(c);var l,d=function(){0==o.rtl?(l.addClass("jqx-notification-icon-ltr"),c.before(l)):(l.addClass("jqx-notification-icon-rtl"),c.after(l))};if(o.template?(o.host.addClass("jqx-widget"),o.host.addClass("jqx-popup"),o.host.addClass("jqx-notification-"+o.template),l=t("<td class='"+o.toThemeProperty("jqx-notification-icon")+" jqx-notification-icon-"+o.template+"'></td>"),d()):(o.host.addClass(o.toThemeProperty("jqx-widget")),o.host.addClass(o.toThemeProperty("jqx-popup")),o.host.addClass(o.toThemeProperty("jqx-fill-state-normal")),o.icon&&(l=t("<td class='"+o.toThemeProperty("jqx-notification-icon")+"'></td>"),o.icon.padding=o.icon.padding?parseInt(o.icon.padding):5,l.css({width:parseInt(o.icon.width)+o.icon.padding,height:o.icon.height,"background-image":"url('"+o.icon.url+"')"}),d())),1==o.showCloseButton){var f;f=o.template?"jqx-notification-close-button jqx-notification-close-button-"+o.template:o.toThemeProperty("jqx-icon-close")+" "+o.toThemeProperty("jqx-notification-close-button");var h=t("<td class='"+o.toThemeProperty("jqx-notification-close-button-container")+"'><div class='"+f+" "+o.element.id+"CloseButton' title='Close'></div></td>");0==o.rtl?(h.find("div").addClass("jqx-notification-close-button-ltr"),c.after(h)):(h.find("div").addClass("jqx-notification-close-button-rtl"),c.before(h))}o.host[0].innerHTML="",o.host.append(a),document.querySelectorAll("app-root").length>0?o.host.find(".jqx-notification-content").append(n.clone()):n.length>0?o.host.find(".jqx-notification-content").append(n):o.host.find(".jqx-notification-content").html(i)},_position:function(t){var e,n,o,i,a=this;switch(a.position){case"top-right":e="",n=a.browserBoundsOffset,o=a.browserBoundsOffset,i="";break;case"top-left":e=a.browserBoundsOffset,n="",o=a.browserBoundsOffset,i="";break;case"bottom-left":e=a.browserBoundsOffset,n="",o="",i=a.browserBoundsOffset;break;case"bottom-right":e="",n=a.browserBoundsOffset,o="",i=a.browserBoundsOffset}t.css({left:e,right:n,top:o,bottom:i})},_notificationContainer:function(){var e,n=this;if(n.appendContainer){if(0==(e=t(n.appendContainer)).length)throw new Error("jqxNotification: Invalid appendContainer jQuery Selector - "+n.appendContainer+"! Please, check whether the used ID or CSS Class name is correct.")}else 0==(e=t("#jqxNotificationDefaultContainer-"+n.position)).length&&(t("body").append("<div id='jqxNotificationDefaultContainer-"+n.position+"' class='jqx-notification-container'></div>"),e=t("#jqxNotificationDefaultContainer-"+n.position),n.width.indexOf&&-1!=n.width.indexOf("%")&&e.addClass(n.toThemeProperty("jqx-notification-container-full-width")),n.height.indexOf&&-1!=n.height.indexOf("%")&&e.addClass(n.toThemeProperty("jqx-notification-container-full-height")),n._position(e));return e},_destroyContainers:function(e){0==e&&t(".jqx-notification-container").remove()},_setHoverFunctions:function(){var e=this,n=!1;"msie"==t.jqx.browser.browser&&"9.0"==t.jqx.browser.version&&(n=!0),0==n?(e.mouseenterFunction=function(t){t.fadeTo("fast",e.hoverOpacity)},e.mouseleaveFunction=function(t){t.fadeTo("fast",e.opacity)}):(e.mouseenterFunction=function(t){t.css("filter","alpha(opacity = "+100*e.hoverOpacity+")")},e.mouseleaveFunction=function(t){t.css("filter","alpha(opacity = "+100*e.opacity+")")})}})}(jqxBaseFramework);

