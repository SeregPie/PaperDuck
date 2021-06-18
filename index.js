!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).DearImage=e()}(this,(function(){"use strict";class t{static is(t){return t instanceof this}constructor(t){this.context=t}get canvas(){return this.context.canvas}get width(){return this.canvas.width}get height(){return this.canvas.height}get sizeX(){return this.width}get sizeY(){return this.height}}function e(t,e){try{let n=document.createElement("canvas");return Object.assign(n,{width:t,height:e}),n}catch{}throw new Error("HTMLCanvasElement is not supported.")}function n(t,e){try{return new OffscreenCanvas(t,e)}catch{}throw new Error("OffscreenCanvas is not supported.")}function r(...t){return function(...t){try{return e(...t)}catch{}try{return n(...t)}catch{}let[r,i]=t;try{let{Canvas:t}=require("canvas");return new t(r,i)}catch{}throw new Error("Canvas is not supported.")}(...t).getContext("2d")}var i=Number.isFinite;function o(t,e){return null!=t&&(function(t){return"string"==typeof t}(t)&&(t=Number(t)),function(t){return i(t)&&t>=0}(t))?Math.round(t):e}function s(t){return o(t,0)}return t.blank=function(t,e){return new this(r(t=s(t),e=s(e)))},t.isDearImage=t.is.bind(t),t.prototype.toImageData=function(){let{context:t,sizeX:e,sizeY:n}=this;return t.getImageData(0,0,e,n)},t.prototype.isBlank=function(t){let e=Symbol();return function(){let n=this[e];return void 0===n&&(n=t.apply(this,arguments),this[e]=n),n}}((function(){let{sizeX:t,sizeY:e}=this;return!(t&&e&&this.toImageData().data.some((t=>t)))})),t.prototype.toBuffer=function(...t){let{sizeX:e,sizeY:n}=this;if(e&&n){let{canvas:e}=this;return e.toBuffer(...t)}return Buffer.alloc(0)},t.prototype.toDataURL=function(...t){return this.canvas.toDataURL(...t)},t.prototype.toHTMLCanvasElement=function(){let{sizeX:t,sizeY:n}=this,r=e(t,n);if(t&&n){let{canvas:t}=this;r.getContext("2d").drawImage(t,0,0)}return r},t.prototype.toHTMLImageElement=function(...t){return function(t){try{let e=new Image;return Object.assign(e,{src:t}),e}catch{}throw new Error("HTMLImageElement is not supported.")}(this.toDataURL(...t))},t.prototype.toOffscreenCanvas=function(){let{canvas:t,sizeX:e,sizeY:r}=this,i=n(e,r);return e&&r&&i.getContext("2d").drawImage(t,0,0),i},t}));
