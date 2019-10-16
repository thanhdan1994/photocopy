/*********************************************************************************

    Template Name: Boighor Bookshop Responsive Bootstrap4 Template
    Version: 1.0


**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Avoid Console
	Slick Slider
	Fake Loader

=================================================================================
			[ END INDEX ]
================================================================================*/


/*========== Avoid Console ==========*/
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.


/*========= MobileMenu =========*/
!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);


/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);


/*========== Waypoint Js ==========*/
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


/*========= Wow Js =========*/
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);



/*========== Fake Loader ==========*/
/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
-----------------------------------------------------------------------*/
!function(i){function s(){var s=i(window).width(),c=i(window).height(),d=i(".fl").outerWidth(),e=i(".fl").outerHeight();i(".fl").css({position:"absolute",left:s/2-d/2,top:c/2-e/2})}i.fn.fakeLoader=function(c){var d=i.extend({timeToHide:1200,pos:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"999",bgColor:"#2ecc71",spinner:"spinner7",imagePath:""},c),e='<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',l='<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',n='<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',v='<div class="fl spinner4"></div>',a='<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',r='<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',t='<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',o=i(this),h={position:d.pos,width:d.width,height:d.height,top:d.top,left:d.left};return o.css(h),o.each(function(){var i=d.spinner;switch(i){case"spinner1":o.html(e);break;case"spinner2":o.html(l);break;case"spinner3":o.html(n);break;case"spinner4":o.html(v);break;case"spinner5":o.html(a);break;case"spinner6":o.html(r);break;case"spinner7":o.html(t);break;default:o.html(e)}""!=d.imagePath&&o.html('<div class="fl"><img src="'+d.imagePath+'"></div>'),s()}),setTimeout(function(){i(o).fadeOut()},d.timeToHide),this.css({backgroundColor:d.bgColor,zIndex:d.zIndex})},i(window).on("load",function(){s(),i(window).resize(function(){s()})})}(jQuery);


/*========== Slick Slider ==========*/

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


/*========= Owl Carousel =========*/

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);


/*========= jQuery fancyBox =========*/
/*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,J,f,x){var L=f("html"),q=f(t),p=f(J),b=f.fancybox=function(){b.open.apply(this,arguments)},K=navigator.userAgent.match(/msie/i),D=null,u=J.createTouch!==x,v=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},G=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,c){var d=parseInt(a,10)||0;c&&G(a)&&(d*=b.getViewport()[c]/100);return Math.ceil(d)},y=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.7",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(K?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},
previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,c){if(a&&(f.isPlainObject(c)||(c={}),!1!==b.close(!0)))return f.isArray(a)||(a=v(a)?f(a).get():[a]),f.each(a,function(d,e){var k={},g,l,h,n,m;"object"===f.type(e)&&(e.nodeType&&(e=f(e)),v(e)?(k={href:e.data("fancybox-href")||e.attr("href"),title:f("<div/>").text(e.data("fancybox-title")||
e.attr("title")||"").html(),isDom:!0,element:e},f.metadata&&f.extend(!0,k,e.metadata())):k=e);g=c.href||k.href||(r(e)?e:null);l=c.title!==x?c.title:k.title||"";n=(h=c.content||k.content)?"html":c.type||k.type;!n&&k.isDom&&(n=e.data("fancybox-type"),n||(n=(n=e.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(e)&&(n="html",h=e)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));h||("inline"===n?g?h=f(r(g)?
g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(h=e):"html"===n?h=g:n||g||!k.isDom||(n="inline",h=e));f.extend(k,{href:g,type:n,content:h,title:l,selector:m});a[d]=k}),b.opts=f.extend(!0,{},b.defaults,c),c.keys!==x&&(b.opts.keys=c.keys?f.extend({},b.defaults.keys,c.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&
a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var c=function(){clearTimeout(b.player.timer)},
d=function(){c();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},e=function(){c();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":e,"onUpdate.player":d,"beforeLoad.player":c}),d(),b.trigger("onPlayStart")):e()},next:function(a){var c=b.current;c&&(r(a)||(a=c.direction.next),b.jumpto(c.index+
1,a,"next"))},prev:function(a){var c=b.current;c&&(r(a)||(a=c.direction.prev),b.jumpto(c.index-1,a,"prev"))},jumpto:function(a,c,d){var e=b.current;e&&(a=m(a),b.direction=c||e.direction[a>=e.index?"next":"prev"],b.router=d||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==x&&(b.cancel(),b._start(a)))},reposition:function(a,c){var d=b.current,e=d?d.wrap:null,k;e&&(k=b._getPosition(c),a&&"scroll"===a.type?(delete k.position,e.stop(!0,!0).animate(k,200)):(e.css(k),
d.pos=f.extend({},d.dim,k)))},update:function(a){var c=a&&a.originalEvent&&a.originalEvent.type,d=!c||"orientationchange"===c;d&&(clearTimeout(D),D=null);b.isOpen&&!D&&(D=setTimeout(function(){var e=b.current;e&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(d||"load"===c||"resize"===c&&e.autoResize)&&b._setDimension(),"scroll"===c&&e.canShrink||b.reposition(a),b.trigger("onUpdate"),D=null)},d&&!u?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,
u&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,c;b.hideLoading();a=f(b.opts.tpl.loading).click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(c=b.getViewport(),a.css({position:"absolute",top:.5*c.h+c.y,left:.5*c.w+c.x}));b.trigger("onLoading")},getViewport:function(){var a=
b.current&&b.current.locked||!1,c={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(c.w=a[0].clientWidth,c.h=a[0].clientHeight):(c.w=u&&t.innerWidth?t.innerWidth:q.width(),c.h=u&&t.innerHeight?t.innerHeight:q.height());return c},unbindEvents:function(){b.wrap&&v(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,c;a&&(q.bind("orientationchange.fb"+(u?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(c=a.keys)&&p.bind("keydown.fb",
function(d){var e=d.which||d.keyCode,k=d.target||d.srcElement;if(27===e&&b.coming)return!1;d.ctrlKey||d.altKey||d.shiftKey||d.metaKey||k&&(k.type||f(k).is("[contenteditable]"))||f.each(c,function(c,k){if(1<a.group.length&&k[e]!==x)return b[c](k[e]),d.preventDefault(),!1;if(-1<f.inArray(e,k))return b[c](),d.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(c,e,k,g){for(var d=f(c.target||null),h=!1;d.length&&!(h||d.is(".fancybox-skin")||d.is(".fancybox-wrap"));)h=
(h=d[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>h.clientHeight),d=f(d).parent();0!==e&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<k?b.prev(0<g?"down":"left"):(0>g||0>k)&&b.next(0>g?"up":"right"),c.preventDefault())}))},trigger:function(a,c){var d,e=c||b.coming||b.current;if(e){f.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1)));if(!1===d)return!1;e.helpers&&f.each(e.helpers,function(c,
d){if(d&&b.helpers[c]&&f.isFunction(b.helpers[c][a]))b.helpers[c][a](f.extend(!0,{},b.helpers[c].defaults,d),e)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var c={},d,e;a=m(a);d=b.group[a]||null;if(!d)return!1;c=f.extend(!0,{},b.opts,d);d=c.margin;e=c.padding;"number"===f.type(d)&&(c.margin=[d,d,d,d]);"number"===f.type(e)&&(c.padding=
[e,e,e,e]);c.modal&&f.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});c.autoSize&&(c.autoWidth=c.autoHeight=!0);"auto"===c.width&&(c.autoWidth=!0);"auto"===c.height&&(c.autoHeight=!0);c.group=b.group;c.index=a;b.coming=c;if(!1===b.trigger("beforeLoad"))b.coming=null;else{e=c.type;d=c.href;if(!e)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
e||"swf"===e)c.autoHeight=c.autoWidth=!1,c.scrolling="visible";"image"===e&&(c.aspectRatio=!0);"iframe"===e&&u&&(c.scrolling="scroll");c.wrap=f(c.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body");f.extend(c,{skin:f(".fancybox-skin",c.wrap),outer:f(".fancybox-outer",c.wrap),inner:f(".fancybox-inner",c.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){c.skin.css("padding"+b,y(c.padding[a]))});b.trigger("onReady");
if("inline"===e||"html"===e){if(!c.content||!c.content.length)return b._error("content")}else if(!d)return b._error("href");"image"===e?b._loadImage():"ajax"===e?b._loadAjax():"iframe"===e?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(c,d){"success"===d&&(a.content=c,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
c=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(d){}});a.iframe.preload&&(b.showLoading(),c.one("load",function(){f(this).data("ready",1);u||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=c.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,c=b.current,d=a.length,e=c.preload?Math.min(c.preload,d-1):0,f,g;for(g=1;g<=e;g+=1)f=a[(c.index+g)%d],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,c=b.current,d,e,k,g,l;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{c&&(b.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();d=a.content;e=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c});g=a.href;switch(e){case "inline":case "ajax":case "html":a.selector?d=f("<div>").html(d).find(a.selector):v(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){f(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":d=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',l="",f.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>';l+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}v(d)&&d.parent().is(a.inner)||a.inner.append(d);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(c.prevMethod)b.transitions[c.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),c=0,d,e=b.wrap,k=b.skin,g=b.inner,l=b.current;d=l.width;var h=l.height,n=l.minWidth,w=l.minHeight,p=l.maxWidth,
q=l.maxHeight,u=l.scrolling,r=l.scrollOutside?l.scrollbarWidth:0,z=l.margin,A=m(z[1]+z[3]),t=m(z[0]+z[2]),x,B,v,E,C,H,D,F,I;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");z=m(k.outerWidth(!0)-k.width());x=m(k.outerHeight(!0)-k.height());B=A+z;v=t+x;E=G(d)?(a.w-B)*m(d)/100:d;C=G(h)?(a.h-v)*m(h)/100:h;if("iframe"===l.type){if(I=l.content,l.autoHeight&&I&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(E).height(9999),H=I.contents().find("body"),r&&H.css("overflow-x",
"hidden"),C=H.outerHeight(!0))}catch(M){}}else if(l.autoWidth||l.autoHeight)g.addClass("fancybox-tmp"),l.autoWidth||g.width(E),l.autoHeight||g.height(C),l.autoWidth&&(E=g.width()),l.autoHeight&&(C=g.height()),g.removeClass("fancybox-tmp");d=m(E);h=m(C);F=E/C;n=m(G(n)?m(n,"w")-B:n);p=m(G(p)?m(p,"w")-B:p);w=m(G(w)?m(w,"h")-v:w);q=m(G(q)?m(q,"h")-v:q);H=p;D=q;l.fitToView&&(p=Math.min(a.w-B,p),q=Math.min(a.h-v,q));B=a.w-A;t=a.h-t;l.aspectRatio?(d>p&&(d=p,h=m(d/F)),h>q&&(h=q,d=m(h*F)),d<n&&(d=n,h=m(d/
F)),h<w&&(h=w,d=m(h*F))):(d=Math.max(n,Math.min(d,p)),l.autoHeight&&"iframe"!==l.type&&(g.width(d),h=g.height()),h=Math.max(w,Math.min(h,q)));if(l.fitToView)if(g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height(),l.aspectRatio)for(;(a>B||A>t)&&d>n&&h>w&&!(19<c++);)h=Math.max(w,Math.min(q,h-10)),d=m(h*F),d<n&&(d=n,h=m(d/F)),d>p&&(d=p,h=m(d/F)),g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height();else d=Math.max(n,Math.min(d,d-(a-B))),h=Math.max(w,Math.min(h,h-(A-t)));r&&"auto"===u&&h<C&&
d+z+r<B&&(d+=r);g.width(d).height(h);e.width(d+z);a=e.width();A=e.height();c=(a>B||A>t)&&d>n&&h>w;d=l.aspectRatio?d<H&&h<D&&d<E&&h<C:(d<H||h<D)&&(d<E||h<C);f.extend(l,{dim:{width:y(a),height:y(A)},origWidth:E,origHeight:C,canShrink:c,canExpand:d,wPadding:z,hPadding:x,wrapSpace:A-k.outerHeight(!0),skinSpace:k.height()-h});!I&&l.autoHeight&&h>w&&h<q&&!d&&g.height("auto")},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],e={position:"absolute",
top:e[0],left:e[3]};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w?e.position="fixed":c.locked||(e.top+=d.y,e.left+=d.x);e.top=y(Math.max(e.top,e.top+(d.h-g)*c.topRatio));e.left=y(Math.max(e.left,e.left+(d.w-f)*c.leftRatio));return e},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(c){f(c.target).is("a")||
f(c.target).parent().is("a")||(c.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,c=a.element,d=a.orig,e={},f=50,g=50,l=a.hPadding,h=a.wPadding,n=b.getViewport();!d&&a.isDom&&c.is(":visible")&&(d=c.find("img:first"),d.length||(d=c));v(d)?
(e=d.offset(),d.is("img")&&(f=d.outerWidth(),g=d.outerHeight())):(e.top=n.y+(n.h-g)*a.topRatio,e.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)e.top-=n.y,e.left-=n.x;return e={top:y(e.top-l*a.topRatio),left:y(e.left-h*a.leftRatio),width:y(f+h),height:y(g+l)}},step:function(a,c){var d,e,f=c.prop;e=b.current;var g=e.wrapSpace,l=e.skinSpace;if("width"===f||"height"===f)d=c.end===c.start?1:(a-c.start)/(c.end-c.start),b.isClosing&&(d=1-d),e="width"===f?e.wPadding:e.hPadding,
e=a-e,b.skin[f](m("width"===f?e:e-g*d)),b.inner[f](m("width"===f?e:e-g*d-l*d))},zoomIn:function(){var a=b.current,c=a.pos,d=a.openEffect,e="elastic"===d,k=f.extend({opacity:1},c);delete k.position;e?(c=this.getOrigPosition(),a.openOpacity&&(c.opacity=.1)):"fade"===d&&(c.opacity=.1);b.wrap.css(c).animate(k,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,c=a.closeEffect,d="elastic"===c,e={opacity:.1};d&&(e=this.getOrigPosition(),
a.closeOpacity&&(e.opacity=.1));b.wrap.animate(e,{duration:"none"===c?0:a.closeSpeed,easing:a.closeEasing,step:d?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,c=a.nextEffect,d=a.pos,e={opacity:1},f=b.direction,g;d.opacity=.1;"elastic"===c&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[g]=y(m(d[g])-200),e[g]="+=200px"):(d[g]=y(m(d[g])+200),e[g]="-=200px"));"none"===c?b._afterZoomIn():b.wrap.css(d).animate(e,{duration:a.nextSpeed,easing:a.nextEasing,
complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,c=a.prevEffect,d={opacity:.1},e=b.direction;"elastic"===c&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px");a.wrap.animate(d,{duration:"none"===c?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var c;a=f.extend({},
this.defaults,a);this.overlay&&this.close();c=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(c&&c.length?c:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var c=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&
this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():c.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
K?(b=Math.max(J.documentElement.offsetWidth,J.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var d=this.overlay;f(".fancybox-overlay").stop(!0,!0);d||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*:not(object)").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var c=b.current,d=c.title,e=a.type;f.isFunction(d)&&(d=d.call(c.element,c));if(r(d)&&""!==f.trim(d)){c=f('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>");switch(e){case "inside":e=b.skin;break;case "outside":e=b.wrap;break;case "over":e=b.inner;break;default:e=b.skin,c.appendTo("body"),K&&c.width(c.width()),c.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(c.css("margin-bottom")))}c["top"===a.position?"prependTo":
"appendTo"](e)}}};f.fn.fancybox=function(a){var c,d=f(this),e=this.selector||"",k=function(g){var l=f(this).blur(),h=c,k,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||l.is(".fancybox-wrap")||(k=a.groupAttr||"data-fancybox-group",m=l.attr(k),m||(k="rel",m=l.get(0)[k]),m&&""!==m&&"nofollow"!==m&&(l=e.length?f(e):d,l=l.filter("["+k+'="'+m+'"]'),h=l.index(this)),a.index=h,!1!==b.open(l,a)&&g.preventDefault())};a=a||{};c=a.index||0;e&&!1!==a.live?p.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,c;f.scrollbarWidth===x&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===x&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(t).width();L.addClass("fancybox-lock-test");c=f(t).width();L.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(c-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);


/*========= Isotope PACKAGED v2.2.0 =========*/
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});



/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):"object"==typeof exports?i(require("jquery")):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function n(i){function n(){if(!d){d=!0;var o=t.getComputedStyle;if(p=function(){var t=o?function(t){return o(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(n);var a=p(n);f=200===e(a.width),s.removeChild(n)}}}function a(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=p(t);if("none"===i.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),d=0,l=s.length;l>d;d++){var c=s[d],m=i[c];m=u(t,m);var y=parseFloat(m);r[c]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,_=r.marginLeft+r.marginRight,I=r.marginTop+r.marginBottom,z=r.borderLeftWidth+r.borderRightWidth,L=r.borderTopWidth+r.borderBottomWidth,x=a&&f,E=e(i.width);E!==!1&&(r.width=E+(x?0:g+z));var b=e(i.height);return b!==!1&&(r.height=b+(x?0:v+L)),r.innerWidth=r.width-(g+z),r.innerHeight=r.height-(v+L),r.outerWidth=r.width+_,r.outerHeight=r.height+I,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var p,h,f,d=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("desandro-get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||o()}function o(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var o=s[t];o()}}function n(n){return"complete"===r.readyState?o():(n.bind(r,"DOMContentLoaded",i),n.bind(r,"readystatechange",i),n.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],n):"object"==typeof exports?module.exports=n(require("eventie")):t.docReady=n(t.eventie)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){i(t);for(var o=t.parentNode.querySelectorAll(e),n=0,r=o.length;r>n;n++)if(o[n]===t)return!0;return!1}function n(t,o){return i(t),e(t,o)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;o>i;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),u=e(a,"div");r=u?e:n}else r=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,o){return e(t,i,o)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,i){var o={};o.extend=function(t,e){for(var i in e)t[i]=e[i];return t},o.modulo=function(t,e){return(t%e+e)%e};var n=Object.prototype.toString;o.isArray=function(t){return"[object Array]"==n.call(t)},o.makeArray=function(t){var e=[];if(o.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1},o.removeFrom=function(t,e){var i=o.indexOf(t,e);-1!=i&&t.splice(i,1)},o.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},o.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),o.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},o.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},o.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.filterFindElements=function(t,e){t=o.makeArray(t);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r];if(o.isElement(a))if(e){i(a,e)&&n.push(a);for(var u=a.querySelectorAll(e),p=0,h=u.length;h>p;p++)n.push(u[p])}else n.push(a)}return n},o.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,r=this;this[n]=setTimeout(function(){o.apply(r,e),delete r[n]},i||100)}},o.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return o.htmlInit=function(i,n){e(function(){for(var e=o.toDashed(n),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",u=0,p=s.length;p>u;u++){var h,f=s[u],d=f.getAttribute(a);try{h=d&&JSON.parse(d)}catch(l){r&&r.error("Error parsing "+a+" on "+f.nodeName.toLowerCase()+(f.id?"#"+f.id:"")+": "+l);continue}var c=new i(f,h),m=t.jQuery;m&&m.data(f,n,c)}})},o}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,o,n,r){return e(t,i,o,n,r)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EventEmitter,t.getSize,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,i,o,n){function r(t){for(var e in t)return!1;return e=null,!0}function s(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var a=t.getComputedStyle,u=a?function(t){return a(t,null)}:function(t){return t.currentStyle},p=o("transition"),h=o("transform"),f=p&&h,d=!!o("perspective"),l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[p],c=["transform","transition","transitionDuration","transitionProperty"],m=function(){for(var t={},e=0,i=c.length;i>e;e++){var n=c[e],r=o(n);r&&r!==n&&(t[n]=r)}return t}();n.extend(s.prototype,e.prototype),s.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.getSize=function(){this.size=i(this.element)},s.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=m[i]||i;e[o]=t[i]}},s.prototype.getPosition=function(){var t=u(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var s=this.layout.size;n-=i?s.paddingLeft:s.paddingRight,r-=o?s.paddingTop:s.paddingBottom,this.position.x=n,this.position.y=r},s.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={},o=e.isOriginLeft?"paddingLeft":"paddingRight",n=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",s=this.position.x+t[o];s=e.percentPosition&&!e.isHorizontal?100*(s/t.width)+"%":s+"px",i[n]=s,i[r]="";var a=e.isOriginTop?"paddingTop":"paddingBottom",u=e.isOriginTop?"top":"bottom",p=e.isOriginTop?"bottom":"top",h=this.position.y+t[a];h=e.percentPosition&&e.isHorizontal?100*(h/t.height)+"%":h+"px",i[u]=h,i[p]="",this.css(i),this.emitEvent("layout",[this])};var y=d?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};s.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},s.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},s.prototype.moveTo=f?s.prototype._transitionTo:s.prototype.goTo,s.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},s.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},s.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var g=h&&n.toDashed(h)+",opacity";s.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(l,this,!1))},s.prototype.transition=s.prototype[p?"_transition":"_nonTransition"],s.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},s.prototype.onotransitionend=function(t){this.ontransitionend(t)};var v={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};s.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=v[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],r(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var o=e.onEnd[i];o.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},s.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(l,this,!1),this.isTransitioning=!1},s.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var _={transitionProperty:"",transitionDuration:""};return s.prototype.removeTransitionStyles=function(){this.css(_)},s.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},s.prototype.remove=function(){if(!p||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()},s.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},s.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},s.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},s.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},s}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,r,s){return e(t,i,o,n,r,s)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.eventie,t.EventEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n,r){function s(t,e){var i=n.getQueryElement(t);if(!i)return a&&a.error("Bad element for "+this.constructor.namespace+": "+(i||t)),void 0;this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++h;this.element.outlayerGUID=o,f[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var a=t.console,u=t.jQuery,p=function(){},h=0,f={};return s.namespace="outlayer",s.Item=r,s.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},n.extend(s.prototype,i.prototype),s.prototype.option=function(t){n.extend(this.options,t)},s.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},s.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},s.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},s.prototype._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},s.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},s.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},s.prototype._init=s.prototype.layout,s.prototype._resetLayout=function(){this.getSize()},s.prototype.getSize=function(){this.size=o(this.element)},s.prototype._getMeasurement=function(t,e){var i,r=this.options[t];r?("string"==typeof r?i=this.element.querySelector(r):n.isElement(r)&&(i=r),this[t]=i?o(i)[e]:r):this[t]=0},s.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},s.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},s.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var i=[],o=0,n=t.length;n>o;o++){var r=t[o],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e||r.isLayoutInstant,i.push(s)}this._processLayoutQueue(i)}},s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},s.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},s.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},s.prototype._postLayout=function(){this.resizeContainer()},s.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},s.prototype._getContainerSize=p,s.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},s.prototype._emitCompleteOnItems=function(t,e){function i(){n.emitEvent(t+"Complete",[e])}function o(){s++,s===r&&i()}var n=this,r=e.length;if(!e||!r)return i(),void 0;for(var s=0,a=0,u=e.length;u>a;a++){var p=e[a];p.once(t,o)}},s.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},s.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},s.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},s.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n.removeFrom(this.stamps,o),this.unignore(o)}},s.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},s.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},s.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},s.prototype._manageStamp=p,s.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=o(t),r={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return r},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},s.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},s.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},s.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},s.prototype.needsResizeLayout=function(){var t=o(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},s.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},s.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},s.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},s.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.reveal()}},s.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.hide()}},s.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},s.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},s.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},s.prototype.getItems=function(t){t=n.makeArray(t);for(var e=[],i=0,o=t.length;o>i;i++){var r=t[i],s=this.getItem(r);s&&e.push(s)}return e},s.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var i=0,o=e.length;o>i;i++){var r=e[i];r.remove(),n.removeFrom(this.items,r)}},s.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete f[n],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){function i(){s.apply(this,arguments)}return Object.create?i.prototype=Object.create(s.prototype):n.extend(i.prototype,s.prototype),i.prototype.constructor=i,i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.prototype.settings={},i.namespace=t,i.data=s.data,i.Item=function(){r.apply(this,arguments)},i.Item.prototype=new r,n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i},s.Item=r,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):t.Masonry=e(t.Outlayer,t.getSize,t.fizzyUIUtils)}(window,function(t,e,i){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,r=n/o,s=o-n%o,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i.indexOf(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;i(o.prototype,e.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")
},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,r,s,a){return e(t,i,o,n,r,s,a)}):"object"==typeof exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,r,s){function a(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var u=t.jQuery,p=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},h=document.documentElement,f=h.textContent?function(t){return t.textContent}:function(t){return t.innerText},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=r,d.LayoutMode=s,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in s.modes)this._initLayoutMode(t)},d.prototype.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0,o=t.length;o>i;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},d.prototype._initLayoutMode=function(t){var e=s.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._bindArrangeComplete=function(){function t(){e&&i&&o&&n.emitEvent("arrangeComplete",[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var u=t[s];if(!u.isIgnored){var p=r(u);p&&i.push(u),p&&u.isHidden?o.push(u):p||u.isHidden||n.push(u)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=p(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&f(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);var i=e&&e.length;if(i)for(var o=0;i>o;o++){var r=e[o];n.removeFrom(this.filteredItems,r)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d});

/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f)}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pc)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rc)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function gb(a){d.Fotorama.instances.push(a),fb()}function hb(a){d.Fotorama.instances.splice(a.index,1),fb()}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++)if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie)}}})}function g(a){return Zd[a]||ie.fullScreen}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0})}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation()}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b)}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0)}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e)}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a}function y(a){return h(a,0,zd-1)}function z(a){return Md?x(a):y(a)}function E(a){return a>0||Md?a-1:!1}function U(a){return zd-1>a||Md?a+1:!1}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max))}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"))}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd())},0)}function q(){var a=10;G(function(){return!fe||!a--&&!Mc},function(){p()})}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qb(a){Ie.append(Bd.spin().el).appendTo(a)}function Rb(){Ie.detach(),Bd&&Bd.stop()}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb()}))}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye)},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe})})}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re)},0),pd({index:h.eq,user:!0})}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()))}})}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k)}})}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Ud,w:g.w}},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m)})}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++)if(c.data===yd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wc[c]=!0}}function xc(a){return a-Se>Le.w/3}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd)}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b))}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)})}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin}}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb))}function _c(a){for(var b=Qe[a];b.length;)b.shift().removeClass(Wb)}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb())}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fd(b,c){a.trigger(ib+":"+b,[ie,c])}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0}function hd(){fe&&(e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0},Qc+Pc))}function id(){ce=!(!Cd&&!de)}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd)})}},e.autoplay)})}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"))}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd())}function nd(a){qe.toggleClass(qb,a)}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b)}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a)},10)},0):ie.show(a)}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0})}function rd(a,b){Me[a]=Oe[a]=b}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left})}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0})}function ud(a){X(a,function(){setTimeout(function(){Q(re)},0),nd(!1)})}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize()}else ie.destroy()}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0}function xd(){xd.ok||(xd.ok=!0,fd("ready"))}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];
qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this)},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this},ie.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd)}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd()}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te)}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d)}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vc.event,function(){!yd||vc.is()||Cd||kd()}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub)}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this},ie.setOptions=function(a){return d.extend(e,a),vd(),this},ie.shuffle=function(){return yd&&O(yd)&&vd(),this},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==typeof b&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"))})),this},ie.stopVideo=function(){return md(Cd,!0,!0),this},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function(a,b){ld(re,b.edge)},onTouchEnd:hd,onEnd:function(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function(a,b){ld(ye,b.edge)},onTouchEnd:hd,onEnd:function(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey})}}),Pe=eb(ye,{onEnd:function(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0)},Pc),uc(c)}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0))},0)},function(){ge&&nd(!(ge=!1))}),M(we,function(a){Y(a),td.call(this,a)},{onStart:function(){gd(),Me.control=!0},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a)}),ud(this)}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie}}),vd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ib+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

    $.ui = $.ui || {};

    var version = $.ui.version = "1.12.1";


    /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;

    $.cleanData = ( function( orig ) {
        return function( elems ) {
            var events, elem, i;
            for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data( elem, "events" );
                    if ( events && events.remove ) {
                        $( elem ).triggerHandler( "remove" );
                    }

                    // Http://bugs.jquery.com/ticket/8235
                } catch ( e ) {}
            }
            orig( elems );
        };
    } )( $.cleanData );

    $.widget = function( name, base, prototype ) {
        var existingConstructor, constructor, basePrototype;

        // ProxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        var proxiedPrototype = {};

        var namespace = name.split( "." )[ 0 ];
        name = name.split( "." )[ 1 ];
        var fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }

        if ( $.isArray( prototype ) ) {
            prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
        }

        // Create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };

        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {

            // Allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }

            // Allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };

        // Extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,

            // Copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),

            // Track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        } );

        basePrototype = new base();

        // We need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = ( function() {
                function _super() {
                    return base.prototype[ prop ].apply( this, arguments );
                }

                function _superApply( args ) {
                    return base.prototype[ prop ].apply( this, args );
                }

                return function() {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply( this, arguments );

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            } )();
        } );
        constructor.prototype = $.widget.extend( basePrototype, {

            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        } );

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;

                // Redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
                    child._proto );
            } );

            // Remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }

        $.widget.bridge( name, constructor );

        return constructor;
    };

    $.widget.extend = function( target ) {
        var input = widgetSlice.call( arguments, 1 );
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;

        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                            $.widget.extend( {}, target[ key ], value ) :

                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend( {}, value );

                        // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call( arguments, 1 );
            var returnValue = this;

            if ( isMethodCall ) {

                // If this is an empty collection, we need to have the instance method
                // return undefined instead of the jQuery instance
                if ( !this.length && options === "instance" ) {
                    returnValue = undefined;
                } else {
                    this.each( function() {
                        var methodValue;
                        var instance = $.data( this, fullName );

                        if ( options === "instance" ) {
                            returnValue = instance;
                            return false;
                        }

                        if ( !instance ) {
                            return $.error( "cannot call methods on " + name +
                                " prior to initialization; " +
                                "attempted to call method '" + options + "'" );
                        }

                        if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
                            return $.error( "no such method '" + options + "' for " + name +
                                " widget instance" );
                        }

                        methodValue = instance[ options ].apply( instance, args );

                        if ( methodValue !== instance && methodValue !== undefined ) {
                            returnValue = methodValue && methodValue.jquery ?
                                returnValue.pushStack( methodValue.get() ) :
                                methodValue;
                            return false;
                        }
                    } );
                }
            } else {

                // Allow multiple hashes to be passed on init
                if ( args.length ) {
                    options = $.widget.extend.apply( null, [ options ].concat( args ) );
                }

                this.each( function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {} );
                        if ( instance._init ) {
                            instance._init();
                        }
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                } );
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",

        options: {
            classes: {},
            disabled: false,

            // Callbacks
            create: null
        },

        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};

            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                } );
                this.document = $( element.style ?

                    // Element within the document
                    element.ownerDocument :

                    // Element is window or document
                    element.document || element );
                this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
            }

            this.options = $.widget.extend( {},
                this.options,
                this._getCreateOptions(),
                options );

            this._create();

            if ( this.options.disabled ) {
                this._setOptionDisabled( this.options.disabled );
            }

            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },

        _getCreateOptions: function() {
            return {};
        },

        _getCreateEventData: $.noop,

        _create: $.noop,

        _init: $.noop,

        destroy: function() {
            var that = this;

            this._destroy();
            $.each( this.classesElementLookup, function( key, value ) {
                that._removeClass( value, key );
            } );

            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .off( this.eventNamespace )
                .removeData( this.widgetFullName );
            this.widget()
                .off( this.eventNamespace )
                .removeAttr( "aria-disabled" );

            // Clean up events and states
            this.bindings.off( this.eventNamespace );
        },

        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function( key, value ) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if ( arguments.length === 0 ) {

                // Don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },

        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },

        _setOption: function( key, value ) {
            if ( key === "classes" ) {
                this._setOptionClasses( value );
            }

            this.options[ key ] = value;

            if ( key === "disabled" ) {
                this._setOptionDisabled( value );
            }

            return this;
        },

        _setOptionClasses: function( value ) {
            var classKey, elements, currentElements;

            for ( classKey in value ) {
                currentElements = this.classesElementLookup[ classKey ];
                if ( value[ classKey ] === this.options.classes[ classKey ] ||
                    !currentElements ||
                    !currentElements.length ) {
                    continue;
                }

                // We are doing this to create a new jQuery object because the _removeClass() call
                // on the next line is going to destroy the reference to the current elements being
                // tracked. We need to save a copy of this collection so that we can add the new classes
                // below.
                elements = $( currentElements.get() );
                this._removeClass( currentElements, classKey );

                // We don't use _addClass() here, because that uses this.options.classes
                // for generating the string of classes. We want to use the value passed in from
                // _setOption(), this is the new value of the classes option which was passed to
                // _setOption(). We pass this value directly to _classes().
                elements.addClass( this._classes( {
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                } ) );
            }
        },

        _setOptionDisabled: function( value ) {
            this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

            // If the widget is becoming disabled, then nothing is interactive
            if ( value ) {
                this._removeClass( this.hoverable, null, "ui-state-hover" );
                this._removeClass( this.focusable, null, "ui-state-focus" );
            }
        },

        enable: function() {
            return this._setOptions( { disabled: false } );
        },

        disable: function() {
            return this._setOptions( { disabled: true } );
        },

        _classes: function( options ) {
            var full = [];
            var that = this;

            options = $.extend( {
                element: this.element,
                classes: this.options.classes || {}
            }, options );

            function processClassString( classes, checkOption ) {
                var current, i;
                for ( i = 0; i < classes.length; i++ ) {
                    current = that.classesElementLookup[ classes[ i ] ] || $();
                    if ( options.add ) {
                        current = $( $.unique( current.get().concat( options.element.get() ) ) );
                    } else {
                        current = $( current.not( options.element ).get() );
                    }
                    that.classesElementLookup[ classes[ i ] ] = current;
                    full.push( classes[ i ] );
                    if ( checkOption && options.classes[ classes[ i ] ] ) {
                        full.push( options.classes[ classes[ i ] ] );
                    }
                }
            }

            this._on( options.element, {
                "remove": "_untrackClassesElement"
            } );

            if ( options.keys ) {
                processClassString( options.keys.match( /\S+/g ) || [], true );
            }
            if ( options.extra ) {
                processClassString( options.extra.match( /\S+/g ) || [] );
            }

            return full.join( " " );
        },

        _untrackClassesElement: function( event ) {
            var that = this;
            $.each( that.classesElementLookup, function( key, value ) {
                if ( $.inArray( event.target, value ) !== -1 ) {
                    that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
                }
            } );
        },

        _removeClass: function( element, keys, extra ) {
            return this._toggleClass( element, keys, extra, false );
        },

        _addClass: function( element, keys, extra ) {
            return this._toggleClass( element, keys, extra, true );
        },

        _toggleClass: function( element, keys, extra, add ) {
            add = ( typeof add === "boolean" ) ? add : extra;
            var shift = ( typeof element === "string" || element === null ),
                options = {
                    extra: shift ? keys : extra,
                    keys: shift ? element : keys,
                    element: shift ? this.element : element,
                    add: add
                };
            options.element.toggleClass( this._classes( options ), add );
            return this;
        },

        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement;
            var instance = this;

            // No suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // No element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
                function handlerProxy() {

                    // Allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                        ( instance.options.disabled === true ||
                            $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                        .apply( instance, arguments );
                }

                // Copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match( /^([\w:-]*)\s*(.*)$/ );
                var eventName = match[ 1 ] + instance.eventNamespace;
                var selector = match[ 2 ];

                if ( selector ) {
                    delegateElement.on( eventName, selector, handlerProxy );
                } else {
                    element.on( eventName, handlerProxy );
                }
            } );
        },

        _off: function( element, eventName ) {
            eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
                this.eventNamespace;
            element.off( eventName ).off( eventName );

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $( this.bindings.not( element ).get() );
            this.focusable = $( this.focusable.not( element ).get() );
            this.hoverable = $( this.hoverable.not( element ).get() );
        },

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
                }
            } );
        },

        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
                },
                focusout: function( event ) {
                    this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
                }
            } );
        },

        _trigger: function( type, event, data ) {
            var prop, orig;
            var callback = this.options[ type ];

            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
                type :
                this.widgetEventPrefix + type ).toLowerCase();

            // The original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];

            // Copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }

            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
                callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
                event.isDefaultPrevented() );
        }
    };

    $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = { effect: options };
            }

            var hasOptions;
            var effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                    options.effect || defaultEffect;

            options = options || {};
            if ( typeof options === "number" ) {
                options = { duration: options };
            }

            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;

            if ( options.delay ) {
                element.delay( options.delay );
            }

            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue( function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                } );
            }
        };
    } );

    var widget = $.widget;


    /*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


    ( function() {
        var cachedScrollbarWidth,
            max = Math.max,
            abs = Math.abs,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets( offsets, width, height ) {
            return [
                parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
                parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
            ];
        }

        function parseCss( element, property ) {
            return parseInt( $.css( element, property ), 10 ) || 0;
        }

        function getDimensions( elem ) {
            var raw = elem[ 0 ];
            if ( raw.nodeType === 9 ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                };
            }
            if ( $.isWindow( raw ) ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                };
            }
            if ( raw.preventDefault ) {
                return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function() {
                if ( cachedScrollbarWidth !== undefined ) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $( "<div " +
                        "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
                        "<div style='height:100px;width:auto;'></div></div>" ),
                    innerDiv = div.children()[ 0 ];

                $( "body" ).append( div );
                w1 = innerDiv.offsetWidth;
                div.css( "overflow", "scroll" );

                w2 = innerDiv.offsetWidth;

                if ( w1 === w2 ) {
                    w2 = div[ 0 ].clientWidth;
                }

                div.remove();

                return ( cachedScrollbarWidth = w1 - w2 );
            },
            getScrollInfo: function( within ) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                    within.element.css( "overflow-x" ),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-y" ),
                    hasOverflowX = overflowX === "scroll" ||
                        ( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
                    hasOverflowY = overflowY === "scroll" ||
                        ( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function( element ) {
                var withinElement = $( element || window ),
                    isWindow = $.isWindow( withinElement[ 0 ] ),
                    isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
                    hasOffset = !isWindow && !isDocument;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function( options ) {
            if ( !options || !options.of ) {
                return _position.apply( this, arguments );
            }

            // Make a copy, we don't want to modify arguments
            options = $.extend( {}, options );

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $( options.of ),
                within = $.position.getWithinInfo( options.within ),
                scrollInfo = $.position.getScrollInfo( within ),
                collision = ( options.collision || "flip" ).split( " " ),
                offsets = {};

            dimensions = getDimensions( target );
            if ( target[ 0 ].preventDefault ) {

                // Force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;

            // Clone to reuse original targetOffset later
            basePosition = $.extend( {}, targetOffset );

            // Force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each( [ "my", "at" ], function() {
                var pos = ( options[ this ] || "" ).split( " " ),
                    horizontalOffset,
                    verticalOffset;

                if ( pos.length === 1 ) {
                    pos = rhorizontal.test( pos[ 0 ] ) ?
                        pos.concat( [ "center" ] ) :
                        rvertical.test( pos[ 0 ] ) ?
                            [ "center" ].concat( pos ) :
                            [ "center", "center" ];
                }
                pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
                pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

                // Calculate offsets
                horizontalOffset = roffset.exec( pos[ 0 ] );
                verticalOffset = roffset.exec( pos[ 1 ] );
                offsets[ this ] = [
                    horizontalOffset ? horizontalOffset[ 0 ] : 0,
                    verticalOffset ? verticalOffset[ 0 ] : 0
                ];

                // Reduce to just the positions without the offsets
                options[ this ] = [
                    rposition.exec( pos[ 0 ] )[ 0 ],
                    rposition.exec( pos[ 1 ] )[ 0 ]
                ];
            } );

            // Normalize collision option
            if ( collision.length === 1 ) {
                collision[ 1 ] = collision[ 0 ];
            }

            if ( options.at[ 0 ] === "right" ) {
                basePosition.left += targetWidth;
            } else if ( options.at[ 0 ] === "center" ) {
                basePosition.left += targetWidth / 2;
            }

            if ( options.at[ 1 ] === "bottom" ) {
                basePosition.top += targetHeight;
            } else if ( options.at[ 1 ] === "center" ) {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
            basePosition.left += atOffset[ 0 ];
            basePosition.top += atOffset[ 1 ];

            return this.each( function() {
                var collisionPosition, using,
                    elem = $( this ),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss( this, "marginLeft" ),
                    marginTop = parseCss( this, "marginTop" ),
                    collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
                        scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
                        scrollInfo.height,
                    position = $.extend( {}, basePosition ),
                    myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

                if ( options.my[ 0 ] === "right" ) {
                    position.left -= elemWidth;
                } else if ( options.my[ 0 ] === "center" ) {
                    position.left -= elemWidth / 2;
                }

                if ( options.my[ 1 ] === "bottom" ) {
                    position.top -= elemHeight;
                } else if ( options.my[ 1 ] === "center" ) {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[ 0 ];
                position.top += myOffset[ 1 ];

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each( [ "left", "top" ], function( i, dir ) {
                    if ( $.ui.position[ collision[ i ] ] ) {
                        $.ui.position[ collision[ i ] ][ dir ]( position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        } );
                    }
                } );

                if ( options.using ) {

                    // Adds feedback as second argument to using callback, if present
                    using = function( props ) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                            feedback.horizontal = "center";
                        }
                        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                            feedback.vertical = "middle";
                        }
                        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call( this, props, feedback );
                    };
                }

                elem.offset( $.extend( position, { using: using } ) );
            } );
        };

        $.ui.position = {
            fit: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // Element is wider than within
                    if ( data.collisionWidth > outerWidth ) {

                        // Element is initially over the left side of within
                        if ( overLeft > 0 && overRight <= 0 ) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
                                withinOffset;
                            position.left += overLeft - newOverRight;

                            // Element is initially over right side of within
                        } else if ( overRight > 0 && overLeft <= 0 ) {
                            position.left = withinOffset;

                            // Element is initially over both left and right sides of within
                        } else {
                            if ( overLeft > overRight ) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }

                        // Too far left -> align with left edge
                    } else if ( overLeft > 0 ) {
                        position.left += overLeft;

                        // Too far right -> align with right edge
                    } else if ( overRight > 0 ) {
                        position.left -= overRight;

                        // Adjust based on position and margin
                    } else {
                        position.left = max( position.left - collisionPosLeft, position.left );
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // Element is taller than within
                    if ( data.collisionHeight > outerHeight ) {

                        // Element is initially over the top of within
                        if ( overTop > 0 && overBottom <= 0 ) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
                                withinOffset;
                            position.top += overTop - newOverBottom;

                            // Element is initially over bottom of within
                        } else if ( overBottom > 0 && overTop <= 0 ) {
                            position.top = withinOffset;

                            // Element is initially over both top and bottom of within
                        } else {
                            if ( overTop > overBottom ) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }

                        // Too far up -> align with top
                    } else if ( overTop > 0 ) {
                        position.top += overTop;

                        // Too far down -> align with bottom edge
                    } else if ( overBottom > 0 ) {
                        position.top -= overBottom;

                        // Adjust based on position and margin
                    } else {
                        position.top = max( position.top - collisionPosTop, position.top );
                    }
                }
            },
            flip: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[ 0 ] === "left" ?
                            -data.elemWidth :
                            data.my[ 0 ] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[ 0 ] === "left" ?
                            data.targetWidth :
                            data.at[ 0 ] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[ 0 ],
                        newOverRight,
                        newOverLeft;

                    if ( overLeft < 0 ) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
                            outerWidth - withinOffset;
                        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if ( overRight > 0 ) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
                            atOffset + offset - offsetLeft;
                        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[ 1 ] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[ 1 ] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[ 1 ] === "top" ?
                            data.targetHeight :
                            data.at[ 1 ] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[ 1 ],
                        newOverTop,
                        newOverBottom;
                    if ( overTop < 0 ) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
                            outerHeight - withinOffset;
                        if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if ( overBottom > 0 ) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
                            offset - offsetTop;
                        if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply( this, arguments );
                    $.ui.position.fit.left.apply( this, arguments );
                },
                top: function() {
                    $.ui.position.flip.top.apply( this, arguments );
                    $.ui.position.fit.top.apply( this, arguments );
                }
            }
        };

    } )();

    var position = $.ui.position;


    /*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/


    var data = $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo( function( dataName ) {
                return function( elem ) {
                    return !!$.data( elem, dataName );
                };
            } ) :

            // Support: jQuery <1.8
            function( elem, i, match ) {
                return !!$.data( elem, match[ 3 ] );
            }
    } );

    /*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated


    var disableSelection = $.fn.extend( {
        disableSelection: ( function() {
            var eventType = "onselectstart" in document.createElement( "div" ) ?
                "selectstart" :
                "mousedown";

            return function() {
                return this.on( eventType + ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                } );
            };
        } )(),

        enableSelection: function() {
            return this.off( ".ui-disableSelection" );
        }
    } );


    /*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Effects Core
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/category/effects-core/
//>>demos: http://jqueryui.com/effect/



    var dataSpace = "ui-effects-",
        dataSpaceStyle = "ui-effects-style",
        dataSpaceAnimated = "ui-effects-animated",

        // Create a local jQuery because jQuery Color relies on it and the
        // global may not exist with AMD and a custom build (#10199)
        jQuery = $;

    $.effects = {
        effect: {}
    };

    /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
    ( function( jQuery, undefined ) {

        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
            "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

            // Plusequals test for += 100 -= 100
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

            // A set of RE's that can match strings and generate color tuples.
            stringParsers = [ {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ],
                        execResult[ 3 ],
                        execResult[ 4 ]
                    ];
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ] * 2.55,
                        execResult[ 2 ] * 2.55,
                        execResult[ 3 ] * 2.55,
                        execResult[ 4 ]
                    ];
                }
            }, {

                // This regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ], 16 )
                    ];
                }
            }, {

                // This regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                    ];
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ] / 100,
                        execResult[ 3 ] / 100,
                        execResult[ 4 ]
                    ];
                }
            } ],

            // JQuery.Color( )
            color = jQuery.Color = function( color, green, blue, alpha ) {
                return new jQuery.Color.fn.parse( color, green, blue, alpha );
            },
            spaces = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },

                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    max: 255
                },
                "percent": {
                    max: 1
                },
                "degrees": {
                    mod: 360,
                    floor: true
                }
            },
            support = color.support = {},

            // Element for support tests
            supportElem = jQuery( "<p>" )[ 0 ],

            // Colors = jQuery.Color.names
            colors,

            // Local aliases of functions called often
            each = jQuery.each;

// Determine rgba support immediately
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// Define cache name and alpha properties
// for rgba and hsla spaces
        each( spaces, function( spaceName, space ) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        } );

        function clamp( value, prop, allowEmpty ) {
            var type = propTypes[ prop.type ] || {};

            if ( value == null ) {
                return ( allowEmpty || !prop.def ) ? null : prop.def;
            }

            // ~~ is an short way of doing floor for positive numbers
            value = type.floor ? ~~value : parseFloat( value );

            // IE will pass in empty strings as value for alpha,
            // which will hit this case
            if ( isNaN( value ) ) {
                return prop.def;
            }

            if ( type.mod ) {

                // We add mod before modding to make sure that negatives values
                // get converted properly: -10 -> 350
                return ( value + type.mod ) % type.mod;
            }

            // For now all property types without mod have min and max
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }

        function stringParse( string ) {
            var inst = color(),
                rgba = inst._rgba = [];

            string = string.toLowerCase();

            each( stringParsers, function( i, parser ) {
                var parsed,
                    match = parser.re.exec( string ),
                    values = match && parser.parse( match ),
                    spaceName = parser.space || "rgba";

                if ( values ) {
                    parsed = inst[ spaceName ]( values );

                    // If this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                    rgba = inst._rgba = parsed._rgba;

                    // Exit each( stringParsers ) here because we matched
                    return false;
                }
            } );

            // Found a stringParser that handled it
            if ( rgba.length ) {

                // If this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if ( rgba.join() === "0,0,0,0" ) {
                    jQuery.extend( rgba, colors.transparent );
                }
                return inst;
            }

            // Named colors
            return colors[ string ];
        }

        color.fn = jQuery.extend( color.prototype, {
            parse: function( red, green, blue, alpha ) {
                if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if ( red.jquery || red.nodeType ) {
                    red = jQuery( red ).css( green );
                    green = undefined;
                }

                var inst = this,
                    type = jQuery.type( red ),
                    rgba = this._rgba = [];

                // More than 1 argument specified - assume ( red, green, blue, alpha )
                if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }

                if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                }

                if ( type === "array" ) {
                    each( spaces.rgba.props, function( key, prop ) {
                        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    } );
                    return this;
                }

                if ( type === "object" ) {
                    if ( red instanceof color ) {
                        each( spaces, function( spaceName, space ) {
                            if ( red[ space.cache ] ) {
                                inst[ space.cache ] = red[ space.cache ].slice();
                            }
                        } );
                    } else {
                        each( spaces, function( spaceName, space ) {
                            var cache = space.cache;
                            each( space.props, function( key, prop ) {

                                // If the cache doesn't exist, and we know how to convert
                                if ( !inst[ cache ] && space.to ) {

                                    // If the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if ( key === "alpha" || red[ key ] == null ) {
                                        return;
                                    }
                                    inst[ cache ] = space.to( inst._rgba );
                                }

                                // This is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                            } );

                            // Everything defined but alpha?
                            if ( inst[ cache ] &&
                                jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

                                // Use the default of 1
                                inst[ cache ][ 3 ] = 1;
                                if ( space.from ) {
                                    inst._rgba = space.from( inst[ cache ] );
                                }
                            }
                        } );
                    }
                    return this;
                }
            },
            is: function( compare ) {
                var is = color( compare ),
                    same = true,
                    inst = this;

                each( spaces, function( _, space ) {
                    var localCache,
                        isCache = is[ space.cache ];
                    if ( isCache ) {
                        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                        each( space.props, function( _, prop ) {
                            if ( isCache[ prop.idx ] != null ) {
                                same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                                return same;
                            }
                        } );
                    }
                    return same;
                } );
                return same;
            },
            _space: function() {
                var used = [],
                    inst = this;
                each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                        used.push( spaceName );
                    }
                } );
                return used.pop();
            },
            transition: function( other, distance ) {
                var end = color( other ),
                    spaceName = end._space(),
                    space = spaces[ spaceName ],
                    startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                    start = startColor[ space.cache ] || space.to( startColor._rgba ),
                    result = start.slice();

                end = end[ space.cache ];
                each( space.props, function( key, prop ) {
                    var index = prop.idx,
                        startValue = start[ index ],
                        endValue = end[ index ],
                        type = propTypes[ prop.type ] || {};

                    // If null, don't override start value
                    if ( endValue === null ) {
                        return;
                    }

                    // If null - use end
                    if ( startValue === null ) {
                        result[ index ] = endValue;
                    } else {
                        if ( type.mod ) {
                            if ( endValue - startValue > type.mod / 2 ) {
                                startValue += type.mod;
                            } else if ( startValue - endValue > type.mod / 2 ) {
                                startValue -= type.mod;
                            }
                        }
                        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                } );
                return this[ spaceName ]( result );
            },
            blend: function( opaque ) {

                // If we are already opaque - return ourself
                if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                }

                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color( opaque )._rgba;

                return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                } ) );
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                    rgba = jQuery.map( this._rgba, function( v, i ) {
                        return v == null ? ( i > 2 ? 1 : 0 ) : v;
                    } );

                if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                }

                return prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(",
                    hsla = jQuery.map( this.hsla(), function( v, i ) {
                        if ( v == null ) {
                            v = i > 2 ? 1 : 0;
                        }

                        // Catch 1 and 2
                        if ( i && i < 3 ) {
                            v = Math.round( v * 100 ) + "%";
                        }
                        return v;
                    } );

                if ( hsla[ 3 ] === 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function( includeAlpha ) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();

                if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                }

                return "#" + jQuery.map( rgba, function( v ) {

                    // Default to 0 when nulls exist
                    v = ( v || 0 ).toString( 16 );
                    return v.length === 1 ? "0" + v : v;
                } ).join( "" );
            },
            toString: function() {
                return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
            }
        } );
        color.fn.parse.prototype = color.fn;

// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

        function hue2rgb( p, q, h ) {
            h = ( h + 1 ) % 1;
            if ( h * 6 < 1 ) {
                return p + ( q - p ) * h * 6;
            }
            if ( h * 2 < 1 ) {
                return q;
            }
            if ( h * 3 < 2 ) {
                return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
            }
            return p;
        }

        spaces.hsla.to = function( rgba ) {
            if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                return [ null, null, null, rgba[ 3 ] ];
            }
            var r = rgba[ 0 ] / 255,
                g = rgba[ 1 ] / 255,
                b = rgba[ 2 ] / 255,
                a = rgba[ 3 ],
                max = Math.max( r, g, b ),
                min = Math.min( r, g, b ),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;

            if ( min === max ) {
                h = 0;
            } else if ( r === max ) {
                h = ( 60 * ( g - b ) / diff ) + 360;
            } else if ( g === max ) {
                h = ( 60 * ( b - r ) / diff ) + 120;
            } else {
                h = ( 60 * ( r - g ) / diff ) + 240;
            }

            // Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
            // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
            if ( diff === 0 ) {
                s = 0;
            } else if ( l <= 0.5 ) {
                s = diff / add;
            } else {
                s = diff / ( 2 - add );
            }
            return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
        };

        spaces.hsla.from = function( hsla ) {
            if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                return [ null, null, null, hsla[ 3 ] ];
            }
            var h = hsla[ 0 ] / 360,
                s = hsla[ 1 ],
                l = hsla[ 2 ],
                a = hsla[ 3 ],
                q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
                p = 2 * l - q;

            return [
                Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
                Math.round( hue2rgb( p, q, h ) * 255 ),
                Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
                a
            ];
        };

        each( spaces, function( spaceName, space ) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;

            // Makes rgba() and hsla()
            color.fn[ spaceName ] = function( value ) {

                // Generate a cache for this space if it doesn't exist
                if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                }
                if ( value === undefined ) {
                    return this[ cache ].slice();
                }

                var ret,
                    type = jQuery.type( value ),
                    arr = ( type === "array" || type === "object" ) ? value : arguments,
                    local = this[ cache ].slice();

                each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                        val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                } );

                if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                } else {
                    return color( local );
                }
            };

            // Makes red() green() blue() alpha() hue() saturation() lightness()
            each( props, function( key, prop ) {

                // Alpha is included in more than one space
                if ( color.fn[ key ] ) {
                    return;
                }
                color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                        fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                        local = this[ fn ](),
                        cur = local[ prop.idx ],
                        match;

                    if ( vtype === "undefined" ) {
                        return cur;
                    }

                    if ( vtype === "function" ) {
                        value = value.call( this, cur );
                        vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                        return this;
                    }
                    if ( vtype === "string" ) {
                        match = rplusequals.exec( value );
                        if ( match ) {
                            value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                        }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                };
            } );
        } );

// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
        color.hook = function( hook ) {
            var hooks = hook.split( " " );
            each( hooks, function( i, hook ) {
                jQuery.cssHooks[ hook ] = {
                    set: function( elem, value ) {
                        var parsed, curElem,
                            backgroundColor = "";

                        if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
                            ( parsed = stringParse( value ) ) ) ) {
                            value = color( parsed || value );
                            if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while (
                                    ( backgroundColor === "" || backgroundColor === "transparent" ) &&
                                    curElem && curElem.style
                                    ) {
                                    try {
                                        backgroundColor = jQuery.css( curElem, "backgroundColor" );
                                        curElem = curElem.parentNode;
                                    } catch ( e ) {
                                    }
                                }

                                value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                                    backgroundColor :
                                    "_default" );
                            }

                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[ hook ] = value;
                        } catch ( e ) {

                            // Wrapped to prevent IE from throwing errors on "invalid" values like
                            // 'auto' or 'inherit'
                        }
                    }
                };
                jQuery.fx.step[ hook ] = function( fx ) {
                    if ( !fx.colorInit ) {
                        fx.start = color( fx.elem, hook );
                        fx.end = color( fx.end );
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
                };
            } );

        };

        color.hook( stepHooks );

        jQuery.cssHooks.borderColor = {
            expand: function( value ) {
                var expanded = {};

                each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                    expanded[ "border" + part + "Color" ] = value;
                } );
                return expanded;
            }
        };

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
        colors = jQuery.Color.names = {

            // 4.1. Basic color keywords
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",

            // 4.2.3. "transparent" color keyword
            transparent: [ null, null, null, 0 ],

            _default: "#ffffff"
        };

    } )( jQuery );

    /******************************************************************************/
    /****************************** CLASS ANIMATIONS ******************************/
    /******************************************************************************/
    ( function() {

        var classAnimationActions = [ "add", "remove", "toggle" ],
            shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };

        $.each(
            [ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
            function( _, prop ) {
                $.fx.step[ prop ] = function( fx ) {
                    if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
                        jQuery.style( fx.elem, prop, fx.end );
                        fx.setAttr = true;
                    }
                };
            }
        );

        function getElementStyles( elem ) {
            var key, len,
                style = elem.ownerDocument.defaultView ?
                    elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
                    elem.currentStyle,
                styles = {};

            if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
                len = style.length;
                while ( len-- ) {
                    key = style[ len ];
                    if ( typeof style[ key ] === "string" ) {
                        styles[ $.camelCase( key ) ] = style[ key ];
                    }
                }

                // Support: Opera, IE <9
            } else {
                for ( key in style ) {
                    if ( typeof style[ key ] === "string" ) {
                        styles[ key ] = style[ key ];
                    }
                }
            }

            return styles;
        }

        function styleDifference( oldStyle, newStyle ) {
            var diff = {},
                name, value;

            for ( name in newStyle ) {
                value = newStyle[ name ];
                if ( oldStyle[ name ] !== value ) {
                    if ( !shorthandStyles[ name ] ) {
                        if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
                            diff[ name ] = value;
                        }
                    }
                }
            }

            return diff;
        }

// Support: jQuery <1.8
        if ( !$.fn.addBack ) {
            $.fn.addBack = function( selector ) {
                return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter( selector )
                );
            };
        }

        $.effects.animateClass = function( value, duration, easing, callback ) {
            var o = $.speed( duration, easing, callback );

            return this.queue( function() {
                var animated = $( this ),
                    baseClass = animated.attr( "class" ) || "",
                    applyClassChange,
                    allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

                // Map the animated objects to store the original styles.
                allAnimations = allAnimations.map( function() {
                    var el = $( this );
                    return {
                        el: el,
                        start: getElementStyles( this )
                    };
                } );

                // Apply class change
                applyClassChange = function() {
                    $.each( classAnimationActions, function( i, action ) {
                        if ( value[ action ] ) {
                            animated[ action + "Class" ]( value[ action ] );
                        }
                    } );
                };
                applyClassChange();

                // Map all animated objects again - calculate new styles and diff
                allAnimations = allAnimations.map( function() {
                    this.end = getElementStyles( this.el[ 0 ] );
                    this.diff = styleDifference( this.start, this.end );
                    return this;
                } );

                // Apply original class
                animated.attr( "class", baseClass );

                // Map all animated objects again - this time collecting a promise
                allAnimations = allAnimations.map( function() {
                    var styleInfo = this,
                        dfd = $.Deferred(),
                        opts = $.extend( {}, o, {
                            queue: false,
                            complete: function() {
                                dfd.resolve( styleInfo );
                            }
                        } );

                    this.el.animate( this.diff, opts );
                    return dfd.promise();
                } );

                // Once all animations have completed:
                $.when.apply( $, allAnimations.get() ).done( function() {

                    // Set the final class
                    applyClassChange();

                    // For each animated element,
                    // clear all css properties that were animated
                    $.each( arguments, function() {
                        var el = this.el;
                        $.each( this.diff, function( key ) {
                            el.css( key, "" );
                        } );
                    } );

                    // This is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call( animated[ 0 ] );
                } );
            } );
        };

        $.fn.extend( {
            addClass: ( function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return speed ?
                        $.effects.animateClass.call( this,
                            { add: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            } )( $.fn.addClass ),

            removeClass: ( function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return arguments.length > 1 ?
                        $.effects.animateClass.call( this,
                            { remove: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            } )( $.fn.removeClass ),

            toggleClass: ( function( orig ) {
                return function( classNames, force, speed, easing, callback ) {
                    if ( typeof force === "boolean" || force === undefined ) {
                        if ( !speed ) {

                            // Without speed parameter
                            return orig.apply( this, arguments );
                        } else {
                            return $.effects.animateClass.call( this,
                                ( force ? { add: classNames } : { remove: classNames } ),
                                speed, easing, callback );
                        }
                    } else {

                        // Without force parameter
                        return $.effects.animateClass.call( this,
                            { toggle: classNames }, force, speed, easing );
                    }
                };
            } )( $.fn.toggleClass ),

            switchClass: function( remove, add, speed, easing, callback ) {
                return $.effects.animateClass.call( this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback );
            }
        } );

    } )();

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    ( function() {

        if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
            $.expr.filters.animated = ( function( orig ) {
                return function( elem ) {
                    return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
                };
            } )( $.expr.filters.animated );
        }

        if ( $.uiBackCompat !== false ) {
            $.extend( $.effects, {

                // Saves a set of properties in a data storage
                save: function( element, set ) {
                    var i = 0, length = set.length;
                    for ( ; i < length; i++ ) {
                        if ( set[ i ] !== null ) {
                            element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                        }
                    }
                },

                // Restores a set of previously saved properties from a data storage
                restore: function( element, set ) {
                    var val, i = 0, length = set.length;
                    for ( ; i < length; i++ ) {
                        if ( set[ i ] !== null ) {
                            val = element.data( dataSpace + set[ i ] );
                            element.css( set[ i ], val );
                        }
                    }
                },

                setMode: function( el, mode ) {
                    if ( mode === "toggle" ) {
                        mode = el.is( ":hidden" ) ? "show" : "hide";
                    }
                    return mode;
                },

                // Wraps the element around a wrapper that copies position properties
                createWrapper: function( element ) {

                    // If the element is already wrapped, return it
                    if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                        return element.parent();
                    }

                    // Wrap the element
                    var props = {
                            width: element.outerWidth( true ),
                            height: element.outerHeight( true ),
                            "float": element.css( "float" )
                        },
                        wrapper = $( "<div></div>" )
                            .addClass( "ui-effects-wrapper" )
                            .css( {
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            } ),

                        // Store the size in case width/height are defined in % - Fixes #5245
                        size = {
                            width: element.width(),
                            height: element.height()
                        },
                        active = document.activeElement;

                    // Support: Firefox
                    // Firefox incorrectly exposes anonymous content
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                    try {
                        active.id;
                    } catch ( e ) {
                        active = document.body;
                    }

                    element.wrap( wrapper );

                    // Fixes #7595 - Elements lose focus when wrapped.
                    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                        $( active ).trigger( "focus" );
                    }

                    // Hotfix for jQuery 1.4 since some change in wrap() seems to actually
                    // lose the reference to the wrapped element
                    wrapper = element.parent();

                    // Transfer positioning properties to the wrapper
                    if ( element.css( "position" ) === "static" ) {
                        wrapper.css( { position: "relative" } );
                        element.css( { position: "relative" } );
                    } else {
                        $.extend( props, {
                            position: element.css( "position" ),
                            zIndex: element.css( "z-index" )
                        } );
                        $.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
                            props[ pos ] = element.css( pos );
                            if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                                props[ pos ] = "auto";
                            }
                        } );
                        element.css( {
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        } );
                    }
                    element.css( size );

                    return wrapper.css( props ).show();
                },

                removeWrapper: function( element ) {
                    var active = document.activeElement;

                    if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                        element.parent().replaceWith( element );

                        // Fixes #7595 - Elements lose focus when wrapped.
                        if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                            $( active ).trigger( "focus" );
                        }
                    }

                    return element;
                }
            } );
        }

        $.extend( $.effects, {
            version: "1.12.1",

            define: function( name, mode, effect ) {
                if ( !effect ) {
                    effect = mode;
                    mode = "effect";
                }

                $.effects.effect[ name ] = effect;
                $.effects.effect[ name ].mode = mode;

                return effect;
            },

            scaledDimensions: function( element, percent, direction ) {
                if ( percent === 0 ) {
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                }

                var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
                    y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

                return {
                    height: element.height() * y,
                    width: element.width() * x,
                    outerHeight: element.outerHeight() * y,
                    outerWidth: element.outerWidth() * x
                };

            },

            clipToBox: function( animation ) {
                return {
                    width: animation.clip.right - animation.clip.left,
                    height: animation.clip.bottom - animation.clip.top,
                    left: animation.clip.left,
                    top: animation.clip.top
                };
            },

            // Injects recently queued functions to be first in line (after "inprogress")
            unshift: function( element, queueLength, count ) {
                var queue = element.queue();

                if ( queueLength > 1 ) {
                    queue.splice.apply( queue,
                        [ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
                }
                element.dequeue();
            },

            saveStyle: function( element ) {
                element.data( dataSpaceStyle, element[ 0 ].style.cssText );
            },

            restoreStyle: function( element ) {
                element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
                element.removeData( dataSpaceStyle );
            },

            mode: function( element, mode ) {
                var hidden = element.is( ":hidden" );

                if ( mode === "toggle" ) {
                    mode = hidden ? "show" : "hide";
                }
                if ( hidden ? mode === "hide" : mode === "show" ) {
                    mode = "none";
                }
                return mode;
            },

            // Translates a [top,left] array into a baseline value
            getBaseline: function( origin, original ) {
                var y, x;

                switch ( origin[ 0 ] ) {
                    case "top":
                        y = 0;
                        break;
                    case "middle":
                        y = 0.5;
                        break;
                    case "bottom":
                        y = 1;
                        break;
                    default:
                        y = origin[ 0 ] / original.height;
                }

                switch ( origin[ 1 ] ) {
                    case "left":
                        x = 0;
                        break;
                    case "center":
                        x = 0.5;
                        break;
                    case "right":
                        x = 1;
                        break;
                    default:
                        x = origin[ 1 ] / original.width;
                }

                return {
                    x: x,
                    y: y
                };
            },

            // Creates a placeholder element so that the original element can be made absolute
            createPlaceholder: function( element ) {
                var placeholder,
                    cssPosition = element.css( "position" ),
                    position = element.position();

                // Lock in margins first to account for form elements, which
                // will change margin if you explicitly set height
                // see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
                // Support: Safari
                element.css( {
                    marginTop: element.css( "marginTop" ),
                    marginBottom: element.css( "marginBottom" ),
                    marginLeft: element.css( "marginLeft" ),
                    marginRight: element.css( "marginRight" )
                } )
                    .outerWidth( element.outerWidth() )
                    .outerHeight( element.outerHeight() );

                if ( /^(static|relative)/.test( cssPosition ) ) {
                    cssPosition = "absolute";

                    placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

                        // Convert inline to inline block to account for inline elements
                        // that turn to inline block based on content (like img)
                        display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
                            "inline-block" :
                            "block",
                        visibility: "hidden",

                        // Margins need to be set to account for margin collapse
                        marginTop: element.css( "marginTop" ),
                        marginBottom: element.css( "marginBottom" ),
                        marginLeft: element.css( "marginLeft" ),
                        marginRight: element.css( "marginRight" ),
                        "float": element.css( "float" )
                    } )
                        .outerWidth( element.outerWidth() )
                        .outerHeight( element.outerHeight() )
                        .addClass( "ui-effects-placeholder" );

                    element.data( dataSpace + "placeholder", placeholder );
                }

                element.css( {
                    position: cssPosition,
                    left: position.left,
                    top: position.top
                } );

                return placeholder;
            },

            removePlaceholder: function( element ) {
                var dataKey = dataSpace + "placeholder",
                    placeholder = element.data( dataKey );

                if ( placeholder ) {
                    placeholder.remove();
                    element.removeData( dataKey );
                }
            },

            // Removes a placeholder if it exists and restores
            // properties that were modified during placeholder creation
            cleanUp: function( element ) {
                $.effects.restoreStyle( element );
                $.effects.removePlaceholder( element );
            },

            setTransition: function( element, list, factor, value ) {
                value = value || {};
                $.each( list, function( i, x ) {
                    var unit = element.cssUnit( x );
                    if ( unit[ 0 ] > 0 ) {
                        value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
                    }
                } );
                return value;
            }
        } );

// Return an effect options object for the given parameters:
        function _normalizeArguments( effect, options, speed, callback ) {

            // Allow passing all options as the first parameter
            if ( $.isPlainObject( effect ) ) {
                options = effect;
                effect = effect.effect;
            }

            // Convert to an object
            effect = { effect: effect };

            // Catch (effect, null, ...)
            if ( options == null ) {
                options = {};
            }

            // Catch (effect, callback)
            if ( $.isFunction( options ) ) {
                callback = options;
                speed = null;
                options = {};
            }

            // Catch (effect, speed, ?)
            if ( typeof options === "number" || $.fx.speeds[ options ] ) {
                callback = speed;
                speed = options;
                options = {};
            }

            // Catch (effect, options, callback)
            if ( $.isFunction( speed ) ) {
                callback = speed;
                speed = null;
            }

            // Add options to effect
            if ( options ) {
                $.extend( effect, options );
            }

            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 :
                typeof speed === "number" ? speed :
                    speed in $.fx.speeds ? $.fx.speeds[ speed ] :
                        $.fx.speeds._default;

            effect.complete = callback || options.complete;

            return effect;
        }

        function standardAnimationOption( option ) {

            // Valid standard speeds (nothing, number, named speed)
            if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
                return true;
            }

            // Invalid strings - treat as "normal" speed
            if ( typeof option === "string" && !$.effects.effect[ option ] ) {
                return true;
            }

            // Complete callback
            if ( $.isFunction( option ) ) {
                return true;
            }

            // Options hash (but not naming an effect)
            if ( typeof option === "object" && !option.effect ) {
                return true;
            }

            // Didn't match any standard API
            return false;
        }

        $.fn.extend( {
            effect: function( /* effect, options, speed, callback */ ) {
                var args = _normalizeArguments.apply( this, arguments ),
                    effectMethod = $.effects.effect[ args.effect ],
                    defaultMode = effectMethod.mode,
                    queue = args.queue,
                    queueName = queue || "fx",
                    complete = args.complete,
                    mode = args.mode,
                    modes = [],
                    prefilter = function( next ) {
                        var el = $( this ),
                            normalizedMode = $.effects.mode( el, mode ) || defaultMode;

                        // Sentinel for duck-punching the :animated psuedo-selector
                        el.data( dataSpaceAnimated, true );

                        // Save effect mode for later use,
                        // we can't just call $.effects.mode again later,
                        // as the .show() below destroys the initial state
                        modes.push( normalizedMode );

                        // See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
                        if ( defaultMode && ( normalizedMode === "show" ||
                            ( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
                            el.show();
                        }

                        if ( !defaultMode || normalizedMode !== "none" ) {
                            $.effects.saveStyle( el );
                        }

                        if ( $.isFunction( next ) ) {
                            next();
                        }
                    };

                if ( $.fx.off || !effectMethod ) {

                    // Delegate to the original method (e.g., .show()) if possible
                    if ( mode ) {
                        return this[ mode ]( args.duration, complete );
                    } else {
                        return this.each( function() {
                            if ( complete ) {
                                complete.call( this );
                            }
                        } );
                    }
                }

                function run( next ) {
                    var elem = $( this );

                    function cleanup() {
                        elem.removeData( dataSpaceAnimated );

                        $.effects.cleanUp( elem );

                        if ( args.mode === "hide" ) {
                            elem.hide();
                        }

                        done();
                    }

                    function done() {
                        if ( $.isFunction( complete ) ) {
                            complete.call( elem[ 0 ] );
                        }

                        if ( $.isFunction( next ) ) {
                            next();
                        }
                    }

                    // Override mode option on a per element basis,
                    // as toggle can be either show or hide depending on element state
                    args.mode = modes.shift();

                    if ( $.uiBackCompat !== false && !defaultMode ) {
                        if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

                            // Call the core method to track "olddisplay" properly
                            elem[ mode ]();
                            done();
                        } else {
                            effectMethod.call( elem[ 0 ], args, done );
                        }
                    } else {
                        if ( args.mode === "none" ) {

                            // Call the core method to track "olddisplay" properly
                            elem[ mode ]();
                            done();
                        } else {
                            effectMethod.call( elem[ 0 ], args, cleanup );
                        }
                    }
                }

                // Run prefilter on all elements first to ensure that
                // any showing or hiding happens before placeholder creation,
                // which ensures that any layout changes are correctly captured.
                return queue === false ?
                    this.each( prefilter ).each( run ) :
                    this.queue( queueName, prefilter ).queue( queueName, run );
            },

            show: ( function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "show";
                        return this.effect.call( this, args );
                    }
                };
            } )( $.fn.show ),

            hide: ( function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "hide";
                        return this.effect.call( this, args );
                    }
                };
            } )( $.fn.hide ),

            toggle: ( function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "toggle";
                        return this.effect.call( this, args );
                    }
                };
            } )( $.fn.toggle ),

            cssUnit: function( key ) {
                var style = this.css( key ),
                    val = [];

                $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
                    if ( style.indexOf( unit ) > 0 ) {
                        val = [ parseFloat( style ), unit ];
                    }
                } );
                return val;
            },

            cssClip: function( clipObj ) {
                if ( clipObj ) {
                    return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
                        clipObj.bottom + "px " + clipObj.left + "px)" );
                }
                return parseClip( this.css( "clip" ), this );
            },

            transfer: function( options, done ) {
                var element = $( this ),
                    target = $( options.to ),
                    targetFixed = target.css( "position" ) === "fixed",
                    body = $( "body" ),
                    fixTop = targetFixed ? body.scrollTop() : 0,
                    fixLeft = targetFixed ? body.scrollLeft() : 0,
                    endPosition = target.offset(),
                    animation = {
                        top: endPosition.top - fixTop,
                        left: endPosition.left - fixLeft,
                        height: target.innerHeight(),
                        width: target.innerWidth()
                    },
                    startPosition = element.offset(),
                    transfer = $( "<div class='ui-effects-transfer'></div>" )
                        .appendTo( "body" )
                        .addClass( options.className )
                        .css( {
                            top: startPosition.top - fixTop,
                            left: startPosition.left - fixLeft,
                            height: element.innerHeight(),
                            width: element.innerWidth(),
                            position: targetFixed ? "fixed" : "absolute"
                        } )
                        .animate( animation, options.duration, options.easing, function() {
                            transfer.remove();
                            if ( $.isFunction( done ) ) {
                                done();
                            }
                        } );
            }
        } );

        function parseClip( str, element ) {
            var outerWidth = element.outerWidth(),
                outerHeight = element.outerHeight(),
                clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

            return {
                top: parseFloat( values[ 1 ] ) || 0,
                right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
                bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
                left: parseFloat( values[ 4 ] ) || 0
            };
        }

        $.fx.step.clip = function( fx ) {
            if ( !fx.clipInit ) {
                fx.start = $( fx.elem ).cssClip();
                if ( typeof fx.end === "string" ) {
                    fx.end = parseClip( fx.end, fx.elem );
                }
                fx.clipInit = true;
            }

            $( fx.elem ).cssClip( {
                top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
                right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
                bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
                left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
            } );
        };

    } )();

    /******************************************************************************/
    /*********************************** EASING ***********************************/
    /******************************************************************************/

    ( function() {

// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var baseEasings = {};

        $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
            baseEasings[ name ] = function( p ) {
                return Math.pow( p, i + 2 );
            };
        } );

        $.extend( baseEasings, {
            Sine: function( p ) {
                return 1 - Math.cos( p * Math.PI / 2 );
            },
            Circ: function( p ) {
                return 1 - Math.sqrt( 1 - p * p );
            },
            Elastic: function( p ) {
                return p === 0 || p === 1 ? p :
                    -Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
            },
            Back: function( p ) {
                return p * p * ( 3 * p - 2 );
            },
            Bounce: function( p ) {
                var pow2,
                    bounce = 4;

                while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
                return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
            }
        } );

        $.each( baseEasings, function( name, easeIn ) {
            $.easing[ "easeIn" + name ] = easeIn;
            $.easing[ "easeOut" + name ] = function( p ) {
                return 1 - easeIn( 1 - p );
            };
            $.easing[ "easeInOut" + name ] = function( p ) {
                return p < 0.5 ?
                    easeIn( p * 2 ) / 2 :
                    1 - easeIn( p * -2 + 2 ) / 2;
            };
        } );

    } )();

    var effect = $.effects;


    /*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Blind Effect
//>>group: Effects
//>>description: Blinds the element.
//>>docs: http://api.jqueryui.com/blind-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectBlind = $.effects.define( "blind", "hide", function( options, done ) {
        var map = {
                up: [ "bottom", "top" ],
                vertical: [ "bottom", "top" ],
                down: [ "top", "bottom" ],
                left: [ "right", "left" ],
                horizontal: [ "right", "left" ],
                right: [ "left", "right" ]
            },
            element = $( this ),
            direction = options.direction || "up",
            start = element.cssClip(),
            animate = { clip: $.extend( {}, start ) },
            placeholder = $.effects.createPlaceholder( element );

        animate.clip[ map[ direction ][ 0 ] ] = animate.clip[ map[ direction ][ 1 ] ];

        if ( options.mode === "show" ) {
            element.cssClip( animate.clip );
            if ( placeholder ) {
                placeholder.css( $.effects.clipToBox( animate ) );
            }

            animate.clip = start;
        }

        if ( placeholder ) {
            placeholder.animate( $.effects.clipToBox( animate ), options.duration, options.easing );
        }

        element.animate( animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        } );
    } );


    /*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Bounce Effect
//>>group: Effects
//>>description: Bounces an element horizontally or vertically n times.
//>>docs: http://api.jqueryui.com/bounce-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectBounce = $.effects.define( "bounce", function( options, done ) {
        var upAnim, downAnim, refValue,
            element = $( this ),

            // Defaults:
            mode = options.mode,
            hide = mode === "hide",
            show = mode === "show",
            direction = options.direction || "up",
            distance = options.distance,
            times = options.times || 5,

            // Number of internal animations
            anims = times * 2 + ( show || hide ? 1 : 0 ),
            speed = options.duration / anims,
            easing = options.easing,

            // Utility:
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ),
            i = 0,

            queuelen = element.queue().length;

        $.effects.createPlaceholder( element );

        refValue = element.css( ref );

        // Default distance for the BIGGEST bounce is the outer Distance / 3
        if ( !distance ) {
            distance = element[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
        }

        if ( show ) {
            downAnim = { opacity: 1 };
            downAnim[ ref ] = refValue;

            // If we are showing, force opacity 0 and set the initial position
            // then do the "first" animation
            element
                .css( "opacity", 0 )
                .css( ref, motion ? -distance * 2 : distance * 2 )
                .animate( downAnim, speed, easing );
        }

        // Start at the smallest distance if we are hiding
        if ( hide ) {
            distance = distance / Math.pow( 2, times - 1 );
        }

        downAnim = {};
        downAnim[ ref ] = refValue;

        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
        for ( ; i < times; i++ ) {
            upAnim = {};
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            element
                .animate( upAnim, speed, easing )
                .animate( downAnim, speed, easing );

            distance = hide ? distance * 2 : distance / 2;
        }

        // Last Bounce when Hiding
        if ( hide ) {
            upAnim = { opacity: 0 };
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            element.animate( upAnim, speed, easing );
        }

        element.queue( done );

        $.effects.unshift( element, queuelen, anims + 1 );
    } );


    /*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Clip Effect
//>>group: Effects
//>>description: Clips the element on and off like an old TV.
//>>docs: http://api.jqueryui.com/clip-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectClip = $.effects.define( "clip", "hide", function( options, done ) {
        var start,
            animate = {},
            element = $( this ),
            direction = options.direction || "vertical",
            both = direction === "both",
            horizontal = both || direction === "horizontal",
            vertical = both || direction === "vertical";

        start = element.cssClip();
        animate.clip = {
            top: vertical ? ( start.bottom - start.top ) / 2 : start.top,
            right: horizontal ? ( start.right - start.left ) / 2 : start.right,
            bottom: vertical ? ( start.bottom - start.top ) / 2 : start.bottom,
            left: horizontal ? ( start.right - start.left ) / 2 : start.left
        };

        $.effects.createPlaceholder( element );

        if ( options.mode === "show" ) {
            element.cssClip( animate.clip );
            animate.clip = start;
        }

        element.animate( animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        } );

    } );


    /*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Drop Effect
//>>group: Effects
//>>description: Moves an element in one direction and hides it at the same time.
//>>docs: http://api.jqueryui.com/drop-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectDrop = $.effects.define( "drop", "hide", function( options, done ) {

        var distance,
            element = $( this ),
            mode = options.mode,
            show = mode === "show",
            direction = options.direction || "left",
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ) ? "-=" : "+=",
            oppositeMotion = ( motion === "+=" ) ? "-=" : "+=",
            animation = {
                opacity: 0
            };

        $.effects.createPlaceholder( element );

        distance = options.distance ||
            element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

        animation[ ref ] = motion + distance;

        if ( show ) {
            element.css( animation );

            animation[ ref ] = oppositeMotion + distance;
            animation.opacity = 1;
        }

        // Animate
        element.animate( animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        } );
    } );


    /*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Explode Effect
//>>group: Effects
// jscs:disable maximumLineLength
//>>description: Explodes an element in all directions into n pieces. Implodes an element to its original wholeness.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/explode-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectExplode = $.effects.define( "explode", "hide", function( options, done ) {

        var i, j, left, top, mx, my,
            rows = options.pieces ? Math.round( Math.sqrt( options.pieces ) ) : 3,
            cells = rows,
            element = $( this ),
            mode = options.mode,
            show = mode === "show",

            // Show and then visibility:hidden the element before calculating offset
            offset = element.show().css( "visibility", "hidden" ).offset(),

            // Width and height of a piece
            width = Math.ceil( element.outerWidth() / cells ),
            height = Math.ceil( element.outerHeight() / rows ),
            pieces = [];

        // Children animate complete:
        function childComplete() {
            pieces.push( this );
            if ( pieces.length === rows * cells ) {
                animComplete();
            }
        }

        // Clone the element for each row and cell.
        for ( i = 0; i < rows; i++ ) { // ===>
            top = offset.top + i * height;
            my = i - ( rows - 1 ) / 2;

            for ( j = 0; j < cells; j++ ) { // |||
                left = offset.left + j * width;
                mx = j - ( cells - 1 ) / 2;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                element
                    .clone()
                    .appendTo( "body" )
                    .wrap( "<div></div>" )
                    .css( {
                        position: "absolute",
                        visibility: "visible",
                        left: -j * width,
                        top: -i * height
                    } )

                    // Select the wrapper - make it overflow: hidden and absolute positioned based on
                    // where the original was located +left and +top equal to the size of pieces
                    .parent()
                    .addClass( "ui-effects-explode" )
                    .css( {
                        position: "absolute",
                        overflow: "hidden",
                        width: width,
                        height: height,
                        left: left + ( show ? mx * width : 0 ),
                        top: top + ( show ? my * height : 0 ),
                        opacity: show ? 0 : 1
                    } )
                    .animate( {
                        left: left + ( show ? 0 : mx * width ),
                        top: top + ( show ? 0 : my * height ),
                        opacity: show ? 1 : 0
                    }, options.duration || 500, options.easing, childComplete );
            }
        }

        function animComplete() {
            element.css( {
                visibility: "visible"
            } );
            $( pieces ).remove();
            done();
        }
    } );


    /*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Fade Effect
//>>group: Effects
//>>description: Fades the element.
//>>docs: http://api.jqueryui.com/fade-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectFade = $.effects.define( "fade", "toggle", function( options, done ) {
        var show = options.mode === "show";

        $( this )
            .css( "opacity", show ? 0 : 1 )
            .animate( {
                opacity: show ? 1 : 0
            }, {
                queue: false,
                duration: options.duration,
                easing: options.easing,
                complete: done
            } );
    } );


    /*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Fold Effect
//>>group: Effects
//>>description: Folds an element first horizontally and then vertically.
//>>docs: http://api.jqueryui.com/fold-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectFold = $.effects.define( "fold", "hide", function( options, done ) {

        // Create element
        var element = $( this ),
            mode = options.mode,
            show = mode === "show",
            hide = mode === "hide",
            size = options.size || 15,
            percent = /([0-9]+)%/.exec( size ),
            horizFirst = !!options.horizFirst,
            ref = horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ],
            duration = options.duration / 2,

            placeholder = $.effects.createPlaceholder( element ),

            start = element.cssClip(),
            animation1 = { clip: $.extend( {}, start ) },
            animation2 = { clip: $.extend( {}, start ) },

            distance = [ start[ ref[ 0 ] ], start[ ref[ 1 ] ] ],

            queuelen = element.queue().length;

        if ( percent ) {
            size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
        }
        animation1.clip[ ref[ 0 ] ] = size;
        animation2.clip[ ref[ 0 ] ] = size;
        animation2.clip[ ref[ 1 ] ] = 0;

        if ( show ) {
            element.cssClip( animation2.clip );
            if ( placeholder ) {
                placeholder.css( $.effects.clipToBox( animation2 ) );
            }

            animation2.clip = start;
        }

        // Animate
        element
            .queue( function( next ) {
                if ( placeholder ) {
                    placeholder
                        .animate( $.effects.clipToBox( animation1 ), duration, options.easing )
                        .animate( $.effects.clipToBox( animation2 ), duration, options.easing );
                }

                next();
            } )
            .animate( animation1, duration, options.easing )
            .animate( animation2, duration, options.easing )
            .queue( done );

        $.effects.unshift( element, queuelen, 4 );
    } );


    /*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Highlight Effect
//>>group: Effects
//>>description: Highlights the background of an element in a defined color for a custom duration.
//>>docs: http://api.jqueryui.com/highlight-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectHighlight = $.effects.define( "highlight", "show", function( options, done ) {
        var element = $( this ),
            animation = {
                backgroundColor: element.css( "backgroundColor" )
            };

        if ( options.mode === "hide" ) {
            animation.opacity = 0;
        }

        $.effects.saveStyle( element );

        element
            .css( {
                backgroundImage: "none",
                backgroundColor: options.color || "#ffff99"
            } )
            .animate( animation, {
                queue: false,
                duration: options.duration,
                easing: options.easing,
                complete: done
            } );
    } );


    /*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Size Effect
//>>group: Effects
//>>description: Resize an element to a specified width and height.
//>>docs: http://api.jqueryui.com/size-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectSize = $.effects.define( "size", function( options, done ) {

        // Create element
        var baseline, factor, temp,
            element = $( this ),

            // Copy for children
            cProps = [ "fontSize" ],
            vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
            hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

            // Set options
            mode = options.mode,
            restore = mode !== "effect",
            scale = options.scale || "both",
            origin = options.origin || [ "middle", "center" ],
            position = element.css( "position" ),
            pos = element.position(),
            original = $.effects.scaledDimensions( element ),
            from = options.from || original,
            to = options.to || $.effects.scaledDimensions( element, 0 );

        $.effects.createPlaceholder( element );

        if ( mode === "show" ) {
            temp = from;
            from = to;
            to = temp;
        }

        // Set scaling factor
        factor = {
            from: {
                y: from.height / original.height,
                x: from.width / original.width
            },
            to: {
                y: to.height / original.height,
                x: to.width / original.width
            }
        };

        // Scale the css box
        if ( scale === "box" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                from = $.effects.setTransition( element, vProps, factor.from.y, from );
                to = $.effects.setTransition( element, vProps, factor.to.y, to );
            }

            // Horizontal props scaling
            if ( factor.from.x !== factor.to.x ) {
                from = $.effects.setTransition( element, hProps, factor.from.x, from );
                to = $.effects.setTransition( element, hProps, factor.to.x, to );
            }
        }

        // Scale the content
        if ( scale === "content" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                from = $.effects.setTransition( element, cProps, factor.from.y, from );
                to = $.effects.setTransition( element, cProps, factor.to.y, to );
            }
        }

        // Adjust the position properties based on the provided origin points
        if ( origin ) {
            baseline = $.effects.getBaseline( origin, original );
            from.top = ( original.outerHeight - from.outerHeight ) * baseline.y + pos.top;
            from.left = ( original.outerWidth - from.outerWidth ) * baseline.x + pos.left;
            to.top = ( original.outerHeight - to.outerHeight ) * baseline.y + pos.top;
            to.left = ( original.outerWidth - to.outerWidth ) * baseline.x + pos.left;
        }
        element.css( from );

        // Animate the children if desired
        if ( scale === "content" || scale === "both" ) {

            vProps = vProps.concat( [ "marginTop", "marginBottom" ] ).concat( cProps );
            hProps = hProps.concat( [ "marginLeft", "marginRight" ] );

            // Only animate children with width attributes specified
            // TODO: is this right? should we include anything with css width specified as well
            element.find( "*[width]" ).each( function() {
                var child = $( this ),
                    childOriginal = $.effects.scaledDimensions( child ),
                    childFrom = {
                        height: childOriginal.height * factor.from.y,
                        width: childOriginal.width * factor.from.x,
                        outerHeight: childOriginal.outerHeight * factor.from.y,
                        outerWidth: childOriginal.outerWidth * factor.from.x
                    },
                    childTo = {
                        height: childOriginal.height * factor.to.y,
                        width: childOriginal.width * factor.to.x,
                        outerHeight: childOriginal.height * factor.to.y,
                        outerWidth: childOriginal.width * factor.to.x
                    };

                // Vertical props scaling
                if ( factor.from.y !== factor.to.y ) {
                    childFrom = $.effects.setTransition( child, vProps, factor.from.y, childFrom );
                    childTo = $.effects.setTransition( child, vProps, factor.to.y, childTo );
                }

                // Horizontal props scaling
                if ( factor.from.x !== factor.to.x ) {
                    childFrom = $.effects.setTransition( child, hProps, factor.from.x, childFrom );
                    childTo = $.effects.setTransition( child, hProps, factor.to.x, childTo );
                }

                if ( restore ) {
                    $.effects.saveStyle( child );
                }

                // Animate children
                child.css( childFrom );
                child.animate( childTo, options.duration, options.easing, function() {

                    // Restore children
                    if ( restore ) {
                        $.effects.restoreStyle( child );
                    }
                } );
            } );
        }

        // Animate
        element.animate( to, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: function() {

                var offset = element.offset();

                if ( to.opacity === 0 ) {
                    element.css( "opacity", from.opacity );
                }

                if ( !restore ) {
                    element
                        .css( "position", position === "static" ? "relative" : position )
                        .offset( offset );

                    // Need to save style here so that automatic style restoration
                    // doesn't restore to the original styles from before the animation.
                    $.effects.saveStyle( element );
                }

                done();
            }
        } );

    } );


    /*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Scale Effect
//>>group: Effects
//>>description: Grows or shrinks an element and its content.
//>>docs: http://api.jqueryui.com/scale-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectScale = $.effects.define( "scale", function( options, done ) {

        // Create element
        var el = $( this ),
            mode = options.mode,
            percent = parseInt( options.percent, 10 ) ||
                ( parseInt( options.percent, 10 ) === 0 ? 0 : ( mode !== "effect" ? 0 : 100 ) ),

            newOptions = $.extend( true, {
                from: $.effects.scaledDimensions( el ),
                to: $.effects.scaledDimensions( el, percent, options.direction || "both" ),
                origin: options.origin || [ "middle", "center" ]
            }, options );

        // Fade option to support puff
        if ( options.fade ) {
            newOptions.from.opacity = 1;
            newOptions.to.opacity = 0;
        }

        $.effects.effect.size.call( this, newOptions, done );
    } );


    /*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Puff Effect
//>>group: Effects
//>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
//>>docs: http://api.jqueryui.com/puff-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectPuff = $.effects.define( "puff", "hide", function( options, done ) {
        var newOptions = $.extend( true, {}, options, {
            fade: true,
            percent: parseInt( options.percent, 10 ) || 150
        } );

        $.effects.effect.scale.call( this, newOptions, done );
    } );


    /*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Pulsate Effect
//>>group: Effects
//>>description: Pulsates an element n times by changing the opacity to zero and back.
//>>docs: http://api.jqueryui.com/pulsate-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectPulsate = $.effects.define( "pulsate", "show", function( options, done ) {
        var element = $( this ),
            mode = options.mode,
            show = mode === "show",
            hide = mode === "hide",
            showhide = show || hide,

            // Showing or hiding leaves off the "last" animation
            anims = ( ( options.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
            duration = options.duration / anims,
            animateTo = 0,
            i = 1,
            queuelen = element.queue().length;

        if ( show || !element.is( ":visible" ) ) {
            element.css( "opacity", 0 ).show();
            animateTo = 1;
        }

        // Anims - 1 opacity "toggles"
        for ( ; i < anims; i++ ) {
            element.animate( { opacity: animateTo }, duration, options.easing );
            animateTo = 1 - animateTo;
        }

        element.animate( { opacity: animateTo }, duration, options.easing );

        element.queue( done );

        $.effects.unshift( element, queuelen, anims + 1 );
    } );


    /*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Shake Effect
//>>group: Effects
//>>description: Shakes an element horizontally or vertically n times.
//>>docs: http://api.jqueryui.com/shake-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectShake = $.effects.define( "shake", function( options, done ) {

        var i = 1,
            element = $( this ),
            direction = options.direction || "left",
            distance = options.distance || 20,
            times = options.times || 3,
            anims = times * 2 + 1,
            speed = Math.round( options.duration / anims ),
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            positiveMotion = ( direction === "up" || direction === "left" ),
            animation = {},
            animation1 = {},
            animation2 = {},

            queuelen = element.queue().length;

        $.effects.createPlaceholder( element );

        // Animation
        animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
        animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
        animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

        // Animate
        element.animate( animation, speed, options.easing );

        // Shakes
        for ( ; i < times; i++ ) {
            element
                .animate( animation1, speed, options.easing )
                .animate( animation2, speed, options.easing );
        }

        element
            .animate( animation1, speed, options.easing )
            .animate( animation, speed / 2, options.easing )
            .queue( done );

        $.effects.unshift( element, queuelen, anims + 1 );
    } );


    /*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slide Effect
//>>group: Effects
//>>description: Slides an element in and out of the viewport.
//>>docs: http://api.jqueryui.com/slide-effect/
//>>demos: http://jqueryui.com/effect/



    var effectsEffectSlide = $.effects.define( "slide", "show", function( options, done ) {
        var startClip, startRef,
            element = $( this ),
            map = {
                up: [ "bottom", "top" ],
                down: [ "top", "bottom" ],
                left: [ "right", "left" ],
                right: [ "left", "right" ]
            },
            mode = options.mode,
            direction = options.direction || "left",
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            positiveMotion = ( direction === "up" || direction === "left" ),
            distance = options.distance ||
                element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ),
            animation = {};

        $.effects.createPlaceholder( element );

        startClip = element.cssClip();
        startRef = element.position()[ ref ];

        // Define hide animation
        animation[ ref ] = ( positiveMotion ? -1 : 1 ) * distance + startRef;
        animation.clip = element.cssClip();
        animation.clip[ map[ direction ][ 1 ] ] = animation.clip[ map[ direction ][ 0 ] ];

        // Reverse the animation if we're showing
        if ( mode === "show" ) {
            element.cssClip( animation.clip );
            element.css( ref, animation[ ref ] );
            animation.clip = startClip;
            animation[ ref ] = startRef;
        }

        // Actually animate
        element.animate( animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        } );
    } );


    /*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Transfer Effect
//>>group: Effects
//>>description: Displays a transfer effect from one element to another.
//>>docs: http://api.jqueryui.com/transfer-effect/
//>>demos: http://jqueryui.com/effect/



    var effect;
    if ( $.uiBackCompat !== false ) {
        effect = $.effects.define( "transfer", function( options, done ) {
            $( this ).transfer( options, done );
        } );
    }
    var effectsEffectTransfer = effect;


    /*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/



// Selectors
    $.ui.focusable = function( element, hasTabindex ) {
        var map, mapName, img, focusableIfVisible, fieldset,
            nodeName = element.nodeName.toLowerCase();

        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap='#" + mapName + "']" );
            return img.length > 0 && img.is( ":visible" );
        }

        if ( /^(input|select|textarea|button|object)$/.test( nodeName ) ) {
            focusableIfVisible = !element.disabled;

            if ( focusableIfVisible ) {

                // Form controls within a disabled fieldset are disabled.
                // However, controls within the fieldset's legend do not get disabled.
                // Since controls generally aren't placed inside legends, we skip
                // this portion of the check.
                fieldset = $( element ).closest( "fieldset" )[ 0 ];
                if ( fieldset ) {
                    focusableIfVisible = !fieldset.disabled;
                }
            }
        } else if ( "a" === nodeName ) {
            focusableIfVisible = element.href || hasTabindex;
        } else {
            focusableIfVisible = hasTabindex;
        }

        return focusableIfVisible && $( element ).is( ":visible" ) && visible( $( element ) );
    };

// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
    function visible( element ) {
        var visibility = element.css( "visibility" );
        while ( visibility === "inherit" ) {
            element = element.parent();
            visibility = element.css( "visibility" );
        }
        return visibility !== "hidden";
    }

    $.extend( $.expr[ ":" ], {
        focusable: function( element ) {
            return $.ui.focusable( element, $.attr( element, "tabindex" ) != null );
        }
    } );

    var focusable = $.ui.focusable;




// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
    var form = $.fn.form = function() {
        return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
    };


    /*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Form Reset Mixin
//>>group: Core
//>>description: Refresh input widgets when their form is reset
//>>docs: http://api.jqueryui.com/form-reset-mixin/



    var formResetMixin = $.ui.formResetMixin = {
        _formResetHandler: function() {
            var form = $( this );

            // Wait for the form reset to actually happen before refreshing
            setTimeout( function() {
                var instances = form.data( "ui-form-reset-instances" );
                $.each( instances, function() {
                    this.refresh();
                } );
            } );
        },

        _bindFormResetHandler: function() {
            this.form = this.element.form();
            if ( !this.form.length ) {
                return;
            }

            var instances = this.form.data( "ui-form-reset-instances" ) || [];
            if ( !instances.length ) {

                // We don't use _on() here because we use a single event handler per form
                this.form.on( "reset.ui-form-reset", this._formResetHandler );
            }
            instances.push( this );
            this.form.data( "ui-form-reset-instances", instances );
        },

        _unbindFormResetHandler: function() {
            if ( !this.form.length ) {
                return;
            }

            var instances = this.form.data( "ui-form-reset-instances" );
            instances.splice( $.inArray( this, instances ), 1 );
            if ( instances.length ) {
                this.form.data( "ui-form-reset-instances", instances );
            } else {
                this.form
                    .removeData( "ui-form-reset-instances" )
                    .off( "reset.ui-form-reset" );
            }
        }
    };


    /*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */

//>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core



// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
    if ( $.fn.jquery.substring( 0, 3 ) === "1.7" ) {

        // Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
        // Unlike jQuery Core 1.8+, these only support numeric values to set the
        // dimensions in pixels
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                } );
                return size;
            }

            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }

                return this.each( function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                } );
            };

            $.fn[ "outer" + name ] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }

                return this.each( function() {
                    $( this ).css( type, reduce( this, size, true, margin ) + "px" );
                } );
            };
        } );

        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
                this.prevObject : this.prevObject.filter( selector )
            );
        };
    }

    ;
    /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };




// Internal use only
    var escapeSelector = $.ui.escapeSelector = ( function() {
        var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function( selector ) {
            return selector.replace( selectorEscape, "\\$1" );
        };
    } )();


    /*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/



    var labels = $.fn.labels = function() {
        var ancestor, selector, id, labels, ancestors;

        // Check control.labels first
        if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
            return this.pushStack( this[ 0 ].labels );
        }

        // Support: IE <= 11, FF <= 37, Android <= 2.3 only
        // Above browsers do not support control.labels. Everything below is to support them
        // as well as document fragments. control.labels does not work on document fragments
        labels = this.eq( 0 ).parents( "label" );

        // Look for the label based on the id
        id = this.attr( "id" );
        if ( id ) {

            // We don't search against the document in case the element
            // is disconnected from the DOM
            ancestor = this.eq( 0 ).parents().last();

            // Get a full set of top level ancestors
            ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

            // Create a selector for the label based on the id
            selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

            labels = labels.add( ancestors.find( selector ).addBack( selector ) );

        }

        // Return whatever we have found for labels
        return this.pushStack( labels );
    };


    /*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



    var scrollParent = $.fn.scrollParent = function( includeHidden ) {
        var position = this.css( "position" ),
            excludeStaticParent = position === "absolute",
            overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            scrollParent = this.parents().filter( function() {
                var parent = $( this );
                if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
                    return false;
                }
                return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
                    parent.css( "overflow-x" ) );
            } ).eq( 0 );

        return position === "fixed" || !scrollParent.length ?
            $( this[ 0 ].ownerDocument || document ) :
            scrollParent;
    };


    /*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/



    var tabbable = $.extend( $.expr[ ":" ], {
        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
                hasTabindex = tabIndex != null;
            return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
        }
    } );


    /*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



    var uniqueId = $.fn.extend( {
        uniqueId: ( function() {
            var uuid = 0;

            return function() {
                return this.each( function() {
                    if ( !this.id ) {
                        this.id = "ui-id-" + ( ++uuid );
                    }
                } );
            };
        } )(),

        removeUniqueId: function() {
            return this.each( function() {
                if ( /^ui-id-\d+$/.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            } );
        }
    } );


    /*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Accordion
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays collapsible content panels for presenting information in a limited amount of space.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/accordion/
//>>demos: http://jqueryui.com/accordion/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/accordion.css
//>>css.theme: ../../themes/base/theme.css



    var widgetsAccordion = $.widget( "ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: false,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // Callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function() {
            var options = this.options;

            this.prevShow = this.prevHide = $();
            this._addClass( "ui-accordion", "ui-widget ui-helper-reset" );
            this.element.attr( "role", "tablist" );

            // Don't allow collapsible: false and active: false / null
            if ( !options.collapsible && ( options.active === false || options.active == null ) ) {
                options.active = 0;
            }

            this._processPanels();

            // handle negative values
            if ( options.active < 0 ) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function() {
            var icon, children,
                icons = this.options.icons;

            if ( icons ) {
                icon = $( "<span>" );
                this._addClass( icon, "ui-accordion-header-icon", "ui-icon " + icons.header );
                icon.prependTo( this.headers );
                children = this.active.children( ".ui-accordion-header-icon" );
                this._removeClass( children, icons.header )
                    ._addClass( children, null, icons.activeHeader )
                    ._addClass( this.headers, "ui-accordion-icons" );
            }
        },

        _destroyIcons: function() {
            this._removeClass( this.headers, "ui-accordion-icons" );
            this.headers.children( ".ui-accordion-header-icon" ).remove();
        },

        _destroy: function() {
            var contents;

            // Clean up main element
            this.element.removeAttr( "role" );

            // Clean up headers
            this.headers
                .removeAttr( "role aria-expanded aria-selected aria-controls tabIndex" )
                .removeUniqueId();

            this._destroyIcons();

            // Clean up content panels
            contents = this.headers.next()
                .css( "display", "" )
                .removeAttr( "role aria-hidden aria-labelledby" )
                .removeUniqueId();

            if ( this.options.heightStyle !== "content" ) {
                contents.css( "height", "" );
            }
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {

                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "event" ) {
                if ( this.options.event ) {
                    this._off( this.headers, this.options.event );
                }
                this._setupEvents( value );
            }

            this._super( key, value );

            // Setting collapsible: false while collapsed; open first panel
            if ( key === "collapsible" && !value && this.options.active === false ) {
                this._activate( 0 );
            }

            if ( key === "icons" ) {
                this._destroyIcons();
                if ( value ) {
                    this._createIcons();
                }
            }
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this.element.attr( "aria-disabled", value );

            // Support: IE8 Only
            // #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            this._toggleClass( null, "ui-state-disabled", !!value );
            this._toggleClass( this.headers.add( this.headers.next() ), null, "ui-state-disabled",
                !!value );
        },

        _keydown: function( event ) {
            if ( event.altKey || event.ctrlKey ) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index( event.target ),
                toFocus = false;

            switch ( event.keyCode ) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler( event );
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[ 0 ];
                    break;
                case keyCode.END:
                    toFocus = this.headers[ length - 1 ];
                    break;
            }

            if ( toFocus ) {
                $( event.target ).attr( "tabIndex", -1 );
                $( toFocus ).attr( "tabIndex", 0 );
                $( toFocus ).trigger( "focus" );
                event.preventDefault();
            }
        },

        _panelKeyDown: function( event ) {
            if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
                $( event.currentTarget ).prev().trigger( "focus" );
            }
        },

        refresh: function() {
            var options = this.options;
            this._processPanels();

            // Was collapsed or no panel
            if ( ( options.active === false && options.collapsible === true ) ||
                !this.headers.length ) {
                options.active = false;
                this.active = $();

                // active false only when collapsible is true
            } else if ( options.active === false ) {
                this._activate( 0 );

                // was active, but active panel is gone
            } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {

                // all remaining panel are disabled
                if ( this.headers.length === this.headers.find( ".ui-state-disabled" ).length ) {
                    options.active = false;
                    this.active = $();

                    // activate previous panel
                } else {
                    this._activate( Math.max( 0, options.active - 1 ) );
                }

                // was active, active panel still exists
            } else {

                // make sure active index is correct
                options.active = this.headers.index( this.active );
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function() {
            var prevHeaders = this.headers,
                prevPanels = this.panels;

            this.headers = this.element.find( this.options.header );
            this._addClass( this.headers, "ui-accordion-header ui-accordion-header-collapsed",
                "ui-state-default" );

            this.panels = this.headers.next().filter( ":not(.ui-accordion-content-active)" ).hide();
            this._addClass( this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content" );

            // Avoid memory leaks (#10056)
            if ( prevPanels ) {
                this._off( prevHeaders.not( this.headers ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        _refresh: function() {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive( options.active );
            this._addClass( this.active, "ui-accordion-header-active", "ui-state-active" )
                ._removeClass( this.active, "ui-accordion-header-collapsed" );
            this._addClass( this.active.next(), "ui-accordion-content-active" );
            this.active.next().show();

            this.headers
                .attr( "role", "tab" )
                .each( function() {
                    var header = $( this ),
                        headerId = header.uniqueId().attr( "id" ),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr( "id" );
                    header.attr( "aria-controls", panelId );
                    panel.attr( "aria-labelledby", headerId );
                } )
                .next()
                .attr( "role", "tabpanel" );

            this.headers
                .not( this.active )
                .attr( {
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                } )
                .next()
                .attr( {
                    "aria-hidden": "true"
                } )
                .hide();

            // Make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr( {
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                } )
                    .next()
                    .attr( {
                        "aria-hidden": "false"
                    } );
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each( function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                } );

                this.headers.each( function() {
                    maxHeight -= $( this ).outerHeight( true );
                } );

                this.headers.next()
                    .each( function() {
                        $( this ).height( Math.max( 0, maxHeight -
                            $( this ).innerHeight() + $( this ).height() ) );
                    } )
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                    .each( function() {
                        var isVisible = $( this ).is( ":visible" );
                        if ( !isVisible ) {
                            $( this ).show();
                        }
                        maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                        if ( !isVisible ) {
                            $( this ).hide();
                        }
                    } )
                    .height( maxHeight );
            }
        },

        _activate: function( index ) {
            var active = this._findActive( index )[ 0 ];

            // Trying to activate the already active panel
            if ( active === this.active[ 0 ] ) {
                return;
            }

            // Trying to collapse, simulate a click on the currently active header
            active = active || this.active[ 0 ];

            this._eventHandler( {
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            } );
        },

        _findActive: function( selector ) {
            return typeof selector === "number" ? this.headers.eq( selector ) : $();
        },

        _setupEvents: function( event ) {
            var events = {
                keydown: "_keydown"
            };
            if ( event ) {
                $.each( event.split( " " ), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                } );
            }

            this._off( this.headers.add( this.headers.next() ) );
            this._on( this.headers, events );
            this._on( this.headers.next(), { keydown: "_panelKeyDown" } );
            this._hoverable( this.headers );
            this._focusable( this.headers );
        },

        _eventHandler: function( event ) {
            var activeChildren, clickedChildren,
                options = this.options,
                active = this.active,
                clicked = $( event.currentTarget ),
                clickedIsActive = clicked[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };

            event.preventDefault();

            if (

                // click on active header, but not collapsible
                ( clickedIsActive && !options.collapsible ) ||

                // allow canceling activation
                ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.headers.index( clicked );

            // When the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle( eventData );

            // Switch classes
            // corner classes on the previously active header stay after the animation
            this._removeClass( active, "ui-accordion-header-active", "ui-state-active" );
            if ( options.icons ) {
                activeChildren = active.children( ".ui-accordion-header-icon" );
                this._removeClass( activeChildren, null, options.icons.activeHeader )
                    ._addClass( activeChildren, null, options.icons.header );
            }

            if ( !clickedIsActive ) {
                this._removeClass( clicked, "ui-accordion-header-collapsed" )
                    ._addClass( clicked, "ui-accordion-header-active", "ui-state-active" );
                if ( options.icons ) {
                    clickedChildren = clicked.children( ".ui-accordion-header-icon" );
                    this._removeClass( clickedChildren, null, options.icons.header )
                        ._addClass( clickedChildren, null, options.icons.activeHeader );
                }

                this._addClass( clicked.next(), "ui-accordion-content-active" );
            }
        },

        _toggle: function( data ) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // Handle activating a panel during the animation for another activation
            this.prevShow.add( this.prevHide ).stop( true, true );
            this.prevShow = toShow;
            this.prevHide = toHide;

            if ( this.options.animate ) {
                this._animate( toShow, toHide, data );
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete( data );
            }

            toHide.attr( {
                "aria-hidden": "true"
            } );
            toHide.prev().attr( {
                "aria-selected": "false",
                "aria-expanded": "false"
            } );

            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if ( toShow.length && toHide.length ) {
                toHide.prev().attr( {
                    "tabIndex": -1,
                    "aria-expanded": "false"
                } );
            } else if ( toShow.length ) {
                this.headers.filter( function() {
                    return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
                } )
                    .attr( "tabIndex", -1 );
            }

            toShow
                .attr( "aria-hidden", "false" )
                .prev()
                .attr( {
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                } );
        },

        _animate: function( toShow, toHide, data ) {
            var total, easing, duration,
                that = this,
                adjust = 0,
                boxSizing = toShow.css( "box-sizing" ),
                down = toShow.length &&
                    ( !toHide.length || ( toShow.index() < toHide.index() ) ),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function() {
                    that._toggleComplete( data );
                };

            if ( typeof options === "number" ) {
                duration = options;
            }
            if ( typeof options === "string" ) {
                easing = options;
            }

            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if ( !toHide.length ) {
                return toShow.animate( this.showProps, duration, easing, complete );
            }
            if ( !toShow.length ) {
                return toHide.animate( this.hideProps, duration, easing, complete );
            }

            total = toShow.show().outerHeight();
            toHide.animate( this.hideProps, {
                duration: duration,
                easing: easing,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                }
            } );
            toShow
                .hide()
                .animate( this.showProps, {
                    duration: duration,
                    easing: easing,
                    complete: complete,
                    step: function( now, fx ) {
                        fx.now = Math.round( now );
                        if ( fx.prop !== "height" ) {
                            if ( boxSizing === "content-box" ) {
                                adjust += fx.now;
                            }
                        } else if ( that.options.heightStyle !== "content" ) {
                            fx.now = Math.round( total - toHide.outerHeight() - adjust );
                            adjust = 0;
                        }
                    }
                } );
        },

        _toggleComplete: function( data ) {
            var toHide = data.oldPanel,
                prev = toHide.prev();

            this._removeClass( toHide, "ui-accordion-content-active" );
            this._removeClass( prev, "ui-accordion-header-active" )
                ._addClass( prev, "ui-accordion-header-collapsed" );

            // Work around for rendering bug in IE (#5421)
            if ( toHide.length ) {
                toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
            }
            this._trigger( "activate", null, data );
        }
    } );



    var safeActiveElement = $.ui.safeActiveElement = function( document ) {
        var activeElement;

        // Support: IE 9 only
        // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
        try {
            activeElement = document.activeElement;
        } catch ( error ) {
            activeElement = document.body;
        }

        // Support: IE 9 - 11 only
        // IE may return null instead of an element
        // Interestingly, this only seems to occur when NOT in an iframe
        if ( !activeElement ) {
            activeElement = document.body;
        }

        // Support: IE 11 only
        // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if ( !activeElement.nodeName ) {
            activeElement = document.body;
        }

        return activeElement;
    };


    /*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css



    var widgetsMenu = $.widget( "ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",

            // Callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function() {
            this.activeMenu = this.element;

            // Flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
                .uniqueId()
                .attr( {
                    role: this.options.role,
                    tabIndex: 0
                } );

            this._addClass( "ui-menu", "ui-widget ui-widget-content" );
            this._on( {

                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item": function( event ) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function( event ) {
                    var target = $( event.target );
                    var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
                    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
                        this.select( event );

                        // Only set the mouseHandled flag if the event will bubble, see #9469.
                        if ( !event.isPropagationStopped() ) {
                            this.mouseHandled = true;
                        }

                        // Open submenu on click
                        if ( target.has( ".ui-menu" ).length ) {
                            this.expand( event );
                        } else if ( !this.element.is( ":focus" ) &&
                            active.closest( ".ui-menu" ).length ) {

                            // Redirect focus to the menu
                            this.element.trigger( "focus", [ true ] );

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
                                clearTimeout( this.timer );
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function( event ) {

                    // Ignore mouse events while typeahead is active, see #10458.
                    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
                    // is over an item in the menu
                    if ( this.previousFilter ) {
                        return;
                    }

                    var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
                        target = $( event.currentTarget );

                    // Ignore bubbled events on parent items, see #11641
                    if ( actualTarget[ 0 ] !== target[ 0 ] ) {
                        return;
                    }

                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    this._removeClass( target.siblings().children( ".ui-state-active" ),
                        null, "ui-state-active" );
                    this.focus( event, target );
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function( event, keepActiveItem ) {

                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.find( this.options.items ).eq( 0 );

                    if ( !keepActiveItem ) {
                        this.focus( event, item );
                    }
                },
                blur: function( event ) {
                    this._delay( function() {
                        var notContained = !$.contains(
                            this.element[ 0 ],
                            $.ui.safeActiveElement( this.document[ 0 ] )
                        );
                        if ( notContained ) {
                            this.collapseAll( event );
                        }
                    } );
                },
                keydown: "_keydown"
            } );

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on( this.document, {
                click: function( event ) {
                    if ( this._closeOnDocumentClick( event ) ) {
                        this.collapseAll( event );
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            } );
        },

        _destroy: function() {
            var items = this.element.find( ".ui-menu-item" )
                    .removeAttr( "role aria-disabled" ),
                submenus = items.children( ".ui-menu-item-wrapper" )
                    .removeUniqueId()
                    .removeAttr( "tabIndex role aria-haspopup" );

            // Destroy (sub)menus
            this.element
                .removeAttr( "aria-activedescendant" )
                .find( ".ui-menu" ).addBack()
                .removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
                    "tabIndex" )
                .removeUniqueId()
                .show();

            submenus.children().each( function() {
                var elem = $( this );
                if ( elem.data( "ui-menu-submenu-caret" ) ) {
                    elem.remove();
                }
            } );
        },

        _keydown: function( event ) {
            var match, prev, character, skip,
                preventDefault = true;

            switch ( event.keyCode ) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage( event );
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage( event );
                    break;
                case $.ui.keyCode.HOME:
                    this._move( "first", "first", event );
                    break;
                case $.ui.keyCode.END:
                    this._move( "last", "last", event );
                    break;
                case $.ui.keyCode.UP:
                    this.previous( event );
                    break;
                case $.ui.keyCode.DOWN:
                    this.next( event );
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse( event );
                    break;
                case $.ui.keyCode.RIGHT:
                    if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
                        this.expand( event );
                    }
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate( event );
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse( event );
                    break;
                default:
                    preventDefault = false;
                    prev = this.previousFilter || "";
                    skip = false;

                    // Support number pad values
                    character = event.keyCode >= 96 && event.keyCode <= 105 ?
                        ( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

                    clearTimeout( this.filterTimer );

                    if ( character === prev ) {
                        skip = true;
                    } else {
                        character = prev + character;
                    }

                    match = this._filterMenuItems( character );
                    match = skip && match.index( this.active.next() ) !== -1 ?
                        this.active.nextAll( ".ui-menu-item" ) :
                        match;

                    // If no matches on the current filter, reset to the last character pressed
                    // to move down the menu to the first item that starts with that character
                    if ( !match.length ) {
                        character = String.fromCharCode( event.keyCode );
                        match = this._filterMenuItems( character );
                    }

                    if ( match.length ) {
                        this.focus( event, match );
                        this.previousFilter = character;
                        this.filterTimer = this._delay( function() {
                            delete this.previousFilter;
                        }, 1000 );
                    } else {
                        delete this.previousFilter;
                    }
            }

            if ( preventDefault ) {
                event.preventDefault();
            }
        },

        _activate: function( event ) {
            if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
                if ( this.active.children( "[aria-haspopup='true']" ).length ) {
                    this.expand( event );
                } else {
                    this.select( event );
                }
            }
        },

        refresh: function() {
            var menus, items, newSubmenus, newItems, newWrappers,
                that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find( this.options.menus );

            this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

            // Initialize nested menus
            newSubmenus = submenus.filter( ":not(.ui-menu)" )
                .hide()
                .attr( {
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                } )
                .each( function() {
                    var menu = $( this ),
                        item = menu.prev(),
                        submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

                    that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
                    item
                        .attr( "aria-haspopup", "true" )
                        .prepend( submenuCaret );
                    menu.attr( "aria-labelledby", item.attr( "id" ) );
                } );

            this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

            menus = submenus.add( this.element );
            items = menus.find( this.options.items );

            // Initialize menu-items containing spaces and/or dashes only as dividers
            items.not( ".ui-menu-item" ).each( function() {
                var item = $( this );
                if ( that._isDivider( item ) ) {
                    that._addClass( item, "ui-menu-divider", "ui-widget-content" );
                }
            } );

            // Don't refresh list items that are already adapted
            newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
            newWrappers = newItems.children()
                .not( ".ui-menu" )
                .uniqueId()
                .attr( {
                    tabIndex: -1,
                    role: this._itemRole()
                } );
            this._addClass( newItems, "ui-menu-item" )
                ._addClass( newWrappers, "ui-menu-item-wrapper" );

            // Add aria-disabled attribute to any disabled menu item
            items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

            // If the active item has been removed, blur the menu
            if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                this.blur();
            }
        },

        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[ this.options.role ];
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                var icons = this.element.find( ".ui-menu-icon" );
                this._removeClass( icons, null, this.options.icons.submenu )
                    ._addClass( icons, null, value.submenu );
            }
            this._super( key, value );
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this.element.attr( "aria-disabled", String( value ) );
            this._toggleClass( null, "ui-state-disabled", !!value );
        },

        focus: function( event, item ) {
            var nested, focused, activeParent;
            this.blur( event, event && event.type === "focus" );

            this._scrollIntoView( item );

            this.active = item.first();

            focused = this.active.children( ".ui-menu-item-wrapper" );
            this._addClass( focused, null, "ui-state-active" );

            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if ( this.options.role ) {
                this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
            }

            // Highlight active parent menu item, if any
            activeParent = this.active
                .parent()
                .closest( ".ui-menu-item" )
                .children( ".ui-menu-item-wrapper" );
            this._addClass( activeParent, null, "ui-state-active" );

            if ( event && event.type === "keydown" ) {
                this._close();
            } else {
                this.timer = this._delay( function() {
                    this._close();
                }, this.delay );
            }

            nested = item.children( ".ui-menu" );
            if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
                this._startOpening( nested );
            }
            this.activeMenu = item.parent();

            this._trigger( "focus", event, { item: item } );
        },

        _scrollIntoView: function( item ) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if ( this._hasScroll() ) {
                borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
                paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();

                if ( offset < 0 ) {
                    this.activeMenu.scrollTop( scroll + offset );
                } else if ( offset + itemHeight > elementHeight ) {
                    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
                }
            }
        },

        blur: function( event, fromFocus ) {
            if ( !fromFocus ) {
                clearTimeout( this.timer );
            }

            if ( !this.active ) {
                return;
            }

            this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
                null, "ui-state-active" );

            this._trigger( "blur", event, { item: this.active } );
            this.active = null;
        },

        _startOpening: function( submenu ) {
            clearTimeout( this.timer );

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the caret icon
            if ( submenu.attr( "aria-hidden" ) !== "true" ) {
                return;
            }

            this.timer = this._delay( function() {
                this._close();
                this._open( submenu );
            }, this.delay );
        },

        _open: function( submenu ) {
            var position = $.extend( {
                of: this.active
            }, this.options.position );

            clearTimeout( this.timer );
            this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
                .hide()
                .attr( "aria-hidden", "true" );

            submenu
                .show()
                .removeAttr( "aria-hidden" )
                .attr( "aria-expanded", "true" )
                .position( position );
        },

        collapseAll: function( event, all ) {
            clearTimeout( this.timer );
            this.timer = this._delay( function() {

                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                    $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

                // If we found no valid submenu ancestor, use the main menu to close all
                // sub menus anyway
                if ( !currentMenu.length ) {
                    currentMenu = this.element;
                }

                this._close( currentMenu );

                this.blur( event );

                // Work around active item staying active after menu is blurred
                this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

                this.activeMenu = currentMenu;
            }, this.delay );
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function( startMenu ) {
            if ( !startMenu ) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu.find( ".ui-menu" )
                .hide()
                .attr( "aria-hidden", "true" )
                .attr( "aria-expanded", "false" );
        },

        _closeOnDocumentClick: function( event ) {
            return !$( event.target ).closest( ".ui-menu" ).length;
        },

        _isDivider: function( item ) {

            // Match hyphen, em dash, en dash
            return !/[^\-\u2014\u2013\s]/.test( item.text() );
        },

        collapse: function( event ) {
            var newItem = this.active &&
                this.active.parent().closest( ".ui-menu-item", this.element );
            if ( newItem && newItem.length ) {
                this._close();
                this.focus( event, newItem );
            }
        },

        expand: function( event ) {
            var newItem = this.active &&
                this.active
                    .children( ".ui-menu " )
                    .find( this.options.items )
                    .first();

            if ( newItem && newItem.length ) {
                this._open( newItem.parent() );

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay( function() {
                    this.focus( event, newItem );
                } );
            }
        },

        next: function( event ) {
            this._move( "next", "first", event );
        },

        previous: function( event ) {
            this._move( "prev", "last", event );
        },

        isFirstItem: function() {
            return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
        },

        isLastItem: function() {
            return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
        },

        _move: function( direction, filter, event ) {
            var next;
            if ( this.active ) {
                if ( direction === "first" || direction === "last" ) {
                    next = this.active
                        [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
                        .eq( -1 );
                } else {
                    next = this.active
                        [ direction + "All" ]( ".ui-menu-item" )
                        .eq( 0 );
                }
            }
            if ( !next || !next.length || !this.active ) {
                next = this.activeMenu.find( this.options.items )[ filter ]();
            }

            this.focus( event, next );
        },

        nextPage: function( event ) {
            var item, base, height;

            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isLastItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll( ".ui-menu-item" ).each( function() {
                    item = $( this );
                    return item.offset().top - base - height < 0;
                } );

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items )
                    [ !this.active ? "first" : "last" ]() );
            }
        },

        previousPage: function( event ) {
            var item, base, height;
            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isFirstItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll( ".ui-menu-item" ).each( function() {
                    item = $( this );
                    return item.offset().top - base + height > 0;
                } );

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items ).first() );
            }
        },

        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop( "scrollHeight" );
        },

        select: function( event ) {

            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
            var ui = { item: this.active };
            if ( !this.active.has( ".ui-menu" ).length ) {
                this.collapseAll( event, true );
            }
            this._trigger( "select", event, ui );
        },

        _filterMenuItems: function( character ) {
            var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
                regex = new RegExp( "^" + escapedCharacter, "i" );

            return this.activeMenu
                .find( this.options.items )

                // Only match on items, not dividers or other content (#10571)
                .filter( ".ui-menu-item" )
                .filter( function() {
                    return regex.test(
                        $.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
                } );
        }
    } );


    /*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // Callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        requestIndex: 0,
        pending: 0,

        _create: function() {

            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
                nodeName = this.element[ 0 ].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input";

            // Textareas are always multi-line
            // Inputs are always single-line, even if inside a contentEditable element
            // IE also treats inputs as contentEditable
            // All other element types are determined by whether or not they're contentEditable
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

            this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
            this.isNewMenu = true;

            this._addClass( "ui-autocomplete-input" );
            this.element.attr( "autocomplete", "off" );

            this._on( this.element, {
                keydown: function( event ) {
                    if ( this.element.prop( "readOnly" ) ) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            suppressKeyPress = true;
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            suppressKeyPress = true;
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            suppressKeyPress = true;
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            suppressKeyPress = true;
                            this._keyEvent( "next", event );
                            break;
                        case keyCode.ENTER:

                            // when menu is open and has focus
                            if ( this.menu.active ) {

                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                suppressKeyPress = true;
                                event.preventDefault();
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.TAB:
                            if ( this.menu.active ) {
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.ESCAPE:
                            if ( this.menu.element.is( ":visible" ) ) {
                                if ( !this.isMultiLine ) {
                                    this._value( this.term );
                                }
                                this.close( event );

                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                            }
                            break;
                        default:
                            suppressKeyPressRepeat = true;

                            // search timeout should be triggered before the input value is changed
                            this._searchTimeout( event );
                            break;
                    }
                },
                keypress: function( event ) {
                    if ( suppressKeyPress ) {
                        suppressKeyPress = false;
                        if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if ( suppressKeyPressRepeat ) {
                        return;
                    }

                    // Replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            this._keyEvent( "next", event );
                            break;
                    }
                },
                input: function( event ) {
                    if ( suppressInput ) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout( event );
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function( event ) {
                    if ( this.cancelBlur ) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout( this.searching );
                    this.close( event );
                    this._change( event );
                }
            } );

            this._initSource();
            this.menu = $( "<ul>" )
                .appendTo( this._appendTo() )
                .menu( {

                    // disable ARIA support, the live region takes care of that
                    role: null
                } )
                .hide()
                .menu( "instance" );

            this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
            this._on( this.menu.element, {
                mousedown: function( event ) {

                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay( function() {
                        delete this.cancelBlur;

                        // Support: IE 8 only
                        // Right clicking a menu item or selecting text from the menu items will
                        // result in focus moving out of the input. However, we've already received
                        // and ignored the blur event because of the cancelBlur flag set above. So
                        // we restore focus to ensure that the menu closes properly based on the user's
                        // next actions.
                        if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
                            this.element.trigger( "focus" );
                        }
                    } );
                },
                menufocus: function( event, ui ) {
                    var label, item;

                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if ( this.isNewMenu ) {
                        this.isNewMenu = false;
                        if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
                            this.menu.blur();

                            this.document.one( "mousemove", function() {
                                $( event.target ).trigger( event.originalEvent );
                            } );

                            return;
                        }
                    }

                    item = ui.item.data( "ui-autocomplete-item" );
                    if ( false !== this._trigger( "focus", event, { item: item } ) ) {

                        // use value to match what will end up in the input, if it was a key event
                        if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
                            this._value( item.value );
                        }
                    }

                    // Announce the value in the liveRegion
                    label = ui.item.attr( "aria-label" ) || item.value;
                    if ( label && $.trim( label ).length ) {
                        this.liveRegion.children().hide();
                        $( "<div>" ).text( label ).appendTo( this.liveRegion );
                    }
                },
                menuselect: function( event, ui ) {
                    var item = ui.item.data( "ui-autocomplete-item" ),
                        previous = this.previous;

                    // Only trigger when focus was lost (click on menu)
                    if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
                        this.element.trigger( "focus" );
                        this.previous = previous;

                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay( function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        } );
                    }

                    if ( false !== this._trigger( "select", event, { item: item } ) ) {
                        this._value( item.value );
                    }

                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close( event );
                    this.selectedItem = item;
                }
            } );

            this.liveRegion = $( "<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            } )
                .appendTo( this.document[ 0 ].body );

            this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

            // Turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            } );
        },

        _destroy: function() {
            clearTimeout( this.searching );
            this.element.removeAttr( "autocomplete" );
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "source" ) {
                this._initSource();
            }
            if ( key === "appendTo" ) {
                this.menu.element.appendTo( this._appendTo() );
            }
            if ( key === "disabled" && value && this.xhr ) {
                this.xhr.abort();
            }
        },

        _isEventTargetInWidget: function( event ) {
            var menuElement = this.menu.element[ 0 ];

            return event.target === this.element[ 0 ] ||
                event.target === menuElement ||
                $.contains( menuElement, event.target );
        },

        _closeOnClickOutside: function( event ) {
            if ( !this._isEventTargetInWidget( event ) ) {
                this.close();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front, dialog" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _initSource: function() {
            var array, url,
                that = this;
            if ( $.isArray( this.options.source ) ) {
                array = this.options.source;
                this.source = function( request, response ) {
                    response( $.ui.autocomplete.filter( array, request.term ) );
                };
            } else if ( typeof this.options.source === "string" ) {
                url = this.options.source;
                this.source = function( request, response ) {
                    if ( that.xhr ) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax( {
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function( data ) {
                            response( data );
                        },
                        error: function() {
                            response( [] );
                        }
                    } );
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function( event ) {
            clearTimeout( this.searching );
            this.searching = this._delay( function() {

                // Search if the value has changed, or if the user retypes the same value (see #7434)
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is( ":visible" ),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

                if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
                    this.selectedItem = null;
                    this.search( null, event );
                }
            }, this.options.delay );
        },

        search: function( value, event ) {
            value = value != null ? value : this._value();

            // Always save the actual value, not the one passed as an argument
            this.term = this._value();

            if ( value.length < this.options.minLength ) {
                return this.close( event );
            }

            if ( this._trigger( "search", event ) === false ) {
                return;
            }

            return this._search( value );
        },

        _search: function( value ) {
            this.pending++;
            this._addClass( "ui-autocomplete-loading" );
            this.cancelSearch = false;

            this.source( { term: value }, this._response() );
        },

        _response: function() {
            var index = ++this.requestIndex;

            return $.proxy( function( content ) {
                if ( index === this.requestIndex ) {
                    this.__response( content );
                }

                this.pending--;
                if ( !this.pending ) {
                    this._removeClass( "ui-autocomplete-loading" );
                }
            }, this );
        },

        __response: function( content ) {
            if ( content ) {
                content = this._normalize( content );
            }
            this._trigger( "response", null, { content: content } );
            if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
                this._suggest( content );
                this._trigger( "open" );
            } else {

                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function( event ) {
            this.cancelSearch = true;
            this._close( event );
        },

        _close: function( event ) {

            // Remove the handler that closes the menu on outside clicks
            this._off( this.document, "mousedown" );

            if ( this.menu.element.is( ":visible" ) ) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger( "close", event );
            }
        },

        _change: function( event ) {
            if ( this.previous !== this._value() ) {
                this._trigger( "change", event, { item: this.selectedItem } );
            }
        },

        _normalize: function( items ) {

            // assume all items have the right format when the first item is complete
            if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
                return items;
            }
            return $.map( items, function( item ) {
                if ( typeof item === "string" ) {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend( {}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                } );
            } );
        },

        _suggest: function( items ) {
            var ul = this.menu.element.empty();
            this._renderMenu( ul, items );
            this.isNewMenu = true;
            this.menu.refresh();

            // Size and position menu
            ul.show();
            this._resizeMenu();
            ul.position( $.extend( {
                of: this.element
            }, this.options.position ) );

            if ( this.options.autoFocus ) {
                this.menu.next();
            }

            // Listen for interactions outside of the widget (#6642)
            this._on( this.document, {
                mousedown: "_closeOnClickOutside"
            } );
        },

        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth( Math.max(

                // Firefox wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping (#7513)
                ul.width( "" ).outerWidth() + 1,
                this.element.outerWidth()
            ) );
        },

        _renderMenu: function( ul, items ) {
            var that = this;
            $.each( items, function( index, item ) {
                that._renderItemData( ul, item );
            } );
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
        },

        _renderItem: function( ul, item ) {
            return $( "<li>" )
                .append( $( "<div>" ).text( item.label ) )
                .appendTo( ul );
        },

        _move: function( direction, event ) {
            if ( !this.menu.element.is( ":visible" ) ) {
                this.search( null, event );
                return;
            }
            if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
                this.menu.isLastItem() && /^next/.test( direction ) ) {

                if ( !this.isMultiLine ) {
                    this._value( this.term );
                }

                this.menu.blur();
                return;
            }
            this.menu[ direction ]( event );
        },

        widget: function() {
            return this.menu.element;
        },

        _value: function() {
            return this.valueMethod.apply( this.element, arguments );
        },

        _keyEvent: function( keyEvent, event ) {
            if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                this._move( keyEvent, event );

                // Prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        },

        // Support: Chrome <=50
        // We should be able to just use this.element.prop( "isContentEditable" )
        // but hidden elements always report false in Chrome.
        // https://code.google.com/p/chromium/issues/detail?id=313082
        _isContentEditable: function( element ) {
            if ( !element.length ) {
                return false;
            }

            var editable = element.prop( "contentEditable" );

            if ( editable === "inherit" ) {
                return this._isContentEditable( element.parent() );
            }

            return editable === "true";
        }
    } );

    $.extend( $.ui.autocomplete, {
        escapeRegex: function( value ) {
            return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
        },
        filter: function( array, term ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
            return $.grep( array, function( value ) {
                return matcher.test( value.label || value.value || value );
            } );
        }
    } );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
    $.widget( "ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function( amount ) {
                    return amount + ( amount > 1 ? " results are" : " result is" ) +
                        " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function( content ) {
            var message;
            this._superApply( arguments );
            if ( this.options.disabled || this.cancelSearch ) {
                return;
            }
            if ( content && content.length ) {
                message = this.options.messages.results( content.length );
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $( "<div>" ).text( message ).appendTo( this.liveRegion );
        }
    } );

    var widgetsAutocomplete = $.ui.autocomplete;


    /*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Controlgroup
//>>group: Widgets
//>>description: Visually groups form control widgets
//>>docs: http://api.jqueryui.com/controlgroup/
//>>demos: http://jqueryui.com/controlgroup/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/controlgroup.css
//>>css.theme: ../../themes/base/theme.css


    var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;

    var widgetsControlgroup = $.widget( "ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: true,
            items: {
                "button": "input[type=button], input[type=submit], input[type=reset], button, a",
                "controlgroupLabel": ".ui-controlgroup-label",
                "checkboxradio": "input[type='checkbox'], input[type='radio']",
                "selectmenu": "select",
                "spinner": ".ui-spinner-input"
            }
        },

        _create: function() {
            this._enhance();
        },

        // To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
        _enhance: function() {
            this.element.attr( "role", "toolbar" );
            this.refresh();
        },

        _destroy: function() {
            this._callChildMethod( "destroy" );
            this.childWidgets.removeData( "ui-controlgroup-data" );
            this.element.removeAttr( "role" );
            if ( this.options.items.controlgroupLabel ) {
                this.element
                    .find( this.options.items.controlgroupLabel )
                    .find( ".ui-controlgroup-label-contents" )
                    .contents().unwrap();
            }
        },

        _initWidgets: function() {
            var that = this,
                childWidgets = [];

            // First we iterate over each of the items options
            $.each( this.options.items, function( widget, selector ) {
                var labels;
                var options = {};

                // Make sure the widget has a selector set
                if ( !selector ) {
                    return;
                }

                if ( widget === "controlgroupLabel" ) {
                    labels = that.element.find( selector );
                    labels.each( function() {
                        var element = $( this );

                        if ( element.children( ".ui-controlgroup-label-contents" ).length ) {
                            return;
                        }
                        element.contents()
                            .wrapAll( "<span class='ui-controlgroup-label-contents'></span>" );
                    } );
                    that._addClass( labels, null, "ui-widget ui-widget-content ui-state-default" );
                    childWidgets = childWidgets.concat( labels.get() );
                    return;
                }

                // Make sure the widget actually exists
                if ( !$.fn[ widget ] ) {
                    return;
                }

                // We assume everything is in the middle to start because we can't determine
                // first / last elements until all enhancments are done.
                if ( that[ "_" + widget + "Options" ] ) {
                    options = that[ "_" + widget + "Options" ]( "middle" );
                } else {
                    options = { classes: {} };
                }

                // Find instances of this widget inside controlgroup and init them
                that.element
                    .find( selector )
                    .each( function() {
                        var element = $( this );
                        var instance = element[ widget ]( "instance" );

                        // We need to clone the default options for this type of widget to avoid
                        // polluting the variable options which has a wider scope than a single widget.
                        var instanceOptions = $.widget.extend( {}, options );

                        // If the button is the child of a spinner ignore it
                        // TODO: Find a more generic solution
                        if ( widget === "button" && element.parent( ".ui-spinner" ).length ) {
                            return;
                        }

                        // Create the widget if it doesn't exist
                        if ( !instance ) {
                            instance = element[ widget ]()[ widget ]( "instance" );
                        }
                        if ( instance ) {
                            instanceOptions.classes =
                                that._resolveClassesValues( instanceOptions.classes, instance );
                        }
                        element[ widget ]( instanceOptions );

                        // Store an instance of the controlgroup to be able to reference
                        // from the outermost element for changing options and refresh
                        var widgetElement = element[ widget ]( "widget" );
                        $.data( widgetElement[ 0 ], "ui-controlgroup-data",
                            instance ? instance : element[ widget ]( "instance" ) );

                        childWidgets.push( widgetElement[ 0 ] );
                    } );
            } );

            this.childWidgets = $( $.unique( childWidgets ) );
            this._addClass( this.childWidgets, "ui-controlgroup-item" );
        },

        _callChildMethod: function( method ) {
            this.childWidgets.each( function() {
                var element = $( this ),
                    data = element.data( "ui-controlgroup-data" );
                if ( data && data[ method ] ) {
                    data[ method ]();
                }
            } );
        },

        _updateCornerClass: function( element, position ) {
            var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
            var add = this._buildSimpleOptions( position, "label" ).classes.label;

            this._removeClass( element, null, remove );
            this._addClass( element, null, add );
        },

        _buildSimpleOptions: function( position, key ) {
            var direction = this.options.direction === "vertical";
            var result = {
                classes: {}
            };
            result.classes[ key ] = {
                "middle": "",
                "first": "ui-corner-" + ( direction ? "top" : "left" ),
                "last": "ui-corner-" + ( direction ? "bottom" : "right" ),
                "only": "ui-corner-all"
            }[ position ];

            return result;
        },

        _spinnerOptions: function( position ) {
            var options = this._buildSimpleOptions( position, "ui-spinner" );

            options.classes[ "ui-spinner-up" ] = "";
            options.classes[ "ui-spinner-down" ] = "";

            return options;
        },

        _buttonOptions: function( position ) {
            return this._buildSimpleOptions( position, "ui-button" );
        },

        _checkboxradioOptions: function( position ) {
            return this._buildSimpleOptions( position, "ui-checkboxradio-label" );
        },

        _selectmenuOptions: function( position ) {
            var direction = this.options.direction === "vertical";
            return {
                width: direction ? "auto" : false,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + ( direction ? "top" : "tl" ),
                        "ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "top" : "left" )
                    },
                    last: {
                        "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "bottom" : "right" )
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }

                }[ position ]
            };
        },

        _resolveClassesValues: function( classes, instance ) {
            var result = {};
            $.each( classes, function( key ) {
                var current = instance.options.classes[ key ] || "";
                current = $.trim( current.replace( controlgroupCornerRegex, "" ) );
                result[ key ] = ( current + " " + classes[ key ] ).replace( /\s+/g, " " );
            } );
            return result;
        },

        _setOption: function( key, value ) {
            if ( key === "direction" ) {
                this._removeClass( "ui-controlgroup-" + this.options.direction );
            }

            this._super( key, value );
            if ( key === "disabled" ) {
                this._callChildMethod( value ? "disable" : "enable" );
                return;
            }

            this.refresh();
        },

        refresh: function() {
            var children,
                that = this;

            this._addClass( "ui-controlgroup ui-controlgroup-" + this.options.direction );

            if ( this.options.direction === "horizontal" ) {
                this._addClass( null, "ui-helper-clearfix" );
            }
            this._initWidgets();

            children = this.childWidgets;

            // We filter here because we need to track all childWidgets not just the visible ones
            if ( this.options.onlyVisible ) {
                children = children.filter( ":visible" );
            }

            if ( children.length ) {

                // We do this last because we need to make sure all enhancment is done
                // before determining first and last
                $.each( [ "first", "last" ], function( index, value ) {
                    var instance = children[ value ]().data( "ui-controlgroup-data" );

                    if ( instance && that[ "_" + instance.widgetName + "Options" ] ) {
                        var options = that[ "_" + instance.widgetName + "Options" ](
                            children.length === 1 ? "only" : value
                        );
                        options.classes = that._resolveClassesValues( options.classes, instance );
                        instance.element[ instance.widgetName ]( options );
                    } else {
                        that._updateCornerClass( children[ value ](), value );
                    }
                } );

                // Finally call the refresh method on each of the child widgets.
                this._callChildMethod( "refresh" );
            }
        }
    } );

    /*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.checkboxradio", [ $.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: true,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },

        _getCreateOptions: function() {
            var disabled, labels;
            var that = this;
            var options = this._super() || {};

            // We read the type here, because it makes more sense to throw a element type error first,
            // rather then the error for lack of a label. Often if its the wrong type, it
            // won't have a label (e.g. calling on a div, btn, etc)
            this._readType();

            labels = this.element.labels();

            // If there are multiple labels, use the last one
            this.label = $( labels[ labels.length - 1 ] );
            if ( !this.label.length ) {
                $.error( "No label found for checkboxradio widget" );
            }

            this.originalLabel = "";

            // We need to get the label text but this may also need to make sure it does not contain the
            // input itself.
            this.label.contents().not( this.element[ 0 ] ).each( function() {

                // The label contents could be text, html, or a mix. We concat each element to get a
                // string representation of the label, without the input as part of it.
                that.originalLabel += this.nodeType === 3 ? $( this ).text() : this.outerHTML;
            } );

            // Set the label option if we found label text
            if ( this.originalLabel ) {
                options.label = this.originalLabel;
            }

            disabled = this.element[ 0 ].disabled;
            if ( disabled != null ) {
                options.disabled = disabled;
            }
            return options;
        },

        _create: function() {
            var checked = this.element[ 0 ].checked;

            this._bindFormResetHandler();

            if ( this.options.disabled == null ) {
                this.options.disabled = this.element[ 0 ].disabled;
            }

            this._setOption( "disabled", this.options.disabled );
            this._addClass( "ui-checkboxradio", "ui-helper-hidden-accessible" );
            this._addClass( this.label, "ui-checkboxradio-label", "ui-button ui-widget" );

            if ( this.type === "radio" ) {
                this._addClass( this.label, "ui-checkboxradio-radio-label" );
            }

            if ( this.options.label && this.options.label !== this.originalLabel ) {
                this._updateLabel();
            } else if ( this.originalLabel ) {
                this.options.label = this.originalLabel;
            }

            this._enhance();

            if ( checked ) {
                this._addClass( this.label, "ui-checkboxradio-checked", "ui-state-active" );
                if ( this.icon ) {
                    this._addClass( this.icon, null, "ui-state-hover" );
                }
            }

            this._on( {
                change: "_toggleClasses",
                focus: function() {
                    this._addClass( this.label, null, "ui-state-focus ui-visual-focus" );
                },
                blur: function() {
                    this._removeClass( this.label, null, "ui-state-focus ui-visual-focus" );
                }
            } );
        },

        _readType: function() {
            var nodeName = this.element[ 0 ].nodeName.toLowerCase();
            this.type = this.element[ 0 ].type;
            if ( nodeName !== "input" || !/radio|checkbox/.test( this.type ) ) {
                $.error( "Can't create checkboxradio on element.nodeName=" + nodeName +
                    " and element.type=" + this.type );
            }
        },

        // Support jQuery Mobile enhanced option
        _enhance: function() {
            this._updateIcon( this.element[ 0 ].checked );
        },

        widget: function() {
            return this.label;
        },

        _getRadioGroup: function() {
            var group;
            var name = this.element[ 0 ].name;
            var nameSelector = "input[name='" + $.ui.escapeSelector( name ) + "']";

            if ( !name ) {
                return $( [] );
            }

            if ( this.form.length ) {
                group = $( this.form[ 0 ].elements ).filter( nameSelector );
            } else {

                // Not inside a form, check all inputs that also are not inside a form
                group = $( nameSelector ).filter( function() {
                    return $( this ).form().length === 0;
                } );
            }

            return group.not( this.element );
        },

        _toggleClasses: function() {
            var checked = this.element[ 0 ].checked;
            this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );

            if ( this.options.icon && this.type === "checkbox" ) {
                this._toggleClass( this.icon, null, "ui-icon-check ui-state-checked", checked )
                    ._toggleClass( this.icon, null, "ui-icon-blank", !checked );
            }

            if ( this.type === "radio" ) {
                this._getRadioGroup()
                    .each( function() {
                        var instance = $( this ).checkboxradio( "instance" );

                        if ( instance ) {
                            instance._removeClass( instance.label,
                                "ui-checkboxradio-checked", "ui-state-active" );
                        }
                    } );
            }
        },

        _destroy: function() {
            this._unbindFormResetHandler();

            if ( this.icon ) {
                this.icon.remove();
                this.iconSpace.remove();
            }
        },

        _setOption: function( key, value ) {

            // We don't allow the value to be set to nothing
            if ( key === "label" && !value ) {
                return;
            }

            this._super( key, value );

            if ( key === "disabled" ) {
                this._toggleClass( this.label, null, "ui-state-disabled", value );
                this.element[ 0 ].disabled = value;

                // Don't refresh when setting disabled
                return;
            }
            this.refresh();
        },

        _updateIcon: function( checked ) {
            var toAdd = "ui-icon ui-icon-background ";

            if ( this.options.icon ) {
                if ( !this.icon ) {
                    this.icon = $( "<span>" );
                    this.iconSpace = $( "<span> </span>" );
                    this._addClass( this.iconSpace, "ui-checkboxradio-icon-space" );
                }

                if ( this.type === "checkbox" ) {
                    toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
                    this._removeClass( this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check" );
                } else {
                    toAdd += "ui-icon-blank";
                }
                this._addClass( this.icon, "ui-checkboxradio-icon", toAdd );
                if ( !checked ) {
                    this._removeClass( this.icon, null, "ui-icon-check ui-state-checked" );
                }
                this.icon.prependTo( this.label ).after( this.iconSpace );
            } else if ( this.icon !== undefined ) {
                this.icon.remove();
                this.iconSpace.remove();
                delete this.icon;
            }
        },

        _updateLabel: function() {

            // Remove the contents of the label ( minus the icon, icon space, and input )
            var contents = this.label.contents().not( this.element[ 0 ] );
            if ( this.icon ) {
                contents = contents.not( this.icon[ 0 ] );
            }
            if ( this.iconSpace ) {
                contents = contents.not( this.iconSpace[ 0 ] );
            }
            contents.remove();

            this.label.append( this.options.label );
        },

        refresh: function() {
            var checked = this.element[ 0 ].checked,
                isDisabled = this.element[ 0 ].disabled;

            this._updateIcon( checked );
            this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );
            if ( this.options.label !== null ) {
                this._updateLabel();
            }

            if ( isDisabled !== this.options.disabled ) {
                this._setOptions( { "disabled": isDisabled } );
            }
        }

    } ] );

    var widgetsCheckboxradio = $.ui.checkboxradio;


    /*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: true
        },

        _getCreateOptions: function() {
            var disabled,

                // This is to support cases like in jQuery Mobile where the base widget does have
                // an implementation of _getCreateOptions
                options = this._super() || {};

            this.isInput = this.element.is( "input" );

            disabled = this.element[ 0 ].disabled;
            if ( disabled != null ) {
                options.disabled = disabled;
            }

            this.originalLabel = this.isInput ? this.element.val() : this.element.html();
            if ( this.originalLabel ) {
                options.label = this.originalLabel;
            }

            return options;
        },

        _create: function() {
            if ( !this.option.showLabel & !this.options.icon ) {
                this.options.showLabel = true;
            }

            // We have to check the option again here even though we did in _getCreateOptions,
            // because null may have been passed on init which would override what was set in
            // _getCreateOptions
            if ( this.options.disabled == null ) {
                this.options.disabled = this.element[ 0 ].disabled || false;
            }

            this.hasTitle = !!this.element.attr( "title" );

            // Check to see if the label needs to be set or if its already correct
            if ( this.options.label && this.options.label !== this.originalLabel ) {
                if ( this.isInput ) {
                    this.element.val( this.options.label );
                } else {
                    this.element.html( this.options.label );
                }
            }
            this._addClass( "ui-button", "ui-widget" );
            this._setOption( "disabled", this.options.disabled );
            this._enhance();

            if ( this.element.is( "a" ) ) {
                this._on( {
                    "keyup": function( event ) {
                        if ( event.keyCode === $.ui.keyCode.SPACE ) {
                            event.preventDefault();

                            // Support: PhantomJS <= 1.9, IE 8 Only
                            // If a native click is available use it so we actually cause navigation
                            // otherwise just trigger a click event
                            if ( this.element[ 0 ].click ) {
                                this.element[ 0 ].click();
                            } else {
                                this.element.trigger( "click" );
                            }
                        }
                    }
                } );
            }
        },

        _enhance: function() {
            if ( !this.element.is( "button" ) ) {
                this.element.attr( "role", "button" );
            }

            if ( this.options.icon ) {
                this._updateIcon( "icon", this.options.icon );
                this._updateTooltip();
            }
        },

        _updateTooltip: function() {
            this.title = this.element.attr( "title" );

            if ( !this.options.showLabel && !this.title ) {
                this.element.attr( "title", this.options.label );
            }
        },

        _updateIcon: function( option, value ) {
            var icon = option !== "iconPosition",
                position = icon ? this.options.iconPosition : value,
                displayBlock = position === "top" || position === "bottom";

            // Create icon
            if ( !this.icon ) {
                this.icon = $( "<span>" );

                this._addClass( this.icon, "ui-button-icon", "ui-icon" );

                if ( !this.options.showLabel ) {
                    this._addClass( "ui-button-icon-only" );
                }
            } else if ( icon ) {

                // If we are updating the icon remove the old icon class
                this._removeClass( this.icon, null, this.options.icon );
            }

            // If we are updating the icon add the new icon class
            if ( icon ) {
                this._addClass( this.icon, null, value );
            }

            this._attachIcon( position );

            // If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
            // the iconSpace if there is one.
            if ( displayBlock ) {
                this._addClass( this.icon, null, "ui-widget-icon-block" );
                if ( this.iconSpace ) {
                    this.iconSpace.remove();
                }
            } else {

                // Position is beginning or end so remove the ui-widget-icon-block class and add the
                // space if it does not exist
                if ( !this.iconSpace ) {
                    this.iconSpace = $( "<span> </span>" );
                    this._addClass( this.iconSpace, "ui-button-icon-space" );
                }
                this._removeClass( this.icon, null, "ui-wiget-icon-block" );
                this._attachIconSpace( position );
            }
        },

        _destroy: function() {
            this.element.removeAttr( "role" );

            if ( this.icon ) {
                this.icon.remove();
            }
            if ( this.iconSpace ) {
                this.iconSpace.remove();
            }
            if ( !this.hasTitle ) {
                this.element.removeAttr( "title" );
            }
        },

        _attachIconSpace: function( iconPosition ) {
            this.icon[ /^(?:end|bottom)/.test( iconPosition ) ? "before" : "after" ]( this.iconSpace );
        },

        _attachIcon: function( iconPosition ) {
            this.element[ /^(?:end|bottom)/.test( iconPosition ) ? "append" : "prepend" ]( this.icon );
        },

        _setOptions: function( options ) {
            var newShowLabel = options.showLabel === undefined ?
                this.options.showLabel :
                options.showLabel,
                newIcon = options.icon === undefined ? this.options.icon : options.icon;

            if ( !newShowLabel && !newIcon ) {
                options.showLabel = true;
            }
            this._super( options );
        },

        _setOption: function( key, value ) {
            if ( key === "icon" ) {
                if ( value ) {
                    this._updateIcon( key, value );
                } else if ( this.icon ) {
                    this.icon.remove();
                    if ( this.iconSpace ) {
                        this.iconSpace.remove();
                    }
                }
            }

            if ( key === "iconPosition" ) {
                this._updateIcon( key, value );
            }

            // Make sure we can't end up with a button that has neither text nor icon
            if ( key === "showLabel" ) {
                this._toggleClass( "ui-button-icon-only", null, !value );
                this._updateTooltip();
            }

            if ( key === "label" ) {
                if ( this.isInput ) {
                    this.element.val( value );
                } else {

                    // If there is an icon, append it, else nothing then append the value
                    // this avoids removal of the icon when setting label text
                    this.element.html( value );
                    if ( this.icon ) {
                        this._attachIcon( this.options.iconPosition );
                        this._attachIconSpace( this.options.iconPosition );
                    }
                }
            }

            this._super( key, value );

            if ( key === "disabled" ) {
                this._toggleClass( null, "ui-state-disabled", value );
                this.element[ 0 ].disabled = value;
                if ( value ) {
                    this.element.blur();
                }
            }
        },

        refresh: function() {

            // Make sure to only check disabled if its an element that supports this otherwise
            // check for the disabled class to determine state
            var isDisabled = this.element.is( "input, button" ) ?
                this.element[ 0 ].disabled : this.element.hasClass( "ui-button-disabled" );

            if ( isDisabled !== this.options.disabled ) {
                this._setOptions( { disabled: isDisabled } );
            }

            this._updateTooltip();
        }
    } );

// DEPRECATED
    if ( $.uiBackCompat !== false ) {

        // Text and Icons options
        $.widget( "ui.button", $.ui.button, {
            options: {
                text: true,
                icons: {
                    primary: null,
                    secondary: null
                }
            },

            _create: function() {
                if ( this.options.showLabel && !this.options.text ) {
                    this.options.showLabel = this.options.text;
                }
                if ( !this.options.showLabel && this.options.text ) {
                    this.options.text = this.options.showLabel;
                }
                if ( !this.options.icon && ( this.options.icons.primary ||
                    this.options.icons.secondary ) ) {
                    if ( this.options.icons.primary ) {
                        this.options.icon = this.options.icons.primary;
                    } else {
                        this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = "end";
                    }
                } else if ( this.options.icon ) {
                    this.options.icons.primary = this.options.icon;
                }
                this._super();
            },

            _setOption: function( key, value ) {
                if ( key === "text" ) {
                    this._super( "showLabel", value );
                    return;
                }
                if ( key === "showLabel" ) {
                    this.options.text = value;
                }
                if ( key === "icon" ) {
                    this.options.icons.primary = value;
                }
                if ( key === "icons" ) {
                    if ( value.primary ) {
                        this._super( "icon", value.primary );
                        this._super( "iconPosition", "beginning" );
                    } else if ( value.secondary ) {
                        this._super( "icon", value.secondary );
                        this._super( "iconPosition", "end" );
                    }
                }
                this._superApply( arguments );
            }
        } );

        $.fn.button = ( function( orig ) {
            return function() {
                if ( !this.length || ( this.length && this[ 0 ].tagName !== "INPUT" ) ||
                    ( this.length && this[ 0 ].tagName === "INPUT" && (
                        this.attr( "type" ) !== "checkbox" && this.attr( "type" ) !== "radio"
                    ) ) ) {
                    return orig.apply( this, arguments );
                }
                if ( !$.ui.checkboxradio ) {
                    $.error( "Checkboxradio widget missing" );
                }
                if ( arguments.length === 0 ) {
                    return this.checkboxradio( {
                        "icon": false
                    } );
                }
                return this.checkboxradio.apply( this, arguments );
            };
        } )( $.fn.button );

        $.fn.buttonset = function() {
            if ( !$.ui.controlgroup ) {
                $.error( "Controlgroup widget missing" );
            }
            if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" && arguments[ 2 ] ) {
                return this.controlgroup.apply( this,
                    [ arguments[ 0 ], "items.button", arguments[ 2 ] ] );
            }
            if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" ) {
                return this.controlgroup.apply( this, [ arguments[ 0 ], "items.button" ] );
            }
            if ( typeof arguments[ 0 ] === "object" && arguments[ 0 ].items ) {
                arguments[ 0 ].items = {
                    button: arguments[ 0 ].items
                };
            }
            return this.controlgroup.apply( this, arguments );
        };
    }

    var widgetsButton = $.ui.button;


// jscs:disable maximumLineLength
    /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
    /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css



    $.extend( $.ui, { datepicker: { version: "1.12.1" } } );

    var datepicker_instActive;

    function datepicker_getZindex( elem ) {
        var position, value;
        while ( elem.length && elem[ 0 ] !== document ) {

            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
            position = elem.css( "position" );
            if ( position === "absolute" || position === "relative" || position === "fixed" ) {

                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                value = parseInt( elem.css( "zIndex" ), 10 );
                if ( !isNaN( value ) && value !== 0 ) {
                    return value;
                }
            }
            elem = elem.parent();
        }

        return 0;
    }
    /* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[ "" ] = { // Default regional settings
            closeText: "Done", // Display text for close link
            prevText: "Prev", // Display text for previous month link
            nextText: "Next", // Display text for next month link
            currentText: "Today", // Display text for current month link
            monthNames: [ "January","February","March","April","May","June",
                "July","August","September","October","November","December" ], // Names of months for drop-down and formatting
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
            dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "mm/dd/yy", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = { // Global defaults for all the date picker instances
            showOn: "focus", // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn", // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            defaultDate: null, // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "", // Display text following the input box, e.g. showing the format
            buttonText: "...", // Text for trigger button
            buttonImage: "", // URL for trigger button image
            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false, // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
            gotoCurrent: false, // True if today link goes back to current selection instead
            changeMonth: false, // True if month can be selected directly, false if only prev/next
            changeYear: false, // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10", // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false, // True to show dates in other months, false to leave blank
            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
            showWeek: false, // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10", // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null, // The earliest selectable date, or null for no limit
            maxDate: null, // The latest selectable date, or null for no limit
            duration: "fast", // Duration of display/closure
            beforeShowDay: null, // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null, // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null, // Define a callback function when a date is selected
            onChangeMonthYear: null, // Define a callback function when the month or year is changed
            onClose: null, // Define a callback function when the datepicker is closed
            numberOfMonths: 1, // Number of months to show at a time
            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1, // Number of months to step back/forward
            stepBigMonths: 12, // Number of months to step back/forward for the big links
            altField: "", // Selector for an alternate field to store selected dates into
            altFormat: "", // The date format to use for the alternate field
            constrainInput: true, // The input is constrained by the current date format
            showButtonPanel: false, // True to show button panel, false to not show it
            autoSize: false, // True to size the input for the date format, false to leave as is
            disabled: false // The initial disabled state
        };
        $.extend( this._defaults, this.regional[ "" ] );
        this.regional.en = $.extend( true, {}, this.regional[ "" ] );
        this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
        this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
    }

    $.extend( Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function() {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
        setDefaults: function( settings ) {
            datepicker_extendRemove( this._defaults, settings || {} );
            return this;
        },

        /* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
        _attachDatepicker: function( target, settings ) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = ( nodeName === "div" || nodeName === "span" );
            if ( !target.id ) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst( $( target ), inline );
            inst.settings = $.extend( {}, settings || {} );
            if ( nodeName === "input" ) {
                this._connectDatepicker( target, inst );
            } else if ( inline ) {
                this._inlineDatepicker( target, inst );
            }
        },

        /* Create a new instance object. */
        _newInst: function( target, inline ) {
            var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
            return { id: id, input: target, // associated target
                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
                drawMonth: 0, drawYear: 0, // month being drawn
                inline: inline, // is datepicker inline or not
                dpDiv: ( !inline ? this.dpDiv : // presentation div
                    datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function( target, inst ) {
            var input = $( target );
            inst.append = $( [] );
            inst.trigger = $( [] );
            if ( input.hasClass( this.markerClassName ) ) {
                return;
            }
            this._attachments( input, inst );
            input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
            on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
            this._autoSize( inst );
            $.data( target, "datepicker", inst );

            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if ( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
        },

        /* Make attachments based on settings. */
        _attachments: function( input, inst ) {
            var showOn, buttonText, buttonImage,
                appendText = this._get( inst, "appendText" ),
                isRTL = this._get( inst, "isRTL" );

            if ( inst.append ) {
                inst.append.remove();
            }
            if ( appendText ) {
                inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
                input[ isRTL ? "before" : "after" ]( inst.append );
            }

            input.off( "focus", this._showDatepicker );

            if ( inst.trigger ) {
                inst.trigger.remove();
            }

            showOn = this._get( inst, "showOn" );
            if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
                input.on( "focus", this._showDatepicker );
            }
            if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
                buttonText = this._get( inst, "buttonText" );
                buttonImage = this._get( inst, "buttonImage" );
                inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
                    $( "<img/>" ).addClass( this._triggerClass ).
                    attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
                    $( "<button type='button'></button>" ).addClass( this._triggerClass ).
                    html( !buttonImage ? buttonText : $( "<img/>" ).attr(
                        { src:buttonImage, alt:buttonText, title:buttonText } ) ) );
                input[ isRTL ? "before" : "after" ]( inst.trigger );
                inst.trigger.on( "click", function() {
                    if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
                        $.datepicker._hideDatepicker();
                    } else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker( input[ 0 ] );
                    } else {
                        $.datepicker._showDatepicker( input[ 0 ] );
                    }
                    return false;
                } );
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function( inst ) {
            if ( this._get( inst, "autoSize" ) && !inst.inline ) {
                var findMax, max, maxI, i,
                    date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
                    dateFormat = this._get( inst, "dateFormat" );

                if ( dateFormat.match( /[DM]/ ) ) {
                    findMax = function( names ) {
                        max = 0;
                        maxI = 0;
                        for ( i = 0; i < names.length; i++ ) {
                            if ( names[ i ].length > max ) {
                                max = names[ i ].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
                        "monthNames" : "monthNamesShort" ) ) ) );
                    date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
                        "dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
                }
                inst.input.attr( "size", this._formatDate( inst, date ).length );
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function( target, inst ) {
            var divSpan = $( target );
            if ( divSpan.hasClass( this.markerClassName ) ) {
                return;
            }
            divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
            $.data( target, "datepicker", inst );
            this._setDate( inst, this._getDefaultDate( inst ), true );
            this._updateDatepicker( inst );
            this._updateAlternate( inst );

            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if ( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }

            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css( "display", "block" );
        },

        /* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
        _dialogDatepicker: function( input, date, onSelect, settings, pos ) {
            var id, browserWidth, browserHeight, scrollX, scrollY,
                inst = this._dialogInst; // internal instance

            if ( !inst ) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $( "<input type='text' id='" + id +
                    "' style='position: absolute; top: -100px; width: 0px;'/>" );
                this._dialogInput.on( "keydown", this._doKeyDown );
                $( "body" ).append( this._dialogInput );
                inst = this._dialogInst = this._newInst( this._dialogInput, false );
                inst.settings = {};
                $.data( this._dialogInput[ 0 ], "datepicker", inst );
            }
            datepicker_extendRemove( inst.settings, settings || {} );
            date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
            this._dialogInput.val( date );

            this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
            if ( !this._pos ) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                    [ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
            }

            // Move input on screen for focus, but hidden behind dialog
            this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass( this._dialogClass );
            this._showDatepicker( this._dialogInput[ 0 ] );
            if ( $.blockUI ) {
                $.blockUI( this.dpDiv );
            }
            $.data( this._dialogInput[ 0 ], "datepicker", inst );
            return this;
        },

        /* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
        _destroyDatepicker: function( target ) {
            var nodeName,
                $target = $( target ),
                inst = $.data( target, "datepicker" );

            if ( !$target.hasClass( this.markerClassName ) ) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData( target, "datepicker" );
            if ( nodeName === "input" ) {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass( this.markerClassName ).
                off( "focus", this._showDatepicker ).
                off( "keydown", this._doKeyDown ).
                off( "keypress", this._doKeyPress ).
                off( "keyup", this._doKeyUp );
            } else if ( nodeName === "div" || nodeName === "span" ) {
                $target.removeClass( this.markerClassName ).empty();
            }

            if ( datepicker_instActive === inst ) {
                datepicker_instActive = null;
            }
        },

        /* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
        _enableDatepicker: function( target ) {
            var nodeName, inline,
                $target = $( target ),
                inst = $.data( target, "datepicker" );

            if ( !$target.hasClass( this.markerClassName ) ) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if ( nodeName === "input" ) {
                target.disabled = false;
                inst.trigger.filter( "button" ).
                each( function() { this.disabled = false; } ).end().
                filter( "img" ).css( { opacity: "1.0", cursor: "" } );
            } else if ( nodeName === "div" || nodeName === "span" ) {
                inline = $target.children( "." + this._inlineClass );
                inline.children().removeClass( "ui-state-disabled" );
                inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
                prop( "disabled", false );
            }
            this._disabledInputs = $.map( this._disabledInputs,
                function( value ) { return ( value === target ? null : value ); } ); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
        _disableDatepicker: function( target ) {
            var nodeName, inline,
                $target = $( target ),
                inst = $.data( target, "datepicker" );

            if ( !$target.hasClass( this.markerClassName ) ) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if ( nodeName === "input" ) {
                target.disabled = true;
                inst.trigger.filter( "button" ).
                each( function() { this.disabled = true; } ).end().
                filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
            } else if ( nodeName === "div" || nodeName === "span" ) {
                inline = $target.children( "." + this._inlineClass );
                inline.children().addClass( "ui-state-disabled" );
                inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
                prop( "disabled", true );
            }
            this._disabledInputs = $.map( this._disabledInputs,
                function( value ) { return ( value === target ? null : value ); } ); // delete entry
            this._disabledInputs[ this._disabledInputs.length ] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
        _isDisabledDatepicker: function( target ) {
            if ( !target ) {
                return false;
            }
            for ( var i = 0; i < this._disabledInputs.length; i++ ) {
                if ( this._disabledInputs[ i ] === target ) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
        _getInst: function( target ) {
            try {
                return $.data( target, "datepicker" );
            }
            catch ( err ) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
        _optionDatepicker: function( target, name, value ) {
            var settings, date, minDate, maxDate,
                inst = this._getInst( target );

            if ( arguments.length === 2 && typeof name === "string" ) {
                return ( name === "defaults" ? $.extend( {}, $.datepicker._defaults ) :
                    ( inst ? ( name === "all" ? $.extend( {}, inst.settings ) :
                        this._get( inst, name ) ) : null ) );
            }

            settings = name || {};
            if ( typeof name === "string" ) {
                settings = {};
                settings[ name ] = value;
            }

            if ( inst ) {
                if ( this._curInst === inst ) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker( target, true );
                minDate = this._getMinMaxDate( inst, "min" );
                maxDate = this._getMinMaxDate( inst, "max" );
                datepicker_extendRemove( inst.settings, settings );

                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
                    inst.settings.minDate = this._formatDate( inst, minDate );
                }
                if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
                    inst.settings.maxDate = this._formatDate( inst, maxDate );
                }
                if ( "disabled" in settings ) {
                    if ( settings.disabled ) {
                        this._disableDatepicker( target );
                    } else {
                        this._enableDatepicker( target );
                    }
                }
                this._attachments( $( target ), inst );
                this._autoSize( inst );
                this._setDate( inst, date );
                this._updateAlternate( inst );
                this._updateDatepicker( inst );
            }
        },

        // Change method deprecated
        _changeDatepicker: function( target, name, value ) {
            this._optionDatepicker( target, name, value );
        },

        /* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
        _refreshDatepicker: function( target ) {
            var inst = this._getInst( target );
            if ( inst ) {
                this._updateDatepicker( inst );
            }
        },

        /* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
        _setDateDatepicker: function( target, date ) {
            var inst = this._getInst( target );
            if ( inst ) {
                this._setDate( inst, date );
                this._updateDatepicker( inst );
                this._updateAlternate( inst );
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
        _getDateDatepicker: function( target, noDefault ) {
            var inst = this._getInst( target );
            if ( inst && !inst.inline ) {
                this._setDateFromField( inst, noDefault );
            }
            return ( inst ? this._getDate( inst ) : null );
        },

        /* Handle keystrokes. */
        _doKeyDown: function( event ) {
            var onSelect, dateStr, sel,
                inst = $.datepicker._getInst( event.target ),
                handled = true,
                isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

            inst._keyEvent = true;
            if ( $.datepicker._datepickerShowing ) {
                switch ( event.keyCode ) {
                    case 9: $.datepicker._hideDatepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
                        $.datepicker._currentClass + ")", inst.dpDiv );
                        if ( sel[ 0 ] ) {
                            $.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
                        }

                        onSelect = $.datepicker._get( inst, "onSelect" );
                        if ( onSelect ) {
                            dateStr = $.datepicker._formatDate( inst );

                            // Trigger custom callback
                            onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
                        } else {
                            $.datepicker._hideDatepicker();
                        }

                        return false; // don't submit the form
                    case 27: $.datepicker._hideDatepicker();
                        break; // hide on escape
                    case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                        -$.datepicker._get( inst, "stepBigMonths" ) :
                        -$.datepicker._get( inst, "stepMonths" ) ), "M" );
                        break; // previous month/year on page up/+ ctrl
                    case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                        +$.datepicker._get( inst, "stepBigMonths" ) :
                        +$.datepicker._get( inst, "stepMonths" ) ), "M" );
                        break; // next month/year on page down/+ ctrl
                    case 35: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._clearDate( event.target );
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // clear on ctrl or command +end
                    case 36: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._gotoToday( event.target );
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // current on ctrl or command +home
                    case 37: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
                    }
                        handled = event.ctrlKey || event.metaKey;

                        // -1 day on ctrl or command +left
                        if ( event.originalEvent.altKey ) {
                            $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                                -$.datepicker._get( inst, "stepBigMonths" ) :
                                -$.datepicker._get( inst, "stepMonths" ) ), "M" );
                        }

                        // next month/year on alt +left on Mac
                        break;
                    case 38: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._adjustDate( event.target, -7, "D" );
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // -1 week on ctrl or command +up
                    case 39: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
                    }
                        handled = event.ctrlKey || event.metaKey;

                        // +1 day on ctrl or command +right
                        if ( event.originalEvent.altKey ) {
                            $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                                +$.datepicker._get( inst, "stepBigMonths" ) :
                                +$.datepicker._get( inst, "stepMonths" ) ), "M" );
                        }

                        // next month/year on alt +right
                        break;
                    case 40: if ( event.ctrlKey || event.metaKey ) {
                        $.datepicker._adjustDate( event.target, +7, "D" );
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // +1 week on ctrl or command +down
                    default: handled = false;
                }
            } else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
                $.datepicker._showDatepicker( this );
            } else {
                handled = false;
            }

            if ( handled ) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function( event ) {
            var chars, chr,
                inst = $.datepicker._getInst( event.target );

            if ( $.datepicker._get( inst, "constrainInput" ) ) {
                chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
                chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
                return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function( event ) {
            var date,
                inst = $.datepicker._getInst( event.target );

            if ( inst.input.val() !== inst.lastVal ) {
                try {
                    date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
                        ( inst.input ? inst.input.val() : null ),
                        $.datepicker._getFormatConfig( inst ) );

                    if ( date ) { // only if valid
                        $.datepicker._setDateFromField( inst );
                        $.datepicker._updateAlternate( inst );
                        $.datepicker._updateDatepicker( inst );
                    }
                }
                catch ( err ) {
                }
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
        _showDatepicker: function( input ) {
            input = input.target || input;
            if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
                input = $( "input", input.parentNode )[ 0 ];
            }

            if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed,
                offset, showAnim, duration;

            inst = $.datepicker._getInst( input );
            if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
                $.datepicker._curInst.dpDiv.stop( true, true );
                if ( inst && $.datepicker._datepickerShowing ) {
                    $.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
                }
            }

            beforeShow = $.datepicker._get( inst, "beforeShow" );
            beforeShowSettings = beforeShow ? beforeShow.apply( input, [ input, inst ] ) : {};
            if ( beforeShowSettings === false ) {
                return;
            }
            datepicker_extendRemove( inst.settings, beforeShowSettings );

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField( inst );

            if ( $.datepicker._inDialog ) { // hide cursor
                input.value = "";
            }
            if ( !$.datepicker._pos ) { // position below input
                $.datepicker._pos = $.datepicker._findPos( input );
                $.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $( input ).parents().each( function() {
                isFixed |= $( this ).css( "position" ) === "fixed";
                return !isFixed;
            } );

            offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
            $.datepicker._pos = null;

            //to avoid flashes on Firefox
            inst.dpDiv.empty();

            // determine sizing offscreen
            inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
            $.datepicker._updateDatepicker( inst );

            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset( inst, offset, isFixed );
            inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
                    "static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
                left: offset.left + "px", top: offset.top + "px" } );

            if ( !inst.inline ) {
                showAnim = $.datepicker._get( inst, "showAnim" );
                duration = $.datepicker._get( inst, "duration" );
                inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
                $.datepicker._datepickerShowing = true;

                if ( $.effects && $.effects.effect[ showAnim ] ) {
                    inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
                } else {
                    inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
                }

                if ( $.datepicker._shouldFocusInput( inst ) ) {
                    inst.input.trigger( "focus" );
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function( inst ) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            datepicker_instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append( this._generateHTML( inst ) );
            this._attachHandlers( inst );

            var origyearshtml,
                numMonths = this._getNumberOfMonths( inst ),
                cols = numMonths[ 1 ],
                width = 17,
                activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

            if ( activeCell.length > 0 ) {
                datepicker_handleMouseover.apply( activeCell.get( 0 ) );
            }

            inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
            if ( cols > 1 ) {
                inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
            }
            inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
            "Class" ]( "ui-datepicker-multi" );
            inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
            "Class" ]( "ui-datepicker-rtl" );

            if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
                inst.input.trigger( "focus" );
            }

            // Deffered render of the years select (to avoid flashes on Firefox)
            if ( inst.yearshtml ) {
                origyearshtml = inst.yearshtml;
                setTimeout( function() {

                    //assure that inst.yearshtml didn't change.
                    if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
                        inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0 );
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function( inst ) {
            return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function( inst, offset, isFixed ) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
                viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

            offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
            offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
            offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

            // Now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
                Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
            offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
                Math.abs( dpHeight + inputHeight ) : 0 );

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function( obj ) {
            var position,
                inst = this._getInst( obj ),
                isRTL = this._get( inst, "isRTL" );

            while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
                obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
            }

            position = $( obj ).offset();
            return [ position.left, position.top ];
        },

        /* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
        _hideDatepicker: function( input ) {
            var showAnim, duration, postProcess, onClose,
                inst = this._curInst;

            if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
                return;
            }

            if ( this._datepickerShowing ) {
                showAnim = this._get( inst, "showAnim" );
                duration = this._get( inst, "duration" );
                postProcess = function() {
                    $.datepicker._tidyDialog( inst );
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
                    inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
                } else {
                    inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
                        ( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
                }

                if ( !showAnim ) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get( inst, "onClose" );
                if ( onClose ) {
                    onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
                }

                this._lastInput = null;
                if ( this._inDialog ) {
                    this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
                    if ( $.blockUI ) {
                        $.unblockUI();
                        $( "body" ).append( this.dpDiv );
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function( inst ) {
            inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function( event ) {
            if ( !$.datepicker._curInst ) {
                return;
            }

            var $target = $( event.target ),
                inst = $.datepicker._getInst( $target[ 0 ] );

            if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
                $target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
                !$target.hasClass( $.datepicker.markerClassName ) &&
                !$target.closest( "." + $.datepicker._triggerClass ).length &&
                $.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
                ( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function( id, offset, period ) {
            var target = $( id ),
                inst = this._getInst( target[ 0 ] );

            if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
                return;
            }
            this._adjustInstDate( inst, offset +
                ( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
                period );
            this._updateDatepicker( inst );
        },

        /* Action for current link. */
        _gotoToday: function( id ) {
            var date,
                target = $( id ),
                inst = this._getInst( target[ 0 ] );

            if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange( inst );
            this._adjustDate( target );
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function( id, select, period ) {
            var target = $( id ),
                inst = this._getInst( target[ 0 ] );

            inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
                inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
                    parseInt( select.options[ select.selectedIndex ].value, 10 );

            this._notifyChange( inst );
            this._adjustDate( target );
        },

        /* Action for selecting a day. */
        _selectDay: function( id, month, year, td ) {
            var inst,
                target = $( id );

            if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
                return;
            }

            inst = this._getInst( target[ 0 ] );
            inst.selectedDay = inst.currentDay = $( "a", td ).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate( id, this._formatDate( inst,
                inst.currentDay, inst.currentMonth, inst.currentYear ) );
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function( id ) {
            var target = $( id );
            this._selectDate( target, "" );
        },

        /* Update the input field with the selected date. */
        _selectDate: function( id, dateStr ) {
            var onSelect,
                target = $( id ),
                inst = this._getInst( target[ 0 ] );

            dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
            if ( inst.input ) {
                inst.input.val( dateStr );
            }
            this._updateAlternate( inst );

            onSelect = this._get( inst, "onSelect" );
            if ( onSelect ) {
                onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
            } else if ( inst.input ) {
                inst.input.trigger( "change" ); // fire the change event
            }

            if ( inst.inline ) {
                this._updateDatepicker( inst );
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[ 0 ];
                if ( typeof( inst.input[ 0 ] ) !== "object" ) {
                    inst.input.trigger( "focus" ); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function( inst ) {
            var altFormat, date, dateStr,
                altField = this._get( inst, "altField" );

            if ( altField ) { // update alternate field too
                altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
                date = this._getDate( inst );
                dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
                $( altField ).val( dateStr );
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
        noWeekends: function( date ) {
            var day = date.getDay();
            return [ ( day > 0 && day < 6 ), "" ];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
        iso8601Week: function( date ) {
            var time,
                checkDate = new Date( date.getTime() );

            // Find Thursday of this week starting on Monday
            checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

            time = checkDate.getTime();
            checkDate.setMonth( 0 ); // Compare with Jan 1
            checkDate.setDate( 1 );
            return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
        },

        /* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
        parseDate: function( format, value, settings ) {
            if ( format == null || value == null ) {
                throw "Invalid arguments";
            }

            value = ( typeof value === "object" ? value.toString() : value + "" );
            if ( value === "" ) {
                return null;
            }

            var iFormat, dim, extra,
                iValue = 0,
                shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
                shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
                    new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
                dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
                dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
                monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
                monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,

                // Check whether a format character is doubled
                lookAhead = function( match ) {
                    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
                    if ( matches ) {
                        iFormat++;
                    }
                    return matches;
                },

                // Extract a number from the string value
                getNumber = function( match ) {
                    var isDoubled = lookAhead( match ),
                        size = ( match === "@" ? 14 : ( match === "!" ? 20 :
                            ( match === "y" && isDoubled ? 4 : ( match === "o" ? 3 : 2 ) ) ) ),
                        minSize = ( match === "y" ? size : 1 ),
                        digits = new RegExp( "^\\d{" + minSize + "," + size + "}" ),
                        num = value.substring( iValue ).match( digits );
                    if ( !num ) {
                        throw "Missing number at position " + iValue;
                    }
                    iValue += num[ 0 ].length;
                    return parseInt( num[ 0 ], 10 );
                },

                // Extract a name from the string value and convert to an index
                getName = function( match, shortNames, longNames ) {
                    var index = -1,
                        names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
                            return [ [ k, v ] ];
                        } ).sort( function( a, b ) {
                            return -( a[ 1 ].length - b[ 1 ].length );
                        } );

                    $.each( names, function( i, pair ) {
                        var name = pair[ 1 ];
                        if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
                            index = pair[ 0 ];
                            iValue += name.length;
                            return false;
                        }
                    } );
                    if ( index !== -1 ) {
                        return index + 1;
                    } else {
                        throw "Unknown name at position " + iValue;
                    }
                },

                // Confirm that a literal character matches the string value
                checkLiteral = function() {
                    if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
                        throw "Unexpected literal at position " + iValue;
                    }
                    iValue++;
                };

            for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
                if ( literal ) {
                    if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch ( format.charAt( iFormat ) ) {
                        case "d":
                            day = getNumber( "d" );
                            break;
                        case "D":
                            getName( "D", dayNamesShort, dayNames );
                            break;
                        case "o":
                            doy = getNumber( "o" );
                            break;
                        case "m":
                            month = getNumber( "m" );
                            break;
                        case "M":
                            month = getName( "M", monthNamesShort, monthNames );
                            break;
                        case "y":
                            year = getNumber( "y" );
                            break;
                        case "@":
                            date = new Date( getNumber( "@" ) );
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if ( lookAhead( "'" ) ) {
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if ( iValue < value.length ) {
                extra = value.substr( iValue );
                if ( !/^\s+/.test( extra ) ) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if ( year === -1 ) {
                year = new Date().getFullYear();
            } else if ( year < 100 ) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                    ( year <= shortYearCutoff ? 0 : -100 );
            }

            if ( doy > -1 ) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth( year, month - 1 );
                    if ( day <= dim ) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while ( true );
            }

            date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
            if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y", // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd", // ISO 8601

        _ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
            Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

        /* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
        formatDate: function( format, date, settings ) {
            if ( !date ) {
                return "";
            }

            var iFormat,
                dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
                dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
                monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
                monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

                // Check whether a format character is doubled
                lookAhead = function( match ) {
                    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
                    if ( matches ) {
                        iFormat++;
                    }
                    return matches;
                },

                // Format a number, with leading zero if necessary
                formatNumber = function( match, value, len ) {
                    var num = "" + value;
                    if ( lookAhead( match ) ) {
                        while ( num.length < len ) {
                            num = "0" + num;
                        }
                    }
                    return num;
                },

                // Format a name, short or long as requested
                formatName = function( match, value, shortNames, longNames ) {
                    return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
                },
                output = "",
                literal = false;

            if ( date ) {
                for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
                    if ( literal ) {
                        if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
                            literal = false;
                        } else {
                            output += format.charAt( iFormat );
                        }
                    } else {
                        switch ( format.charAt( iFormat ) ) {
                            case "d":
                                output += formatNumber( "d", date.getDate(), 2 );
                                break;
                            case "D":
                                output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
                                break;
                            case "o":
                                output += formatNumber( "o",
                                    Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
                                break;
                            case "m":
                                output += formatNumber( "m", date.getMonth() + 1, 2 );
                                break;
                            case "M":
                                output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
                                break;
                            case "y":
                                output += ( lookAhead( "y" ) ? date.getFullYear() :
                                    ( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if ( lookAhead( "'" ) ) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt( iFormat );
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function( format ) {
            var iFormat,
                chars = "",
                literal = false,

                // Check whether a format character is doubled
                lookAhead = function( match ) {
                    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
                    if ( matches ) {
                        iFormat++;
                    }
                    return matches;
                };

            for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
                if ( literal ) {
                    if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
                        literal = false;
                    } else {
                        chars += format.charAt( iFormat );
                    }
                } else {
                    switch ( format.charAt( iFormat ) ) {
                        case "d": case "m": case "y": case "@":
                            chars += "0123456789";
                            break;
                        case "D": case "M":
                            return null; // Accept anything
                        case "'":
                            if ( lookAhead( "'" ) ) {
                                chars += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            chars += format.charAt( iFormat );
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function( inst, name ) {
            return inst.settings[ name ] !== undefined ?
                inst.settings[ name ] : this._defaults[ name ];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function( inst, noDefault ) {
            if ( inst.input.val() === inst.lastVal ) {
                return;
            }

            var dateFormat = this._get( inst, "dateFormat" ),
                dates = inst.lastVal = inst.input ? inst.input.val() : null,
                defaultDate = this._getDefaultDate( inst ),
                date = defaultDate,
                settings = this._getFormatConfig( inst );

            try {
                date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
            } catch ( event ) {
                dates = ( noDefault ? "" : dates );
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = ( dates ? date.getDate() : 0 );
            inst.currentMonth = ( dates ? date.getMonth() : 0 );
            inst.currentYear = ( dates ? date.getFullYear() : 0 );
            this._adjustInstDate( inst );
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function( inst ) {
            return this._restrictMinMax( inst,
                this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function( inst, date, defaultDate ) {
            var offsetNumeric = function( offset ) {
                    var date = new Date();
                    date.setDate( date.getDate() + offset );
                    return date;
                },
                offsetString = function( offset ) {
                    try {
                        return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
                            offset, $.datepicker._getFormatConfig( inst ) );
                    }
                    catch ( e ) {

                        // Ignore
                    }

                    var date = ( offset.toLowerCase().match( /^c/ ) ?
                        $.datepicker._getDate( inst ) : null ) || new Date(),
                        year = date.getFullYear(),
                        month = date.getMonth(),
                        day = date.getDate(),
                        pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        matches = pattern.exec( offset );

                    while ( matches ) {
                        switch ( matches[ 2 ] || "d" ) {
                            case "d" : case "D" :
                                day += parseInt( matches[ 1 ], 10 ); break;
                            case "w" : case "W" :
                                day += parseInt( matches[ 1 ], 10 ) * 7; break;
                            case "m" : case "M" :
                                month += parseInt( matches[ 1 ], 10 );
                                day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
                                break;
                            case "y": case "Y" :
                                year += parseInt( matches[ 1 ], 10 );
                                day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
                                break;
                        }
                        matches = pattern.exec( offset );
                    }
                    return new Date( year, month, day );
                },
                newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
                    ( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

            newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
            if ( newDate ) {
                newDate.setHours( 0 );
                newDate.setMinutes( 0 );
                newDate.setSeconds( 0 );
                newDate.setMilliseconds( 0 );
            }
            return this._daylightSavingAdjust( newDate );
        },

        /* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
        _daylightSavingAdjust: function( date ) {
            if ( !date ) {
                return null;
            }
            date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function( inst, date, noChange ) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
                this._notifyChange( inst );
            }
            this._adjustInstDate( inst );
            if ( inst.input ) {
                inst.input.val( clear ? "" : this._formatDate( inst ) );
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function( inst ) {
            var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
                this._daylightSavingAdjust( new Date(
                    inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
        _attachHandlers: function( inst ) {
            var stepMonths = this._get( inst, "stepMonths" ),
                id = "#" + inst.id.replace( /\\\\/g, "\\" );
            inst.dpDiv.find( "[data-handler]" ).map( function() {
                var handler = {
                    prev: function() {
                        $.datepicker._adjustDate( id, -stepMonths, "M" );
                    },
                    next: function() {
                        $.datepicker._adjustDate( id, +stepMonths, "M" );
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker();
                    },
                    today: function() {
                        $.datepicker._gotoToday( id );
                    },
                    selectDay: function() {
                        $.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
                        return false;
                    },
                    selectMonth: function() {
                        $.datepicker._selectMonthYear( id, this, "M" );
                        return false;
                    },
                    selectYear: function() {
                        $.datepicker._selectMonthYear( id, this, "Y" );
                        return false;
                    }
                };
                $( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
            } );
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function( inst ) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
                controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
                monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
                selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
                cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
                printDate, dRow, tbody, daySettings, otherMonth, unselectable,
                tempDate = new Date(),
                today = this._daylightSavingAdjust(
                    new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
                isRTL = this._get( inst, "isRTL" ),
                showButtonPanel = this._get( inst, "showButtonPanel" ),
                hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
                navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
                numMonths = this._getNumberOfMonths( inst ),
                showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
                stepMonths = this._get( inst, "stepMonths" ),
                isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
                currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
                    new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
                minDate = this._getMinMaxDate( inst, "min" ),
                maxDate = this._getMinMaxDate( inst, "max" ),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;

            if ( drawMonth < 0 ) {
                drawMonth += 12;
                drawYear--;
            }
            if ( maxDate ) {
                maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
                    maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
                maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
                while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
                    drawMonth--;
                    if ( drawMonth < 0 ) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get( inst, "prevText" );
            prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
                this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
                this._getFormatConfig( inst ) ) );

            prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
                "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
                " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
                ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

            nextText = this._get( inst, "nextText" );
            nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
                this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
                this._getFormatConfig( inst ) ) );

            next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
                "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
                " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
                ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

            currentText = this._get( inst, "currentText" );
            gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
            currentText = ( !navigationAsDateFormat ? currentText :
                this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

            controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get( inst, "closeText" ) + "</button>" : "" );

            buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
                ( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
                    ">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

            firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
            firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

            showWeek = this._get( inst, "showWeek" );
            dayNames = this._get( inst, "dayNames" );
            dayNamesMin = this._get( inst, "dayNamesMin" );
            monthNames = this._get( inst, "monthNames" );
            monthNamesShort = this._get( inst, "monthNamesShort" );
            beforeShowDay = this._get( inst, "beforeShowDay" );
            showOtherMonths = this._get( inst, "showOtherMonths" );
            selectOtherMonths = this._get( inst, "selectOtherMonths" );
            defaultDate = this._getDefaultDate( inst );
            html = "";

            for ( row = 0; row < numMonths[ 0 ]; row++ ) {
                group = "";
                this.maxRows = 4;
                for ( col = 0; col < numMonths[ 1 ]; col++ ) {
                    selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if ( isMultiMonth ) {
                        calender += "<div class='ui-datepicker-group";
                        if ( numMonths[ 1 ] > 1 ) {
                            switch ( col ) {
                                case 0: calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
                                case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
                                default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
                        ( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
                        ( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
                        this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
                            row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
                        "</div><table class='ui-datepicker-calendar'><thead>" +
                        "<tr>";
                    thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
                    for ( dow = 0; dow < 7; dow++ ) { // days of the week
                        day = ( dow + firstDay ) % 7;
                        thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
                            "<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
                    if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
                        inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
                    }
                    leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
                    curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
                    numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
                    for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
                        calender += "<tr>";
                        tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
                            this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
                        for ( dow = 0; dow < 7; dow++ ) { // create date picker days
                            daySettings = ( beforeShowDay ?
                                beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
                            otherMonth = ( printDate.getMonth() !== drawMonth );
                            unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
                                ( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
                            tbody += "<td class='" +
                                ( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
                                ( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
                                ( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
                                ( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

                                    // or defaultDate is current printedDate and defaultDate is selectedDate
                                    " " + this._dayOverClass : "" ) + // highlight selected day
                                ( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
                                ( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
                                    ( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
                                    ( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
                                ( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g, "&#39;" ) + "'" : "" ) + // cell title
                                ( unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'" ) + ">" + // actions
                                ( otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                                    ( unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                                        ( printDate.getTime() === today.getTime() ? " ui-state-highlight" : "" ) +
                                        ( printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "" ) + // highlight selected day
                                        ( otherMonth ? " ui-priority-secondary" : "" ) + // distinguish dates from other months
                                        "' href='#'>" + printDate.getDate() + "</a>" ) ) + "</td>"; // display selectable date
                            printDate.setDate( printDate.getDate() + 1 );
                            printDate = this._daylightSavingAdjust( printDate );
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if ( drawMonth > 11 ) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + ( isMultiMonth ? "</div>" +
                        ( ( numMonths[ 0 ] > 0 && col === numMonths[ 1 ] - 1 ) ? "<div class='ui-datepicker-row-break'></div>" : "" ) : "" );
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function( inst, drawMonth, drawYear, minDate, maxDate,
                                            secondary, monthNames, monthNamesShort ) {

            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
                changeMonth = this._get( inst, "changeMonth" ),
                changeYear = this._get( inst, "changeYear" ),
                showMonthAfterYear = this._get( inst, "showMonthAfterYear" ),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";

            // Month selection
            if ( secondary || !changeMonth ) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
            } else {
                inMinYear = ( minDate && minDate.getFullYear() === drawYear );
                inMaxYear = ( maxDate && maxDate.getFullYear() === drawYear );
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for ( month = 0; month < 12; month++ ) {
                    if ( ( !inMinYear || month >= minDate.getMonth() ) && ( !inMaxYear || month <= maxDate.getMonth() ) ) {
                        monthHtml += "<option value='" + month + "'" +
                            ( month === drawMonth ? " selected='selected'" : "" ) +
                            ">" + monthNamesShort[ month ] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if ( !showMonthAfterYear ) {
                html += monthHtml + ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" );
            }

            // Year selection
            if ( !inst.yearshtml ) {
                inst.yearshtml = "";
                if ( secondary || !changeYear ) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {

                    // determine range of years to display
                    years = this._get( inst, "yearRange" ).split( ":" );
                    thisYear = new Date().getFullYear();
                    determineYear = function( value ) {
                        var year = ( value.match( /c[+\-].*/ ) ? drawYear + parseInt( value.substring( 1 ), 10 ) :
                            ( value.match( /[+\-].*/ ) ? thisYear + parseInt( value, 10 ) :
                                parseInt( value, 10 ) ) );
                        return ( isNaN( year ) ? thisYear : year );
                    };
                    year = determineYear( years[ 0 ] );
                    endYear = Math.max( year, determineYear( years[ 1 ] || "" ) );
                    year = ( minDate ? Math.max( year, minDate.getFullYear() ) : year );
                    endYear = ( maxDate ? Math.min( endYear, maxDate.getFullYear() ) : endYear );
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for ( ; year <= endYear; year++ ) {
                        inst.yearshtml += "<option value='" + year + "'" +
                            ( year === drawYear ? " selected='selected'" : "" ) +
                            ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get( inst, "yearSuffix" );
            if ( showMonthAfterYear ) {
                html += ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" ) + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function( inst, offset, period ) {
            var year = inst.selectedYear + ( period === "Y" ? offset : 0 ),
                month = inst.selectedMonth + ( period === "M" ? offset : 0 ),
                day = Math.min( inst.selectedDay, this._getDaysInMonth( year, month ) ) + ( period === "D" ? offset : 0 ),
                date = this._restrictMinMax( inst, this._daylightSavingAdjust( new Date( year, month, day ) ) );

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if ( period === "M" || period === "Y" ) {
                this._notifyChange( inst );
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function( inst, date ) {
            var minDate = this._getMinMaxDate( inst, "min" ),
                maxDate = this._getMinMaxDate( inst, "max" ),
                newDate = ( minDate && date < minDate ? minDate : date );
            return ( maxDate && newDate > maxDate ? maxDate : newDate );
        },

        /* Notify change of month/year. */
        _notifyChange: function( inst ) {
            var onChange = this._get( inst, "onChangeMonthYear" );
            if ( onChange ) {
                onChange.apply( ( inst.input ? inst.input[ 0 ] : null ),
                    [ inst.selectedYear, inst.selectedMonth + 1, inst ] );
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function( inst ) {
            var numMonths = this._get( inst, "numberOfMonths" );
            return ( numMonths == null ? [ 1, 1 ] : ( typeof numMonths === "number" ? [ 1, numMonths ] : numMonths ) );
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function( inst, minMax ) {
            return this._determineDate( inst, this._get( inst, minMax + "Date" ), null );
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function( year, month ) {
            return 32 - this._daylightSavingAdjust( new Date( year, month, 32 ) ).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function( year, month ) {
            return new Date( year, month, 1 ).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function( inst, offset, curYear, curMonth ) {
            var numMonths = this._getNumberOfMonths( inst ),
                date = this._daylightSavingAdjust( new Date( curYear,
                    curMonth + ( offset < 0 ? offset : numMonths[ 0 ] * numMonths[ 1 ] ), 1 ) );

            if ( offset < 0 ) {
                date.setDate( this._getDaysInMonth( date.getFullYear(), date.getMonth() ) );
            }
            return this._isInRange( inst, date );
        },

        /* Is the given date in the accepted range? */
        _isInRange: function( inst, date ) {
            var yearSplit, currentYear,
                minDate = this._getMinMaxDate( inst, "min" ),
                maxDate = this._getMinMaxDate( inst, "max" ),
                minYear = null,
                maxYear = null,
                years = this._get( inst, "yearRange" );
            if ( years ) {
                yearSplit = years.split( ":" );
                currentYear = new Date().getFullYear();
                minYear = parseInt( yearSplit[ 0 ], 10 );
                maxYear = parseInt( yearSplit[ 1 ], 10 );
                if ( yearSplit[ 0 ].match( /[+\-].*/ ) ) {
                    minYear += currentYear;
                }
                if ( yearSplit[ 1 ].match( /[+\-].*/ ) ) {
                    maxYear += currentYear;
                }
            }

            return ( ( !minDate || date.getTime() >= minDate.getTime() ) &&
                ( !maxDate || date.getTime() <= maxDate.getTime() ) &&
                ( !minYear || date.getFullYear() >= minYear ) &&
                ( !maxYear || date.getFullYear() <= maxYear ) );
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function( inst ) {
            var shortYearCutoff = this._get( inst, "shortYearCutoff" );
            shortYearCutoff = ( typeof shortYearCutoff !== "string" ? shortYearCutoff :
                new Date().getFullYear() % 100 + parseInt( shortYearCutoff, 10 ) );
            return { shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get( inst, "dayNamesShort" ), dayNames: this._get( inst, "dayNames" ),
                monthNamesShort: this._get( inst, "monthNamesShort" ), monthNames: this._get( inst, "monthNames" ) };
        },

        /* Format the given date for display. */
        _formatDate: function( inst, day, month, year ) {
            if ( !day ) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = ( day ? ( typeof day === "object" ? day :
                this._daylightSavingAdjust( new Date( year, month, day ) ) ) :
                this._daylightSavingAdjust( new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
            return this.formatDate( this._get( inst, "dateFormat" ), date, this._getFormatConfig( inst ) );
        }
    } );

    /*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
    function datepicker_bindHover( dpDiv ) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on( "mouseout", selector, function() {
            $( this ).removeClass( "ui-state-hover" );
            if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
                $( this ).removeClass( "ui-datepicker-prev-hover" );
            }
            if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
                $( this ).removeClass( "ui-datepicker-next-hover" );
            }
        } )
            .on( "mouseover", selector, datepicker_handleMouseover );
    }

    function datepicker_handleMouseover() {
        if ( !$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] : datepicker_instActive.input[ 0 ] ) ) {
            $( this ).parents( ".ui-datepicker-calendar" ).find( "a" ).removeClass( "ui-state-hover" );
            $( this ).addClass( "ui-state-hover" );
            if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
                $( this ).addClass( "ui-datepicker-prev-hover" );
            }
            if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
                $( this ).addClass( "ui-datepicker-next-hover" );
            }
        }
    }

    /* jQuery extend now ignores nulls! */
    function datepicker_extendRemove( target, props ) {
        $.extend( target, props );
        for ( var name in props ) {
            if ( props[ name ] == null ) {
                target[ name ] = props[ name ];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
    $.fn.datepicker = function( options ) {

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if ( !this.length ) {
            return this;
        }

        /* Initialise the date picker. */
        if ( !$.datepicker.initialized ) {
            $( document ).on( "mousedown", $.datepicker._checkExternalClick );
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ( $( "#" + $.datepicker._mainDivId ).length === 0 ) {
            $( "body" ).append( $.datepicker.dpDiv );
        }

        var otherArgs = Array.prototype.slice.call( arguments, 1 );
        if ( typeof options === "string" && ( options === "isDisabled" || options === "getDate" || options === "widget" ) ) {
            return $.datepicker[ "_" + options + "Datepicker" ].
            apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
        }
        if ( options === "option" && arguments.length === 2 && typeof arguments[ 1 ] === "string" ) {
            return $.datepicker[ "_" + options + "Datepicker" ].
            apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
        }
        return this.each( function() {
            typeof options === "string" ?
                $.datepicker[ "_" + options + "Datepicker" ].
                apply( $.datepicker, [ this ].concat( otherArgs ) ) :
                $.datepicker._attachDatepicker( this, options );
        } );
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.12.1";

    var widgetsDatepicker = $.datepicker;




// This file is deprecated
    var ie = $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

    /*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/



    var mouseHandled = false;
    $( document ).on( "mouseup", function() {
        mouseHandled = false;
    } );

    var widgetsMouse = $.widget( "ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;

            this.element
                .on( "mousedown." + this.widgetName, function( event ) {
                    return that._mouseDown( event );
                } )
                .on( "click." + this.widgetName, function( event ) {
                    if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
                        $.removeData( event.target, that.widgetName + ".preventClickEvent" );
                        event.stopImmediatePropagation();
                        return false;
                    }
                } );

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.off( "." + this.widgetName );
            if ( this._mouseMoveDelegate ) {
                this.document
                    .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                    .off( "mouseup." + this.widgetName, this._mouseUpDelegate );
            }
        },

        _mouseDown: function( event ) {

            // don't let more than one widget handle mouseStart
            if ( mouseHandled ) {
                return;
            }

            this._mouseMoved = false;

            // We may have missed mouseup (out of window)
            ( this._mouseStarted && this._mouseUp( event ) );

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = ( event.which === 1 ),

                // event.target.nodeName works around a bug in IE 8 with
                // disabled inputs (#7620)
                elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
                    $( event.target ).closest( this.options.cancel ).length : false );
            if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if ( !this.mouseDelayMet ) {
                this._mouseDelayTimer = setTimeout( function() {
                    that.mouseDelayMet = true;
                }, this.options.delay );
            }

            if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
                this._mouseStarted = ( this._mouseStart( event ) !== false );
                if ( !this._mouseStarted ) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
                $.removeData( event.target, this.widgetName + ".preventClickEvent" );
            }

            // These delegates are required to keep context
            this._mouseMoveDelegate = function( event ) {
                return that._mouseMove( event );
            };
            this._mouseUpDelegate = function( event ) {
                return that._mouseUp( event );
            };

            this.document
                .on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .on( "mouseup." + this.widgetName, this._mouseUpDelegate );

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function( event ) {

            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if ( this._mouseMoved ) {

                // IE mouseup check - mouseup happened when mouse was out of window
                if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
                    !event.button ) {
                    return this._mouseUp( event );

                    // Iframe mouseup check - mouseup occurred in another document
                } else if ( !event.which ) {

                    // Support: Safari <=8 - 9
                    // Safari sets which to 0 if you press any of the following keys
                    // during a drag (#14461)
                    if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
                        event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
                        this.ignoreMissingWhich = true;
                    } else if ( !this.ignoreMissingWhich ) {
                        return this._mouseUp( event );
                    }
                }
            }

            if ( event.which || event.button ) {
                this._mouseMoved = true;
            }

            if ( this._mouseStarted ) {
                this._mouseDrag( event );
                return event.preventDefault();
            }

            if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
                this._mouseStarted =
                    ( this._mouseStart( this._mouseDownEvent, event ) !== false );
                ( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
            }

            return !this._mouseStarted;
        },

        _mouseUp: function( event ) {
            this.document
                .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .off( "mouseup." + this.widgetName, this._mouseUpDelegate );

            if ( this._mouseStarted ) {
                this._mouseStarted = false;

                if ( event.target === this._mouseDownEvent.target ) {
                    $.data( event.target, this.widgetName + ".preventClickEvent", true );
                }

                this._mouseStop( event );
            }

            if ( this._mouseDelayTimer ) {
                clearTimeout( this._mouseDelayTimer );
                delete this._mouseDelayTimer;
            }

            this.ignoreMissingWhich = false;
            mouseHandled = false;
            event.preventDefault();
        },

        _mouseDistanceMet: function( event ) {
            return ( Math.max(
                    Math.abs( this._mouseDownEvent.pageX - event.pageX ),
                    Math.abs( this._mouseDownEvent.pageY - event.pageY )
                ) >= this.options.distance
            );
        },

        _mouseDelayMet: function( /* event */ ) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function( /* event */ ) {},
        _mouseDrag: function( /* event */ ) {},
        _mouseStop: function( /* event */ ) {},
        _mouseCapture: function( /* event */ ) { return true; }
    } );




// $.ui.plugin is deprecated. Use $.widget() extensions instead.
    var plugin = $.ui.plugin = {
        add: function( module, option, set ) {
            var i,
                proto = $.ui[ module ].prototype;
            for ( i in set ) {
                proto.plugins[ i ] = proto.plugins[ i ] || [];
                proto.plugins[ i ].push( [ option, set[ i ] ] );
            }
        },
        call: function( instance, name, args, allowDisconnected ) {
            var i,
                set = instance.plugins[ name ];

            if ( !set ) {
                return;
            }

            if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
                instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
                return;
            }

            for ( i = 0; i < set.length; i++ ) {
                if ( instance.options[ set[ i ][ 0 ] ] ) {
                    set[ i ][ 1 ].apply( instance.element, args );
                }
            }
        }
    };



    var safeBlur = $.ui.safeBlur = function( element ) {

        // Support: IE9 - 10 only
        // If the <body> is blurred, IE will switch windows, see #9420
        if ( element && element.nodeName.toLowerCase() !== "body" ) {
            $( element ).trigger( "blur" );
        }
    };


    /*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css



    $.widget( "ui.draggable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // Callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {

            if ( this.options.helper === "original" ) {
                this._setPositionRelative();
            }
            if ( this.options.addClasses ) {
                this._addClass( "ui-draggable" );
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "handle" ) {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function() {
            if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
                this.destroyOnClear = true;
                return;
            }
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function( event ) {
            var o = this.options;

            // Among others, prevent a drag on a resizable-handle
            if ( this.helper || o.disabled ||
                $( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle( event );
            if ( !this.handle ) {
                return false;
            }

            this._blurActiveElement( event );

            this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

            return true;

        },

        _blockFrames: function( selector ) {
            this.iframeBlocks = this.document.find( selector ).map( function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css( "position", "absolute" )
                    .appendTo( iframe.parent() )
                    .outerWidth( iframe.outerWidth() )
                    .outerHeight( iframe.outerHeight() )
                    .offset( iframe.offset() )[ 0 ];
            } );
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function( event ) {
            var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
                target = $( event.target );

            // Don't blur if the event occurred on an element that is within
            // the currently focused element
            // See #10527, #12472
            if ( target.closest( activeElement ).length ) {
                return;
            }

            // Blur any element that currently has focus, see #4261
            $.ui.safeBlur( activeElement );
        },

        _mouseStart: function( event ) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper( event );

            this._addClass( this.helper, "ui-draggable-dragging" );

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.current = this;
            }

            /*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css( "position" );
            this.scrollParent = this.helper.scrollParent( true );
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter( function() {
                return $( this ).css( "position" ) === "fixed";
            } ).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets( event );

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition( event, false );
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if ( this._trigger( "start", event ) === false ) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ( $.ui.ddmanager && !o.dropBehaviour ) {
                $.ui.ddmanager.prepareOffsets( this, event );
            }

            // Execute the drag once - this causes the helper not to be visible before getting its
            // correct position
            this._mouseDrag( event, true );

            // If the ddmanager is used for droppables, inform the manager that dragging has started
            // (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStart( this, event );
            }

            return true;
        },

        _refreshOffsets: function( event ) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function( event, noPropagation ) {

            // reset any necessary cached properties (see #5009)
            if ( this.hasFixedAncestor ) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition( event, true );
            this.positionAbs = this._convertPositionTo( "absolute" );

            //Call plugins and callbacks and use the resulting position if something is returned
            if ( !noPropagation ) {
                var ui = this._uiHash();
                if ( this._trigger( "drag", event, ui ) === false ) {
                    this._mouseUp( new $.Event( "mouseup", event ) );
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[ 0 ].style.left = this.position.left + "px";
            this.helper[ 0 ].style.top = this.position.top + "px";

            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.drag( this, event );
            }

            return false;
        },

        _mouseStop: function( event ) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
                dropped = $.ui.ddmanager.drop( this, event );
            }

            //if a drop comes from outside (a sortable)
            if ( this.dropped ) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if ( ( this.options.revert === "invalid" && !dropped ) ||
                ( this.options.revert === "valid" && dropped ) ||
                this.options.revert === true || ( $.isFunction( this.options.revert ) &&
                    this.options.revert.call( this.element, dropped ) )
            ) {
                $( this.helper ).animate(
                    this.originalPosition,
                    parseInt( this.options.revertDuration, 10 ),
                    function() {
                        if ( that._trigger( "stop", event ) !== false ) {
                            that._clear();
                        }
                    }
                );
            } else {
                if ( this._trigger( "stop", event ) !== false ) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function( event ) {
            this._unblockFrames();

            // If the ddmanager is used for droppables, inform the manager that dragging has stopped
            // (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStop( this, event );
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if ( this.handleElement.is( event.target ) ) {

                // The interaction is over; whether or not the click resulted in a drag,
                // focus the element
                this.element.trigger( "focus" );
            }

            return $.ui.mouse.prototype._mouseUp.call( this, event );
        },

        cancel: function() {

            if ( this.helper.is( ".ui-draggable-dragging" ) ) {
                this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function( event ) {
            return this.options.handle ?
                !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
                true;
        },

        _setHandleClassName: function() {
            this.handleElement = this.options.handle ?
                this.element.find( this.options.handle ) : this.element;
            this._addClass( this.handleElement, "ui-draggable-handle" );
        },

        _removeHandleClassName: function() {
            this._removeClass( this.handleElement, "ui-draggable-handle" );
        },

        _createHelper: function( event ) {

            var o = this.options,
                helperIsFunction = $.isFunction( o.helper ),
                helper = helperIsFunction ?
                    $( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
                    ( o.helper === "clone" ?
                        this.element.clone().removeAttr( "id" ) :
                        this.element );

            if ( !helper.parents( "body" ).length ) {
                helper.appendTo( ( o.appendTo === "parent" ?
                    this.element[ 0 ].parentNode :
                    o.appendTo ) );
            }

            // Http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
                this._setPositionRelative();
            }

            if ( helper[ 0 ] !== this.element[ 0 ] &&
                !( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
                helper.css( "position", "absolute" );
            }

            return helper;

        },

        _setPositionRelative: function() {
            if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
                this.element[ 0 ].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function( obj ) {
            if ( typeof obj === "string" ) {
                obj = obj.split( " " );
            }
            if ( $.isArray( obj ) ) {
                obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
            }
            if ( "left" in obj ) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ( "right" in obj ) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ( "top" in obj ) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ( "bottom" in obj ) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function( element ) {
            return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
        },

        _getParentOffset: function() {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[ 0 ];

            // This is a special case where we need to modify a offset calculated on start, since the
            // following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the
            // next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
            // the document, which means that the scroll is included in the initial calculation of the
            // offset of the parent, and never recalculated upon drag
            if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
                $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
                left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
            };

        },

        _getRelativeOffset: function() {
            if ( this.cssPosition !== "relative" ) {
                return { top: 0, left: 0 };
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
                    ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
                left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
                    ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
            };

        },

        _cacheMargins: function() {
            this.margins = {
                left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
                top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
                right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
                bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var isUserScrollable, c, ce,
                o = this.options,
                document = this.document[ 0 ];

            this.relativeContainer = null;

            if ( !o.containment ) {
                this.containment = null;
                return;
            }

            if ( o.containment === "window" ) {
                this.containment = [
                    $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                    $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                    $( window ).scrollLeft() + $( window ).width() -
                    this.helperProportions.width - this.margins.left,
                    $( window ).scrollTop() +
                    ( $( window ).height() || document.body.parentNode.scrollHeight ) -
                    this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment === "document" ) {
                this.containment = [
                    0,
                    0,
                    $( document ).width() - this.helperProportions.width - this.margins.left,
                    ( $( document ).height() || document.body.parentNode.scrollHeight ) -
                    this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment.constructor === Array ) {
                this.containment = o.containment;
                return;
            }

            if ( o.containment === "parent" ) {
                o.containment = this.helper[ 0 ].parentNode;
            }

            c = $( o.containment );
            ce = c[ 0 ];

            if ( !ce ) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

            this.containment = [
                ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
                ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
                ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
                ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
                ( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
                ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
                this.helperProportions.width -
                this.margins.left -
                this.margins.right,
                ( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
                ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
                this.helperProportions.height -
                this.margins.top -
                this.margins.bottom
            ];
            this.relativeContainer = c;
        },

        _convertPositionTo: function( d, pos ) {

            if ( !pos ) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: (

                    // The absolute mouse position
                    pos.top	+

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top * mod -
                    ( ( this.cssPosition === "fixed" ?
                        -this.offset.scroll.top :
                        ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
                ),
                left: (

                    // The absolute mouse position
                    pos.left +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left * mod	-
                    ( ( this.cssPosition === "fixed" ?
                        -this.offset.scroll.left :
                        ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
                )
            };

        },

        _generatePosition: function( event, constrainPosition ) {

            var containment, co, top, left,
                o = this.options,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if ( !scrollIsRootNode || !this.offset.scroll ) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

            // If we are not dragging yet, we won't check for options
            if ( constrainPosition ) {
                if ( this.containment ) {
                    if ( this.relativeContainer ) {
                        co = this.relativeContainer.offset();
                        containment = [
                            this.containment[ 0 ] + co.left,
                            this.containment[ 1 ] + co.top,
                            this.containment[ 2 ] + co.left,
                            this.containment[ 3 ] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
                        pageX = containment[ 0 ] + this.offset.click.left;
                    }
                    if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
                        pageY = containment[ 1 ] + this.offset.click.top;
                    }
                    if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
                        pageX = containment[ 2 ] + this.offset.click.left;
                    }
                    if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
                        pageY = containment[ 3 ] + this.offset.click.top;
                    }
                }

                if ( o.grid ) {

                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
                    // argument errors in IE (see ticket #6950)
                    top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
                        this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
                    pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
                        top - this.offset.click.top > containment[ 3 ] ) ?
                        top :
                        ( ( top - this.offset.click.top >= containment[ 1 ] ) ?
                            top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

                    left = o.grid[ 0 ] ? this.originalPageX +
                        Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
                        this.originalPageX;
                    pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
                        left - this.offset.click.left > containment[ 2 ] ) ?
                        left :
                        ( ( left - this.offset.click.left >= containment[ 0 ] ) ?
                            left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
                }

                if ( o.axis === "y" ) {
                    pageX = this.originalPageX;
                }

                if ( o.axis === "x" ) {
                    pageY = this.originalPageY;
                }
            }

            return {
                top: (

                    // The absolute mouse position
                    pageY -

                    // Click offset (relative to the element)
                    this.offset.click.top -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top +
                    ( this.cssPosition === "fixed" ?
                        -this.offset.scroll.top :
                        ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
                ),
                left: (

                    // The absolute mouse position
                    pageX -

                    // Click offset (relative to the element)
                    this.offset.click.left -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left +
                    ( this.cssPosition === "fixed" ?
                        -this.offset.scroll.left :
                        ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
                )
            };

        },

        _clear: function() {
            this._removeClass( this.helper, "ui-draggable-dragging" );
            if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if ( this.destroyOnClear ) {
                this.destroy();
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function( type, event, ui ) {
            ui = ui || this._uiHash();
            $.ui.plugin.call( this, type, [ event, ui, this ], true );

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if ( /^(drag|start|stop)/.test( type ) ) {
                this.positionAbs = this._convertPositionTo( "absolute" );
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call( this, type, event, ui );
        },

        plugins: {},

        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    } );

    $.ui.plugin.add( "draggable", "connectToSortable", {
        start: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            } );

            draggable.sortables = [];
            $( draggable.options.connectToSortable ).each( function() {
                var sortable = $( this ).sortable( "instance" );

                if ( sortable && !sortable.options.disabled ) {
                    draggable.sortables.push( sortable );

                    // RefreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger( "activate", event, uiSortable );
                }
            } );
        },
        stop: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            } );

            draggable.cancelHelperRemoval = false;

            $.each( draggable.sortables, function() {
                var sortable = this;

                if ( sortable.isOver ) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css( "position" ),
                        top: sortable.placeholder.css( "top" ),
                        left: sortable.placeholder.css( "left" )
                    };

                    sortable._mouseStop( event );

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {

                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger( "deactivate", event, uiSortable );
                }
            } );
        },
        drag: function( event, ui, draggable ) {
            $.each( draggable.sortables, function() {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if ( sortable._intersectsWith( sortable.containerCache ) ) {
                    innermostIntersecting = true;

                    $.each( draggable.sortables, function() {

                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if ( this !== sortable &&
                            this._intersectsWith( this.containerCache ) &&
                            $.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    } );
                }

                if ( innermostIntersecting ) {

                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if ( !sortable.isOver ) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();

                        sortable.currentItem = ui.helper
                            .appendTo( sortable.element )
                            .data( "ui-sortable-item", true );

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function() {
                            return ui.helper[ 0 ];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[ 0 ];
                        sortable._mouseCapture( event, true );
                        sortable._mouseStart( event, true, true );

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left -
                            sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top -
                            sortable.offset.parent.top;

                        draggable._trigger( "toSortable", event );

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        } );

                        // Hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if ( sortable.currentItem ) {
                        sortable._mouseDrag( event );

                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {

                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if ( sortable.isOver ) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger( "out", event, sortable._uiHash( sortable ) );
                        sortable._mouseStop( event, true );

                        // Restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if ( sortable.placeholder ) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo( draggable._parent );
                        draggable._refreshOffsets( event );
                        ui.position = draggable._generatePosition( event, true );

                        draggable._trigger( "fromSortable", event );

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        } );
                    }
                }
            } );
        }
    } );

    $.ui.plugin.add( "draggable", "cursor", {
        start: function( event, ui, instance ) {
            var t = $( "body" ),
                o = instance.options;

            if ( t.css( "cursor" ) ) {
                o._cursor = t.css( "cursor" );
            }
            t.css( "cursor", o.cursor );
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if ( o._cursor ) {
                $( "body" ).css( "cursor", o._cursor );
            }
        }
    } );

    $.ui.plugin.add( "draggable", "opacity", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;
            if ( t.css( "opacity" ) ) {
                o._opacity = t.css( "opacity" );
            }
            t.css( "opacity", o.opacity );
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if ( o._opacity ) {
                $( ui.helper ).css( "opacity", o._opacity );
            }
        }
    } );

    $.ui.plugin.add( "draggable", "scroll", {
        start: function( event, ui, i ) {
            if ( !i.scrollParentNotHidden ) {
                i.scrollParentNotHidden = i.helper.scrollParent( false );
            }

            if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
                i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function( event, ui, i  ) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[ 0 ],
                document = i.document[ 0 ];

            if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
                if ( !o.axis || o.axis !== "x" ) {
                    if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
                        o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if ( !o.axis || o.axis !== "y" ) {
                    if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
                        o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if ( !o.axis || o.axis !== "x" ) {
                    if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
                        scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
                    } else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
                        o.scrollSensitivity ) {
                        scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
                    }
                }

                if ( !o.axis || o.axis !== "y" ) {
                    if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
                        scrolled = $( document ).scrollLeft(
                            $( document ).scrollLeft() - o.scrollSpeed
                        );
                    } else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
                        o.scrollSensitivity ) {
                        scrolled = $( document ).scrollLeft(
                            $( document ).scrollLeft() + o.scrollSpeed
                        );
                    }
                }

            }

            if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
                $.ui.ddmanager.prepareOffsets( i, event );
            }

        }
    } );

    $.ui.plugin.add( "draggable", "snap", {
        start: function( event, ui, i ) {

            var o = i.options;

            i.snapElements = [];

            $( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
                .each( function() {
                    var $t = $( this ),
                        $o = $t.offset();
                    if ( this !== i.element[ 0 ] ) {
                        i.snapElements.push( {
                            item: this,
                            width: $t.outerWidth(), height: $t.outerHeight(),
                            top: $o.top, left: $o.left
                        } );
                    }
                } );

        },
        drag: function( event, ui, inst ) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

                l = inst.snapElements[ i ].left - inst.margins.left;
                r = l + inst.snapElements[ i ].width;
                t = inst.snapElements[ i ].top - inst.margins.top;
                b = t + inst.snapElements[ i ].height;

                if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
                    !$.contains( inst.snapElements[ i ].item.ownerDocument,
                        inst.snapElements[ i ].item ) ) {
                    if ( inst.snapElements[ i ].snapping ) {
                        ( inst.options.snap.release &&
                            inst.options.snap.release.call(
                                inst.element,
                                event,
                                $.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
                            ) );
                    }
                    inst.snapElements[ i ].snapping = false;
                    continue;
                }

                if ( o.snapMode !== "inner" ) {
                    ts = Math.abs( t - y2 ) <= d;
                    bs = Math.abs( b - y1 ) <= d;
                    ls = Math.abs( l - x2 ) <= d;
                    rs = Math.abs( r - x1 ) <= d;
                    if ( ts ) {
                        ui.position.top = inst._convertPositionTo( "relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        } ).top;
                    }
                    if ( bs ) {
                        ui.position.top = inst._convertPositionTo( "relative", {
                            top: b,
                            left: 0
                        } ).top;
                    }
                    if ( ls ) {
                        ui.position.left = inst._convertPositionTo( "relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        } ).left;
                    }
                    if ( rs ) {
                        ui.position.left = inst._convertPositionTo( "relative", {
                            top: 0,
                            left: r
                        } ).left;
                    }
                }

                first = ( ts || bs || ls || rs );

                if ( o.snapMode !== "outer" ) {
                    ts = Math.abs( t - y1 ) <= d;
                    bs = Math.abs( b - y2 ) <= d;
                    ls = Math.abs( l - x1 ) <= d;
                    rs = Math.abs( r - x2 ) <= d;
                    if ( ts ) {
                        ui.position.top = inst._convertPositionTo( "relative", {
                            top: t,
                            left: 0
                        } ).top;
                    }
                    if ( bs ) {
                        ui.position.top = inst._convertPositionTo( "relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        } ).top;
                    }
                    if ( ls ) {
                        ui.position.left = inst._convertPositionTo( "relative", {
                            top: 0,
                            left: l
                        } ).left;
                    }
                    if ( rs ) {
                        ui.position.left = inst._convertPositionTo( "relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        } ).left;
                    }
                }

                if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
                    ( inst.options.snap.snap &&
                        inst.options.snap.snap.call(
                            inst.element,
                            event,
                            $.extend( inst._uiHash(), {
                                snapItem: inst.snapElements[ i ].item
                            } ) ) );
                }
                inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

            }

        }
    } );

    $.ui.plugin.add( "draggable", "stack", {
        start: function( event, ui, instance ) {
            var min,
                o = instance.options,
                group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
                    return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
                        ( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
                } );

            if ( !group.length ) { return; }

            min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
            $( group ).each( function( i ) {
                $( this ).css( "zIndex", min + i );
            } );
            this.css( "zIndex", ( min + group.length ) );
        }
    } );

    $.ui.plugin.add( "draggable", "zIndex", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;

            if ( t.css( "zIndex" ) ) {
                o._zIndex = t.css( "zIndex" );
            }
            t.css( "zIndex", o.zIndex );
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;

            if ( o._zIndex ) {
                $( ui.helper ).css( "zIndex", o._zIndex );
            }
        }
    } );

    var widgetsDraggable = $.ui.draggable;


    /*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.resizable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,

            // See #7960
            zIndex: 90,

            // Callbacks
            resize: null,
            start: null,
            stop: null
        },

        _num: function( value ) {
            return parseFloat( value ) || 0;
        },

        _isNumber: function( value ) {
            return !isNaN( parseFloat( value ) );
        },

        _hasScroll: function( el, a ) {

            if ( $( el ).css( "overflow" ) === "hidden" ) {
                return false;
            }

            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
                has = false;

            if ( el[ scroll ] > 0 ) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[ scroll ] = 1;
            has = ( el[ scroll ] > 0 );
            el[ scroll ] = 0;
            return has;
        },

        _create: function() {

            var margins,
                o = this.options,
                that = this;
            this._addClass( "ui-resizable" );

            $.extend( this, {
                _aspectRatio: !!( o.aspectRatio ),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            } );

            // Wrap the element if it cannot hold child nodes
            if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

                this.element.wrap(
                    $( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
                        position: this.element.css( "position" ),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css( "top" ),
                        left: this.element.css( "left" )
                    } )
                );

                this.element = this.element.parent().data(
                    "ui-resizable", this.element.resizable( "instance" )
                );

                this.elementIsWrapper = true;

                margins = {
                    marginTop: this.originalElement.css( "marginTop" ),
                    marginRight: this.originalElement.css( "marginRight" ),
                    marginBottom: this.originalElement.css( "marginBottom" ),
                    marginLeft: this.originalElement.css( "marginLeft" )
                };

                this.element.css( margins );
                this.originalElement.css( "margin", 0 );

                // support: Safari
                // Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css( "resize" );
                this.originalElement.css( "resize", "none" );

                this._proportionallyResizeElements.push( this.originalElement.css( {
                    position: "static",
                    zoom: 1,
                    display: "block"
                } ) );

                // Support: IE9
                // avoid IE jump (hard set the margin)
                this.originalElement.css( margins );

                this._proportionallyResize();
            }

            this._setupHandles();

            if ( o.autoHide ) {
                $( this.element )
                    .on( "mouseenter", function() {
                        if ( o.disabled ) {
                            return;
                        }
                        that._removeClass( "ui-resizable-autohide" );
                        that._handles.show();
                    } )
                    .on( "mouseleave", function() {
                        if ( o.disabled ) {
                            return;
                        }
                        if ( !that.resizing ) {
                            that._addClass( "ui-resizable-autohide" );
                            that._handles.hide();
                        }
                    } );
            }

            this._mouseInit();
        },

        _destroy: function() {

            this._mouseDestroy();

            var wrapper,
                _destroy = function( exp ) {
                    $( exp )
                        .removeData( "resizable" )
                        .removeData( "ui-resizable" )
                        .off( ".resizable" )
                        .find( ".ui-resizable-handle" )
                        .remove();
                };

            // TODO: Unwrap at same DOM position
            if ( this.elementIsWrapper ) {
                _destroy( this.element );
                wrapper = this.element;
                this.originalElement.css( {
                    position: wrapper.css( "position" ),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css( "top" ),
                    left: wrapper.css( "left" )
                } ).insertAfter( wrapper );
                wrapper.remove();
            }

            this.originalElement.css( "resize", this.originalResizeStyle );
            _destroy( this.originalElement );

            return this;
        },

        _setOption: function( key, value ) {
            this._super( key, value );

            switch ( key ) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles();
                    break;
                default:
                    break;
            }
        },

        _setupHandles: function() {
            var o = this.options, handle, i, n, hname, axis, that = this;
            this.handles = o.handles ||
                ( !$( ".ui-resizable-handle", this.element ).length ?
                    "e,s,se" : {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } );

            this._handles = $();
            if ( this.handles.constructor === String ) {

                if ( this.handles === "all" ) {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split( "," );
                this.handles = {};

                for ( i = 0; i < n.length; i++ ) {

                    handle = $.trim( n[ i ] );
                    hname = "ui-resizable-" + handle;
                    axis = $( "<div>" );
                    this._addClass( axis, "ui-resizable-handle " + hname );

                    axis.css( { zIndex: o.zIndex } );

                    this.handles[ handle ] = ".ui-resizable-" + handle;
                    this.element.append( axis );
                }

            }

            this._renderAxis = function( target ) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for ( i in this.handles ) {

                    if ( this.handles[ i ].constructor === String ) {
                        this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
                    } else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
                        this.handles[ i ] = $( this.handles[ i ] );
                        this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
                    }

                    if ( this.elementIsWrapper &&
                        this.originalElement[ 0 ]
                            .nodeName
                            .match( /^(textarea|input|select|button)$/i ) ) {
                        axis = $( this.handles[ i ], this.element );

                        padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
                            axis.outerHeight() :
                            axis.outerWidth();

                        padPos = [ "padding",
                            /ne|nw|n/.test( i ) ? "Top" :
                                /se|sw|s/.test( i ) ? "Bottom" :
                                    /^e$/.test( i ) ? "Right" : "Left" ].join( "" );

                        target.css( padPos, padWrapper );

                        this._proportionallyResize();
                    }

                    this._handles = this._handles.add( this.handles[ i ] );
                }
            };

            // TODO: make renderAxis a prototype function
            this._renderAxis( this.element );

            this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
            this._handles.disableSelection();

            this._handles.on( "mouseover", function() {
                if ( !that.resizing ) {
                    if ( this.className ) {
                        axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
                    }
                    that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
                }
            } );

            if ( o.autoHide ) {
                this._handles.hide();
                this._addClass( "ui-resizable-autohide" );
            }
        },

        _removeHandles: function() {
            this._handles.remove();
        },

        _mouseCapture: function( event ) {
            var i, handle,
                capture = false;

            for ( i in this.handles ) {
                handle = $( this.handles[ i ] )[ 0 ];
                if ( handle === event.target || $.contains( handle, event.target ) ) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function( event ) {

            var curleft, curtop, cursor,
                o = this.options,
                el = this.element;

            this.resizing = true;

            this._renderProxy();

            curleft = this._num( this.helper.css( "left" ) );
            curtop = this._num( this.helper.css( "top" ) );

            if ( o.containment ) {
                curleft += $( o.containment ).scrollLeft() || 0;
                curtop += $( o.containment ).scrollTop() || 0;
            }

            this.offset = this.helper.offset();
            this.position = { left: curleft, top: curtop };

            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };

            this.originalPosition = { left: curleft, top: curtop };
            this.originalMousePosition = { left: event.pageX, top: event.pageY };

            this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
                o.aspectRatio :
                ( ( this.originalSize.width / this.originalSize.height ) || 1 );

            cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
            $( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

            this._addClass( "ui-resizable-resizing" );
            this._propagate( "start", event );
            return true;
        },

        _mouseDrag: function( event ) {

            var data, props,
                smp = this.originalMousePosition,
                a = this.axis,
                dx = ( event.pageX - smp.left ) || 0,
                dy = ( event.pageY - smp.top ) || 0,
                trigger = this._change[ a ];

            this._updatePrevProperties();

            if ( !trigger ) {
                return false;
            }

            data = trigger.apply( this, [ event, dx, dy ] );

            this._updateVirtualBoundaries( event.shiftKey );
            if ( this._aspectRatio || event.shiftKey ) {
                data = this._updateRatio( data, event );
            }

            data = this._respectSize( data, event );

            this._updateCache( data );

            this._propagate( "resize", event );

            props = this._applyChanges();

            if ( !this._helper && this._proportionallyResizeElements.length ) {
                this._proportionallyResize();
            }

            if ( !$.isEmptyObject( props ) ) {
                this._updatePrevProperties();
                this._trigger( "resize", event, this.ui() );
                this._applyChanges();
            }

            return false;
        },

        _mouseStop: function( event ) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
                o = this.options, that = this;

            if ( this._helper ) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
                soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: ( that.helper.width()  - soffsetw ),
                    height: ( that.helper.height() - soffseth )
                };
                left = ( parseFloat( that.element.css( "left" ) ) +
                    ( that.position.left - that.originalPosition.left ) ) || null;
                top = ( parseFloat( that.element.css( "top" ) ) +
                    ( that.position.top - that.originalPosition.top ) ) || null;

                if ( !o.animate ) {
                    this.element.css( $.extend( s, { top: top, left: left } ) );
                }

                that.helper.height( that.size.height );
                that.helper.width( that.size.width );

                if ( this._helper && !o.animate ) {
                    this._proportionallyResize();
                }
            }

            $( "body" ).css( "cursor", "auto" );

            this._removeClass( "ui-resizable-resizing" );

            this._propagate( "stop", event );

            if ( this._helper ) {
                this.helper.remove();
            }

            return false;

        },

        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },

        _applyChanges: function() {
            var props = {};

            if ( this.position.top !== this.prevPosition.top ) {
                props.top = this.position.top + "px";
            }
            if ( this.position.left !== this.prevPosition.left ) {
                props.left = this.position.left + "px";
            }
            if ( this.size.width !== this.prevSize.width ) {
                props.width = this.size.width + "px";
            }
            if ( this.size.height !== this.prevSize.height ) {
                props.height = this.size.height + "px";
            }

            this.helper.css( props );

            return props;
        },

        _updateVirtualBoundaries: function( forceAspectRatio ) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
                o = this.options;

            b = {
                minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
                maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
                minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
                maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
            };

            if ( this._aspectRatio || forceAspectRatio ) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if ( pMinWidth > b.minWidth ) {
                    b.minWidth = pMinWidth;
                }
                if ( pMinHeight > b.minHeight ) {
                    b.minHeight = pMinHeight;
                }
                if ( pMaxWidth < b.maxWidth ) {
                    b.maxWidth = pMaxWidth;
                }
                if ( pMaxHeight < b.maxHeight ) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function( data ) {
            this.offset = this.helper.offset();
            if ( this._isNumber( data.left ) ) {
                this.position.left = data.left;
            }
            if ( this._isNumber( data.top ) ) {
                this.position.top = data.top;
            }
            if ( this._isNumber( data.height ) ) {
                this.size.height = data.height;
            }
            if ( this._isNumber( data.width ) ) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function( data ) {

            var cpos = this.position,
                csize = this.size,
                a = this.axis;

            if ( this._isNumber( data.height ) ) {
                data.width = ( data.height * this.aspectRatio );
            } else if ( this._isNumber( data.width ) ) {
                data.height = ( data.width / this.aspectRatio );
            }

            if ( a === "sw" ) {
                data.left = cpos.left + ( csize.width - data.width );
                data.top = null;
            }
            if ( a === "nw" ) {
                data.top = cpos.top + ( csize.height - data.height );
                data.left = cpos.left + ( csize.width - data.width );
            }

            return data;
        },

        _respectSize: function( data ) {

            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
                ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
                isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
                isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.originalPosition.top + this.originalSize.height,
                cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
            if ( isminw ) {
                data.width = o.minWidth;
            }
            if ( isminh ) {
                data.height = o.minHeight;
            }
            if ( ismaxw ) {
                data.width = o.maxWidth;
            }
            if ( ismaxh ) {
                data.height = o.maxHeight;
            }

            if ( isminw && cw ) {
                data.left = dw - o.minWidth;
            }
            if ( ismaxw && cw ) {
                data.left = dw - o.maxWidth;
            }
            if ( isminh && ch ) {
                data.top = dh - o.minHeight;
            }
            if ( ismaxh && ch ) {
                data.top = dh - o.maxHeight;
            }

            // Fixing jump error on top/left - bug #2330
            if ( !data.width && !data.height && !data.left && data.top ) {
                data.top = null;
            } else if ( !data.width && !data.height && !data.top && data.left ) {
                data.left = null;
            }

            return data;
        },

        _getPaddingPlusBorderDimensions: function( element ) {
            var i = 0,
                widths = [],
                borders = [
                    element.css( "borderTopWidth" ),
                    element.css( "borderRightWidth" ),
                    element.css( "borderBottomWidth" ),
                    element.css( "borderLeftWidth" )
                ],
                paddings = [
                    element.css( "paddingTop" ),
                    element.css( "paddingRight" ),
                    element.css( "paddingBottom" ),
                    element.css( "paddingLeft" )
                ];

            for ( ; i < 4; i++ ) {
                widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
                widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
            }

            return {
                height: widths[ 0 ] + widths[ 2 ],
                width: widths[ 1 ] + widths[ 3 ]
            };
        },

        _proportionallyResize: function() {

            if ( !this._proportionallyResizeElements.length ) {
                return;
            }

            var prel,
                i = 0,
                element = this.helper || this.element;

            for ( ; i < this._proportionallyResizeElements.length; i++ ) {

                prel = this._proportionallyResizeElements[ i ];

                // TODO: Seems like a bug to cache this.outerDimensions
                // considering that we are in a loop.
                if ( !this.outerDimensions ) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
                }

                prel.css( {
                    height: ( element.height() - this.outerDimensions.height ) || 0,
                    width: ( element.width() - this.outerDimensions.width ) || 0
                } );

            }

        },

        _renderProxy: function() {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if ( this._helper ) {

                this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

                this._addClass( this.helper, this._helper );
                this.helper.css( {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                } );

                this.helper
                    .appendTo( "body" )
                    .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function( event, dx ) {
                return { width: this.originalSize.width + dx };
            },
            w: function( event, dx ) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { left: sp.left + dx, width: cs.width - dx };
            },
            n: function( event, dx, dy ) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { top: sp.top + dy, height: cs.height - dy };
            },
            s: function( event, dx, dy ) {
                return { height: this.originalSize.height + dy };
            },
            se: function( event, dx, dy ) {
                return $.extend( this._change.s.apply( this, arguments ),
                    this._change.e.apply( this, [ event, dx, dy ] ) );
            },
            sw: function( event, dx, dy ) {
                return $.extend( this._change.s.apply( this, arguments ),
                    this._change.w.apply( this, [ event, dx, dy ] ) );
            },
            ne: function( event, dx, dy ) {
                return $.extend( this._change.n.apply( this, arguments ),
                    this._change.e.apply( this, [ event, dx, dy ] ) );
            },
            nw: function( event, dx, dy ) {
                return $.extend( this._change.n.apply( this, arguments ),
                    this._change.w.apply( this, [ event, dx, dy ] ) );
            }
        },

        _propagate: function( n, event ) {
            $.ui.plugin.call( this, n, [ event, this.ui() ] );
            ( n !== "resize" && this._trigger( n, event, this.ui() ) );
        },

        plugins: {},

        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    } );

    /*
 * Resizable Extensions
 */

    $.ui.plugin.add( "resizable", "animate", {

        stop: function( event ) {
            var that = $( this ).resizable( "instance" ),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
                soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = {
                    width: ( that.size.width - soffsetw ),
                    height: ( that.size.height - soffseth )
                },
                left = ( parseFloat( that.element.css( "left" ) ) +
                    ( that.position.left - that.originalPosition.left ) ) || null,
                top = ( parseFloat( that.element.css( "top" ) ) +
                    ( that.position.top - that.originalPosition.top ) ) || null;

            that.element.animate(
                $.extend( style, top && left ? { top: top, left: left } : {} ), {
                    duration: o.animateDuration,
                    easing: o.animateEasing,
                    step: function() {

                        var data = {
                            width: parseFloat( that.element.css( "width" ) ),
                            height: parseFloat( that.element.css( "height" ) ),
                            top: parseFloat( that.element.css( "top" ) ),
                            left: parseFloat( that.element.css( "left" ) )
                        };

                        if ( pr && pr.length ) {
                            $( pr[ 0 ] ).css( { width: data.width, height: data.height } );
                        }

                        // Propagating resize, and updating values for each animation step
                        that._updateCache( data );
                        that._propagate( "resize", event );

                    }
                }
            );
        }

    } );

    $.ui.plugin.add( "resizable", "containment", {

        start: function() {
            var element, p, co, ch, cw, width, height,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = ( oc instanceof $ ) ?
                    oc.get( 0 ) :
                    ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

            if ( !ce ) {
                return;
            }

            that.containerElement = $( ce );

            if ( /document/.test( oc ) || oc === document ) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };

                that.parentData = {
                    element: $( document ),
                    left: 0,
                    top: 0,
                    width: $( document ).width(),
                    height: $( document ).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $( ce );
                p = [];
                $( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
                    p[ i ] = that._num( element.css( "padding" + name ) );
                } );

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: ( element.innerHeight() - p[ 3 ] ),
                    width: ( element.innerWidth() - p[ 1 ] )
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
                height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function( event ) {
            var woset, hoset, isParent, isOffsetRelative,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = true;

            if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
                cop = co;
            }

            if ( cp.left < ( that._helper ? co.left : 0 ) ) {
                that.size.width = that.size.width +
                    ( that._helper ?
                        ( that.position.left - co.left ) :
                        ( that.position.left - cop.left ) );

                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if ( cp.top < ( that._helper ? co.top : 0 ) ) {
                that.size.height = that.size.height +
                    ( that._helper ?
                        ( that.position.top - co.top ) :
                        that.position.top );

                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
            isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

            if ( isParent && isOffsetRelative ) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }

            woset = Math.abs( that.sizeDiff.width +
                ( that._helper ?
                    that.offset.left - cop.left :
                    ( that.offset.left - co.left ) ) );

            hoset = Math.abs( that.sizeDiff.height +
                ( that._helper ?
                    that.offset.top - cop.top :
                    ( that.offset.top - co.top ) ) );

            if ( woset + that.size.width >= that.parentData.width ) {
                that.size.width = that.parentData.width - woset;
                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( hoset + that.size.height >= that.parentData.height ) {
                that.size.height = that.parentData.height - hoset;
                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( !continueResize ) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },

        stop: function() {
            var that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $( that.helper ),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;

            if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
                $( this ).css( {
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                } );
            }

            if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
                $( this ).css( {
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                } );
            }
        }
    } );

    $.ui.plugin.add( "resizable", "alsoResize", {

        start: function() {
            var that = $( this ).resizable( "instance" ),
                o = that.options;

            $( o.alsoResize ).each( function() {
                var el = $( this );
                el.data( "ui-resizable-alsoresize", {
                    width: parseFloat( el.width() ), height: parseFloat( el.height() ),
                    left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
                } );
            } );
        },

        resize: function( event, ui ) {
            var that = $( this ).resizable( "instance" ),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: ( that.size.height - os.height ) || 0,
                    width: ( that.size.width - os.width ) || 0,
                    top: ( that.position.top - op.top ) || 0,
                    left: ( that.position.left - op.left ) || 0
                };

            $( o.alsoResize ).each( function() {
                var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
                    css = el.parents( ui.originalElement[ 0 ] ).length ?
                        [ "width", "height" ] :
                        [ "width", "height", "top", "left" ];

                $.each( css, function( i, prop ) {
                    var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
                    if ( sum && sum >= 0 ) {
                        style[ prop ] = sum || null;
                    }
                } );

                el.css( style );
            } );
        },

        stop: function() {
            $( this ).removeData( "ui-resizable-alsoresize" );
        }
    } );

    $.ui.plugin.add( "resizable", "ghost", {

        start: function() {

            var that = $( this ).resizable( "instance" ), cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost.css( {
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            } );

            that._addClass( that.ghost, "ui-resizable-ghost" );

            // DEPRECATED
            // TODO: remove after 1.12
            if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

                // Ghost option
                that.ghost.addClass( this.options.ghost );
            }

            that.ghost.appendTo( that.helper );

        },

        resize: function() {
            var that = $( this ).resizable( "instance" );
            if ( that.ghost ) {
                that.ghost.css( {
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                } );
            }
        },

        stop: function() {
            var that = $( this ).resizable( "instance" );
            if ( that.ghost && that.helper ) {
                that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
            }
        }

    } );

    $.ui.plugin.add( "resizable", "grid", {

        resize: function() {
            var outerDimensions,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
                gridX = ( grid[ 0 ] || 1 ),
                gridY = ( grid[ 1 ] || 1 ),
                ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
                oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
                isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
                isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
                isMinHeight = o.minHeight && ( o.minHeight > newHeight );

            o.grid = grid;

            if ( isMinWidth ) {
                newWidth += gridX;
            }
            if ( isMinHeight ) {
                newHeight += gridY;
            }
            if ( isMaxWidth ) {
                newWidth -= gridX;
            }
            if ( isMaxHeight ) {
                newHeight -= gridY;
            }

            if ( /^(se|s|e)$/.test( a ) ) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if ( /^(ne)$/.test( a ) ) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if ( /^(sw)$/.test( a ) ) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
                    outerDimensions = that._getPaddingPlusBorderDimensions( this );
                }

                if ( newHeight - gridY > 0 ) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if ( newWidth - gridX > 0 ) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }

    } );

    var widgetsResizable = $.ui.resizable;


    /*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: true,
            closeText: "Close",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",

                // Ensure the titlebar is always visible
                using: function( pos ) {
                    var topOffset = $( this ).css( pos ).offset().top;
                    if ( topOffset < 0 ) {
                        $( this ).css( "top", pos.top - topOffset );
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,

            // Callbacks
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },

        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },

        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },

        _create: function() {
            this.originalCss = {
                display: this.element[ 0 ].style.display,
                width: this.element[ 0 ].style.width,
                minHeight: this.element[ 0 ].style.minHeight,
                maxHeight: this.element[ 0 ].style.maxHeight,
                height: this.element[ 0 ].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index( this.element )
            };
            this.originalTitle = this.element.attr( "title" );
            if ( this.options.title == null && this.originalTitle != null ) {
                this.options.title = this.originalTitle;
            }

            // Dialogs can't be disabled
            if ( this.options.disabled ) {
                this.options.disabled = false;
            }

            this._createWrapper();

            this.element
                .show()
                .removeAttr( "title" )
                .appendTo( this.uiDialog );

            this._addClass( "ui-dialog-content", "ui-widget-content" );

            this._createTitlebar();
            this._createButtonPane();

            if ( this.options.draggable && $.fn.draggable ) {
                this._makeDraggable();
            }
            if ( this.options.resizable && $.fn.resizable ) {
                this._makeResizable();
            }

            this._isOpen = false;

            this._trackFocus();
        },

        _init: function() {
            if ( this.options.autoOpen ) {
                this.open();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;
            if ( element && ( element.jquery || element.nodeType ) ) {
                return $( element );
            }
            return this.document.find( element || "body" ).eq( 0 );
        },

        _destroy: function() {
            var next,
                originalPosition = this.originalPosition;

            this._untrackInstance();
            this._destroyOverlay();

            this.element
                .removeUniqueId()
                .css( this.originalCss )

                // Without detaching first, the following becomes really slow
                .detach();

            this.uiDialog.remove();

            if ( this.originalTitle ) {
                this.element.attr( "title", this.originalTitle );
            }

            next = originalPosition.parent.children().eq( originalPosition.index );

            // Don't try to place the dialog next to itself (#8613)
            if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
                next.before( this.element );
            } else {
                originalPosition.parent.append( this.element );
            }
        },

        widget: function() {
            return this.uiDialog;
        },

        disable: $.noop,
        enable: $.noop,

        close: function( event ) {
            var that = this;

            if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
                return;
            }

            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();

            if ( !this.opener.filter( ":focusable" ).trigger( "focus" ).length ) {

                // Hiding a focused element doesn't trigger blur in WebKit
                // so in case we have nothing to focus on, explicitly blur the active element
                // https://bugs.webkit.org/show_bug.cgi?id=47182
                $.ui.safeBlur( $.ui.safeActiveElement( this.document[ 0 ] ) );
            }

            this._hide( this.uiDialog, this.options.hide, function() {
                that._trigger( "close", event );
            } );
        },

        isOpen: function() {
            return this._isOpen;
        },

        moveToTop: function() {
            this._moveToTop();
        },

        _moveToTop: function( event, silent ) {
            var moved = false,
                zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map( function() {
                    return +$( this ).css( "z-index" );
                } ).get(),
                zIndexMax = Math.max.apply( null, zIndices );

            if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
                this.uiDialog.css( "z-index", zIndexMax + 1 );
                moved = true;
            }

            if ( moved && !silent ) {
                this._trigger( "focus", event );
            }
            return moved;
        },

        open: function() {
            var that = this;
            if ( this._isOpen ) {
                if ( this._moveToTop() ) {
                    this._focusTabbable();
                }
                return;
            }

            this._isOpen = true;
            this.opener = $( $.ui.safeActiveElement( this.document[ 0 ] ) );

            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop( null, true );

            // Ensure the overlay is moved to the top with the dialog, but only when
            // opening. The overlay shouldn't move after the dialog is open so that
            // modeless dialogs opened after the modal dialog stack properly.
            if ( this.overlay ) {
                this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
            }

            this._show( this.uiDialog, this.options.show, function() {
                that._focusTabbable();
                that._trigger( "focus" );
            } );

            // Track the dialog immediately upon openening in case a focus event
            // somehow occurs outside of the dialog before an element inside the
            // dialog is focused (#10152)
            this._makeFocusTarget();

            this._trigger( "open" );
        },

        _focusTabbable: function() {

            // Set focus to the first match:
            // 1. An element that was focused previously
            // 2. First element inside the dialog matching [autofocus]
            // 3. Tabbable element inside the content element
            // 4. Tabbable element inside the buttonpane
            // 5. The close button
            // 6. The dialog itself
            var hasFocus = this._focusedElement;
            if ( !hasFocus ) {
                hasFocus = this.element.find( "[autofocus]" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.element.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq( 0 ).trigger( "focus" );
        },

        _keepFocus: function( event ) {
            function checkFocus() {
                var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
                    isActive = this.uiDialog[ 0 ] === activeElement ||
                        $.contains( this.uiDialog[ 0 ], activeElement );
                if ( !isActive ) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call( this );

            // support: IE
            // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
            // so we check again later
            this._delay( checkFocus );
        },

        _createWrapper: function() {
            this.uiDialog = $( "<div>" )
                .hide()
                .attr( {

                    // Setting tabIndex makes the div focusable
                    tabIndex: -1,
                    role: "dialog"
                } )
                .appendTo( this._appendTo() );

            this._addClass( this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front" );
            this._on( this.uiDialog, {
                keydown: function( event ) {
                    if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
                        event.keyCode === $.ui.keyCode.ESCAPE ) {
                        event.preventDefault();
                        this.close( event );
                        return;
                    }

                    // Prevent tabbing out of dialogs
                    if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
                        return;
                    }
                    var tabbables = this.uiDialog.find( ":tabbable" ),
                        first = tabbables.filter( ":first" ),
                        last = tabbables.filter( ":last" );

                    if ( ( event.target === last[ 0 ] || event.target === this.uiDialog[ 0 ] ) &&
                        !event.shiftKey ) {
                        this._delay( function() {
                            first.trigger( "focus" );
                        } );
                        event.preventDefault();
                    } else if ( ( event.target === first[ 0 ] ||
                        event.target === this.uiDialog[ 0 ] ) && event.shiftKey ) {
                        this._delay( function() {
                            last.trigger( "focus" );
                        } );
                        event.preventDefault();
                    }
                },
                mousedown: function( event ) {
                    if ( this._moveToTop( event ) ) {
                        this._focusTabbable();
                    }
                }
            } );

            // We assume that any existing aria-describedby attribute means
            // that the dialog content is marked up properly
            // otherwise we brute force the content as the description
            if ( !this.element.find( "[aria-describedby]" ).length ) {
                this.uiDialog.attr( {
                    "aria-describedby": this.element.uniqueId().attr( "id" )
                } );
            }
        },

        _createTitlebar: function() {
            var uiDialogTitle;

            this.uiDialogTitlebar = $( "<div>" );
            this._addClass( this.uiDialogTitlebar,
                "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix" );
            this._on( this.uiDialogTitlebar, {
                mousedown: function( event ) {

                    // Don't prevent click on close button (#8838)
                    // Focusing a dialog that is partially scrolled out of view
                    // causes the browser to scroll it into view, preventing the click event
                    if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {

                        // Dialog isn't getting focus when dragging (#8063)
                        this.uiDialog.trigger( "focus" );
                    }
                }
            } );

            // Support: IE
            // Use type="button" to prevent enter keypresses in textboxes from closing the
            // dialog in IE (#9312)
            this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
                .button( {
                    label: $( "<a>" ).text( this.options.closeText ).html(),
                    icon: "ui-icon-closethick",
                    showLabel: false
                } )
                .appendTo( this.uiDialogTitlebar );

            this._addClass( this.uiDialogTitlebarClose, "ui-dialog-titlebar-close" );
            this._on( this.uiDialogTitlebarClose, {
                click: function( event ) {
                    event.preventDefault();
                    this.close( event );
                }
            } );

            uiDialogTitle = $( "<span>" ).uniqueId().prependTo( this.uiDialogTitlebar );
            this._addClass( uiDialogTitle, "ui-dialog-title" );
            this._title( uiDialogTitle );

            this.uiDialogTitlebar.prependTo( this.uiDialog );

            this.uiDialog.attr( {
                "aria-labelledby": uiDialogTitle.attr( "id" )
            } );
        },

        _title: function( title ) {
            if ( this.options.title ) {
                title.text( this.options.title );
            } else {
                title.html( "&#160;" );
            }
        },

        _createButtonPane: function() {
            this.uiDialogButtonPane = $( "<div>" );
            this._addClass( this.uiDialogButtonPane, "ui-dialog-buttonpane",
                "ui-widget-content ui-helper-clearfix" );

            this.uiButtonSet = $( "<div>" )
                .appendTo( this.uiDialogButtonPane );
            this._addClass( this.uiButtonSet, "ui-dialog-buttonset" );

            this._createButtons();
        },

        _createButtons: function() {
            var that = this,
                buttons = this.options.buttons;

            // If we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ( $.isEmptyObject( buttons ) || ( $.isArray( buttons ) && !buttons.length ) ) {
                this._removeClass( this.uiDialog, "ui-dialog-buttons" );
                return;
            }

            $.each( buttons, function( name, props ) {
                var click, buttonOptions;
                props = $.isFunction( props ) ?
                    { click: props, text: name } :
                    props;

                // Default to a non-submitting button
                props = $.extend( { type: "button" }, props );

                // Change the context for the click callback to be the main element
                click = props.click;
                buttonOptions = {
                    icon: props.icon,
                    iconPosition: props.iconPosition,
                    showLabel: props.showLabel,

                    // Deprecated options
                    icons: props.icons,
                    text: props.text
                };

                delete props.click;
                delete props.icon;
                delete props.iconPosition;
                delete props.showLabel;

                // Deprecated options
                delete props.icons;
                if ( typeof props.text === "boolean" ) {
                    delete props.text;
                }

                $( "<button></button>", props )
                    .button( buttonOptions )
                    .appendTo( that.uiButtonSet )
                    .on( "click", function() {
                        click.apply( that.element[ 0 ], arguments );
                    } );
            } );
            this._addClass( this.uiDialog, "ui-dialog-buttons" );
            this.uiDialogButtonPane.appendTo( this.uiDialog );
        },

        _makeDraggable: function() {
            var that = this,
                options = this.options;

            function filteredUi( ui ) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }

            this.uiDialog.draggable( {
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function( event, ui ) {
                    that._addClass( $( this ), "ui-dialog-dragging" );
                    that._blockFrames();
                    that._trigger( "dragStart", event, filteredUi( ui ) );
                },
                drag: function( event, ui ) {
                    that._trigger( "drag", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var left = ui.offset.left - that.document.scrollLeft(),
                        top = ui.offset.top - that.document.scrollTop();

                    options.position = {
                        my: "left top",
                        at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
                            "top" + ( top >= 0 ? "+" : "" ) + top,
                        of: that.window
                    };
                    that._removeClass( $( this ), "ui-dialog-dragging" );
                    that._unblockFrames();
                    that._trigger( "dragStop", event, filteredUi( ui ) );
                }
            } );
        },

        _makeResizable: function() {
            var that = this,
                options = this.options,
                handles = options.resizable,

                // .ui-resizable has position: relative defined in the stylesheet
                // but dialogs have to use absolute or fixed positioning
                position = this.uiDialog.css( "position" ),
                resizeHandles = typeof handles === "string" ?
                    handles :
                    "n,e,s,w,se,sw,ne,nw";

            function filteredUi( ui ) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }

            this.uiDialog.resizable( {
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function( event, ui ) {
                    that._addClass( $( this ), "ui-dialog-resizing" );
                    that._blockFrames();
                    that._trigger( "resizeStart", event, filteredUi( ui ) );
                },
                resize: function( event, ui ) {
                    that._trigger( "resize", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var offset = that.uiDialog.offset(),
                        left = offset.left - that.document.scrollLeft(),
                        top = offset.top - that.document.scrollTop();

                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: "left top",
                        at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
                            "top" + ( top >= 0 ? "+" : "" ) + top,
                        of: that.window
                    };
                    that._removeClass( $( this ), "ui-dialog-resizing" );
                    that._unblockFrames();
                    that._trigger( "resizeStop", event, filteredUi( ui ) );
                }
            } )
                .css( "position", position );
        },

        _trackFocus: function() {
            this._on( this.widget(), {
                focusin: function( event ) {
                    this._makeFocusTarget();
                    this._focusedElement = $( event.target );
                }
            } );
        },

        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift( this );
        },

        _untrackInstance: function() {
            var instances = this._trackingInstances(),
                exists = $.inArray( this, instances );
            if ( exists !== -1 ) {
                instances.splice( exists, 1 );
            }
        },

        _trackingInstances: function() {
            var instances = this.document.data( "ui-dialog-instances" );
            if ( !instances ) {
                instances = [];
                this.document.data( "ui-dialog-instances", instances );
            }
            return instances;
        },

        _minHeight: function() {
            var options = this.options;

            return options.height === "auto" ?
                options.minHeight :
                Math.min( options.minHeight, options.height );
        },

        _position: function() {

            // Need to show the dialog to get the actual offset in the position plugin
            var isVisible = this.uiDialog.is( ":visible" );
            if ( !isVisible ) {
                this.uiDialog.show();
            }
            this.uiDialog.position( this.options.position );
            if ( !isVisible ) {
                this.uiDialog.hide();
            }
        },

        _setOptions: function( options ) {
            var that = this,
                resize = false,
                resizableOptions = {};

            $.each( options, function( key, value ) {
                that._setOption( key, value );

                if ( key in that.sizeRelatedOptions ) {
                    resize = true;
                }
                if ( key in that.resizableRelatedOptions ) {
                    resizableOptions[ key ] = value;
                }
            } );

            if ( resize ) {
                this._size();
                this._position();
            }
            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", resizableOptions );
            }
        },

        _setOption: function( key, value ) {
            var isDraggable, isResizable,
                uiDialog = this.uiDialog;

            if ( key === "disabled" ) {
                return;
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.uiDialog.appendTo( this._appendTo() );
            }

            if ( key === "buttons" ) {
                this._createButtons();
            }

            if ( key === "closeText" ) {
                this.uiDialogTitlebarClose.button( {

                    // Ensure that we always pass a string
                    label: $( "<a>" ).text( "" + this.options.closeText ).html()
                } );
            }

            if ( key === "draggable" ) {
                isDraggable = uiDialog.is( ":data(ui-draggable)" );
                if ( isDraggable && !value ) {
                    uiDialog.draggable( "destroy" );
                }

                if ( !isDraggable && value ) {
                    this._makeDraggable();
                }
            }

            if ( key === "position" ) {
                this._position();
            }

            if ( key === "resizable" ) {

                // currently resizable, becoming non-resizable
                isResizable = uiDialog.is( ":data(ui-resizable)" );
                if ( isResizable && !value ) {
                    uiDialog.resizable( "destroy" );
                }

                // Currently resizable, changing handles
                if ( isResizable && typeof value === "string" ) {
                    uiDialog.resizable( "option", "handles", value );
                }

                // Currently non-resizable, becoming resizable
                if ( !isResizable && value !== false ) {
                    this._makeResizable();
                }
            }

            if ( key === "title" ) {
                this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
            }
        },

        _size: function() {

            // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
            // divs will both have width and height set, so we need to reset them
            var nonContentHeight, minContentHeight, maxContentHeight,
                options = this.options;

            // Reset content sizing
            this.element.show().css( {
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            } );

            if ( options.minWidth > options.width ) {
                options.width = options.minWidth;
            }

            // Reset wrapper sizing
            // determine the height of all the non-content elements
            nonContentHeight = this.uiDialog.css( {
                height: "auto",
                width: options.width
            } )
                .outerHeight();
            minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
            maxContentHeight = typeof options.maxHeight === "number" ?
                Math.max( 0, options.maxHeight - nonContentHeight ) :
                "none";

            if ( options.height === "auto" ) {
                this.element.css( {
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                } );
            } else {
                this.element.height( Math.max( 0, options.height - nonContentHeight ) );
            }

            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
            }
        },

        _blockFrames: function() {
            this.iframeBlocks = this.document.find( "iframe" ).map( function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css( {
                        position: "absolute",
                        width: iframe.outerWidth(),
                        height: iframe.outerHeight()
                    } )
                    .appendTo( iframe.parent() )
                    .offset( iframe.offset() )[ 0 ];
            } );
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _allowInteraction: function( event ) {
            if ( $( event.target ).closest( ".ui-dialog" ).length ) {
                return true;
            }

            // TODO: Remove hack when datepicker implements
            // the .ui-front logic (#8989)
            return !!$( event.target ).closest( ".ui-datepicker" ).length;
        },

        _createOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            // We use a delay in case the overlay is created from an
            // event that we're going to be cancelling (#2804)
            var isOpening = true;
            this._delay( function() {
                isOpening = false;
            } );

            if ( !this.document.data( "ui-dialog-overlays" ) ) {

                // Prevent use of anchors and inputs
                // Using _on() for an event handler shared across many instances is
                // safe because the dialogs stack and must be closed in reverse order
                this._on( this.document, {
                    focusin: function( event ) {
                        if ( isOpening ) {
                            return;
                        }

                        if ( !this._allowInteraction( event ) ) {
                            event.preventDefault();
                            this._trackingInstances()[ 0 ]._focusTabbable();
                        }
                    }
                } );
            }

            this.overlay = $( "<div>" )
                .appendTo( this._appendTo() );

            this._addClass( this.overlay, null, "ui-widget-overlay ui-front" );
            this._on( this.overlay, {
                mousedown: "_keepFocus"
            } );
            this.document.data( "ui-dialog-overlays",
                ( this.document.data( "ui-dialog-overlays" ) || 0 ) + 1 );
        },

        _destroyOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            if ( this.overlay ) {
                var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

                if ( !overlays ) {
                    this._off( this.document, "focusin" );
                    this.document.removeData( "ui-dialog-overlays" );
                } else {
                    this.document.data( "ui-dialog-overlays", overlays );
                }

                this.overlay.remove();
                this.overlay = null;
            }
        }
    } );

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
    if ( $.uiBackCompat !== false ) {

        // Backcompat for dialogClass option
        $.widget( "ui.dialog", $.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super();
                this.uiDialog.addClass( this.options.dialogClass );
            },
            _setOption: function( key, value ) {
                if ( key === "dialogClass" ) {
                    this.uiDialog
                        .removeClass( this.options.dialogClass )
                        .addClass( value );
                }
                this._superApply( arguments );
            }
        } );
    }

    var widgetsDialog = $.ui.dialog;


    /*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/



    $.widget( "ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: true,
            greedy: false,
            scope: "default",
            tolerance: "intersect",

            // Callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {

            var proportions,
                o = this.options,
                accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction( accept ) ? accept : function( d ) {
                return d.is( accept );
            };

            this.proportions = function( /* valueToWrite */ ) {
                if ( arguments.length ) {

                    // Store the droppable's proportions
                    proportions = arguments[ 0 ];
                } else {

                    // Retrieve or derive the droppable's proportions
                    return proportions ?
                        proportions :
                        proportions = {
                            width: this.element[ 0 ].offsetWidth,
                            height: this.element[ 0 ].offsetHeight
                        };
                }
            };

            this._addToManager( o.scope );

            o.addClasses && this._addClass( "ui-droppable" );

        },

        _addToManager: function( scope ) {

            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
            $.ui.ddmanager.droppables[ scope ].push( this );
        },

        _splice: function( drop ) {
            var i = 0;
            for ( ; i < drop.length; i++ ) {
                if ( drop[ i ] === this ) {
                    drop.splice( i, 1 );
                }
            }
        },

        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[ this.options.scope ];

            this._splice( drop );
        },

        _setOption: function( key, value ) {

            if ( key === "accept" ) {
                this.accept = $.isFunction( value ) ? value : function( d ) {
                    return d.is( value );
                };
            } else if ( key === "scope" ) {
                var drop = $.ui.ddmanager.droppables[ this.options.scope ];

                this._splice( drop );
                this._addToManager( value );
            }

            this._super( key, value );
        },

        _activate: function( event ) {
            var draggable = $.ui.ddmanager.current;

            this._addActiveClass();
            if ( draggable ) {
                this._trigger( "activate", event, this.ui( draggable ) );
            }
        },

        _deactivate: function( event ) {
            var draggable = $.ui.ddmanager.current;

            this._removeActiveClass();
            if ( draggable ) {
                this._trigger( "deactivate", event, this.ui( draggable ) );
            }
        },

        _over: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem ||
                draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
                draggable.element ) ) ) {
                this._addHoverClass();
                this._trigger( "over", event, this.ui( draggable ) );
            }

        },

        _out: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem ||
                draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
                draggable.element ) ) ) {
                this._removeHoverClass();
                this._trigger( "out", event, this.ui( draggable ) );
            }

        },

        _drop: function( event, custom ) {

            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem ||
                draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return false;
            }

            this.element
                .find( ":data(ui-droppable)" )
                .not( ".ui-draggable-dragging" )
                .each( function() {
                    var inst = $( this ).droppable( "instance" );
                    if (
                        inst.options.greedy &&
                        !inst.options.disabled &&
                        inst.options.scope === draggable.options.scope &&
                        inst.accept.call(
                            inst.element[ 0 ], ( draggable.currentItem || draggable.element )
                        ) &&
                        intersect(
                            draggable,
                            $.extend( inst, { offset: inst.element.offset() } ),
                            inst.options.tolerance, event
                        )
                    ) {
                        childrenIntersection = true;
                        return false; }
                } );
            if ( childrenIntersection ) {
                return false;
            }

            if ( this.accept.call( this.element[ 0 ],
                ( draggable.currentItem || draggable.element ) ) ) {
                this._removeActiveClass();
                this._removeHoverClass();

                this._trigger( "drop", event, this.ui( draggable ) );
                return this.element;
            }

            return false;

        },

        ui: function( c ) {
            return {
                draggable: ( c.currentItem || c.element ),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        },

        // Extension points just to make backcompat sane and avoid duplicating logic
        // TODO: Remove in 1.13 along with call to it below
        _addHoverClass: function() {
            this._addClass( "ui-droppable-hover" );
        },

        _removeHoverClass: function() {
            this._removeClass( "ui-droppable-hover" );
        },

        _addActiveClass: function() {
            this._addClass( "ui-droppable-active" );
        },

        _removeActiveClass: function() {
            this._removeClass( "ui-droppable-active" );
        }
    } );

    var intersect = $.ui.intersect = ( function() {
        function isOverAxis( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        }

        return function( draggable, droppable, toleranceMode, event ) {

            if ( !droppable.offset ) {
                return false;
            }

            var x1 = ( draggable.positionAbs ||
                draggable.position.absolute ).left + draggable.margins.left,
                y1 = ( draggable.positionAbs ||
                    draggable.position.absolute ).top + draggable.margins.top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;

            switch ( toleranceMode ) {
                case "fit":
                    return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
                case "intersect":
                    return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
                        x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
                        t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
                        y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
                case "pointer":
                    return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
                        isOverAxis( event.pageX, l, droppable.proportions().width );
                case "touch":
                    return (
                        ( y1 >= t && y1 <= b ) || // Top edge touching
                        ( y2 >= t && y2 <= b ) || // Bottom edge touching
                        ( y1 < t && y2 > b ) // Surrounded vertically
                    ) && (
                        ( x1 >= l && x1 <= r ) || // Left edge touching
                        ( x2 >= l && x2 <= r ) || // Right edge touching
                        ( x1 < l && x2 > r ) // Surrounded horizontally
                    );
                default:
                    return false;
            }
        };
    } )();

    /*
	This manager tracks offsets of draggables and droppables
*/
    $.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function( t, event ) {

            var i, j,
                m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
                type = event ? event.type : null, // workaround for #2317
                list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

            droppablesLoop: for ( i = 0; i < m.length; i++ ) {

                // No disabled and non-accepted
                if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ],
                    ( t.currentItem || t.element ) ) ) ) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for ( j = 0; j < list.length; j++ ) {
                    if ( list[ j ] === m[ i ].element[ 0 ] ) {
                        m[ i ].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }

                m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
                if ( !m[ i ].visible ) {
                    continue;
                }

                // Activate the droppable if used directly from draggables
                if ( type === "mousedown" ) {
                    m[ i ]._activate.call( m[ i ], event );
                }

                m[ i ].offset = m[ i ].element.offset();
                m[ i ].proportions( {
                    width: m[ i ].element[ 0 ].offsetWidth,
                    height: m[ i ].element[ 0 ].offsetHeight
                } );

            }

        },
        drop: function( draggable, event ) {

            var dropped = false;

            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

                if ( !this.options ) {
                    return;
                }
                if ( !this.options.disabled && this.visible &&
                    intersect( draggable, this, this.options.tolerance, event ) ) {
                    dropped = this._drop.call( this, event ) || dropped;
                }

                if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ],
                    ( draggable.currentItem || draggable.element ) ) ) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call( this, event );
                }

            } );
            return dropped;

        },
        dragStart: function( draggable, event ) {

            // Listen for scrolling so that if the dragging causes scrolling the position of the
            // droppables can be recalculated (see #5003)
            draggable.element.parentsUntil( "body" ).on( "scroll.droppable", function() {
                if ( !draggable.options.refreshPositions ) {
                    $.ui.ddmanager.prepareOffsets( draggable, event );
                }
            } );
        },
        drag: function( draggable, event ) {

            // If you have a highly dynamic page, you might try this option. It renders positions
            // every time you move the mouse.
            if ( draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }

            // Run through all droppables and check their positions based on specific tolerance options
            $.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

                if ( this.options.disabled || this.greedyChild || !this.visible ) {
                    return;
                }

                var parentInstance, scope, parent,
                    intersects = intersect( draggable, this, this.options.tolerance, event ),
                    c = !intersects && this.isover ?
                        "isout" :
                        ( intersects && !this.isover ? "isover" : null );
                if ( !c ) {
                    return;
                }

                if ( this.options.greedy ) {

                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents( ":data(ui-droppable)" ).filter( function() {
                        return $( this ).droppable( "instance" ).options.scope === scope;
                    } );

                    if ( parent.length ) {
                        parentInstance = $( parent[ 0 ] ).droppable( "instance" );
                        parentInstance.greedyChild = ( c === "isover" );
                    }
                }

                // We just moved into a greedy child
                if ( parentInstance && c === "isover" ) {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call( parentInstance, event );
                }

                this[ c ] = true;
                this[ c === "isout" ? "isover" : "isout" ] = false;
                this[ c === "isover" ? "_over" : "_out" ].call( this, event );

                // We just moved out of a greedy child
                if ( parentInstance && c === "isout" ) {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call( parentInstance, event );
                }
            } );

        },
        dragStop: function( draggable, event ) {
            draggable.element.parentsUntil( "body" ).off( "scroll.droppable" );

            // Call prepareOffsets one final time since IE does not fire return scroll events when
            // overflow was caused by drag (see #5003)
            if ( !draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }
        }
    };

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
    if ( $.uiBackCompat !== false ) {

        // Backcompat for activeClass and hoverClass options
        $.widget( "ui.droppable", $.ui.droppable, {
            options: {
                hoverClass: false,
                activeClass: false
            },
            _addActiveClass: function() {
                this._super();
                if ( this.options.activeClass ) {
                    this.element.addClass( this.options.activeClass );
                }
            },
            _removeActiveClass: function() {
                this._super();
                if ( this.options.activeClass ) {
                    this.element.removeClass( this.options.activeClass );
                }
            },
            _addHoverClass: function() {
                this._super();
                if ( this.options.hoverClass ) {
                    this.element.addClass( this.options.hoverClass );
                }
            },
            _removeHoverClass: function() {
                this._super();
                if ( this.options.hoverClass ) {
                    this.element.removeClass( this.options.hoverClass );
                }
            }
        } );
    }

    var widgetsDroppable = $.ui.droppable;


    /*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Progressbar
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/progressbar/
//>>demos: http://jqueryui.com/progressbar/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/progressbar.css
//>>css.theme: ../../themes/base/theme.css



    var widgetsProgressbar = $.widget( "ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,

            change: null,
            complete: null
        },

        min: 0,

        _create: function() {

            // Constrain initial value
            this.oldValue = this.options.value = this._constrainedValue();

            this.element.attr( {

                // Only set static values; aria-valuenow and aria-valuemax are
                // set inside _refreshValue()
                role: "progressbar",
                "aria-valuemin": this.min
            } );
            this._addClass( "ui-progressbar", "ui-widget ui-widget-content" );

            this.valueDiv = $( "<div>" ).appendTo( this.element );
            this._addClass( this.valueDiv, "ui-progressbar-value", "ui-widget-header" );
            this._refreshValue();
        },

        _destroy: function() {
            this.element.removeAttr( "role aria-valuemin aria-valuemax aria-valuenow" );

            this.valueDiv.remove();
        },

        value: function( newValue ) {
            if ( newValue === undefined ) {
                return this.options.value;
            }

            this.options.value = this._constrainedValue( newValue );
            this._refreshValue();
        },

        _constrainedValue: function( newValue ) {
            if ( newValue === undefined ) {
                newValue = this.options.value;
            }

            this.indeterminate = newValue === false;

            // Sanitize value
            if ( typeof newValue !== "number" ) {
                newValue = 0;
            }

            return this.indeterminate ? false :
                Math.min( this.options.max, Math.max( this.min, newValue ) );
        },

        _setOptions: function( options ) {

            // Ensure "value" option is set after other values (like max)
            var value = options.value;
            delete options.value;

            this._super( options );

            this.options.value = this._constrainedValue( value );
            this._refreshValue();
        },

        _setOption: function( key, value ) {
            if ( key === "max" ) {

                // Don't allow a max less than min
                value = Math.max( this.min, value );
            }
            this._super( key, value );
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this.element.attr( "aria-disabled", value );
            this._toggleClass( null, "ui-state-disabled", !!value );
        },

        _percentage: function() {
            return this.indeterminate ?
                100 :
                100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
        },

        _refreshValue: function() {
            var value = this.options.value,
                percentage = this._percentage();

            this.valueDiv
                .toggle( this.indeterminate || value > this.min )
                .width( percentage.toFixed( 0 ) + "%" );

            this
                ._toggleClass( this.valueDiv, "ui-progressbar-complete", null,
                    value === this.options.max )
                ._toggleClass( "ui-progressbar-indeterminate", null, this.indeterminate );

            if ( this.indeterminate ) {
                this.element.removeAttr( "aria-valuenow" );
                if ( !this.overlayDiv ) {
                    this.overlayDiv = $( "<div>" ).appendTo( this.valueDiv );
                    this._addClass( this.overlayDiv, "ui-progressbar-overlay" );
                }
            } else {
                this.element.attr( {
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                } );
                if ( this.overlayDiv ) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }

            if ( this.oldValue !== value ) {
                this.oldValue = value;
                this._trigger( "change" );
            }
            if ( value === this.options.max ) {
                this._trigger( "complete" );
            }
        }
    } );


    /*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Selectable
//>>group: Interactions
//>>description: Allows groups of elements to be selected with the mouse.
//>>docs: http://api.jqueryui.com/selectable/
//>>demos: http://jqueryui.com/selectable/
//>>css.structure: ../../themes/base/selectable.css



    var widgetsSelectable = $.widget( "ui.selectable", $.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // Callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var that = this;

            this._addClass( "ui-selectable" );

            this.dragged = false;

            // Cache selectee children based on filter
            this.refresh = function() {
                that.elementPos = $( that.element[ 0 ] ).offset();
                that.selectees = $( that.options.filter, that.element[ 0 ] );
                that._addClass( that.selectees, "ui-selectee" );
                that.selectees.each( function() {
                    var $this = $( this ),
                        selecteeOffset = $this.offset(),
                        pos = {
                            left: selecteeOffset.left - that.elementPos.left,
                            top: selecteeOffset.top - that.elementPos.top
                        };
                    $.data( this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass( "ui-selected" ),
                        selecting: $this.hasClass( "ui-selecting" ),
                        unselecting: $this.hasClass( "ui-unselecting" )
                    } );
                } );
            };
            this.refresh();

            this._mouseInit();

            this.helper = $( "<div>" );
            this._addClass( this.helper, "ui-selectable-helper" );
        },

        _destroy: function() {
            this.selectees.removeData( "selectable-item" );
            this._mouseDestroy();
        },

        _mouseStart: function( event ) {
            var that = this,
                options = this.options;

            this.opos = [ event.pageX, event.pageY ];
            this.elementPos = $( this.element[ 0 ] ).offset();

            if ( this.options.disabled ) {
                return;
            }

            this.selectees = $( options.filter, this.element[ 0 ] );

            this._trigger( "start", event );

            $( options.appendTo ).append( this.helper );

            // position helper (lasso)
            this.helper.css( {
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            } );

            if ( options.autoRefresh ) {
                this.refresh();
            }

            this.selectees.filter( ".ui-selected" ).each( function() {
                var selectee = $.data( this, "selectable-item" );
                selectee.startselected = true;
                if ( !event.metaKey && !event.ctrlKey ) {
                    that._removeClass( selectee.$element, "ui-selected" );
                    selectee.selected = false;
                    that._addClass( selectee.$element, "ui-unselecting" );
                    selectee.unselecting = true;

                    // selectable UNSELECTING callback
                    that._trigger( "unselecting", event, {
                        unselecting: selectee.element
                    } );
                }
            } );

            $( event.target ).parents().addBack().each( function() {
                var doSelect,
                    selectee = $.data( this, "selectable-item" );
                if ( selectee ) {
                    doSelect = ( !event.metaKey && !event.ctrlKey ) ||
                        !selectee.$element.hasClass( "ui-selected" );
                    that._removeClass( selectee.$element, doSelect ? "ui-unselecting" : "ui-selected" )
                        ._addClass( selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting" );
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;

                    // selectable (UN)SELECTING callback
                    if ( doSelect ) {
                        that._trigger( "selecting", event, {
                            selecting: selectee.element
                        } );
                    } else {
                        that._trigger( "unselecting", event, {
                            unselecting: selectee.element
                        } );
                    }
                    return false;
                }
            } );

        },

        _mouseDrag: function( event ) {

            this.dragged = true;

            if ( this.options.disabled ) {
                return;
            }

            var tmp,
                that = this,
                options = this.options,
                x1 = this.opos[ 0 ],
                y1 = this.opos[ 1 ],
                x2 = event.pageX,
                y2 = event.pageY;

            if ( x1 > x2 ) { tmp = x2; x2 = x1; x1 = tmp; }
            if ( y1 > y2 ) { tmp = y2; y2 = y1; y1 = tmp; }
            this.helper.css( { left: x1, top: y1, width: x2 - x1, height: y2 - y1 } );

            this.selectees.each( function() {
                var selectee = $.data( this, "selectable-item" ),
                    hit = false,
                    offset = {};

                //prevent helper from being selected if appendTo: selectable
                if ( !selectee || selectee.element === that.element[ 0 ] ) {
                    return;
                }

                offset.left   = selectee.left   + that.elementPos.left;
                offset.right  = selectee.right  + that.elementPos.left;
                offset.top    = selectee.top    + that.elementPos.top;
                offset.bottom = selectee.bottom + that.elementPos.top;

                if ( options.tolerance === "touch" ) {
                    hit = ( !( offset.left > x2 || offset.right < x1 || offset.top > y2 ||
                        offset.bottom < y1 ) );
                } else if ( options.tolerance === "fit" ) {
                    hit = ( offset.left > x1 && offset.right < x2 && offset.top > y1 &&
                        offset.bottom < y2 );
                }

                if ( hit ) {

                    // SELECT
                    if ( selectee.selected ) {
                        that._removeClass( selectee.$element, "ui-selected" );
                        selectee.selected = false;
                    }
                    if ( selectee.unselecting ) {
                        that._removeClass( selectee.$element, "ui-unselecting" );
                        selectee.unselecting = false;
                    }
                    if ( !selectee.selecting ) {
                        that._addClass( selectee.$element, "ui-selecting" );
                        selectee.selecting = true;

                        // selectable SELECTING callback
                        that._trigger( "selecting", event, {
                            selecting: selectee.element
                        } );
                    }
                } else {

                    // UNSELECT
                    if ( selectee.selecting ) {
                        if ( ( event.metaKey || event.ctrlKey ) && selectee.startselected ) {
                            that._removeClass( selectee.$element, "ui-selecting" );
                            selectee.selecting = false;
                            that._addClass( selectee.$element, "ui-selected" );
                            selectee.selected = true;
                        } else {
                            that._removeClass( selectee.$element, "ui-selecting" );
                            selectee.selecting = false;
                            if ( selectee.startselected ) {
                                that._addClass( selectee.$element, "ui-unselecting" );
                                selectee.unselecting = true;
                            }

                            // selectable UNSELECTING callback
                            that._trigger( "unselecting", event, {
                                unselecting: selectee.element
                            } );
                        }
                    }
                    if ( selectee.selected ) {
                        if ( !event.metaKey && !event.ctrlKey && !selectee.startselected ) {
                            that._removeClass( selectee.$element, "ui-selected" );
                            selectee.selected = false;

                            that._addClass( selectee.$element, "ui-unselecting" );
                            selectee.unselecting = true;

                            // selectable UNSELECTING callback
                            that._trigger( "unselecting", event, {
                                unselecting: selectee.element
                            } );
                        }
                    }
                }
            } );

            return false;
        },

        _mouseStop: function( event ) {
            var that = this;

            this.dragged = false;

            $( ".ui-unselecting", this.element[ 0 ] ).each( function() {
                var selectee = $.data( this, "selectable-item" );
                that._removeClass( selectee.$element, "ui-unselecting" );
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger( "unselected", event, {
                    unselected: selectee.element
                } );
            } );
            $( ".ui-selecting", this.element[ 0 ] ).each( function() {
                var selectee = $.data( this, "selectable-item" );
                that._removeClass( selectee.$element, "ui-selecting" )
                    ._addClass( selectee.$element, "ui-selected" );
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger( "selected", event, {
                    selected: selectee.element
                } );
            } );
            this._trigger( "stop", event );

            this.helper.remove();

            return false;
        }

    } );


    /*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Selectmenu
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Duplicates and extends the functionality of a native HTML select element, allowing it to be customizable in behavior and appearance far beyond the limitations of a native select.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/selectmenu/
//>>demos: http://jqueryui.com/selectmenu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/selectmenu.css, ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css



    var widgetsSelectmenu = $.widget( "ui.selectmenu", [ $.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: false,

            // Callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },

        _create: function() {
            var selectmenuId = this.element.uniqueId().attr( "id" );
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            };

            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();

            this._rendered = false;
            this.menuItems = $();
        },

        _drawButton: function() {
            var icon,
                that = this,
                item = this._parseOption(
                    this.element.find( "option:selected" ),
                    this.element[ 0 ].selectedIndex
                );

            // Associate existing label with the new button
            this.labels = this.element.labels().attr( "for", this.ids.button );
            this._on( this.labels, {
                click: function( event ) {
                    this.button.focus();
                    event.preventDefault();
                }
            } );

            // Hide original select element
            this.element.hide();

            // Create button
            this.button = $( "<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr( "title" )
            } )
                .insertAfter( this.element );

            this._addClass( this.button, "ui-selectmenu-button ui-selectmenu-button-closed",
                "ui-button ui-widget" );

            icon = $( "<span>" ).appendTo( this.button );
            this._addClass( icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button );
            this.buttonItem = this._renderButtonItem( item )
                .appendTo( this.button );

            if ( this.options.width !== false ) {
                this._resizeButton();
            }

            this._on( this.button, this._buttonEvents );
            this.button.one( "focusin", function() {

                // Delay rendering the menu items until the button receives focus.
                // The menu may have already been rendered via a programmatic open.
                if ( !that._rendered ) {
                    that._refreshMenu();
                }
            } );
        },

        _drawMenu: function() {
            var that = this;

            // Create menu
            this.menu = $( "<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            } );

            // Wrap menu
            this.menuWrap = $( "<div>" ).append( this.menu );
            this._addClass( this.menuWrap, "ui-selectmenu-menu", "ui-front" );
            this.menuWrap.appendTo( this._appendTo() );

            // Initialize menu widget
            this.menuInstance = this.menu
                .menu( {
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function( event, ui ) {
                        event.preventDefault();

                        // Support: IE8
                        // If the item was selected via a click, the text selection
                        // will be destroyed in IE
                        that._setSelection();

                        that._select( ui.item.data( "ui-selectmenu-item" ), event );
                    },
                    focus: function( event, ui ) {
                        var item = ui.item.data( "ui-selectmenu-item" );

                        // Prevent inital focus from firing and check if its a newly focused item
                        if ( that.focusIndex != null && item.index !== that.focusIndex ) {
                            that._trigger( "focus", event, { item: item } );
                            if ( !that.isOpen ) {
                                that._select( item, event );
                            }
                        }
                        that.focusIndex = item.index;

                        that.button.attr( "aria-activedescendant",
                            that.menuItems.eq( item.index ).attr( "id" ) );
                    }
                } )
                .menu( "instance" );

            // Don't close the menu on mouseleave
            this.menuInstance._off( this.menu, "mouseleave" );

            // Cancel the menu's collapseAll on document click
            this.menuInstance._closeOnDocumentClick = function() {
                return false;
            };

            // Selects often contain empty items, but never contain dividers
            this.menuInstance._isDivider = function() {
                return false;
            };
        },

        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(
                this.buttonItem = this._renderButtonItem(

                    // Fall back to an empty object in case there are no options
                    this._getSelectedItem().data( "ui-selectmenu-item" ) || {}
                )
            );
            if ( this.options.width === null ) {
                this._resizeButton();
            }
        },

        _refreshMenu: function() {
            var item,
                options = this.element.find( "option" );

            this.menu.empty();

            this._parseOptions( options );
            this._renderMenu( this.menu, this.items );

            this.menuInstance.refresh();
            this.menuItems = this.menu.find( "li" )
                .not( ".ui-selectmenu-optgroup" )
                .find( ".ui-menu-item-wrapper" );

            this._rendered = true;

            if ( !options.length ) {
                return;
            }

            item = this._getSelectedItem();

            // Update the menu to have the correct item focused
            this.menuInstance.focus( null, item );
            this._setAria( item.data( "ui-selectmenu-item" ) );

            // Set disabled state
            this._setOption( "disabled", this.element.prop( "disabled" ) );
        },

        open: function( event ) {
            if ( this.options.disabled ) {
                return;
            }

            // If this is the first time the menu is being opened, render the items
            if ( !this._rendered ) {
                this._refreshMenu();
            } else {

                // Menu clears focus on close, reset focus to selected item
                this._removeClass( this.menu.find( ".ui-state-active" ), null, "ui-state-active" );
                this.menuInstance.focus( null, this._getSelectedItem() );
            }

            // If there are no options, don't open the menu
            if ( !this.menuItems.length ) {
                return;
            }

            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();

            this._on( this.document, this._documentClick );

            this._trigger( "open", event );
        },

        _position: function() {
            this.menuWrap.position( $.extend( { of: this.button }, this.options.position ) );
        },

        close: function( event ) {
            if ( !this.isOpen ) {
                return;
            }

            this.isOpen = false;
            this._toggleAttr();

            this.range = null;
            this._off( this.document );

            this._trigger( "close", event );
        },

        widget: function() {
            return this.button;
        },

        menuWidget: function() {
            return this.menu;
        },

        _renderButtonItem: function( item ) {
            var buttonItem = $( "<span>" );

            this._setText( buttonItem, item.label );
            this._addClass( buttonItem, "ui-selectmenu-text" );

            return buttonItem;
        },

        _renderMenu: function( ul, items ) {
            var that = this,
                currentOptgroup = "";

            $.each( items, function( index, item ) {
                var li;

                if ( item.optgroup !== currentOptgroup ) {
                    li = $( "<li>", {
                        text: item.optgroup
                    } );
                    that._addClass( li, "ui-selectmenu-optgroup", "ui-menu-divider" +
                        ( item.element.parent( "optgroup" ).prop( "disabled" ) ?
                            " ui-state-disabled" :
                            "" ) );

                    li.appendTo( ul );

                    currentOptgroup = item.optgroup;
                }

                that._renderItemData( ul, item );
            } );
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-selectmenu-item", item );
        },

        _renderItem: function( ul, item ) {
            var li = $( "<li>" ),
                wrapper = $( "<div>", {
                    title: item.element.attr( "title" )
                } );

            if ( item.disabled ) {
                this._addClass( li, null, "ui-state-disabled" );
            }
            this._setText( wrapper, item.label );

            return li.append( wrapper ).appendTo( ul );
        },

        _setText: function( element, value ) {
            if ( value ) {
                element.text( value );
            } else {
                element.html( "&#160;" );
            }
        },

        _move: function( direction, event ) {
            var item, next,
                filter = ".ui-menu-item";

            if ( this.isOpen ) {
                item = this.menuItems.eq( this.focusIndex ).parent( "li" );
            } else {
                item = this.menuItems.eq( this.element[ 0 ].selectedIndex ).parent( "li" );
                filter += ":not(.ui-state-disabled)";
            }

            if ( direction === "first" || direction === "last" ) {
                next = item[ direction === "first" ? "prevAll" : "nextAll" ]( filter ).eq( -1 );
            } else {
                next = item[ direction + "All" ]( filter ).eq( 0 );
            }

            if ( next.length ) {
                this.menuInstance.focus( event, next );
            }
        },

        _getSelectedItem: function() {
            return this.menuItems.eq( this.element[ 0 ].selectedIndex ).parent( "li" );
        },

        _toggle: function( event ) {
            this[ this.isOpen ? "close" : "open" ]( event );
        },

        _setSelection: function() {
            var selection;

            if ( !this.range ) {
                return;
            }

            if ( window.getSelection ) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange( this.range );

                // Support: IE8
            } else {
                this.range.select();
            }

            // Support: IE
            // Setting the text selection kills the button focus in IE, but
            // restoring the focus doesn't kill the selection.
            this.button.focus();
        },

        _documentClick: {
            mousedown: function( event ) {
                if ( !this.isOpen ) {
                    return;
                }

                if ( !$( event.target ).closest( ".ui-selectmenu-menu, #" +
                    $.ui.escapeSelector( this.ids.button ) ).length ) {
                    this.close( event );
                }
            }
        },

        _buttonEvents: {

            // Prevent text selection from being reset when interacting with the selectmenu (#10144)
            mousedown: function() {
                var selection;

                if ( window.getSelection ) {
                    selection = window.getSelection();
                    if ( selection.rangeCount ) {
                        this.range = selection.getRangeAt( 0 );
                    }

                    // Support: IE8
                } else {
                    this.range = document.selection.createRange();
                }
            },

            click: function( event ) {
                this._setSelection();
                this._toggle( event );
            },

            keydown: function( event ) {
                var preventDefault = true;
                switch ( event.keyCode ) {
                    case $.ui.keyCode.TAB:
                    case $.ui.keyCode.ESCAPE:
                        this.close( event );
                        preventDefault = false;
                        break;
                    case $.ui.keyCode.ENTER:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        }
                        break;
                    case $.ui.keyCode.UP:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "prev", event );
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "next", event );
                        }
                        break;
                    case $.ui.keyCode.SPACE:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        } else {
                            this._toggle( event );
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        this._move( "prev", event );
                        break;
                    case $.ui.keyCode.RIGHT:
                        this._move( "next", event );
                        break;
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.PAGE_UP:
                        this._move( "first", event );
                        break;
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_DOWN:
                        this._move( "last", event );
                        break;
                    default:
                        this.menu.trigger( event );
                        preventDefault = false;
                }

                if ( preventDefault ) {
                    event.preventDefault();
                }
            }
        },

        _selectFocusedItem: function( event ) {
            var item = this.menuItems.eq( this.focusIndex ).parent( "li" );
            if ( !item.hasClass( "ui-state-disabled" ) ) {
                this._select( item.data( "ui-selectmenu-item" ), event );
            }
        },

        _select: function( item, event ) {
            var oldIndex = this.element[ 0 ].selectedIndex;

            // Change native select element
            this.element[ 0 ].selectedIndex = item.index;
            this.buttonItem.replaceWith( this.buttonItem = this._renderButtonItem( item ) );
            this._setAria( item );
            this._trigger( "select", event, { item: item } );

            if ( item.index !== oldIndex ) {
                this._trigger( "change", event, { item: item } );
            }

            this.close( event );
        },

        _setAria: function( item ) {
            var id = this.menuItems.eq( item.index ).attr( "id" );

            this.button.attr( {
                "aria-labelledby": id,
                "aria-activedescendant": id
            } );
            this.menu.attr( "aria-activedescendant", id );
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                var icon = this.button.find( "span.ui-icon" );
                this._removeClass( icon, null, this.options.icons.button )
                    ._addClass( icon, null, value.button );
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.menuWrap.appendTo( this._appendTo() );
            }

            if ( key === "width" ) {
                this._resizeButton();
            }
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this.menuInstance.option( "disabled", value );
            this.button.attr( "aria-disabled", value );
            this._toggleClass( this.button, null, "ui-state-disabled", value );

            this.element.prop( "disabled", value );
            if ( value ) {
                this.button.attr( "tabindex", -1 );
                this.close();
            } else {
                this.button.attr( "tabindex", 0 );
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front, dialog" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _toggleAttr: function() {
            this.button.attr( "aria-expanded", this.isOpen );

            // We can't use two _toggleClass() calls here, because we need to make sure
            // we always remove classes first and add them second, otherwise if both classes have the
            // same theme class, it will be removed after we add it.
            this._removeClass( this.button, "ui-selectmenu-button-" +
                ( this.isOpen ? "closed" : "open" ) )
                ._addClass( this.button, "ui-selectmenu-button-" +
                    ( this.isOpen ? "open" : "closed" ) )
                ._toggleClass( this.menuWrap, "ui-selectmenu-open", null, this.isOpen );

            this.menu.attr( "aria-hidden", !this.isOpen );
        },

        _resizeButton: function() {
            var width = this.options.width;

            // For `width: false`, just remove inline style and stop
            if ( width === false ) {
                this.button.css( "width", "" );
                return;
            }

            // For `width: null`, match the width of the original element
            if ( width === null ) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }

            this.button.outerWidth( width );
        },

        _resizeMenu: function() {
            this.menu.outerWidth( Math.max(
                this.button.outerWidth(),

                // Support: IE10
                // IE10 wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping
                this.menu.width( "" ).outerWidth() + 1
            ) );
        },

        _getCreateOptions: function() {
            var options = this._super();

            options.disabled = this.element.prop( "disabled" );

            return options;
        },

        _parseOptions: function( options ) {
            var that = this,
                data = [];
            options.each( function( index, item ) {
                data.push( that._parseOption( $( item ), index ) );
            } );
            this.items = data;
        },

        _parseOption: function( option, index ) {
            var optgroup = option.parent( "optgroup" );

            return {
                element: option,
                index: index,
                value: option.val(),
                label: option.text(),
                optgroup: optgroup.attr( "label" ) || "",
                disabled: optgroup.prop( "disabled" ) || option.prop( "disabled" )
            };
        },

        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr( "for", this.ids.element );
        }
    } ] );


    /*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css



    var widgetsSlider = $.widget( "ui.slider", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",

                // Note: ui-widget-header isn't the most fittingly semantic framework class for this
                // element, but worked best visually with a variety of themes
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // Callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        // Number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        numPages: 5,

        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();

            this._addClass( "ui-slider ui-slider-" + this.orientation,
                "ui-widget ui-widget-content" );

            this._refresh();

            this._animateOff = false;
        },

        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function() {
            var i, handleCount,
                options = this.options,
                existingHandles = this.element.find( ".ui-slider-handle" ),
                handle = "<span tabindex='0'></span>",
                handles = [];

            handleCount = ( options.values && options.values.length ) || 1;

            if ( existingHandles.length > handleCount ) {
                existingHandles.slice( handleCount ).remove();
                existingHandles = existingHandles.slice( 0, handleCount );
            }

            for ( i = existingHandles.length; i < handleCount; i++ ) {
                handles.push( handle );
            }

            this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

            this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

            this.handle = this.handles.eq( 0 );

            this.handles.each( function( i ) {
                $( this )
                    .data( "ui-slider-handle-index", i )
                    .attr( "tabIndex", 0 );
            } );
        },

        _createRange: function() {
            var options = this.options;

            if ( options.range ) {
                if ( options.range === true ) {
                    if ( !options.values ) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if ( options.values.length && options.values.length !== 2 ) {
                        options.values = [ options.values[ 0 ], options.values[ 0 ] ];
                    } else if ( $.isArray( options.values ) ) {
                        options.values = options.values.slice( 0 );
                    }
                }

                if ( !this.range || !this.range.length ) {
                    this.range = $( "<div>" )
                        .appendTo( this.element );

                    this._addClass( this.range, "ui-slider-range" );
                } else {
                    this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

                    // Handle range switching from true to min/max
                    this.range.css( {
                        "left": "",
                        "bottom": ""
                    } );
                }
                if ( options.range === "min" || options.range === "max" ) {
                    this._addClass( this.range, "ui-slider-range-" + options.range );
                }
            } else {
                if ( this.range ) {
                    this.range.remove();
                }
                this.range = null;
            }
        },

        _setupEvents: function() {
            this._off( this.handles );
            this._on( this.handles, this._handleEvents );
            this._hoverable( this.handles );
            this._focusable( this.handles );
        },

        _destroy: function() {
            this.handles.remove();
            if ( this.range ) {
                this.range.remove();
            }

            this._mouseDestroy();
        },

        _mouseCapture: function( event ) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
                that = this,
                o = this.options;

            if ( o.disabled ) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = { x: event.pageX, y: event.pageY };
            normValue = this._normValueFromMouse( position );
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each( function( i ) {
                var thisDistance = Math.abs( normValue - that.values( i ) );
                if ( ( distance > thisDistance ) ||
                    ( distance === thisDistance &&
                        ( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
                    distance = thisDistance;
                    closestHandle = $( this );
                    index = i;
                }
            } );

            allowed = this._start( event, index );
            if ( allowed === false ) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            this._addClass( closestHandle, null, "ui-state-active" );
            closestHandle.trigger( "focus" );

            offset = closestHandle.offset();
            mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
            this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
                left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
                top: event.pageY - offset.top -
                    ( closestHandle.height() / 2 ) -
                    ( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
                    ( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
                    ( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
            };

            if ( !this.handles.hasClass( "ui-state-hover" ) ) {
                this._slide( event, index, normValue );
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function() {
            return true;
        },

        _mouseDrag: function( event ) {
            var position = { x: event.pageX, y: event.pageY },
                normValue = this._normValueFromMouse( position );

            this._slide( event, this._handleIndex, normValue );

            return false;
        },

        _mouseStop: function( event ) {
            this._removeClass( this.handles, null, "ui-state-active" );
            this._mouseSliding = false;

            this._stop( event, this._handleIndex );
            this._change( event, this._handleIndex );

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function() {
            this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function( position ) {
            var pixelTotal,
                pixelMouse,
                percentMouse,
                valueTotal,
                valueMouse;

            if ( this.orientation === "horizontal" ) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left -
                    ( this._clickOffset ? this._clickOffset.left : 0 );
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top -
                    ( this._clickOffset ? this._clickOffset.top : 0 );
            }

            percentMouse = ( pixelMouse / pixelTotal );
            if ( percentMouse > 1 ) {
                percentMouse = 1;
            }
            if ( percentMouse < 0 ) {
                percentMouse = 0;
            }
            if ( this.orientation === "vertical" ) {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue( valueMouse );
        },

        _uiHash: function( index, value, values ) {
            var uiHash = {
                handle: this.handles[ index ],
                handleIndex: index,
                value: value !== undefined ? value : this.value()
            };

            if ( this._hasMultipleValues() ) {
                uiHash.value = value !== undefined ? value : this.values( index );
                uiHash.values = values || this.values();
            }

            return uiHash;
        },

        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },

        _start: function( event, index ) {
            return this._trigger( "start", event, this._uiHash( index ) );
        },

        _slide: function( event, index, newVal ) {
            var allowed, otherVal,
                currentValue = this.value(),
                newValues = this.values();

            if ( this._hasMultipleValues() ) {
                otherVal = this.values( index ? 0 : 1 );
                currentValue = this.values( index );

                if ( this.options.values.length === 2 && this.options.range === true ) {
                    newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
                }

                newValues[ index ] = newVal;
            }

            if ( newVal === currentValue ) {
                return;
            }

            allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

            // A slide can be canceled by returning false from the slide callback
            if ( allowed === false ) {
                return;
            }

            if ( this._hasMultipleValues() ) {
                this.values( index, newVal );
            } else {
                this.value( newVal );
            }
        },

        _stop: function( event, index ) {
            this._trigger( "stop", event, this._uiHash( index ) );
        },

        _change: function( event, index ) {
            if ( !this._keySliding && !this._mouseSliding ) {

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;
                this._trigger( "change", event, this._uiHash( index ) );
            }
        },

        value: function( newValue ) {
            if ( arguments.length ) {
                this.options.value = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, 0 );
                return;
            }

            return this._value();
        },

        values: function( index, newValue ) {
            var vals,
                newValues,
                i;

            if ( arguments.length > 1 ) {
                this.options.values[ index ] = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, index );
                return;
            }

            if ( arguments.length ) {
                if ( $.isArray( arguments[ 0 ] ) ) {
                    vals = this.options.values;
                    newValues = arguments[ 0 ];
                    for ( i = 0; i < vals.length; i += 1 ) {
                        vals[ i ] = this._trimAlignValue( newValues[ i ] );
                        this._change( null, i );
                    }
                    this._refreshValue();
                } else {
                    if ( this._hasMultipleValues() ) {
                        return this._values( index );
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function( key, value ) {
            var i,
                valsLength = 0;

            if ( key === "range" && this.options.range === true ) {
                if ( value === "min" ) {
                    this.options.value = this._values( 0 );
                    this.options.values = null;
                } else if ( value === "max" ) {
                    this.options.value = this._values( this.options.values.length - 1 );
                    this.options.values = null;
                }
            }

            if ( $.isArray( this.options.values ) ) {
                valsLength = this.options.values.length;
            }

            this._super( key, value );

            switch ( key ) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
                        ._addClass( "ui-slider-" + this.orientation );
                    this._refreshValue();
                    if ( this.options.range ) {
                        this._refreshRange( value );
                    }

                    // Reset positioning from previous orientation
                    this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change( null, 0 );
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();

                    // Start from the last handle to prevent unreachable handles (#9046)
                    for ( i = valsLength - 1; i >= 0; i-- ) {
                        this._change( null, i );
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break;
            }
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this._toggleClass( null, "ui-state-disabled", !!value );
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue( val );

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function( index ) {
            var val,
                vals,
                i;

            if ( arguments.length ) {
                val = this.options.values[ index ];
                val = this._trimAlignValue( val );

                return val;
            } else if ( this._hasMultipleValues() ) {

                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for ( i = 0; i < vals.length; i += 1 ) {
                    vals[ i ] = this._trimAlignValue( vals[ i ] );
                }

                return vals;
            } else {
                return [];
            }
        },

        // Returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function( val ) {
            if ( val <= this._valueMin() ) {
                return this._valueMin();
            }
            if ( val >= this._valueMax() ) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
                valModStep = ( val - this._valueMin() ) % step,
                alignValue = val - valModStep;

            if ( Math.abs( valModStep ) * 2 >= step ) {
                alignValue += ( valModStep > 0 ) ? step : ( -step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat( alignValue.toFixed( 5 ) );
        },

        _calculateNewMax: function() {
            var max = this.options.max,
                min = this._valueMin(),
                step = this.options.step,
                aboveMin = Math.round( ( max - min ) / step ) * step;
            max = aboveMin + min;
            if ( max > this.options.max ) {

                //If max is not divisible by step, rounding off may increase its value
                max -= step;
            }
            this.max = parseFloat( max.toFixed( this._precision() ) );
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _valueMin: function() {
            return this.options.min;
        },

        _valueMax: function() {
            return this.max;
        },

        _refreshRange: function( orientation ) {
            if ( orientation === "vertical" ) {
                this.range.css( { "width": "", "left": "" } );
            }
            if ( orientation === "horizontal" ) {
                this.range.css( { "height": "", "bottom": "" } );
            }
        },

        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax,
                oRange = this.options.range,
                o = this.options,
                that = this,
                animate = ( !this._animateOff ) ? o.animate : false,
                _set = {};

            if ( this._hasMultipleValues() ) {
                this.handles.each( function( i ) {
                    valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
                        that._valueMin() ) * 100;
                    _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                    $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
                    if ( that.options.range === true ) {
                        if ( that.orientation === "horizontal" ) {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                                    left: valPercent + "%"
                                }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( {
                                    width: ( valPercent - lastValPercent ) + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                } );
                            }
                        } else {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                                    bottom: ( valPercent ) + "%"
                                }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( {
                                    height: ( valPercent - lastValPercent ) + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                } );
                            }
                        }
                    }
                    lastValPercent = valPercent;
                } );
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                    ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
                    0;
                _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

                if ( oRange === "min" && this.orientation === "horizontal" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        width: valPercent + "%"
                    }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "horizontal" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        width: ( 100 - valPercent ) + "%"
                    }, o.animate );
                }
                if ( oRange === "min" && this.orientation === "vertical" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        height: valPercent + "%"
                    }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "vertical" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
                        height: ( 100 - valPercent ) + "%"
                    }, o.animate );
                }
            }
        },

        _handleEvents: {
            keydown: function( event ) {
                var allowed, curVal, newVal, step,
                    index = $( event.target ).data( "ui-slider-handle-index" );

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        event.preventDefault();
                        if ( !this._keySliding ) {
                            this._keySliding = true;
                            this._addClass( $( event.target ), null, "ui-state-active" );
                            allowed = this._start( event, index );
                            if ( allowed === false ) {
                                return;
                            }
                        }
                        break;
                }

                step = this.options.step;
                if ( this._hasMultipleValues() ) {
                    curVal = newVal = this.values( index );
                } else {
                    curVal = newVal = this.value();
                }

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(
                            curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
                        );
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(
                            curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if ( curVal === this._valueMax() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal + step );
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if ( curVal === this._valueMin() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal - step );
                        break;
                }

                this._slide( event, index, newVal );
            },
            keyup: function( event ) {
                var index = $( event.target ).data( "ui-slider-handle-index" );

                if ( this._keySliding ) {
                    this._keySliding = false;
                    this._stop( event, index );
                    this._change( event, index );
                    this._removeClass( $( event.target ), null, "ui-state-active" );
                }
            }
        }
    } );


    /*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css



    var widgetsSortable = $.widget( "ui.sortable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // Callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },

        _isOverAxis: function( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        },

        _isFloating: function( item ) {
            return ( /left|right/ ).test( item.css( "float" ) ) ||
                ( /inline|table-cell/ ).test( item.css( "display" ) );
        },

        _create: function() {
            this.containerCache = {};
            this._addClass( "ui-sortable" );

            //Get the items
            this.refresh();

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            this._setHandleClassName();

            //We're ready to go
            this.ready = true;

        },

        _setOption: function( key, value ) {
            this._super( key, value );

            if ( key === "handle" ) {
                this._setHandleClassName();
            }
        },

        _setHandleClassName: function() {
            var that = this;
            this._removeClass( this.element.find( ".ui-sortable-handle" ), "ui-sortable-handle" );
            $.each( this.items, function() {
                that._addClass(
                    this.instance.options.handle ?
                        this.item.find( this.instance.options.handle ) :
                        this.item,
                    "ui-sortable-handle"
                );
            } );
        },

        _destroy: function() {
            this._mouseDestroy();

            for ( var i = this.items.length - 1; i >= 0; i-- ) {
                this.items[ i ].item.removeData( this.widgetName + "-item" );
            }

            return this;
        },

        _mouseCapture: function( event, overrideHandle ) {
            var currentItem = null,
                validHandle = false,
                that = this;

            if ( this.reverting ) {
                return false;
            }

            if ( this.options.disabled || this.options.type === "static" ) {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems( event );

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $( event.target ).parents().each( function() {
                if ( $.data( this, that.widgetName + "-item" ) === that ) {
                    currentItem = $( this );
                    return false;
                }
            } );
            if ( $.data( event.target, that.widgetName + "-item" ) === that ) {
                currentItem = $( event.target );
            }

            if ( !currentItem ) {
                return false;
            }
            if ( this.options.handle && !overrideHandle ) {
                $( this.options.handle, currentItem ).find( "*" ).addBack().each( function() {
                    if ( this === event.target ) {
                        validHandle = true;
                    }
                } );
                if ( !validHandle ) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function( event, overrideHandle, noActivation ) {

            var i, body,
                o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to
            // mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper( event );

            //Cache the helper size
            this._cacheHelperProportions();

            /*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend( this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),

                // This is a relative to absolute position minus the actual position calculation -
                // only used for relative positioned helper
                relative: this._getRelativeOffset()
            } );

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css( "position", "absolute" );
            this.cssPosition = this.helper.css( "position" );

            //Generate the original position
            this.originalPosition = this._generatePosition( event );
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

            //Cache the former DOM position
            this.domPosition = {
                prev: this.currentItem.prev()[ 0 ],
                parent: this.currentItem.parent()[ 0 ]
            };

            // If the helper is not the original, hide the original so it's not playing any role during
            // the drag, won't cause anything bad this way
            if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if ( o.containment ) {
                this._setContainment();
            }

            if ( o.cursor && o.cursor !== "auto" ) { // cursor option
                body = this.document.find( "body" );

                // Support: IE
                this.storedCursor = body.css( "cursor" );
                body.css( "cursor", o.cursor );

                this.storedStylesheet =
                    $( "<style>*{ cursor: " + o.cursor + " !important; }</style>" ).appendTo( body );
            }

            if ( o.opacity ) { // opacity option
                if ( this.helper.css( "opacity" ) ) {
                    this._storedOpacity = this.helper.css( "opacity" );
                }
                this.helper.css( "opacity", o.opacity );
            }

            if ( o.zIndex ) { // zIndex option
                if ( this.helper.css( "zIndex" ) ) {
                    this._storedZIndex = this.helper.css( "zIndex" );
                }
                this.helper.css( "zIndex", o.zIndex );
            }

            //Prepare scrolling
            if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                this.scrollParent[ 0 ].tagName !== "HTML" ) {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger( "start", event, this._uiHash() );

            //Recache the helper size
            if ( !this._preserveHelperProportions ) {
                this._cacheHelperProportions();
            }

            //Post "activate" events to possible containers
            if ( !noActivation ) {
                for ( i = this.containers.length - 1; i >= 0; i-- ) {
                    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
                }
            }

            //Prepare possible droppables
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.current = this;
            }

            if ( $.ui.ddmanager && !o.dropBehaviour ) {
                $.ui.ddmanager.prepareOffsets( this, event );
            }

            this.dragging = true;

            this._addClass( this.helper, "ui-sortable-helper" );

            // Execute the drag once - this causes the helper not to be visiblebefore getting its
            // correct position
            this._mouseDrag( event );
            return true;

        },

        _mouseDrag: function( event ) {
            var i, item, itemElement, intersection,
                o = this.options,
                scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition( event );
            this.positionAbs = this._convertPositionTo( "absolute" );

            if ( !this.lastPositionAbs ) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if ( this.options.scroll ) {
                if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                    this.scrollParent[ 0 ].tagName !== "HTML" ) {

                    if ( ( this.overflowOffset.top + this.scrollParent[ 0 ].offsetHeight ) -
                        event.pageY < o.scrollSensitivity ) {
                        this.scrollParent[ 0 ].scrollTop =
                            scrolled = this.scrollParent[ 0 ].scrollTop + o.scrollSpeed;
                    } else if ( event.pageY - this.overflowOffset.top < o.scrollSensitivity ) {
                        this.scrollParent[ 0 ].scrollTop =
                            scrolled = this.scrollParent[ 0 ].scrollTop - o.scrollSpeed;
                    }

                    if ( ( this.overflowOffset.left + this.scrollParent[ 0 ].offsetWidth ) -
                        event.pageX < o.scrollSensitivity ) {
                        this.scrollParent[ 0 ].scrollLeft = scrolled =
                            this.scrollParent[ 0 ].scrollLeft + o.scrollSpeed;
                    } else if ( event.pageX - this.overflowOffset.left < o.scrollSensitivity ) {
                        this.scrollParent[ 0 ].scrollLeft = scrolled =
                            this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if ( event.pageY - this.document.scrollTop() < o.scrollSensitivity ) {
                        scrolled = this.document.scrollTop( this.document.scrollTop() - o.scrollSpeed );
                    } else if ( this.window.height() - ( event.pageY - this.document.scrollTop() ) <
                        o.scrollSensitivity ) {
                        scrolled = this.document.scrollTop( this.document.scrollTop() + o.scrollSpeed );
                    }

                    if ( event.pageX - this.document.scrollLeft() < o.scrollSensitivity ) {
                        scrolled = this.document.scrollLeft(
                            this.document.scrollLeft() - o.scrollSpeed
                        );
                    } else if ( this.window.width() - ( event.pageX - this.document.scrollLeft() ) <
                        o.scrollSensitivity ) {
                        scrolled = this.document.scrollLeft(
                            this.document.scrollLeft() + o.scrollSpeed
                        );
                    }

                }

                if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
                    $.ui.ddmanager.prepareOffsets( this, event );
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo( "absolute" );

            //Set the helper position
            if ( !this.options.axis || this.options.axis !== "y" ) {
                this.helper[ 0 ].style.left = this.position.left + "px";
            }
            if ( !this.options.axis || this.options.axis !== "x" ) {
                this.helper[ 0 ].style.top = this.position.top + "px";
            }

            //Rearrange
            for ( i = this.items.length - 1; i >= 0; i-- ) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[ i ];
                itemElement = item.item[ 0 ];
                intersection = this._intersectsWithPointer( item );
                if ( !intersection ) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items from other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this, moving items in "sub-sortables" can cause
                // the placeholder to jitter between the outer and inner container.
                if ( item.instance !== this.currentContainer ) {
                    continue;
                }

                // Cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if ( itemElement !== this.currentItem[ 0 ] &&
                    this.placeholder[ intersection === 1 ? "next" : "prev" ]()[ 0 ] !== itemElement &&
                    !$.contains( this.placeholder[ 0 ], itemElement ) &&
                    ( this.options.type === "semi-dynamic" ?
                            !$.contains( this.element[ 0 ], itemElement ) :
                            true
                    )
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if ( this.options.tolerance === "pointer" || this._intersectsWithSides( item ) ) {
                        this._rearrange( event, item );
                    } else {
                        break;
                    }

                    this._trigger( "change", event, this._uiHash() );
                    break;
                }
            }

            //Post events to containers
            this._contactContainers( event );

            //Interconnect with droppables
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.drag( this, event );
            }

            //Call callbacks
            this._trigger( "sort", event, this._uiHash() );

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function( event, noPropagation ) {

            if ( !event ) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
                $.ui.ddmanager.drop( this, event );
            }

            if ( this.options.revert ) {
                var that = this,
                    cur = this.placeholder.offset(),
                    axis = this.options.axis,
                    animation = {};

                if ( !axis || axis === "x" ) {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left +
                        ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
                                0 :
                                this.offsetParent[ 0 ].scrollLeft
                        );
                }
                if ( !axis || axis === "y" ) {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top +
                        ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
                                0 :
                                this.offsetParent[ 0 ].scrollTop
                        );
                }
                this.reverting = true;
                $( this.helper ).animate(
                    animation,
                    parseInt( this.options.revert, 10 ) || 500,
                    function() {
                        that._clear( event );
                    }
                );
            } else {
                this._clear( event, noPropagation );
            }

            return false;

        },

        cancel: function() {

            if ( this.dragging ) {

                this._mouseUp( new $.Event( "mouseup", { target: null } ) );

                if ( this.options.helper === "original" ) {
                    this.currentItem.css( this._storedCSS );
                    this._removeClass( this.currentItem, "ui-sortable-helper" );
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for ( var i = this.containers.length - 1; i >= 0; i-- ) {
                    this.containers[ i ]._trigger( "deactivate", null, this._uiHash( this ) );
                    if ( this.containers[ i ].containerCache.over ) {
                        this.containers[ i ]._trigger( "out", null, this._uiHash( this ) );
                        this.containers[ i ].containerCache.over = 0;
                    }
                }

            }

            if ( this.placeholder ) {

                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
                // it unbinds ALL events from the original node!
                if ( this.placeholder[ 0 ].parentNode ) {
                    this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );
                }
                if ( this.options.helper !== "original" && this.helper &&
                    this.helper[ 0 ].parentNode ) {
                    this.helper.remove();
                }

                $.extend( this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                } );

                if ( this.domPosition.prev ) {
                    $( this.domPosition.prev ).after( this.currentItem );
                } else {
                    $( this.domPosition.parent ).prepend( this.currentItem );
                }
            }

            return this;

        },

        serialize: function( o ) {

            var items = this._getItemsAsjQuery( o && o.connected ),
                str = [];
            o = o || {};

            $( items ).each( function() {
                var res = ( $( o.item || this ).attr( o.attribute || "id" ) || "" )
                    .match( o.expression || ( /(.+)[\-=_](.+)/ ) );
                if ( res ) {
                    str.push(
                        ( o.key || res[ 1 ] + "[]" ) +
                        "=" + ( o.key && o.expression ? res[ 1 ] : res[ 2 ] ) );
                }
            } );

            if ( !str.length && o.key ) {
                str.push( o.key + "=" );
            }

            return str.join( "&" );

        },

        toArray: function( o ) {

            var items = this._getItemsAsjQuery( o && o.connected ),
                ret = [];

            o = o || {};

            items.each( function() {
                ret.push( $( o.item || this ).attr( o.attribute || "id" ) || "" );
            } );
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function( item ) {

            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t &&
                    ( y1 + dyClick ) < b ),
                isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l &&
                    ( x1 + dxClick ) < r ),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if ( this.options.tolerance === "pointer" ||
                this.options.forcePointerForContainers ||
                ( this.options.tolerance !== "pointer" &&
                    this.helperProportions[ this.floating ? "width" : "height" ] >
                    item[ this.floating ? "width" : "height" ] )
            ) {
                return isOverElement;
            } else {

                return ( l < x1 + ( this.helperProportions.width / 2 ) && // Right Half
                    x2 - ( this.helperProportions.width / 2 ) < r && // Left Half
                    t < y1 + ( this.helperProportions.height / 2 ) && // Bottom Half
                    y2 - ( this.helperProportions.height / 2 ) < b ); // Top Half

            }
        },

        _intersectsWithPointer: function( item ) {
            var verticalDirection, horizontalDirection,
                isOverElementHeight = ( this.options.axis === "x" ) ||
                    this._isOverAxis(
                        this.positionAbs.top + this.offset.click.top, item.top, item.height ),
                isOverElementWidth = ( this.options.axis === "y" ) ||
                    this._isOverAxis(
                        this.positionAbs.left + this.offset.click.left, item.left, item.width ),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if ( !isOverElement ) {
                return false;
            }

            verticalDirection = this._getDragVerticalDirection();
            horizontalDirection = this._getDragHorizontalDirection();

            return this.floating ?
                ( ( horizontalDirection === "right" || verticalDirection === "down" ) ? 2 : 1 )
                : ( verticalDirection && ( verticalDirection === "down" ? 2 : 1 ) );

        },

        _intersectsWithSides: function( item ) {

            var isOverBottomHalf = this._isOverAxis( this.positionAbs.top +
                this.offset.click.top, item.top + ( item.height / 2 ), item.height ),
                isOverRightHalf = this._isOverAxis( this.positionAbs.left +
                    this.offset.click.left, item.left + ( item.width / 2 ), item.width ),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if ( this.floating && horizontalDirection ) {
                return ( ( horizontalDirection === "right" && isOverRightHalf ) ||
                    ( horizontalDirection === "left" && !isOverRightHalf ) );
            } else {
                return verticalDirection && ( ( verticalDirection === "down" && isOverBottomHalf ) ||
                    ( verticalDirection === "up" && !isOverBottomHalf ) );
            }

        },

        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && ( delta > 0 ? "down" : "up" );
        },

        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && ( delta > 0 ? "right" : "left" );
        },

        refresh: function( event ) {
            this._refreshItems( event );
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },

        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ?
                [ options.connectWith ] :
                options.connectWith;
        },

        _getItemsAsjQuery: function( connected ) {

            var i, j, cur, inst,
                items = [],
                queries = [],
                connectWith = this._connectWith();

            if ( connectWith && connected ) {
                for ( i = connectWith.length - 1; i >= 0; i-- ) {
                    cur = $( connectWith[ i ], this.document[ 0 ] );
                    for ( j = cur.length - 1; j >= 0; j-- ) {
                        inst = $.data( cur[ j ], this.widgetFullName );
                        if ( inst && inst !== this && !inst.options.disabled ) {
                            queries.push( [ $.isFunction( inst.options.items ) ?
                                inst.options.items.call( inst.element ) :
                                $( inst.options.items, inst.element )
                                    .not( ".ui-sortable-helper" )
                                    .not( ".ui-sortable-placeholder" ), inst ] );
                        }
                    }
                }
            }

            queries.push( [ $.isFunction( this.options.items ) ?
                this.options.items
                    .call( this.element, null, { options: this.options, item: this.currentItem } ) :
                $( this.options.items, this.element )
                    .not( ".ui-sortable-helper" )
                    .not( ".ui-sortable-placeholder" ), this ] );

            function addItems() {
                items.push( this );
            }
            for ( i = queries.length - 1; i >= 0; i-- ) {
                queries[ i ][ 0 ].each( addItems );
            }

            return $( items );

        },

        _removeCurrentsFromItems: function() {

            var list = this.currentItem.find( ":data(" + this.widgetName + "-item)" );

            this.items = $.grep( this.items, function( item ) {
                for ( var j = 0; j < list.length; j++ ) {
                    if ( list[ j ] === item.item[ 0 ] ) {
                        return false;
                    }
                }
                return true;
            } );

        },

        _refreshItems: function( event ) {

            this.items = [];
            this.containers = [ this ];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
                items = this.items,
                queries = [ [ $.isFunction( this.options.items ) ?
                    this.options.items.call( this.element[ 0 ], event, { item: this.currentItem } ) :
                    $( this.options.items, this.element ), this ] ],
                connectWith = this._connectWith();

            //Shouldn't be run the first time through due to massive slow-down
            if ( connectWith && this.ready ) {
                for ( i = connectWith.length - 1; i >= 0; i-- ) {
                    cur = $( connectWith[ i ], this.document[ 0 ] );
                    for ( j = cur.length - 1; j >= 0; j-- ) {
                        inst = $.data( cur[ j ], this.widgetFullName );
                        if ( inst && inst !== this && !inst.options.disabled ) {
                            queries.push( [ $.isFunction( inst.options.items ) ?
                                inst.options.items
                                    .call( inst.element[ 0 ], event, { item: this.currentItem } ) :
                                $( inst.options.items, inst.element ), inst ] );
                            this.containers.push( inst );
                        }
                    }
                }
            }

            for ( i = queries.length - 1; i >= 0; i-- ) {
                targetData = queries[ i ][ 1 ];
                _queries = queries[ i ][ 0 ];

                for ( j = 0, queriesLength = _queries.length; j < queriesLength; j++ ) {
                    item = $( _queries[ j ] );

                    // Data for target checking (mouse manager)
                    item.data( this.widgetName + "-item", targetData );

                    items.push( {
                        item: item,
                        instance: targetData,
                        width: 0, height: 0,
                        left: 0, top: 0
                    } );
                }
            }

        },

        refreshPositions: function( fast ) {

            // Determine whether items are being displayed horizontally
            this.floating = this.items.length ?
                this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
                false;

            //This has to be redone because due to the item being moved out/into the offsetParent,
            // the offsetParent's position will change
            if ( this.offsetParent && this.helper ) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for ( i = this.items.length - 1; i >= 0; i-- ) {
                item = this.items[ i ];

                //We ignore calculating positions of all connected containers when we're not over them
                if ( item.instance !== this.currentContainer && this.currentContainer &&
                    item.item[ 0 ] !== this.currentItem[ 0 ] ) {
                    continue;
                }

                t = this.options.toleranceElement ?
                    $( this.options.toleranceElement, item.item ) :
                    item.item;

                if ( !fast ) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if ( this.options.custom && this.options.custom.refreshContainers ) {
                this.options.custom.refreshContainers.call( this );
            } else {
                for ( i = this.containers.length - 1; i >= 0; i-- ) {
                    p = this.containers[ i ].element.offset();
                    this.containers[ i ].containerCache.left = p.left;
                    this.containers[ i ].containerCache.top = p.top;
                    this.containers[ i ].containerCache.width =
                        this.containers[ i ].element.outerWidth();
                    this.containers[ i ].containerCache.height =
                        this.containers[ i ].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function( that ) {
            that = that || this;
            var className,
                o = that.options;

            if ( !o.placeholder || o.placeholder.constructor === String ) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {

                        var nodeName = that.currentItem[ 0 ].nodeName.toLowerCase(),
                            element = $( "<" + nodeName + ">", that.document[ 0 ] );

                        that._addClass( element, "ui-sortable-placeholder",
                            className || that.currentItem[ 0 ].className )
                            ._removeClass( element, "ui-sortable-helper" );

                        if ( nodeName === "tbody" ) {
                            that._createTrPlaceholder(
                                that.currentItem.find( "tr" ).eq( 0 ),
                                $( "<tr>", that.document[ 0 ] ).appendTo( element )
                            );
                        } else if ( nodeName === "tr" ) {
                            that._createTrPlaceholder( that.currentItem, element );
                        } else if ( nodeName === "img" ) {
                            element.attr( "src", that.currentItem.attr( "src" ) );
                        }

                        if ( !className ) {
                            element.css( "visibility", "hidden" );
                        }

                        return element;
                    },
                    update: function( container, p ) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes -
                        // the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
                        // class name is specified
                        if ( className && !o.forcePlaceholderSize ) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming
                        // from a stylesheet), it receives the inline height from the dragged item
                        if ( !p.height() ) {
                            p.height(
                                that.currentItem.innerHeight() -
                                parseInt( that.currentItem.css( "paddingTop" ) || 0, 10 ) -
                                parseInt( that.currentItem.css( "paddingBottom" ) || 0, 10 ) );
                        }
                        if ( !p.width() ) {
                            p.width(
                                that.currentItem.innerWidth() -
                                parseInt( that.currentItem.css( "paddingLeft" ) || 0, 10 ) -
                                parseInt( that.currentItem.css( "paddingRight" ) || 0, 10 ) );
                        }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $( o.placeholder.element.call( that.element, that.currentItem ) );

            //Append it after the actual current item
            that.currentItem.after( that.placeholder );

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update( that, that.placeholder );

        },

        _createTrPlaceholder: function( sourceTr, targetTr ) {
            var that = this;

            sourceTr.children().each( function() {
                $( "<td>&#160;</td>", that.document[ 0 ] )
                    .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
                    .appendTo( targetTr );
            } );
        },

        _contactContainers: function( event ) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
                floating, axis,
                innermostContainer = null,
                innermostIndex = null;

            // Get innermost container that intersects with item
            for ( i = this.containers.length - 1; i >= 0; i-- ) {

                // Never consider a container that's located within the item itself
                if ( $.contains( this.currentItem[ 0 ], this.containers[ i ].element[ 0 ] ) ) {
                    continue;
                }

                if ( this._intersectsWith( this.containers[ i ].containerCache ) ) {

                    // If we've already found a container and it's more "inner" than this, then continue
                    if ( innermostContainer &&
                        $.contains(
                            this.containers[ i ].element[ 0 ],
                            innermostContainer.element[ 0 ] ) ) {
                        continue;
                    }

                    innermostContainer = this.containers[ i ];
                    innermostIndex = i;

                } else {

                    // container doesn't intersect. trigger "out" event if necessary
                    if ( this.containers[ i ].containerCache.over ) {
                        this.containers[ i ]._trigger( "out", event, this._uiHash( this ) );
                        this.containers[ i ].containerCache.over = 0;
                    }
                }

            }

            // If no intersecting containers found, return
            if ( !innermostContainer ) {
                return;
            }

            // Move the item into the container if it's not there already
            if ( this.containers.length === 1 ) {
                if ( !this.containers[ innermostIndex ].containerCache.over ) {
                    this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
                    this.containers[ innermostIndex ].containerCache.over = 1;
                }
            } else {

                // When entering a new container, we will find the item with the least distance and
                // append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating( this.currentItem );
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "pageX" : "pageY";

                for ( j = this.items.length - 1; j >= 0; j-- ) {
                    if ( !$.contains(
                        this.containers[ innermostIndex ].element[ 0 ], this.items[ j ].item[ 0 ] )
                    ) {
                        continue;
                    }
                    if ( this.items[ j ].item[ 0 ] === this.currentItem[ 0 ] ) {
                        continue;
                    }

                    cur = this.items[ j ].item.offset()[ posProperty ];
                    nearBottom = false;
                    if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
                        nearBottom = true;
                    }

                    if ( Math.abs( event[ axis ] - cur ) < dist ) {
                        dist = Math.abs( event[ axis ] - cur );
                        itemWithLeastDistance = this.items[ j ];
                        this.direction = nearBottom ? "up" : "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if ( !itemWithLeastDistance && !this.options.dropOnEmpty ) {
                    return;
                }

                if ( this.currentContainer === this.containers[ innermostIndex ] ) {
                    if ( !this.currentContainer.containerCache.over ) {
                        this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }

                itemWithLeastDistance ?
                    this._rearrange( event, itemWithLeastDistance, null, true ) :
                    this._rearrange( event, null, this.containers[ innermostIndex ].element, true );
                this._trigger( "change", event, this._uiHash() );
                this.containers[ innermostIndex ]._trigger( "change", event, this._uiHash( this ) );
                this.currentContainer = this.containers[ innermostIndex ];

                //Update the placeholder
                this.options.placeholder.update( this.currentContainer, this.placeholder );

                this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
                this.containers[ innermostIndex ].containerCache.over = 1;
            }

        },

        _createHelper: function( event ) {

            var o = this.options,
                helper = $.isFunction( o.helper ) ?
                    $( o.helper.apply( this.element[ 0 ], [ event, this.currentItem ] ) ) :
                    ( o.helper === "clone" ? this.currentItem.clone() : this.currentItem );

            //Add the helper to the DOM if that didn't happen already
            if ( !helper.parents( "body" ).length ) {
                $( o.appendTo !== "parent" ?
                    o.appendTo :
                    this.currentItem[ 0 ].parentNode )[ 0 ].appendChild( helper[ 0 ] );
            }

            if ( helper[ 0 ] === this.currentItem[ 0 ] ) {
                this._storedCSS = {
                    width: this.currentItem[ 0 ].style.width,
                    height: this.currentItem[ 0 ].style.height,
                    position: this.currentItem.css( "position" ),
                    top: this.currentItem.css( "top" ),
                    left: this.currentItem.css( "left" )
                };
            }

            if ( !helper[ 0 ].style.width || o.forceHelperSize ) {
                helper.width( this.currentItem.width() );
            }
            if ( !helper[ 0 ].style.height || o.forceHelperSize ) {
                helper.height( this.currentItem.height() );
            }

            return helper;

        },

        _adjustOffsetFromHelper: function( obj ) {
            if ( typeof obj === "string" ) {
                obj = obj.split( " " );
            }
            if ( $.isArray( obj ) ) {
                obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
            }
            if ( "left" in obj ) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ( "right" in obj ) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ( "top" in obj ) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ( "bottom" in obj ) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function() {

            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the
            // following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the
            // next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
            // the document, which means that the scroll is included in the initial calculation of the
            // offset of the parent, and never recalculated upon drag
            if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this
            // information with an ugly IE fix
            if ( this.offsetParent[ 0 ] === this.document[ 0 ].body ||
                ( this.offsetParent[ 0 ].tagName &&
                    this.offsetParent[ 0 ].tagName.toLowerCase() === "html" && $.ui.ie ) ) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
                left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
            };

        },

        _getRelativeOffset: function() {

            if ( this.cssPosition === "relative" ) {
                var p = this.currentItem.position();
                return {
                    top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
                        this.scrollParent.scrollTop(),
                    left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
                        this.scrollParent.scrollLeft()
                };
            } else {
                return { top: 0, left: 0 };
            }

        },

        _cacheMargins: function() {
            this.margins = {
                left: ( parseInt( this.currentItem.css( "marginLeft" ), 10 ) || 0 ),
                top: ( parseInt( this.currentItem.css( "marginTop" ), 10 ) || 0 )
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var ce, co, over,
                o = this.options;
            if ( o.containment === "parent" ) {
                o.containment = this.helper[ 0 ].parentNode;
            }
            if ( o.containment === "document" || o.containment === "window" ) {
                this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    o.containment === "document" ?
                        this.document.width() :
                        this.window.width() - this.helperProportions.width - this.margins.left,
                    ( o.containment === "document" ?
                            ( this.document.height() || document.body.parentNode.scrollHeight ) :
                            this.window.height() || this.document[ 0 ].body.parentNode.scrollHeight
                    ) - this.helperProportions.height - this.margins.top
                ];
            }

            if ( !( /^(document|window|parent)$/ ).test( o.containment ) ) {
                ce = $( o.containment )[ 0 ];
                co = $( o.containment ).offset();
                over = ( $( ce ).css( "overflow" ) !== "hidden" );

                this.containment = [
                    co.left + ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) +
                    ( parseInt( $( ce ).css( "paddingLeft" ), 10 ) || 0 ) - this.margins.left,
                    co.top + ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) +
                    ( parseInt( $( ce ).css( "paddingTop" ), 10 ) || 0 ) - this.margins.top,
                    co.left + ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
                    ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) -
                    ( parseInt( $( ce ).css( "paddingRight" ), 10 ) || 0 ) -
                    this.helperProportions.width - this.margins.left,
                    co.top + ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
                    ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) -
                    ( parseInt( $( ce ).css( "paddingBottom" ), 10 ) || 0 ) -
                    this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function( d, pos ) {

            if ( !pos ) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1,
                scroll = this.cssPosition === "absolute" &&
                !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
                    this.offsetParent :
                    this.scrollParent,
                scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

            return {
                top: (

                    // The absolute mouse position
                    pos.top	+

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top * mod -
                    ( ( this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollTop() :
                        ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod )
                ),
                left: (

                    // The absolute mouse position
                    pos.left +

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left * mod +

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left * mod	-
                    ( ( this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
                            scroll.scrollLeft() ) * mod )
                )
            };

        },

        _generatePosition: function( event ) {

            var top, left,
                o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = this.cssPosition === "absolute" &&
                !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
                    this.offsetParent :
                    this.scrollParent,
                scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if ( this.cssPosition === "relative" && !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
                this.scrollParent[ 0 ] !== this.offsetParent[ 0 ] ) ) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

            if ( this.originalPosition ) { //If we are not dragging yet, we won't check for options

                if ( this.containment ) {
                    if ( event.pageX - this.offset.click.left < this.containment[ 0 ] ) {
                        pageX = this.containment[ 0 ] + this.offset.click.left;
                    }
                    if ( event.pageY - this.offset.click.top < this.containment[ 1 ] ) {
                        pageY = this.containment[ 1 ] + this.offset.click.top;
                    }
                    if ( event.pageX - this.offset.click.left > this.containment[ 2 ] ) {
                        pageX = this.containment[ 2 ] + this.offset.click.left;
                    }
                    if ( event.pageY - this.offset.click.top > this.containment[ 3 ] ) {
                        pageY = this.containment[ 3 ] + this.offset.click.top;
                    }
                }

                if ( o.grid ) {
                    top = this.originalPageY + Math.round( ( pageY - this.originalPageY ) /
                        o.grid[ 1 ] ) * o.grid[ 1 ];
                    pageY = this.containment ?
                        ( ( top - this.offset.click.top >= this.containment[ 1 ] &&
                            top - this.offset.click.top <= this.containment[ 3 ] ) ?
                            top :
                            ( ( top - this.offset.click.top >= this.containment[ 1 ] ) ?
                                top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) :
                        top;

                    left = this.originalPageX + Math.round( ( pageX - this.originalPageX ) /
                        o.grid[ 0 ] ) * o.grid[ 0 ];
                    pageX = this.containment ?
                        ( ( left - this.offset.click.left >= this.containment[ 0 ] &&
                            left - this.offset.click.left <= this.containment[ 2 ] ) ?
                            left :
                            ( ( left - this.offset.click.left >= this.containment[ 0 ] ) ?
                                left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) :
                        left;
                }

            }

            return {
                top: (

                    // The absolute mouse position
                    pageY -

                    // Click offset (relative to the element)
                    this.offset.click.top -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.top -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.top +
                    ( ( this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollTop() :
                        ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) )
                ),
                left: (

                    // The absolute mouse position
                    pageX -

                    // Click offset (relative to the element)
                    this.offset.click.left -

                    // Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.relative.left -

                    // The offsetParent's offset without borders (offset + border)
                    this.offset.parent.left +
                    ( ( this.cssPosition === "fixed" ?
                        -this.scrollParent.scrollLeft() :
                        scrollIsRootNode ? 0 : scroll.scrollLeft() ) )
                )
            };

        },

        _rearrange: function( event, i, a, hardRefresh ) {

            a ? a[ 0 ].appendChild( this.placeholder[ 0 ] ) :
                i.item[ 0 ].parentNode.insertBefore( this.placeholder[ 0 ],
                    ( this.direction === "down" ? i.item[ 0 ] : i.item[ 0 ].nextSibling ) );

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout,
            // if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay( function() {
                if ( counter === this.counter ) {

                    //Precompute after each DOM insertion, NOT on mousemove
                    this.refreshPositions( !hardRefresh );
                }
            } );

        },

        _clear: function( event, noPropagation ) {

            this.reverting = false;

            // We delay all events that have to be triggered to after the point where the placeholder
            // has been removed and everything else normalized again
            var i,
                delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets
            // reappended (see #4088)
            if ( !this._noFinalSort && this.currentItem.parent().length ) {
                this.placeholder.before( this.currentItem );
            }
            this._noFinalSort = null;

            if ( this.helper[ 0 ] === this.currentItem[ 0 ] ) {
                for ( i in this._storedCSS ) {
                    if ( this._storedCSS[ i ] === "auto" || this._storedCSS[ i ] === "static" ) {
                        this._storedCSS[ i ] = "";
                    }
                }
                this.currentItem.css( this._storedCSS );
                this._removeClass( this.currentItem, "ui-sortable-helper" );
            } else {
                this.currentItem.show();
            }

            if ( this.fromOutside && !noPropagation ) {
                delayedTriggers.push( function( event ) {
                    this._trigger( "receive", event, this._uiHash( this.fromOutside ) );
                } );
            }
            if ( ( this.fromOutside ||
                this.domPosition.prev !==
                this.currentItem.prev().not( ".ui-sortable-helper" )[ 0 ] ||
                this.domPosition.parent !== this.currentItem.parent()[ 0 ] ) && !noPropagation ) {

                // Trigger update callback if the DOM position has changed
                delayedTriggers.push( function( event ) {
                    this._trigger( "update", event, this._uiHash() );
                } );
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if ( this !== this.currentContainer ) {
                if ( !noPropagation ) {
                    delayedTriggers.push( function( event ) {
                        this._trigger( "remove", event, this._uiHash() );
                    } );
                    delayedTriggers.push( ( function( c ) {
                        return function( event ) {
                            c._trigger( "receive", event, this._uiHash( this ) );
                        };
                    } ).call( this, this.currentContainer ) );
                    delayedTriggers.push( ( function( c ) {
                        return function( event ) {
                            c._trigger( "update", event, this._uiHash( this ) );
                        };
                    } ).call( this, this.currentContainer ) );
                }
            }

            //Post events to containers
            function delayEvent( type, instance, container ) {
                return function( event ) {
                    container._trigger( type, event, instance._uiHash( instance ) );
                };
            }
            for ( i = this.containers.length - 1; i >= 0; i-- ) {
                if ( !noPropagation ) {
                    delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
                }
                if ( this.containers[ i ].containerCache.over ) {
                    delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
                    this.containers[ i ].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if ( this.storedCursor ) {
                this.document.find( "body" ).css( "cursor", this.storedCursor );
                this.storedStylesheet.remove();
            }
            if ( this._storedOpacity ) {
                this.helper.css( "opacity", this._storedOpacity );
            }
            if ( this._storedZIndex ) {
                this.helper.css( "zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex );
            }

            this.dragging = false;

            if ( !noPropagation ) {
                this._trigger( "beforeStop", event, this._uiHash() );
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
            // it unbinds ALL events from the original node!
            this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );

            if ( !this.cancelHelperRemoval ) {
                if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
                    this.helper.remove();
                }
                this.helper = null;
            }

            if ( !noPropagation ) {
                for ( i = 0; i < delayedTriggers.length; i++ ) {

                    // Trigger all delayed events
                    delayedTriggers[ i ].call( this, event );
                }
                this._trigger( "stop", event, this._uiHash() );
            }

            this.fromOutside = false;
            return !this.cancelHelperRemoval;

        },

        _trigger: function() {
            if ( $.Widget.prototype._trigger.apply( this, arguments ) === false ) {
                this.cancel();
            }
        },

        _uiHash: function( _inst ) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $( [] ),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    } );


    /*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css



    function spinnerModifer( fn ) {
        return function() {
            var previous = this.element.val();
            fn.apply( this, arguments );
            this._refresh();
            if ( previous !== this.element.val() ) {
                this._trigger( "change" );
            }
        };
    }

    $.widget( "ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,

            change: null,
            spin: null,
            start: null,
            stop: null
        },

        _create: function() {

            // handle string values that need to be parsed
            this._setOption( "max", this.options.max );
            this._setOption( "min", this.options.min );
            this._setOption( "step", this.options.step );

            // Only format if there is a value, prevents the field from being marked
            // as invalid in Firefox, see #9573.
            if ( this.value() !== "" ) {

                // Format the value, but don't constrain.
                this._value( this.element.val(), true );
            }

            this._draw();
            this._on( this._events );
            this._refresh();

            // Turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            } );
        },

        _getCreateOptions: function() {
            var options = this._super();
            var element = this.element;

            $.each( [ "min", "max", "step" ], function( i, option ) {
                var value = element.attr( option );
                if ( value != null && value.length ) {
                    options[ option ] = value;
                }
            } );

            return options;
        },

        _events: {
            keydown: function( event ) {
                if ( this._start( event ) && this._keydown( event ) ) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function( event ) {
                if ( this.cancelBlur ) {
                    delete this.cancelBlur;
                    return;
                }

                this._stop();
                this._refresh();
                if ( this.previous !== this.element.val() ) {
                    this._trigger( "change", event );
                }
            },
            mousewheel: function( event, delta ) {
                if ( !delta ) {
                    return;
                }
                if ( !this.spinning && !this._start( event ) ) {
                    return false;
                }

                this._spin( ( delta > 0 ? 1 : -1 ) * this.options.step, event );
                clearTimeout( this.mousewheelTimer );
                this.mousewheelTimer = this._delay( function() {
                    if ( this.spinning ) {
                        this._stop( event );
                    }
                }, 100 );
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function( event ) {
                var previous;

                // We never want the buttons to have focus; whenever the user is
                // interacting with the spinner, the focus should be on the input.
                // If the input is focused then this.previous is properly set from
                // when the input first received focus. If the input is not focused
                // then we need to set this.previous based on the value before spinning.
                previous = this.element[ 0 ] === $.ui.safeActiveElement( this.document[ 0 ] ) ?
                    this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[ 0 ] === $.ui.safeActiveElement( this.document[ 0 ] );
                    if ( !isActive ) {
                        this.element.trigger( "focus" );
                        this.previous = previous;

                        // support: IE
                        // IE sets focus asynchronously, so we need to check if focus
                        // moved off of the input because the user clicked on the button.
                        this._delay( function() {
                            this.previous = previous;
                        } );
                    }
                }

                // Ensure focus is on (or stays on) the text field
                event.preventDefault();
                checkFocus.call( this );

                // Support: IE
                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                // and check (again) if focus moved off of the input.
                this.cancelBlur = true;
                this._delay( function() {
                    delete this.cancelBlur;
                    checkFocus.call( this );
                } );

                if ( this._start( event ) === false ) {
                    return;
                }

                this._repeat( null, $( event.currentTarget )
                    .hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function( event ) {

                // button will add ui-state-active if mouse was down while mouseleave and kept down
                if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
                    return;
                }

                if ( this._start( event ) === false ) {
                    return false;
                }
                this._repeat( null, $( event.currentTarget )
                    .hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },

            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .ui-spinner-button": "_stop"
        },

        // Support mobile enhanced option and make backcompat more sane
        _enhance: function() {
            this.uiSpinner = this.element
                .attr( "autocomplete", "off" )
                .wrap( "<span>" )
                .parent()

                // Add buttons
                .append(
                    "<a></a><a></a>"
                );
        },

        _draw: function() {
            this._enhance();

            this._addClass( this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content" );
            this._addClass( "ui-spinner-input" );

            this.element.attr( "role", "spinbutton" );

            // Button bindings
            this.buttons = this.uiSpinner.children( "a" )
                .attr( "tabIndex", -1 )
                .attr( "aria-hidden", true )
                .button( {
                    classes: {
                        "ui-button": ""
                    }
                } );

            // TODO: Right now button does not support classes this is already updated in button PR
            this._removeClass( this.buttons, "ui-corner-all" );

            this._addClass( this.buttons.first(), "ui-spinner-button ui-spinner-up" );
            this._addClass( this.buttons.last(), "ui-spinner-button ui-spinner-down" );
            this.buttons.first().button( {
                "icon": this.options.icons.up,
                "showLabel": false
            } );
            this.buttons.last().button( {
                "icon": this.options.icons.down,
                "showLabel": false
            } );

            // IE 6 doesn't understand height: 50% for the buttons
            // unless the wrapper has an explicit height
            if ( this.buttons.height() > Math.ceil( this.uiSpinner.height() * 0.5 ) &&
                this.uiSpinner.height() > 0 ) {
                this.uiSpinner.height( this.uiSpinner.height() );
            }
        },

        _keydown: function( event ) {
            var options = this.options,
                keyCode = $.ui.keyCode;

            switch ( event.keyCode ) {
                case keyCode.UP:
                    this._repeat( null, 1, event );
                    return true;
                case keyCode.DOWN:
                    this._repeat( null, -1, event );
                    return true;
                case keyCode.PAGE_UP:
                    this._repeat( null, options.page, event );
                    return true;
                case keyCode.PAGE_DOWN:
                    this._repeat( null, -options.page, event );
                    return true;
            }

            return false;
        },

        _start: function( event ) {
            if ( !this.spinning && this._trigger( "start", event ) === false ) {
                return false;
            }

            if ( !this.counter ) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },

        _repeat: function( i, steps, event ) {
            i = i || 500;

            clearTimeout( this.timer );
            this.timer = this._delay( function() {
                this._repeat( 40, steps, event );
            }, i );

            this._spin( steps * this.options.step, event );
        },

        _spin: function( step, event ) {
            var value = this.value() || 0;

            if ( !this.counter ) {
                this.counter = 1;
            }

            value = this._adjustValue( value + step * this._increment( this.counter ) );

            if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false ) {
                this._value( value );
                this.counter++;
            }
        },

        _increment: function( i ) {
            var incremental = this.options.incremental;

            if ( incremental ) {
                return $.isFunction( incremental ) ?
                    incremental( i ) :
                    Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
            }

            return 1;
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _adjustValue: function( value ) {
            var base, aboveMin,
                options = this.options;

            // Make sure we're at a valid step
            // - find out where we are relative to the base (min or 0)
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;

            // - round to the nearest step
            aboveMin = Math.round( aboveMin / options.step ) * options.step;

            // - rounding is based on 0, so adjust back to our base
            value = base + aboveMin;

            // Fix precision from bad JS floating point math
            value = parseFloat( value.toFixed( this._precision() ) );

            // Clamp the value
            if ( options.max !== null && value > options.max ) {
                return options.max;
            }
            if ( options.min !== null && value < options.min ) {
                return options.min;
            }

            return value;
        },

        _stop: function( event ) {
            if ( !this.spinning ) {
                return;
            }

            clearTimeout( this.timer );
            clearTimeout( this.mousewheelTimer );
            this.counter = 0;
            this.spinning = false;
            this._trigger( "stop", event );
        },

        _setOption: function( key, value ) {
            var prevValue, first, last;

            if ( key === "culture" || key === "numberFormat" ) {
                prevValue = this._parse( this.element.val() );
                this.options[ key ] = value;
                this.element.val( this._format( prevValue ) );
                return;
            }

            if ( key === "max" || key === "min" || key === "step" ) {
                if ( typeof value === "string" ) {
                    value = this._parse( value );
                }
            }
            if ( key === "icons" ) {
                first = this.buttons.first().find( ".ui-icon" );
                this._removeClass( first, null, this.options.icons.up );
                this._addClass( first, null, value.up );
                last = this.buttons.last().find( ".ui-icon" );
                this._removeClass( last, null, this.options.icons.down );
                this._addClass( last, null, value.down );
            }

            this._super( key, value );
        },

        _setOptionDisabled: function( value ) {
            this._super( value );

            this._toggleClass( this.uiSpinner, null, "ui-state-disabled", !!value );
            this.element.prop( "disabled", !!value );
            this.buttons.button( value ? "disable" : "enable" );
        },

        _setOptions: spinnerModifer( function( options ) {
            this._super( options );
        } ),

        _parse: function( val ) {
            if ( typeof val === "string" && val !== "" ) {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize.parseFloat( val, 10, this.options.culture ) : +val;
            }
            return val === "" || isNaN( val ) ? null : val;
        },

        _format: function( value ) {
            if ( value === "" ) {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize.format( value, this.options.numberFormat, this.options.culture ) :
                value;
        },

        _refresh: function() {
            this.element.attr( {
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,

                // TODO: what should we do with values that can't be parsed?
                "aria-valuenow": this._parse( this.element.val() )
            } );
        },

        isValid: function() {
            var value = this.value();

            // Null is invalid
            if ( value === null ) {
                return false;
            }

            // If value gets adjusted, it's invalid
            return value === this._adjustValue( value );
        },

        // Update the value without triggering change
        _value: function( value, allowAny ) {
            var parsed;
            if ( value !== "" ) {
                parsed = this._parse( value );
                if ( parsed !== null ) {
                    if ( !allowAny ) {
                        parsed = this._adjustValue( parsed );
                    }
                    value = this._format( parsed );
                }
            }
            this.element.val( value );
            this._refresh();
        },

        _destroy: function() {
            this.element
                .prop( "disabled", false )
                .removeAttr( "autocomplete role aria-valuemin aria-valuemax aria-valuenow" );

            this.uiSpinner.replaceWith( this.element );
        },

        stepUp: spinnerModifer( function( steps ) {
            this._stepUp( steps );
        } ),
        _stepUp: function( steps ) {
            if ( this._start() ) {
                this._spin( ( steps || 1 ) * this.options.step );
                this._stop();
            }
        },

        stepDown: spinnerModifer( function( steps ) {
            this._stepDown( steps );
        } ),
        _stepDown: function( steps ) {
            if ( this._start() ) {
                this._spin( ( steps || 1 ) * -this.options.step );
                this._stop();
            }
        },

        pageUp: spinnerModifer( function( pages ) {
            this._stepUp( ( pages || 1 ) * this.options.page );
        } ),

        pageDown: spinnerModifer( function( pages ) {
            this._stepDown( ( pages || 1 ) * this.options.page );
        } ),

        value: function( newVal ) {
            if ( !arguments.length ) {
                return this._parse( this.element.val() );
            }
            spinnerModifer( this._value ).call( this, newVal );
        },

        widget: function() {
            return this.uiSpinner;
        }
    } );

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
    if ( $.uiBackCompat !== false ) {

        // Backcompat for spinner html extension points
        $.widget( "ui.spinner", $.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element
                    .attr( "autocomplete", "off" )
                    .wrap( this._uiSpinnerHtml() )
                    .parent()

                    // Add buttons
                    .append( this._buttonHtml() );
            },
            _uiSpinnerHtml: function() {
                return "<span>";
            },

            _buttonHtml: function() {
                return "<a></a><a></a>";
            }
        } );
    }

    var widgetsSpinner = $.ui.spinner;


    /*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // Callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _isLocal: ( function() {
            var rhash = /#.*$/;

            return function( anchor ) {
                var anchorUrl, locationUrl;

                anchorUrl = anchor.href.replace( rhash, "" );
                locationUrl = location.href.replace( rhash, "" );

                // Decoding may throw an error if the URL isn't UTF-8 (#9518)
                try {
                    anchorUrl = decodeURIComponent( anchorUrl );
                } catch ( error ) {}
                try {
                    locationUrl = decodeURIComponent( locationUrl );
                } catch ( error ) {}

                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        } )(),

        _create: function() {
            var that = this,
                options = this.options;

            this.running = false;

            this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
            this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ( $.isArray( options.disabled ) ) {
                options.disabled = $.unique( options.disabled.concat(
                    $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
                        return that.tabs.index( li );
                    } )
                ) ).sort();
            }

            // Check for length avoids error when initializing empty list
            if ( this.options.active !== false && this.anchors.length ) {
                this.active = this._findActive( options.active );
            } else {
                this.active = $();
            }

            this._refresh();

            if ( this.active.length ) {
                this.load( options.active );
            }
        },

        _initialActive: function() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring( 1 );

            if ( active === null ) {

                // check the fragment identifier in the URL
                if ( locationHash ) {
                    this.tabs.each( function( i, tab ) {
                        if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
                            active = i;
                            return false;
                        }
                    } );
                }

                // Check for a tab marked active via a class
                if ( active === null ) {
                    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
                }

                // No active tab, set to false
                if ( active === null || active === -1 ) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // Handle numbers: negative, out of range
            if ( active !== false ) {
                active = this.tabs.index( this.tabs.eq( active ) );
                if ( active === -1 ) {
                    active = collapsible ? false : 0;
                }
            }

            // Don't allow collapsible: false and active: false
            if ( !collapsible && active === false && this.anchors.length ) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab( this.active )
            };
        },

        _tabKeydown: function( event ) {
            var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
                selectedIndex = this.tabs.index( focusedTab ),
                goingForward = true;

            if ( this._handlePageNav( event ) ) {
                return;
            }

            switch ( event.keyCode ) {
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.LEFT:
                    goingForward = false;
                    selectedIndex--;
                    break;
                case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;
                case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;
                case $.ui.keyCode.SPACE:

                    // Activate only, no collapsing
                    event.preventDefault();
                    clearTimeout( this.activating );
                    this._activate( selectedIndex );
                    return;
                case $.ui.keyCode.ENTER:

                    // Toggle (cancel delayed activation, allow collapsing)
                    event.preventDefault();
                    clearTimeout( this.activating );

                    // Determine if we should collapse or activate
                    this._activate( selectedIndex === this.options.active ? false : selectedIndex );
                    return;
                default:
                    return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout( this.activating );
            selectedIndex = this._focusNextTab( selectedIndex, goingForward );

            // Navigating with control/command key will prevent automatic activation
            if ( !event.ctrlKey && !event.metaKey ) {

                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr( "aria-selected", "false" );
                this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

                this.activating = this._delay( function() {
                    this.option( "active", selectedIndex );
                }, this.delay );
            }
        },

        _panelKeydown: function( event ) {
            if ( this._handlePageNav( event ) ) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
                event.preventDefault();
                this.active.trigger( "focus" );
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function( event ) {
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
                this._activate( this._focusNextTab( this.options.active - 1, false ) );
                return true;
            }
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
                this._activate( this._focusNextTab( this.options.active + 1, true ) );
                return true;
            }
        },

        _findNextTab: function( index, goingForward ) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if ( index > lastTabIndex ) {
                    index = 0;
                }
                if ( index < 0 ) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function( index, goingForward ) {
            index = this._findNextTab( index, goingForward );
            this.tabs.eq( index ).trigger( "focus" );
            return index;
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {

                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            this._super( key, value );

            if ( key === "collapsible" ) {
                this._toggleClass( "ui-tabs-collapsible", null, value );

                // Setting collapsible: false while collapsed; open first panel
                if ( !value && this.options.active === false ) {
                    this._activate( 0 );
                }
            }

            if ( key === "event" ) {
                this._setupEvents( value );
            }

            if ( key === "heightStyle" ) {
                this._setupHeightStyle( value );
            }
        },

        _sanitizeSelector: function( hash ) {
            return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
        },

        refresh: function() {
            var options = this.options,
                lis = this.tablist.children( ":has(a[href])" );

            // Get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
                return lis.index( tab );
            } );

            this._processTabs();

            // Was collapsed or no tabs
            if ( options.active === false || !this.anchors.length ) {
                options.active = false;
                this.active = $();

                // was active, but active tab is gone
            } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {

                // all remaining tabs are disabled
                if ( this.tabs.length === options.disabled.length ) {
                    options.active = false;
                    this.active = $();

                    // activate previous tab
                } else {
                    this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
                }

                // was active, active tab still exists
            } else {

                // make sure active index is correct
                options.active = this.tabs.index( this.active );
            }

            this._refresh();
        },

        _refresh: function() {
            this._setOptionDisabled( this.options.disabled );
            this._setupEvents( this.options.event );
            this._setupHeightStyle( this.options.heightStyle );

            this.tabs.not( this.active ).attr( {
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            } );
            this.panels.not( this._getPanelForTab( this.active ) )
                .hide()
                .attr( {
                    "aria-hidden": "true"
                } );

            // Make sure one tab is in the tab order
            if ( !this.active.length ) {
                this.tabs.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active
                    .attr( {
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    } );
                this._addClass( this.active, "ui-tabs-active", "ui-state-active" );
                this._getPanelForTab( this.active )
                    .show()
                    .attr( {
                        "aria-hidden": "false"
                    } );
            }
        },

        _processTabs: function() {
            var that = this,
                prevTabs = this.tabs,
                prevAnchors = this.anchors,
                prevPanels = this.panels;

            this.tablist = this._getList().attr( "role", "tablist" );
            this._addClass( this.tablist, "ui-tabs-nav",
                "ui-helper-reset ui-helper-clearfix ui-widget-header" );

            // Prevent users from focusing disabled tabs via click
            this.tablist
                .on( "mousedown" + this.eventNamespace, "> li", function( event ) {
                    if ( $( this ).is( ".ui-state-disabled" ) ) {
                        event.preventDefault();
                    }
                } )

                // Support: IE <9
                // Preventing the default action in mousedown doesn't prevent IE
                // from focusing the element, so if the anchor gets focused, blur.
                // We don't have to worry about focusing the previously focused
                // element since clicking on a non-focusable element should focus
                // the body anyway.
                .on( "focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
                        this.blur();
                    }
                } );

            this.tabs = this.tablist.find( "> li:has(a[href])" )
                .attr( {
                    role: "tab",
                    tabIndex: -1
                } );
            this._addClass( this.tabs, "ui-tabs-tab", "ui-state-default" );

            this.anchors = this.tabs.map( function() {
                return $( "a", this )[ 0 ];
            } )
                .attr( {
                    role: "presentation",
                    tabIndex: -1
                } );
            this._addClass( this.anchors, "ui-tabs-anchor" );

            this.panels = $();

            this.anchors.each( function( i, anchor ) {
                var selector, panel, panelId,
                    anchorId = $( anchor ).uniqueId().attr( "id" ),
                    tab = $( anchor ).closest( "li" ),
                    originalAriaControls = tab.attr( "aria-controls" );

                // Inline tab
                if ( that._isLocal( anchor ) ) {
                    selector = anchor.hash;
                    panelId = selector.substring( 1 );
                    panel = that.element.find( that._sanitizeSelector( selector ) );

                    // remote tab
                } else {

                    // If the tab doesn't already have aria-controls,
                    // generate an id by using a throw-away element
                    panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
                    selector = "#" + panelId;
                    panel = that.element.find( selector );
                    if ( !panel.length ) {
                        panel = that._createPanel( panelId );
                        panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
                    }
                    panel.attr( "aria-live", "polite" );
                }

                if ( panel.length ) {
                    that.panels = that.panels.add( panel );
                }
                if ( originalAriaControls ) {
                    tab.data( "ui-tabs-aria-controls", originalAriaControls );
                }
                tab.attr( {
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                } );
                panel.attr( "aria-labelledby", anchorId );
            } );

            this.panels.attr( "role", "tabpanel" );
            this._addClass( this.panels, "ui-tabs-panel", "ui-widget-content" );

            // Avoid memory leaks (#10056)
            if ( prevTabs ) {
                this._off( prevTabs.not( this.tabs ) );
                this._off( prevAnchors.not( this.anchors ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        // Allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function() {
            return this.tablist || this.element.find( "ol, ul" ).eq( 0 );
        },

        _createPanel: function( id ) {
            return $( "<div>" )
                .attr( "id", id )
                .data( "ui-tabs-destroy", true );
        },

        _setOptionDisabled: function( disabled ) {
            var currentItem, li, i;

            if ( $.isArray( disabled ) ) {
                if ( !disabled.length ) {
                    disabled = false;
                } else if ( disabled.length === this.anchors.length ) {
                    disabled = true;
                }
            }

            // Disable tabs
            for ( i = 0; ( li = this.tabs[ i ] ); i++ ) {
                currentItem = $( li );
                if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
                    currentItem.attr( "aria-disabled", "true" );
                    this._addClass( currentItem, null, "ui-state-disabled" );
                } else {
                    currentItem.removeAttr( "aria-disabled" );
                    this._removeClass( currentItem, null, "ui-state-disabled" );
                }
            }

            this.options.disabled = disabled;

            this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null,
                disabled === true );
        },

        _setupEvents: function( event ) {
            var events = {};
            if ( event ) {
                $.each( event.split( " " ), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                } );
            }

            this._off( this.anchors.add( this.tabs ).add( this.panels ) );

            // Always prevent the default action, even when disabled
            this._on( true, this.anchors, {
                click: function( event ) {
                    event.preventDefault();
                }
            } );
            this._on( this.anchors, events );
            this._on( this.tabs, { keydown: "_tabKeydown" } );
            this._on( this.panels, { keydown: "_panelKeydown" } );

            this._focusable( this.tabs );
            this._hoverable( this.tabs );
        },

        _setupHeightStyle: function( heightStyle ) {
            var maxHeight,
                parent = this.element.parent();

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings( ":visible" ).each( function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                } );

                this.element.children().not( this.panels ).each( function() {
                    maxHeight -= $( this ).outerHeight( true );
                } );

                this.panels.each( function() {
                    $( this ).height( Math.max( 0, maxHeight -
                        $( this ).innerHeight() + $( this ).height() ) );
                } )
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.panels.each( function() {
                    maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
                } ).height( maxHeight );
            }
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                anchor = $( event.currentTarget ),
                tab = anchor.closest( "li" ),
                clickedIsActive = tab[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab( tab ),
                toHide = !active.length ? $() : this._getPanelForTab( active ),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: collapsing ? $() : tab,
                    newPanel: toShow
                };

            event.preventDefault();

            if ( tab.hasClass( "ui-state-disabled" ) ||

                // tab is already loading
                tab.hasClass( "ui-tabs-loading" ) ||

                // can't switch durning an animation
                this.running ||

                // click on active header, but not collapsible
                ( clickedIsActive && !options.collapsible ) ||

                // allow canceling activation
                ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index( tab );

            this.active = clickedIsActive ? $() : tab;
            if ( this.xhr ) {
                this.xhr.abort();
            }

            if ( !toHide.length && !toShow.length ) {
                $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
            }

            if ( toShow.length ) {
                this.load( this.tabs.index( tab ), event );
            }
            this._toggle( event, eventData );
        },

        // Handles show/hide for selecting tabs
        _toggle: function( event, eventData ) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger( "activate", event, eventData );
            }

            function show() {
                that._addClass( eventData.newTab.closest( "li" ), "ui-tabs-active", "ui-state-active" );

                if ( toShow.length && that.options.show ) {
                    that._show( toShow, that.options.show, complete );
                } else {
                    toShow.show();
                    complete();
                }
            }

            // Start out by hiding, then showing, then completing
            if ( toHide.length && this.options.hide ) {
                this._hide( toHide, this.options.hide, function() {
                    that._removeClass( eventData.oldTab.closest( "li" ),
                        "ui-tabs-active", "ui-state-active" );
                    show();
                } );
            } else {
                this._removeClass( eventData.oldTab.closest( "li" ),
                    "ui-tabs-active", "ui-state-active" );
                toHide.hide();
                show();
            }

            toHide.attr( "aria-hidden", "true" );
            eventData.oldTab.attr( {
                "aria-selected": "false",
                "aria-expanded": "false"
            } );

            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if ( toShow.length && toHide.length ) {
                eventData.oldTab.attr( "tabIndex", -1 );
            } else if ( toShow.length ) {
                this.tabs.filter( function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                } )
                    .attr( "tabIndex", -1 );
            }

            toShow.attr( "aria-hidden", "false" );
            eventData.newTab.attr( {
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            } );
        },

        _activate: function( index ) {
            var anchor,
                active = this._findActive( index );

            // Trying to activate the already active panel
            if ( active[ 0 ] === this.active[ 0 ] ) {
                return;
            }

            // Trying to collapse, simulate a click on the current active header
            if ( !active.length ) {
                active = this.active;
            }

            anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
            this._eventHandler( {
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            } );
        },

        _findActive: function( index ) {
            return index === false ? $() : this.tabs.eq( index );
        },

        _getIndex: function( index ) {

            // meta-function to give users option to provide a href string instead of a numerical index.
            if ( typeof index === "string" ) {
                index = this.anchors.index( this.anchors.filter( "[href$='" +
                    $.ui.escapeSelector( index ) + "']" ) );
            }

            return index;
        },

        _destroy: function() {
            if ( this.xhr ) {
                this.xhr.abort();
            }

            this.tablist
                .removeAttr( "role" )
                .off( this.eventNamespace );

            this.anchors
                .removeAttr( "role tabIndex" )
                .removeUniqueId();

            this.tabs.add( this.panels ).each( function() {
                if ( $.data( this, "ui-tabs-destroy" ) ) {
                    $( this ).remove();
                } else {
                    $( this ).removeAttr( "role tabIndex " +
                        "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded" );
                }
            } );

            this.tabs.each( function() {
                var li = $( this ),
                    prev = li.data( "ui-tabs-aria-controls" );
                if ( prev ) {
                    li
                        .attr( "aria-controls", prev )
                        .removeData( "ui-tabs-aria-controls" );
                } else {
                    li.removeAttr( "aria-controls" );
                }
            } );

            this.panels.show();

            if ( this.options.heightStyle !== "content" ) {
                this.panels.css( "height", "" );
            }
        },

        enable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === false ) {
                return;
            }

            if ( index === undefined ) {
                disabled = false;
            } else {
                index = this._getIndex( index );
                if ( $.isArray( disabled ) ) {
                    disabled = $.map( disabled, function( num ) {
                        return num !== index ? num : null;
                    } );
                } else {
                    disabled = $.map( this.tabs, function( li, num ) {
                        return num !== index ? num : null;
                    } );
                }
            }
            this._setOptionDisabled( disabled );
        },

        disable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === true ) {
                return;
            }

            if ( index === undefined ) {
                disabled = true;
            } else {
                index = this._getIndex( index );
                if ( $.inArray( index, disabled ) !== -1 ) {
                    return;
                }
                if ( $.isArray( disabled ) ) {
                    disabled = $.merge( [ index ], disabled ).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setOptionDisabled( disabled );
        },

        load: function( index, event ) {
            index = this._getIndex( index );
            var that = this,
                tab = this.tabs.eq( index ),
                anchor = tab.find( ".ui-tabs-anchor" ),
                panel = this._getPanelForTab( tab ),
                eventData = {
                    tab: tab,
                    panel: panel
                },
                complete = function( jqXHR, status ) {
                    if ( status === "abort" ) {
                        that.panels.stop( false, true );
                    }

                    that._removeClass( tab, "ui-tabs-loading" );
                    panel.removeAttr( "aria-busy" );

                    if ( jqXHR === that.xhr ) {
                        delete that.xhr;
                    }
                };

            // Not remote
            if ( this._isLocal( anchor[ 0 ] ) ) {
                return;
            }

            this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

            // Support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if ( this.xhr && this.xhr.statusText !== "canceled" ) {
                this._addClass( tab, "ui-tabs-loading" );
                panel.attr( "aria-busy", "true" );

                this.xhr
                    .done( function( response, status, jqXHR ) {

                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout( function() {
                            panel.html( response );
                            that._trigger( "load", event, eventData );

                            complete( jqXHR, status );
                        }, 1 );
                    } )
                    .fail( function( jqXHR, status ) {

                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout( function() {
                            complete( jqXHR, status );
                        }, 1 );
                    } );
            }
        },

        _ajaxSettings: function( anchor, event, eventData ) {
            var that = this;
            return {

                // Support: IE <11 only
                // Strip any hash that exists to prevent errors with the Ajax request
                url: anchor.attr( "href" ).replace( /#.*$/, "" ),
                beforeSend: function( jqXHR, settings ) {
                    return that._trigger( "beforeLoad", event,
                        $.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
                }
            };
        },

        _getPanelForTab: function( tab ) {
            var id = $( tab ).attr( "aria-controls" );
            return this.element.find( this._sanitizeSelector( "#" + id ) );
        }
    } );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
    if ( $.uiBackCompat !== false ) {

        // Backcompat for ui-tab class (now ui-tabs-tab)
        $.widget( "ui.tabs", $.ui.tabs, {
            _processTabs: function() {
                this._superApply( arguments );
                this._addClass( this.tabs, "ui-tab" );
            }
        } );
    }

    var widgetsTabs = $.ui.tabs;


    /*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css



    $.widget( "ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {

                // support: IE<9, Opera in jQuery <1.7
                // .text() can't accept undefined, so coerce to a string
                var title = $( this ).attr( "title" ) || "";

                // Escape title, since we're going from an attribute to raw HTML
                return $( "<a>" ).text( title ).html();
            },
            hide: true,

            // Disabled elements have inconsistent behavior across browsers (#8661)
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            track: false,

            // Callbacks
            close: null,
            open: null
        },

        _addDescribedBy: function( elem, id ) {
            var describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ );
            describedby.push( id );
            elem
                .data( "ui-tooltip-id", id )
                .attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
        },

        _removeDescribedBy: function( elem ) {
            var id = elem.data( "ui-tooltip-id" ),
                describedby = ( elem.attr( "aria-describedby" ) || "" ).split( /\s+/ ),
                index = $.inArray( id, describedby );

            if ( index !== -1 ) {
                describedby.splice( index, 1 );
            }

            elem.removeData( "ui-tooltip-id" );
            describedby = $.trim( describedby.join( " " ) );
            if ( describedby ) {
                elem.attr( "aria-describedby", describedby );
            } else {
                elem.removeAttr( "aria-describedby" );
            }
        },

        _create: function() {
            this._on( {
                mouseover: "open",
                focusin: "open"
            } );

            // IDs of generated tooltips, needed for destroy
            this.tooltips = {};

            // IDs of parent tooltips where we removed the title attribute
            this.parents = {};

            // Append the aria-live region so tooltips announce correctly
            this.liveRegion = $( "<div>" )
                .attr( {
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                } )
                .appendTo( this.document[ 0 ].body );
            this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

            this.disabledTitles = $( [] );
        },

        _setOption: function( key, value ) {
            var that = this;

            this._super( key, value );

            if ( key === "content" ) {
                $.each( this.tooltips, function( id, tooltipData ) {
                    that._updateContent( tooltipData.element );
                } );
            }
        },

        _setOptionDisabled: function( value ) {
            this[ value ? "_disable" : "_enable" ]();
        },

        _disable: function() {
            var that = this;

            // Close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {
                var event = $.Event( "blur" );
                event.target = event.currentTarget = tooltipData.element[ 0 ];
                that.close( event, true );
            } );

            // Remove title attributes to prevent native tooltips
            this.disabledTitles = this.disabledTitles.add(
                this.element.find( this.options.items ).addBack()
                    .filter( function() {
                        var element = $( this );
                        if ( element.is( "[title]" ) ) {
                            return element
                                .data( "ui-tooltip-title", element.attr( "title" ) )
                                .removeAttr( "title" );
                        }
                    } )
            );
        },

        _enable: function() {

            // restore title attributes
            this.disabledTitles.each( function() {
                var element = $( this );
                if ( element.data( "ui-tooltip-title" ) ) {
                    element.attr( "title", element.data( "ui-tooltip-title" ) );
                }
            } );
            this.disabledTitles = $( [] );
        },

        open: function( event ) {
            var that = this,
                target = $( event ? event.target : this.element )

                // we need closest here due to mouseover bubbling,
                // but always pointing at the same event target
                    .closest( this.options.items );

            // No element to show a tooltip for or the tooltip is already open
            if ( !target.length || target.data( "ui-tooltip-id" ) ) {
                return;
            }

            if ( target.attr( "title" ) ) {
                target.data( "ui-tooltip-title", target.attr( "title" ) );
            }

            target.data( "ui-tooltip-open", true );

            // Kill parent tooltips, custom or native, for hover
            if ( event && event.type === "mouseover" ) {
                target.parents().each( function() {
                    var parent = $( this ),
                        blurEvent;
                    if ( parent.data( "ui-tooltip-open" ) ) {
                        blurEvent = $.Event( "blur" );
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close( blurEvent, true );
                    }
                    if ( parent.attr( "title" ) ) {
                        parent.uniqueId();
                        that.parents[ this.id ] = {
                            element: this,
                            title: parent.attr( "title" )
                        };
                        parent.attr( "title", "" );
                    }
                } );
            }

            this._registerCloseHandlers( event, target );
            this._updateContent( target, event );
        },

        _updateContent: function( target, event ) {
            var content,
                contentOption = this.options.content,
                that = this,
                eventType = event ? event.type : null;

            if ( typeof contentOption === "string" || contentOption.nodeType ||
                contentOption.jquery ) {
                return this._open( event, target, contentOption );
            }

            content = contentOption.call( target[ 0 ], function( response ) {

                // IE may instantly serve a cached response for ajax requests
                // delay this call to _open so the other call to _open runs first
                that._delay( function() {

                    // Ignore async response if tooltip was closed already
                    if ( !target.data( "ui-tooltip-open" ) ) {
                        return;
                    }

                    // JQuery creates a special event for focusin when it doesn't
                    // exist natively. To improve performance, the native event
                    // object is reused and the type is changed. Therefore, we can't
                    // rely on the type being correct after the event finished
                    // bubbling, so we set it back to the previous value. (#8740)
                    if ( event ) {
                        event.type = eventType;
                    }
                    this._open( event, target, response );
                } );
            } );
            if ( content ) {
                this._open( event, target, content );
            }
        },

        _open: function( event, target, content ) {
            var tooltipData, tooltip, delayedShow, a11yContent,
                positionOption = $.extend( {}, this.options.position );

            if ( !content ) {
                return;
            }

            // Content can be updated multiple times. If the tooltip already
            // exists, then just update the content and bail.
            tooltipData = this._find( target );
            if ( tooltipData ) {
                tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
                return;
            }

            // If we have a title, clear it to prevent the native tooltip
            // we have to check first to avoid defining a title if none exists
            // (we don't want to cause an element to start matching [title])
            //
            // We use removeAttr only for key events, to allow IE to export the correct
            // accessible attributes. For mouse events, set to empty string to avoid
            // native tooltip showing up (happens only when removing inside mouseover).
            if ( target.is( "[title]" ) ) {
                if ( event && event.type === "mouseover" ) {
                    target.attr( "title", "" );
                } else {
                    target.removeAttr( "title" );
                }
            }

            tooltipData = this._tooltip( target );
            tooltip = tooltipData.tooltip;
            this._addDescribedBy( target, tooltip.attr( "id" ) );
            tooltip.find( ".ui-tooltip-content" ).html( content );

            // Support: Voiceover on OS X, JAWS on IE <= 9
            // JAWS announces deletions even when aria-relevant="additions"
            // Voiceover will sometimes re-read the entire log region's contents from the beginning
            this.liveRegion.children().hide();
            a11yContent = $( "<div>" ).html( tooltip.find( ".ui-tooltip-content" ).html() );
            a11yContent.removeAttr( "name" ).find( "[name]" ).removeAttr( "name" );
            a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
            a11yContent.appendTo( this.liveRegion );

            function position( event ) {
                positionOption.of = event;
                if ( tooltip.is( ":hidden" ) ) {
                    return;
                }
                tooltip.position( positionOption );
            }
            if ( this.options.track && event && /^mouse/.test( event.type ) ) {
                this._on( this.document, {
                    mousemove: position
                } );

                // trigger once to override element-relative positioning
                position( event );
            } else {
                tooltip.position( $.extend( {
                    of: target
                }, this.options.position ) );
            }

            tooltip.hide();

            this._show( tooltip, this.options.show );

            // Handle tracking tooltips that are shown with a delay (#8644). As soon
            // as the tooltip is visible, position the tooltip using the most recent
            // event.
            // Adds the check to add the timers only when both delay and track options are set (#14682)
            if ( this.options.track && this.options.show && this.options.show.delay ) {
                delayedShow = this.delayedShow = setInterval( function() {
                    if ( tooltip.is( ":visible" ) ) {
                        position( positionOption.of );
                        clearInterval( delayedShow );
                    }
                }, $.fx.interval );
            }

            this._trigger( "open", event, { tooltip: tooltip } );
        },

        _registerCloseHandlers: function( event, target ) {
            var events = {
                keyup: function( event ) {
                    if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
                        var fakeEvent = $.Event( event );
                        fakeEvent.currentTarget = target[ 0 ];
                        this.close( fakeEvent, true );
                    }
                }
            };

            // Only bind remove handler for delegated targets. Non-delegated
            // tooltips will handle this in destroy.
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                events.remove = function() {
                    this._removeTooltip( this._find( target ).tooltip );
                };
            }

            if ( !event || event.type === "mouseover" ) {
                events.mouseleave = "close";
            }
            if ( !event || event.type === "focusin" ) {
                events.focusout = "close";
            }
            this._on( true, target, events );
        },

        close: function( event ) {
            var tooltip,
                that = this,
                target = $( event ? event.currentTarget : this.element ),
                tooltipData = this._find( target );

            // The tooltip may already be closed
            if ( !tooltipData ) {

                // We set ui-tooltip-open immediately upon open (in open()), but only set the
                // additional data once there's actually content to show (in _open()). So even if the
                // tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
                // the period between open() and _open().
                target.removeData( "ui-tooltip-open" );
                return;
            }

            tooltip = tooltipData.tooltip;

            // Disabling closes the tooltip, so we need to track when we're closing
            // to avoid an infinite loop in case the tooltip becomes disabled on close
            if ( tooltipData.closing ) {
                return;
            }

            // Clear the interval for delayed tracking tooltips
            clearInterval( this.delayedShow );

            // Only set title if we had one before (see comment in _open())
            // If the title attribute has changed since open(), don't restore
            if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
                target.attr( "title", target.data( "ui-tooltip-title" ) );
            }

            this._removeDescribedBy( target );

            tooltipData.hiding = true;
            tooltip.stop( true );
            this._hide( tooltip, this.options.hide, function() {
                that._removeTooltip( $( this ) );
            } );

            target.removeData( "ui-tooltip-open" );
            this._off( target, "mouseleave focusout keyup" );

            // Remove 'remove' binding only on delegated targets
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                this._off( target, "remove" );
            }
            this._off( this.document, "mousemove" );

            if ( event && event.type === "mouseleave" ) {
                $.each( this.parents, function( id, parent ) {
                    $( parent.element ).attr( "title", parent.title );
                    delete that.parents[ id ];
                } );
            }

            tooltipData.closing = true;
            this._trigger( "close", event, { tooltip: tooltip } );
            if ( !tooltipData.hiding ) {
                tooltipData.closing = false;
            }
        },

        _tooltip: function( element ) {
            var tooltip = $( "<div>" ).attr( "role", "tooltip" ),
                content = $( "<div>" ).appendTo( tooltip ),
                id = tooltip.uniqueId().attr( "id" );

            this._addClass( content, "ui-tooltip-content" );
            this._addClass( tooltip, "ui-tooltip", "ui-widget ui-widget-content" );

            tooltip.appendTo( this._appendTo( element ) );

            return this.tooltips[ id ] = {
                element: element,
                tooltip: tooltip
            };
        },

        _find: function( target ) {
            var id = target.data( "ui-tooltip-id" );
            return id ? this.tooltips[ id ] : null;
        },

        _removeTooltip: function( tooltip ) {
            tooltip.remove();
            delete this.tooltips[ tooltip.attr( "id" ) ];
        },

        _appendTo: function( target ) {
            var element = target.closest( ".ui-front, dialog" );

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _destroy: function() {
            var that = this;

            // Close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {

                // Delegate to close method to handle common cleanup
                var event = $.Event( "blur" ),
                    element = tooltipData.element;
                event.target = event.currentTarget = element[ 0 ];
                that.close( event, true );

                // Remove immediately; destroying an open tooltip doesn't use the
                // hide animation
                $( "#" + id ).remove();

                // Restore the title
                if ( element.data( "ui-tooltip-title" ) ) {

                    // If the title attribute has changed since open(), don't restore
                    if ( !element.attr( "title" ) ) {
                        element.attr( "title", element.data( "ui-tooltip-title" ) );
                    }
                    element.removeData( "ui-tooltip-title" );
                }
            } );
            this.liveRegion.remove();
        }
    } );

// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
    if ( $.uiBackCompat !== false ) {

        // Backcompat for tooltipClass option
        $.widget( "ui.tooltip", $.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var tooltipData = this._superApply( arguments );
                if ( this.options.tooltipClass ) {
                    tooltipData.tooltip.addClass( this.options.tooltipClass );
                }
                return tooltipData;
            }
        } );
    }

    var widgetsTooltip = $.ui.tooltip;




}));

/*========= Lightbox =========*/
/*!
 * Lightbox v2.9.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    var self = this;
    $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    $('select, object, embed').css({
      visibility: 'hidden'
    });

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;

    this.disableKeyboardNav();
    var $image = this.$lightbox.find('.lb-image');

    this.$overlay.fadeIn(this.options.fadeDuration);

    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr('src', self.album[imageNumber].link);

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);

      if (self.options.fitImagesInViewport) {
        // Fit image inside the viewport.
        // Take into account the border around the image and an additional 10px gutter on each side.

        windowWidth    = $(window).width();
        windowHeight   = $(window).height();
        maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
        maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
          maxImageHeight = self.options.maxHeight;
        }

        // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
        // option than we need to size down while maintaining the aspect ratio.
        if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
          if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
            imageWidth  = maxImageWidth;
            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          } else {
            imageHeight = maxImageHeight;
            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          }
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    preloader.src          = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    this.$overlay
      .width($(document).width())
      .height($(document).height());
  };

  // Animate the size of the lightbox to fit the image we are showing
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);
      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast')
        .find('a').on('click', function(event) {
          if ($(this).attr('target') !== undefined) {
            window.open($(this).attr('href'), $(this).attr('target'));
          } else {
            location.href = $(this).attr('href');
          }
        });
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    $(document).off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    var key     = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this.end();
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    $('select, object, embed').css({
      visibility: 'visible'
    });
    if (this.options.disableScrolling) {
      $('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));


/*================= Contact Form ================*/

$(function() {

  // Get the form.
  var form = $('#contact-form');

  // Get the messages div.
  var formMessages = $('.form-messege');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#contact-form input,#contact-form textarea').val('');
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });
  });

});


/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);
