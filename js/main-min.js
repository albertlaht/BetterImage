!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,i;return function t(e,i,n){function o(a,s){if(!i[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[a]={exports:{}};e[a][0].call(u.exports,function(t){return o(e[a][1][t]||t)},u,u.exports,t,e,i,n)}return i[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(t,e,i){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=n},{}],2:[function(t,e,i){function n(t,e,i,n,r){var a=o.apply(this,arguments);return t.addEventListener(i,a,r),{destroy:function(){t.removeEventListener(i,a,r)}}}function o(t,e,i,n){return function(i){i.delegateTarget=r(i.target,e),i.delegateTarget&&n.call(t,i)}}var r=t("./closest");e.exports=n},{"./closest":1}],3:[function(t,e,i){i.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},i.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||i.node(t[0]))},i.string=function(t){return"string"==typeof t||t instanceof String},i.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,i){function n(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,i);if(s.nodeList(t))return r(t,e,i);if(s.string(t))return a(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function r(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}function a(t,e,i){return c(document.body,t,e,i)}var s=t("./is"),c=t("delegate");e.exports=n},{"./is":3,delegate:2}],5:[function(t,e,i){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=n},{}],6:[function(t,e,i){function n(){}n.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){function n(){o.off(t,n),e.apply(i,arguments)}var o=this;return n._=e,this.on(t,n,i)},emit:function(t){var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;for(n;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var r=0,a=n.length;r<a;r++)n[r].fn!==e&&n[r].fn._!==e&&o.push(n[r]);return o.length?i[t]=o:delete i[t],this}},e.exports=n},{}],7:[function(e,i,n){!function(o,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==n)r(i,e("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(t,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=i(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,i="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[i?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=s})},{select:5}],8:[function(e,i,n){!function(o,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==n)r(i,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(t,e,i,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}var l=o(e),u=o(i),h=o(n),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),p=function(t){function e(t,i){r(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(i),n.listenClick(t),n}return s(e,t),f(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var i=this;this.listener=(0,h.default)(e,"click",function(t){return i.onClick(t)})}},{key:"onClick",value:function t(e){var i=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(i),target:this.target(i),text:this.text(i),container:this.container,trigger:i,emitter:this})}},{key:"defaultAction",value:function t(e){return c("action",e)}},{key:"defaultTarget",value:function t(e){var i=c("target",e);if(i)return document.querySelector(i)}},{key:"defaultText",value:function t(e){return c("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],i="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return i.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(e,i){var n,o,r,a,s,l=t('<div class="minicolors" />'),u=t.minicolors.defaults;if(!e.data("minicolors-initialized")){if(i=t.extend(!0,{},u,i),l.addClass("minicolors-theme-"+i.theme).toggleClass("minicolors-with-opacity",i.opacity),void 0!==i.position&&t.each(i.position.split(" "),function(){l.addClass("minicolors-position-"+this)}),n="rgb"===i.format?i.opacity?"25":"20":i.keywords?"11":"7",e.addClass("minicolors-input").data("minicolors-initialized",!1).data("minicolors-settings",i).prop("size",n).wrap(l).after('<div class="minicolors-panel minicolors-slider-'+i.control+'"><div class="minicolors-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-grid minicolors-sprite"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'),i.inline||(e.after('<span class="minicolors-swatch minicolors-sprite minicolors-input-swatch"><span class="minicolors-swatch-color"></span></span>'),e.next(".minicolors-input-swatch").on("click",function(t){t.preventDefault(),e.focus()})),a=e.parent().find(".minicolors-panel"),a.on("selectstart",function(){return!1}).end(),i.swatches&&0!==i.swatches.length)for(a.addClass("minicolors-with-swatches"),o=t('<ul class="minicolors-swatches"></ul>').appendTo(a),s=0;s<i.swatches.length;++s)r=i.swatches[s],r=v(r)?p(r,!0):S(f(r,!0)),t('<li class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></li>').appendTo(o).data("swatch-color",i.swatches[s]).find(".minicolors-swatch-color").css({backgroundColor:k(r),opacity:r.a}),i.swatches[s]=r;i.inline&&e.parent().addClass("minicolors-inline"),c(e,!1),e.data("minicolors-initialized",!0)}}function i(t){var e=t.parent();t.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"),e.before(t).remove()}function n(t){var e=t.parent(),i=e.find(".minicolors-panel"),n=t.data("minicolors-settings");!t.data("minicolors-initialized")||t.prop("disabled")||e.hasClass("minicolors-inline")||e.hasClass("minicolors-focus")||(o(),e.addClass("minicolors-focus"),i.stop(!0,!0).fadeIn(n.showSpeed,function(){n.show&&n.show.call(t.get(0))}))}function o(){t(".minicolors-focus").each(function(){var e=t(this),i=e.find(".minicolors-input"),n=e.find(".minicolors-panel"),o=i.data("minicolors-settings");n.fadeOut(o.hideSpeed,function(){o.hide&&o.hide.call(i.get(0)),e.removeClass("minicolors-focus")})})}function r(t,e,i){var n,o,r,s,c=t.parents(".minicolors").find(".minicolors-input"),l=c.data("minicolors-settings"),u=t.find("[class$=-picker]"),h=t.offset().left,d=t.offset().top,f=Math.round(e.pageX-h),p=Math.round(e.pageY-d),g=i?l.animationSpeed:0;e.originalEvent.changedTouches&&(f=e.originalEvent.changedTouches[0].pageX-h,p=e.originalEvent.changedTouches[0].pageY-d),f<0&&(f=0),p<0&&(p=0),f>t.width()&&(f=t.width()),p>t.height()&&(p=t.height()),t.parent().is(".minicolors-slider-wheel")&&u.parent().is(".minicolors-grid")&&(n=75-f,o=75-p,r=Math.sqrt(n*n+o*o),s=Math.atan2(o,n),s<0&&(s+=2*Math.PI),r>75&&(r=75,f=75-75*Math.cos(s),p=75-75*Math.sin(s)),f=Math.round(f),p=Math.round(p)),t.is(".minicolors-grid")?u.stop(!0).animate({top:p+"px",left:f+"px"},g,l.animationEasing,function(){a(c,t)}):u.stop(!0).animate({top:p+"px"},g,l.animationEasing,function(){a(c,t)})}function a(t,e){function i(t,e){var i,n;return t.length&&e?(i=t.offset().left,n=t.offset().top,{x:i-e.offset().left+t.outerWidth()/2,y:n-e.offset().top+t.outerHeight()/2}):null}var n,o,r,a,c,u,h,d=t.val(),f=t.attr("data-opacity"),p=t.parent(),g=t.data("minicolors-settings"),v=p.find(".minicolors-input-swatch"),y=p.find(".minicolors-grid"),b=p.find(".minicolors-slider"),w=p.find(".minicolors-opacity-slider"),k=y.find("[class$=-picker]"),C=b.find("[class$=-picker]"),E=w.find("[class$=-picker]"),S=i(k,y),M=i(C,b),T=i(E,w);if(e.is(".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider")){switch(g.control){case"wheel":a=y.width()/2-S.x,c=y.height()/2-S.y,u=Math.sqrt(a*a+c*c),h=Math.atan2(c,a),h<0&&(h+=2*Math.PI),u>75&&(u=75,S.x=69-75*Math.cos(h),S.y=69-75*Math.sin(h)),o=m(u/.75,0,100),n=m(180*h/Math.PI,0,360),r=m(100-Math.floor(M.y*(100/b.height())),0,100),d=x({h:n,s:o,b:r}),b.css("backgroundColor",x({h:n,s:o,b:100}));break;case"saturation":n=m(parseInt(S.x*(360/y.width()),10),0,360),o=m(100-Math.floor(M.y*(100/b.height())),0,100),r=m(100-Math.floor(S.y*(100/y.height())),0,100),d=x({h:n,s:o,b:r}),b.css("backgroundColor",x({h:n,s:100,b:r})),p.find(".minicolors-grid-inner").css("opacity",o/100);break;case"brightness":n=m(parseInt(S.x*(360/y.width()),10),0,360),o=m(100-Math.floor(S.y*(100/y.height())),0,100),r=m(100-Math.floor(M.y*(100/b.height())),0,100),d=x({h:n,s:o,b:r}),b.css("backgroundColor",x({h:n,s:o,b:100})),p.find(".minicolors-grid-inner").css("opacity",1-r/100);break;default:n=m(360-parseInt(M.y*(360/b.height()),10),0,360),o=m(Math.floor(S.x*(100/y.width())),0,100),r=m(100-Math.floor(S.y*(100/y.height())),0,100),d=x({h:n,s:o,b:r}),y.css("backgroundColor",x({h:n,s:100,b:100}))}f=g.opacity?parseFloat(1-T.y/w.height()).toFixed(2):1,s(t,d,f)}else v.find("span").css({backgroundColor:d,opacity:f}),l(t,d,f)}function s(t,e,i){var n,o=t.parent(),r=t.data("minicolors-settings"),a=o.find(".minicolors-input-swatch");r.opacity&&t.attr("data-opacity",i),"rgb"===r.format?(n=v(e)?p(e,!0):S(f(e,!0)),i=""===t.attr("data-opacity")?1:m(parseFloat(t.attr("data-opacity")).toFixed(2),0,1),!isNaN(i)&&r.opacity||(i=1),e=t.minicolors("rgbObject").a<=1&&n&&r.opacity?"rgba("+n.r+", "+n.g+", "+n.b+", "+parseFloat(i)+")":"rgb("+n.r+", "+n.g+", "+n.b+")"):(v(e)&&(e=w(e)),e=d(e,r.letterCase)),t.val(e),a.find("span").css({backgroundColor:e,opacity:i}),l(t,e,i)}function c(e,i){var n,o,r,a,s,c,u,h,b,k,E=e.parent(),S=e.data("minicolors-settings"),M=E.find(".minicolors-input-swatch"),T=E.find(".minicolors-grid"),A=E.find(".minicolors-slider"),L=E.find(".minicolors-opacity-slider"),j=T.find("[class$=-picker]"),O=A.find("[class$=-picker]"),F=L.find("[class$=-picker]");switch(v(e.val())?(n=w(e.val()),(s=m(parseFloat(y(e.val())).toFixed(2),0,1))&&e.attr("data-opacity",s)):n=d(f(e.val(),!0),S.letterCase),n||(n=d(g(S.defaultValue,!0),S.letterCase)),o=C(n),a=S.keywords?t.map(S.keywords.split(","),function(e){return t.trim(e.toLowerCase())}):[],c=""!==e.val()&&t.inArray(e.val().toLowerCase(),a)>-1?d(e.val()):v(e.val())?p(e.val()):n,i||e.val(c),S.opacity&&(r=""===e.attr("data-opacity")?1:m(parseFloat(e.attr("data-opacity")).toFixed(2),0,1),isNaN(r)&&(r=1),e.attr("data-opacity",r),M.find("span").css("opacity",r),h=m(L.height()-L.height()*r,0,L.height()),F.css("top",h+"px")),"transparent"===e.val().toLowerCase()&&M.find("span").css("opacity",0),M.find("span").css("backgroundColor",n),S.control){case"wheel":b=m(Math.ceil(.75*o.s),0,T.height()/2),k=o.h*Math.PI/180,u=m(75-Math.cos(k)*b,0,T.width()),h=m(75-Math.sin(k)*b,0,T.height()),j.css({top:h+"px",left:u+"px"}),h=150-o.b/(100/T.height()),""===n&&(h=0),O.css("top",h+"px"),A.css("backgroundColor",x({h:o.h,s:o.s,b:100}));break;case"saturation":u=m(5*o.h/12,0,150),h=m(T.height()-Math.ceil(o.b/(100/T.height())),0,T.height()),j.css({top:h+"px",left:u+"px"}),h=m(A.height()-o.s*(A.height()/100),0,A.height()),O.css("top",h+"px"),A.css("backgroundColor",x({h:o.h,s:100,b:o.b})),E.find(".minicolors-grid-inner").css("opacity",o.s/100);break;case"brightness":u=m(5*o.h/12,0,150),h=m(T.height()-Math.ceil(o.s/(100/T.height())),0,T.height()),j.css({top:h+"px",left:u+"px"}),h=m(A.height()-o.b*(A.height()/100),0,A.height()),O.css("top",h+"px"),A.css("backgroundColor",x({h:o.h,s:o.s,b:100})),E.find(".minicolors-grid-inner").css("opacity",1-o.b/100);break;default:u=m(Math.ceil(o.s/(100/T.width())),0,T.width()),h=m(T.height()-Math.ceil(o.b/(100/T.height())),0,T.height()),j.css({top:h+"px",left:u+"px"}),h=m(A.height()-o.h/(360/A.height()),0,A.height()),O.css("top",h+"px"),T.css("backgroundColor",x({h:o.h,s:100,b:100}))}e.data("minicolors-initialized")&&l(e,c,r)}function l(t,e,i){var n,o,r,a=t.data("minicolors-settings"),s=t.data("minicolors-lastChange");if(!s||s.value!==e||s.opacity!==i){if(t.data("minicolors-lastChange",{value:e,opacity:i}),a.swatches&&0!==a.swatches.length){for(n=v(e)?p(e,!0):S(e),o=-1,r=0;r<a.swatches.length;++r)if(n.r===a.swatches[r].r&&n.g===a.swatches[r].g&&n.b===a.swatches[r].b&&n.a===a.swatches[r].a){o=r;break}t.parent().find(".minicolors-swatches .minicolors-swatch").removeClass("selected"),-1!==o&&t.parent().find(".minicolors-swatches .minicolors-swatch").eq(r).addClass("selected")}a.change&&(a.changeDelay?(clearTimeout(t.data("minicolors-changeTimeout")),t.data("minicolors-changeTimeout",setTimeout(function(){a.change.call(t.get(0),e,i)},a.changeDelay))):a.change.call(t.get(0),e,i)),t.trigger("change").trigger("input")}}function u(e){var i,n=t(e).attr("data-opacity");if(v(t(e).val()))i=p(t(e).val(),!0);else{i=S(f(t(e).val(),!0))}return i?(void 0!==n&&t.extend(i,{a:parseFloat(n)}),i):null}function h(e,i){var n,o=t(e).attr("data-opacity");if(v(t(e).val()))n=p(t(e).val(),!0);else{n=S(f(t(e).val(),!0))}return n?(void 0===o&&(o=1),i?"rgba("+n.r+", "+n.g+", "+n.b+", "+parseFloat(o)+")":"rgb("+n.r+", "+n.g+", "+n.b+")"):null}function d(t,e){return"uppercase"===e?t.toUpperCase():t.toLowerCase()}function f(t,e){return t=t.replace(/^#/g,""),t.match(/^[A-F0-9]{3,6}/gi)?3!==t.length&&6!==t.length?"":(3===t.length&&e&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),"#"+t):""}function p(t,e){var i=t.replace(/[^\d,.]/g,""),n=i.split(",");return n[0]=m(parseInt(n[0],10),0,255),n[1]=m(parseInt(n[1],10),0,255),n[2]=m(parseInt(n[2],10),0,255),n[3]&&(n[3]=m(parseFloat(n[3],10),0,1)),e?n[3]?{r:n[0],g:n[1],b:n[2],a:n[3]}:{r:n[0],g:n[1],b:n[2]}:void 0!==n[3]&&n[3]<=1?"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")":"rgb("+n[0]+", "+n[1]+", "+n[2]+")"}function g(t,e){return v(t)?p(t):f(t,e)}function m(t,e,i){return t<e&&(t=e),t>i&&(t=i),t}function v(t){var e=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return!(!e||4!==e.length)}function y(t){return t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i),t&&6===t.length?t[4]:"1"}function b(t){var e={},i=Math.round(t.h),n=Math.round(255*t.s/100),o=Math.round(255*t.b/100);if(0===n)e.r=e.g=e.b=o;else{var r=o,a=(255-n)*o/255,s=i%60*(r-a)/60;360===i&&(i=0),i<60?(e.r=r,e.b=a,e.g=a+s):i<120?(e.g=r,e.b=a,e.r=r-s):i<180?(e.g=r,e.r=a,e.b=a+s):i<240?(e.b=r,e.r=a,e.g=r-s):i<300?(e.b=r,e.g=a,e.r=a+s):i<360?(e.r=r,e.g=a,e.b=r-s):(e.r=0,e.g=0,e.b=0)}return{r:Math.round(e.r),g:Math.round(e.g),b:Math.round(e.b)}}function w(t){return t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),t&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}function k(e){var i=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];return t.each(i,function(t,e){1===e.length&&(i[t]="0"+e)}),"#"+i.join("")}function x(t){return k(b(t))}function C(t){var e=E(S(t));return 0===e.s&&(e.h=360),e}function E(t){var e={h:0,s:0,b:0},i=Math.min(t.r,t.g,t.b),n=Math.max(t.r,t.g,t.b),o=n-i;return e.b=n,e.s=0!==n?255*o/n:0,0!==e.s?t.r===n?e.h=(t.g-t.b)/o:t.g===n?e.h=2+(t.b-t.r)/o:e.h=4+(t.r-t.g)/o:e.h=-1,e.h*=60,e.h<0&&(e.h+=360),e.s*=100/255,e.b*=100/255,e}function S(t){return t=parseInt(t.indexOf("#")>-1?t.substring(1):t,16),{r:t>>16,g:(65280&t)>>8,b:255&t}}t.minicolors={defaults:{animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",defaultValue:"",format:"hex",hide:null,hideSpeed:100,inline:!1,keywords:"",letterCase:"lowercase",opacity:!1,position:"bottom left",show:null,showSpeed:100,theme:"default",swatches:[]}},t.extend(t.fn,{minicolors:function(r,a){switch(r){case"destroy":return t(this).each(function(){i(t(this))}),t(this);case"hide":return o(),t(this);case"opacity":return void 0===a?t(this).attr("data-opacity"):(t(this).each(function(){c(t(this).attr("data-opacity",a))}),t(this));case"rgbObject":return u(t(this),"rgbaObject"===r);case"rgbString":case"rgbaString":return h(t(this),"rgbaString"===r);case"settings":return void 0===a?t(this).data("minicolors-settings"):(t(this).each(function(){var e=t(this).data("minicolors-settings")||{};i(t(this)),t(this).minicolors(t.extend(!0,e,a))}),t(this));case"show":return n(t(this).eq(0)),t(this);case"value":return void 0===a?t(this).val():(t(this).each(function(){"object"==typeof a&&null!==a?(a.opacity&&t(this).attr("data-opacity",m(a.opacity,0,1)),a.color&&t(this).val(a.color)):t(this).val(a),c(t(this))}),t(this));default:return"create"!==r&&(a=r),t(this).each(function(){e(t(this),a)}),t(this)}}}),t([document]).on("mousedown.minicolors touchstart.minicolors",function(e){t(e.target).parents().add(e.target).hasClass("minicolors")||o()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(e){var i=t(this);e.preventDefault(),t(e.delegateTarget).data("minicolors-target",i),r(i,e,!0)}).on("mousemove.minicolors touchmove.minicolors",function(e){var i=t(e.delegateTarget).data("minicolors-target");i&&r(i,e)}).on("mouseup.minicolors touchend.minicolors",function(){t(this).removeData("minicolors-target")}).on("click.minicolors",".minicolors-swatches li",function(e){e.preventDefault();var i=t(this),n=i.parents(".minicolors").find(".minicolors-input"),o=i.data("swatch-color");s(n,o,y(o)),c(n)}).on("mousedown.minicolors touchstart.minicolors",".minicolors-input-swatch",function(e){var i=t(this).parent().find(".minicolors-input");e.preventDefault(),n(i)}).on("focus.minicolors",".minicolors-input",function(){var e=t(this);e.data("minicolors-initialized")&&n(e)}).on("blur.minicolors",".minicolors-input",function(){var e,i,n,o,r,a=t(this),s=a.data("minicolors-settings");a.data("minicolors-initialized")&&(e=s.keywords?t.map(s.keywords.split(","),function(e){return t.trim(e.toLowerCase())}):[],""!==a.val()&&t.inArray(a.val().toLowerCase(),e)>-1?r=a.val():(v(a.val())?n=p(a.val(),!0):(i=f(a.val(),!0),n=i?S(i):null),r=null===n?s.defaultValue:"rgb"===s.format?p(s.opacity?"rgba("+n.r+","+n.g+","+n.b+","+a.attr("data-opacity")+")":"rgb("+n.r+","+n.g+","+n.b+")"):k(n)),o=s.opacity?a.attr("data-opacity"):1,"transparent"===r.toLowerCase()&&(o=0),a.closest(".minicolors").find(".minicolors-input-swatch > span").css("opacity",o),a.val(r),""===a.val()&&a.val(g(s.defaultValue,!0)),a.val(d(a.val(),s.letterCase)))}).on("keydown.minicolors",".minicolors-input",function(e){var i=t(this);if(i.data("minicolors-initialized"))switch(e.keyCode){case 9:o();break;case 13:case 27:o(),i.blur()}}).on("keyup.minicolors",".minicolors-input",function(){var e=t(this);e.data("minicolors-initialized")&&c(e,!0)}).on("paste.minicolors",".minicolors-input",function(){var e=t(this);e.data("minicolors-initialized")&&setTimeout(function(){c(e,!0)},1)})}),$(document).ready(function(){function t(){r.html("/"+a.val().replace("#","")),s.html("/"+c.val().replace("#",""))}var e=$("#width"),i=$("#input-width"),n=$("#height"),o=$("#input-height"),r=$("#bgcolour"),a=$("#input-bgcolour"),s=$("#textcolour"),c=$("#input-textcolour"),l=$("#string"),u=$("#input-string"),h=$("#filetype");$("input").on("change keyup paste",function(){$(".button--preview, .button--reset, .button--copy").removeClass("button--disabled")}),i.on("change keyup paste",function(){e.html(i.val())}),o.on("change keyup paste",function(){n.html("x"+o.val())}),a.on("change keydown paste",function(){t()}),c.on("change keydown paste",function(){t()}),$(".colour-swap").click(function(){var e=$(c).val();$(c).val($(a).val()),$(a).val(e),t(),$(".button--preview, .button--reset, .button--copy").removeClass("button--disabled")}),u.on("change keydown paste",function(){var t=u.val(),e="?text="+t.replace(/\s+/g,"+");l.html(e)}),$("input[name=filetype]").on("change",function(){h.html("."+$("input[name=filetype]:checked").val())});var d=new Clipboard(".button--copy",{text:function(){return $(".created-url").text()}});d.on("success",function(t){console.log(t),$(".button--copy").addClass("button--copied")}),d.on("error",function(t){console.log(t)}),$(".input--colour").minicolors(),$(".button--preview").click(function(){$(".preview-image").empty(),$(".preview-image").append('<img src="'+$(".created-url").text()+'">'),$(".button--preview").addClass("button--disabled")}),$(".button--reset").click(function(){$(":input","form").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected"),$("#bgcolour, #textcolour, #filetype, #string").empty(),$("#width").text("600"),$("#height").text("x400"),$("#input-width").val("600"),$("#input-height").val("400"),$("#input-bgcolour").val("#cccccc"),$("#input-textcolour").val("#969696"),$("#input-bgcolour").parent().find(".minicolors-swatch-color").attr("style","background-color: rgb(204, 204, 204); opacity: 1;"),$("#input-textcolour").parent().find(".minicolors-swatch-color").attr("style","background-color: rgb(150, 150, 150); opacity: 1;"),$(".preview-image").empty(),$(".preview-image").append('<img src="https://via.placeholder.com/600x400">'),$(".button--preview, .button--reset, .button--copy:not(.preview-image)").addClass("button--disabled")})});