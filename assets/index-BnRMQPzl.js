(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function CS(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ad={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function DS(){if(n0)return Wo;n0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var i0;function US(){return i0||(i0=1,Ad.exports=DS()),Ad.exports}var ht=US(),Rd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function LS(){if(a0)return ue;a0=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(N,$,_t){this.props=N,this.context=$,this.refs=b,this.updater=_t||S}x.prototype.isReactComponent={},x.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(N,$,_t){this.props=N,this.context=$,this.refs=b,this.updater=_t||S}var C=L.prototype=new _;C.constructor=L,E(C,x.prototype),C.isPureReactComponent=!0;var A=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(N,$,_t,Mt,Ct,et){return _t=et.ref,{$$typeof:a,type:N,key:$,ref:_t!==void 0?_t:null,props:et}}function G(N,$){return I(N.type,$,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function U(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_t){return $[_t]})}var z=/\/+/g;function nt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?U(""+N.key):$.toString(36)}function st(){}function ct(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(st,st):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,$,_t,Mt,Ct){var et=typeof N;(et==="undefined"||et==="boolean")&&(N=null);var pt=!1;if(N===null)pt=!0;else switch(et){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(N.$$typeof){case a:case t:pt=!0;break;case g:return pt=N._init,ft(pt(N._payload),$,_t,Mt,Ct)}}if(pt)return Ct=Ct(N),pt=Mt===""?"."+nt(N,0):Mt,A(Ct)?(_t="",pt!=null&&(_t=pt.replace(z,"$&/")+"/"),ft(Ct,$,_t,"",function(qt){return qt})):Ct!=null&&(D(Ct)&&(Ct=G(Ct,_t+(Ct.key==null||N&&N.key===Ct.key?"":(""+Ct.key).replace(z,"$&/")+"/")+pt)),$.push(Ct)),1;pt=0;var Et=Mt===""?".":Mt+":";if(A(N))for(var Nt=0;Nt<N.length;Nt++)Mt=N[Nt],et=Et+nt(Mt,Nt),pt+=ft(Mt,$,_t,et,Ct);else if(Nt=y(N),typeof Nt=="function")for(N=Nt.call(N),Nt=0;!(Mt=N.next()).done;)Mt=Mt.value,et=Et+nt(Mt,Nt++),pt+=ft(Mt,$,_t,et,Ct);else if(et==="object"){if(typeof N.then=="function")return ft(ct(N),$,_t,Mt,Ct);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pt}function F(N,$,_t){if(N==null)return N;var Mt=[],Ct=0;return ft(N,Mt,"","",function(et){return $.call(_t,et,Ct++)}),Mt}function j(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(_t){(N._status===0||N._status===-1)&&(N._status=1,N._result=_t)},function(_t){(N._status===0||N._status===-1)&&(N._status=2,N._result=_t)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function St(){}return ue.Children={map:F,forEach:function(N,$,_t){F(N,function(){$.apply(this,arguments)},_t)},count:function(N){var $=0;return F(N,function(){$++}),$},toArray:function(N){return F(N,function($){return $})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=x,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=L,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,$,_t){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=E({},N.props),Ct=N.key,et=void 0;if($!=null)for(pt in $.ref!==void 0&&(et=void 0),$.key!==void 0&&(Ct=""+$.key),$)!B.call($,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&$.ref===void 0||(Mt[pt]=$[pt]);var pt=arguments.length-2;if(pt===1)Mt.children=_t;else if(1<pt){for(var Et=Array(pt),Nt=0;Nt<pt;Nt++)Et[Nt]=arguments[Nt+2];Mt.children=Et}return I(N.type,Ct,void 0,void 0,et,Mt)},ue.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ue.createElement=function(N,$,_t){var Mt,Ct={},et=null;if($!=null)for(Mt in $.key!==void 0&&(et=""+$.key),$)B.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Ct[Mt]=$[Mt]);var pt=arguments.length-2;if(pt===1)Ct.children=_t;else if(1<pt){for(var Et=Array(pt),Nt=0;Nt<pt;Nt++)Et[Nt]=arguments[Nt+2];Ct.children=Et}if(N&&N.defaultProps)for(Mt in pt=N.defaultProps,pt)Ct[Mt]===void 0&&(Ct[Mt]=pt[Mt]);return I(N,et,void 0,void 0,null,Ct)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:d,render:N}},ue.isValidElement=D,ue.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:j}},ue.memo=function(N,$){return{$$typeof:h,type:N,compare:$===void 0?null:$}},ue.startTransition=function(N){var $=O.T,_t={};O.T=_t;try{var Mt=N(),Ct=O.S;Ct!==null&&Ct(_t,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(St,W)}catch(et){W(et)}finally{O.T=$}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(N){return O.H.use(N)},ue.useActionState=function(N,$,_t){return O.H.useActionState(N,$,_t)},ue.useCallback=function(N,$){return O.H.useCallback(N,$)},ue.useContext=function(N){return O.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,$){return O.H.useDeferredValue(N,$)},ue.useEffect=function(N,$,_t){var Mt=O.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(N,$)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(N,$,_t){return O.H.useImperativeHandle(N,$,_t)},ue.useInsertionEffect=function(N,$){return O.H.useInsertionEffect(N,$)},ue.useLayoutEffect=function(N,$){return O.H.useLayoutEffect(N,$)},ue.useMemo=function(N,$){return O.H.useMemo(N,$)},ue.useOptimistic=function(N,$){return O.H.useOptimistic(N,$)},ue.useReducer=function(N,$,_t){return O.H.useReducer(N,$,_t)},ue.useRef=function(N){return O.H.useRef(N)},ue.useState=function(N){return O.H.useState(N)},ue.useSyncExternalStore=function(N,$,_t){return O.H.useSyncExternalStore(N,$,_t)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.1.1",ue}var r0;function lp(){return r0||(r0=1,Rd.exports=LS()),Rd.exports}var Z=lp();const Ze=CS(Z);var wd={exports:{}},qo={},Cd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function NS(){return s0||(s0=1,function(a){function t(F,j){var W=F.length;F.push(j);t:for(;0<W;){var St=W-1>>>1,N=F[St];if(0<l(N,j))F[St]=j,F[W]=N,W=St;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var j=F[0],W=F.pop();if(W!==j){F[0]=W;t:for(var St=0,N=F.length,$=N>>>1;St<$;){var _t=2*(St+1)-1,Mt=F[_t],Ct=_t+1,et=F[Ct];if(0>l(Mt,W))Ct<N&&0>l(et,Mt)?(F[St]=et,F[Ct]=W,St=Ct):(F[St]=Mt,F[_t]=W,St=_t);else if(Ct<N&&0>l(et,W))F[St]=et,F[Ct]=W,St=Ct;else break t}}return j}function l(F,j){var W=F.sortIndex-j.sortIndex;return W!==0?W:F.id-j.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],h=[],g=1,v=null,y=3,S=!1,E=!1,b=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var j=i(h);j!==null;){if(j.callback===null)s(h);else if(j.startTime<=F)s(h),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(h)}}function O(F){if(b=!1,A(F),!E)if(i(m)!==null)E=!0,B||(B=!0,nt());else{var j=i(h);j!==null&&ft(O,j.startTime-F)}}var B=!1,I=-1,G=5,D=-1;function U(){return x?!0:!(a.unstable_now()-D<G)}function z(){if(x=!1,B){var F=a.unstable_now();D=F;var j=!0;try{t:{E=!1,b&&(b=!1,L(I),I=-1),S=!0;var W=y;try{e:{for(A(F),v=i(m);v!==null&&!(v.expirationTime>F&&U());){var St=v.callback;if(typeof St=="function"){v.callback=null,y=v.priorityLevel;var N=St(v.expirationTime<=F);if(F=a.unstable_now(),typeof N=="function"){v.callback=N,A(F),j=!0;break e}v===i(m)&&s(m),A(F)}else s(m);v=i(m)}if(v!==null)j=!0;else{var $=i(h);$!==null&&ft(O,$.startTime-F),j=!1}}break t}finally{v=null,y=W,S=!1}j=void 0}}finally{j?nt():B=!1}}}var nt;if(typeof C=="function")nt=function(){C(z)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ct=st.port2;st.port1.onmessage=z,nt=function(){ct.postMessage(null)}}else nt=function(){_(z,0)};function ft(F,j){I=_(function(){F(a.unstable_now())},j)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_next=function(F){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var W=y;y=j;try{return F()}finally{y=W}},a.unstable_requestPaint=function(){x=!0},a.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=y;y=F;try{return j()}finally{y=W}},a.unstable_scheduleCallback=function(F,j,W){var St=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,F={id:g++,callback:j,priorityLevel:F,startTime:W,expirationTime:N,sortIndex:-1},W>St?(F.sortIndex=W,t(h,F),i(m)===null&&F===i(h)&&(b?(L(I),I=-1):b=!0,ft(O,W-St))):(F.sortIndex=N,t(m,F),E||S||(E=!0,B||(B=!0,nt()))),F},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(F){var j=y;return function(){var W=y;y=j;try{return F.apply(this,arguments)}finally{y=W}}}}(Dd)),Dd}var o0;function OS(){return o0||(o0=1,Cd.exports=NS()),Cd.exports}var Ud={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function PS(){if(l0)return Ln;l0=1;var a=lp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,g)},Ln.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var c0;function IS(){if(c0)return Ud.exports;c0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Ud.exports=PS(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function BS(){if(u0)return qo;u0=1;var a=OS(),t=lp(),i=IS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var p=u.alternate;if(p===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===r)return d(u),e;if(p===o)return d(u),n;p=p.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=p;else{for(var M=!1,R=u.child;R;){if(R===r){M=!0,r=u,o=p;break}if(R===o){M=!0,o=u,r=p;break}R=R.sibling}if(!M){for(R=p.child;R;){if(R===r){M=!0,r=p,o=u;break}if(R===o){M=!0,o=p,r=u;break}R=R.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),C=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case C:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case A:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ft=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],N=-1;function $(e){return{current:e}}function _t(e){0>N||(e.current=St[N],St[N]=null,N--)}function Mt(e,n){N++,St[N]=e.current,e.current=n}var Ct=$(null),et=$(null),pt=$(null),Et=$(null);function Nt(e,n){switch(Mt(pt,n),Mt(et,e),Mt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?D_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=D_(n),e=U_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Ct),Mt(Ct,e)}function qt(){_t(Ct),_t(et),_t(pt)}function Vt(e){e.memoizedState!==null&&Mt(Et,e);var n=Ct.current,r=U_(n,e.type);n!==r&&(Mt(et,e),Mt(Ct,r))}function Ee(e){et.current===e&&(_t(Ct),_t(et)),Et.current===e&&(_t(Et),Ho._currentValue=W)}var me=Object.prototype.hasOwnProperty,V=a.unstable_scheduleCallback,Re=a.unstable_cancelCallback,Qt=a.unstable_shouldYield,Se=a.unstable_requestPaint,Ht=a.unstable_now,ee=a.unstable_getCurrentPriorityLevel,bt=a.unstable_ImmediatePriority,ne=a.unstable_UserBlockingPriority,Oe=a.unstable_NormalPriority,Le=a.unstable_LowPriority,P=a.unstable_IdlePriority,T=a.log,Q=a.unstable_setDisableYieldValue,dt=null,vt=null;function ut(e){if(typeof T=="function"&&Q(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(dt,e)}catch{}}var zt=Math.clz32?Math.clz32:Zt,Dt=Math.log,Yt=Math.LN2;function Zt(e){return e>>>=0,e===0?32:31-(Dt(e)/Yt|0)|0}var Tt=256,Pt=4194304;function Jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,p=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~p,o!==0?u=Jt(o):(M&=R,M!==0?u=Jt(M):r||(r=R&~e,r!==0&&(u=Jt(r))))):(R=o&~p,R!==0?u=Jt(R):M!==0?u=Jt(M):r||(r=o&~e,r!==0&&(u=Jt(r)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,r=n&-n,p>=r||p===32&&(r&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function wt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ut(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,r,o,u,p){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(r=M&~r;0<r;){var mt=31-zt(r),yt=1<<mt;R[mt]=0,H[mt]=-1;var at=tt[mt];if(at!==null)for(tt[mt]=null,mt=0;mt<at.length;mt++){var rt=at[mt];rt!==null&&(rt.lane&=-536870913)}r&=~yt}o!==0&&xt(e,o,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(M&~n))}function xt(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function Xt(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-zt(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function vi(e,n){var r=j.p;try{return j.p=e,n()}finally{j.p=r}}var dn=Math.random().toString(36).slice(2),hn="__reactFiber$"+dn,tn="__reactProps$"+dn,Ui="__reactContainer$"+dn,Or="__reactEvents$"+dn,vl="__reactListeners$"+dn,Pr="__reactHandles$"+dn,Qs="__reactResources$"+dn,Li="__reactMarker$"+dn;function Ir(e){delete e[hn],delete e[tn],delete e[Or],delete e[vl],delete e[Pr]}function Wi(e){var n=e[hn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Ui]||r[hn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=P_(e);e!==null;){if(r=e[hn])return r;e=P_(e)}return n}e=r,r=e.parentNode}return null}function va(e){if(e=e[hn]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function $a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ya(e){var n=e[Qs];return n||(n=e[Qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(e){e[Li]=!0}var yl=new Set,xl={};function w(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(xl[e]=n,e=0;e<n.length;e++)yl.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},K={};function Rt(e){return me.call(K,e)?!0:me.call(lt,e)?!1:ot.test(e)?K[e]=!0:(lt[e]=!0,!1)}function Ot(e,n,r){if(Rt(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Gt(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function It(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}var te,ae;function jt(e){if(te===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",ae=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ae}var de=!1;function we(e,n){if(!e||de)return"";de=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(rt){var at=rt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(rt){at=rt}e.call(yt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),M=p[0],R=p[1];if(M&&R){var H=M.split(`
`),tt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===tt.length)for(o=H.length-1,u=tt.length-1;1<=o&&0<=u&&H[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==tt[u]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{de=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?jt(r):""}function Ke(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return jt("Activity");default:return""}}function ze(e){try{var n="";do n+=Ke(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $t(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e){var n=$t(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,p=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,p.call(this,M)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=je(e))}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=$t(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function yn(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xe(e,n,r,o,u,p,M,R){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,M,he(n)):r!=null?Dn(e,M,he(r)):o!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+he(R):e.removeAttribute("name")}function Bn(e,n,r,o,u,p,M,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||n!=null))return;r=r!=null?""+he(r):"",n=n!=null?""+he(n):r,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Dn(e,n,r){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function en(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,r){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+he(r):""}function Br(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=he(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function kn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Ay=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dp(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Ay.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Up(e,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Dp(e,u,o)}else for(var p in n)n.hasOwnProperty(p)&&Dp(e,p,n[p])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ry=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return wy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tu=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Fr=null;function Lp(e){var n=va(e);if(n&&(e=n.stateNode)){var r=e[tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Xe(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[tn]||null;if(!u)throw Error(s(90));Xe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&Cn(o)}break t;case"textarea":bn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&en(e,!!r.multiple,n,!1)}}}var Ru=!1;function Np(e,n,r){if(Ru)return e(n,r);Ru=!0;try{var o=e(n);return o}finally{if(Ru=!1,(zr!==null||Fr!==null)&&(sc(),zr&&(n=zr,e=Fr,Fr=zr=null,Lp(n),e)))for(n=0;n<e.length;n++)Lp(e[n])}}function Js(e,n){var r=e.stateNode;if(r===null)return null;var o=r[tn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(qi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){wu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{wu=!1}var xa=null,Cu=null,Ml=null;function Op(){if(Ml)return Ml;var e,n=Cu,r=n.length,o,u="value"in xa?xa.value:xa.textContent,p=u.length;for(e=0;e<r&&n[e]===u[e];e++);var M=r-e;for(o=1;o<=M&&n[r-o]===u[p-o];o++);return Ml=u.slice(e,1<o?1-o:void 0)}function El(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Pp(){return!1}function Xn(e){function n(r,o,u,p,M){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?bl:Pp,this.isPropagationStopped=Pp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Xn(tr),to=g({},tr,{view:0,detail:0}),Cy=Xn(to),Du,Uu,eo,Al=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Du=e.screenX-eo.screenX,Uu=e.screenY-eo.screenY):Uu=Du=0,eo=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),Ip=Xn(Al),Dy=g({},Al,{dataTransfer:0}),Uy=Xn(Dy),Ly=g({},to,{relatedTarget:0}),Lu=Xn(Ly),Ny=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Xn(Ny),Py=g({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iy=Xn(Py),By=g({},tr,{data:0}),Bp=Xn(By),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hy[e])?!!n[e]:!1}function Nu(){return Gy}var Vy=g({},to,{key:function(e){if(e.key){var n=zy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ky=Xn(Vy),Xy=g({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Xn(Xy),Wy=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),qy=Xn(Wy),Yy=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Xn(Yy),Zy=g({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=Xn(Zy),Qy=g({},tr,{newState:0,oldState:0}),Jy=Xn(Qy),$y=[9,13,27,32],Ou=qi&&"CompositionEvent"in window,no=null;qi&&"documentMode"in document&&(no=document.documentMode);var tx=qi&&"TextEvent"in window&&!no,Fp=qi&&(!Ou||no&&8<no&&11>=no),Hp=" ",Gp=!1;function Vp(e,n){switch(e){case"keyup":return $y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function ex(e,n){switch(e){case"compositionend":return kp(n);case"keypress":return n.which!==32?null:(Gp=!0,Hp);case"textInput":return e=n.data,e===Hp&&Gp?null:e;default:return null}}function nx(e,n){if(Hr)return e==="compositionend"||!Ou&&Vp(e,n)?(e=Op(),Ml=Cu=xa=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ix[e.type]:n==="textarea"}function Wp(e,n,r,o){zr?Fr?Fr.push(o):Fr=[o]:zr=o,n=dc(n,"onChange"),0<n.length&&(r=new Tl("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var io=null,ao=null;function ax(e){T_(e,0)}function Rl(e){var n=$a(e);if(Cn(n))return e}function qp(e,n){if(e==="change")return n}var Yp=!1;if(qi){var Pu;if(qi){var Iu="oninput"in document;if(!Iu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Iu=typeof jp.oninput=="function"}Pu=Iu}else Pu=!1;Yp=Pu&&(!document.documentMode||9<document.documentMode)}function Zp(){io&&(io.detachEvent("onpropertychange",Kp),ao=io=null)}function Kp(e){if(e.propertyName==="value"&&Rl(ao)){var n=[];Wp(n,ao,e,Au(e)),Np(ax,n)}}function rx(e,n,r){e==="focusin"?(Zp(),io=n,ao=r,io.attachEvent("onpropertychange",Kp)):e==="focusout"&&Zp()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(ao)}function ox(e,n){if(e==="click")return Rl(n)}function lx(e,n){if(e==="input"||e==="change")return Rl(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:cx;function ro(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!me.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,n){var r=Qp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Qp(r)}}function $p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=yi(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ux=qi&&"documentMode"in document&&11>=document.documentMode,Gr=null,zu=null,so=null,Fu=!1;function em(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fu||Gr==null||Gr!==yi(o)||(o=Gr,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=dc(zu,"onSelect"),0<o.length&&(n=new Tl("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Gr)))}function er(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Vr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Hu={},nm={};qi&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function nr(e){if(Hu[e])return Hu[e];if(!Vr[e])return e;var n=Vr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in nm)return Hu[e]=n[r];return e}var im=nr("animationend"),am=nr("animationiteration"),rm=nr("animationstart"),fx=nr("transitionrun"),dx=nr("transitionstart"),hx=nr("transitioncancel"),sm=nr("transitionend"),om=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function xi(e,n){om.set(e,n),w(n,[e])}var lm=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var r=lm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:ze(n)},lm.set(e,n),n)}return{value:e,source:n,stack:ze(n)}}var li=[],kr=0,Vu=0;function wl(){for(var e=kr,n=Vu=kr=0;n<e;){var r=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var p=li[n];if(li[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}p!==0&&cm(r,u,p)}}function Cl(e,n,r,o){li[kr++]=e,li[kr++]=n,li[kr++]=r,li[kr++]=o,Vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ku(e,n,r,o){return Cl(e,n,r,o),Dl(e)}function Xr(e,n){return Cl(e,null,null,n),Dl(e)}function cm(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,p=e.return;p!==null;)p.childLanes|=r,o=p.alternate,o!==null&&(o.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&n!==null&&(u=31-zt(r),e=p.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),p):null}function Dl(e){if(50<Lo)throw Lo=0,Kf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Wr={};function px(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,r,o){return new px(e,n,r,o)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var r=e.alternate;return r===null?(r=Kn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function um(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ul(e,n,r,o,u,p){var M=0;if(o=e,typeof e=="function")Xu(e)&&(M=1);else if(typeof e=="string")M=gS(e,r,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Kn(31,r,n,u),e.elementType=D,e.lanes=p,e;case E:return ir(r.children,u,p,n);case b:M=8,u|=24;break;case x:return e=Kn(12,r,n,u|2),e.elementType=x,e.lanes=p,e;case O:return e=Kn(13,r,n,u),e.elementType=O,e.lanes=p,e;case B:return e=Kn(19,r,n,u),e.elementType=B,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case C:M=10;break t;case L:M=9;break t;case A:M=11;break t;case I:M=14;break t;case G:M=16,o=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Kn(M,r,n,u),n.elementType=e,n.type=o,n.lanes=p,n}function ir(e,n,r,o){return e=Kn(7,e,o,n),e.lanes=r,e}function Wu(e,n,r){return e=Kn(6,e,null,n),e.lanes=r,e}function qu(e,n,r){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qr=[],Yr=0,Ll=null,Nl=0,ci=[],ui=0,ar=null,ji=1,Zi="";function rr(e,n){qr[Yr++]=Nl,qr[Yr++]=Ll,Ll=e,Nl=n}function fm(e,n,r){ci[ui++]=ji,ci[ui++]=Zi,ci[ui++]=ar,ar=e;var o=ji;e=Zi;var u=32-zt(o)-1;o&=~(1<<u),r+=1;var p=32-zt(n)+u;if(30<p){var M=u-u%5;p=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ji=1<<32-zt(n)+u|r<<u|o,Zi=p+e}else ji=1<<p|r<<u|o,Zi=e}function Yu(e){e.return!==null&&(rr(e,1),fm(e,1,0))}function ju(e){for(;e===Ll;)Ll=qr[--Yr],qr[Yr]=null,Nl=qr[--Yr],qr[Yr]=null;for(;e===ar;)ar=ci[--ui],ci[ui]=null,Zi=ci[--ui],ci[ui]=null,ji=ci[--ui],ci[ui]=null}var zn=null,nn=null,Ne=!1,sr=null,Ni=!1,Zu=Error(s(519));function or(e){var n=Error(s(418,""));throw co(oi(n,e)),Zu}function dm(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[hn]=e,n[tn]=o,r){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(r=0;r<Oo.length;r++)xe(Oo[r],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ve(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Br(n,o.value,o.defaultValue,o.children),ve(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||C_(n.textContent,r)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=hc),n=!0):n=!1,n||or(e)}function hm(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:zn=zn.return}}function oo(e){if(e!==zn)return!1;if(!Ne)return hm(e),Ne=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||dd(e.type,e.memoizedProps)),r=!r),r&&nn&&or(e),hm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){nn=Mi(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}nn=null}}else n===27?(n=nn,Ia(e.type)?(e=gd,gd=null,nn=e):nn=n):nn=zn?Mi(e.stateNode.nextSibling):null;return!0}function lo(){nn=zn=null,Ne=!1}function pm(){var e=sr;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),sr=null),e}function co(e){sr===null?sr=[e]:sr.push(e)}var Ku=$(null),lr=null,Ki=null;function Sa(e,n,r){Mt(Ku,n._currentValue),n._currentValue=r}function Qi(e){e._currentValue=Ku.current,_t(Ku)}function Qu(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Ju(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var M=u.child;p=p.firstContext;t:for(;p!==null;){var R=p;p=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){p.lanes|=r,R=p.alternate,R!==null&&(R.lanes|=r),Qu(p.return,r,e),o||(M=null);break t}p=R.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=r,p=M.alternate,p!==null&&(p.lanes|=r),Qu(M,r,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function uo(e,n,r,o){e=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var R=u.type;Zn(u.pendingProps.value,M.value)||(e!==null?e.push(R):e=[R])}}else if(u===Et.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Ju(n,e,r,o),n.flags|=262144}function Ol(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return mm(lr,e)}function Pl(e,n){return lr===null&&cr(e),mm(e,n)}function mm(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return r}var mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},gx=a.unstable_scheduleCallback,_x=a.unstable_NormalPriority,pn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new mx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&gx(_x,function(){e.controller.abort()})}var ho=null,tf=0,jr=0,Zr=null;function vx(e,n){if(ho===null){var r=ho=[];tf=0,jr=id(),Zr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return tf++,n.then(gm,gm),n}function gm(){if(--tf===0&&ho!==null){Zr!==null&&(Zr.status="fulfilled");var e=ho;ho=null,jr=0,Zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yx(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var _m=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(e,n),_m!==null&&_m(e,n)};var ur=$(null);function ef(){var e=ur.current;return e!==null?e:qe.pooledCache}function Il(e,n){n===null?Mt(ur,ur.current):Mt(ur,n.pool)}function vm(){var e=ef();return e===null?null:{parent:pn._currentValue,pool:e}}var po=Error(s(460)),ym=Error(s(474)),Bl=Error(s(542)),nf={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zl(){}function Sm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(zl,zl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e;default:if(typeof n.status=="string")n.then(zl,zl);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e}throw mo=n,po}}var mo=null;function Mm(){if(mo===null)throw Error(s(459));var e=mo;return mo=null,e}function Em(e){if(e===po||e===Bl)throw Error(s(483))}var Ma=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(e),cm(e,null,r),n}return Cl(e,o,n,r),Dl(e)}function go(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Xt(e,r)}}function sf(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?u=p=M:p=p.next=M,r=r.next}while(r!==null);p===null?u=p=n:p=p.next=n}else u=p=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var of=!1;function _o(){if(of){var e=Zr;if(e!==null)throw e}}function vo(e,n,r,o){of=!1;var u=e.updateQueue;Ma=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,tt=H.next;H.next=null,M===null?p=tt:M.next=tt,M=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==M&&(R===null?mt.firstBaseUpdate=tt:R.next=tt,mt.lastBaseUpdate=H))}if(p!==null){var yt=u.baseState;M=0,mt=tt=H=null,R=p;do{var at=R.lane&-536870913,rt=at!==R.lane;if(rt?(be&at)===at:(o&at)===at){at!==0&&at===jr&&(of=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var se=e,ie=R;at=n;var Ge=r;switch(ie.tag){case 1:if(se=ie.payload,typeof se=="function"){yt=se.call(Ge,yt,at);break t}yt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ie.payload,at=typeof se=="function"?se.call(Ge,yt,at):se,at==null)break t;yt=g({},yt,at);break t;case 2:Ma=!0}}at=R.callback,at!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(tt=mt=rt,H=yt):mt=mt.next=rt,M|=at;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;rt=R,R=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);mt===null&&(H=yt),u.baseState=H,u.firstBaseUpdate=tt,u.lastBaseUpdate=mt,p===null&&(u.shared.lanes=0),La|=M,e.lanes=M,e.memoizedState=yt}}function bm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Tm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)bm(r[e],n)}var Kr=$(null),Fl=$(0);function Am(e,n){e=aa,Mt(Fl,e),Mt(Kr,n),aa=e|n.baseLanes}function lf(){Mt(Fl,aa),Mt(Kr,Kr.current)}function cf(){aa=Fl.current,_t(Kr),_t(Fl)}var Ta=0,ge=null,Fe=null,cn=null,Hl=!1,Qr=!1,fr=!1,Gl=0,yo=0,Jr=null,xx=0;function sn(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Zn(e[r],n[r]))return!1;return!0}function ff(e,n,r,o,u,p){return Ta=p,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?cg:ug,fr=!1,p=r(o,u),fr=!1,Qr&&(p=wm(n,r,o,u)),Rm(e),p}function Rm(e){F.H=Yl;var n=Fe!==null&&Fe.next!==null;if(Ta=0,cn=Fe=ge=null,Hl=!1,yo=0,Jr=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&Ol(e)&&(xn=!0))}function wm(e,n,r,o){ge=e;var u=0;do{if(Qr&&(Jr=null),yo=0,Qr=!1,25<=u)throw Error(s(301));if(u+=1,cn=Fe=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=Rx,p=n(r,o)}while(Qr);return p}function Sx(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ge.flags|=1024),n}function df(){var e=Gl!==0;return Gl=0,e}function hf(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function pf(e){if(Hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hl=!1}Ta=0,cn=Fe=ge=null,Qr=!1,yo=Gl=0,Jr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Fe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=cn===null?ge.memoizedState:cn.next;if(n!==null)cn=n,Fe=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=yo;return yo+=1,Jr===null&&(Jr=[]),e=Sm(Jr,e,n),n=ge,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?cg:ug),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===C)return Un(e)}throw Error(s(438,String(e)))}function gf(e){var n=null,r=ge.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=mf(),ge.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=U;return n.index++,r}function Ji(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=un();return _f(n,Fe,e)}function _f(e,n,r){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=e.baseQueue,p=o.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}n.baseQueue=u=p,o.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{n=u.next;var R=M=null,H=null,tt=n,mt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(be&yt)===yt:(Ta&yt)===yt){var at=tt.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===jr&&(mt=!0);else if((Ta&at)===at){tt=tt.next,at===jr&&(mt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=yt,M=p):H=H.next=yt,ge.lanes|=at,La|=at;yt=tt.action,fr&&r(p,yt),p=tt.hasEagerState?tt.eagerState:r(p,yt)}else at={lane:yt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=at,M=p):H=H.next=at,ge.lanes|=yt,La|=yt;tt=tt.next}while(tt!==null&&tt!==n);if(H===null?M=p:H.next=R,!Zn(p,e.memoizedState)&&(xn=!0,mt&&(r=Zr,r!==null)))throw r;e.memoizedState=p,e.baseState=M,e.baseQueue=H,o.lastRenderedState=p}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vf(e){var n=un(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,p=n.memoizedState;if(u!==null){r.pending=null;var M=u=u.next;do p=e(p,M.action),M=M.next;while(M!==u);Zn(p,n.memoizedState)||(xn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),r.lastRenderedState=p}return[p,o]}function Cm(e,n,r){var o=ge,u=un(),p=Ne;if(p){if(r===void 0)throw Error(s(407));r=r()}else r=n();var M=!Zn((Fe||u).memoizedState,r);M&&(u.memoizedState=r,xn=!0),u=u.queue;var R=Lm.bind(null,o,u,e);if(So(2048,8,R,[e]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$r(9,Xl(),Um.bind(null,o,u,r,n),null),qe===null)throw Error(s(349));p||(Ta&124)!==0||Dm(o,n,r)}return r}function Dm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ge.updateQueue,n===null?(n=mf(),ge.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Um(e,n,r,o){n.value=r,n.getSnapshot=o,Nm(n)&&Om(e)}function Lm(e,n,r){return r(function(){Nm(n)&&Om(e)})}function Nm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Zn(e,r)}catch{return!0}}function Om(e){var n=Xr(e,2);n!==null&&ei(n,e,2)}function yf(e){var n=Wn();if(typeof e=="function"){var r=e;if(e=r(),fr){ut(!0);try{r()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Pm(e,n,r,o){return e.baseState=r,_f(e,Fe,typeof o=="function"?o:Ji)}function Mx(e,n,r,o,u){if(ql(e))throw Error(s(485));if(e=n.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};F.T!==null?r(!0):p.isTransition=!1,o(p),r=n.pending,r===null?(p.next=n.pending=p,Im(n,p)):(p.next=r.next,n.pending=r.next=p)}}function Im(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var p=F.T,M={};F.T=M;try{var R=r(u,o),H=F.S;H!==null&&H(M,R),Bm(e,n,R)}catch(tt){xf(e,n,tt)}finally{F.T=p}}else try{p=r(u,o),Bm(e,n,p)}catch(tt){xf(e,n,tt)}}function Bm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){zm(e,n,o)},function(o){return xf(e,n,o)}):zm(e,n,r)}function zm(e,n,r){n.status="fulfilled",n.value=r,Fm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Im(e,r)))}function xf(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Fm(n),n=n.next;while(n!==o)}e.action=null}function Fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hm(e,n){return n}function Gm(e,n){if(Ne){var r=qe.formState;if(r!==null){t:{var o=ge;if(Ne){if(nn){e:{for(var u=nn,p=Ni;u.nodeType!==8;){if(!p){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){nn=Mi(u.nextSibling),o=u.data==="F!";break t}}or(o)}o=!1}o&&(n=r[0])}}return r=Wn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},r.queue=o,r=sg.bind(null,ge,o),o.dispatch=r,o=yf(!1),p=Tf.bind(null,ge,!1,o.queue),o=Wn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=Mx.bind(null,ge,u,p,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function Vm(e){var n=un();return km(n,Fe,e)}function km(e,n,r){if(n=_f(e,n,Hm)[0],e=kl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(M){throw M===po?Bl:M}else o=n;n=un();var u=n.queue,p=u.dispatch;return r!==n.memoizedState&&(ge.flags|=2048,$r(9,Xl(),Ex.bind(null,u,r),null)),[o,p,e]}function Ex(e,n){e.action=n}function Xm(e){var n=un(),r=Fe;if(r!==null)return km(n,r,e);un(),n=n.memoizedState,r=un();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function $r(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=mf(),ge.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Xl(){return{destroy:void 0,resource:void 0}}function Wm(){return un().memoizedState}function Wl(e,n,r,o){var u=Wn();o=o===void 0?null:o,ge.flags|=e,u.memoizedState=$r(1|n,Xl(),r,o)}function So(e,n,r,o){var u=un();o=o===void 0?null:o;var p=u.memoizedState.inst;Fe!==null&&o!==null&&uf(o,Fe.memoizedState.deps)?u.memoizedState=$r(n,p,r,o):(ge.flags|=e,u.memoizedState=$r(1|n,p,r,o))}function qm(e,n){Wl(8390656,8,e,n)}function Ym(e,n){So(2048,8,e,n)}function jm(e,n){return So(4,2,e,n)}function Zm(e,n){return So(4,4,e,n)}function Km(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qm(e,n,r){r=r!=null?r.concat([e]):null,So(4,4,Km.bind(null,n,e),r)}function Sf(){}function Jm(e,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function $m(e,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),fr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[o,n],o}function Mf(e,n,r){return r===void 0||(Ta&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=n_(),ge.lanes|=e,La|=e,r)}function tg(e,n,r,o){return Zn(r,n)?r:Kr.current!==null?(e=Mf(e,r,o),Zn(e,n)||(xn=!0),e):(Ta&42)===0?(xn=!0,e.memoizedState=r):(e=n_(),ge.lanes|=e,La|=e,n)}function eg(e,n,r,o,u){var p=j.p;j.p=p!==0&&8>p?p:8;var M=F.T,R={};F.T=R,Tf(e,!1,n,r);try{var H=u(),tt=F.S;if(tt!==null&&tt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=yx(H,o);Mo(e,n,mt,ti(e))}else Mo(e,n,o,ti(e))}catch(yt){Mo(e,n,{then:function(){},status:"rejected",reason:yt},ti())}finally{j.p=p,F.T=M}}function bx(){}function Ef(e,n,r,o){if(e.tag!==5)throw Error(s(476));var u=ng(e).queue;eg(e,u,n,W,r===null?bx:function(){return ig(e),r(o)})}function ng(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:W},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ig(e){var n=ng(e).next.queue;Mo(e,n,{},ti())}function bf(){return Un(Ho)}function ag(){return un().memoizedState}function rg(){return un().memoizedState}function Tx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ti();e=Ea(r);var o=ba(n,e,r);o!==null&&(ei(o,n,r),go(o,n,r)),n={cache:$u()},e.payload=n;return}n=n.return}}function Ax(e,n,r){var o=ti();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ql(e)?og(n,r):(r=ku(e,n,r,o),r!==null&&(ei(r,e,o),lg(r,n,o)))}function sg(e,n,r){var o=ti();Mo(e,n,r,o)}function Mo(e,n,r,o){var u={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ql(e))og(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,R=p(M,r);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,M))return Cl(e,n,u,0),qe===null&&wl(),!1}catch{}finally{}if(r=ku(e,n,u,o),r!==null)return ei(r,e,o),lg(r,n,o),!0}return!1}function Tf(e,n,r,o){if(o={lane:2,revertLane:id(),action:o,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(n)throw Error(s(479))}else n=ku(e,r,o,2),n!==null&&ei(n,e,2)}function ql(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function og(e,n){Qr=Hl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function lg(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Xt(e,r)}}var Yl={readContext:Un,use:Vl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},cg={readContext:Un,use:Vl,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:qm,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Wl(4194308,4,Km.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var r=Wn();n=n===void 0?null:n;var o=e();if(fr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Wn();if(r!==void 0){var u=r(n);if(fr){ut(!0);try{r(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ax.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=yf(e);var n=e.queue,r=sg.bind(null,ge,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Sf,useDeferredValue:function(e,n){var r=Wn();return Mf(r,e,n)},useTransition:function(){var e=yf(!1);return e=eg.bind(null,ge,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ge,u=Wn();if(Ne){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),qe===null)throw Error(s(349));(be&124)!==0||Dm(o,n,r)}u.memoizedState=r;var p={value:r,getSnapshot:n};return u.queue=p,qm(Lm.bind(null,o,p,e),[e]),o.flags|=2048,$r(9,Xl(),Um.bind(null,o,p,r,n),null),r},useId:function(){var e=Wn(),n=qe.identifierPrefix;if(Ne){var r=Zi,o=ji;r=(o&~(1<<32-zt(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=Gl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=xx++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Tf.bind(null,ge,!0,r),r.dispatch=n,[e,n]},useMemoCache:gf,useCacheRefresh:function(){return Wn().memoizedState=Tx.bind(null,ge)}},ug={readContext:Un,use:Vl,useCallback:Jm,useContext:Un,useEffect:Ym,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:kl,useRef:Wm,useState:function(){return kl(Ji)},useDebugValue:Sf,useDeferredValue:function(e,n){var r=un();return tg(r,Fe.memoizedState,e,n)},useTransition:function(){var e=kl(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:bf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var r=un();return Pm(r,Fe,e,n)},useMemoCache:gf,useCacheRefresh:rg},Rx={readContext:Un,use:Vl,useCallback:Jm,useContext:Un,useEffect:Ym,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:vf,useRef:Wm,useState:function(){return vf(Ji)},useDebugValue:Sf,useDeferredValue:function(e,n){var r=un();return Fe===null?Mf(r,e,n):tg(r,Fe.memoizedState,e,n)},useTransition:function(){var e=vf(Ji)[0],n=un().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Cm,useId:ag,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var r=un();return Fe!==null?Pm(r,Fe,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:gf,useCacheRefresh:rg},ts=null,Eo=0;function jl(e){var n=Eo;return Eo+=1,ts===null&&(ts=[]),Sm(ts,e,n)}function bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fg(e){var n=e._init;return n(e._payload)}function dg(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function r(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Yi(Y,k),Y.index=0,Y.sibling=null,Y}function p(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,J,gt){return k===null||k.tag!==6?(k=Wu(J,Y.mode,gt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function H(Y,k,J,gt){var kt=J.type;return kt===E?mt(Y,k,J.props.children,gt,J.key):k!==null&&(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===G&&fg(kt)===k.type)?(k=u(k,J.props),bo(k,J),k.return=Y,k):(k=Ul(J.type,J.key,J.props,null,Y.mode,gt),bo(k,J),k.return=Y,k)}function tt(Y,k,J,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=qu(J,Y.mode,gt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function mt(Y,k,J,gt,kt){return k===null||k.tag!==7?(k=ir(J,Y.mode,gt,kt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function yt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Wu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return J=Ul(k.type,k.key,k.props,null,Y.mode,J),bo(J,k),J.return=Y,J;case S:return k=qu(k,Y.mode,J),k.return=Y,k;case G:var gt=k._init;return k=gt(k._payload),yt(Y,k,J)}if(ft(k)||nt(k))return k=ir(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return yt(Y,jl(k),J);if(k.$$typeof===C)return yt(Y,Pl(Y,k),J);Zl(Y,k)}return null}function at(Y,k,J,gt){var kt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return kt!==null?null:R(Y,k,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===kt?H(Y,k,J,gt):null;case S:return J.key===kt?tt(Y,k,J,gt):null;case G:return kt=J._init,J=kt(J._payload),at(Y,k,J,gt)}if(ft(J)||nt(J))return kt!==null?null:mt(Y,k,J,gt,null);if(typeof J.then=="function")return at(Y,k,jl(J),gt);if(J.$$typeof===C)return at(Y,k,Pl(Y,J),gt);Zl(Y,J)}return null}function rt(Y,k,J,gt,kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(J)||null,R(k,Y,""+gt,kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Y=Y.get(gt.key===null?J:gt.key)||null,H(k,Y,gt,kt);case S:return Y=Y.get(gt.key===null?J:gt.key)||null,tt(k,Y,gt,kt);case G:var _e=gt._init;return gt=_e(gt._payload),rt(Y,k,J,gt,kt)}if(ft(gt)||nt(gt))return Y=Y.get(J)||null,mt(k,Y,gt,kt,null);if(typeof gt.then=="function")return rt(Y,k,J,jl(gt),kt);if(gt.$$typeof===C)return rt(Y,k,J,Pl(k,gt),kt);Zl(k,gt)}return null}function se(Y,k,J,gt){for(var kt=null,_e=null,Kt=k,re=k=0,Mn=null;Kt!==null&&re<J.length;re++){Kt.index>re?(Mn=Kt,Kt=null):Mn=Kt.sibling;var Ce=at(Y,Kt,J[re],gt);if(Ce===null){Kt===null&&(Kt=Mn);break}e&&Kt&&Ce.alternate===null&&n(Y,Kt),k=p(Ce,k,re),_e===null?kt=Ce:_e.sibling=Ce,_e=Ce,Kt=Mn}if(re===J.length)return r(Y,Kt),Ne&&rr(Y,re),kt;if(Kt===null){for(;re<J.length;re++)Kt=yt(Y,J[re],gt),Kt!==null&&(k=p(Kt,k,re),_e===null?kt=Kt:_e.sibling=Kt,_e=Kt);return Ne&&rr(Y,re),kt}for(Kt=o(Kt);re<J.length;re++)Mn=rt(Kt,Y,re,J[re],gt),Mn!==null&&(e&&Mn.alternate!==null&&Kt.delete(Mn.key===null?re:Mn.key),k=p(Mn,k,re),_e===null?kt=Mn:_e.sibling=Mn,_e=Mn);return e&&Kt.forEach(function(Ga){return n(Y,Ga)}),Ne&&rr(Y,re),kt}function ie(Y,k,J,gt){if(J==null)throw Error(s(151));for(var kt=null,_e=null,Kt=k,re=k=0,Mn=null,Ce=J.next();Kt!==null&&!Ce.done;re++,Ce=J.next()){Kt.index>re?(Mn=Kt,Kt=null):Mn=Kt.sibling;var Ga=at(Y,Kt,Ce.value,gt);if(Ga===null){Kt===null&&(Kt=Mn);break}e&&Kt&&Ga.alternate===null&&n(Y,Kt),k=p(Ga,k,re),_e===null?kt=Ga:_e.sibling=Ga,_e=Ga,Kt=Mn}if(Ce.done)return r(Y,Kt),Ne&&rr(Y,re),kt;if(Kt===null){for(;!Ce.done;re++,Ce=J.next())Ce=yt(Y,Ce.value,gt),Ce!==null&&(k=p(Ce,k,re),_e===null?kt=Ce:_e.sibling=Ce,_e=Ce);return Ne&&rr(Y,re),kt}for(Kt=o(Kt);!Ce.done;re++,Ce=J.next())Ce=rt(Kt,Y,re,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&Kt.delete(Ce.key===null?re:Ce.key),k=p(Ce,k,re),_e===null?kt=Ce:_e.sibling=Ce,_e=Ce);return e&&Kt.forEach(function(wS){return n(Y,wS)}),Ne&&rr(Y,re),kt}function Ge(Y,k,J,gt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var kt=J.key;k!==null;){if(k.key===kt){if(kt=J.type,kt===E){if(k.tag===7){r(Y,k.sibling),gt=u(k,J.props.children),gt.return=Y,Y=gt;break t}}else if(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===G&&fg(kt)===k.type){r(Y,k.sibling),gt=u(k,J.props),bo(gt,J),gt.return=Y,Y=gt;break t}r(Y,k);break}else n(Y,k);k=k.sibling}J.type===E?(gt=ir(J.props.children,Y.mode,gt,J.key),gt.return=Y,Y=gt):(gt=Ul(J.type,J.key,J.props,null,Y.mode,gt),bo(gt,J),gt.return=Y,Y=gt)}return M(Y);case S:t:{for(kt=J.key;k!==null;){if(k.key===kt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){r(Y,k.sibling),gt=u(k,J.children||[]),gt.return=Y,Y=gt;break t}else{r(Y,k);break}else n(Y,k);k=k.sibling}gt=qu(J,Y.mode,gt),gt.return=Y,Y=gt}return M(Y);case G:return kt=J._init,J=kt(J._payload),Ge(Y,k,J,gt)}if(ft(J))return se(Y,k,J,gt);if(nt(J)){if(kt=nt(J),typeof kt!="function")throw Error(s(150));return J=kt.call(J),ie(Y,k,J,gt)}if(typeof J.then=="function")return Ge(Y,k,jl(J),gt);if(J.$$typeof===C)return Ge(Y,k,Pl(Y,J),gt);Zl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(r(Y,k.sibling),gt=u(k,J),gt.return=Y,Y=gt):(r(Y,k),gt=Wu(J,Y.mode,gt),gt.return=Y,Y=gt),M(Y)):r(Y,k)}return function(Y,k,J,gt){try{Eo=0;var kt=Ge(Y,k,J,gt);return ts=null,kt}catch(Kt){if(Kt===po||Kt===Bl)throw Kt;var _e=Kn(29,Kt,null,Y.mode);return _e.lanes=gt,_e.return=Y,_e}finally{}}}var es=dg(!0),hg=dg(!1),fi=$(null),Oi=null;function Aa(e){var n=e.alternate;Mt(mn,mn.current&1),Mt(fi,e),Oi===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(Oi=e)}function pg(e){if(e.tag===22){if(Mt(mn,mn.current),Mt(fi,e),Oi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Oi=e)}}else Ra()}function Ra(){Mt(mn,mn.current),Mt(fi,fi.current)}function $i(e){_t(fi),Oi===e&&(Oi=null),_t(mn)}var mn=$(0);function Kl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||md(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Af(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Rf={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=ti(),u=Ea(o);u.payload=n,r!=null&&(u.callback=r),n=ba(e,u,o),n!==null&&(ei(n,e,o),go(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=ti(),u=Ea(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=ba(e,u,o),n!==null&&(ei(n,e,o),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ti(),o=Ea(r);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,r),n!==null&&(ei(n,e,r),go(n,e,r))}};function mg(e,n,r,o,u,p,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,M):n.prototype&&n.prototype.isPureReactComponent?!ro(r,o)||!ro(u,p):!0}function gg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&Rf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=g({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _g(e){Ql(e)}function vg(e){console.error(e)}function yg(e){Ql(e)}function Jl(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xg(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,r){return r=Ea(r),r.tag=3,r.payload={element:null},r.callback=function(){Jl(e,n)},r}function Sg(e){return e=Ea(e),e.tag=3,e}function Mg(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var p=o.value;e.payload=function(){return u(p)},e.callback=function(){xg(n,r,o)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){xg(n,r,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function wx(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&uo(n,r,u,!0),r=fi.current,r!==null){switch(r.tag){case 13:return Oi===null?Jf():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===nf?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),td(e,o,u)),!1;case 22:return r.flags|=65536,o===nf?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),td(e,o,u)),!1}throw Error(s(435,r.tag))}return td(e,o,u),Jf(),!1}if(Ne)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Zu&&(e=Error(s(422),{cause:o}),co(oi(e,r)))):(o!==Zu&&(n=Error(s(423),{cause:o}),co(oi(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=oi(o,r),u=wf(e.stateNode,o,u),sf(e,u),an!==4&&(an=2)),!1;var p=Error(s(520),{cause:o});if(p=oi(p,r),Uo===null?Uo=[p]:Uo.push(p),an!==4&&(an=2),n===null)return!0;o=oi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=wf(r.stateNode,o,e),sf(r,e),!1;case 1:if(n=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Na===null||!Na.has(p))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Sg(u),Mg(u,e,r,o),sf(r,u),!1}r=r.return}while(r!==null);return!1}var Eg=Error(s(461)),xn=!1;function Tn(e,n,r,o){n.child=e===null?hg(n,null,r,o):es(n,e.child,r,o)}function bg(e,n,r,o,u){r=r.render;var p=n.ref;if("ref"in o){var M={};for(var R in o)R!=="ref"&&(M[R]=o[R])}else M=o;return cr(n),o=ff(e,n,r,M,p,u),R=df(),e!==null&&!xn?(hf(e,n,u),ta(e,n,u)):(Ne&&R&&Yu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Tg(e,n,r,o,u){if(e===null){var p=r.type;return typeof p=="function"&&!Xu(p)&&p.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=p,Ag(e,n,p,o,u)):(e=Ul(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!If(e,u)){var M=p.memoizedProps;if(r=r.compare,r=r!==null?r:ro,r(M,o)&&e.ref===n.ref)return ta(e,n,u)}return n.flags|=1,e=Yi(p,o),e.ref=n.ref,e.return=n,n.child=e}function Ag(e,n,r,o,u){if(e!==null){var p=e.memoizedProps;if(ro(p,o)&&e.ref===n.ref)if(xn=!1,n.pendingProps=o=p,If(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,ta(e,n,u)}return Cf(e,n,r,o,u)}function Rg(e,n,r){var o=n.pendingProps,u=o.children,p=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=p!==null?p.baseLanes|r:r,e!==null){for(u=n.child=e.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;n.childLanes=p&~o}else n.childLanes=0,n.child=null;return wg(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Il(n,p!==null?p.cachePool:null),p!==null?Am(n,p):lf(),pg(n);else return n.lanes=n.childLanes=536870912,wg(e,n,p!==null?p.baseLanes|r:r,r)}else p!==null?(Il(n,p.cachePool),Am(n,p),Ra(),n.memoizedState=null):(e!==null&&Il(n,null),lf(),Ra());return Tn(e,n,u,r),n.child}function wg(e,n,r,o){var u=ef();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&Il(n,null),lf(),pg(n),e!==null&&uo(e,n,o,!0),null}function $l(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function Cf(e,n,r,o,u){return cr(n),r=ff(e,n,r,o,void 0,u),o=df(),e!==null&&!xn?(hf(e,n,u),ta(e,n,u)):(Ne&&o&&Yu(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Cg(e,n,r,o,u,p){return cr(n),n.updateQueue=null,r=wm(n,o,r,u),Rm(e),o=df(),e!==null&&!xn?(hf(e,n,p),ta(e,n,p)):(Ne&&o&&Yu(n),n.flags|=1,Tn(e,n,r,p),n.child)}function Dg(e,n,r,o,u){if(cr(n),n.stateNode===null){var p=Wr,M=r.contextType;typeof M=="object"&&M!==null&&(p=Un(M)),p=new r(o,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Rf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=o,p.state=n.memoizedState,p.refs={},af(n),M=r.contextType,p.context=typeof M=="object"&&M!==null?Un(M):Wr,p.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Af(n,r,M,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Rf.enqueueReplaceState(p,p.state,null),vo(n,o,p,u),_o(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){p=n.stateNode;var R=n.memoizedProps,H=dr(r,R);p.props=H;var tt=p.context,mt=r.contextType;M=Wr,typeof mt=="object"&&mt!==null&&(M=Un(mt));var yt=r.getDerivedStateFromProps;mt=typeof yt=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||tt!==M)&&gg(n,p,o,M),Ma=!1;var at=n.memoizedState;p.state=at,vo(n,o,p,u),_o(),tt=n.memoizedState,R||at!==tt||Ma?(typeof yt=="function"&&(Af(n,r,yt,o),tt=n.memoizedState),(H=Ma||mg(n,r,H,o,at,tt,M))?(mt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),p.props=o,p.state=tt,p.context=M,o=H):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{p=n.stateNode,rf(e,n),M=n.memoizedProps,mt=dr(r,M),p.props=mt,yt=n.pendingProps,at=p.context,tt=r.contextType,H=Wr,typeof tt=="object"&&tt!==null&&(H=Un(tt)),R=r.getDerivedStateFromProps,(tt=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==yt||at!==H)&&gg(n,p,o,H),Ma=!1,at=n.memoizedState,p.state=at,vo(n,o,p,u),_o();var rt=n.memoizedState;M!==yt||at!==rt||Ma||e!==null&&e.dependencies!==null&&Ol(e.dependencies)?(typeof R=="function"&&(Af(n,r,R,o),rt=n.memoizedState),(mt=Ma||mg(n,r,mt,o,at,rt,H)||e!==null&&e.dependencies!==null&&Ol(e.dependencies))?(tt||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,rt,H),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,rt,H)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),p.props=o,p.state=rt,p.context=H,o=mt):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return p=o,$l(e,n),o=(n.flags&128)!==0,p||o?(p=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&o?(n.child=es(n,e.child,null,u),n.child=es(n,null,r,u)):Tn(e,n,r,u),n.memoizedState=p.state,e=n.child):e=ta(e,n,u),e}function Ug(e,n,r,o){return lo(),n.flags|=256,Tn(e,n,r,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:vm()}}function Lf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=di),e}function Lg(e,n,r){var o=n.pendingProps,u=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(u?Aa(n):Ra(),Ne){var R=nn,H;if(H=R){t:{for(H=R,R=Ni;H.nodeType!==8;){if(!R){R=null;break t}if(H=Mi(H.nextSibling),H===null){R=null;break t}}R=H}R!==null?(n.memoizedState={dehydrated:R,treeContext:ar!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},H=Kn(18,null,null,0),H.stateNode=R,H.return=n,n.child=H,zn=n,nn=null,H=!0):H=!1}H||or(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return md(R)?n.lanes=32:n.lanes=536870912,null;$i(n)}return R=o.children,o=o.fallback,u?(Ra(),u=n.mode,R=tc({mode:"hidden",children:R},u),o=ir(o,u,r,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=Uf(r),u.childLanes=Lf(e,M,r),n.memoizedState=Df,o):(Aa(n),Nf(n,R))}if(H=e.memoizedState,H!==null&&(R=H.dehydrated,R!==null)){if(p)n.flags&256?(Aa(n),n.flags&=-257,n=Of(e,n,r)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),u=o.fallback,R=n.mode,o=tc({mode:"visible",children:o.children},R),u=ir(u,R,r,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,es(n,e.child,null,r),o=n.child,o.memoizedState=Uf(r),o.childLanes=Lf(e,M,r),n.memoizedState=Df,n=u);else if(Aa(n),md(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var tt=M.dgst;M=tt,o=Error(s(419)),o.stack="",o.digest=M,co({value:o,source:null,stack:null}),n=Of(e,n,r)}else if(xn||uo(e,n,r,!1),M=(r&e.childLanes)!==0,xn||M){if(M=qe,M!==null&&(o=r&-r,o=(o&42)!==0?1:oe(o),o=(o&(M.suspendedLanes|r))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,Xr(e,o),ei(M,e,o),Eg;R.data==="$?"||Jf(),n=Of(e,n,r)}else R.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,nn=Mi(R.nextSibling),zn=n,Ne=!0,sr=null,Ni=!1,e!==null&&(ci[ui++]=ji,ci[ui++]=Zi,ci[ui++]=ar,ji=e.id,Zi=e.overflow,ar=n),n=Nf(n,o.children),n.flags|=4096);return n}return u?(Ra(),u=o.fallback,R=n.mode,H=e.child,tt=H.sibling,o=Yi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,tt!==null?u=Yi(tt,u):(u=ir(u,R,r,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=e.child.memoizedState,R===null?R=Uf(r):(H=R.cachePool,H!==null?(tt=pn._currentValue,H=H.parent!==tt?{parent:tt,pool:tt}:H):H=vm(),R={baseLanes:R.baseLanes|r,cachePool:H}),u.memoizedState=R,u.childLanes=Lf(e,M,r),n.memoizedState=Df,o):(Aa(n),r=e.child,e=r.sibling,r=Yi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=r,n.memoizedState=null,r)}function Nf(e,n){return n=tc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function tc(e,n){return e=Kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Of(e,n,r){return es(n,e.child,null,r),e=Nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ng(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Qu(e.return,n,r)}function Pf(e,n,r,o,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=r,p.tailMode=u)}function Og(e,n,r){var o=n.pendingProps,u=o.revealOrder,p=o.tail;if(Tn(e,n,o.children,r),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ng(e,r,n);else if(e.tag===19)Ng(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(mn,o),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Kl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Pf(n,!1,u,r,p);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Pf(n,!0,r,null,p);break;case"together":Pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ta(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(uo(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,r=Yi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Yi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function If(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ol(e)))}function Cx(e,n,r){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),Sa(n,pn,e.memoizedState.cache),lo();break;case 27:case 5:Vt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Lg(e,n,r):(Aa(n),e=ta(e,n,r),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(uo(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return Og(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,Rg(e,n,r);case 24:Sa(n,pn,e.memoizedState.cache)}return ta(e,n,r)}function Pg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!If(e,r)&&(n.flags&128)===0)return xn=!1,Cx(e,n,r);xn=(e.flags&131072)!==0}else xn=!1,Ne&&(n.flags&1048576)!==0&&fm(n,Nl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Xu(o)?(e=dr(o,e),n.tag=1,n=Dg(null,n,o,e,r)):(n.tag=0,n=Cf(null,n,o,e,r));else{if(o!=null){if(u=o.$$typeof,u===A){n.tag=11,n=bg(null,n,o,e,r);break t}else if(u===I){n.tag=14,n=Tg(null,n,o,e,r);break t}}throw n=ct(o)||o,Error(s(306,n,""))}}return n;case 0:return Cf(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=dr(o,n.pendingProps),Dg(e,n,o,u,r);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var p=n.memoizedState;u=p.element,rf(e,n),vo(n,o,null,r);var M=n.memoizedState;if(o=M.cache,Sa(n,pn,o),o!==p.cache&&Ju(n,[pn],r,!0),_o(),o=M.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=Ug(e,n,o,r);break t}else if(o!==u){u=oi(Error(s(424)),n),co(u),n=Ug(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Mi(e.firstChild),zn=n,Ne=!0,sr=null,Ni=!0,r=hg(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(lo(),o===u){n=ta(e,n,r);break t}Tn(e,n,o,r)}n=n.child}return n;case 26:return $l(e,n),e===null?(r=F_(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ne||(r=n.type,e=n.pendingProps,o=pc(pt.current).createElement(r),o[hn]=n,o[tn]=e,Rn(o,r,e),ln(o),n.stateNode=o):n.memoizedState=F_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Ne&&(o=n.stateNode=I_(n.type,n.pendingProps,pt.current),zn=n,Ni=!0,u=nn,Ia(n.type)?(gd=u,nn=Mi(o.firstChild)):nn=u),Tn(e,n,n.pendingProps.children,r),$l(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ne&&((u=o=nn)&&(o=iS(o,n.type,n.pendingProps,Ni),o!==null?(n.stateNode=o,zn=n,nn=Mi(o.firstChild),Ni=!1,u=!0):u=!1),u||or(n)),Vt(n),u=n.type,p=n.pendingProps,M=e!==null?e.memoizedProps:null,o=p.children,dd(u,p)?o=null:M!==null&&dd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,Sx,null,null,r),Ho._currentValue=u),$l(e,n),Tn(e,n,o,r),n.child;case 6:return e===null&&Ne&&((e=r=nn)&&(r=aS(r,n.pendingProps,Ni),r!==null?(n.stateNode=r,zn=n,nn=null,e=!0):e=!1),e||or(n)),null;case 13:return Lg(e,n,r);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=es(n,null,o,r):Tn(e,n,o,r),n.child;case 11:return bg(e,n,n.type,n.pendingProps,r);case 7:return Tn(e,n,n.pendingProps,r),n.child;case 8:return Tn(e,n,n.pendingProps.children,r),n.child;case 12:return Tn(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),Tn(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=Un(u),o=o(u),n.flags|=1,Tn(e,n,o,r),n.child;case 14:return Tg(e,n,n.type,n.pendingProps,r);case 15:return Ag(e,n,n.type,n.pendingProps,r);case 19:return Og(e,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},e===null?(r=tc(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Yi(e.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Rg(e,n,r);case 24:return cr(n),o=Un(pn),e===null?(u=ef(),u===null&&(u=qe,p=$u(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=r),u=p),n.memoizedState={parent:o,cache:u},af(n),Sa(n,pn,u)):((e.lanes&r)!==0&&(rf(e,n),vo(n,null,null,r),_o()),u=e.memoizedState,p=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,pn,o)):(o=p.cache,Sa(n,pn,o),o!==u.cache&&Ju(n,[pn],r,!0))),Tn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(e){e.flags|=4}function Ig(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!X_(n)){if(n=fi.current,n!==null&&((be&4194048)===be?Oi!==null:(be&62914560)!==be&&(be&536870912)===0||n!==Oi))throw mo=nf,ym;e.flags|=8192}}function ec(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?wt():536870912,e.lanes|=n,rs|=n)}function To(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Dx(e,n,r){var o=n.pendingProps;switch(ju(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(pn),qt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pm())),$e(n),null;case 26:return r=n.memoizedState,e===null?(ea(n),r!==null?($e(n),Ig(n,r)):($e(n),n.flags&=-16777217)):r?r!==e.memoizedState?(ea(n),$e(n),Ig(n,r)):($e(n),n.flags&=-16777217):(e.memoizedProps!==o&&ea(n),$e(n),n.flags&=-16777217),null;case 27:Ee(n),r=pt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Ct.current,oo(n)?dm(n):(e=I_(u,o,r),n.stateNode=e,ea(n))}return $e(n),null;case 5:if(Ee(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(e=Ct.current,oo(n))dm(n);else{switch(u=pc(pt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(r,{is:o.is}):u.createElement(r)}}e[hn]=n,e[tn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ea(n)}}return $e(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=pt.current,oo(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||C_(e.nodeValue,r)),e||or(n)}else e=pc(e).createTextNode(o),e[hn]=n,n.stateNode=e}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=oo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else lo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=pm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($i(n),n):($i(n),null)}if($i(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var p=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==u&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),ec(n,n.updateQueue),$e(n),null;case 4:return qt(),e===null&&od(n.stateNode.containerInfo),$e(n),null;case 10:return Qi(n.type),$e(n),null;case 19:if(_t(mn),u=n.memoizedState,u===null)return $e(n),null;if(o=(n.flags&128)!==0,p=u.rendering,p===null)if(o)To(u,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Kl(e),p!==null){for(n.flags|=128,To(u,!1),e=p.updateQueue,n.updateQueue=e,ec(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)um(r,e),r=r.sibling;return Mt(mn,mn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ht()>ac&&(n.flags|=128,o=!0,To(u,!1),n.lanes=4194304)}else{if(!o)if(e=Kl(p),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,ec(n,e),To(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Ne)return $e(n),null}else 2*Ht()-u.renderingStartTime>ac&&r!==536870912&&(n.flags|=128,o=!0,To(u,!1),n.lanes=4194304);u.isBackwards?(p.sibling=n.child,n.child=p):(e=u.last,e!==null?e.sibling=p:n.child=p,u.last=p)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ht(),n.sibling=null,e=mn.current,Mt(mn,o?e&1|2:e&1),n):($e(n),null);case 22:case 23:return $i(n),cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),r=n.updateQueue,r!==null&&ec(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&_t(ur),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(pn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ux(e,n){switch(ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(pn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ee(n),null;case 13:if($i(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));lo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(mn),null;case 4:return qt(),null;case 10:return Qi(n.type),null;case 22:case 23:return $i(n),cf(),e!==null&&_t(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(pn),null;case 25:return null;default:return null}}function Bg(e,n){switch(ju(n),n.tag){case 3:Qi(pn),qt();break;case 26:case 27:case 5:Ee(n);break;case 4:qt();break;case 13:$i(n);break;case 19:_t(mn);break;case 10:Qi(n.type);break;case 22:case 23:$i(n),cf(),e!==null&&_t(ur);break;case 24:Qi(pn)}}function Ao(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var p=r.create,M=r.inst;o=p(),M.destroy=o}r=r.next}while(r!==u)}}catch(R){We(n,n.return,R)}}function wa(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&e)===e){var M=o.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,u=n;var H=r,tt=R;try{tt()}catch(mt){We(u,H,mt)}}}o=o.next}while(o!==p)}}catch(mt){We(n,n.return,mt)}}function zg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Tm(n,r)}catch(o){We(e,e.return,o)}}}function Fg(e,n,r){r.props=dr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){We(e,n,o)}}function Ro(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){We(e,n,u)}}function Pi(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){We(e,n,u)}else r.current=null}function Hg(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){We(e,e.return,u)}}function Bf(e,n,r){try{var o=e.stateNode;Jx(o,e.type,r,n),o[tn]=n}catch(u){We(e,e.return,u)}}function Gg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=hc));else if(o!==4&&(o===27&&Ia(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,r),e=e.sibling;e!==null;)Ff(e,n,r),e=e.sibling}function nc(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&Ia(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(nc(e,n,r),e=e.sibling;e!==null;)nc(e,n,r),e=e.sibling}function Vg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,r),n[hn]=e,n[tn]=r}catch(p){We(e,e.return,p)}}var na=!1,on=!1,Hf=!1,kg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Lx(e,n){if(e=e.containerInfo,ud=xc,e=tm(e),Bu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var M=0,R=-1,H=-1,tt=0,mt=0,yt=e,at=null;e:for(;;){for(var rt;yt!==r||u!==0&&yt.nodeType!==3||(R=M+u),yt!==p||o!==0&&yt.nodeType!==3||(H=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(rt=yt.firstChild)!==null;)at=yt,yt=rt;for(;;){if(yt===e)break e;if(at===r&&++tt===u&&(R=M),at===p&&++mt===o&&(H=M),(rt=yt.nextSibling)!==null)break;yt=at,at=yt.parentNode}yt=rt}r=R===-1||H===-1?null:{start:R,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(fd={focusedElem:e,selectionRange:r},xc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,p=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=n,u=p.memoizedProps,p=p.memoizedState,o=r.stateNode;try{var se=dr(r.type,u,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(se,p),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){We(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)pd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Xg(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(e,r),o&4&&Ao(5,r);break;case 1:if(Ca(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(M){We(r,r.return,M)}else{var u=dr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){We(r,r.return,M)}}o&64&&zg(r),o&512&&Ro(r,r.return);break;case 3:if(Ca(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Tm(e,n)}catch(M){We(r,r.return,M)}}break;case 27:n===null&&o&4&&Vg(r);case 26:case 5:Ca(e,r),n===null&&o&4&&Hg(r),o&512&&Ro(r,r.return);break;case 12:Ca(e,r);break;case 13:Ca(e,r),o&4&&Yg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Gx.bind(null,r),rS(e,r))));break;case 22:if(o=r.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||on,u=na;var p=on;na=o,(on=n)&&!p?Da(e,r,(r.subtreeFlags&8772)!==0):Ca(e,r),na=u,on=p}break;case 30:break;default:Ca(e,r)}}function Wg(e){var n=e.alternate;n!==null&&(e.alternate=null,Wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ir(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,qn=!1;function ia(e,n,r){for(r=r.child;r!==null;)qg(e,n,r),r=r.sibling}function qg(e,n,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(dt,r)}catch{}switch(r.tag){case 26:on||Pi(r,n),ia(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:on||Pi(r,n);var o=Qe,u=qn;Ia(r.type)&&(Qe=r.stateNode,qn=!1),ia(e,n,r),Io(r.stateNode),Qe=o,qn=u;break;case 5:on||Pi(r,n);case 6:if(o=Qe,u=qn,Qe=null,ia(e,n,r),Qe=o,qn=u,Qe!==null)if(qn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(p){We(r,n,p)}else try{Qe.removeChild(r.stateNode)}catch(p){We(r,n,p)}break;case 18:Qe!==null&&(qn?(e=Qe,O_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Xo(e)):O_(Qe,r.stateNode));break;case 4:o=Qe,u=qn,Qe=r.stateNode.containerInfo,qn=!0,ia(e,n,r),Qe=o,qn=u;break;case 0:case 11:case 14:case 15:on||wa(2,r,n),on||wa(4,r,n),ia(e,n,r);break;case 1:on||(Pi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Fg(r,n,o)),ia(e,n,r);break;case 21:ia(e,n,r);break;case 22:on=(o=on)||r.memoizedState!==null,ia(e,n,r),on=o;break;default:ia(e,n,r)}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xo(e)}catch(r){We(n,n.return,r)}}function Nx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new kg),n;default:throw Error(s(435,e.tag))}}function Gf(e,n){var r=Nx(e);n.forEach(function(o){var u=Vx.bind(null,e,o);r.has(o)||(r.add(o),o.then(u,u))})}function Qn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],p=e,M=n,R=M;t:for(;R!==null;){switch(R.tag){case 27:if(Ia(R.type)){Qe=R.stateNode,qn=!1;break t}break;case 5:Qe=R.stateNode,qn=!1;break t;case 3:case 4:Qe=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(Qe===null)throw Error(s(160));qg(p,M,u),Qe=null,qn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var Si=null;function jg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(n,e),Jn(e),o&4&&(wa(3,e,e.return),Ao(3,e),wa(5,e,e.return));break;case 1:Qn(n,e),Jn(e),o&512&&(on||r===null||Pi(r,r.return)),o&64&&na&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Si;if(Qn(n,e),Jn(e),o&512&&(on||r===null||Pi(r,r.return)),o&4){var p=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":p=u.getElementsByTagName("title")[0],(!p||p[Li]||p[hn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(o),u.head.insertBefore(p,u.querySelector("head > title"))),Rn(p,o,r),p[hn]=e,ln(p),o=p;break t;case"link":var M=V_("link","href",u).get(o+(r.href||""));if(M){for(var R=0;R<M.length;R++)if(p=M[R],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(R,1);break e}}p=u.createElement(o),Rn(p,o,r),u.head.appendChild(p);break;case"meta":if(M=V_("meta","content",u).get(o+(r.content||""))){for(R=0;R<M.length;R++)if(p=M[R],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(R,1);break e}}p=u.createElement(o),Rn(p,o,r),u.head.appendChild(p);break;default:throw Error(s(468,o))}p[hn]=e,ln(p),o=p}e.stateNode=o}else k_(u,e.type,e.stateNode);else e.stateNode=G_(u,o,e.memoizedProps);else p!==o?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,o===null?k_(u,e.type,e.stateNode):G_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bf(e,e.memoizedProps,r.memoizedProps)}break;case 27:Qn(n,e),Jn(e),o&512&&(on||r===null||Pi(r,r.return)),r!==null&&o&4&&Bf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Qn(n,e),Jn(e),o&512&&(on||r===null||Pi(r,r.return)),e.flags&32){u=e.stateNode;try{kn(u,"")}catch(rt){We(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Bf(e,u,r!==null?r.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(Qn(n,e),Jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(rt){We(e,e.return,rt)}}break;case 3:if(_c=null,u=Si,Si=mc(n.containerInfo),Qn(n,e),Si=u,Jn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Xo(n.containerInfo)}catch(rt){We(e,e.return,rt)}Hf&&(Hf=!1,Zg(e));break;case 4:o=Si,Si=mc(e.stateNode.containerInfo),Qn(n,e),Jn(e),Si=o;break;case 12:Qn(n,e),Jn(e);break;case 13:Qn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Yf=Ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gf(e,o)));break;case 22:u=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,tt=na,mt=on;if(na=tt||u,on=mt||H,Qn(n,e),on=mt,na=tt,Jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||H||na||on||hr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){H=r=n;try{if(p=H.stateNode,u)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=H.stateNode;var yt=H.memoizedProps.style,at=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;R.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){We(H,H.return,rt)}}}else if(n.tag===6){if(r===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(rt){We(H,H.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Gf(e,r))));break;case 19:Qn(n,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gf(e,o)));break;case 30:break;case 21:break;default:Qn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(Gg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,p=zf(e);nc(e,p,u);break;case 5:var M=r.stateNode;r.flags&32&&(kn(M,""),r.flags&=-33);var R=zf(e);nc(e,R,M);break;case 3:case 4:var H=r.stateNode.containerInfo,tt=zf(e);Ff(e,tt,H);break;default:throw Error(s(161))}}catch(mt){We(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xg(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),hr(n);break;case 1:Pi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Fg(n,n.return,r),hr(n);break;case 27:Io(n.stateNode);case 26:case 5:Pi(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Da(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:Da(u,p,r),Ao(4,p);break;case 1:if(Da(u,p,r),o=p,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){We(o,o.return,tt)}if(o=p,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)bm(H[u],R)}catch(tt){We(o,o.return,tt)}}r&&M&64&&zg(p),Ro(p,p.return);break;case 27:Vg(p);case 26:case 5:Da(u,p,r),r&&o===null&&M&4&&Hg(p),Ro(p,p.return);break;case 12:Da(u,p,r);break;case 13:Da(u,p,r),r&&M&4&&Yg(u,p);break;case 22:p.memoizedState===null&&Da(u,p,r),Ro(p,p.return);break;case 30:break;default:Da(u,p,r)}n=n.sibling}}function Vf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&fo(r))}function kf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Ii(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(e,n,r,o),n=n.sibling}function Kg(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(e,n,r,o),u&2048&&Ao(9,n);break;case 1:Ii(e,n,r,o);break;case 3:Ii(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ii(e,n,r,o),e=n.stateNode;try{var p=n.memoizedProps,M=p.id,R=p.onPostCommit;typeof R=="function"&&R(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){We(n,n.return,H)}}else Ii(e,n,r,o);break;case 13:Ii(e,n,r,o);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?Ii(e,n,r,o):wo(e,n):p._visibility&2?Ii(e,n,r,o):(p._visibility|=2,ns(e,n,r,o,(n.subtreeFlags&10256)!==0)),u&2048&&Vf(M,n);break;case 24:Ii(e,n,r,o),u&2048&&kf(n.alternate,n);break;default:Ii(e,n,r,o)}}function ns(e,n,r,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var p=e,M=n,R=r,H=o,tt=M.flags;switch(M.tag){case 0:case 11:case 15:ns(p,M,R,H,u),Ao(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?ns(p,M,R,H,u):wo(p,M):(mt._visibility|=2,ns(p,M,R,H,u)),u&&tt&2048&&Vf(M.alternate,M);break;case 24:ns(p,M,R,H,u),u&&tt&2048&&kf(M.alternate,M);break;default:ns(p,M,R,H,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:wo(r,o),u&2048&&Vf(o.alternate,o);break;case 24:wo(r,o),u&2048&&kf(o.alternate,o);break;default:wo(r,o)}n=n.sibling}}var Co=8192;function is(e){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)Qg(e),e=e.sibling}function Qg(e){switch(e.tag){case 26:is(e),e.flags&Co&&e.memoizedState!==null&&vS(Si,e.memoizedState,e.memoizedProps);break;case 5:is(e);break;case 3:case 4:var n=Si;Si=mc(e.stateNode.containerInfo),is(e),Si=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Co,Co=16777216,is(e),Co=n):is(e));break;default:is(e)}}function Jg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,t_(o,e)}Jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$g(e),e=e.sibling}function $g(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):Do(e);break;default:Do(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,t_(o,e)}Jg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),ic(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function t_(e,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:wa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else t:for(r=e;Sn!==null;){o=Sn;var u=o.sibling,p=o.return;if(Wg(o),o===r){Sn=null;break t}if(u!==null){u.return=p,Sn=u;break t}Sn=p}}}var Ox={getCacheForType:function(e){var n=Un(pn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},Px=typeof WeakMap=="function"?WeakMap:Map,Ie=0,qe=null,ye=null,be=0,Be=0,$n=null,Ua=!1,as=!1,Xf=!1,aa=0,an=0,La=0,pr=0,Wf=0,di=0,rs=0,Uo=null,Yn=null,qf=!1,Yf=0,ac=1/0,rc=null,Na=null,An=0,Oa=null,ss=null,os=0,jf=0,Zf=null,e_=null,Lo=0,Kf=null;function ti(){if((Ie&2)!==0&&be!==0)return be&-be;if(F.T!==null){var e=jr;return e!==0?e:id()}return Te()}function n_(){di===0&&(di=(be&536870912)===0||Ne?X():536870912);var e=fi.current;return e!==null&&(e.flags|=32),di}function ei(e,n,r){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ls(e,0),Pa(e,be,di,!1)),Ft(e,r),((Ie&2)===0||e!==qe)&&(e===qe&&((Ie&2)===0&&(pr|=r),an===4&&Pa(e,be,di,!1)),Bi(e))}function i_(e,n,r){if((Ie&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?zx(e,n):$f(e,n,!0),p=o;do{if(u===0){as&&!o&&Pa(e,n,0,!1);break}else{if(r=e.current.alternate,p&&!Ix(r)){u=$f(e,n,!1),p=!1;continue}if(u===2){if(p=n,e.errorRecoveryDisabledLanes&p)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var R=e;u=Uo;var H=R.current.memoizedState.isDehydrated;if(H&&(ls(R,M).flags|=256),M=$f(R,M,!1),M!==2){if(Xf&&!H){R.errorRecoveryDisabledLanes|=p,pr|=p,u=4;break t}p=Yn,Yn=u,p!==null&&(Yn===null?Yn=p:Yn.push.apply(Yn,p))}u=M}if(p=!1,u!==2)continue}}if(u===1){ls(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,p=u,p){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,di,!Ua);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yf+300-Ht(),10<u)){if(Pa(o,n,di,!Ua),Wt(o,0,!0)!==0)break t;o.timeoutHandle=L_(a_.bind(null,o,r,Yn,rc,qf,n,di,pr,rs,Ua,p,2,-0,0),u);break t}a_(o,r,Yn,rc,qf,n,di,pr,rs,Ua,p,0,-0,0)}}break}while(!0);Bi(e)}function a_(e,n,r,o,u,p,M,R,H,tt,mt,yt,at,rt){if(e.timeoutHandle=-1,yt=n.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(Fo={stylesheets:null,count:0,unsuspend:_S},Qg(n),yt=yS(),yt!==null)){e.cancelPendingCommit=yt(f_.bind(null,e,n,p,r,o,u,M,R,H,mt,1,at,rt)),Pa(e,p,M,!tt);return}f_(e,n,p,r,o,u,M,R,H)}function Ix(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],p=u.getSnapshot;u=u.value;try{if(!Zn(p(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,r,o){n&=~Wf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var p=31-zt(u),M=1<<p;o[p]=-1,u&=~M}r!==0&&xt(e,r,n)}function sc(){return(Ie&6)===0?(No(0),!1):!0}function Qf(){if(ye!==null){if(Be===0)var e=ye.return;else e=ye,Ki=lr=null,pf(e),ts=null,Eo=0,e=ye;for(;e!==null;)Bg(e.alternate,e),e=e.return;ye=null}}function ls(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,tS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Qf(),qe=e,ye=r=Yi(e.current,null),be=n,Be=0,$n=null,Ua=!1,as=Lt(e,n),Xf=!1,rs=di=Wf=pr=La=an=0,Yn=Uo=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),p=1<<u;n|=e[u],o&=~p}return aa=n,wl(),r}function r_(e,n){ge=null,F.H=Yl,n===po||n===Bl?(n=Mm(),Be=3):n===ym?(n=Mm(),Be=4):Be=n===Eg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ye===null&&(an=1,Jl(e,oi(n,e.current)))}function s_(){var e=F.H;return F.H=Yl,e===null?Yl:e}function o_(){var e=F.A;return F.A=Ox,e}function Jf(){an=4,Ua||(be&4194048)!==be&&fi.current!==null||(as=!0),(La&134217727)===0&&(pr&134217727)===0||qe===null||Pa(qe,be,di,!1)}function $f(e,n,r){var o=Ie;Ie|=2;var u=s_(),p=o_();(qe!==e||be!==n)&&(rc=null,ls(e,n)),n=!1;var M=an;t:do try{if(Be!==0&&ye!==null){var R=ye,H=$n;switch(Be){case 8:Qf(),M=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var tt=Be;if(Be=0,$n=null,cs(e,R,H,tt),r&&as){M=0;break t}break;default:tt=Be,Be=0,$n=null,cs(e,R,H,tt)}}Bx(),M=an;break}catch(mt){r_(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Ki=lr=null,Ie=o,F.H=u,F.A=p,ye===null&&(qe=null,be=0,wl()),M}function Bx(){for(;ye!==null;)l_(ye)}function zx(e,n){var r=Ie;Ie|=2;var o=s_(),u=o_();qe!==e||be!==n?(rc=null,ac=Ht()+500,ls(e,n)):as=Lt(e,n);t:do try{if(Be!==0&&ye!==null){n=ye;var p=$n;e:switch(Be){case 1:Be=0,$n=null,cs(e,n,p,1);break;case 2:case 9:if(xm(p)){Be=0,$n=null,c_(n);break}n=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Bi(e)},p.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:xm(p)?(Be=0,$n=null,c_(n)):(Be=0,$n=null,cs(e,n,p,7));break;case 5:var M=null;switch(ye.tag){case 26:M=ye.memoizedState;case 5:case 27:var R=ye;if(!M||X_(M)){Be=0,$n=null;var H=R.sibling;if(H!==null)ye=H;else{var tt=R.return;tt!==null?(ye=tt,oc(tt)):ye=null}break e}}Be=0,$n=null,cs(e,n,p,5);break;case 6:Be=0,$n=null,cs(e,n,p,6);break;case 8:Qf(),an=6;break t;default:throw Error(s(462))}}Fx();break}catch(mt){r_(e,mt)}while(!0);return Ki=lr=null,F.H=o,F.A=u,Ie=r,ye!==null?0:(qe=null,be=0,wl(),an)}function Fx(){for(;ye!==null&&!Qt();)l_(ye)}function l_(e){var n=Pg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?oc(e):ye=n}function c_(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Cg(r,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Cg(r,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:pf(n);default:Bg(r,n),n=ye=um(n,aa),n=Pg(r,n,aa)}e.memoizedProps=e.pendingProps,n===null?oc(e):ye=n}function cs(e,n,r,o){Ki=lr=null,pf(n),ts=null,Eo=0;var u=n.return;try{if(wx(e,u,n,r,be)){an=1,Jl(e,oi(r,e.current)),ye=null;return}}catch(p){if(u!==null)throw ye=u,p;an=1,Jl(e,oi(r,e.current)),ye=null;return}n.flags&32768?(Ne||o===1?e=!0:as||(be&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),u_(n,e)):oc(n)}function oc(e){var n=e;do{if((n.flags&32768)!==0){u_(n,Ua);return}e=n.return;var r=Dx(n.alternate,n,aa);if(r!==null){ye=r;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);an===0&&(an=5)}function u_(e,n){do{var r=Ux(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);an=6,ye=null}function f_(e,n,r,o,u,p,M,R,H){e.cancelPendingCommit=null;do lc();while(An!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(p=n.lanes|n.childLanes,p|=Vu,At(e,r,p,M,R,H),e===qe&&(ye=qe=null,be=0),ss=n,Oa=e,os=r,jf=p,Zf=u,e_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kx(Oe,function(){return g_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=j.p,j.p=2,M=Ie,Ie|=4;try{Lx(e,n,r)}finally{Ie=M,j.p=u,F.T=o}}An=1,d_(),h_(),p_()}}function d_(){if(An===1){An=0;var e=Oa,n=ss,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var o=j.p;j.p=2;var u=Ie;Ie|=4;try{jg(n,e);var p=fd,M=tm(e.containerInfo),R=p.focusedElem,H=p.selectionRange;if(M!==R&&R&&R.ownerDocument&&$p(R.ownerDocument.documentElement,R)){if(H!==null&&Bu(R)){var tt=H.start,mt=H.end;if(mt===void 0&&(mt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(mt,R.value.length);else{var yt=R.ownerDocument||document,at=yt&&yt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),se=R.textContent.length,ie=Math.min(H.start,se),Ge=H.end===void 0?ie:Math.min(H.end,se);!rt.extend&&ie>Ge&&(M=Ge,Ge=ie,ie=M);var Y=Jp(R,ie),k=Jp(R,Ge);if(Y&&k&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var J=yt.createRange();J.setStart(Y.node,Y.offset),rt.removeAllRanges(),ie>Ge?(rt.addRange(J),rt.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),rt.addRange(J))}}}}for(yt=[],rt=R;rt=rt.parentNode;)rt.nodeType===1&&yt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var gt=yt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}xc=!!ud,fd=ud=null}finally{Ie=u,j.p=o,F.T=r}}e.current=n,An=2}}function h_(){if(An===2){An=0;var e=Oa,n=ss,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var o=j.p;j.p=2;var u=Ie;Ie|=4;try{Xg(e,n.alternate,n)}finally{Ie=u,j.p=o,F.T=r}}An=3}}function p_(){if(An===4||An===3){An=0,Se();var e=Oa,n=ss,r=os,o=e_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,ss=Oa=null,m_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Na=null),Pe(r),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=j.p,j.p=2,F.T=null;try{for(var p=e.onRecoverableError,M=0;M<o.length;M++){var R=o[M];p(R.value,{componentStack:R.stack})}}finally{F.T=n,j.p=u}}(os&3)!==0&&lc(),Bi(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Kf?Lo++:(Lo=0,Kf=e):Lo=0,No(0)}}function m_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function lc(e){return d_(),h_(),p_(),g_()}function g_(){if(An!==5)return!1;var e=Oa,n=jf;jf=0;var r=Pe(os),o=F.T,u=j.p;try{j.p=32>r?32:r,F.T=null,r=Zf,Zf=null;var p=Oa,M=os;if(An=0,ss=Oa=null,os=0,(Ie&6)!==0)throw Error(s(331));var R=Ie;if(Ie|=4,$g(p.current),Kg(p,p.current,M,r),Ie=R,No(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(dt,p)}catch{}return!0}finally{j.p=u,F.T=o,m_(e,n)}}function __(e,n,r){n=oi(r,n),n=wf(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(Ft(e,2),Bi(e))}function We(e,n,r){if(e.tag===3)__(e,e,r);else for(;n!==null;){if(n.tag===3){__(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=oi(r,e),r=Sg(2),o=ba(n,r,2),o!==null&&(Mg(r,o,n,e),Ft(o,2),Bi(o));break}}n=n.return}}function td(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Px;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Xf=!0,u.add(r),e=Hx.bind(null,e,n,r),n.then(e,e))}function Hx(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(be&r)===r&&(an===4||an===3&&(be&62914560)===be&&300>Ht()-Yf?(Ie&2)===0&&ls(e,0):Wf|=r,rs===be&&(rs=0)),Bi(e)}function v_(e,n){n===0&&(n=wt()),e=Xr(e,n),e!==null&&(Ft(e,n),Bi(e))}function Gx(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),v_(e,r)}function Vx(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),v_(e,r)}function kx(e,n){return V(e,n)}var cc=null,us=null,ed=!1,uc=!1,nd=!1,mr=0;function Bi(e){e!==us&&e.next===null&&(us===null?cc=us=e:us=us.next=e),uc=!0,ed||(ed=!0,Wx())}function No(e,n){if(!nd&&uc){nd=!0;do for(var r=!1,o=cc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var p=0;else{var M=o.suspendedLanes,R=o.pingedLanes;p=(1<<31-zt(42|e)+1)-1,p&=u&~(M&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,M_(o,p))}else p=be,p=Wt(o,o===qe?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Lt(o,p)||(r=!0,M_(o,p));o=o.next}while(r);nd=!1}}function Xx(){y_()}function y_(){uc=ed=!1;var e=0;mr!==0&&($x()&&(e=mr),mr=0);for(var n=Ht(),r=null,o=cc;o!==null;){var u=o.next,p=x_(o,n);p===0?(o.next=null,r===null?cc=u:r.next=u,u===null&&(us=r)):(r=o,(e!==0||(p&3)!==0)&&(uc=!0)),o=u}No(e)}function x_(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var M=31-zt(p),R=1<<M,H=u[M];H===-1?((R&r)===0||(R&o)!==0)&&(u[M]=ce(R,n)):H<=n&&(e.expiredLanes|=R),p&=~R}if(n=qe,r=be,r=Wt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Re(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Lt(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Re(o),Pe(r)){case 2:case 8:r=ne;break;case 32:r=Oe;break;case 268435456:r=P;break;default:r=Oe}return o=S_.bind(null,e),r=V(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Re(o),e.callbackPriority=2,e.callbackNode=null,2}function S_(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(lc()&&e.callbackNode!==r)return null;var o=be;return o=Wt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(i_(e,o,n),x_(e,Ht()),e.callbackNode!=null&&e.callbackNode===r?S_.bind(null,e):null)}function M_(e,n){if(lc())return null;i_(e,n,!0)}function Wx(){eS(function(){(Ie&6)!==0?V(bt,Xx):y_()})}function id(){return mr===0&&(mr=X()),mr}function E_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function b_(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function qx(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var p=E_((u[tn]||null).action),M=o.submitter;M&&(n=(n=M[tn]||null)?E_(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var R=new Tl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var H=M?b_(u,M):new FormData(u);Ef(r,{pending:!0,data:H,method:u.method,action:p},null,H)}}else typeof p=="function"&&(R.preventDefault(),H=M?b_(u,M):new FormData(u),Ef(r,{pending:!0,data:H,method:u.method,action:p},p,H))},currentTarget:u}]})}}for(var ad=0;ad<Gu.length;ad++){var rd=Gu[ad],Yx=rd.toLowerCase(),jx=rd[0].toUpperCase()+rd.slice(1);xi(Yx,"on"+jx)}xi(im,"onAnimationEnd"),xi(am,"onAnimationIteration"),xi(rm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(fx,"onTransitionRun"),xi(dx,"onTransitionStart"),xi(hx,"onTransitionCancel"),xi(sm,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function T_(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var p=void 0;if(n)for(var M=o.length-1;0<=M;M--){var R=o[M],H=R.instance,tt=R.currentTarget;if(R=R.listener,H!==p&&u.isPropagationStopped())break t;p=R,u.currentTarget=tt;try{p(u)}catch(mt){Ql(mt)}u.currentTarget=null,p=H}else for(M=0;M<o.length;M++){if(R=o[M],H=R.instance,tt=R.currentTarget,R=R.listener,H!==p&&u.isPropagationStopped())break t;p=R,u.currentTarget=tt;try{p(u)}catch(mt){Ql(mt)}u.currentTarget=null,p=H}}}}function xe(e,n){var r=n[Or];r===void 0&&(r=n[Or]=new Set);var o=e+"__bubble";r.has(o)||(A_(n,e,2,!1),r.add(o))}function sd(e,n,r){var o=0;n&&(o|=4),A_(r,e,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function od(e){if(!e[fc]){e[fc]=!0,yl.forEach(function(r){r!=="selectionchange"&&(Zx.has(r)||sd(r,!1,e),sd(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,sd("selectionchange",!1,n))}}function A_(e,n,r,o){switch(K_(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=Sd}r=u.bind(null,n,r,e),u=void 0,!wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function ld(e,n,r,o,u){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var R=o.stateNode.containerInfo;if(R===u)break;if(M===4)for(M=o.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;R!==null;){if(M=Wi(R),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){o=p=M;continue t}R=R.parentNode}}o=o.return}Np(function(){var tt=p,mt=Au(r),yt=[];t:{var at=om.get(e);if(at!==void 0){var rt=Tl,se=e;switch(e){case"keypress":if(El(r)===0)break t;case"keydown":case"keyup":rt=ky;break;case"focusin":se="focus",rt=Lu;break;case"focusout":se="blur",rt=Lu;break;case"beforeblur":case"afterblur":rt=Lu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=qy;break;case im:case am:case rm:rt=Oy;break;case sm:rt=jy;break;case"scroll":case"scrollend":rt=Cy;break;case"wheel":rt=Ky;break;case"copy":case"cut":case"paste":rt=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=zp;break;case"toggle":case"beforetoggle":rt=Jy}var ie=(n&4)!==0,Ge=!ie&&(e==="scroll"||e==="scrollend"),Y=ie?at!==null?at+"Capture":null:at;ie=[];for(var k=tt,J;k!==null;){var gt=k;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||Y===null||(gt=Js(k,Y),gt!=null&&ie.push(Po(k,gt,J))),Ge)break;k=k.return}0<ie.length&&(at=new rt(at,se,null,r,mt),yt.push({event:at,listeners:ie}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",at&&r!==Tu&&(se=r.relatedTarget||r.fromElement)&&(Wi(se)||se[Ui]))break t;if((rt||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(se=r.relatedTarget||r.toElement,rt=tt,se=se?Wi(se):null,se!==null&&(Ge=c(se),ie=se.tag,se!==Ge||ie!==5&&ie!==27&&ie!==6)&&(se=null)):(rt=null,se=tt),rt!==se)){if(ie=Ip,gt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=zp,gt="onPointerLeave",Y="onPointerEnter",k="pointer"),Ge=rt==null?at:$a(rt),J=se==null?at:$a(se),at=new ie(gt,k+"leave",rt,r,mt),at.target=Ge,at.relatedTarget=J,gt=null,Wi(mt)===tt&&(ie=new ie(Y,k+"enter",se,r,mt),ie.target=J,ie.relatedTarget=Ge,gt=ie),Ge=gt,rt&&se)e:{for(ie=rt,Y=se,k=0,J=ie;J;J=fs(J))k++;for(J=0,gt=Y;gt;gt=fs(gt))J++;for(;0<k-J;)ie=fs(ie),k--;for(;0<J-k;)Y=fs(Y),J--;for(;k--;){if(ie===Y||Y!==null&&ie===Y.alternate)break e;ie=fs(ie),Y=fs(Y)}ie=null}else ie=null;rt!==null&&R_(yt,at,rt,ie,!1),se!==null&&Ge!==null&&R_(yt,Ge,se,ie,!0)}}t:{if(at=tt?$a(tt):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var kt=qp;else if(Xp(at))if(Yp)kt=lx;else{kt=sx;var _e=rx}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&bu(tt.elementType)&&(kt=qp):kt=ox;if(kt&&(kt=kt(e,tt))){Wp(yt,kt,r,mt);break t}_e&&_e(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Dn(at,"number",at.value)}switch(_e=tt?$a(tt):window,e){case"focusin":(Xp(_e)||_e.contentEditable==="true")&&(Gr=_e,zu=tt,so=null);break;case"focusout":so=zu=Gr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,em(yt,r,mt);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":em(yt,r,mt)}var Kt;if(Ou)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else Hr?Vp(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(Fp&&r.locale!=="ko"&&(Hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Hr&&(Kt=Op()):(xa=mt,Cu="value"in xa?xa.value:xa.textContent,Hr=!0)),_e=dc(tt,re),0<_e.length&&(re=new Bp(re,e,null,r,mt),yt.push({event:re,listeners:_e}),Kt?re.data=Kt:(Kt=kp(r),Kt!==null&&(re.data=Kt)))),(Kt=tx?ex(e,r):nx(e,r))&&(re=dc(tt,"onBeforeInput"),0<re.length&&(_e=new Bp("onBeforeInput","beforeinput",null,r,mt),yt.push({event:_e,listeners:re}),_e.data=Kt)),qx(yt,e,tt,r,mt)}T_(yt,n)})}function Po(e,n,r){return{instance:e,listener:n,currentTarget:r}}function dc(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Js(e,r),u!=null&&o.unshift(Po(e,u,p)),u=Js(e,n),u!=null&&o.push(Po(e,u,p))),e.tag===3)return o;e=e.return}return[]}function fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R_(e,n,r,o,u){for(var p=n._reactName,M=[];r!==null&&r!==o;){var R=r,H=R.alternate,tt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||tt===null||(H=tt,u?(tt=Js(r,p),tt!=null&&M.unshift(Po(r,tt,H))):u||(tt=Js(r,p),tt!=null&&M.push(Po(r,tt,H)))),r=r.return}M.length!==0&&e.push({event:n,listeners:M})}var Kx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function w_(e){return(typeof e=="string"?e:""+e).replace(Kx,`
`).replace(Qx,"")}function C_(e,n){return n=w_(n),w_(e)===n}function hc(){}function He(e,n,r,o,u,p){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&kn(e,""+o);break;case"className":Gt(e,"class",o);break;case"tabIndex":Gt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(e,r,o);break;case"style":Up(e,o,p);break;case"data":if(n!=="object"){Gt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Sl(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Sl(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=hc);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ot(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ot(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ry.get(r)||r,Ot(e,r,o))}}function cd(e,n,r,o,u,p){switch(r){case"style":Up(e,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof o=="string"?kn(e,o):(typeof o=="number"||typeof o=="bigint")&&kn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),p=e[tn]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(n,p,u),typeof o=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Ot(e,r,o)}}}function Rn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,p;for(p in r)if(r.hasOwnProperty(p)){var M=r[p];if(M!=null)switch(p){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,p,M,r,null)}}u&&He(e,n,"srcSet",r.srcSet,r,null),o&&He(e,n,"src",r.src,r,null);return;case"input":xe("invalid",e);var R=p=M=u=null,H=null,tt=null;for(o in r)if(r.hasOwnProperty(o)){var mt=r[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":H=mt;break;case"defaultChecked":tt=mt;break;case"value":p=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:He(e,n,o,mt,r,null)}}Bn(e,p,R,H,tt,M,u,!1),ve(e);return;case"select":xe("invalid",e),o=M=p=null;for(u in r)if(r.hasOwnProperty(u)&&(R=r[u],R!=null))switch(u){case"value":p=R;break;case"defaultValue":M=R;break;case"multiple":o=R;default:He(e,n,u,R,r,null)}n=p,r=M,e.multiple=!!o,n!=null?en(e,!!o,n,!1):r!=null&&en(e,!!o,r,!0);return;case"textarea":xe("invalid",e),p=u=o=null;for(M in r)if(r.hasOwnProperty(M)&&(R=r[M],R!=null))switch(M){case"value":o=R;break;case"defaultValue":u=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:He(e,n,M,R,r,null)}Br(e,o,u,p),ve(e);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(o=r[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:He(e,n,H,o,r,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)xe(Oo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(o=r[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,tt,o,r,null)}return;default:if(bu(n)){for(mt in r)r.hasOwnProperty(mt)&&(o=r[mt],o!==void 0&&cd(e,n,mt,o,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(o=r[R],o!=null&&He(e,n,R,o,r,null))}function Jx(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,M=null,R=null,H=null,tt=null,mt=null;for(rt in r){var yt=r[rt];if(r.hasOwnProperty(rt)&&yt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=yt;default:o.hasOwnProperty(rt)||He(e,n,rt,null,o,yt)}}for(var at in o){var rt=o[at];if(yt=r[at],o.hasOwnProperty(at)&&(rt!=null||yt!=null))switch(at){case"type":p=rt;break;case"name":u=rt;break;case"checked":tt=rt;break;case"defaultChecked":mt=rt;break;case"value":M=rt;break;case"defaultValue":R=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==yt&&He(e,n,at,rt,o,yt)}}Xe(e,M,R,H,tt,mt,p,u);return;case"select":rt=M=R=at=null;for(p in r)if(H=r[p],r.hasOwnProperty(p)&&H!=null)switch(p){case"value":break;case"multiple":rt=H;default:o.hasOwnProperty(p)||He(e,n,p,null,o,H)}for(u in o)if(p=o[u],H=r[u],o.hasOwnProperty(u)&&(p!=null||H!=null))switch(u){case"value":at=p;break;case"defaultValue":R=p;break;case"multiple":M=p;default:p!==H&&He(e,n,u,p,o,H)}n=R,r=M,o=rt,at!=null?en(e,!!r,at,!1):!!o!=!!r&&(n!=null?en(e,!!r,n,!0):en(e,!!r,r?[]:"",!1));return;case"textarea":rt=at=null;for(R in r)if(u=r[R],r.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:He(e,n,R,null,o,u)}for(M in o)if(u=o[M],p=r[M],o.hasOwnProperty(M)&&(u!=null||p!=null))switch(M){case"value":at=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==p&&He(e,n,M,u,o,p)}bn(e,at,rt);return;case"option":for(var se in r)if(at=r[se],r.hasOwnProperty(se)&&at!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:He(e,n,se,null,o,at)}for(H in o)if(at=o[H],rt=r[H],o.hasOwnProperty(H)&&at!==rt&&(at!=null||rt!=null))switch(H){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:He(e,n,H,at,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)at=r[ie],r.hasOwnProperty(ie)&&at!=null&&!o.hasOwnProperty(ie)&&He(e,n,ie,null,o,at);for(tt in o)if(at=o[tt],rt=r[tt],o.hasOwnProperty(tt)&&at!==rt&&(at!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:He(e,n,tt,at,o,rt)}return;default:if(bu(n)){for(var Ge in r)at=r[Ge],r.hasOwnProperty(Ge)&&at!==void 0&&!o.hasOwnProperty(Ge)&&cd(e,n,Ge,void 0,o,at);for(mt in o)at=o[mt],rt=r[mt],!o.hasOwnProperty(mt)||at===rt||at===void 0&&rt===void 0||cd(e,n,mt,at,o,rt);return}}for(var Y in r)at=r[Y],r.hasOwnProperty(Y)&&at!=null&&!o.hasOwnProperty(Y)&&He(e,n,Y,null,o,at);for(yt in o)at=o[yt],rt=r[yt],!o.hasOwnProperty(yt)||at===rt||at==null&&rt==null||He(e,n,yt,at,o,rt)}var ud=null,fd=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function D_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function $x(){var e=window.event;return e&&e.type==="popstate"?e===hd?!1:(hd=e,!0):(hd=null,!1)}var L_=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,N_=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof N_<"u"?function(e){return N_.resolve(null).then(e).catch(nS)}:L_;function nS(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function O_(e,n){var r=n,o=0,u=0;do{var p=r.nextSibling;if(e.removeChild(r),p&&p.nodeType===8)if(r=p.data,r==="/$"){if(0<o&&8>o){r=o;var M=e.ownerDocument;if(r&1&&Io(M.documentElement),r&2&&Io(M.body),r&4)for(r=M.head,Io(r),M=r.firstChild;M;){var R=M.nextSibling,H=M.nodeName;M[Li]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&M.rel.toLowerCase()==="stylesheet"||r.removeChild(M),M=R}}if(u===0){e.removeChild(p),Xo(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:o=r.charCodeAt(0)-48;else o=0;r=p}while(r);Xo(n)}function pd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":pd(r),Ir(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function iS(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Li])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function aS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Mi(e.nextSibling),e===null))return null;return e}function md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var gd=null;function P_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function I_(e,n,r){switch(n=pc(r),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ir(e)}var hi=new Map,B_=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=j.d;j.d={f:sS,r:oS,D:lS,C:cS,L:uS,m:fS,X:hS,S:dS,M:pS};function sS(){var e=ra.f(),n=sc();return e||n}function oS(e){var n=va(e);n!==null&&n.tag===5&&n.type==="form"?ig(n):ra.r(e)}var ds=typeof document>"u"?null:document;function z_(e,n,r){var o=ds;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),B_.has(u)||(B_.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),ln(n),o.head.appendChild(n)))}}function lS(e){ra.D(e),z_("dns-prefetch",e,null)}function cS(e,n){ra.C(e,n),z_("preconnect",e,n)}function uS(e,n,r){ra.L(e,n,r);var o=ds;if(o&&e&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+yn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+yn(r.imageSizes)+'"]')):u+='[href="'+yn(e)+'"]';var p=u;switch(n){case"style":p=hs(e);break;case"script":p=ps(e)}hi.has(p)||(e=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),hi.set(p,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(p))||n==="script"&&o.querySelector(zo(p))||(n=o.createElement("link"),Rn(n,"link",e),ln(n),o.head.appendChild(n)))}}function fS(e,n){ra.m(e,n);var r=ds;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(e)+'"]',p=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ps(e)}if(!hi.has(p)&&(e=g({rel:"modulepreload",href:e},n),hi.set(p,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zo(p)))return}o=r.createElement("link"),Rn(o,"link",e),ln(o),r.head.appendChild(o)}}}function dS(e,n,r){ra.S(e,n,r);var o=ds;if(o&&e){var u=ya(o).hoistableStyles,p=hs(e);n=n||"default";var M=u.get(p);if(!M){var R={loading:0,preload:null};if(M=o.querySelector(Bo(p)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},r),(r=hi.get(p))&&_d(e,r);var H=M=o.createElement("link");ln(H),Rn(H,"link",e),H._p=new Promise(function(tt,mt){H.onload=tt,H.onerror=mt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:R},u.set(p,M)}}}function hS(e,n){ra.X(e,n);var r=ds;if(r&&e){var o=ya(r).hoistableScripts,u=ps(e),p=o.get(u);p||(p=r.querySelector(zo(u)),p||(e=g({src:e,async:!0},n),(n=hi.get(u))&&vd(e,n),p=r.createElement("script"),ln(p),Rn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function pS(e,n){ra.M(e,n);var r=ds;if(r&&e){var o=ya(r).hoistableScripts,u=ps(e),p=o.get(u);p||(p=r.querySelector(zo(u)),p||(e=g({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&vd(e,n),p=r.createElement("script"),ln(p),Rn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function F_(e,n,r,o){var u=(u=pt.current)?mc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=hs(r.href),r=ya(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=hs(r.href);var p=ya(u).hoistableStyles,M=p.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,M),(p=u.querySelector(Bo(e)))&&!p._p&&(M.instance=p,M.state.loading=5),hi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},hi.set(e,r),p||mS(u,e,r,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(r),r=ya(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hs(e){return'href="'+yn(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function H_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function mS(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",r),ln(n),e.head.appendChild(n))}function ps(e){return'[src="'+yn(e)+'"]'}function zo(e){return"script[async]"+e}function G_(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yn(r.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),Rn(o,"style",u),gc(o,r.precedence,e),n.instance=o;case"stylesheet":u=hs(r.href);var p=e.querySelector(Bo(u));if(p)return n.state.loading|=4,n.instance=p,ln(p),p;o=H_(r),(u=hi.get(u))&&_d(o,u),p=(e.ownerDocument||e).createElement("link"),ln(p);var M=p;return M._p=new Promise(function(R,H){M.onload=R,M.onerror=H}),Rn(p,"link",o),n.state.loading|=4,gc(p,r.precedence,e),n.instance=p;case"script":return p=ps(r.src),(u=e.querySelector(zo(p)))?(n.instance=u,ln(u),u):(o=r,(u=hi.get(p))&&(o=g({},r),vd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,r.precedence,e));return n.instance}function gc(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,p=u,M=0;M<o.length;M++){var R=o[M];if(R.dataset.precedence===n)p=R;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function _d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _c=null;function V_(e,n,r){if(_c===null){var o=new Map,u=_c=new Map;u.set(r,o)}else u=_c,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var p=r[u];if(!(p[Li]||p[hn]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=e+M;var R=o.get(M);R?R.push(p):o.set(M,[p])}}return o}function k_(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function gS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function X_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fo=null;function _S(){}function vS(e,n,r){if(Fo===null)throw Error(s(475));var o=Fo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(r.href),p=e.querySelector(Bo(u));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=vc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=p,ln(p);return}p=e.ownerDocument||e,r=H_(r),(u=hi.get(u))&&_d(r,u),p=p.createElement("link"),ln(p);var M=p;M._p=new Promise(function(R,H){M.onload=R,M.onerror=H}),Rn(p,"link",r),n.instance=p}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=vc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(Fo===null)throw Error(s(475));var e=Fo;return e.stylesheets&&e.count===0&&yd(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&yd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function yd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,n.forEach(xS,e),yc=null,vc.call(e))}function xS(e,n){if(!(n.state.loading&4)){var r=yc.get(e);if(r)var o=r.get(null);else{r=new Map,yc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var M=u[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),o=M)}o&&r.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),p=r.get(M)||o,p===o&&r.set(null,u),r.set(M,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:C,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function SS(e,n,r,o,u,p,M,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function W_(e,n,r,o,u,p,M,R,H,tt,mt,yt){return e=new SS(e,n,r,M,R,H,tt,yt),n=1,p===!0&&(n|=24),p=Kn(3,null,null,n),e.current=p,p.stateNode=e,n=$u(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:o,isDehydrated:r,cache:n},af(p),e}function q_(e){return e?(e=Wr,e):Wr}function Y_(e,n,r,o,u,p){u=q_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:r},p=p===void 0?null:p,p!==null&&(o.callback=p),r=ba(e,o,n),r!==null&&(ei(r,e,n),go(r,e,n))}function j_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function xd(e,n){j_(e,n),(e=e.alternate)&&j_(e,n)}function Z_(e){if(e.tag===13){var n=Xr(e,67108864);n!==null&&ei(n,e,67108864),xd(e,67108864)}}var xc=!0;function MS(e,n,r,o){var u=F.T;F.T=null;var p=j.p;try{j.p=2,Sd(e,n,r,o)}finally{j.p=p,F.T=u}}function ES(e,n,r,o){var u=F.T;F.T=null;var p=j.p;try{j.p=8,Sd(e,n,r,o)}finally{j.p=p,F.T=u}}function Sd(e,n,r,o){if(xc){var u=Md(o);if(u===null)ld(e,n,o,Sc,r),Q_(e,o);else if(TS(u,e,n,r,o))o.stopPropagation();else if(Q_(e,o),n&4&&-1<bS.indexOf(e)){for(;u!==null;){var p=va(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Jt(p.pendingLanes);if(M!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var H=1<<31-zt(M);R.entanglements[1]|=H,M&=~H}Bi(p),(Ie&6)===0&&(ac=Ht()+500,No(0))}}break;case 13:R=Xr(p,2),R!==null&&ei(R,p,2),sc(),xd(p,2)}if(p=Md(o),p===null&&ld(e,n,o,Sc,r),p===u)break;u=p}u!==null&&o.stopPropagation()}else ld(e,n,o,null,r)}}function Md(e){return e=Au(e),Ed(e)}var Sc=null;function Ed(e){if(Sc=null,e=Wi(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Sc=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case bt:return 2;case ne:return 8;case Oe:case Le:return 32;case P:return 268435456;default:return 32}default:return 32}}var bd=!1,Ba=null,za=null,Fa=null,Go=new Map,Vo=new Map,Ha=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,r,o,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:p,targetContainers:[u]},n!==null&&(n=va(n),n!==null&&Z_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,r,o,u){switch(n){case"focusin":return Ba=ko(Ba,e,n,r,o,u),!0;case"dragenter":return za=ko(za,e,n,r,o,u),!0;case"mouseover":return Fa=ko(Fa,e,n,r,o,u),!0;case"pointerover":var p=u.pointerId;return Go.set(p,ko(Go.get(p)||null,e,n,r,o,u)),!0;case"gotpointercapture":return p=u.pointerId,Vo.set(p,ko(Vo.get(p)||null,e,n,r,o,u)),!0}return!1}function J_(e){var n=Wi(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,vi(e.priority,function(){if(r.tag===13){var o=ti();o=oe(o);var u=Xr(r,o);u!==null&&ei(u,r,o),xd(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Md(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Tu=o,r.target.dispatchEvent(o),Tu=null}else return n=va(r),n!==null&&Z_(n),e.blockedOn=r,!1;n.shift()}return!0}function $_(e,n,r){Mc(e)&&r.delete(n)}function AS(){bd=!1,Ba!==null&&Mc(Ba)&&(Ba=null),za!==null&&Mc(za)&&(za=null),Fa!==null&&Mc(Fa)&&(Fa=null),Go.forEach($_),Vo.forEach($_)}function Ec(e,n){e.blockedOn===n&&(e.blockedOn=null,bd||(bd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,AS)))}var bc=null;function t0(e){bc!==e&&(bc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ed(o||r)===null)continue;break}var p=va(r);p!==null&&(e.splice(n,3),n-=3,Ef(p,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Xo(e){function n(H){return Ec(H,e)}Ba!==null&&Ec(Ba,e),za!==null&&Ec(za,e),Fa!==null&&Ec(Fa,e),Go.forEach(n),Vo.forEach(n);for(var r=0;r<Ha.length;r++){var o=Ha[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(r=Ha[0],r.blockedOn===null);)J_(r),r.blockedOn===null&&Ha.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],p=r[o+1],M=u[tn]||null;if(typeof p=="function")M||t0(r);else if(M){var R=null;if(p&&p.hasAttribute("formAction")){if(u=p,M=p[tn]||null)R=M.formAction;else if(Ed(u)!==null)continue}else R=M.action;typeof R=="function"?r[o+1]=R:(r.splice(o,3),o-=3),t0(r)}}}function Td(e){this._internalRoot=e}Tc.prototype.render=Td.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ti();Y_(r,o,e,n,null,null)},Tc.prototype.unmount=Td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Y_(e.current,2,null,e,null,null),sc(),n[Ui]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Ha.length&&n!==0&&n<Ha[r].priority;r++);Ha.splice(r,0,e),r===0&&J_(e)}};var e0=t.version;if(e0!=="19.1.1")throw Error(s(527,e0,"19.1.1"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{dt=Ac.inject(RS),vt=Ac}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var r=!1,o="",u=_g,p=vg,M=yg,R=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=W_(e,1,!1,null,null,r,o,u,p,M,R,null),e[Ui]=n.current,od(e),new Td(n)},qo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(s(299));var o=!1,u="",p=_g,M=vg,R=yg,H=null,tt=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(H=r.unstable_transitionCallbacks),r.formState!==void 0&&(tt=r.formState)),n=W_(e,1,!0,n,r??null,o,u,p,M,R,H,tt),n.context=q_(null),r=n.current,o=ti(),o=oe(o),u=Ea(o),u.callback=null,ba(r,u,o),r=o,n.current.lanes=r,Ft(n,r),Bi(n),e[Ui]=n.current,od(e),new Tc(n)},qo.version="19.1.1",qo}var f0;function zS(){if(f0)return wd.exports;f0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),wd.exports=BS(),wd.exports}var FS=zS();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var d0="popstate";function HS(a={}){function t(s,l){let{pathname:c,search:f,hash:d}=s.location;return ph("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:il(l)}return VS(t,i,null,a)}function Je(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function _i(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function GS(){return Math.random().toString(36).substring(2,10)}function h0(a,t){return{usr:a.state,key:a.key,idx:t}}function ph(a,t,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?Vs(t):t,state:i,key:t&&t.key||s||GS()}}function il({pathname:a="/",search:t="",hash:i=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Vs(a){let t={};if(a){let i=a.indexOf("#");i>=0&&(t.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(t.search=a.substring(s),a=a.substring(0,s)),a&&(t.pathname=a)}return t}function VS(a,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let x=g(),_=x==null?null:x-h;h=x,m&&m({action:d,location:b.location,delta:_})}function y(x,_){d="PUSH";let L=ph(b.location,x,_);h=g()+1;let C=h0(L,h),A=b.createHref(L);try{f.pushState(C,"",A)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;l.location.assign(A)}c&&m&&m({action:d,location:b.location,delta:1})}function S(x,_){d="REPLACE";let L=ph(b.location,x,_);h=g();let C=h0(L,h),A=b.createHref(L);f.replaceState(C,"",A),c&&m&&m({action:d,location:b.location,delta:0})}function E(x){return kS(x)}let b={get action(){return d},get location(){return a(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(d0,v),m=x,()=>{l.removeEventListener(d0,v),m=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return f.go(x)}};return b}function kS(a,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Je(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:il(a);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Ev(a,t,i="/"){return XS(a,t,i,!1)}function XS(a,t,i,s){let l=typeof t=="string"?Vs(t):t,c=ga(l.pathname||"/",i);if(c==null)return null;let f=bv(a);WS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let h=nM(c);d=tM(f[m],h,s)}return d}function bv(a,t=[],i=[],s=""){let l=(c,f,d)=>{let m={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Je(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let h=pa([s,m.relativePath]),g=i.concat(m);c.children&&c.children.length>0&&(Je(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),bv(c.children,t,g,h)),!(c.path==null&&!c.index)&&t.push({path:h,score:JS(h,c.index),routesMeta:g})};return a.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of Tv(c.path))l(c,f,d)}),t}function Tv(a){let t=a.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Tv(s.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function WS(a){a.sort((t,i)=>t.score!==i.score?i.score-t.score:$S(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var qS=/^:[\w-]+$/,YS=3,jS=2,ZS=1,KS=10,QS=-2,p0=a=>a==="*";function JS(a,t){let i=a.split("/"),s=i.length;return i.some(p0)&&(s+=QS),t&&(s+=jS),i.filter(l=>!p0(l)).reduce((l,c)=>l+(qS.test(c)?YS:c===""?ZS:KS),s)}function $S(a,t){return a.length===t.length&&a.slice(0,-1).every((s,l)=>s===t[l])?a[a.length-1]-t[t.length-1]:0}function tM(a,t,i=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],h=d===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),y=m.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=lu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:pa([c,v.pathname]),pathnameBase:sM(pa([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=pa([c,v.pathnameBase]))}return f}function lu(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=eM(a.path,a.caseSensitive,a.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:v},y)=>{if(g==="*"){let E=d[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[y];return v&&!S?h[g]=void 0:h[g]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:a}}function eM(a,t=!1,i=!0){_i(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function nM(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _i(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function ga(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function iM(a,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Vs(a):a;return{pathname:i?i.startsWith("/")?i:aM(i,t):t,search:oM(s),hash:lM(l)}}function aM(a,t){let i=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ld(a,t,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rM(a){return a.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function cp(a){let t=rM(a);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function up(a,t,i,s=!1){let l;typeof a=="string"?l=Vs(a):(l={...a},Je(!l.pathname||!l.pathname.includes("?"),Ld("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),Ld("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),Ld("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=t.length-1;if(!s&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?t[v]:"/"}let m=iM(l,d),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),sM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),oM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,lM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function cM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Av=["POST","PUT","PATCH","DELETE"];new Set(Av);var uM=["GET",...Av];new Set(uM);var ks=Z.createContext(null);ks.displayName="DataRouter";var pu=Z.createContext(null);pu.displayName="DataRouterState";Z.createContext(!1);var Rv=Z.createContext({isTransitioning:!1});Rv.displayName="ViewTransition";var fM=Z.createContext(new Map);fM.displayName="Fetchers";var dM=Z.createContext(null);dM.displayName="Await";var wi=Z.createContext(null);wi.displayName="Navigation";var dl=Z.createContext(null);dl.displayName="Location";var Ci=Z.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var fp=Z.createContext(null);fp.displayName="RouteError";function hM(a,{relative:t}={}){Je(Xs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Z.useContext(wi),{hash:l,pathname:c,search:f}=hl(a,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:pa([i,c])),s.createHref({pathname:d,search:f,hash:l})}function Xs(){return Z.useContext(dl)!=null}function Xi(){return Je(Xs(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(dl).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cv(a){Z.useContext(wi).static||Z.useLayoutEffect(a)}function mu(){let{isDataRoute:a}=Z.useContext(Ci);return a?wM():pM()}function pM(){Je(Xs(),"useNavigate() may be used only in the context of a <Router> component.");let a=Z.useContext(ks),{basename:t,navigator:i}=Z.useContext(wi),{matches:s}=Z.useContext(Ci),{pathname:l}=Xi(),c=JSON.stringify(cp(s)),f=Z.useRef(!1);return Cv(()=>{f.current=!0}),Z.useCallback((m,h={})=>{if(_i(f.current,wv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=up(m,JSON.parse(c),l,h.relative==="path");a==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:pa([t,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[t,i,c,l,a])}var mM=Z.createContext(null);function gM(a){let t=Z.useContext(Ci).outlet;return t&&Z.createElement(mM.Provider,{value:a},t)}function hl(a,{relative:t}={}){let{matches:i}=Z.useContext(Ci),{pathname:s}=Xi(),l=JSON.stringify(cp(i));return Z.useMemo(()=>up(a,JSON.parse(l),s,t==="path"),[a,l,s,t])}function _M(a,t){return Dv(a,t)}function Dv(a,t,i,s){Je(Xs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=Z.useContext(wi),{matches:c}=Z.useContext(Ci),f=c[c.length-1],d=f?f.params:{},m=f?f.pathname:"/",h=f?f.pathnameBase:"/",g=f&&f.route;{let _=g&&g.path||"";Uv(m,!g||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=Xi(),y;if(t){let _=typeof t=="string"?Vs(t):t;Je(h==="/"||_.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),y=_}else y=v;let S=y.pathname||"/",E=S;if(h!=="/"){let _=h.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(_.length).join("/")}let b=Ev(a,{pathname:E});_i(g||b!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),_i(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=MM(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:pa([h,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:pa([h,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),c,i,s);return t&&x?Z.createElement(dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function vM(){let a=RM(),t=cM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:c},"ErrorBoundary")," or"," ",Z.createElement("code",{style:c},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},t),i?Z.createElement("pre",{style:l},i):null,f)}var yM=Z.createElement(vM,null),xM=class extends Z.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){console.error("React Router caught the following error during render",a,t)}render(){return this.state.error!==void 0?Z.createElement(Ci.Provider,{value:this.props.routeContext},Z.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SM({routeContext:a,match:t,children:i}){let s=Z.useContext(ks);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(Ci.Provider,{value:a},i)}function MM(a,t=[],i=null,s=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let l=a,c=i?.errors;if(c!=null){let m=l.findIndex(h=>h.route.id&&c?.[h.route.id]!==void 0);Je(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=m),h.route.id){let{loaderData:g,errors:v}=i,y=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let v,y=!1,S=null,E=null;i&&(v=c&&h.route.id?c[h.route.id]:void 0,S=h.route.errorElement||yM,f&&(d<0&&g===0?(Uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,E=null):d===g&&(y=!0,E=h.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,g+1)),x=()=>{let _;return v?_=S:y?_=E:h.route.Component?_=Z.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=m,Z.createElement(SM,{match:h,routeContext:{outlet:m,matches:b,isDataRoute:i!=null},children:_})};return i&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?Z.createElement(xM,{location:i.location,revalidation:i.revalidation,component:S,error:v,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}function dp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(a){let t=Z.useContext(ks);return Je(t,dp(a)),t}function bM(a){let t=Z.useContext(pu);return Je(t,dp(a)),t}function TM(a){let t=Z.useContext(Ci);return Je(t,dp(a)),t}function hp(a){let t=TM(a),i=t.matches[t.matches.length-1];return Je(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function AM(){return hp("useRouteId")}function RM(){let a=Z.useContext(fp),t=bM("useRouteError"),i=hp("useRouteError");return a!==void 0?a:t.errors?.[i]}function wM(){let{router:a}=EM("useNavigate"),t=hp("useNavigate"),i=Z.useRef(!1);return Cv(()=>{i.current=!0}),Z.useCallback(async(l,c={})=>{_i(i.current,wv),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:t,...c}))},[a,t])}var m0={};function Uv(a,t,i){!t&&!m0[a]&&(m0[a]=!0,_i(!1,i))}Z.memo(CM);function CM({routes:a,future:t,state:i}){return Dv(a,void 0,i,t)}function DM({to:a,replace:t,state:i,relative:s}){Je(Xs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=Z.useContext(wi);_i(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=Z.useContext(Ci),{pathname:f}=Xi(),d=mu(),m=up(a,cp(c),f,s==="path"),h=JSON.stringify(m);return Z.useEffect(()=>{d(JSON.parse(h),{replace:t,state:i,relative:s})},[d,h,s,t,i]),null}function UM(a){return gM(a.context)}function $c(a){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LM({basename:a="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){Je(!Xs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=Z.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Vs(i));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:y="default"}=i,S=Z.useMemo(()=>{let E=ga(m,f);return E==null?null:{location:{pathname:E,search:h,hash:g,state:v,key:y},navigationType:s}},[f,m,h,g,v,y,s]);return _i(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Z.createElement(wi.Provider,{value:d},Z.createElement(dl.Provider,{children:t,value:S}))}function NM({children:a,location:t}){return _M(mh(a),t)}function mh(a,t=[]){let i=[];return Z.Children.forEach(a,(s,l)=>{if(!Z.isValidElement(s))return;let c=[...t,l];if(s.type===Z.Fragment){i.push.apply(i,mh(s.props.children,c));return}Je(s.type===$c,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=mh(s.props.children,c)),i.push(f)}),i}var tu="get",eu="application/x-www-form-urlencoded";function gu(a){return a!=null&&typeof a.tagName=="string"}function OM(a){return gu(a)&&a.tagName.toLowerCase()==="button"}function PM(a){return gu(a)&&a.tagName.toLowerCase()==="form"}function IM(a){return gu(a)&&a.tagName.toLowerCase()==="input"}function BM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function zM(a,t){return a.button===0&&(!t||t==="_self")&&!BM(a)}function al(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((t,i)=>{let s=a[i];return t.concat(Array.isArray(s)?s.map(l=>[i,l]):[[i,s]])},[]))}function FM(a,t){let i=al(a);return t&&t.forEach((s,l)=>{i.has(l)||t.getAll(l).forEach(c=>{i.append(l,c)})}),i}var Rc=null;function HM(){if(Rc===null)try{new FormData(document.createElement("form"),0),Rc=!1}catch{Rc=!0}return Rc}var GM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nd(a){return a!=null&&!GM.has(a)?(_i(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):a}function VM(a,t){let i,s,l,c,f;if(PM(a)){let d=a.getAttribute("action");s=d?ga(d,t):null,i=a.getAttribute("method")||tu,l=Nd(a.getAttribute("enctype"))||eu,c=new FormData(a)}else if(OM(a)||IM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(s=m?ga(m,t):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||tu,l=Nd(a.getAttribute("formenctype"))||Nd(d.getAttribute("enctype"))||eu,c=new FormData(d,a),!HM()){let{name:h,type:g,value:v}=a;if(g==="image"){let y=h?`${h}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else h&&c.append(h,v)}}else{if(gu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=tu,s=null,l=eu,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function kM(a,t,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:t&&ga(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function XM(a,t){if(a.id in t)return t[a.id];try{let i=await import(a.module);return t[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function qM(a,t,i){let s=await Promise.all(a.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await XM(c,i);return f.links?f.links():[]}return[]}));return KM(s.flat(1).filter(WM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function g0(a,t,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,d=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?t.filter((m,h)=>f(m,h)||d(m,h)):c==="data"?t.filter((m,h)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function YM(a,t,{includeHydrateFallback:i}={}){return jM(a.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function jM(a){return[...new Set(a)]}function ZM(a){let t={},i=Object.keys(a).sort();for(let s of i)t[s]=a[s];return t}function KM(a,t){let i=new Set;return new Set(t),a.reduce((s,l)=>{let c=JSON.stringify(ZM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Lv(){let a=Z.useContext(ks);return pp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function QM(){let a=Z.useContext(pu);return pp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var mp=Z.createContext(void 0);mp.displayName="FrameworkContext";function Nv(){let a=Z.useContext(mp);return pp(a,"You must render this element inside a <HydratedRouter> element"),a}function JM(a,t){let i=Z.useContext(mp),[s,l]=Z.useState(!1),[c,f]=Z.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=t,y=Z.useRef(null);Z.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=_=>{_.forEach(L=>{f(L.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[a]),Z.useEffect(()=>{if(s){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[s]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,y,{}]:[c,y,{onFocus:Yo(d,S),onBlur:Yo(m,E),onMouseEnter:Yo(h,S),onMouseLeave:Yo(g,E),onTouchStart:Yo(v,S)}]:[!1,y,{}]}function Yo(a,t){return i=>{a&&a(i),i.defaultPrevented||t(i)}}function $M({page:a,...t}){let{router:i}=Lv(),s=Z.useMemo(()=>Ev(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?Z.createElement(eE,{page:a,matches:s,...t}):null}function tE(a){let{manifest:t,routeModules:i}=Nv(),[s,l]=Z.useState([]);return Z.useEffect(()=>{let c=!1;return qM(a,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,t,i]),s}function eE({page:a,matches:t,...i}){let s=Xi(),{manifest:l,routeModules:c}=Nv(),{basename:f}=Lv(),{loaderData:d,matches:m}=QM(),h=Z.useMemo(()=>g0(a,t,m,l,s,"data"),[a,t,m,l,s]),g=Z.useMemo(()=>g0(a,t,m,l,s,"assets"),[a,t,m,l,s]),v=Z.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let E=new Set,b=!1;if(t.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!h.some(C=>C.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||L.hasClientLoader?b=!0:E.add(_.route.id))}),E.size===0)return[];let x=kM(a,f,"data");return b&&E.size>0&&x.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[f,d,s,l,h,t,a,c]),y=Z.useMemo(()=>YM(g,l),[g,l]),S=tE(g);return Z.createElement(Z.Fragment,null,v.map(E=>Z.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>Z.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:b})=>Z.createElement("link",{key:E,nonce:i.nonce,...b})))}function nE(...a){return t=>{a.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ov&&(window.__reactRouterVersion="7.8.0")}catch{}function iE({basename:a,children:t,window:i}){let s=Z.useRef();s.current==null&&(s.current=HS({window:i,v5Compat:!0}));let l=s.current,[c,f]=Z.useState({action:l.action,location:l.location}),d=Z.useCallback(m=>{Z.startTransition(()=>f(m))},[f]);return Z.useLayoutEffect(()=>l.listen(d),[l,d]),Z.createElement(LM,{basename:a,children:t,location:c.location,navigationType:c.action,navigator:l})}var Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iv=Z.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:h,preventScrollReset:g,viewTransition:v,...y},S){let{basename:E}=Z.useContext(wi),b=typeof h=="string"&&Pv.test(h),x,_=!1;if(typeof h=="string"&&b&&(x=h,Ov))try{let D=new URL(window.location.href),U=h.startsWith("//")?new URL(D.protocol+h):new URL(h),z=ga(U.pathname,E);U.origin===D.origin&&z!=null?h=z+U.search+U.hash:_=!0}catch{_i(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=hM(h,{relative:l}),[C,A,O]=JM(s,y),B=oE(h,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function I(D){t&&t(D),D.defaultPrevented||B(D)}let G=Z.createElement("a",{...y,...O,href:x||L,onClick:_||c?t:I,ref:nE(S,A),target:m,"data-discover":!b&&i==="render"?"true":void 0});return C&&!b?Z.createElement(Z.Fragment,null,G,Z.createElement($M,{page:L})):G});Iv.displayName="Link";var aE=Z.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...h},g){let v=hl(f,{relative:h.relative}),y=Xi(),S=Z.useContext(pu),{navigator:E,basename:b}=Z.useContext(wi),x=S!=null&&dE(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=y.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(L=L.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&b&&(C=ga(C,b)||C);const A=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let O=L===_||!l&&L.startsWith(_)&&L.charAt(A)==="/",B=C!=null&&(C===_||!l&&C.startsWith(_)&&C.charAt(_.length)==="/"),I={isActive:O,isPending:B,isTransitioning:x},G=O?t:void 0,D;typeof s=="function"?D=s(I):D=[s,O?"active":null,B?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let U=typeof c=="function"?c(I):c;return Z.createElement(Iv,{...h,"aria-current":G,className:D,ref:g,style:U,to:f,viewTransition:d},typeof m=="function"?m(I):m)});aE.displayName="NavLink";var rE=Z.forwardRef(({discover:a="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=tu,action:d,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:v,...y},S)=>{let E=uE(),b=fE(d,{relative:h}),x=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Pv.test(d),L=C=>{if(m&&m(C),C.defaultPrevented)return;C.preventDefault();let A=C.nativeEvent.submitter,O=A?.getAttribute("formmethod")||f;E(A||C.currentTarget,{fetcherKey:t,method:O,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:v})};return Z.createElement("form",{ref:S,method:x,action:b,onSubmit:s?m:L,...y,"data-discover":!_&&a==="render"?"true":void 0})});rE.displayName="Form";function sE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bv(a){let t=Z.useContext(ks);return Je(t,sE(a)),t}function oE(a,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=mu(),m=Xi(),h=hl(a,{relative:c});return Z.useCallback(g=>{if(zM(g,t)){g.preventDefault();let v=i!==void 0?i:il(m)===il(h);d(a,{replace:v,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,h,i,s,t,a,l,c,f])}function zv(a){_i(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=Z.useRef(al(a)),i=Z.useRef(!1),s=Xi(),l=Z.useMemo(()=>FM(s.search,i.current?null:t.current),[s.search]),c=mu(),f=Z.useCallback((d,m)=>{const h=al(typeof d=="function"?d(new URLSearchParams(l)):d);i.current=!0,c("?"+h,m)},[c,l]);return[l,f]}var lE=0,cE=()=>`__${String(++lE)}__`;function uE(){let{router:a}=Bv("useSubmit"),{basename:t}=Z.useContext(wi),i=AM();return Z.useCallback(async(s,l={})=>{let{action:c,method:f,encType:d,formData:m,body:h}=VM(s,t);if(l.navigate===!1){let g=l.fetcherKey||cE();await a.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,t,i])}function fE(a,{relative:t}={}){let{basename:i}=Z.useContext(wi),s=Z.useContext(Ci);Je(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...hl(a||".",{relative:t})},f=Xi();if(a==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),il(c)}function dE(a,{relative:t}={}){let i=Z.useContext(Rv);Je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Bv("useViewTransitionState"),l=hl(a,{relative:t});if(!i.isTransitioning)return!1;let c=ga(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,s)||i.nextLocation.pathname;return lu(l.pathname,f)!=null||lu(l.pathname,c)!=null}function Fv(a){var t,i,s="";if(typeof a=="string"||typeof a=="number")s+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(t=0;t<l;t++)a[t]&&(i=Fv(a[t]))&&(s&&(s+=" "),s+=i)}else for(i in a)a[i]&&(s&&(s+=" "),s+=i);return s}function Cr(){for(var a,t,i=0,s="",l=arguments.length;i<l;i++)(a=arguments[i])&&(t=Fv(a))&&(s&&(s+=" "),s+=t);return s}function hE(a){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(document.createTextNode(a))}hE(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var pl=a=>typeof a=="number"&&!isNaN(a),Dr=a=>typeof a=="string",_a=a=>typeof a=="function",pE=a=>Dr(a)||pl(a),gh=a=>Dr(a)||_a(a)?a:null,mE=(a,t)=>a===!1||pl(a)&&a>0?a:t,_h=a=>Z.isValidElement(a)||Dr(a)||_a(a)||pl(a);function gE(a,t,i=300){let{scrollHeight:s,style:l}=a;requestAnimationFrame(()=>{l.minHeight="initial",l.height=s+"px",l.transition=`all ${i}ms`,requestAnimationFrame(()=>{l.height="0",l.padding="0",l.margin="0",setTimeout(t,i)})})}function _E({enter:a,exit:t,appendPosition:i=!1,collapse:s=!0,collapseDuration:l=300}){return function({children:c,position:f,preventExitTransition:d,done:m,nodeRef:h,isIn:g,playToast:v}){let y=i?`${a}--${f}`:a,S=i?`${t}--${f}`:t,E=Z.useRef(0);return Z.useLayoutEffect(()=>{let b=h.current,x=y.split(" "),_=L=>{L.target===h.current&&(v(),b.removeEventListener("animationend",_),b.removeEventListener("animationcancel",_),E.current===0&&L.type!=="animationcancel"&&b.classList.remove(...x))};b.classList.add(...x),b.addEventListener("animationend",_),b.addEventListener("animationcancel",_)},[]),Z.useEffect(()=>{let b=h.current,x=()=>{b.removeEventListener("animationend",x),s?gE(b,m,l):m()};g||(d?x():(E.current=1,b.className+=` ${S}`,b.addEventListener("animationend",x)))},[g]),Ze.createElement(Ze.Fragment,null,c)}}function _0(a,t){return{content:Hv(a.content,a.props),containerId:a.props.containerId,id:a.props.toastId,theme:a.props.theme,type:a.props.type,data:a.props.data||{},isLoading:a.props.isLoading,icon:a.props.icon,reason:a.removalReason,status:t}}function Hv(a,t,i=!1){return Z.isValidElement(a)&&!Dr(a.type)?Z.cloneElement(a,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:i}):_a(a)?a({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:i}):a}function vE({closeToast:a,theme:t,ariaLabel:i="close"}){return Ze.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:s=>{s.stopPropagation(),a(!0)},"aria-label":i},Ze.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ze.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function yE({delay:a,isRunning:t,closeToast:i,type:s="default",hide:l,className:c,controlledProgress:f,progress:d,rtl:m,isIn:h,theme:g}){let v=l||f&&d===0,y={animationDuration:`${a}ms`,animationPlayState:t?"running":"paused"};f&&(y.transform=`scaleX(${d})`);let S=Cr("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":m}),E=_a(c)?c({rtl:m,type:s,defaultClassName:S}):Cr(S,c),b={[f&&d>=1?"onTransitionEnd":"onAnimationEnd"]:f&&d<1?null:()=>{h&&i()}};return Ze.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},Ze.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${s}`}),Ze.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:y,...b}))}var xE=1,Gv=()=>`${xE++}`;function SE(a,t,i){let s=1,l=0,c=[],f=[],d=t,m=new Map,h=new Set,g=L=>(h.add(L),()=>h.delete(L)),v=()=>{f=Array.from(m.values()),h.forEach(L=>L())},y=({containerId:L,toastId:C,updateId:A})=>{let O=L?L!==a:a!==1,B=m.has(C)&&A==null;return O||B},S=(L,C)=>{m.forEach(A=>{var O;(C==null||C===A.props.toastId)&&((O=A.toggle)==null||O.call(A,L))})},E=L=>{var C,A;(A=(C=L.props)==null?void 0:C.onClose)==null||A.call(C,L.removalReason),L.isActive=!1},b=L=>{if(L==null)m.forEach(E);else{let C=m.get(L);C&&E(C)}v()},x=()=>{l-=c.length,c=[]},_=L=>{var C,A;let{toastId:O,updateId:B}=L.props,I=B==null;L.staleId&&m.delete(L.staleId),L.isActive=!0,m.set(O,L),v(),i(_0(L,I?"added":"updated")),I&&((A=(C=L.props).onOpen)==null||A.call(C))};return{id:a,props:d,observe:g,toggle:S,removeToast:b,toasts:m,clearQueue:x,buildToast:(L,C)=>{if(y(C))return;let{toastId:A,updateId:O,data:B,staleId:I,delay:G}=C,D=O==null;D&&l++;let U={...d,style:d.toastStyle,key:s++,...Object.fromEntries(Object.entries(C).filter(([nt,st])=>st!=null)),toastId:A,updateId:O,data:B,isIn:!1,className:gh(C.className||d.toastClassName),progressClassName:gh(C.progressClassName||d.progressClassName),autoClose:C.isLoading?!1:mE(C.autoClose,d.autoClose),closeToast(nt){m.get(A).removalReason=nt,b(A)},deleteToast(){let nt=m.get(A);if(nt!=null){if(i(_0(nt,"removed")),m.delete(A),l--,l<0&&(l=0),c.length>0){_(c.shift());return}v()}}};U.closeButton=d.closeButton,C.closeButton===!1||_h(C.closeButton)?U.closeButton=C.closeButton:C.closeButton===!0&&(U.closeButton=_h(d.closeButton)?d.closeButton:!0);let z={content:L,props:U,staleId:I};d.limit&&d.limit>0&&l>d.limit&&D?c.push(z):pl(G)?setTimeout(()=>{_(z)},G):_(z)},setProps(L){d=L},setToggle:(L,C)=>{let A=m.get(L);A&&(A.toggle=C)},isToastActive:L=>{var C;return(C=m.get(L))==null?void 0:C.isActive},getSnapshot:()=>f}}var Gn=new Map,rl=[],vh=new Set,ME=a=>vh.forEach(t=>t(a)),Vv=()=>Gn.size>0;function EE(){rl.forEach(a=>Xv(a.content,a.options)),rl=[]}var bE=(a,{containerId:t})=>{var i;return(i=Gn.get(t||1))==null?void 0:i.toasts.get(a)};function kv(a,t){var i;if(t)return!!((i=Gn.get(t))!=null&&i.isToastActive(a));let s=!1;return Gn.forEach(l=>{l.isToastActive(a)&&(s=!0)}),s}function TE(a){if(!Vv()){rl=rl.filter(t=>a!=null&&t.options.toastId!==a);return}if(a==null||pE(a))Gn.forEach(t=>{t.removeToast(a)});else if(a&&("containerId"in a||"id"in a)){let t=Gn.get(a.containerId);t?t.removeToast(a.id):Gn.forEach(i=>{i.removeToast(a.id)})}}var AE=(a={})=>{Gn.forEach(t=>{t.props.limit&&(!a.containerId||t.id===a.containerId)&&t.clearQueue()})};function Xv(a,t){_h(a)&&(Vv()||rl.push({content:a,options:t}),Gn.forEach(i=>{i.buildToast(a,t)}))}function RE(a){var t;(t=Gn.get(a.containerId||1))==null||t.setToggle(a.id,a.fn)}function Wv(a,t){Gn.forEach(i=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===i.id)&&i.toggle(a,t?.id)})}function wE(a){let t=a.containerId||1;return{subscribe(i){let s=SE(t,a,ME);Gn.set(t,s);let l=s.observe(i);return EE(),()=>{l(),Gn.delete(t)}},setProps(i){var s;(s=Gn.get(t))==null||s.setProps(i)},getSnapshot(){var i;return(i=Gn.get(t))==null?void 0:i.getSnapshot()}}}function CE(a){return vh.add(a),()=>{vh.delete(a)}}function DE(a){return a&&(Dr(a.toastId)||pl(a.toastId))?a.toastId:Gv()}function ml(a,t){return Xv(a,t),t.toastId}function _u(a,t){return{...t,type:t&&t.type||a,toastId:DE(t)}}function vu(a){return(t,i)=>ml(t,_u(a,i))}function ke(a,t){return ml(a,_u("default",t))}ke.loading=(a,t)=>ml(a,_u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function UE(a,{pending:t,error:i,success:s},l){let c;t&&(c=Dr(t)?ke.loading(t,l):ke.loading(t.render,{...l,...t}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(h,g,v)=>{if(g==null){ke.dismiss(c);return}let y={type:h,...f,...l,data:v},S=Dr(g)?{render:g}:g;return c?ke.update(c,{...y,...S}):ke(S.render,{...y,...S}),v},m=_a(a)?a():a;return m.then(h=>d("success",s,h)).catch(h=>d("error",i,h)),m}ke.promise=UE;ke.success=vu("success");ke.info=vu("info");ke.error=vu("error");ke.warning=vu("warning");ke.warn=ke.warning;ke.dark=(a,t)=>ml(a,_u("default",{theme:"dark",...t}));function LE(a){TE(a)}ke.dismiss=LE;ke.clearWaitingQueue=AE;ke.isActive=kv;ke.update=(a,t={})=>{let i=bE(a,t);if(i){let{props:s,content:l}=i,c={delay:100,...s,...t,toastId:t.toastId||a,updateId:Gv()};c.toastId!==a&&(c.staleId=a);let f=c.render||l;delete c.render,ml(f,c)}};ke.done=a=>{ke.update(a,{progress:1})};ke.onChange=CE;ke.play=a=>Wv(!0,a);ke.pause=a=>Wv(!1,a);function NE(a){var t;let{subscribe:i,getSnapshot:s,setProps:l}=Z.useRef(wE(a)).current;l(a);let c=(t=Z.useSyncExternalStore(i,s,s))==null?void 0:t.slice();function f(d){if(!c)return[];let m=new Map;return a.newestOnTop&&c.reverse(),c.forEach(h=>{let{position:g}=h.props;m.has(g)||m.set(g,[]),m.get(g).push(h)}),Array.from(m,h=>d(h[0],h[1]))}return{getToastToRender:f,isToastActive:kv,count:c?.length}}function OE(a){let[t,i]=Z.useState(!1),[s,l]=Z.useState(!1),c=Z.useRef(null),f=Z.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:m,closeToast:h,onClick:g,closeOnClick:v}=a;RE({id:a.toastId,containerId:a.containerId,fn:i}),Z.useEffect(()=>{if(a.pauseOnFocusLoss)return y(),()=>{S()}},[a.pauseOnFocusLoss]);function y(){document.hasFocus()||_(),window.addEventListener("focus",x),window.addEventListener("blur",_)}function S(){window.removeEventListener("focus",x),window.removeEventListener("blur",_)}function E(I){if(a.draggable===!0||a.draggable===I.pointerType){L();let G=c.current;f.canCloseOnClick=!0,f.canDrag=!0,G.style.transition="none",a.draggableDirection==="x"?(f.start=I.clientX,f.removalDistance=G.offsetWidth*(a.draggablePercent/100)):(f.start=I.clientY,f.removalDistance=G.offsetHeight*(a.draggablePercent===80?a.draggablePercent*1.5:a.draggablePercent)/100)}}function b(I){let{top:G,bottom:D,left:U,right:z}=c.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&a.pauseOnHover&&I.clientX>=U&&I.clientX<=z&&I.clientY>=G&&I.clientY<=D?_():x()}function x(){i(!0)}function _(){i(!1)}function L(){f.didMove=!1,document.addEventListener("pointermove",A),document.addEventListener("pointerup",O)}function C(){document.removeEventListener("pointermove",A),document.removeEventListener("pointerup",O)}function A(I){let G=c.current;if(f.canDrag&&G){f.didMove=!0,t&&_(),a.draggableDirection==="x"?f.delta=I.clientX-f.start:f.delta=I.clientY-f.start,f.start!==I.clientX&&(f.canCloseOnClick=!1);let D=a.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;G.style.transform=`translate3d(${D},0)`,G.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function O(){C();let I=c.current;if(f.canDrag&&f.didMove&&I){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){l(!0),a.closeToast(!0),a.collapseAll();return}I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}let B={onPointerDown:E,onPointerUp:b};return d&&m&&(B.onMouseEnter=_,a.stacked||(B.onMouseLeave=x)),v&&(B.onClick=I=>{g&&g(I),f.canCloseOnClick&&h(!0)}),{playToast:x,pauseToast:_,isRunning:t,preventExitTransition:s,toastRef:c,eventHandlers:B}}var PE=typeof window<"u"?Z.useLayoutEffect:Z.useEffect,yu=({theme:a,type:t,isLoading:i,...s})=>Ze.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:a==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...s});function IE(a){return Ze.createElement(yu,{...a},Ze.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function BE(a){return Ze.createElement(yu,{...a},Ze.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function zE(a){return Ze.createElement(yu,{...a},Ze.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function FE(a){return Ze.createElement(yu,{...a},Ze.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function HE(){return Ze.createElement("div",{className:"Toastify__spinner"})}var yh={info:BE,warning:IE,success:zE,error:FE,spinner:HE},GE=a=>a in yh;function VE({theme:a,type:t,isLoading:i,icon:s}){let l=null,c={theme:a,type:t};return s===!1||(_a(s)?l=s({...c,isLoading:i}):Z.isValidElement(s)?l=Z.cloneElement(s,c):i?l=yh.spinner():GE(t)&&(l=yh[t](c))),l}var kE=a=>{let{isRunning:t,preventExitTransition:i,toastRef:s,eventHandlers:l,playToast:c}=OE(a),{closeButton:f,children:d,autoClose:m,onClick:h,type:g,hideProgressBar:v,closeToast:y,transition:S,position:E,className:b,style:x,progressClassName:_,updateId:L,role:C,progress:A,rtl:O,toastId:B,deleteToast:I,isIn:G,isLoading:D,closeOnClick:U,theme:z,ariaLabel:nt}=a,st=Cr("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":U}),ct=_a(b)?b({rtl:O,position:E,type:g,defaultClassName:st}):Cr(st,b),ft=VE(a),F=!!A||!m,j={closeToast:y,type:g,theme:z},W=null;return f===!1||(_a(f)?W=f(j):Z.isValidElement(f)?W=Z.cloneElement(f,j):W=vE(j)),Ze.createElement(S,{isIn:G,done:I,position:E,preventExitTransition:i,nodeRef:s,playToast:c},Ze.createElement("div",{id:B,tabIndex:0,onClick:h,"data-in":G,className:ct,...l,style:x,ref:s,...G&&{role:C,"aria-label":nt}},ft!=null&&Ze.createElement("div",{className:Cr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},ft),Hv(d,a,!t),W,!a.customProgressBar&&Ze.createElement(yE,{...L&&!F?{key:`p-${L}`}:{},rtl:O,theme:z,delay:m,isRunning:t,isIn:G,closeToast:y,hide:v,type:g,className:_,controlledProgress:F,progress:A||0})))},XE=(a,t=!1)=>({enter:`Toastify--animate Toastify__${a}-enter`,exit:`Toastify--animate Toastify__${a}-exit`,appendPosition:t}),WE=_E(XE("bounce",!0)),qE={position:"top-right",transition:WE,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:a=>a.altKey&&a.code==="KeyT"};function YE(a){let t={...qE,...a},i=a.stacked,[s,l]=Z.useState(!0),c=Z.useRef(null),{getToastToRender:f,isToastActive:d,count:m}=NE(t),{className:h,style:g,rtl:v,containerId:y,hotKeys:S}=t;function E(x){let _=Cr("Toastify__toast-container",`Toastify__toast-container--${x}`,{"Toastify__toast-container--rtl":v});return _a(h)?h({position:x,rtl:v,defaultClassName:_}):Cr(_,gh(h))}function b(){i&&(l(!0),ke.play())}return PE(()=>{var x;if(i){let _=c.current.querySelectorAll('[data-in="true"]'),L=12,C=(x=t.position)==null?void 0:x.includes("top"),A=0,O=0;Array.from(_).reverse().forEach((B,I)=>{let G=B;G.classList.add("Toastify__toast--stacked"),I>0&&(G.dataset.collapsed=`${s}`),G.dataset.pos||(G.dataset.pos=C?"top":"bot");let D=A*(s?.2:1)+(s?0:L*I);G.style.setProperty("--y",`${C?D:D*-1}px`),G.style.setProperty("--g",`${L}`),G.style.setProperty("--s",`${1-(s?O:0)}`),A+=G.offsetHeight,O+=.025})}},[s,m,i]),Z.useEffect(()=>{function x(_){var L;let C=c.current;S(_)&&((L=C.querySelector('[tabIndex="0"]'))==null||L.focus(),l(!1),ke.pause()),_.key==="Escape"&&(document.activeElement===C||C!=null&&C.contains(document.activeElement))&&(l(!0),ke.play())}return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[S]),Ze.createElement("section",{ref:c,className:"Toastify",id:y,onMouseEnter:()=>{i&&(l(!1),ke.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},f((x,_)=>{let L=_.length?{...g}:{...g,pointerEvents:"none"};return Ze.createElement("div",{tabIndex:-1,className:E(x),"data-stacked":i,style:L,key:`c-${x}`},_.map(({content:C,props:A})=>Ze.createElement(kE,{...A,stacked:i,collapseAll:b,isIn:d(A.toastId,A.containerId),key:`t-${A.key}`},C)))}))}const sl={Homepage:"/exovitae-page/",Dashboard:"/exovitae-page/dashboard"},jE="http://localhost:5000";let xh=null;function qv(a){xh=a}async function wc(a,t,i){const s={"Content-Type":"application/json",Accept:"application/json"};xh&&(s.Authorization=`Bearer ${xh}`);const l={method:a,headers:s};i!==void 0&&(l.body=JSON.stringify(i));const c=await fetch(`${jE}${t}`,l);if(c.status===204)return null;const f=await c.json().catch(()=>null);if(!c.ok)throw f||{message:"Request failed"};return f}const xu={get:a=>wc("GET",a),post:(a,t)=>wc("POST",a,t),put:(a,t)=>wc("PUT",a,t),delete:a=>wc("DELETE",a)},Yv=Z.createContext(null),Od="auth.token",Pd="auth.username",Id="auth.role";function ZE({children:a}){const[t,i]=Z.useState(()=>localStorage.getItem(Od)),[s,l]=Z.useState(()=>localStorage.getItem(Pd)),[c,f]=Z.useState(()=>localStorage.getItem(Id));Z.useEffect(()=>{qv(t)},[t]);const d=v=>{i(v),v?localStorage.setItem(Od,v):localStorage.removeItem(Od)},m=v=>{l(v),v?localStorage.setItem(Pd,v):localStorage.removeItem(Pd)},h=v=>{f(v),v?localStorage.setItem(Id,v):localStorage.removeItem(Id)},g=Z.useMemo(()=>({token:t,setToken:d,username:s,setUsername:m,role:c,setRole:h}),[t,s,c]);return ht.jsx(Yv.Provider,{value:g,children:a})}function gp(){return Z.useContext(Yv)}const gn={GameOverview:"game-overview",Features:"features",Media:"media",FAQ:"faq",Feedback:"feedback",About:"about",Login:"login"};function KE(){const{token:a}=gp(),t=Xi();if(a)return ht.jsx(UM,{});const i=al({tab:gn.Login}).toString(),s={pathname:sl.Homepage,search:`?${i}`};return ht.jsx(DM,{to:s,replace:!0,state:{from:t.pathname+t.search}})}const QE=[{name:"Login",linkTo:gn.Login,disabled:!1},{name:"Game Overview",linkTo:gn.GameOverview,disabled:!1},{name:"Features",linkTo:gn.Features,disabled:!1},{name:"Media",linkTo:gn.Media,disabled:!1},{name:"FAQ",linkTo:gn.FAQ,tooltip:"Frequently Asked Questions",disabled:!1},{name:"Feedback",linkTo:gn.Feedback,disabled:!1},{name:"About",linkTo:gn.About,disabled:!1}];function JE({className:a="",children:t}){return ht.jsx("section",{className:a,children:t})}function $E({size:a="100%",className:t=""}){return ht.jsx("img",{src:"exovitae_logo.png",alt:"Logo",width:a,height:a,style:{objectFit:"contain",borderRadius:8},className:t})}function tb({className:a="",children:t}){return ht.jsx("aside",{className:a,children:t})}function eb({name:a,onClick:t,disabled:i=!1,tooltip:s,className:l}){return ht.jsx("div",{style:{paddingBottom:30,width:"100%"},children:ht.jsx("button",{className:l,onClick:t,disabled:i,title:s,children:a})})}function nb(){return ht.jsxs("section",{style:{textAlign:"center",width:"100%",maxWidth:"1400px",margin:"0 auto",padding:"2rem 4rem",backgroundColor:"rgba(33, 150, 243, 0.05)",border:"1px solid #2196f3",borderRadius:"0.5rem",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",color:"#a8d9ff"},children:[ht.jsx("h1",{style:{fontSize:"clamp(2rem, 4vw, 3rem)",marginBottom:"0.5rem",textTransform:"uppercase",color:"#a8d9ff",textShadow:"0 2px 4px rgba(0, 0, 0, 0.6)"},children:"Game Overview"}),ht.jsx("div",{style:{height:"3px",width:"80px",background:"#2196f3",margin:"0 auto 1.5rem auto",borderRadius:"2px"}}),ht.jsx("h2",{style:{fontSize:"clamp(1.25rem, 2vw, 1.5rem)",marginBottom:"1.5rem",fontWeight:"400",fontStyle:"italic",color:"#a8cfff"},children:"Survive. Explore. Dominate."}),ht.jsxs("p",{style:{fontSize:"1.125rem",lineHeight:"1.8",padding:"0 1rem",color:"#d0e8ff"},children:[ht.jsx("strong",{children:"Exovitae"})," is a multiplayer survival game set on a mysterious, Earth-like world inhabited by dinosaurs and original, otherworldly creatures. Players must gather resources, craft tools and shelters, and tame powerful beasts to thrive in both PvE and PvP scenarios. The game features a vibrant, animated visual style and blends tribal survival elements with futuristic lore. Explore diverse biomes, forge alliances, and carve your path in a dynamic, living world where survival is only the beginning."]})]})}function ib(){return ht.jsx("h1",{children:"Features"})}function ab(){return ht.jsx("h1",{children:"Media"})}function rb(){return ht.jsx("h1",{children:"Frequently Asked Questions"})}function sb({value:a,onChange:t,error:i,ariaDescribedBy:s}){const l=typeof a=="number"?a:0,c=f=>{const d=l;f==="left"&&t(Math.max(1,d-1||1)),f==="right"&&t(Math.min(5,(d||0)+1)),f==="home"&&t(1),f==="end"&&t(5)};return ht.jsxs("div",{className:"field",children:[ht.jsxs("div",{role:"radiogroup","aria-label":"Rating","aria-describedby":s,className:"starsRow",children:[[1,2,3,4,5].map(f=>{const d=f<=l,m=l===f;return ht.jsx("button",{type:"button",role:"radio","aria-checked":m,onClick:()=>t(f),onKeyDown:h=>{h.key==="ArrowLeft"?(h.preventDefault(),c("left")):h.key==="ArrowRight"?(h.preventDefault(),c("right")):h.key==="Home"?(h.preventDefault(),c("home")):h.key==="End"?(h.preventDefault(),c("end")):(h.key===" "||h.key==="Enter")&&(h.preventDefault(),t(f))},title:`${f} star${f>1?"s":""}`,className:`starButton ${d?"isFilled":""}`,children:d?"★":"☆"},f)}),ht.jsx("span",{className:"starValue",children:l?`${l}/5`:"Select rating"})]}),ht.jsx("span",{id:s,className:"errorFloat",children:i})]})}function ob(){const[a,t]=Z.useState(""),[i,s]=Z.useState(""),[l,c]=Z.useState(""),[f,d]=Z.useState(!1),[m,h]=Z.useState(""),[g,v]=Z.useState(""),[y,S]=Z.useState(""),[E,b]=Z.useState(""),x=64,_=1e3,L=10,C=async()=>{h(""),v(""),S(""),b(""),d(!0);const A=a.trim(),O=i.trim(),B=typeof l=="number"?l:Number.NaN;if(A?A.length>x&&h("Name is too long."):h("Name is required."),O?O.length<L?v("Please provide more detail."):O.length>_&&v("Feedback is too long."):v("Feedback is required."),(!Number.isFinite(B)||B<1||B>5)&&S("Rating is required (1–5)."),!A||!O||A.length>x||O.length<L||O.length>_||!Number.isFinite(B)||B<1||B>5){d(!1);return}try{const I=await xu.post("/api/feedback",{name:A,message:O,rating:B});t(""),s(""),c(""),I&&ke.success("Feedback submitted successfully!",{position:"top-center",autoClose:3e3})}catch{b("Failed to submit feedback.")}finally{d(!1)}};return ht.jsx("div",{className:"sectionShell",children:ht.jsxs("section",{className:"sectionCard",children:[ht.jsx("h1",{className:"pageTitle",children:"Game Feedback"}),ht.jsx("div",{className:"accentDivider"}),ht.jsxs("div",{className:"formColumn formColumnWide",children:[ht.jsxs("div",{className:"field",children:[ht.jsx("input",{className:`inputField ${m?"inputError":""}`,placeholder:"Name",type:"text",value:a,onChange:A=>t(A.target.value),"aria-invalid":!!m,"aria-describedby":"name-error",maxLength:x}),ht.jsx("span",{id:"name-error",className:"errorFloat",children:m})]}),ht.jsx(sb,{value:l,onChange:A=>c(A),error:y,ariaDescribedBy:"rating-error"}),ht.jsxs("div",{className:"field",children:[ht.jsx("textarea",{className:`inputFieldLarge ${g?"inputError":""}`,placeholder:"Your feedback...",value:i,onChange:A=>s(A.target.value),"aria-invalid":!!g,"aria-describedby":"feedback-error",maxLength:_}),ht.jsx("span",{id:"feedback-error",className:"errorFloat",children:g})]}),ht.jsx("button",{onClick:C,className:"sectionButton",style:{alignSelf:"center"},disabled:f,children:f?"Submitting...":"Submit"}),ht.jsx("div",{className:"generalErrorSlot",role:"alert",children:f?ht.jsx("span",{className:"spinner"}):E&&ht.jsx("span",{className:"errorText",children:E})})]})]})})}function lb(){return ht.jsx("h1",{children:"About"})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="179",cb=0,v0=1,ub=2,jv=1,fb=2,fa=3,Qa=0,Pn=1,ha=2,Za=0,Os=1,cu=2,y0=3,x0=4,db=5,br=100,hb=101,pb=102,mb=103,gb=104,_b=200,vb=201,yb=202,xb=203,Sh=204,Mh=205,Sb=206,Mb=207,Eb=208,bb=209,Tb=210,Ab=211,Rb=212,wb=213,Cb=214,Eh=0,bh=1,Th=2,Bs=3,Ah=4,Rh=5,wh=6,Ch=7,Zv=0,Db=1,Ub=2,Ka=0,Lb=1,Nb=2,Ob=3,Pb=4,Ib=5,Bb=6,zb=7,Kv=300,zs=301,Fs=302,Dh=303,Uh=304,Su=306,Lh=1e3,Ar=1001,Nh=1002,ri=1003,Fb=1004,Cc=1005,Fi=1006,Bd=1007,Rr=1008,Vi=1009,Qv=1010,Jv=1011,ol=1012,vp=1013,Ur=1014,Hi=1015,gl=1016,yp=1017,xp=1018,ll=1020,$v=35902,ty=1021,ey=1022,Ri=1023,cl=1026,ul=1027,Sp=1028,Mp=1029,ny=1030,Ep=1031,bp=1033,nu=33776,iu=33777,au=33778,ru=33779,Oh=35840,Ph=35841,Ih=35842,Bh=35843,zh=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,tp=37821,su=36492,ep=36494,np=36495,iy=36283,ip=36284,ap=36285,rp=36286,Hb=3200,Gb=3201,ay=0,Vb=1,ja="",ai="srgb",Hs="srgb-linear",uu="linear",Ve="srgb",ms=7680,S0=519,kb=512,Xb=513,Wb=514,ry=515,qb=516,Yb=517,jb=518,Zb=519,M0=35044,E0=35048,b0="300 es",Gi=2e3,fu=2001;class Ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T0=1234567;const el=Math.PI/180,fl=180/Math.PI;function qs(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Me(a,t,i){return Math.max(t,Math.min(i,a))}function Tp(a,t){return(a%t+t)%t}function Kb(a,t,i,s,l){return s+(a-t)*(l-s)/(i-t)}function Qb(a,t,i){return a!==t?(i-a)/(t-a):0}function nl(a,t,i){return(1-i)*a+i*t}function Jb(a,t,i,s){return nl(a,t,1-Math.exp(-i*s))}function $b(a,t=1){return t-Math.abs(Tp(a,t*2)-t)}function tT(a,t,i){return a<=t?0:a>=i?1:(a=(a-t)/(i-t),a*a*(3-2*a))}function eT(a,t,i){return a<=t?0:a>=i?1:(a=(a-t)/(i-t),a*a*a*(a*(a*6-15)+10))}function nT(a,t){return a+Math.floor(Math.random()*(t-a+1))}function iT(a,t){return a+Math.random()*(t-a)}function aT(a){return a*(.5-Math.random())}function rT(a){a!==void 0&&(T0=a);let t=T0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sT(a){return a*el}function oT(a){return a*fl}function lT(a){return(a&a-1)===0&&a!==0}function cT(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function uT(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function fT(a,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),h=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),y=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":a.set(d*g,m*v,m*y,d*h);break;case"YZY":a.set(m*y,d*g,m*v,d*h);break;case"ZXZ":a.set(m*v,m*y,d*g,d*h);break;case"XZX":a.set(d*g,m*E,m*S,d*h);break;case"YXY":a.set(m*S,d*g,m*E,d*h);break;case"ZYZ":a.set(m*E,m*S,d*g,d*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Us(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Fn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const zd={DEG2RAD:el,RAD2DEG:fl,generateUUID:qs,clamp:Me,euclideanModulo:Tp,mapLinear:Kb,inverseLerp:Qb,lerp:nl,damp:Jb,pingpong:$b,smoothstep:tT,smootherstep:eT,randInt:nT,randFloat:iT,randFloatSpread:aT,seededRandom:rT,degToRad:sT,radToDeg:oT,isPowerOfTwo:lT,ceilPowerOfTwo:cT,floorPowerOfTwo:uT,setQuaternionFromProperEuler:fT,normalize:Fn,denormalize:Us};class Ue{constructor(t=0,i=0){Ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],h=s[l+1],g=s[l+2],v=s[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=h,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(v!==b||m!==y||h!==S||g!==E){let x=1-d;const _=m*y+h*S+g*E+v*b,L=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const O=Math.sqrt(C),B=Math.atan2(O,_*L);x=Math.sin(x*B)/O,d=Math.sin(d*B)/O}const A=d*L;if(m=m*x+y*A,h=h*x+S*A,g=g*x+E*A,v=v*x+b*A,x===1-d){const O=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=O,h*=O,g*=O,v*=O}}t[i]=m,t[i+1]=h,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],h=s[l+2],g=s[l+3],v=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*v+m*S-h*y,t[i+1]=m*E+g*y+h*v-d*S,t[i+2]=h*E+g*S+d*y-m*v,t[i+3]=g*E-d*v-m*y-h*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,h=d(s/2),g=d(l/2),v=d(c/2),y=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*v+h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v+y*S*E;break;case"YZX":this._x=y*g*v+h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v-y*S*E;break;case"XZY":this._x=y*g*v-h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],h=i[2],g=i[6],v=i[10],y=s+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-h)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+h)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-h)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+h)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*d+l*h-c*m,this._y=l*g+f*m+c*d-s*h,this._z=c*g+f*h+s*m-l*d,this._w=f*g-s*d-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const h=Math.sqrt(m),g=Math.atan2(h,d),v=Math.sin((1-i)*g)/h,y=Math.sin(i*g)/h;return this._w=f*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,s=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(A0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(A0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,h=2*(f*l-d*s),g=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*h+f*v-d*g,this.y=s+m*g+d*h-c*v,this.z=l+m*v+c*g-f*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new it,A0=new Ys;class fe{constructor(t,i,s,l,c,f,d,m,h){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,h)}set(t,i,s,l,c,f,d,m,h){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],h=s[1],g=s[4],v=s[7],y=s[2],S=s[5],E=s[8],b=l[0],x=l[3],_=l[6],L=l[1],C=l[4],A=l[7],O=l[2],B=l[5],I=l[8];return c[0]=f*b+d*L+m*O,c[3]=f*x+d*C+m*B,c[6]=f*_+d*A+m*I,c[1]=h*b+g*L+v*O,c[4]=h*x+g*C+v*B,c[7]=h*_+g*A+v*I,c[2]=y*b+S*L+E*O,c[5]=y*x+S*C+E*B,c[8]=y*_+S*A+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],h=t[7],g=t[8];return i*f*g-i*d*h-s*c*g+s*d*m+l*c*h-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],h=t[7],g=t[8],v=g*f-d*h,y=d*m-g*c,S=h*c-f*m,E=i*v+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(l*h-g*s)*b,t[2]=(d*s-l*f)*b,t[3]=y*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-h*i)*b,t[8]=(f*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*d)+f+t,-l*h,l*m,-l*(-h*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Hd.makeScale(t,i)),this}rotate(t){return this.premultiply(Hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new fe;function sy(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function du(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function dT(){const a=du("canvas");return a.style.display="block",a}const R0={};function Ps(a){a in R0||(R0[a]=!0,console.warn(a))}function hT(a,t,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const w0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pT(){const a={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?uu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Hs]:{primaries:t,whitePoint:s,transfer:uu,toXYZ:w0,fromXYZ:C0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:w0,fromXYZ:C0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),a}const De=pT();function ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Is(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gs;class mT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gs===void 0&&(gs=du("canvas")),gs.width=t.width,gs.height=t.height;const l=gs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=du("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ma(i[s]/255)*255):i[s]=ma(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gT=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Gd(l[f].image)):c.push(Gd(l[f]))}else c=Gd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Gd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?mT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _T=0;const Vd=new it;class Vn extends Ws{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ar,l=Ar,c=Fi,f=Rr,d=Ri,m=Vi,h=Vn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=qs(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case Nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case Nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Kv;Vn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],g=m[4],v=m[8],y=m[1],S=m[5],E=m[9],b=m[2],x=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+b)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(h+1)/2,A=(S+1)/2,O=(_+1)/2,B=(g+y)/4,I=(v+b)/4,G=(E+x)/4;return C>A&&C>O?C<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(C),l=B/s,c=I/s):A>O?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=B/l,c=G/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=I/c,l=G/c),this.set(s,l,c,i),this}let L=Math.sqrt((x-E)*(x-E)+(v-b)*(v-b)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(v-b)/L,this.z=(y-g)/L,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vT extends Ws{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ap(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends vT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class oy extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yT extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dc.copy(s.boundingBox)),Dc.applyMatrix4(t.matrixWorld),this.union(Dc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Uc.subVectors(this.max,jo),_s.subVectors(t.a,jo),vs.subVectors(t.b,jo),ys.subVectors(t.c,jo),Va.subVectors(vs,_s),ka.subVectors(ys,vs),gr.subVectors(_s,ys);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-gr.z,gr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,gr.z,0,-gr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-gr.y,gr.x,0];return!kd(i,_s,vs,ys,Uc)||(i=[1,0,0,0,1,0,0,0,1],!kd(i,_s,vs,ys,Uc))?!1:(Lc.crossVectors(Va,ka),i=[Lc.x,Lc.y,Lc.z],kd(i,_s,vs,ys,Uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new it,new it,new it,new it,new it,new it,new it,new it],Ei=new it,Dc=new Nr,_s=new it,vs=new it,ys=new it,Va=new it,ka=new it,gr=new it,jo=new it,Uc=new it,Lc=new it,_r=new it;function kd(a,t,i,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){_r.fromArray(a,c);const d=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),h=i.dot(_r),g=s.dot(_r);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const xT=new Nr,Zo=new it,Xd=new it;class js{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):xT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Xd)),this.expandByPoint(Zo.copy(t.center).sub(Xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new it,Wd=new it,Nc=new it,Xa=new it,qd=new it,Oc=new it,Yd=new it;class ly{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Wd.copy(t).add(i).multiplyScalar(.5),Nc.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(Wd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Nc),d=Xa.dot(this.direction),m=-Xa.dot(Nc),h=Xa.lengthSq(),g=Math.abs(1-f*f);let v,y,S,E;if(g>0)if(v=f*m-d,y=f*d-m,E=c*g,v>=0)if(y>=-E)if(y<=E){const b=1/g;v*=b,y*=b,S=v*(v+f*y+2*d)+y*(f*v+y+2*m)+h}else y=c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;else y=-c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;else y<=-E?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+h):y<=E?(v=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+h):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+h);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wd).addScaledVector(Nc,y),S}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(s=(t.min.x-y.x)*h,l=(t.max.x-y.x)*h):(s=(t.max.x-y.x)*h,l=(t.min.x-y.x)*h),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,s,l,c){qd.subVectors(i,t),Oc.subVectors(s,t),Yd.crossVectors(qd,Oc);let f=this.direction.dot(Yd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(Oc.crossVectors(Xa,Oc));if(m<0)return null;const h=d*this.direction.dot(qd.cross(Xa));if(h<0||m+h>f)return null;const g=-d*Xa.dot(Yd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,c,f,d,m,h,g,v,y,S,E,b,x){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,h,g,v,y,S,E,b,x)}set(t,i,s,l,c,f,d,m,h,g,v,y,S,E,b,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=h,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/xs.setFromMatrixColumn(t,0).length(),c=1/xs.setFromMatrixColumn(t,1).length(),f=1/xs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*v,E=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=S+E*h,i[5]=y-b*h,i[9]=-d*m,i[2]=b-y*h,i[6]=E+S*h,i[10]=f*m}else if(t.order==="YXZ"){const y=m*g,S=m*v,E=h*g,b=h*v;i[0]=y+b*d,i[4]=E*d-S,i[8]=f*h,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=f*m}else if(t.order==="ZXY"){const y=m*g,S=m*v,E=h*g,b=h*v;i[0]=y-b*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=b-y*d,i[2]=-f*h,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const y=f*g,S=f*v,E=d*g,b=d*v;i[0]=m*g,i[4]=E*h-S,i[8]=y*h+b,i[1]=m*v,i[5]=b*h+y,i[9]=S*h-E,i[2]=-h,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*h,E=d*m,b=d*h;i[0]=m*g,i[4]=b-y*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-h*g,i[6]=S*v+E,i[10]=y-b*v}else if(t.order==="XZY"){const y=f*m,S=f*h,E=d*m,b=d*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=y*v+b,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*g,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ST,t,MT)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Wa.crossVectors(s,ni),Wa.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Wa.crossVectors(s,ni)),Wa.normalize(),Pc.crossVectors(ni,Wa),l[0]=Wa.x,l[4]=Pc.x,l[8]=ni.x,l[1]=Wa.y,l[5]=Pc.y,l[9]=ni.y,l[2]=Wa.z,l[6]=Pc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],h=s[12],g=s[1],v=s[5],y=s[9],S=s[13],E=s[2],b=s[6],x=s[10],_=s[14],L=s[3],C=s[7],A=s[11],O=s[15],B=l[0],I=l[4],G=l[8],D=l[12],U=l[1],z=l[5],nt=l[9],st=l[13],ct=l[2],ft=l[6],F=l[10],j=l[14],W=l[3],St=l[7],N=l[11],$=l[15];return c[0]=f*B+d*U+m*ct+h*W,c[4]=f*I+d*z+m*ft+h*St,c[8]=f*G+d*nt+m*F+h*N,c[12]=f*D+d*st+m*j+h*$,c[1]=g*B+v*U+y*ct+S*W,c[5]=g*I+v*z+y*ft+S*St,c[9]=g*G+v*nt+y*F+S*N,c[13]=g*D+v*st+y*j+S*$,c[2]=E*B+b*U+x*ct+_*W,c[6]=E*I+b*z+x*ft+_*St,c[10]=E*G+b*nt+x*F+_*N,c[14]=E*D+b*st+x*j+_*$,c[3]=L*B+C*U+A*ct+O*W,c[7]=L*I+C*z+A*ft+O*St,c[11]=L*G+C*nt+A*F+O*N,c[15]=L*D+C*st+A*j+O*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],h=t[13],g=t[2],v=t[6],y=t[10],S=t[14],E=t[3],b=t[7],x=t[11],_=t[15];return E*(+c*m*v-l*h*v-c*d*y+s*h*y+l*d*S-s*m*S)+b*(+i*m*S-i*h*y+c*f*y-l*f*S+l*h*g-c*m*g)+x*(+i*h*v-i*d*S-c*f*v+s*f*S+c*d*g-s*h*g)+_*(-l*d*g-i*m*v+i*d*y+l*f*v-s*f*y+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],h=t[7],g=t[8],v=t[9],y=t[10],S=t[11],E=t[12],b=t[13],x=t[14],_=t[15],L=v*x*h-b*y*h+b*m*S-d*x*S-v*m*_+d*y*_,C=E*y*h-g*x*h-E*m*S+f*x*S+g*m*_-f*y*_,A=g*b*h-E*v*h+E*d*S-f*b*S-g*d*_+f*v*_,O=E*v*m-g*b*m-E*d*y+f*b*y+g*d*x-f*v*x,B=i*L+s*C+l*A+c*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=L*I,t[1]=(b*y*c-v*x*c-b*l*S+s*x*S+v*l*_-s*y*_)*I,t[2]=(d*x*c-b*m*c+b*l*h-s*x*h-d*l*_+s*m*_)*I,t[3]=(v*m*c-d*y*c-v*l*h+s*y*h+d*l*S-s*m*S)*I,t[4]=C*I,t[5]=(g*x*c-E*y*c+E*l*S-i*x*S-g*l*_+i*y*_)*I,t[6]=(E*m*c-f*x*c-E*l*h+i*x*h+f*l*_-i*m*_)*I,t[7]=(f*y*c-g*m*c+g*l*h-i*y*h-f*l*S+i*m*S)*I,t[8]=A*I,t[9]=(E*v*c-g*b*c-E*s*S+i*b*S+g*s*_-i*v*_)*I,t[10]=(f*b*c-E*d*c+E*s*h-i*b*h-f*s*_+i*d*_)*I,t[11]=(g*d*c-f*v*c-g*s*h+i*v*h+f*s*S-i*d*S)*I,t[12]=O*I,t[13]=(g*b*l-E*v*l+E*s*y-i*b*y-g*s*x+i*v*x)*I,t[14]=(E*d*l-f*b*l-E*s*m+i*b*m+f*s*x-i*d*x)*I,t[15]=(f*v*l-g*d*l+g*s*m-i*v*m-f*s*y+i*d*y)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,h=c*f,g=c*d;return this.set(h*f+s,h*d-l*m,h*m+l*d,0,h*d+l*m,g*d+s,g*m-l*f,0,h*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,h=c+c,g=f+f,v=d+d,y=c*h,S=c*g,E=c*v,b=f*g,x=f*v,_=d*v,L=m*h,C=m*g,A=m*v,O=s.x,B=s.y,I=s.z;return l[0]=(1-(b+_))*O,l[1]=(S+A)*O,l[2]=(E-C)*O,l[3]=0,l[4]=(S-A)*B,l[5]=(1-(y+_))*B,l[6]=(x+L)*B,l[7]=0,l[8]=(E+C)*I,l[9]=(x-L)*I,l[10]=(1-(y+b))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=xs.set(l[0],l[1],l[2]).length();const f=xs.set(l[4],l[5],l[6]).length(),d=xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const h=1/c,g=1/f,v=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Gi,m=!1){const h=this.elements,g=2*c/(i-t),v=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(d===Gi)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(d===fu)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Gi,m=!1){const h=this.elements,g=2/(i-t),v=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(d===Gi)E=-2/(f-c),b=-(f+c)/(f-c);else if(d===fu)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const xs=new it,bi=new Ye,ST=new it(0,0,0),MT=new it(1,1,1),Wa=new it,Pc=new it,ni=new it,D0=new Ye,U0=new Ys;class ki{constructor(t=0,i=0,s=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],h=l[5],g=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return D0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U0.setFromEuler(this),this.setFromQuaternion(U0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class cy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ET=0;const L0=new it,Ss=new Ys,la=new Ye,Ic=new it,Ko=new it,bT=new it,TT=new Ys,N0=new it(1,0,0),O0=new it(0,1,0),P0=new it(0,0,1),I0={type:"added"},AT={type:"removed"},Ms={type:"childadded",child:null},jd={type:"childremoved",child:null};class wn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new it,i=new ki,s=new Ys,l=new it(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new fe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,i){return Ss.setFromAxisAngle(t,i),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(N0,t)}rotateY(t){return this.rotateOnAxis(O0,t)}rotateZ(t){return this.rotateOnAxis(P0,t)}translateOnAxis(t,i){return L0.copy(t).applyQuaternion(this.quaternion),this.position.add(L0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(N0,t)}translateY(t){return this.translateOnAxis(O0,t)}translateZ(t){return this.translateOnAxis(P0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ic.copy(t):Ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Ko,Ic,this.up):la.lookAt(Ic,Ko,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(la),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(I0),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AT),jd.child=t,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(I0),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,bT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,TT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),h=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new it(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new it,ca=new it,Zd=new it,ua=new it,Es=new it,bs=new it,B0=new it,Kd=new it,Qd=new it,Jd=new it,$d=new rn,th=new rn,eh=new rn;class Ai{constructor(t=new it,i=new it,s=new it){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),ca.subVectors(s,i),Zd.subVectors(t,i);const f=Ti.dot(Ti),d=Ti.dot(ca),m=Ti.dot(Zd),h=ca.dot(ca),g=ca.dot(Zd),v=f*h-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(h*m-d*g)*y,E=(f*g-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return $d.setScalar(0),th.setScalar(0),eh.setScalar(0),$d.fromBufferAttribute(t,i),th.fromBufferAttribute(t,s),eh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector($d,c.x),f.addScaledVector(th,c.y),f.addScaledVector(eh,c.z),f}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),ca.subVectors(t,i),Ti.cross(ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Es.subVectors(l,s),bs.subVectors(c,s),Kd.subVectors(t,s);const m=Es.dot(Kd),h=bs.dot(Kd);if(m<=0&&h<=0)return i.copy(s);Qd.subVectors(t,l);const g=Es.dot(Qd),v=bs.dot(Qd);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*h;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Es,f);Jd.subVectors(t,c);const S=Es.dot(Jd),E=bs.dot(Jd);if(E>=0&&S<=E)return i.copy(c);const b=S*h-m*E;if(b<=0&&h>=0&&E<=0)return d=h/(h-E),i.copy(s).addScaledVector(bs,d);const x=g*E-S*v;if(x<=0&&v-g>=0&&S-E>=0)return B0.subVectors(c,l),d=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(B0,d);const _=1/(x+b+y);return f=b*_,d=y*_,i.copy(s).addScaledVector(Es,f).addScaledVector(bs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function nh(a,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(t-a)*6*i:i<1/2?t:i<2/3?a+(t-a)*6*(2/3-i):a}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=Tp(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=nh(f,c,t+1/3),this.g=nh(f,c,t),this.b=nh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=ai){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ai){const s=uy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return De.workingToColorSpace(On.copy(this),t),Math.round(Me(On.r*255,0,255))*65536+Math.round(Me(On.g*255,0,255))*256+Math.round(Me(On.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,h;const g=(d+f)/2;if(d===f)m=0,h=0;else{const v=f-d;switch(h=g<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=h,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ai){De.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Bc);const s=nl(qa.h,Bc.h,i),l=nl(qa.s,Bc.s,i),c=nl(qa.l,Bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ae;Ae.NAMES=uy;let RT=0;class Zs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Os,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Mh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==br&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hu extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new it,zc=new Ue;let wT=0;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=M0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Us(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Us(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Us(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Us(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Us(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==M0&&(t.usage=this.usage),t}}class fy extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class dy extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class si extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let CT=0;const pi=new Ye,ih=new wn,Ts=new it,ii=new Nr,Qo=new Nr,En=new it;class Di extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sy(t)?dy:fy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return ih.lookAt(t),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ii.min,Qo.min),ii.expandByPoint(En),En.addVectors(ii.max,Qo.max),ii.expandByPoint(En)):(ii.expandByPoint(Qo.min),ii.expandByPoint(Qo.max))}ii.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)En.fromBufferAttribute(d,h),m&&(Ts.fromBufferAttribute(t,h),En.add(Ts)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let G=0;G<s.count;G++)d[G]=new it,m[G]=new it;const h=new it,g=new it,v=new it,y=new Ue,S=new Ue,E=new Ue,b=new it,x=new it;function _(G,D,U){h.fromBufferAttribute(s,G),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,U),y.fromBufferAttribute(c,G),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,U),g.sub(h),v.sub(h),S.sub(y),E.sub(y);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(z),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),d[G].add(b),d[D].add(b),d[U].add(b),m[G].add(x),m[D].add(x),m[U].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let G=0,D=L.length;G<D;++G){const U=L[G],z=U.start,nt=U.count;for(let st=z,ct=z+nt;st<ct;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const C=new it,A=new it,O=new it,B=new it;function I(G){O.fromBufferAttribute(l,G),B.copy(O);const D=d[G];C.copy(D),C.sub(O.multiplyScalar(O.dot(D))).normalize(),A.crossVectors(B,D);const z=A.dot(m[G])<0?-1:1;f.setXYZW(G,C.x,C.y,C.z,z)}for(let G=0,D=L.length;G<D;++G){const U=L[G],z=U.start,nt=U.count;for(let st=z,ct=z+nt;st<ct;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new it,c=new it,f=new it,d=new it,m=new it,h=new it,g=new it,v=new it;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),h.fromBufferAttribute(s,x),d.add(g),m.add(g),h.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(x,h.x,h.y,h.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const h=d.array,g=d.itemSize,v=d.normalized,y=new h.constructor(m.length*g);let S=0,E=0;for(let b=0,x=m.length;b<x;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*g;for(let _=0;_<g;_++)y[E++]=h[S++]}return new gi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],h=t(m,s);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const y=h[g],S=t(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const h=f[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,y=h.length;v<y;v++){const S=h[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=t.morphAttributes;for(const h in c){const g=[],v=c[h];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let h=0,g=f.length;h<g;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z0=new Ye,vr=new ly,Fc=new js,F0=new it,Hc=new it,Gc=new it,Vc=new it,ah=new it,kc=new it,H0=new it,Xc=new it;class jn extends wn{constructor(t=new Di,i=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){kc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],v=c[m];g!==0&&(ah.fromBufferAttribute(v,t),f?kc.addScaledVector(ah,g):kc.addScaledVector(ah.sub(i),g))}i.add(kc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(Fc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Fc,F0)===null||vr.origin.distanceToSquared(F0)>(t.far-t.near)**2))&&(z0.copy(c).invert(),vr.copy(t.ray).applyMatrix4(z0),!(s.boundingBox!==null&&vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,vr)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],_=f[x.materialIndex],L=Math.max(x.start,S.start),C=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,O=C;A<O;A+=3){const B=d.getX(A),I=d.getX(A+1),G=d.getX(A+2);l=Wc(this,_,t,s,h,g,v,B,I,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=E,_=b;x<_;x+=3){const L=d.getX(x),C=d.getX(x+1),A=d.getX(x+2);l=Wc(this,f,t,s,h,g,v,L,C,A),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],_=f[x.materialIndex],L=Math.max(x.start,S.start),C=Math.min(m.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,O=C;A<O;A+=3){const B=A,I=A+1,G=A+2;l=Wc(this,_,t,s,h,g,v,B,I,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let x=E,_=b;x<_;x+=3){const L=x,C=x+1,A=x+2;l=Wc(this,f,t,s,h,g,v,L,C,A),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function DT(a,t,i,s,l,c,f,d){let m;if(t.side===Pn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Qa,d),m===null)return null;Xc.copy(d),Xc.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(Xc);return h<i.near||h>i.far?null:{distance:h,point:Xc.clone(),object:a}}function Wc(a,t,i,s,l,c,f,d,m,h){a.getVertexPosition(d,Hc),a.getVertexPosition(m,Gc),a.getVertexPosition(h,Vc);const g=DT(a,t,i,s,Hc,Gc,Vc,H0);if(g){const v=new it;Ai.getBarycoord(H0,Hc,Gc,Vc,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,m,h,v,new Ue)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,m,h,v,new Ue)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,m,h,v,new it),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:h,normal:new it,materialIndex:0};Ai.getNormal(Hc,Gc,Vc,y.normal),g.face=y,g.barycoord=v}return g}class _l extends Di{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new si(h,3)),this.setAttribute("normal",new si(g,3)),this.setAttribute("uv",new si(v,2));function E(b,x,_,L,C,A,O,B,I,G,D){const U=A/I,z=O/G,nt=A/2,st=O/2,ct=B/2,ft=I+1,F=G+1;let j=0,W=0;const St=new it;for(let N=0;N<F;N++){const $=N*z-st;for(let _t=0;_t<ft;_t++){const Mt=_t*U-nt;St[b]=Mt*L,St[x]=$*C,St[_]=ct,h.push(St.x,St.y,St.z),St[b]=0,St[x]=0,St[_]=B>0?1:-1,g.push(St.x,St.y,St.z),v.push(_t/I),v.push(1-N/G),j+=1}}for(let N=0;N<G;N++)for(let $=0;$<I;$++){const _t=y+$+ft*N,Mt=y+$+ft*(N+1),Ct=y+($+1)+ft*(N+1),et=y+($+1)+ft*N;m.push(_t,Mt,et),m.push(Mt,Ct,et),W+=6}d.addGroup(S,W,D),S+=W,y+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(a){const t={};for(const i in a){t[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(a){const t={};for(let i=0;i<a.length;i++){const s=Gs(a[i]);for(const l in s)t[l]=s[l]}return t}function UT(a){const t=[];for(let i=0;i<a.length;i++)t.push(a[i].clone());return t}function hy(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const LT={clone:Gs,merge:Hn};var NT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=UT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class py extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new it,G0=new Ue,V0=new Ue;class mi extends py{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,i){return this.getViewBounds(t,G0,V0),i.subVectors(V0,G0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(el*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class PT extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(As,Rs,t,i);l.layers=this.layers,this.add(l);const c=new mi(As,Rs,t,i);c.layers=this.layers,this.add(c);const f=new mi(As,Rs,t,i);f.layers=this.layers,this.add(f);const d=new mi(As,Rs,t,i);d.layers=this.layers,this.add(d);const m=new mi(As,Rs,t,i);m.layers=this.layers,this.add(m);const h=new mi(As,Rs,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const h of i)this.remove(h);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,h,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,h),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,y,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class my extends Vn{constructor(t=[],i=zs,s,l,c,f,d,m,h,g){super(t,i,s,l,c,f,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IT extends Lr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new my(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _l(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Gs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Za});c.uniforms.tEquirect.value=i;const f=new jn(l,c),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Fi),new PT(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class wr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){f=!0;for(const b of t.hand.values()){const x=i.getJointPose(b,s),_=this._getHandJoint(h,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&y>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&y<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class zT extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class FT extends Vn{constructor(t=null,i=1,s=1,l,c,f,d,m,h=ri,g=ri,v,y){super(null,f,d,m,h,g,l,c,v,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k0 extends gi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new Ye,X0=new Ye,qc=[],W0=new Nr,HT=new Ye,Jo=new jn,$o=new js;class q0 extends jn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new k0(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,HT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ws),W0.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(W0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ws),$o.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union($o)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(s),t.ray.intersectsSphere($o)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,ws),X0.multiplyMatrices(s,ws),Jo.matrixWorld=X0,Jo.raycast(t,qc);for(let f=0,d=qc.length;f<d;f++){const m=qc[f];m.instanceId=c,m.object=this,i.push(m)}qc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new k0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new FT(new Float32Array(l*this.count),l,this.count,Sp,Hi));const c=this.morphTexture.source.data.data;let f=0;for(let h=0;h<s.length;h++)f+=s[h];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sh=new it,GT=new it,VT=new fe;class Mr{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=sh.subVectors(s,i).cross(GT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(sh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||VT.getNormalMatrix(t),l=this.coplanarPoint(sh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new js,kT=new Ue(.5,.5),Yc=new it;class Rp{constructor(t=new Mr,i=new Mr,s=new Mr,l=new Mr,c=new Mr,f=new Mr){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],h=c[3],g=c[4],v=c[5],y=c[6],S=c[7],E=c[8],b=c[9],x=c[10],_=c[11],L=c[12],C=c[13],A=c[14],O=c[15];if(l[0].setComponents(h-f,S-g,_-E,O-L).normalize(),l[1].setComponents(h+f,S+g,_+E,O+L).normalize(),l[2].setComponents(h+d,S+v,_+b,O+C).normalize(),l[3].setComponents(h-d,S-v,_-b,O-C).normalize(),s)l[4].setComponents(m,y,x,A).normalize(),l[5].setComponents(h-m,S-y,_-x,O-A).normalize();else if(l[4].setComponents(h-m,S-y,_-x,O-A).normalize(),i===Gi)l[5].setComponents(h+m,S+y,_+x,O+A).normalize();else if(i===fu)l[5].setComponents(m,y,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=kT.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Yc.x=l.normal.x>0?t.max.x:t.min.x,Yc.y=l.normal.y>0?t.max.y:t.min.y,Yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gy extends Zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Y0=new Ye,sp=new ly,jc=new js,Zc=new it;class XT extends wn{constructor(t=new Di,i=new gy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,t.ray.intersectsSphere(jc)===!1)return;Y0.copy(l).invert(),sp.copy(t.ray).applyMatrix4(Y0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=s.index,v=s.attributes.position;if(h!==null){const y=Math.max(0,f.start),S=Math.min(h.count,f.start+f.count);for(let E=y,b=S;E<b;E++){const x=h.getX(E);Zc.fromBufferAttribute(v,x),j0(Zc,x,m,l,t,i,this)}}else{const y=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=y,b=S;E<b;E++)Zc.fromBufferAttribute(v,E),j0(Zc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function j0(a,t,i,s,l,c,f){const d=sp.distanceSqToPoint(a);if(d<i){const m=new it;sp.closestPointToPoint(a,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class _y extends Vn{constructor(t,i,s=Ur,l,c,f,d=ri,m=ri,h,g=cl,v=1){if(g!==cl&&g!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:v};super(y,l,c,f,d,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wp extends Di{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],y=[],S=[];let E=0;const b=[],x=s/2;let _=0;L(),f===!1&&(t>0&&C(!0),i>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new si(v,3)),this.setAttribute("normal",new si(y,3)),this.setAttribute("uv",new si(S,2));function L(){const A=new it,O=new it;let B=0;const I=(i-t)/s;for(let G=0;G<=c;G++){const D=[],U=G/c,z=U*(i-t)+t;for(let nt=0;nt<=l;nt++){const st=nt/l,ct=st*m+d,ft=Math.sin(ct),F=Math.cos(ct);O.x=z*ft,O.y=-U*s+x,O.z=z*F,v.push(O.x,O.y,O.z),A.set(ft,I,F).normalize(),y.push(A.x,A.y,A.z),S.push(st,1-U),D.push(E++)}b.push(D)}for(let G=0;G<l;G++)for(let D=0;D<c;D++){const U=b[D][G],z=b[D+1][G],nt=b[D+1][G+1],st=b[D][G+1];(t>0||D!==0)&&(g.push(U,z,st),B+=3),(i>0||D!==c-1)&&(g.push(z,nt,st),B+=3)}h.addGroup(_,B,0),_+=B}function C(A){const O=E,B=new Ue,I=new it;let G=0;const D=A===!0?t:i,U=A===!0?1:-1;for(let nt=1;nt<=l;nt++)v.push(0,x*U,0),y.push(0,U,0),S.push(.5,.5),E++;const z=E;for(let nt=0;nt<=l;nt++){const ct=nt/l*m+d,ft=Math.cos(ct),F=Math.sin(ct);I.x=D*F,I.y=x*U,I.z=D*ft,v.push(I.x,I.y,I.z),y.push(0,U,0),B.x=ft*.5+.5,B.y=F*.5*U+.5,S.push(B.x,B.y),E++}for(let nt=0;nt<l;nt++){const st=O+nt,ct=z+nt;A===!0?g.push(ct,ct+1,st):g.push(ct+1,ct,st),G+=3}h.addGroup(_,G,A===!0?1:2),_+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mu extends Di{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),h=d+1,g=m+1,v=t/d,y=i/m,S=[],E=[],b=[],x=[];for(let _=0;_<g;_++){const L=_*y-f;for(let C=0;C<h;C++){const A=C*v-c;E.push(A,-L,0),b.push(0,0,1),x.push(C/d),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const C=L+h*_,A=L+h*(_+1),O=L+1+h*(_+1),B=L+1+h*_;S.push(C,A,B),S.push(A,O,B)}this.setIndex(S),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(b,3)),this.setAttribute("uv",new si(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ls extends Di{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let h=0;const g=[],v=new it,y=new it,S=[],E=[],b=[],x=[];for(let _=0;_<=s;_++){const L=[],C=_/s;let A=0;_===0&&f===0?A=.5/i:_===s&&m===Math.PI&&(A=-.5/i);for(let O=0;O<=i;O++){const B=O/i;v.x=-t*Math.cos(l+B*c)*Math.sin(f+C*d),v.y=t*Math.cos(f+C*d),v.z=t*Math.sin(l+B*c)*Math.sin(f+C*d),E.push(v.x,v.y,v.z),y.copy(v).normalize(),b.push(y.x,y.y,y.z),x.push(B+A,1-C),L.push(h++)}g.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const C=g[_][L+1],A=g[_][L],O=g[_+1][L],B=g[_+1][L+1];(_!==0||f>0)&&S.push(C,A,B),(_!==s-1||m<Math.PI)&&S.push(A,O,B)}this.setIndex(S),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(b,3)),this.setAttribute("uv",new si(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Z0 extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ay,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WT extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qT extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vy extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const oh=new Ye,K0=new it,Q0=new it;class YT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K0.setFromMatrixPosition(t.matrixWorld),i.position.copy(K0),Q0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q0),i.updateMatrixWorld(),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yy extends py{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jT extends YT{constructor(){super(new yy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZT extends vy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new jT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class KT extends vy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class QT extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class JT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function J0(a,t,i,s){const l=$T(s);switch(i){case ty:return a*t;case Sp:return a*t/l.components*l.byteLength;case Mp:return a*t/l.components*l.byteLength;case ny:return a*t*2/l.components*l.byteLength;case Ep:return a*t*2/l.components*l.byteLength;case ey:return a*t*3/l.components*l.byteLength;case Ri:return a*t*4/l.components*l.byteLength;case bp:return a*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case au:case ru:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ph:case Bh:return Math.max(a,16)*Math.max(t,8)/4;case Oh:case Ih:return Math.max(a,8)*Math.max(t,8)/2;case zh:case Fh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case su:case ep:case np:return Math.ceil(a/4)*Math.ceil(t/4)*16;case iy:case ip:return Math.ceil(a/4)*Math.ceil(t/4)*8;case ap:case rp:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $T(a){switch(a){case Vi:case Qv:return{byteLength:1,components:1};case ol:case Jv:case gl:return{byteLength:2,components:1};case yp:case xp:return{byteLength:2,components:4};case Ur:case vp:case Hi:return{byteLength:4,components:1};case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xy(){let a=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function t1(a){const t=new WeakMap;function i(d,m){const h=d.array,g=d.usage,v=h.byteLength,y=a.createBuffer();a.bindBuffer(m,y),a.bufferData(m,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,h){const g=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,v[y]=b)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];a.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(a.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=t.get(d);if(h===void 0)t.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,m),h.version=d.version}}return{get:l,remove:c,update:f}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
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
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
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
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
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
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p1=`#ifdef USE_IRIDESCENCE
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
#endif`,m1=`#ifdef USE_BUMPMAP
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b1=`#define PI 3.141592653589793
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
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A1=`vec3 transformedNormal = objectNormal;
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
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",L1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q1=`uniform bool receiveShadow;
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
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
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
#endif`,$1=`struct PhysicalMaterial {
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
}`,tA=`
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
#endif`,eA=`#if defined( RE_IndirectDiffuse )
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
#endif`,nA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uA=`#if defined( USE_POINTS_UV )
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
#endif`,fA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
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
#endif`,_A=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EA=`#ifdef USE_NORMALMAP
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
#endif`,bA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FA=`float getShadowMask() {
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
}`,HA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GA=`#ifdef USE_SKINNING
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
#endif`,VA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kA=`#ifdef USE_SKINNING
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
#endif`,XA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jA=`#ifdef USE_TRANSMISSION
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
#endif`,ZA=`#ifdef USE_TRANSMISSION
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
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eR=`uniform sampler2D t2D;
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
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`#include <common>
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
}`,oR=`#if DEPTH_PACKING == 3200
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
}`,lR=`#define DISTANCE
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
}`,cR=`#define DISTANCE
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
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`uniform float scale;
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
}`,hR=`uniform vec3 diffuse;
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
}`,pR=`#include <common>
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
}`,mR=`uniform vec3 diffuse;
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
}`,gR=`#define LAMBERT
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
}`,_R=`#define LAMBERT
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
}`,vR=`#define MATCAP
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
}`,yR=`#define MATCAP
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
}`,xR=`#define NORMAL
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
}`,SR=`#define NORMAL
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
}`,MR=`#define PHONG
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
}`,ER=`#define PHONG
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
}`,bR=`#define STANDARD
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
}`,TR=`#define STANDARD
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
}`,AR=`#define TOON
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
}`,RR=`#define TOON
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
}`,wR=`uniform float size;
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
}`,CR=`uniform vec3 diffuse;
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
}`,DR=`#include <common>
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
}`,UR=`uniform vec3 color;
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
}`,LR=`uniform float rotation;
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
}`,NR=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:e1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:a1,alphatest_fragment:r1,alphatest_pars_fragment:s1,aomap_fragment:o1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:u1,begin_vertex:f1,beginnormal_vertex:d1,bsdfs:h1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:_1,clipping_planes_pars_vertex:v1,clipping_planes_vertex:y1,color_fragment:x1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:E1,common:b1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:A1,displacementmap_pars_vertex:R1,displacementmap_vertex:w1,emissivemap_fragment:C1,emissivemap_pars_fragment:D1,colorspace_fragment:U1,colorspace_pars_fragment:L1,envmap_fragment:N1,envmap_common_pars_fragment:O1,envmap_pars_fragment:P1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:Y1,envmap_vertex:B1,fog_vertex:z1,fog_pars_vertex:F1,fog_fragment:H1,fog_pars_fragment:G1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:k1,lights_lambert_fragment:X1,lights_lambert_pars_fragment:W1,lights_pars_begin:q1,lights_toon_fragment:j1,lights_toon_pars_fragment:Z1,lights_phong_fragment:K1,lights_phong_pars_fragment:Q1,lights_physical_fragment:J1,lights_physical_pars_fragment:$1,lights_fragment_begin:tA,lights_fragment_maps:eA,lights_fragment_end:nA,logdepthbuf_fragment:iA,logdepthbuf_pars_fragment:aA,logdepthbuf_pars_vertex:rA,logdepthbuf_vertex:sA,map_fragment:oA,map_pars_fragment:lA,map_particle_fragment:cA,map_particle_pars_fragment:uA,metalnessmap_fragment:fA,metalnessmap_pars_fragment:dA,morphinstance_vertex:hA,morphcolor_vertex:pA,morphnormal_vertex:mA,morphtarget_pars_vertex:gA,morphtarget_vertex:_A,normal_fragment_begin:vA,normal_fragment_maps:yA,normal_pars_fragment:xA,normal_pars_vertex:SA,normal_vertex:MA,normalmap_pars_fragment:EA,clearcoat_normal_fragment_begin:bA,clearcoat_normal_fragment_maps:TA,clearcoat_pars_fragment:AA,iridescence_pars_fragment:RA,opaque_fragment:wA,packing:CA,premultiplied_alpha_fragment:DA,project_vertex:UA,dithering_fragment:LA,dithering_pars_fragment:NA,roughnessmap_fragment:OA,roughnessmap_pars_fragment:PA,shadowmap_pars_fragment:IA,shadowmap_pars_vertex:BA,shadowmap_vertex:zA,shadowmask_pars_fragment:FA,skinbase_vertex:HA,skinning_pars_vertex:GA,skinning_vertex:VA,skinnormal_vertex:kA,specularmap_fragment:XA,specularmap_pars_fragment:WA,tonemapping_fragment:qA,tonemapping_pars_fragment:YA,transmission_fragment:jA,transmission_pars_fragment:ZA,uv_pars_fragment:KA,uv_pars_vertex:QA,uv_vertex:JA,worldpos_vertex:$A,background_vert:tR,background_frag:eR,backgroundCube_vert:nR,backgroundCube_frag:iR,cube_vert:aR,cube_frag:rR,depth_vert:sR,depth_frag:oR,distanceRGBA_vert:lR,distanceRGBA_frag:cR,equirect_vert:uR,equirect_frag:fR,linedashed_vert:dR,linedashed_frag:hR,meshbasic_vert:pR,meshbasic_frag:mR,meshlambert_vert:gR,meshlambert_frag:_R,meshmatcap_vert:vR,meshmatcap_frag:yR,meshnormal_vert:xR,meshnormal_frag:SR,meshphong_vert:MR,meshphong_frag:ER,meshphysical_vert:bR,meshphysical_frag:TR,meshtoon_vert:AR,meshtoon_frag:RR,points_vert:wR,points_frag:CR,shadow_vert:DR,shadow_frag:UR,sprite_vert:LR,sprite_frag:NR},Bt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Hn([Bt.common,Bt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Hn([Bt.lights,Bt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Kc={r:0,b:0,g:0},xr=new ki,OR=new Ye;function PR(a,t,i,s,l,c,f){const d=new Ae(0);let m=c===!0?0:1,h,g,v=null,y=0,S=null;function E(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?i:t).get(A)),A}function b(C){let A=!1;const O=E(C);O===null?_(d,m):O&&O.isColor&&(_(O,1),A=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(C,A){const O=E(A);O&&(O.isCubeTexture||O.mapping===Su)?(g===void 0&&(g=new jn(new _l(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Gs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(A.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(OR.makeRotationFromEuler(xr)),g.material.toneMapped=De.getTransfer(O.colorSpace)!==Ve,(v!==O||y!==O.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,v=O,y=O.version,S=a.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new jn(new Mu(2,2),new Ja({name:"BackgroundMaterial",uniforms:Gs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=De.getTransfer(O.colorSpace)!==Ve,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||y!==O.version||S!==a.toneMapping)&&(h.material.needsUpdate=!0,v=O,y=O.version,S=a.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function _(C,A){C.getRGB(Kc,hy(a)),s.buffers.color.setClear(Kc.r,Kc.g,Kc.b,A,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,A=1){d.set(C),m=A,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,_(d,m)},render:b,addToRenderList:x,dispose:L}}function IR(a,t){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function d(U,z,nt,st,ct){let ft=!1;const F=v(st,nt,z);c!==F&&(c=F,h(c.object)),ft=S(U,st,nt,ct),ft&&E(U,st,nt,ct),ct!==null&&t.update(ct,a.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,A(U,z,nt,st),ct!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return a.createVertexArray()}function h(U){return a.bindVertexArray(U)}function g(U){return a.deleteVertexArray(U)}function v(U,z,nt){const st=nt.wireframe===!0;let ct=s[U.id];ct===void 0&&(ct={},s[U.id]=ct);let ft=ct[z.id];ft===void 0&&(ft={},ct[z.id]=ft);let F=ft[st];return F===void 0&&(F=y(m()),ft[st]=F),F}function y(U){const z=[],nt=[],st=[];for(let ct=0;ct<i;ct++)z[ct]=0,nt[ct]=0,st[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:nt,attributeDivisors:st,object:U,attributes:{},index:null}}function S(U,z,nt,st){const ct=c.attributes,ft=z.attributes;let F=0;const j=nt.getAttributes();for(const W in j)if(j[W].location>=0){const N=ct[W];let $=ft[W];if($===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function E(U,z,nt,st){const ct={},ft=z.attributes;let F=0;const j=nt.getAttributes();for(const W in j)if(j[W].location>=0){let N=ft[W];N===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(N=U.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),ct[W]=$,F++}c.attributes=ct,c.attributesNum=F,c.index=st}function b(){const U=c.newAttributes;for(let z=0,nt=U.length;z<nt;z++)U[z]=0}function x(U){_(U,0)}function _(U,z){const nt=c.newAttributes,st=c.enabledAttributes,ct=c.attributeDivisors;nt[U]=1,st[U]===0&&(a.enableVertexAttribArray(U),st[U]=1),ct[U]!==z&&(a.vertexAttribDivisor(U,z),ct[U]=z)}function L(){const U=c.newAttributes,z=c.enabledAttributes;for(let nt=0,st=z.length;nt<st;nt++)z[nt]!==U[nt]&&(a.disableVertexAttribArray(nt),z[nt]=0)}function C(U,z,nt,st,ct,ft,F){F===!0?a.vertexAttribIPointer(U,z,nt,ct,ft):a.vertexAttribPointer(U,z,nt,st,ct,ft)}function A(U,z,nt,st){b();const ct=st.attributes,ft=nt.getAttributes(),F=z.defaultAttributeValues;for(const j in ft){const W=ft[j];if(W.location>=0){let St=ct[j];if(St===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(St=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(St=U.instanceColor)),St!==void 0){const N=St.normalized,$=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const Mt=_t.buffer,Ct=_t.type,et=_t.bytesPerElement,pt=Ct===a.INT||Ct===a.UNSIGNED_INT||St.gpuType===vp;if(St.isInterleavedBufferAttribute){const Et=St.data,Nt=Et.stride,qt=St.offset;if(Et.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)_(W.location+Vt,Et.meshPerAttribute);U.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)x(W.location+Vt);a.bindBuffer(a.ARRAY_BUFFER,Mt);for(let Vt=0;Vt<W.locationSize;Vt++)C(W.location+Vt,$/W.locationSize,Ct,N,Nt*et,(qt+$/W.locationSize*Vt)*et,pt)}else{if(St.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)_(W.location+Et,St.meshPerAttribute);U.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Et=0;Et<W.locationSize;Et++)x(W.location+Et);a.bindBuffer(a.ARRAY_BUFFER,Mt);for(let Et=0;Et<W.locationSize;Et++)C(W.location+Et,$/W.locationSize,Ct,N,$*et,$/W.locationSize*Et*et,pt)}}else if(F!==void 0){const N=F[j];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(W.location,N);break;case 3:a.vertexAttrib3fv(W.location,N);break;case 4:a.vertexAttrib4fv(W.location,N);break;default:a.vertexAttrib1fv(W.location,N)}}}}L()}function O(){G();for(const U in s){const z=s[U];for(const nt in z){const st=z[nt];for(const ct in st)g(st[ct].object),delete st[ct];delete z[nt]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const z=s[U.id];for(const nt in z){const st=z[nt];for(const ct in st)g(st[ct].object),delete st[ct];delete z[nt]}delete s[U.id]}function I(U){for(const z in s){const nt=s[z];if(nt[U.id]===void 0)continue;const st=nt[U.id];for(const ct in st)g(st[ct].object),delete st[ct];delete nt[U.id]}}function G(){D(),f=!0,c!==l&&(c=l,h(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:D,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:x,disableUnusedAttributes:L}}function BR(a,t,i){let s;function l(h){s=h}function c(h,g){a.drawArrays(s,h,g),i.update(g,s,1)}function f(h,g,v){v!==0&&(a.drawArraysInstanced(s,h,g,v),i.update(g,s,v))}function d(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,s,1)}function m(h,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)f(h[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,g,0,y,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function zR(a,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ri&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const G=I===gl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Vi&&s.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hi&&!G)}function m(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),A=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,B=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:A,vertexTextures:O,maxSamples:B}}function FR(a){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Mr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||l;return l=y,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,_=a.get(v);if(!l||E===null||E.length===0||c&&!x)c?g(null):h();else{const L=c?0:s,C=L*4;let A=_.clippingState||null;m.value=A,A=g(E,y,C,S);for(let O=0;O!==C;++O)A[O]=i[O];_.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,y,S,E){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const _=S+b*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let C=0,A=S;C!==b;++C,A+=4)f.copy(v[C]).applyMatrix4(L,d),f.normal.toArray(x,A),x[A+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function HR(a){let t=new WeakMap;function i(f,d){return d===Dh?f.mapping=zs:d===Uh&&(f.mapping=Fs),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Dh||d===Uh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new IT(m.height);return h.fromEquirectangularTexture(a,f),t.set(f,h),f.addEventListener("dispose",l),i(h.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ns=4,$0=[.125,.215,.35,.446,.526,.582],Tr=20,lh=new yy,tv=new Ae;let ch=null,uh=0,fh=0,dh=!1;const Er=(1+Math.sqrt(5))/2,Cs=1/Er,ev=[new it(-Er,Cs,0),new it(Er,Cs,0),new it(-Cs,0,Er),new it(Cs,0,Er),new it(0,Er,-Cs),new it(0,Er,Cs),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],GR=new it;class nv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=GR}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,t.scissorTest=!1,Qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:gl,format:Ri,colorSpace:Hs,depthBuffer:!1},l=iv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VR(c)),this._blurMaterial=kR(c,t,i)}return l}_compileMaterial(t){const i=new jn(this._lodPlanes[0],t);this._renderer.compile(i,lh)}_sceneToCubeUV(t,i,s,l,c){const m=new mi(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(tv),v.toneMapping=Ka,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new hu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),x=new jn(new _l,b);let _=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,_=!0):(b.color.copy(tv),_=!0);for(let C=0;C<6;C++){const A=C%3;A===0?(m.up.set(0,h[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):A===1?(m.up.set(0,0,h[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,h[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const O=this._cubeSize;Qc(l,A*O,C>2?O:0,O,O),v.setRenderTarget(l),_&&v.render(x,m),v.render(t,m)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===zs||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Qc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,lh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=ev[(l-c-1)%ev.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new jn(this._lodPlanes[l],h),y=h.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),b=c/E,x=isFinite(c)?1+Math.floor(g*b):Tr;x>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Tr}`);const _=[];let L=0;for(let I=0;I<Tr;++I){const G=I/b,D=Math.exp(-G*G/2);_.push(D),I===0?L+=D:I<x&&(L+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/L;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-s;const A=this._sizeLods[l],O=3*A*(l>C-Ns?l-C+Ns:0),B=4*(this._cubeSize-A);Qc(i,O,B,3*A,2*A),m.setRenderTarget(i),m.render(v,lh)}}function VR(a){const t=[],i=[],s=[];let l=a;const c=a-Ns+1+$0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>a-Ns?m=$0[f-a+Ns-1]:f===0&&(m=0),s.push(m);const h=1/(d-2),g=-h,v=1+h,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,b=3,x=2,_=1,L=new Float32Array(b*E*S),C=new Float32Array(x*E*S),A=new Float32Array(_*E*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,G=B>2?0:-1,D=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];L.set(D,b*E*B),C.set(y,x*E*B);const U=[B,B,B,B,B,B];A.set(U,_*E*B)}const O=new Di;O.setAttribute("position",new gi(L,b)),O.setAttribute("uv",new gi(C,x)),O.setAttribute("faceIndex",new gi(A,_)),t.push(O),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function iv(a,t,i){const s=new Lr(a,t,i);return s.texture.mapping=Su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qc(a,t,i,s,l){a.viewport.set(t,i,s,l),a.scissor.set(t,i,s,l)}function kR(a,t,i){const s=new Float32Array(Tr),l=new it(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function av(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function rv(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Cp(){return`

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
	`}function XR(a){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,h=m===Dh||m===Uh,g=m===zs||m===Fs;if(h||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new nv(a)),v=h?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return h&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new nv(a)),v=h?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const h=6;for(let g=0;g<h;g++)d[g]!==void 0&&m++;return m===h}function c(d){const m=d.target;m.removeEventListener("dispose",c);const h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function WR(a){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ps("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function qR(a,t,i,s){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)t.update(y[S],a.ARRAY_BUFFER)}function h(v){const y=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const L=S.array;b=S.version;for(let C=0,A=L.length;C<A;C+=3){const O=L[C+0],B=L[C+1],I=L[C+2];y.push(O,B,B,I,I,O)}}else if(E!==void 0){const L=E.array;b=E.version;for(let C=0,A=L.length/3-1;C<A;C+=3){const O=C+0,B=C+1,I=C+2;y.push(O,B,B,I,I,O)}}else return;const x=new(sy(y)?dy:fy)(y,1);x.version=b;const _=c.get(v);_&&t.remove(_),c.set(v,x)}function g(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function YR(a,t,i){let s;function l(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,S){a.drawElements(s,S,c,y*f),i.update(S,s,1)}function h(y,S,E){E!==0&&(a.drawElementsInstanced(s,S,c,y*f,E),i.update(S,s,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];i.update(x,s,1)}function v(y,S,E,b){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)h(y[_]/f,S[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,b,0,E);let _=0;for(let L=0;L<E;L++)_+=S[L]*b[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function jR(a){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ZR(a,t,i){const s=new WeakMap,l=new rn;function c(f,d,m){const h=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let U=function(){G.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var S=U;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),b===!0&&(A=2),x===!0&&(A=3);let O=d.attributes.position.count*A,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*B*4*v),G=new oy(I,O,B,v);G.type=Hi,G.needsUpdate=!0;const D=A*4;for(let z=0;z<v;z++){const nt=_[z],st=L[z],ct=C[z],ft=O*B*4*z;for(let F=0;F<nt.count;F++){const j=F*D;E===!0&&(l.fromBufferAttribute(nt,F),I[ft+j+0]=l.x,I[ft+j+1]=l.y,I[ft+j+2]=l.z,I[ft+j+3]=0),b===!0&&(l.fromBufferAttribute(st,F),I[ft+j+4]=l.x,I[ft+j+5]=l.y,I[ft+j+6]=l.z,I[ft+j+7]=0),x===!0&&(l.fromBufferAttribute(ct,F),I[ft+j+8]=l.x,I[ft+j+9]=l.y,I[ft+j+10]=l.z,I[ft+j+11]=ct.itemSize===4?l.w:1)}}y={count:v,texture:G,size:new Ue(O,B)},s.set(d,y),d.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:c}}function KR(a,t,i,s){let l=new WeakMap;function c(m){const h=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==h&&(t.update(v),l.set(v,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==h&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,h))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==h&&(y.update(),l.set(y,h))}return v}function f(){l=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:c,dispose:f}}const Sy=new Vn,sv=new _y(1,1),My=new oy,Ey=new yT,by=new my,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Ks(a,t,i){const s=a[0];if(s<=0||s>0)return a;const l=t*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,a[f].toArray(c,d)}return c}function _n(a,t){if(a.length!==t.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==t[i])return!1;return!0}function vn(a,t){for(let i=0,s=t.length;i<s;i++)a[i]=t[i]}function Eu(a,t){let i=lv[t];i===void 0&&(i=new Int32Array(t),lv[t]=i);for(let s=0;s!==t;++s)i[s]=a.allocateTextureUnit();return i}function QR(a,t){const i=this.cache;i[0]!==t&&(a.uniform1f(this.addr,t),i[0]=t)}function JR(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;a.uniform2fv(this.addr,t),vn(i,t)}}function $R(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;a.uniform3fv(this.addr,t),vn(i,t)}}function tw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;a.uniform4fv(this.addr,t),vn(i,t)}}function ew(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;a.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;fv.set(s),a.uniformMatrix2fv(this.addr,!1,fv),vn(i,s)}}function nw(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;a.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;uv.set(s),a.uniformMatrix3fv(this.addr,!1,uv),vn(i,s)}}function iw(a,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;a.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;cv.set(s),a.uniformMatrix4fv(this.addr,!1,cv),vn(i,s)}}function aw(a,t){const i=this.cache;i[0]!==t&&(a.uniform1i(this.addr,t),i[0]=t)}function rw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;a.uniform2iv(this.addr,t),vn(i,t)}}function sw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;a.uniform3iv(this.addr,t),vn(i,t)}}function ow(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;a.uniform4iv(this.addr,t),vn(i,t)}}function lw(a,t){const i=this.cache;i[0]!==t&&(a.uniform1ui(this.addr,t),i[0]=t)}function cw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;a.uniform2uiv(this.addr,t),vn(i,t)}}function uw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;a.uniform3uiv(this.addr,t),vn(i,t)}}function fw(a,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;a.uniform4uiv(this.addr,t),vn(i,t)}}function dw(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(sv.compareFunction=ry,c=sv):c=Sy,i.setTexture2D(t||c,l)}function hw(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ey,l)}function pw(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||by,l)}function mw(a,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||My,l)}function gw(a){switch(a){case 5126:return QR;case 35664:return JR;case 35665:return $R;case 35666:return tw;case 35674:return ew;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return aw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function _w(a,t){a.uniform1fv(this.addr,t)}function vw(a,t){const i=Ks(t,this.size,2);a.uniform2fv(this.addr,i)}function yw(a,t){const i=Ks(t,this.size,3);a.uniform3fv(this.addr,i)}function xw(a,t){const i=Ks(t,this.size,4);a.uniform4fv(this.addr,i)}function Sw(a,t){const i=Ks(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function Mw(a,t){const i=Ks(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function Ew(a,t){const i=Ks(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function bw(a,t){a.uniform1iv(this.addr,t)}function Tw(a,t){a.uniform2iv(this.addr,t)}function Aw(a,t){a.uniform3iv(this.addr,t)}function Rw(a,t){a.uniform4iv(this.addr,t)}function ww(a,t){a.uniform1uiv(this.addr,t)}function Cw(a,t){a.uniform2uiv(this.addr,t)}function Dw(a,t){a.uniform3uiv(this.addr,t)}function Uw(a,t){a.uniform4uiv(this.addr,t)}function Lw(a,t,i){const s=this.cache,l=t.length,c=Eu(i,l);_n(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Sy,c[f])}function Nw(a,t,i){const s=this.cache,l=t.length,c=Eu(i,l);_n(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ey,c[f])}function Ow(a,t,i){const s=this.cache,l=t.length,c=Eu(i,l);_n(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||by,c[f])}function Pw(a,t,i){const s=this.cache,l=t.length,c=Eu(i,l);_n(s,c)||(a.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||My,c[f])}function Iw(a){switch(a){case 5126:return _w;case 35664:return vw;case 35665:return yw;case 35666:return xw;case 35674:return Sw;case 35675:return Mw;case 35676:return Ew;case 5124:case 35670:return bw;case 35667:case 35671:return Tw;case 35668:case 35672:return Aw;case 35669:case 35673:return Rw;case 5125:return ww;case 36294:return Cw;case 36295:return Dw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Pw}}class Bw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=gw(i.type)}}class zw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Iw(i.type)}}class Fw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function dv(a,t){a.seq.push(t),a.map[t.id]=t}function Hw(a,t,i){const s=a.name,l=s.length;for(hh.lastIndex=0;;){const c=hh.exec(s),f=hh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&f+2===l){dv(i,h===void 0?new Bw(d,a,t):new zw(d,a,t));break}else{let v=i.map[d];v===void 0&&(v=new Fw(d),dv(i,v)),i=v}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);Hw(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function hv(a,t,i){const s=a.createShader(t);return a.shaderSource(s,i),a.compileShader(s),s}const Gw=37297;let Vw=0;function kw(a,t){const i=a.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const pv=new fe;function Xw(a){De._getMatrix(pv,De.workingColorSpace,a);const t=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(a)){case uu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function mv(a,t,i){const s=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+kw(a.getShaderSource(t),d)}else return c}function Ww(a,t){const i=Xw(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qw(a,t){let i;switch(t){case Lb:i="Linear";break;case Nb:i="Reinhard";break;case Ob:i="Cineon";break;case Pb:i="ACESFilmic";break;case Bb:i="AgX";break;case zb:i="Neutral";break;case Ib:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new it;function Yw(){De.getLuminanceCoefficients(Jc);const a=Jc.x.toFixed(4),t=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function Zw(a){const t=[];for(const i in a){const s=a[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Kw(a,t){const i={},s=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(t,l),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:d}}return i}function tl(a){return a!==""}function gv(a,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _v(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(a){return a.replace(Qw,$w)}const Jw=new Map;function $w(a,t){let i=pe[t];if(i===void 0){const s=Jw.get(t);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return op(i)}const tC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(a){return a.replace(tC,eC)}function eC(a,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yv(a){let t=`precision ${a.precision} float;
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
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nC(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===jv?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===fb?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function iC(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zs:case Fs:t="ENVMAP_TYPE_CUBE";break;case Su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aC(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function rC(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Zv:t="ENVMAP_BLENDING_MULTIPLY";break;case Db:t="ENVMAP_BLENDING_MIX";break;case Ub:t="ENVMAP_BLENDING_ADD";break}return t}function sC(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oC(a,t,i,s){const l=a.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=nC(i),h=iC(i),g=aC(i),v=rC(i),y=sC(i),S=jw(i),E=Zw(c),b=l.createProgram();let x,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(tl).join(`
`),_.length>0&&(_+=`
`)):(x=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),_=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ka?qw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Ww("linearToOutputTexel",i.outputColorSpace),Yw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),f=op(f),f=gv(f,i),f=_v(f,i),d=op(d),d=gv(d,i),d=_v(d,i),f=vv(f),d=vv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=L+x+f,A=L+_+d,O=hv(l,l.VERTEX_SHADER,C),B=hv(l,l.FRAGMENT_SHADER,A);l.attachShader(b,O),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(z){if(a.debug.checkShaderErrors){const nt=l.getProgramInfoLog(b)||"",st=l.getShaderInfoLog(O)||"",ct=l.getShaderInfoLog(B)||"",ft=nt.trim(),F=st.trim(),j=ct.trim();let W=!0,St=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,O,B);else{const N=mv(l,O,"vertex"),$=mv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ft+`
`+N+`
`+$)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(F===""||j==="")&&(St=!1);St&&(z.diagnostics={runnable:W,programLog:ft,vertexShader:{log:F,prefix:x},fragmentShader:{log:j,prefix:_}})}l.deleteShader(O),l.deleteShader(B),G=new ou(l,b),D=Kw(l,b)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(b,Gw)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Vw++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=O,this.fragmentShader=B,this}let lC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uC(t),i.set(t,s)),s}}class uC{constructor(t){this.id=lC++,this.code=t,this.usedTimes=0}}function fC(a,t,i,s,l,c,f){const d=new cy,m=new cC,h=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return h.add(D),D===0?"uv":`uv${D}`}function x(D,U,z,nt,st){const ct=nt.fog,ft=st.geometry,F=D.isMeshStandardMaterial?nt.environment:null,j=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),W=j&&j.mapping===Su?j.image.height:null,St=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,$=N!==void 0?N.length:0;let _t=0;ft.morphAttributes.position!==void 0&&(_t=1),ft.morphAttributes.normal!==void 0&&(_t=2),ft.morphAttributes.color!==void 0&&(_t=3);let Mt,Ct,et,pt;if(St){const Te=zi[St];Mt=Te.vertexShader,Ct=Te.fragmentShader}else Mt=D.vertexShader,Ct=D.fragmentShader,m.update(D),et=m.getVertexShaderID(D),pt=m.getFragmentShaderID(D);const Et=a.getRenderTarget(),Nt=a.state.buffers.depth.getReversed(),qt=st.isInstancedMesh===!0,Vt=st.isBatchedMesh===!0,Ee=!!D.map,me=!!D.matcap,V=!!j,Re=!!D.aoMap,Qt=!!D.lightMap,Se=!!D.bumpMap,Ht=!!D.normalMap,ee=!!D.displacementMap,bt=!!D.emissiveMap,ne=!!D.metalnessMap,Oe=!!D.roughnessMap,Le=D.anisotropy>0,P=D.clearcoat>0,T=D.dispersion>0,Q=D.iridescence>0,dt=D.sheen>0,vt=D.transmission>0,ut=Le&&!!D.anisotropyMap,zt=P&&!!D.clearcoatMap,Dt=P&&!!D.clearcoatNormalMap,Yt=P&&!!D.clearcoatRoughnessMap,Zt=Q&&!!D.iridescenceMap,Tt=Q&&!!D.iridescenceThicknessMap,Pt=dt&&!!D.sheenColorMap,Jt=dt&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Lt=!!D.specularColorMap,ce=!!D.specularIntensityMap,X=vt&&!!D.transmissionMap,wt=vt&&!!D.thicknessMap,Ut=!!D.gradientMap,Ft=!!D.alphaMap,At=D.alphaTest>0,xt=!!D.alphaHash,Xt=!!D.extensions;let oe=Ka;D.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(oe=a.toneMapping);const Pe={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Ct,defines:D.defines,customVertexShaderID:et,customFragmentShaderID:pt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Vt,batchingColor:Vt&&st._colorsTexture!==null,instancing:qt,instancingColor:qt&&st.instanceColor!==null,instancingMorph:qt&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Et===null?a.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Hs,alphaToCoverage:!!D.alphaToCoverage,map:Ee,matcap:me,envMap:V,envMapMode:V&&j.mapping,envMapCubeUVHeight:W,aoMap:Re,lightMap:Qt,bumpMap:Se,normalMap:Ht,displacementMap:y&&ee,emissiveMap:bt,normalMapObjectSpace:Ht&&D.normalMapType===Vb,normalMapTangentSpace:Ht&&D.normalMapType===ay,metalnessMap:ne,roughnessMap:Oe,anisotropy:Le,anisotropyMap:ut,clearcoat:P,clearcoatMap:zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Yt,dispersion:T,iridescence:Q,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Pt,sheenRoughnessMap:Jt,specularMap:Wt,specularColorMap:Lt,specularIntensityMap:ce,transmission:vt,transmissionMap:X,thicknessMap:wt,gradientMap:Ut,opaque:D.transparent===!1&&D.blending===Os&&D.alphaToCoverage===!1,alphaMap:Ft,alphaTest:At,alphaHash:xt,combine:D.combine,mapUv:Ee&&b(D.map.channel),aoMapUv:Re&&b(D.aoMap.channel),lightMapUv:Qt&&b(D.lightMap.channel),bumpMapUv:Se&&b(D.bumpMap.channel),normalMapUv:Ht&&b(D.normalMap.channel),displacementMapUv:ee&&b(D.displacementMap.channel),emissiveMapUv:bt&&b(D.emissiveMap.channel),metalnessMapUv:ne&&b(D.metalnessMap.channel),roughnessMapUv:Oe&&b(D.roughnessMap.channel),anisotropyMapUv:ut&&b(D.anisotropyMap.channel),clearcoatMapUv:zt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&b(D.sheenRoughnessMap.channel),specularMapUv:Wt&&b(D.specularMap.channel),specularColorMapUv:Lt&&b(D.specularColorMap.channel),specularIntensityMapUv:ce&&b(D.specularIntensityMap.channel),transmissionMapUv:X&&b(D.transmissionMap.channel),thicknessMapUv:wt&&b(D.thicknessMap.channel),alphaMapUv:Ft&&b(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ht||Le),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(Ee||Ft),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Nt,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:_t,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ee&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ve,decodeVideoTextureEmissive:bt&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ve,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ha,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&D.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pe.vertexUv1s=h.has(1),Pe.vertexUv2s=h.has(2),Pe.vertexUv3s=h.has(3),h.clear(),Pe}function _(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const z in D.defines)U.push(z),U.push(D.defines[z]);return D.isRawShaderMaterial===!1&&(L(U,D),C(U,D),U.push(a.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function L(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function C(D,U){d.disableAll(),U.supportsVertexTextures&&d.enable(0),U.instancing&&d.enable(1),U.instancingColor&&d.enable(2),U.instancingMorph&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),U.dispersion&&d.enable(20),U.batchingColor&&d.enable(21),U.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),D.push(d.mask)}function A(D){const U=E[D.type];let z;if(U){const nt=zi[U];z=LT.clone(nt.uniforms)}else z=D.uniforms;return z}function O(D,U){let z;for(let nt=0,st=g.length;nt<st;nt++){const ct=g[nt];if(ct.cacheKey===U){z=ct,++z.usedTimes;break}}return z===void 0&&(z=new oC(a,U,D,c),g.push(z)),z}function B(D){if(--D.usedTimes===0){const U=g.indexOf(D);g[U]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function G(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:O,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:G}}function dC(){let a=new WeakMap;function t(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,m){a.get(f)[d]=m}function c(){a=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function hC(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function xv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Sv(){const a=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v,y,S,E,b,x){let _=a[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:x},a[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=x),t++,_}function d(v,y,S,E,b,x){const _=f(v,y,S,E,b,x);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,y,S,E,b,x){const _=f(v,y,S,E,b,x);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function h(v,y){i.length>1&&i.sort(v||hC),s.length>1&&s.sort(y||xv),l.length>1&&l.sort(y||xv)}function g(){for(let v=t,y=a.length;v<y;v++){const S=a[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:h}}function pC(){let a=new WeakMap;function t(s,l){const c=a.get(s);let f;return c===void 0?(f=new Sv,a.set(s,[f])):l>=c.length?(f=new Sv,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:t,dispose:i}}function mC(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new Ae};break;case"SpotLight":i={position:new it,direction:new it,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new it,halfWidth:new it,halfHeight:new it};break}return a[t.id]=i,i}}}function gC(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=i,i}}}let _C=0;function vC(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function yC(a){const t=new mC,i=gC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new it);const l=new it,c=new Ye,f=new Ye;function d(h){let g=0,v=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,b=0,x=0,_=0,L=0,C=0,A=0,O=0,B=0,I=0;h.sort(vC);for(let D=0,U=h.length;D<U;D++){const z=h[D],nt=z.color,st=z.intensity,ct=z.distance,ft=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=nt.r*st,v+=nt.g*st,y+=nt.b*st;else if(z.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(z.sh.coefficients[F],st);I++}else if(z.isDirectionalLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,W=i.get(z);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=z.shadow.matrix,L++}s.directional[S]=F,S++}else if(z.isSpotLight){const F=t.get(z);F.position.setFromMatrixPosition(z.matrixWorld),F.color.copy(nt).multiplyScalar(st),F.distance=ct,F.coneCos=Math.cos(z.angle),F.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),F.decay=z.decay,s.spot[b]=F;const j=z.shadow;if(z.map&&(s.spotLightMap[O]=z.map,O++,j.updateMatrices(z),z.castShadow&&B++),s.spotLightMatrix[b]=j.matrix,z.castShadow){const W=i.get(z);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=ft,A++}b++}else if(z.isRectAreaLight){const F=t.get(z);F.color.copy(nt).multiplyScalar(st),F.halfWidth.set(z.width*.5,0,0),F.halfHeight.set(0,z.height*.5,0),s.rectArea[x]=F,x++}else if(z.isPointLight){const F=t.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity),F.distance=z.distance,F.decay=z.decay,z.castShadow){const j=z.shadow,W=i.get(z);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=z.shadow.matrix,C++}s.point[E]=F,E++}else if(z.isHemisphereLight){const F=t.get(z);F.skyColor.copy(z.color).multiplyScalar(st),F.groundColor.copy(z.groundColor).multiplyScalar(st),s.hemi[_]=F,_++}}x>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const G=s.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==b||G.rectAreaLength!==x||G.hemiLength!==_||G.numDirectionalShadows!==L||G.numPointShadows!==C||G.numSpotShadows!==A||G.numSpotMaps!==O||G.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=x,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+O-B,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,G.directionalLength=S,G.pointLength=E,G.spotLength=b,G.rectAreaLength=x,G.hemiLength=_,G.numDirectionalShadows=L,G.numPointShadows=C,G.numSpotShadows=A,G.numSpotMaps=O,G.numLightProbes=I,s.version=_C++)}function m(h,g){let v=0,y=0,S=0,E=0,b=0;const x=g.matrixWorldInverse;for(let _=0,L=h.length;_<L;_++){const C=h[_];if(C.isDirectionalLight){const A=s.directional[v];A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(x),v++}else if(C.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(x),S++}else if(C.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(x),f.identity(),c.copy(C.matrixWorld),c.premultiply(x),f.extractRotation(c),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(f),A.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const A=s.hemi[b];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(x),b++}}}return{setup:d,setupView:m,state:s}}function Mv(a){const t=new yC(a),i=[],s=[];function l(g){h.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function xC(a){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Mv(a),t.set(l,[d])):c>=f.length?(d=new Mv(a),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MC=`uniform sampler2D shadow_pass;
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
}`;function EC(a,t,i){let s=new Rp;const l=new Ue,c=new Ue,f=new rn,d=new WT({depthPacking:Gb}),m=new qT,h={},g=i.maxTextureSize,v={[Qa]:Pn,[Pn]:Qa,[ha]:ha},y=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:SC,fragmentShader:MC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new jn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let _=this.type;this.render=function(B,I,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const D=a.getRenderTarget(),U=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),nt=a.state;nt.setBlending(Za),nt.buffers.depth.getReversed()?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const st=_!==fa&&this.type===fa,ct=_===fa&&this.type!==fa;for(let ft=0,F=B.length;ft<F;ft++){const j=B[ft],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,W.mapSize.y=c.y)),W.map===null||st===!0||ct===!0){const $=this.type!==fa?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new Lr(l.x,l.y,$),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const N=W.getViewportCount();for(let $=0;$<N;$++){const _t=W.getViewport($);f.set(c.x*_t.x,c.y*_t.y,c.x*_t.z,c.y*_t.w),nt.viewport(f),W.updateMatrices(j,$),s=W.getFrustum(),A(I,G,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===fa&&L(W,G),W.needsUpdate=!1}_=this.type,x.needsUpdate=!1,a.setRenderTarget(D,U,z)};function L(B,I){const G=t.update(b);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Lr(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(I,null,G,y,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(I,null,G,S,b,null)}function C(B,I,G,D){let U=null;const z=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)U=z;else if(U=G.isPointLight===!0?m:d,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const nt=U.uuid,st=I.uuid;let ct=h[nt];ct===void 0&&(ct={},h[nt]=ct);let ft=ct[st];ft===void 0&&(ft=U.clone(),ct[st]=ft,I.addEventListener("dispose",O)),U=ft}if(U.visible=I.visible,U.wireframe=I.wireframe,D===fa?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:v[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,G.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const nt=a.properties.get(U);nt.light=G}return U}function A(B,I,G,D,U){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===fa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const st=t.update(B),ct=B.material;if(Array.isArray(ct)){const ft=st.groups;for(let F=0,j=ft.length;F<j;F++){const W=ft[F],St=ct[W.materialIndex];if(St&&St.visible){const N=C(B,St,D,U);B.onBeforeShadow(a,B,I,G,st,N,W),a.renderBufferDirect(G,null,st,N,B,W),B.onAfterShadow(a,B,I,G,st,N,W)}}}else if(ct.visible){const ft=C(B,ct,D,U);B.onBeforeShadow(a,B,I,G,st,ft,null),a.renderBufferDirect(G,null,st,ft,B,null),B.onAfterShadow(a,B,I,G,st,ft,null)}}const nt=B.children;for(let st=0,ct=nt.length;st<ct;st++)A(nt[st],I,G,D,U)}function O(B){B.target.removeEventListener("dispose",O);for(const G in h){const D=h[G],U=B.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}const bC={[Eh]:bh,[Th]:wh,[Ah]:Ch,[Bs]:Rh,[bh]:Eh,[wh]:Th,[Ch]:Ah,[Rh]:Bs};function TC(a,t){function i(){let X=!1;const wt=new rn;let Ut=null;const Ft=new rn(0,0,0,0);return{setMask:function(At){Ut!==At&&!X&&(a.colorMask(At,At,At,At),Ut=At)},setLocked:function(At){X=At},setClear:function(At,xt,Xt,oe,Pe){Pe===!0&&(At*=oe,xt*=oe,Xt*=oe),wt.set(At,xt,Xt,oe),Ft.equals(wt)===!1&&(a.clearColor(At,xt,Xt,oe),Ft.copy(wt))},reset:function(){X=!1,Ut=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,wt=!1,Ut=null,Ft=null,At=null;return{setReversed:function(xt){if(wt!==xt){const Xt=t.get("EXT_clip_control");xt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const oe=At;At=null,this.setClear(oe)}},getReversed:function(){return wt},setTest:function(xt){xt?Et(a.DEPTH_TEST):Nt(a.DEPTH_TEST)},setMask:function(xt){Ut!==xt&&!X&&(a.depthMask(xt),Ut=xt)},setFunc:function(xt){if(wt&&(xt=bC[xt]),Ft!==xt){switch(xt){case Eh:a.depthFunc(a.NEVER);break;case bh:a.depthFunc(a.ALWAYS);break;case Th:a.depthFunc(a.LESS);break;case Bs:a.depthFunc(a.LEQUAL);break;case Ah:a.depthFunc(a.EQUAL);break;case Rh:a.depthFunc(a.GEQUAL);break;case wh:a.depthFunc(a.GREATER);break;case Ch:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ft=xt}},setLocked:function(xt){X=xt},setClear:function(xt){At!==xt&&(wt&&(xt=1-xt),a.clearDepth(xt),At=xt)},reset:function(){X=!1,Ut=null,Ft=null,At=null,wt=!1}}}function l(){let X=!1,wt=null,Ut=null,Ft=null,At=null,xt=null,Xt=null,oe=null,Pe=null;return{setTest:function(Te){X||(Te?Et(a.STENCIL_TEST):Nt(a.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!X&&(a.stencilMask(Te),wt=Te)},setFunc:function(Te,vi,dn){(Ut!==Te||Ft!==vi||At!==dn)&&(a.stencilFunc(Te,vi,dn),Ut=Te,Ft=vi,At=dn)},setOp:function(Te,vi,dn){(xt!==Te||Xt!==vi||oe!==dn)&&(a.stencilOp(Te,vi,dn),xt=Te,Xt=vi,oe=dn)},setLocked:function(Te){X=Te},setClear:function(Te){Pe!==Te&&(a.clearStencil(Te),Pe=Te)},reset:function(){X=!1,wt=null,Ut=null,Ft=null,At=null,xt=null,Xt=null,oe=null,Pe=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,h=new WeakMap;let g={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,_=null,L=null,C=null,A=null,O=null,B=null,I=new Ae(0,0,0),G=0,D=!1,U=null,z=null,nt=null,st=null,ct=null;const ft=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=j>=2);let St=null,N={};const $=a.getParameter(a.SCISSOR_BOX),_t=a.getParameter(a.VIEWPORT),Mt=new rn().fromArray($),Ct=new rn().fromArray(_t);function et(X,wt,Ut,Ft){const At=new Uint8Array(4),xt=a.createTexture();a.bindTexture(X,xt),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xt=0;Xt<Ut;Xt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(wt,0,a.RGBA,1,1,Ft,0,a.RGBA,a.UNSIGNED_BYTE,At):a.texImage2D(wt+Xt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,At);return xt}const pt={};pt[a.TEXTURE_2D]=et(a.TEXTURE_2D,a.TEXTURE_2D,1),pt[a.TEXTURE_CUBE_MAP]=et(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[a.TEXTURE_2D_ARRAY]=et(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pt[a.TEXTURE_3D]=et(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(a.DEPTH_TEST),f.setFunc(Bs),Se(!1),Ht(v0),Et(a.CULL_FACE),Re(Za);function Et(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Nt(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function qt(X,wt){return v[X]!==wt?(a.bindFramebuffer(X,wt),v[X]=wt,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=wt),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=wt),!0):!1}function Vt(X,wt){let Ut=S,Ft=!1;if(X){Ut=y.get(wt),Ut===void 0&&(Ut=[],y.set(wt,Ut));const At=X.textures;if(Ut.length!==At.length||Ut[0]!==a.COLOR_ATTACHMENT0){for(let xt=0,Xt=At.length;xt<Xt;xt++)Ut[xt]=a.COLOR_ATTACHMENT0+xt;Ut.length=At.length,Ft=!0}}else Ut[0]!==a.BACK&&(Ut[0]=a.BACK,Ft=!0);Ft&&a.drawBuffers(Ut)}function Ee(X){return E!==X?(a.useProgram(X),E=X,!0):!1}const me={[br]:a.FUNC_ADD,[hb]:a.FUNC_SUBTRACT,[pb]:a.FUNC_REVERSE_SUBTRACT};me[mb]=a.MIN,me[gb]=a.MAX;const V={[_b]:a.ZERO,[vb]:a.ONE,[yb]:a.SRC_COLOR,[Sh]:a.SRC_ALPHA,[Tb]:a.SRC_ALPHA_SATURATE,[Eb]:a.DST_COLOR,[Sb]:a.DST_ALPHA,[xb]:a.ONE_MINUS_SRC_COLOR,[Mh]:a.ONE_MINUS_SRC_ALPHA,[bb]:a.ONE_MINUS_DST_COLOR,[Mb]:a.ONE_MINUS_DST_ALPHA,[Ab]:a.CONSTANT_COLOR,[Rb]:a.ONE_MINUS_CONSTANT_COLOR,[wb]:a.CONSTANT_ALPHA,[Cb]:a.ONE_MINUS_CONSTANT_ALPHA};function Re(X,wt,Ut,Ft,At,xt,Xt,oe,Pe,Te){if(X===Za){b===!0&&(Nt(a.BLEND),b=!1);return}if(b===!1&&(Et(a.BLEND),b=!0),X!==db){if(X!==x||Te!==D){if((_!==br||A!==br)&&(a.blendEquation(a.FUNC_ADD),_=br,A=br),Te)switch(X){case Os:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cu:a.blendFunc(a.ONE,a.ONE);break;case y0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case x0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Os:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case y0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,C=null,O=null,B=null,I.set(0,0,0),G=0,x=X,D=Te}return}At=At||wt,xt=xt||Ut,Xt=Xt||Ft,(wt!==_||At!==A)&&(a.blendEquationSeparate(me[wt],me[At]),_=wt,A=At),(Ut!==L||Ft!==C||xt!==O||Xt!==B)&&(a.blendFuncSeparate(V[Ut],V[Ft],V[xt],V[Xt]),L=Ut,C=Ft,O=xt,B=Xt),(oe.equals(I)===!1||Pe!==G)&&(a.blendColor(oe.r,oe.g,oe.b,Pe),I.copy(oe),G=Pe),x=X,D=!1}function Qt(X,wt){X.side===ha?Nt(a.CULL_FACE):Et(a.CULL_FACE);let Ut=X.side===Pn;wt&&(Ut=!Ut),Se(Ut),X.blending===Os&&X.transparent===!1?Re(Za):Re(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(a.SAMPLE_ALPHA_TO_COVERAGE):Nt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){U!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),U=X)}function Ht(X){X!==cb?(Et(a.CULL_FACE),X!==z&&(X===v0?a.cullFace(a.BACK):X===ub?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Nt(a.CULL_FACE),z=X}function ee(X){X!==nt&&(F&&a.lineWidth(X),nt=X)}function bt(X,wt,Ut){X?(Et(a.POLYGON_OFFSET_FILL),(st!==wt||ct!==Ut)&&(a.polygonOffset(wt,Ut),st=wt,ct=Ut)):Nt(a.POLYGON_OFFSET_FILL)}function ne(X){X?Et(a.SCISSOR_TEST):Nt(a.SCISSOR_TEST)}function Oe(X){X===void 0&&(X=a.TEXTURE0+ft-1),St!==X&&(a.activeTexture(X),St=X)}function Le(X,wt,Ut){Ut===void 0&&(St===null?Ut=a.TEXTURE0+ft-1:Ut=St);let Ft=N[Ut];Ft===void 0&&(Ft={type:void 0,texture:void 0},N[Ut]=Ft),(Ft.type!==X||Ft.texture!==wt)&&(St!==Ut&&(a.activeTexture(Ut),St=Ut),a.bindTexture(X,wt||pt[X]),Ft.type=X,Ft.texture=wt)}function P(){const X=N[St];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(X){Mt.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function Jt(X){Ct.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function Wt(X,wt){let Ut=h.get(wt);Ut===void 0&&(Ut=new WeakMap,h.set(wt,Ut));let Ft=Ut.get(X);Ft===void 0&&(Ft=a.getUniformBlockIndex(wt,X.name),Ut.set(X,Ft))}function Lt(X,wt){const Ft=h.get(wt).get(X);m.get(wt)!==Ft&&(a.uniformBlockBinding(wt,Ft,X.__bindingPointIndex),m.set(wt,Ft))}function ce(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},St=null,N={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,_=null,L=null,C=null,A=null,O=null,B=null,I=new Ae(0,0,0),G=0,D=!1,U=null,z=null,nt=null,st=null,ct=null,Mt.set(0,0,a.canvas.width,a.canvas.height),Ct.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:Nt,bindFramebuffer:qt,drawBuffers:Vt,useProgram:Ee,setBlending:Re,setMaterial:Qt,setFlipSided:Se,setCullFace:Ht,setLineWidth:ee,setPolygonOffset:bt,setScissorTest:ne,activeTexture:Oe,bindTexture:Le,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:Wt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Pt,viewport:Jt,reset:ce}}function AC(a,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ue,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):du("canvas")}function b(P,T,Q){let dt=1;const vt=Le(P);if((vt.width>Q||vt.height>Q)&&(dt=Q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(dt*vt.width),zt=Math.floor(dt*vt.height);v===void 0&&(v=E(ut,zt));const Dt=T?E(ut,zt):v;return Dt.width=ut,Dt.height=zt,Dt.getContext("2d").drawImage(P,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+zt+")."),Dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){a.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(P,T,Q,dt,vt=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=T;if(T===a.RED&&(Q===a.FLOAT&&(ut=a.R32F),Q===a.HALF_FLOAT&&(ut=a.R16F),Q===a.UNSIGNED_BYTE&&(ut=a.R8)),T===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ut=a.R8UI),Q===a.UNSIGNED_SHORT&&(ut=a.R16UI),Q===a.UNSIGNED_INT&&(ut=a.R32UI),Q===a.BYTE&&(ut=a.R8I),Q===a.SHORT&&(ut=a.R16I),Q===a.INT&&(ut=a.R32I)),T===a.RG&&(Q===a.FLOAT&&(ut=a.RG32F),Q===a.HALF_FLOAT&&(ut=a.RG16F),Q===a.UNSIGNED_BYTE&&(ut=a.RG8)),T===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ut=a.RG8UI),Q===a.UNSIGNED_SHORT&&(ut=a.RG16UI),Q===a.UNSIGNED_INT&&(ut=a.RG32UI),Q===a.BYTE&&(ut=a.RG8I),Q===a.SHORT&&(ut=a.RG16I),Q===a.INT&&(ut=a.RG32I)),T===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ut=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(ut=a.RGB16UI),Q===a.UNSIGNED_INT&&(ut=a.RGB32UI),Q===a.BYTE&&(ut=a.RGB8I),Q===a.SHORT&&(ut=a.RGB16I),Q===a.INT&&(ut=a.RGB32I)),T===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(ut=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(ut=a.RGBA16UI),Q===a.UNSIGNED_INT&&(ut=a.RGBA32UI),Q===a.BYTE&&(ut=a.RGBA8I),Q===a.SHORT&&(ut=a.RGBA16I),Q===a.INT&&(ut=a.RGBA32I)),T===a.RGB&&Q===a.UNSIGNED_INT_5_9_9_9_REV&&(ut=a.RGB9_E5),T===a.RGBA){const zt=vt?uu:De.getTransfer(dt);Q===a.FLOAT&&(ut=a.RGBA32F),Q===a.HALF_FLOAT&&(ut=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(ut=zt===Ve?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT_4_4_4_4&&(ut=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(ut=a.RGB5_A1)}return(ut===a.R16F||ut===a.R32F||ut===a.RG16F||ut===a.RG32F||ut===a.RGBA16F||ut===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function A(P,T){let Q;return P?T===null||T===Ur||T===ll?Q=a.DEPTH24_STENCIL8:T===Hi?Q=a.DEPTH32F_STENCIL8:T===ol&&(Q=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ur||T===ll?Q=a.DEPTH_COMPONENT24:T===Hi?Q=a.DEPTH_COMPONENT32F:T===ol&&(Q=a.DEPTH_COMPONENT16),Q}function O(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==ri&&P.minFilter!==Fi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),G(T),T.isVideoTexture&&g.delete(T)}function I(P){const T=P.target;T.removeEventListener("dispose",I),U(T)}function G(P){const T=s.get(P);if(T.__webglInit===void 0)return;const Q=P.source,dt=y.get(Q);if(dt){const vt=dt[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(P),Object.keys(dt).length===0&&y.delete(Q)}s.remove(P)}function D(P){const T=s.get(P);a.deleteTexture(T.__webglTexture);const Q=P.source,dt=y.get(Q);delete dt[T.__cacheKey],f.memory.textures--}function U(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let vt=0;vt<T.__webglFramebuffer[dt].length;vt++)a.deleteFramebuffer(T.__webglFramebuffer[dt][vt]);else a.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)a.deleteFramebuffer(T.__webglFramebuffer[dt]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=P.textures;for(let dt=0,vt=Q.length;dt<vt;dt++){const ut=s.get(Q[dt]);ut.__webglTexture&&(a.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(Q[dt])}s.remove(P)}let z=0;function nt(){z=0}function st(){const P=z;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),z+=1,P}function ct(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ft(P,T){const Q=s.get(P);if(P.isVideoTexture&&ne(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const dt=P.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Q,P,T);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+T)}function F(P,T){const Q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){pt(Q,P,T);return}i.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+T)}function j(P,T){const Q=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){pt(Q,P,T);return}i.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+T)}function W(P,T){const Q=s.get(P);if(P.version>0&&Q.__version!==P.version){Et(Q,P,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+T)}const St={[Lh]:a.REPEAT,[Ar]:a.CLAMP_TO_EDGE,[Nh]:a.MIRRORED_REPEAT},N={[ri]:a.NEAREST,[Fb]:a.NEAREST_MIPMAP_NEAREST,[Cc]:a.NEAREST_MIPMAP_LINEAR,[Fi]:a.LINEAR,[Bd]:a.LINEAR_MIPMAP_NEAREST,[Rr]:a.LINEAR_MIPMAP_LINEAR},$={[kb]:a.NEVER,[Zb]:a.ALWAYS,[Xb]:a.LESS,[ry]:a.LEQUAL,[Wb]:a.EQUAL,[jb]:a.GEQUAL,[qb]:a.GREATER,[Yb]:a.NOTEQUAL};function _t(P,T){if(T.type===Hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Fi||T.magFilter===Bd||T.magFilter===Cc||T.magFilter===Rr||T.minFilter===Fi||T.minFilter===Bd||T.minFilter===Cc||T.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,St[T.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,St[T.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,St[T.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,N[T.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==Cc&&T.minFilter!==Rr||T.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");a.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(P,T){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const dt=T.source;let vt=y.get(dt);vt===void 0&&(vt={},y.set(dt,vt));const ut=ct(T);if(ut!==P.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),vt[ut].usedTimes++;const zt=vt[P.__cacheKey];zt!==void 0&&(vt[P.__cacheKey].usedTimes--,zt.usedTimes===0&&D(T)),P.__cacheKey=ut,P.__webglTexture=vt[ut].texture}return Q}function Ct(P,T,Q){return Math.floor(Math.floor(P/Q)/T)}function et(P,T,Q,dt){const ut=P.updateRanges;if(ut.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,Q,dt,T.data);else{ut.sort((Tt,Pt)=>Tt.start-Pt.start);let zt=0;for(let Tt=1;Tt<ut.length;Tt++){const Pt=ut[zt],Jt=ut[Tt],Wt=Pt.start+Pt.count,Lt=Ct(Jt.start,T.width,4),ce=Ct(Pt.start,T.width,4);Jt.start<=Wt+1&&Lt===ce&&Ct(Jt.start+Jt.count-1,T.width,4)===Lt?Pt.count=Math.max(Pt.count,Jt.start+Jt.count-Pt.start):(++zt,ut[zt]=Jt)}ut.length=zt+1;const Dt=a.getParameter(a.UNPACK_ROW_LENGTH),Yt=a.getParameter(a.UNPACK_SKIP_PIXELS),Zt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Pt=ut.length;Tt<Pt;Tt++){const Jt=ut[Tt],Wt=Math.floor(Jt.start/4),Lt=Math.ceil(Jt.count/4),ce=Wt%T.width,X=Math.floor(Wt/T.width),wt=Lt,Ut=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ce),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,ce,X,wt,Ut,Q,dt,T.data)}P.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Dt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Yt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Zt)}}function pt(P,T,Q){let dt=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=a.TEXTURE_3D);const vt=Mt(P,T),ut=T.source;i.bindTexture(dt,P.__webglTexture,a.TEXTURE0+Q);const zt=s.get(ut);if(ut.version!==zt.__version||vt===!0){i.activeTexture(a.TEXTURE0+Q);const Dt=De.getPrimaries(De.workingColorSpace),Yt=T.colorSpace===ja?null:De.getPrimaries(T.colorSpace),Zt=T.colorSpace===ja||Dt===Yt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=b(T.image,!1,l.maxTextureSize);Tt=Oe(T,Tt);const Pt=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let Wt=C(T.internalFormat,Pt,Jt,T.colorSpace,T.isVideoTexture);_t(dt,T);let Lt;const ce=T.mipmaps,X=T.isVideoTexture!==!0,wt=zt.__version===void 0||vt===!0,Ut=ut.dataReady,Ft=O(T,Tt);if(T.isDepthTexture)Wt=A(T.format===ul,T.type),wt&&(X?i.texStorage2D(a.TEXTURE_2D,1,Wt,Tt.width,Tt.height):i.texImage2D(a.TEXTURE_2D,0,Wt,Tt.width,Tt.height,0,Pt,Jt,null));else if(T.isDataTexture)if(ce.length>0){X&&wt&&i.texStorage2D(a.TEXTURE_2D,Ft,Wt,ce[0].width,ce[0].height);for(let At=0,xt=ce.length;At<xt;At++)Lt=ce[At],X?Ut&&i.texSubImage2D(a.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Pt,Jt,Lt.data):i.texImage2D(a.TEXTURE_2D,At,Wt,Lt.width,Lt.height,0,Pt,Jt,Lt.data);T.generateMipmaps=!1}else X?(wt&&i.texStorage2D(a.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height),Ut&&et(T,Tt,Pt,Jt)):i.texImage2D(a.TEXTURE_2D,0,Wt,Tt.width,Tt.height,0,Pt,Jt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&wt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Wt,ce[0].width,ce[0].height,Tt.depth);for(let At=0,xt=ce.length;At<xt;At++)if(Lt=ce[At],T.format!==Ri)if(Pt!==null)if(X){if(Ut)if(T.layerUpdates.size>0){const Xt=J0(Lt.width,Lt.height,T.format,T.type);for(const oe of T.layerUpdates){const Pe=Lt.data.subarray(oe*Xt/Lt.data.BYTES_PER_ELEMENT,(oe+1)*Xt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,At,0,0,oe,Lt.width,Lt.height,1,Pt,Pe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Pt,Lt.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,At,Wt,Lt.width,Lt.height,Tt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ut&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,At,0,0,0,Lt.width,Lt.height,Tt.depth,Pt,Jt,Lt.data):i.texImage3D(a.TEXTURE_2D_ARRAY,At,Wt,Lt.width,Lt.height,Tt.depth,0,Pt,Jt,Lt.data)}else{X&&wt&&i.texStorage2D(a.TEXTURE_2D,Ft,Wt,ce[0].width,ce[0].height);for(let At=0,xt=ce.length;At<xt;At++)Lt=ce[At],T.format!==Ri?Pt!==null?X?Ut&&i.compressedTexSubImage2D(a.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Pt,Lt.data):i.compressedTexImage2D(a.TEXTURE_2D,At,Wt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ut&&i.texSubImage2D(a.TEXTURE_2D,At,0,0,Lt.width,Lt.height,Pt,Jt,Lt.data):i.texImage2D(a.TEXTURE_2D,At,Wt,Lt.width,Lt.height,0,Pt,Jt,Lt.data)}else if(T.isDataArrayTexture)if(X){if(wt&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Wt,Tt.width,Tt.height,Tt.depth),Ut)if(T.layerUpdates.size>0){const At=J0(Tt.width,Tt.height,T.format,T.type);for(const xt of T.layerUpdates){const Xt=Tt.data.subarray(xt*At/Tt.data.BYTES_PER_ELEMENT,(xt+1)*At/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xt,Tt.width,Tt.height,1,Pt,Jt,Xt)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,Jt,Tt.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Wt,Tt.width,Tt.height,Tt.depth,0,Pt,Jt,Tt.data);else if(T.isData3DTexture)X?(wt&&i.texStorage3D(a.TEXTURE_3D,Ft,Wt,Tt.width,Tt.height,Tt.depth),Ut&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,Jt,Tt.data)):i.texImage3D(a.TEXTURE_3D,0,Wt,Tt.width,Tt.height,Tt.depth,0,Pt,Jt,Tt.data);else if(T.isFramebufferTexture){if(wt)if(X)i.texStorage2D(a.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height);else{let At=Tt.width,xt=Tt.height;for(let Xt=0;Xt<Ft;Xt++)i.texImage2D(a.TEXTURE_2D,Xt,Wt,At,xt,0,Pt,Jt,null),At>>=1,xt>>=1}}else if(ce.length>0){if(X&&wt){const At=Le(ce[0]);i.texStorage2D(a.TEXTURE_2D,Ft,Wt,At.width,At.height)}for(let At=0,xt=ce.length;At<xt;At++)Lt=ce[At],X?Ut&&i.texSubImage2D(a.TEXTURE_2D,At,0,0,Pt,Jt,Lt):i.texImage2D(a.TEXTURE_2D,At,Wt,Pt,Jt,Lt);T.generateMipmaps=!1}else if(X){if(wt){const At=Le(Tt);i.texStorage2D(a.TEXTURE_2D,Ft,Wt,At.width,At.height)}Ut&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Pt,Jt,Tt)}else i.texImage2D(a.TEXTURE_2D,0,Wt,Pt,Jt,Tt);x(T)&&_(dt),zt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Et(P,T,Q){if(T.image.length!==6)return;const dt=Mt(P,T),vt=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+Q);const ut=s.get(vt);if(vt.version!==ut.__version||dt===!0){i.activeTexture(a.TEXTURE0+Q);const zt=De.getPrimaries(De.workingColorSpace),Dt=T.colorSpace===ja?null:De.getPrimaries(T.colorSpace),Yt=T.colorSpace===ja||zt===Dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!Zt&&!Tt?Pt[xt]=b(T.image[xt],!0,l.maxCubemapSize):Pt[xt]=Tt?T.image[xt].image:T.image[xt],Pt[xt]=Oe(T,Pt[xt]);const Jt=Pt[0],Wt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),ce=C(T.internalFormat,Wt,Lt,T.colorSpace),X=T.isVideoTexture!==!0,wt=ut.__version===void 0||dt===!0,Ut=vt.dataReady;let Ft=O(T,Jt);_t(a.TEXTURE_CUBE_MAP,T);let At;if(Zt){X&&wt&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ce,Jt.width,Jt.height);for(let xt=0;xt<6;xt++){At=Pt[xt].mipmaps;for(let Xt=0;Xt<At.length;Xt++){const oe=At[Xt];T.format!==Ri?Wt!==null?X?Ut&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,oe.width,oe.height,Wt,oe.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,ce,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ut&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,0,0,oe.width,oe.height,Wt,Lt,oe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt,ce,oe.width,oe.height,0,Wt,Lt,oe.data)}}}else{if(At=T.mipmaps,X&&wt){At.length>0&&Ft++;const xt=Le(Pt[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Tt){X?Ut&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Wt,Lt,Pt[xt].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Pt[xt].width,Pt[xt].height,0,Wt,Lt,Pt[xt].data);for(let Xt=0;Xt<At.length;Xt++){const Pe=At[Xt].image[xt].image;X?Ut&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,Pe.width,Pe.height,Wt,Lt,Pe.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,ce,Pe.width,Pe.height,0,Wt,Lt,Pe.data)}}else{X?Ut&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Lt,Pt[xt]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Wt,Lt,Pt[xt]);for(let Xt=0;Xt<At.length;Xt++){const oe=At[Xt];X?Ut&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,0,0,Wt,Lt,oe.image[xt]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Xt+1,ce,Wt,Lt,oe.image[xt])}}}x(T)&&_(a.TEXTURE_CUBE_MAP),ut.__version=vt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,Q,dt,vt,ut){const zt=c.convert(Q.format,Q.colorSpace),Dt=c.convert(Q.type),Yt=C(Q.internalFormat,zt,Dt,Q.colorSpace),Zt=s.get(T),Tt=s.get(Q);if(Tt.__renderTarget=T,!Zt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ut),Jt=Math.max(1,T.height>>ut);vt===a.TEXTURE_3D||vt===a.TEXTURE_2D_ARRAY?i.texImage3D(vt,ut,Yt,Pt,Jt,T.depth,0,zt,Dt,null):i.texImage2D(vt,ut,Yt,Pt,Jt,0,zt,Dt,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),bt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,dt,vt,Tt.__webglTexture,0,ee(T)):(vt===a.TEXTURE_2D||vt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,dt,vt,Tt.__webglTexture,ut),i.bindFramebuffer(a.FRAMEBUFFER,null)}function qt(P,T,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,P),T.depthBuffer){const dt=T.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ut=A(T.stencilBuffer,vt),zt=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Dt=ee(T);bt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt,ut,T.width,T.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt,ut,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ut,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,zt,a.RENDERBUFFER,P)}else{const dt=T.textures;for(let vt=0;vt<dt.length;vt++){const ut=dt[vt],zt=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),Yt=C(ut.internalFormat,zt,Dt,ut.colorSpace),Zt=ee(T);Q&&bt(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Zt,Yt,T.width,T.height):bt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Zt,Yt,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Yt,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Vt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const vt=dt.__webglTexture,ut=ee(T);if(T.depthTexture.format===cl)bt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,vt,0,ut):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,vt,0);else if(T.depthTexture.format===ul)bt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,vt,0,ut):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const T=s.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=dt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const dt=P.texture.mipmaps;dt&&dt.length>0?Vt(T.__webglFramebuffer[0],P):Vt(T.__webglFramebuffer,P)}else if(Q){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=a.createRenderbuffer(),qt(T.__webglDepthbuffer[dt],P,!1);else{const vt=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[dt];a.bindRenderbuffer(a.RENDERBUFFER,ut),a.framebufferRenderbuffer(a.FRAMEBUFFER,vt,a.RENDERBUFFER,ut)}}else{const dt=P.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),qt(T.__webglDepthbuffer,P,!1);else{const vt=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ut),a.framebufferRenderbuffer(a.FRAMEBUFFER,vt,a.RENDERBUFFER,ut)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function me(P,T,Q){const dt=s.get(P);T!==void 0&&Nt(dt.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&Ee(P)}function V(P){const T=P.texture,Q=s.get(P),dt=s.get(T);P.addEventListener("dispose",I);const vt=P.textures,ut=P.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=a.createTexture()),dt.__version=T.version,f.memory.textures++),ut){Q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Dt]=[];for(let Yt=0;Yt<T.mipmaps.length;Yt++)Q.__webglFramebuffer[Dt][Yt]=a.createFramebuffer()}else Q.__webglFramebuffer[Dt]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)Q.__webglFramebuffer[Dt]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(zt)for(let Dt=0,Yt=vt.length;Dt<Yt;Dt++){const Zt=s.get(vt[Dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=a.createTexture(),f.memory.textures++)}if(P.samples>0&&bt(P)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<vt.length;Dt++){const Yt=vt[Dt];Q.__webglColorRenderbuffer[Dt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[Dt]);const Zt=c.convert(Yt.format,Yt.colorSpace),Tt=c.convert(Yt.type),Pt=C(Yt.internalFormat,Zt,Tt,Yt.colorSpace,P.isXRRenderTarget===!0),Jt=ee(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Jt,Pt,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Dt,a.RENDERBUFFER,Q.__webglColorRenderbuffer[Dt])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),qt(Q.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ut){i.bindTexture(a.TEXTURE_CUBE_MAP,dt.__webglTexture),_t(a.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Nt(Q.__webglFramebuffer[Dt][Yt],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt);else Nt(Q.__webglFramebuffer[Dt],P,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(T)&&_(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Dt=0,Yt=vt.length;Dt<Yt;Dt++){const Zt=vt[Dt],Tt=s.get(Zt);let Pt=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pt=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Pt,Tt.__webglTexture),_t(Pt,Zt),Nt(Q.__webglFramebuffer,P,Zt,a.COLOR_ATTACHMENT0+Dt,Pt,0),x(Zt)&&_(Pt)}i.unbindTexture()}else{let Dt=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Dt=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),_t(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Yt=0;Yt<T.mipmaps.length;Yt++)Nt(Q.__webglFramebuffer[Yt],P,T,a.COLOR_ATTACHMENT0,Dt,Yt);else Nt(Q.__webglFramebuffer,P,T,a.COLOR_ATTACHMENT0,Dt,0);x(T)&&_(Dt),i.unbindTexture()}P.depthBuffer&&Ee(P)}function Re(P){const T=P.textures;for(let Q=0,dt=T.length;Q<dt;Q++){const vt=T[Q];if(x(vt)){const ut=L(P),zt=s.get(vt).__webglTexture;i.bindTexture(ut,zt),_(ut),i.unbindTexture()}}}const Qt=[],Se=[];function Ht(P){if(P.samples>0){if(bt(P)===!1){const T=P.textures,Q=P.width,dt=P.height;let vt=a.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,zt=s.get(P),Dt=T.length>1;if(Dt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(a.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Zt,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Zt,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Yt=P.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=a.STENCIL_BUFFER_BIT)),Dt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Tt=s.get(T[Zt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Tt,0)}a.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,vt,a.NEAREST),m===!0&&(Qt.length=0,Se.length=0,Qt.push(a.COLOR_ATTACHMENT0+Zt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Qt.push(ut),Se.push(ut),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Se)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Dt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(a.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Zt,a.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const Tt=s.get(T[Zt]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,zt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Zt,a.TEXTURE_2D,Tt,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function ee(P){return Math.min(l.maxSamples,P.samples)}function bt(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(P){const T=f.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Oe(P,T){const Q=P.colorSpace,dt=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Hs&&Q!==ja&&(De.getTransfer(Q)===Ve?(dt!==Ri||vt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=st,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=me,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=bt}function RC(a,t){function i(s,l=ja){let c;const f=De.getTransfer(l);if(s===Vi)return a.UNSIGNED_BYTE;if(s===yp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===xp)return a.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===Qv)return a.BYTE;if(s===Jv)return a.SHORT;if(s===ol)return a.UNSIGNED_SHORT;if(s===vp)return a.INT;if(s===Ur)return a.UNSIGNED_INT;if(s===Hi)return a.FLOAT;if(s===gl)return a.HALF_FLOAT;if(s===ty)return a.ALPHA;if(s===ey)return a.RGB;if(s===Ri)return a.RGBA;if(s===cl)return a.DEPTH_COMPONENT;if(s===ul)return a.DEPTH_STENCIL;if(s===Sp)return a.RED;if(s===Mp)return a.RED_INTEGER;if(s===ny)return a.RG;if(s===Ep)return a.RG_INTEGER;if(s===bp)return a.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===ru)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oh||s===Ph||s===Ih||s===Bh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh||s===Fh||s===Hh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zh||s===Fh)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Hh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===su||s===ep||s===np)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===su)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iy||s===ip||s===ap||s===rp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===su)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}class Ty extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const wC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CC=`
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

}`;class DC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ty(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ja({vertexShader:wC,fragmentShader:CC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jn(new Mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UC extends Ws{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,h=null,g=null,v=null,y=null,S=null,E=null;const b=new DC,x={},_=i.getContextAttributes();let L=null,C=null;const A=[],O=[],B=new Ue;let I=null;const G=new mi;G.viewport=new rn;const D=new mi;D.viewport=new rn;const U=[G,D],z=new QT;let nt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let pt=A[et];return pt===void 0&&(pt=new rh,A[et]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(et){let pt=A[et];return pt===void 0&&(pt=new rh,A[et]=pt),pt.getGripSpace()},this.getHand=function(et){let pt=A[et];return pt===void 0&&(pt=new rh,A[et]=pt),pt.getHandSpace()};function ct(et){const pt=O.indexOf(et.inputSource);if(pt===-1)return;const Et=A[pt];Et!==void 0&&(Et.update(et.inputSource,et.frame,h||f),Et.dispatchEvent({type:et.type,data:et.inputSource}))}function ft(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",F);for(let et=0;et<A.length;et++){const pt=O[et];pt!==null&&(O[et]=null,A[et].disconnect(pt))}nt=null,st=null,b.reset();for(const et in x)delete x[et];t.setRenderTarget(L),S=null,y=null,v=null,l=null,C=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Nt=null,qt=null;_.depth&&(qt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=_.stencil?ul:cl,Nt=_.stencil?ll:Ur);const Vt={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};y=v.createProjectionLayer(Vt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),C=new Lr(y.textureWidth,y.textureHeight,{format:Ri,type:Vi,depthTexture:new _y(y.textureWidth,y.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Lr(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function F(et){for(let pt=0;pt<et.removed.length;pt++){const Et=et.removed[pt],Nt=O.indexOf(Et);Nt>=0&&(O[Nt]=null,A[Nt].disconnect(Et))}for(let pt=0;pt<et.added.length;pt++){const Et=et.added[pt];let Nt=O.indexOf(Et);if(Nt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=O.length){O.push(Et),Nt=Vt;break}else if(O[Vt]===null){O[Vt]=Et,Nt=Vt;break}if(Nt===-1)break}const qt=A[Nt];qt&&qt.connect(Et)}}const j=new it,W=new it;function St(et,pt,Et){j.setFromMatrixPosition(pt.matrixWorld),W.setFromMatrixPosition(Et.matrixWorld);const Nt=j.distanceTo(W),qt=pt.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,Ee=qt[14]/(qt[10]-1),me=qt[14]/(qt[10]+1),V=(qt[9]+1)/qt[5],Re=(qt[9]-1)/qt[5],Qt=(qt[8]-1)/qt[0],Se=(Vt[8]+1)/Vt[0],Ht=Ee*Qt,ee=Ee*Se,bt=Nt/(-Qt+Se),ne=bt*-Qt;if(pt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ne),et.translateZ(bt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),qt[10]===-1)et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Oe=Ee+bt,Le=me+bt,P=Ht-ne,T=ee+(Nt-ne),Q=V*me/Le*Oe,dt=Re*me/Le*Oe;et.projectionMatrix.makePerspective(P,T,Q,dt,Oe,Le),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function N(et,pt){pt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(pt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let pt=et.near,Et=et.far;b.texture!==null&&(b.depthNear>0&&(pt=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),z.near=D.near=G.near=pt,z.far=D.far=G.far=Et,(nt!==z.near||st!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),nt=z.near,st=z.far),z.layers.mask=et.layers.mask|6,G.layers.mask=z.layers.mask&3,D.layers.mask=z.layers.mask&5;const Nt=et.parent,qt=z.cameras;N(z,Nt);for(let Vt=0;Vt<qt.length;Vt++)N(qt[Vt],Nt);qt.length===2?St(z,G,D):z.projectionMatrix.copy(G.projectionMatrix),$(et,z,Nt)};function $(et,pt,Et){Et===null?et.matrix.copy(pt.matrixWorld):(et.matrix.copy(Et.matrixWorld),et.matrix.invert(),et.matrix.multiply(pt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(pt.projectionMatrix),et.projectionMatrixInverse.copy(pt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=fl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(et){m=et,y!==null&&(y.fixedFoveation=et),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=et)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(z)},this.getCameraTexture=function(et){return x[et]};let _t=null;function Mt(et,pt){if(g=pt.getViewerPose(h||f),E=pt,g!==null){const Et=g.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Nt=!1;Et.length!==z.cameras.length&&(z.cameras.length=0,Nt=!0);for(let me=0;me<Et.length;me++){const V=Et[me];let Re=null;if(S!==null)Re=S.getViewport(V);else{const Se=v.getViewSubImage(y,V);Re=Se.viewport,me===0&&(t.setRenderTargetTextures(C,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(C))}let Qt=U[me];Qt===void 0&&(Qt=new mi,Qt.layers.enable(me),Qt.viewport=new rn,U[me]=Qt),Qt.matrix.fromArray(V.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(V.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(z.matrix.copy(Qt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Nt===!0&&z.cameras.push(Qt)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const me=v.getDepthInformation(Et[0]);me&&me.isValid&&me.texture&&b.init(me,l.renderState)}if(qt&&qt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let me=0;me<Et.length;me++){const V=Et[me].camera;if(V){let Re=x[V];Re||(Re=new Ty,x[V]=Re);const Qt=v.getCameraImage(V);Re.sourceTexture=Qt}}}for(let Et=0;Et<A.length;Et++){const Nt=O[Et],qt=A[Et];Nt!==null&&qt!==void 0&&qt.update(Nt,pt,h||f)}_t&&_t(et,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Ct=new xy;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const Sr=new ki,LC=new Ye;function NC(a,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,hy(a)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,L,C,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,A)):_.isMeshMatcapMaterial?(c(x,_),E(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),b(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?m(x,_,L,C):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Pn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Pn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=t.get(_),C=L.envMap,A=L.envMapRotation;C&&(x.envMap.value=C,Sr.copy(A),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),x.envMapRotation.value.setFromMatrix4(LC.makeRotationFromEuler(Sr)),x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,L,C){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=C*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const L=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function OC(a,t,i,s){let l={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,C){const A=C.program;s.uniformBlockBinding(L,A)}function h(L,C){let A=l[L.id];A===void 0&&(E(L),A=g(L),l[L.id]=A,L.addEventListener("dispose",x));const O=C.program;s.updateUBOMapping(L,O);const B=t.render.frame;c[L.id]!==B&&(y(L),c[L.id]=B)}function g(L){const C=v();L.__bindingPointIndex=C;const A=a.createBuffer(),O=L.__size,B=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,A),a.bufferData(a.UNIFORM_BUFFER,O,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,A),A}function v(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const C=l[L.id],A=L.uniforms,O=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let B=0,I=A.length;B<I;B++){const G=Array.isArray(A[B])?A[B]:[A[B]];for(let D=0,U=G.length;D<U;D++){const z=G[D];if(S(z,B,D,O)===!0){const nt=z.__offset,st=Array.isArray(z.value)?z.value:[z.value];let ct=0;for(let ft=0;ft<st.length;ft++){const F=st[ft],j=b(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,a.bufferSubData(a.UNIFORM_BUFFER,nt+ct,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,ct),ct+=j.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,nt,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(L,C,A,O){const B=L.value,I=C+"_"+A;if(O[I]===void 0)return typeof B=="number"||typeof B=="boolean"?O[I]=B:O[I]=B.clone(),!0;{const G=O[I];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return O[I]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function E(L){const C=L.uniforms;let A=0;const O=16;for(let I=0,G=C.length;I<G;I++){const D=Array.isArray(C[I])?C[I]:[C[I]];for(let U=0,z=D.length;U<z;U++){const nt=D[U],st=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,ft=st.length;ct<ft;ct++){const F=st[ct],j=b(F),W=A%O,St=W%j.boundary,N=W+St;A+=St,N!==0&&O-N<j.storage&&(A+=O-N),nt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=A,A+=j.storage}}}const B=A%O;return B>0&&(A+=O-B),L.__size=A,L.__cache={},this}function b(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function x(L){const C=L.target;C.removeEventListener("dispose",x);const A=f.indexOf(C.__bindingPointIndex);f.splice(A,1),a.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function _(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:h,dispose:_}}class PC{constructor(t={}){const{canvas:i=dT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let x=null,_=null;const L=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let O=!1;this._outputColorSpace=ai;let B=0,I=0,G=null,D=-1,U=null;const z=new rn,nt=new rn;let st=null;const ct=new Ae(0);let ft=0,F=i.width,j=i.height,W=1,St=null,N=null;const $=new rn(0,0,F,j),_t=new rn(0,0,F,j);let Mt=!1;const Ct=new Rp;let et=!1,pt=!1;const Et=new Ye,Nt=new it,qt=new rn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function me(){return G===null?W:1}let V=s;function Re(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_p}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",At,!1),V===null){const q="webgl2";if(V=Re(q,w),V===null)throw Re(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Qt,Se,Ht,ee,bt,ne,Oe,Le,P,T,Q,dt,vt,ut,zt,Dt,Yt,Zt,Tt,Pt,Jt,Wt,Lt,ce;function X(){Qt=new WR(V),Qt.init(),Wt=new RC(V,Qt),Se=new zR(V,Qt,t,Wt),Ht=new TC(V,Qt),Se.reversedDepthBuffer&&y&&Ht.buffers.depth.setReversed(!0),ee=new jR(V),bt=new dC,ne=new AC(V,Qt,Ht,bt,Se,Wt,ee),Oe=new HR(A),Le=new XR(A),P=new t1(V),Lt=new IR(V,P),T=new qR(V,P,ee,Lt),Q=new KR(V,T,P,ee),Tt=new ZR(V,Se,ne),Dt=new FR(bt),dt=new fC(A,Oe,Le,Qt,Se,Lt,Dt),vt=new NC(A,bt),ut=new pC,zt=new xC(Qt),Zt=new PR(A,Oe,Le,Ht,Q,S,m),Yt=new EC(A,Q,Se),ce=new OC(V,ee,Se,Ht),Pt=new BR(V,Qt,ee),Jt=new YR(V,Qt,ee),ee.programs=dt.programs,A.capabilities=Se,A.extensions=Qt,A.properties=bt,A.renderLists=ut,A.shadowMap=Yt,A.state=Ht,A.info=ee}X();const wt=new UC(A,V);this.xr=wt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(F,j,!1))},this.getSize=function(w){return w.set(F,j)},this.setSize=function(w,q,ot=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,j=q,i.width=Math.floor(w*W),i.height=Math.floor(q*W),ot===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(F*W,j*W).floor()},this.setDrawingBufferSize=function(w,q,ot){F=w,j=q,W=ot,i.width=Math.floor(w*ot),i.height=Math.floor(q*ot),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,ot,lt){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,ot,lt),Ht.viewport(z.copy($).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,q,ot,lt){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,q,ot,lt),Ht.scissor(nt.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Ht.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ot=!0){let lt=0;if(w){let K=!1;if(G!==null){const Rt=G.texture.format;K=Rt===bp||Rt===Ep||Rt===Mp}if(K){const Rt=G.texture.type,Ot=Rt===Vi||Rt===Ur||Rt===ol||Rt===ll||Rt===yp||Rt===xp,Gt=Zt.getClearColor(),It=Zt.getClearAlpha(),te=Gt.r,ae=Gt.g,jt=Gt.b;Ot?(E[0]=te,E[1]=ae,E[2]=jt,E[3]=It,V.clearBufferuiv(V.COLOR,0,E)):(b[0]=te,b[1]=ae,b[2]=jt,b[3]=It,V.clearBufferiv(V.COLOR,0,b))}else lt|=V.COLOR_BUFFER_BIT}q&&(lt|=V.DEPTH_BUFFER_BIT),ot&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Zt.dispose(),ut.dispose(),zt.dispose(),bt.dispose(),Oe.dispose(),Le.dispose(),Q.dispose(),Lt.dispose(),ce.dispose(),dt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",dn),wt.removeEventListener("sessionend",hn),tn.stop()};function Ut(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=ee.autoReset,q=Yt.enabled,ot=Yt.autoUpdate,lt=Yt.needsUpdate,K=Yt.type;X(),ee.autoReset=w,Yt.enabled=q,Yt.autoUpdate=ot,Yt.needsUpdate=lt,Yt.type=K}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const q=w.target;q.removeEventListener("dispose",xt),Xt(q)}function Xt(w){oe(w),bt.remove(w)}function oe(w){const q=bt.get(w).programs;q!==void 0&&(q.forEach(function(ot){dt.releaseProgram(ot)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ot,lt,K,Rt){q===null&&(q=Vt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Gt=va(w,q,ot,lt,K);Ht.setMaterial(lt,Ot);let It=ot.index,te=1;if(lt.wireframe===!0){if(It=T.getWireframeAttribute(ot),It===void 0)return;te=2}const ae=ot.drawRange,jt=ot.attributes.position;let de=ae.start*te,we=(ae.start+ae.count)*te;Rt!==null&&(de=Math.max(de,Rt.start*te),we=Math.min(we,(Rt.start+Rt.count)*te)),It!==null?(de=Math.max(de,0),we=Math.min(we,It.count)):jt!=null&&(de=Math.max(de,0),we=Math.min(we,jt.count));const Ke=we-de;if(Ke<0||Ke===1/0)return;Lt.setup(K,lt,Gt,ot,It);let ze,he=Pt;if(It!==null&&(ze=P.get(It),he=Jt,he.setIndex(ze)),K.isMesh)lt.wireframe===!0?(Ht.setLineWidth(lt.wireframeLinewidth*me()),he.setMode(V.LINES)):he.setMode(V.TRIANGLES);else if(K.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),Ht.setLineWidth($t*me()),K.isLineSegments?he.setMode(V.LINES):K.isLineLoop?he.setMode(V.LINE_LOOP):he.setMode(V.LINE_STRIP)}else K.isPoints?he.setMode(V.POINTS):K.isSprite&&he.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))he.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,je=K._multiDrawCounts,ve=K._multiDrawCount,Cn=It?P.get(It).bytesPerElement:1,yi=bt.get(lt).currentProgram.getUniforms();for(let In=0;In<ve;In++)yi.setValue(V,"_gl_DrawID",In),he.render($t[In]/Cn,je[In])}else if(K.isInstancedMesh)he.renderInstances(de,Ke,K.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,je=Math.min(ot.instanceCount,$t);he.renderInstances(de,Ke,je)}else he.render(de,Ke)};function Pe(w,q,ot){w.transparent===!0&&w.side===ha&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,Li(w,q,ot),w.side=Qa,w.needsUpdate=!0,Li(w,q,ot),w.side=ha):Li(w,q,ot)}this.compile=function(w,q,ot=null){ot===null&&(ot=w),_=zt.get(ot),_.init(q),C.push(_),ot.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),w!==ot&&w.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const lt=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const Gt=Rt[Ot];Pe(Gt,ot,K),lt.add(Gt)}else Pe(Rt,ot,K),lt.add(Rt)}),_=C.pop(),lt},this.compileAsync=function(w,q,ot=null){const lt=this.compile(w,q,ot);return new Promise(K=>{function Rt(){if(lt.forEach(function(Ot){bt.get(Ot).currentProgram.isReady()&&lt.delete(Ot)}),lt.size===0){K(w);return}setTimeout(Rt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Te=null;function vi(w){Te&&Te(w)}function dn(){tn.stop()}function hn(){tn.start()}const tn=new xy;tn.setAnimationLoop(vi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){Te=w,wt.setAnimationLoop(w),w===null?tn.stop():tn.start()},wt.addEventListener("sessionstart",dn),wt.addEventListener("sessionend",hn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(q),q=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,q,G),_=zt.get(w,C.length),_.init(q),C.push(_),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix(Et,Gi,q.reversedDepth),pt=this.localClippingEnabled,et=Dt.init(this.clippingPlanes,pt),x=ut.get(w,L.length),x.init(),L.push(x),wt.enabled===!0&&wt.isPresenting===!0){const Rt=A.xr.getDepthSensingMesh();Rt!==null&&Ui(Rt,q,-1/0,A.sortObjects)}Ui(w,q,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(St,N),Ee=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Ee&&Zt.addToRenderList(x,w),this.info.render.frame++,et===!0&&Dt.beginShadows();const ot=_.state.shadowsArray;Yt.render(ot,w,q),et===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=x.opaque,K=x.transmissive;if(_.setupLights(),q.isArrayCamera){const Rt=q.cameras;if(K.length>0)for(let Ot=0,Gt=Rt.length;Ot<Gt;Ot++){const It=Rt[Ot];vl(lt,K,w,It)}Ee&&Zt.render(w);for(let Ot=0,Gt=Rt.length;Ot<Gt;Ot++){const It=Rt[Ot];Or(x,w,It,It.viewport)}}else K.length>0&&vl(lt,K,w,q),Ee&&Zt.render(w),Or(x,w,q);G!==null&&I===0&&(ne.updateMultisampleRenderTarget(G),ne.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(A,w,q),Lt.resetDefaultState(),D=-1,U=null,C.pop(),C.length>0?(_=C[C.length-1],et===!0&&Dt.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Ui(w,q,ot,lt){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ct.intersectsSprite(w)){lt&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const Ot=Q.update(w),Gt=w.material;Gt.visible&&x.push(w,Ot,Gt,ot,qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ct.intersectsObject(w))){const Ot=Q.update(w),Gt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),qt.copy(Ot.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Gt)){const It=Ot.groups;for(let te=0,ae=It.length;te<ae;te++){const jt=It[te],de=Gt[jt.materialIndex];de&&de.visible&&x.push(w,Ot,de,ot,qt.z,jt)}}else Gt.visible&&x.push(w,Ot,Gt,ot,qt.z,null)}}const Rt=w.children;for(let Ot=0,Gt=Rt.length;Ot<Gt;Ot++)Ui(Rt[Ot],q,ot,lt)}function Or(w,q,ot,lt){const K=w.opaque,Rt=w.transmissive,Ot=w.transparent;_.setupLightsView(ot),et===!0&&Dt.setGlobalState(A.clippingPlanes,ot),lt&&Ht.viewport(z.copy(lt)),K.length>0&&Pr(K,q,ot),Rt.length>0&&Pr(Rt,q,ot),Ot.length>0&&Pr(Ot,q,ot),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function vl(w,q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Lr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?gl:Vi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Rt=_.state.transmissionRenderTarget[lt.id],Ot=lt.viewport||z;Rt.setSize(Ot.z*A.transmissionResolutionScale,Ot.w*A.transmissionResolutionScale);const Gt=A.getRenderTarget(),It=A.getActiveCubeFace(),te=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(ct),ft=A.getClearAlpha(),ft<1&&A.setClearColor(16777215,.5),A.clear(),Ee&&Zt.render(ot);const ae=A.toneMapping;A.toneMapping=Ka;const jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),et===!0&&Dt.setGlobalState(A.clippingPlanes,lt),Pr(w,ot,lt),ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let we=0,Ke=q.length;we<Ke;we++){const ze=q[we],he=ze.object,$t=ze.geometry,je=ze.material,ve=ze.group;if(je.side===ha&&he.layers.test(lt.layers)){const Cn=je.side;je.side=Pn,je.needsUpdate=!0,Qs(he,ot,lt,$t,je,ve),je.side=Cn,je.needsUpdate=!0,de=!0}}de===!0&&(ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt))}A.setRenderTarget(Gt,It,te),A.setClearColor(ct,ft),jt!==void 0&&(lt.viewport=jt),A.toneMapping=ae}function Pr(w,q,ot){const lt=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Rt=w.length;K<Rt;K++){const Ot=w[K],Gt=Ot.object,It=Ot.geometry,te=Ot.group;let ae=Ot.material;ae.allowOverride===!0&&lt!==null&&(ae=lt),Gt.layers.test(ot.layers)&&Qs(Gt,q,ot,It,ae,te)}}function Qs(w,q,ot,lt,K,Rt){w.onBeforeRender(A,q,ot,lt,K,Rt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(A,q,ot,lt,w,Rt),K.transparent===!0&&K.side===ha&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,A.renderBufferDirect(ot,q,lt,K,w,Rt),K.side=Qa,K.needsUpdate=!0,A.renderBufferDirect(ot,q,lt,K,w,Rt),K.side=ha):A.renderBufferDirect(ot,q,lt,K,w,Rt),w.onAfterRender(A,q,ot,lt,K,Rt)}function Li(w,q,ot){q.isScene!==!0&&(q=Vt);const lt=bt.get(w),K=_.state.lights,Rt=_.state.shadowsArray,Ot=K.state.version,Gt=dt.getParameters(w,K.state,Rt,q,ot),It=dt.getProgramCacheKey(Gt);let te=lt.programs;lt.environment=w.isMeshStandardMaterial?q.environment:null,lt.fog=q.fog,lt.envMap=(w.isMeshStandardMaterial?Le:Oe).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",xt),te=new Map,lt.programs=te);let ae=te.get(It);if(ae!==void 0){if(lt.currentProgram===ae&&lt.lightsStateVersion===Ot)return Wi(w,Gt),ae}else Gt.uniforms=dt.getUniforms(w),w.onBeforeCompile(Gt,A),ae=dt.acquireProgram(Gt,It),te.set(It,ae),lt.uniforms=Gt.uniforms;const jt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=Dt.uniform),Wi(w,Gt),lt.needsLights=ya(w),lt.lightsStateVersion=Ot,lt.needsLights&&(jt.ambientLightColor.value=K.state.ambient,jt.lightProbe.value=K.state.probe,jt.directionalLights.value=K.state.directional,jt.directionalLightShadows.value=K.state.directionalShadow,jt.spotLights.value=K.state.spot,jt.spotLightShadows.value=K.state.spotShadow,jt.rectAreaLights.value=K.state.rectArea,jt.ltc_1.value=K.state.rectAreaLTC1,jt.ltc_2.value=K.state.rectAreaLTC2,jt.pointLights.value=K.state.point,jt.pointLightShadows.value=K.state.pointShadow,jt.hemisphereLights.value=K.state.hemi,jt.directionalShadowMap.value=K.state.directionalShadowMap,jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,jt.spotShadowMap.value=K.state.spotShadowMap,jt.spotLightMatrix.value=K.state.spotLightMatrix,jt.spotLightMap.value=K.state.spotLightMap,jt.pointShadowMap.value=K.state.pointShadowMap,jt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=ae,lt.uniformsList=null,ae}function Ir(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=ou.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Wi(w,q){const ot=bt.get(w);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function va(w,q,ot,lt,K){q.isScene!==!0&&(q=Vt),ne.resetTextureUnits();const Rt=q.fog,Ot=lt.isMeshStandardMaterial?q.environment:null,Gt=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Hs,It=(lt.isMeshStandardMaterial?Le:Oe).get(lt.envMap||Ot),te=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ae=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),jt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,we=!!ot.morphAttributes.color;let Ke=Ka;lt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ke=A.toneMapping);const ze=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,he=ze!==void 0?ze.length:0,$t=bt.get(lt),je=_.state.lights;if(et===!0&&(pt===!0||w!==U)){const en=w===U&&lt.id===D;Dt.setState(lt,w,en)}let ve=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==je.state.version||$t.outputColorSpace!==Gt||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==It||lt.fog===!0&&$t.fog!==Rt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Dt.numPlanes||$t.numIntersection!==Dt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ae||$t.morphTargets!==jt||$t.morphNormals!==de||$t.morphColors!==we||$t.toneMapping!==Ke||$t.morphTargetsCount!==he)&&(ve=!0):(ve=!0,$t.__version=lt.version);let Cn=$t.currentProgram;ve===!0&&(Cn=Li(lt,q,K));let yi=!1,In=!1,yn=!1;const Xe=Cn.getUniforms(),Bn=$t.uniforms;if(Ht.useProgram(Cn.program)&&(yi=!0,In=!0,yn=!0),lt.id!==D&&(D=lt.id,In=!0),yi||U!==w){Ht.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Xe.setValue(V,"projectionMatrix",w.projectionMatrix),Xe.setValue(V,"viewMatrix",w.matrixWorldInverse);const bn=Xe.map.cameraPosition;bn!==void 0&&bn.setValue(V,Nt.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&Xe.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Xe.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,In=!0,yn=!0)}if(K.isSkinnedMesh){Xe.setOptional(V,K,"bindMatrix"),Xe.setOptional(V,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Xe.setValue(V,"boneTexture",en.boneTexture,ne))}K.isBatchedMesh&&(Xe.setOptional(V,K,"batchingTexture"),Xe.setValue(V,"batchingTexture",K._matricesTexture,ne),Xe.setOptional(V,K,"batchingIdTexture"),Xe.setValue(V,"batchingIdTexture",K._indirectTexture,ne),Xe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(V,"batchingColorTexture",K._colorsTexture,ne));const Dn=ot.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Tt.update(K,ot,Cn),(In||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Xe.setValue(V,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=It,Bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),In&&(Xe.setValue(V,"toneMappingExposure",A.toneMappingExposure),$t.needsLights&&$a(Bn,yn),Rt&&lt.fog===!0&&vt.refreshFogUniforms(Bn,Rt),vt.refreshMaterialUniforms(Bn,lt,W,j,_.state.transmissionRenderTarget[w.id]),ou.upload(V,Ir($t),Bn,ne)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ou.upload(V,Ir($t),Bn,ne),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Xe.setValue(V,"center",K.center),Xe.setValue(V,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(V,"normalMatrix",K.normalMatrix),Xe.setValue(V,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let bn=0,Br=en.length;bn<Br;bn++){const kn=en[bn];ce.update(kn,Cn),ce.bind(kn,Cn)}}return Cn}function $a(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function ya(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,q,ot){const lt=bt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),bt.get(w.texture).__webglTexture=q,bt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ot=bt.get(w);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0};const ln=V.createFramebuffer();this.setRenderTarget=function(w,q=0,ot=0){G=w,B=q,I=ot;let lt=!0,K=null,Rt=!1,Ot=!1;if(w){const It=bt.get(w);if(It.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(It.__hasExternalTextures)ne.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const jt=w.depthTexture;if(It.__boundDepthTexture!==jt){if(jt!==null&&bt.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const ae=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ae[q])?K=ae[q][ot]:K=ae[q],Rt=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?K=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[ot]:K=ae,z.copy(w.viewport),nt.copy(w.scissor),st=w.scissorTest}else z.copy($).multiplyScalar(W).floor(),nt.copy(_t).multiplyScalar(W).floor(),st=Mt;if(ot!==0&&(K=ln),Ht.bindFramebuffer(V.FRAMEBUFFER,K)&&lt&&Ht.drawBuffers(w,K),Ht.viewport(z),Ht.scissor(nt),Ht.setScissorTest(st),Rt){const It=bt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,ot)}else if(Ot){const It=q;for(let te=0;te<w.textures.length;te++){const ae=bt.get(w.textures[te]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+te,ae.__webglTexture,ot,It)}}else if(w!==null&&ot!==0){const It=bt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(w,q,ot,lt,K,Rt,Ot,Gt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){Ht.bindFramebuffer(V.FRAMEBUFFER,It);try{const te=w.textures[Gt],ae=te.format,jt=te.type;if(!Se.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-lt&&ot>=0&&ot<=w.height-K&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Gt),V.readPixels(q,ot,lt,K,Wt.convert(ae),Wt.convert(jt),Rt))}finally{const te=G!==null?bt.get(G).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,q,ot,lt,K,Rt,Ot,Gt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It)if(q>=0&&q<=w.width-lt&&ot>=0&&ot<=w.height-K){Ht.bindFramebuffer(V.FRAMEBUFFER,It);const te=w.textures[Gt],ae=te.format,jt=te.type;if(!Se.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,Rt.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Gt),V.readPixels(q,ot,lt,K,Wt.convert(ae),Wt.convert(jt),0);const we=G!==null?bt.get(G).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,we);const Ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hT(V,Ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Rt),V.deleteBuffer(de),V.deleteSync(Ke),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ot=0){const lt=Math.pow(2,-ot),K=Math.floor(w.image.width*lt),Rt=Math.floor(w.image.height*lt),Ot=q!==null?q.x:0,Gt=q!==null?q.y:0;ne.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Ot,Gt,K,Rt),Ht.unbindTexture()};const yl=V.createFramebuffer(),xl=V.createFramebuffer();this.copyTextureToTexture=function(w,q,ot=null,lt=null,K=0,Rt=null){Rt===null&&(K!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=K,K=0):Rt=0);let Ot,Gt,It,te,ae,jt,de,we,Ke;const ze=w.isCompressedTexture?w.mipmaps[Rt]:w.image;if(ot!==null)Ot=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,ae=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const Dn=Math.pow(2,-K);Ot=Math.floor(ze.width*Dn),Gt=Math.floor(ze.height*Dn),w.isDataArrayTexture?It=ze.depth:w.isData3DTexture?It=Math.floor(ze.depth*Dn):It=1,te=0,ae=0,jt=0}lt!==null?(de=lt.x,we=lt.y,Ke=lt.z):(de=0,we=0,Ke=0);const he=Wt.convert(q.format),$t=Wt.convert(q.type);let je;q.isData3DTexture?(ne.setTexture3D(q,0),je=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ne.setTexture2DArray(q,0),je=V.TEXTURE_2D_ARRAY):(ne.setTexture2D(q,0),je=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=V.getParameter(V.UNPACK_ROW_LENGTH),Cn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),yi=V.getParameter(V.UNPACK_SKIP_PIXELS),In=V.getParameter(V.UNPACK_SKIP_ROWS),yn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,ae),V.pixelStorei(V.UNPACK_SKIP_IMAGES,jt);const Xe=w.isDataArrayTexture||w.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Dn=bt.get(w),en=bt.get(q),bn=bt.get(Dn.__renderTarget),Br=bt.get(en.__renderTarget);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let kn=0;kn<It;kn++)Xe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,K,jt+kn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bt.get(q).__webglTexture,Rt,Ke+kn)),V.blitFramebuffer(te,ae,Ot,Gt,de,we,Ot,Gt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||bt.has(w)){const Dn=bt.get(w),en=bt.get(q);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,yl),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,xl);for(let bn=0;bn<It;bn++)Xe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dn.__webglTexture,K,jt+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dn.__webglTexture,K),Bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,Rt,Ke+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,Rt),K!==0?V.blitFramebuffer(te,ae,Ot,Gt,de,we,Ot,Gt,V.COLOR_BUFFER_BIT,V.NEAREST):Bn?V.copyTexSubImage3D(je,Rt,de,we,Ke+bn,te,ae,Ot,Gt):V.copyTexSubImage2D(je,Rt,de,we,te,ae,Ot,Gt);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Bn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(je,Rt,de,we,Ke,Ot,Gt,It,he,$t,ze.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(je,Rt,de,we,Ke,Ot,Gt,It,he,ze.data):V.texSubImage3D(je,Rt,de,we,Ke,Ot,Gt,It,he,$t,ze):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Rt,de,we,Ot,Gt,he,$t,ze.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Rt,de,we,ze.width,ze.height,he,ze.data):V.texSubImage2D(V.TEXTURE_2D,Rt,de,we,Ot,Gt,he,$t,ze);V.pixelStorei(V.UNPACK_ROW_LENGTH,ve),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Cn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,In),V.pixelStorei(V.UNPACK_SKIP_IMAGES,yn),Rt===0&&q.generateMipmaps&&V.generateMipmap(je),Ht.unbindTexture()},this.copyTextureToTexture3D=function(w,q,ot=null,lt=null,K=0){return Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,ot,lt,K)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),Ht.unbindTexture()},this.resetState=function(){B=0,I=0,G=null,Ht.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const le={scene:{background:16},renderer:{maxPixelRatio:2,antialias:!0},dna:{rotYSpeed:.3,wobbleXAmp:.05,wobbleXSpeed:.25,scale:1.8,turns:2,pointsPerTurn:40,stepY:.3,radius:1.5,sphereRadius:.4,sphereSegments:24,rungRadius:.05,rungLength:1.2,rungSegments:8,rungEvery:4},blackHole:{rotYSpeed:1.2,wobbleXAmp:.03,wobbleXSpeed:.2,scale:1.8,core:{radius:1.2,widthSegments:48,heightSegments:48,color:5,roughness:.3,metalness:1,emissive:34,emissiveIntensity:.6},glow:{radius:1.7,color:3381759,opacity:.45},halo:{radius:2.4,color:1122884,opacity:.18}},stars:{far:{count:2e3,spread:1200,size:.6,color:10469366,rotYSpeed:.01,driftXAmp:2,driftXSpeed:.02,driftYAmp:1.5,driftYSpeed:.015},near:{count:1200,spread:700,size:1,color:14542847,rotYSpeed:-.02,driftXAmp:3,driftXSpeed:.03,driftYAmp:2,driftYSpeed:.02,phaseOffset:1.2}},camera:{fov:60,near:.1,far:2e3,basePos:{x:0,y:1,z:16},bobXAmp:.3,bobXSpeed:.1,bobYAmp:.15,bobYSpeed:.07},lights:{ambient:{color:6724044,intensity:.6},directional:{color:16777215,intensity:.8,position:new it(5,10,7)}}};function IC({className:a="",height:t="60vh"}){const i=Z.useRef(null),s=Z.useRef(null),l=Z.useRef(null),c=Z.useRef(null),f=Z.useRef(null),d=Z.useRef(null);return Z.useEffect(()=>{const m=i.current;if(!m)return;const h=()=>{const ee=m.clientWidth,bt=typeof t=="number"?t:m.clientHeight||400;return{w:ee,h:Number(bt)}},g=new zT;g.background=new Ae(le.scene.background),l.current=g;const{w:v,h:y}=h(),S=new mi(le.camera.fov,v/y,le.camera.near,le.camera.far);S.position.set(le.camera.basePos.x,le.camera.basePos.y,le.camera.basePos.z),c.current=S;let E=s.current;E||(E=new PC({antialias:le.renderer.antialias,alpha:!0}),E.outputColorSpace=ai,s.current=E,m.appendChild(E.domElement)),E.setPixelRatio(Math.min(window.devicePixelRatio||1,le.renderer.maxPixelRatio)),E.setSize(v,y);const b=new KT(le.lights.ambient.color,le.lights.ambient.intensity),x=new ZT(le.lights.directional.color,le.lights.directional.intensity);x.position.copy(le.lights.directional.position),g.add(b,x);const _=ee=>{ee.traverse(bt=>{bt.geometry?.dispose?.(),bt.material&&(Array.isArray(bt.material)?bt.material.forEach(ne=>ne.dispose?.()):bt.material.dispose?.())})},L=(ee,bt,ne,Oe)=>{const Le=new Di,P=new Float32Array(ee*3);for(let Q=0;Q<ee;Q++)P[Q*3+0]=zd.randFloatSpread(bt),P[Q*3+1]=zd.randFloatSpread(bt),P[Q*3+2]=zd.randFloatSpread(bt);Le.setAttribute("position",new gi(P,3));const T=new gy({size:ne,transparent:!0,color:Oe});return new XT(Le,T)},C=new wr,A=L(le.stars.far.count,le.stars.far.spread,le.stars.far.size,le.stars.far.color),O=L(le.stars.near.count,le.stars.near.spread,le.stars.near.size,le.stars.near.color);C.add(A,O),g.add(C);const B=new wr;g.add(B);const{turns:I,pointsPerTurn:G,stepY:D,radius:U,sphereRadius:z,sphereSegments:nt,rungRadius:st,rungLength:ct,rungSegments:ft,rungEvery:F,scale:j}=le.dna,W=new Ls(z,nt,nt),St=new wp(st,st,ct,ft),N=new Z0({color:49151,metalness:.8,roughness:.2,emissive:2245734,emissiveIntensity:.4}),$=I*G,_t=new q0(W,N,$*2),Mt=new q0(St,N,Math.floor($/F));_t.instanceMatrix.setUsage(E0),Mt.instanceMatrix.setUsage(E0);const Ct=new Ye,et=new Ys,pt=new it,Et=new it(1,1,1);let Nt=0;for(let ee=0;ee<$;ee++){const bt=ee/G*Math.PI*2,ne=ee*D-$*D/2,Oe=Math.cos(bt)*U,Le=Math.sin(bt)*U,P=Math.cos(bt+Math.PI)*U,T=Math.sin(bt+Math.PI)*U;pt.set(Oe,ne,Le),et.identity(),Ct.compose(pt,et,Et),_t.setMatrixAt(Nt++,Ct),pt.set(P,ne,T),et.identity(),Ct.compose(pt,et,Et),_t.setMatrixAt(Nt++,Ct)}_t.instanceMatrix.needsUpdate=!0,B.add(_t);let qt=0;for(let ee=0;ee<$;ee+=F){const bt=ee/G*Math.PI*2,ne=ee*D-$*D/2,Oe=Math.cos(bt)*U,Le=Math.sin(bt)*U,P=Math.cos(bt+Math.PI)*U,T=Math.sin(bt+Math.PI)*U,Q=(Oe+P)/2,dt=(Le+T)/2;pt.set(Q,ne,dt);const vt=new it(P-Oe,0,T-Le).normalize(),ut=new it(0,1,0);et.setFromUnitVectors(ut,vt),Ct.compose(pt,et,Et),Mt.setMatrixAt(qt++,Ct)}Mt.instanceMatrix.needsUpdate=!0,B.add(Mt),B.scale.set(j,j,j);const Vt=le.blackHole,Ee=new wr,me=new jn(new Ls(Vt.core.radius,Vt.core.widthSegments,Vt.core.heightSegments),new Z0({color:Vt.core.color,roughness:Vt.core.roughness,metalness:Vt.core.metalness,emissive:Vt.core.emissive,emissiveIntensity:Vt.core.emissiveIntensity})),V=new jn(new Ls(Vt.glow.radius,32,32),new hu({color:Vt.glow.color,transparent:!0,opacity:Vt.glow.opacity,blending:cu,side:Pn})),Re=new jn(new Ls(Vt.halo.radius,32,32),new hu({color:Vt.halo.color,transparent:!0,opacity:Vt.halo.opacity,blending:cu,side:Pn}));Ee.add(me,V,Re),Ee.scale.set(Vt.scale,Vt.scale,Vt.scale),g.add(Ee);const Qt=new JT,Se=()=>{const ee=Qt.getDelta(),bt=Qt.elapsedTime;B.rotation.y+=le.dna.rotYSpeed*ee,B.rotation.x=Math.sin(bt*le.dna.wobbleXSpeed)*le.dna.wobbleXAmp,Ee.rotation.y-=le.blackHole.rotYSpeed*ee,Ee.rotation.x=Math.cos(bt*le.blackHole.wobbleXSpeed)*le.blackHole.wobbleXAmp,C.rotation.y+=le.stars.far.rotYSpeed*ee,A.position.x=Math.sin(bt*le.stars.far.driftXSpeed)*le.stars.far.driftXAmp,A.position.y=Math.cos(bt*le.stars.far.driftYSpeed)*le.stars.far.driftYAmp,O.rotation.y+=le.stars.near.rotYSpeed*ee,O.position.x=Math.sin(bt*le.stars.near.driftXSpeed+le.stars.near.phaseOffset)*le.stars.near.driftXAmp,O.position.y=Math.cos(bt*le.stars.near.driftYSpeed+le.stars.near.phaseOffset*.666)*le.stars.near.driftYAmp,S.position.x=Math.sin(bt*le.camera.bobXSpeed)*le.camera.bobXAmp,S.position.y=le.camera.basePos.y+Math.sin(bt*le.camera.bobYSpeed)*le.camera.bobYAmp,S.lookAt(0,0,0),E.render(g,S),f.current=requestAnimationFrame(Se)};Se();const Ht=()=>{d.current&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{const{w:ee,h:bt}=h();E.setSize(ee,bt),S.aspect=ee/bt,S.updateProjectionMatrix()})};return window.addEventListener("resize",Ht),()=>{f.current&&cancelAnimationFrame(f.current),d.current&&cancelAnimationFrame(d.current),window.removeEventListener("resize",Ht),_(C),_(B),_(Ee),g.remove(C,B,Ee),s.current?.dispose(),s.current&&m.contains(s.current.domElement)&&m.removeChild(s.current.domElement),s.current=null,l.current=null,c.current=null}},[t]),ht.jsxs("header",{className:a,style:{position:"relative",width:"100%",height:t},children:[ht.jsx("div",{ref:i,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}}),ht.jsx("div",{style:{position:"relative",zIndex:1,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"auto"}})]})}const BC=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Ds=64;function zC(){const a=mu(),{setToken:t,setUsername:i,setRole:s}=gp(),[l,c]=Z.useState(""),[f,d]=Z.useState(""),[m,h]=Z.useState(!1),[g,v]=Z.useState(""),[y,S]=Z.useState(""),[E,b]=Z.useState(""),x=async()=>{v(""),S(""),b(""),h(!0);const _=l.trim();if(_?_.length>Ds?v("Email is too long."):BC.test(_)||v("Email format is invalid."):v("Email is required."),f?f.length>Ds&&S("Password is too long."):S("Password is required."),!_||!f||_.length>Ds||f.length>Ds){h(!1);return}try{const L=await xu.post("/api/auth/login",{email:_,password:f});if(!L.token){b("Login succeeded but no token was returned.");return}t(L.token),i(L.username??null),s(L.role??null),a(sl.Dashboard,{replace:!0})}catch(L){const C=L;if(C?.response?.status===400&&C.response.data?.errors){const A=C.response.data.errors;A.email?.length&&v(A.email[0]),A.password?.length&&S(A.password[0]),A.general?.length&&b(A.general[0]),!A.email?.length&&!A.password?.length&&!A.general?.length&&b("Invalid input.")}else C?.response?.status===401?b("Invalid email or password."):b("Login failed. Please try again.");d("")}finally{h(!1)}};return ht.jsx("div",{className:"sectionShell",children:ht.jsxs("section",{className:"sectionCard",children:[ht.jsx("h1",{className:"pageTitle",children:"Login"}),ht.jsx("div",{className:"accentDivider"}),ht.jsxs("div",{className:"formColumn formColumnWide",children:[ht.jsxs("div",{className:"field",children:[ht.jsx("input",{className:`inputField ${g?"inputError":""}`,placeholder:"Email",type:"email",value:l,onChange:_=>c(_.target.value),"aria-invalid":!!g,"aria-describedby":"email-error",maxLength:Ds}),ht.jsx("span",{id:"email-error",className:"errorFloat",children:g})]}),ht.jsxs("div",{className:"field",children:[ht.jsx("input",{className:`inputField ${y?"inputError":""}`,placeholder:"Password",type:"password",value:f,onChange:_=>d(_.target.value),"aria-invalid":!!y,"aria-describedby":"password-error",maxLength:Ds}),ht.jsx("span",{id:"password-error",className:"errorFloat",children:y})]}),ht.jsx("button",{onClick:x,className:"sectionButton",style:{alignSelf:"center"},disabled:m,children:m?"Logging in...":"Login"}),ht.jsx("div",{className:"generalErrorSlot",role:"alert",children:m?ht.jsx("span",{className:"spinner"}):E&&ht.jsx("span",{className:"errorText",children:E})})]})]})})}function FC(){const[a,t]=zv(),i=(a.get("tab")||"").toLowerCase(),l=Object.values(gn).includes(i);Z.useEffect(()=>{l||t({tab:gn.GameOverview},{replace:!0})},[l,t]);const c=l?i:gn.GameOverview,f=m=>{t({tab:m},{replace:!0})},d=()=>{switch(c){case gn.GameOverview:return ht.jsx(nb,{});case gn.Features:return ht.jsx(ib,{});case gn.Media:return ht.jsx(ab,{});case gn.FAQ:return ht.jsx(rb,{});case gn.Feedback:return ht.jsx(ob,{});case gn.About:return ht.jsx(lb,{});case gn.Login:return ht.jsx(zC,{});default:return ht.jsx("h1",{children:"Not Found"})}};return ht.jsxs("div",{className:"main-layout",children:[ht.jsxs(tb,{className:"side-bar",children:[ht.jsx("div",{style:{marginBottom:"3rem",display:"flex",justifyContent:"center"},children:ht.jsx($E,{size:"100%"})}),QE.map(m=>ht.jsx(eb,{className:`sideBarItemButton ${c===m.linkTo?"selected":""}`,name:m.name,onClick:()=>f(m.linkTo),disabled:m.disabled,tooltip:m.tooltip},m.name))]}),ht.jsxs("div",{className:"info-panel",children:[ht.jsx(IC,{height:"40vh"}),ht.jsx(JE,{className:"details-view",children:d()})]})]})}function HC(){return ht.jsx(FC,{})}const da={Overview:"overview",FeedBack:"feedback",Files:"files"},GC=[{name:"Overview",linkTo:da.Overview,disabled:!1},{name:"Manage Feedback",linkTo:da.FeedBack,disabled:!1},{name:"Manage Files",linkTo:da.Files,disabled:!1}];function VC(){return ht.jsx("div",{style:{width:"100%",maxWidth:900},children:ht.jsx("h1",{children:"Overview Section"})})}async function kC(){return await xu.get("/api/feedback")}async function XC(a){await xu.delete(`/api/feedback/${a}`)}function WC(){const[a,t]=Z.useState([]),[i,s]=Z.useState(!1),[l,c]=Z.useState(null),[f,d]=Z.useState(""),m=async()=>{s(!0),d("");try{const v=await kC();t(v),c(new Date().toLocaleString())}catch{d("Failed to load feedback.")}finally{s(!1)}};Z.useEffect(()=>{m()},[]);const h=async v=>{d("");const y=a;t(S=>S.filter(E=>E.id!==v));try{await XC(v)}catch{t(y),d("Failed to delete feedback.")}},g=v=>{if(!v||v<1)return null;const y="★".repeat(Math.min(5,v)),S="☆".repeat(Math.max(0,5-v));return ht.jsxs("span",{className:"starsRow","aria-label":`Rating: ${v} out of 5`,style:{fontSize:"0.95rem"},children:[y,S]})};return ht.jsxs("div",{className:"w-100 max-900",children:[ht.jsxs("div",{className:"sectionHeader",children:[ht.jsxs("div",{children:[ht.jsx("h1",{style:{margin:0},children:"Feedback Inbox"}),ht.jsxs("div",{className:"metaSubtle",children:[a.length," item",a.length!==1?"s":"",l?` • Last refreshed: ${l}`:""]})]}),ht.jsxs("button",{className:"sectionButton",onClick:m,disabled:i,"aria-label":"Refresh feedback list",title:"Refresh",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem"},children:[i?ht.jsx("span",{className:"spinner"}):null,i?"Refreshing...":"Refresh"]})]}),f?ht.jsx("div",{className:"errorText",style:{marginBottom:"0.75rem"},children:f}):null,ht.jsx("div",{className:"listStack",children:a.length===0?ht.jsx("p",{children:"No feedback available."}):a.map(v=>ht.jsxs("article",{className:"card",children:[ht.jsxs("header",{className:"cardHeader",children:[ht.jsxs("div",{children:[ht.jsx("strong",{className:"breakText",children:v.name}),ht.jsx("div",{className:"metaSubtle",children:v.datePosted})]}),ht.jsx("button",{className:"sectionButton",onClick:()=>h(v.id),"aria-label":`Delete feedback from ${v.name}`,title:"Delete",children:"Delete"})]}),v.rating?ht.jsx("div",{style:{marginBottom:"0.5rem",color:"#a8d9ff"},children:g(v.rating)}):null,ht.jsx("div",{className:"cardBody breakText",children:v.message})]},v.id))})]})}function qC(){return ht.jsx("div",{style:{width:"100%",maxWidth:900},children:ht.jsx("h1",{children:"Manage Files Section"})})}function YC(){const{setToken:a,username:t,setUsername:i}=gp(),[s,l]=zv(),c=(s.get("tab")||"").toLowerCase(),d=Object.values(da).includes(c);Z.useEffect(()=>{d||l({tab:da.Overview},{replace:!0})},[d,l]);const m=d?c:da.Overview,h=y=>{l({tab:y},{replace:!0})},g=()=>{qv(null),a(null),i(null),window.location.assign(`${sl.Homepage}?${al({tab:gn.Login})}`)},v=()=>{switch(m){case da.Overview:return ht.jsx(VC,{});case da.FeedBack:return ht.jsx(WC,{});case da.Files:return ht.jsx(qC,{});default:return ht.jsx("h1",{children:"Not Found"})}};return ht.jsxs("div",{className:"main-layout",children:[ht.jsxs("aside",{className:"side-bar",children:[ht.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"2rem"},children:[ht.jsx("img",{src:"default_profile_icon.png",style:{width:"80px",height:"80px",borderRadius:"50%",marginBottom:"0.5rem",border:"2px solid #2196f3"},alt:"Profile"}),ht.jsx("div",{style:{fontSize:"1rem",fontWeight:"bold",color:"#fff"},children:t??""})]}),GC.map(y=>ht.jsx("button",{className:`sideBarItemButton ${m===y.linkTo?"selected":""}`,onClick:()=>h(y.linkTo),disabled:y.disabled,title:y.tooltip,style:{marginBottom:"2rem"},children:y.name},y.name))]}),ht.jsxs("section",{className:"info-panel",children:[ht.jsx("header",{className:"header",style:{width:"100%"},children:ht.jsxs("div",{style:{width:"100%",display:"flex",alignItems:"center",gap:"1rem"},children:[ht.jsx("div",{style:{flex:1},children:"Header stuff here"}),ht.jsx("button",{className:"sectionButton",onClick:g,"aria-label":"Logout",children:"Logout"})]})}),ht.jsx("div",{className:"details-view",children:v()})]})]})}function jC(){return ht.jsx(YC,{})}function ZC(){return ht.jsx(ZE,{children:ht.jsxs(iE,{children:[ht.jsxs(NM,{children:[ht.jsx($c,{path:sl.Homepage,element:ht.jsx(HC,{})}),ht.jsx($c,{element:ht.jsx(KE,{}),children:ht.jsx($c,{path:sl.Dashboard,element:ht.jsx(jC,{})})})]}),ht.jsx(YE,{position:"top-center",autoClose:3e3})]})})}FS.createRoot(document.getElementById("root")).render(ht.jsx(Z.StrictMode,{children:ht.jsx(ZC,{})}));
