!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.PaperDuck=r()}(this,function(){"use strict";var t=function(t){this.context=t},r={canvas:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};function e(t){return"string"==typeof t}function c(t){return void 0===t}function n(e){for(var n=[],t=arguments.length-1;0<t--;)n[t]=arguments[t+1];return function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.call.apply(e,[this].concat(n,t))}}r.canvas.get=function(){return this.context.canvas},r.width.get=function(){return this.canvas.width},r.height.get=function(){return this.canvas.height},Object.defineProperties(t.prototype,r),t.blank=function(t,r){return new this(this.blankContext(t,r))},t.blankCanvas=function(t,r){void 0===t&&(t=0),void 0===r&&(r=0);var e=this.createCanvas();return e.width=t,e.height=r,e},t.blankContext=function(t,r){return this.blankCanvas(t,r).getContext("2d")},t.createCanvas=function(){return document.createElement("canvas")},t.from=function(t){return e(t)?this.fromString(t):(r=t)&&"object"==typeof r?t.canvas instanceof HTMLCanvasElement?this.fromImageSource(t.canvas):this.fromImageSource(t):this.blank();var r},t.fromImageSource=function(t){var r=t.naturalWidth||t.width,e=t.naturalHeight||t.height,n=this.blankContext(r,e);return n.drawImage(t,0,0),new this(n)},t.fromString=function(t){var r=new Image;return r.src=t,this.fromImageSource(r)},t.load=function(t){var r=this;return Promise.try(function(){return e(t)?r.loadString(t):t instanceof HTMLImageElement?r.loadImage(t):t instanceof HTMLInputElement?r.loadInput(t):t instanceof File?r.loadFile(t):t instanceof FileReader?r.loadFileReader(t):r.from(t)})},t.loadFile=function(r){var e=this;return Promise.try(function(){var t=new FileReader;return t.readAsDataURL(r),e.loadFileReader(t)})},t.loadFileReader=function(o){var t=this;return Promise.try(function(){return 1<o.readyState?t.load(o.result):new Promise(function(t,r){e=t,n=r,o.addEventListener("load",e),o.addEventListener("error",n)}).then(function(){return t.load(o.result)}).finally(function(){o.removeEventListener("load",e),o.removeEventListener("error",n)});var e,n})},t.loadImage=function(o){var t=this;return Promise.try(function(){return o.complete?t.fromImageSource(o):new Promise(function(t,r){e=t,n=r,o.addEventListener("load",e),o.addEventListener("error",n)}).then(function(){return t.fromImageSource(o)}).finally(function(){o.removeEventListener("load",e),o.removeEventListener("error",n)});var e,n})},t.loadInput=function(t){var r=this;return Promise.try(function(){return"file"===t.type?0<t.files.length?r.loadFile(t.files[0]):r.blank():r.load(t.value)})},t.loadString=function(r){var e=this;return Promise.try(function(){var t=new Image;return t.crossOrigin="anonymous",t.src=r,e.loadImage(t)})},t.prototype.crop=function(t,r,e,n){void 0===t&&(t=0),void 0===r&&(r=0);var o=this.width,i=this.height;if(t<0&&(t+=o),r<0&&(r+=i),c(e)?e=o:e<0&&(t-=e=-e),c(n)?n=i:n<0&&(r-=n=-n),0===t&&0===r&&e===o&&n===i)return this;if(0===e||0===n)return this.constructor.blank(e,n);var a=this.canvas,s=this.constructor.blankContext(e,n);return s.drawImage(a,-t,-r),new this.constructor(s)},t.prototype.cropAlign=function(t,r,e){void 0===e&&(e="");var n=this.width,o=this.height;if(c(t)&&(t=n),c(r)&&(r=o),t===n&&r===o)return this;if(0===n||0===o||0===t||0===r)return this.constructor.blank(t,r);switch(e){case"left top":return this.crop(0,0,t,r);case"left bottom":return this.crop(0,-r,t,r);case"left center":return this.crop(0,(o+r)/2,t,-r);case"right top":return this.crop(-t,0,t,r);case"right bottom":return this.crop(-t,-r,t,r);case"right center":return this.crop(-t,(o+r)/2,t,-r);case"center top":return this.crop((n+t)/2,0,-t,r);case"center bottom":return this.crop((n+t)/2,-r,-t,r)}return this.crop((n+t)/2,(o+r)/2,-t,-r)},t.prototype.cropMax=function(t,r,e,n){return this.scaleMax(t,r,n).cropAlign(t,r,e)},t.prototype.cropMin=function(t,r,e,n){return this.scaleMin(t,r,n).cropAlign(t,r,e)};var o=function(t,r,e){var n=this.width,o=this.height,i=r.width,a=r.height;if(0===n||0===o||0===i||0===a)return this;var s=r.clipAlign(n,o,e).canvas,c=this.canvas,u=this.constructor.blankContext(n,o);return t?(u.drawImage(s,0,0),u.drawImage(c,0,0)):(u.drawImage(c,0,0),u.drawImage(s,0,0)),new this.constructor(u)};t.prototype.drawForeground=n(o,!1),t.prototype.drawBackground=n(o,!0);var i=function(t,r){var e=this.width,n=this.height;if(0===e||0===n)return this;var o=this.canvas,i=this.constructor.blankContext(e,n);return i.save(),i.translate(t?e:0,r?n:0),i.scale(t?-1:1,r?-1:1),i.drawImage(o,0,0),i.restore(),new this.constructor(i)};t.prototype.flop=n(i,!0,!1),t.prototype.flip=n(i,!1,!0),t.prototype.rotate180=n(i,!0,!0);var a=function(t){var r=this.height,e=this.width;if(0===r||0===e)return r===e?this:this.constructor.blank(r,e);var n=this.canvas,o=this.constructor.blankContext(r,e);return o.save(),o.translate(r/2,e/2),o.rotate(Math.PI/(t?-2:2)),o.drawImage(n,e/-2,r/-2),o.restore(),new this.constructor(o)};t.prototype.rotate90=n(a,!1),t.prototype.rotate270=n(a,!0),t.prototype.scale=function(t,r){return this.resize(this.width*t,this.height*t,r)};var s=function(t,r,e,n){var o=this.width,i=this.height;if(c(r)&&(r=o),c(e)&&(e=i),r===o&&e===i)return this;if(0===o||0===i||0===r||0===e)return this.constructor.blank(r,e);var a=t(r/o,e/i);return this.scale(a,n)};return t.prototype.scaleMin=n(s,Math.min),t.prototype.scaleMax=n(s,Math.max),t.prototype.resize=function(t,r,e){if(void 0===e&&(e=2),c(t)&&c(r))return this;var n=this.width,o=this.height;if(c(t)?t=0===o?n:Math.round(n*r/o):c(r)&&(r=0===n?o:Math.round(o*t/n)),t===n&&r===o)return this;if(0===n||0===o||0===t||0===r)return this.constructor.blank(t,r);e<1&&(e=1/e);var i=this.canvas,a=this.constructor.blankContext(t,r);return a.save(),a.scale(t/n,r/o),a.drawImage(i,0,0),a.restore(),new this.constructor(a)},t.prototype.contain=t.prototype.cropMin,t.prototype.cover=t.prototype.cropMax,t});
