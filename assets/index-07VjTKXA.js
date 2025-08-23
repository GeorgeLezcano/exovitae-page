(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function BS(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wd={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function zS(){if(s0)return qo;s0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=e,qo.jsx=i,qo.jsxs=i,qo}var o0;function FS(){return o0||(o0=1,wd.exports=zS()),wd.exports}var B=FS(),Cd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function HS(){if(l0)return ut;l0=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(O,ee,_e){this.props=O,this.context=ee,this.refs=b,this.updater=_e||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=x.prototype;function A(O,ee,_e){this.props=O,this.context=ee,this.refs=b,this.updater=_e||S}var T=A.prototype=new g;T.constructor=A,E(T,x.prototype),T.isPureReactComponent=!0;var R=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function I(O,ee,_e,Me,Ce,ne){return _e=ne.ref,{$$typeof:a,type:O,key:ee,ref:_e!==void 0?_e:null,props:ne}}function k(O,ee){return I(O.type,ee,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function L(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_e){return ee[_e]})}var F=/\/+/g;function ie(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):ee.toString(36)}function oe(){}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(oe,oe):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function de(O,ee,_e,Me,Ce){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ne){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case a:case e:pe=!0;break;case _:return pe=O._init,de(pe(O._payload),ee,_e,Me,Ce)}}if(pe)return Ce=Ce(O),pe=Me===""?"."+ie(O,0):Me,R(Ce)?(_e="",pe!=null&&(_e=pe.replace(F,"$&/")+"/"),de(Ce,ee,_e,"",function(je){return je})):Ce!=null&&(U(Ce)&&(Ce=k(Ce,_e+(Ce.key==null||O&&O.key===Ce.key?"":(""+Ce.key).replace(F,"$&/")+"/")+pe)),ee.push(Ce)),1;pe=0;var Ee=Me===""?".":Me+":";if(R(O))for(var Ne=0;Ne<O.length;Ne++)Me=O[Ne],ne=Ee+ie(Me,Ne),pe+=de(Me,ee,_e,ne,Ce);else if(Ne=y(O),typeof Ne=="function")for(O=Ne.call(O),Ne=0;!(Me=O.next()).done;)Me=Me.value,ne=Ee+ie(Me,Ne++),pe+=de(Me,ee,_e,ne,Ce);else if(ne==="object"){if(typeof O.then=="function")return de(ue(O),ee,_e,Me,Ce);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return pe}function H(O,ee,_e){if(O==null)return O;var Me=[],Ce=0;return de(O,Me,"","",function(ne){return ee.call(_e,ne,Ce++)}),Me}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(_e){(O._status===0||O._status===-1)&&(O._status=1,O._result=_e)},function(_e){(O._status===0||O._status===-1)&&(O._status=2,O._result=_e)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Se(){}return ut.Children={map:H,forEach:function(O,ee,_e){H(O,function(){ee.apply(this,arguments)},_e)},count:function(O){var ee=0;return H(O,function(){ee++}),ee},toArray:function(O){return H(O,function(ee){return ee})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ut.Component=x,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=A,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ut.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ut.cache=function(O){return function(){return O.apply(null,arguments)}},ut.cloneElement=function(O,ee,_e){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=E({},O.props),Ce=O.key,ne=void 0;if(ee!=null)for(pe in ee.ref!==void 0&&(ne=void 0),ee.key!==void 0&&(Ce=""+ee.key),ee)!z.call(ee,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&ee.ref===void 0||(Me[pe]=ee[pe]);var pe=arguments.length-2;if(pe===1)Me.children=_e;else if(1<pe){for(var Ee=Array(pe),Ne=0;Ne<pe;Ne++)Ee[Ne]=arguments[Ne+2];Me.children=Ee}return I(O.type,Ce,void 0,void 0,ne,Me)},ut.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ut.createElement=function(O,ee,_e){var Me,Ce={},ne=null;if(ee!=null)for(Me in ee.key!==void 0&&(ne=""+ee.key),ee)z.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ce[Me]=ee[Me]);var pe=arguments.length-2;if(pe===1)Ce.children=_e;else if(1<pe){for(var Ee=Array(pe),Ne=0;Ne<pe;Ne++)Ee[Ne]=arguments[Ne+2];Ce.children=Ee}if(O&&O.defaultProps)for(Me in pe=O.defaultProps,pe)Ce[Me]===void 0&&(Ce[Me]=pe[Me]);return I(O,ne,void 0,void 0,null,Ce)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(O){return{$$typeof:d,render:O}},ut.isValidElement=U,ut.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:K}},ut.memo=function(O,ee){return{$$typeof:h,type:O,compare:ee===void 0?null:ee}},ut.startTransition=function(O){var ee=N.T,_e={};N.T=_e;try{var Me=O(),Ce=N.S;Ce!==null&&Ce(_e,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Se,q)}catch(ne){q(ne)}finally{N.T=ee}},ut.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ut.use=function(O){return N.H.use(O)},ut.useActionState=function(O,ee,_e){return N.H.useActionState(O,ee,_e)},ut.useCallback=function(O,ee){return N.H.useCallback(O,ee)},ut.useContext=function(O){return N.H.useContext(O)},ut.useDebugValue=function(){},ut.useDeferredValue=function(O,ee){return N.H.useDeferredValue(O,ee)},ut.useEffect=function(O,ee,_e){var Me=N.H;if(typeof _e=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(O,ee)},ut.useId=function(){return N.H.useId()},ut.useImperativeHandle=function(O,ee,_e){return N.H.useImperativeHandle(O,ee,_e)},ut.useInsertionEffect=function(O,ee){return N.H.useInsertionEffect(O,ee)},ut.useLayoutEffect=function(O,ee){return N.H.useLayoutEffect(O,ee)},ut.useMemo=function(O,ee){return N.H.useMemo(O,ee)},ut.useOptimistic=function(O,ee){return N.H.useOptimistic(O,ee)},ut.useReducer=function(O,ee,_e){return N.H.useReducer(O,ee,_e)},ut.useRef=function(O){return N.H.useRef(O)},ut.useState=function(O){return N.H.useState(O)},ut.useSyncExternalStore=function(O,ee,_e){return N.H.useSyncExternalStore(O,ee,_e)},ut.useTransition=function(){return N.H.useTransition()},ut.version="19.1.1",ut}var c0;function dp(){return c0||(c0=1,Cd.exports=HS()),Cd.exports}var V=dp();const Zt=BS(V);var Dd={exports:{}},Yo={},Ud={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function GS(){return u0||(u0=1,function(a){function e(H,K){var q=H.length;H.push(K);e:for(;0<q;){var Se=q-1>>>1,O=H[Se];if(0<l(O,K))H[Se]=K,H[q]=O,q=Se;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var K=H[0],q=H.pop();if(q!==K){H[0]=q;e:for(var Se=0,O=H.length,ee=O>>>1;Se<ee;){var _e=2*(Se+1)-1,Me=H[_e],Ce=_e+1,ne=H[Ce];if(0>l(Me,q))Ce<O&&0>l(ne,Me)?(H[Se]=ne,H[Ce]=q,Se=Ce):(H[Se]=Me,H[_e]=q,Se=_e);else if(Ce<O&&0>l(ne,q))H[Se]=ne,H[Ce]=q,Se=Ce;else break e}}return K}function l(H,K){var q=H.sortIndex-K.sortIndex;return q!==0?q:H.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],h=[],_=1,v=null,y=3,S=!1,E=!1,b=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function R(H){for(var K=i(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=H)r(h),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(h)}}function N(H){if(b=!1,R(H),!E)if(i(m)!==null)E=!0,z||(z=!0,ie());else{var K=i(h);K!==null&&de(N,K.startTime-H)}}var z=!1,I=-1,k=5,U=-1;function L(){return x?!0:!(a.unstable_now()-U<k)}function F(){if(x=!1,z){var H=a.unstable_now();U=H;var K=!0;try{e:{E=!1,b&&(b=!1,A(I),I=-1),S=!0;var q=y;try{t:{for(R(H),v=i(m);v!==null&&!(v.expirationTime>H&&L());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,y=v.priorityLevel;var O=Se(v.expirationTime<=H);if(H=a.unstable_now(),typeof O=="function"){v.callback=O,R(H),K=!0;break t}v===i(m)&&r(m),R(H)}else r(m);v=i(m)}if(v!==null)K=!0;else{var ee=i(h);ee!==null&&de(N,ee.startTime-H),K=!1}}break e}finally{v=null,y=q,S=!1}K=void 0}}finally{K?ie():z=!1}}}var ie;if(typeof T=="function")ie=function(){T(F)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=F,ie=function(){ue.postMessage(null)}}else ie=function(){g(F,0)};function de(H,K){I=g(function(){H(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_next=function(H){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return H()}finally{y=q}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var q=y;y=H;try{return K()}finally{y=q}},a.unstable_scheduleCallback=function(H,K,q){var Se=a.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Se+q:Se):q=Se,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,H={id:_++,callback:K,priorityLevel:H,startTime:q,expirationTime:O,sortIndex:-1},q>Se?(H.sortIndex=q,e(h,H),i(m)===null&&H===i(h)&&(b?(A(I),I=-1):b=!0,de(N,q-Se))):(H.sortIndex=O,e(m,H),E||S||(E=!0,z||(z=!0,ie()))),H},a.unstable_shouldYield=L,a.unstable_wrapCallback=function(H){var K=y;return function(){var q=y;y=K;try{return H.apply(this,arguments)}finally{y=q}}}}(Ld)),Ld}var f0;function VS(){return f0||(f0=1,Ud.exports=GS()),Ud.exports}var Nd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function kS(){if(d0)return Ln;d0=1;var a=dp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Ln.flushSync=function(m){var h=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=_,r.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,v=d(_,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,v=d(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,_){return f.H.useFormState(m,h,_)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var h0;function XS(){if(h0)return Nd.exports;h0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Nd.exports=kS(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function WS(){if(p0)return Yo;p0=1;var a=VS(),e=dp(),i=XS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,o=n;;){var u=s.return;if(u===null)break;var p=u.alternate;if(p===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===s)return d(u),t;if(p===o)return d(u),n;p=p.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=p;else{for(var M=!1,C=u.child;C;){if(C===s){M=!0,s=u,o=p;break}if(C===o){M=!0,o=u,s=p;break}C=C.sibling}if(!M){for(C=p.child;C;){if(C===s){M=!0,s=p,o=u;break}if(C===o){M=!0,o=p,s=u;break}C=C.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),T=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ie(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case T:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case k:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var de=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Se=[],O=-1;function ee(t){return{current:t}}function _e(t){0>O||(t.current=Se[O],Se[O]=null,O--)}function Me(t,n){O++,Se[O]=t.current,t.current=n}var Ce=ee(null),ne=ee(null),pe=ee(null),Ee=ee(null);function Ne(t,n){switch(Me(pe,n),Me(ne,t),Me(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?O_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=O_(n),t=P_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_e(Ce),Me(Ce,t)}function je(){_e(Ce),_e(ne),_e(pe)}function Ve(t){t.memoizedState!==null&&Me(Ee,t);var n=Ce.current,s=P_(n,t.type);n!==s&&(Me(ne,t),Me(Ce,s))}function Et(t){ne.current===t&&(_e(Ce),_e(ne)),Ee.current===t&&(_e(Ee),Vo._currentValue=q)}var mt=Object.prototype.hasOwnProperty,X=a.unstable_scheduleCallback,Rt=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,St=a.unstable_requestPaint,He=a.unstable_now,tt=a.unstable_getCurrentPriorityLevel,be=a.unstable_ImmediatePriority,nt=a.unstable_UserBlockingPriority,Ot=a.unstable_NormalPriority,Lt=a.unstable_LowPriority,P=a.unstable_IdlePriority,w=a.log,J=a.unstable_setDisableYieldValue,he=null,ve=null;function fe(t){if(typeof w=="function"&&J(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(he,t)}catch{}}var ze=Math.clz32?Math.clz32:Ze,De=Math.log,qe=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(De(t)/qe|0)|0}var Te=256,Pe=4194304;function Je(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,n,s){var o=t.pendingLanes;if(o===0)return 0;var u=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~p,o!==0?u=Je(o):(M&=C,M!==0?u=Je(M):s||(s=C&~t,s!==0&&(u=Je(s))))):(C=o&~p,C!==0?u=Je(C):M!==0?u=Je(M):s||(s=o&~t,s!==0&&(u=Je(s)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=Te;return Te<<=1,(Te&4194048)===0&&(Te=256),t}function we(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Ue(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,s,o,u,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,te=t.hiddenUpdates;for(s=M&~s;0<s;){var me=31-ze(s),ye=1<<me;C[me]=0,G[me]=-1;var re=te[me];if(re!==null)for(te[me]=null,me=0;me<re.length;me++){var se=re[me];se!==null&&(se.lane&=-536870913)}s&=~ye}o!==0&&xe(t,o,0),p!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function xe(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|s&4194090}function Xe(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var o=31-ze(s),u=1<<o;u&n|t[o]&n&&(t[o]|=n),s&=~u}}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:e0(t.type))}function yi(t,n){var s=K.p;try{return K.p=t,n()}finally{K.p=s}}var dn=Math.random().toString(36).slice(2),hn="__reactFiber$"+dn,en="__reactProps$"+dn,Ni="__reactContainer$"+dn,Ir="__reactEvents$"+dn,xl="__reactListeners$"+dn,Br="__reactHandles$"+dn,$s="__reactResources$"+dn,Oi="__reactMarker$"+dn;function zr(t){delete t[hn],delete t[en],delete t[Ir],delete t[xl],delete t[Br]}function qi(t){var n=t[hn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Ni]||s[hn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=F_(t);t!==null;){if(s=t[hn])return s;t=F_(t)}return n}t=s,s=t.parentNode}return null}function ya(t){if(t=t[hn]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function tr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function xa(t){var n=t[$s];return n||(n=t[$s]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(t){t[Oi]=!0}var Sl=new Set,Ml={};function D(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(Ml[t]=n,t=0;t<n.length;t++)Sl.add(n[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},Q={};function Re(t){return mt.call(Q,t)?!0:mt.call(ce,t)?!1:le.test(t)?Q[t]=!0:(ce[t]=!0,!1)}function Oe(t,n,s){if(Re(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ge(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Ie(t,n,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+o)}}var et,at;function Ye(t){if(et===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",at=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+at}var dt=!1;function wt(t,n){if(!t||dt)return"";dt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(se){var re=se}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(se){re=se}t.call(ye.prototype)}}else{try{throw Error()}catch(se){re=se}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(se){if(se&&re&&typeof se.stack=="string")return[se.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),M=p[0],C=p[1];if(M&&C){var G=M.split(`
`),te=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===te.length)for(o=G.length-1,u=te.length-1;1<=o&&0<=u&&G[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==te[u]){var me=`
`+G[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ye(s):""}function Kt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return Ye("Activity");default:return""}}function zt(t){try{var n="";do n+=Kt(t),t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t){var n=$e(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,p=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function vt(t){t._valueTracker||(t._valueTracker=Yt(t))}function Cn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return t&&(o=$e(t)?t.checked?"true":"false":t.value),t=o,t!==s?(n.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function yn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xt(t,n,s,o,u,p,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ht(n)):t.value!==""+ht(n)&&(t.value=""+ht(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Dn(t,M,ht(n)):s!=null?Dn(t,M,ht(s)):o!=null&&t.removeAttribute("value"),u==null&&p!=null&&(t.defaultChecked=!!p),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+ht(C):t.removeAttribute("name")}function Bn(t,n,s,o,u,p,M,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null))return;s=s!=null?""+ht(s):"",n=n!=null?""+ht(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dn(t,n,s){n==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function tn(t,n,s,o){if(t=t.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=n.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&o&&(t[s].defaultSelected=!0)}else{for(s=""+ht(s),n=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,s){if(n!=null&&(n=""+ht(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+ht(s):""}function Fr(t,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=ht(n),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o)}function kn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Op(t,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,s):typeof s!="number"||s===0||Oy.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Pp(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&s[u]!==o&&Op(t,u,o)}else for(var p in n)n.hasOwnProperty(p)&&Op(t,p,n[p])}function Au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Iy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ru=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,Gr=null;function Ip(t){var n=ya(t);if(n&&(t=n.stateNode)){var s=t[en]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==t&&o.form===t.form){var u=o[en]||null;if(!u)throw Error(r(90));Xt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===t.form&&Cn(o)}break e;case"textarea":bn(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&tn(t,!!s.multiple,n,!1)}}}var Cu=!1;function Bp(t,n,s){if(Cu)return t(n,s);Cu=!0;try{var o=t(n);return o}finally{if(Cu=!1,(Hr!==null||Gr!==null)&&(lc(),Hr&&(n=Hr,t=Gr,Gr=Hr=null,Ip(n),t)))for(n=0;n<t.length;n++)Ip(t[n])}}function eo(t,n){var s=t.stateNode;if(s===null)return null;var o=s[en]||null;if(o===null)return null;s=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Yi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Du=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Du=!1}var Sa=null,Uu=null,bl=null;function zp(){if(bl)return bl;var t,n=Uu,s=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,p=u.length;for(t=0;t<s&&n[t]===u[t];t++);var M=s-t;for(o=1;o<=M&&n[s-o]===u[p-o];o++);return bl=u.slice(t,1<o?1-o:void 0)}function Tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Fp(){return!1}function Xn(t){function n(s,o,u,p,M){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Al:Fp,this.isPropagationStopped=Fp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Xn(nr),no=_({},nr,{view:0,detail:0}),By=Xn(no),Lu,Nu,io,wl=_({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Lu=t.screenX-io.screenX,Nu=t.screenY-io.screenY):Nu=Lu=0,io=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Hp=Xn(wl),zy=_({},wl,{dataTransfer:0}),Fy=Xn(zy),Hy=_({},no,{relatedTarget:0}),Ou=Xn(Hy),Gy=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Xn(Gy),ky=_({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=Xn(ky),Wy=_({},nr,{data:0}),Gp=Xn(Wy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Yy[t])?!!n[t]:!1}function Pu(){return Zy}var Ky=_({},no,{key:function(t){if(t.key){var n=jy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=Xn(Ky),Jy=_({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Xn(Jy),$y=_({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),ex=Xn($y),tx=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=Xn(tx),ix=_({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Xn(ix),rx=_({},nr,{newState:0,oldState:0}),sx=Xn(rx),ox=[9,13,27,32],Iu=Yi&&"CompositionEvent"in window,ao=null;Yi&&"documentMode"in document&&(ao=document.documentMode);var lx=Yi&&"TextEvent"in window&&!ao,kp=Yi&&(!Iu||ao&&8<ao&&11>=ao),Xp=" ",Wp=!1;function jp(t,n){switch(t){case"keyup":return ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function cx(t,n){switch(t){case"compositionend":return qp(n);case"keypress":return n.which!==32?null:(Wp=!0,Xp);case"textInput":return t=n.data,t===Xp&&Wp?null:t;default:return null}}function ux(t,n){if(Vr)return t==="compositionend"||!Iu&&jp(t,n)?(t=zp(),bl=Uu=Sa=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!fx[t.type]:n==="textarea"}function Zp(t,n,s,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=pc(n,"onChange"),0<n.length&&(s=new Rl("onChange","change",null,s,o),t.push({event:s,listeners:n}))}var ro=null,so=null;function dx(t){C_(t,0)}function Cl(t){var n=tr(t);if(Cn(n))return t}function Kp(t,n){if(t==="change")return n}var Qp=!1;if(Yi){var Bu;if(Yi){var zu="oninput"in document;if(!zu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),zu=typeof Jp.oninput=="function"}Bu=zu}else Bu=!1;Qp=Bu&&(!document.documentMode||9<document.documentMode)}function $p(){ro&&(ro.detachEvent("onpropertychange",em),so=ro=null)}function em(t){if(t.propertyName==="value"&&Cl(so)){var n=[];Zp(n,so,t,wu(t)),Bp(dx,n)}}function hx(t,n,s){t==="focusin"?($p(),ro=n,so=s,ro.attachEvent("onpropertychange",em)):t==="focusout"&&$p()}function px(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(so)}function mx(t,n){if(t==="click")return Cl(n)}function gx(t,n){if(t==="input"||t==="change")return Cl(n)}function _x(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:_x;function oo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!mt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,n){var s=tm(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=n&&o>=n)return{node:s,offset:n-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=tm(s)}}function im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xi(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=xi(t.document)}return n}function Fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var vx=Yi&&"documentMode"in document&&11>=document.documentMode,kr=null,Hu=null,lo=null,Gu=!1;function rm(t,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Gu||kr==null||kr!==xi(o)||(o=kr,"selectionStart"in o&&Fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=pc(Hu,"onSelect"),0<o.length&&(n=new Rl("onSelect","select",null,n,s),t.push({event:n,listeners:o}),n.target=kr)))}function ir(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Xr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Vu={},sm={};Yi&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ar(t){if(Vu[t])return Vu[t];if(!Xr[t])return t;var n=Xr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in sm)return Vu[t]=n[s];return t}var om=ar("animationend"),lm=ar("animationiteration"),cm=ar("animationstart"),yx=ar("transitionrun"),xx=ar("transitionstart"),Sx=ar("transitioncancel"),um=ar("transitionend"),fm=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Si(t,n){fm.set(t,n),D(n,[t])}var dm=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var s=dm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:zt(n)},dm.set(t,n),n)}return{value:t,source:n,stack:zt(n)}}var ci=[],Wr=0,Xu=0;function Dl(){for(var t=Wr,n=Xu=Wr=0;n<t;){var s=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var p=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}p!==0&&hm(s,u,p)}}function Ul(t,n,s,o){ci[Wr++]=t,ci[Wr++]=n,ci[Wr++]=s,ci[Wr++]=o,Xu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Wu(t,n,s,o){return Ul(t,n,s,o),Ll(t)}function jr(t,n){return Ul(t,null,null,n),Ll(t)}function hm(t,n,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var u=!1,p=t.return;p!==null;)p.childLanes|=s,o=p.alternate,o!==null&&(o.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(u=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,u&&n!==null&&(u=31-ze(s),t=p.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=s|536870912),p):null}function Ll(t){if(50<Oo)throw Oo=0,Jf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qr={};function Mx(t,n,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,s,o){return new Mx(t,n,s,o)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var s=t.alternate;return s===null?(s=Kn(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function pm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Nl(t,n,s,o,u,p){var M=0;if(o=t,typeof t=="function")ju(t)&&(M=1);else if(typeof t=="string")M=bS(t,s,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Kn(31,s,n,u),t.elementType=U,t.lanes=p,t;case E:return rr(s.children,u,p,n);case b:M=8,u|=24;break;case x:return t=Kn(12,s,n,u|2),t.elementType=x,t.lanes=p,t;case N:return t=Kn(13,s,n,u),t.elementType=N,t.lanes=p,t;case z:return t=Kn(19,s,n,u),t.elementType=z,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g:case T:M=10;break e;case A:M=9;break e;case R:M=11;break e;case I:M=14;break e;case k:M=16,o=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(M,s,n,u),n.elementType=t,n.type=o,n.lanes=p,n}function rr(t,n,s,o){return t=Kn(7,t,o,n),t.lanes=s,t}function qu(t,n,s){return t=Kn(6,t,null,n),t.lanes=s,t}function Yu(t,n,s){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Yr=[],Zr=0,Ol=null,Pl=0,ui=[],fi=0,sr=null,Ki=1,Qi="";function or(t,n){Yr[Zr++]=Pl,Yr[Zr++]=Ol,Ol=t,Pl=n}function mm(t,n,s){ui[fi++]=Ki,ui[fi++]=Qi,ui[fi++]=sr,sr=t;var o=Ki;t=Qi;var u=32-ze(o)-1;o&=~(1<<u),s+=1;var p=32-ze(n)+u;if(30<p){var M=u-u%5;p=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ki=1<<32-ze(n)+u|s<<u|o,Qi=p+t}else Ki=1<<p|s<<u|o,Qi=t}function Zu(t){t.return!==null&&(or(t,1),mm(t,1,0))}function Ku(t){for(;t===Ol;)Ol=Yr[--Zr],Yr[Zr]=null,Pl=Yr[--Zr],Yr[Zr]=null;for(;t===sr;)sr=ui[--fi],ui[fi]=null,Qi=ui[--fi],ui[fi]=null,Ki=ui[--fi],ui[fi]=null}var zn=null,nn=null,Nt=!1,lr=null,Pi=!1,Qu=Error(r(519));function cr(t){var n=Error(r(418,""));throw fo(li(n,t)),Qu}function gm(t){var n=t.stateNode,s=t.type,o=t.memoizedProps;switch(n[hn]=t,n[en]=o,s){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(s=0;s<Io.length;s++)xt(Io[s],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),vt(n);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Fr(n,o.value,o.defaultValue,o.children),vt(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||N_(n.textContent,s)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=mc),n=!0):n=!1,n||cr(t)}function _m(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:zn=zn.return}}function co(t){if(t!==zn)return!1;if(!Nt)return _m(t),Nt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||pd(t.type,t.memoizedProps)),s=!s),s&&nn&&cr(t),_m(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(n===0){nn=Ei(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;t=t.nextSibling}nn=null}}else n===27?(n=nn,Ba(t.type)?(t=vd,vd=null,nn=t):nn=n):nn=zn?Ei(t.stateNode.nextSibling):null;return!0}function uo(){nn=zn=null,Nt=!1}function vm(){var t=lr;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),lr=null),t}function fo(t){lr===null?lr=[t]:lr.push(t)}var Ju=ee(null),ur=null,Ji=null;function Ma(t,n,s){Me(Ju,n._currentValue),n._currentValue=s}function $i(t){t._currentValue=Ju.current,_e(Ju)}function $u(t,n,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===s)break;t=t.return}}function ef(t,n,s,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var p=u.dependencies;if(p!==null){var M=u.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),$u(p.return,s,t),o||(M=null);break e}p=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),$u(M,s,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function ho(t,n,s,o){t=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=u.type;Zn(u.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(u===Ee.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&ef(n,t,s,o),n.flags|=262144}function Il(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){ur=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return ym(ur,t)}function Bl(t,n){return ur===null&&fr(t),ym(t,n)}function ym(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return s}var Ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},bx=a.unstable_scheduleCallback,Tx=a.unstable_NormalPriority,pn={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new Ex,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&bx(Tx,function(){t.controller.abort()})}var mo=null,nf=0,Kr=0,Qr=null;function Ax(t,n){if(mo===null){var s=mo=[];nf=0,Kr=rd(),Qr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return nf++,n.then(xm,xm),n}function xm(){if(--nf===0&&mo!==null){Qr!==null&&(Qr.status="fulfilled");var t=mo;mo=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Rx(t,n){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Sm=H.S;H.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ax(t,n),Sm!==null&&Sm(t,n)};var dr=ee(null);function af(){var t=dr.current;return t!==null?t:jt.pooledCache}function zl(t,n){n===null?Me(dr,dr.current):Me(dr,n.pool)}function Mm(){var t=af();return t===null?null:{parent:pn._currentValue,pool:t}}var go=Error(r(460)),Em=Error(r(474)),Fl=Error(r(542)),rf={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hl(){}function Tm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Hl,Hl),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t;default:if(typeof n.status=="string")n.then(Hl,Hl);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t}throw _o=n,go}}var _o=null;function Am(){if(_o===null)throw Error(r(459));var t=_o;return _o=null,t}function Rm(t){if(t===go||t===Fl)throw Error(r(483))}var Ea=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ll(t),hm(t,null,s),n}return Ul(t,o,n,s),Ll(t)}function vo(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,Xe(t,s)}}function lf(t,n){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?u=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?u=p=n:p=p.next=n}else u=p=n;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var cf=!1;function yo(){if(cf){var t=Qr;if(t!==null)throw t}}function xo(t,n,s,o){cf=!1;var u=t.updateQueue;Ea=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,te=G.next;G.next=null,M===null?p=te:M.next=te,M=G;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==M&&(C===null?me.firstBaseUpdate=te:C.next=te,me.lastBaseUpdate=G))}if(p!==null){var ye=u.baseState;M=0,me=te=G=null,C=p;do{var re=C.lane&-536870913,se=re!==C.lane;if(se?(bt&re)===re:(o&re)===re){re!==0&&re===Kr&&(cf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var st=t,it=C;re=n;var Gt=s;switch(it.tag){case 1:if(st=it.payload,typeof st=="function"){ye=st.call(Gt,ye,re);break e}ye=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=it.payload,re=typeof st=="function"?st.call(Gt,ye,re):st,re==null)break e;ye=_({},ye,re);break e;case 2:Ea=!0}}re=C.callback,re!==null&&(t.flags|=64,se&&(t.flags|=8192),se=u.callbacks,se===null?u.callbacks=[re]:se.push(re))}else se={lane:re,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(te=me=se,G=ye):me=me.next=se,M|=re;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;se=C,C=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);me===null&&(G=ye),u.baseState=G,u.firstBaseUpdate=te,u.lastBaseUpdate=me,p===null&&(u.shared.lanes=0),Na|=M,t.lanes=M,t.memoizedState=ye}}function wm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Cm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)wm(s[t],n)}var Jr=ee(null),Gl=ee(0);function Dm(t,n){t=sa,Me(Gl,t),Me(Jr,n),sa=t|n.baseLanes}function uf(){Me(Gl,sa),Me(Jr,Jr.current)}function ff(){sa=Gl.current,_e(Jr),_e(Gl)}var Aa=0,gt=null,Ft=null,cn=null,Vl=!1,$r=!1,hr=!1,kl=0,So=0,es=null,wx=0;function sn(){throw Error(r(321))}function df(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!Zn(t[s],n[s]))return!1;return!0}function hf(t,n,s,o,u,p){return Aa=p,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?hg:pg,hr=!1,p=s(o,u),hr=!1,$r&&(p=Lm(n,s,o,u)),Um(t),p}function Um(t){H.H=Zl;var n=Ft!==null&&Ft.next!==null;if(Aa=0,cn=Ft=gt=null,Vl=!1,So=0,es=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Il(t)&&(xn=!0))}function Lm(t,n,s,o){gt=t;var u=0;do{if($r&&(es=null),So=0,$r=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ft=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=Px,p=n(s,o)}while($r);return p}function Cx(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(gt.flags|=1024),n}function pf(){var t=kl!==0;return kl=0,t}function mf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function gf(t){if(Vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Vl=!1}Aa=0,cn=Ft=gt=null,$r=!1,So=kl=0,es=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?gt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(Ft===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var n=cn===null?gt.memoizedState:cn.next;if(n!==null)cn=n,Ft=t;else{if(t===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},cn===null?gt.memoizedState=cn=t:cn=cn.next=t}return cn}function _f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=So;return So+=1,es===null&&(es=[]),t=Tm(es,t,n),n=gt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?hg:pg),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===T)return Un(t)}throw Error(r(438,String(t)))}function vf(t){var n=null,s=gt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=_f(),gt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),o=0;o<t;o++)s[o]=L;return n.index++,s}function ea(t,n){return typeof n=="function"?n(t):n}function Wl(t){var n=un();return yf(n,Ft,t)}function yf(t,n,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=t.baseQueue,p=o.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}n.baseQueue=u=p,o.pending=null}if(p=t.baseState,u===null)t.memoizedState=p;else{n=u.next;var C=M=null,G=null,te=n,me=!1;do{var ye=te.lane&-536870913;if(ye!==te.lane?(bt&ye)===ye:(Aa&ye)===ye){var re=te.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ye===Kr&&(me=!0);else if((Aa&re)===re){te=te.next,re===Kr&&(me=!0);continue}else ye={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(C=G=ye,M=p):G=G.next=ye,gt.lanes|=re,Na|=re;ye=te.action,hr&&s(p,ye),p=te.hasEagerState?te.eagerState:s(p,ye)}else re={lane:ye,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(C=G=re,M=p):G=G.next=re,gt.lanes|=ye,Na|=ye;te=te.next}while(te!==null&&te!==n);if(G===null?M=p:G.next=C,!Zn(p,t.memoizedState)&&(xn=!0,me&&(s=Qr,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=G,o.lastRenderedState=p}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xf(t){var n=un(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,u=s.pending,p=n.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do p=t(p,M.action),M=M.next;while(M!==u);Zn(p,n.memoizedState)||(xn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,o]}function Nm(t,n,s){var o=gt,u=un(),p=Nt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!Zn((Ft||u).memoizedState,s);M&&(u.memoizedState=s,xn=!0),u=u.queue;var C=Im.bind(null,o,u,t);if(Eo(2048,8,C,[t]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ts(9,jl(),Pm.bind(null,o,u,s,n),null),jt===null)throw Error(r(349));p||(Aa&124)!==0||Om(o,n,s)}return s}function Om(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=gt.updateQueue,n===null?(n=_f(),gt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function Pm(t,n,s,o){n.value=s,n.getSnapshot=o,Bm(n)&&zm(t)}function Im(t,n,s){return s(function(){Bm(n)&&zm(t)})}function Bm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!Zn(t,s)}catch{return!0}}function zm(t){var n=jr(t,2);n!==null&&ti(n,t,2)}function Sf(t){var n=Wn();if(typeof t=="function"){var s=t;if(t=s(),hr){fe(!0);try{s()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Fm(t,n,s,o){return t.baseState=s,yf(t,Ft,typeof o=="function"?o:ea)}function Dx(t,n,s,o,u){if(Yl(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};H.T!==null?s(!0):p.isTransition=!1,o(p),s=n.pending,s===null?(p.next=n.pending=p,Hm(n,p)):(p.next=s.next,n.pending=s.next=p)}}function Hm(t,n){var s=n.action,o=n.payload,u=t.state;if(n.isTransition){var p=H.T,M={};H.T=M;try{var C=s(u,o),G=H.S;G!==null&&G(M,C),Gm(t,n,C)}catch(te){Mf(t,n,te)}finally{H.T=p}}else try{p=s(u,o),Gm(t,n,p)}catch(te){Mf(t,n,te)}}function Gm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Vm(t,n,o)},function(o){return Mf(t,n,o)}):Vm(t,n,s)}function Vm(t,n,s){n.status="fulfilled",n.value=s,km(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Hm(t,s)))}function Mf(t,n,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,km(n),n=n.next;while(n!==o)}t.action=null}function km(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function Wm(t,n){if(Nt){var s=jt.formState;if(s!==null){e:{var o=gt;if(Nt){if(nn){t:{for(var u=nn,p=Pi;u.nodeType!==8;){if(!p){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){nn=Ei(u.nextSibling),o=u.data==="F!";break e}}cr(o)}o=!1}o&&(n=s[0])}}return s=Wn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},s.queue=o,s=ug.bind(null,gt,o),o.dispatch=s,o=Sf(!1),p=Rf.bind(null,gt,!1,o.queue),o=Wn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,s=Dx.bind(null,gt,u,p,s),u.dispatch=s,o.memoizedState=t,[n,s,!1]}function jm(t){var n=un();return qm(n,Ft,t)}function qm(t,n,s){if(n=yf(t,n,Xm)[0],t=Wl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(M){throw M===go?Fl:M}else o=n;n=un();var u=n.queue,p=u.dispatch;return s!==n.memoizedState&&(gt.flags|=2048,ts(9,jl(),Ux.bind(null,u,s),null)),[o,p,t]}function Ux(t,n){t.action=n}function Ym(t){var n=un(),s=Ft;if(s!==null)return qm(n,s,t);un(),n=n.memoizedState,s=un();var o=s.queue.dispatch;return s.memoizedState=t,[n,o,!1]}function ts(t,n,s,o){return t={tag:t,create:s,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=_f(),gt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,n.lastEffect=t),t}function jl(){return{destroy:void 0,resource:void 0}}function Zm(){return un().memoizedState}function ql(t,n,s,o){var u=Wn();o=o===void 0?null:o,gt.flags|=t,u.memoizedState=ts(1|n,jl(),s,o)}function Eo(t,n,s,o){var u=un();o=o===void 0?null:o;var p=u.memoizedState.inst;Ft!==null&&o!==null&&df(o,Ft.memoizedState.deps)?u.memoizedState=ts(n,p,s,o):(gt.flags|=t,u.memoizedState=ts(1|n,p,s,o))}function Km(t,n){ql(8390656,8,t,n)}function Qm(t,n){Eo(2048,8,t,n)}function Jm(t,n){return Eo(4,2,t,n)}function $m(t,n){return Eo(4,4,t,n)}function eg(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function tg(t,n,s){s=s!=null?s.concat([t]):null,Eo(4,4,eg.bind(null,n,t),s)}function Ef(){}function ng(t,n){var s=un();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&df(n,o[1])?o[0]:(s.memoizedState=[t,n],t)}function ig(t,n){var s=un();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=t(),hr){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[o,n],o}function bf(t,n,s){return s===void 0||(Aa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=s,t=s_(),gt.lanes|=t,Na|=t,s)}function ag(t,n,s,o){return Zn(s,n)?s:Jr.current!==null?(t=bf(t,s,o),Zn(t,n)||(xn=!0),t):(Aa&42)===0?(xn=!0,t.memoizedState=s):(t=s_(),gt.lanes|=t,Na|=t,n)}function rg(t,n,s,o,u){var p=K.p;K.p=p!==0&&8>p?p:8;var M=H.T,C={};H.T=C,Rf(t,!1,n,s);try{var G=u(),te=H.S;if(te!==null&&te(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=Rx(G,o);bo(t,n,me,ei(t))}else bo(t,n,o,ei(t))}catch(ye){bo(t,n,{then:function(){},status:"rejected",reason:ye},ei())}finally{K.p=p,H.T=M}}function Lx(){}function Tf(t,n,s,o){if(t.tag!==5)throw Error(r(476));var u=sg(t).queue;rg(t,u,n,q,s===null?Lx:function(){return og(t),s(o)})}function sg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:q},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function og(t){var n=sg(t).next.queue;bo(t,n,{},ei())}function Af(){return Un(Vo)}function lg(){return un().memoizedState}function cg(){return un().memoizedState}function Nx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=ei();t=ba(s);var o=Ta(n,t,s);o!==null&&(ti(o,n,s),vo(o,n,s)),n={cache:tf()},t.payload=n;return}n=n.return}}function Ox(t,n,s){var o=ei();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Yl(t)?fg(n,s):(s=Wu(t,n,s,o),s!==null&&(ti(s,t,o),dg(s,n,o)))}function ug(t,n,s){var o=ei();bo(t,n,s,o)}function bo(t,n,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yl(t))fg(n,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,C=p(M,s);if(u.hasEagerState=!0,u.eagerState=C,Zn(C,M))return Ul(t,n,u,0),jt===null&&Dl(),!1}catch{}finally{}if(s=Wu(t,n,u,o),s!==null)return ti(s,t,o),dg(s,n,o),!0}return!1}function Rf(t,n,s,o){if(o={lane:2,revertLane:rd(),action:o,hasEagerState:!1,eagerState:null,next:null},Yl(t)){if(n)throw Error(r(479))}else n=Wu(t,s,o,2),n!==null&&ti(n,t,2)}function Yl(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function fg(t,n){$r=Vl=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function dg(t,n,s){if((s&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,s|=o,n.lanes=s,Xe(t,s)}}var Zl={readContext:Un,use:Xl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},hg={readContext:Un,use:Xl,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Km,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,ql(4194308,4,eg.bind(null,n,t),s)},useLayoutEffect:function(t,n){return ql(4194308,4,t,n)},useInsertionEffect:function(t,n){ql(4,2,t,n)},useMemo:function(t,n){var s=Wn();n=n===void 0?null:n;var o=t();if(hr){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[o,n],o},useReducer:function(t,n,s){var o=Wn();if(s!==void 0){var u=s(n);if(hr){fe(!0);try{s(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ox.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Sf(t);var n=t.queue,s=ug.bind(null,gt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Ef,useDeferredValue:function(t,n){var s=Wn();return bf(s,t,n)},useTransition:function(){var t=Sf(!1);return t=rg.bind(null,gt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var o=gt,u=Wn();if(Nt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),jt===null)throw Error(r(349));(bt&124)!==0||Om(o,n,s)}u.memoizedState=s;var p={value:s,getSnapshot:n};return u.queue=p,Km(Im.bind(null,o,p,t),[t]),o.flags|=2048,ts(9,jl(),Pm.bind(null,o,p,s,n),null),s},useId:function(){var t=Wn(),n=jt.identifierPrefix;if(Nt){var s=Qi,o=Ki;s=(o&~(1<<32-ze(o)-1)).toString(32)+s,n="«"+n+"R"+s,s=kl++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=wx++,n="«"+n+"r"+s.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Af,useFormState:Wm,useActionState:Wm,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Rf.bind(null,gt,!0,s),s.dispatch=n,[t,n]},useMemoCache:vf,useCacheRefresh:function(){return Wn().memoizedState=Nx.bind(null,gt)}},pg={readContext:Un,use:Xl,useCallback:ng,useContext:Un,useEffect:Qm,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:Wl,useRef:Zm,useState:function(){return Wl(ea)},useDebugValue:Ef,useDeferredValue:function(t,n){var s=un();return ag(s,Ft.memoizedState,t,n)},useTransition:function(){var t=Wl(ea)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:Af,useFormState:jm,useActionState:jm,useOptimistic:function(t,n){var s=un();return Fm(s,Ft,t,n)},useMemoCache:vf,useCacheRefresh:cg},Px={readContext:Un,use:Xl,useCallback:ng,useContext:Un,useEffect:Qm,useImperativeHandle:tg,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:ig,useReducer:xf,useRef:Zm,useState:function(){return xf(ea)},useDebugValue:Ef,useDeferredValue:function(t,n){var s=un();return Ft===null?bf(s,t,n):ag(s,Ft.memoizedState,t,n)},useTransition:function(){var t=xf(ea)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Nm,useId:lg,useHostTransitionStatus:Af,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var s=un();return Ft!==null?Fm(s,Ft,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:vf,useCacheRefresh:cg},ns=null,To=0;function Kl(t){var n=To;return To+=1,ns===null&&(ns=[]),Tm(ns,t,n)}function Ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mg(t){var n=t._init;return n(t._payload)}function gg(t){function n(Z,W){if(t){var $=Z.deletions;$===null?(Z.deletions=[W],Z.flags|=16):$.push(W)}}function s(Z,W){if(!t)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function o(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function u(Z,W){return Z=Zi(Z,W),Z.index=0,Z.sibling=null,Z}function p(Z,W,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<W?(Z.flags|=67108866,W):$):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,W,$,ge){return W===null||W.tag!==6?(W=qu($,Z.mode,ge),W.return=Z,W):(W=u(W,$),W.return=Z,W)}function G(Z,W,$,ge){var ke=$.type;return ke===E?me(Z,W,$.props.children,ge,$.key):W!==null&&(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===k&&mg(ke)===W.type)?(W=u(W,$.props),Ao(W,$),W.return=Z,W):(W=Nl($.type,$.key,$.props,null,Z.mode,ge),Ao(W,$),W.return=Z,W)}function te(Z,W,$,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Yu($,Z.mode,ge),W.return=Z,W):(W=u(W,$.children||[]),W.return=Z,W)}function me(Z,W,$,ge,ke){return W===null||W.tag!==7?(W=rr($,Z.mode,ge,ke),W.return=Z,W):(W=u(W,$),W.return=Z,W)}function ye(Z,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=qu(""+W,Z.mode,$),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return $=Nl(W.type,W.key,W.props,null,Z.mode,$),Ao($,W),$.return=Z,$;case S:return W=Yu(W,Z.mode,$),W.return=Z,W;case k:var ge=W._init;return W=ge(W._payload),ye(Z,W,$)}if(de(W)||ie(W))return W=rr(W,Z.mode,$,null),W.return=Z,W;if(typeof W.then=="function")return ye(Z,Kl(W),$);if(W.$$typeof===T)return ye(Z,Bl(Z,W),$);Ql(Z,W)}return null}function re(Z,W,$,ge){var ke=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:C(Z,W,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===ke?G(Z,W,$,ge):null;case S:return $.key===ke?te(Z,W,$,ge):null;case k:return ke=$._init,$=ke($._payload),re(Z,W,$,ge)}if(de($)||ie($))return ke!==null?null:me(Z,W,$,ge,null);if(typeof $.then=="function")return re(Z,W,Kl($),ge);if($.$$typeof===T)return re(Z,W,Bl(Z,$),ge);Ql(Z,$)}return null}function se(Z,W,$,ge,ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get($)||null,C(W,Z,""+ge,ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Z=Z.get(ge.key===null?$:ge.key)||null,G(W,Z,ge,ke);case S:return Z=Z.get(ge.key===null?$:ge.key)||null,te(W,Z,ge,ke);case k:var _t=ge._init;return ge=_t(ge._payload),se(Z,W,$,ge,ke)}if(de(ge)||ie(ge))return Z=Z.get($)||null,me(W,Z,ge,ke,null);if(typeof ge.then=="function")return se(Z,W,$,Kl(ge),ke);if(ge.$$typeof===T)return se(Z,W,$,Bl(W,ge),ke);Ql(W,ge)}return null}function st(Z,W,$,ge){for(var ke=null,_t=null,Ke=W,rt=W=0,Mn=null;Ke!==null&&rt<$.length;rt++){Ke.index>rt?(Mn=Ke,Ke=null):Mn=Ke.sibling;var Ct=re(Z,Ke,$[rt],ge);if(Ct===null){Ke===null&&(Ke=Mn);break}t&&Ke&&Ct.alternate===null&&n(Z,Ke),W=p(Ct,W,rt),_t===null?ke=Ct:_t.sibling=Ct,_t=Ct,Ke=Mn}if(rt===$.length)return s(Z,Ke),Nt&&or(Z,rt),ke;if(Ke===null){for(;rt<$.length;rt++)Ke=ye(Z,$[rt],ge),Ke!==null&&(W=p(Ke,W,rt),_t===null?ke=Ke:_t.sibling=Ke,_t=Ke);return Nt&&or(Z,rt),ke}for(Ke=o(Ke);rt<$.length;rt++)Mn=se(Ke,Z,rt,$[rt],ge),Mn!==null&&(t&&Mn.alternate!==null&&Ke.delete(Mn.key===null?rt:Mn.key),W=p(Mn,W,rt),_t===null?ke=Mn:_t.sibling=Mn,_t=Mn);return t&&Ke.forEach(function(Va){return n(Z,Va)}),Nt&&or(Z,rt),ke}function it(Z,W,$,ge){if($==null)throw Error(r(151));for(var ke=null,_t=null,Ke=W,rt=W=0,Mn=null,Ct=$.next();Ke!==null&&!Ct.done;rt++,Ct=$.next()){Ke.index>rt?(Mn=Ke,Ke=null):Mn=Ke.sibling;var Va=re(Z,Ke,Ct.value,ge);if(Va===null){Ke===null&&(Ke=Mn);break}t&&Ke&&Va.alternate===null&&n(Z,Ke),W=p(Va,W,rt),_t===null?ke=Va:_t.sibling=Va,_t=Va,Ke=Mn}if(Ct.done)return s(Z,Ke),Nt&&or(Z,rt),ke;if(Ke===null){for(;!Ct.done;rt++,Ct=$.next())Ct=ye(Z,Ct.value,ge),Ct!==null&&(W=p(Ct,W,rt),_t===null?ke=Ct:_t.sibling=Ct,_t=Ct);return Nt&&or(Z,rt),ke}for(Ke=o(Ke);!Ct.done;rt++,Ct=$.next())Ct=se(Ke,Z,rt,Ct.value,ge),Ct!==null&&(t&&Ct.alternate!==null&&Ke.delete(Ct.key===null?rt:Ct.key),W=p(Ct,W,rt),_t===null?ke=Ct:_t.sibling=Ct,_t=Ct);return t&&Ke.forEach(function(IS){return n(Z,IS)}),Nt&&or(Z,rt),ke}function Gt(Z,W,$,ge){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var ke=$.key;W!==null;){if(W.key===ke){if(ke=$.type,ke===E){if(W.tag===7){s(Z,W.sibling),ge=u(W,$.props.children),ge.return=Z,Z=ge;break e}}else if(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===k&&mg(ke)===W.type){s(Z,W.sibling),ge=u(W,$.props),Ao(ge,$),ge.return=Z,Z=ge;break e}s(Z,W);break}else n(Z,W);W=W.sibling}$.type===E?(ge=rr($.props.children,Z.mode,ge,$.key),ge.return=Z,Z=ge):(ge=Nl($.type,$.key,$.props,null,Z.mode,ge),Ao(ge,$),ge.return=Z,Z=ge)}return M(Z);case S:e:{for(ke=$.key;W!==null;){if(W.key===ke)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){s(Z,W.sibling),ge=u(W,$.children||[]),ge.return=Z,Z=ge;break e}else{s(Z,W);break}else n(Z,W);W=W.sibling}ge=Yu($,Z.mode,ge),ge.return=Z,Z=ge}return M(Z);case k:return ke=$._init,$=ke($._payload),Gt(Z,W,$,ge)}if(de($))return st(Z,W,$,ge);if(ie($)){if(ke=ie($),typeof ke!="function")throw Error(r(150));return $=ke.call($),it(Z,W,$,ge)}if(typeof $.then=="function")return Gt(Z,W,Kl($),ge);if($.$$typeof===T)return Gt(Z,W,Bl(Z,$),ge);Ql(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(s(Z,W.sibling),ge=u(W,$),ge.return=Z,Z=ge):(s(Z,W),ge=qu($,Z.mode,ge),ge.return=Z,Z=ge),M(Z)):s(Z,W)}return function(Z,W,$,ge){try{To=0;var ke=Gt(Z,W,$,ge);return ns=null,ke}catch(Ke){if(Ke===go||Ke===Fl)throw Ke;var _t=Kn(29,Ke,null,Z.mode);return _t.lanes=ge,_t.return=Z,_t}finally{}}}var is=gg(!0),_g=gg(!1),di=ee(null),Ii=null;function Ra(t){var n=t.alternate;Me(mn,mn.current&1),Me(di,t),Ii===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(Ii=t)}function vg(t){if(t.tag===22){if(Me(mn,mn.current),Me(di,t),Ii===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ii=t)}}else wa()}function wa(){Me(mn,mn.current),Me(di,di.current)}function ta(t){_e(di),Ii===t&&(Ii=null),_e(mn)}var mn=ee(0);function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||_d(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function wf(t,n,s,o){n=t.memoizedState,s=s(o,n),s=s==null?n:_({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Cf={enqueueSetState:function(t,n,s){t=t._reactInternals;var o=ei(),u=ba(o);u.payload=n,s!=null&&(u.callback=s),n=Ta(t,u,o),n!==null&&(ti(n,t,o),vo(n,t,o))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var o=ei(),u=ba(o);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Ta(t,u,o),n!==null&&(ti(n,t,o),vo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=ei(),o=ba(s);o.tag=2,n!=null&&(o.callback=n),n=Ta(t,o,s),n!==null&&(ti(n,t,s),vo(n,t,s))}};function yg(t,n,s,o,u,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,p,M):n.prototype&&n.prototype.isPureReactComponent?!oo(s,o)||!oo(u,p):!0}function xg(t,n,s,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==t&&Cf.enqueueReplaceState(n,n.state,null)}function pr(t,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(t=t.defaultProps){s===n&&(s=_({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Sg(t){$l(t)}function Mg(t){console.error(t)}function Eg(t){$l(t)}function ec(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function bg(t,n,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Df(t,n,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){ec(t,n)},s}function Tg(t){return t=ba(t),t.tag=3,t}function Ag(t,n,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var p=o.value;t.payload=function(){return u(p)},t.callback=function(){bg(n,s,o)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){bg(n,s,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Ix(t,n,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&ho(n,s,u,!0),s=di.current,s!==null){switch(s.tag){case 13:return Ii===null?ed():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===rf?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),nd(t,o,u)),!1;case 22:return s.flags|=65536,o===rf?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),nd(t,o,u)),!1}throw Error(r(435,s.tag))}return nd(t,o,u),ed(),!1}if(Nt)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Qu&&(t=Error(r(422),{cause:o}),fo(li(t,s)))):(o!==Qu&&(n=Error(r(423),{cause:o}),fo(li(n,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,s),u=Df(t.stateNode,o,u),lf(t,u),an!==4&&(an=2)),!1;var p=Error(r(520),{cause:o});if(p=li(p,s),No===null?No=[p]:No.push(p),an!==4&&(an=2),n===null)return!0;o=li(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Df(s.stateNode,o,t),lf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Oa===null||!Oa.has(p))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Tg(u),Ag(u,t,s,o),lf(s,u),!1}s=s.return}while(s!==null);return!1}var Rg=Error(r(461)),xn=!1;function Tn(t,n,s,o){n.child=t===null?_g(n,null,s,o):is(n,t.child,s,o)}function wg(t,n,s,o,u){s=s.render;var p=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return fr(n),o=hf(t,n,s,M,p,u),C=pf(),t!==null&&!xn?(mf(t,n,u),na(t,n,u)):(Nt&&C&&Zu(n),n.flags|=1,Tn(t,n,o,u),n.child)}function Cg(t,n,s,o,u){if(t===null){var p=s.type;return typeof p=="function"&&!ju(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,Dg(t,n,p,o,u)):(t=Nl(s.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!zf(t,u)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(M,o)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Zi(p,o),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,s,o,u){if(t!==null){var p=t.memoizedProps;if(oo(p,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=p,zf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,na(t,n,u)}return Uf(t,n,s,o,u)}function Ug(t,n,s){var o=n.pendingProps,u=o.children,p=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=p!==null?p.baseLanes|s:s,t!==null){for(u=n.child=t.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;n.childLanes=p&~o}else n.childLanes=0,n.child=null;return Lg(t,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(n,p!==null?p.cachePool:null),p!==null?Dm(n,p):uf(),vg(n);else return n.lanes=n.childLanes=536870912,Lg(t,n,p!==null?p.baseLanes|s:s,s)}else p!==null?(zl(n,p.cachePool),Dm(n,p),wa(),n.memoizedState=null):(t!==null&&zl(n,null),uf(),wa());return Tn(t,n,u,s),n.child}function Lg(t,n,s,o){var u=af();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:s,cachePool:u},t!==null&&zl(n,null),uf(),vg(n),t!==null&&ho(t,n,o,!0),null}function tc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Uf(t,n,s,o,u){return fr(n),s=hf(t,n,s,o,void 0,u),o=pf(),t!==null&&!xn?(mf(t,n,u),na(t,n,u)):(Nt&&o&&Zu(n),n.flags|=1,Tn(t,n,s,u),n.child)}function Ng(t,n,s,o,u,p){return fr(n),n.updateQueue=null,s=Lm(n,o,s,u),Um(t),o=pf(),t!==null&&!xn?(mf(t,n,p),na(t,n,p)):(Nt&&o&&Zu(n),n.flags|=1,Tn(t,n,s,p),n.child)}function Og(t,n,s,o,u){if(fr(n),n.stateNode===null){var p=qr,M=s.contextType;typeof M=="object"&&M!==null&&(p=Un(M)),p=new s(o,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Cf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=o,p.state=n.memoizedState,p.refs={},sf(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?Un(M):qr,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(wf(n,s,M,o),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Cf.enqueueReplaceState(p,p.state,null),xo(n,o,p,u),yo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,G=pr(s,C);p.props=G;var te=p.context,me=s.contextType;M=qr,typeof me=="object"&&me!==null&&(M=Un(me));var ye=s.getDerivedStateFromProps;me=typeof ye=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||te!==M)&&xg(n,p,o,M),Ea=!1;var re=n.memoizedState;p.state=re,xo(n,o,p,u),yo(),te=n.memoizedState,C||re!==te||Ea?(typeof ye=="function"&&(wf(n,s,ye,o),te=n.memoizedState),(G=Ea||yg(n,s,G,o,re,te,M))?(me||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),p.props=o,p.state=te,p.context=M,o=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{p=n.stateNode,of(t,n),M=n.memoizedProps,me=pr(s,M),p.props=me,ye=n.pendingProps,re=p.context,te=s.contextType,G=qr,typeof te=="object"&&te!==null&&(G=Un(te)),C=s.getDerivedStateFromProps,(te=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==ye||re!==G)&&xg(n,p,o,G),Ea=!1,re=n.memoizedState,p.state=re,xo(n,o,p,u),yo();var se=n.memoizedState;M!==ye||re!==se||Ea||t!==null&&t.dependencies!==null&&Il(t.dependencies)?(typeof C=="function"&&(wf(n,s,C,o),se=n.memoizedState),(me=Ea||yg(n,s,me,o,re,se,G)||t!==null&&t.dependencies!==null&&Il(t.dependencies))?(te||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,se,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,se,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=se),p.props=o,p.state=se,p.context=G,o=me):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return p=o,tc(t,n),o=(n.flags&128)!==0,p||o?(p=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&o?(n.child=is(n,t.child,null,u),n.child=is(n,null,s,u)):Tn(t,n,s,u),n.memoizedState=p.state,t=n.child):t=na(t,n,u),t}function Pg(t,n,s,o){return uo(),n.flags|=256,Tn(t,n,s,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(t){return{baseLanes:t,cachePool:Mm()}}function Of(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=hi),t}function Ig(t,n,s){var o=n.pendingProps,u=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Ra(n):wa(),Nt){var C=nn,G;if(G=C){e:{for(G=C,C=Pi;G.nodeType!==8;){if(!C){C=null;break e}if(G=Ei(G.nextSibling),G===null){C=null;break e}}C=G}C!==null?(n.memoizedState={dehydrated:C,treeContext:sr!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},G=Kn(18,null,null,0),G.stateNode=C,G.return=n,n.child=G,zn=n,nn=null,G=!0):G=!1}G||cr(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return _d(C)?n.lanes=32:n.lanes=536870912,null;ta(n)}return C=o.children,o=o.fallback,u?(wa(),u=n.mode,C=nc({mode:"hidden",children:C},u),o=rr(o,u,s,null),C.return=n,o.return=n,C.sibling=o,n.child=C,u=n.child,u.memoizedState=Nf(s),u.childLanes=Of(t,M,s),n.memoizedState=Lf,o):(Ra(n),Pf(n,C))}if(G=t.memoizedState,G!==null&&(C=G.dehydrated,C!==null)){if(p)n.flags&256?(Ra(n),n.flags&=-257,n=If(t,n,s)):n.memoizedState!==null?(wa(),n.child=t.child,n.flags|=128,n=null):(wa(),u=o.fallback,C=n.mode,o=nc({mode:"visible",children:o.children},C),u=rr(u,C,s,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,is(n,t.child,null,s),o=n.child,o.memoizedState=Nf(s),o.childLanes=Of(t,M,s),n.memoizedState=Lf,n=u);else if(Ra(n),_d(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var te=M.dgst;M=te,o=Error(r(419)),o.stack="",o.digest=M,fo({value:o,source:null,stack:null}),n=If(t,n,s)}else if(xn||ho(t,n,s,!1),M=(s&t.childLanes)!==0,xn||M){if(M=jt,M!==null&&(o=s&-s,o=(o&42)!==0?1:ot(o),o=(o&(M.suspendedLanes|s))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,jr(t,o),ti(M,t,o),Rg;C.data==="$?"||ed(),n=If(t,n,s)}else C.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,nn=Ei(C.nextSibling),zn=n,Nt=!0,lr=null,Pi=!1,t!==null&&(ui[fi++]=Ki,ui[fi++]=Qi,ui[fi++]=sr,Ki=t.id,Qi=t.overflow,sr=n),n=Pf(n,o.children),n.flags|=4096);return n}return u?(wa(),u=o.fallback,C=n.mode,G=t.child,te=G.sibling,o=Zi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,te!==null?u=Zi(te,u):(u=rr(u,C,s,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,C=t.child.memoizedState,C===null?C=Nf(s):(G=C.cachePool,G!==null?(te=pn._currentValue,G=G.parent!==te?{parent:te,pool:te}:G):G=Mm(),C={baseLanes:C.baseLanes|s,cachePool:G}),u.memoizedState=C,u.childLanes=Of(t,M,s),n.memoizedState=Lf,o):(Ra(n),s=t.child,t=s.sibling,s=Zi(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function Pf(t,n){return n=nc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function nc(t,n){return t=Kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function If(t,n,s){return is(n,t.child,null,s),t=Pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bg(t,n,s){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),$u(t.return,n,s)}function Bf(t,n,s,o,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=s,p.tailMode=u)}function zg(t,n,s){var o=n.pendingProps,u=o.revealOrder,p=o.tail;if(Tn(t,n,o.children,s),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,s,n);else if(t.tag===19)Bg(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(mn,o),u){case"forwards":for(s=n.child,u=null;s!==null;)t=s.alternate,t!==null&&Jl(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Bf(n,!1,u,s,p);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Bf(n,!0,s,null,p);break;case"together":Bf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function na(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(ho(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=Zi(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Zi(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Il(t)))}function Bx(t,n,s){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),Ma(n,pn,t.memoizedState.cache),uo();break;case 27:case 5:Ve(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:Ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Ig(t,n,s):(Ra(n),t=na(t,n,s),t!==null?t.sibling:null);Ra(n);break;case 19:var u=(t.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(ho(t,n,s,!1),o=(s&n.childLanes)!==0),u){if(o)return zg(t,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,Ug(t,n,s);case 24:Ma(n,pn,t.memoizedState.cache)}return na(t,n,s)}function Fg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!zf(t,s)&&(n.flags&128)===0)return xn=!1,Bx(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Nt&&(n.flags&1048576)!==0&&mm(n,Pl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")ju(o)?(t=pr(o,t),n.tag=1,n=Og(null,n,o,t,s)):(n.tag=0,n=Uf(null,n,o,t,s));else{if(o!=null){if(u=o.$$typeof,u===R){n.tag=11,n=wg(null,n,o,t,s);break e}else if(u===I){n.tag=14,n=Cg(null,n,o,t,s);break e}}throw n=ue(o)||o,Error(r(306,n,""))}}return n;case 0:return Uf(t,n,n.type,n.pendingProps,s);case 1:return o=n.type,u=pr(o,n.pendingProps),Og(t,n,o,u,s);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var p=n.memoizedState;u=p.element,of(t,n),xo(n,o,null,s);var M=n.memoizedState;if(o=M.cache,Ma(n,pn,o),o!==p.cache&&ef(n,[pn],s,!0),yo(),o=M.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=Pg(t,n,o,s);break e}else if(o!==u){u=li(Error(r(424)),n),fo(u),n=Pg(t,n,o,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Ei(t.firstChild),zn=n,Nt=!0,lr=null,Pi=!0,s=_g(n,null,o,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(uo(),o===u){n=na(t,n,s);break e}Tn(t,n,o,s)}n=n.child}return n;case 26:return tc(t,n),t===null?(s=k_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Nt||(s=n.type,t=n.pendingProps,o=gc(pe.current).createElement(s),o[hn]=n,o[en]=t,Rn(o,s,t),ln(o),n.stateNode=o):n.memoizedState=k_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ve(n),t===null&&Nt&&(o=n.stateNode=H_(n.type,n.pendingProps,pe.current),zn=n,Pi=!0,u=nn,Ba(n.type)?(vd=u,nn=Ei(o.firstChild)):nn=u),Tn(t,n,n.pendingProps.children,s),tc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=nn)&&(o=fS(o,n.type,n.pendingProps,Pi),o!==null?(n.stateNode=o,zn=n,nn=Ei(o.firstChild),Pi=!1,u=!0):u=!1),u||cr(n)),Ve(n),u=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,o=p.children,pd(u,p)?o=null:M!==null&&pd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=hf(t,n,Cx,null,null,s),Vo._currentValue=u),tc(t,n),Tn(t,n,o,s),n.child;case 6:return t===null&&Nt&&((t=s=nn)&&(s=dS(s,n.pendingProps,Pi),s!==null?(n.stateNode=s,zn=n,nn=null,t=!0):t=!1),t||cr(n)),null;case 13:return Ig(t,n,s);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=is(n,null,o,s):Tn(t,n,o,s),n.child;case 11:return wg(t,n,n.type,n.pendingProps,s);case 7:return Tn(t,n,n.pendingProps,s),n.child;case 8:return Tn(t,n,n.pendingProps.children,s),n.child;case 12:return Tn(t,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,Ma(n,n.type,o.value),Tn(t,n,o.children,s),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fr(n),u=Un(u),o=o(u),n.flags|=1,Tn(t,n,o,s),n.child;case 14:return Cg(t,n,n.type,n.pendingProps,s);case 15:return Dg(t,n,n.type,n.pendingProps,s);case 19:return zg(t,n,s);case 31:return o=n.pendingProps,s=n.mode,o={mode:o.mode,children:o.children},t===null?(s=nc(o,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=Zi(t.child,o),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return Ug(t,n,s);case 24:return fr(n),o=Un(pn),t===null?(u=af(),u===null&&(u=jt,p=tf(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=s),u=p),n.memoizedState={parent:o,cache:u},sf(n),Ma(n,pn,u)):((t.lanes&s)!==0&&(of(t,n),xo(n,null,null,s),yo()),u=t.memoizedState,p=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ma(n,pn,o)):(o=p.cache,Ma(n,pn,o),o!==u.cache&&ef(n,[pn],s,!0))),Tn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function Hg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y_(n)){if(n=di.current,n!==null&&((bt&4194048)===bt?Ii!==null:(bt&62914560)!==bt&&(bt&536870912)===0||n!==Ii))throw _o=rf,Em;t.flags|=8192}}function ic(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?we():536870912,t.lanes|=n,os|=n)}function Ro(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(n)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=s,n}function zx(t,n,s){var o=n.pendingProps;switch(Ku(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return s=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(pn),je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(co(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vm())),$t(n),null;case 26:return s=n.memoizedState,t===null?(ia(n),s!==null?($t(n),Hg(n,s)):($t(n),n.flags&=-16777217)):s?s!==t.memoizedState?(ia(n),$t(n),Hg(n,s)):($t(n),n.flags&=-16777217):(t.memoizedProps!==o&&ia(n),$t(n),n.flags&=-16777217),null;case 27:Et(n),s=pe.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}t=Ce.current,co(n)?gm(n):(t=H_(u,o,s),n.stateNode=t,ia(n))}return $t(n),null;case 5:if(Et(n),s=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}if(t=Ce.current,co(n))gm(n);else{switch(u=gc(pe.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}t[hn]=n,t[en]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Rn(t,s,o),s){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ia(n)}}return $t(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=pe.current,co(n)){if(t=n.stateNode,s=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||N_(t.nodeValue,s)),t||cr(n)}else t=gc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=co(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[hn]=n}else uo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=vm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ta(n),n):(ta(n),null)}if(ta(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,t=t!==null&&t.memoizedState!==null,s){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var p=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==u&&(o.flags|=2048)}return s!==t&&s&&(n.child.flags|=8192),ic(n,n.updateQueue),$t(n),null;case 4:return je(),t===null&&cd(n.stateNode.containerInfo),$t(n),null;case 10:return $i(n.type),$t(n),null;case 19:if(_e(mn),u=n.memoizedState,u===null)return $t(n),null;if(o=(n.flags&128)!==0,p=u.rendering,p===null)if(o)Ro(u,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=Jl(t),p!==null){for(n.flags|=128,Ro(u,!1),t=p.updateQueue,n.updateQueue=t,ic(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)pm(s,t),s=s.sibling;return Me(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&He()>sc&&(n.flags|=128,o=!0,Ro(u,!1),n.lanes=4194304)}else{if(!o)if(t=Jl(p),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,ic(n,t),Ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Nt)return $t(n),null}else 2*He()-u.renderingStartTime>sc&&s!==536870912&&(n.flags|=128,o=!0,Ro(u,!1),n.lanes=4194304);u.isBackwards?(p.sibling=n.child,n.child=p):(t=u.last,t!==null?t.sibling=p:n.child=p,u.last=p)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=He(),n.sibling=null,t=mn.current,Me(mn,o?t&1|2:t&1),n):($t(n),null);case 22:case 23:return ta(n),ff(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),s=n.updateQueue,s!==null&&ic(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),t!==null&&_e(dr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),$i(pn),$t(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Fx(t,n){switch(Ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(pn),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Et(n),null;case 13:if(ta(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));uo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _e(mn),null;case 4:return je(),null;case 10:return $i(n.type),null;case 22:case 23:return ta(n),ff(),t!==null&&_e(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(pn),null;case 25:return null;default:return null}}function Gg(t,n){switch(Ku(n),n.tag){case 3:$i(pn),je();break;case 26:case 27:case 5:Et(n);break;case 4:je();break;case 13:ta(n);break;case 19:_e(mn);break;case 10:$i(n.type);break;case 22:case 23:ta(n),ff(),t!==null&&_e(dr);break;case 24:$i(pn)}}function wo(t,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&t)===t){o=void 0;var p=s.create,M=s.inst;o=p(),M.destroy=o}s=s.next}while(s!==u)}}catch(C){Wt(n,n.return,C)}}function Ca(t,n,s){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&t)===t){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var G=s,te=C;try{te()}catch(me){Wt(u,G,me)}}}o=o.next}while(o!==p)}}catch(me){Wt(n,n.return,me)}}function Vg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{Cm(n,s)}catch(o){Wt(t,t.return,o)}}}function kg(t,n,s){s.props=pr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Co(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(u){Wt(t,n,u)}}function Bi(t,n){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Wt(t,n,u)}else s.current=null}function Xg(t){var n=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Wt(t,t.return,u)}}function Ff(t,n,s){try{var o=t.stateNode;sS(o,t.type,s,n),o[en]=n}catch(u){Wt(t,t.return,u)}}function Wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=mc));else if(o!==4&&(o===27&&Ba(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Gf(t,n,s),t=t.sibling;t!==null;)Gf(t,n,s),t=t.sibling}function ac(t,n,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(o!==4&&(o===27&&Ba(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ac(t,n,s),t=t.sibling;t!==null;)ac(t,n,s),t=t.sibling}function jg(t){var n=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,s),n[hn]=t,n[en]=s}catch(p){Wt(t,t.return,p)}}var aa=!1,on=!1,Vf=!1,qg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Hx(t,n){if(t=t.containerInfo,dd=Mc,t=am(t),Fu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,C=-1,G=-1,te=0,me=0,ye=t,re=null;t:for(;;){for(var se;ye!==s||u!==0&&ye.nodeType!==3||(C=M+u),ye!==p||o!==0&&ye.nodeType!==3||(G=M+o),ye.nodeType===3&&(M+=ye.nodeValue.length),(se=ye.firstChild)!==null;)re=ye,ye=se;for(;;){if(ye===t)break t;if(re===s&&++te===u&&(C=M),re===p&&++me===o&&(G=M),(se=ye.nextSibling)!==null)break;ye=re,re=ye.parentNode}ye=se}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(hd={focusedElem:t,selectionRange:s},Mc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,p=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,u=p.memoizedProps,p=p.memoizedState,o=s.stateNode;try{var st=pr(s.type,u,s.elementType===s.type);t=o.getSnapshotBeforeUpdate(st,p),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)gd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Yg(t,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Da(t,s),o&4&&wo(5,s);break;case 1:if(Da(t,s),o&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){Wt(s,s.return,M)}else{var u=pr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Wt(s,s.return,M)}}o&64&&Vg(s),o&512&&Co(s,s.return);break;case 3:if(Da(t,s),o&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Cm(t,n)}catch(M){Wt(s,s.return,M)}}break;case 27:n===null&&o&4&&jg(s);case 26:case 5:Da(t,s),n===null&&o&4&&Xg(s),o&512&&Co(s,s.return);break;case 12:Da(t,s);break;case 13:Da(t,s),o&4&&Qg(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Zx.bind(null,s),hS(t,s))));break;case 22:if(o=s.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||on,u=aa;var p=on;aa=o,(on=n)&&!p?Ua(t,s,(s.subtreeFlags&8772)!==0):Da(t,s),aa=u,on=p}break;case 30:break;default:Da(t,s)}}function Zg(t){var n=t.alternate;n!==null&&(t.alternate=null,Zg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,jn=!1;function ra(t,n,s){for(s=s.child;s!==null;)Kg(t,n,s),s=s.sibling}function Kg(t,n,s){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:on||Bi(s,n),ra(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Bi(s,n);var o=Qt,u=jn;Ba(s.type)&&(Qt=s.stateNode,jn=!1),ra(t,n,s),zo(s.stateNode),Qt=o,jn=u;break;case 5:on||Bi(s,n);case 6:if(o=Qt,u=jn,Qt=null,ra(t,n,s),Qt=o,jn=u,Qt!==null)if(jn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(s.stateNode)}catch(p){Wt(s,n,p)}else try{Qt.removeChild(s.stateNode)}catch(p){Wt(s,n,p)}break;case 18:Qt!==null&&(jn?(t=Qt,z_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),jo(t)):z_(Qt,s.stateNode));break;case 4:o=Qt,u=jn,Qt=s.stateNode.containerInfo,jn=!0,ra(t,n,s),Qt=o,jn=u;break;case 0:case 11:case 14:case 15:on||Ca(2,s,n),on||Ca(4,s,n),ra(t,n,s);break;case 1:on||(Bi(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&kg(s,n,o)),ra(t,n,s);break;case 21:ra(t,n,s);break;case 22:on=(o=on)||s.memoizedState!==null,ra(t,n,s),on=o;break;default:ra(t,n,s)}}function Qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jo(t)}catch(s){Wt(n,n.return,s)}}function Gx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qg),n;default:throw Error(r(435,t.tag))}}function kf(t,n){var s=Gx(t);n.forEach(function(o){var u=Kx.bind(null,t,o);s.has(o)||(s.add(o),o.then(u,u))})}function Qn(t,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],p=t,M=n,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(Ba(C.type)){Qt=C.stateNode,jn=!1;break e}break;case 5:Qt=C.stateNode,jn=!1;break e;case 3:case 4:Qt=C.stateNode.containerInfo,jn=!0;break e}C=C.return}if(Qt===null)throw Error(r(160));Kg(p,M,u),Qt=null,jn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Jg(n,t),n=n.sibling}var Mi=null;function Jg(t,n){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(Ca(3,t,t.return),wo(3,t),Ca(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(on||s===null||Bi(s,s.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Mi;if(Qn(n,t),Jn(t),o&512&&(on||s===null||Bi(s,s.return)),o&4){var p=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":p=u.getElementsByTagName("title")[0],(!p||p[Oi]||p[hn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(o),u.head.insertBefore(p,u.querySelector("head > title"))),Rn(p,o,s),p[hn]=t,ln(p),o=p;break e;case"link":var M=j_("link","href",u).get(o+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(p=M[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}p=u.createElement(o),Rn(p,o,s),u.head.appendChild(p);break;case"meta":if(M=j_("meta","content",u).get(o+(s.content||""))){for(C=0;C<M.length;C++)if(p=M[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}p=u.createElement(o),Rn(p,o,s),u.head.appendChild(p);break;default:throw Error(r(468,o))}p[hn]=t,ln(p),o=p}t.stateNode=o}else q_(u,t.type,t.stateNode);else t.stateNode=W_(u,o,t.memoizedProps);else p!==o?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,o===null?q_(u,t.type,t.stateNode):W_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(on||s===null||Bi(s,s.return)),s!==null&&o&4&&Ff(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(on||s===null||Bi(s,s.return)),t.flags&32){u=t.stateNode;try{kn(u,"")}catch(se){Wt(t,t.return,se)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ff(t,u,s!==null?s.memoizedProps:u)),o&1024&&(Vf=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(se){Wt(t,t.return,se)}}break;case 3:if(yc=null,u=Mi,Mi=_c(n.containerInfo),Qn(n,t),Mi=u,Jn(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{jo(n.containerInfo)}catch(se){Wt(t,t.return,se)}Vf&&(Vf=!1,$g(t));break;case 4:o=Mi,Mi=_c(t.stateNode.containerInfo),Qn(n,t),Jn(t),Mi=o;break;case 12:Qn(n,t),Jn(t);break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zf=He()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kf(t,o)));break;case 22:u=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,te=aa,me=on;if(aa=te||u,on=me||G,Qn(n,t),on=me,aa=te,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||G||aa||on||mr(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){G=s=n;try{if(p=G.stateNode,u)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=G.stateNode;var ye=G.memoizedProps.style,re=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;C.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(se){Wt(G,G.return,se)}}}else if(n.tag===6){if(s===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(se){Wt(G,G.return,se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,kf(t,s))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kf(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var s,o=t.return;o!==null;){if(Wg(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,p=Hf(t);ac(t,p,u);break;case 5:var M=s.stateNode;s.flags&32&&(kn(M,""),s.flags&=-33);var C=Hf(t);ac(t,C,M);break;case 3:case 4:var G=s.stateNode.containerInfo,te=Hf(t);Gf(t,te,G);break;default:throw Error(r(161))}}catch(me){Wt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function $g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;$g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yg(t,n.alternate,n),n=n.sibling}function mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),mr(n);break;case 1:Bi(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&kg(n,n.return,s),mr(n);break;case 27:zo(n.stateNode);case 26:case 5:Bi(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}t=t.sibling}}function Ua(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:Ua(u,p,s),wo(4,p);break;case 1:if(Ua(u,p,s),o=p,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Wt(o,o.return,te)}if(o=p,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)wm(G[u],C)}catch(te){Wt(o,o.return,te)}}s&&M&64&&Vg(p),Co(p,p.return);break;case 27:jg(p);case 26:case 5:Ua(u,p,s),s&&o===null&&M&4&&Xg(p),Co(p,p.return);break;case 12:Ua(u,p,s);break;case 13:Ua(u,p,s),s&&M&4&&Qg(u,p);break;case 22:p.memoizedState===null&&Ua(u,p,s),Co(p,p.return);break;case 30:break;default:Ua(u,p,s)}n=n.sibling}}function Xf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&po(s))}function Wf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t))}function zi(t,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)e_(t,n,s,o),n=n.sibling}function e_(t,n,s,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(t,n,s,o),u&2048&&wo(9,n);break;case 1:zi(t,n,s,o);break;case 3:zi(t,n,s,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t)));break;case 12:if(u&2048){zi(t,n,s,o),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,C=p.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Wt(n,n.return,G)}}else zi(t,n,s,o);break;case 13:zi(t,n,s,o);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?zi(t,n,s,o):Do(t,n):p._visibility&2?zi(t,n,s,o):(p._visibility|=2,as(t,n,s,o,(n.subtreeFlags&10256)!==0)),u&2048&&Xf(M,n);break;case 24:zi(t,n,s,o),u&2048&&Wf(n.alternate,n);break;default:zi(t,n,s,o)}}function as(t,n,s,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var p=t,M=n,C=s,G=o,te=M.flags;switch(M.tag){case 0:case 11:case 15:as(p,M,C,G,u),wo(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?as(p,M,C,G,u):Do(p,M):(me._visibility|=2,as(p,M,C,G,u)),u&&te&2048&&Xf(M.alternate,M);break;case 24:as(p,M,C,G,u),u&&te&2048&&Wf(M.alternate,M);break;default:as(p,M,C,G,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,o=n,u=o.flags;switch(o.tag){case 22:Do(s,o),u&2048&&Xf(o.alternate,o);break;case 24:Do(s,o),u&2048&&Wf(o.alternate,o);break;default:Do(s,o)}n=n.sibling}}var Uo=8192;function rs(t){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)t_(t),t=t.sibling}function t_(t){switch(t.tag){case 26:rs(t),t.flags&Uo&&t.memoizedState!==null&&AS(Mi,t.memoizedState,t.memoizedProps);break;case 5:rs(t);break;case 3:case 4:var n=Mi;Mi=_c(t.stateNode.containerInfo),rs(t),Mi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Uo,Uo=16777216,rs(t),Uo=n):rs(t));break;default:rs(t)}}function n_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Sn=o,a_(o,t)}n_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)i_(t),t=t.sibling}function i_(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,rc(t)):Lo(t);break;default:Lo(t)}}function rc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Sn=o,a_(o,t)}n_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),rc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,rc(n));break;default:rc(n)}t=t.sibling}}function a_(t,n){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Ca(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Sn=o;else e:for(s=t;Sn!==null;){o=Sn;var u=o.sibling,p=o.return;if(Zg(o),o===s){Sn=null;break e}if(u!==null){u.return=p,Sn=u;break e}Sn=p}}}var Vx={getCacheForType:function(t){var n=Un(pn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s}},kx=typeof WeakMap=="function"?WeakMap:Map,It=0,jt=null,yt=null,bt=0,Bt=0,$n=null,La=!1,ss=!1,jf=!1,sa=0,an=0,Na=0,gr=0,qf=0,hi=0,os=0,No=null,qn=null,Yf=!1,Zf=0,sc=1/0,oc=null,Oa=null,An=0,Pa=null,ls=null,cs=0,Kf=0,Qf=null,r_=null,Oo=0,Jf=null;function ei(){if((It&2)!==0&&bt!==0)return bt&-bt;if(H.T!==null){var t=Kr;return t!==0?t:rd()}return Tt()}function s_(){hi===0&&(hi=(bt&536870912)===0||Nt?j():536870912);var t=di.current;return t!==null&&(t.flags|=32),hi}function ti(t,n,s){(t===jt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(us(t,0),Ia(t,bt,hi,!1)),Fe(t,s),((It&2)===0||t!==jt)&&(t===jt&&((It&2)===0&&(gr|=s),an===4&&Ia(t,bt,hi,!1)),Fi(t))}function o_(t,n,s){if((It&6)!==0)throw Error(r(327));var o=!s&&(n&124)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?jx(t,n):td(t,n,!0),p=o;do{if(u===0){ss&&!o&&Ia(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!Xx(s)){u=td(t,n,!1),p=!1;continue}if(u===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var C=t;u=No;var G=C.current.memoizedState.isDehydrated;if(G&&(us(C,M).flags|=256),M=td(C,M,!1),M!==2){if(jf&&!G){C.errorRecoveryDisabledLanes|=p,gr|=p,u=4;break e}p=qn,qn=u,p!==null&&(qn===null?qn=p:qn.push.apply(qn,p))}u=M}if(p=!1,u!==2)continue}}if(u===1){us(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,p=u,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,hi,!La);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zf+300-He(),10<u)){if(Ia(o,n,hi,!La),We(o,0,!0)!==0)break e;o.timeoutHandle=I_(l_.bind(null,o,s,qn,oc,Yf,n,hi,gr,os,La,p,2,-0,0),u);break e}l_(o,s,qn,oc,Yf,n,hi,gr,os,La,p,0,-0,0)}}break}while(!0);Fi(t)}function l_(t,n,s,o,u,p,M,C,G,te,me,ye,re,se){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(Go={stylesheets:null,count:0,unsuspend:TS},t_(n),ye=RS(),ye!==null)){t.cancelPendingCommit=ye(m_.bind(null,t,n,p,s,o,u,M,C,G,me,1,re,se)),Ia(t,p,M,!te);return}m_(t,n,p,s,o,u,M,C,G)}function Xx(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],p=u.getSnapshot;u=u.value;try{if(!Zn(p(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,s,o){n&=~qf,n&=~gr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var p=31-ze(u),M=1<<p;o[p]=-1,u&=~M}s!==0&&xe(t,s,n)}function lc(){return(It&6)===0?(Po(0),!1):!0}function $f(){if(yt!==null){if(Bt===0)var t=yt.return;else t=yt,Ji=ur=null,gf(t),ns=null,To=0,t=yt;for(;t!==null;)Gg(t.alternate,t),t=t.return;yt=null}}function us(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,lS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),$f(),jt=t,yt=s=Zi(t.current,null),bt=n,Bt=0,$n=null,La=!1,ss=Le(t,n),jf=!1,os=hi=qf=gr=Na=an=0,qn=No=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),p=1<<u;n|=t[u],o&=~p}return sa=n,Dl(),s}function c_(t,n){gt=null,H.H=Zl,n===go||n===Fl?(n=Am(),Bt=3):n===Em?(n=Am(),Bt=4):Bt=n===Rg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,yt===null&&(an=1,ec(t,li(n,t.current)))}function u_(){var t=H.H;return H.H=Zl,t===null?Zl:t}function f_(){var t=H.A;return H.A=Vx,t}function ed(){an=4,La||(bt&4194048)!==bt&&di.current!==null||(ss=!0),(Na&134217727)===0&&(gr&134217727)===0||jt===null||Ia(jt,bt,hi,!1)}function td(t,n,s){var o=It;It|=2;var u=u_(),p=f_();(jt!==t||bt!==n)&&(oc=null,us(t,n)),n=!1;var M=an;e:do try{if(Bt!==0&&yt!==null){var C=yt,G=$n;switch(Bt){case 8:$f(),M=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var te=Bt;if(Bt=0,$n=null,fs(t,C,G,te),s&&ss){M=0;break e}break;default:te=Bt,Bt=0,$n=null,fs(t,C,G,te)}}Wx(),M=an;break}catch(me){c_(t,me)}while(!0);return n&&t.shellSuspendCounter++,Ji=ur=null,It=o,H.H=u,H.A=p,yt===null&&(jt=null,bt=0,Dl()),M}function Wx(){for(;yt!==null;)d_(yt)}function jx(t,n){var s=It;It|=2;var o=u_(),u=f_();jt!==t||bt!==n?(oc=null,sc=He()+500,us(t,n)):ss=Le(t,n);e:do try{if(Bt!==0&&yt!==null){n=yt;var p=$n;t:switch(Bt){case 1:Bt=0,$n=null,fs(t,n,p,1);break;case 2:case 9:if(bm(p)){Bt=0,$n=null,h_(n);break}n=function(){Bt!==2&&Bt!==9||jt!==t||(Bt=7),Fi(t)},p.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:bm(p)?(Bt=0,$n=null,h_(n)):(Bt=0,$n=null,fs(t,n,p,7));break;case 5:var M=null;switch(yt.tag){case 26:M=yt.memoizedState;case 5:case 27:var C=yt;if(!M||Y_(M)){Bt=0,$n=null;var G=C.sibling;if(G!==null)yt=G;else{var te=C.return;te!==null?(yt=te,cc(te)):yt=null}break t}}Bt=0,$n=null,fs(t,n,p,5);break;case 6:Bt=0,$n=null,fs(t,n,p,6);break;case 8:$f(),an=6;break e;default:throw Error(r(462))}}qx();break}catch(me){c_(t,me)}while(!0);return Ji=ur=null,H.H=o,H.A=u,It=s,yt!==null?0:(jt=null,bt=0,Dl(),an)}function qx(){for(;yt!==null&&!Qe();)d_(yt)}function d_(t){var n=Fg(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?cc(t):yt=n}function h_(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=Ng(s,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=Ng(s,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:gf(n);default:Gg(s,n),n=yt=pm(n,sa),n=Fg(s,n,sa)}t.memoizedProps=t.pendingProps,n===null?cc(t):yt=n}function fs(t,n,s,o){Ji=ur=null,gf(n),ns=null,To=0;var u=n.return;try{if(Ix(t,u,n,s,bt)){an=1,ec(t,li(s,t.current)),yt=null;return}}catch(p){if(u!==null)throw yt=u,p;an=1,ec(t,li(s,t.current)),yt=null;return}n.flags&32768?(Nt||o===1?t=!0:ss||(bt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),p_(n,t)):cc(n)}function cc(t){var n=t;do{if((n.flags&32768)!==0){p_(n,La);return}t=n.return;var s=zx(n.alternate,n,sa);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);an===0&&(an=5)}function p_(t,n){do{var s=Fx(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);an=6,yt=null}function m_(t,n,s,o,u,p,M,C,G){t.cancelPendingCommit=null;do uc();while(An!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=Xu,Ae(t,s,p,M,C,G),t===jt&&(yt=jt=null,bt=0),ls=n,Pa=t,cs=s,Kf=p,Qf=u,r_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qx(Ot,function(){return x_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=K.p,K.p=2,M=It,It|=4;try{Hx(t,n,s)}finally{It=M,K.p=u,H.T=o}}An=1,g_(),__(),v_()}}function g_(){if(An===1){An=0;var t=Pa,n=ls,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var o=K.p;K.p=2;var u=It;It|=4;try{Jg(n,t);var p=hd,M=am(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(M!==C&&C&&C.ownerDocument&&im(C.ownerDocument.documentElement,C)){if(G!==null&&Fu(C)){var te=G.start,me=G.end;if(me===void 0&&(me=te),"selectionStart"in C)C.selectionStart=te,C.selectionEnd=Math.min(me,C.value.length);else{var ye=C.ownerDocument||document,re=ye&&ye.defaultView||window;if(re.getSelection){var se=re.getSelection(),st=C.textContent.length,it=Math.min(G.start,st),Gt=G.end===void 0?it:Math.min(G.end,st);!se.extend&&it>Gt&&(M=Gt,Gt=it,it=M);var Z=nm(C,it),W=nm(C,Gt);if(Z&&W&&(se.rangeCount!==1||se.anchorNode!==Z.node||se.anchorOffset!==Z.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var $=ye.createRange();$.setStart(Z.node,Z.offset),se.removeAllRanges(),it>Gt?(se.addRange($),se.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),se.addRange($))}}}}for(ye=[],se=C;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ye.length;C++){var ge=ye[C];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Mc=!!dd,hd=dd=null}finally{It=u,K.p=o,H.T=s}}t.current=n,An=2}}function __(){if(An===2){An=0;var t=Pa,n=ls,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var o=K.p;K.p=2;var u=It;It|=4;try{Yg(t,n.alternate,n)}finally{It=u,K.p=o,H.T=s}}An=3}}function v_(){if(An===4||An===3){An=0,St();var t=Pa,n=ls,s=cs,o=r_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,ls=Pa=null,y_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Oa=null),Pt(s),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=K.p,K.p=2,H.T=null;try{for(var p=t.onRecoverableError,M=0;M<o.length;M++){var C=o[M];p(C.value,{componentStack:C.stack})}}finally{H.T=n,K.p=u}}(cs&3)!==0&&uc(),Fi(t),u=t.pendingLanes,(s&4194090)!==0&&(u&42)!==0?t===Jf?Oo++:(Oo=0,Jf=t):Oo=0,Po(0)}}function y_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,po(n)))}function uc(t){return g_(),__(),v_(),x_()}function x_(){if(An!==5)return!1;var t=Pa,n=Kf;Kf=0;var s=Pt(cs),o=H.T,u=K.p;try{K.p=32>s?32:s,H.T=null,s=Qf,Qf=null;var p=Pa,M=cs;if(An=0,ls=Pa=null,cs=0,(It&6)!==0)throw Error(r(331));var C=It;if(It|=4,i_(p.current),e_(p,p.current,M,s),It=C,Po(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{K.p=u,H.T=o,y_(t,n)}}function S_(t,n,s){n=li(s,n),n=Df(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(Fe(t,2),Fi(t))}function Wt(t,n,s){if(t.tag===3)S_(t,t,s);else for(;n!==null;){if(n.tag===3){S_(n,t,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=li(s,t),s=Tg(2),o=Ta(n,s,2),o!==null&&(Ag(s,o,n,t),Fe(o,2),Fi(o));break}}n=n.return}}function nd(t,n,s){var o=t.pingCache;if(o===null){o=t.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(s)||(jf=!0,u.add(s),t=Yx.bind(null,t,n,s),n.then(t,t))}function Yx(t,n,s){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,jt===t&&(bt&s)===s&&(an===4||an===3&&(bt&62914560)===bt&&300>He()-Zf?(It&2)===0&&us(t,0):qf|=s,os===bt&&(os=0)),Fi(t)}function M_(t,n){n===0&&(n=we()),t=jr(t,n),t!==null&&(Fe(t,n),Fi(t))}function Zx(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),M_(t,s)}function Kx(t,n){var s=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),M_(t,s)}function Qx(t,n){return X(t,n)}var fc=null,ds=null,id=!1,dc=!1,ad=!1,_r=0;function Fi(t){t!==ds&&t.next===null&&(ds===null?fc=ds=t:ds=ds.next=t),dc=!0,id||(id=!0,$x())}function Po(t,n){if(!ad&&dc){ad=!0;do for(var s=!1,o=fc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var p=0;else{var M=o.suspendedLanes,C=o.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=u&~(M&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,A_(o,p))}else p=bt,p=We(o,o===jt?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Le(o,p)||(s=!0,A_(o,p));o=o.next}while(s);ad=!1}}function Jx(){E_()}function E_(){dc=id=!1;var t=0;_r!==0&&(oS()&&(t=_r),_r=0);for(var n=He(),s=null,o=fc;o!==null;){var u=o.next,p=b_(o,n);p===0?(o.next=null,s===null?fc=u:s.next=u,u===null&&(ds=s)):(s=o,(t!==0||(p&3)!==0)&&(dc=!0)),o=u}Po(t)}function b_(t,n){for(var s=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-ze(p),C=1<<M,G=u[M];G===-1?((C&s)===0||(C&o)!==0)&&(u[M]=ct(C,n)):G<=n&&(t.expiredLanes|=C),p&=~C}if(n=jt,s=bt,s=We(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Le(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(o!==null&&Rt(o),Pt(s)){case 2:case 8:s=nt;break;case 32:s=Ot;break;case 268435456:s=P;break;default:s=Ot}return o=T_.bind(null,t),s=X(s,o),t.callbackPriority=n,t.callbackNode=s,n}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function T_(t,n){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(uc()&&t.callbackNode!==s)return null;var o=bt;return o=We(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(o_(t,o,n),b_(t,He()),t.callbackNode!=null&&t.callbackNode===s?T_.bind(null,t):null)}function A_(t,n){if(uc())return null;o_(t,n,!0)}function $x(){cS(function(){(It&6)!==0?X(be,Jx):E_()})}function rd(){return _r===0&&(_r=j()),_r}function R_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(""+t)}function w_(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function eS(t,n,s,o,u){if(n==="submit"&&s&&s.stateNode===u){var p=R_((u[en]||null).action),M=o.submitter;M&&(n=(n=M[en]||null)?R_(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var C=new Rl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_r!==0){var G=M?w_(u,M):new FormData(u);Tf(s,{pending:!0,data:G,method:u.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=M?w_(u,M):new FormData(u),Tf(s,{pending:!0,data:G,method:u.method,action:p},p,G))},currentTarget:u}]})}}for(var sd=0;sd<ku.length;sd++){var od=ku[sd],tS=od.toLowerCase(),nS=od[0].toUpperCase()+od.slice(1);Si(tS,"on"+nS)}Si(om,"onAnimationEnd"),Si(lm,"onAnimationIteration"),Si(cm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(yx,"onTransitionRun"),Si(xx,"onTransitionStart"),Si(Sx,"onTransitionCancel"),Si(um,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function C_(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],u=o.event;o=o.listeners;e:{var p=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],G=C.instance,te=C.currentTarget;if(C=C.listener,G!==p&&u.isPropagationStopped())break e;p=C,u.currentTarget=te;try{p(u)}catch(me){$l(me)}u.currentTarget=null,p=G}else for(M=0;M<o.length;M++){if(C=o[M],G=C.instance,te=C.currentTarget,C=C.listener,G!==p&&u.isPropagationStopped())break e;p=C,u.currentTarget=te;try{p(u)}catch(me){$l(me)}u.currentTarget=null,p=G}}}}function xt(t,n){var s=n[Ir];s===void 0&&(s=n[Ir]=new Set);var o=t+"__bubble";s.has(o)||(D_(n,t,2,!1),s.add(o))}function ld(t,n,s){var o=0;n&&(o|=4),D_(s,t,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function cd(t){if(!t[hc]){t[hc]=!0,Sl.forEach(function(s){s!=="selectionchange"&&(iS.has(s)||ld(s,!1,t),ld(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[hc]||(n[hc]=!0,ld("selectionchange",!1,n))}}function D_(t,n,s,o){switch(e0(n)){case 2:var u=DS;break;case 8:u=US;break;default:u=Ed}s=u.bind(null,n,s,t),u=void 0,!Du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,s,{capture:!0,passive:u}):t.addEventListener(n,s,!0):u!==void 0?t.addEventListener(n,s,{passive:u}):t.addEventListener(n,s,!1)}function ud(t,n,s,o,u){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=qi(C),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=p=M;continue e}C=C.parentNode}}o=o.return}Bp(function(){var te=p,me=wu(s),ye=[];e:{var re=fm.get(t);if(re!==void 0){var se=Rl,st=t;switch(t){case"keypress":if(Tl(s)===0)break e;case"keydown":case"keyup":se=Qy;break;case"focusin":st="focus",se=Ou;break;case"focusout":st="blur",se=Ou;break;case"beforeblur":case"afterblur":se=Ou;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=ex;break;case om:case lm:case cm:se=Vy;break;case um:se=nx;break;case"scroll":case"scrollend":se=By;break;case"wheel":se=ax;break;case"copy":case"cut":case"paste":se=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Vp;break;case"toggle":case"beforetoggle":se=sx}var it=(n&4)!==0,Gt=!it&&(t==="scroll"||t==="scrollend"),Z=it?re!==null?re+"Capture":null:re;it=[];for(var W=te,$;W!==null;){var ge=W;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||Z===null||(ge=eo(W,Z),ge!=null&&it.push(Bo(W,ge,$))),Gt)break;W=W.return}0<it.length&&(re=new se(re,st,null,s,me),ye.push({event:re,listeners:it}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",re&&s!==Ru&&(st=s.relatedTarget||s.fromElement)&&(qi(st)||st[Ni]))break e;if((se||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,se?(st=s.relatedTarget||s.toElement,se=te,st=st?qi(st):null,st!==null&&(Gt=c(st),it=st.tag,st!==Gt||it!==5&&it!==27&&it!==6)&&(st=null)):(se=null,st=te),se!==st)){if(it=Hp,ge="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(it=Vp,ge="onPointerLeave",Z="onPointerEnter",W="pointer"),Gt=se==null?re:tr(se),$=st==null?re:tr(st),re=new it(ge,W+"leave",se,s,me),re.target=Gt,re.relatedTarget=$,ge=null,qi(me)===te&&(it=new it(Z,W+"enter",st,s,me),it.target=$,it.relatedTarget=Gt,ge=it),Gt=ge,se&&st)t:{for(it=se,Z=st,W=0,$=it;$;$=hs($))W++;for($=0,ge=Z;ge;ge=hs(ge))$++;for(;0<W-$;)it=hs(it),W--;for(;0<$-W;)Z=hs(Z),$--;for(;W--;){if(it===Z||Z!==null&&it===Z.alternate)break t;it=hs(it),Z=hs(Z)}it=null}else it=null;se!==null&&U_(ye,re,se,it,!1),st!==null&&Gt!==null&&U_(ye,Gt,st,it,!0)}}e:{if(re=te?tr(te):window,se=re.nodeName&&re.nodeName.toLowerCase(),se==="select"||se==="input"&&re.type==="file")var ke=Kp;else if(Yp(re))if(Qp)ke=gx;else{ke=px;var _t=hx}else se=re.nodeName,!se||se.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&Au(te.elementType)&&(ke=Kp):ke=mx;if(ke&&(ke=ke(t,te))){Zp(ye,ke,s,me);break e}_t&&_t(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Dn(re,"number",re.value)}switch(_t=te?tr(te):window,t){case"focusin":(Yp(_t)||_t.contentEditable==="true")&&(kr=_t,Hu=te,lo=null);break;case"focusout":lo=Hu=kr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,rm(ye,s,me);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":rm(ye,s,me)}var Ke;if(Iu)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Vr?jp(t,s)&&(rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(rt="onCompositionStart");rt&&(kp&&s.locale!=="ko"&&(Vr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Vr&&(Ke=zp()):(Sa=me,Uu="value"in Sa?Sa.value:Sa.textContent,Vr=!0)),_t=pc(te,rt),0<_t.length&&(rt=new Gp(rt,t,null,s,me),ye.push({event:rt,listeners:_t}),Ke?rt.data=Ke:(Ke=qp(s),Ke!==null&&(rt.data=Ke)))),(Ke=lx?cx(t,s):ux(t,s))&&(rt=pc(te,"onBeforeInput"),0<rt.length&&(_t=new Gp("onBeforeInput","beforeinput",null,s,me),ye.push({event:_t,listeners:rt}),_t.data=Ke)),eS(ye,t,te,s,me)}C_(ye,n)})}function Bo(t,n,s){return{instance:t,listener:n,currentTarget:s}}function pc(t,n){for(var s=n+"Capture",o=[];t!==null;){var u=t,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=eo(t,s),u!=null&&o.unshift(Bo(t,u,p)),u=eo(t,n),u!=null&&o.push(Bo(t,u,p))),t.tag===3)return o;t=t.return}return[]}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function U_(t,n,s,o,u){for(var p=n._reactName,M=[];s!==null&&s!==o;){var C=s,G=C.alternate,te=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||te===null||(G=te,u?(te=eo(s,p),te!=null&&M.unshift(Bo(s,te,G))):u||(te=eo(s,p),te!=null&&M.push(Bo(s,te,G)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function L_(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(rS,"")}function N_(t,n){return n=L_(n),L_(t)===n}function mc(){}function Ht(t,n,s,o,u,p){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||kn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&kn(t,""+o);break;case"className":Ge(t,"class",o);break;case"tabIndex":Ge(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(t,s,o);break;case"style":Pp(t,o,p);break;case"data":if(n!=="object"){Ge(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=El(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=El(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=mc);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=El(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ie(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ie(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ie(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ie(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Py.get(s)||s,Oe(t,s,o))}}function fd(t,n,s,o,u,p){switch(s){case"style":Pp(t,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?kn(t,o):(typeof o=="number"||typeof o=="bigint")&&kn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ml.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),p=t[en]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,u),typeof o=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,o,u);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Oe(t,s,o)}}}function Rn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,p,M,s,null)}}u&&Ht(t,n,"srcSet",s.srcSet,s,null),o&&Ht(t,n,"src",s.src,s,null);return;case"input":xt("invalid",t);var C=p=M=u=null,G=null,te=null;for(o in s)if(s.hasOwnProperty(o)){var me=s[o];if(me!=null)switch(o){case"name":u=me;break;case"type":M=me;break;case"checked":G=me;break;case"defaultChecked":te=me;break;case"value":p=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Ht(t,n,o,me,s,null)}}Bn(t,p,C,G,te,M,u,!1),vt(t);return;case"select":xt("invalid",t),o=M=p=null;for(u in s)if(s.hasOwnProperty(u)&&(C=s[u],C!=null))switch(u){case"value":p=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:Ht(t,n,u,C,s,null)}n=p,s=M,t.multiple=!!o,n!=null?tn(t,!!o,n,!1):s!=null&&tn(t,!!o,s,!0);return;case"textarea":xt("invalid",t),p=u=o=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ht(t,n,M,C,s,null)}Fr(t,o,u,p),vt(t);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(o=s[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,G,o,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)xt(Io[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(o=s[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(t,n,te,o,s,null)}return;default:if(Au(n)){for(me in s)s.hasOwnProperty(me)&&(o=s[me],o!==void 0&&fd(t,n,me,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&Ht(t,n,C,o,s,null))}function sS(t,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,M=null,C=null,G=null,te=null,me=null;for(se in s){var ye=s[se];if(s.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":G=ye;default:o.hasOwnProperty(se)||Ht(t,n,se,null,o,ye)}}for(var re in o){var se=o[re];if(ye=s[re],o.hasOwnProperty(re)&&(se!=null||ye!=null))switch(re){case"type":p=se;break;case"name":u=se;break;case"checked":te=se;break;case"defaultChecked":me=se;break;case"value":M=se;break;case"defaultValue":C=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==ye&&Ht(t,n,re,se,o,ye)}}Xt(t,M,C,G,te,me,p,u);return;case"select":se=M=C=re=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":se=G;default:o.hasOwnProperty(p)||Ht(t,n,p,null,o,G)}for(u in o)if(p=o[u],G=s[u],o.hasOwnProperty(u)&&(p!=null||G!=null))switch(u){case"value":re=p;break;case"defaultValue":C=p;break;case"multiple":M=p;default:p!==G&&Ht(t,n,u,p,o,G)}n=C,s=M,o=se,re!=null?tn(t,!!s,re,!1):!!o!=!!s&&(n!=null?tn(t,!!s,n,!0):tn(t,!!s,s?[]:"",!1));return;case"textarea":se=re=null;for(C in s)if(u=s[C],s.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ht(t,n,C,null,o,u)}for(M in o)if(u=o[M],p=s[M],o.hasOwnProperty(M)&&(u!=null||p!=null))switch(M){case"value":re=u;break;case"defaultValue":se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==p&&Ht(t,n,M,u,o,p)}bn(t,re,se);return;case"option":for(var st in s)if(re=s[st],s.hasOwnProperty(st)&&re!=null&&!o.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:Ht(t,n,st,null,o,re)}for(G in o)if(re=o[G],se=s[G],o.hasOwnProperty(G)&&re!==se&&(re!=null||se!=null))switch(G){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ht(t,n,G,re,o,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)re=s[it],s.hasOwnProperty(it)&&re!=null&&!o.hasOwnProperty(it)&&Ht(t,n,it,null,o,re);for(te in o)if(re=o[te],se=s[te],o.hasOwnProperty(te)&&re!==se&&(re!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Ht(t,n,te,re,o,se)}return;default:if(Au(n)){for(var Gt in s)re=s[Gt],s.hasOwnProperty(Gt)&&re!==void 0&&!o.hasOwnProperty(Gt)&&fd(t,n,Gt,void 0,o,re);for(me in o)re=o[me],se=s[me],!o.hasOwnProperty(me)||re===se||re===void 0&&se===void 0||fd(t,n,me,re,o,se);return}}for(var Z in s)re=s[Z],s.hasOwnProperty(Z)&&re!=null&&!o.hasOwnProperty(Z)&&Ht(t,n,Z,null,o,re);for(ye in o)re=o[ye],se=s[ye],!o.hasOwnProperty(ye)||re===se||re==null&&se==null||Ht(t,n,ye,re,o,se)}var dd=null,hd=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function O_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var md=null;function oS(){var t=window.event;return t&&t.type==="popstate"?t===md?!1:(md=t,!0):(md=null,!1)}var I_=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,B_=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof B_<"u"?function(t){return B_.resolve(null).then(t).catch(uS)}:I_;function uS(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function z_(t,n){var s=n,o=0,u=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<o&&8>o){s=o;var M=t.ownerDocument;if(s&1&&zo(M.documentElement),s&2&&zo(M.body),s&4)for(s=M.head,zo(s),M=s.firstChild;M;){var C=M.nextSibling,G=M.nodeName;M[Oi]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=C}}if(u===0){t.removeChild(p),jo(n);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:o=s.charCodeAt(0)-48;else o=0;s=p}while(s);jo(n)}function gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":gd(s),zr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function fS(t,n,s,o){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Oi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function dS(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function hS(t,n){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")n();else{var o=function(){n(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var vd=null;function F_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}function H_(t,n,s){switch(n=gc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function zo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var pi=new Map,G_=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=K.d;K.d={f:pS,r:mS,D:gS,C:_S,L:vS,m:yS,X:SS,S:xS,M:MS};function pS(){var t=oa.f(),n=lc();return t||n}function mS(t){var n=ya(t);n!==null&&n.tag===5&&n.type==="form"?og(n):oa.r(t)}var ps=typeof document>"u"?null:document;function V_(t,n,s){var o=ps;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),G_.has(u)||(G_.add(u),t={rel:t,crossOrigin:s,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),ln(n),o.head.appendChild(n)))}}function gS(t){oa.D(t),V_("dns-prefetch",t,null)}function _S(t,n){oa.C(t,n),V_("preconnect",t,n)}function vS(t,n,s){oa.L(t,n,s);var o=ps;if(o&&t&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+yn(s.imageSizes)+'"]')):u+='[href="'+yn(t)+'"]';var p=u;switch(n){case"style":p=ms(t);break;case"script":p=gs(t)}pi.has(p)||(t=_({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),pi.set(p,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(p))||n==="script"&&o.querySelector(Ho(p))||(n=o.createElement("link"),Rn(n,"link",t),ln(n),o.head.appendChild(n)))}}function yS(t,n){oa.m(t,n);var s=ps;if(s&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(t)+'"]',p=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=gs(t)}if(!pi.has(p)&&(t=_({rel:"modulepreload",href:t},n),pi.set(p,t),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ho(p)))return}o=s.createElement("link"),Rn(o,"link",t),ln(o),s.head.appendChild(o)}}}function xS(t,n,s){oa.S(t,n,s);var o=ps;if(o&&t){var u=xa(o).hoistableStyles,p=ms(t);n=n||"default";var M=u.get(p);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Fo(p)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},s),(s=pi.get(p))&&yd(t,s);var G=M=o.createElement("link");ln(G),Rn(G,"link",t),G._p=new Promise(function(te,me){G.onload=te,G.onerror=me}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,vc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(p,M)}}}function SS(t,n){oa.X(t,n);var s=ps;if(s&&t){var o=xa(s).hoistableScripts,u=gs(t),p=o.get(u);p||(p=s.querySelector(Ho(u)),p||(t=_({src:t,async:!0},n),(n=pi.get(u))&&xd(t,n),p=s.createElement("script"),ln(p),Rn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function MS(t,n){oa.M(t,n);var s=ps;if(s&&t){var o=xa(s).hoistableScripts,u=gs(t),p=o.get(u);p||(p=s.querySelector(Ho(u)),p||(t=_({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&xd(t,n),p=s.createElement("script"),ln(p),Rn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function k_(t,n,s,o){var u=(u=pe.current)?_c(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=ms(s.href),s=xa(u).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ms(s.href);var p=xa(u).hoistableStyles,M=p.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=u.querySelector(Fo(t)))&&!p._p&&(M.instance=p,M.state.loading=5),pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(t,s),p||ES(u,t,s,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(s),s=xa(u).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ms(t){return'href="'+yn(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function X_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function ES(t,n,s,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",s),ln(n),t.head.appendChild(n))}function gs(t){return'[src="'+yn(t)+'"]'}function Ho(t){return"script[async]"+t}function W_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+yn(s.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ln(o),Rn(o,"style",u),vc(o,s.precedence,t),n.instance=o;case"stylesheet":u=ms(s.href);var p=t.querySelector(Fo(u));if(p)return n.state.loading|=4,n.instance=p,ln(p),p;o=X_(s),(u=pi.get(u))&&yd(o,u),p=(t.ownerDocument||t).createElement("link"),ln(p);var M=p;return M._p=new Promise(function(C,G){M.onload=C,M.onerror=G}),Rn(p,"link",o),n.state.loading|=4,vc(p,s.precedence,t),n.instance=p;case"script":return p=gs(s.src),(u=t.querySelector(Ho(p)))?(n.instance=u,ln(u),u):(o=s,(u=pi.get(p))&&(o=_({},s),xd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ln(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,vc(o,s.precedence,t));return n.instance}function vc(t,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,p=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)p=C;else if(p!==u)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yc=null;function j_(t,n,s){if(yc===null){var o=new Map,u=yc=new Map;u.set(s,o)}else u=yc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var p=s[u];if(!(p[Oi]||p[hn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var C=o.get(M);C?C.push(p):o.set(M,[p])}}return o}function q_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function bS(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Go=null;function TS(){}function AS(t,n,s){if(Go===null)throw Error(r(475));var o=Go;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ms(s.href),p=t.querySelector(Fo(u));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=xc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=p,ln(p);return}p=t.ownerDocument||t,s=X_(s),(u=pi.get(u))&&yd(s,u),p=p.createElement("link"),ln(p);var M=p;M._p=new Promise(function(C,G){M.onload=C,M.onerror=G}),Rn(p,"link",s),n.instance=p}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=xc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function RS(){if(Go===null)throw Error(r(475));var t=Go;return t.stylesheets&&t.count===0&&Sd(t,t.stylesheets),0<t.count?function(n){var s=setTimeout(function(){if(t.stylesheets&&Sd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(s)}}:null}function xc(){if(this.count--,this.count===0){if(this.stylesheets)Sd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function Sd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,n.forEach(wS,t),Sc=null,xc.call(t))}function wS(t,n){if(!(n.state.loading&4)){var s=Sc.get(t);if(s)var o=s.get(null);else{s=new Map,Sc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var M=u[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),o=M)}o&&s.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),p=s.get(M)||o,p===o&&s.set(null,u),s.set(M,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),p?p.parentNode.insertBefore(u,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:T,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function CS(t,n,s,o,u,p,M,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Z_(t,n,s,o,u,p,M,C,G,te,me,ye){return t=new CS(t,n,s,M,C,G,te,ye),n=1,p===!0&&(n|=24),p=Kn(3,null,null,n),t.current=p,p.stateNode=t,n=tf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:o,isDehydrated:s,cache:n},sf(p),t}function K_(t){return t?(t=qr,t):qr}function Q_(t,n,s,o,u,p){u=K_(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(n),o.payload={element:s},p=p===void 0?null:p,p!==null&&(o.callback=p),s=Ta(t,o,n),s!==null&&(ti(s,t,n),vo(s,t,n))}function J_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Md(t,n){J_(t,n),(t=t.alternate)&&J_(t,n)}function $_(t){if(t.tag===13){var n=jr(t,67108864);n!==null&&ti(n,t,67108864),Md(t,67108864)}}var Mc=!0;function DS(t,n,s,o){var u=H.T;H.T=null;var p=K.p;try{K.p=2,Ed(t,n,s,o)}finally{K.p=p,H.T=u}}function US(t,n,s,o){var u=H.T;H.T=null;var p=K.p;try{K.p=8,Ed(t,n,s,o)}finally{K.p=p,H.T=u}}function Ed(t,n,s,o){if(Mc){var u=bd(o);if(u===null)ud(t,n,o,Ec,s),t0(t,o);else if(NS(u,t,n,s,o))o.stopPropagation();else if(t0(t,o),n&4&&-1<LS.indexOf(t)){for(;u!==null;){var p=ya(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Je(p.pendingLanes);if(M!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var G=1<<31-ze(M);C.entanglements[1]|=G,M&=~G}Fi(p),(It&6)===0&&(sc=He()+500,Po(0))}}break;case 13:C=jr(p,2),C!==null&&ti(C,p,2),lc(),Md(p,2)}if(p=bd(o),p===null&&ud(t,n,o,Ec,s),p===u)break;u=p}u!==null&&o.stopPropagation()}else ud(t,n,o,null,s)}}function bd(t){return t=wu(t),Td(t)}var Ec=null;function Td(t){if(Ec=null,t=qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=f(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ec=t,null}function e0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case be:return 2;case nt:return 8;case Ot:case Lt:return 32;case P:return 268435456;default:return 32}default:return 32}}var Ad=!1,za=null,Fa=null,Ha=null,ko=new Map,Xo=new Map,Ga=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(t,n,s,o,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:p,targetContainers:[u]},n!==null&&(n=ya(n),n!==null&&$_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function NS(t,n,s,o,u){switch(n){case"focusin":return za=Wo(za,t,n,s,o,u),!0;case"dragenter":return Fa=Wo(Fa,t,n,s,o,u),!0;case"mouseover":return Ha=Wo(Ha,t,n,s,o,u),!0;case"pointerover":var p=u.pointerId;return ko.set(p,Wo(ko.get(p)||null,t,n,s,o,u)),!0;case"gotpointercapture":return p=u.pointerId,Xo.set(p,Wo(Xo.get(p)||null,t,n,s,o,u)),!0}return!1}function n0(t){var n=qi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=f(s),n!==null){t.blockedOn=n,yi(t.priority,function(){if(s.tag===13){var o=ei();o=ot(o);var u=jr(s,o);u!==null&&ti(u,s,o),Md(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=bd(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);Ru=o,s.target.dispatchEvent(o),Ru=null}else return n=ya(s),n!==null&&$_(n),t.blockedOn=s,!1;n.shift()}return!0}function i0(t,n,s){bc(t)&&s.delete(n)}function OS(){Ad=!1,za!==null&&bc(za)&&(za=null),Fa!==null&&bc(Fa)&&(Fa=null),Ha!==null&&bc(Ha)&&(Ha=null),ko.forEach(i0),Xo.forEach(i0)}function Tc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ad||(Ad=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,OS)))}var Ac=null;function a0(t){Ac!==t&&(Ac=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ac===t&&(Ac=null);for(var n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Td(o||s)===null)continue;break}var p=ya(s);p!==null&&(t.splice(n,3),n-=3,Tf(p,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function jo(t){function n(G){return Tc(G,t)}za!==null&&Tc(za,t),Fa!==null&&Tc(Fa,t),Ha!==null&&Tc(Ha,t),ko.forEach(n),Xo.forEach(n);for(var s=0;s<Ga.length;s++){var o=Ga[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ga.length&&(s=Ga[0],s.blockedOn===null);)n0(s),s.blockedOn===null&&Ga.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],p=s[o+1],M=u[en]||null;if(typeof p=="function")M||a0(s);else if(M){var C=null;if(p&&p.hasAttribute("formAction")){if(u=p,M=p[en]||null)C=M.formAction;else if(Td(u)!==null)continue}else C=M.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),a0(s)}}}function Rd(t){this._internalRoot=t}Rc.prototype.render=Rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,o=ei();Q_(s,o,t,n,null,null)},Rc.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q_(t.current,2,null,t,null,null),lc(),n[Ni]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Ga.length&&n!==0&&n<Ga[s].priority;s++);Ga.splice(s,0,t),s===0&&n0(t)}};var r0=e.version;if(r0!=="19.1.1")throw Error(r(527,r0,"19.1.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{he=wc.inject(PS),ve=wc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var s=!1,o="",u=Sg,p=Mg,M=Eg,C=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=Z_(t,1,!1,null,null,s,o,u,p,M,C,null),t[Ni]=n.current,cd(t),new Rd(n)},Yo.hydrateRoot=function(t,n,s){if(!l(t))throw Error(r(299));var o=!1,u="",p=Sg,M=Mg,C=Eg,G=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),n=Z_(t,1,!0,n,s??null,o,u,p,M,C,G,te),n.context=K_(null),s=n.current,o=ei(),o=ot(o),u=ba(o),u.callback=null,Ta(s,u,o),s=o,n.current.lanes=s,Fe(n,s),Fi(n),t[Ni]=n.current,cd(t),new Rc(n)},Yo.version="19.1.1",Yo}var m0;function jS(){if(m0)return Dd.exports;m0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Dd.exports=WS(),Dd.exports}var qS=jS();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g0="popstate";function YS(a={}){function e(r,l){let{pathname:c,search:f,hash:d}=r.location;return vh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:rl(l)}return KS(e,i,null,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function vi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZS(){return Math.random().toString(36).substring(2,10)}function _0(a,e){return{usr:a.state,key:a.key,idx:e}}function vh(a,e,i=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Xs(e):e,state:i,key:e&&e.key||r||ZS()}}function rl({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Xs(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function KS(a,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,h=_();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function _(){return(f.state||{idx:null}).idx}function v(){d="POP";let x=_(),g=x==null?null:x-h;h=x,m&&m({action:d,location:b.location,delta:g})}function y(x,g){d="PUSH";let A=vh(b.location,x,g);h=_()+1;let T=_0(A,h),R=b.createHref(A);try{f.pushState(T,"",R)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(R)}c&&m&&m({action:d,location:b.location,delta:1})}function S(x,g){d="REPLACE";let A=vh(b.location,x,g);h=_();let T=_0(A,h),R=b.createHref(A);f.replaceState(T,"",R),c&&m&&m({action:d,location:b.location,delta:0})}function E(x){return QS(x)}let b={get action(){return d},get location(){return a(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(g0,v),m=x,()=>{l.removeEventListener(g0,v),m=null}},createHref(x){return e(l,x)},createURL:E,encodeLocation(x){let g=E(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:S,go(x){return f.go(x)}};return b}function QS(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:rl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Uv(a,e,i="/"){return JS(a,e,i,!1)}function JS(a,e,i,r){let l=typeof e=="string"?Xs(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=Lv(a);$S(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let h=uM(c);d=lM(f[m],h,r)}return d}function Lv(a,e=[],i=[],r=""){let l=(c,f,d)=>{let m={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Jt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let h=ma([r,m.relativePath]),_=i.concat(m);c.children&&c.children.length>0&&(Jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Lv(c.children,e,_,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:sM(h,c.index),routesMeta:_})};return a.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of Nv(c.path))l(c,f,d)}),e}function Nv(a){let e=a.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Nv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function $S(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:oM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var eM=/^:[\w-]+$/,tM=3,nM=2,iM=1,aM=10,rM=-2,v0=a=>a==="*";function sM(a,e){let i=a.split("/"),r=i.length;return i.some(v0)&&(r+=rM),e&&(r+=nM),i.filter(l=>!v0(l)).reduce((l,c)=>l+(eM.test(c)?tM:c===""?iM:aM),r)}function oM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,l)=>r===e[l])?a[a.length-1]-e[e.length-1]:0}function lM(a,e,i=!1){let{routesMeta:r}=a,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],h=d===r.length-1,_=c==="/"?e:e.slice(c.length)||"/",v=uu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},_),y=m.route;if(!v&&h&&i&&!r[r.length-1].route.index&&(v=uu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ma([c,v.pathname]),pathnameBase:pM(ma([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=ma([c,v.pathnameBase]))}return f}function uu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,r]=cM(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((h,{paramName:_,isOptional:v},y)=>{if(_==="*"){let E=d[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[y];return v&&!S?h[_]=void 0:h[_]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:a}}function cM(a,e=!1,i=!0){vi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function uM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function _a(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=a.charAt(i);return r&&r!=="/"?null:a.slice(i)||"/"}function fM(a,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof a=="string"?Xs(a):a;return{pathname:i?i.startsWith("/")?i:dM(i,e):e,search:mM(r),hash:gM(l)}}function dM(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Od(a,e,i,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hM(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function hp(a){let e=hM(a);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function pp(a,e,i,r=!1){let l;typeof a=="string"?l=Xs(a):(l={...a},Jt(!l.pathname||!l.pathname.includes("?"),Od("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Od("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Od("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?e[v]:"/"}let m=fM(l,d),h=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||_)&&(m.pathname+="/"),m}var ma=a=>a.join("/").replace(/\/\/+/g,"/"),pM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),mM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,gM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function _M(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Ov=["POST","PUT","PATCH","DELETE"];new Set(Ov);var vM=["GET",...Ov];new Set(vM);var Ws=V.createContext(null);Ws.displayName="DataRouter";var gu=V.createContext(null);gu.displayName="DataRouterState";V.createContext(!1);var Pv=V.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var yM=V.createContext(new Map);yM.displayName="Fetchers";var xM=V.createContext(null);xM.displayName="Await";var Di=V.createContext(null);Di.displayName="Navigation";var pl=V.createContext(null);pl.displayName="Location";var Ui=V.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var mp=V.createContext(null);mp.displayName="RouteError";function SM(a,{relative:e}={}){Jt(js(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=V.useContext(Di),{hash:l,pathname:c,search:f}=ml(a,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ma([i,c])),r.createHref({pathname:d,search:f,hash:l})}function js(){return V.useContext(pl)!=null}function ji(){return Jt(js(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(pl).location}var Iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bv(a){V.useContext(Di).static||V.useLayoutEffect(a)}function _u(){let{isDataRoute:a}=V.useContext(Ui);return a?IM():MM()}function MM(){Jt(js(),"useNavigate() may be used only in the context of a <Router> component.");let a=V.useContext(Ws),{basename:e,navigator:i}=V.useContext(Di),{matches:r}=V.useContext(Ui),{pathname:l}=ji(),c=JSON.stringify(hp(r)),f=V.useRef(!1);return Bv(()=>{f.current=!0}),V.useCallback((m,h={})=>{if(vi(f.current,Iv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=pp(m,JSON.parse(c),l,h.relative==="path");a==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ma([e,_.pathname])),(h.replace?i.replace:i.push)(_,h.state,h)},[e,i,c,l,a])}var EM=V.createContext(null);function bM(a){let e=V.useContext(Ui).outlet;return e&&V.createElement(EM.Provider,{value:a},e)}function ml(a,{relative:e}={}){let{matches:i}=V.useContext(Ui),{pathname:r}=ji(),l=JSON.stringify(hp(i));return V.useMemo(()=>pp(a,JSON.parse(l),r,e==="path"),[a,l,r,e])}function TM(a,e){return zv(a,e)}function zv(a,e,i,r){Jt(js(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=V.useContext(Di),{matches:c}=V.useContext(Ui),f=c[c.length-1],d=f?f.params:{},m=f?f.pathname:"/",h=f?f.pathnameBase:"/",_=f&&f.route;{let g=_&&_.path||"";Fv(m,!_||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let v=ji(),y;if(e){let g=typeof e=="string"?Xs(e):e;Jt(h==="/"||g.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${g.pathname}" was given in the \`location\` prop.`),y=g}else y=v;let S=y.pathname||"/",E=S;if(h!=="/"){let g=h.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(g.length).join("/")}let b=Uv(a,{pathname:E});vi(_||b!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),vi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=DM(b&&b.map(g=>Object.assign({},g,{params:Object.assign({},d,g.params),pathname:ma([h,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?h:ma([h,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),c,i,r);return e&&x?V.createElement(pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function AM(){let a=PM(),e=_M(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:c},"ErrorBoundary")," or"," ",V.createElement("code",{style:c},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),i?V.createElement("pre",{style:l},i):null,f)}var RM=V.createElement(AM,null),wM=class extends V.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){console.error("React Router caught the following error during render",a,e)}render(){return this.state.error!==void 0?V.createElement(Ui.Provider,{value:this.props.routeContext},V.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CM({routeContext:a,match:e,children:i}){let r=V.useContext(Ws);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(Ui.Provider,{value:a},i)}function DM(a,e=[],i=null,r=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let l=a,c=i?.errors;if(c!=null){let m=l.findIndex(h=>h.route.id&&c?.[h.route.id]!==void 0);Jt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:_,errors:v}=i,y=h.route.loader&&!_.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,h,_)=>{let v,y=!1,S=null,E=null;i&&(v=c&&h.route.id?c[h.route.id]:void 0,S=h.route.errorElement||RM,f&&(d<0&&_===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,E=null):d===_&&(y=!0,E=h.route.hydrateFallbackElement||null)));let b=e.concat(l.slice(0,_+1)),x=()=>{let g;return v?g=S:y?g=E:h.route.Component?g=V.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=m,V.createElement(CM,{match:h,routeContext:{outlet:m,matches:b,isDataRoute:i!=null},children:g})};return i&&(h.route.ErrorBoundary||h.route.errorElement||_===0)?V.createElement(wM,{location:i.location,revalidation:i.revalidation,component:S,error:v,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}function gp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UM(a){let e=V.useContext(Ws);return Jt(e,gp(a)),e}function LM(a){let e=V.useContext(gu);return Jt(e,gp(a)),e}function NM(a){let e=V.useContext(Ui);return Jt(e,gp(a)),e}function _p(a){let e=NM(a),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function OM(){return _p("useRouteId")}function PM(){let a=V.useContext(mp),e=LM("useRouteError"),i=_p("useRouteError");return a!==void 0?a:e.errors?.[i]}function IM(){let{router:a}=UM("useNavigate"),e=_p("useNavigate"),i=V.useRef(!1);return Bv(()=>{i.current=!0}),V.useCallback(async(l,c={})=>{vi(i.current,Iv),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var y0={};function Fv(a,e,i){!e&&!y0[a]&&(y0[a]=!0,vi(!1,i))}V.memo(BM);function BM({routes:a,future:e,state:i}){return zv(a,void 0,i,e)}function zM({to:a,replace:e,state:i,relative:r}){Jt(js(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=V.useContext(Di);vi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=V.useContext(Ui),{pathname:f}=ji(),d=_u(),m=pp(a,hp(c),f,r==="path"),h=JSON.stringify(m);return V.useEffect(()=>{d(JSON.parse(h),{replace:e,state:i,relative:r})},[d,h,r,e,i]),null}function FM(a){return bM(a.context)}function tu(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HM({basename:a="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Jt(!js(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=V.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Xs(i));let{pathname:m="/",search:h="",hash:_="",state:v=null,key:y="default"}=i,S=V.useMemo(()=>{let E=_a(m,f);return E==null?null:{location:{pathname:E,search:h,hash:_,state:v,key:y},navigationType:r}},[f,m,h,_,v,y,r]);return vi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${h}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:V.createElement(Di.Provider,{value:d},V.createElement(pl.Provider,{children:e,value:S}))}function GM({children:a,location:e}){return TM(yh(a),e)}function yh(a,e=[]){let i=[];return V.Children.forEach(a,(r,l)=>{if(!V.isValidElement(r))return;let c=[...e,l];if(r.type===V.Fragment){i.push.apply(i,yh(r.props.children,c));return}Jt(r.type===tu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=yh(r.props.children,c)),i.push(f)}),i}var nu="get",iu="application/x-www-form-urlencoded";function vu(a){return a!=null&&typeof a.tagName=="string"}function VM(a){return vu(a)&&a.tagName.toLowerCase()==="button"}function kM(a){return vu(a)&&a.tagName.toLowerCase()==="form"}function XM(a){return vu(a)&&a.tagName.toLowerCase()==="input"}function WM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function jM(a,e){return a.button===0&&(!e||e==="_self")&&!WM(a)}function sl(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((e,i)=>{let r=a[i];return e.concat(Array.isArray(r)?r.map(l=>[i,l]):[[i,r]])},[]))}function qM(a,e){let i=sl(a);return e&&e.forEach((r,l)=>{i.has(l)||e.getAll(l).forEach(c=>{i.append(l,c)})}),i}var Cc=null;function YM(){if(Cc===null)try{new FormData(document.createElement("form"),0),Cc=!1}catch{Cc=!0}return Cc}var ZM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(a){return a!=null&&!ZM.has(a)?(vi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):a}function KM(a,e){let i,r,l,c,f;if(kM(a)){let d=a.getAttribute("action");r=d?_a(d,e):null,i=a.getAttribute("method")||nu,l=Pd(a.getAttribute("enctype"))||iu,c=new FormData(a)}else if(VM(a)||XM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?_a(m,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||nu,l=Pd(a.getAttribute("formenctype"))||Pd(d.getAttribute("enctype"))||iu,c=new FormData(d,a),!YM()){let{name:h,type:_,value:v}=a;if(_==="image"){let y=h?`${h}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else h&&c.append(h,v)}}else{if(vu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=nu,r=null,l=iu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function QM(a,e,i){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&_a(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function JM(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $M(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function eE(a,e,i){let r=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await JM(c,i);return f.links?f.links():[]}return[]}));return aE(r.flat(1).filter($M).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function x0(a,e,i,r,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,d=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||d(m,h)):c==="data"?e.filter((m,h)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function tE(a,e,{includeHydrateFallback:i}={}){return nE(a.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function nE(a){return[...new Set(a)]}function iE(a){let e={},i=Object.keys(a).sort();for(let r of i)e[r]=a[r];return e}function aE(a,e){let i=new Set;return new Set(e),a.reduce((r,l)=>{let c=JSON.stringify(iE(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Hv(){let a=V.useContext(Ws);return vp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function rE(){let a=V.useContext(gu);return vp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var yp=V.createContext(void 0);yp.displayName="FrameworkContext";function Gv(){let a=V.useContext(yp);return vp(a,"You must render this element inside a <HydratedRouter> element"),a}function sE(a,e){let i=V.useContext(yp),[r,l]=V.useState(!1),[c,f]=V.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:_,onTouchStart:v}=e,y=V.useRef(null);V.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=g=>{g.forEach(A=>{f(A.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[a]),V.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,y,{}]:[c,y,{onFocus:Zo(d,S),onBlur:Zo(m,E),onMouseEnter:Zo(h,S),onMouseLeave:Zo(_,E),onTouchStart:Zo(v,S)}]:[!1,y,{}]}function Zo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function oE({page:a,...e}){let{router:i}=Hv(),r=V.useMemo(()=>Uv(i.routes,a,i.basename),[i.routes,a,i.basename]);return r?V.createElement(cE,{page:a,matches:r,...e}):null}function lE(a){let{manifest:e,routeModules:i}=Gv(),[r,l]=V.useState([]);return V.useEffect(()=>{let c=!1;return eE(a,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,i]),r}function cE({page:a,matches:e,...i}){let r=ji(),{manifest:l,routeModules:c}=Gv(),{basename:f}=Hv(),{loaderData:d,matches:m}=rE(),h=V.useMemo(()=>x0(a,e,m,l,r,"data"),[a,e,m,l,r]),_=V.useMemo(()=>x0(a,e,m,l,r,"assets"),[a,e,m,l,r]),v=V.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let E=new Set,b=!1;if(e.forEach(g=>{let A=l.routes[g.route.id];!A||!A.hasLoader||(!h.some(T=>T.route.id===g.route.id)&&g.route.id in d&&c[g.route.id]?.shouldRevalidate||A.hasClientLoader?b=!0:E.add(g.route.id))}),E.size===0)return[];let x=QM(a,f,"data");return b&&E.size>0&&x.searchParams.set("_routes",e.filter(g=>E.has(g.route.id)).map(g=>g.route.id).join(",")),[x.pathname+x.search]},[f,d,r,l,h,e,a,c]),y=V.useMemo(()=>tE(_,l),[_,l]),S=lE(_);return V.createElement(V.Fragment,null,v.map(E=>V.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>V.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:b})=>V.createElement("link",{key:E,nonce:i.nonce,...b})))}function uE(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vv&&(window.__reactRouterVersion="7.8.0")}catch{}function fE({basename:a,children:e,window:i}){let r=V.useRef();r.current==null&&(r.current=YS({window:i,v5Compat:!0}));let l=r.current,[c,f]=V.useState({action:l.action,location:l.location}),d=V.useCallback(m=>{V.startTransition(()=>f(m))},[f]);return V.useLayoutEffect(()=>l.listen(d),[l,d]),V.createElement(HM,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xv=V.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:h,preventScrollReset:_,viewTransition:v,...y},S){let{basename:E}=V.useContext(Di),b=typeof h=="string"&&kv.test(h),x,g=!1;if(typeof h=="string"&&b&&(x=h,Vv))try{let U=new URL(window.location.href),L=h.startsWith("//")?new URL(U.protocol+h):new URL(h),F=_a(L.pathname,E);L.origin===U.origin&&F!=null?h=F+L.search+L.hash:g=!0}catch{vi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=SM(h,{relative:l}),[T,R,N]=sE(r,y),z=mE(h,{replace:f,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:v});function I(U){e&&e(U),U.defaultPrevented||z(U)}let k=V.createElement("a",{...y,...N,href:x||A,onClick:g||c?e:I,ref:uE(S,R),target:m,"data-discover":!b&&i==="render"?"true":void 0});return T&&!b?V.createElement(V.Fragment,null,k,V.createElement(oE,{page:A})):k});Xv.displayName="Link";var dE=V.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...h},_){let v=ml(f,{relative:h.relative}),y=ji(),S=V.useContext(gu),{navigator:E,basename:b}=V.useContext(Di),x=S!=null&&xE(v)&&d===!0,g=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,A=y.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(A=A.toLowerCase(),T=T?T.toLowerCase():null,g=g.toLowerCase()),T&&b&&(T=_a(T,b)||T);const R=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let N=A===g||!l&&A.startsWith(g)&&A.charAt(R)==="/",z=T!=null&&(T===g||!l&&T.startsWith(g)&&T.charAt(g.length)==="/"),I={isActive:N,isPending:z,isTransitioning:x},k=N?e:void 0,U;typeof r=="function"?U=r(I):U=[r,N?"active":null,z?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let L=typeof c=="function"?c(I):c;return V.createElement(Xv,{...h,"aria-current":k,className:U,ref:_,style:L,to:f,viewTransition:d},typeof m=="function"?m(I):m)});dE.displayName="NavLink";var hE=V.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=nu,action:d,onSubmit:m,relative:h,preventScrollReset:_,viewTransition:v,...y},S)=>{let E=vE(),b=yE(d,{relative:h}),x=f.toLowerCase()==="get"?"get":"post",g=typeof d=="string"&&kv.test(d),A=T=>{if(m&&m(T),T.defaultPrevented)return;T.preventDefault();let R=T.nativeEvent.submitter,N=R?.getAttribute("formmethod")||f;E(R||T.currentTarget,{fetcherKey:e,method:N,navigate:i,replace:l,state:c,relative:h,preventScrollReset:_,viewTransition:v})};return V.createElement("form",{ref:S,method:x,action:b,onSubmit:r?m:A,...y,"data-discover":!g&&a==="render"?"true":void 0})});hE.displayName="Form";function pE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wv(a){let e=V.useContext(Ws);return Jt(e,pE(a)),e}function mE(a,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=_u(),m=ji(),h=ml(a,{relative:c});return V.useCallback(_=>{if(jM(_,e)){_.preventDefault();let v=i!==void 0?i:rl(m)===rl(h);d(a,{replace:v,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,h,i,r,e,a,l,c,f])}function jv(a){vi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=V.useRef(sl(a)),i=V.useRef(!1),r=ji(),l=V.useMemo(()=>qM(r.search,i.current?null:e.current),[r.search]),c=_u(),f=V.useCallback((d,m)=>{const h=sl(typeof d=="function"?d(new URLSearchParams(l)):d);i.current=!0,c("?"+h,m)},[c,l]);return[l,f]}var gE=0,_E=()=>`__${String(++gE)}__`;function vE(){let{router:a}=Wv("useSubmit"),{basename:e}=V.useContext(Di),i=OM();return V.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:m,body:h}=KM(r,e);if(l.navigate===!1){let _=l.fetcherKey||_E();await a.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function yE(a,{relative:e}={}){let{basename:i}=V.useContext(Di),r=V.useContext(Ui);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...ml(a||".",{relative:e})},f=ji();if(a==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();c.search=_?`?${_}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ma([i,c.pathname])),rl(c)}function xE(a,{relative:e}={}){let i=V.useContext(Pv);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Wv("useViewTransitionState"),l=ml(a,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,r)||i.nextLocation.pathname;return uu(l.pathname,f)!=null||uu(l.pathname,c)!=null}function qv(a){var e,i,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(e=0;e<l;e++)a[e]&&(i=qv(a[e]))&&(r&&(r+=" "),r+=i)}else for(i in a)a[i]&&(r&&(r+=" "),r+=i);return r}function Ur(){for(var a,e,i=0,r="",l=arguments.length;i<l;i++)(a=arguments[i])&&(e=qv(a))&&(r&&(r+=" "),r+=e);return r}function SE(a){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(document.createTextNode(a))}SE(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var gl=a=>typeof a=="number"&&!isNaN(a),Lr=a=>typeof a=="string",va=a=>typeof a=="function",ME=a=>Lr(a)||gl(a),xh=a=>Lr(a)||va(a)?a:null,EE=(a,e)=>a===!1||gl(a)&&a>0?a:e,Sh=a=>V.isValidElement(a)||Lr(a)||va(a)||gl(a);function bE(a,e,i=300){let{scrollHeight:r,style:l}=a;requestAnimationFrame(()=>{l.minHeight="initial",l.height=r+"px",l.transition=`all ${i}ms`,requestAnimationFrame(()=>{l.height="0",l.padding="0",l.margin="0",setTimeout(e,i)})})}function TE({enter:a,exit:e,appendPosition:i=!1,collapse:r=!0,collapseDuration:l=300}){return function({children:c,position:f,preventExitTransition:d,done:m,nodeRef:h,isIn:_,playToast:v}){let y=i?`${a}--${f}`:a,S=i?`${e}--${f}`:e,E=V.useRef(0);return V.useLayoutEffect(()=>{let b=h.current,x=y.split(" "),g=A=>{A.target===h.current&&(v(),b.removeEventListener("animationend",g),b.removeEventListener("animationcancel",g),E.current===0&&A.type!=="animationcancel"&&b.classList.remove(...x))};b.classList.add(...x),b.addEventListener("animationend",g),b.addEventListener("animationcancel",g)},[]),V.useEffect(()=>{let b=h.current,x=()=>{b.removeEventListener("animationend",x),r?bE(b,m,l):m()};_||(d?x():(E.current=1,b.className+=` ${S}`,b.addEventListener("animationend",x)))},[_]),Zt.createElement(Zt.Fragment,null,c)}}function S0(a,e){return{content:Yv(a.content,a.props),containerId:a.props.containerId,id:a.props.toastId,theme:a.props.theme,type:a.props.type,data:a.props.data||{},isLoading:a.props.isLoading,icon:a.props.icon,reason:a.removalReason,status:e}}function Yv(a,e,i=!1){return V.isValidElement(a)&&!Lr(a.type)?V.cloneElement(a,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:i}):va(a)?a({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:i}):a}function AE({closeToast:a,theme:e,ariaLabel:i="close"}){return Zt.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),a(!0)},"aria-label":i},Zt.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Zt.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function RE({delay:a,isRunning:e,closeToast:i,type:r="default",hide:l,className:c,controlledProgress:f,progress:d,rtl:m,isIn:h,theme:_}){let v=l||f&&d===0,y={animationDuration:`${a}ms`,animationPlayState:e?"running":"paused"};f&&(y.transform=`scaleX(${d})`);let S=Ur("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":m}),E=va(c)?c({rtl:m,type:r,defaultClassName:S}):Ur(S,c),b={[f&&d>=1?"onTransitionEnd":"onAnimationEnd"]:f&&d<1?null:()=>{h&&i()}};return Zt.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},Zt.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${r}`}),Zt.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:y,...b}))}var wE=1,Zv=()=>`${wE++}`;function CE(a,e,i){let r=1,l=0,c=[],f=[],d=e,m=new Map,h=new Set,_=A=>(h.add(A),()=>h.delete(A)),v=()=>{f=Array.from(m.values()),h.forEach(A=>A())},y=({containerId:A,toastId:T,updateId:R})=>{let N=A?A!==a:a!==1,z=m.has(T)&&R==null;return N||z},S=(A,T)=>{m.forEach(R=>{var N;(T==null||T===R.props.toastId)&&((N=R.toggle)==null||N.call(R,A))})},E=A=>{var T,R;(R=(T=A.props)==null?void 0:T.onClose)==null||R.call(T,A.removalReason),A.isActive=!1},b=A=>{if(A==null)m.forEach(E);else{let T=m.get(A);T&&E(T)}v()},x=()=>{l-=c.length,c=[]},g=A=>{var T,R;let{toastId:N,updateId:z}=A.props,I=z==null;A.staleId&&m.delete(A.staleId),A.isActive=!0,m.set(N,A),v(),i(S0(A,I?"added":"updated")),I&&((R=(T=A.props).onOpen)==null||R.call(T))};return{id:a,props:d,observe:_,toggle:S,removeToast:b,toasts:m,clearQueue:x,buildToast:(A,T)=>{if(y(T))return;let{toastId:R,updateId:N,data:z,staleId:I,delay:k}=T,U=N==null;U&&l++;let L={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(T).filter(([ie,oe])=>oe!=null)),toastId:R,updateId:N,data:z,isIn:!1,className:xh(T.className||d.toastClassName),progressClassName:xh(T.progressClassName||d.progressClassName),autoClose:T.isLoading?!1:EE(T.autoClose,d.autoClose),closeToast(ie){m.get(R).removalReason=ie,b(R)},deleteToast(){let ie=m.get(R);if(ie!=null){if(i(S0(ie,"removed")),m.delete(R),l--,l<0&&(l=0),c.length>0){g(c.shift());return}v()}}};L.closeButton=d.closeButton,T.closeButton===!1||Sh(T.closeButton)?L.closeButton=T.closeButton:T.closeButton===!0&&(L.closeButton=Sh(d.closeButton)?d.closeButton:!0);let F={content:A,props:L,staleId:I};d.limit&&d.limit>0&&l>d.limit&&U?c.push(F):gl(k)?setTimeout(()=>{g(F)},k):g(F)},setProps(A){d=A},setToggle:(A,T)=>{let R=m.get(A);R&&(R.toggle=T)},isToastActive:A=>{var T;return(T=m.get(A))==null?void 0:T.isActive},getSnapshot:()=>f}}var Gn=new Map,ol=[],Mh=new Set,DE=a=>Mh.forEach(e=>e(a)),Kv=()=>Gn.size>0;function UE(){ol.forEach(a=>Jv(a.content,a.options)),ol=[]}var LE=(a,{containerId:e})=>{var i;return(i=Gn.get(e||1))==null?void 0:i.toasts.get(a)};function Qv(a,e){var i;if(e)return!!((i=Gn.get(e))!=null&&i.isToastActive(a));let r=!1;return Gn.forEach(l=>{l.isToastActive(a)&&(r=!0)}),r}function NE(a){if(!Kv()){ol=ol.filter(e=>a!=null&&e.options.toastId!==a);return}if(a==null||ME(a))Gn.forEach(e=>{e.removeToast(a)});else if(a&&("containerId"in a||"id"in a)){let e=Gn.get(a.containerId);e?e.removeToast(a.id):Gn.forEach(i=>{i.removeToast(a.id)})}}var OE=(a={})=>{Gn.forEach(e=>{e.props.limit&&(!a.containerId||e.id===a.containerId)&&e.clearQueue()})};function Jv(a,e){Sh(a)&&(Kv()||ol.push({content:a,options:e}),Gn.forEach(i=>{i.buildToast(a,e)}))}function PE(a){var e;(e=Gn.get(a.containerId||1))==null||e.setToggle(a.id,a.fn)}function $v(a,e){Gn.forEach(i=>{(e==null||!(e!=null&&e.containerId)||e?.containerId===i.id)&&i.toggle(a,e?.id)})}function IE(a){let e=a.containerId||1;return{subscribe(i){let r=CE(e,a,DE);Gn.set(e,r);let l=r.observe(i);return UE(),()=>{l(),Gn.delete(e)}},setProps(i){var r;(r=Gn.get(e))==null||r.setProps(i)},getSnapshot(){var i;return(i=Gn.get(e))==null?void 0:i.getSnapshot()}}}function BE(a){return Mh.add(a),()=>{Mh.delete(a)}}function zE(a){return a&&(Lr(a.toastId)||gl(a.toastId))?a.toastId:Zv()}function _l(a,e){return Jv(a,e),e.toastId}function yu(a,e){return{...e,type:e&&e.type||a,toastId:zE(e)}}function xu(a){return(e,i)=>_l(e,yu(a,i))}function kt(a,e){return _l(a,yu("default",e))}kt.loading=(a,e)=>_l(a,yu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function FE(a,{pending:e,error:i,success:r},l){let c;e&&(c=Lr(e)?kt.loading(e,l):kt.loading(e.render,{...l,...e}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(h,_,v)=>{if(_==null){kt.dismiss(c);return}let y={type:h,...f,...l,data:v},S=Lr(_)?{render:_}:_;return c?kt.update(c,{...y,...S}):kt(S.render,{...y,...S}),v},m=va(a)?a():a;return m.then(h=>d("success",r,h)).catch(h=>d("error",i,h)),m}kt.promise=FE;kt.success=xu("success");kt.info=xu("info");kt.error=xu("error");kt.warning=xu("warning");kt.warn=kt.warning;kt.dark=(a,e)=>_l(a,yu("default",{theme:"dark",...e}));function HE(a){NE(a)}kt.dismiss=HE;kt.clearWaitingQueue=OE;kt.isActive=Qv;kt.update=(a,e={})=>{let i=LE(a,e);if(i){let{props:r,content:l}=i,c={delay:100,...r,...e,toastId:e.toastId||a,updateId:Zv()};c.toastId!==a&&(c.staleId=a);let f=c.render||l;delete c.render,_l(f,c)}};kt.done=a=>{kt.update(a,{progress:1})};kt.onChange=BE;kt.play=a=>$v(!0,a);kt.pause=a=>$v(!1,a);function GE(a){var e;let{subscribe:i,getSnapshot:r,setProps:l}=V.useRef(IE(a)).current;l(a);let c=(e=V.useSyncExternalStore(i,r,r))==null?void 0:e.slice();function f(d){if(!c)return[];let m=new Map;return a.newestOnTop&&c.reverse(),c.forEach(h=>{let{position:_}=h.props;m.has(_)||m.set(_,[]),m.get(_).push(h)}),Array.from(m,h=>d(h[0],h[1]))}return{getToastToRender:f,isToastActive:Qv,count:c?.length}}function VE(a){let[e,i]=V.useState(!1),[r,l]=V.useState(!1),c=V.useRef(null),f=V.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:m,closeToast:h,onClick:_,closeOnClick:v}=a;PE({id:a.toastId,containerId:a.containerId,fn:i}),V.useEffect(()=>{if(a.pauseOnFocusLoss)return y(),()=>{S()}},[a.pauseOnFocusLoss]);function y(){document.hasFocus()||g(),window.addEventListener("focus",x),window.addEventListener("blur",g)}function S(){window.removeEventListener("focus",x),window.removeEventListener("blur",g)}function E(I){if(a.draggable===!0||a.draggable===I.pointerType){A();let k=c.current;f.canCloseOnClick=!0,f.canDrag=!0,k.style.transition="none",a.draggableDirection==="x"?(f.start=I.clientX,f.removalDistance=k.offsetWidth*(a.draggablePercent/100)):(f.start=I.clientY,f.removalDistance=k.offsetHeight*(a.draggablePercent===80?a.draggablePercent*1.5:a.draggablePercent)/100)}}function b(I){let{top:k,bottom:U,left:L,right:F}=c.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&a.pauseOnHover&&I.clientX>=L&&I.clientX<=F&&I.clientY>=k&&I.clientY<=U?g():x()}function x(){i(!0)}function g(){i(!1)}function A(){f.didMove=!1,document.addEventListener("pointermove",R),document.addEventListener("pointerup",N)}function T(){document.removeEventListener("pointermove",R),document.removeEventListener("pointerup",N)}function R(I){let k=c.current;if(f.canDrag&&k){f.didMove=!0,e&&g(),a.draggableDirection==="x"?f.delta=I.clientX-f.start:f.delta=I.clientY-f.start,f.start!==I.clientX&&(f.canCloseOnClick=!1);let U=a.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;k.style.transform=`translate3d(${U},0)`,k.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function N(){T();let I=c.current;if(f.canDrag&&f.didMove&&I){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){l(!0),a.closeToast(!0),a.collapseAll();return}I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}let z={onPointerDown:E,onPointerUp:b};return d&&m&&(z.onMouseEnter=g,a.stacked||(z.onMouseLeave=x)),v&&(z.onClick=I=>{_&&_(I),f.canCloseOnClick&&h(!0)}),{playToast:x,pauseToast:g,isRunning:e,preventExitTransition:r,toastRef:c,eventHandlers:z}}var kE=typeof window<"u"?V.useLayoutEffect:V.useEffect,Su=({theme:a,type:e,isLoading:i,...r})=>Zt.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:a==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function XE(a){return Zt.createElement(Su,{...a},Zt.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function WE(a){return Zt.createElement(Su,{...a},Zt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function jE(a){return Zt.createElement(Su,{...a},Zt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function qE(a){return Zt.createElement(Su,{...a},Zt.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function YE(){return Zt.createElement("div",{className:"Toastify__spinner"})}var Eh={info:WE,warning:XE,success:jE,error:qE,spinner:YE},ZE=a=>a in Eh;function KE({theme:a,type:e,isLoading:i,icon:r}){let l=null,c={theme:a,type:e};return r===!1||(va(r)?l=r({...c,isLoading:i}):V.isValidElement(r)?l=V.cloneElement(r,c):i?l=Eh.spinner():ZE(e)&&(l=Eh[e](c))),l}var QE=a=>{let{isRunning:e,preventExitTransition:i,toastRef:r,eventHandlers:l,playToast:c}=VE(a),{closeButton:f,children:d,autoClose:m,onClick:h,type:_,hideProgressBar:v,closeToast:y,transition:S,position:E,className:b,style:x,progressClassName:g,updateId:A,role:T,progress:R,rtl:N,toastId:z,deleteToast:I,isIn:k,isLoading:U,closeOnClick:L,theme:F,ariaLabel:ie}=a,oe=Ur("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${_}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":L}),ue=va(b)?b({rtl:N,position:E,type:_,defaultClassName:oe}):Ur(oe,b),de=KE(a),H=!!R||!m,K={closeToast:y,type:_,theme:F},q=null;return f===!1||(va(f)?q=f(K):V.isValidElement(f)?q=V.cloneElement(f,K):q=AE(K)),Zt.createElement(S,{isIn:k,done:I,position:E,preventExitTransition:i,nodeRef:r,playToast:c},Zt.createElement("div",{id:z,tabIndex:0,onClick:h,"data-in":k,className:ue,...l,style:x,ref:r,...k&&{role:T,"aria-label":ie}},de!=null&&Zt.createElement("div",{className:Ur("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!U})},de),Yv(d,a,!e),q,!a.customProgressBar&&Zt.createElement(RE,{...A&&!H?{key:`p-${A}`}:{},rtl:N,theme:F,delay:m,isRunning:e,isIn:k,closeToast:y,hide:v,type:_,className:g,controlledProgress:H,progress:R||0})))},JE=(a,e=!1)=>({enter:`Toastify--animate Toastify__${a}-enter`,exit:`Toastify--animate Toastify__${a}-exit`,appendPosition:e}),$E=TE(JE("bounce",!0)),eb={position:"top-right",transition:$E,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:a=>a.altKey&&a.code==="KeyT"};function tb(a){let e={...eb,...a},i=a.stacked,[r,l]=V.useState(!0),c=V.useRef(null),{getToastToRender:f,isToastActive:d,count:m}=GE(e),{className:h,style:_,rtl:v,containerId:y,hotKeys:S}=e;function E(x){let g=Ur("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":v});return va(h)?h({position:x,rtl:v,defaultClassName:g}):Ur(g,xh(h))}function b(){i&&(l(!0),kt.play())}return kE(()=>{var x;if(i){let g=c.current.querySelectorAll('[data-in="true"]'),A=12,T=(x=e.position)==null?void 0:x.includes("top"),R=0,N=0;Array.from(g).reverse().forEach((z,I)=>{let k=z;k.classList.add("Toastify__toast--stacked"),I>0&&(k.dataset.collapsed=`${r}`),k.dataset.pos||(k.dataset.pos=T?"top":"bot");let U=R*(r?.2:1)+(r?0:A*I);k.style.setProperty("--y",`${T?U:U*-1}px`),k.style.setProperty("--g",`${A}`),k.style.setProperty("--s",`${1-(r?N:0)}`),R+=k.offsetHeight,N+=.025})}},[r,m,i]),V.useEffect(()=>{function x(g){var A;let T=c.current;S(g)&&((A=T.querySelector('[tabIndex="0"]'))==null||A.focus(),l(!1),kt.pause()),g.key==="Escape"&&(document.activeElement===T||T!=null&&T.contains(document.activeElement))&&(l(!0),kt.play())}return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[S]),Zt.createElement("section",{ref:c,className:"Toastify",id:y,onMouseEnter:()=>{i&&(l(!1),kt.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},f((x,g)=>{let A=g.length?{..._}:{..._,pointerEvents:"none"};return Zt.createElement("div",{tabIndex:-1,className:E(x),"data-stacked":i,style:A,key:`c-${x}`},g.map(({content:T,props:R})=>Zt.createElement(QE,{...R,stacked:i,collapseAll:b,isIn:d(R.toastId,R.containerId),key:`t-${R.key}`},T)))}))}const ll={Homepage:"/",Dashboard:"/dashboard"},nb="https://api.exovitae.net";let bh=null;function xp(a){bh=a}async function Dc(a,e,i){const r={"Content-Type":"application/json",Accept:"application/json"};bh&&(r.Authorization=`Bearer ${bh}`);const l={method:a,headers:r};i!==void 0&&(l.body=JSON.stringify(i));const c=await fetch(`${nb}${e}`,l);if(c.status===204)return null;const f=await c.json().catch(()=>null);if(!c.ok)throw f||{message:"Request failed"};return f}const Ci={get:a=>Dc("GET",a),post:(a,e)=>Dc("POST",a,e),put:(a,e)=>Dc("PUT",a,e),delete:a=>Dc("DELETE",a)},ey=V.createContext(null),Id="auth.token",Bd="auth.username",zd="auth.role";function ib({children:a}){const[e,i]=V.useState(()=>localStorage.getItem(Id)),[r,l]=V.useState(()=>localStorage.getItem(Bd)),[c,f]=V.useState(()=>localStorage.getItem(zd));V.useEffect(()=>{xp(e)},[e]);const d=v=>{i(v),v?localStorage.setItem(Id,v):localStorage.removeItem(Id)},m=v=>{l(v),v?localStorage.setItem(Bd,v):localStorage.removeItem(Bd)},h=v=>{f(v),v?localStorage.setItem(zd,v):localStorage.removeItem(zd)},_=V.useMemo(()=>({token:e,setToken:d,username:r,setUsername:m,role:c,setRole:h}),[e,r,c]);return B.jsx(ey.Provider,{value:_,children:a})}function Mu(){return V.useContext(ey)}const gn={GameOverview:"game-overview",Features:"features",Media:"media",FAQ:"faq",Feedback:"feedback",About:"about",Login:"login"};function ab(){const{token:a}=Mu(),e=ji();if(a)return B.jsx(FM,{});const i=sl({tab:gn.Login}).toString(),r={pathname:ll.Homepage,search:`?${i}`};return B.jsx(zM,{to:r,replace:!0,state:{from:e.pathname+e.search}})}const rb=[{name:"Login",linkTo:gn.Login,disabled:!1},{name:"Game Overview",linkTo:gn.GameOverview,disabled:!1},{name:"Features",linkTo:gn.Features,disabled:!1},{name:"Media",linkTo:gn.Media,disabled:!1},{name:"FAQ",linkTo:gn.FAQ,tooltip:"Frequently Asked Questions",disabled:!1},{name:"Feedback",linkTo:gn.Feedback,disabled:!1},{name:"About",linkTo:gn.About,disabled:!1}];function sb({className:a="",children:e}){return B.jsx("section",{className:a,children:e})}function ob({size:a="100%",className:e=""}){return B.jsx("img",{src:"exovitae_logo.png",alt:"Logo",width:a,height:a,style:{objectFit:"contain",borderRadius:8},className:e})}function lb({className:a="",children:e}){return B.jsx("aside",{className:a,children:e})}function cb({name:a,onClick:e,disabled:i=!1,tooltip:r,className:l}){return B.jsx("div",{style:{paddingBottom:30,width:"100%"},children:B.jsx("button",{className:l,onClick:e,disabled:i,title:r,children:a})})}function ub(){return B.jsxs("section",{style:{textAlign:"center",width:"100%",maxWidth:"1400px",margin:"0 auto",padding:"2rem 4rem",backgroundColor:"rgba(33, 150, 243, 0.05)",border:"1px solid #2196f3",borderRadius:"0.5rem",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",color:"#a8d9ff"},children:[B.jsx("h1",{style:{fontSize:"clamp(2rem, 4vw, 3rem)",marginBottom:"0.5rem",textTransform:"uppercase",color:"#a8d9ff",textShadow:"0 2px 4px rgba(0, 0, 0, 0.6)"},children:"Game Overview"}),B.jsx("div",{style:{height:"3px",width:"80px",background:"#2196f3",margin:"0 auto 1.5rem auto",borderRadius:"2px"}}),B.jsx("h2",{style:{fontSize:"clamp(1.25rem, 2vw, 1.5rem)",marginBottom:"1.5rem",fontWeight:"400",fontStyle:"italic",color:"#a8cfff"},children:"Survive. Explore. Dominate."}),B.jsxs("p",{style:{fontSize:"1.125rem",lineHeight:"1.8",padding:"0 1rem",color:"#d0e8ff"},children:[B.jsx("strong",{children:"Exovitae"})," is a multiplayer survival game set on a mysterious, Earth-like world inhabited by dinosaurs and original, otherworldly creatures. Players must gather resources, craft tools and shelters, and tame powerful beasts to thrive in both PvE and PvP scenarios. The game features a vibrant, animated visual style and blends tribal survival elements with futuristic lore. Explore diverse biomes, forge alliances, and carve your path in a dynamic, living world where survival is only the beginning."]})]})}function fb(){return B.jsx("h1",{children:"Features"})}function db(){return B.jsx("h1",{children:"Media"})}function hb(){return B.jsx("h1",{children:"Frequently Asked Questions"})}function pb({value:a,onChange:e,error:i,ariaDescribedBy:r}){const l=typeof a=="number"?a:0,c=f=>{const d=l;f==="left"&&e(Math.max(1,d-1||1)),f==="right"&&e(Math.min(5,(d||0)+1)),f==="home"&&e(1),f==="end"&&e(5)};return B.jsxs("div",{className:"field",children:[B.jsxs("div",{role:"radiogroup","aria-label":"Rating","aria-describedby":r,className:"starsRow",children:[[1,2,3,4,5].map(f=>{const d=f<=l,m=l===f;return B.jsx("button",{type:"button",role:"radio","aria-checked":m,onClick:()=>e(f),onKeyDown:h=>{h.key==="ArrowLeft"?(h.preventDefault(),c("left")):h.key==="ArrowRight"?(h.preventDefault(),c("right")):h.key==="Home"?(h.preventDefault(),c("home")):h.key==="End"?(h.preventDefault(),c("end")):(h.key===" "||h.key==="Enter")&&(h.preventDefault(),e(f))},title:`${f} star${f>1?"s":""}`,className:`starButton ${d?"isFilled":""}`,children:d?"★":"☆"},f)}),B.jsx("span",{className:"starValue",children:l?`${l}/5`:"Select rating"})]}),B.jsx("span",{id:r,className:"errorFloat",children:i})]})}function mb(){const[a,e]=V.useState(""),[i,r]=V.useState(""),[l,c]=V.useState(""),[f,d]=V.useState(!1),[m,h]=V.useState(""),[_,v]=V.useState(""),[y,S]=V.useState(""),[E,b]=V.useState(""),x=64,g=1e3,A=10,T=async()=>{h(""),v(""),S(""),b(""),d(!0);const R=a.trim(),N=i.trim(),z=typeof l=="number"?l:Number.NaN;if(R?R.length>x&&h("Name is too long."):h("Name is required."),N?N.length<A?v("Please provide more detail."):N.length>g&&v("Feedback is too long."):v("Feedback is required."),(!Number.isFinite(z)||z<1||z>5)&&S("Rating is required (1–5)."),!R||!N||R.length>x||N.length<A||N.length>g||!Number.isFinite(z)||z<1||z>5){d(!1);return}try{const I=await Ci.post("/api/feedback",{name:R,message:N,rating:z});e(""),r(""),c(""),I&&kt.success("Feedback submitted successfully!",{position:"top-center",autoClose:3e3})}catch{b("Failed to submit feedback.")}finally{d(!1)}};return B.jsx("div",{className:"sectionShell",children:B.jsxs("section",{className:"sectionCard",children:[B.jsx("h1",{className:"pageTitle",children:"Game Feedback"}),B.jsx("div",{className:"accentDivider"}),B.jsxs("div",{className:"formColumn formColumnWide",children:[B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${m?"inputError":""}`,placeholder:"Name",type:"text",value:a,onChange:R=>e(R.target.value),"aria-invalid":!!m,"aria-describedby":"name-error",maxLength:x}),B.jsx("span",{id:"name-error",className:"errorFloat",children:m})]}),B.jsx(pb,{value:l,onChange:R=>c(R),error:y,ariaDescribedBy:"rating-error"}),B.jsxs("div",{className:"field",children:[B.jsx("textarea",{className:`inputFieldLarge ${_?"inputError":""}`,placeholder:"Your feedback...",value:i,onChange:R=>r(R.target.value),"aria-invalid":!!_,"aria-describedby":"feedback-error",maxLength:g}),B.jsx("span",{id:"feedback-error",className:"errorFloat",children:_})]}),B.jsx("button",{onClick:T,className:"sectionButton",style:{alignSelf:"center"},disabled:f,children:f?"Submitting...":"Submit"}),B.jsx("div",{className:"generalErrorSlot",role:"alert",children:f?B.jsx("span",{className:"spinner"}):E&&B.jsx("span",{className:"errorText",children:E})})]})]})})}function gb(){return B.jsx("h1",{children:"About"})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="179",_b=0,M0=1,vb=2,ty=1,yb=2,ha=3,$a=0,Pn=1,pa=2,Qa=0,Is=1,fu=2,E0=3,b0=4,xb=5,Ar=100,Sb=101,Mb=102,Eb=103,bb=104,Tb=200,Ab=201,Rb=202,wb=203,Th=204,Ah=205,Cb=206,Db=207,Ub=208,Lb=209,Nb=210,Ob=211,Pb=212,Ib=213,Bb=214,Rh=0,wh=1,Ch=2,Fs=3,Dh=4,Uh=5,Lh=6,Nh=7,ny=0,zb=1,Fb=2,Ja=0,Hb=1,Gb=2,Vb=3,kb=4,Xb=5,Wb=6,jb=7,iy=300,Hs=301,Gs=302,Oh=303,Ph=304,Eu=306,Ih=1e3,wr=1001,Bh=1002,si=1003,qb=1004,Uc=1005,Gi=1006,Fd=1007,Cr=1008,Xi=1009,ay=1010,ry=1011,cl=1012,Mp=1013,Nr=1014,Vi=1015,vl=1016,Ep=1017,bp=1018,ul=1020,sy=35902,oy=1021,ly=1022,wi=1023,fl=1026,dl=1027,Tp=1028,Ap=1029,cy=1030,Rp=1031,wp=1033,au=33776,ru=33777,su=33778,ou=33779,zh=35840,Fh=35841,Hh=35842,Gh=35843,Vh=36196,kh=37492,Xh=37496,Wh=37808,jh=37809,qh=37810,Yh=37811,Zh=37812,Kh=37813,Qh=37814,Jh=37815,$h=37816,ep=37817,tp=37818,np=37819,ip=37820,ap=37821,lu=36492,rp=36494,sp=36495,uy=36283,op=36284,lp=36285,cp=36286,Yb=3200,Zb=3201,fy=0,Kb=1,Ka="",ri="srgb",Vs="srgb-linear",du="linear",Vt="srgb",_s=7680,T0=519,Qb=512,Jb=513,$b=514,dy=515,eT=516,tT=517,nT=518,iT=519,A0=35044,R0=35048,w0="300 es",ki=2e3,hu=2001;class qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C0=1234567;const il=Math.PI/180,hl=180/Math.PI;function Ys(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Mt(a,e,i){return Math.max(e,Math.min(i,a))}function Cp(a,e){return(a%e+e)%e}function aT(a,e,i,r,l){return r+(a-e)*(l-r)/(i-e)}function rT(a,e,i){return a!==e?(i-a)/(e-a):0}function al(a,e,i){return(1-i)*a+i*e}function sT(a,e,i,r){return al(a,e,1-Math.exp(-i*r))}function oT(a,e=1){return e-Math.abs(Cp(a,e*2)-e)}function lT(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function cT(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function uT(a,e){return a+Math.floor(Math.random()*(e-a+1))}function fT(a,e){return a+Math.random()*(e-a)}function dT(a){return a*(.5-Math.random())}function hT(a){a!==void 0&&(C0=a);let e=C0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pT(a){return a*il}function mT(a){return a*hl}function gT(a){return(a&a-1)===0&&a!==0}function _T(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function vT(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function yT(a,e,i,r,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),h=c((e+r)/2),_=f((e+r)/2),v=c((e-r)/2),y=f((e-r)/2),S=c((r-e)/2),E=f((r-e)/2);switch(l){case"XYX":a.set(d*_,m*v,m*y,d*h);break;case"YZY":a.set(m*y,d*_,m*v,d*h);break;case"ZXZ":a.set(m*v,m*y,d*_,d*h);break;case"XZX":a.set(d*_,m*E,m*S,d*h);break;case"YXY":a.set(m*S,d*_,m*E,d*h);break;case"ZYZ":a.set(m*E,m*S,d*_,d*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ns(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Fn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Hd={DEG2RAD:il,RAD2DEG:hl,generateUUID:Ys,clamp:Mt,euclideanModulo:Cp,mapLinear:aT,inverseLerp:rT,lerp:al,damp:sT,pingpong:oT,smoothstep:lT,smootherstep:cT,randInt:uT,randFloat:fT,randFloatSpread:dT,seededRandom:hT,degToRad:pT,radToDeg:mT,isPowerOfTwo:gT,ceilPowerOfTwo:_T,floorPowerOfTwo:vT,setQuaternionFromProperEuler:yT,normalize:Fn,denormalize:Ns};class Ut{constructor(e=0,i=0){Ut.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,d){let m=r[l+0],h=r[l+1],_=r[l+2],v=r[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(d===0){e[i+0]=m,e[i+1]=h,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=b;return}if(v!==b||m!==y||h!==S||_!==E){let x=1-d;const g=m*y+h*S+_*E+v*b,A=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const N=Math.sqrt(T),z=Math.atan2(N,g*A);x=Math.sin(x*z)/N,d=Math.sin(d*z)/N}const R=d*A;if(m=m*x+y*R,h=h*x+S*R,_=_*x+E*R,v=v*x+b*R,x===1-d){const N=1/Math.sqrt(m*m+h*h+_*_+v*v);m*=N,h*=N,_*=N,v*=N}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const d=r[l],m=r[l+1],h=r[l+2],_=r[l+3],v=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return e[i]=d*E+_*v+m*S-h*y,e[i+1]=m*E+_*y+h*v-d*S,e[i+2]=h*E+_*S+d*y-m*v,e[i+3]=_*E-d*v-m*y-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,h=d(r/2),_=d(l/2),v=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*_*v+h*S*E,this._y=h*S*v-y*_*E,this._z=h*_*E+y*S*v,this._w=h*_*v-y*S*E;break;case"YXZ":this._x=y*_*v+h*S*E,this._y=h*S*v-y*_*E,this._z=h*_*E-y*S*v,this._w=h*_*v+y*S*E;break;case"ZXY":this._x=y*_*v-h*S*E,this._y=h*S*v+y*_*E,this._z=h*_*E+y*S*v,this._w=h*_*v-y*S*E;break;case"ZYX":this._x=y*_*v-h*S*E,this._y=h*S*v+y*_*E,this._z=h*_*E-y*S*v,this._w=h*_*v+y*S*E;break;case"YZX":this._x=y*_*v+h*S*E,this._y=h*S*v+y*_*E,this._z=h*_*E-y*S*v,this._w=h*_*v-y*S*E;break;case"XZY":this._x=y*_*v-h*S*E,this._y=h*S*v-y*_*E,this._z=h*_*E+y*S*v,this._w=h*_*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],h=i[2],_=i[6],v=i[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-h)*S,this._z=(f-l)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+h)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-h)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-l)/S,this._x=(c+h)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+f*d+l*h-c*m,this._y=l*_+f*m+c*d-r*h,this._z=c*_+f*h+r*m-l*d,this._w=f*_-r*d-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const h=Math.sqrt(m),_=Math.atan2(h,d),v=Math.sin((1-i)*_)/h,y=Math.sin(i*_)/h;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(D0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(D0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,h=2*(f*l-d*r),_=2*(d*i-c*l),v=2*(c*r-f*i);return this.x=i+m*h+f*v-d*_,this.y=r+m*_+d*h-c*v,this.z=l+m*v+c*_-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new ae,D0=new Zs;class ft{constructor(e,i,r,l,c,f,d,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,h)}set(e,i,r,l,c,f,d,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],h=r[1],_=r[4],v=r[7],y=r[2],S=r[5],E=r[8],b=l[0],x=l[3],g=l[6],A=l[1],T=l[4],R=l[7],N=l[2],z=l[5],I=l[8];return c[0]=f*b+d*A+m*N,c[3]=f*x+d*T+m*z,c[6]=f*g+d*R+m*I,c[1]=h*b+_*A+v*N,c[4]=h*x+_*T+v*z,c[7]=h*g+_*R+v*I,c[2]=y*b+S*A+E*N,c[5]=y*x+S*T+E*z,c[8]=y*g+S*R+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],h=e[7],_=e[8];return i*f*_-i*d*h-r*c*_+r*d*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],h=e[7],_=e[8],v=_*f-d*h,y=d*m-_*c,S=h*c-f*m,E=i*v+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*h-_*r)*b,e[2]=(d*r-l*f)*b,e[3]=y*b,e[4]=(_*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=S*b,e[7]=(r*m-h*i)*b,e[8]=(f*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*d)+f+e,-l*h,l*m,-l*(-h*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vd.makeScale(e,i)),this}rotate(e){return this.premultiply(Vd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new ft;function hy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function pu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function xT(){const a=pu("canvas");return a.style.display="block",a}const U0={};function Bs(a){a in U0||(U0[a]=!0,console.warn(a))}function ST(a,e,i){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const L0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MT(){const a={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Vt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Vt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?du:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Vs]:{primaries:e,whitePoint:r,transfer:du,toXYZ:L0,fromXYZ:N0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:L0,fromXYZ:N0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),a}const Dt=MT();function ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let vs;class ET{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vs===void 0&&(vs=pu("canvas")),vs.width=e.width,vs.height=e.height;const l=vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=pu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bT=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(kd(l[f].image)):c.push(kd(l[f]))}else c=kd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function kd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ET.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TT=0;const Xd=new ae;class Vn extends qs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=wr,l=wr,c=Gi,f=Cr,d=wi,m=Xi,h=Vn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Ys(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=iy;Vn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],_=m[4],v=m[8],y=m[1],S=m[5],E=m[9],b=m[2],x=m[6],g=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+b)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const T=(h+1)/2,R=(S+1)/2,N=(g+1)/2,z=(_+y)/4,I=(v+b)/4,k=(E+x)/4;return T>R&&T>N?T<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(T),l=z/r,c=I/r):R>N?R<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),r=z/l,c=k/l):N<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),r=I/c,l=k/c),this.set(r,l,c,i),this}let A=Math.sqrt((x-E)*(x-E)+(v-b)*(v-b)+(y-_)*(y-_));return Math.abs(A)<.001&&(A=1),this.x=(x-E)/A,this.y=(v-b)/A,this.z=(y-_)/A,this.w=Math.acos((h+S+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AT extends qs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends AT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class py extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RT extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,bi):bi.fromBufferAttribute(c,f),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lc.copy(r.boundingBox)),Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Nc.subVectors(this.max,Ko),ys.subVectors(e.a,Ko),xs.subVectors(e.b,Ko),Ss.subVectors(e.c,Ko),ka.subVectors(xs,ys),Xa.subVectors(Ss,xs),vr.subVectors(ys,Ss);let i=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-vr.z,vr.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,vr.z,0,-vr.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-vr.y,vr.x,0];return!Wd(i,ys,xs,Ss,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Wd(i,ys,xs,Ss,Nc))?!1:(Oc.crossVectors(ka,Xa),i=[Oc.x,Oc.y,Oc.z],Wd(i,ys,xs,Ss,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],bi=new ae,Lc=new Pr,ys=new ae,xs=new ae,Ss=new ae,ka=new ae,Xa=new ae,vr=new ae,Ko=new ae,Nc=new ae,Oc=new ae,yr=new ae;function Wd(a,e,i,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){yr.fromArray(a,c);const d=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=e.dot(yr),h=i.dot(yr),_=r.dot(yr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>d)return!1}return!0}const wT=new Pr,Qo=new ae,jd=new ae;class Ks{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):wT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(jd)),this.expandByPoint(Qo.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new ae,qd=new ae,Pc=new ae,Wa=new ae,Yd=new ae,Ic=new ae,Zd=new ae;class my{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qd.copy(e).add(i).multiplyScalar(.5),Pc.copy(i).sub(e).normalize(),Wa.copy(this.origin).sub(qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Pc),d=Wa.dot(this.direction),m=-Wa.dot(Pc),h=Wa.lengthSq(),_=Math.abs(1-f*f);let v,y,S,E;if(_>0)if(v=f*m-d,y=f*d-m,E=c*_,v>=0)if(y>=-E)if(y<=E){const b=1/_;v*=b,y*=b,S=v*(v+f*y+2*d)+y*(f*v+y+2*m)+h}else y=c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;else y=-c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;else y<=-E?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+h):y<=E?(v=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+h):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+h);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(qd).addScaledVector(Pc,y),S}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,d,m;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,l=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,l=(e.min.x-y.x)*h),_>=0?(c=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){Yd.subVectors(i,e),Ic.subVectors(r,e),Zd.crossVectors(Yd,Ic);let f=this.direction.dot(Zd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Wa.subVectors(this.origin,e);const m=d*this.direction.dot(Ic.crossVectors(Wa,Ic));if(m<0)return null;const h=d*this.direction.dot(Yd.cross(Wa));if(h<0||m+h>f)return null;const _=-d*Wa.dot(Zd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,i,r,l,c,f,d,m,h,_,v,y,S,E,b,x){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,h,_,v,y,S,E,b,x)}set(e,i,r,l,c,f,d,m,h,_,v,y,S,E,b,x){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=f,g[9]=d,g[13]=m,g[2]=h,g[6]=_,g[10]=v,g[14]=y,g[3]=S,g[7]=E,g[11]=b,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*_,S=f*v,E=d*_,b=d*v;i[0]=m*_,i[4]=-m*v,i[8]=h,i[1]=S+E*h,i[5]=y-b*h,i[9]=-d*m,i[2]=b-y*h,i[6]=E+S*h,i[10]=f*m}else if(e.order==="YXZ"){const y=m*_,S=m*v,E=h*_,b=h*v;i[0]=y+b*d,i[4]=E*d-S,i[8]=f*h,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=f*m}else if(e.order==="ZXY"){const y=m*_,S=m*v,E=h*_,b=h*v;i[0]=y-b*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*_,i[9]=b-y*d,i[2]=-f*h,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const y=f*_,S=f*v,E=d*_,b=d*v;i[0]=m*_,i[4]=E*h-S,i[8]=y*h+b,i[1]=m*v,i[5]=b*h+y,i[9]=S*h-E,i[2]=-h,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,S=f*h,E=d*m,b=d*h;i[0]=m*_,i[4]=b-y*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-h*_,i[6]=S*v+E,i[10]=y-b*v}else if(e.order==="XZY"){const y=f*m,S=f*h,E=d*m,b=d*h;i[0]=m*_,i[4]=-v,i[8]=h*_,i[1]=y*v+b,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*_,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CT,e,DT)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(r,ni),ja.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(r,ni)),ja.normalize(),Bc.crossVectors(ni,ja),l[0]=ja.x,l[4]=Bc.x,l[8]=ni.x,l[1]=ja.y,l[5]=Bc.y,l[9]=ni.y,l[2]=ja.z,l[6]=Bc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],h=r[12],_=r[1],v=r[5],y=r[9],S=r[13],E=r[2],b=r[6],x=r[10],g=r[14],A=r[3],T=r[7],R=r[11],N=r[15],z=l[0],I=l[4],k=l[8],U=l[12],L=l[1],F=l[5],ie=l[9],oe=l[13],ue=l[2],de=l[6],H=l[10],K=l[14],q=l[3],Se=l[7],O=l[11],ee=l[15];return c[0]=f*z+d*L+m*ue+h*q,c[4]=f*I+d*F+m*de+h*Se,c[8]=f*k+d*ie+m*H+h*O,c[12]=f*U+d*oe+m*K+h*ee,c[1]=_*z+v*L+y*ue+S*q,c[5]=_*I+v*F+y*de+S*Se,c[9]=_*k+v*ie+y*H+S*O,c[13]=_*U+v*oe+y*K+S*ee,c[2]=E*z+b*L+x*ue+g*q,c[6]=E*I+b*F+x*de+g*Se,c[10]=E*k+b*ie+x*H+g*O,c[14]=E*U+b*oe+x*K+g*ee,c[3]=A*z+T*L+R*ue+N*q,c[7]=A*I+T*F+R*de+N*Se,c[11]=A*k+T*ie+R*H+N*O,c[15]=A*U+T*oe+R*K+N*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],h=e[13],_=e[2],v=e[6],y=e[10],S=e[14],E=e[3],b=e[7],x=e[11],g=e[15];return E*(+c*m*v-l*h*v-c*d*y+r*h*y+l*d*S-r*m*S)+b*(+i*m*S-i*h*y+c*f*y-l*f*S+l*h*_-c*m*_)+x*(+i*h*v-i*d*S-c*f*v+r*f*S+c*d*_-r*h*_)+g*(-l*d*_-i*m*v+i*d*y+l*f*v-r*f*y+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],h=e[7],_=e[8],v=e[9],y=e[10],S=e[11],E=e[12],b=e[13],x=e[14],g=e[15],A=v*x*h-b*y*h+b*m*S-d*x*S-v*m*g+d*y*g,T=E*y*h-_*x*h-E*m*S+f*x*S+_*m*g-f*y*g,R=_*b*h-E*v*h+E*d*S-f*b*S-_*d*g+f*v*g,N=E*v*m-_*b*m-E*d*y+f*b*y+_*d*x-f*v*x,z=i*A+r*T+l*R+c*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=A*I,e[1]=(b*y*c-v*x*c-b*l*S+r*x*S+v*l*g-r*y*g)*I,e[2]=(d*x*c-b*m*c+b*l*h-r*x*h-d*l*g+r*m*g)*I,e[3]=(v*m*c-d*y*c-v*l*h+r*y*h+d*l*S-r*m*S)*I,e[4]=T*I,e[5]=(_*x*c-E*y*c+E*l*S-i*x*S-_*l*g+i*y*g)*I,e[6]=(E*m*c-f*x*c-E*l*h+i*x*h+f*l*g-i*m*g)*I,e[7]=(f*y*c-_*m*c+_*l*h-i*y*h-f*l*S+i*m*S)*I,e[8]=R*I,e[9]=(E*v*c-_*b*c-E*r*S+i*b*S+_*r*g-i*v*g)*I,e[10]=(f*b*c-E*d*c+E*r*h-i*b*h-f*r*g+i*d*g)*I,e[11]=(_*d*c-f*v*c-_*r*h+i*v*h+f*r*S-i*d*S)*I,e[12]=N*I,e[13]=(_*b*l-E*v*l+E*r*y-i*b*y-_*r*x+i*v*x)*I,e[14]=(E*d*l-f*b*l-E*r*m+i*b*m+f*r*x-i*d*x)*I,e[15]=(f*v*l-_*d*l+_*r*m-i*v*m-f*r*y+i*d*y)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,d=e.y,m=e.z,h=c*f,_=c*d;return this.set(h*f+r,h*d-l*m,h*m+l*d,0,h*d+l*m,_*d+r,_*m-l*f,0,h*m-l*d,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,h=c+c,_=f+f,v=d+d,y=c*h,S=c*_,E=c*v,b=f*_,x=f*v,g=d*v,A=m*h,T=m*_,R=m*v,N=r.x,z=r.y,I=r.z;return l[0]=(1-(b+g))*N,l[1]=(S+R)*N,l[2]=(E-T)*N,l[3]=0,l[4]=(S-R)*z,l[5]=(1-(y+g))*z,l[6]=(x+A)*z,l[7]=0,l[8]=(E+T)*I,l[9]=(x-A)*I,l[10]=(1-(y+b))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const f=Ms.set(l[4],l[5],l[6]).length(),d=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ti.copy(this);const h=1/c,_=1/f,v=1/d;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=d,this}makePerspective(e,i,r,l,c,f,d=ki,m=!1){const h=this.elements,_=2*c/(i-e),v=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(d===ki)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(d===hu)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,d=ki,m=!1){const h=this.elements,_=2/(i-e),v=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(d===ki)E=-2/(f-c),b=-(f+c)/(f-c);else if(d===hu)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ms=new ae,Ti=new qt,CT=new ae(0,0,0),DT=new ae(1,1,1),ja=new ae,Bc=new ae,ni=new ae,O0=new qt,P0=new Zs;class Wi{constructor(e=0,i=0,r=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],h=l[5],_=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class gy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UT=0;const I0=new ae,Es=new Zs,ua=new qt,zc=new ae,Jo=new ae,LT=new ae,NT=new Zs,B0=new ae(1,0,0),z0=new ae(0,1,0),F0=new ae(0,0,1),H0={type:"added"},OT={type:"removed"},bs={type:"childadded",child:null},Kd={type:"childremoved",child:null};class wn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new ae,i=new Wi,r=new Zs,l=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new ft}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(z0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,i){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(z0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?zc.copy(e):zc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Jo,zc,this.up):ua.lookAt(zc,Jo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(ua),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OT),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,LT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,NT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),h=f(e.textures),_=f(e.images),v=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const h in d){const _=d[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new ae(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ae,fa=new ae,Qd=new ae,da=new ae,Ts=new ae,As=new ae,G0=new ae,Jd=new ae,$d=new ae,eh=new ae,th=new rn,nh=new rn,ih=new rn;class Ri{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ai.subVectors(l,i),fa.subVectors(r,i),Qd.subVectors(e,i);const f=Ai.dot(Ai),d=Ai.dot(fa),m=Ai.dot(Qd),h=fa.dot(fa),_=fa.dot(Qd),v=f*h-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(h*m-d*_)*y,E=(f*_-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,c,f,d,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(f,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return th.setScalar(0),nh.setScalar(0),ih.setScalar(0),th.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(th,c.x),f.addScaledVector(nh,c.y),f.addScaledVector(ih,c.z),f}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),fa.subVectors(e,i),Ai.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ai.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,d;Ts.subVectors(l,r),As.subVectors(c,r),Jd.subVectors(e,r);const m=Ts.dot(Jd),h=As.dot(Jd);if(m<=0&&h<=0)return i.copy(r);$d.subVectors(e,l);const _=Ts.dot($d),v=As.dot($d);if(_>=0&&v<=_)return i.copy(l);const y=m*v-_*h;if(y<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ts,f);eh.subVectors(e,c);const S=Ts.dot(eh),E=As.dot(eh);if(E>=0&&S<=E)return i.copy(c);const b=S*h-m*E;if(b<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(r).addScaledVector(As,d);const x=_*E-S*v;if(x<=0&&v-_>=0&&S-E>=0)return G0.subVectors(c,l),d=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(G0,d);const g=1/(x+b+y);return f=b*g,d=y*g,i.copy(r).addScaledVector(Ts,f).addScaledVector(As,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function ah(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class At{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Dt.workingColorSpace){if(e=Cp(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=ah(f,c,e+1/3),this.g=ah(f,c,e),this.b=ah(f,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=_y[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Dt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,h;const _=(d+f)/2;if(d===f)m=0,h=0;else{const v=f-d;switch(h=_<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ri){Dt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(Fc);const r=al(qa.h,Fc.h,i),l=al(qa.s,Fc.s,i),c=al(qa.l,Fc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new At;At.NAMES=_y;let PT=0;class Qs extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Is,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Th&&(r.blendSrc=this.blendSrc),this.blendDst!==Ah&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mu extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new ae,Hc=new Ut;let IT=0;class _i{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=A0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Hc.fromBufferAttribute(this,i),Hc.applyMatrix3(e),this.setXY(i,Hc.x,Hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ns(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ns(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ns(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ns(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ns(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A0&&(e.usage=this.usage),e}}class vy extends _i{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class yy extends _i{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class oi extends _i{constructor(e,i,r){super(new Float32Array(e),i,r)}}let BT=0;const mi=new qt,rh=new wn,Rs=new ae,ii=new Pr,$o=new Pr,En=new ae;class Li extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hy(e)?yy:vy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];$o.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ii.min,$o.min),ii.expandByPoint(En),En.addVectors(ii.max,$o.max),ii.expandByPoint(En)):(ii.expandByPoint($o.min),ii.expandByPoint($o.max))}ii.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,_=d.count;h<_;h++)En.fromBufferAttribute(d,h),m&&(Rs.fromBufferAttribute(e,h),En.add(Rs)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new ae,m[k]=new ae;const h=new ae,_=new ae,v=new ae,y=new Ut,S=new Ut,E=new Ut,b=new ae,x=new ae;function g(k,U,L){h.fromBufferAttribute(r,k),_.fromBufferAttribute(r,U),v.fromBufferAttribute(r,L),y.fromBufferAttribute(c,k),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,L),_.sub(h),v.sub(h),S.sub(y),E.sub(y);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(F),x.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(F),d[k].add(b),d[U].add(b),d[L].add(b),m[k].add(x),m[U].add(x),m[L].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,U=A.length;k<U;++k){const L=A[k],F=L.start,ie=L.count;for(let oe=F,ue=F+ie;oe<ue;oe+=3)g(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const T=new ae,R=new ae,N=new ae,z=new ae;function I(k){N.fromBufferAttribute(l,k),z.copy(N);const U=d[k];T.copy(U),T.sub(N.multiplyScalar(N.dot(U))).normalize(),R.crossVectors(z,U);const F=R.dot(m[k])<0?-1:1;f.setXYZW(k,T.x,T.y,T.z,F)}for(let k=0,U=A.length;k<U;++k){const L=A[k],F=L.start,ie=L.count;for(let oe=F,ue=F+ie;oe<ue;oe+=3)I(e.getX(oe+0)),I(e.getX(oe+1)),I(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new ae,c=new ae,f=new ae,d=new ae,m=new ae,h=new ae,_=new ae,v=new ae;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),b=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),h.fromBufferAttribute(r,x),d.add(_),m.add(_),h.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const h=d.array,_=d.itemSize,v=d.normalized,y=new h.constructor(m.length*_);let S=0,E=0;for(let b=0,x=m.length;b<x;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*_;for(let g=0;g<_;g++)y[E++]=h[S++]}return new _i(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let _=0,v=h.length;_<v;_++){const y=h[_],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const h=f[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let v=0,y=h.length;v<y;v++){const S=h[v];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],v=c[h];for(let y=0,S=v.length;y<S;y++)_.push(v[y].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,_=f.length;h<_;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V0=new qt,xr=new my,Gc=new Ks,k0=new ae,Vc=new ae,kc=new ae,Xc=new ae,sh=new ae,Wc=new ae,X0=new ae,jc=new ae;class Yn extends wn{constructor(e=new Li,i=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Wc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=d[m],v=c[m];_!==0&&(sh.fromBufferAttribute(v,e),f?Wc.addScaledVector(sh,_):Wc.addScaledVector(sh.sub(i),_))}i.add(Wc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(c),xr.copy(e.ray).recast(e.near),!(Gc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Gc,k0)===null||xr.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(V0.copy(c).invert(),xr.copy(e.ray).applyMatrix4(V0),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],g=f[x.materialIndex],A=Math.max(x.start,S.start),T=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=A,N=T;R<N;R+=3){const z=d.getX(R),I=d.getX(R+1),k=d.getX(R+2);l=qc(this,g,e,r,h,_,v,z,I,k),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=E,g=b;x<g;x+=3){const A=d.getX(x),T=d.getX(x+1),R=d.getX(x+2);l=qc(this,f,e,r,h,_,v,A,T,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],g=f[x.materialIndex],A=Math.max(x.start,S.start),T=Math.min(m.count,Math.min(x.start+x.count,S.start+S.count));for(let R=A,N=T;R<N;R+=3){const z=R,I=R+1,k=R+2;l=qc(this,g,e,r,h,_,v,z,I,k),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let x=E,g=b;x<g;x+=3){const A=x,T=x+1,R=x+2;l=qc(this,f,e,r,h,_,v,A,T,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function zT(a,e,i,r,l,c,f,d){let m;if(e.side===Pn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,e.side===$a,d),m===null)return null;jc.copy(d),jc.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(jc);return h<i.near||h>i.far?null:{distance:h,point:jc.clone(),object:a}}function qc(a,e,i,r,l,c,f,d,m,h){a.getVertexPosition(d,Vc),a.getVertexPosition(m,kc),a.getVertexPosition(h,Xc);const _=zT(a,e,i,r,Vc,kc,Xc,X0);if(_){const v=new ae;Ri.getBarycoord(X0,Vc,kc,Xc,v),l&&(_.uv=Ri.getInterpolatedAttribute(l,d,m,h,v,new Ut)),c&&(_.uv1=Ri.getInterpolatedAttribute(c,d,m,h,v,new Ut)),f&&(_.normal=Ri.getInterpolatedAttribute(f,d,m,h,v,new ae),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:h,normal:new ae,materialIndex:0};Ri.getNormal(Vc,kc,Xc,y.normal),_.face=y,_.barycoord=v}return _}class yl extends Li{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],_=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(h,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(v,2));function E(b,x,g,A,T,R,N,z,I,k,U){const L=R/I,F=N/k,ie=R/2,oe=N/2,ue=z/2,de=I+1,H=k+1;let K=0,q=0;const Se=new ae;for(let O=0;O<H;O++){const ee=O*F-oe;for(let _e=0;_e<de;_e++){const Me=_e*L-ie;Se[b]=Me*A,Se[x]=ee*T,Se[g]=ue,h.push(Se.x,Se.y,Se.z),Se[b]=0,Se[x]=0,Se[g]=z>0?1:-1,_.push(Se.x,Se.y,Se.z),v.push(_e/I),v.push(1-O/k),K+=1}}for(let O=0;O<k;O++)for(let ee=0;ee<I;ee++){const _e=y+ee+de*O,Me=y+ee+de*(O+1),Ce=y+(ee+1)+de*(O+1),ne=y+(ee+1)+de*O;m.push(_e,Me,ne),m.push(Me,Ce,ne),q+=6}d.addGroup(S,q,U),S+=q,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const l=a[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(a){const e={};for(let i=0;i<a.length;i++){const r=ks(a[i]);for(const l in r)e[l]=r[l]}return e}function FT(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function xy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const HT={clone:ks,merge:Hn};var GT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GT,this.fragmentShader=VT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=FT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sy extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new ae,W0=new Ut,j0=new Ut;class gi extends Sy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,i){return this.getViewBounds(e,W0,j0),i.subVectors(j0,W0)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(il*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Cs=1;class kT extends wn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(ws,Cs,e,i);l.layers=this.layers,this.add(l);const c=new gi(ws,Cs,e,i);c.layers=this.layers,this.add(c);const f=new gi(ws,Cs,e,i);f.layers=this.layers,this.add(f);const d=new gi(ws,Cs,e,i);d.layers=this.layers,this.add(d);const m=new gi(ws,Cs,e,i);m.layers=this.layers,this.add(m);const h=new gi(ws,Cs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const h of i)this.remove(h);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,h,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class My extends Vn{constructor(e=[],i=Hs,r,l,c,f,d,m,h,_){super(e,i,r,l,c,f,d,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XT extends Or{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new My(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yl(5,5,5),c=new er({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Qa});c.uniforms.tEquirect.value=i;const f=new Yn(l,c),d=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Gi),new kT(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Dr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const b of e.hand.values()){const x=i.getJointPose(b,r),g=this._getHandJoint(h,b);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=_.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&y>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Dr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jT extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class qT extends Vn{constructor(e=null,i=1,r=1,l,c,f,d,m,h=si,_=si,v,y){super(null,f,d,m,h,_,l,c,v,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class q0 extends _i{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new qt,Y0=new qt,Yc=[],Z0=new Pr,YT=new qt,el=new Yn,tl=new Ks;class K0 extends Yn{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new q0(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,YT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ds),Z0.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Z0)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ks),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ds),tl.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(tl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,f=e*c+1;for(let d=0;d<r.length;d++)r[d]=l[f+d]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(el.geometry=this.geometry,el.material=this.material,el.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(r),e.ray.intersectsSphere(tl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ds),Y0.multiplyMatrices(r,Ds),el.matrixWorld=Y0,el.raycast(e,Yc);for(let f=0,d=Yc.length;f<d;f++){const m=Yc[f];m.instanceId=c,m.object=this,i.push(m)}Yc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new q0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new qT(new Float32Array(l*this.count),l,this.count,Tp,Vi));const c=this.morphTexture.source.data.data;let f=0;for(let h=0;h<r.length;h++)f+=r[h];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*e;c[m]=d,c.set(r,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lh=new ae,ZT=new ae,KT=new ft;class br{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=lh.subVectors(r,i).cross(ZT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||KT.getNormalMatrix(e),l=this.coplanarPoint(lh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Ks,QT=new Ut(.5,.5),Zc=new ae;class Up{constructor(e=new br,i=new br,r=new br,l=new br,c=new br,f=new br){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],h=c[3],_=c[4],v=c[5],y=c[6],S=c[7],E=c[8],b=c[9],x=c[10],g=c[11],A=c[12],T=c[13],R=c[14],N=c[15];if(l[0].setComponents(h-f,S-_,g-E,N-A).normalize(),l[1].setComponents(h+f,S+_,g+E,N+A).normalize(),l[2].setComponents(h+d,S+v,g+b,N+T).normalize(),l[3].setComponents(h-d,S-v,g-b,N-T).normalize(),r)l[4].setComponents(m,y,x,R).normalize(),l[5].setComponents(h-m,S-y,g-x,N-R).normalize();else if(l[4].setComponents(h-m,S-y,g-x,N-R).normalize(),i===ki)l[5].setComponents(h+m,S+y,g+x,N+R).normalize();else if(i===hu)l[5].setComponents(m,y,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const i=QT.distanceTo(e.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Zc.x=l.normal.x>0?e.max.x:e.min.x,Zc.y=l.normal.y>0?e.max.y:e.min.y,Zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ey extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Q0=new qt,up=new my,Kc=new Ks,Qc=new ae;class JT extends wn{constructor(e=new Li,i=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(l),Kc.radius+=c,e.ray.intersectsSphere(Kc)===!1)return;Q0.copy(l).invert(),up.copy(e.ray).applyMatrix4(Q0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=r.index,v=r.attributes.position;if(h!==null){const y=Math.max(0,f.start),S=Math.min(h.count,f.start+f.count);for(let E=y,b=S;E<b;E++){const x=h.getX(E);Qc.fromBufferAttribute(v,x),J0(Qc,x,m,l,e,i,this)}}else{const y=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=y,b=S;E<b;E++)Qc.fromBufferAttribute(v,E),J0(Qc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function J0(a,e,i,r,l,c,f){const d=up.distanceSqToPoint(a);if(d<i){const m=new ae;up.closestPointToPoint(a,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class by extends Vn{constructor(e,i,r=Nr,l,c,f,d=si,m=si,h,_=fl,v=1){if(_!==fl&&_!==dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,f,d,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lp extends Li{constructor(e=1,i=1,r=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],y=[],S=[];let E=0;const b=[],x=r/2;let g=0;A(),f===!1&&(e>0&&T(!0),i>0&&T(!1)),this.setIndex(_),this.setAttribute("position",new oi(v,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(S,2));function A(){const R=new ae,N=new ae;let z=0;const I=(i-e)/r;for(let k=0;k<=c;k++){const U=[],L=k/c,F=L*(i-e)+e;for(let ie=0;ie<=l;ie++){const oe=ie/l,ue=oe*m+d,de=Math.sin(ue),H=Math.cos(ue);N.x=F*de,N.y=-L*r+x,N.z=F*H,v.push(N.x,N.y,N.z),R.set(de,I,H).normalize(),y.push(R.x,R.y,R.z),S.push(oe,1-L),U.push(E++)}b.push(U)}for(let k=0;k<l;k++)for(let U=0;U<c;U++){const L=b[U][k],F=b[U+1][k],ie=b[U+1][k+1],oe=b[U][k+1];(e>0||U!==0)&&(_.push(L,F,oe),z+=3),(i>0||U!==c-1)&&(_.push(F,ie,oe),z+=3)}h.addGroup(g,z,0),g+=z}function T(R){const N=E,z=new Ut,I=new ae;let k=0;const U=R===!0?e:i,L=R===!0?1:-1;for(let ie=1;ie<=l;ie++)v.push(0,x*L,0),y.push(0,L,0),S.push(.5,.5),E++;const F=E;for(let ie=0;ie<=l;ie++){const ue=ie/l*m+d,de=Math.cos(ue),H=Math.sin(ue);I.x=U*H,I.y=x*L,I.z=U*de,v.push(I.x,I.y,I.z),y.push(0,L,0),z.x=de*.5+.5,z.y=H*.5*L+.5,S.push(z.x,z.y),E++}for(let ie=0;ie<l;ie++){const oe=N+ie,ue=F+ie;R===!0?_.push(ue,ue+1,oe):_.push(ue+1,ue,oe),k+=3}h.addGroup(g,k,R===!0?1:2),g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bu extends Li{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),h=d+1,_=m+1,v=e/d,y=i/m,S=[],E=[],b=[],x=[];for(let g=0;g<_;g++){const A=g*y-f;for(let T=0;T<h;T++){const R=T*v-c;E.push(R,-A,0),b.push(0,0,1),x.push(T/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let A=0;A<d;A++){const T=A+h*g,R=A+h*(g+1),N=A+1+h*(g+1),z=A+1+h*g;S.push(T,R,z),S.push(R,N,z)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(b,3)),this.setAttribute("uv",new oi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Os extends Li{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let h=0;const _=[],v=new ae,y=new ae,S=[],E=[],b=[],x=[];for(let g=0;g<=r;g++){const A=[],T=g/r;let R=0;g===0&&f===0?R=.5/i:g===r&&m===Math.PI&&(R=-.5/i);for(let N=0;N<=i;N++){const z=N/i;v.x=-e*Math.cos(l+z*c)*Math.sin(f+T*d),v.y=e*Math.cos(f+T*d),v.z=e*Math.sin(l+z*c)*Math.sin(f+T*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),b.push(y.x,y.y,y.z),x.push(z+R,1-T),A.push(h++)}_.push(A)}for(let g=0;g<r;g++)for(let A=0;A<i;A++){const T=_[g][A+1],R=_[g][A],N=_[g+1][A],z=_[g+1][A+1];(g!==0||f>0)&&S.push(T,R,z),(g!==r-1||m<Math.PI)&&S.push(R,N,z)}this.setIndex(S),this.setAttribute("position",new oi(E,3)),this.setAttribute("normal",new oi(b,3)),this.setAttribute("uv",new oi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $0 extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fy,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $T extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ty extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new qt,ev=new ae,tv=new ae;class t1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;ev.setFromMatrixPosition(e.matrixWorld),i.position.copy(ev),tv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(tv),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ay extends Sy{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class n1 extends t1{constructor(){super(new Ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i1 extends Ty{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new n1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a1 extends Ty{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class r1 extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class s1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function nv(a,e,i,r){const l=o1(r);switch(i){case oy:return a*e;case Tp:return a*e/l.components*l.byteLength;case Ap:return a*e/l.components*l.byteLength;case cy:return a*e*2/l.components*l.byteLength;case Rp:return a*e*2/l.components*l.byteLength;case ly:return a*e*3/l.components*l.byteLength;case wi:return a*e*4/l.components*l.byteLength;case wp:return a*e*4/l.components*l.byteLength;case au:case ru:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case su:case ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Gh:return Math.max(a,16)*Math.max(e,8)/4;case zh:case Hh:return Math.max(a,8)*Math.max(e,8)/2;case Vh:case kh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ep:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case tp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case np:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ip:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case lu:case rp:case sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case uy:case op:return Math.ceil(a/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function o1(a){switch(a){case Xi:case ay:return{byteLength:1,components:1};case cl:case ry:case vl:return{byteLength:2,components:1};case Ep:case bp:return{byteLength:2,components:4};case Nr:case Mp:case Vi:return{byteLength:4,components:1};case sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ry(){let a=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function l1(a){const e=new WeakMap;function i(d,m){const h=d.array,_=d.usage,v=h.byteLength,y=a.createBuffer();a.bindBuffer(m,y),a.bufferData(m,h,_),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,h){const _=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,_);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,v[y]=b)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];a.bufferSubData(h,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:l,remove:c,update:f}}var c1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_R=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:c1,alphahash_pars_fragment:u1,alphamap_fragment:f1,alphamap_pars_fragment:d1,alphatest_fragment:h1,alphatest_pars_fragment:p1,aomap_fragment:m1,aomap_pars_fragment:g1,batching_pars_vertex:_1,batching_vertex:v1,begin_vertex:y1,beginnormal_vertex:x1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:R1,color_fragment:w1,color_pars_fragment:C1,color_pars_vertex:D1,color_vertex:U1,common:L1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:O1,displacementmap_pars_vertex:P1,displacementmap_vertex:I1,emissivemap_fragment:B1,emissivemap_pars_fragment:z1,colorspace_fragment:F1,colorspace_pars_fragment:H1,envmap_fragment:G1,envmap_common_pars_fragment:V1,envmap_pars_fragment:k1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:tA,envmap_vertex:W1,fog_vertex:j1,fog_pars_vertex:q1,fog_fragment:Y1,fog_pars_fragment:Z1,gradientmap_pars_fragment:K1,lightmap_pars_fragment:Q1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:$1,lights_pars_begin:eA,lights_toon_fragment:nA,lights_toon_pars_fragment:iA,lights_phong_fragment:aA,lights_phong_pars_fragment:rA,lights_physical_fragment:sA,lights_physical_pars_fragment:oA,lights_fragment_begin:lA,lights_fragment_maps:cA,lights_fragment_end:uA,logdepthbuf_fragment:fA,logdepthbuf_pars_fragment:dA,logdepthbuf_pars_vertex:hA,logdepthbuf_vertex:pA,map_fragment:mA,map_pars_fragment:gA,map_particle_fragment:_A,map_particle_pars_fragment:vA,metalnessmap_fragment:yA,metalnessmap_pars_fragment:xA,morphinstance_vertex:SA,morphcolor_vertex:MA,morphnormal_vertex:EA,morphtarget_pars_vertex:bA,morphtarget_vertex:TA,normal_fragment_begin:AA,normal_fragment_maps:RA,normal_pars_fragment:wA,normal_pars_vertex:CA,normal_vertex:DA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:LA,clearcoat_normal_fragment_maps:NA,clearcoat_pars_fragment:OA,iridescence_pars_fragment:PA,opaque_fragment:IA,packing:BA,premultiplied_alpha_fragment:zA,project_vertex:FA,dithering_fragment:HA,dithering_pars_fragment:GA,roughnessmap_fragment:VA,roughnessmap_pars_fragment:kA,shadowmap_pars_fragment:XA,shadowmap_pars_vertex:WA,shadowmap_vertex:jA,shadowmask_pars_fragment:qA,skinbase_vertex:YA,skinning_pars_vertex:ZA,skinning_vertex:KA,skinnormal_vertex:QA,specularmap_fragment:JA,specularmap_pars_fragment:$A,tonemapping_fragment:eR,tonemapping_pars_fragment:tR,transmission_fragment:nR,transmission_pars_fragment:iR,uv_pars_fragment:aR,uv_pars_vertex:rR,uv_vertex:sR,worldpos_vertex:oR,background_vert:lR,background_frag:cR,backgroundCube_vert:uR,backgroundCube_frag:fR,cube_vert:dR,cube_frag:hR,depth_vert:pR,depth_frag:mR,distanceRGBA_vert:gR,distanceRGBA_frag:_R,equirect_vert:vR,equirect_frag:yR,linedashed_vert:xR,linedashed_frag:SR,meshbasic_vert:MR,meshbasic_frag:ER,meshlambert_vert:bR,meshlambert_frag:TR,meshmatcap_vert:AR,meshmatcap_frag:RR,meshnormal_vert:wR,meshnormal_frag:CR,meshphong_vert:DR,meshphong_frag:UR,meshphysical_vert:LR,meshphysical_frag:NR,meshtoon_vert:OR,meshtoon_frag:PR,points_vert:IR,points_frag:BR,shadow_vert:zR,shadow_frag:FR,sprite_vert:HR,sprite_frag:GR},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Jc={r:0,b:0,g:0},Mr=new Wi,VR=new qt;function kR(a,e,i,r,l,c,f){const d=new At(0);let m=c===!0?0:1,h,_,v=null,y=0,S=null;function E(T){let R=T.isScene===!0?T.background:null;return R&&R.isTexture&&(R=(T.backgroundBlurriness>0?i:e).get(R)),R}function b(T){let R=!1;const N=E(T);N===null?g(d,m):N&&N.isColor&&(g(N,1),R=!0);const z=a.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(T,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===Eu)?(_===void 0&&(_=new Yn(new yl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:ks(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Mr.copy(R.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(VR.makeRotationFromEuler(Mr)),_.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Vt,(v!==N||y!==N.version||S!==a.toneMapping)&&(_.material.needsUpdate=!0,v=N,y=N.version,S=a.toneMapping),_.layers.enableAll(),T.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Yn(new bu(2,2),new er({name:"BackgroundMaterial",uniforms:ks(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Vt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||y!==N.version||S!==a.toneMapping)&&(h.material.needsUpdate=!0,v=N,y=N.version,S=a.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function g(T,R){T.getRGB(Jc,xy(a)),r.buffers.color.setClear(Jc.r,Jc.g,Jc.b,R,f)}function A(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(T,R=1){d.set(T),m=R,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(T){m=T,g(d,m)},render:b,addToRenderList:x,dispose:A}}function XR(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function d(L,F,ie,oe,ue){let de=!1;const H=v(oe,ie,F);c!==H&&(c=H,h(c.object)),de=S(L,oe,ie,ue),de&&E(L,oe,ie,ue),ue!==null&&e.update(ue,a.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,R(L,F,ie,oe),ue!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return a.createVertexArray()}function h(L){return a.bindVertexArray(L)}function _(L){return a.deleteVertexArray(L)}function v(L,F,ie){const oe=ie.wireframe===!0;let ue=r[L.id];ue===void 0&&(ue={},r[L.id]=ue);let de=ue[F.id];de===void 0&&(de={},ue[F.id]=de);let H=de[oe];return H===void 0&&(H=y(m()),de[oe]=H),H}function y(L){const F=[],ie=[],oe=[];for(let ue=0;ue<i;ue++)F[ue]=0,ie[ue]=0,oe[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:oe,object:L,attributes:{},index:null}}function S(L,F,ie,oe){const ue=c.attributes,de=F.attributes;let H=0;const K=ie.getAttributes();for(const q in K)if(K[q].location>=0){const O=ue[q];let ee=de[q];if(ee===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;H++}return c.attributesNum!==H||c.index!==oe}function E(L,F,ie,oe){const ue={},de=F.attributes;let H=0;const K=ie.getAttributes();for(const q in K)if(K[q].location>=0){let O=de[q];O===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),ue[q]=ee,H++}c.attributes=ue,c.attributesNum=H,c.index=oe}function b(){const L=c.newAttributes;for(let F=0,ie=L.length;F<ie;F++)L[F]=0}function x(L){g(L,0)}function g(L,F){const ie=c.newAttributes,oe=c.enabledAttributes,ue=c.attributeDivisors;ie[L]=1,oe[L]===0&&(a.enableVertexAttribArray(L),oe[L]=1),ue[L]!==F&&(a.vertexAttribDivisor(L,F),ue[L]=F)}function A(){const L=c.newAttributes,F=c.enabledAttributes;for(let ie=0,oe=F.length;ie<oe;ie++)F[ie]!==L[ie]&&(a.disableVertexAttribArray(ie),F[ie]=0)}function T(L,F,ie,oe,ue,de,H){H===!0?a.vertexAttribIPointer(L,F,ie,ue,de):a.vertexAttribPointer(L,F,ie,oe,ue,de)}function R(L,F,ie,oe){b();const ue=oe.attributes,de=ie.getAttributes(),H=F.defaultAttributeValues;for(const K in de){const q=de[K];if(q.location>=0){let Se=ue[K];if(Se===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),Se!==void 0){const O=Se.normalized,ee=Se.itemSize,_e=e.get(Se);if(_e===void 0)continue;const Me=_e.buffer,Ce=_e.type,ne=_e.bytesPerElement,pe=Ce===a.INT||Ce===a.UNSIGNED_INT||Se.gpuType===Mp;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,Ne=Ee.stride,je=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)g(q.location+Ve,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)x(q.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let Ve=0;Ve<q.locationSize;Ve++)T(q.location+Ve,ee/q.locationSize,Ce,O,Ne*ne,(je+ee/q.locationSize*Ve)*ne,pe)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<q.locationSize;Ee++)g(q.location+Ee,Se.meshPerAttribute);L.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)x(q.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let Ee=0;Ee<q.locationSize;Ee++)T(q.location+Ee,ee/q.locationSize,Ce,O,ee*ne,ee/q.locationSize*Ee*ne,pe)}}else if(H!==void 0){const O=H[K];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(q.location,O);break;case 3:a.vertexAttrib3fv(q.location,O);break;case 4:a.vertexAttrib4fv(q.location,O);break;default:a.vertexAttrib1fv(q.location,O)}}}}A()}function N(){k();for(const L in r){const F=r[L];for(const ie in F){const oe=F[ie];for(const ue in oe)_(oe[ue].object),delete oe[ue];delete F[ie]}delete r[L]}}function z(L){if(r[L.id]===void 0)return;const F=r[L.id];for(const ie in F){const oe=F[ie];for(const ue in oe)_(oe[ue].object),delete oe[ue];delete F[ie]}delete r[L.id]}function I(L){for(const F in r){const ie=r[F];if(ie[L.id]===void 0)continue;const oe=ie[L.id];for(const ue in oe)_(oe[ue].object),delete oe[ue];delete ie[L.id]}}function k(){U(),f=!0,c!==l&&(c=l,h(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:x,disableUnusedAttributes:A}}function WR(a,e,i){let r;function l(h){r=h}function c(h,_){a.drawArrays(r,h,_),i.update(_,r,1)}function f(h,_,v){v!==0&&(a.drawArraysInstanced(r,h,_,v),i.update(_,r,v))}function d(h,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,r,1)}function m(h,_,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)f(h[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,_,0,y,0,v);let E=0;for(let b=0;b<v;b++)E+=_[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jR(a,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==wi&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const k=I===vl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Xi&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!k)}function m(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),A=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,z=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:R,vertexTextures:N,maxSamples:z}}function qR(a){const e=this;let i=null,r=0,l=!1,c=!1;const f=new br,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||l;return l=y,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,g=a.get(v);if(!l||E===null||E.length===0||c&&!x)c?_(null):h();else{const A=c?0:r,T=A*4;let R=g.clippingState||null;m.value=R,R=_(E,y,T,S);for(let N=0;N!==T;++N)R[N]=i[N];g.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,y,S,E){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const g=S+b*4,A=y.matrixWorldInverse;d.getNormalMatrix(A),(x===null||x.length<g)&&(x=new Float32Array(g));for(let T=0,R=S;T!==b;++T,R+=4)f.copy(v[T]).applyMatrix4(A,d),f.normal.toArray(x,R),x[R+3]=f.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function YR(a){let e=new WeakMap;function i(f,d){return d===Oh?f.mapping=Hs:d===Ph&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Oh||d===Ph)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new XT(m.height);return h.fromEquirectangularTexture(a,f),e.set(f,h),f.addEventListener("dispose",l),i(h.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ps=4,iv=[.125,.215,.35,.446,.526,.582],Rr=20,uh=new Ay,av=new At;let fh=null,dh=0,hh=0,ph=!1;const Tr=(1+Math.sqrt(5))/2,Us=1/Tr,rv=[new ae(-Tr,Us,0),new ae(Tr,Us,0),new ae(-Us,0,Tr),new ae(Us,0,Tr),new ae(0,Tr,-Us),new ae(0,Tr,Us),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)],ZR=new ae;class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=ZR}=c;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,$c(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:vl,format:wi,colorSpace:Vs,depthBuffer:!1},l=ov(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KR(c)),this._blurMaterial=QR(c,e,i)}return l}_compileMaterial(e){const i=new Yn(this._lodPlanes[0],e);this._renderer.compile(i,uh)}_sceneToCubeUV(e,i,r,l,c){const m=new gi(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(av),v.toneMapping=Ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new mu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),x=new Yn(new yl,b);let g=!1;const A=e.background;A?A.isColor&&(b.color.copy(A),e.background=null,g=!0):(b.color.copy(av),g=!0);for(let T=0;T<6;T++){const R=T%3;R===0?(m.up.set(0,h[T],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[T],c.y,c.z)):R===1?(m.up.set(0,0,h[T]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[T],c.z)):(m.up.set(0,h[T],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[T]));const N=this._cubeSize;$c(l,R*N,T>2?N:0,N,N),v.setRenderTarget(l),g&&v.render(x,m),v.render(e,m)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=A}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Hs||e.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Yn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;$c(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,uh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=rv[(l-c-1)%rv.length];this._blur(e,c-1,c,f,d)}i.autoClear=r}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,d){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Yn(this._lodPlanes[l],h),y=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Rr-1),b=c/E,x=isFinite(c)?1+Math.floor(_*b):Rr;x>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Rr}`);const g=[];let A=0;for(let I=0;I<Rr;++I){const k=I/b,U=Math.exp(-k*k/2);g.push(U),I===0?A+=U:I<x&&(A+=2*U)}for(let I=0;I<g.length;I++)g[I]=g[I]/A;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=g,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:T}=this;y.dTheta.value=E,y.mipInt.value=T-r;const R=this._sizeLods[l],N=3*R*(l>T-Ps?l-T+Ps:0),z=4*(this._cubeSize-R);$c(i,N,z,3*R,2*R),m.setRenderTarget(i),m.render(v,uh)}}function KR(a){const e=[],i=[],r=[];let l=a;const c=a-Ps+1+iv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>a-Ps?m=iv[f-a+Ps-1]:f===0&&(m=0),r.push(m);const h=1/(d-2),_=-h,v=1+h,y=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,b=3,x=2,g=1,A=new Float32Array(b*E*S),T=new Float32Array(x*E*S),R=new Float32Array(g*E*S);for(let z=0;z<S;z++){const I=z%3*2/3-1,k=z>2?0:-1,U=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];A.set(U,b*E*z),T.set(y,x*E*z);const L=[z,z,z,z,z,z];R.set(L,g*E*z)}const N=new Li;N.setAttribute("position",new _i(A,b)),N.setAttribute("uv",new _i(T,x)),N.setAttribute("faceIndex",new _i(R,g)),e.push(N),l>Ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function ov(a,e,i){const r=new Or(a,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $c(a,e,i,r,l){a.viewport.set(e,i,r,l),a.scissor.set(e,i,r,l)}function QR(a,e,i){const r=new Float32Array(Rr),l=new ae(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function lv(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function cv(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JR(a){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,h=m===Oh||m===Ph,_=m===Hs||m===Gs;if(h||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new sv(a)),v=h?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return h&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new sv(a)),v=h?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const h=6;for(let _=0;_<h;_++)d[_]!==void 0&&m++;return m===h}function c(d){const m=d.target;m.removeEventListener("dispose",c);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function $R(a){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ew(a,e,i,r){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)e.update(y[S],a.ARRAY_BUFFER)}function h(v){const y=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const A=S.array;b=S.version;for(let T=0,R=A.length;T<R;T+=3){const N=A[T+0],z=A[T+1],I=A[T+2];y.push(N,z,z,I,I,N)}}else if(E!==void 0){const A=E.array;b=E.version;for(let T=0,R=A.length/3-1;T<R;T+=3){const N=T+0,z=T+1,I=T+2;y.push(N,z,z,I,I,N)}}else return;const x=new(hy(y)?yy:vy)(y,1);x.version=b;const g=c.get(v);g&&e.remove(g),c.set(v,x)}function _(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function tw(a,e,i){let r;function l(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,S){a.drawElements(r,S,c,y*f),i.update(S,r,1)}function h(y,S,E){E!==0&&(a.drawElementsInstanced(r,S,c,y*f,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let x=0;for(let g=0;g<E;g++)x+=S[g];i.update(x,r,1)}function v(y,S,E,b){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y.length;g++)h(y[g]/f,S[g],b[g]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,b,0,E);let g=0;for(let A=0;A<E;A++)g+=S[A]*b[A];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function nw(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iw(a,e,i){const r=new WeakMap,l=new rn;function c(f,d,m){const h=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let L=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",L)};var S=L;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),x===!0&&(R=3);let N=d.attributes.position.count*R,z=1;N>e.maxTextureSize&&(z=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*z*4*v),k=new py(I,N,z,v);k.type=Vi,k.needsUpdate=!0;const U=R*4;for(let F=0;F<v;F++){const ie=g[F],oe=A[F],ue=T[F],de=N*z*4*F;for(let H=0;H<ie.count;H++){const K=H*U;E===!0&&(l.fromBufferAttribute(ie,H),I[de+K+0]=l.x,I[de+K+1]=l.y,I[de+K+2]=l.z,I[de+K+3]=0),b===!0&&(l.fromBufferAttribute(oe,H),I[de+K+4]=l.x,I[de+K+5]=l.y,I[de+K+6]=l.z,I[de+K+7]=0),x===!0&&(l.fromBufferAttribute(ue,H),I[de+K+8]=l.x,I[de+K+9]=l.y,I[de+K+10]=l.z,I[de+K+11]=ue.itemSize===4?l.w:1)}}y={count:v,texture:k,size:new Ut(N,z)},r.set(d,y),d.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:c}}function aw(a,e,i,r){let l=new WeakMap;function c(m){const h=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==h&&(e.update(v),l.set(v,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==h&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,h))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==h&&(y.update(),l.set(y,h))}return v}function f(){l=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:c,dispose:f}}const wy=new Vn,uv=new by(1,1),Cy=new py,Dy=new RT,Uy=new My,fv=[],dv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Js(a,e,i){const r=a[0];if(r<=0||r>0)return a;const l=e*i;let c=fv[l];if(c===void 0&&(c=new Float32Array(l),fv[l]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(c,d)}return c}function _n(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function vn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Tu(a,e){let i=dv[e];i===void 0&&(i=new Int32Array(e),dv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function rw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function sw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;a.uniform2fv(this.addr,e),vn(i,e)}}function ow(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;a.uniform3fv(this.addr,e),vn(i,e)}}function lw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;a.uniform4fv(this.addr,e),vn(i,e)}}function cw(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;mv.set(r),a.uniformMatrix2fv(this.addr,!1,mv),vn(i,r)}}function uw(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;pv.set(r),a.uniformMatrix3fv(this.addr,!1,pv),vn(i,r)}}function fw(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,r))return;hv.set(r),a.uniformMatrix4fv(this.addr,!1,hv),vn(i,r)}}function dw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function hw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;a.uniform2iv(this.addr,e),vn(i,e)}}function pw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;a.uniform3iv(this.addr,e),vn(i,e)}}function mw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;a.uniform4iv(this.addr,e),vn(i,e)}}function gw(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function _w(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;a.uniform2uiv(this.addr,e),vn(i,e)}}function vw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;a.uniform3uiv(this.addr,e),vn(i,e)}}function yw(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;a.uniform4uiv(this.addr,e),vn(i,e)}}function xw(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(uv.compareFunction=dy,c=uv):c=wy,i.setTexture2D(e||c,l)}function Sw(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Dy,l)}function Mw(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Uy,l)}function Ew(a,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Cy,l)}function bw(a){switch(a){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return hw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return _w;case 36295:return vw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Ew}}function Tw(a,e){a.uniform1fv(this.addr,e)}function Aw(a,e){const i=Js(e,this.size,2);a.uniform2fv(this.addr,i)}function Rw(a,e){const i=Js(e,this.size,3);a.uniform3fv(this.addr,i)}function ww(a,e){const i=Js(e,this.size,4);a.uniform4fv(this.addr,i)}function Cw(a,e){const i=Js(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function Dw(a,e){const i=Js(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function Uw(a,e){const i=Js(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function Lw(a,e){a.uniform1iv(this.addr,e)}function Nw(a,e){a.uniform2iv(this.addr,e)}function Ow(a,e){a.uniform3iv(this.addr,e)}function Pw(a,e){a.uniform4iv(this.addr,e)}function Iw(a,e){a.uniform1uiv(this.addr,e)}function Bw(a,e){a.uniform2uiv(this.addr,e)}function zw(a,e){a.uniform3uiv(this.addr,e)}function Fw(a,e){a.uniform4uiv(this.addr,e)}function Hw(a,e,i){const r=this.cache,l=e.length,c=Tu(i,l);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||wy,c[f])}function Gw(a,e,i){const r=this.cache,l=e.length,c=Tu(i,l);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Dy,c[f])}function Vw(a,e,i){const r=this.cache,l=e.length,c=Tu(i,l);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Uy,c[f])}function kw(a,e,i){const r=this.cache,l=e.length,c=Tu(i,l);_n(r,c)||(a.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Cy,c[f])}function Xw(a){switch(a){case 5126:return Tw;case 35664:return Aw;case 35665:return Rw;case 35666:return ww;case 35674:return Cw;case 35675:return Dw;case 35676:return Uw;case 5124:case 35670:return Lw;case 35667:case 35671:return Nw;case 35668:case 35672:return Ow;case 35669:case 35673:return Pw;case 5125:return Iw;case 36294:return Bw;case 36295:return zw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return kw}}class Ww{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bw(i.type)}}class jw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Xw(i.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function gv(a,e){a.seq.push(e),a.map[e.id]=e}function Yw(a,e,i){const r=a.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),f=mh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&f+2===l){gv(i,h===void 0?new Ww(d,a,e):new jw(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new qw(d),gv(i,v)),i=v}}}class cu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);Yw(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function _v(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const Zw=37297;let Kw=0;function Qw(a,e){const i=a.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const vv=new ft;function Jw(a){Dt._getMatrix(vv,Dt.workingColorSpace,a);const e=`mat3( ${vv.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(a)){case du:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function yv(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Qw(a.getShaderSource(e),d)}else return c}function $w(a,e){const i=Jw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eC(a,e){let i;switch(e){case Hb:i="Linear";break;case Gb:i="Reinhard";break;case Vb:i="Cineon";break;case kb:i="ACESFilmic";break;case Wb:i="AgX";break;case jb:i="Neutral";break;case Xb:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const eu=new ae;function tC(){Dt.getLuminanceCoefficients(eu);const a=eu.x.toFixed(4),e=eu.y.toFixed(4),i=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function iC(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function aC(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(e,l),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function nl(a){return a!==""}function xv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rC=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(a){return a.replace(rC,oC)}const sC=new Map;function oC(a,e){let i=pt[e];if(i===void 0){const r=sC.get(e);if(r!==void 0)i=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return fp(i)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(a){return a.replace(lC,cC)}function cC(a,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ev(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uC(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ty?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===yb?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function fC(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dC(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function hC(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ny:e="ENVMAP_BLENDING_MULTIPLY";break;case zb:e="ENVMAP_BLENDING_MIX";break;case Fb:e="ENVMAP_BLENDING_ADD";break}return e}function pC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function mC(a,e,i,r){const l=a.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=uC(i),h=fC(i),_=dC(i),v=hC(i),y=pC(i),S=nC(i),E=iC(c),b=l.createProgram();let x,g,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),g.length>0&&(g+=`
`)):(x=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),g=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ja?eC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,$w("linearToOutputTexel",i.outputColorSpace),tC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),f=fp(f),f=xv(f,i),f=Sv(f,i),d=fp(d),d=xv(d,i),d=Sv(d,i),f=Mv(f),d=Mv(d),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===w0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=A+x+f,R=A+g+d,N=_v(l,l.VERTEX_SHADER,T),z=_v(l,l.FRAGMENT_SHADER,R);l.attachShader(b,N),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(F){if(a.debug.checkShaderErrors){const ie=l.getProgramInfoLog(b)||"",oe=l.getShaderInfoLog(N)||"",ue=l.getShaderInfoLog(z)||"",de=ie.trim(),H=oe.trim(),K=ue.trim();let q=!0,Se=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,N,z);else{const O=yv(l,N,"vertex"),ee=yv(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+de+`
`+O+`
`+ee)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(H===""||K==="")&&(Se=!1);Se&&(F.diagnostics={runnable:q,programLog:de,vertexShader:{log:H,prefix:x},fragmentShader:{log:K,prefix:g}})}l.deleteShader(N),l.deleteShader(z),k=new cu(l,b),U=aC(l,b)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(b,Zw)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Kw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let gC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new vC(e),i.set(e,r)),r}}class vC{constructor(e){this.id=gC++,this.code=e,this.usedTimes=0}}function yC(a,e,i,r,l,c,f){const d=new gy,m=new _C,h=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return h.add(U),U===0?"uv":`uv${U}`}function x(U,L,F,ie,oe){const ue=ie.fog,de=oe.geometry,H=U.isMeshStandardMaterial?ie.environment:null,K=(U.isMeshStandardMaterial?i:e).get(U.envMap||H),q=K&&K.mapping===Eu?K.image.height:null,Se=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const O=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=O!==void 0?O.length:0;let _e=0;de.morphAttributes.position!==void 0&&(_e=1),de.morphAttributes.normal!==void 0&&(_e=2),de.morphAttributes.color!==void 0&&(_e=3);let Me,Ce,ne,pe;if(Se){const Tt=Hi[Se];Me=Tt.vertexShader,Ce=Tt.fragmentShader}else Me=U.vertexShader,Ce=U.fragmentShader,m.update(U),ne=m.getVertexShaderID(U),pe=m.getFragmentShaderID(U);const Ee=a.getRenderTarget(),Ne=a.state.buffers.depth.getReversed(),je=oe.isInstancedMesh===!0,Ve=oe.isBatchedMesh===!0,Et=!!U.map,mt=!!U.matcap,X=!!K,Rt=!!U.aoMap,Qe=!!U.lightMap,St=!!U.bumpMap,He=!!U.normalMap,tt=!!U.displacementMap,be=!!U.emissiveMap,nt=!!U.metalnessMap,Ot=!!U.roughnessMap,Lt=U.anisotropy>0,P=U.clearcoat>0,w=U.dispersion>0,J=U.iridescence>0,he=U.sheen>0,ve=U.transmission>0,fe=Lt&&!!U.anisotropyMap,ze=P&&!!U.clearcoatMap,De=P&&!!U.clearcoatNormalMap,qe=P&&!!U.clearcoatRoughnessMap,Ze=J&&!!U.iridescenceMap,Te=J&&!!U.iridescenceThicknessMap,Pe=he&&!!U.sheenColorMap,Je=he&&!!U.sheenRoughnessMap,We=!!U.specularMap,Le=!!U.specularColorMap,ct=!!U.specularIntensityMap,j=ve&&!!U.transmissionMap,we=ve&&!!U.thicknessMap,Ue=!!U.gradientMap,Fe=!!U.alphaMap,Ae=U.alphaTest>0,xe=!!U.alphaHash,Xe=!!U.extensions;let ot=Ja;U.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ot=a.toneMapping);const Pt={shaderID:Se,shaderType:U.type,shaderName:U.name,vertexShader:Me,fragmentShader:Ce,defines:U.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&oe._colorsTexture!==null,instancing:je,instancingColor:je&&oe.instanceColor!==null,instancingMorph:je&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Vs,alphaToCoverage:!!U.alphaToCoverage,map:Et,matcap:mt,envMap:X,envMapMode:X&&K.mapping,envMapCubeUVHeight:q,aoMap:Rt,lightMap:Qe,bumpMap:St,normalMap:He,displacementMap:y&&tt,emissiveMap:be,normalMapObjectSpace:He&&U.normalMapType===Kb,normalMapTangentSpace:He&&U.normalMapType===fy,metalnessMap:nt,roughnessMap:Ot,anisotropy:Lt,anisotropyMap:fe,clearcoat:P,clearcoatMap:ze,clearcoatNormalMap:De,clearcoatRoughnessMap:qe,dispersion:w,iridescence:J,iridescenceMap:Ze,iridescenceThicknessMap:Te,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Le,specularIntensityMap:ct,transmission:ve,transmissionMap:j,thicknessMap:we,gradientMap:Ue,opaque:U.transparent===!1&&U.blending===Is&&U.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ae,alphaHash:xe,combine:U.combine,mapUv:Et&&b(U.map.channel),aoMapUv:Rt&&b(U.aoMap.channel),lightMapUv:Qe&&b(U.lightMap.channel),bumpMapUv:St&&b(U.bumpMap.channel),normalMapUv:He&&b(U.normalMap.channel),displacementMapUv:tt&&b(U.displacementMap.channel),emissiveMapUv:be&&b(U.emissiveMap.channel),metalnessMapUv:nt&&b(U.metalnessMap.channel),roughnessMapUv:Ot&&b(U.roughnessMap.channel),anisotropyMapUv:fe&&b(U.anisotropyMap.channel),clearcoatMapUv:ze&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Je&&b(U.sheenRoughnessMap.channel),specularMapUv:We&&b(U.specularMap.channel),specularColorMapUv:Le&&b(U.specularColorMap.channel),specularIntensityMapUv:ct&&b(U.specularIntensityMap.channel),transmissionMapUv:j&&b(U.transmissionMap.channel),thicknessMapUv:we&&b(U.thicknessMap.channel),alphaMapUv:Fe&&b(U.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(He||Lt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(Et||Fe),fog:!!ue,useFog:U.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:_e,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:ot,decodeVideoTexture:Et&&U.map.isVideoTexture===!0&&Dt.getTransfer(U.map.colorSpace)===Vt,decodeVideoTextureEmissive:be&&U.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(U.emissiveMap.colorSpace)===Vt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===pa,flipSided:U.side===Pn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Xe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&U.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function g(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)L.push(F),L.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(A(L,U),T(L,U),L.push(a.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function A(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function T(U,L){d.disableAll(),L.supportsVertexTextures&&d.enable(0),L.instancing&&d.enable(1),L.instancingColor&&d.enable(2),L.instancingMorph&&d.enable(3),L.matcap&&d.enable(4),L.envMap&&d.enable(5),L.normalMapObjectSpace&&d.enable(6),L.normalMapTangentSpace&&d.enable(7),L.clearcoat&&d.enable(8),L.iridescence&&d.enable(9),L.alphaTest&&d.enable(10),L.vertexColors&&d.enable(11),L.vertexAlphas&&d.enable(12),L.vertexUv1s&&d.enable(13),L.vertexUv2s&&d.enable(14),L.vertexUv3s&&d.enable(15),L.vertexTangents&&d.enable(16),L.anisotropy&&d.enable(17),L.alphaHash&&d.enable(18),L.batching&&d.enable(19),L.dispersion&&d.enable(20),L.batchingColor&&d.enable(21),L.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),U.push(d.mask)}function R(U){const L=E[U.type];let F;if(L){const ie=Hi[L];F=HT.clone(ie.uniforms)}else F=U.uniforms;return F}function N(U,L){let F;for(let ie=0,oe=_.length;ie<oe;ie++){const ue=_[ie];if(ue.cacheKey===L){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new mC(a,L,U,c),_.push(F)),F}function z(U){if(--U.usedTimes===0){const L=_.indexOf(U);_[L]=_[_.length-1],_.pop(),U.destroy()}}function I(U){m.remove(U)}function k(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:N,releaseProgram:z,releaseShaderCache:I,programs:_,dispose:k}}function xC(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function l(f,d,m){a.get(f)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function SC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function bv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Tv(){const a=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(v,y,S,E,b,x){let g=a[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:x},a[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=S,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=b,g.group=x),e++,g}function d(v,y,S,E,b,x){const g=f(v,y,S,E,b,x);S.transmission>0?r.push(g):S.transparent===!0?l.push(g):i.push(g)}function m(v,y,S,E,b,x){const g=f(v,y,S,E,b,x);S.transmission>0?r.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function h(v,y){i.length>1&&i.sort(v||SC),r.length>1&&r.sort(y||bv),l.length>1&&l.sort(y||bv)}function _(){for(let v=e,y=a.length;v<y;v++){const S=a[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:h}}function MC(){let a=new WeakMap;function e(r,l){const c=a.get(r);let f;return c===void 0?(f=new Tv,a.set(r,[f])):l>=c.length?(f=new Tv,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function EC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new At};break;case"SpotLight":i={position:new ae,direction:new ae,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=i,i}}}function bC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let TC=0;function AC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function RC(a){const e=new EC,i=bC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const l=new ae,c=new qt,f=new qt;function d(h){let _=0,v=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,b=0,x=0,g=0,A=0,T=0,R=0,N=0,z=0,I=0;h.sort(AC);for(let U=0,L=h.length;U<L;U++){const F=h[U],ie=F.color,oe=F.intensity,ue=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ie.r*oe,v+=ie.g*oe,y+=ie.b*oe;else if(F.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(F.sh.coefficients[H],oe);I++}else if(F.isDirectionalLight){const H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,q=i.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=F.shadow.matrix,A++}r.directional[S]=H,S++}else if(F.isSpotLight){const H=e.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(ie).multiplyScalar(oe),H.distance=ue,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,r.spot[b]=H;const K=F.shadow;if(F.map&&(r.spotLightMap[N]=F.map,N++,K.updateMatrices(F),F.castShadow&&z++),r.spotLightMatrix[b]=K.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=de,R++}b++}else if(F.isRectAreaLight){const H=e.get(F);H.color.copy(ie).multiplyScalar(oe),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=H,x++}else if(F.isPointLight){const H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),H.distance=F.distance,H.decay=F.decay,F.castShadow){const K=F.shadow,q=i.get(F);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=F.shadow.matrix,T++}r.point[E]=H,E++}else if(F.isHemisphereLight){const H=e.get(F);H.skyColor.copy(F.color).multiplyScalar(oe),H.groundColor.copy(F.groundColor).multiplyScalar(oe),r.hemi[g]=H,g++}}x>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==x||k.hemiLength!==g||k.numDirectionalShadows!==A||k.numPointShadows!==T||k.numSpotShadows!==R||k.numSpotMaps!==N||k.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=x,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+N-z,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=I,k.directionalLength=S,k.pointLength=E,k.spotLength=b,k.rectAreaLength=x,k.hemiLength=g,k.numDirectionalShadows=A,k.numPointShadows=T,k.numSpotShadows=R,k.numSpotMaps=N,k.numLightProbes=I,r.version=TC++)}function m(h,_){let v=0,y=0,S=0,E=0,b=0;const x=_.matrixWorldInverse;for(let g=0,A=h.length;g<A;g++){const T=h[g];if(T.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),v++}else if(T.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(T.matrixWorld),l.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),S++}else if(T.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),f.identity(),c.copy(T.matrixWorld),c.premultiply(x),f.extractRotation(c),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(T.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(x),y++}else if(T.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(x),b++}}}return{setup:d,setupView:m,state:r}}function Av(a){const e=new RC(a),i=[],r=[];function l(_){h.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function wC(a){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new Av(a),e.set(l,[d])):c>=f.length?(d=new Av(a),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const CC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UC(a,e,i){let r=new Up;const l=new Ut,c=new Ut,f=new rn,d=new $T({depthPacking:Zb}),m=new e1,h={},_=i.maxTextureSize,v={[$a]:Pn,[Pn]:$a,[pa]:pa},y=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:CC,fragmentShader:DC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Li;E.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Yn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ty;let g=this.type;this.render=function(z,I,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const U=a.getRenderTarget(),L=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),ie=a.state;ie.setBlending(Qa),ie.buffers.depth.getReversed()?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const oe=g!==ha&&this.type===ha,ue=g===ha&&this.type!==ha;for(let de=0,H=z.length;de<H;de++){const K=z[de],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Se=q.getFrameExtents();if(l.multiply(Se),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Se.x),l.x=c.x*Se.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Se.y),l.y=c.y*Se.y,q.mapSize.y=c.y)),q.map===null||oe===!0||ue===!0){const ee=this.type!==ha?{minFilter:si,magFilter:si}:{};q.map!==null&&q.map.dispose(),q.map=new Or(l.x,l.y,ee),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const O=q.getViewportCount();for(let ee=0;ee<O;ee++){const _e=q.getViewport(ee);f.set(c.x*_e.x,c.y*_e.y,c.x*_e.z,c.y*_e.w),ie.viewport(f),q.updateMatrices(K,ee),r=q.getFrustum(),R(I,k,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ha&&A(q,k),q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,a.setRenderTarget(U,L,F)};function A(z,I){const k=e.update(b);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Or(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(I,null,k,y,b,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(I,null,k,S,b,null)}function T(z,I,k,U){let L=null;const F=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)L=F;else if(L=k.isPointLight===!0?m:d,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ie=L.uuid,oe=I.uuid;let ue=h[ie];ue===void 0&&(ue={},h[ie]=ue);let de=ue[oe];de===void 0&&(de=L.clone(),ue[oe]=de,I.addEventListener("dispose",N)),L=de}if(L.visible=I.visible,L.wireframe=I.wireframe,U===ha?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:v[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,k.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ie=a.properties.get(L);ie.light=k}return L}function R(z,I,k,U,L){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===ha)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const oe=e.update(z),ue=z.material;if(Array.isArray(ue)){const de=oe.groups;for(let H=0,K=de.length;H<K;H++){const q=de[H],Se=ue[q.materialIndex];if(Se&&Se.visible){const O=T(z,Se,U,L);z.onBeforeShadow(a,z,I,k,oe,O,q),a.renderBufferDirect(k,null,oe,O,z,q),z.onAfterShadow(a,z,I,k,oe,O,q)}}}else if(ue.visible){const de=T(z,ue,U,L);z.onBeforeShadow(a,z,I,k,oe,de,null),a.renderBufferDirect(k,null,oe,de,z,null),z.onAfterShadow(a,z,I,k,oe,de,null)}}const ie=z.children;for(let oe=0,ue=ie.length;oe<ue;oe++)R(ie[oe],I,k,U,L)}function N(z){z.target.removeEventListener("dispose",N);for(const k in h){const U=h[k],L=z.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const LC={[Rh]:wh,[Ch]:Lh,[Dh]:Nh,[Fs]:Uh,[wh]:Rh,[Lh]:Ch,[Nh]:Dh,[Uh]:Fs};function NC(a,e){function i(){let j=!1;const we=new rn;let Ue=null;const Fe=new rn(0,0,0,0);return{setMask:function(Ae){Ue!==Ae&&!j&&(a.colorMask(Ae,Ae,Ae,Ae),Ue=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,xe,Xe,ot,Pt){Pt===!0&&(Ae*=ot,xe*=ot,Xe*=ot),we.set(Ae,xe,Xe,ot),Fe.equals(we)===!1&&(a.clearColor(Ae,xe,Xe,ot),Fe.copy(we))},reset:function(){j=!1,Ue=null,Fe.set(-1,0,0,0)}}}function r(){let j=!1,we=!1,Ue=null,Fe=null,Ae=null;return{setReversed:function(xe){if(we!==xe){const Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),we=xe;const ot=Ae;Ae=null,this.setClear(ot)}},getReversed:function(){return we},setTest:function(xe){xe?Ee(a.DEPTH_TEST):Ne(a.DEPTH_TEST)},setMask:function(xe){Ue!==xe&&!j&&(a.depthMask(xe),Ue=xe)},setFunc:function(xe){if(we&&(xe=LC[xe]),Fe!==xe){switch(xe){case Rh:a.depthFunc(a.NEVER);break;case wh:a.depthFunc(a.ALWAYS);break;case Ch:a.depthFunc(a.LESS);break;case Fs:a.depthFunc(a.LEQUAL);break;case Dh:a.depthFunc(a.EQUAL);break;case Uh:a.depthFunc(a.GEQUAL);break;case Lh:a.depthFunc(a.GREATER);break;case Nh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Ae!==xe&&(we&&(xe=1-xe),a.clearDepth(xe),Ae=xe)},reset:function(){j=!1,Ue=null,Fe=null,Ae=null,we=!1}}}function l(){let j=!1,we=null,Ue=null,Fe=null,Ae=null,xe=null,Xe=null,ot=null,Pt=null;return{setTest:function(Tt){j||(Tt?Ee(a.STENCIL_TEST):Ne(a.STENCIL_TEST))},setMask:function(Tt){we!==Tt&&!j&&(a.stencilMask(Tt),we=Tt)},setFunc:function(Tt,yi,dn){(Ue!==Tt||Fe!==yi||Ae!==dn)&&(a.stencilFunc(Tt,yi,dn),Ue=Tt,Fe=yi,Ae=dn)},setOp:function(Tt,yi,dn){(xe!==Tt||Xe!==yi||ot!==dn)&&(a.stencilOp(Tt,yi,dn),xe=Tt,Xe=yi,ot=dn)},setLocked:function(Tt){j=Tt},setClear:function(Tt){Pt!==Tt&&(a.clearStencil(Tt),Pt=Tt)},reset:function(){j=!1,we=null,Ue=null,Fe=null,Ae=null,xe=null,Xe=null,ot=null,Pt=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,h=new WeakMap;let _={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,g=null,A=null,T=null,R=null,N=null,z=null,I=new At(0,0,0),k=0,U=!1,L=null,F=null,ie=null,oe=null,ue=null;const de=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=K>=2);let Se=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),Me=new rn().fromArray(ee),Ce=new rn().fromArray(_e);function ne(j,we,Ue,Fe){const Ae=new Uint8Array(4),xe=a.createTexture();a.bindTexture(j,xe),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<Ue;Xe++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(we+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return xe}const pe={};pe[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),pe[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pe[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ee(a.DEPTH_TEST),f.setFunc(Fs),St(!1),He(M0),Ee(a.CULL_FACE),Rt(Qa);function Ee(j){_[j]!==!0&&(a.enable(j),_[j]=!0)}function Ne(j){_[j]!==!1&&(a.disable(j),_[j]=!1)}function je(j,we){return v[j]!==we?(a.bindFramebuffer(j,we),v[j]=we,j===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=we),j===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(j,we){let Ue=S,Fe=!1;if(j){Ue=y.get(we),Ue===void 0&&(Ue=[],y.set(we,Ue));const Ae=j.textures;if(Ue.length!==Ae.length||Ue[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Xe=Ae.length;xe<Xe;xe++)Ue[xe]=a.COLOR_ATTACHMENT0+xe;Ue.length=Ae.length,Fe=!0}}else Ue[0]!==a.BACK&&(Ue[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(Ue)}function Et(j){return E!==j?(a.useProgram(j),E=j,!0):!1}const mt={[Ar]:a.FUNC_ADD,[Sb]:a.FUNC_SUBTRACT,[Mb]:a.FUNC_REVERSE_SUBTRACT};mt[Eb]=a.MIN,mt[bb]=a.MAX;const X={[Tb]:a.ZERO,[Ab]:a.ONE,[Rb]:a.SRC_COLOR,[Th]:a.SRC_ALPHA,[Nb]:a.SRC_ALPHA_SATURATE,[Ub]:a.DST_COLOR,[Cb]:a.DST_ALPHA,[wb]:a.ONE_MINUS_SRC_COLOR,[Ah]:a.ONE_MINUS_SRC_ALPHA,[Lb]:a.ONE_MINUS_DST_COLOR,[Db]:a.ONE_MINUS_DST_ALPHA,[Ob]:a.CONSTANT_COLOR,[Pb]:a.ONE_MINUS_CONSTANT_COLOR,[Ib]:a.CONSTANT_ALPHA,[Bb]:a.ONE_MINUS_CONSTANT_ALPHA};function Rt(j,we,Ue,Fe,Ae,xe,Xe,ot,Pt,Tt){if(j===Qa){b===!0&&(Ne(a.BLEND),b=!1);return}if(b===!1&&(Ee(a.BLEND),b=!0),j!==xb){if(j!==x||Tt!==U){if((g!==Ar||R!==Ar)&&(a.blendEquation(a.FUNC_ADD),g=Ar,R=Ar),Tt)switch(j){case Is:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fu:a.blendFunc(a.ONE,a.ONE);break;case E0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case b0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Is:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case fu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case E0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}A=null,T=null,N=null,z=null,I.set(0,0,0),k=0,x=j,U=Tt}return}Ae=Ae||we,xe=xe||Ue,Xe=Xe||Fe,(we!==g||Ae!==R)&&(a.blendEquationSeparate(mt[we],mt[Ae]),g=we,R=Ae),(Ue!==A||Fe!==T||xe!==N||Xe!==z)&&(a.blendFuncSeparate(X[Ue],X[Fe],X[xe],X[Xe]),A=Ue,T=Fe,N=xe,z=Xe),(ot.equals(I)===!1||Pt!==k)&&(a.blendColor(ot.r,ot.g,ot.b,Pt),I.copy(ot),k=Pt),x=j,U=!1}function Qe(j,we){j.side===pa?Ne(a.CULL_FACE):Ee(a.CULL_FACE);let Ue=j.side===Pn;we&&(Ue=!Ue),St(Ue),j.blending===Is&&j.transparent===!1?Rt(Qa):Rt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),be(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):Ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function St(j){L!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),L=j)}function He(j){j!==_b?(Ee(a.CULL_FACE),j!==F&&(j===M0?a.cullFace(a.BACK):j===vb?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ne(a.CULL_FACE),F=j}function tt(j){j!==ie&&(H&&a.lineWidth(j),ie=j)}function be(j,we,Ue){j?(Ee(a.POLYGON_OFFSET_FILL),(oe!==we||ue!==Ue)&&(a.polygonOffset(we,Ue),oe=we,ue=Ue)):Ne(a.POLYGON_OFFSET_FILL)}function nt(j){j?Ee(a.SCISSOR_TEST):Ne(a.SCISSOR_TEST)}function Ot(j){j===void 0&&(j=a.TEXTURE0+de-1),Se!==j&&(a.activeTexture(j),Se=j)}function Lt(j,we,Ue){Ue===void 0&&(Se===null?Ue=a.TEXTURE0+de-1:Ue=Se);let Fe=O[Ue];Fe===void 0&&(Fe={type:void 0,texture:void 0},O[Ue]=Fe),(Fe.type!==j||Fe.texture!==we)&&(Se!==Ue&&(a.activeTexture(Ue),Se=Ue),a.bindTexture(j,we||pe[j]),Fe.type=j,Fe.texture=we)}function P(){const j=O[Se];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{a.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function J(){try{a.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{a.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{a.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{a.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{a.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{a.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{a.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ze(){try{a.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{a.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(j){Me.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Je(j){Ce.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Ce.copy(j))}function We(j,we){let Ue=h.get(we);Ue===void 0&&(Ue=new WeakMap,h.set(we,Ue));let Fe=Ue.get(j);Fe===void 0&&(Fe=a.getUniformBlockIndex(we,j.name),Ue.set(j,Fe))}function Le(j,we){const Fe=h.get(we).get(j);m.get(we)!==Fe&&(a.uniformBlockBinding(we,Fe,j.__bindingPointIndex),m.set(we,Fe))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},Se=null,O={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,g=null,A=null,T=null,R=null,N=null,z=null,I=new At(0,0,0),k=0,U=!1,L=null,F=null,ie=null,oe=null,ue=null,Me.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ee,disable:Ne,bindFramebuffer:je,drawBuffers:Ve,useProgram:Et,setBlending:Rt,setMaterial:Qe,setFlipSided:St,setCullFace:He,setLineWidth:tt,setPolygonOffset:be,setScissorTest:nt,activeTexture:Ot,bindTexture:Lt,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:Ze,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Le,texStorage2D:De,texStorage3D:qe,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:ze,scissor:Pe,viewport:Je,reset:ct}}function OC(a,e,i,r,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,_=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return S?new OffscreenCanvas(P,w):pu("canvas")}function b(P,w,J){let he=1;const ve=Lt(P);if((ve.width>J||ve.height>J)&&(he=J/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(he*ve.width),ze=Math.floor(he*ve.height);v===void 0&&(v=E(fe,ze));const De=w?E(fe,ze):v;return De.width=fe,De.height=ze,De.getContext("2d").drawImage(P,0,0,fe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+ze+")."),De}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function x(P){return P.generateMipmaps}function g(P){a.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function T(P,w,J,he,ve=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;if(w===a.RED&&(J===a.FLOAT&&(fe=a.R32F),J===a.HALF_FLOAT&&(fe=a.R16F),J===a.UNSIGNED_BYTE&&(fe=a.R8)),w===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(fe=a.R8UI),J===a.UNSIGNED_SHORT&&(fe=a.R16UI),J===a.UNSIGNED_INT&&(fe=a.R32UI),J===a.BYTE&&(fe=a.R8I),J===a.SHORT&&(fe=a.R16I),J===a.INT&&(fe=a.R32I)),w===a.RG&&(J===a.FLOAT&&(fe=a.RG32F),J===a.HALF_FLOAT&&(fe=a.RG16F),J===a.UNSIGNED_BYTE&&(fe=a.RG8)),w===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(fe=a.RG8UI),J===a.UNSIGNED_SHORT&&(fe=a.RG16UI),J===a.UNSIGNED_INT&&(fe=a.RG32UI),J===a.BYTE&&(fe=a.RG8I),J===a.SHORT&&(fe=a.RG16I),J===a.INT&&(fe=a.RG32I)),w===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),J===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),J===a.UNSIGNED_INT&&(fe=a.RGB32UI),J===a.BYTE&&(fe=a.RGB8I),J===a.SHORT&&(fe=a.RGB16I),J===a.INT&&(fe=a.RGB32I)),w===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),J===a.UNSIGNED_INT&&(fe=a.RGBA32UI),J===a.BYTE&&(fe=a.RGBA8I),J===a.SHORT&&(fe=a.RGBA16I),J===a.INT&&(fe=a.RGBA32I)),w===a.RGB&&J===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),w===a.RGBA){const ze=ve?du:Dt.getTransfer(he);J===a.FLOAT&&(fe=a.RGBA32F),J===a.HALF_FLOAT&&(fe=a.RGBA16F),J===a.UNSIGNED_BYTE&&(fe=ze===Vt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,w){let J;return P?w===null||w===Nr||w===ul?J=a.DEPTH24_STENCIL8:w===Vi?J=a.DEPTH32F_STENCIL8:w===cl&&(J=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nr||w===ul?J=a.DEPTH_COMPONENT24:w===Vi?J=a.DEPTH_COMPONENT32F:w===cl&&(J=a.DEPTH_COMPONENT16),J}function N(P,w){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==si&&P.minFilter!==Gi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function z(P){const w=P.target;w.removeEventListener("dispose",z),k(w),w.isVideoTexture&&_.delete(w)}function I(P){const w=P.target;w.removeEventListener("dispose",I),L(w)}function k(P){const w=r.get(P);if(w.__webglInit===void 0)return;const J=P.source,he=y.get(J);if(he){const ve=he[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&U(P),Object.keys(he).length===0&&y.delete(J)}r.remove(P)}function U(P){const w=r.get(P);a.deleteTexture(w.__webglTexture);const J=P.source,he=y.get(J);delete he[w.__cacheKey],f.memory.textures--}function L(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ve=0;ve<w.__webglFramebuffer[he].length;ve++)a.deleteFramebuffer(w.__webglFramebuffer[he][ve]);else a.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)a.deleteFramebuffer(w.__webglFramebuffer[he]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=P.textures;for(let he=0,ve=J.length;he<ve;he++){const fe=r.get(J[he]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(J[he])}r.remove(P)}let F=0;function ie(){F=0}function oe(){const P=F;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),F+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function de(P,w){const J=r.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const he=P.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,P,w);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+w)}function H(P,w){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){pe(J,P,w);return}i.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+w)}function K(P,w){const J=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){pe(J,P,w);return}i.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+w)}function q(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Ee(J,P,w);return}i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+w)}const Se={[Ih]:a.REPEAT,[wr]:a.CLAMP_TO_EDGE,[Bh]:a.MIRRORED_REPEAT},O={[si]:a.NEAREST,[qb]:a.NEAREST_MIPMAP_NEAREST,[Uc]:a.NEAREST_MIPMAP_LINEAR,[Gi]:a.LINEAR,[Fd]:a.LINEAR_MIPMAP_NEAREST,[Cr]:a.LINEAR_MIPMAP_LINEAR},ee={[Qb]:a.NEVER,[iT]:a.ALWAYS,[Jb]:a.LESS,[dy]:a.LEQUAL,[$b]:a.EQUAL,[nT]:a.GEQUAL,[eT]:a.GREATER,[tT]:a.NOTEQUAL};function _e(P,w){if(w.type===Vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Gi||w.magFilter===Fd||w.magFilter===Uc||w.magFilter===Cr||w.minFilter===Gi||w.minFilter===Fd||w.minFilter===Uc||w.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Se[w.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Se[w.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Se[w.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,O[w.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===si||w.minFilter!==Uc&&w.minFilter!==Cr||w.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Me(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",z));const he=w.source;let ve=y.get(he);ve===void 0&&(ve={},y.set(he,ve));const fe=ue(w);if(fe!==P.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,J=!0),ve[fe].usedTimes++;const ze=ve[P.__cacheKey];ze!==void 0&&(ve[P.__cacheKey].usedTimes--,ze.usedTimes===0&&U(w)),P.__cacheKey=fe,P.__webglTexture=ve[fe].texture}return J}function Ce(P,w,J){return Math.floor(Math.floor(P/J)/w)}function ne(P,w,J,he){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,J,he,w.data);else{fe.sort((Te,Pe)=>Te.start-Pe.start);let ze=0;for(let Te=1;Te<fe.length;Te++){const Pe=fe[ze],Je=fe[Te],We=Pe.start+Pe.count,Le=Ce(Je.start,w.width,4),ct=Ce(Pe.start,w.width,4);Je.start<=We+1&&Le===ct&&Ce(Je.start+Je.count-1,w.width,4)===Le?Pe.count=Math.max(Pe.count,Je.start+Je.count-Pe.start):(++ze,fe[ze]=Je)}fe.length=ze+1;const De=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ze=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let Te=0,Pe=fe.length;Te<Pe;Te++){const Je=fe[Te],We=Math.floor(Je.start/4),Le=Math.ceil(Je.count/4),ct=We%w.width,j=Math.floor(We/w.width),we=Le,Ue=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ct),a.pixelStorei(a.UNPACK_SKIP_ROWS,j),i.texSubImage2D(a.TEXTURE_2D,0,ct,j,we,Ue,J,he,w.data)}P.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,De),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ze)}}function pe(P,w,J){let he=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=a.TEXTURE_3D);const ve=Me(P,w),fe=w.source;i.bindTexture(he,P.__webglTexture,a.TEXTURE0+J);const ze=r.get(fe);if(fe.version!==ze.__version||ve===!0){i.activeTexture(a.TEXTURE0+J);const De=Dt.getPrimaries(Dt.workingColorSpace),qe=w.colorSpace===Ka?null:Dt.getPrimaries(w.colorSpace),Ze=w.colorSpace===Ka||De===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Te=b(w.image,!1,l.maxTextureSize);Te=Ot(w,Te);const Pe=c.convert(w.format,w.colorSpace),Je=c.convert(w.type);let We=T(w.internalFormat,Pe,Je,w.colorSpace,w.isVideoTexture);_e(he,w);let Le;const ct=w.mipmaps,j=w.isVideoTexture!==!0,we=ze.__version===void 0||ve===!0,Ue=fe.dataReady,Fe=N(w,Te);if(w.isDepthTexture)We=R(w.format===dl,w.type),we&&(j?i.texStorage2D(a.TEXTURE_2D,1,We,Te.width,Te.height):i.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Pe,Je,null));else if(w.isDataTexture)if(ct.length>0){j&&we&&i.texStorage2D(a.TEXTURE_2D,Fe,We,ct[0].width,ct[0].height);for(let Ae=0,xe=ct.length;Ae<xe;Ae++)Le=ct[Ae],j?Ue&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Pe,Je,Le.data):i.texImage2D(a.TEXTURE_2D,Ae,We,Le.width,Le.height,0,Pe,Je,Le.data);w.generateMipmaps=!1}else j?(we&&i.texStorage2D(a.TEXTURE_2D,Fe,We,Te.width,Te.height),Ue&&ne(w,Te,Pe,Je)):i.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Pe,Je,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){j&&we&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,We,ct[0].width,ct[0].height,Te.depth);for(let Ae=0,xe=ct.length;Ae<xe;Ae++)if(Le=ct[Ae],w.format!==wi)if(Pe!==null)if(j){if(Ue)if(w.layerUpdates.size>0){const Xe=nv(Le.width,Le.height,w.format,w.type);for(const ot of w.layerUpdates){const Pt=Le.data.subarray(ot*Xe/Le.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,ot,Le.width,Le.height,1,Pe,Pt)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Te.depth,Pe,Le.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Le.width,Le.height,Te.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ue&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Le.width,Le.height,Te.depth,Pe,Je,Le.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Le.width,Le.height,Te.depth,0,Pe,Je,Le.data)}else{j&&we&&i.texStorage2D(a.TEXTURE_2D,Fe,We,ct[0].width,ct[0].height);for(let Ae=0,xe=ct.length;Ae<xe;Ae++)Le=ct[Ae],w.format!==wi?Pe!==null?j?Ue&&i.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Pe,Le.data):i.compressedTexImage2D(a.TEXTURE_2D,Ae,We,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ue&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Le.width,Le.height,Pe,Je,Le.data):i.texImage2D(a.TEXTURE_2D,Ae,We,Le.width,Le.height,0,Pe,Je,Le.data)}else if(w.isDataArrayTexture)if(j){if(we&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,We,Te.width,Te.height,Te.depth),Ue)if(w.layerUpdates.size>0){const Ae=nv(Te.width,Te.height,w.format,w.type);for(const xe of w.layerUpdates){const Xe=Te.data.subarray(xe*Ae/Te.data.BYTES_PER_ELEMENT,(xe+1)*Ae/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xe,Te.width,Te.height,1,Pe,Je,Xe)}w.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Pe,Je,Te.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,Pe,Je,Te.data);else if(w.isData3DTexture)j?(we&&i.texStorage3D(a.TEXTURE_3D,Fe,We,Te.width,Te.height,Te.depth),Ue&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Pe,Je,Te.data)):i.texImage3D(a.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,Pe,Je,Te.data);else if(w.isFramebufferTexture){if(we)if(j)i.texStorage2D(a.TEXTURE_2D,Fe,We,Te.width,Te.height);else{let Ae=Te.width,xe=Te.height;for(let Xe=0;Xe<Fe;Xe++)i.texImage2D(a.TEXTURE_2D,Xe,We,Ae,xe,0,Pe,Je,null),Ae>>=1,xe>>=1}}else if(ct.length>0){if(j&&we){const Ae=Lt(ct[0]);i.texStorage2D(a.TEXTURE_2D,Fe,We,Ae.width,Ae.height)}for(let Ae=0,xe=ct.length;Ae<xe;Ae++)Le=ct[Ae],j?Ue&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Pe,Je,Le):i.texImage2D(a.TEXTURE_2D,Ae,We,Pe,Je,Le);w.generateMipmaps=!1}else if(j){if(we){const Ae=Lt(Te);i.texStorage2D(a.TEXTURE_2D,Fe,We,Ae.width,Ae.height)}Ue&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Pe,Je,Te)}else i.texImage2D(a.TEXTURE_2D,0,We,Pe,Je,Te);x(w)&&g(he),ze.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ee(P,w,J){if(w.image.length!==6)return;const he=Me(P,w),ve=w.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+J);const fe=r.get(ve);if(ve.version!==fe.__version||he===!0){i.activeTexture(a.TEXTURE0+J);const ze=Dt.getPrimaries(Dt.workingColorSpace),De=w.colorSpace===Ka?null:Dt.getPrimaries(w.colorSpace),qe=w.colorSpace===Ka||ze===De?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let xe=0;xe<6;xe++)!Ze&&!Te?Pe[xe]=b(w.image[xe],!0,l.maxCubemapSize):Pe[xe]=Te?w.image[xe].image:w.image[xe],Pe[xe]=Ot(w,Pe[xe]);const Je=Pe[0],We=c.convert(w.format,w.colorSpace),Le=c.convert(w.type),ct=T(w.internalFormat,We,Le,w.colorSpace),j=w.isVideoTexture!==!0,we=fe.__version===void 0||he===!0,Ue=ve.dataReady;let Fe=N(w,Je);_e(a.TEXTURE_CUBE_MAP,w);let Ae;if(Ze){j&&we&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ct,Je.width,Je.height);for(let xe=0;xe<6;xe++){Ae=Pe[xe].mipmaps;for(let Xe=0;Xe<Ae.length;Xe++){const ot=Ae[Xe];w.format!==wi?We!==null?j?Ue&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,ot.width,ot.height,We,ot.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,ct,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,ot.width,ot.height,We,Le,ot.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,ct,ot.width,ot.height,0,We,Le,ot.data)}}}else{if(Ae=w.mipmaps,j&&we){Ae.length>0&&Fe++;const xe=Lt(Pe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Te){j?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Pe[xe].width,Pe[xe].height,We,Le,Pe[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Pe[xe].width,Pe[xe].height,0,We,Le,Pe[xe].data);for(let Xe=0;Xe<Ae.length;Xe++){const Pt=Ae[Xe].image[xe].image;j?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,Pt.width,Pt.height,We,Le,Pt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,ct,Pt.width,Pt.height,0,We,Le,Pt.data)}}else{j?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We,Le,Pe[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,We,Le,Pe[xe]);for(let Xe=0;Xe<Ae.length;Xe++){const ot=Ae[Xe];j?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,We,Le,ot.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,ct,We,Le,ot.image[xe])}}}x(w)&&g(a.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ne(P,w,J,he,ve,fe){const ze=c.convert(J.format,J.colorSpace),De=c.convert(J.type),qe=T(J.internalFormat,ze,De,J.colorSpace),Ze=r.get(w),Te=r.get(J);if(Te.__renderTarget=w,!Ze.__hasExternalTextures){const Pe=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);ve===a.TEXTURE_3D||ve===a.TEXTURE_2D_ARRAY?i.texImage3D(ve,fe,qe,Pe,Je,w.depth,0,ze,De,null):i.texImage2D(ve,fe,qe,Pe,Je,0,ze,De,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),be(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,ve,Te.__webglTexture,0,tt(w)):(ve===a.TEXTURE_2D||ve>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,ve,Te.__webglTexture,fe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function je(P,w,J){if(a.bindRenderbuffer(a.RENDERBUFFER,P),w.depthBuffer){const he=w.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=R(w.stencilBuffer,ve),ze=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=tt(w);be(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,De,fe,w.width,w.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,De,fe,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,fe,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,P)}else{const he=w.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],ze=c.convert(fe.format,fe.colorSpace),De=c.convert(fe.type),qe=T(fe.internalFormat,ze,De,fe.colorSpace),Ze=tt(w);J&&be(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,qe,w.width,w.height):be(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ze,qe,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,qe,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const ve=he.__webglTexture,fe=tt(w);if(w.depthTexture.format===fl)be(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ve,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ve,0);else if(w.depthTexture.format===dl)be(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ve,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Et(P){const w=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const he=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=he}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const he=P.texture.mipmaps;he&&he.length>0?Ve(w.__webglFramebuffer[0],P):Ve(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=a.createRenderbuffer(),je(w.__webglDepthbuffer[he],P,!1);else{const ve=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,fe)}}else{const he=P.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),je(w.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ve,a.RENDERBUFFER,fe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(P,w,J){const he=r.get(P);w!==void 0&&Ne(he.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&Et(P)}function X(P){const w=P.texture,J=r.get(P),he=r.get(w);P.addEventListener("dispose",I);const ve=P.textures,fe=P.isWebGLCubeRenderTarget===!0,ze=ve.length>1;if(ze||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=w.version,f.memory.textures++),fe){J.__webglFramebuffer=[];for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[De]=[];for(let qe=0;qe<w.mipmaps.length;qe++)J.__webglFramebuffer[De][qe]=a.createFramebuffer()}else J.__webglFramebuffer[De]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let De=0;De<w.mipmaps.length;De++)J.__webglFramebuffer[De]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(ze)for(let De=0,qe=ve.length;De<qe;De++){const Ze=r.get(ve[De]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=a.createTexture(),f.memory.textures++)}if(P.samples>0&&be(P)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let De=0;De<ve.length;De++){const qe=ve[De];J.__webglColorRenderbuffer[De]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[De]);const Ze=c.convert(qe.format,qe.colorSpace),Te=c.convert(qe.type),Pe=T(qe.internalFormat,Ze,Te,qe.colorSpace,P.isXRRenderTarget===!0),Je=tt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Pe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+De,a.RENDERBUFFER,J.__webglColorRenderbuffer[De])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),je(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){i.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),_e(a.TEXTURE_CUBE_MAP,w);for(let De=0;De<6;De++)if(w.mipmaps&&w.mipmaps.length>0)for(let qe=0;qe<w.mipmaps.length;qe++)Ne(J.__webglFramebuffer[De][qe],P,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+De,qe);else Ne(J.__webglFramebuffer[De],P,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);x(w)&&g(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let De=0,qe=ve.length;De<qe;De++){const Ze=ve[De],Te=r.get(Ze);let Pe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Te.__webglTexture),_e(Pe,Ze),Ne(J.__webglFramebuffer,P,Ze,a.COLOR_ATTACHMENT0+De,Pe,0),x(Ze)&&g(Pe)}i.unbindTexture()}else{let De=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(De,he.__webglTexture),_e(De,w),w.mipmaps&&w.mipmaps.length>0)for(let qe=0;qe<w.mipmaps.length;qe++)Ne(J.__webglFramebuffer[qe],P,w,a.COLOR_ATTACHMENT0,De,qe);else Ne(J.__webglFramebuffer,P,w,a.COLOR_ATTACHMENT0,De,0);x(w)&&g(De),i.unbindTexture()}P.depthBuffer&&Et(P)}function Rt(P){const w=P.textures;for(let J=0,he=w.length;J<he;J++){const ve=w[J];if(x(ve)){const fe=A(P),ze=r.get(ve).__webglTexture;i.bindTexture(fe,ze),g(fe),i.unbindTexture()}}}const Qe=[],St=[];function He(P){if(P.samples>0){if(be(P)===!1){const w=P.textures,J=P.width,he=P.height;let ve=a.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=r.get(P),De=w.length>1;if(De)for(let Ze=0;Ze<w.length;Ze++)i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const qe=P.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ze=0;Ze<w.length;Ze++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=a.STENCIL_BUFFER_BIT)),De){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Te=r.get(w[Ze]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,J,he,0,0,J,he,ve,a.NEAREST),m===!0&&(Qe.length=0,St.length=0,Qe.push(a.COLOR_ATTACHMENT0+Ze),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Qe.push(fe),St.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,St)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),De)for(let Ze=0;Ze<w.length;Ze++){i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Te=r.get(w[Ze]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,Te,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const w=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function tt(P){return Math.min(l.maxSamples,P.samples)}function be(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function nt(P){const w=f.render.frame;_.get(P)!==w&&(_.set(P,w),P.update())}function Ot(P,w){const J=P.colorSpace,he=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Vs&&J!==Ka&&(Dt.getTransfer(J)===Vt?(he!==wi||ve!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=ie,this.setTexture2D=de,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=mt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=be}function PC(a,e){function i(r,l=Ka){let c;const f=Dt.getTransfer(l);if(r===Xi)return a.UNSIGNED_BYTE;if(r===Ep)return a.UNSIGNED_SHORT_4_4_4_4;if(r===bp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===sy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ay)return a.BYTE;if(r===ry)return a.SHORT;if(r===cl)return a.UNSIGNED_SHORT;if(r===Mp)return a.INT;if(r===Nr)return a.UNSIGNED_INT;if(r===Vi)return a.FLOAT;if(r===vl)return a.HALF_FLOAT;if(r===oy)return a.ALPHA;if(r===ly)return a.RGB;if(r===wi)return a.RGBA;if(r===fl)return a.DEPTH_COMPONENT;if(r===dl)return a.DEPTH_STENCIL;if(r===Tp)return a.RED;if(r===Ap)return a.RED_INTEGER;if(r===cy)return a.RG;if(r===Rp)return a.RG_INTEGER;if(r===wp)return a.RGBA_INTEGER;if(r===au||r===ru||r===su||r===ou)if(f===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zh||r===Fh||r===Hh||r===Gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vh||r===kh||r===Xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Vh||r===kh)return f===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Xh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wh||r===jh||r===qh||r===Yh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Wh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jh)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$h)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ep)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tp)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===np)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ip)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ap)return f===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lu||r===rp||r===sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===lu)return f===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uy||r===op||r===lp||r===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===lu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ul?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}class Ly extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const IC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ly(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new er({vertexShader:IC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new bu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends qs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,h=null,_=null,v=null,y=null,S=null,E=null;const b=new zC,x={},g=i.getContextAttributes();let A=null,T=null;const R=[],N=[],z=new Ut;let I=null;const k=new gi;k.viewport=new rn;const U=new gi;U.viewport=new rn;const L=[k,U],F=new r1;let ie=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=R[ne];return pe===void 0&&(pe=new oh,R[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=R[ne];return pe===void 0&&(pe=new oh,R[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=R[ne];return pe===void 0&&(pe=new oh,R[ne]=pe),pe.getHandSpace()};function ue(ne){const pe=N.indexOf(ne.inputSource);if(pe===-1)return;const Ee=R[pe];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,h||f),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function de(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",de),l.removeEventListener("inputsourceschange",H);for(let ne=0;ne<R.length;ne++){const pe=N[ne];pe!==null&&(N[ne]=null,R[ne].disconnect(pe))}ie=null,oe=null,b.reset();for(const ne in x)delete x[ne];e.setRenderTarget(A),S=null,y=null,v=null,l=null,T=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(A=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",de),l.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ne=null,je=null;g.depth&&(je=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=g.stencil?dl:fl,Ne=g.stencil?ul:Nr);const Ve={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};y=v.createProjectionLayer(Ve),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),T=new Or(y.textureWidth,y.textureHeight,{format:wi,type:Xi,depthTexture:new by(y.textureWidth,y.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Or(S.framebufferWidth,S.framebufferHeight,{format:wi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(d),Ce.setContext(l),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(ne){for(let pe=0;pe<ne.removed.length;pe++){const Ee=ne.removed[pe],Ne=N.indexOf(Ee);Ne>=0&&(N[Ne]=null,R[Ne].disconnect(Ee))}for(let pe=0;pe<ne.added.length;pe++){const Ee=ne.added[pe];let Ne=N.indexOf(Ee);if(Ne===-1){for(let Ve=0;Ve<R.length;Ve++)if(Ve>=N.length){N.push(Ee),Ne=Ve;break}else if(N[Ve]===null){N[Ve]=Ee,Ne=Ve;break}if(Ne===-1)break}const je=R[Ne];je&&je.connect(Ee)}}const K=new ae,q=new ae;function Se(ne,pe,Ee){K.setFromMatrixPosition(pe.matrixWorld),q.setFromMatrixPosition(Ee.matrixWorld);const Ne=K.distanceTo(q),je=pe.projectionMatrix.elements,Ve=Ee.projectionMatrix.elements,Et=je[14]/(je[10]-1),mt=je[14]/(je[10]+1),X=(je[9]+1)/je[5],Rt=(je[9]-1)/je[5],Qe=(je[8]-1)/je[0],St=(Ve[8]+1)/Ve[0],He=Et*Qe,tt=Et*St,be=Ne/(-Qe+St),nt=be*-Qe;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(nt),ne.translateZ(be),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),je[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ot=Et+be,Lt=mt+be,P=He-nt,w=tt+(Ne-nt),J=X*mt/Lt*Ot,he=Rt*mt/Lt*Ot;ne.projectionMatrix.makePerspective(P,w,J,he,Ot,Lt),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let pe=ne.near,Ee=ne.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(Ee=b.depthFar)),F.near=U.near=k.near=pe,F.far=U.far=k.far=Ee,(ie!==F.near||oe!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ie=F.near,oe=F.far),F.layers.mask=ne.layers.mask|6,k.layers.mask=F.layers.mask&3,U.layers.mask=F.layers.mask&5;const Ne=ne.parent,je=F.cameras;O(F,Ne);for(let Ve=0;Ve<je.length;Ve++)O(je[Ve],Ne);je.length===2?Se(F,k,U):F.projectionMatrix.copy(k.projectionMatrix),ee(ne,F,Ne)};function ee(ne,pe,Ee){Ee===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=hl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(ne){m=ne,y!==null&&(y.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(F)},this.getCameraTexture=function(ne){return x[ne]};let _e=null;function Me(ne,pe){if(_=pe.getViewerPose(h||f),E=pe,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Ne=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let mt=0;mt<Ee.length;mt++){const X=Ee[mt];let Rt=null;if(S!==null)Rt=S.getViewport(X);else{const St=v.getViewSubImage(y,X);Rt=St.viewport,mt===0&&(e.setRenderTargetTextures(T,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(T))}let Qe=L[mt];Qe===void 0&&(Qe=new gi,Qe.layers.enable(mt),Qe.viewport=new rn,L[mt]=Qe),Qe.matrix.fromArray(X.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(X.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),mt===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(Qe)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const mt=v.getDepthInformation(Ee[0]);mt&&mt.isValid&&mt.texture&&b.init(mt,l.renderState)}if(je&&je.includes("camera-access")&&(e.state.unbindTexture(),v))for(let mt=0;mt<Ee.length;mt++){const X=Ee[mt].camera;if(X){let Rt=x[X];Rt||(Rt=new Ly,x[X]=Rt);const Qe=v.getCameraImage(X);Rt.sourceTexture=Qe}}}for(let Ee=0;Ee<R.length;Ee++){const Ne=N[Ee],je=R[Ee];Ne!==null&&je!==void 0&&je.update(Ne,pe,h||f)}_e&&_e(ne,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Ce=new Ry;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const Er=new Wi,HC=new qt;function GC(a,e){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,xy(a)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,A,T,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),v(x,g)):g.isMeshPhongMaterial?(c(x,g),_(x,g)):g.isMeshStandardMaterial?(c(x,g),y(x,g),g.isMeshPhysicalMaterial&&S(x,g,R)):g.isMeshMatcapMaterial?(c(x,g),E(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),b(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(f(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,A,T):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Pn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Pn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const A=e.get(g),T=A.envMap,R=A.envMapRotation;T&&(x.envMap.value=T,Er.copy(R),Er.x*=-1,Er.y*=-1,Er.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),x.envMapRotation.value.setFromMatrix4(HC.makeRotationFromEuler(Er)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,A,T){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*A,x.scale.value=T*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function y(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function S(x,g,A){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,g){g.matcap&&(x.matcap.value=g.matcap)}function b(x,g){const A=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function VC(a,e,i,r){let l={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,T){const R=T.program;r.uniformBlockBinding(A,R)}function h(A,T){let R=l[A.id];R===void 0&&(E(A),R=_(A),l[A.id]=R,A.addEventListener("dispose",x));const N=T.program;r.updateUBOMapping(A,N);const z=e.render.frame;c[A.id]!==z&&(y(A),c[A.id]=z)}function _(A){const T=v();A.__bindingPointIndex=T;const R=a.createBuffer(),N=A.__size,z=A.usage;return a.bindBuffer(a.UNIFORM_BUFFER,R),a.bufferData(a.UNIFORM_BUFFER,N,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,T,R),R}function v(){for(let A=0;A<d;A++)if(f.indexOf(A)===-1)return f.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const T=l[A.id],R=A.uniforms,N=A.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let z=0,I=R.length;z<I;z++){const k=Array.isArray(R[z])?R[z]:[R[z]];for(let U=0,L=k.length;U<L;U++){const F=k[U];if(S(F,z,U,N)===!0){const ie=F.__offset,oe=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let de=0;de<oe.length;de++){const H=oe[de],K=b(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,a.bufferSubData(a.UNIFORM_BUFFER,ie+ue,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,ue),ue+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ie,F.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(A,T,R,N){const z=A.value,I=T+"_"+R;if(N[I]===void 0)return typeof z=="number"||typeof z=="boolean"?N[I]=z:N[I]=z.clone(),!0;{const k=N[I];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return N[I]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function E(A){const T=A.uniforms;let R=0;const N=16;for(let I=0,k=T.length;I<k;I++){const U=Array.isArray(T[I])?T[I]:[T[I]];for(let L=0,F=U.length;L<F;L++){const ie=U[L],oe=Array.isArray(ie.value)?ie.value:[ie.value];for(let ue=0,de=oe.length;ue<de;ue++){const H=oe[ue],K=b(H),q=R%N,Se=q%K.boundary,O=q+Se;R+=Se,O!==0&&N-O<K.storage&&(R+=N-O),ie.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=K.storage}}}const z=R%N;return z>0&&(R+=N-z),A.__size=R,A.__cache={},this}function b(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function x(A){const T=A.target;T.removeEventListener("dispose",x);const R=f.indexOf(T.__bindingPointIndex);f.splice(R,1),a.deleteBuffer(l[T.id]),delete l[T.id],delete c[T.id]}function g(){for(const A in l)a.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:h,dispose:g}}class kC{constructor(e={}){const{canvas:i=xT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let x=null,g=null;const A=[],T=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1;this._outputColorSpace=ri;let z=0,I=0,k=null,U=-1,L=null;const F=new rn,ie=new rn;let oe=null;const ue=new At(0);let de=0,H=i.width,K=i.height,q=1,Se=null,O=null;const ee=new rn(0,0,H,K),_e=new rn(0,0,H,K);let Me=!1;const Ce=new Up;let ne=!1,pe=!1;const Ee=new qt,Ne=new ae,je=new rn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function mt(){return k===null?q:1}let X=r;function Rt(D,Y){return i.getContext(D,Y)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sp}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),X===null){const Y="webgl2";if(X=Rt(Y,D),X===null)throw Rt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Qe,St,He,tt,be,nt,Ot,Lt,P,w,J,he,ve,fe,ze,De,qe,Ze,Te,Pe,Je,We,Le,ct;function j(){Qe=new $R(X),Qe.init(),We=new PC(X,Qe),St=new jR(X,Qe,e,We),He=new NC(X,Qe),St.reversedDepthBuffer&&y&&He.buffers.depth.setReversed(!0),tt=new nw(X),be=new xC,nt=new OC(X,Qe,He,be,St,We,tt),Ot=new YR(R),Lt=new JR(R),P=new l1(X),Le=new XR(X,P),w=new ew(X,P,tt,Le),J=new aw(X,w,P,tt),Te=new iw(X,St,nt),De=new qR(be),he=new yC(R,Ot,Lt,Qe,St,Le,De),ve=new GC(R,be),fe=new MC,ze=new wC(Qe),Ze=new kR(R,Ot,Lt,He,J,S,m),qe=new UC(R,J,St),ct=new VC(X,tt,St,He),Pe=new WR(X,Qe,tt),Je=new tw(X,Qe,tt),tt.programs=he.programs,R.capabilities=St,R.extensions=Qe,R.properties=be,R.renderLists=fe,R.shadowMap=qe,R.state=He,R.info=tt}j();const we=new FC(R,X);this.xr=we,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=Qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(H,K,!1))},this.getSize=function(D){return D.set(H,K)},this.setSize=function(D,Y,le=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,K=Y,i.width=Math.floor(D*q),i.height=Math.floor(Y*q),le===!0&&(i.style.width=D+"px",i.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(H*q,K*q).floor()},this.setDrawingBufferSize=function(D,Y,le){H=D,K=Y,q=le,i.width=Math.floor(D*le),i.height=Math.floor(Y*le),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy(ee)},this.setViewport=function(D,Y,le,ce){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,Y,le,ce),He.viewport(F.copy(ee).multiplyScalar(q).round())},this.getScissor=function(D){return D.copy(_e)},this.setScissor=function(D,Y,le,ce){D.isVector4?_e.set(D.x,D.y,D.z,D.w):_e.set(D,Y,le,ce),He.scissor(ie.copy(_e).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(D){He.setScissorTest(Me=D)},this.setOpaqueSort=function(D){Se=D},this.setTransparentSort=function(D){O=D},this.getClearColor=function(D){return D.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,le=!0){let ce=0;if(D){let Q=!1;if(k!==null){const Re=k.texture.format;Q=Re===wp||Re===Rp||Re===Ap}if(Q){const Re=k.texture.type,Oe=Re===Xi||Re===Nr||Re===cl||Re===ul||Re===Ep||Re===bp,Ge=Ze.getClearColor(),Ie=Ze.getClearAlpha(),et=Ge.r,at=Ge.g,Ye=Ge.b;Oe?(E[0]=et,E[1]=at,E[2]=Ye,E[3]=Ie,X.clearBufferuiv(X.COLOR,0,E)):(b[0]=et,b[1]=at,b[2]=Ye,b[3]=Ie,X.clearBufferiv(X.COLOR,0,b))}else ce|=X.COLOR_BUFFER_BIT}Y&&(ce|=X.DEPTH_BUFFER_BIT),le&&(ce|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Ze.dispose(),fe.dispose(),ze.dispose(),be.dispose(),Ot.dispose(),Lt.dispose(),J.dispose(),Le.dispose(),ct.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",dn),we.removeEventListener("sessionend",hn),en.stop()};function Ue(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const D=tt.autoReset,Y=qe.enabled,le=qe.autoUpdate,ce=qe.needsUpdate,Q=qe.type;j(),tt.autoReset=D,qe.enabled=Y,qe.autoUpdate=le,qe.needsUpdate=ce,qe.type=Q}function Ae(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function xe(D){const Y=D.target;Y.removeEventListener("dispose",xe),Xe(Y)}function Xe(D){ot(D),be.remove(D)}function ot(D){const Y=be.get(D).programs;Y!==void 0&&(Y.forEach(function(le){he.releaseProgram(le)}),D.isShaderMaterial&&he.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,le,ce,Q,Re){Y===null&&(Y=Ve);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=ya(D,Y,le,ce,Q);He.setMaterial(ce,Oe);let Ie=le.index,et=1;if(ce.wireframe===!0){if(Ie=w.getWireframeAttribute(le),Ie===void 0)return;et=2}const at=le.drawRange,Ye=le.attributes.position;let dt=at.start*et,wt=(at.start+at.count)*et;Re!==null&&(dt=Math.max(dt,Re.start*et),wt=Math.min(wt,(Re.start+Re.count)*et)),Ie!==null?(dt=Math.max(dt,0),wt=Math.min(wt,Ie.count)):Ye!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Ye.count));const Kt=wt-dt;if(Kt<0||Kt===1/0)return;Le.setup(Q,ce,Ge,le,Ie);let zt,ht=Pe;if(Ie!==null&&(zt=P.get(Ie),ht=Je,ht.setIndex(zt)),Q.isMesh)ce.wireframe===!0?(He.setLineWidth(ce.wireframeLinewidth*mt()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if(Q.isLine){let $e=ce.linewidth;$e===void 0&&($e=1),He.setLineWidth($e*mt()),Q.isLineSegments?ht.setMode(X.LINES):Q.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else Q.isPoints?ht.setMode(X.POINTS):Q.isSprite&&ht.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,Yt=Q._multiDrawCounts,vt=Q._multiDrawCount,Cn=Ie?P.get(Ie).bytesPerElement:1,xi=be.get(ce).currentProgram.getUniforms();for(let In=0;In<vt;In++)xi.setValue(X,"_gl_DrawID",In),ht.render($e[In]/Cn,Yt[In])}else if(Q.isInstancedMesh)ht.renderInstances(dt,Kt,Q.count);else if(le.isInstancedBufferGeometry){const $e=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Yt=Math.min(le.instanceCount,$e);ht.renderInstances(dt,Kt,Yt)}else ht.render(dt,Kt)};function Pt(D,Y,le){D.transparent===!0&&D.side===pa&&D.forceSinglePass===!1?(D.side=Pn,D.needsUpdate=!0,Oi(D,Y,le),D.side=$a,D.needsUpdate=!0,Oi(D,Y,le),D.side=pa):Oi(D,Y,le)}this.compile=function(D,Y,le=null){le===null&&(le=D),g=ze.get(le),g.init(Y),T.push(g),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),D!==le&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ce=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const Ge=Re[Oe];Pt(Ge,le,Q),ce.add(Ge)}else Pt(Re,le,Q),ce.add(Re)}),g=T.pop(),ce},this.compileAsync=function(D,Y,le=null){const ce=this.compile(D,Y,le);return new Promise(Q=>{function Re(){if(ce.forEach(function(Oe){be.get(Oe).currentProgram.isReady()&&ce.delete(Oe)}),ce.size===0){Q(D);return}setTimeout(Re,10)}Qe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Tt=null;function yi(D){Tt&&Tt(D)}function dn(){en.stop()}function hn(){en.start()}const en=new Ry;en.setAnimationLoop(yi),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(D){Tt=D,we.setAnimationLoop(D),D===null?en.stop():en.start()},we.addEventListener("sessionstart",dn),we.addEventListener("sessionend",hn),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Y,k),g=ze.get(D,T.length),g.init(Y),T.push(g),Ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,ki,Y.reversedDepth),pe=this.localClippingEnabled,ne=De.init(this.clippingPlanes,pe),x=fe.get(D,A.length),x.init(),A.push(x),we.enabled===!0&&we.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Ni(Re,Y,-1/0,R.sortObjects)}Ni(D,Y,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(Se,O),Et=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Et&&Ze.addToRenderList(x,D),this.info.render.frame++,ne===!0&&De.beginShadows();const le=g.state.shadowsArray;qe.render(le,D,Y),ne===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=x.opaque,Q=x.transmissive;if(g.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(Q.length>0)for(let Oe=0,Ge=Re.length;Oe<Ge;Oe++){const Ie=Re[Oe];xl(ce,Q,D,Ie)}Et&&Ze.render(D);for(let Oe=0,Ge=Re.length;Oe<Ge;Oe++){const Ie=Re[Oe];Ir(x,D,Ie,Ie.viewport)}}else Q.length>0&&xl(ce,Q,D,Y),Et&&Ze.render(D),Ir(x,D,Y);k!==null&&I===0&&(nt.updateMultisampleRenderTarget(k),nt.updateRenderTargetMipmap(k)),D.isScene===!0&&D.onAfterRender(R,D,Y),Le.resetDefaultState(),U=-1,L=null,T.pop(),T.length>0?(g=T[T.length-1],ne===!0&&De.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function Ni(D,Y,le,ce){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)le=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ce.intersectsSprite(D)){ce&&je.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ee);const Oe=J.update(D),Ge=D.material;Ge.visible&&x.push(D,Oe,Ge,le,je.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ce.intersectsObject(D))){const Oe=J.update(D),Ge=D.material;if(ce&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),je.copy(D.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),je.copy(Oe.boundingSphere.center)),je.applyMatrix4(D.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ge)){const Ie=Oe.groups;for(let et=0,at=Ie.length;et<at;et++){const Ye=Ie[et],dt=Ge[Ye.materialIndex];dt&&dt.visible&&x.push(D,Oe,dt,le,je.z,Ye)}}else Ge.visible&&x.push(D,Oe,Ge,le,je.z,null)}}const Re=D.children;for(let Oe=0,Ge=Re.length;Oe<Ge;Oe++)Ni(Re[Oe],Y,le,ce)}function Ir(D,Y,le,ce){const Q=D.opaque,Re=D.transmissive,Oe=D.transparent;g.setupLightsView(le),ne===!0&&De.setGlobalState(R.clippingPlanes,le),ce&&He.viewport(F.copy(ce)),Q.length>0&&Br(Q,Y,le),Re.length>0&&Br(Re,Y,le),Oe.length>0&&Br(Oe,Y,le),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function xl(D,Y,le,ce){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new Or(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?vl:Xi,minFilter:Cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Re=g.state.transmissionRenderTarget[ce.id],Oe=ce.viewport||F;Re.setSize(Oe.z*R.transmissionResolutionScale,Oe.w*R.transmissionResolutionScale);const Ge=R.getRenderTarget(),Ie=R.getActiveCubeFace(),et=R.getActiveMipmapLevel();R.setRenderTarget(Re),R.getClearColor(ue),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),Et&&Ze.render(le);const at=R.toneMapping;R.toneMapping=Ja;const Ye=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),ne===!0&&De.setGlobalState(R.clippingPlanes,ce),Br(D,le,ce),nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,Kt=Y.length;wt<Kt;wt++){const zt=Y[wt],ht=zt.object,$e=zt.geometry,Yt=zt.material,vt=zt.group;if(Yt.side===pa&&ht.layers.test(ce.layers)){const Cn=Yt.side;Yt.side=Pn,Yt.needsUpdate=!0,$s(ht,le,ce,$e,Yt,vt),Yt.side=Cn,Yt.needsUpdate=!0,dt=!0}}dt===!0&&(nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re))}R.setRenderTarget(Ge,Ie,et),R.setClearColor(ue,de),Ye!==void 0&&(ce.viewport=Ye),R.toneMapping=at}function Br(D,Y,le){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Re=D.length;Q<Re;Q++){const Oe=D[Q],Ge=Oe.object,Ie=Oe.geometry,et=Oe.group;let at=Oe.material;at.allowOverride===!0&&ce!==null&&(at=ce),Ge.layers.test(le.layers)&&$s(Ge,Y,le,Ie,at,et)}}function $s(D,Y,le,ce,Q,Re){D.onBeforeRender(R,Y,le,ce,Q,Re),D.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(R,Y,le,ce,D,Re),Q.transparent===!0&&Q.side===pa&&Q.forceSinglePass===!1?(Q.side=Pn,Q.needsUpdate=!0,R.renderBufferDirect(le,Y,ce,Q,D,Re),Q.side=$a,Q.needsUpdate=!0,R.renderBufferDirect(le,Y,ce,Q,D,Re),Q.side=pa):R.renderBufferDirect(le,Y,ce,Q,D,Re),D.onAfterRender(R,Y,le,ce,Q,Re)}function Oi(D,Y,le){Y.isScene!==!0&&(Y=Ve);const ce=be.get(D),Q=g.state.lights,Re=g.state.shadowsArray,Oe=Q.state.version,Ge=he.getParameters(D,Q.state,Re,Y,le),Ie=he.getProgramCacheKey(Ge);let et=ce.programs;ce.environment=D.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(D.isMeshStandardMaterial?Lt:Ot).get(D.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,et===void 0&&(D.addEventListener("dispose",xe),et=new Map,ce.programs=et);let at=et.get(Ie);if(at!==void 0){if(ce.currentProgram===at&&ce.lightsStateVersion===Oe)return qi(D,Ge),at}else Ge.uniforms=he.getUniforms(D),D.onBeforeCompile(Ge,R),at=he.acquireProgram(Ge,Ie),et.set(Ie,at),ce.uniforms=Ge.uniforms;const Ye=ce.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ye.clippingPlanes=De.uniform),qi(D,Ge),ce.needsLights=xa(D),ce.lightsStateVersion=Oe,ce.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=at,ce.uniformsList=null,at}function zr(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=cu.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function qi(D,Y){const le=be.get(D);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ya(D,Y,le,ce,Q){Y.isScene!==!0&&(Y=Ve),nt.resetTextureUnits();const Re=Y.fog,Oe=ce.isMeshStandardMaterial?Y.environment:null,Ge=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Vs,Ie=(ce.isMeshStandardMaterial?Lt:Ot).get(ce.envMap||Oe),et=ce.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ye=!!le.morphAttributes.position,dt=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color;let Kt=Ja;ce.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Kt=R.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ht=zt!==void 0?zt.length:0,$e=be.get(ce),Yt=g.state.lights;if(ne===!0&&(pe===!0||D!==L)){const tn=D===L&&ce.id===U;De.setState(ce,D,tn)}let vt=!1;ce.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Yt.state.version||$e.outputColorSpace!==Ge||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==Ie||ce.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==De.numPlanes||$e.numIntersection!==De.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==at||$e.morphTargets!==Ye||$e.morphNormals!==dt||$e.morphColors!==wt||$e.toneMapping!==Kt||$e.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,$e.__version=ce.version);let Cn=$e.currentProgram;vt===!0&&(Cn=Oi(ce,Y,Q));let xi=!1,In=!1,yn=!1;const Xt=Cn.getUniforms(),Bn=$e.uniforms;if(He.useProgram(Cn.program)&&(xi=!0,In=!0,yn=!0),ce.id!==U&&(U=ce.id,In=!0),xi||L!==D){He.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Xt.setValue(X,"projectionMatrix",D.projectionMatrix),Xt.setValue(X,"viewMatrix",D.matrixWorldInverse);const bn=Xt.map.cameraPosition;bn!==void 0&&bn.setValue(X,Ne.setFromMatrixPosition(D.matrixWorld)),St.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),L!==D&&(L=D,In=!0,yn=!0)}if(Q.isSkinnedMesh){Xt.setOptional(X,Q,"bindMatrix"),Xt.setOptional(X,Q,"bindMatrixInverse");const tn=Q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Xt.setValue(X,"boneTexture",tn.boneTexture,nt))}Q.isBatchedMesh&&(Xt.setOptional(X,Q,"batchingTexture"),Xt.setValue(X,"batchingTexture",Q._matricesTexture,nt),Xt.setOptional(X,Q,"batchingIdTexture"),Xt.setValue(X,"batchingIdTexture",Q._indirectTexture,nt),Xt.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Xt.setValue(X,"batchingColorTexture",Q._colorsTexture,nt));const Dn=le.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Te.update(Q,le,Cn),(In||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,Xt.setValue(X,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Bn.envMap.value=Ie,Bn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(Bn.envMapIntensity.value=Y.environmentIntensity),In&&(Xt.setValue(X,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&tr(Bn,yn),Re&&ce.fog===!0&&ve.refreshFogUniforms(Bn,Re),ve.refreshMaterialUniforms(Bn,ce,q,K,g.state.transmissionRenderTarget[D.id]),cu.upload(X,zr($e),Bn,nt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(cu.upload(X,zr($e),Bn,nt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Xt.setValue(X,"center",Q.center),Xt.setValue(X,"modelViewMatrix",Q.modelViewMatrix),Xt.setValue(X,"normalMatrix",Q.normalMatrix),Xt.setValue(X,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const tn=ce.uniformsGroups;for(let bn=0,Fr=tn.length;bn<Fr;bn++){const kn=tn[bn];ct.update(kn,Cn),ct.bind(kn,Cn)}}return Cn}function tr(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function xa(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(D,Y,le){const ce=be.get(D);ce.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),be.get(D.texture).__webglTexture=Y,be.get(D.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:le,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const le=be.get(D);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const ln=X.createFramebuffer();this.setRenderTarget=function(D,Y=0,le=0){k=D,z=Y,I=le;let ce=!0,Q=null,Re=!1,Oe=!1;if(D){const Ie=be.get(D);if(Ie.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(X.FRAMEBUFFER,null),ce=!1;else if(Ie.__webglFramebuffer===void 0)nt.setupRenderTarget(D);else if(Ie.__hasExternalTextures)nt.rebindTextures(D,be.get(D.texture).__webglTexture,be.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ye=D.depthTexture;if(Ie.__boundDepthTexture!==Ye){if(Ye!==null&&be.has(Ye)&&(D.width!==Ye.image.width||D.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(D)}}const et=D.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Oe=!0);const at=be.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?Q=at[Y][le]:Q=at[Y],Re=!0):D.samples>0&&nt.useMultisampledRTT(D)===!1?Q=be.get(D).__webglMultisampledFramebuffer:Array.isArray(at)?Q=at[le]:Q=at,F.copy(D.viewport),ie.copy(D.scissor),oe=D.scissorTest}else F.copy(ee).multiplyScalar(q).floor(),ie.copy(_e).multiplyScalar(q).floor(),oe=Me;if(le!==0&&(Q=ln),He.bindFramebuffer(X.FRAMEBUFFER,Q)&&ce&&He.drawBuffers(D,Q),He.viewport(F),He.scissor(ie),He.setScissorTest(oe),Re){const Ie=be.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,le)}else if(Oe){const Ie=Y;for(let et=0;et<D.textures.length;et++){const at=be.get(D.textures[et]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+et,at.__webglTexture,le,Ie)}}else if(D!==null&&le!==0){const Ie=be.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ie.__webglTexture,le)}U=-1},this.readRenderTargetPixels=function(D,Y,le,ce,Q,Re,Oe,Ge=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=be.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie){He.bindFramebuffer(X.FRAMEBUFFER,Ie);try{const et=D.textures[Ge],at=et.format,Ye=et.type;if(!St.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ce&&le>=0&&le<=D.height-Q&&(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(Y,le,ce,Q,We.convert(at),We.convert(Ye),Re))}finally{const et=k!==null?be.get(k).__webglFramebuffer:null;He.bindFramebuffer(X.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(D,Y,le,ce,Q,Re,Oe,Ge=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=be.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ie=Ie[Oe]),Ie)if(Y>=0&&Y<=D.width-ce&&le>=0&&le<=D.height-Q){He.bindFramebuffer(X.FRAMEBUFFER,Ie);const et=D.textures[Ge],at=et.format,Ye=et.type;if(!St.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ge),X.readPixels(Y,le,ce,Q,We.convert(at),We.convert(Ye),0);const wt=k!==null?be.get(k).__webglFramebuffer:null;He.bindFramebuffer(X.FRAMEBUFFER,wt);const Kt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await ST(X,Kt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.deleteBuffer(dt),X.deleteSync(Kt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,le=0){const ce=Math.pow(2,-le),Q=Math.floor(D.image.width*ce),Re=Math.floor(D.image.height*ce),Oe=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;nt.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,Oe,Ge,Q,Re),He.unbindTexture()};const Sl=X.createFramebuffer(),Ml=X.createFramebuffer();this.copyTextureToTexture=function(D,Y,le=null,ce=null,Q=0,Re=null){Re===null&&(Q!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Q,Q=0):Re=0);let Oe,Ge,Ie,et,at,Ye,dt,wt,Kt;const zt=D.isCompressedTexture?D.mipmaps[Re]:D.image;if(le!==null)Oe=le.max.x-le.min.x,Ge=le.max.y-le.min.y,Ie=le.isBox3?le.max.z-le.min.z:1,et=le.min.x,at=le.min.y,Ye=le.isBox3?le.min.z:0;else{const Dn=Math.pow(2,-Q);Oe=Math.floor(zt.width*Dn),Ge=Math.floor(zt.height*Dn),D.isDataArrayTexture?Ie=zt.depth:D.isData3DTexture?Ie=Math.floor(zt.depth*Dn):Ie=1,et=0,at=0,Ye=0}ce!==null?(dt=ce.x,wt=ce.y,Kt=ce.z):(dt=0,wt=0,Kt=0);const ht=We.convert(Y.format),$e=We.convert(Y.type);let Yt;Y.isData3DTexture?(nt.setTexture3D(Y,0),Yt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(nt.setTexture2DArray(Y,0),Yt=X.TEXTURE_2D_ARRAY):(nt.setTexture2D(Y,0),Yt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=X.getParameter(X.UNPACK_ROW_LENGTH),Cn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),xi=X.getParameter(X.UNPACK_SKIP_PIXELS),In=X.getParameter(X.UNPACK_SKIP_ROWS),yn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,zt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,zt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,et),X.pixelStorei(X.UNPACK_SKIP_ROWS,at),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ye);const Xt=D.isDataArrayTexture||D.isData3DTexture,Bn=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const Dn=be.get(D),tn=be.get(Y),bn=be.get(Dn.__renderTarget),Fr=be.get(tn.__renderTarget);He.bindFramebuffer(X.READ_FRAMEBUFFER,bn.__webglFramebuffer),He.bindFramebuffer(X.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let kn=0;kn<Ie;kn++)Xt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,be.get(D).__webglTexture,Q,Ye+kn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,be.get(Y).__webglTexture,Re,Kt+kn)),X.blitFramebuffer(et,at,Oe,Ge,dt,wt,Oe,Ge,X.DEPTH_BUFFER_BIT,X.NEAREST);He.bindFramebuffer(X.READ_FRAMEBUFFER,null),He.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||be.has(D)){const Dn=be.get(D),tn=be.get(Y);He.bindFramebuffer(X.READ_FRAMEBUFFER,Sl),He.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ml);for(let bn=0;bn<Ie;bn++)Xt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Dn.__webglTexture,Q,Ye+bn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Dn.__webglTexture,Q),Bn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,tn.__webglTexture,Re,Kt+bn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,tn.__webglTexture,Re),Q!==0?X.blitFramebuffer(et,at,Oe,Ge,dt,wt,Oe,Ge,X.COLOR_BUFFER_BIT,X.NEAREST):Bn?X.copyTexSubImage3D(Yt,Re,dt,wt,Kt+bn,et,at,Oe,Ge):X.copyTexSubImage2D(Yt,Re,dt,wt,et,at,Oe,Ge);He.bindFramebuffer(X.READ_FRAMEBUFFER,null),He.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Bn?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(Yt,Re,dt,wt,Kt,Oe,Ge,Ie,ht,$e,zt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Yt,Re,dt,wt,Kt,Oe,Ge,Ie,ht,zt.data):X.texSubImage3D(Yt,Re,dt,wt,Kt,Oe,Ge,Ie,ht,$e,zt):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Re,dt,wt,Oe,Ge,ht,$e,zt.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Re,dt,wt,zt.width,zt.height,ht,zt.data):X.texSubImage2D(X.TEXTURE_2D,Re,dt,wt,Oe,Ge,ht,$e,zt);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Cn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,xi),X.pixelStorei(X.UNPACK_SKIP_ROWS,In),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yn),Re===0&&Y.generateMipmaps&&X.generateMipmap(Yt),He.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,le=null,ce=null,Q=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Y,le,ce,Q)},this.initRenderTarget=function(D){be.get(D).__webglFramebuffer===void 0&&nt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?nt.setTextureCube(D,0):D.isData3DTexture?nt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?nt.setTexture2DArray(D,0):nt.setTexture2D(D,0),He.unbindTexture()},this.resetState=function(){z=0,I=0,k=null,He.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const lt={scene:{background:16},renderer:{maxPixelRatio:2,antialias:!0},dna:{rotYSpeed:.3,wobbleXAmp:.05,wobbleXSpeed:.25,scale:1.8,turns:2,pointsPerTurn:40,stepY:.3,radius:1.5,sphereRadius:.4,sphereSegments:24,rungRadius:.05,rungLength:1.2,rungSegments:8,rungEvery:4},blackHole:{rotYSpeed:1.2,wobbleXAmp:.03,wobbleXSpeed:.2,scale:1.8,core:{radius:1.2,widthSegments:48,heightSegments:48,color:5,roughness:.3,metalness:1,emissive:34,emissiveIntensity:.6},glow:{radius:1.7,color:3381759,opacity:.45},halo:{radius:2.4,color:1122884,opacity:.18}},stars:{far:{count:2e3,spread:1200,size:.6,color:10469366,rotYSpeed:.01,driftXAmp:2,driftXSpeed:.02,driftYAmp:1.5,driftYSpeed:.015},near:{count:1200,spread:700,size:1,color:14542847,rotYSpeed:-.02,driftXAmp:3,driftXSpeed:.03,driftYAmp:2,driftYSpeed:.02,phaseOffset:1.2}},camera:{fov:60,near:.1,far:2e3,basePos:{x:0,y:1,z:16},bobXAmp:.3,bobXSpeed:.1,bobYAmp:.15,bobYSpeed:.07},lights:{ambient:{color:6724044,intensity:.6},directional:{color:16777215,intensity:.8,position:new ae(5,10,7)}}};function XC({className:a="",height:e="60vh"}){const i=V.useRef(null),r=V.useRef(null),l=V.useRef(null),c=V.useRef(null),f=V.useRef(null),d=V.useRef(null);return V.useEffect(()=>{const m=i.current;if(!m)return;const h=()=>{const tt=m.clientWidth,be=typeof e=="number"?e:m.clientHeight||400;return{w:tt,h:Number(be)}},_=new jT;_.background=new At(lt.scene.background),l.current=_;const{w:v,h:y}=h(),S=new gi(lt.camera.fov,v/y,lt.camera.near,lt.camera.far);S.position.set(lt.camera.basePos.x,lt.camera.basePos.y,lt.camera.basePos.z),c.current=S;let E=r.current;E||(E=new kC({antialias:lt.renderer.antialias,alpha:!0}),E.outputColorSpace=ri,r.current=E,m.appendChild(E.domElement)),E.setPixelRatio(Math.min(window.devicePixelRatio||1,lt.renderer.maxPixelRatio)),E.setSize(v,y);const b=new a1(lt.lights.ambient.color,lt.lights.ambient.intensity),x=new i1(lt.lights.directional.color,lt.lights.directional.intensity);x.position.copy(lt.lights.directional.position),_.add(b,x);const g=tt=>{tt.traverse(be=>{be.geometry?.dispose?.(),be.material&&(Array.isArray(be.material)?be.material.forEach(nt=>nt.dispose?.()):be.material.dispose?.())})},A=(tt,be,nt,Ot)=>{const Lt=new Li,P=new Float32Array(tt*3);for(let J=0;J<tt;J++)P[J*3+0]=Hd.randFloatSpread(be),P[J*3+1]=Hd.randFloatSpread(be),P[J*3+2]=Hd.randFloatSpread(be);Lt.setAttribute("position",new _i(P,3));const w=new Ey({size:nt,transparent:!0,color:Ot});return new JT(Lt,w)},T=new Dr,R=A(lt.stars.far.count,lt.stars.far.spread,lt.stars.far.size,lt.stars.far.color),N=A(lt.stars.near.count,lt.stars.near.spread,lt.stars.near.size,lt.stars.near.color);T.add(R,N),_.add(T);const z=new Dr;_.add(z);const{turns:I,pointsPerTurn:k,stepY:U,radius:L,sphereRadius:F,sphereSegments:ie,rungRadius:oe,rungLength:ue,rungSegments:de,rungEvery:H,scale:K}=lt.dna,q=new Os(F,ie,ie),Se=new Lp(oe,oe,ue,de),O=new $0({color:49151,metalness:.8,roughness:.2,emissive:2245734,emissiveIntensity:.4}),ee=I*k,_e=new K0(q,O,ee*2),Me=new K0(Se,O,Math.floor(ee/H));_e.instanceMatrix.setUsage(R0),Me.instanceMatrix.setUsage(R0);const Ce=new qt,ne=new Zs,pe=new ae,Ee=new ae(1,1,1);let Ne=0;for(let tt=0;tt<ee;tt++){const be=tt/k*Math.PI*2,nt=tt*U-ee*U/2,Ot=Math.cos(be)*L,Lt=Math.sin(be)*L,P=Math.cos(be+Math.PI)*L,w=Math.sin(be+Math.PI)*L;pe.set(Ot,nt,Lt),ne.identity(),Ce.compose(pe,ne,Ee),_e.setMatrixAt(Ne++,Ce),pe.set(P,nt,w),ne.identity(),Ce.compose(pe,ne,Ee),_e.setMatrixAt(Ne++,Ce)}_e.instanceMatrix.needsUpdate=!0,z.add(_e);let je=0;for(let tt=0;tt<ee;tt+=H){const be=tt/k*Math.PI*2,nt=tt*U-ee*U/2,Ot=Math.cos(be)*L,Lt=Math.sin(be)*L,P=Math.cos(be+Math.PI)*L,w=Math.sin(be+Math.PI)*L,J=(Ot+P)/2,he=(Lt+w)/2;pe.set(J,nt,he);const ve=new ae(P-Ot,0,w-Lt).normalize(),fe=new ae(0,1,0);ne.setFromUnitVectors(fe,ve),Ce.compose(pe,ne,Ee),Me.setMatrixAt(je++,Ce)}Me.instanceMatrix.needsUpdate=!0,z.add(Me),z.scale.set(K,K,K);const Ve=lt.blackHole,Et=new Dr,mt=new Yn(new Os(Ve.core.radius,Ve.core.widthSegments,Ve.core.heightSegments),new $0({color:Ve.core.color,roughness:Ve.core.roughness,metalness:Ve.core.metalness,emissive:Ve.core.emissive,emissiveIntensity:Ve.core.emissiveIntensity})),X=new Yn(new Os(Ve.glow.radius,32,32),new mu({color:Ve.glow.color,transparent:!0,opacity:Ve.glow.opacity,blending:fu,side:Pn})),Rt=new Yn(new Os(Ve.halo.radius,32,32),new mu({color:Ve.halo.color,transparent:!0,opacity:Ve.halo.opacity,blending:fu,side:Pn}));Et.add(mt,X,Rt),Et.scale.set(Ve.scale,Ve.scale,Ve.scale),_.add(Et);const Qe=new s1,St=()=>{const tt=Qe.getDelta(),be=Qe.elapsedTime;z.rotation.y+=lt.dna.rotYSpeed*tt,z.rotation.x=Math.sin(be*lt.dna.wobbleXSpeed)*lt.dna.wobbleXAmp,Et.rotation.y-=lt.blackHole.rotYSpeed*tt,Et.rotation.x=Math.cos(be*lt.blackHole.wobbleXSpeed)*lt.blackHole.wobbleXAmp,T.rotation.y+=lt.stars.far.rotYSpeed*tt,R.position.x=Math.sin(be*lt.stars.far.driftXSpeed)*lt.stars.far.driftXAmp,R.position.y=Math.cos(be*lt.stars.far.driftYSpeed)*lt.stars.far.driftYAmp,N.rotation.y+=lt.stars.near.rotYSpeed*tt,N.position.x=Math.sin(be*lt.stars.near.driftXSpeed+lt.stars.near.phaseOffset)*lt.stars.near.driftXAmp,N.position.y=Math.cos(be*lt.stars.near.driftYSpeed+lt.stars.near.phaseOffset*.666)*lt.stars.near.driftYAmp,S.position.x=Math.sin(be*lt.camera.bobXSpeed)*lt.camera.bobXAmp,S.position.y=lt.camera.basePos.y+Math.sin(be*lt.camera.bobYSpeed)*lt.camera.bobYAmp,S.lookAt(0,0,0),E.render(_,S),f.current=requestAnimationFrame(St)};St();const He=()=>{d.current&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{const{w:tt,h:be}=h();E.setSize(tt,be),S.aspect=tt/be,S.updateProjectionMatrix()})};return window.addEventListener("resize",He),()=>{f.current&&cancelAnimationFrame(f.current),d.current&&cancelAnimationFrame(d.current),window.removeEventListener("resize",He),g(T),g(z),g(Et),_.remove(T,z,Et),r.current?.dispose(),r.current&&m.contains(r.current.domElement)&&m.removeChild(r.current.domElement),r.current=null,l.current=null,c.current=null}},[e]),B.jsxs("header",{className:a,style:{position:"relative",width:"100%",height:e},children:[B.jsx("div",{ref:i,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}}),B.jsx("div",{style:{position:"relative",zIndex:1,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"auto"}})]})}const WC=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Ls=64;function jC(){const a=_u(),{setToken:e,setUsername:i,setRole:r}=Mu(),[l,c]=V.useState(""),[f,d]=V.useState(""),[m,h]=V.useState(!1),[_,v]=V.useState(""),[y,S]=V.useState(""),[E,b]=V.useState(""),x=async()=>{v(""),S(""),b(""),h(!0);const g=l.trim();if(g?g.length>Ls?v("Email is too long."):WC.test(g)||v("Email format is invalid."):v("Email is required."),f?f.length>Ls&&S("Password is too long."):S("Password is required."),!g||!f||g.length>Ls||f.length>Ls){h(!1);return}try{const A=await Ci.post("/api/auth/login",{email:g,password:f});if(!A.token){b("Login succeeded but no token was returned.");return}e(A.token),i(A.username??null),r(A.role??null),a(ll.Dashboard,{replace:!0})}catch(A){const T=A;if(T?.response?.status===400&&T.response.data?.errors){const R=T.response.data.errors;R.email?.length&&v(R.email[0]),R.password?.length&&S(R.password[0]),R.general?.length&&b(R.general[0]),!R.email?.length&&!R.password?.length&&!R.general?.length&&b("Invalid input.")}else T?.response?.status===401?b("Invalid email or password."):b("Login failed. Please try again.");d("")}finally{h(!1)}};return B.jsx("div",{className:"sectionShell",children:B.jsxs("section",{className:"sectionCard",children:[B.jsx("h1",{className:"pageTitle",children:"Login"}),B.jsx("div",{className:"accentDivider"}),B.jsxs("div",{className:"formColumn formColumnWide",children:[B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${_?"inputError":""}`,placeholder:"Email",type:"email",value:l,onChange:g=>c(g.target.value),"aria-invalid":!!_,"aria-describedby":"email-error",maxLength:Ls}),B.jsx("span",{id:"email-error",className:"errorFloat",children:_})]}),B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${y?"inputError":""}`,placeholder:"Password",type:"password",value:f,onChange:g=>d(g.target.value),"aria-invalid":!!y,"aria-describedby":"password-error",maxLength:Ls}),B.jsx("span",{id:"password-error",className:"errorFloat",children:y})]}),B.jsx("button",{onClick:x,className:"sectionButton",style:{alignSelf:"center"},disabled:m,children:m?"Logging in...":"Login"}),B.jsx("div",{className:"generalErrorSlot",role:"alert",children:m?B.jsx("span",{className:"spinner"}):E&&B.jsx("span",{className:"errorText",children:E})})]})]})})}function qC(){const[a,e]=jv(),i=(a.get("tab")||"").toLowerCase(),l=Object.values(gn).includes(i);V.useEffect(()=>{l||e({tab:gn.GameOverview},{replace:!0})},[l,e]);const c=l?i:gn.GameOverview,f=m=>{e({tab:m},{replace:!0})},d=()=>{switch(c){case gn.GameOverview:return B.jsx(ub,{});case gn.Features:return B.jsx(fb,{});case gn.Media:return B.jsx(db,{});case gn.FAQ:return B.jsx(hb,{});case gn.Feedback:return B.jsx(mb,{});case gn.About:return B.jsx(gb,{});case gn.Login:return B.jsx(jC,{});default:return B.jsx("h1",{children:"Not Found"})}};return B.jsxs("div",{className:"main-layout",children:[B.jsxs(lb,{className:"side-bar",children:[B.jsx("div",{style:{marginBottom:"3rem",display:"flex",justifyContent:"center"},children:B.jsx(ob,{size:"100%"})}),rb.map(m=>B.jsx(cb,{className:`sideBarItemButton ${c===m.linkTo?"selected":""}`,name:m.name,onClick:()=>f(m.linkTo),disabled:m.disabled,tooltip:m.tooltip},m.name))]}),B.jsxs("div",{className:"info-panel",children:[B.jsx(XC,{height:"40vh"}),B.jsx(sb,{className:"details-view",children:d()})]})]})}function YC(){return B.jsx(qC,{})}const ai={Overview:"overview",FeedBack:"feedback",Files:"files",Register:"register",Users:"users"},ZC=[{name:"Overview",linkTo:ai.Overview,disabled:!1},{name:"Manage Feedback",linkTo:ai.FeedBack,disabled:!1},{name:"Manage Files",linkTo:ai.Files,disabled:!1},{name:"User Registration",linkTo:ai.Register,disabled:!1},{name:"User Management",linkTo:ai.Users,disabled:!1}];function KC(a){if(!a||a<=0)return"—";const e=["B","KB","MB","GB","TB"],i=Math.min(Math.floor(Math.log(a)/Math.log(1024)),e.length-1),r=a/Math.pow(1024,i);return`${r.toFixed(r>=100||i===0?0:r>=10?1:2)} ${e[i]}`}function QC({username:a="",fileCount:e=null,fileBytesTotal:i=null}){const[r,l]=V.useState(!1),[c,f]=V.useState(null),[d,m]=V.useState(null),[h,_]=V.useState(!1),[v,y]=V.useState(null),[S,E]=V.useState(null);V.useEffect(()=>{(async()=>{l(!0);try{const g=await Ci.get("/api/auth/users"),A=g.length,T=g.filter(R=>(R.role??"").toLowerCase()==="admin").length;f(A),m(T)}catch{f(null),m(null)}finally{l(!1)}})(),(async()=>{_(!0);try{const g=await Ci.get("/api/feedback"),A=g.length,T=g.reduce((N,z)=>N+(Number(z.rating)||0),0),R=A>0?T/A:null;y(A),E(R)}catch{y(null),E(null)}finally{_(!1)}})()},[]);const b=g=>g??"—",x=g=>g==null?"—":`${g.toFixed(1)} ★`;return B.jsxs("div",{style:{width:"100%",maxWidth:900,margin:"0 auto"},children:[B.jsxs("h1",{style:{fontSize:"1.8rem",marginBottom:"1rem"},children:["Welcome ",a]}),B.jsx("p",{style:{color:"#94a3b8",marginBottom:"1.5rem",fontSize:"1rem"},children:"A quick snapshot of your workspace: user totals (admins highlighted) and feedback health. File stats will populate once storage is connected."}),B.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem"},children:[B.jsxs("div",{style:{padding:"1rem",borderRadius:8,background:"rgba(148,163,184,0.05)",border:"1px solid #475569",textAlign:"center"},children:[B.jsx("div",{style:{fontSize:"1.6rem",fontWeight:700},children:e??"—"}),B.jsx("div",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:"Files"}),B.jsxs("div",{style:{color:"#a8cfff",fontSize:"0.85rem",marginTop:4},children:["Total size: ",KC(i)]})]}),B.jsxs("div",{style:{padding:"1rem",borderRadius:8,background:"rgba(148,163,184,0.05)",border:"1px solid #475569",textAlign:"center"},children:[B.jsx("div",{style:{fontSize:"1.6rem",fontWeight:700},children:h?B.jsx("span",{className:"spinner"}):b(v)}),B.jsx("div",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:"Feedback"}),B.jsxs("div",{style:{color:"#a8cfff",fontSize:"0.85rem",marginTop:4},children:["Avg rating: ",h?"…":x(S)]})]}),B.jsxs("div",{style:{padding:"1rem",borderRadius:8,background:"rgba(148,163,184,0.05)",border:"1px solid #475569",textAlign:"center"},children:[B.jsx("div",{style:{fontSize:"1.6rem",fontWeight:700},children:r?B.jsx("span",{className:"spinner"}):b(c)}),B.jsx("div",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:"Users"}),B.jsxs("div",{style:{color:"#a8cfff",fontSize:"0.85rem",marginTop:4},children:["Admins: ",r?"…":b(d)]})]})]})]})}async function JC(){return await Ci.get("/api/feedback")}async function $C(a){await Ci.delete(`/api/feedback/${a}`)}function e2(){const[a,e]=V.useState([]),[i,r]=V.useState(!1),[l,c]=V.useState(null),[f,d]=V.useState(""),m=async()=>{r(!0),d("");try{const v=await JC();e(v),c(new Date().toLocaleString())}catch{d("Failed to load feedback.")}finally{r(!1)}};V.useEffect(()=>{m()},[]);const h=async v=>{d("");const y=a;e(S=>S.filter(E=>E.id!==v));try{await $C(v)}catch{e(y),d("Failed to delete feedback.")}},_=v=>{if(!v||v<1)return null;const y="★".repeat(Math.min(5,v)),S="☆".repeat(Math.max(0,5-v));return B.jsxs("span",{className:"starsRow","aria-label":`Rating: ${v} out of 5`,style:{fontSize:"0.95rem"},children:[y,S]})};return B.jsxs("div",{className:"w-100 max-900",children:[B.jsxs("div",{className:"sectionHeader",children:[B.jsxs("div",{children:[B.jsx("h1",{style:{margin:0},children:"Feedback Inbox"}),B.jsxs("div",{className:"metaSubtle",children:[a.length," item",a.length!==1?"s":"",l?` • Last refreshed: ${l}`:""]})]}),B.jsxs("button",{className:"sectionButton",onClick:m,disabled:i,"aria-label":"Refresh feedback list",title:"Refresh",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[i?B.jsx("span",{className:"spinner"}):null,i?"Refreshing...":"Refresh"]})]}),f?B.jsx("div",{className:"errorText",style:{marginBottom:"0.75rem"},children:f}):null,B.jsx("div",{className:"listStack",children:a.length===0?B.jsx("p",{children:"No feedback available."}):a.map(v=>B.jsxs("article",{className:"card",children:[B.jsxs("header",{className:"cardHeader",children:[B.jsxs("div",{children:[B.jsx("strong",{className:"breakText",children:v.name}),B.jsx("div",{className:"metaSubtle",children:v.datePosted})]}),B.jsx("button",{className:"sectionButton",onClick:()=>h(v.id),"aria-label":`Delete feedback from ${v.name}`,title:"Delete",children:"Delete"})]}),v.rating?B.jsx("div",{style:{marginBottom:"0.5rem",color:"#a8d9ff"},children:_(v.rating)}):null,B.jsx("div",{className:"cardBody breakText",children:v.message})]},v.id))})]})}const Rv=[{id:"f_01a2b3c4",name:"image1",description:"Some Random image",type:"image/png",extension:"png",sizeBytes:1234567,uploadedAt:new Date(Date.now()-1e3*60*60*2).toISOString()},{id:"f_05aa22dd",name:"SomeDocument",description:"Stuff",type:"application/pdf",extension:"pdf",sizeBytes:3456789,uploadedAt:new Date(Date.now()-1e3*60*60*26).toISOString()},{id:"f_9988ff00",name:"SomeData",description:"Sample CSV export",type:"text/csv",extension:"csv",sizeBytes:456789,uploadedAt:new Date(Date.now()-1e3*60*7).toISOString()}];function wv(a){if(!a||a<=0)return"0 B";const e=["B","KB","MB","GB","TB"],i=Math.min(Math.floor(Math.log(a)/Math.log(1024)),e.length-1),r=a/Math.pow(1024,i);return`${r.toFixed(r>=100||i===0?0:r>=10?1:2)} ${e[i]}`}function t2(){const[a,e]=V.useState(!0),[i,r]=V.useState(Rv),[l,c]=V.useState(""),[f,d]=V.useState(new Set),[m,h]=V.useState(!1),_=g=>{e(g),d(new Set),r(g?Rv:[])},v=V.useMemo(()=>{const g=l.trim().toLowerCase();return g?i.filter(A=>(A.name+"."+A.extension).toLowerCase().includes(g)||A.type.toLowerCase().includes(g)||A.extension.toLowerCase().includes(g)||(A.description??"").toLowerCase().includes(g)):i},[i,l]),y=V.useMemo(()=>i.reduce((g,A)=>g+(A.sizeBytes||0),0),[i]),S=v.length>0&&v.every(g=>f.has(g.id)),E=()=>{if(S){const g=new Set(f);v.forEach(A=>g.delete(A.id)),d(g)}else{const g=new Set(f);v.forEach(A=>g.add(A.id)),d(g)}},b=g=>{const A=new Set(f);A.has(g)?A.delete(g):A.add(g),d(A)};return B.jsx("div",{className:"sectionShell",children:B.jsxs("section",{className:"sectionCard",children:[B.jsx("h1",{className:"pageTitle",children:"File Management"}),B.jsx("p",{className:"pageSubtitle",children:"Upload, preview, download, and organize files"}),B.jsx("div",{className:"accentDivider"}),B.jsxs("div",{className:"sectionHeader",children:[B.jsx("div",{children:B.jsxs("div",{className:"metaSubtle",children:[B.jsx("strong",{children:i.length})," file",i.length!==1?"s":""," •"," ",B.jsx("strong",{children:wv(y)})," total"]})}),B.jsxs("div",{className:"stack-h",style:{gap:"0.5rem",flexWrap:"wrap"},children:[B.jsxs("label",{className:"metaSubtle",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[B.jsx("input",{type:"checkbox",checked:a,onChange:g=>_(g.target.checked)}),"Demo data"]}),B.jsx("input",{className:"inputField",placeholder:"Search (name, description, type, extension)…",value:l,onChange:g=>c(g.target.value),style:{maxWidth:320}}),B.jsx("button",{className:"sectionButton",title:"Upload (coming soon)",onClick:()=>h(!0),children:"Upload"}),B.jsx("button",{className:"sectionButton",title:"Delete selected (coming soon)",disabled:!0,children:"Delete Selected"})]})]}),B.jsx("div",{className:"card",style:{marginBottom:"0.75rem"},children:B.jsxs("div",{className:"stack-h",style:{display:"grid",gridTemplateColumns:"28px 2fr 1fr 110px 180px 1fr",gap:"0.75rem",alignItems:"center"},children:[B.jsx("input",{type:"checkbox",checked:S,onChange:E,"aria-label":"Select all"}),B.jsx("div",{className:"metaSubtle",children:"Name / Description"}),B.jsx("div",{className:"metaSubtle",children:"Type"}),B.jsx("div",{className:"metaSubtle",style:{textAlign:"right"},children:"Size"}),B.jsx("div",{className:"metaSubtle",style:{textAlign:"right"},children:"Uploaded"}),B.jsx("div",{className:"metaSubtle",style:{textAlign:"right"},children:"Actions"})]})}),B.jsx("div",{className:"listStack",children:v.length===0?B.jsx("p",{style:{marginTop:"0.5rem"},children:i.length===0?"No files yet. Flip on “Demo data” to preview the layout.":"No files match your search."}):v.map((g,A)=>B.jsx("article",{className:"card",children:B.jsxs("div",{style:{display:"grid",gridTemplateColumns:"28px 2fr 1fr 110px 180px 1fr",gap:"0.75rem",alignItems:"center"},children:[B.jsx("input",{type:"checkbox",checked:f.has(g.id),onChange:()=>b(g.id),"aria-label":`Select ${g.name}.${g.extension}`}),B.jsxs("div",{style:{overflow:"hidden"},children:[B.jsxs("strong",{className:"breakText",children:[g.name,".",g.extension]}),g.description?B.jsx("div",{className:"metaSubtle breakText",style:{marginTop:"0.15rem"},children:g.description}):null]}),B.jsx("div",{className:"metaSubtle breakText",children:g.type}),B.jsx("div",{style:{textAlign:"right"},children:wv(g.sizeBytes)}),B.jsx("div",{className:"metaSubtle",style:{textAlign:"right",whiteSpace:"nowrap"},children:new Date(g.uploadedAt).toLocaleString()}),B.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem",flexWrap:"wrap"},children:[B.jsx("button",{className:"sectionButton",disabled:!0,title:"Preview (coming soon)",children:"Preview"}),B.jsx("button",{className:"sectionButton",disabled:!0,title:"Download (coming soon)",children:"Download"}),B.jsx("button",{className:"sectionButton",disabled:!0,title:"Delete (coming soon)",children:"Delete"})]})]})},g.id||`row-${A}`))}),B.jsx(i2,{open:m,onClose:()=>h(!1),onUploadedPlaceholder:g=>{const A=g.name.trim(),T=A.lastIndexOf("."),R=T>0?A.slice(0,T):A,N=T>0?A.slice(T+1).toLowerCase():"bin";r(z=>[{id:`temp_${Date.now()}`,name:R||"untitled",description:g.description,type:g.type||"application/octet-stream",extension:N,sizeBytes:g.size,uploadedAt:new Date().toISOString()},...z])}})]})})}const Cv=20*1024*1024,n2=["image/png","image/jpeg","application/pdf","text/csv"];function i2({open:a,onClose:e,onUploadedPlaceholder:i}){const[r,l]=V.useState(null),[c,f]=V.useState(""),[d,m]=V.useState(""),[h,_]=V.useState(!1),v=V.useRef(null);if(V.useEffect(()=>{if(a){setTimeout(()=>v.current?.focus(),0);const x=g=>g.key==="Escape"&&!h&&e();return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)}else l(null),f(""),m(""),_(!1)},[a,e,h]),!a)return null;const y=x=>x?x.size>Cv?`File too large (max ${Math.round(Cv/(1024*1024))} MB).`:n2.includes(x.type)?"":`Unsupported type: ${x.type||"unknown"}.`:"Please choose a file.",S=x=>{m("");const g=x.target.files?.[0]??null;l(g);const A=y(g);A&&m(A)},E=async()=>{const x=y(r);if(x){m(x);return}_(!0),setTimeout(()=>{r&&i({name:r.name,size:r.size,type:r.type||"application/octet-stream",description:c.trim()||void 0}),_(!1),e()},800)},b=x=>{x.target===x.currentTarget&&!h&&e()};return B.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"upload-title",onClick:b,style:{position:"fixed",inset:0,zIndex:50,padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.65)",backdropFilter:"blur(2px)"},children:B.jsxs("div",{className:"card",style:{width:"100%",maxWidth:520,backgroundColor:"rgba(17, 24, 39, 0.96)",borderColor:"#2196f3"},onClick:x=>x.stopPropagation(),children:[B.jsx("div",{className:"cardHeader",children:B.jsx("strong",{id:"upload-title",children:"Upload File"})}),B.jsxs("div",{className:"stack-v",style:{gap:"0.75rem"},children:[B.jsx("input",{ref:v,className:"inputField",type:"file",onChange:S,disabled:h,"aria-describedby":"upload-error"}),B.jsx("input",{className:"inputField",placeholder:"Description (optional)",value:c,onChange:x=>f(x.target.value),disabled:h}),B.jsx("div",{className:"generalErrorSlot",id:"upload-error",children:d?B.jsx("span",{className:"errorText",children:d}):B.jsx("span",{})})]}),B.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem",marginTop:"0.75rem"},children:[B.jsx("button",{className:"sectionButton",onClick:E,disabled:h||!!y(r),"aria-busy":h,title:"Upload",children:h?"Uploading…":"Upload"}),B.jsx("button",{className:"sectionButton",onClick:e,disabled:h,title:"Close",children:"Close"})]})]})})}const a2=15e3,r2=6e3,s2="System";function gh(a){return(a??"").toLowerCase().includes("healthy")}function Ny(a){return a===null?"#94a3b8":a?"#16a34a":"#dc2626"}function _h({name:a,healthy:e}){return B.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:20,lineHeight:1.2},children:[B.jsxs("span",{style:{color:"#cbd5e1",whiteSpace:"nowrap"},children:[a,":"]}),B.jsx("span",{style:{color:Ny(e),fontWeight:700,letterSpacing:.2,whiteSpace:"nowrap"},children:e===null?"—":e?"Healthy":"Unhealthy"})]})}function o2(){const{token:a}=Mu(),[e,i]=V.useState(null),[r,l]=V.useState(""),[c,f]=V.useState(null),[d,m]=V.useState(!1),h=V.useRef(null),_=V.useRef(null),v=V.useMemo(()=>{const g=e?gh(e.serverStatus):null,A=e?gh(e.databaseStatus):null,T=e?gh(e.minioStatus):null;return{server:g,db:A,minio:T,overallHealthy:g!==null&&A!==null&&T!==null?g&&A&&T:null}},[e]),y=async()=>{if(!a){l("Not logged in."),f(null);return}xp(a),m(!0),l(""),_.current&&window.clearTimeout(_.current),_.current=window.setTimeout(()=>{l(A=>A||"Request timed out")},r2);const g=performance.now();try{const A=await Ci.get("/api/health");if(!A||typeof A.serverStatus!="string"||typeof A.databaseStatus!="string"||typeof A.minioStatus!="string"||typeof A.timestamp!="string")throw new Error("Unexpected health payload");i(A),f(Math.round(performance.now()-g)),l("")}catch(A){if(A&&typeof A=="object"){const T=A;if(typeof T.serverStatus=="string"&&typeof T.databaseStatus=="string"&&typeof T.minioStatus=="string"&&typeof T.timestamp=="string")i(T),f(Math.round(performance.now()-g)),l("");else{const R=typeof A=="string"?A:A?.message||A?.title||"Network or authorization error";l(R),f(null)}}else{const T=typeof A=="string"?A:A?.message||A?.title||"Network or authorization error";l(T),f(null)}}finally{m(!1),_.current&&(window.clearTimeout(_.current),_.current=null)}};V.useEffect(()=>(y(),h.current&&window.clearInterval(h.current),h.current=window.setInterval(y,a2),()=>{h.current&&window.clearInterval(h.current),_.current&&window.clearTimeout(_.current)}),[a]);const S=v.overallHealthy===null?null:!!v.overallHealthy,E=Ny(S),b=S===null?"—":S?"Healthy":"Unhealthy",x=!r&&S!==null?S?"All services are running":"One or more services are down":"";return B.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.7rem",pointerEvents:"none",maxWidth:"90%",fontSize:16},children:[B.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem",flexWrap:"wrap",justifyContent:"center",pointerEvents:"auto",padding:"0.15rem 0.25rem"},children:[B.jsxs("div",{title:d?"Checking health…":"Service health",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",padding:"0.5rem 0.9rem",borderRadius:999,border:`1px solid ${E}`,color:E,fontWeight:800,fontSize:16,userSelect:"none",opacity:d?.8:1,letterSpacing:.2},children:[B.jsxs("span",{children:[s2,": ",b]}),c!==null&&B.jsxs("span",{style:{color:"#94a3b8",fontWeight:700,fontSize:13,minWidth:48,textAlign:"right"},children:[c," ms"]})]}),B.jsx(_h,{name:"API",healthy:v.server}),B.jsx(_h,{name:"Database",healthy:v.db}),B.jsx(_h,{name:"MinIO",healthy:v.minio}),B.jsx("div",{style:{color:"#94a3b8",fontSize:14},children:e?.timestamp?new Date(e.timestamp).toLocaleString():"—"})]}),r?B.jsx("div",{className:"errorText",style:{marginTop:"0.2rem",padding:"0.4rem 0.65rem",borderRadius:8,border:"1px solid #7f1d1d",background:"rgba(127,29,29,0.25)",color:"#fecaca",fontSize:13,lineHeight:1.2,maxWidth:700,pointerEvents:"auto"},"aria-live":"polite",role:"status",children:r}):x?B.jsx("div",{style:{marginTop:"0.2rem",color:S?"#86efac":"#fca5a5",fontSize:20,fontWeight:700,pointerEvents:"auto"},children:x}):null]})}const Dv=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Za=64;function l2(){const[a,e]=V.useState(""),[i,r]=V.useState(""),[l,c]=V.useState(""),[f,d]=V.useState(!1),[m,h]=V.useState(""),[_,v]=V.useState(""),[y,S]=V.useState(""),[E,b]=V.useState(""),[x,g]=V.useState(""),A=async()=>{h(""),v(""),S(""),b(""),g(""),d(!0);const T=a.trim().toLowerCase();if(T?T.length>Za?h("Email is too long."):Dv.test(T)||h("Email format is invalid."):h("Email is required."),i?i.length>Za&&v("Password is too long."):v("Password is required."),l?i&&l&&i!==l&&S("Passwords do not match."):S("Please confirm your password."),!T||!i||!l||T.length>Za||i.length>Za||l.length>Za||!Dv.test(T)||i!==l){d(!1);return}try{const N=await Ci.post("/api/auth/register",{email:T,password:i}),z=N.username??T.split("@")[0],I=N.role??"USER";g(`User "${z}" created with role "${I}".`),e(""),r(""),c("")}catch(N){const z=N;if(z?.response?.status===400&&z.response.data?.errors){const I=z.response.data.errors;I.email?.length&&h(I.email[0]),I.password?.length&&v(I.password[0]),I.general?.length&&b(I.general[0]),!I.email?.length&&!I.password?.length&&!I.general?.length&&b("Invalid input.")}else z?.response?.status===403?b("You must be an admin to register users."):b("Registration failed. Please try again.")}finally{d(!1)}};return B.jsx("div",{className:"sectionShell",children:B.jsxs("section",{className:"sectionCard",children:[B.jsx("h1",{className:"pageTitle",children:"User Registration"}),B.jsx("p",{className:"pageSubtitle",children:"Admins can add new users here"}),B.jsx("div",{className:"accentDivider"}),B.jsxs("div",{className:"formColumn formColumnWide",children:[B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${m?"inputError":""}`,placeholder:"Email",type:"email",value:a,onChange:T=>e(T.target.value),"aria-invalid":!!m,"aria-describedby":"reg-email-error",maxLength:Za,disabled:f}),B.jsx("span",{id:"reg-email-error",className:"errorFloat",children:m})]}),B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${_?"inputError":""}`,placeholder:"Password",type:"password",value:i,onChange:T=>r(T.target.value),"aria-invalid":!!_,"aria-describedby":"reg-password-error",maxLength:Za,disabled:f}),B.jsx("span",{id:"reg-password-error",className:"errorFloat",children:_})]}),B.jsxs("div",{className:"field",children:[B.jsx("input",{className:`inputField ${y?"inputError":""}`,placeholder:"Confirm Password",type:"password",value:l,onChange:T=>c(T.target.value),"aria-invalid":!!y,"aria-describedby":"reg-confirm-error",maxLength:Za,disabled:f}),B.jsx("span",{id:"reg-confirm-error",className:"errorFloat",children:y})]}),B.jsx("button",{onClick:A,className:"sectionButton",style:{alignSelf:"center"},disabled:f,"aria-busy":f,children:f?"Registering...":"Register User"}),B.jsx("div",{className:"generalErrorSlot",role:"status","aria-live":"polite",children:f?B.jsx("span",{className:"spinner"}):x?B.jsx("span",{style:{color:"#7CFC00"},children:x}):E&&B.jsx("span",{className:"errorText",children:E})})]})]})})}async function c2(){return await Ci.get("/api/auth/users")}async function u2(a){return await Ci.post("/api/auth/set-role",{...a,replaceExisting:a.replaceExisting??!0})}async function f2(a){await Ci.post("/api/auth/set-enabled",a)}function d2(){const[a,e]=V.useState([]),[i,r]=V.useState(!1),[l,c]=V.useState(""),[f,d]=V.useState(null),[m,h]=V.useState({}),[_,v]=V.useState({}),y=async()=>{r(!0),c("");try{const x=await c2();e(x),d(new Date().toLocaleString())}catch(x){c(x?.response?.status===403?"You must be an admin to view users.":"Failed to load users.")}finally{r(!1)}};V.useEffect(()=>{y()},[]);const S=(x,g)=>{e(A=>A.map(T=>T.email?.toLowerCase()===x.toLowerCase()?{...T,...g}:T))},E=async(x,g)=>{if(!x)return;c("");const A=a.find(T=>T.email?.toLowerCase()===x.toLowerCase());S(x,{role:g}),h(T=>({...T,[x]:!0}));try{await u2({email:x,role:g,replaceExisting:!0})}catch(T){A&&S(x,{role:A.role??"User"}),T?.response?.status===400&&T.response.data?.errors?.role?.[0]?c(T.response.data.errors.role[0]):T?.response?.status===404?c("User not found."):T?.response?.status===403?c("You must be an admin to set roles."):c("Failed to update role.")}finally{h(T=>({...T,[x]:!1}))}},b=async(x,g)=>{if(!x)return;c("");const A=a.find(T=>T.email?.toLowerCase()===x.toLowerCase());S(x,{enabled:g}),v(T=>({...T,[x]:!0}));try{await f2({email:x,enabled:g})}catch(T){A&&S(x,{enabled:A.enabled}),T?.response?.status===400&&T.response.data?.errors?.email?.[0]?c(T.response.data.errors.email[0]):T?.response?.status===404?c("User not found."):T?.response?.status===403?c("You must be an admin to change status."):c("Failed to update user status.")}finally{v(T=>({...T,[x]:!1}))}};return B.jsxs("div",{className:"w-100 max-900",children:[B.jsxs("div",{className:"sectionHeader",children:[B.jsxs("div",{children:[B.jsx("h1",{style:{margin:0},children:"User Management"}),B.jsxs("div",{className:"metaSubtle",children:[a.length," user",a.length!==1?"s":"",f?` • Last refreshed: ${f}`:""]})]}),B.jsxs("button",{className:"sectionButton",onClick:y,disabled:i,"aria-label":"Refresh users",title:"Refresh",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[i?B.jsx("span",{className:"spinner"}):null,i?"Refreshing...":"Refresh"]})]}),l?B.jsx("div",{className:"errorText",style:{marginBottom:"0.75rem"},children:l}):null,B.jsx("div",{className:"listStack",children:a.length===0&&!i?B.jsx("p",{children:"No users found."}):a.map((x,g)=>{const A=x.email??"",T=!!m[A],R=!!_[A];return B.jsxs("article",{className:"card",children:[B.jsxs("header",{className:"cardHeader",children:[B.jsxs("div",{children:[B.jsxs("strong",{className:"breakText",children:[x.username??"(no username)"," ",B.jsxs("span",{className:"metaSubtle",children:["(",A||"no-email",")"]})]}),B.jsxs("div",{className:"metaSubtle",children:["Status: ",x.enabled?"Enabled":"Disabled"]})]}),B.jsxs("div",{className:"stack-h",style:{gap:"0.5rem"},children:[R?B.jsx("span",{className:"spinner"}):null,B.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[B.jsx("input",{type:"checkbox",checked:x.enabled,onChange:N=>b(A,N.target.checked),disabled:R,"aria-label":`Toggle ${A} enabled status`}),B.jsx("span",{children:x.enabled?"Enabled":"Disabled"})]})]})]}),B.jsxs("div",{className:"stack-h",style:{gap:"0.75rem"},children:[B.jsx("label",{htmlFor:`role-${A||g}`,className:"metaSubtle",children:"Role:"}),B.jsxs("select",{id:`role-${A||g}`,value:x.role??"User",onChange:N=>E(A,N.target.value==="Admin"?"Admin":"User"),disabled:T,style:{padding:"0.5rem 0.75rem",border:"1px solid #2196f3",borderRadius:"0.375rem",backgroundColor:"#11121a",color:"#f1f1f1",outline:"none"},"aria-label":`Set role for ${A||`user ${g+1}`}`,children:[B.jsx("option",{value:"User",children:"User"}),B.jsx("option",{value:"Admin",children:"Admin"})]}),T?B.jsx("span",{className:"spinner"}):null]})]},A||x.id||`row-${g}`)})})]})}function h2(){const{setToken:a,username:e,setUsername:i}=Mu(),[r,l]=jv(),c=(r.get("tab")||"").toLowerCase(),d=Object.values(ai).includes(c);V.useEffect(()=>{d||l({tab:ai.Overview},{replace:!0})},[d,l]);const m=d?c:ai.Overview,h=y=>{l({tab:y},{replace:!0})},_=()=>{xp(null),a(null),i(null),window.location.assign(`${ll.Homepage}?${sl({tab:gn.Login})}`)},v=()=>{switch(m){case ai.Overview:return B.jsx(QC,{username:e?e.charAt(0).toUpperCase()+e.slice(1):null});case ai.FeedBack:return B.jsx(e2,{});case ai.Files:return B.jsx(t2,{});case ai.Register:return B.jsx(l2,{});case ai.Users:return B.jsx(d2,{});default:return B.jsx("h1",{children:"Not Found"})}};return B.jsxs("div",{className:"main-layout",children:[B.jsxs("aside",{className:"side-bar",children:[B.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"2rem"},children:[B.jsx("img",{src:"default_profile_icon.png",style:{width:"80px",height:"80px",borderRadius:"50%",marginBottom:"0.5rem",border:"2px solid #2196f3"},alt:"Profile"}),B.jsx("div",{style:{fontSize:"1rem",fontWeight:"bold",color:"#fff"},children:B.jsx("div",{style:{fontSize:"1rem",fontWeight:"bold",color:"#fff"},children:e?e.charAt(0).toUpperCase()+e.slice(1):""})})]}),ZC.map(y=>B.jsx("button",{className:`sideBarItemButton ${m===y.linkTo?"selected":""}`,onClick:()=>h(y.linkTo),disabled:y.disabled,title:y.tooltip,style:{marginBottom:"2rem"},children:y.name},y.name))]}),B.jsxs("section",{className:"info-panel",children:[B.jsxs("header",{className:"header",style:{width:"100%",position:"relative",minHeight:96},children:[B.jsx("button",{className:"sectionButton",onClick:_,"aria-label":"Logout",style:{position:"absolute",top:8,left:8,zIndex:10},children:"Logout"}),B.jsx(o2,{})]}),B.jsx("div",{className:"details-view",children:v()})]})]})}function p2(){return B.jsx(h2,{})}function m2(){return B.jsx(ib,{children:B.jsxs(fE,{children:[B.jsxs(GM,{children:[B.jsx(tu,{path:ll.Homepage,element:B.jsx(YC,{})}),B.jsx(tu,{element:B.jsx(ab,{}),children:B.jsx(tu,{path:ll.Dashboard,element:B.jsx(p2,{})})})]}),B.jsx(tb,{position:"top-center",autoClose:3e3})]})})}qS.createRoot(document.getElementById("root")).render(B.jsx(V.StrictMode,{children:B.jsx(m2,{})}));
