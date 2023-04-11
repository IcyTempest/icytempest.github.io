(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ql(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Kl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Le(r)?T0(r):Kl(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Le(t))return t;if(Ae(t))return t}}const E0=/;(?![^(]*\))/g,_0=/:([^]+)/,C0=/\/\*.*?\*\//gs;function T0(t){const e={};return t.replace(C0,"").split(E0).forEach(n=>{if(n){const r=n.split(_0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gl(t){let e="";if(Le(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=Gl(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const S0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A0=ql(S0);function km(t){return!!t||t===""}const _O=t=>Le(t)?t:t==null?"":Y(t)||Ae(t)&&(t.toString===Rm||!te(t.toString))?JSON.stringify(t,Om,2):String(t),Om=(t,e)=>e&&e.__v_isRef?Om(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Dm(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!Y(e)&&!Pm(e)?String(e):e,_e={},Rr=[],Mt=()=>{},x0=()=>!1,I0=/^on[^a-z]/,sa=t=>I0.test(t),Wl=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k0=Object.prototype.hasOwnProperty,ue=(t,e)=>k0.call(t,e),Y=Array.isArray,Pr=t=>oa(t)==="[object Map]",Dm=t=>oa(t)==="[object Set]",te=t=>typeof t=="function",Le=t=>typeof t=="string",Ql=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Nm=t=>Ae(t)&&te(t.then)&&te(t.catch),Rm=Object.prototype.toString,oa=t=>Rm.call(t),O0=t=>oa(t).slice(8,-1),Pm=t=>oa(t)==="[object Object]",Xl=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mo=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},D0=/-(\w)/g,Yt=aa(t=>t.replace(D0,(e,n)=>n?n.toUpperCase():"")),N0=/\B([A-Z])/g,ti=aa(t=>t.replace(N0,"-$1").toLowerCase()),ds=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),nc=aa(t=>t?`on${ds(t)}`:""),Bi=(t,e)=>!Object.is(t,e),po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$c=t=>{const e=parseFloat(t);return isNaN(e)?t:e},R0=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let Lf;const P0=()=>Lf||(Lf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vt;class Lm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function L0(t){return new Lm(t)}function M0(t,e=vt){e&&e.active&&e.effects.push(t)}function F0(){return vt}function $0(t){vt&&vt.cleanups.push(t)}const Jl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mm=t=>(t.w&Dn)>0,Fm=t=>(t.n&Dn)>0,B0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},U0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Mm(i)&&!Fm(i)?i.delete(t):e[n++]=i,i.w&=~Dn,i.n&=~Dn}e.length=n}},Ao=new WeakMap;let Ei=0,Dn=1;const Bc=30;let Nt;const ar=Symbol(""),Uc=Symbol("");class Zl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,M0(this,r)}run(){if(!this.active)return this.fn();let e=Nt,n=Tn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Tn=!0,Dn=1<<++Ei,Ei<=Bc?B0(this):Mf(this),this.fn()}finally{Ei<=Bc&&U0(this),Dn=1<<--Ei,Nt=this.parent,Tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Mf(this),this.onStop&&this.onStop(),this.active=!1)}}function Mf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tn=!0;const $m=[];function ni(){$m.push(Tn),Tn=!1}function ri(){const t=$m.pop();Tn=t===void 0?!0:t}function pt(t,e,n){if(Tn&&Nt){let r=Ao.get(t);r||Ao.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Jl()),Bm(i)}}function Bm(t,e){let n=!1;Ei<=Bc?Fm(t)||(t.n|=Dn,n=!Mm(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function sn(t,e,n,r,i,s){const o=Ao.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Xl(n)&&a.push(o.get("length")):(a.push(o.get(ar)),Pr(t)&&a.push(o.get(Uc)));break;case"delete":Y(t)||(a.push(o.get(ar)),Pr(t)&&a.push(o.get(Uc)));break;case"set":Pr(t)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&Vc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Vc(Jl(c))}}function Vc(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&Ff(r);for(const r of n)r.computed||Ff(r)}function Ff(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function V0(t,e){var n;return(n=Ao.get(t))===null||n===void 0?void 0:n.get(e)}const j0=ql("__proto__,__v_isRef,__isVue"),Um=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ql)),z0=eu(),H0=eu(!1,!0),q0=eu(!0),$f=K0();function K0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let s=0,o=this.length;s<o;s++)pt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(oe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ni();const r=oe(this)[e].apply(this,n);return ri(),r}}),t}function G0(t){const e=oe(this);return pt(e,"has",t),e.hasOwnProperty(t)}function eu(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?lb:qm:e?Hm:zm).get(r))return r;const o=Y(r);if(!t){if(o&&ue($f,i))return Reflect.get($f,i,s);if(i==="hasOwnProperty")return G0}const a=Reflect.get(r,i,s);return(Ql(i)?Um.has(i):j0(i))||(t||pt(r,"get",i),e)?a:Ke(a)?o&&Xl(i)?a:a.value:Ae(a)?t?Km(a):Zt(a):a}}const W0=Vm(),Y0=Vm(!0);function Vm(t=!1){return function(n,r,i,s){let o=n[r];if(jr(o)&&Ke(o)&&!Ke(i))return!1;if(!t&&(!xo(i)&&!jr(i)&&(o=oe(o),i=oe(i)),!Y(n)&&Ke(o)&&!Ke(i)))return o.value=i,!0;const a=Y(n)&&Xl(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,i,s);return n===oe(s)&&(a?Bi(i,o)&&sn(n,"set",r,i):sn(n,"add",r,i)),c}}function Q0(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&sn(t,"delete",e,void 0),r}function X0(t,e){const n=Reflect.has(t,e);return(!Ql(e)||!Um.has(e))&&pt(t,"has",e),n}function J0(t){return pt(t,"iterate",Y(t)?"length":ar),Reflect.ownKeys(t)}const jm={get:z0,set:W0,deleteProperty:Q0,has:X0,ownKeys:J0},Z0={get:q0,set(t,e){return!0},deleteProperty(t,e){return!0}},eb=Ge({},jm,{get:H0,set:Y0}),tu=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Ms(t,e,n=!1,r=!1){t=t.__v_raw;const i=oe(t),s=oe(e);n||(e!==s&&pt(i,"get",e),pt(i,"get",s));const{has:o}=ca(i),a=r?tu:n?iu:Ui;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Fs(t,e=!1){const n=this.__v_raw,r=oe(n),i=oe(t);return e||(t!==i&&pt(r,"has",t),pt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function $s(t,e=!1){return t=t.__v_raw,!e&&pt(oe(t),"iterate",ar),Reflect.get(t,"size",t)}function Bf(t){t=oe(t);const e=oe(this);return ca(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Uf(t,e){e=oe(e);const n=oe(this),{has:r,get:i}=ca(n);let s=r.call(n,t);s||(t=oe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Bi(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Vf(t){const e=oe(this),{has:n,get:r}=ca(e);let i=n.call(e,t);i||(t=oe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&sn(e,"delete",t,void 0),s}function jf(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function Bs(t,e){return function(r,i){const s=this,o=s.__v_raw,a=oe(o),c=e?tu:t?iu:Ui;return!t&&pt(a,"iterate",ar),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Us(t,e,n){return function(...r){const i=this.__v_raw,s=oe(i),o=Pr(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?tu:e?iu:Ui;return!e&&pt(s,"iterate",c?Uc:ar),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:this}}function tb(){const t={get(s){return Ms(this,s)},get size(){return $s(this)},has:Fs,add:Bf,set:Uf,delete:Vf,clear:jf,forEach:Bs(!1,!1)},e={get(s){return Ms(this,s,!1,!0)},get size(){return $s(this)},has:Fs,add:Bf,set:Uf,delete:Vf,clear:jf,forEach:Bs(!1,!0)},n={get(s){return Ms(this,s,!0)},get size(){return $s(this,!0)},has(s){return Fs.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Bs(!0,!1)},r={get(s){return Ms(this,s,!0,!0)},get size(){return $s(this,!0)},has(s){return Fs.call(this,s,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Us(s,!1,!1),n[s]=Us(s,!0,!1),e[s]=Us(s,!1,!0),r[s]=Us(s,!0,!0)}),[t,n,e,r]}const[nb,rb,ib,sb]=tb();function nu(t,e){const n=e?t?sb:ib:t?rb:nb;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ue(n,i)&&i in r?n:r,i,s)}const ob={get:nu(!1,!1)},ab={get:nu(!1,!0)},cb={get:nu(!0,!1)},zm=new WeakMap,Hm=new WeakMap,qm=new WeakMap,lb=new WeakMap;function ub(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fb(t){return t.__v_skip||!Object.isExtensible(t)?0:ub(O0(t))}function Zt(t){return jr(t)?t:ru(t,!1,jm,ob,zm)}function hb(t){return ru(t,!1,eb,ab,Hm)}function Km(t){return ru(t,!0,Z0,cb,qm)}function ru(t,e,n,r,i){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=fb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Lr(t){return jr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function jr(t){return!!(t&&t.__v_isReadonly)}function xo(t){return!!(t&&t.__v_isShallow)}function Gm(t){return Lr(t)||jr(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Wm(t){return So(t,"__v_skip",!0),t}const Ui=t=>Ae(t)?Zt(t):t,iu=t=>Ae(t)?Km(t):t;function Ym(t){Tn&&Nt&&(t=oe(t),Bm(t.dep||(t.dep=Jl())))}function Qm(t,e){t=oe(t);const n=t.dep;n&&Vc(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function St(t){return Xm(t,!1)}function su(t){return Xm(t,!0)}function Xm(t,e){return Ke(t)?t:new db(t,e)}class db{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Ui(e)}get value(){return Ym(this),this._value}set value(e){const n=this.__v_isShallow||xo(e)||jr(e);e=n?e:oe(e),Bi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ui(e),Qm(this))}}function Kt(t){return Ke(t)?t.value:t}const mb={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ke(i)&&!Ke(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Jm(t){return Lr(t)?t:new Proxy(t,mb)}function Zm(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=gb(t,n);return e}class pb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return V0(oe(this._object),this._key)}}function gb(t,e,n){const r=t[e];return Ke(r)?r:new pb(t,e,n)}var ep;class yb{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ep]=!1,this._dirty=!0,this.effect=new Zl(e,()=>{this._dirty||(this._dirty=!0,Qm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=oe(this);return Ym(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ep="__v_isReadonly";function vb(t,e,n=!1){let r,i;const s=te(t);return s?(r=t,i=Mt):(r=t.get,i=t.set),new yb(r,i,s||!i,n)}function Sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){la(s,e,n)}return i}function At(t,e,n,r){if(te(t)){const s=Sn(t,e,n,r);return s&&Nm(s)&&s.catch(o=>{la(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(At(t[s],e,n,r));return i}function la(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}bb(t,n,i,r)}function bb(t,e,n,r=!0){console.error(t)}let Vi=!1,jc=!1;const rt=[];let Ht=0;const Mr=[];let nn=null,Xn=0;const tp=Promise.resolve();let ou=null;function au(t){const e=ou||tp;return t?e.then(this?t.bind(this):t):e}function wb(t){let e=Ht+1,n=rt.length;for(;e<n;){const r=e+n>>>1;ji(rt[r])<t?e=r+1:n=r}return e}function cu(t){(!rt.length||!rt.includes(t,Vi&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?rt.push(t):rt.splice(wb(t.id),0,t),np())}function np(){!Vi&&!jc&&(jc=!0,ou=tp.then(ip))}function Eb(t){const e=rt.indexOf(t);e>Ht&&rt.splice(e,1)}function _b(t){Y(t)?Mr.push(...t):(!nn||!nn.includes(t,t.allowRecurse?Xn+1:Xn))&&Mr.push(t),np()}function zf(t,e=Vi?Ht+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function rp(t){if(Mr.length){const e=[...new Set(Mr)];if(Mr.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,r)=>ji(n)-ji(r)),Xn=0;Xn<nn.length;Xn++)nn[Xn]();nn=null,Xn=0}}const ji=t=>t.id==null?1/0:t.id,Cb=(t,e)=>{const n=ji(t)-ji(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ip(t){jc=!1,Vi=!0,rt.sort(Cb);const e=Mt;try{for(Ht=0;Ht<rt.length;Ht++){const n=rt[Ht];n&&n.active!==!1&&Sn(n,null,14)}}finally{Ht=0,rt.length=0,rp(),Vi=!1,ou=null,(rt.length||Mr.length)&&ip()}}function Tb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||_e;h&&(i=n.map(d=>Le(d)?d.trim():d)),f&&(i=n.map($c))}let a,c=r[a=nc(e)]||r[a=nc(Yt(e))];!c&&s&&(c=r[a=nc(ti(e))]),c&&At(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(l,t,6,i)}}function sp(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=sp(l,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ae(t)&&r.set(t,null),null):(Y(s)?s.forEach(c=>o[c]=null):Ge(o,s),Ae(t)&&r.set(t,o),o)}function ua(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,ti(e))||ue(t,e))}let bt=null,op=null;function Io(t){const e=bt;return bt=t,op=t&&t.type.__scopeId||null,e}function Sb(t,e=bt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Zf(-1);const s=Io(e);let o;try{o=t(...i)}finally{Io(s),r._d&&Zf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:d,ctx:p,inheritAttrs:y}=t;let C,v;const w=Io(t);try{if(n.shapeFlag&4){const M=i||r;C=zt(u.call(M,M,f,s,d,h,p)),v=c}else{const M=e;C=zt(M.length>1?M(s,{attrs:c,slots:a,emit:l}):M(s,null)),v=e.props?c:Ab(c)}}catch(M){xi.length=0,la(M,t,1),C=Pe(Ft)}let S=C;if(v&&y!==!1){const M=Object.keys(v),{shapeFlag:q}=S;M.length&&q&7&&(o&&M.some(Wl)&&(v=xb(v,o)),S=Nn(S,v))}return n.dirs&&(S=Nn(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),C=S,Io(w),C}const Ab=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},xb=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ib(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ua(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hf(r,o,l):!0:!!o;return!1}function Hf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ua(n,s))return!0}return!1}function kb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ob=t=>t.__isSuspense;function Db(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):_b(t)}function Fr(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=Re||bt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(r.proxy):e}}function fa(t,e){return lu(t,null,e)}const Vs={};function xt(t,e,n){return lu(t,e,n)}function lu(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=_e){const a=F0()===(Re==null?void 0:Re.scope)?Re:null;let c,l=!1,u=!1;if(Ke(t)?(c=()=>t.value,l=xo(t)):Lr(t)?(c=()=>t,r=!0):Y(t)?(u=!0,l=t.some(S=>Lr(S)||xo(S)),c=()=>t.map(S=>{if(Ke(S))return S.value;if(Lr(S))return er(S);if(te(S))return Sn(S,a,2)})):te(t)?e?c=()=>Sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),At(t,a,3,[h])}:c=Mt,e&&r){const S=c;c=()=>er(S())}let f,h=S=>{f=v.onStop=()=>{Sn(S,a,4)}},d;if(Ki)if(h=Mt,e?n&&At(e,a,3,[c(),u?[]:void 0,h]):c(),i==="sync"){const S=_w();d=S.__watcherHandles||(S.__watcherHandles=[])}else return Mt;let p=u?new Array(t.length).fill(Vs):Vs;const y=()=>{if(!!v.active)if(e){const S=v.run();(r||l||(u?S.some((M,q)=>Bi(M,p[q])):Bi(S,p)))&&(f&&f(),At(e,a,3,[S,p===Vs?void 0:u&&p[0]===Vs?[]:p,h]),p=S)}else v.run()};y.allowRecurse=!!e;let C;i==="sync"?C=y:i==="post"?C=()=>ht(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),C=()=>cu(y));const v=new Zl(c,C);e?n?y():p=v.run():i==="post"?ht(v.run.bind(v),a&&a.suspense):v.run();const w=()=>{v.stop(),a&&a.scope&&Yl(a.scope.effects,v)};return d&&d.push(w),w}function Nb(t,e,n){const r=this.proxy,i=Le(t)?t.includes(".")?ap(r,t):()=>r[t]:t.bind(r,r);let s;te(e)?s=e:(s=e.handler,n=e);const o=Re;zr(this);const a=lu(i,s.bind(r),n);return o?zr(o):cr(),a}function ap(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function er(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))er(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)er(t[n],e);else if(Dm(t)||Pr(t))t.forEach(n=>{er(n,e)});else if(Pm(t))for(const n in t)er(t[n],e);return t}function cp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hp(()=>{t.isMounted=!0}),mp(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],Rb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=ga(),r=cp();let i;return()=>{const s=e.default&&uu(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==Ft){o=y;break}}const a=oe(t),{mode:c}=a;if(r.isLeaving)return ic(o);const l=qf(o);if(!l)return ic(o);const u=zi(l,a,r,n);Hi(l,u);const f=n.subTree,h=f&&qf(f);let d=!1;const{getTransitionKey:p}=l.type;if(p){const y=p();i===void 0?i=y:y!==i&&(i=y,d=!0)}if(h&&h.type!==Ft&&(!Jn(l,h)||d)){const y=zi(h,a,r,n);if(Hi(h,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ic(o);c==="in-out"&&l.type!==Ft&&(y.delayLeave=(C,v,w)=>{const S=up(r,h);S[String(h.key)]=h,C._leaveCb=()=>{v(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},lp=Rb;function up(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zi(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:y,onAppear:C,onAfterAppear:v,onAppearCancelled:w}=e,S=String(t.key),M=up(n,t),q=(W,ae)=>{W&&At(W,r,9,ae)},fe=(W,ae)=>{const de=ae[1];q(W,ae),Y(W)?W.every(Be=>Be.length<=1)&&de():W.length<=1&&de()},he={mode:s,persisted:o,beforeEnter(W){let ae=a;if(!n.isMounted)if(i)ae=y||a;else return;W._leaveCb&&W._leaveCb(!0);const de=M[S];de&&Jn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),q(ae,[W])},enter(W){let ae=c,de=l,Be=u;if(!n.isMounted)if(i)ae=C||c,de=v||l,Be=w||u;else return;let F=!1;const Ee=W._enterCb=Ye=>{F||(F=!0,Ye?q(Be,[W]):q(de,[W]),he.delayedLeave&&he.delayedLeave(),W._enterCb=void 0)};ae?fe(ae,[W,Ee]):Ee()},leave(W,ae){const de=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return ae();q(f,[W]);let Be=!1;const F=W._leaveCb=Ee=>{Be||(Be=!0,ae(),Ee?q(p,[W]):q(d,[W]),W._leaveCb=void 0,M[de]===t&&delete M[de])};M[de]=t,h?fe(h,[W,F]):F()},clone(W){return zi(W,e,n,r)}};return he}function ic(t){if(ha(t))return t=Nn(t),t.children=null,t}function qf(t){return ha(t)?t.children?t.children[0]:void 0:t}function Hi(t,e){t.shapeFlag&6&&t.component?Hi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uu(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&i++,r=r.concat(uu(o.children,e,a))):(e||o.type!==Ft)&&r.push(a!=null?Nn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ii(t){return te(t)?{setup:t,name:t.name}:t}const go=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function Pb(t,e){fp(t,"a",e)}function Lb(t,e){fp(t,"da",e)}function fp(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(da(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ha(i.parent.vnode)&&Mb(r,e,n,i),i=i.parent}}function Mb(t,e,n,r){const i=da(e,t,r,!0);pp(()=>{Yl(r[e],i)},n)}function da(t,e,n=Re,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ni(),zr(n);const a=At(e,n,t,o);return cr(),ri(),a});return r?i.unshift(s):i.push(s),s}}const mn=t=>(e,n=Re)=>(!Ki||t==="sp")&&da(t,(...r)=>e(...r),n),Fb=mn("bm"),hp=mn("m"),$b=mn("bu"),dp=mn("u"),mp=mn("bum"),pp=mn("um"),Bb=mn("sp"),Ub=mn("rtg"),Vb=mn("rtc");function jb(t,e=Re){da("ec",t,e)}function CO(t,e){const n=bt;if(n===null)return t;const r=ya(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=_e]=e[s];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&er(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function qn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ni(),At(c,n,8,[t.el,a,t,e]),ri())}}const fu="components",zb="directives";function Hb(t,e){return hu(fu,t,!0,e)||t}const gp=Symbol();function TO(t){return Le(t)?hu(fu,t,!1)||t:t||gp}function SO(t){return hu(zb,t)}function hu(t,e,n=!0,r=!1){const i=bt||Re;if(i){const s=i.type;if(t===fu){const a=bw(s,!1);if(a&&(a===e||a===Yt(e)||a===ds(Yt(e))))return s}const o=Kf(i[t]||s[t],e)||Kf(i.appContext[t],e);return!o&&r?s:o}}function Kf(t,e){return t&&(t[e]||t[Yt(e)]||t[ds(Yt(e))])}function AO(t,e,n,r){let i;const s=n&&n[r];if(Y(t)||Le(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const zc=t=>t?Dp(t)?ya(t)||t.proxy:zc(t.parent):null,Ai=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zc(t.parent),$root:t=>zc(t.root),$emit:t=>t.emit,$options:t=>du(t),$forceUpdate:t=>t.f||(t.f=()=>cu(t.update)),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>Nb.bind(t)}),sc=(t,e)=>t!==_e&&!t.__isScriptSetup&&ue(t,e),qb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(sc(r,e))return o[e]=1,r[e];if(i!==_e&&ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,s[e];if(n!==_e&&ue(n,e))return o[e]=4,n[e];Hc&&(o[e]=0)}}const u=Ai[e];let f,h;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==_e&&ue(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,ue(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return sc(i,e)?(i[e]=n,!0):r!==_e&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==_e&&ue(t,o)||sc(e,o)||(a=s[0])&&ue(a,o)||ue(r,o)||ue(Ai,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hc=!0;function Kb(t){const e=du(t),n=t.proxy,r=t.ctx;Hc=!1,e.beforeCreate&&Gf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:y,deactivated:C,beforeDestroy:v,beforeUnmount:w,destroyed:S,unmounted:M,render:q,renderTracked:fe,renderTriggered:he,errorCaptured:W,serverPrefetch:ae,expose:de,inheritAttrs:Be,components:F,directives:Ee,filters:Ye}=e;if(l&&Gb(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const ye=o[be];te(ye)&&(r[be]=ye.bind(n))}if(i){const be=i.call(n,n);Ae(be)&&(t.data=Zt(be))}if(Hc=!0,s)for(const be in s){const ye=s[be],It=te(ye)?ye.bind(n,n):te(ye.get)?ye.get.bind(n,n):Mt,Hn=!te(ye)&&te(ye.set)?ye.set.bind(n):Mt,kt=ne({get:It,set:Hn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>kt.value,set:ut=>kt.value=ut})}if(a)for(const be in a)yp(a[be],r,n,be);if(c){const be=te(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ye=>{Fr(ye,be[ye])})}u&&Gf(u,t,"c");function ke(be,ye){Y(ye)?ye.forEach(It=>be(It.bind(n))):ye&&be(ye.bind(n))}if(ke(Fb,f),ke(hp,h),ke($b,d),ke(dp,p),ke(Pb,y),ke(Lb,C),ke(jb,W),ke(Vb,fe),ke(Ub,he),ke(mp,w),ke(pp,M),ke(Bb,ae),Y(de))if(de.length){const be=t.exposed||(t.exposed={});de.forEach(ye=>{Object.defineProperty(be,ye,{get:()=>n[ye],set:It=>n[ye]=It})})}else t.exposed||(t.exposed={});q&&t.render===Mt&&(t.render=q),Be!=null&&(t.inheritAttrs=Be),F&&(t.components=F),Ee&&(t.directives=Ee)}function Gb(t,e,n=Mt,r=!1){Y(t)&&(t=qc(t));for(const i in t){const s=t[i];let o;Ae(s)?"default"in s?o=mt(s.from||i,s.default,!0):o=mt(s.from||i):o=mt(s),Ke(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Gf(t,e,n){At(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yp(t,e,n,r){const i=r.includes(".")?ap(n,r):()=>n[r];if(Le(t)){const s=e[t];te(s)&&xt(i,s)}else if(te(t))xt(i,t.bind(n));else if(Ae(t))if(Y(t))t.forEach(s=>yp(s,e,n,r));else{const s=te(t.handler)?t.handler.bind(n):e[t.handler];te(s)&&xt(i,s,t)}}function du(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>ko(c,l,o,!0)),ko(c,e,o)),Ae(e)&&s.set(e,c),c}function ko(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ko(t,s,n,!0),i&&i.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wb={data:Wf,props:Yn,emits:Yn,methods:Yn,computed:Yn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:Yn,directives:Yn,watch:Qb,provide:Wf,inject:Yb};function Wf(t,e){return e?t?function(){return Ge(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Yb(t,e){return Yn(qc(t),qc(e))}function qc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Yn(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function Qb(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function Xb(t,e,n,r=!1){const i={},s={};So(s,pa,1),t.propsDefaults=Object.create(null),vp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:hb(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Jb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=oe(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ua(t.emitsOptions,h))continue;const d=e[h];if(c)if(ue(s,h))d!==s[h]&&(s[h]=d,l=!0);else{const p=Yt(h);i[p]=Kc(c,a,p,d,t,!1)}else d!==s[h]&&(s[h]=d,l=!0)}}}else{vp(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!ue(e,f)&&((u=ti(f))===f||!ue(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Kc(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ue(e,f)&&!0)&&(delete s[f],l=!0)}l&&sn(t,"set","$attrs")}function vp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const l=e[c];let u;i&&ue(i,u=Yt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:ua(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=oe(n),l=a||_e;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Kc(i,c,f,l[f],t,!ue(l,f))}}return o}function Kc(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(zr(i),r=l[n]=c.call(null,e),cr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ti(n))&&(r=!0))}return r}function bp(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!te(t)){const u=f=>{c=!0;const[h,d]=bp(f,e,!0);Ge(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Ae(t)&&r.set(t,Rr),Rr;if(Y(s))for(let u=0;u<s.length;u++){const f=Yt(s[u]);Yf(f)&&(o[f]=_e)}else if(s)for(const u in s){const f=Yt(u);if(Yf(f)){const h=s[u],d=o[f]=Y(h)||te(h)?{type:h}:Object.assign({},h);if(d){const p=Jf(Boolean,d.type),y=Jf(String,d.type);d[0]=p>-1,d[1]=y<0||p<y,(p>-1||ue(d,"default"))&&a.push(f)}}}const l=[o,a];return Ae(t)&&r.set(t,l),l}function Yf(t){return t[0]!=="$"}function Qf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xf(t,e){return Qf(t)===Qf(e)}function Jf(t,e){return Y(e)?e.findIndex(n=>Xf(n,t)):te(e)&&Xf(e,t)?0:-1}const wp=t=>t[0]==="_"||t==="$stable",mu=t=>Y(t)?t.map(zt):[zt(t)],Zb=(t,e,n)=>{if(e._n)return e;const r=Sb((...i)=>mu(e(...i)),n);return r._c=!1,r},Ep=(t,e,n)=>{const r=t._ctx;for(const i in t){if(wp(i))continue;const s=t[i];if(te(s))e[i]=Zb(i,s,r);else if(s!=null){const o=mu(s);e[i]=()=>o}}},_p=(t,e)=>{const n=mu(e);t.slots.default=()=>n},ew=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),So(e,"_",n)):Ep(e,t.slots={})}else t.slots={},e&&_p(t,e);So(t.slots,pa,1)},tw=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ge(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ep(e,i)),o=e}else e&&(_p(t,e),o={default:1});if(s)for(const a in i)!wp(a)&&!(a in o)&&delete i[a]};function Cp(){return{app:null,config:{isNativeTag:x0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nw=0;function rw(t,e){return function(r,i=null){te(r)||(r=Object.assign({},r)),i!=null&&!Ae(i)&&(i=null);const s=Cp(),o=new Set;let a=!1;const c=s.app={_uid:nw++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Cw,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=Pe(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,ya(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Gc(t,e,n,r,i=!1){if(Y(t)){t.forEach((h,d)=>Gc(h,e&&(Y(e)?e[d]:e),n,r,i));return}if(go(r)&&!i)return;const s=r.shapeFlag&4?ya(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,ue(f,l)&&(f[l]=null)):Ke(l)&&(l.value=null)),te(c))Sn(c,a,12,[o,u]);else{const h=Le(c),d=Ke(c);if(h||d){const p=()=>{if(t.f){const y=h?ue(f,c)?f[c]:u[c]:c.value;i?Y(y)&&Yl(y,s):Y(y)?y.includes(s)||y.push(s):h?(u[c]=[s],ue(f,c)&&(f[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,ue(f,c)&&(f[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,ht(p,n)):p()}}}const ht=Db;function iw(t){return sw(t)}function sw(t,e){const n=P0();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Mt,insertStaticContent:p}=t,y=(m,g,b,E=null,T=null,O=null,R=!1,k=null,D=!!g.dynamicChildren)=>{if(m===g)return;m&&!Jn(m,g)&&(E=N(m),ut(m,T,O,!0),m=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:A,ref:z,shapeFlag:$}=g;switch(A){case ma:C(m,g,b,E);break;case Ft:v(m,g,b,E);break;case oc:m==null&&w(g,b,E,R);break;case Dt:F(m,g,b,E,T,O,R,k,D);break;default:$&1?q(m,g,b,E,T,O,R,k,D):$&6?Ee(m,g,b,E,T,O,R,k,D):($&64||$&128)&&A.process(m,g,b,E,T,O,R,k,D,le)}z!=null&&T&&Gc(z,m&&m.ref,O,g||m,!g)},C=(m,g,b,E)=>{if(m==null)r(g.el=a(g.children),b,E);else{const T=g.el=m.el;g.children!==m.children&&l(T,g.children)}},v=(m,g,b,E)=>{m==null?r(g.el=c(g.children||""),b,E):g.el=m.el},w=(m,g,b,E)=>{[m.el,m.anchor]=p(m.children,g,b,E,m.el,m.anchor)},S=({el:m,anchor:g},b,E)=>{let T;for(;m&&m!==g;)T=h(m),r(m,b,E),m=T;r(g,b,E)},M=({el:m,anchor:g})=>{let b;for(;m&&m!==g;)b=h(m),i(m),m=b;i(g)},q=(m,g,b,E,T,O,R,k,D)=>{R=R||g.type==="svg",m==null?fe(g,b,E,T,O,R,k,D):ae(m,g,T,O,R,k,D)},fe=(m,g,b,E,T,O,R,k)=>{let D,A;const{type:z,props:$,shapeFlag:H,transition:J,dirs:ie}=m;if(D=m.el=o(m.type,O,$&&$.is,$),H&8?u(D,m.children):H&16&&W(m.children,D,null,E,T,O&&z!=="foreignObject",R,k),ie&&qn(m,null,E,"created"),he(D,m,m.scopeId,R,E),$){for(const ve in $)ve!=="value"&&!mo(ve)&&s(D,ve,null,$[ve],O,m.children,E,T,P);"value"in $&&s(D,"value",null,$.value),(A=$.onVnodeBeforeMount)&&jt(A,E,m)}ie&&qn(m,null,E,"beforeMount");const we=(!T||T&&!T.pendingBranch)&&J&&!J.persisted;we&&J.beforeEnter(D),r(D,g,b),((A=$&&$.onVnodeMounted)||we||ie)&&ht(()=>{A&&jt(A,E,m),we&&J.enter(D),ie&&qn(m,null,E,"mounted")},T)},he=(m,g,b,E,T)=>{if(b&&d(m,b),E)for(let O=0;O<E.length;O++)d(m,E[O]);if(T){let O=T.subTree;if(g===O){const R=T.vnode;he(m,R,R.scopeId,R.slotScopeIds,T.parent)}}},W=(m,g,b,E,T,O,R,k,D=0)=>{for(let A=D;A<m.length;A++){const z=m[A]=k?_n(m[A]):zt(m[A]);y(null,z,g,b,E,T,O,R,k)}},ae=(m,g,b,E,T,O,R)=>{const k=g.el=m.el;let{patchFlag:D,dynamicChildren:A,dirs:z}=g;D|=m.patchFlag&16;const $=m.props||_e,H=g.props||_e;let J;b&&Kn(b,!1),(J=H.onVnodeBeforeUpdate)&&jt(J,b,g,m),z&&qn(g,m,b,"beforeUpdate"),b&&Kn(b,!0);const ie=T&&g.type!=="foreignObject";if(A?de(m.dynamicChildren,A,k,b,E,ie,O):R||ye(m,g,k,null,b,E,ie,O,!1),D>0){if(D&16)Be(k,g,$,H,b,E,T);else if(D&2&&$.class!==H.class&&s(k,"class",null,H.class,T),D&4&&s(k,"style",$.style,H.style,T),D&8){const we=g.dynamicProps;for(let ve=0;ve<we.length;ve++){const Me=we[ve],Ot=$[Me],Er=H[Me];(Er!==Ot||Me==="value")&&s(k,Me,Ot,Er,T,m.children,b,E,P)}}D&1&&m.children!==g.children&&u(k,g.children)}else!R&&A==null&&Be(k,g,$,H,b,E,T);((J=H.onVnodeUpdated)||z)&&ht(()=>{J&&jt(J,b,g,m),z&&qn(g,m,b,"updated")},E)},de=(m,g,b,E,T,O,R)=>{for(let k=0;k<g.length;k++){const D=m[k],A=g[k],z=D.el&&(D.type===Dt||!Jn(D,A)||D.shapeFlag&70)?f(D.el):b;y(D,A,z,null,E,T,O,R,!0)}},Be=(m,g,b,E,T,O,R)=>{if(b!==E){if(b!==_e)for(const k in b)!mo(k)&&!(k in E)&&s(m,k,b[k],null,R,g.children,T,O,P);for(const k in E){if(mo(k))continue;const D=E[k],A=b[k];D!==A&&k!=="value"&&s(m,k,A,D,R,g.children,T,O,P)}"value"in E&&s(m,"value",b.value,E.value)}},F=(m,g,b,E,T,O,R,k,D)=>{const A=g.el=m?m.el:a(""),z=g.anchor=m?m.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:J}=g;J&&(k=k?k.concat(J):J),m==null?(r(A,b,E),r(z,b,E),W(g.children,b,z,T,O,R,k,D)):$>0&&$&64&&H&&m.dynamicChildren?(de(m.dynamicChildren,H,b,T,O,R,k),(g.key!=null||T&&g===T.subTree)&&Tp(m,g,!0)):ye(m,g,b,z,T,O,R,k,D)},Ee=(m,g,b,E,T,O,R,k,D)=>{g.slotScopeIds=k,m==null?g.shapeFlag&512?T.ctx.activate(g,b,E,R,D):Ye(g,b,E,T,O,R,D):gn(m,g,D)},Ye=(m,g,b,E,T,O,R)=>{const k=m.component=mw(m,E,T);if(ha(m)&&(k.ctx.renderer=le),pw(k),k.asyncDep){if(T&&T.registerDep(k,ke),!m.el){const D=k.subTree=Pe(Ft);v(null,D,g,b)}return}ke(k,m,g,b,T,O,R)},gn=(m,g,b)=>{const E=g.component=m.component;if(Ib(m,g,b))if(E.asyncDep&&!E.asyncResolved){be(E,g,b);return}else E.next=g,Eb(E.update),E.update();else g.el=m.el,E.vnode=g},ke=(m,g,b,E,T,O,R)=>{const k=()=>{if(m.isMounted){let{next:z,bu:$,u:H,parent:J,vnode:ie}=m,we=z,ve;Kn(m,!1),z?(z.el=ie.el,be(m,z,R)):z=ie,$&&po($),(ve=z.props&&z.props.onVnodeBeforeUpdate)&&jt(ve,J,z,ie),Kn(m,!0);const Me=rc(m),Ot=m.subTree;m.subTree=Me,y(Ot,Me,f(Ot.el),N(Ot),m,T,O),z.el=Me.el,we===null&&kb(m,Me.el),H&&ht(H,T),(ve=z.props&&z.props.onVnodeUpdated)&&ht(()=>jt(ve,J,z,ie),T)}else{let z;const{el:$,props:H}=g,{bm:J,m:ie,parent:we}=m,ve=go(g);if(Kn(m,!1),J&&po(J),!ve&&(z=H&&H.onVnodeBeforeMount)&&jt(z,we,g),Kn(m,!0),$&&re){const Me=()=>{m.subTree=rc(m),re($,m.subTree,m,T,null)};ve?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Me()):Me()}else{const Me=m.subTree=rc(m);y(null,Me,b,E,m,T,O),g.el=Me.el}if(ie&&ht(ie,T),!ve&&(z=H&&H.onVnodeMounted)){const Me=g;ht(()=>jt(z,we,Me),T)}(g.shapeFlag&256||we&&go(we.vnode)&&we.vnode.shapeFlag&256)&&m.a&&ht(m.a,T),m.isMounted=!0,g=b=E=null}},D=m.effect=new Zl(k,()=>cu(A),m.scope),A=m.update=()=>D.run();A.id=m.uid,Kn(m,!0),A()},be=(m,g,b)=>{g.component=m;const E=m.vnode.props;m.vnode=g,m.next=null,Jb(m,g.props,E,b),tw(m,g.children,b),ni(),zf(),ri()},ye=(m,g,b,E,T,O,R,k,D=!1)=>{const A=m&&m.children,z=m?m.shapeFlag:0,$=g.children,{patchFlag:H,shapeFlag:J}=g;if(H>0){if(H&128){Hn(A,$,b,E,T,O,R,k,D);return}else if(H&256){It(A,$,b,E,T,O,R,k,D);return}}J&8?(z&16&&P(A,T,O),$!==A&&u(b,$)):z&16?J&16?Hn(A,$,b,E,T,O,R,k,D):P(A,T,O,!0):(z&8&&u(b,""),J&16&&W($,b,E,T,O,R,k,D))},It=(m,g,b,E,T,O,R,k,D)=>{m=m||Rr,g=g||Rr;const A=m.length,z=g.length,$=Math.min(A,z);let H;for(H=0;H<$;H++){const J=g[H]=D?_n(g[H]):zt(g[H]);y(m[H],J,b,null,T,O,R,k,D)}A>z?P(m,T,O,!0,!1,$):W(g,b,E,T,O,R,k,D,$)},Hn=(m,g,b,E,T,O,R,k,D)=>{let A=0;const z=g.length;let $=m.length-1,H=z-1;for(;A<=$&&A<=H;){const J=m[A],ie=g[A]=D?_n(g[A]):zt(g[A]);if(Jn(J,ie))y(J,ie,b,null,T,O,R,k,D);else break;A++}for(;A<=$&&A<=H;){const J=m[$],ie=g[H]=D?_n(g[H]):zt(g[H]);if(Jn(J,ie))y(J,ie,b,null,T,O,R,k,D);else break;$--,H--}if(A>$){if(A<=H){const J=H+1,ie=J<z?g[J].el:E;for(;A<=H;)y(null,g[A]=D?_n(g[A]):zt(g[A]),b,ie,T,O,R,k,D),A++}}else if(A>H)for(;A<=$;)ut(m[A],T,O,!0),A++;else{const J=A,ie=A,we=new Map;for(A=ie;A<=H;A++){const yt=g[A]=D?_n(g[A]):zt(g[A]);yt.key!=null&&we.set(yt.key,A)}let ve,Me=0;const Ot=H-ie+1;let Er=!1,Nf=0;const mi=new Array(Ot);for(A=0;A<Ot;A++)mi[A]=0;for(A=J;A<=$;A++){const yt=m[A];if(Me>=Ot){ut(yt,T,O,!0);continue}let Vt;if(yt.key!=null)Vt=we.get(yt.key);else for(ve=ie;ve<=H;ve++)if(mi[ve-ie]===0&&Jn(yt,g[ve])){Vt=ve;break}Vt===void 0?ut(yt,T,O,!0):(mi[Vt-ie]=A+1,Vt>=Nf?Nf=Vt:Er=!0,y(yt,g[Vt],b,null,T,O,R,k,D),Me++)}const Rf=Er?ow(mi):Rr;for(ve=Rf.length-1,A=Ot-1;A>=0;A--){const yt=ie+A,Vt=g[yt],Pf=yt+1<z?g[yt+1].el:E;mi[A]===0?y(null,Vt,b,Pf,T,O,R,k,D):Er&&(ve<0||A!==Rf[ve]?kt(Vt,b,Pf,2):ve--)}}},kt=(m,g,b,E,T=null)=>{const{el:O,type:R,transition:k,children:D,shapeFlag:A}=m;if(A&6){kt(m.component.subTree,g,b,E);return}if(A&128){m.suspense.move(g,b,E);return}if(A&64){R.move(m,g,b,le);return}if(R===Dt){r(O,g,b);for(let $=0;$<D.length;$++)kt(D[$],g,b,E);r(m.anchor,g,b);return}if(R===oc){S(m,g,b);return}if(E!==2&&A&1&&k)if(E===0)k.beforeEnter(O),r(O,g,b),ht(()=>k.enter(O),T);else{const{leave:$,delayLeave:H,afterLeave:J}=k,ie=()=>r(O,g,b),we=()=>{$(O,()=>{ie(),J&&J()})};H?H(O,ie,we):we()}else r(O,g,b)},ut=(m,g,b,E=!1,T=!1)=>{const{type:O,props:R,ref:k,children:D,dynamicChildren:A,shapeFlag:z,patchFlag:$,dirs:H}=m;if(k!=null&&Gc(k,null,b,m,!0),z&256){g.ctx.deactivate(m);return}const J=z&1&&H,ie=!go(m);let we;if(ie&&(we=R&&R.onVnodeBeforeUnmount)&&jt(we,g,m),z&6)_(m.component,b,E);else{if(z&128){m.suspense.unmount(b,E);return}J&&qn(m,null,g,"beforeUnmount"),z&64?m.type.remove(m,g,b,T,le,E):A&&(O!==Dt||$>0&&$&64)?P(A,g,b,!1,!0):(O===Dt&&$&384||!T&&z&16)&&P(D,g,b),E&&wr(m)}(ie&&(we=R&&R.onVnodeUnmounted)||J)&&ht(()=>{we&&jt(we,g,m),J&&qn(m,null,g,"unmounted")},b)},wr=m=>{const{type:g,el:b,anchor:E,transition:T}=m;if(g===Dt){Ls(b,E);return}if(g===oc){M(m);return}const O=()=>{i(b),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:R,delayLeave:k}=T,D=()=>R(b,O);k?k(m.el,O,D):D()}else O()},Ls=(m,g)=>{let b;for(;m!==g;)b=h(m),i(m),m=b;i(g)},_=(m,g,b)=>{const{bum:E,scope:T,update:O,subTree:R,um:k}=m;E&&po(E),T.stop(),O&&(O.active=!1,ut(R,m,g,b)),k&&ht(k,g),ht(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},P=(m,g,b,E=!1,T=!1,O=0)=>{for(let R=O;R<m.length;R++)ut(m[R],g,b,E,T)},N=m=>m.shapeFlag&6?N(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),j=(m,g,b)=>{m==null?g._vnode&&ut(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,b),zf(),rp(),g._vnode=m},le={p:y,um:ut,m:kt,r:wr,mt:Ye,mc:W,pc:ye,pbc:de,n:N,o:t};let Oe,re;return e&&([Oe,re]=e(le)),{render:j,hydrate:Oe,createApp:rw(j,Oe)}}function Kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tp(t,e,n=!1){const r=t.children,i=e.children;if(Y(r)&&Y(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=_n(i[s]),a.el=o.el),n||Tp(o,a)),a.type===ma&&(a.el=o.el)}}function ow(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const aw=t=>t.__isTeleport,Dt=Symbol(void 0),ma=Symbol(void 0),Ft=Symbol(void 0),oc=Symbol(void 0),xi=[];let Pt=null;function Sp(t=!1){xi.push(Pt=t?null:[])}function cw(){xi.pop(),Pt=xi[xi.length-1]||null}let qi=1;function Zf(t){qi+=t}function Ap(t){return t.dynamicChildren=qi>0?Pt||Rr:null,cw(),qi>0&&Pt&&Pt.push(t),t}function xO(t,e,n,r,i,s){return Ap(kp(t,e,n,r,i,s,!0))}function xp(t,e,n,r,i){return Ap(Pe(t,e,n,r,i,!0))}function Wc(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const pa="__vInternal",Ip=({key:t})=>t!=null?t:null,yo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Ke(t)||te(t)?{i:bt,r:t,k:e,f:!!n}:t:null;function kp(t,e=null,n=null,r=0,i=null,s=t===Dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ip(e),ref:e&&yo(e),scopeId:op,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bt};return a?(pu(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),qi>0&&!o&&Pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Pt.push(c),c}const Pe=lw;function lw(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===gp)&&(t=Ft),Wc(t)){const a=Nn(t,e,!0);return n&&pu(a,n),qi>0&&!s&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(ww(t)&&(t=t.__vccOpts),e){e=uw(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Gl(a)),Ae(c)&&(Gm(c)&&!Y(c)&&(c=Ge({},c)),e.style=Kl(c))}const o=Le(t)?1:Ob(t)?128:aw(t)?64:Ae(t)?4:te(t)?2:0;return kp(t,e,n,r,i,o,s,!0)}function uw(t){return t?Gm(t)||pa in t?Ge({},t):t:null}function Nn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Op(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ip(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(yo(e)):[i,yo(e)]:yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nn(t.ssContent),ssFallback:t.ssFallback&&Nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function fw(t=" ",e=0){return Pe(ma,null,t,e)}function IO(t="",e=!1){return e?(Sp(),xp(Ft,null,t)):Pe(Ft,null,t)}function zt(t){return t==null||typeof t=="boolean"?Pe(Ft):Y(t)?Pe(Dt,null,t.slice()):typeof t=="object"?_n(t):Pe(ma,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nn(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),pu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pa in e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[fw(e)]):n=8);t.children=e,t.shapeFlag|=n}function Op(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Gl([e.class,r.class]));else if(i==="style")e.style=Kl([e.style,r.style]);else if(sa(i)){const s=e[i],o=r[i];o&&s!==o&&!(Y(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function jt(t,e,n,r=null){At(t,e,7,[n,r])}const hw=Cp();let dw=0;function mw(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||hw,s={uid:dw++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bp(r,i),emitsOptions:sp(r,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tb.bind(null,s),t.ce&&t.ce(s),s}let Re=null;const ga=()=>Re||bt,zr=t=>{Re=t,t.scope.on()},cr=()=>{Re&&Re.scope.off(),Re=null};function Dp(t){return t.vnode.shapeFlag&4}let Ki=!1;function pw(t,e=!1){Ki=e;const{props:n,children:r}=t.vnode,i=Dp(t);Xb(t,n,i,e),ew(t,r);const s=i?gw(t,e):void 0;return Ki=!1,s}function gw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wm(new Proxy(t.ctx,qb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?vw(t):null;zr(t),ni();const s=Sn(r,t,0,[t.props,i]);if(ri(),cr(),Nm(s)){if(s.then(cr,cr),e)return s.then(o=>{eh(t,o,e)}).catch(o=>{la(o,t,0)});t.asyncDep=s}else eh(t,s,e)}else Np(t,e)}function eh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Jm(e)),Np(t,n)}let th;function Np(t,e,n){const r=t.type;if(!t.render){if(!e&&th&&!r.render){const i=r.template||du(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ge(Ge({isCustomElement:s,delimiters:a},o),c);r.render=th(i,l)}}t.render=r.render||Mt}zr(t),ni(),Kb(t),ri(),cr()}function yw(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function vw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=yw(t))},slots:t.slots,emit:t.emit,expose:e}}function ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jm(Wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}}))}function bw(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function ww(t){return te(t)&&"__vccOpts"in t}const ne=(t,e)=>vb(t,e,Ki);function si(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!Y(e)?Wc(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wc(n)&&(n=[n]),Pe(t,e,n))}const Ew=Symbol(""),_w=()=>mt(Ew),Cw="3.2.47",Tw="http://www.w3.org/2000/svg",Zn=typeof document<"u"?document:null,nh=Zn&&Zn.createElement("template"),Sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Zn.createElementNS(Tw,t):Zn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{nh.innerHTML=r?`<svg>${t}</svg>`:t;const a=nh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Aw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xw(t,e,n){const r=t.style,i=Le(n);if(n&&!i){if(e&&!Le(e))for(const s in e)n[s]==null&&Yc(r,s,"");for(const s in n)Yc(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const rh=/\s*!important$/;function Yc(t,e,n){if(Y(n))n.forEach(r=>Yc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Iw(t,e);rh.test(n)?t.setProperty(ti(r),n.replace(rh,""),"important"):t[r]=n}}const ih=["Webkit","Moz","ms"],ac={};function Iw(t,e){const n=ac[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return ac[e]=r;r=ds(r);for(let i=0;i<ih.length;i++){const s=ih[i]+r;if(s in t)return ac[e]=s}return e}const sh="http://www.w3.org/1999/xlink";function kw(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sh,e.slice(6,e.length)):t.setAttributeNS(sh,e,n);else{const s=A0(e);n==null||s&&!km(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ow(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=km(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ar(t,e,n,r){t.addEventListener(e,n,r)}function Dw(t,e,n,r){t.removeEventListener(e,n,r)}function Nw(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Rw(e);if(r){const l=s[e]=Mw(r,i);Ar(t,a,l,c)}else o&&(Dw(t,a,o,c),s[e]=void 0)}}const oh=/(?:Once|Passive|Capture)$/;function Rw(t){let e;if(oh.test(t)){e={};let r;for(;r=t.match(oh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ti(t.slice(2)),e]}let cc=0;const Pw=Promise.resolve(),Lw=()=>cc||(Pw.then(()=>cc=0),cc=Date.now());function Mw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;At(Fw(r,n.value),e,5,[r])};return n.value=t,n.attached=Lw(),n}function Fw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ah=/^on[a-z]/,$w=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?Aw(t,r,i):e==="style"?xw(t,n,r):sa(e)?Wl(e)||Nw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bw(t,e,r,i))?Ow(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kw(t,e,r,i))};function Bw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ah.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ah.test(e)&&Le(n)?!1:e in t}const vn="transition",pi="animation",Rp=(t,{slots:e})=>si(lp,Lp(t),e);Rp.displayName="Transition";const Pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uw=Rp.props=Ge({},lp.props,Pp),Gn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},ch=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function Lp(t){const e={};for(const F in t)F in Pp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=Vw(i),y=p&&p[0],C=p&&p[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:S,onLeave:M,onLeaveCancelled:q,onBeforeAppear:fe=v,onAppear:he=w,onAppearCancelled:W=S}=e,ae=(F,Ee,Ye)=>{En(F,Ee?u:a),En(F,Ee?l:o),Ye&&Ye()},de=(F,Ee)=>{F._isLeaving=!1,En(F,f),En(F,d),En(F,h),Ee&&Ee()},Be=F=>(Ee,Ye)=>{const gn=F?he:w,ke=()=>ae(Ee,F,Ye);Gn(gn,[Ee,ke]),lh(()=>{En(Ee,F?c:s),tn(Ee,F?u:a),ch(gn)||uh(Ee,r,y,ke)})};return Ge(e,{onBeforeEnter(F){Gn(v,[F]),tn(F,s),tn(F,o)},onBeforeAppear(F){Gn(fe,[F]),tn(F,c),tn(F,l)},onEnter:Be(!1),onAppear:Be(!0),onLeave(F,Ee){F._isLeaving=!0;const Ye=()=>de(F,Ee);tn(F,f),Fp(),tn(F,h),lh(()=>{!F._isLeaving||(En(F,f),tn(F,d),ch(M)||uh(F,r,C,Ye))}),Gn(M,[F,Ye])},onEnterCancelled(F){ae(F,!1),Gn(S,[F])},onAppearCancelled(F){ae(F,!0),Gn(W,[F])},onLeaveCancelled(F){de(F),Gn(q,[F])}})}function Vw(t){if(t==null)return null;if(Ae(t))return[lc(t.enter),lc(t.leave)];{const e=lc(t);return[e,e]}}function lc(t){return R0(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function En(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function lh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let jw=0;function uh(t,e,n,r){const i=t._endId=++jw,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Mp(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),s()},h=d=>{d.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Mp(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${vn}Delay`),s=r(`${vn}Duration`),o=fh(i,s),a=r(`${pi}Delay`),c=r(`${pi}Duration`),l=fh(a,c);let u=null,f=0,h=0;e===vn?o>0&&(u=vn,f=o,h=s.length):e===pi?l>0&&(u=pi,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?vn:pi:null,h=u?u===vn?s.length:c.length:0);const d=u===vn&&/\b(transform|all)(,|$)/.test(r(`${vn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function fh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>hh(n)+hh(t[r])))}function hh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Fp(){return document.body.offsetHeight}const $p=new WeakMap,Bp=new WeakMap,Up={name:"TransitionGroup",props:Ge({},Uw,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ga(),r=cp();let i,s;return dp(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Gw(i[0].el,n.vnode.el,o))return;i.forEach(Hw),i.forEach(qw);const a=i.filter(Kw);Fp(),a.forEach(c=>{const l=c.el,u=l.style;tn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,En(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=oe(t),a=Lp(o);let c=o.tag||Dt;i=s,s=e.default?uu(e.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&Hi(u,zi(u,a,r,n))}if(i)for(let l=0;l<i.length;l++){const u=i[l];Hi(u,zi(u,a,r,n)),$p.set(u,u.el.getBoundingClientRect())}return Pe(c,null,s)}}},zw=t=>delete t.mode;Up.props;const kO=Up;function Hw(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function qw(t){Bp.set(t,t.el.getBoundingClientRect())}function Kw(t){const e=$p.get(t),n=Bp.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function Gw(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=Mp(r);return i.removeChild(r),s}const dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>po(e,n):e};function Ww(t){t.target.composing=!0}function mh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const OO={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=dh(i);const s=r||i.props&&i.props.type==="number";Ar(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=$c(a)),t._assign(a)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",Ww),Ar(t,"compositionend",mh),Ar(t,"change",mh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=dh(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&$c(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},DO={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),gi(t,!0),r.enter(t)):r.leave(t,()=>{gi(t,!1)}):gi(t,e))},beforeUnmount(t,{value:e}){gi(t,e)}};function gi(t,e){t.style.display=e?t._vod:"none"}const Yw=Ge({patchProp:$w},Sw);let ph;function Qw(){return ph||(ph=iw(Yw))}const Xw=(...t)=>{const e=Qw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Jw(r);if(!i)return;const s=e._component;!te(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Jw(t){return Le(t)?document.querySelector(t):t}const Zw={__name:"App",setup(t){return(e,n)=>{const r=Hb("router-view");return Sp(),xp(r)}}},e1="modulepreload",t1=function(t){return"/"+t},gh={},Qc=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=t1(s),s in gh)return;gh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":e1,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};async function n1(){(await Qc(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}function r1(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let i=0;i<r;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function i1(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>i1(t[r],e[r]))}function yh(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),r1(t,e.split("."),n))}function s1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function NO(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function vh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const RO=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Vp(t,e){const n=Object.create(null),r=Object.create(null);for(const i in t)e.some(s=>s instanceof RegExp?s.test(i):s===i)?n[i]=t[i]:r[i]=t[i];return[n,r]}function PO(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}function LO(t){return Vp(t,["class","style","id",/^data-/])}function MO(t){return t==null?[]:Array.isArray(t)?t:[t]}function o1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function bh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function a1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function on(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in t)r[i]=t[i];for(const i in e){const s=t[i],o=e[i];if(vh(s)&&vh(o)){r[i]=on(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){r[i]=n(s,o);continue}r[i]=o}return r}function An(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(An.cache.has(t))return An.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return An.cache.set(t,e),e}An.cache=new Map;function uc(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>uc(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>uc(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return uc(t,e.component.subTree).flat(1)}return[]}function FO(t){const e=Zt({}),n=ne(t);return fa(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),Zm(e)}function $O(t,e){return t.includes(e)}const c1=/^on[^a-z]/,BO=t=>c1.test(t),UO=[Function,Array];function VO(t,e){return e="on"+ds(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function jO(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}function jp(t,e,n){if(n&&(e={__isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?f1(e):"")}function Ii(t,e,n){const r=jp(t,e,n);r!=null&&console.warn(r)}function wh(t,e,n){const r=jp(t,e,n);r!=null&&console.error(r)}const l1=/(?:^|[-_])(\w)/g,u1=t=>t.replace(l1,e=>e.toUpperCase()).replace(/[-_]/g,"");function fc(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t.__isVue?t.$options||t.constructor.options:t||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const s=i.match(/([^/\\]+)\.vue$/);r=s==null?void 0:s[1]}return(r?`<${u1(r)}>`:"<Anonymous>")+(i&&e!==!1?` at ${i}`:"")}function f1(t){if(t.__isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((r,i)=>`${i===0?"---> ":" ".repeat(5+i*2)}${Array.isArray(r)?`${fc(r[0])}... (${r[1]} recursive calls)`:fc(r)}`).join(`
`)}else return`

