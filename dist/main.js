!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["vue-puzzle-vcode"]=n():t["vue-puzzle-vcode"]=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=8)}([function(t,n,e){var o=e(4);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(o,i);o.locals&&(t.exports=o.locals)},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII="},function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWVjbGlwc2UiIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgYW5pbWF0aW9uLWRlbGF5OiAwczsgYmFja2dyb3VuZDogbm9uZTsiPjxwYXRoIG5nLWF0dHItZD0ie3tjb25maWcucGF0aENtZH19IiBuZy1hdHRyLWZpbGw9Int7Y29uZmlnLmNvbG9yfX0iIHN0cm9rZT0ibm9uZSIgZD0iTTMwIDUwQTIwIDIwIDAgMCAwIDcwIDUwQTIwIDIxIDAgMCAxIDMwIDUwIiBmaWxsPSIjNjg5Y2M1IiBzdHlsZT0iYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7IGFuaW1hdGlvbi1kZWxheTogMHM7IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTQuOTcxIDUwIDUwLjUpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwLjU7MzYwIDUwIDUwLjUiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHN0eWxlPSJhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZzsgYW5pbWF0aW9uLWRlbGF5OiAwczsiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+"},function(t,n,e){"use strict";var o=e(0);e.n(o).a},function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".vue-puzzle-vcode {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n}\n.vue-puzzle-vcode.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n.vue-auth-box {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 20px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.vue-auth-box .auth-body {\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px;\n}\n.vue-auth-box .auth-body .loading-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n  opacity: 1;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.vue-auth-box .auth-body .loading-box.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n.vue-auth-box .auth-body .loading-box img {\n  width: 120px;\n  height: auto;\n}\n.vue-auth-box .auth-body .info-box {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  overflow: hidden;\n  font-size: 13px;\n  background-color: #83ce3f;\n  opacity: 0;\n  -webkit-transform: translateY(24px);\n          transform: translateY(24px);\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  color: #fff;\n  z-index: 10;\n}\n.vue-auth-box .auth-body .info-box.show {\n  opacity: 0.95;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.vue-auth-box .auth-body .info-box.fail {\n  background-color: #ce594b;\n}\n.vue-auth-box .auth-body .auth-canvas2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 70px;\n  height: 100%;\n  z-index: 2;\n}\n.vue-auth-box .auth-body .auth-canvas3 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity 600ms;\n  transition: opacity 600ms;\n  z-index: 3;\n}\n.vue-auth-box .auth-body .auth-canvas3.show {\n  opacity: 1;\n}\n.vue-auth-box .auth-body .flash {\n  position: absolute;\n  top: 0;\n  left: -50px;\n  width: 30px;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  z-index: 3;\n}\n.vue-auth-box .auth-body .flash.show {\n  -webkit-transition: -webkit-transform 600ms;\n  transition: -webkit-transform 600ms;\n  transition: transform 600ms;\n  transition: transform 600ms, -webkit-transform 600ms;\n}\n.vue-auth-box .auth-body .reset {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 35px;\n  height: auto;\n  z-index: 12;\n  cursor: pointer;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.vue-auth-box .auth-body .reset:hover {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vue-auth-box .auth-control .range-box {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  background-color: #eef1f8;\n  margin-top: 20px;\n  border-radius: 3px;\n  box-shadow: 0 0 8px rgba(240, 240, 240, 0.6) inset;\n}\n.vue-auth-box .auth-control .range-box .range-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: #b7bcd1;\n}\n.vue-auth-box .auth-control .range-box .range-slider {\n  position: absolute;\n  height: 100%;\n  width: 50px;\n  background-color: rgba(106, 160, 255, 0.8);\n  border-radius: 3px;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  right: 0;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 0 4px #ccc;\n  cursor: pointer;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn > div {\n  width: 0;\n  height: 40%;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  border: solid 1px #6aa0ff;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn > div:nth-child(2) {\n  margin: 0 4px;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn:hover > div:first-child,\n.vue-auth-box .auth-control .range-box .range-slider .range-btn.isDown > div:first-child {\n  border: solid 4px transparent;\n  height: 0;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn:hover > div:nth-child(2),\n.vue-auth-box .auth-control .range-box .range-slider .range-btn.isDown > div:nth-child(2) {\n  border-width: 3px;\n  height: 0;\n  border-radius: 3px;\n  margin: 0 6px;\n  border-right-color: #6aa0ff;\n}\n.vue-auth-box .auth-control .range-box .range-slider .range-btn:hover > div:nth-child(3),\n.vue-auth-box .auth-control .range-box .range-slider .range-btn.isDown > div:nth-child(3) {\n  border: solid 4px transparent;\n  height: 0;\n  border-left-color: #6aa0ff;\n}\n.vue-puzzle-overflow {\n  overflow: hidden !important;\n}\n",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(a=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(h," */")),s=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[e].concat(s).concat([i]).join("\n")}var a,r,h;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var r=t[a];null!=r[0]&&o[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="(".concat(r[2],") and (").concat(e,")")),n.push(r))}},n}},function(t,n,e){var o,i,s={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),r=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),h=null,c=0,l=[],u=e(7);function d(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=s[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],n))}else{var r=[];for(a=0;a<o.parts.length;a++)r.push(m(o.parts[a],n));s[o.id]={id:o.id,refs:1,parts:r}}}}function p(t,n){for(var e=[],o={},i=0;i<t.length;i++){var s=t[i],a=n.base?s[0]+n.base:s[0],r={css:s[1],media:s[2],sourceMap:s[3]};o[a]?o[a].parts.push(r):e.push(o[a]={id:a,parts:[r]})}return e}function f(t,n){var e=r(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(t.insertAt.before,e);e.insertBefore(n,i)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function v(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return b(n,t.attrs),f(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function m(t,n){var e,o,i,s;if(n.transform&&t.css){if(!(s="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=s}if(n.singleton){var a=c++;e=h||(h=v(n)),o=y.bind(null,e,a,!1),i=y.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),f(t,n),n}(n),o=function(t,n,e){var o=e.css,i=e.sourceMap,s=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||s)&&(o=u(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}.bind(null,e,n),i=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){g(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i];(r=s[a.id]).refs--,o.push(r)}t&&d(p(t,n),n);for(i=0;i<o.length;i++){var r;if(0===(r=o[i]).refs){for(var h=0;h<r.parts.length;h++)r.parts[h]();delete s[r.id]}}}};var w,x=(w=[],function(t,n){return w[t]=n,w.filter(Boolean).join("\n")});function y(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(n,i);else{var s=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(s,a[n]):t.appendChild(s)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var i,s=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?e+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["vue-puzzle-vcode",{show:t.show}],attrs:{id:t.id},on:{mousedown:t.onCloseMouseDown,mouseup:t.onCloseMouseUp,touchstart:t.onCloseMouseDown,touchend:t.onCloseMouseUp}},[e("div",{staticClass:"vue-auth-box",on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("div",{staticClass:"auth-body",style:"height: "+t.canvasHeight+"px"},[e("canvas",{ref:"canvas1",style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),e("canvas",{ref:"canvas3",class:["auth-canvas3",{show:t.isSuccess}],style:"width:"+t.canvasWidth+"px;height:"+t.canvasHeight+"px",attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),e("canvas",{ref:"canvas2",staticClass:"auth-canvas2",style:"width:70px;height:"+t.canvasHeight+"px;transform:translateX("+(t.styleWidth-50-(t.styleWidth-50)/(t.canvasWidth-50)*20)+"px)",attrs:{width:"70",height:t.canvasHeight}}),t._v(" "),e("div",{class:["loading-box",{hide:!t.loading}]},[e("img",{attrs:{src:t.loadingSvg}})]),t._v(" "),e("div",{class:["info-box",{show:t.infoBoxShow},{fail:t.infoBoxFail}]},[t._v(t._s(t.infoText))]),t._v(" "),e("div",{class:["flash",{show:t.isSuccess}],style:"transform: translateX("+(t.isSuccess?t.canvasWidth+100+"px":"-50px")+") skew(-30deg, 0);"}),t._v(" "),e("img",{staticClass:"reset",attrs:{src:t.resetSvg},on:{click:t.reset}})]),t._v(" "),e("div",{staticClass:"auth-control"},[e("div",{staticClass:"range-box"},[e("div",{staticClass:"range-text"},[t._v(t._s(t.sliderText))]),t._v(" "),e("div",{ref:"range-slider",staticClass:"range-slider",style:"width:"+t.styleWidth+"px"},[e("div",{class:["range-btn",{isDown:t.mouseDown}],on:{mousedown:function(n){return t.onRangeMouseDown(n)},touchstart:function(n){return t.onRangeMouseDown(n)}}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])])])])])])};o._withStripped=!0;var i=e(1),s=e.n(i),a=e(2),r=e.n(a),h={data:()=>({mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!0,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:null,closeDown:!1,isSuccess:!1,resetSvg:s.a,loadingSvg:r.a}),props:{id:{type:String},canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},imgs:{type:Array},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},mounted(){document.body.appendChild(this.$el),document.addEventListener("mousemove",this.onRangeMouseMove,!1),document.addEventListener("mouseup",this.onRangeMouseUp,!1),document.addEventListener("touchmove",this.onRangeMouseMove,!1),document.addEventListener("touchend",this.onRangeMouseUp,!1),this.show&&document.body.classList.add("vue-puzzle-overflow"),this.reset()},beforeDestroy(){clearTimeout(this.timer1),document.body.removeChild(this.$el),document.removeEventListener("mousemove",this.onRangeMouseMove,!1),document.removeEventListener("mouseup",this.onRangeMouseUp,!1),document.removeEventListener("touchmove",this.onRangeMouseMove,!1),document.removeEventListener("touchend",this.onRangeMouseUp,!1)},watch:{show(t){t?(document.body.classList.add("vue-puzzle-overflow"),this.reset()):document.body.classList.remove("vue-puzzle-overflow")}},computed:{styleWidth(){const t=this.startWidth+this.newX-this.startX;return t<50?50:t>this.canvasWidth?this.canvasWidth:t}},methods:{onClose(){this.mouseDown||(clearTimeout(this.timer1),this.$emit("onClose"))},onCloseMouseDown(){this.closeDown=!0},onCloseMouseUp(){this.closeDown&&this.onClose(),this.closeDown=!1},onRangeMouseDown(t){console.log("拖动开始：",t),this.isCanSlide&&(this.mouseDown=!0,this.startWidth=this.$refs["range-slider"].clientWidth,this.newX=t.clientX||t.changedTouches[0].clientX,this.startX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseMove(t){this.mouseDown&&(console.log("touchmove:",t.clientX||t.changedTouches[0].clientX),this.newX=t.clientX||t.changedTouches[0].clientX)},onRangeMouseUp(t){this.mouseDown&&(this.mouseDown=!1,this.submit())},init(t){this.loading=!0;const n=this.$refs.canvas1,e=this.$refs.canvas2,o=this.$refs.canvas3,i=n.getContext("2d"),s=e.getContext("2d"),a=o.getContext("2d"),r=document.createElement("img");i.clearRect(0,0,this.canvasWidth,this.canvasHeight),s.clearRect(0,0,70,this.canvasHeight),this.pinX=this.getRandom(90,this.canvasWidth-90),this.pinY=this.getRandom(20,this.canvasHeight-90),r.crossOrigin="anonymous",r.onload=()=>{i.save(),this.paintBrick(i),i.closePath(),navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0||(i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowColor="#000",i.shadowBlur=5,i.fill()),i.clip(),i.save(),i.shadowOffsetX=0,i.shadowOffsetY=0,i.shadowColor="#000",i.shadowBlur=3,i.fill(),i.restore(),i.drawImage(r,0,0,this.canvasWidth,this.canvasHeight),a.drawImage(r,0,0,this.canvasWidth,this.canvasHeight),i.globalCompositeOperation="source-atop",this.paintBrick(i),i.arc(this.pinX+35,this.pinY+35,80,0,2*Math.PI,!0),i.closePath(),i.shadowColor="rgba(255, 255, 255, .8)",i.shadowOffsetX=-1,i.shadowOffsetY=-1,i.shadowBlur=10,i.fillStyle="#ffffaa",i.fill();const t=i.getImageData(this.pinX-3,this.pinY-20,this.pinX+75,this.pinY+50);s.putImageData(t,0,this.pinY-20),i.restore(),i.clearRect(0,0,this.canvasWidth,this.canvasHeight),i.save(),this.paintBrick(i),i.globalAlpha=.8,i.fillStyle="#ffffff",i.fill(),i.restore(),i.save(),i.globalCompositeOperation="source-atop",this.paintBrick(i),i.arc(this.pinX+35,this.pinY+35,80,0,2*Math.PI,!0),i.shadowColor="#000",i.shadowOffsetX=2,i.shadowOffsetY=2,i.shadowBlur=16,i.fill(),i.restore(),i.save(),i.globalCompositeOperation="destination-over",i.drawImage(r,0,0,this.canvasWidth,this.canvasHeight),i.restore(),this.loading=!1},r.onerror=()=>{this.init(!0)},!t&&this.imgs&&this.imgs.length?r.src=this.imgs[this.getRandom(0,this.imgs.length-1)]:r.src=this.makeImgWithCanvas()},getRandom:(t,n)=>Math.round(Math.random()*(n-t)+t),paintBrick(t){t.beginPath(),t.moveTo(this.pinX,this.pinY),t.lineTo(this.pinX+15,this.pinY),t.bezierCurveTo(this.pinX+15,this.pinY-20,this.pinX+15+20,this.pinY-20,this.pinX+15+20,this.pinY),t.lineTo(this.pinX+15+20+15,this.pinY),t.lineTo(this.pinX+15+20+15,this.pinY+15),t.bezierCurveTo(this.pinX+15+20+15+20,this.pinY+15,this.pinX+15+20+15+20,this.pinY+15+20,this.pinX+15+20+15,this.pinY+15+20),t.lineTo(this.pinX+15+20+15,this.pinY+15+20+15),t.lineTo(this.pinX,this.pinY+15+20+15),t.lineTo(this.pinX,this.pinY+15+20),t.bezierCurveTo(this.pinX+20,this.pinY+15+20,this.pinX+20,this.pinY+15,this.pinX,this.pinY+15),t.lineTo(this.pinX,this.pinY)},makeImgWithCanvas(){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=this.canvasWidth,t.height=this.canvasHeight,n.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,n.fillRect(0,0,this.canvasWidth,this.canvasHeight);for(let t=0;t<10;t++)if(n.fillStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,n.strokeStyle=`rgb(${this.getRandom(100,255)},${this.getRandom(100,255)},${this.getRandom(100,255)})`,this.getRandom(0,2)>1)n.save(),n.rotate(this.getRandom(-90,90)*Math.PI/180),n.fillRect(this.getRandom(-20,this.canvasWidth-20),this.getRandom(-20,this.canvasHeight-20),this.getRandom(10,this.canvasWidth/2+10),this.getRandom(10,this.canvasHeight/2+10)),n.restore();else{n.beginPath();const t=this.getRandom(-Math.PI,Math.PI);n.arc(this.getRandom(0,this.canvasWidth),this.getRandom(0,this.canvasHeight),this.getRandom(10,this.canvasHeight/2+10),t,t+1.5*Math.PI),n.closePath(),n.fill()}return t.toDataURL("image/png")},submit(){const t=Math.abs(this.pinX-(this.styleWidth-50)+(this.styleWidth-50)/(this.canvasWidth-50)*20-3);t<10?(this.infoText=this.successText,this.infoBoxFail=!1,this.infoBoxShow=!0,this.isCanSlide=!1,this.isSuccess=!0,clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.$emit("onSuccess",t)},800)):(this.infoText=this.failText,this.infoBoxFail=!0,this.infoBoxShow=!0,this.isCanSlide=!1,this.$emit("onFail",t),clearTimeout(this.timer1),this.timer1=setTimeout(()=>{this.reset()},800))},reset(){this.infoBoxFail=!1,this.infoBoxShow=!1,this.isCanSlide=!0,this.isSuccess=!1,this.startWidth=50,this.startX=0,this.newX=0,this.init()}}};e(3);var c=function(t,n,e,o,i,s,a,r){var h,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=h):i&&(h=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),h)if(c.functional){c._injectStyles=h;var l=c.render;c.render=function(t,n){return h.call(n),l(t,n)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:c}}(h,o,[],!1,null,null,null);c.options.__file="src/app.vue";var l=c.exports;n.default=l}])});