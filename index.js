!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).DearImage=e()}(this,(function(){"use strict";function t(t){return eval("require")(t)}function e(e,n){try{let{Canvas:r}=t("canvas");return new r(e,n)}catch{}throw new Error("Canvas is not supported.")}function n(t,e){try{return Object.assign(document.createElement("canvas"),{width:t,height:e})}catch{}throw new Error("HTMLCanvasElement is not supported.")}function r(t,e){try{return new OffscreenCanvas(t,e)}catch{}throw new Error("OffscreenCanvas is not supported.")}function i(...t){try{return n(...t)}catch{}try{return r(...t)}catch{}return e(...t)}function a(...t){return i(...t).getContext("2d")}class o{static is(t){return t instanceof this}constructor(t){this.context=t}get canvas(){return this.context.canvas}get sizeX(){return this.canvas.width}get sizeY(){return this.canvas.height}}function u(t){return t<0}function s(t){return!u(t)}function c(t){return Number.isFinite(t)&&s(t)}let f=t=>{if(c(t=Number(t)))return Math.round(t)};function l(e){try{let{CanvasGradient:n}=t("canvas");return e instanceof n}catch{}return!1}function h(t){let{CanvasGradient:e}=globalThis;return!!e&&t instanceof e||l(t)}function p(e){try{let{CanvasPattern:n}=t("canvas");return e instanceof n}catch{}return!1}function g(t){let{CanvasPattern:e}=globalThis;return!!e&&t instanceof e||p(t)}function m(t){let e=a(0,0),n=e.createLinearGradient(0,0,0,0);if(e.fillStyle=n,e.fillStyle=t,e.fillStyle!==n)return e.fillStyle}o.blank=function(t,e){return[t=0,e=0]=[f(t),f(e)],new this(a(t,e))};let d=function(t){return h(t)||g(t)?t:m(String(t))};function y(e){try{let{Canvas:n}=t("canvas");return e instanceof n}catch{}return!1}function w(t){let{HTMLCanvasElement:e}=globalThis;return!!e&&t instanceof e}function b(t){let{OffscreenCanvas:e}=globalThis;return!!e&&t instanceof e}function v(t){return w(t)||b(t)||y(t)}function z(t,e,n){let r=a(e,n);return e&&n&&r.drawImage(t,0,0),r}function M(t){return z(t,t.width,t.height)}function I({canvas:t}){return M(t)}function C(t){return z(t,t.naturalWidth,t.naturalHeight)}async function x(t){if(!t.complete)try{await new Promise((e,n)=>{t.onload=e,t.onerror=n})}finally{t.onload=null,t.onerror=null}}async function L(t){return await x(t),C(t)}function T(t){let{height:e,width:n}=t,r=a(n,e);return n&&e&&r.putImageData(t,0,0),r}function R(t){let{HTMLImageElement:e}=globalThis;return!!e&&t instanceof e}function X(e){try{let{Image:n}=t("canvas");return e instanceof n}catch{}return!1}function Y(t){return R(t)||X(t)}function O(e){try{let{ImageData:n}=t("canvas");return e instanceof n}catch{}return!1}function D(t){let{ImageData:e}=globalThis;return!!e&&t instanceof e||O(t)}function E(e){try{let{CanvasRenderingContext2D:n}=t("canvas");return e instanceof n}catch{}return!1}function U(t){let{CanvasRenderingContext2D:e}=globalThis;return!!e&&t instanceof e||E(t)}function N(t){let{ImageBitmapRenderingContext:e}=globalThis;return!!e&&t instanceof e}function k(t){let{WebGL2RenderingContext:e}=globalThis;return!!e&&t instanceof e}function S(t){let{WebGLRenderingContext:e}=globalThis;return!!e&&t instanceof e}function j(t){return U(t)||k(t)||S(t)||N(t)}function B(t){if(o.is(t))return I(t);if(D(t))return T(t);if(v(t))return M(t);if(j(t))return I(t);if(Y(t))return L(t);throw new Error("Failed to create a CanvasRenderingContext2D instance from the given value.")}function F(t){let{Blob:e}=globalThis;return!!e&&t instanceof e}function H(t){let{Buffer:e}=globalThis;return!!e&&t instanceof e}function P(t){return!t.size}function G(t){try{return Object.assign(new Image,{src:t})}catch{}throw new Error("HTMLImageElement is not supported.")}function W(e){try{let{Image:n}=t("canvas");return Object.assign(new n,{src:e})}catch{}throw new Error("Image is not supported.")}function A(...t){try{return G(...t)}catch{}return W(...t)}async function q(t){let e=A(t);return await L(e)}async function $(t){if(P(t))return a(0,0);let e=URL.createObjectURL(t);try{return await q(e)}finally{URL.revokeObjectURL(e)}}function J(t){return!t.length}async function K(t){return J(t)?a(0,0):await q(t)}async function Q(t){return await q(""+t)}async function V(t){return t.isEmpty()?a(0,0):await Q(t)}o.filled=function(t,e,n){t=d(t);let r=this.blank(e,n);if(({sizeX:e,sizeY:n}=r),t&&e&&n){let{context:i}=r;i.save(),i.fillStyle=t,i.fillRect(0,0,e,n),i.restore()}return r},o.flexLayout=function(){return this},o.from=function(t){if(this.is(t))return t;return new this(B(t))},o.gridLayout=function(){return this},o.isDearImage=o.is.bind(o);class Z{}function _(t){return t instanceof this}function tt(t){try{return this.parse(t),!0}catch{return!1}}function et(t){return"string"==typeof t}var nt=/^data:(.*?)(;base64)?,(.*)$/;function rt(t){if(et(t)){let e=nt.exec(t);if(e){let n=e[1],r=e[2],i=e[3];return Object.assign(new this,{type:n,encoded:r,data:i,toString:()=>t})}}throw new Error("Invalid data URL.")}var it={is:_,isString:tt,parse:rt};function at(){return!this.data}var ot={isEmpty:at};let{prototype:ut}=Z;async function st(t){try{let e=Z.parse(t);return await V(e)}catch{}return await q(t)}function ct(t){let{URL:e}=globalThis;return!!e&&t instanceof e}async function ft(t){return et(t)?await st(t):ct(t)?await Q(t):Z.is(t)?await V(t):H(t)?await K(t):F(t)?await $(t):Y(t)?await L(t):B(t)}Object.assign(Z,it),Object.assign(ut,ot),o.loadFrom=async function(t){if(this.is(t))return t;return new this(await ft(t))};let lt=function(t){if(t=Number(t),Number.isFinite(t))return Math.round(t)},ht=lt;function pt(t,...e){return function(...n){return t.call(this,...e,...n)}}o.prototype.crop=function(t,e,n,r){let{canvas:i,sizeX:a,sizeY:o}=this;if([n=a,r=o,t=0,e=0]=[ht(n),ht(r),lt(t),lt(e)],e<0&&(e+=o),t<0&&(t+=a),r<0&&(e+=r,r*=-1),n<0&&(t+=n,n*=-1),t||e||n!==a||r!==o){let u=this.constructor.blank(n,r);if(n&&r&&a&&o){let{context:n}=u;n.drawImage(i,-t,-e)}return u}return this},o.prototype.drawCheckeredBackground=function(){return this};let gt=function(t,e){let{canvas:n,sizeX:r,sizeY:i}=this;if(r&&i){let a=this.constructor.blank(r,i),{context:o}=a;return o.save(),o.translate(t?r:0,e?i:0),o.scale(t?-1:1,e?-1:1),o.drawImage(n,0,0),o.restore(),a}return this};Object.assign(o.prototype,{flipX:pt(gt,!0,!1),flipY:pt(gt,!1,!0)}),o.prototype.toImageData=function(){let{context:t,sizeX:e,sizeY:n}=this;return t.getImageData(0,0,e,n)},o.prototype.isBlank=function(){let{sizeX:t,sizeY:e}=this;return!(t&&e&&this.toImageData().data.some(t=>t))};let mt=function(t){if(c(t=Number(t)))return Math.round(t)},dt=function(t){if(et(t))return t.trim().toLowerCase()};o.prototype.reframe=function(t,e,n,r){let{sizeX:i,sizeY:a}=this;[n,r,t=i,e=a]=[dt(n),dt(r),mt(t),mt(e)];let o=(()=>{switch(n){case"start":return 0;case"end":return-t}return(i+t)/-2})(),u=(()=>{switch(r){case"start":return 0;case"end":return-e}return(a+e)/-2})();return this.crop(o,u,t,e)};let yt=function(t){if(c(t=Number(t)))return Math.round(t)};o.prototype.resize=function(t,e){let{canvas:n,sizeX:r,sizeY:i}=this;if([t=r,e=i]=[yt(t),yt(e)],t!==r||e!==i){let a=this.constructor.blank(t,e);if(t&&e&&r&&i){let o=t/r,u=e/i,{context:s}=a;s.save(),s.scale(o,u),s.drawImage(n,0,0),s.restore()}return a}return this};let wt=function(t){if(c(t=Number(t)))return t};o.prototype.rescale=function(t,e){let{sizeX:n,sizeY:r}=this;[t=1,e=1]=[wt(t),wt(e)];let i=n*t,a=r*e;return this.resize(i,a)},o.prototype.scale=function(t){return this.rescale(t,t)};let bt=function(t){if(c(t=Number(t)))return Math.round(t)},vt=function(t,e,n){let{sizeX:r,sizeY:i}=this;[e=r,n=i]=[bt(e),bt(n)];let a=[];if(e&&r){let t=e/r;a.push(t)}if(n&&i){let t=n/i;a.push(t)}if(a.length){let e=t(a);return this.scale(e)}return this};Object.assign(o.prototype,{scaleDownIn:pt(vt,t=>Math.min(Math.min(...t),1)),scaleDownOut:pt(vt,t=>Math.min(Math.max(...t),1)),scaleIn:pt(vt,t=>Math.min(...t)),scaleOut:pt(vt,t=>Math.max(...t)),scaleUpIn:pt(vt,t=>Math.max(Math.min(...t),1)),scaleUpOut:pt(vt,t=>Math.max(Math.max(...t),1))});let zt=function(t){if(c(t=Number(t)))return Math.round(t)};o.prototype.reframeScaleIn=function(t,e,n,r){let{sizeX:i,sizeY:a}=this;return[t=i,e=a]=[zt(t),zt(e)],this.scaleIn(t,e).reframe(t,e,n,r)};let Mt=function(t){if(c(t=Number(t)))return Math.round(t)};o.prototype.reframeScaleOut=function(t,e,n,r){let{sizeX:i,sizeY:a}=this;return[t=i,e=a]=[Mt(t),Mt(e)],this.scaleOut(t,e).reframe(t,e,n,r)};let It=function(t){if(c(t=Number(t)))return Math.round(t)};o.prototype.resizeX=function(t,e){let{sizeX:n,sizeY:r}=this;if([t=n]=[It(t)],e){let e=t/n;return this.scale(e)}return this.resize(t,r)};let Ct=function(t){if(c(t=Number(t)))return Math.round(t)};o.prototype.resizeY=function(t,e){let{sizeX:n,sizeY:r}=this;if([t=r]=[Ct(t)],e){let e=t/r;return this.scale(e)}return this.resize(n,t)};let xt=function(t){if(t=Number(t),Number.isFinite(t))return t%(2*Math.PI)};function Lt(t){let{length:e}=t,n=new Uint8Array(e);for(let r=0;r<e;r++)n[r]=t.charCodeAt(r);return n}function Tt(t){try{if(et(t)){let{URL:e}=globalThis;if(e){let{document:n}=globalThis;return n?new e(t,n.location.origin):new e(t)}}}catch{}throw new Error("Invalid URL.")}function Rt(t){try{return Tt(t),!0}catch{return!1}}return o.prototype.rotate=function(t){let{canvas:e,sizeX:n,sizeY:r}=this;if([t=0]=[xt(t)],t&&n&&r){let i=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),o=Math.round(n*i+r*a),u=Math.round(n*a+r*i),s=this.constructor.blank(o,u),{context:c}=s;return c.save(),c.translate(o/2,u/2),c.rotate(t),c.drawImage(e,-n/2,-r/2),c.restore(),s}return this},o.prototype.rotateClockwise=function(){return this.rotate(+Math.PI/2)},o.prototype.rotateCounterClockwise=function(){return this.rotate(-Math.PI/2)},o.prototype.toBuffer=function(...t){let{canvas:e,sizeX:n,sizeY:r}=this;return n&&r?e.toBuffer(...t):Buffer.alloc(0)},o.prototype.saveToFileSystem=function(e,...n){return new Promise((r,i)=>{let a=t("fs"),o=t("path"),u=this.toBuffer(...n);a.mkdir(o.dirname(e),{recursive:!0},t=>{t?i(t):a.writeFile(e,u,t=>{t?i(t):r()})})})},o.prototype.toDataURL=function(...t){let{canvas:e}=this;return e.toDataURL(...t)},o.prototype.toBlob=function(...t){let{data:e,type:n}=Z.parse(this.toDataURL(...t)),r=Lt(atob(e));return new Blob([r],{type:n})},o.prototype.toHTMLCanvasElement=function(){let{canvas:t,sizeX:e,sizeY:r}=this,i=n(e,r);return e&&r&&i.getContext("2d").drawImage(t,0,0),i},o.prototype.toHTMLImageElement=function(...t){return G(this.toDataURL(...t))},o.prototype.toOffscreenCanvas=function(){let{canvas:t,sizeX:e,sizeY:n}=this,i=r(e,n);return e&&n&&i.getContext("2d").drawImage(t,0,0),i},o.utils={},o.utils.isDataURL=function(t){return Z.isString(t)},o.utils.isURL=function(t){return ct(t)||Rt(t)},o}));
