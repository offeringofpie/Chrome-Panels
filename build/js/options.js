!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=i||chrome,o={get:function(e){i.storage.sync.get("options",e)},set:function(e){i.storage.sync.set({options:e},function(){i.runtime.lastError&&console.log("Runtime error.")})},update:function(e){i.storage.sync.get("options",function(t){if(i.runtime.lastError)console.error(i.runtime.lastError);else{var n={width:t.options.width,height:t.options.height,isWide:t.options.isWide};e(n)}})}};t.default=o},6:function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o={data:document.getElementById("data"),wide:document.getElementById("wide"),width:document.getElementById("width"),height:document.getElementById("height"),experimental:document.getElementById("experimental"),set:document.getElementById("set")};o.width.onchange=function(){o.wide.checked&&(o.height.value=Math.floor(9*o.width.value/16))},o.wide.onchange=function(){o.wide.checked?o.height.disabled=!0:(o.height.disabled=!1,o.height.value=Math.floor(9*o.width.value/16))},document.body.onload=function(){i.default.update(function(e){o.wide.checked=e.isWide,o.experimental.checked=e.experimental,o.width.value=e.width,o.height.value=e.height,o.height.value=e.height})},o.set.onclick=function(){i.default.set({width:parseInt(o.width.value),height:parseInt(o.height.value),isWide:o.wide.checked,experimental:o.experimental.checked}),window.close()}}});