(found in ${fc(t)})`}const h1=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],d1=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,m1=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],p1=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function zp(t){const e=Array(3),n=d1,r=h1;for(let i=0;i<3;++i)e[i]=Math.round(o1(n(r[i][0]*t[0]+r[i][1]*t[1]+r[i][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function gu(t){let{r:e,g:n,b:r}=t;const i=[0,0,0],s=p1,o=m1;e=s(e/255),n=s(n/255),r=s(r/255);for(let a=0;a<3;++a)i[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return i}const Oo=.20689655172413793,g1=t=>t>Oo**3?Math.cbrt(t):t/(3*Oo**2)+4/29,y1=t=>t>Oo?t**3:3*Oo**2*(t-4/29);function Hp(t){const e=g1,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function qp(t){const e=y1,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function zO(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function tr(t){if(typeof t=="number")return(isNaN(t)||t<0||t>16777215)&&Ii(`'${t}' is not a valid hex color`),{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;[3,4].includes(e.length)?e=e.split("").map(r=>r+r).join(""):[6,8].includes(e.length)||Ii(`'${t}' is not a valid hex(a) color`);const n=parseInt(e,16);return(isNaN(n)||n<0||n>4294967295)&&Ii(`'${t}' is not a valid hex(a) color`),b1(e)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`)}function js(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function v1(t){let{r:e,g:n,b:r,a:i}=t;return`#${[js(e),js(n),js(r),i!==void 0?js(Math.round(i*255)):""].join("")}`}function b1(t){t=w1(t);let[e,n,r,i]=a1(t,2).map(s=>parseInt(s,16));return i=i===void 0?i:i/255,{r:e,g:n,b:r,a:i}}function w1(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=bh(bh(t,6),8,"F")),t}function E1(t,e){const n=Hp(gu(t));return n[0]=n[0]+e*10,zp(qp(n))}function _1(t,e){const n=Hp(gu(t));return n[0]=n[0]-e*10,zp(qp(n))}function C1(t){const e=tr(t);return gu(e)[1]}function ms(t,e){const n=ga();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function HO(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=ms(t).type;return An((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Kp=0,vo=new WeakMap;function Gp(){const t=ms("getUid");if(vo.has(t))return vo.get(t);{const e=Kp++;return vo.set(t,e),e}}Gp.reset=()=>{Kp=0,vo=new WeakMap};function T1(t){const{provides:e}=ms("injectSelf");if(e&&t in e)return e[t]}function yu(t,e){return n=>Object.keys(t).reduce((r,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?r[i]={...o,default:n[i]}:r[i]=o,e&&!r[i].source&&(r[i].source=e),r},{})}function Wp(t,e){let n;function r(){n=L0(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}xt(t,i=>{i&&!n?r():i||(n==null||n.stop(),n=void 0)},{immediate:!0}),$0(()=>{n==null||n.stop()})}function S1(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[An(e)])<"u"}function ps(t){var e,n;if(t._setup=(e=t._setup)!=null?e:t.setup,!t.name)return Ii("The component is missing an explicit name, unable to generate default prop value"),t;if(t._setup){t.props=yu((n=t.props)!=null?n:{},An(t.name))();const r=Object.keys(t.props);t.filterProps=function(s){return Vp(s,r)},t.props._as=String,t.setup=function(s,o){const a=Yp();if(!a.value)return t._setup(s,o);const c=ga(),l=ne(()=>{var d;return a.value[(d=s._as)!=null?d:t.name]}),u=new Proxy(s,{get(d,p){var C,v,w,S;const y=Reflect.get(d,p);return typeof p=="string"&&!S1(c.vnode,p)&&(S=(w=(C=l.value)==null?void 0:C[p])!=null?w:(v=a.value.global)==null?void 0:v[p])!=null?S:y}}),f=su();fa(()=>{if(l.value){const d=Object.entries(l.value).filter(p=>{let[y]=p;return y.startsWith(y[0].toUpperCase())});d.length&&(f.value=Object.fromEntries(d))}});const h=t._setup(u,o);return Wp(f,()=>{var d,p;k1(on((p=(d=T1(Gi))==null?void 0:d.value)!=null?p:{},f.value))}),h}}return t}function A1(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ps:ii)(e)}const Qt=typeof window<"u",qO=Qt&&"IntersectionObserver"in window,x1=Qt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),KO=Qt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)"),Gi=Symbol.for("vuetify:defaults");function I1(t){return St(t)}function Yp(){const t=mt(Gi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function k1(t,e){const n=Yp(),r=St(t),i=ne(()=>{if(Kt(e==null?void 0:e.disabled))return n.value;const o=Kt(e==null?void 0:e.scoped),a=Kt(e==null?void 0:e.reset),c=Kt(e==null?void 0:e.root);let l=on(r.value,{prev:n.value});if(o)return l;if(a||c){const u=Number(a||1/0);for(let f=0;f<=u&&!(!l||!("prev"in l));f++)l=l.prev;return l}return l.prev?on(l.prev,l):l});return Fr(Gi,i),i}const GO=["sm","md","lg","xl","xxl"],Eh=Symbol.for("vuetify:display"),_h={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},O1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_h;return on(_h,t)};function Ch(t){return Qt&&!t?window.innerWidth:0}function Th(t){return Qt&&!t?window.innerHeight:0}function Sh(t){const e=Qt&&!t?window.navigator.userAgent:"ssr";function n(p){return Boolean(e.match(p))}const r=n(/android/i),i=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),c=n(/edge/i),l=n(/firefox/i),u=n(/opera/i),f=n(/win/i),h=n(/mac/i),d=n(/linux/i);return{android:r,ios:i,cordova:s,electron:o,chrome:a,edge:c,firefox:l,opera:u,win:f,mac:h,linux:d,touch:x1,ssr:e==="ssr"}}function D1(t,e){const{thresholds:n,mobileBreakpoint:r}=O1(t),i=St(Th(e)),s=su(Sh(e)),o=Zt({}),a=St(Ch(e));function c(){i.value=Th(),a.value=Ch()}function l(){c(),s.value=Sh()}return fa(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,h=a.value<n.lg&&!(f||u),d=a.value<n.xl&&!(h||f||u),p=a.value<n.xxl&&!(d||h||f||u),y=a.value>=n.xxl,C=u?"xs":f?"sm":h?"md":d?"lg":p?"xl":"xxl",v=typeof r=="number"?r:n[r],w=a.value<v;o.xs=u,o.sm=f,o.md=h,o.lg=d,o.xl=p,o.xxl=y,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||h),o.xlAndUp=!(u||f||h||d),o.smAndDown=!(h||d||p||y),o.mdAndDown=!(d||p||y),o.lgAndDown=!(p||y),o.xlAndDown=!y,o.name=C,o.height=i.value,o.width=a.value,o.mobile=w,o.mobileBreakpoint=r,o.platform=s.value,o.thresholds=n}),Qt&&window.addEventListener("resize",c,{passive:!0}),{...Zm(o),update:l,ssr:!!e}}const N1={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},R1={component:t=>si(Qp,{...t,class:"mdi"})},P1=[String,Function,Object],Xc=Symbol.for("vuetify:icons"),va=yu({icon:{type:P1},tag:{type:String,required:!0}},"icon"),Ah=A1()({name:"VComponentIcon",props:va(),setup(t,e){let{slots:n}=e;return()=>Pe(t.tag,null,{default:()=>{var r;return[t.icon?Pe(t.icon,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}),L1=ps({name:"VSvgIcon",inheritAttrs:!1,props:va(),setup(t,e){let{attrs:n}=e;return()=>Pe(t.tag,Op(n,{style:null}),{default:()=>[Pe("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Pe("path",{d:t.icon},null)])]})}});ps({name:"VLigatureIcon",props:va(),setup(t){return()=>Pe(t.tag,null,{default:()=>[t.icon]})}});const Qp=ps({name:"VClassIcon",props:va(),setup(t){return()=>Pe(t.tag,{class:t.icon},null)}}),M1={svg:{component:L1},class:{component:Qp}};function F1(t){return on({defaultSet:"mdi",sets:{...M1,mdi:R1},aliases:N1},t)}const WO=t=>{const e=mt(Xc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:ne(()=>{var c;const r=Ke(t)?t.value:t.icon;if(!r)return{component:Ah};let i=r;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(c=e.aliases)==null?void 0:c[i.slice(1)])),!i)throw new Error(`Could not find aliased icon "${r}"`);if(typeof i!="string")return{component:Ah,icon:i};const s=Object.keys(e.sets).find(l=>typeof i=="string"&&i.startsWith(`${l}:`)),o=s?i.slice(s.length+1):i;return{component:e.sets[s!=null?s:e.defaultSet].component,icon:o}})}};function $1(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=ms("useProxiedModel"),o=St(t[e]!==void 0?t[e]:n),a=An(e),l=ne(a!==e?()=>{var f,h,d,p;return t[e],!!((((f=s.vnode.props)==null?void 0:f.hasOwnProperty(e))||((h=s.vnode.props)==null?void 0:h.hasOwnProperty(a)))&&(((d=s.vnode.props)==null?void 0:d.hasOwnProperty(`onUpdate:${e}`))||((p=s.vnode.props)==null?void 0:p.hasOwnProperty(`onUpdate:${a}`))))}:()=>{var f,h;return t[e],!!(((f=s.vnode.props)==null?void 0:f.hasOwnProperty(e))&&((h=s.vnode.props)==null?void 0:h.hasOwnProperty(`onUpdate:${e}`)))});Wp(()=>!l.value,()=>{xt(()=>t[e],f=>{o.value=f})});const u=ne({get(){return r(l.value?t[e]:o.value)},set(f){const h=i(f),d=oe(l.value?t[e]:o.value);d===h||r(d)===f||(o.value=h,s==null||s.emit(`update:${e}`,h))}});return Object.defineProperty(u,"externalValue",{get:()=>l.value?t[e]:o.value}),u}const B1={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading..."},xh="$vuetify.",Ih=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),Xp=(t,e,n)=>function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];if(!r.startsWith(xh))return Ih(r,s);const a=r.replace(xh,""),c=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=yh(c,a,null);return u||(Ii(`Translation key "${r}" not found in "${t.value}", trying fallback locale`),u=yh(l,a,null)),u||(wh(`Translation key "${r}" not found in fallback`),u=r),typeof u!="string"&&(wh(`Translation key "${r}" has a non-string value`),u=r),Ih(u,s)};function Jp(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function hc(t,e,n){var i,s;const r=$1(t,e,(i=t[e])!=null?i:n.value);return r.value=(s=t[e])!=null?s:n.value,xt(n,o=>{t[e]==null&&(r.value=n.value)}),r}function Zp(t){return e=>{const n=hc(e,"locale",t.current),r=hc(e,"fallback",t.fallback),i=hc(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:i,t:Xp(n,r,i),n:Jp(n,r),provide:Zp({current:n,fallback:r,messages:i})}}}function U1(t){var i,s;const e=St((i=t==null?void 0:t.locale)!=null?i:"en"),n=St((s=t==null?void 0:t.fallback)!=null?s:"en"),r=St({en:B1,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:Xp(e,n,r),n:Jp(e,n),provide:Zp({current:e,fallback:n,messages:r})}}const V1={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Do=Symbol.for("vuetify:locale");function j1(t){return t.name!=null}function z1(t){const e=(t==null?void 0:t.adapter)&&j1(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:U1(t),n=H1(e,t);return{...e,...n}}function YO(){const t=mt(Do);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function H1(t,e){var i;const n=St((i=e==null?void 0:e.rtl)!=null?i:V1),r=ne(()=>{var s;return(s=n.value[t.current.value])!=null?s:!1});return{isRtl:r,rtl:n,rtlClasses:ne(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function QO(){const t=mt(Do);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const _r=2.4,kh=.2126729,Oh=.7151522,Dh=.072175,q1=.55,K1=.58,G1=.57,W1=.62,zs=.03,Nh=1.45,Y1=5e-4,Q1=1.25,X1=1.25,Rh=.078,Ph=12.82051282051282,Hs=.06,Lh=.001;function Mh(t,e){const n=(t.r/255)**_r,r=(t.g/255)**_r,i=(t.b/255)**_r,s=(e.r/255)**_r,o=(e.g/255)**_r,a=(e.b/255)**_r;let c=n*kh+r*Oh+i*Dh,l=s*kh+o*Oh+a*Dh;if(c<=zs&&(c+=(zs-c)**Nh),l<=zs&&(l+=(zs-l)**Nh),Math.abs(l-c)<Y1)return 0;let u;if(l>c){const f=(l**q1-c**K1)*Q1;u=f<Lh?0:f<Rh?f-f*Ph*Hs:f-Hs}else{const f=(l**W1-c**G1)*X1;u=f>-Lh?0:f>-Rh?f-f*Ph*Hs:f+Hs}return u*100}const No=Symbol.for("vuetify:theme"),XO=yu({theme:String},"theme"),yi={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function J1(){var n,r,i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yi;if(!t)return{...yi,isDisabled:!0};const e={};for(const[s,o]of Object.entries((n=t.themes)!=null?n:{})){const a=o.dark||s==="dark"?(r=yi.themes)==null?void 0:r.dark:(i=yi.themes)==null?void 0:i.light;e[s]=on(a,o)}return on(yi,{...t,themes:e})}function Z1(t){const e=Zt(J1(t)),n=St(e.defaultTheme),r=St(e.themes),i=ne(()=>{const u={};for(const[f,h]of Object.entries(r.value)){const d=u[f]={...h,colors:{...h.colors}};if(e.variations)for(const p of e.variations.colors){const y=d.colors[p];if(!!y)for(const C of["lighten","darken"]){const v=C==="lighten"?E1:_1;for(const w of s1(e.variations[C],1))d.colors[`${p}-${C}-${w}`]=v1(v(tr(y),w))}}for(const p of Object.keys(d.colors)){if(/^on-[a-z]/.test(p)||d.colors[`on-${p}`])continue;const y=`on-${p}`,C=tr(d.colors[p]),v=Math.abs(Mh(tr(0),C)),w=Math.abs(Mh(tr(16777215),C));d.colors[y]=w>Math.min(v,50)?"#fff":"#000"}}return u}),s=ne(()=>i.value[n.value]),o=ne(()=>{const u=[];s.value.dark&&Wn(u,":root",["color-scheme: dark"]),Wn(u,":root",Fh(s.value));for(const[p,y]of Object.entries(i.value))Wn(u,`.v-theme--${p}`,[`color-scheme: ${y.dark?"dark":"normal"}`,...Fh(y)]);const f=[],h=[],d=new Set(Object.values(i.value).flatMap(p=>Object.keys(p.colors)));for(const p of d)/^on-[a-z]/.test(p)?Wn(h,`.${p}`,[`color: rgb(var(--v-theme-${p})) !important`]):(Wn(f,`.bg-${p}`,[`--v-theme-overlay-multiplier: var(--v-theme-${p}-overlay-multiplier)`,`background: rgb(var(--v-theme-${p})) !important`,`color: rgb(var(--v-theme-on-${p})) !important`]),Wn(h,`.text-${p}`,[`color: rgb(var(--v-theme-${p})) !important`]),Wn(h,`.border-${p}`,[`--v-border-color: var(--v-theme-${p})`]));return u.push(...f,...h),u.map((p,y)=>y===0?p:`    ${p}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function c(u){const f=u._context.provides.usehead;if(f)if(f.push){const h=f.push(a);xt(o,()=>{h.patch(a)})}else Qt?(f.addHeadObjs(ne(a)),fa(()=>f.updateDOM())):f.addHeadObjs(a());else{let d=function(){if(!e.isDisabled){if(typeof document<"u"&&!h){const p=document.createElement("style");p.type="text/css",p.id="vuetify-theme-stylesheet",e.cspNonce&&p.setAttribute("nonce",e.cspNonce),h=p,document.head.appendChild(h)}h&&(h.innerHTML=o.value)}},h=Qt?document.getElementById("vuetify-theme-stylesheet"):null;xt(o,d,{immediate:!0})}}const l=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:c,isDisabled:e.isDisabled,name:n,themes:r,current:s,computedThemes:i,themeClasses:l,styles:o,global:{name:n,current:s}}}function JO(t){ms("provideTheme");const e=mt(No,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=ne(()=>{var s;return(s=t.theme)!=null?s:e==null?void 0:e.name.value}),r=ne(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,themeClasses:r};return Fr(No,i),i}function Wn(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function Fh(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[i,s]of Object.entries(t.colors)){const o=tr(s);r.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${C1(s)>.18?e:n}`)}for(const[i,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?tr(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${i}: ${a!=null?a:s}`)}return r}function eg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=on(e,n),{aliases:i={},components:s={},directives:o={}}=r,a=I1(r.defaults),c=D1(r.display,r.ssr),l=Z1(r.theme),u=F1(r.icons),f=z1(r.locale);return{install:d=>{for(const p in o)d.directive(p,o[p]);for(const p in s)d.component(p,s[p]);for(const p in i)d.component(p,ps({...i[p],name:p,aliasName:i[p].name}));if(l.install(d),d.provide(Gi,a),d.provide(Eh,c),d.provide(No,l),d.provide(Xc,u),d.provide(Do,f),Qt&&r.ssr)if(d.$nuxt)d.$nuxt.hook("app:suspense:resolve",()=>{c.update()});else{const{mount:p}=d;d.mount=function(){const y=p(...arguments);return au(()=>c.update()),d.mount=p,y}}Gp.reset(),d.mixin({computed:{$vuetify(){return Zt({defaults:vi.call(this,Gi),display:vi.call(this,Eh),theme:vi.call(this,No),icons:vi.call(this,Xc),locale:vi.call(this,Do)})}}})},defaults:a,display:c,theme:l,icons:u,locale:f}}const eE="3.1.13";eg.version=eE;function vi(t){var r,i,s;const e=this.$,n=(s=(r=e.parent)==null?void 0:r.provides)!=null?s:(i=e.vnode.appContext)==null?void 0:i.provides;if(n&&t in n)return n[t]}const tE=eg({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}});function nE(){return tg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function tg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const rE=typeof Proxy=="function",iE="devtools-plugin:setup",sE="plugin:settings:set";let Cr,Jc;function oE(){var t;return Cr!==void 0||(typeof window<"u"&&window.performance?(Cr=!0,Jc=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Cr=!0,Jc=global.perf_hooks.performance):Cr=!1),Cr}function aE(){return oE()?Jc.now():Date.now()}class cE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}s=o},now(){return aE()}},n&&n.on(sE,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function lE(t,e){const n=t,r=tg(),i=nE(),s=rE&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(iE,t,e);else{const o=s?new cE(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof window<"u";function uE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function dc(t,e){const n={};for(const r in e){const i=e[r];n[r]=Bt(i)?i.map(t):t(i)}return n}const ki=()=>{},Bt=Array.isArray,fE=/\/$/,hE=t=>t.replace(fE,"");function mc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gE(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function dE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $h(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mE(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hr(e.matched[r],n.matched[i])&&ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pE(t[n],e[n]))return!1;return!0}function pE(t,e){return Bt(t)?Bh(t,e):Bt(e)?Bh(e,t):t===e}function Bh(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Oi||(Oi={}));function yE(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hE(t)}const vE=/^[^#]+#/;function bE(t,e){return t.replace(vE,"#")+e}function wE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function EE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=wE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Uh(t,e){return(history.state?history.state.position-e:-1)+t}const Zc=new Map;function _E(t,e){Zc.set(t,e)}function CE(t){const e=Zc.get(t);return Zc.delete(t),e}let TE=()=>location.protocol+"//"+location.host;function rg(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),$h(c,"")}return $h(n,t)+r+i}function SE(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const d=rg(t,location),p=n.value,y=e.value;let C=0;if(h){if(n.value=d,e.value=h,o&&o===p){o=null;return}C=y?h.position-y.position:0}else r(d);i.forEach(v=>{v(n.value,p,{delta:C,type:Wi.pop,direction:C?C>0?Oi.forward:Oi.back:Oi.unknown})})};function c(){o=n.value}function l(h){i.push(h);const d=()=>{const p=i.indexOf(h);p>-1&&i.splice(p,1)};return s.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState(ge({},h.state,{scroll:ba()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Vh(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ba():null}}function AE(t){const{history:e,location:n}=window,r={value:rg(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:TE()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(c,l){const u=ge({},e.state,Vh(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ge({},i.value,e.state,{forward:c,scroll:ba()});s(u.current,u,!0);const f=ge({},Vh(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function xE(t){t=yE(t);const e=AE(t),n=SE(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ge({location:"",base:t,go:r,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function IE(t){return typeof t=="string"||t&&typeof t=="object"}function ig(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sg=Symbol("");var jh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jh||(jh={}));function qr(t,e){return ge(new Error,{type:t,[sg]:!0},e)}function en(t,e){return t instanceof Error&&sg in t&&(e==null||!!(t.type&e))}const zh="[^/]+?",kE={sensitive:!1,strict:!1,start:!0,end:!0},OE=/[.+*?^${}()[\]/\\]/g;function DE(t,e){const n=ge({},kE,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(OE,"\\$&"),d+=40;else if(h.type===1){const{value:p,repeatable:y,optional:C,regexp:v}=h;s.push({name:p,repeatable:y,optional:C});const w=v||zh;if(w!==zh){d+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+M.message)}}let S=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(S=C&&l.length<2?`(?:/${S})`:"/"+S),C&&(S+="?"),i+=S,d+=20,C&&(d+=-8),y&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",p=s[h-1];f[p.name]=d&&p.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:y,optional:C}=d,v=p in l?l[p]:"";if(Bt(v)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Bt(v)?v.join("/"):v;if(!w)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function NE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RE(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=NE(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Hh(r))return 1;if(Hh(i))return-1}return i.length-r.length}function Hh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PE={type:0,value:""},LE=/[a-zA-Z0-9_]/;function ME(t){if(!t)return[[]];if(t==="/")return[[PE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:LE.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function FE(t,e,n){const r=DE(ME(t.path),n),i=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $E(t,e){const n=[],r=new Map;e=Gh({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const d=!h,p=BE(u);p.aliasOf=h&&h.record;const y=Gh(e,u),C=[p];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of S)C.push(ge({},p,{components:h?h.record.components:p.components,path:M,aliasOf:h?h.record:p}))}let v,w;for(const S of C){const{path:M}=S;if(f&&M[0]!=="/"){const q=f.record.path,fe=q[q.length-1]==="/"?"":"/";S.path=f.record.path+(M&&fe+M)}if(v=FE(S,f,y),h?h.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),d&&u.name&&!Kh(v)&&o(u.name)),p.children){const q=p.children;for(let fe=0;fe<q.length;fe++)s(q[fe],v,h&&h.children[fe])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return w?()=>{o(w)}:ki}function o(u){if(ig(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&RE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!og(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Kh(u)&&r.set(u.record.name,u)}function l(u,f){let h,d={},p,y;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw qr(1,{location:u});y=h.record.name,d=ge(qh(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&qh(u.params,h.keys.map(w=>w.name))),p=h.stringify(d)}else if("path"in u)p=u.path,h=n.find(w=>w.re.test(p)),h&&(d=h.parse(p),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw qr(1,{location:u,currentLocation:f});y=h.record.name,d=ge({},f.params,u.params),p=h.stringify(d)}const C=[];let v=h;for(;v;)C.unshift(v.record),v=v.parent;return{name:y,path:p,params:d,matched:C,meta:VE(C)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function qh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function BE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:UE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function UE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Kh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function VE(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Gh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function og(t,e){return e.children.some(n=>n===t||og(t,n))}const ag=/#/g,jE=/&/g,zE=/\//g,HE=/=/g,qE=/\?/g,cg=/\+/g,KE=/%5B/g,GE=/%5D/g,lg=/%5E/g,WE=/%60/g,ug=/%7B/g,YE=/%7C/g,fg=/%7D/g,QE=/%20/g;function vu(t){return encodeURI(""+t).replace(YE,"|").replace(KE,"[").replace(GE,"]")}function XE(t){return vu(t).replace(ug,"{").replace(fg,"}").replace(lg,"^")}function el(t){return vu(t).replace(cg,"%2B").replace(QE,"+").replace(ag,"%23").replace(jE,"%26").replace(WE,"`").replace(ug,"{").replace(fg,"}").replace(lg,"^")}function JE(t){return el(t).replace(HE,"%3D")}function ZE(t){return vu(t).replace(ag,"%23").replace(qE,"%3F")}function e_(t){return t==null?"":ZE(t).replace(zE,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function t_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(cg," "),o=s.indexOf("="),a=Ro(o<0?s:s.slice(0,o)),c=o<0?null:Ro(s.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wh(t){let e="";for(let n in t){const r=t[n];if(n=JE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(s=>s&&el(s)):[r&&el(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function n_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const r_=Symbol(""),Yh=Symbol(""),bu=Symbol(""),hg=Symbol(""),tl=Symbol("");function bi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(qr(4,{from:n,to:e})):f instanceof Error?a(f):IE(f)?a(qr(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function pc(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(i_(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Cn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=uE(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Cn(h,n,r,s,o)()}))}}return i}function i_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qh(t){const e=mt(bu),n=mt(hg),r=ne(()=>e.resolve(Kt(t.to))),i=ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hr.bind(null,u));if(h>-1)return h;const d=Xh(c[l-2]);return l>1&&Xh(u)===d&&f[f.length-1].path!==d?f.findIndex(Hr.bind(null,c[l-2])):h}),s=ne(()=>i.value>-1&&c_(n.params,r.value.params)),o=ne(()=>i.value>-1&&i.value===n.matched.length-1&&ng(n.params,r.value.params));function a(c={}){return a_(c)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(ki):Promise.resolve()}return{route:r,href:ne(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const s_=ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qh,setup(t,{slots:e}){const n=Zt(Qh(t)),{options:r}=mt(bu),i=ne(()=>({[Jh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:si("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),o_=s_;function a_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function c_(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Bt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jh=(t,e,n)=>t!=null?t:e!=null?e:n,l_=ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(tl),i=ne(()=>t.route||r.value),s=mt(Yh,0),o=ne(()=>{let l=Kt(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ne(()=>i.value.matched[o.value]);Fr(Yh,ne(()=>o.value+1)),Fr(r_,a),Fr(tl,i);const c=St();return xt(()=>[c.value,a.value,t.name],([l,u,f],[h,d,p])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Hr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Zh(n.default,{Component:h,route:l});const d=f.props[u],p=d?d===!0?l.params:typeof d=="function"?d(l):d:null,C=si(h,ge({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Zh(n.default,{Component:C,route:l})||C}}});function Zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const u_=l_;function f_(t){const e=$E(t.routes,t),n=t.parseQuery||t_,r=t.stringifyQuery||Wh,i=t.history,s=bi(),o=bi(),a=bi(),c=su(bn);let l=bn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,_=>""+_),f=dc.bind(null,e_),h=dc.bind(null,Ro);function d(_,P){let N,j;return ig(_)?(N=e.getRecordMatcher(_),j=P):j=_,e.addRoute(j,N)}function p(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function y(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function v(_,P){if(P=ge({},P||c.value),typeof _=="string"){const m=mc(n,_,P.path),g=e.resolve({path:m.path},P),b=i.createHref(m.fullPath);return ge(m,g,{params:h(g.params),hash:Ro(m.hash),redirectedFrom:void 0,href:b})}let N;if("path"in _)N=ge({},_,{path:mc(n,_.path,P.path).path});else{const m=ge({},_.params);for(const g in m)m[g]==null&&delete m[g];N=ge({},_,{params:f(_.params)}),P.params=f(P.params)}const j=e.resolve(N,P),le=_.hash||"";j.params=u(h(j.params));const Oe=dE(r,ge({},_,{hash:XE(le),path:j.path})),re=i.createHref(Oe);return ge({fullPath:Oe,hash:le,query:r===Wh?n_(_.query):_.query||{}},j,{redirectedFrom:void 0,href:re})}function w(_){return typeof _=="string"?mc(n,_,c.value.path):ge({},_)}function S(_,P){if(l!==_)return qr(8,{from:P,to:_})}function M(_){return he(_)}function q(_){return M(ge(w(_),{replace:!0}))}function fe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let j=typeof N=="function"?N(_):N;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),ge({query:_.query,hash:_.hash,params:"path"in j?{}:_.params},j)}}function he(_,P){const N=l=v(_),j=c.value,le=_.state,Oe=_.force,re=_.replace===!0,m=fe(N);if(m)return he(ge(w(m),{state:typeof m=="object"?ge({},le,m.state):le,force:Oe,replace:re}),P||N);const g=N;g.redirectedFrom=P;let b;return!Oe&&mE(r,j,N)&&(b=qr(16,{to:g,from:j}),Hn(j,j,!0,!1)),(b?Promise.resolve(b):ae(g,j)).catch(E=>en(E)?en(E,2)?E:It(E):be(E,g,j)).then(E=>{if(E){if(en(E,2))return he(ge({replace:re},w(E.to),{state:typeof E.to=="object"?ge({},le,E.to.state):le,force:Oe}),P||g)}else E=Be(g,j,!0,re,le);return de(g,j,E),E})}function W(_,P){const N=S(_,P);return N?Promise.reject(N):Promise.resolve()}function ae(_,P){let N;const[j,le,Oe]=h_(_,P);N=pc(j.reverse(),"beforeRouteLeave",_,P);for(const m of j)m.leaveGuards.forEach(g=>{N.push(Cn(g,_,P))});const re=W.bind(null,_,P);return N.push(re),Tr(N).then(()=>{N=[];for(const m of s.list())N.push(Cn(m,_,P));return N.push(re),Tr(N)}).then(()=>{N=pc(le,"beforeRouteUpdate",_,P);for(const m of le)m.updateGuards.forEach(g=>{N.push(Cn(g,_,P))});return N.push(re),Tr(N)}).then(()=>{N=[];for(const m of _.matched)if(m.beforeEnter&&!P.matched.includes(m))if(Bt(m.beforeEnter))for(const g of m.beforeEnter)N.push(Cn(g,_,P));else N.push(Cn(m.beforeEnter,_,P));return N.push(re),Tr(N)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),N=pc(Oe,"beforeRouteEnter",_,P),N.push(re),Tr(N))).then(()=>{N=[];for(const m of o.list())N.push(Cn(m,_,P));return N.push(re),Tr(N)}).catch(m=>en(m,8)?m:Promise.reject(m))}function de(_,P,N){for(const j of a.list())j(_,P,N)}function Be(_,P,N,j,le){const Oe=S(_,P);if(Oe)return Oe;const re=P===bn,m=xr?history.state:{};N&&(j||re?i.replace(_.fullPath,ge({scroll:re&&m&&m.scroll},le)):i.push(_.fullPath,le)),c.value=_,Hn(_,P,N,re),It()}let F;function Ee(){F||(F=i.listen((_,P,N)=>{if(!Ls.listening)return;const j=v(_),le=fe(j);if(le){he(ge(le,{replace:!0}),j).catch(ki);return}l=j;const Oe=c.value;xr&&_E(Uh(Oe.fullPath,N.delta),ba()),ae(j,Oe).catch(re=>en(re,12)?re:en(re,2)?(he(re.to,j).then(m=>{en(m,20)&&!N.delta&&N.type===Wi.pop&&i.go(-1,!1)}).catch(ki),Promise.reject()):(N.delta&&i.go(-N.delta,!1),be(re,j,Oe))).then(re=>{re=re||Be(j,Oe,!1),re&&(N.delta&&!en(re,8)?i.go(-N.delta,!1):N.type===Wi.pop&&en(re,20)&&i.go(-1,!1)),de(j,Oe,re)}).catch(ki)}))}let Ye=bi(),gn=bi(),ke;function be(_,P,N){It(_);const j=gn.list();return j.length?j.forEach(le=>le(_,P,N)):console.error(_),Promise.reject(_)}function ye(){return ke&&c.value!==bn?Promise.resolve():new Promise((_,P)=>{Ye.add([_,P])})}function It(_){return ke||(ke=!_,Ee(),Ye.list().forEach(([P,N])=>_?N(_):P()),Ye.reset()),_}function Hn(_,P,N,j){const{scrollBehavior:le}=t;if(!xr||!le)return Promise.resolve();const Oe=!N&&CE(Uh(_.fullPath,0))||(j||!N)&&history.state&&history.state.scroll||null;return au().then(()=>le(_,P,Oe)).then(re=>re&&EE(re)).catch(re=>be(re,_,P))}const kt=_=>i.go(_);let ut;const wr=new Set,Ls={currentRoute:c,listening:!0,addRoute:d,removeRoute:p,hasRoute:C,getRoutes:y,resolve:v,options:t,push:M,replace:q,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:gn.add,isReady:ye,install(_){const P=this;_.component("RouterLink",o_),_.component("RouterView",u_),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(c)}),xr&&!ut&&c.value===bn&&(ut=!0,M(i.location).catch(le=>{}));const N={};for(const le in bn)N[le]=ne(()=>c.value[le]);_.provide(bu,P),_.provide(hg,Zt(N)),_.provide(tl,c);const j=_.unmount;wr.add(_),_.unmount=function(){wr.delete(_),wr.size<1&&(l=bn,F&&F(),F=null,c.value=bn,ut=!1,ke=!1),j()}}};return Ls}function Tr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function h_(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hr(l,c))||i.push(c))}return[n,r,i]}const d_=[{path:"/",component:()=>Qc(()=>import("./Default.f47162ac.js"),["assets/Default.f47162ac.js","assets/tag.bffa74eb.js","assets/Default.71d361fe.css"]),children:[{path:"",name:"Home",component:()=>Qc(()=>import("./Home.e1e00737.js"),["assets/Home.e1e00737.js","assets/tag.bffa74eb.js","assets/Home.1fe68f00.css"])}]}],m_=f_({history:xE({}.BASE_URL),routes:d_});function p_(t){n1(),t.use(tE).use(m_)}function ed(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ed(Object(n),!0).forEach(function(r){ze(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ed(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Po(t){return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Po(t)}function g_(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function td(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y_(t,e,n){return e&&td(t.prototype,e),n&&td(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wu(t,e){return b_(t)||E_(t,e)||dg(t,e)||C_()}function gs(t){return v_(t)||w_(t)||dg(t)||__()}function v_(t){if(Array.isArray(t))return nl(t)}function b_(t){if(Array.isArray(t))return t}function w_(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function E_(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function dg(t,e){if(!!t){if(typeof t=="string")return nl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nl(t,e)}}function nl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function __(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nd=function(){},Eu={},mg={},pg=null,gg={mark:nd,measure:nd};try{typeof window<"u"&&(Eu=window),typeof document<"u"&&(mg=document),typeof MutationObserver<"u"&&(pg=MutationObserver),typeof performance<"u"&&(gg=performance)}catch{}var T_=Eu.navigator||{},rd=T_.userAgent,id=rd===void 0?"":rd,Rn=Eu,Te=mg,sd=pg,qs=gg;Rn.document;var pn=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",yg=~id.indexOf("MSIE")||~id.indexOf("Trident/"),Ks,Gs,Ws,Ys,Qs,an="___FONT_AWESOME___",rl=16,vg="fa",bg="svg-inline--fa",fr="data-fa-i2svg",il="data-fa-pseudo-element",S_="data-fa-pseudo-element-pending",_u="data-prefix",Cu="data-icon",od="fontawesome-i2svg",A_="async",x_=["HTML","HEAD","STYLE","SCRIPT"],wg=function(){try{return!0}catch{return!1}}(),Ce="classic",De="sharp",Tu=[Ce,De];function ys(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ce]}})}var Yi=ys((Ks={},ze(Ks,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ze(Ks,De,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ks)),Qi=ys((Gs={},ze(Gs,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ze(Gs,De,{solid:"fass",regular:"fasr",light:"fasl"}),Gs)),Xi=ys((Ws={},ze(Ws,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ze(Ws,De,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ws)),I_=ys((Ys={},ze(Ys,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ze(Ys,De,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ys)),k_=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Eg="fa-layers-text",O_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,D_=ys((Qs={},ze(Qs,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ze(Qs,De,{900:"fass",400:"fasr",300:"fasl"}),Qs)),_g=[1,2,3,4,5,6,7,8,9,10],N_=_g.concat([11,12,13,14,15,16,17,18,19,20]),R_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ji=new Set;Object.keys(Qi[Ce]).map(Ji.add.bind(Ji));Object.keys(Qi[De]).map(Ji.add.bind(Ji));var P_=[].concat(Tu,gs(Ji),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nr.GROUP,nr.SWAP_OPACITY,nr.PRIMARY,nr.SECONDARY]).concat(_g.map(function(t){return"".concat(t,"x")})).concat(N_.map(function(t){return"w-".concat(t)})),Di=Rn.FontAwesomeConfig||{};function L_(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function M_(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var F_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];F_.forEach(function(t){var e=wu(t,2),n=e[0],r=e[1],i=M_(L_(n));i!=null&&(Di[r]=i)})}var Cg={styleDefault:"solid",familyDefault:"classic",cssPrefix:vg,replacementClass:bg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Di.familyPrefix&&(Di.cssPrefix=Di.familyPrefix);var Kr=L(L({},Cg),Di);Kr.autoReplaceSvg||(Kr.observeMutations=!1);var B={};Object.keys(Cg).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){Kr[t]=n,Ni.forEach(function(r){return r(B)})},get:function(){return Kr[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Kr.cssPrefix=e,Ni.forEach(function(n){return n(B)})},get:function(){return Kr.cssPrefix}});Rn.FontAwesomeConfig=B;var Ni=[];function $_(t){return Ni.push(t),function(){Ni.splice(Ni.indexOf(t),1)}}var wn=rl,Gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function B_(t){if(!(!t||!pn)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}}var U_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zi(){for(var t=12,e="";t-- >0;)e+=U_[Math.random()*62|0];return e}function oi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Su(t){return t.classList?oi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Tg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V_(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Tg(t[n]),'" ')},"").trim()}function wa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Au(t){return t.size!==Gt.size||t.x!==Gt.x||t.y!==Gt.y||t.rotate!==Gt.rotate||t.flipX||t.flipY}function j_(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function z_(t){var e=t.transform,n=t.width,r=n===void 0?rl:n,i=t.height,s=i===void 0?rl:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&yg?c+="translate(".concat(e.x/wn-r/2,"em, ").concat(e.y/wn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/wn,"em), calc(-50% + ").concat(e.y/wn,"em)) "):c+="translate(".concat(e.x/wn,"em, ").concat(e.y/wn,"em) "),c+="scale(".concat(e.size/wn*(e.flipX?-1:1),", ").concat(e.size/wn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var H_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Sg(){var t=vg,e=bg,n=B.cssPrefix,r=B.replacementClass,i=H_;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ad=!1;function gc(){B.autoAddCss&&!ad&&(B_(Sg()),ad=!0)}var q_={mixout:function(){return{dom:{css:Sg,insertCss:gc}}},hooks:function(){return{beforeDOMElementCreation:function(){gc()},beforeI2svg:function(){gc()}}}},cn=Rn||{};cn[an]||(cn[an]={});cn[an].styles||(cn[an].styles={});cn[an].hooks||(cn[an].hooks={});cn[an].shims||(cn[an].shims=[]);var Lt=cn[an],Ag=[],K_=function t(){Te.removeEventListener("DOMContentLoaded",t),Lo=1,Ag.map(function(e){return e()})},Lo=!1;pn&&(Lo=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Lo||Te.addEventListener("DOMContentLoaded",K_));function G_(t){!pn||(Lo?setTimeout(t,0):Ag.push(t))}function vs(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Tg(t):"<".concat(e," ").concat(V_(r),">").concat(s.map(vs).join(""),"</").concat(e,">")}function cd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var W_=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},yc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?W_(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function Y_(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function sl(t){var e=Y_(t);return e.length===1?e[0].toString(16):null}function Q_(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ld(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ol(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ld(e);typeof Lt.hooks.addPack=="function"&&!i?Lt.hooks.addPack(t,ld(e)):Lt.styles[t]=L(L({},Lt.styles[t]||{}),s),t==="fas"&&ol("fa",e)}var Xs,Js,Zs,Or=Lt.styles,X_=Lt.shims,J_=(Xs={},ze(Xs,Ce,Object.values(Xi[Ce])),ze(Xs,De,Object.values(Xi[De])),Xs),xu=null,xg={},Ig={},kg={},Og={},Dg={},Z_=(Js={},ze(Js,Ce,Object.keys(Yi[Ce])),ze(Js,De,Object.keys(Yi[De])),Js);function eC(t){return~P_.indexOf(t)}function tC(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!eC(i)?i:null}var Ng=function(){var e=function(s){return yc(Or,function(o,a,c){return o[c]=yc(a,s,{}),o},{})};xg=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),Ig=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),Dg=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Or||B.autoFetchSvg,r=yc(X_,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});kg=r.names,Og=r.unicodes,xu=Ea(B.styleDefault,{family:B.familyDefault})};$_(function(t){xu=Ea(t.styleDefault,{family:B.familyDefault})});Ng();function Iu(t,e){return(xg[t]||{})[e]}function nC(t,e){return(Ig[t]||{})[e]}function rr(t,e){return(Dg[t]||{})[e]}function Rg(t){return kg[t]||{prefix:null,iconName:null}}function rC(t){var e=Og[t],n=Iu("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pn(){return xu}var ku=function(){return{prefix:null,iconName:null,rest:[]}};function Ea(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ce:n,i=Yi[r][t],s=Qi[r][t]||Qi[r][i],o=t in Lt.styles?t:null;return s||o||null}var ud=(Zs={},ze(Zs,Ce,Object.keys(Xi[Ce])),ze(Zs,De,Object.keys(Xi[De])),Zs);function _a(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ze(e,Ce,"".concat(B.cssPrefix,"-").concat(Ce)),ze(e,De,"".concat(B.cssPrefix,"-").concat(De)),e),o=null,a=Ce;(t.includes(s[Ce])||t.some(function(l){return ud[Ce].includes(l)}))&&(a=Ce),(t.includes(s[De])||t.some(function(l){return ud[De].includes(l)}))&&(a=De);var c=t.reduce(function(l,u){var f=tC(B.cssPrefix,u);if(Or[u]?(u=J_[a].includes(u)?I_[a][u]:u,o=u,l.prefix=u):Z_[a].indexOf(u)>-1?(o=u,l.prefix=Ea(u,{family:a})):f?l.iconName=f:u!==B.replacementClass&&u!==s[Ce]&&u!==s[De]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=o==="fa"?Rg(l.iconName):{},d=rr(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Or.far&&Or.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},ku());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===De&&(Or.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=rr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Pn()||"fas"),c}var iC=function(){function t(){g_(this,t),this.definitions={}}return y_(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),ol(a,o[a]);var c=Xi[Ce][a];c&&ol(c,o[a]),Ng()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),t}(),fd=[],Dr={},$r={},sC=Object.keys($r);function oC(t,e){var n=e.mixoutsTo;return fd=t,Dr={},Object.keys($r).forEach(function(r){sC.indexOf(r)===-1&&delete $r[r]}),fd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Po(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Dr[o]||(Dr[o]=[]),Dr[o].push(s[o])})}r.provides&&r.provides($r)}),n}function al(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Dr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function hr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Dr[t]||[];i.forEach(function(s){s.apply(null,n)})}function ln(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $r[t]?$r[t].apply(null,e):void 0}function cl(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pn();if(!!e)return e=rr(n,e)||e,cd(Pg.definitions,n,e)||cd(Lt.styles,n,e)}var Pg=new iC,aC=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,hr("noAuto")},cC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(hr("beforeI2svg",e),ln("pseudoElements2svg",e),ln("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,G_(function(){uC({autoReplaceSvgRoot:n}),hr("watch",e)})}},lC={icon:function(e){if(e===null)return null;if(Po(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:rr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ea(e[0]);return{prefix:r,iconName:rr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(k_))){var i=_a(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pn(),iconName:rr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Pn();return{prefix:s,iconName:rr(s,e)||e}}}},Ct={noAuto:aC,config:B,dom:cC,parse:lC,library:Pg,findIconDefinition:cl,toHtml:vs},uC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Te:n;(Object.keys(Lt.styles).length>0||B.autoFetchSvg)&&pn&&B.autoReplaceSvg&&Ct.dom.i2svg({node:r})};function Ca(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return vs(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!pn){var r=Te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function fC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Au(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=wa(L(L({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function hC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Ou(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,d=h===void 0?!1:h,p=r.found?r:n,y=p.width,C=p.height,v=i==="fak",w=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(ae){return f.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(f.classes).join(" "),S={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(C)})},M=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/C*16*.0625,"em")}:{};d&&(S.attributes[fr]=""),c&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Zi())},children:[c]}),delete S.attributes.title);var q=L(L({},S),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:L(L({},M),f.styles)}),fe=r.found&&n.found?ln("generateAbstractMask",q)||{children:[],attributes:{}}:ln("generateAbstractIcon",q)||{children:[],attributes:{}},he=fe.children,W=fe.attributes;return q.children=he,q.attributes=W,a?hC(q):fC(q)}function hd(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[fr]="");var u=L({},o.styles);Au(i)&&(u.transform=z_({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=wa(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function dC(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=wa(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vc=Lt.styles;function ll(t){var e=t[0],n=t[1],r=t.slice(4),i=wu(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(nr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(nr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(nr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var mC={found:!1,width:512,height:512};function pC(t,e){!wg&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ul(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=Pn()),new Promise(function(r,i){if(ln("missingIconAbstract"),n==="fa"){var s=Rg(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&vc[e]&&vc[e][t]){var o=vc[e][t];return r(ll(o))}pC(t,e),r(L(L({},mC),{},{icon:B.showMissingIcons&&t?ln("missingIconAbstract")||{}:{}}))})}var dd=function(){},fl=B.measurePerformance&&qs&&qs.mark&&qs.measure?qs:{mark:dd,measure:dd},_i='FA "6.4.0"',gC=function(e){return fl.mark("".concat(_i," ").concat(e," begins")),function(){return Lg(e)}},Lg=function(e){fl.mark("".concat(_i," ").concat(e," ends")),fl.measure("".concat(_i," ").concat(e),"".concat(_i," ").concat(e," begins"),"".concat(_i," ").concat(e," ends"))},Du={begin:gC,end:Lg},bo=function(){};function md(t){var e=t.getAttribute?t.getAttribute(fr):null;return typeof e=="string"}function yC(t){var e=t.getAttribute?t.getAttribute(_u):null,n=t.getAttribute?t.getAttribute(Cu):null;return e&&n}function vC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function bC(){if(B.autoReplaceSvg===!0)return wo.replace;var t=wo[B.autoReplaceSvg];return t||wo.replace}function wC(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function EC(t){return Te.createElement(t)}function Mg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?wC:EC:n;if(typeof t=="string")return Te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Mg(o,{ceFn:r}))}),i}function _C(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var wo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Mg(i),n)}),n.getAttribute(fr)===null&&B.keepOriginalSource){var r=Te.createComment(_C(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Su(n).indexOf(B.replacementClass))return wo.replace(e);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return vs(a)}).join(`
`);n.setAttribute(fr,""),n.innerHTML=o}};function pd(t){t()}function Fg(t,e){var n=typeof e=="function"?e:bo;if(t.length===0)n();else{var r=pd;B.mutateApproach===A_&&(r=Rn.requestAnimationFrame||pd),r(function(){var i=bC(),s=Du.begin("mutate");t.map(i),s(),n()})}}var Nu=!1;function $g(){Nu=!0}function hl(){Nu=!1}var Mo=null;function gd(t){if(!!sd&&!!B.observeMutations){var e=t.treeCallback,n=e===void 0?bo:e,r=t.nodeCallback,i=r===void 0?bo:r,s=t.pseudoElementsCallback,o=s===void 0?bo:s,a=t.observeMutationsRoot,c=a===void 0?Te:a;Mo=new sd(function(l){if(!Nu){var u=Pn();oi(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!md(f.addedNodes[0])&&(B.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&md(f.target)&&~R_.indexOf(f.attributeName))if(f.attributeName==="class"&&yC(f.target)){var h=_a(Su(f.target)),d=h.prefix,p=h.iconName;f.target.setAttribute(_u,d||u),p&&f.target.setAttribute(Cu,p)}else vC(f.target)&&i(f.target)})}}),pn&&Mo.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CC(){!Mo||Mo.disconnect()}function TC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function SC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=_a(Su(t));return i.prefix||(i.prefix=Pn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nC(i.prefix,t.innerText)||Iu(i.prefix,sl(t.innerText))),!i.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function AC(t){var e=oi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||Zi()):(e["aria-hidden"]="true",e.focusable="false")),e}function xC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=SC(t),r=n.iconName,i=n.prefix,s=n.rest,o=AC(t),a=al("parseNodeAttributes",{},t),c=e.styleParser?TC(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var IC=Lt.styles;function Bg(t){var e=B.autoReplaceSvg==="nest"?yd(t,{styleParser:!1}):yd(t);return~e.extra.classes.indexOf(Eg)?ln("generateLayersText",t,e):ln("generateSvgReplacementMutation",t,e)}var Ln=new Set;Tu.map(function(t){Ln.add("fa-".concat(t))});Object.keys(Yi[Ce]).map(Ln.add.bind(Ln));Object.keys(Yi[De]).map(Ln.add.bind(Ln));Ln=gs(Ln);function vd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=Te.documentElement.classList,r=function(f){return n.add("".concat(od,"-").concat(f))},i=function(f){return n.remove("".concat(od,"-").concat(f))},s=B.autoFetchSvg?Ln:Tu.map(function(u){return"fa-".concat(u)}).concat(Object.keys(IC));s.includes("fa")||s.push("fa");var o=[".".concat(Eg,":not([").concat(fr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(fr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=oi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Du.begin("onTree"),l=a.reduce(function(u,f){try{var h=Bg(f);h&&u.push(h)}catch(d){wg||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){Fg(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(h){c(),f(h)})})}function kC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bg(t).then(function(n){n&&Fg([n],e)})}function OC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cl(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:cl(i||{})),t(r,L(L({},n),{},{mask:i}))}}var DC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Gt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,d=n.titleId,p=d===void 0?null:d,y=n.classes,C=y===void 0?[]:y,v=n.attributes,w=v===void 0?{}:v,S=n.styles,M=S===void 0?{}:S;if(!!e){var q=e.prefix,fe=e.iconName,he=e.icon;return Ca(L({type:"icon"},e),function(){return hr("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(h?w["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(p||Zi()):(w["aria-hidden"]="true",w.focusable="false")),Ou({icons:{main:ll(he),mask:c?ll(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:fe,transform:L(L({},Gt),i),symbol:o,title:h,maskId:u,titleId:p,extra:{attributes:w,styles:M,classes:C}})})}},NC={mixout:function(){return{icon:OC(DC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vd,n.nodeCallback=kC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Te:r,s=n.callback,o=s===void 0?function(){}:s;return vd(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,p){Promise.all([ul(i,a),u.iconName?ul(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var C=wu(y,2),v=C[0],w=C[1];d([n,Ou({icons:{main:v,mask:w},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=wa(a);c.length>0&&(i.style=c);var l;return Au(o)&&(l=ln("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},RC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ca({type:"layer"},function(){hr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(gs(s)).join(" ")},children:o}]})}}}},PC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Ca({type:"counter",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),dC({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(gs(a))}})})}}}},LC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Gt:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return Ca({type:"text",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),hd({content:n,transform:L(L({},Gt),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(gs(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(yg){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,hd({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},MC=new RegExp('"',"ug"),bd=[1105920,1112319];function FC(t){var e=t.replace(MC,""),n=Q_(e,0),r=n>=bd[0]&&n<=bd[1],i=e.length===2?e[0]===e[1]:!1;return{value:sl(i?e[0]:e),isSecondary:r||i}}function wd(t,e){var n="".concat(S_).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=oi(t.children),o=s.filter(function(he){return he.getAttribute(il)===e})[0],a=Rn.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(O_),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?De:Ce,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Qi[h][c[2].toLowerCase()]:D_[h][l],p=FC(f),y=p.value,C=p.isSecondary,v=c[0].startsWith("FontAwesome"),w=Iu(d,y),S=w;if(v){var M=rC(y);M.iconName&&M.prefix&&(w=M.iconName,d=M.prefix)}if(w&&!C&&(!o||o.getAttribute(_u)!==d||o.getAttribute(Cu)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);var q=xC(),fe=q.extra;fe.attributes[il]=e,ul(w,d).then(function(he){var W=Ou(L(L({},q),{},{icons:{main:he,mask:ku()},prefix:d,iconName:S,extra:fe,watchable:!0})),ae=Te.createElement("svg");e==="::before"?t.insertBefore(ae,t.firstChild):t.appendChild(ae),ae.outerHTML=W.map(function(de){return vs(de)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $C(t){return Promise.all([wd(t,"::before"),wd(t,"::after")])}function BC(t){return t.parentNode!==document.head&&!~x_.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(il)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ed(t){if(!!pn)return new Promise(function(e,n){var r=oi(t.querySelectorAll("*")).filter(BC).map($C),i=Du.begin("searchPseudoElements");$g(),Promise.all(r).then(function(){i(),hl(),e()}).catch(function(){i(),hl(),n()})})}var UC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ed,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Te:r;B.searchPseudoElements&&Ed(i)}}},_d=!1,VC={mixout:function(){return{dom:{unwatch:function(){$g(),_d=!0}}}},hooks:function(){return{bootstrap:function(){gd(al("mutationObserverCallbacks",{}))},noAuto:function(){CC()},watch:function(n){var r=n.observeMutationsRoot;_d?hl():gd(al("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cd=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},jC={mixout:function(){return{parse:{transform:function(n){return Cd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cd(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:L({},d.outer),children:[{tag:"g",attributes:L({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),d.path)}]}]}}}},bc={x:0,y:0,width:"100%",height:"100%"};function Td(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zC(t){return t.tag==="g"?t.children:[t]}var HC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?_a(i.split(" ").map(function(o){return o.trim()})):ku();return s.prefix||(s.prefix=Pn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,d=j_({transform:c,containerWidth:f,iconWidth:l}),p={tag:"rect",attributes:L(L({},bc),{},{fill:"white"})},y=u.children?{children:u.children.map(Td)}:{},C={tag:"g",attributes:L({},d.inner),children:[Td(L({tag:u.tag,attributes:L(L({},u.attributes),d.path)},y))]},v={tag:"g",attributes:L({},d.outer),children:[C]},w="mask-".concat(a||Zi()),S="clip-".concat(a||Zi()),M={tag:"mask",attributes:L(L({},bc),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:zC(h)},M]};return r.push(q,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},bc)}),{children:r,attributes:i}}}},qC={provides:function(e){var n=!1;Rn.matchMedia&&(n=Rn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},KC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},GC=[q_,NC,RC,PC,LC,UC,VC,jC,HC,qC,KC];oC(GC,{mixoutsTo:Ct});Ct.noAuto;var Ug=Ct.config,WC=Ct.library;Ct.dom;var Fo=Ct.parse;Ct.findIconDefinition;Ct.toHtml;var YC=Ct.icon;Ct.layer;var QC=Ct.text;Ct.counter;var XC={prefix:"fas",iconName:"hat-wizard",icon:[512,512,[],"f6e8","M64 416L168.6 180.7c15.3-34.4 40.3-63.5 72-83.7l146.9-94c3-1.9 6.5-2.9 10-2.9C407.7 0 416 8.3 416 18.6v1.6c0 2.6-.5 5.1-1.4 7.5L354.8 176.9c-1.9 4.7-2.8 9.7-2.8 14.7c0 5.5 1.2 11 3.4 16.1L448 416H240.9l11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 276.4 230.9 272 224 272s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 339 144 345.1 144 352s4.4 13 10.9 15.2l40.4 13.5L207.1 416H64zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};function Sd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Rt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sd(Object(n),!0).forEach(function(r){ft(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $o(t){return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$o(t)}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZC(t,e){if(t==null)return{};var n=JC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function dl(t){return eT(t)||tT(t)||nT(t)||rT()}function eT(t){if(Array.isArray(t))return ml(t)}function tT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nT(t,e){if(!!t){if(typeof t=="string")return ml(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ml(t,e)}}function ml(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var iT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vg={exports:{}};(function(t){(function(e){var n=function(v,w,S){if(!l(w)||f(w)||h(w)||d(w)||c(w))return w;var M,q=0,fe=0;if(u(w))for(M=[],fe=w.length;q<fe;q++)M.push(n(v,w[q],S));else{M={};for(var he in w)Object.prototype.hasOwnProperty.call(w,he)&&(M[v(he,S)]=n(v,w[he],S))}return M},r=function(v,w){w=w||{};var S=w.separator||"_",M=w.split||/(?=[A-Z])/;return v.split(M).join(S)},i=function(v){return p(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,S){return S?S.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=i(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},h=function(v){return a.call(v)=="[object RegExp]"},d=function(v){return a.call(v)=="[object Boolean]"},p=function(v){return v=v-0,v===v},y=function(v,w){var S=w&&"process"in w?w.process:w;return typeof S!="function"?v:function(M,q){return S(M,v,q)}},C={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(y(i,w),v)},decamelizeKeys:function(v,w){return n(y(o,w),v,w)},pascalizeKeys:function(v,w){return n(y(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(iT)})(Vg);var sT=Vg.exports,oT=["class","style"];function aT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=sT.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function cT(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ru(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Ru(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=cT(u);break;case"style":c.style=aT(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=ZC(n,oT);return si(t.tag,Rt(Rt(Rt({},e),{},{class:i.class,style:Rt(Rt({},i.style),o)},i.attrs),a),r)}var jg=!1;try{jg=!0}catch{}function lT(){if(!jg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ri(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ft({},t,e):{}}function uT(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ft(e,"fa-".concat(t.size),t.size!==null),ft(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ft(e,"fa-pull-".concat(t.pull),t.pull!==null),ft(e,"fa-swap-opacity",t.swapOpacity),ft(e,"fa-bounce",t.bounce),ft(e,"fa-shake",t.shake),ft(e,"fa-beat",t.beat),ft(e,"fa-fade",t.fade),ft(e,"fa-beat-fade",t.beatFade),ft(e,"fa-flash",t.flash),ft(e,"fa-spin-pulse",t.spinPulse),ft(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ad(t){if(t&&$o(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fo.icon)return Fo.icon(t);if(t===null)return null;if($o(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var fT=ii({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ne(function(){return Ad(e.icon)}),s=ne(function(){return Ri("classes",uT(e))}),o=ne(function(){return Ri("transform",typeof e.transform=="string"?Fo.transform(e.transform):e.transform)}),a=ne(function(){return Ri("mask",Ad(e.mask))}),c=ne(function(){return YC(i.value,Rt(Rt(Rt(Rt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});xt(c,function(u){if(!u)return lT("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=ne(function(){return c.value?Ru(c.value.abstract[0],{},r):null});return function(){return l.value}}});ii({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Ug.familyPrefix,s=ne(function(){return["".concat(i,"-layers")].concat(dl(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return si("div",{class:s.value},r.default?r.default():[])}}});ii({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Ug.familyPrefix,s=ne(function(){return Ri("classes",[].concat(dl(e.counter?["".concat(i,"-layers-counter")]:[]),dl(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ne(function(){return Ri("transform",typeof e.transform=="string"?Fo.transform(e.transform):e.transform)}),a=ne(function(){var l=QC(e.value.toString(),Rt(Rt({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=ne(function(){return Ru(a.value,{},r)});return function(){return c.value}}});let eo;const hT=new Uint8Array(16);function dT(){if(!eo&&(eo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!eo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return eo(hT)}const Qe=[];for(let t=0;t<256;++t)Qe.push((t+256).toString(16).slice(1));function mT(t,e=0){return(Qe[t[e+0]]+Qe[t[e+1]]+Qe[t[e+2]]+Qe[t[e+3]]+"-"+Qe[t[e+4]]+Qe[t[e+5]]+"-"+Qe[t[e+6]]+Qe[t[e+7]]+"-"+Qe[t[e+8]]+Qe[t[e+9]]+"-"+Qe[t[e+10]]+Qe[t[e+11]]+Qe[t[e+12]]+Qe[t[e+13]]+Qe[t[e+14]]+Qe[t[e+15]]).toLowerCase()}const pT=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xd={randomUUID:pT};function gT(t,e,n){if(xd.randomUUID&&!e&&!t)return xd.randomUUID();t=t||{};const r=t.random||(t.rng||dT)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return mT(r)}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var yT="store";function ai(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function vT(t){return t!==null&&typeof t=="object"}function bT(t){return t&&typeof t.then=="function"}function wT(t,e){return function(){return t(e)}}function zg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Hg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ta(t,n,[],t._modules.root,!0),Pu(t,n,e)}function Pu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};ai(i,function(o,a){s[a]=wT(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=Zt({data:e}),t.strict&&ST(t),r&&n&&t._withCommit(function(){r.data=null})}function Ta(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=Lu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=ET(t,o,n);r.forEachMutation(function(u,f){var h=o+f;_T(t,h,u,l)}),r.forEachAction(function(u,f){var h=u.root?f:o+f,d=u.handler||u;CT(t,h,d,l)}),r.forEachGetter(function(u,f){var h=o+f;TT(t,h,u,l)}),r.forEachChild(function(u,f){Ta(t,e,n.concat(f),u,i)})}function ET(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=Bo(s,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=e+f),t.dispatch(f,l)},commit:r?t.commit:function(s,o,a){var c=Bo(s,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=e+f),t.commit(f,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return qg(t,e)}},state:{get:function(){return Lu(t.state,n)}}}),i}function qg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function _T(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function CT(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return bT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function TT(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function ST(t){xt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Lu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Bo(t,e,n){return vT(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var AT="vuex bindings",Id="vuex:mutations",wc="vuex:actions",Sr="vuex",xT=0;function IT(t,e){lE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[AT]},function(n){n.addTimelineLayer({id:Id,label:"Vuex Mutations",color:kd}),n.addTimelineLayer({id:wc,label:"Vuex Actions",color:kd}),n.addInspector({id:Sr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Sr)if(r.filter){var i=[];Yg(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Wg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Sr){var i=r.nodeId;qg(e,i),r.state=DT(RT(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Sr){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Sr),n.sendInspectorState(Sr),n.addTimelineEvent({layerId:Id,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=xT++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:wc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:wc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var kd=8702998,kT=6710886,OT=16777215,Kg={label:"namespaced",textColor:OT,backgroundColor:kT};function Gg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Wg(t,e){return{id:e||"root",label:Gg(e),tags:t.namespaced?[Kg]:[],children:Object.keys(t._children).map(function(n){return Wg(t._children[n],e+n+"/")})}}function Yg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Kg]:[]}),Object.keys(e._children).forEach(function(i){Yg(t,e._children[i],n,r+i+"/")})}function DT(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=NT(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Gg(o):o,editable:!1,value:pl(function(){return s[o]})}})}return i}function NT(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=pl(function(){return t[n]})}else e[n]=pl(function(){return t[n]})}),e}function RT(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function pl(t){try{return t()}catch(e){return e}}var Ut=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Qg={namespaced:{configurable:!0}};Qg.namespaced.get=function(){return!!this._rawModule.namespaced};Ut.prototype.addChild=function(e,n){this._children[e]=n};Ut.prototype.removeChild=function(e){delete this._children[e]};Ut.prototype.getChild=function(e){return this._children[e]};Ut.prototype.hasChild=function(e){return e in this._children};Ut.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ut.prototype.forEachChild=function(e){ai(this._children,e)};Ut.prototype.forEachGetter=function(e){this._rawModule.getters&&ai(this._rawModule.getters,e)};Ut.prototype.forEachAction=function(e){this._rawModule.actions&&ai(this._rawModule.actions,e)};Ut.prototype.forEachMutation=function(e){this._rawModule.mutations&&ai(this._rawModule.mutations,e)};Object.defineProperties(Ut.prototype,Qg);var gr=function(e){this.register([],e,!1)};gr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};gr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};gr.prototype.update=function(e){Xg([],this.root,e)};gr.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new Ut(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&ai(n.modules,function(a,c){i.register(e.concat(c),a,r)})};gr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};gr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Xg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Xg(t.concat(r),e.getChild(r),n.modules[r])}}function PT(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(h,d){return c.call(o,h,d)},this.commit=function(h,d,p){return l.call(o,h,d,p)},this.strict=i;var u=this._modules.root.state;Ta(this,u,[],this._modules.root),Pu(this,u),r.forEach(function(f){return f(n)})},Mu={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||yT,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&IT(e,this)};Mu.state.get=function(){return this._state.data};Mu.state.set=function(t){};gt.prototype.commit=function(e,n,r){var i=this,s=Bo(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};gt.prototype.dispatch=function(e,n){var r=this,i=Bo(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(h){try{r._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,r.state,h)})}catch{}f(h)})})}};gt.prototype.subscribe=function(e,n){return zg(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return zg(r,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,r){var i=this;return xt(function(){return e(i.state,i.getters)},n,Object.assign({},r))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ta(this,this.state,e,this._modules.get(e),r.preserveState),Pu(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Lu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Hg(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),Hg(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,Mu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(n[u],n[f],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new MT;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const p=l<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FT=function(t){const e=Jg(t);return Zg.encodeByteArray(e,!0)},Uo=function(t){return FT(t).replace(/\./g,"")},$T=function(t){try{return Zg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=()=>BT().__FIREBASE_DEFAULTS__,VT=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$T(t[1]);return e&&JSON.parse(e)},ey=()=>{try{return UT()||VT()||jT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zT=t=>{var e,n;return(n=(e=ey())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HT=t=>{const e=zT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qT=()=>{var t;return(t=ey())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),a].join(".")}function WT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="FirebaseError";class ci extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QT,Object.setPrototypeOf(this,ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ty.prototype.create)}}class ty{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ci(i,a,r)}}function XT(t,e){return t.replace(JT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JT=/\{\$([^}]+)}/g;function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Od(s)&&Od(o)){if(!gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Od(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tS(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eS(t){return t===Qn?void 0:t}function tS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const rS={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},iS=me.INFO,sS={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},oS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ny{constructor(e){this.name=e,this._logLevel=iS,this._logHandler=oS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const aS=(t,e)=>e.some(n=>t instanceof n);let Dd,Nd;function cS(){return Dd||(Dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lS(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ry=new WeakMap,yl=new WeakMap,iy=new WeakMap,Ec=new WeakMap,Fu=new WeakMap;function uS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ry.set(n,t)}).catch(()=>{}),Fu.set(e,t),e}function fS(t){if(yl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hS(t){vl=t(vl)}function dS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return iy.set(r,e.sort?e.sort():[e]),xn(r)}:lS().includes(t)?function(...e){return t.apply(_c(this),e),xn(ry.get(this))}:function(...e){return xn(t.apply(_c(this),e))}}function mS(t){return typeof t=="function"?dS(t):(t instanceof IDBTransaction&&fS(t),aS(t,cS())?new Proxy(t,vl):t)}function xn(t){if(t instanceof IDBRequest)return uS(t);if(Ec.has(t))return Ec.get(t);const e=mS(t);return e!==t&&(Ec.set(t,e),Fu.set(e,t)),e}const _c=t=>Fu.get(t);function pS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xn(o.result),c.oldVersion,c.newVersion,xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const gS=["get","getKey","getAll","getAllKeys","count"],yS=["put","add","delete","clear"],Cc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Cc.set(e,s),s}hS(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",Pd="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new ny("@firebase/app"),wS="@firebase/app-compat",ES="@firebase/analytics-compat",_S="@firebase/analytics",CS="@firebase/app-check-compat",TS="@firebase/app-check",SS="@firebase/auth",AS="@firebase/auth-compat",xS="@firebase/database",IS="@firebase/database-compat",kS="@firebase/functions",OS="@firebase/functions-compat",DS="@firebase/installations",NS="@firebase/installations-compat",RS="@firebase/messaging",PS="@firebase/messaging-compat",LS="@firebase/performance",MS="@firebase/performance-compat",FS="@firebase/remote-config",$S="@firebase/remote-config-compat",BS="@firebase/storage",US="@firebase/storage-compat",VS="@firebase/firestore",jS="@firebase/firestore-compat",zS="firebase",HS="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="[DEFAULT]",qS={[bl]:"fire-core",[wS]:"fire-core-compat",[_S]:"fire-analytics",[ES]:"fire-analytics-compat",[TS]:"fire-app-check",[CS]:"fire-app-check-compat",[SS]:"fire-auth",[AS]:"fire-auth-compat",[xS]:"fire-rtdb",[IS]:"fire-rtdb-compat",[kS]:"fire-fn",[OS]:"fire-fn-compat",[DS]:"fire-iid",[NS]:"fire-iid-compat",[RS]:"fire-fcm",[PS]:"fire-fcm-compat",[LS]:"fire-perf",[MS]:"fire-perf-compat",[FS]:"fire-rc",[$S]:"fire-rc-compat",[BS]:"fire-gcs",[US]:"fire-gcs-compat",[VS]:"fire-fst",[jS]:"fire-fst-compat","fire-js":"fire-js",[zS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,El=new Map;function KS(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jo(t){const e=t.name;if(El.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of Vo.values())KS(n,t);return!0}function GS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new ty("app","Firebase",WS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=HS;function sy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=qT()),!n)throw In.create("no-options");const s=Vo.get(i);if(s){if(gl(n,s.options)&&gl(r,s.config))return s;throw In.create("duplicate-app",{appName:i})}const o=new nS(i);for(const c of El.values())o.addComponent(c);const a=new YS(n,r,o);return Vo.set(i,a),a}function XS(t=wl){const e=Vo.get(t);if(!e&&t===wl)return sy();if(!e)throw In.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let i=(r=qS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}jo(new es(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="firebase-heartbeat-database",ZS=1,ts="firebase-heartbeat-store";let Tc=null;function oy(){return Tc||(Tc=pS(JS,ZS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function eA(t){try{return(await oy()).transaction(ts).objectStore(ts).get(ay(t))}catch(e){if(e instanceof ci)dr.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Ld(t,e){try{const r=(await oy()).transaction(ts,"readwrite");return await r.objectStore(ts).put(e,ay(t)),r.done}catch(n){if(n instanceof ci)dr.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function ay(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1024,nA=30*24*60*60*1e3;class rA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Md();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=nA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Md(),{heartbeatsToSend:n,unsentEntries:r}=iA(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Md(){return new Date().toISOString().substring(0,10)}function iA(t,e=tA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fd(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){jo(new es("platform-logger",e=>new vS(e),"PRIVATE")),jo(new es("heartbeat",e=>new rA(e),"PRIVATE")),Br(bl,Pd,t),Br(bl,Pd,"esm2017"),Br("fire-js","")}oA("");var aA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,$u=$u||{},X=aA||self;function zo(){}function Sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cA(t){return Object.prototype.hasOwnProperty.call(t,Sc)&&t[Sc]||(t[Sc]=++lA)}var Sc="closure_uid_"+(1e9*Math.random()>>>0),lA=0;function uA(t,e,n){return t.call.apply(t.bind,arguments)}function fA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=uA:st=fA,st.apply(null,arguments)}function to(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Vn(){this.s=this.s,this.o=this.o}var hA=0;Vn.prototype.s=!1;Vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hA!=0)&&cA(this)};Vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $d(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sa(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var dA=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",zo,e),X.removeEventListener("test",zo,e)}catch{}return t}();function Ho(t){return/^[\s\xa0]*$/.test(t)}var Bd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ac(t,e){return t<e?-1:t>e?1:0}function Aa(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return Aa().indexOf(t)!=-1}function Uu(t){return Uu[" "](t),t}Uu[" "]=zo;function mA(t){var e=yA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pA=qt("Opera"),Gr=qt("Trident")||qt("MSIE"),ly=qt("Edge"),_l=ly||Gr,uy=qt("Gecko")&&!(Aa().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),gA=Aa().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function fy(){var t=X.document;return t?t.documentMode:void 0}var qo;e:{var xc="",Ic=function(){var t=Aa();if(uy)return/rv:([^\);]+)(\)|;)/.exec(t);if(ly)return/Edge\/([\d\.]+)/.exec(t);if(Gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gA)return/WebKit\/(\S+)/.exec(t);if(pA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ic&&(xc=Ic?Ic[1]:""),Gr){var kc=fy();if(kc!=null&&kc>parseFloat(xc)){qo=String(kc);break e}}qo=xc}var yA={};function vA(){return mA(function(){let t=0;const e=Bd(String(qo)).split("."),n=Bd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ac(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ac(i[2].length==0,s[2].length==0)||Ac(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Cl;if(X.document&&Gr){var Ud=fy();Cl=Ud||parseInt(qo,10)||void 0}else Cl=void 0;var bA=Cl;function ns(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uy){e:{try{Uu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ns.X.h.call(this)}}Ze(ns,ot);var wA={2:"touch",3:"pen",4:"mouse"};ns.prototype.h=function(){ns.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ws="closure_listenable_"+(1e6*Math.random()|0),EA=0;function _A(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++EA,this.ba=this.ea=!1}function xa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hy(t){const e={};for(const n in t)e[n]=t[n];return e}const Vd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dy(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Vd.length;s++)n=Vd[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ia(t){this.src=t,this.g={},this.h=0}Ia.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sl(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new _A(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Tl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=cy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sl(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ju="closure_lm_"+(1e6*Math.random()|0),Oc={};function my(t,e,n,r,i){if(r&&r.once)return gy(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)my(t,e[s],n,r,i);return null}return n=qu(n),t&&t[ws]?t.N(e,n,bs(r)?!!r.capture:!!r,i):py(t,e,n,!1,r,i)}function py(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=bs(i)?!!i.capture:!!i,a=Hu(t);if(a||(t[ju]=a=new Ia(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CA(){function t(n){return e.call(t.src,t.listener,n)}const e=TA;return t}function gy(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gy(t,e[s],n,r,i);return null}return n=qu(n),t&&t[ws]?t.O(e,n,bs(r)?!!r.capture:!!r,i):py(t,e,n,!0,r,i)}function yy(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yy(t,e[s],n,r,i);else r=bs(r)?!!r.capture:!!r,n=qu(n),t&&t[ws]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sl(s,n,r,i),-1<n&&(xa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sl(e,n,r,i)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ws])Tl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hu(e))?(Tl(n,t),n.h==0&&(n.src=null,e[ju]=null)):xa(t)}}}function vy(t){return t in Oc?Oc[t]:Oc[t]="on"+t}function TA(t,e){if(t.ba)t=!0;else{e=new ns(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&zu(t),t=n.call(r,e)}return t}function Hu(t){return t=t[ju],t instanceof Ia?t:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qu(t){return typeof t=="function"?t:(t[Dc]||(t[Dc]=function(e){return t.handleEvent(e)}),t[Dc])}function We(){Vn.call(this),this.i=new Ia(this),this.P=this,this.I=null}Ze(We,Vn);We.prototype[ws]=!0;We.prototype.removeEventListener=function(t,e,n,r){yy(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),dy(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=no(o,r,!0,e)&&i}if(o=e.g=t,i=no(o,r,!0,e)&&i,i=no(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=no(o,r,!1,e)&&i}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xa(n[r]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function no(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Tl(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ku=X.JSON.stringify;function SA(){var t=Ey;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AA{constructor(){this.h=this.g=null}add(e,n){const r=by.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var by=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xA,t=>t.reset());class xA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IA(t){X.setTimeout(()=>{throw t},0)}function wy(t,e){Al||kA(),xl||(Al(),xl=!0),Ey.add(t,e)}var Al;function kA(){var t=X.Promise.resolve(void 0);Al=function(){t.then(OA)}}var xl=!1,Ey=new AA;function OA(){for(var t;t=SA();){try{t.h.call(t.g)}catch(n){IA(n)}var e=by;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xl=!1}function ka(t,e){We.call(this),this.h=t||1,this.g=e||X,this.j=st(this.lb,this),this.l=Date.now()}Ze(ka,We);U=ka.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(Gu(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){ka.X.M.call(this),Gu(this),delete this.g};function Wu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function _y(t){t.g=Wu(()=>{t.g=null,t.i&&(t.i=!1,_y(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DA extends Vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_y(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(t){Vn.call(this),this.h=t,this.g={}}Ze(rs,Vn);var jd=[];function Cy(t,e,n,r){Array.isArray(n)||(n&&(jd[0]=n.toString()),n=jd);for(var i=0;i<n.length;i++){var s=my(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ty(t){Vu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}rs.prototype.M=function(){rs.X.M.call(this),Ty(this)};rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oa(){this.g=!0}Oa.prototype.Aa=function(){this.g=!1};function NA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Nr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LA(t,n)+(r?" "+r:"")})}function PA(t,e){t.info(function(){return"TIMEOUT: "+e})}Oa.prototype.info=function(){};function LA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ku(n)}catch{return e}}var yr={},zd=null;function Da(){return zd=zd||new We}yr.Pa="serverreachability";function Sy(t){ot.call(this,yr.Pa,t)}Ze(Sy,ot);function is(t){const e=Da();Je(e,new Sy(e))}yr.STAT_EVENT="statevent";function Ay(t,e){ot.call(this,yr.STAT_EVENT,t),this.stat=e}Ze(Ay,ot);function lt(t){const e=Da();Je(e,new Ay(e,t))}yr.Qa="timingevent";function xy(t,e){ot.call(this,yr.Qa,t),this.size=e}Ze(xy,ot);function Es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Na={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Iy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yu(){}Yu.prototype.h=null;function Hd(t){return t.h||(t.h=t.i())}function ky(){}var _s={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qu(){ot.call(this,"d")}Ze(Qu,ot);function Xu(){ot.call(this,"c")}Ze(Xu,ot);var Il;function Ra(){}Ze(Ra,Yu);Ra.prototype.g=function(){return new XMLHttpRequest};Ra.prototype.i=function(){return{}};Il=new Ra;function Cs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new rs(this),this.O=MA,t=_l?125:void 0,this.T=new ka(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var MA=45e3,kl={},Ko={};U=Cs.prototype;U.setTimeout=function(t){this.O=t};function Ol(t,e,n){t.K=1,t.v=La(un(e)),t.s=n,t.P=!0,Dy(t,null)}function Dy(t,e){t.F=Date.now(),Ts(t),t.A=un(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),By(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Oy,t.g=ov(t.l,n?e:null,!t.s),0<t.N&&(t.L=new DA(st(t.La,t,t.g),t.N)),Cy(t.S,t.g,"readystatechange",t.ib),e=t.H?hy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),is(),NA(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&rn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=rn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||_l||this.g&&(this.h.h||this.g.fa()||Wd(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?is(3):is(2)),Pa(this);var n=this.g.aa();this.Y=n;t:if(Ny(this)){var r=Wd(this.g);t="";var i=r.length,s=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Pi(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,RA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ho(a)){var l=a;break t}}l=null}if(n=l)Nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dl(this,n);else{this.i=!1,this.o=3,lt(12),ir(this),Pi(this);break e}}this.P?(Ry(this,u,o),_l&&this.i&&u==3&&(Cy(this.S,this.T,"tick",this.hb),this.T.start())):(Nr(this.j,this.m,o,null),Dl(this,o)),u==4&&ir(this),this.i&&!this.I&&(u==4?nv(this.l,this):(this.i=!1,Ts(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),ir(this),Pi(this)}}}catch{}finally{}};function Ny(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ry(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=FA(t,n),i==Ko){e==4&&(t.o=4,lt(14),r=!1),Nr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==kl){t.o=4,lt(15),Nr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Nr(t.j,t.m,i,null),Dl(t,i);Ny(t)&&i!=Ko&&i!=kl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sf(e),e.K=!0,lt(11))):(Nr(t.j,t.m,n,"[Invalid Chunked Response]"),ir(t),Pi(t))}U.hb=function(){if(this.g){var t=rn(this.g),e=this.g.fa();this.C<e.length&&(Pa(this),Ry(this,t,e),this.i&&t!=4&&Ts(this))}};function FA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ko:(n=Number(e.substring(n,r)),isNaN(n)?kl:(r+=1,r+n>e.length?Ko:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,ir(this)};function Ts(t){t.V=Date.now()+t.O,Py(t,t.O)}function Py(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Es(st(t.gb,t),e)}function Pa(t){t.B&&(X.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PA(this.j,this.A),this.K!=2&&(is(),lt(17)),ir(this),this.o=2,Pi(this)):Py(this,this.V-t)};function Pi(t){t.l.G==0||t.I||nv(t.l,t)}function ir(t){Pa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gu(t.T),Ty(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Dl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Nl(n.h,t))){if(!t.J&&Nl(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yo(n),$a(n);else break e;rf(n),lt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Es(st(n.cb,n),6e3));if(1>=jy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else sr(n,11)}else if((t.J||n.g==t)&&Yo(n),!Ho(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ju(s,s.h),s.h=null))}if(r.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,xe(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=sv(r,r.H?r.ka:null,r.V),o.J){zy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Pa(a),Ts(a)),r.g=o}else ev(r);0<n.i.length&&Ba(n)}else l[0]!="stop"&&l[0]!="close"||sr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?sr(n,7):nf(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}is(4)}catch{}}function $A(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function BA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ly(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BA(t),r=$A(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var My=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lr){this.h=e!==void 0?e:t.h,Go(this,t.j),this.s=t.s,this.g=t.g,Wo(this,t.m),this.l=t.l,e=t.i;var n=new ss;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qd(this,n),this.o=t.o}else t&&(n=String(t).match(My))?(this.h=!!e,Go(this,n[1]||"",!0),this.s=Ci(n[2]||""),this.g=Ci(n[3]||"",!0),Wo(this,n[4]),this.l=Ci(n[5]||"",!0),qd(this,n[6]||"",!0),this.o=Ci(n[7]||"")):(this.h=!!e,this.i=new ss(null,this.h))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ti(e,Kd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ti(e,Kd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ti(n,n.charAt(0)=="/"?zA:jA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ti(n,qA)),t.join("")};function un(t){return new lr(t)}function Go(t,e,n){t.j=n?Ci(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qd(t,e,n){e instanceof ss?(t.i=e,KA(t.i,t.h)):(n||(e=Ti(e,HA)),t.i=new ss(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function La(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ci(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ti(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kd=/[#\/\?@]/g,jA=/[#\?:]/g,zA=/[#\?]/g,HA=/[#\?@]/g,qA=/#/g;function ss(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jn(t){t.g||(t.g=new Map,t.h=0,t.i&&UA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=ss.prototype;U.add=function(t,e){jn(this),this.i=null,t=li(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Fy(t,e){jn(t),e=li(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $y(t,e){return jn(t),e=li(t,e),t.g.has(e)}U.forEach=function(t,e){jn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){jn(this);let e=[];if(typeof t=="string")$y(this,t)&&(e=e.concat(this.g.get(li(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return jn(this),this.i=null,t=li(this,t),$y(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function By(t,e,n){Fy(t,e),0<n.length&&(t.i=null,t.g.set(li(t,e),Bu(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KA(t,e){e&&!t.j&&(jn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Fy(this,r),By(this,i,n))},t)),t.j=e}var GA=class{constructor(t,e){this.h=t,this.g=e}};function Uy(t){this.l=t||WA,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WA=10;function Vy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jy(t){return t.h?1:t.g?t.g.size:0}function Nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ju(t,e){t.g?t.g.add(e):t.h=e}function zy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Uy.prototype.cancel=function(){if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bu(t.i)}function Zu(){}Zu.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Zu.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function YA(){this.g=new Zu}function QA(t,e,n){const r=n||"";try{Ly(t,function(i,s){let o=i;bs(i)&&(o=Ku(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XA(t,e){const n=new Oa;if(X.Image){const r=new Image;r.onload=to(ro,n,r,"TestLoadImage: loaded",!0,e),r.onerror=to(ro,n,r,"TestLoadImage: error",!1,e),r.onabort=to(ro,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=to(ro,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ro(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ss(t){this.l=t.ac||null,this.j=t.jb||!1}Ze(Ss,Yu);Ss.prototype.g=function(){return new Ma(this.l,this.j)};Ss.prototype.i=function(t){return function(){return t}}({});function Ma(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ef,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Ma,We);var ef=0;U=Ma.prototype;U.open=function(t,e){if(this.readyState!=ef)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,os(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=ef};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function qy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?As(this):os(this),this.readyState==3&&qy(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,As(this))};U.Ua=function(t){this.g&&(this.response=t,As(this))};U.ga=function(){this.g&&As(this)};function As(t){t.readyState=4,t.l=null,t.j=null,t.A=null,os(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JA=X.JSON.parse;function Ne(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ky,this.K=this.L=!1}Ze(Ne,We);var Ky="",ZA=/^https?$/i,ex=["POST","PUT"];U=Ne.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Il.g(),this.C=this.u?Hd(this.u):Hd(Il),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Gd(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=cy(ex,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yy(this),0<this.B&&((this.K=tx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=Wu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gd(this,s)}};function tx(t){return Gr&&vA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof $u<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Gd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gy(t),Fa(t)}function Gy(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Fa(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fa(this,!0)),Ne.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Wy(this):this.fb())};U.fb=function(){Wy(this)};function Wy(t){if(t.h&&typeof $u<"u"&&(!t.C[1]||rn(t)!=4||t.aa()!=2)){if(t.v&&rn(t)==4)Wu(t.Ha,0,t);else if(Je(t,"readystatechange"),rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(My)[1]||null;if(!i&&X.self&&X.self.location){var s=X.self.location.protocol;i=s.substr(0,s.length-1)}r=!ZA.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Gy(t)}}finally{Fa(t)}}}}function Fa(t,e){if(t.g){Yy(t);const n=t.g,r=t.C[0]?zo:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function rn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JA(e)}};function Wd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ky:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qy(t){let e="";return Vu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function tf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Qy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function wi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xy(t){this.Ca=0,this.i=[],this.j=new Oa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=wi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=wi("baseRetryDelayMs",5e3,t),this.bb=wi("retryDelaySeedMs",1e4,t),this.$a=wi("forwardChannelMaxRetries",2,t),this.ta=wi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Uy(t&&t.concurrentRequestLimit),this.Fa=new YA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Xy.prototype;U.ma=8;U.G=1;function nf(t){if(Jy(t),t.G==3){var e=t.U++,n=un(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),xs(t,n),e=new Cs(t,t.j,e,void 0),e.K=2,e.v=La(un(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=ov(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ts(e)}iv(t)}function $a(t){t.g&&(sf(t),t.g.cancel(),t.g=null)}function Jy(t){$a(t),t.u&&(X.clearTimeout(t.u),t.u=null),Yo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Ba(t){Vy(t.h)||t.m||(t.m=!0,wy(t.Ja,t),t.C=0)}function nx(t,e){return jy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Es(st(t.Ja,t,e),rv(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Cs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=hy(s),dy(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zy(this,i,e),n=un(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),xs(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Qy(s)))+"&"+e:this.o&&tf(n,this.o,s)),Ju(this.h,i),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),i.Z=!0,Ol(i,n,null)):Ol(i,n,e),this.G=2}}else this.G==3&&(t?Yd(this,t):this.i.length==0||Vy(this.h)||Yd(this))};function Yd(t,e){var n;e?n=e.m:n=t.U++;const r=un(t.F);xe(r,"SID",t.I),xe(r,"RID",n),xe(r,"AID",t.T),xs(t,r),t.o&&t.s&&tf(r,t.o,t.s),n=new Cs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Zy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ju(t.h,n),Ol(n,r,e)}function xs(t,e){t.ia&&Vu(t.ia,function(n,r){xe(e,r,n)}),t.l&&Ly({},function(n,r){xe(e,r,n)})}function Zy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{QA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function ev(t){t.g||t.u||(t.Z=1,wy(t.Ia,t),t.A=0)}function rf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Es(st(t.Ia,t),rv(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,tv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Es(st(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),$a(this),tv(this))};function sf(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function tv(t){t.g=new Cs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=un(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),xs(t,e),t.o&&t.s&&tf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=La(un(e)),n.s=null,n.P=!0,Dy(n,t)}U.cb=function(){this.v!=null&&(this.v=null,$a(this),rf(this),lt(19))};function Yo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function nv(t,e){var n=null;if(t.g==e){Yo(t),sf(t),t.g=null;var r=2}else if(Nl(t.h,e))n=e.D,zy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Da(),Je(r,new xy(r,n)),Ba(t)}else ev(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&nx(t,e)||r==2&&rf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}}function rv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function sr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Go(n,"https"),La(n)),XA(n.toString(),r)}else lt(2);t.G=0,t.l&&t.l.va(e),iv(t),Jy(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function iv(t){if(t.G=0,t.la=[],t.l){const e=Hy(t.h);(e.length!=0||t.i.length!=0)&&($d(t.la,e),$d(t.la,t.i),t.h.i.length=0,Bu(t.i),t.i.length=0),t.l.ua()}}function sv(t,e,n){var r=n instanceof lr?un(n):new lr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Wo(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new lr(null,void 0);r&&Go(s,r),e&&(s.g=e),i&&Wo(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&xe(r,n,e),xe(r,"VER",t.ma),xs(t,r),r}function ov(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new Ss({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function av(){}U=av.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Qo(){if(Gr&&!(10<=Number(bA)))throw Error("Environmental error: no available transport.")}Qo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){We.call(this),this.g=new Xy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ho(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ho(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ui(this)}Ze(_t,We);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=sv(t,null,t.V),Ba(t)};_t.prototype.close=function(){nf(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ku(t),t=n);e.i.push(new GA(e.ab++,t)),e.G==3&&Ba(e)};_t.prototype.M=function(){this.g.l=null,delete this.j,nf(this.g),delete this.g,_t.X.M.call(this)};function cv(t){Qu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(cv,Qu);function lv(){Xu.call(this),this.status=1}Ze(lv,Xu);function ui(t){this.g=t}Ze(ui,av);ui.prototype.xa=function(){Je(this.g,"a")};ui.prototype.wa=function(t){Je(this.g,new cv(t))};ui.prototype.va=function(t){Je(this.g,new lv)};ui.prototype.ua=function(){Je(this.g,"b")};Qo.prototype.createWebChannel=Qo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Na.NO_ERROR=0;Na.TIMEOUT=8;Na.HTTP_ERROR=6;Iy.COMPLETE="complete";ky.EventType=_s;_s.OPEN="a";_s.CLOSE="b";_s.ERROR="c";_s.MESSAGE="d";We.prototype.listen=We.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var rx=function(){return new Qo},ix=function(){return Da()},Nc=Na,sx=Iy,ox=yr,Qd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ax=Ss,io=ky,cx=Ne;const Xd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new ny("@firebase/firestore");function Jd(){return mr.logLevel}function V(t,...e){if(mr.logLevel<=me.DEBUG){const n=e.map(of);mr.debug(`Firestore (${fi}): ${t}`,...n)}}function fn(t,...e){if(mr.logLevel<=me.ERROR){const n=e.map(of);mr.error(`Firestore (${fi}): ${t}`,...n)}}function Xo(t,...e){if(mr.logLevel<=me.WARN){const n=e.map(of);mr.warn(`Firestore (${fi}): ${t}`,...n)}}function of(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function Se(t,e){t||Q()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class ux{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fx{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new uv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new tt(e)}}class hx{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dx{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class px{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.T=n.token,new mx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Wr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ve(0,0))}static max(){return new Z(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends as{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const yx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends as{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return yx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}function vx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Fn(i,K.empty(),e)}function bx(t){return new Fn(t.readTime,t.key,-1)}class Fn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fn(Z.min(),K.empty(),-1)}static max(){return new Fn(Z.max(),K.empty(),-1)}}function wx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _x{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==Ex)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}af.ct=-1;function Ua(t){return t==null}function Jo(t){return t===0&&1/t==-1/0}function Cx(t){return typeof t=="number"&&Number.isInteger(t)&&!Jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Xe.RED,this.left=i!=null?i:Xe.EMPTY,this.right=s!=null?s:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new em(this.data.getIterator())}getIteratorFrom(e){return new em(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class em{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new wt([])}unionWith(e){let n=new je(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tx("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Sx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Sx.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mv(t){const e=t.mapValue.fields.__previous_value__;return dv(e)?mv(e):e}function cs(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dv(t)?4:xx(t)?9007199254740991:10:Q()}function Xt(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cs(t).isEqual(cs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=$n(r.timestampValue),o=$n(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Yr(r.bytesValue).isEqual(Yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return $e(r.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(r.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return $e(r.integerValue)===$e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=$e(r.doubleValue),o=$e(i.doubleValue);return s===o?Jo(s)===Jo(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Wr(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Zd(s)!==Zd(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xt(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function us(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Qr(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=$e(i.integerValue||i.doubleValue),a=$e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tm(t.timestampValue,e.timestampValue);case 4:return tm(cs(t),cs(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Yr(i),a=Yr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=pe($e(i.latitude),$e(s.latitude));return o!==0?o:pe($e(i.longitude),$e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Qr(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===oo.mapValue&&s===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(s===oo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=pe(a[u],l[u]);if(f!==0)return f;const h=Qr(o[a[u]],c[l[u]]);if(h!==0)return h}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function tm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=$n(t),r=$n(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Xr(t){return Rl(t)}function Rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=$n(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rl(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function Pl(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function nm(t){return!!t&&"nullValue"in t}function rm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Li(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Li(this.value))}}function pv(t){const e=[];return vr(t.fields,(n,r)=>{const i=new it([n]);if(Eo(r)){const s=pv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,Z.min(),Z.min(),Z.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Z.min(),Z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Z.min(),Z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.position=e,this.inclusive=n}}function im(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Qr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ix(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{}class Ue extends gv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ox(e,n,r):n==="array-contains"?new Rx(e,r):n==="in"?new Px(e,r):n==="not-in"?new Lx(e,r):n==="array-contains-any"?new Mx(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Dx(e,r):new Nx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qr(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends gv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Jt(e,n)}matches(e){return yv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function yv(t){return t.op==="and"}function vv(t){return kx(t)&&yv(t)}function kx(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Ll(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(vv(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function bv(t,e){return t instanceof Ue?function(n,r){return r instanceof Ue&&n.op===r.op&&n.field.isEqual(r.field)&&Xt(n.value,r.value)}(t,e):t instanceof Jt?function(n,r){return r instanceof Jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&bv(s,r.filters[o]),!0):!1}(t,e):void Q()}function wv(t){return t instanceof Ue?function(e){return`${e.field.canonicalString()} ${e.op} ${Xr(e.value)}`}(t):t instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(wv).join(" ,")+"}"}(t):"Filter"}class Ox extends Ue{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Dx extends Ue{constructor(e,n){super(e,"in",n),this.keys=Ev("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nx extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=Ev("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ev(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Rx extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&us(n.arrayValue,this.value)}}class Px extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&us(this.value.arrayValue,n)}}class Lx extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!us(this.value.arrayValue,n)}}class Mx extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>us(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function om(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Fx(t,e,n,r,i,s,o)}function lf(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ft=n}return e.ft}function uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ix(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sm(t.startAt,e.startAt)&&sm(t.endAt,e.endAt)}function Ml(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function $x(t,e,n,r,i,s,o,a){return new Va(t,e,n,r,i,s,o,a)}function _v(t){return new Va(t)}function am(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bx(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ux(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Vx(t){return t.collectionGroup!==null}function Ur(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=Ux(e),r=Bx(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Mi(n)),e.dt.push(new Mi(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Mi(it.keyField(),s))}}}return e.dt}function hn(t){const e=ee(t);if(!e.wt)if(e.limitType==="F")e.wt=om(e.path,e.collectionGroup,Ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ur(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Mi(s.field,o))}const r=e.endAt?new Zo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zo(e.startAt.position,e.startAt.inclusive):null;e.wt=om(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Fl(t,e,n){return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ja(t,e){return uf(hn(t),hn(e))&&t.limitType===e.limitType}function Cv(t){return`${lf(hn(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>wv(r)).join(", ")}]`),Ua(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ur(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=im(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ur(n),r)||n.endAt&&!function(i,s,o){const a=im(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ur(n),r))}(t,e)}function jx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tv(t){return(e,n)=>{let r=!1;for(const i of Ur(t)){const s=zx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zx(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Qr(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=new He(K.comparator);function dn(){return Hx}const Sv=new He(K.comparator);function Si(...t){let e=Sv;for(const n of t)e=e.insert(n.key,n);return e}function Av(t){let e=Sv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Fi()}function xv(){return Fi()}function Fi(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const qx=new He(K.comparator),Kx=new je(K.comparator);function se(...t){let e=Kx;for(const n of t)e=e.add(n);return e}const Gx=new je(pe);function Iv(){return Gx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(e)?"-0":e}}function Ov(t){return{integerValue:""+t}}function Wx(t,e){return Cx(e)?Ov(e):kv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this._=void 0}}function Yx(t,e,n){return t instanceof ea?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fs?Nv(t,e):t instanceof hs?Rv(t,e):function(r,i){const s=Dv(r,i),o=cm(s)+cm(r._t);return Pl(s)&&Pl(r._t)?Ov(o):kv(r.serializer,o)}(t,e)}function Qx(t,e,n){return t instanceof fs?Nv(t,e):t instanceof hs?Rv(t,e):n}function Dv(t,e){return t instanceof ta?Pl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ea extends Ha{}class fs extends Ha{constructor(e){super(),this.elements=e}}function Nv(t,e){const n=Pv(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class hs extends Ha{constructor(e){super(),this.elements=e}}function Rv(t,e){let n=Pv(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class ta extends Ha{constructor(e,n){super(),this.serializer=e,this._t=n}}function cm(t){return $e(t.integerValue||t.doubleValue)}function Pv(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fs&&r instanceof fs||n instanceof hs&&r instanceof hs?Wr(n.elements,r.elements,Xt):n instanceof ta&&r instanceof ta?Xt(n._t,r._t):n instanceof ea&&r instanceof ea}(t.transform,e.transform)}class Jx{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qa{}function Lv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ff(t.key,$t.none()):new Os(t.key,t.data,$t.none());{const n=t.data,r=dt.empty();let i=new je(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zn(t.key,r,new wt(i.toArray()),$t.none())}}function Zx(t,e,n){t instanceof Os?function(r,i,s){const o=r.value.clone(),a=um(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(r,i,s){if(!_o(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=um(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Mv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $i(t,e,n,r){return t instanceof Os?function(i,s,o,a){if(!_o(i.precondition,s))return o;const c=i.value.clone(),l=fm(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(i,s,o,a){if(!_o(i.precondition,s))return o;const c=fm(i.fieldTransforms,a,s),l=s.data;return l.setAll(Mv(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return _o(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function eI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Dv(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function lm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wr(n,r,(i,s)=>Xx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Os extends qa{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends qa{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function um(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Qx(o,a,n[i]))}return r}function fm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Yx(s,o,e))}return r}class ff extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tI extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Zx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Lv(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Wr(this.mutations,e.mutations,(n,r)=>lm(n,r))&&Wr(this.baseMutations,e.baseMutations,(n,r)=>lm(n,r))}}class hf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=qx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ce;function sI(t){switch(t){default:return Q();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Fv(t){if(t===void 0)return fn("GRPC error has no .code"),x.UNKNOWN;switch(t){case Fe.OK:return x.OK;case Fe.CANCELLED:return x.CANCELLED;case Fe.UNKNOWN:return x.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return x.INTERNAL;case Fe.UNAVAILABLE:return x.UNAVAILABLE;case Fe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Fe.NOT_FOUND:return x.NOT_FOUND;case Fe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Fe.ABORTED:return x.ABORTED;case Fe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Fe.DATA_LOSS:return x.DATA_LOSS;default:return Q()}}(ce=Fe||(Fe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ao}static getOrCreateInstance(){return ao===null&&(ao=new df),ao}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ao=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ka(Z.min(),i,Iv(),dn(),se())}}class Ds{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ds(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class $v{constructor(e,n){this.targetId=e,this.Et=n}}class Bv{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hm{constructor(){this.At=0,this.Rt=mm(),this.vt=at.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=se(),n=se(),r=se();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Ds(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=mm()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class oI{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=dn(),this.qt=dm(),this.Ut=new je(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Ml(o))if(i===0){const a=new K(o.path);this.Qt(r,a,nt.newNoDocument(a,Z.min()))}else Se(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=df.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Ml(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,nt.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=se();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ka(e,n,this.Ut,this.Lt,r);return this.Lt=dn(),this.qt=dm(),this.Ut=new je(pe),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new hm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new je(pe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new hm),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function dm(){return new He(K.comparator)}function mm(){return new He(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lI=(()=>({and:"AND",or:"OR"}))();class uI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function na(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fI(t,e){return na(t,e.toTimestamp())}function Wt(t){return Se(!!t),Z.fromTimestamp(function(e){const n=$n(e);return new Ve(n.seconds,n.nanos)}(t))}function mf(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vv(t){const e=Ie.fromString(t);return Se(qv(e)),e}function Bl(t,e){return mf(t.databaseId,e.path)}function Rc(t,e){const n=Vv(e);if(n.get(1)!==t.databaseId.projectId)throw new G(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(jv(n))}function Ul(t,e){return mf(t.databaseId,e)}function hI(t){const e=Vv(t);return e.length===4?Ie.emptyPath():jv(e)}function Vl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jv(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pm(t,e,n){return{name:Bl(t,e),fields:n.value.mapValue.fields}}function dI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(Se(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Se(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?x.UNKNOWN:Fv(c.code);return new G(l,c.message||"")}(o);n=new Bv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(t,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):Z.min(),a=new dt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Co(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(t,r.document),s=r.readTime?Wt(r.readTime):Z.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(t,r.document),s=r.removedTargetIds||[];n=new Co([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new iI(i),o=r.targetId;n=new $v(o,s)}}return n}function mI(t,e){let n;if(e instanceof Os)n={update:pm(t,e.key,e.value)};else if(e instanceof ff)n={delete:Bl(t,e.key)};else if(e instanceof zn)n={update:pm(t,e.key,e.data),updateMask:CI(e.fieldMask)};else{if(!(e instanceof tI))return Q();n={verify:Bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ea)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ta)return{fieldPath:s.field.canonicalString(),increment:o._t};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fI(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function pI(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Wt(r.updateTime):Wt(i);return s.isEqual(Z.min())&&(s=Wt(i)),new Jx(s,r.transformResults||[])}(n,e))):[]}function gI(t,e){return{documents:[Ul(t,e.path)]}}function yI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ul(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ul(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Hv(Jt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ir(u.field),direction:wI(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||Ua(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function vI(t){let e=hI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const f=zv(u);return f instanceof Jt&&vv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Mi(kr(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ua(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,h=u.values||[];return new Zo(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new Zo(h,f)}(n.endAt)),$x(e,i,o,s,a,"F",c,l)}function bI(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function zv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kr(e.unaryFilter.field);return Ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=kr(e.unaryFilter.field);return Ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(e.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=kr(e.unaryFilter.field);return Ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Ue.create(kr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(n=>zv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function wI(t){return aI[t]}function EI(t){return cI[t]}function _I(t){return lI[t]}function Ir(t){return{fieldPath:t.canonicalString()}}function kr(t){return it.fromServerFormat(t.fieldPath)}function Hv(t){return t instanceof Ue?function(e){if(e.op==="=="){if(rm(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NAN"}};if(nm(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(rm(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NOT_NAN"}};if(nm(e.value))return{unaryFilter:{field:Ir(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(e.field),op:EI(e.op),value:e.value}}}(t):t instanceof Jt?function(e){const n=e.getFilters().map(r=>Hv(r));return n.length===1?n[0]:{compositeFilter:{op:_I(e.op),filters:n}}}(t):Q()}function CI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.se=e}}function SI(t){const e=vI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.He=new xI}addToCollectionParentIndex(e,n){return this.He.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Fn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class xI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Jr(0)}static bn(){return new Jr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$i(r.mutation,i,wt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Si();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=Fi(),a=Fi();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof zn)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),$i(u.mutation,l,u.mutation.getFieldMask(),Ve.now())):o.set(l.key,wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new kI(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Fi();let i=new He((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||wt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(i.get(a.batchId)||se()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=xv();u.forEach(h=>{if(!s.has(h)){const d=Lv(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(or());let a=-1,c=s;return o.next(l=>I.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Av(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Si();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Si();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Va(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,nt.newInvalidDocument(l)))});let o=Si();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&$i(l.mutation,c,wt.empty(),Ve.now()),za(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Wt(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:SI(r.bundledQuery),readTime:Wt(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.overlays=new He(K.comparator),this.ts=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=or(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=or(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=or(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return I.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rI(n,r));let s=this.ts.get(n);s===void 0&&(s=se(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.es=new je(qe.ns),this.ss=new je(qe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new qe(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new qe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new K(new Ie([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new K(new Ie([])),r=new qe(n,e),i=new qe(n,e+1);let s=se();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return K.comparator(e.key,n.key)||pe(e.ds,n.ds)}static rs(e,n){return pe(e.ds,n.ds)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new je(qe.ns)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nI(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(pe);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),I.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new qe(new K(s),0);let a=new je(pe);return this._s.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),I.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return I.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new qe(n,0),i=this._s.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.Ts=e,this.docs=new He(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||wx(bx(u),r)<=0||(i.has(u.key)||za(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Es(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LI(this)}getSize(e){return I.resolve(this.size)}}class LI extends II{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.persistence=e,this.As=new hi(n=>lf(n),uf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new pf,this.targetCount=0,this.bs=Jr.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),I.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Jr(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Sn(n),I.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new af(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new MI(this),this.indexManager=new AI,this.remoteDocumentCache=function(r){return new PI(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new TI(n),this.xs=new DI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new RI(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new $I(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return I.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class $I extends _x{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.$s=new pf,this.Ms=null}static Fs(e){return new gf(e)}get Bs(){if(this.Ms)return this.Ms;throw Q()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),I.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Bs,r=>{const i=K.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return I.or([()=>I.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(am(n))return I.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fl(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,Fl(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,r,i){return am(n)||i.isEqual(Z.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Jd()<=me.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$l(n)),this.Fi(e,o,n,vx(i,-1)))})}$i(e,n){let r=new je(Tv(e));return n.forEach((i,s)=>{za(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Jd()<=me.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",$l(n)),this.xi.getDocumentsMatchingQuery(e,n,Fn.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new He(pe),this.qi=new hi(s=>lf(s),uf),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OI(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function VI(t,e,n,r){return new UI(t,e,n,r)}async function Kv(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=se();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function jI(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let h=I.resolve();return f.forEach(d=>{h=h.next(()=>l.getEntry(a,d)).next(p=>{const y=c.docVersions.get(d);Se(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gv(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function zI(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,f)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?d=d.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(p,y,C){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let c=dn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(HI(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!r.isEqual(Z.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(f=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Li=i,s))}function HI(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function qI(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KI(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new ur(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function jl(t,e,n){const r=ee(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ks(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function gm(t,e,n){const r=ee(t);let i=Z.min(),s=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),f=u.qi.get(l);return f!==void 0?I.resolve(u.Li.get(f)):u.Ds.getTargetData(c,l)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:se())).next(a=>(GI(r,jx(e),a),{documents:a,Wi:s})))}function GI(t,e,n){let r=t.Ui.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class ym{constructor(){this.activeTargetIds=Iv()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WI{constructor(){this.Br=new ym,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function Pc(){return co===null?co=268435456+Math.round(2147483648*Math.random()):co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class JI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Pc(),a=this.ao(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Xo("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=QI[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Pc();return new Promise((o,a)=>{const c=new cx;c.setWithCredentials(!0),c.listenOnce(sx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nc.NO_ERROR:const u=c.getResponseJson();V(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Nc.TIMEOUT:V(et,`RPC '${e}' ${s} timed out`),a(new G(x.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const f=c.getStatus();if(V(et,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let h=c.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const C=y.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(C)>=0?C:x.UNKNOWN}(d.status);a(new G(p,d.message))}else a(new G(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G(x.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(et,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);V(et,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}wo(e,n,r){const i=Pc(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rx(),a=ix(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new ax({})),this.ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");V(et,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let f=!1,h=!1;const d=new XI({Wr:y=>{h?V(et,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(V(et,`Opening RPC '${e}' stream ${i} transport.`),u.open(),f=!0),V(et,`RPC '${e}' stream ${i} sending:`,y),u.send(y))},Hr:()=>u.close()}),p=(y,C,v)=>{y.listen(C,w=>{try{v(w)}catch(S){setTimeout(()=>{throw S},0)}})};return p(u,io.EventType.OPEN,()=>{h||V(et,`RPC '${e}' stream ${i} transport opened.`)}),p(u,io.EventType.CLOSE,()=>{h||(h=!0,V(et,`RPC '${e}' stream ${i} transport closed`),d.so())}),p(u,io.EventType.ERROR,y=>{h||(h=!0,Xo(et,`RPC '${e}' stream ${i} transport errored:`,y),d.so(new G(x.UNAVAILABLE,"The operation could not be completed")))}),p(u,io.EventType.MESSAGE,y=>{var C;if(!h){const v=y.data[0];Se(!!v);const w=v,S=w.error||((C=w[0])===null||C===void 0?void 0:C.error);if(S){V(et,`RPC '${e}' stream ${i} received error:`,S);const M=S.status;let q=function(he){const W=Fe[he];if(W!==void 0)return Fv(W)}(M),fe=S.message;q===void 0&&(q=x.INTERNAL,fe="Unknown error status: "+M+" with message "+S.message),h=!0,d.so(new G(q,fe)),u.close()}else V(et,`RPC '${e}' stream ${i} received:`,v),d.io(v)}}),p(a,ox.STAT_EVENT,y=>{y.stat===Qd.PROXY?V(et,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Qd.NOPROXY&&V(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new uI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Wv(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new G(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZI extends Yv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=dI(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?Wt(s.readTime):Z.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Vl(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Ml(a)?{documents:gI(i,a)}:{query:yI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Uv(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=na(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=bI(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Vl(this.serializer),n.removeTarget=e,this.Fo(n)}}class ek extends Yv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=pI(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Vl(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mI(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new G(x.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(x.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(x.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class nk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(fn(n),this.ru=!1):V("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{br(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.du.add(4),await Ns(c),c.mu.set("Unknown"),c.du.delete(4),await Wa(c)}(this))})}),this.mu=new nk(r,i)}}async function Wa(t){if(br(t))for(const e of t.wu)await e(!0)}async function Ns(t){for(const e of t.wu)await e(!1)}function Qv(t,e){const n=ee(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),wf(n)?bf(n):di(n).No()&&vf(n,e))}function Xv(t,e){const n=ee(t),r=di(n);n.fu.delete(e),r.No()&&Jv(n,e),n.fu.size===0&&(r.No()?r.$o():br(n)&&n.mu.set("Unknown"))}function vf(t,e){t.gu.Ot(e.targetId),di(t).jo(e)}function Jv(t,e){t.gu.Ot(e),di(t).Wo(e)}function bf(t){t.gu=new oI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),di(t).start(),t.mu.ou()}function wf(t){return br(t)&&!di(t).xo()&&t.fu.size>0}function br(t){return ee(t).du.size===0}function Zv(t){t.gu=void 0}async function ik(t){t.fu.forEach((e,n)=>{vf(t,e)})}async function sk(t,e){Zv(t),wf(t)?(t.mu.au(e),bf(t)):t.mu.set("Unknown")}async function ok(t,e,n){if(t.mu.set("Online"),e instanceof Bv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ra(t,r)}else if(e instanceof Co?t.gu.Kt(e):e instanceof $v?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(Z.min()))try{const r=await Gv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),Jv(i,a);const l=new ur(c.target,a,1,c.sequenceNumber);vf(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await ra(t,r)}}async function ra(t,e,n){if(!ks(e))throw e;t.du.add(1),await Ns(t),t.mu.set("Offline"),n||(n=()=>Gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Wa(t)})}function e0(t,e){return e().catch(n=>ra(t,n,e))}async function Ya(t){const e=ee(t),n=Bn(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ak(e);)try{const i=await qI(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,ck(e,i)}catch(i){await ra(e,i)}t0(e)&&n0(e)}function ak(t){return br(t)&&t.lu.length<10}function ck(t,e){t.lu.push(e);const n=Bn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function t0(t){return br(t)&&!Bn(t).xo()&&t.lu.length>0}function n0(t){Bn(t).start()}async function lk(t){Bn(t).tu()}async function uk(t){const e=Bn(t);for(const n of t.lu)e.Yo(n.mutations)}async function fk(t,e,n){const r=t.lu.shift(),i=hf.from(r,e,n);await e0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ya(t)}async function hk(t,e){e&&Bn(t).Jo&&await async function(n,r){if(i=r.code,sI(i)&&i!==x.ABORTED){const s=n.lu.shift();Bn(n).Oo(),await e0(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ya(n)}var i}(t,e),t0(t)&&n0(t)}async function bm(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=br(n);n.du.add(3),await Ns(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Wa(n)}async function dk(t,e){const n=ee(t);e?(n.du.delete(2),await Wa(n)):e||(n.du.add(2),await Ns(n),n.mu.set("Unknown"))}function di(t){return t.yu||(t.yu=function(e,n,r){const i=ee(e);return i.nu(),new ZI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:ik.bind(null,t),Zr:sk.bind(null,t),zo:ok.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),wf(t)?bf(t):t.mu.set("Unknown")):(await t.yu.stop(),Zv(t))})),t.yu}function Bn(t){return t.pu||(t.pu=function(e,n,r){const i=ee(e);return i.nu(),new ek(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:lk.bind(null,t),Zr:hk.bind(null,t),Xo:uk.bind(null,t),Zo:fk.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ya(t)):(await t.pu.stop(),t.lu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ef(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(fn("AsyncQueue",`${e}: ${t}`),ks(t))return new G(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Si(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.Iu=new He(K.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Q():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zr{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zr(e,n,Vr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.Eu=void 0,this.listeners=[]}}class pk{constructor(){this.queries=new hi(e=>Cv(e),ja),this.onlineState="Unknown",this.Au=new Set}}async function gk(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mk),i)try{s.Eu=await n.onListen(r)}catch(o){const a=_f(o,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Cf(n)}async function yk(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vk(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Cf(n)}function bk(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cf(t){t.Au.forEach(e=>{e.next()})}class wk{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.key=e}}class i0{constructor(e){this.key=e}}class Ek{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=se(),this.mutatedKeys=se(),this.Ku=Tv(e),this.Gu=new Vr(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new wm,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const h=i.get(u),d=za(this.query,f)?f:null,p=!!h&&this.mutatedKeys.has(h.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let C=!1;h&&d?h.data.isEqual(d.data)?p!==y&&(r.track({type:3,doc:d}),C=!0):this.Wu(h,d)||(r.track({type:2,doc:d}),C=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!h&&d?(r.track({type:0,doc:d}),C=!0):h&&!d&&(r.track({type:1,doc:h}),C=!0,(c||l)&&(a=!0)),C&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(f,h){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return d(f)-d(h)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new Zr(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new wm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=se(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new i0(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new r0(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=se();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Zr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class _k{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ck{constructor(e){this.key=e,this.ec=!1}}class Tk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new hi(a=>Cv(a),ja),this.ic=new Map,this.rc=new Set,this.oc=new He(K.comparator),this.uc=new Map,this.cc=new pf,this.ac={},this.hc=new Map,this.lc=Jr.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Sk(t,e){const n=Lk(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await KI(n.localStore,hn(e));n.isPrimaryClient&&Qv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ak(n,e,r,a==="current",o.resumeToken)}return i}async function Ak(t,e,n,r,i){t.dc=(f,h,d)=>async function(p,y,C,v){let w=y.view.zu(C);w.Mi&&(w=await gm(p.localStore,y.query,!1).then(({documents:q})=>y.view.zu(q,w)));const S=v&&v.targetChanges.get(y.targetId),M=y.view.applyChanges(w,p.isPrimaryClient,S);return _m(p,y.targetId,M.Yu),M.snapshot}(t,f,h,d);const s=await gm(t.localStore,e,!0),o=new Ek(e,s.Wi),a=o.zu(s.documents),c=Ds.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);_m(t,n,l.Yu);const u=new _k(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function xk(t,e){const n=ee(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!ja(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xv(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Is)):(zl(n,r.targetId),await jl(n.localStore,r.targetId,!0))}async function Ik(t,e,n){const r=Mk(t);try{const i=await function(s,o){const a=ee(s),c=Ve.now(),l=o.reduce((h,d)=>h.add(d.key),se());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=dn(),p=se();return a.Ki.getEntries(h,l).next(y=>{d=y,d.forEach((C,v)=>{v.isValidDocument()||(p=p.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,d)).next(y=>{u=y;const C=[];for(const v of o){const w=eI(v,u.get(v.key).overlayedDocument);w!=null&&C.push(new zn(v.key,w,pv(w.value.mapValue),$t.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,C,o)}).next(y=>{f=y;const C=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(h,y.batchId,C)})}).then(()=>({batchId:f.batchId,changes:Av(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new He(pe)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,n),await Rs(r,i.changes),await Ya(r.remoteStore)}catch(i){const s=_f(i,"Failed to persist write");n.reject(s)}}async function s0(t,e){const n=ee(t);try{const r=await zI(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Se(o.ec):i.removedDocuments.size>0&&(Se(o.ec),o.ec=!1))}),await Rs(n,r,e)}catch(r){await Is(r)}}function Em(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Ru(o)&&(c=!0)}),c&&Cf(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kk(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new He(K.comparator);o=o.insert(s,nt.newNoDocument(s,Z.min()));const a=se().add(s),c=new Ka(Z.min(),new Map,new je(pe),o,a);await s0(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),Tf(r)}else await jl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Is)}async function Ok(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await jI(n.localStore,e);a0(n,r,null),o0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rs(n,i)}catch(i){await Is(i)}}async function Dk(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);a0(r,e,n),o0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rs(r,i)}catch(i){await Is(i)}}function o0(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function a0(t,e,n){const r=ee(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||c0(t,r)})}function c0(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Xv(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Tf(t))}function _m(t,e,n){for(const r of n)r instanceof r0?(t.cc.addReference(r.key,e),Nk(t,r)):r instanceof i0?(V("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||c0(t,r.key)):Q()}function Nk(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.rc.add(r),Tf(t))}function Tf(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new K(Ie.fromString(e)),r=t.lc.next();t.uc.set(r,new Ck(n)),t.oc=t.oc.insert(n,r),Qv(t.remoteStore,new ur(hn(_v(n.path)),r,2,af.ct))}}async function Rs(t,e,n){const r=ee(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=yf.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,f=>I.forEach(f.Vi,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>I.forEach(f.Si,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!ks(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const h=l.Li.get(f),d=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(f,p)}}}(r.localStore,s))}async function Rk(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Kv(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new G(x.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rs(n,r.Qi)}}function Pk(t,e){const n=ee(t),r=n.uc.get(e);if(r&&r.ec)return se().add(r.key);{let i=se();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Lk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=s0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kk.bind(null,e),e.nc.zo=vk.bind(null,e.eventManager),e.nc.wc=bk.bind(null,e.eventManager),e}function Mk(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dk.bind(null,e),e}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VI(this.persistence,new BI,e.initialUser,this.serializer)}createPersistence(e){return new FI(gf.Fs,this.serializer)}createSharedClientState(e){return new WI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Em(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rk.bind(null,this.syncEngine),await dk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pk}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new JI(i));var i;return function(s,o,a,c){return new tk(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Em(this.syncEngine,a,0),o=vm.D()?new vm:new YI,new rk(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new Tk(r,i,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ns(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=fv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vk(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>bm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>bm(e.remoteStore,s)),t._onlineComponents=e}function Uk(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Vk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Uk(n))throw n;Xo("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Cm)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new Cm);return t._offlineComponents}async function l0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Tm(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Tm(t,new Fk))),t._onlineComponents}function jk(t){return l0(t).then(e=>e.syncEngine)}async function zk(t){const e=await l0(t),n=e.eventManager;return n.onListen=Sk.bind(null,e.syncEngine),n.onUnlisten=xk.bind(null,e.syncEngine),n}function Hk(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new $k({next:f=>{s.enqueueAndForget(()=>yk(i,u)),f.fromCache&&a.source==="server"?c.reject(new G(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new wk(o,l,{includeMetadataChanges:!0,xu:!0});return gk(i,u)}(await zk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e,n){if(!n)throw new G(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qk(t,e,n,r){if(e===!0&&r===!0)throw new G(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Am(t){if(!K.isDocumentKey(t))throw new G(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(K.isDocumentKey(t))throw new G(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(t);throw new G(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,qk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lx;switch(n.type){case"firstParty":return new dx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sm.get(e);n&&(V("ComponentProvider","Removing Datastore"),Sm.delete(e),n.terminate())}(this),Promise.resolve()}}function Kk(t,e,n,r={}){var i;const s=(t=Un(t,Qa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Xo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=tt.MOCK_USER;else{o=GT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}t._authCredentials=new ux(new uv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xa(this.firestore,e,this._query)}}class On extends Xa{constructor(e,n,r){super(e,n,_v(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new K(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Gk(t,e,...n){if(t=Mn(t),u0("collection","path",e),t instanceof Qa){const r=Ie.fromString(e,...n);return xm(r),new On(t,null,r)}{if(!(t instanceof Et||t instanceof On))throw new G(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return xm(r),new On(t.firestore,null,r)}}function Fc(t,e,...n){if(t=Mn(t),arguments.length===1&&(e=fv.A()),u0("doc","path",e),t instanceof Qa){const r=Ie.fromString(e,...n);return Am(r),new Et(t,null,new K(r))}{if(!(t instanceof Et||t instanceof On))throw new G(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Am(r),new Et(t.firestore,t instanceof On?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Wv(this,"async_queue_retry"),this.qc=()=>{const n=Lc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new kn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ks(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Ef.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&Q()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ps extends Qa{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||h0(this),this._firestoreClient.terminate()}}function Yk(t,e){const n=typeof t=="object"?t:XS(),r=typeof t=="string"?t:e||"(default)",i=GS(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HT("firestore");s&&Kk(i,...s)}return i}function f0(t){return t._firestoreClient||h0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function h0(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,l){return new Ax(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Bk(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ei(at.fromBase64String(e))}catch(n){throw new G(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ei(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=/^__.*__$/;class Xk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Os(e,this.data,n,this.fieldTransforms)}}class d0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function m0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class If{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new If(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ia(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(m0(this.Yc)&&Qk.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Jk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(e)}ua(e,n,r,i=!1){return new If({Yc:e,methodName:n,oa:r,path:it.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function p0(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new Jk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zk(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);kf("Data must be an object, but it was:",o,r);const a=g0(r,o);let c,l;if(s.merge)c=new wt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=Hl(e,f,n);if(!o.contains(h))throw new G(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);v0(u,h)||u.push(h)}c=new wt(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new Xk(new dt(a),c,l)}class Za extends Af{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Za}}function eO(t,e,n,r){const i=t.ua(1,e,n);kf("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();vr(r,(c,l)=>{const u=Of(e,c,n);l=Mn(l);const f=i.na(u);if(l instanceof Za)s.push(u);else{const h=ec(l,f);h!=null&&(s.push(u),o.set(u,h))}});const a=new wt(s);return new d0(o,a,i.fieldTransforms)}function tO(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Hl(e,r,n)],c=[i];if(s.length%2!=0)throw new G(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Hl(e,s[h])),c.push(s[h+1]);const l=[],u=dt.empty();for(let h=a.length-1;h>=0;--h)if(!v0(l,a[h])){const d=a[h];let p=c[h];p=Mn(p);const y=o.na(d);if(p instanceof Za)l.push(d);else{const C=ec(p,y);C!=null&&(l.push(d),u.set(d,C))}}const f=new wt(l);return new d0(u,f,o.fieldTransforms)}function ec(t,e){if(y0(t=Mn(t)))return kf("Unsupported field value:",e,t),g0(t,e);if(t instanceof Af)return function(n,r){if(!m0(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ec(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Mn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wx(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ve.fromDate(n);return{timestampValue:na(r.serializer,i)}}if(n instanceof Ve){const i=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:na(r.serializer,i)}}if(n instanceof xf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ei)return{bytesValue:Uv(r.serializer,n._byteString)};if(n instanceof Et){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Sf(n)}`)}(t,e)}function g0(t,e){const n={};return hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,i)=>{const s=ec(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function y0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof xf||t instanceof ei||t instanceof Et||t instanceof Af)}function kf(t,e,n){if(!y0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Sf(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Hl(t,e,n){if((e=Mn(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return Of(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const nO=new RegExp("[~\\*/\\[\\]]");function Of(t,e,n){if(e.search(nO)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ja(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new G(x.INVALID_ARGUMENT,a+t+c)}function v0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(w0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rO extends b0{data(){return super.data()}}function w0(t,e){return typeof e=="string"?Of(t,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sO{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return vr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xf($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Se(qv(r));const i=new ls(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aO extends b0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(w0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends aO{data(e={}){return super.data(e)}}class cO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new To(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:lO(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class uO extends sO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function fO(t){t=Un(t,Xa);const e=Un(t.firestore,Ps),n=f0(e),r=new uO(e);return iO(t._query),Hk(n,t._query).then(i=>new cO(e,r,t,i))}function hO(t,e,n){t=Un(t,Et);const r=Un(t.firestore,Ps),i=oO(t.converter,e,n);return Df(r,[Zk(p0(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$t.none())])}function dO(t,e,n,...r){t=Un(t,Et);const i=Un(t.firestore,Ps),s=p0(i);let o;return o=typeof(e=Mn(e))=="string"||e instanceof Ja?tO(s,"updateDoc",t._key,e,n,r):eO(s,"updateDoc",t._key,e),Df(i,[o.toMutation(t._key,$t.exists(!0))])}function mO(t){return Df(Un(t.firestore,Ps),[new ff(t._key,$t.none())])}function Df(t,e){return function(n,r){const i=new kn;return n.asyncQueue.enqueueAndForget(async()=>Ik(await jk(n),r,i)),i.promise}(f0(t),e)}(function(t,e=!0){(function(n){fi=n})(QS),jo(new es("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ps(new fx(n.getProvider("auth-internal")),new px(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Br(Xd,"3.10.0",t),Br(Xd,"3.10.0","esm2017")})();var pO="firebase",gO="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(pO,gO,"app");const yO={apiKey:"AIzaSyB_Z5Z5l0GYuDF_b8DYe_ffZZpMUiBj9bw",authDomain:"testvue-e7bdb.firebaseapp.com",projectId:"testvue-e7bdb",storageBucket:"testvue-e7bdb.appspot.com",messagingSenderId:"431876660973",appId:"1:431876660973:web:434db29afdee7288d176e4",measurementId:"G-Y3N74LSNSM"},vO=sy(yO),uo=Yk(vO);class bO{async fetchList(){const e=Gk(uo,"todo_list"),n=await fO(e),r=[];return n.forEach(i=>r.push(i.data())),r}async addList({todo:e,id:n,created_at:r}){const i=Fc(uo,"todo_list",n),s={todo:e,id:n,isCompleted:!1,created_at:r};return await hO(i,s),s}async updateList({id:e,body:n}){const r=Fc(uo,"todo_list",e);return await dO(r,n),n}async deleteTodo(e){const n=Fc(uo,"todo_list",e);return await mO(n),{message:"success"}}}const fo=new bO;class wO{async getTodos(){return await fo.fetchList()}async addTodo(e){return await fo.addList(e)}async updateTodos(e,n){return await fo.updateList({id:e,body:n})}async deleteTodo(e){return await fo.deleteTodo(e)}}const ho=new wO,EO=PT({state(){return{todoList:[]}},getters:{getTodos(t){return t.todoList}},mutations:{updateToDoList(t,e){e.forEach(n=>{const r=t.todoList.findIndex(i=>i.id==n.id);r<0?t.todoList.push(n):t.todoList[r]=n})},onDeleteTodo(t,e){const n=t.todoList.findIndex(r=>r.id==e);t.todoList.splice(n,1)}},actions:{async onFetchTodos(t){const e=await ho.getTodos();t.commit("updateToDoList",e)},async addTodo({commit:t},e){const n=gT(),r=new Date,i={todo:e,id:n,created_at:r.toLocaleDateString()},s=await ho.addTodo(i);t("updateToDoList",[s])},async updateTodo(t,e){await ho.updateTodos(e.id,e)},async deleteTodo({commit:t},e){await ho.deleteTodo(e)}}}),tc=Xw(Zw);p_(tc);WC.add(XC);tc.component("font-awesome-icon",fT);tc.use(EO);tc.mount("#app");export{VO as $,Y as A,HO as B,Ke as C,FO as D,zO as E,Dt as F,Kt as G,k1 as H,Qt as I,gb as J,Gp as K,$1 as L,i1 as M,Mt as N,MO as O,Ii as P,Op as Q,Zm as R,P1 as S,ma as T,WO as U,qO as V,fa as W,vh as X,RO as Y,Rp as Z,TO as _,Zt as a,au as a0,CO as a1,SO as a2,kO as a3,si as a4,Yt as a5,Fb as a6,Wp as a7,YO as a8,UO as a9,BO as aa,Vp as ab,$0 as ac,LO as ad,KO as ae,PO as af,GO as ag,ds as ah,DO as ai,Nn as aj,jO as ak,kp as al,OO as am,fw as an,xO as ao,AO as ap,_O as aq,IO as ar,NO as b,ne as c,Fr as d,Km as e,uc as f,ms as g,A1 as h,mt as i,Pe as j,Hb as k,Sp as l,xp as m,XO as n,hp as o,yu as p,JO as q,St as r,mp as s,xt as t,QO as u,$O as v,Sb as w,x0 as x,Le as y,Ge as z};
