(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var nh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function PS(){if(S_)return No;S_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var y_;function BS(){return y_||(y_=1,nh.exports=PS()),nh.exports}var se=BS(),ih={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function IS(){if(M_)return ue;M_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(U,J,vt){this.props=U,this.context=J,this.refs=A,this.updater=vt||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function B(U,J,vt){this.props=U,this.context=J,this.refs=A,this.updater=vt||M}var L=B.prototype=new g;L.constructor=B,E(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function H(U,J,vt,Mt,Dt,tt){return vt=tt.ref,{$$typeof:s,type:U,key:J,ref:vt!==void 0?vt:null,props:tt}}function X(U,J){return H(U.type,J,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function w(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return J[vt]})}var z=/\/+/g;function at(U,J){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):J.toString(36)}function ot(){}function lt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ot,ot):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ct(U,J,vt,Mt,Dt){var tt=typeof U;(tt==="undefined"||tt==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(tt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case s:case t:dt=!0;break;case _:return dt=U._init,ct(dt(U._payload),J,vt,Mt,Dt)}}if(dt)return Dt=Dt(U),dt=Mt===""?"."+at(U,0):Mt,D(Dt)?(vt="",dt!=null&&(vt=dt.replace(z,"$&/")+"/"),ct(Dt,J,vt,"",function(Bt){return Bt})):Dt!=null&&(C(Dt)&&(Dt=X(Dt,vt+(Dt.key==null||U&&U.key===Dt.key?"":(""+Dt.key).replace(z,"$&/")+"/")+dt)),J.push(Dt)),1;dt=0;var Et=Mt===""?".":Mt+":";if(D(U))for(var St=0;St<U.length;St++)Mt=U[St],tt=Et+at(Mt,St),dt+=ct(Mt,J,vt,tt,Dt);else if(St=x(U),typeof St=="function")for(U=St.call(U),St=0;!(Mt=U.next()).done;)Mt=Mt.value,tt=Et+at(Mt,St++),dt+=ct(Mt,J,vt,tt,Dt);else if(tt==="object"){if(typeof U.then=="function")return ct(lt(U),J,vt,Mt,Dt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(U,J,vt){if(U==null)return U;var Mt=[],Dt=0;return ct(U,Mt,"","",function(tt){return J.call(vt,tt,Dt++)}),Mt}function j(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ue.Children={map:P,forEach:function(U,J,vt){P(U,function(){J.apply(this,arguments)},vt)},count:function(U){var J=0;return P(U,function(){J++}),J},toArray:function(U){return P(U,function(J){return J})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ue.Component=S,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=B,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cloneElement=function(U,J,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Mt=E({},U.props),Dt=U.key,tt=void 0;if(J!=null)for(dt in J.ref!==void 0&&(tt=void 0),J.key!==void 0&&(Dt=""+J.key),J)!G.call(J,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&J.ref===void 0||(Mt[dt]=J[dt]);var dt=arguments.length-2;if(dt===1)Mt.children=vt;else if(1<dt){for(var Et=Array(dt),St=0;St<dt;St++)Et[St]=arguments[St+2];Mt.children=Et}return H(U.type,Dt,void 0,void 0,tt,Mt)},ue.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ue.createElement=function(U,J,vt){var Mt,Dt={},tt=null;if(J!=null)for(Mt in J.key!==void 0&&(tt=""+J.key),J)G.call(J,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Dt[Mt]=J[Mt]);var dt=arguments.length-2;if(dt===1)Dt.children=vt;else if(1<dt){for(var Et=Array(dt),St=0;St<dt;St++)Et[St]=arguments[St+2];Dt.children=Et}if(U&&U.defaultProps)for(Mt in dt=U.defaultProps,dt)Dt[Mt]===void 0&&(Dt[Mt]=dt[Mt]);return H(U,tt,void 0,void 0,null,Dt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:d,render:U}},ue.isValidElement=C,ue.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:j}},ue.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},ue.startTransition=function(U){var J=O.T,vt={};O.T=vt;try{var Mt=U(),Dt=O.S;Dt!==null&&Dt(vt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(yt,q)}catch(tt){q(tt)}finally{O.T=J}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(U){return O.H.use(U)},ue.useActionState=function(U,J,vt){return O.H.useActionState(U,J,vt)},ue.useCallback=function(U,J){return O.H.useCallback(U,J)},ue.useContext=function(U){return O.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,J){return O.H.useDeferredValue(U,J)},ue.useEffect=function(U,J,vt){var Mt=O.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(U,J)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(U,J,vt){return O.H.useImperativeHandle(U,J,vt)},ue.useInsertionEffect=function(U,J){return O.H.useInsertionEffect(U,J)},ue.useLayoutEffect=function(U,J){return O.H.useLayoutEffect(U,J)},ue.useMemo=function(U,J){return O.H.useMemo(U,J)},ue.useOptimistic=function(U,J){return O.H.useOptimistic(U,J)},ue.useReducer=function(U,J,vt){return O.H.useReducer(U,J,vt)},ue.useRef=function(U){return O.H.useRef(U)},ue.useState=function(U){return O.H.useState(U)},ue.useSyncExternalStore=function(U,J,vt){return O.H.useSyncExternalStore(U,J,vt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.1.0",ue}var E_;function Dd(){return E_||(E_=1,ih.exports=IS()),ih.exports}var mt=Dd(),ah={exports:{}},Oo={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function zS(){return T_||(T_=1,function(s){function t(P,j){var q=P.length;P.push(j);t:for(;0<q;){var yt=q-1>>>1,U=P[yt];if(0<l(U,j))P[yt]=j,P[q]=U,q=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],q=P.pop();if(q!==j){P[0]=q;t:for(var yt=0,U=P.length,J=U>>>1;yt<J;){var vt=2*(yt+1)-1,Mt=P[vt],Dt=vt+1,tt=P[Dt];if(0>l(Mt,q))Dt<U&&0>l(tt,Mt)?(P[yt]=tt,P[Dt]=q,yt=Dt):(P[yt]=Mt,P[vt]=q,yt=vt);else if(Dt<U&&0>l(tt,q))P[yt]=tt,P[Dt]=q,yt=Dt;else break t}}return j}function l(P,j){var q=P.sortIndex-j.sortIndex;return q!==0?q:P.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,E=!1,A=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function O(P){if(A=!1,D(P),!E)if(i(m)!==null)E=!0,G||(G=!0,at());else{var j=i(p);j!==null&&ct(O,j.startTime-P)}}var G=!1,H=-1,X=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<X)}function z(){if(S=!1,G){var P=s.unstable_now();C=P;var j=!0;try{t:{E=!1,A&&(A=!1,B(H),H=-1),M=!0;var q=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=P);if(P=s.unstable_now(),typeof U=="function"){v.callback=U,D(P),j=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)j=!0;else{var J=i(p);J!==null&&ct(O,J.startTime-P),j=!1}}break t}finally{v=null,x=q,M=!1}j=void 0}}finally{j?at():G=!1}}}var at;if(typeof L=="function")at=function(){L(z)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,lt=ot.port2;ot.port1.onmessage=z,at=function(){lt.postMessage(null)}}else at=function(){g(z,0)};function ct(P,j){H=g(function(){P(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return P()}finally{x=q}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return j()}finally{x=q}},s.unstable_scheduleCallback=function(P,j,q){var yt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:_++,callback:j,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>yt?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(A?(B(H),H=-1):A=!0,ct(O,q-yt))):(P.sortIndex=U,t(m,P),E||M||(E=!0,G||(G=!0,at()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var j=x;return function(){var q=x;x=j;try{return P.apply(this,arguments)}finally{x=q}}}}(sh)),sh}var b_;function FS(){return b_||(b_=1,rh.exports=zS()),rh.exports}var oh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function HS(){if(A_)return wn;A_=1;var s=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var R_;function GS(){if(R_)return oh.exports;R_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),oh.exports=HS(),oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function VS(){if(w_)return Oo;w_=1;var s=FS(),t=Dd(),i=GS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return d(c),e;if(h===o)return d(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,o=h;break}if(b===o){y=!0,o=c,a=h;break}b=b.sibling}if(!y){for(b=h.child;b;){if(b===a){y=!0,a=h,o=c;break}if(b===o){y=!0,o=h,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function J(e){return{current:e}}function vt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function Mt(e,n){U++,yt[U]=e.current,e.current=n}var Dt=J(null),tt=J(null),dt=J(null),Et=J(null);function St(e,n){switch(Mt(dt,n),Mt(tt,e),Mt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zg(n),e=jg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Dt),Mt(Dt,e)}function Bt(){vt(Dt),vt(tt),vt(dt)}function Qt(e){e.memoizedState!==null&&Mt(Et,e);var n=Dt.current,a=jg(n,e.type);n!==a&&(Mt(tt,e),Mt(Dt,a))}function Ee(e){tt.current===e&&(vt(Dt),vt(tt)),Et.current===e&&(vt(Et),wo._currentValue=q)}var oe=Object.prototype.hasOwnProperty,F=s.unstable_scheduleCallback,xe=s.unstable_cancelCallback,jt=s.unstable_shouldYield,Se=s.unstable_requestPaint,zt=s.unstable_now,Oe=s.unstable_getCurrentPriorityLevel,Ht=s.unstable_ImmediatePriority,re=s.unstable_UserBlockingPriority,ke=s.unstable_NormalPriority,Xe=s.unstable_LowPriority,N=s.unstable_IdlePriority,T=s.log,$=s.unstable_setDisableYieldValue,ft=null,xt=null;function ut(e){if(typeof T=="function"&&$(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(ft,e)}catch{}}var It=Math.clz32?Math.clz32:Yt,wt=Math.log,Wt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(wt(e)/Wt|0)|0}var Tt=256,Nt=4194304;function Kt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=Kt(o):(y&=b,y!==0?c=Kt(y):a||(a=b&~e,a!==0&&(c=Kt(a))))):(b=o&~h,b!==0?c=Kt(b):y!==0?c=Kt(y):a||(a=o&~e,a!==0&&(c=Kt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Rt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,c,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=y&~a;0<a;){var ht=31-It(a),gt=1<<ht;b[ht]=0,I[ht]=-1;var et=Q[ht];if(et!==null)for(Q[ht]=null,ht=0;ht<et.length;ht++){var it=et[ht];it!==null&&(it.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function kt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:p_(e.type))}function hi(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var un=Math.random().toString(36).slice(2),cn="__reactFiber$"+un,Ke="__reactProps$"+un,Ei="__reactContainer$"+un,Tr="__reactEvents$"+un,nl="__reactListeners$"+un,br="__reactHandles$"+un,Fs="__reactResources$"+un,Ti="__reactMarker$"+un;function Ar(e){delete e[cn],delete e[Ke],delete e[Tr],delete e[nl],delete e[br]}function zi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$g(e);e!==null;){if(a=e[cn])return a;e=$g(e)}return n}e=a,a=e.parentNode}return null}function fa(e){if(e=e[cn]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ha(e){var n=e[Fs];return n||(n=e[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Ti]=!0}var il=new Set,al={};function R(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(al[e]=n,e=0;e<n.length;e++)il.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Z={};function At(e){return oe.call(Z,e)?!0:oe.call(st,e)?!1:rt.test(e)?Z[e]=!0:(st[e]=!0,!1)}function Lt(e,n,a){if(At(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Gt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,ee;function qt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var fe=!1;function Ae(e,n){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var et=it}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(it){et=it}e.call(gt.prototype)}}else{try{throw Error()}catch(it){et=it}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],b=h[1];if(y&&b){var I=y.split(`
`),Q=b.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===Q.length)for(o=I.length-1,c=Q.length-1;1<=o&&0<=c&&I[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==Q[c]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=c);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return qt("Activity");default:return""}}function Pe(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=We(e))}function bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function mn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,a,o,c,h,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,he(n)):a!=null?An(e,y,he(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+he(b):e.removeAttribute("name")}function Nn(e,n,a,o,c,h,y,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function An(e,n,a){n==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Rr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var L0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||L0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Zd(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Zd(e,h,n[h])}function tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return O0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ec=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Cr=null;function Kd(e){var n=fa(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Ke]||null;if(!c)throw Error(r(90));He(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&bn(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var ic=!1;function Qd(e,n,a){if(ic)return e(n,a);ic=!0;try{var o=e(n);return o}finally{if(ic=!1,(wr!==null||Cr!==null)&&(Xl(),wr&&(n=wr,e=Cr,Cr=wr=null,Kd(n),e)))for(n=0;n<e.length;n++)Kd(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Fi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{ac=!1}var da=null,rc=null,sl=null;function Jd(){if(sl)return sl;var e,n=rc,a=n.length,o,c="value"in da?da.value:da.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[h-o];o++);return sl=c.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function $d(){return!1}function Hn(e){function n(a,o,c,h,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ll:$d,this.isPropagationStopped=$d,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Hn(Ya),Vs=_({},Ya,{view:0,detail:0}),P0=Hn(Vs),sc,oc,ks,cl=_({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(sc=e.screenX-ks.screenX,oc=e.screenY-ks.screenY):oc=sc=0,ks=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),tp=Hn(cl),B0=_({},cl,{dataTransfer:0}),I0=Hn(B0),z0=_({},Vs,{relatedTarget:0}),lc=Hn(z0),F0=_({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Hn(F0),G0=_({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Hn(G0),k0=_({},Ya,{data:0}),ep=Hn(k0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=q0[e])?!!n[e]:!1}function uc(){return Y0}var Z0=_({},Vs,{key:function(e){if(e.key){var n=X0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j0=Hn(Z0),K0=_({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Hn(K0),Q0=_({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),J0=Hn(Q0),$0=_({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=Hn($0),ex=_({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Hn(ex),ix=_({},Ya,{newState:0,oldState:0}),ax=Hn(ix),rx=[9,13,27,32],cc=Fi&&"CompositionEvent"in window,Xs=null;Fi&&"documentMode"in document&&(Xs=document.documentMode);var sx=Fi&&"TextEvent"in window&&!Xs,ip=Fi&&(!cc||Xs&&8<Xs&&11>=Xs),ap=" ",rp=!1;function sp(e,n){switch(e){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function ox(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(rp=!0,ap);case"textInput":return e=n.data,e===ap&&rp?null:e;default:return null}}function lx(e,n){if(Dr)return e==="compositionend"||!cc&&sp(e,n)?(e=Jd(),sl=rc=da=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ux[e.type]:n==="textarea"}function up(e,n,a,o){wr?Cr?Cr.push(o):Cr=[o]:wr=o,n=Kl(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ws=null,qs=null;function cx(e){kg(e,0)}function fl(e){var n=qa(e);if(bn(n))return e}function cp(e,n){if(e==="change")return n}var fp=!1;if(Fi){var fc;if(Fi){var hc="oninput"in document;if(!hc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),hc=typeof hp.oninput=="function"}fc=hc}else fc=!1;fp=fc&&(!document.documentMode||9<document.documentMode)}function dp(){Ws&&(Ws.detachEvent("onpropertychange",pp),qs=Ws=null)}function pp(e){if(e.propertyName==="value"&&fl(qs)){var n=[];up(n,qs,e,nc(e)),Qd(cx,n)}}function fx(e,n,a){e==="focusin"?(dp(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",pp)):e==="focusout"&&dp()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(qs)}function dx(e,n){if(e==="click")return fl(n)}function px(e,n){if(e==="input"||e==="change")return fl(n)}function mx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:mx;function Ys(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!oe.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,n){var a=mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mp(a)}}function _p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=di(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=di(e.document)}return n}function dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gx=Fi&&"documentMode"in document&&11>=document.documentMode,Ur=null,pc=null,Zs=null,mc=!1;function xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Ur==null||Ur!==di(o)||(o=Ur,"selectionStart"in o&&dc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zs&&Ys(Zs,o)||(Zs=o,o=Kl(pc,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ur)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},gc={},Sp={};Fi&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ja(e){if(gc[e])return gc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return gc[e]=n[a];return e}var yp=ja("animationend"),Mp=ja("animationiteration"),Ep=ja("animationstart"),_x=ja("transitionrun"),vx=ja("transitionstart"),xx=ja("transitioncancel"),Tp=ja("transitionend"),bp=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function pi(e,n){bp.set(e,n),R(n,[e])}var Ap=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pe(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var ni=[],Nr=0,vc=0;function hl(){for(var e=Nr,n=vc=Nr=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}h!==0&&Rp(a,c,h)}}function dl(e,n,a,o){ni[Nr++]=e,ni[Nr++]=n,ni[Nr++]=a,ni[Nr++]=o,vc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function xc(e,n,a,o){return dl(e,n,a,o),pl(e)}function Or(e,n){return dl(e,null,null,n),pl(e)}function Rp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-It(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function pl(e){if(50<So)throw So=0,Af=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function Sx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Sx(e,n,a,o)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,o,c,h){var y=0;if(o=e,typeof e=="function")Sc(e)&&(y=1);else if(typeof e=="string")y=MS(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=h,e;case E:return Ka(a.children,c,h,n);case A:y=8,c|=24;break;case S:return e=qn(12,a,n,c|2),e.elementType=S,e.lanes=h,e;case O:return e=qn(13,a,n,c),e.elementType=O,e.lanes=h,e;case G:return e=qn(19,a,n,c),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case L:y=10;break t;case B:y=9;break t;case D:y=11;break t;case H:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function Ka(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function yc(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Mc(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Ir=0,gl=null,_l=0,ii=[],ai=0,Qa=null,Gi=1,Vi="";function Ja(e,n){Br[Ir++]=_l,Br[Ir++]=gl,gl=e,_l=n}function Cp(e,n,a){ii[ai++]=Gi,ii[ai++]=Vi,ii[ai++]=Qa,Qa=e;var o=Gi;e=Vi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var h=32-It(n)+c;if(30<h){var y=c-c%5;h=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Gi=1<<32-It(n)+c|a<<c|o,Vi=h+e}else Gi=1<<h|a<<c|o,Vi=e}function Ec(e){e.return!==null&&(Ja(e,1),Cp(e,1,0))}function Tc(e){for(;e===gl;)gl=Br[--Ir],Br[Ir]=null,_l=Br[--Ir],Br[Ir]=null;for(;e===Qa;)Qa=ii[--ai],ii[ai]=null,Vi=ii[--ai],ii[ai]=null,Gi=ii[--ai],ii[ai]=null}var On=null,Je=null,De=!1,$a=null,bi=!1,bc=Error(r(519));function tr(e){var n=Error(r(418,""));throw Qs(ei(n,e)),bc}function Dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Ke]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ve(Mo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Rr(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||tr(e)}function Up(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:On=On.return}}function js(e){if(e!==On)return!1;if(!De)return Up(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vf(e.type,e.memoizedProps)),a=!a),a&&Je&&tr(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ca(e.type)?(e=qf,qf=null,Je=e):Je=n):Je=On?gi(e.stateNode.nextSibling):null;return!0}function Ks(){Je=On=null,De=!1}function Lp(){var e=$a;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),$a=null),e}function Qs(e){$a===null?$a=[e]:$a.push(e)}var Ac=J(null),er=null,ki=null;function pa(e,n,a){Mt(Ac,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Ac.current,vt(Ac)}function Rc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function wc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),Rc(h.return,a,e),o||(y=null);break t}h=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Rc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Js(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;Wn(c.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(c===Et.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&wc(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Np(er,e)}function xl(e,n){return er===null&&nr(e),Np(e,n)}function Np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var yx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Mx=s.unstable_scheduleCallback,Ex=s.unstable_NormalPriority,fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new yx,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&Mx(Ex,function(){e.controller.abort()})}var to=null,Dc=0,zr=0,Fr=null;function Tx(e,n){if(to===null){var a=to=[];Dc=0,zr=Nf(),Fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Dc++,n.then(Op,Op),n}function Op(){if(--Dc===0&&to!==null){Fr!==null&&(Fr.status="fulfilled");var e=to;to=null,zr=0,Fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Pp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(e,n),Pp!==null&&Pp(e,n)};var ir=J(null);function Uc(){var e=ir.current;return e!==null?e:Ve.pooledCache}function Sl(e,n){n===null?Mt(ir,ir.current):Mt(ir,n.pool)}function Bp(){var e=Uc();return e===null?null:{parent:fn._currentValue,pool:e}}var eo=Error(r(460)),Ip=Error(r(474)),yl=Error(r(542)),Lc={then:function(){}};function zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ml(){}function Fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ml,Ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e;default:if(typeof n.status=="string")n.then(Ml,Ml);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e}throw no=n,eo}}var no=null;function Hp(){if(no===null)throw Error(r(459));var e=no;return no=null,e}function Gp(e){if(e===eo||e===yl)throw Error(r(483))}var ma=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=pl(e),Rp(e,null,a),n}return dl(e,o,n,a),pl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kt(e,a)}}function Pc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bc=!1;function ao(){if(Bc){var e=Fr;if(e!==null)throw e}}function ro(e,n,a,o){Bc=!1;var c=e.updateQueue;ma=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,Q=I.next;I.next=null,y===null?h=Q:y.next=Q,y=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==y&&(b===null?ht.firstBaseUpdate=Q:b.next=Q,ht.lastBaseUpdate=I))}if(h!==null){var gt=c.baseState;y=0,ht=Q=I=null,b=h;do{var et=b.lane&-536870913,it=et!==b.lane;if(it?(Me&et)===et:(o&et)===et){et!==0&&et===zr&&(Bc=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ie=e,te=b;et=n;var ze=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){gt=ie.call(ze,gt,et);break t}gt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,et=typeof ie=="function"?ie.call(ze,gt,et):ie,et==null)break t;gt=_({},gt,et);break t;case 2:ma=!0}}et=b.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(Q=ht=it,I=gt):ht=ht.next=it,y|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ht===null&&(I=gt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ht,h===null&&(c.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=gt}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var Hr=J(null),El=J(0);function Xp(e,n){e=Qi,Mt(El,e),Mt(Hr,n),Qi=e|n.baseLanes}function Ic(){Mt(El,Qi),Mt(Hr,Hr.current)}function zc(){Qi=El.current,vt(Hr),vt(El)}var va=0,pe=null,Be=null,sn=null,Tl=!1,Gr=!1,ar=!1,bl=0,so=0,Vr=null,Ax=0;function nn(){throw Error(r(321))}function Fc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Hc(e,n,a,o,c,h){return va=h,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Rm:wm,ar=!1,h=a(o,c),ar=!1,Gr&&(h=qp(n,a,o,c)),Wp(e),h}function Wp(e){P.H=Ul;var n=Be!==null&&Be.next!==null;if(va=0,sn=Be=pe=null,Tl=!1,so=0,Vr=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&vl(e)&&(gn=!0))}function qp(e,n,a,o){pe=e;var c=0;do{if(Gr&&(Vr=null),so=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,sn=Be=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Nx,h=n(a,o)}while(Gr);return h}function Rx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(pe.flags|=1024),n}function Gc(){var e=bl!==0;return bl=0,e}function Vc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function kc(e){if(Tl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tl=!1}va=0,sn=Be=pe=null,Gr=!1,so=bl=0,Vr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?pe.memoizedState=sn=e:sn=sn.next=e,sn}function on(){if(Be===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=sn===null?pe.memoizedState:sn.next;if(n!==null)sn=n,Be=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},sn===null?pe.memoizedState=sn=e:sn=sn.next=e}return sn}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Vr===null&&(Vr=[]),e=Fp(Vr,e,n),n=pe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Rm:wm),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===L)return Rn(e)}throw Error(r(438,String(e)))}function Wc(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xc(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=on();return qc(n,Be,e)}function qc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var b=y=null,I=null,Q=n,ht=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(Me&gt)===gt:(va&gt)===gt){var et=Q.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===zr&&(ht=!0);else if((va&et)===et){Q=Q.next,et===zr&&(ht=!0);continue}else gt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=gt,y=h):I=I.next=gt,pe.lanes|=et,ba|=et;gt=Q.action,ar&&a(h,gt),h=Q.hasEagerState?Q.eagerState:a(h,gt)}else et={lane:gt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=et,y=h):I=I.next=et,pe.lanes|=gt,ba|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?y=h:I.next=b,!Wn(h,e.memoizedState)&&(gn=!0,ht&&(a=Fr,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=I,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yc(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);Wn(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Yp(e,n,a){var o=pe,c=on(),h=De;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Wn((Be||c).memoizedState,a);y&&(c.memoizedState=a,gn=!0),c=c.queue;var b=Kp.bind(null,o,c,e);if(lo(2048,8,b,[e]),c.getSnapshot!==n||y||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,kr(9,wl(),jp.bind(null,o,c,a,n),null),Ve===null)throw Error(r(349));h||(va&124)!==0||Zp(o,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Xc(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function jp(e,n,a,o){n.value=a,n.getSnapshot=o,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Jp(e){var n=Or(e,2);n!==null&&Qn(n,e,2)}function Zc(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),ar){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function $p(e,n,a,o){return e.baseState=a,qc(e,Be,typeof o=="function"?o:Wi)}function wx(e,n,a,o,c){if(Dl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,tm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function tm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var b=a(c,o),I=P.S;I!==null&&I(y,b),em(e,n,b)}catch(Q){jc(e,n,Q)}finally{P.T=h}}else try{h=a(c,o),em(e,n,h)}catch(Q){jc(e,n,Q)}}function em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(e,n,o)},function(o){return jc(e,n,o)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,tm(e,a)))}function jc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function rm(e,n){if(De){var a=Ve.formState;if(a!==null){t:{var o=pe;if(De){if(Je){e:{for(var c=Je,h=bi;c.nodeType!==8;){if(!h){c=null;break e}if(c=gi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Je=gi(c.nextSibling),o=c.data==="F!";break t}}tr(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=Tm.bind(null,pe,o),o.dispatch=a,o=Zc(!1),h=tf.bind(null,pe,!1,o.queue),o=Gn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=wx.bind(null,pe,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function sm(e){var n=on();return om(n,Be,e)}function om(e,n,a){if(n=qc(e,n,am)[0],e=Rl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(y){throw y===eo?yl:y}else o=n;n=on();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,kr(9,wl(),Cx.bind(null,c,a),null)),[o,h,e]}function Cx(e,n){e.action=n}function lm(e){var n=on(),a=Be;if(a!==null)return om(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Xc(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function um(){return on().memoizedState}function Cl(e,n,a,o){var c=Gn();o=o===void 0?null:o,pe.flags|=e,c.memoizedState=kr(1|n,wl(),a,o)}function lo(e,n,a,o){var c=on();o=o===void 0?null:o;var h=c.memoizedState.inst;Be!==null&&o!==null&&Fc(o,Be.memoizedState.deps)?c.memoizedState=kr(n,h,a,o):(pe.flags|=e,c.memoizedState=kr(1|n,h,a,o))}function cm(e,n){Cl(8390656,8,e,n)}function fm(e,n){lo(2048,8,e,n)}function hm(e,n){return lo(4,2,e,n)}function dm(e,n){return lo(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,pm.bind(null,n,e),a)}function Kc(){}function gm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fc(n,o[1]))return o[0];if(o=e(),ar){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function Qc(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Sg(),pe.lanes|=e,ba|=e,a)}function vm(e,n,a,o){return Wn(a,n)?a:Hr.current!==null?(e=Qc(e,a,o),Wn(e,n)||(gn=!0),e):(va&42)===0?(gn=!0,e.memoizedState=a):(e=Sg(),pe.lanes|=e,ba|=e,n)}function xm(e,n,a,o,c){var h=j.p;j.p=h!==0&&8>h?h:8;var y=P.T,b={};P.T=b,tf(e,!1,n,a);try{var I=c(),Q=P.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=bx(I,o);uo(e,n,ht,Kn(e))}else uo(e,n,o,Kn(e))}catch(gt){uo(e,n,{then:function(){},status:"rejected",reason:gt},Kn())}finally{j.p=h,P.T=y}}function Dx(){}function Jc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Sm(e).queue;xm(e,c,n,q,a===null?Dx:function(){return ym(e),a(o)})}function Sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ym(e){var n=Sm(e).next.queue;uo(e,n,{},Kn())}function $c(){return Rn(wo)}function Mm(){return on().memoizedState}function Em(){return on().memoizedState}function Ux(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=ga(a);var o=_a(n,e,a);o!==null&&(Qn(o,n,a),io(o,n,a)),n={cache:Cc()},e.payload=n;return}n=n.return}}function Lx(e,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?bm(n,a):(a=xc(e,n,a,o),a!==null&&(Qn(a,e,o),Am(a,n,o)))}function Tm(e,n,a){var o=Kn();uo(e,n,a,o)}function uo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))bm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,b=h(y,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,y))return dl(e,n,c,0),Ve===null&&hl(),!1}catch{}finally{}if(a=xc(e,n,c,o),a!==null)return Qn(a,e,o),Am(a,n,o),!0}return!1}function tf(e,n,a,o){if(o={lane:2,revertLane:Nf(),action:o,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(r(479))}else n=xc(e,a,o,2),n!==null&&Qn(n,e,2)}function Dl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function bm(e,n){Gr=Tl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,kt(e,a)}}var Ul={readContext:Rn,use:Al,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},Rm={readContext:Rn,use:Al,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(ar){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var c=a(n);if(ar){ut(!0);try{a(n)}finally{ut(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Lx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zc(e);var n=e.queue,a=Tm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kc,useDeferredValue:function(e,n){var a=Gn();return Qc(a,e,n)},useTransition:function(){var e=Zc(!1);return e=xm.bind(null,pe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,c=Gn();if(De){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(Me&124)!==0||Zp(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,cm(Kp.bind(null,o,h,e),[e]),o.flags|=2048,kr(9,wl(),jp.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=Ve.identifierPrefix;if(De){var a=Vi,o=Gi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ax++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:$c,useFormState:rm,useActionState:rm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wc,useCacheRefresh:function(){return Gn().memoizedState=Ux.bind(null,pe)}},wm={readContext:Rn,use:Al,useCallback:gm,useContext:Rn,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Rl,useRef:um,useState:function(){return Rl(Wi)},useDebugValue:Kc,useDeferredValue:function(e,n){var a=on();return vm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Rl(Wi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:$c,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=on();return $p(a,Be,e,n)},useMemoCache:Wc,useCacheRefresh:Em},Nx={readContext:Rn,use:Al,useCallback:gm,useContext:Rn,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Yc,useRef:um,useState:function(){return Yc(Wi)},useDebugValue:Kc,useDeferredValue:function(e,n){var a=on();return Be===null?Qc(a,e,n):vm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Yc(Wi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:$c,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=on();return Be!==null?$p(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:Em},Xr=null,co=0;function Ll(e){var n=co;return co+=1,Xr===null&&(Xr=[]),Fp(Xr,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Cm(e){var n=e._init;return n(e._payload)}function Dm(e){function n(Y,V){if(e){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Hi(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,K,pt){return V===null||V.tag!==6?(V=yc(K,Y.mode,pt),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function I(Y,V,K,pt){var Vt=K.type;return Vt===E?ht(Y,V,K.props.children,pt,K.key):V!==null&&(V.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===X&&Cm(Vt)===V.type)?(V=c(V,K.props),fo(V,K),V.return=Y,V):(V=ml(K.type,K.key,K.props,null,Y.mode,pt),fo(V,K),V.return=Y,V)}function Q(Y,V,K,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Mc(K,Y.mode,pt),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function ht(Y,V,K,pt,Vt){return V===null||V.tag!==7?(V=Ka(K,Y.mode,pt,Vt),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function gt(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=yc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=ml(V.type,V.key,V.props,null,Y.mode,K),fo(K,V),K.return=Y,K;case M:return V=Mc(V,Y.mode,K),V.return=Y,V;case X:var pt=V._init;return V=pt(V._payload),gt(Y,V,K)}if(ct(V)||at(V))return V=Ka(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,Ll(V),K);if(V.$$typeof===L)return gt(Y,xl(Y,V),K);Nl(Y,V)}return null}function et(Y,V,K,pt){var Vt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Vt!==null?null:b(Y,V,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Vt?I(Y,V,K,pt):null;case M:return K.key===Vt?Q(Y,V,K,pt):null;case X:return Vt=K._init,K=Vt(K._payload),et(Y,V,K,pt)}if(ct(K)||at(K))return Vt!==null?null:ht(Y,V,K,pt,null);if(typeof K.then=="function")return et(Y,V,Ll(K),pt);if(K.$$typeof===L)return et(Y,V,xl(Y,K),pt);Nl(Y,K)}return null}function it(Y,V,K,pt,Vt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,b(V,Y,""+pt,Vt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return Y=Y.get(pt.key===null?K:pt.key)||null,I(V,Y,pt,Vt);case M:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(V,Y,pt,Vt);case X:var me=pt._init;return pt=me(pt._payload),it(Y,V,K,pt,Vt)}if(ct(pt)||at(pt))return Y=Y.get(K)||null,ht(V,Y,pt,Vt,null);if(typeof pt.then=="function")return it(Y,V,K,Ll(pt),Vt);if(pt.$$typeof===L)return it(Y,V,K,xl(V,pt),Vt);Nl(V,pt)}return null}function ie(Y,V,K,pt){for(var Vt=null,me=null,Zt=V,ne=V=0,vn=null;Zt!==null&&ne<K.length;ne++){Zt.index>ne?(vn=Zt,Zt=null):vn=Zt.sibling;var Re=et(Y,Zt,K[ne],pt);if(Re===null){Zt===null&&(Zt=vn);break}e&&Zt&&Re.alternate===null&&n(Y,Zt),V=h(Re,V,ne),me===null?Vt=Re:me.sibling=Re,me=Re,Zt=vn}if(ne===K.length)return a(Y,Zt),De&&Ja(Y,ne),Vt;if(Zt===null){for(;ne<K.length;ne++)Zt=gt(Y,K[ne],pt),Zt!==null&&(V=h(Zt,V,ne),me===null?Vt=Zt:me.sibling=Zt,me=Zt);return De&&Ja(Y,ne),Vt}for(Zt=o(Zt);ne<K.length;ne++)vn=it(Zt,Y,ne,K[ne],pt),vn!==null&&(e&&vn.alternate!==null&&Zt.delete(vn.key===null?ne:vn.key),V=h(vn,V,ne),me===null?Vt=vn:me.sibling=vn,me=vn);return e&&Zt.forEach(function(Oa){return n(Y,Oa)}),De&&Ja(Y,ne),Vt}function te(Y,V,K,pt){if(K==null)throw Error(r(151));for(var Vt=null,me=null,Zt=V,ne=V=0,vn=null,Re=K.next();Zt!==null&&!Re.done;ne++,Re=K.next()){Zt.index>ne?(vn=Zt,Zt=null):vn=Zt.sibling;var Oa=et(Y,Zt,Re.value,pt);if(Oa===null){Zt===null&&(Zt=vn);break}e&&Zt&&Oa.alternate===null&&n(Y,Zt),V=h(Oa,V,ne),me===null?Vt=Oa:me.sibling=Oa,me=Oa,Zt=vn}if(Re.done)return a(Y,Zt),De&&Ja(Y,ne),Vt;if(Zt===null){for(;!Re.done;ne++,Re=K.next())Re=gt(Y,Re.value,pt),Re!==null&&(V=h(Re,V,ne),me===null?Vt=Re:me.sibling=Re,me=Re);return De&&Ja(Y,ne),Vt}for(Zt=o(Zt);!Re.done;ne++,Re=K.next())Re=it(Zt,Y,ne,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?ne:Re.key),V=h(Re,V,ne),me===null?Vt=Re:me.sibling=Re,me=Re);return e&&Zt.forEach(function(OS){return n(Y,OS)}),De&&Ja(Y,ne),Vt}function ze(Y,V,K,pt){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Vt=K.key;V!==null;){if(V.key===Vt){if(Vt=K.type,Vt===E){if(V.tag===7){a(Y,V.sibling),pt=c(V,K.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===X&&Cm(Vt)===V.type){a(Y,V.sibling),pt=c(V,K.props),fo(pt,K),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===E?(pt=Ka(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=ml(K.type,K.key,K.props,null,Y.mode,pt),fo(pt,K),pt.return=Y,Y=pt)}return y(Y);case M:t:{for(Vt=K.key;V!==null;){if(V.key===Vt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),pt=c(V,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=Mc(K,Y.mode,pt),pt.return=Y,Y=pt}return y(Y);case X:return Vt=K._init,K=Vt(K._payload),ze(Y,V,K,pt)}if(ct(K))return ie(Y,V,K,pt);if(at(K)){if(Vt=at(K),typeof Vt!="function")throw Error(r(150));return K=Vt.call(K),te(Y,V,K,pt)}if(typeof K.then=="function")return ze(Y,V,Ll(K),pt);if(K.$$typeof===L)return ze(Y,V,xl(Y,K),pt);Nl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),pt=c(V,K),pt.return=Y,Y=pt):(a(Y,V),pt=yc(K,Y.mode,pt),pt.return=Y,Y=pt),y(Y)):a(Y,V)}return function(Y,V,K,pt){try{co=0;var Vt=ze(Y,V,K,pt);return Xr=null,Vt}catch(Zt){if(Zt===eo||Zt===yl)throw Zt;var me=qn(29,Zt,null,Y.mode);return me.lanes=pt,me.return=Y,me}finally{}}}var Wr=Dm(!0),Um=Dm(!1),ri=J(null),Ai=null;function xa(e){var n=e.alternate;Mt(hn,hn.current&1),Mt(ri,e),Ai===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(Ai=e)}function Lm(e){if(e.tag===22){if(Mt(hn,hn.current),Mt(ri,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else Sa()}function Sa(){Mt(hn,hn.current),Mt(ri,ri.current)}function qi(e){vt(ri),Ai===e&&(Ai=null),vt(hn)}var hn=J(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Qn(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Qn(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Qn(n,e,a),io(n,e,a))}};function Nm(e,n,a,o,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,o)||!Ys(c,h):!0}function Om(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&nf.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Pm(e){Pl(e)}function Bm(e){console.error(e)}function Im(e){Pl(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function af(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function Fm(e){return e=ga(e),e.tag=3,e}function Hm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){zm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){zm(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ox(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ai===null?wf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Lc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(e,o,c)),!1;case 22:return a.flags|=65536,o===Lc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(e,o,c)),!1}throw Error(r(435,a.tag))}return Df(e,o,c),wf(),!1}if(De)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==bc&&(e=Error(r(422),{cause:o}),Qs(ei(e,a)))):(o!==bc&&(n=Error(r(423),{cause:o}),Qs(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ei(o,a),c=af(e.stateNode,o,c),Pc(e,c),$e!==4&&($e=2)),!1;var h=Error(r(520),{cause:o});if(h=ei(h,a),xo===null?xo=[h]:xo.push(h),$e!==4&&($e=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=af(a.stateNode,o,e),Pc(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Fm(c),Hm(c,e,a,o),Pc(a,c),!1}a=a.return}while(a!==null);return!1}var Gm=Error(r(461)),gn=!1;function yn(e,n,a,o){n.child=e===null?Um(n,null,a,o):Wr(n,e.child,a,o)}function Vm(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return nr(n),o=Hc(e,n,a,y,h,c),b=Gc(),e!==null&&!gn?(Vc(e,n,c),Yi(e,n,c)):(De&&b&&Ec(n),n.flags|=1,yn(e,n,o,c),n.child)}function km(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!Sc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Xm(e,n,h,o,c)):(e=ml(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!hf(e,c)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(y,o)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Hi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Ys(h,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=h,hf(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return rf(e,n,a,o,c)}function Wm(e,n,a){var o=n.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return qm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,h!==null?h.cachePool:null),h!==null?Xp(n,h):Ic(),Lm(n);else return n.lanes=n.childLanes=536870912,qm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Sl(n,h.cachePool),Xp(n,h),Sa(),n.memoizedState=null):(e!==null&&Sl(n,null),Ic(),Sa());return yn(e,n,c,a),n.child}function qm(e,n,a,o){var c=Uc();return c=c===null?null:{parent:fn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Sl(n,null),Ic(),Lm(n),e!==null&&Js(e,n,o,!0),null}function Il(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,c){return nr(n),a=Hc(e,n,a,o,void 0,c),o=Gc(),e!==null&&!gn?(Vc(e,n,c),Yi(e,n,c)):(De&&o&&Ec(n),n.flags|=1,yn(e,n,a,c),n.child)}function Ym(e,n,a,o,c,h){return nr(n),n.updateQueue=null,a=qp(n,o,a,c),Wp(e),o=Gc(),e!==null&&!gn?(Vc(e,n,h),Yi(e,n,h)):(De&&o&&Ec(n),n.flags|=1,yn(e,n,a,h),n.child)}function Zm(e,n,a,o,c){if(nr(n),n.stateNode===null){var h=Pr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Rn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=nf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Nc(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Rn(y):Pr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ef(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&nf.enqueueReplaceState(h,h.state,null),ro(n,o,h,c),ao(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,I=rr(a,b);h.props=I;var Q=h.context,ht=a.contextType;y=Pr,typeof ht=="object"&&ht!==null&&(y=Rn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||Q!==y)&&Om(n,h,o,y),ma=!1;var et=n.memoizedState;h.state=et,ro(n,o,h,c),ao(),Q=n.memoizedState,b||et!==Q||ma?(typeof gt=="function"&&(ef(n,a,gt,o),Q=n.memoizedState),(I=ma||Nm(n,a,I,o,et,Q,y))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),h.props=o,h.state=Q,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Oc(e,n),y=n.memoizedProps,ht=rr(a,y),h.props=ht,gt=n.pendingProps,et=h.context,Q=a.contextType,I=Pr,typeof Q=="object"&&Q!==null&&(I=Rn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==gt||et!==I)&&Om(n,h,o,I),ma=!1,et=n.memoizedState,h.state=et,ro(n,o,h,c),ao();var it=n.memoizedState;y!==gt||et!==it||ma||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof b=="function"&&(ef(n,a,b,o),it=n.memoizedState),(ht=ma||Nm(n,a,ht,o,et,it,I)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(Q||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,it,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,it,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=I,o=ht):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Il(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Yi(e,n,c),e}function jm(e,n,a,o){return Ks(),n.flags|=256,yn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Bp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Km(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(c?xa(n):Sa(),De){var b=Je,I;if(I=b){t:{for(I=b,b=bi;I.nodeType!==8;){if(!b){b=null;break t}if(I=gi(I.nextSibling),I===null){b=null;break t}}b=I}b!==null?(n.memoizedState={dehydrated:b,treeContext:Qa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},I=qn(18,null,null,0),I.stateNode=b,I.return=n,n.child=I,On=n,Je=null,I=!0):I=!1}I||tr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Wf(b)?n.lanes=32:n.lanes=536870912,null;qi(n)}return b=o.children,o=o.fallback,c?(Sa(),c=n.mode,b=zl({mode:"hidden",children:b},c),o=Ka(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=of(a),c.childLanes=lf(e,y,a),n.memoizedState=sf,o):(xa(n),uf(n,b))}if(I=e.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(h)n.flags&256?(xa(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,b=n.mode,o=zl({mode:"visible",children:o.children},b),c=Ka(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Wr(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,y,a),n.memoizedState=sf,n=c);else if(xa(n),Wf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var Q=y.dgst;y=Q,o=Error(r(419)),o.stack="",o.digest=y,Qs({value:o,source:null,stack:null}),n=cf(e,n,a)}else if(gn||Js(e,n,a,!1),y=(a&e.childLanes)!==0,gn||y){if(y=Ve,y!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Or(e,o),Qn(y,e,o),Gm;b.data==="$?"||wf(),n=cf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Je=gi(b.nextSibling),On=n,De=!0,$a=null,bi=!1,e!==null&&(ii[ai++]=Gi,ii[ai++]=Vi,ii[ai++]=Qa,Gi=e.id,Vi=e.overflow,Qa=n),n=uf(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,b=n.mode,I=e.child,Q=I.sibling,o=Hi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,Q!==null?c=Hi(Q,c):(c=Ka(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=of(a):(I=b.cachePool,I!==null?(Q=fn._currentValue,I=I.parent!==Q?{parent:Q,pool:Q}:I):I=Bp(),b={baseLanes:b.baseLanes|a,cachePool:I}),c.memoizedState=b,c.childLanes=lf(e,y,a),n.memoizedState=sf,o):(xa(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cf(e,n,a){return Wr(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Rc(e.return,n,a)}function ff(e,n,a,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function Jm(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(yn(e,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(hn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ol(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ff(n,!0,a,null,h);break;case"together":ff(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function Px(e,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),pa(n,fn,e.memoizedState.cache),Ks();break;case 27:case 5:Qt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(xa(n),e=Yi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Jm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,Wm(e,n,a);case 24:pa(n,fn,e.memoizedState.cache)}return Yi(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return gn=!1,Px(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,De&&(n.flags&1048576)!==0&&Cp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Sc(o)?(e=rr(o,e),n.tag=1,n=Zm(null,n,o,e,a)):(n.tag=0,n=rf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Vm(null,n,o,e,a);break t}else if(c===H){n.tag=14,n=km(null,n,o,e,a);break t}}throw n=lt(o)||o,Error(r(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=rr(o,n.pendingProps),Zm(e,n,o,c,a);case 3:t:{if(St(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Oc(e,n),ro(n,o,null,a);var y=n.memoizedState;if(o=y.cache,pa(n,fn,o),o!==h.cache&&wc(n,[fn],a,!0),ao(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=jm(e,n,o,a);break t}else if(o!==c){c=ei(Error(r(424)),n),Qs(c),n=jm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=gi(e.firstChild),On=n,De=!0,$a=null,bi=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ks(),o===c){n=Yi(e,n,a);break t}yn(e,n,o,a)}n=n.child}return n;case 26:return Il(e,n),e===null?(a=i_(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,o=Jl(dt.current).createElement(a),o[cn]=n,o[Ke]=e,En(o,a,e),rn(o),n.stateNode=o):n.memoizedState=i_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&De&&(o=n.stateNode=t_(n.type,n.pendingProps,dt.current),On=n,bi=!0,c=Je,Ca(n.type)?(qf=c,Je=gi(o.firstChild)):Je=c),yn(e,n,n.pendingProps.children,a),Il(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((c=o=Je)&&(o=uS(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,On=n,Je=gi(o.firstChild),bi=!1,c=!0):c=!1),c||tr(n)),Qt(n),c=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Vf(c,h)?o=null:y!==null&&Vf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Hc(e,n,Rx,null,null,a),wo._currentValue=c),Il(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=Je)&&(a=cS(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||tr(n)),null;case 13:return Km(e,n,a);case 4:return St(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Wr(n,null,o,a):yn(e,n,o,a),n.child;case 11:return Vm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,nr(n),c=Rn(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Wm(e,n,a);case 24:return nr(n),o=Rn(fn),e===null?(c=Uc(),c===null&&(c=Ve,h=Cc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Nc(n),pa(n,fn,c)):((e.lanes&a)!==0&&(Oc(e,n),ro(n,null,null,a),ao()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,fn,o)):(o=h.cache,pa(n,fn,o),o!==c.cache&&wc(n,[fn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(n)){if(n=ri.current,n!==null&&((Me&4194048)===Me?Ai!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ai))throw no=Lc,Ip;e.flags|=8192}}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,jr|=n)}function ho(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch(Tc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(fn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ze(n),tg(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ze(n),tg(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),Ze(n),n.flags&=-16777217),null;case 27:Ee(n),a=dt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Dt.current,js(n)?Dp(n):(e=t_(c,o,a),n.stateNode=e,Zi(n))}return Ze(n),null;case 5:if(Ee(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=Dt.current,js(n))Dp(n);else{switch(c=Jl(dt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[cn]=n,e[Ke]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=On,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||tr(n)}else e=Jl(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[cn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Ze(n),null;case 4:return Bt(),e===null&&If(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(vt(hn),c=n.memoizedState,c===null)return Ze(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)ho(c,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ol(e),h!==null){for(n.flags|=128,ho(c,!1),e=h.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return Mt(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&zt()>Vl&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ol(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!De)return Ze(n),null}else 2*zt()-c.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=zt(),n.sibling=null,e=hn.current,Mt(hn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return qi(n),zc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ix(e,n){switch(Tc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(fn),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ee(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(hn),null;case 4:return Bt(),null;case 10:return Xi(n.type),null;case 22:case 23:return qi(n),zc(),e!==null&&vt(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(fn),null;case 25:return null;default:return null}}function eg(e,n){switch(Tc(n),n.tag){case 3:Xi(fn),Bt();break;case 26:case 27:case 5:Ee(n);break;case 4:Bt();break;case 13:qi(n);break;case 19:vt(hn);break;case 10:Xi(n.type);break;case 22:case 23:qi(n),zc(),e!==null&&vt(ir);break;case 24:Xi(fn)}}function po(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var I=a,Q=b;try{Q()}catch(ht){Ge(c,I,ht)}}}o=o.next}while(o!==h)}}catch(ht){Ge(n,n.return,ht)}}function ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){Ge(e,e.return,o)}}}function ig(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function df(e,n,a){try{var o=e.stateNode;aS(o,e.type,a,n),o[Ke]=n}catch(c){Ge(e,e.return,c)}}function rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ql));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function sg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[cn]=e,n[Ke]=a}catch(h){Ge(e,e.return,h)}}var ji=!1,an=!1,gf=!1,og=typeof WeakSet=="function"?WeakSet:Set,_n=null;function zx(e,n){if(e=e.containerInfo,Hf=au,e=vp(e),dc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,b=-1,I=-1,Q=0,ht=0,gt=e,et=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(b=y+c),gt!==h||o!==0&&gt.nodeType!==3||(I=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(it=gt.firstChild)!==null;)et=gt,gt=it;for(;;){if(gt===e)break e;if(et===a&&++Q===c&&(b=y),et===h&&++ht===o&&(I=y),(it=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=it}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},au=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ie=rr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ge(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&po(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&ng(a),o&512&&mo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&sg(a);case 26:case 5:Ma(e,a),n===null&&o&4&&ag(a),o&512&&mo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yx.bind(null,a),fS(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||an,c=ji;var h=an;ji=o,(an=n)&&!h?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),ji=c,an=h}break;case 30:break;default:Ma(e,a)}}function ug(e){var n=e.alternate;n!==null&&(e.alternate=null,ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Vn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)cg(e,n,a),a=a.sibling}function cg(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:an||Ri(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ri(a,n);var o=Ye,c=Vn;Ca(a.type)&&(Ye=a.stateNode,Vn=!1),Ki(e,n,a),To(a.stateNode),Ye=o,Vn=c;break;case 5:an||Ri(a,n);case 6:if(o=Ye,c=Vn,Ye=null,Ki(e,n,a),Ye=o,Vn=c,Ye!==null)if(Vn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:Ye!==null&&(Vn?(e=Ye,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):Jg(Ye,a.stateNode));break;case 4:o=Ye,c=Vn,Ye=a.stateNode.containerInfo,Vn=!0,Ki(e,n,a),Ye=o,Vn=c;break;case 0:case 11:case 14:case 15:an||ya(2,a,n),an||ya(4,a,n),Ki(e,n,a);break;case 1:an||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ig(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Ki(e,n,a),an=o;break;default:Ki(e,n,a)}}function fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Ge(n,n.return,a)}}function Fx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new og),n;default:throw Error(r(435,e.tag))}}function _f(e,n){var a=Fx(e);n.forEach(function(o){var c=Zx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Ye=b.stateNode,Vn=!1;break t}break;case 5:Ye=b.stateNode,Vn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Vn=!0;break t}b=b.return}if(Ye===null)throw Error(r(160));cg(h,y,c),Ye=null,Vn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)hg(n,e),n=n.sibling}var mi=null;function hg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),Zn(e),o&4&&(ya(3,e,e.return),po(3,e),ya(5,e,e.return));break;case 1:Yn(n,e),Zn(e),o&512&&(an||a===null||Ri(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(Yn(n,e),Zn(e),o&512&&(an||a===null||Ri(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Ti]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),En(h,o,a),h[cn]=e,rn(h),o=h;break t;case"link":var y=s_("link","href",c).get(o+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(h=y[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}h=c.createElement(o),En(h,o,a),c.head.appendChild(h);break;case"meta":if(y=s_("meta","content",c).get(o+(a.content||""))){for(b=0;b<y.length;b++)if(h=y[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}h=c.createElement(o),En(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[cn]=e,rn(h),o=h}e.stateNode=o}else o_(c,e.type,e.stateNode);else e.stateNode=r_(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?o_(c,e.type,e.stateNode):r_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),Zn(e),o&512&&(an||a===null||Ri(a,a.return)),a!==null&&o&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),Zn(e),o&512&&(an||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Fn(c,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,df(e,c,a!==null?a.memoizedProps:c)),o&1024&&(gf=!0);break;case 6:if(Yn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(eu=null,c=mi,mi=$l(n.containerInfo),Yn(n,e),mi=c,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(it){Ge(e,e.return,it)}gf&&(gf=!1,dg(e));break;case 4:o=mi,mi=$l(e.stateNode.containerInfo),Yn(n,e),Zn(e),mi=o;break;case 12:Yn(n,e),Zn(e);break;case 13:Yn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ef=zt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_f(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ji,ht=an;if(ji=Q||c,an=ht||I,Yn(n,e),an=ht,ji=Q,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ji||an||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=I.stateNode;var gt=I.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ge(I,I.return,it)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(it){Ge(I,I.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_f(e,a))));break;case 19:Yn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_f(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(rg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=pf(e);Hl(e,h,c);break;case 5:var y=a.stateNode;a.flags&32&&(Fn(y,""),a.flags&=-33);var b=pf(e);Hl(e,b,y);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=pf(e);mf(e,Q,I);break;default:throw Error(r(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),sr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ig(n,n.return,a),sr(n);break;case 27:To(n.stateNode);case 26:case 5:Ri(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(c,h,a),po(4,h);break;case 1:if(Ea(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ge(o,o.return,Q)}if(o=h,c=o.updateQueue,c!==null){var b=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Vp(I[c],b)}catch(Q){Ge(o,o.return,Q)}}a&&y&64&&ng(h),mo(h,h.return);break;case 27:sg(h);case 26:case 5:Ea(c,h,a),a&&o===null&&y&4&&ag(h),mo(h,h.return);break;case 12:Ea(c,h,a);break;case 13:Ea(c,h,a),a&&y&4&&fg(c,h);break;case 22:h.memoizedState===null&&Ea(c,h,a),mo(h,h.return);break;case 30:break;default:Ea(c,h,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(e,n,a,o),n=n.sibling}function pg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),c&2048&&po(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(c&2048){wi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,b=h.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?wi(e,n,a,o):go(e,n):h._visibility&2?wi(e,n,a,o):(h._visibility|=2,qr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&vf(y,n);break;case 24:wi(e,n,a,o),c&2048&&xf(n.alternate,n);break;default:wi(e,n,a,o)}}function qr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,y=n,b=a,I=o,Q=y.flags;switch(y.tag){case 0:case 11:case 15:qr(h,y,b,I,c),po(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?qr(h,y,b,I,c):go(h,y):(ht._visibility|=2,qr(h,y,b,I,c)),c&&Q&2048&&vf(y.alternate,y);break;case 24:qr(h,y,b,I,c),c&&Q&2048&&xf(y.alternate,y);break;default:qr(h,y,b,I,c)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&vf(o.alternate,o);break;case 24:go(a,o),c&2048&&xf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Yr(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 26:Yr(e),e.flags&_o&&e.memoizedState!==null&&TS(mi,e.memoizedState,e.memoizedProps);break;case 5:Yr(e);break;case 3:case 4:var n=mi;mi=$l(e.stateNode.containerInfo),Yr(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Yr(e),_o=n):Yr(e));break;default:Yr(e)}}function gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,vg(o,e)}gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):vo(e);break;default:vo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,vg(o,e)}gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function vg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var c=o.sibling,h=o.return;if(ug(o),o===a){_n=null;break t}if(c!==null){c.return=h,_n=c;break t}_n=h}}}var Hx={getCacheForType:function(e){var n=Rn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Gx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ve=null,_e=null,Me=0,Ne=0,jn=null,Ta=!1,Zr=!1,Sf=!1,Qi=0,$e=0,ba=0,or=0,yf=0,si=0,jr=0,xo=null,kn=null,Mf=!1,Ef=0,Vl=1/0,kl=null,Aa=null,Mn=0,Ra=null,Kr=null,Qr=0,Tf=0,bf=null,xg=null,So=0,Af=null;function Kn(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(P.T!==null){var e=zr;return e!==0?e:Nf()}return Te()}function Sg(){si===0&&(si=(Me&536870912)===0||De?k():536870912);var e=ri.current;return e!==null&&(e.flags|=32),si}function Qn(e,n,a){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),wa(e,Me,si,!1)),Ft(e,a),((Le&2)===0||e!==Ve)&&(e===Ve&&((Le&2)===0&&(or|=a),$e===4&&wa(e,Me,si,!1)),Ci(e))}function yg(e,n,a){if((Le&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ut(e,n),c=o?Xx(e,n):Cf(e,n,!0),h=o;do{if(c===0){Zr&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Vx(a)){c=Cf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;c=xo;var I=b.current.memoizedState.isDehydrated;if(I&&(Jr(b,y).flags|=256),y=Cf(b,y,!1),y!==2){if(Sf&&!I){b.errorRecoveryDisabledLanes|=h,or|=h,c=4;break t}h=kn,kn=c,h!==null&&(kn===null?kn=h:kn.push.apply(kn,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){Jr(e,0),wa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,si,!Ta);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ef+300-zt(),10<c)){if(wa(o,n,si,!Ta),Xt(o,0,!0)!==0)break t;o.timeoutHandle=Kg(Mg.bind(null,o,a,kn,kl,Mf,n,si,or,jr,Ta,h,2,-0,0),c);break t}Mg(o,a,kn,kl,Mf,n,si,or,jr,Ta,h,0,-0,0)}}break}while(!0);Ci(e)}function Mg(e,n,a,o,c,h,y,b,I,Q,ht,gt,et,it){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:ES},mg(n),gt=bS(),gt!==null)){e.cancelPendingCommit=gt(Cg.bind(null,e,n,h,a,o,c,y,b,I,ht,1,et,it)),wa(e,h,y,!Q);return}Cg(e,n,h,a,o,c,y,b,I)}function Vx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Wn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~yf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-It(c),y=1<<h;o[h]=-1,c&=~y}a!==0&&_t(e,a,n)}function Xl(){return(Le&6)===0?(yo(0),!1):!0}function Rf(){if(_e!==null){if(Ne===0)var e=_e.return;else e=_e,ki=er=null,kc(e),Xr=null,co=0,e=_e;for(;e!==null;)eg(e.alternate,e),e=e.return;_e=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rf(),Ve=e,_e=a=Hi(e.current,null),Me=n,Ne=0,jn=null,Ta=!1,Zr=Ut(e,n),Sf=!1,jr=si=yf=or=ba=$e=0,kn=xo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-It(o),h=1<<c;n|=e[c],o&=~h}return Qi=n,hl(),a}function Eg(e,n){pe=null,P.H=Ul,n===eo||n===yl?(n=Hp(),Ne=3):n===Ip?(n=Hp(),Ne=4):Ne=n===Gm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,_e===null&&($e=1,Bl(e,ei(n,e.current)))}function Tg(){var e=P.H;return P.H=Ul,e===null?Ul:e}function bg(){var e=P.A;return P.A=Hx,e}function wf(){$e=4,Ta||(Me&4194048)!==Me&&ri.current!==null||(Zr=!0),(ba&134217727)===0&&(or&134217727)===0||Ve===null||wa(Ve,Me,si,!1)}function Cf(e,n,a){var o=Le;Le|=2;var c=Tg(),h=bg();(Ve!==e||Me!==n)&&(kl=null,Jr(e,n)),n=!1;var y=$e;t:do try{if(Ne!==0&&_e!==null){var b=_e,I=jn;switch(Ne){case 8:Rf(),y=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var Q=Ne;if(Ne=0,jn=null,$r(e,b,I,Q),a&&Zr){y=0;break t}break;default:Q=Ne,Ne=0,jn=null,$r(e,b,I,Q)}}kx(),y=$e;break}catch(ht){Eg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ki=er=null,Le=o,P.H=c,P.A=h,_e===null&&(Ve=null,Me=0,hl()),y}function kx(){for(;_e!==null;)Ag(_e)}function Xx(e,n){var a=Le;Le|=2;var o=Tg(),c=bg();Ve!==e||Me!==n?(kl=null,Vl=zt()+500,Jr(e,n)):Zr=Ut(e,n);t:do try{if(Ne!==0&&_e!==null){n=_e;var h=jn;e:switch(Ne){case 1:Ne=0,jn=null,$r(e,n,h,1);break;case 2:case 9:if(zp(h)){Ne=0,jn=null,Rg(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Ci(e)},h.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:zp(h)?(Ne=0,jn=null,Rg(n)):(Ne=0,jn=null,$r(e,n,h,7));break;case 5:var y=null;switch(_e.tag){case 26:y=_e.memoizedState;case 5:case 27:var b=_e;if(!y||l_(y)){Ne=0,jn=null;var I=b.sibling;if(I!==null)_e=I;else{var Q=b.return;Q!==null?(_e=Q,Wl(Q)):_e=null}break e}}Ne=0,jn=null,$r(e,n,h,5);break;case 6:Ne=0,jn=null,$r(e,n,h,6);break;case 8:Rf(),$e=6;break t;default:throw Error(r(462))}}Wx();break}catch(ht){Eg(e,ht)}while(!0);return ki=er=null,P.H=o,P.A=c,Le=a,_e!==null?0:(Ve=null,Me=0,hl(),$e)}function Wx(){for(;_e!==null&&!jt();)Ag(_e)}function Ag(e){var n=$m(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Wl(e):_e=n}function Rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:kc(n);default:eg(a,n),n=_e=wp(n,Qi),n=$m(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Wl(e):_e=n}function $r(e,n,a,o){ki=er=null,kc(n),Xr=null,co=0;var c=n.return;try{if(Ox(e,c,n,a,Me)){$e=1,Bl(e,ei(a,e.current)),_e=null;return}}catch(h){if(c!==null)throw _e=c,h;$e=1,Bl(e,ei(a,e.current)),_e=null;return}n.flags&32768?(De||o===1?e=!0:Zr||(Me&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),wg(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){wg(n,Ta);return}e=n.return;var a=Bx(n.alternate,n,Qi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);$e===0&&($e=5)}function wg(e,n){do{var a=Ix(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);$e=6,_e=null}function Cg(e,n,a,o,c,h,y,b,I){e.cancelPendingCommit=null;do ql();while(Mn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=vc,bt(e,a,h,y,b,I),e===Ve&&(_e=Ve=null,Me=0),Kr=n,Ra=e,Qr=a,Tf=h,bf=c,xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jx(ke,function(){return Og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=j.p,j.p=2,y=Le,Le|=4;try{zx(e,n,a)}finally{Le=y,j.p=c,P.T=o}}Mn=1,Dg(),Ug(),Lg()}}function Dg(){if(Mn===1){Mn=0;var e=Ra,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=j.p;j.p=2;var c=Le;Le|=4;try{hg(n,e);var h=Gf,y=vp(e.containerInfo),b=h.focusedElem,I=h.selectionRange;if(y!==b&&b&&b.ownerDocument&&_p(b.ownerDocument.documentElement,b)){if(I!==null&&dc(b)){var Q=I.start,ht=I.end;if(ht===void 0&&(ht=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ht,b.value.length);else{var gt=b.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ie=b.textContent.length,te=Math.min(I.start,ie),ze=I.end===void 0?te:Math.min(I.end,ie);!it.extend&&te>ze&&(y=ze,ze=te,te=y);var Y=gp(b,te),V=gp(b,ze);if(Y&&V&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(Y.node,Y.offset),it.removeAllRanges(),te>ze?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(gt=[],it=b;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var pt=gt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}au=!!Hf,Gf=Hf=null}finally{Le=c,j.p=o,P.T=a}}e.current=n,Mn=2}}function Ug(){if(Mn===2){Mn=0;var e=Ra,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=j.p;j.p=2;var c=Le;Le|=4;try{lg(e,n.alternate,n)}finally{Le=c,j.p=o,P.T=a}}Mn=3}}function Lg(){if(Mn===4||Mn===3){Mn=0,Se();var e=Ra,n=Kr,a=Qr,o=xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Kr=Ra=null,Ng(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Ue(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var b=o[y];h(b.value,{componentStack:b.stack})}}finally{P.T=n,j.p=c}}(Qr&3)!==0&&ql(),Ci(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Af?So++:(So=0,Af=e):So=0,yo(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function ql(e){return Dg(),Ug(),Lg(),Og()}function Og(){if(Mn!==5)return!1;var e=Ra,n=Tf;Tf=0;var a=Ue(Qr),o=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=bf,bf=null;var h=Ra,y=Qr;if(Mn=0,Kr=Ra=null,Qr=0,(Le&6)!==0)throw Error(r(331));var b=Le;if(Le|=4,_g(h.current),pg(h,h.current,y,a),Le=b,yo(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{j.p=c,P.T=o,Ng(e,n)}}function Pg(e,n,a){n=ei(a,n),n=af(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Ft(e,2),Ci(e))}function Ge(e,n,a){if(e.tag===3)Pg(e,e,a);else for(;n!==null;){if(n.tag===3){Pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ei(a,e),a=Fm(2),o=_a(n,a,2),o!==null&&(Hm(a,o,n,e),Ft(o,2),Ci(o));break}}n=n.return}}function Df(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Gx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Sf=!0,c.add(a),e=qx.bind(null,e,n,a),n.then(e,e))}function qx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Me&a)===a&&($e===4||$e===3&&(Me&62914560)===Me&&300>zt()-Ef?(Le&2)===0&&Jr(e,0):yf|=a,jr===Me&&(jr=0)),Ci(e)}function Bg(e,n){n===0&&(n=Rt()),e=Or(e,n),e!==null&&(Ft(e,n),Ci(e))}function Yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bg(e,a)}function Zx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Bg(e,a)}function jx(e,n){return F(e,n)}var Yl=null,ts=null,Uf=!1,Zl=!1,Lf=!1,lr=0;function Ci(e){e!==ts&&e.next===null&&(ts===null?Yl=ts=e:ts=ts.next=e),Zl=!0,Uf||(Uf=!0,Qx())}function yo(e,n){if(!Lf&&Zl){Lf=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var y=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-It(42|e)+1)-1,h&=c&~(y&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Hg(o,h))}else h=Me,h=Xt(o,o===Ve?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ut(o,h)||(a=!0,Hg(o,h));o=o.next}while(a);Lf=!1}}function Kx(){Ig()}function Ig(){Zl=Uf=!1;var e=0;lr!==0&&(rS()&&(e=lr),lr=0);for(var n=zt(),a=null,o=Yl;o!==null;){var c=o.next,h=zg(o,n);h===0?(o.next=null,a===null?Yl=c:a.next=c,c===null&&(ts=a)):(a=o,(e!==0||(h&3)!==0)&&(Zl=!0)),o=c}yo(e)}function zg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-It(h),b=1<<y,I=c[y];I===-1?((b&a)===0||(b&o)!==0)&&(c[y]=le(b,n)):I<=n&&(e.expiredLanes|=b),h&=~b}if(n=Ve,a=Me,a=Xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&xe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&xe(o),Ue(a)){case 2:case 8:a=re;break;case 32:a=ke;break;case 268435456:a=N;break;default:a=ke}return o=Fg.bind(null,e),a=F(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&xe(o),e.callbackPriority=2,e.callbackNode=null,2}function Fg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=Me;return o=Xt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,n),zg(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Fg.bind(null,e):null)}function Hg(e,n){if(ql())return null;yg(e,n,!0)}function Qx(){oS(function(){(Le&6)!==0?F(Ht,Kx):Ig()})}function Nf(){return lr===0&&(lr=k()),lr}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function Vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Jx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=Gg((c[Ke]||null).action),y=o.submitter;y&&(n=(n=y[Ke]||null)?Gg(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var b=new ul("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var I=y?Vg(c,y):new FormData(c);Jc(a,{pending:!0,data:I,method:c.method,action:h},null,I)}}else typeof h=="function"&&(b.preventDefault(),I=y?Vg(c,y):new FormData(c),Jc(a,{pending:!0,data:I,method:c.method,action:h},h,I))},currentTarget:c}]})}}for(var Of=0;Of<_c.length;Of++){var Pf=_c[Of],$x=Pf.toLowerCase(),tS=Pf[0].toUpperCase()+Pf.slice(1);pi($x,"on"+tS)}pi(yp,"onAnimationEnd"),pi(Mp,"onAnimationIteration"),pi(Ep,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(_x,"onTransitionRun"),pi(vx,"onTransitionStart"),pi(xx,"onTransitionCancel"),pi(Tp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=Q;try{h(c)}catch(ht){Pl(ht)}c.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(b=o[y],I=b.instance,Q=b.currentTarget,b=b.listener,I!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=Q;try{h(c)}catch(ht){Pl(ht)}c.currentTarget=null,h=I}}}}function ve(e,n){var a=n[Tr];a===void 0&&(a=n[Tr]=new Set);var o=e+"__bubble";a.has(o)||(Xg(n,e,2,!1),a.add(o))}function Bf(e,n,a){var o=0;n&&(o|=4),Xg(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[jl]){e[jl]=!0,il.forEach(function(a){a!=="selectionchange"&&(eS.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Bf("selectionchange",!1,n))}}function Xg(e,n,a,o){switch(p_(n)){case 2:var c=wS;break;case 8:c=CS;break;default:c=Qf}a=c.bind(null,n,a,e),c=void 0,!ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=zi(b),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue t}b=b.parentNode}}o=o.return}Qd(function(){var Q=h,ht=nc(a),gt=[];t:{var et=bp.get(e);if(et!==void 0){var it=ul,ie=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":it=j0;break;case"focusin":ie="focus",it=lc;break;case"focusout":ie="blur",it=lc;break;case"beforeblur":case"afterblur":it=lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=J0;break;case yp:case Mp:case Ep:it=H0;break;case Tp:it=tx;break;case"scroll":case"scrollend":it=P0;break;case"wheel":it=nx;break;case"copy":case"cut":case"paste":it=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=np;break;case"toggle":case"beforetoggle":it=ax}var te=(n&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),Y=te?et!==null?et+"Capture":null:et;te=[];for(var V=Q,K;V!==null;){var pt=V;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Hs(V,Y),pt!=null&&te.push(Eo(V,pt,K))),ze)break;V=V.return}0<te.length&&(et=new it(et,ie,null,a,ht),gt.push({event:et,listeners:te}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==ec&&(ie=a.relatedTarget||a.fromElement)&&(zi(ie)||ie[Ei]))break t;if((it||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ie=a.relatedTarget||a.toElement,it=Q,ie=ie?zi(ie):null,ie!==null&&(ze=u(ie),te=ie.tag,ie!==ze||te!==5&&te!==27&&te!==6)&&(ie=null)):(it=null,ie=Q),it!==ie)){if(te=tp,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=np,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),ze=it==null?et:qa(it),K=ie==null?et:qa(ie),et=new te(pt,V+"leave",it,a,ht),et.target=ze,et.relatedTarget=K,pt=null,zi(ht)===Q&&(te=new te(Y,V+"enter",ie,a,ht),te.target=K,te.relatedTarget=ze,pt=te),ze=pt,it&&ie)e:{for(te=it,Y=ie,V=0,K=te;K;K=es(K))V++;for(K=0,pt=Y;pt;pt=es(pt))K++;for(;0<V-K;)te=es(te),V--;for(;0<K-V;)Y=es(Y),K--;for(;V--;){if(te===Y||Y!==null&&te===Y.alternate)break e;te=es(te),Y=es(Y)}te=null}else te=null;it!==null&&Wg(gt,et,it,te,!1),ie!==null&&ze!==null&&Wg(gt,ze,ie,te,!0)}}t:{if(et=Q?qa(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Vt=cp;else if(lp(et))if(fp)Vt=px;else{Vt=hx;var me=fx}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&tc(Q.elementType)&&(Vt=cp):Vt=dx;if(Vt&&(Vt=Vt(e,Q))){up(gt,Vt,a,ht);break t}me&&me(e,et,Q),e==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&An(et,"number",et.value)}switch(me=Q?qa(Q):window,e){case"focusin":(lp(me)||me.contentEditable==="true")&&(Ur=me,pc=Q,Zs=null);break;case"focusout":Zs=pc=Ur=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,xp(gt,a,ht);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":xp(gt,a,ht)}var Zt;if(cc)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Dr?sp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(ip&&a.locale!=="ko"&&(Dr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Dr&&(Zt=Jd()):(da=ht,rc="value"in da?da.value:da.textContent,Dr=!0)),me=Kl(Q,ne),0<me.length&&(ne=new ep(ne,e,null,a,ht),gt.push({event:ne,listeners:me}),Zt?ne.data=Zt:(Zt=op(a),Zt!==null&&(ne.data=Zt)))),(Zt=sx?ox(e,a):lx(e,a))&&(ne=Kl(Q,"onBeforeInput"),0<ne.length&&(me=new ep("onBeforeInput","beforeinput",null,a,ht),gt.push({event:me,listeners:ne}),me.data=Zt)),Jx(gt,e,Q,a,ht)}kg(gt,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Hs(e,a),c!=null&&o.unshift(Eo(e,c,h)),c=Hs(e,n),c!=null&&o.push(Eo(e,c,h))),e.tag===3)return o;e=e.return}return[]}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,n,a,o,c){for(var h=n._reactName,y=[];a!==null&&a!==o;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,c?(Q=Hs(a,h),Q!=null&&y.unshift(Eo(a,Q,I))):c||(Q=Hs(a,h),Q!=null&&y.push(Eo(a,Q,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function Yg(e,n){return n=qg(n),qg(e)===n}function Ql(){}function Ie(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":Gt(e,"class",o);break;case"tabIndex":Gt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(e,a,o);break;case"style":jd(e,o,h);break;case"data":if(n!=="object"){Gt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ql);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=N0.get(a)||a,Lt(e,a,o))}}function Ff(e,n,a,o,c,h){switch(a){case"style":jd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!al.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[Ke]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,h,y,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var b=h=y=c=null,I=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":y=ht;break;case"checked":I=ht;break;case"defaultChecked":Q=ht;break;case"value":h=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ie(e,n,o,ht,a,null)}}Nn(e,h,b,I,Q,y,c,!1),ge(e);return;case"select":ve("invalid",e),o=y=h=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Ie(e,n,c,b,a,null)}n=h,a=y,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":ve("invalid",e),h=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ie(e,n,y,b,a,null)}Rr(e,o,c,h),ge(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,I,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)ve(Mo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,Q,o,a,null)}return;default:if(tc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Ff(e,n,ht,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ie(e,n,b,o,a,null))}function aS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,b=null,I=null,Q=null,ht=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(it)||Ie(e,n,it,null,o,gt)}}for(var et in o){var it=o[et];if(gt=a[et],o.hasOwnProperty(et)&&(it!=null||gt!=null))switch(et){case"type":h=it;break;case"name":c=it;break;case"checked":Q=it;break;case"defaultChecked":ht=it;break;case"value":y=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Ie(e,n,et,it,o,gt)}}He(e,y,b,I,Q,ht,h,c);return;case"select":it=y=b=et=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":it=I;default:o.hasOwnProperty(h)||Ie(e,n,h,null,o,I)}for(c in o)if(h=o[c],I=a[c],o.hasOwnProperty(c)&&(h!=null||I!=null))switch(c){case"value":et=h;break;case"defaultValue":b=h;break;case"multiple":y=h;default:h!==I&&Ie(e,n,c,h,o,I)}n=b,a=y,o=it,et!=null?Qe(e,!!a,et,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,o,c)}for(y in o)if(c=o[y],h=a[y],o.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Ie(e,n,y,c,o,h)}Sn(e,et,it);return;case"option":for(var ie in a)if(et=a[ie],a.hasOwnProperty(ie)&&et!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ie(e,n,ie,null,o,et)}for(I in o)if(et=o[I],it=a[I],o.hasOwnProperty(I)&&et!==it&&(et!=null||it!=null))switch(I){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(e,n,I,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)et=a[te],a.hasOwnProperty(te)&&et!=null&&!o.hasOwnProperty(te)&&Ie(e,n,te,null,o,et);for(Q in o)if(et=o[Q],it=a[Q],o.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ie(e,n,Q,et,o,it)}return;default:if(tc(n)){for(var ze in a)et=a[ze],a.hasOwnProperty(ze)&&et!==void 0&&!o.hasOwnProperty(ze)&&Ff(e,n,ze,void 0,o,et);for(ht in o)et=o[ht],it=a[ht],!o.hasOwnProperty(ht)||et===it||et===void 0&&it===void 0||Ff(e,n,ht,et,o,it);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!o.hasOwnProperty(Y)&&Ie(e,n,Y,null,o,et);for(gt in o)et=o[gt],it=a[gt],!o.hasOwnProperty(gt)||et===it||et==null&&it==null||Ie(e,n,gt,et,o,it)}var Hf=null,Gf=null;function Jl(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function rS(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(lS)}:Kg;function lS(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Jg(e,n){var a=n,o=0,c=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&To(y.documentElement),a&2&&To(y.body),a&4)for(a=y.head,To(a),y=a.firstChild;y;){var b=y.nextSibling,I=y.nodeName;y[Ti]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){e.removeChild(h),Lo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Lo(n)}function Xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ti])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function cS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var qf=null;function $g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function t_(e,n,a){switch(n=Jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var oi=new Map,e_=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=j.d;j.d={f:hS,r:dS,D:pS,C:mS,L:gS,m:_S,X:xS,S:vS,M:SS};function hS(){var e=Ji.f(),n=Xl();return e||n}function dS(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?ym(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function n_(e,n,a){var o=ns;if(o&&typeof n=="string"&&n){var c=mn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),e_.has(c)||(e_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",e),rn(n),o.head.appendChild(n)))}}function pS(e){Ji.D(e),n_("dns-prefetch",e,null)}function mS(e,n){Ji.C(e,n),n_("preconnect",e,n)}function gS(e,n,a){Ji.L(e,n,a);var o=ns;if(o&&e&&n){var c='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mn(a.imageSizes)+'"]')):c+='[href="'+mn(e)+'"]';var h=c;switch(n){case"style":h=is(e);break;case"script":h=as(e)}oi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(bo(h))||n==="script"&&o.querySelector(Ao(h))||(n=o.createElement("link"),En(n,"link",e),rn(n),o.head.appendChild(n)))}}function _S(e,n){Ji.m(e,n);var a=ns;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=as(e)}if(!oi.has(h)&&(e=_({rel:"modulepreload",href:e},n),oi.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(h)))return}o=a.createElement("link"),En(o,"link",e),rn(o),a.head.appendChild(o)}}}function vS(e,n,a){Ji.S(e,n,a);var o=ns;if(o&&e){var c=ha(o).hoistableStyles,h=is(e);n=n||"default";var y=c.get(h);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(bo(h)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(h))&&Yf(e,a);var I=y=o.createElement("link");rn(I),En(I,"link",e),I._p=new Promise(function(Q,ht){I.onload=Q,I.onerror=ht}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,tu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(h,y)}}}function xS(e,n){Ji.X(e,n);var a=ns;if(a&&e){var o=ha(a).hoistableScripts,c=as(e),h=o.get(c);h||(h=a.querySelector(Ao(c)),h||(e=_({src:e,async:!0},n),(n=oi.get(c))&&Zf(e,n),h=a.createElement("script"),rn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function SS(e,n){Ji.M(e,n);var a=ns;if(a&&e){var o=ha(a).hoistableScripts,c=as(e),h=o.get(c);h||(h=a.querySelector(Ao(c)),h||(e=_({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Zf(e,n),h=a.createElement("script"),rn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function i_(e,n,a,o){var c=(c=dt.current)?$l(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ha(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var h=ha(c).hoistableStyles,y=h.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=c.querySelector(bo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),h||yS(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ha(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+mn(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function yS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),rn(n),e.head.appendChild(n))}function as(e){return'[src="'+mn(e)+'"]'}function Ao(e){return"script[async]"+e}function r_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),En(o,"style",c),tu(o,a.precedence,e),n.instance=o;case"stylesheet":c=is(a.href);var h=e.querySelector(bo(c));if(h)return n.state.loading|=4,n.instance=h,rn(h),h;o=a_(a),(c=oi.get(c))&&Yf(o,c),h=(e.ownerDocument||e).createElement("link"),rn(h);var y=h;return y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),En(h,"link",o),n.state.loading|=4,tu(h,a.precedence,e),n.instance=h;case"script":return h=as(a.src),(c=e.querySelector(Ao(h)))?(n.instance=c,rn(c),c):(o=a,(c=oi.get(h))&&(o=_({},a),Zf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),rn(c),En(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,e));return n.instance}function tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var eu=null;function s_(e,n,a){if(eu===null){var o=new Map,c=eu=new Map;c.set(a,o)}else c=eu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ti]||h[cn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var b=o.get(y);b?b.push(h):o.set(y,[h])}}return o}function o_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function MS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function ES(){}function TS(e,n,a){if(Ro===null)throw Error(r(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),h=e.querySelector(bo(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=nu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,rn(h);return}h=e.ownerDocument||e,a=a_(a),(c=oi.get(c))&&Yf(a,c),h=h.createElement("link"),rn(h);var y=h;y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),En(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=nu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function bS(){if(Ro===null)throw Error(r(475));var e=Ro;return e.stylesheets&&e.count===0&&jf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function nu(){if(this.count--,this.count===0){if(this.stylesheets)jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var iu=null;function jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,n.forEach(AS,e),iu=null,nu.call(e))}function AS(e,n){if(!(n.state.loading&4)){var a=iu.get(e);if(a)var o=a.get(null);else{a=new Map,iu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,c),a.set(y,c),this.count++,o=nu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function RS(e,n,a,o,c,h,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function u_(e,n,a,o,c,h,y,b,I,Q,ht,gt){return e=new RS(e,n,a,y,b,I,Q,gt),n=1,h===!0&&(n|=24),h=qn(3,null,null,n),e.current=h,h.stateNode=e,n=Cc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Nc(h),e}function c_(e){return e?(e=Pr,e):Pr}function f_(e,n,a,o,c,h){c=c_(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=_a(e,o,n),a!==null&&(Qn(a,e,n),io(a,e,n))}function h_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kf(e,n){h_(e,n),(e=e.alternate)&&h_(e,n)}function d_(e){if(e.tag===13){var n=Or(e,67108864);n!==null&&Qn(n,e,67108864),Kf(e,67108864)}}var au=!0;function wS(e,n,a,o){var c=P.T;P.T=null;var h=j.p;try{j.p=2,Qf(e,n,a,o)}finally{j.p=h,P.T=c}}function CS(e,n,a,o){var c=P.T;P.T=null;var h=j.p;try{j.p=8,Qf(e,n,a,o)}finally{j.p=h,P.T=c}}function Qf(e,n,a,o){if(au){var c=Jf(o);if(c===null)zf(e,n,o,ru,a),m_(e,o);else if(US(c,e,n,a,o))o.stopPropagation();else if(m_(e,o),n&4&&-1<DS.indexOf(e)){for(;c!==null;){var h=fa(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Kt(h.pendingLanes);if(y!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var I=1<<31-It(y);b.entanglements[1]|=I,y&=~I}Ci(h),(Le&6)===0&&(Vl=zt()+500,yo(0))}}break;case 13:b=Or(h,2),b!==null&&Qn(b,h,2),Xl(),Kf(h,2)}if(h=Jf(o),h===null&&zf(e,n,o,ru,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Jf(e){return e=nc(e),$f(e)}var ru=null;function $f(e){if(ru=null,e=zi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ru=e,null}function p_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Ht:return 2;case re:return 8;case ke:case Xe:return 32;case N:return 268435456;default:return 32}default:return 32}}var th=!1,Da=null,Ua=null,La=null,Co=new Map,Do=new Map,Na=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=fa(n),n!==null&&d_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function US(e,n,a,o,c){switch(n){case"focusin":return Da=Uo(Da,e,n,a,o,c),!0;case"dragenter":return Ua=Uo(Ua,e,n,a,o,c),!0;case"mouseover":return La=Uo(La,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Co.set(h,Uo(Co.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Do.set(h,Uo(Do.get(h)||null,e,n,a,o,c)),!0}return!1}function g_(e){var n=zi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var o=Kn();o=ae(o);var c=Or(a,o);c!==null&&Qn(c,a,o),Kf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ec=o,a.target.dispatchEvent(o),ec=null}else return n=fa(a),n!==null&&d_(n),e.blockedOn=a,!1;n.shift()}return!0}function __(e,n,a){su(e)&&a.delete(n)}function LS(){th=!1,Da!==null&&su(Da)&&(Da=null),Ua!==null&&su(Ua)&&(Ua=null),La!==null&&su(La)&&(La=null),Co.forEach(__),Do.forEach(__)}function ou(e,n){e.blockedOn===n&&(e.blockedOn=null,th||(th=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,LS)))}var lu=null;function v_(e){lu!==e&&(lu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if($f(o||a)===null)continue;break}var h=fa(a);h!==null&&(e.splice(n,3),n-=3,Jc(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Lo(e){function n(I){return ou(I,e)}Da!==null&&ou(Da,e),Ua!==null&&ou(Ua,e),La!==null&&ou(La,e),Co.forEach(n),Do.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)g_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],y=c[Ke]||null;if(typeof h=="function")y||v_(a);else if(y){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Ke]||null)b=y.formAction;else if($f(c)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),v_(a)}}}function eh(e){this._internalRoot=e}uu.prototype.render=eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();f_(a,o,e,n,null,null)},uu.prototype.unmount=eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;f_(e.current,2,null,e,null,null),Xl(),n[Ei]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&g_(e)}};var x_=t.version;if(x_!=="19.1.0")throw Error(r(527,x_,"19.1.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var NS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{ft=cu.inject(NS),xt=cu}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Pm,h=Bm,y=Im,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=u_(e,1,!1,null,null,a,o,c,h,y,b,null),e[Ei]=n.current,If(e),new eh(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=Pm,y=Bm,b=Im,I=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=u_(e,1,!0,n,a??null,o,c,h,y,b,I,Q),n.context=c_(null),a=n.current,o=Kn(),o=ae(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,Ft(n,a),Ci(n),e[Ei]=n.current,If(e),new uu(n)},Oo.version="19.1.0",Oo}var C_;function kS(){if(C_)return ah.exports;C_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ah.exports=VS(),ah.exports}var XS=kS();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D_="popstate";function WS(s={}){function t(r,l){let{pathname:u,search:f,hash:d}=r.location;return Hh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Xo(l)}return YS(t,i,null,s)}function je(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Oi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qS(){return Math.random().toString(36).substring(2,10)}function U_(s,t){return{usr:s.state,key:s.key,idx:t}}function Hh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ls(t):t,state:i,key:t&&t.key||r||qS()}}function Xo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ls(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function YS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function v(){d="POP";let S=_(),g=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:g})}function x(S,g){d="PUSH";let B=Hh(A.location,S,g);p=_()+1;let L=U_(B,p),D=A.createHref(B);try{f.pushState(L,"",D)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;l.location.assign(D)}u&&m&&m({action:d,location:A.location,delta:1})}function M(S,g){d="REPLACE";let B=Hh(A.location,S,g);p=_();let L=U_(B,p),D=A.createHref(B);f.replaceState(L,"",D),u&&m&&m({action:d,location:A.location,delta:0})}function E(S){return ZS(S)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(D_,v),m=S,()=>{l.removeEventListener(D_,v),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:M,go(S){return f.go(S)}};return A}function ZS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),je(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Xo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Bv(s,t,i="/"){return jS(s,t,i,!1)}function jS(s,t,i,r){let l=typeof t=="string"?Ls(t):t,u=ua(l.pathname||"/",i);if(u==null)return null;let f=Iv(s);KS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=oy(u);d=ry(f[m],p,r)}return d}function Iv(s,t=[],i=[],r=""){let l=(u,f,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(je(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=oa([r,m.relativePath]),_=i.concat(m);u.children&&u.children.length>0&&(je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Iv(u.children,t,_,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:iy(p,u.index),routesMeta:_})};return s.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let d of zv(u.path))l(u,f,d)}),t}function zv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=zv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function KS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:ay(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var QS=/^:[\w-]+$/,JS=3,$S=2,ty=1,ey=10,ny=-2,L_=s=>s==="*";function iy(s,t){let i=s.split("/"),r=i.length;return i.some(L_)&&(r+=ny),t&&(r+=$S),i.filter(l=>!L_(l)).reduce((l,u)=>l+(QS.test(u)?JS:u===""?ty:ey),r)}function ay(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function ry(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",v=ku({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=ku({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:oa([u,v.pathname]),pathnameBase:fy(oa([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=oa([u,v.pathnameBase]))}return f}function ku(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=sy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:v},x)=>{if(_==="*"){let E=d[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[x];return v&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function sy(s,t=!1,i=!0){Oi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function oy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ua(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ly(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ls(s):s;return{pathname:i?i.startsWith("/")?i:uy(i,t):t,search:hy(r),hash:dy(l)}}function uy(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function lh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Fv(s){let t=cy(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Hv(s,t,i,r=!1){let l;typeof s=="string"?l=Ls(s):(l={...s},je(!l.pathname||!l.pathname.includes("?"),lh("?","pathname","search",l)),je(!l.pathname||!l.pathname.includes("#"),lh("#","pathname","hash",l)),je(!l.search||!l.search.includes("#"),lh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?t[v]:"/"}let m=ly(l,d),p=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),fy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,dy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function py(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Gv=["POST","PUT","PATCH","DELETE"];new Set(Gv);var my=["GET",...Gv];new Set(my);var Ns=mt.createContext(null);Ns.displayName="DataRouter";var Zu=mt.createContext(null);Zu.displayName="DataRouterState";mt.createContext(!1);var Vv=mt.createContext({isTransitioning:!1});Vv.displayName="ViewTransition";var gy=mt.createContext(new Map);gy.displayName="Fetchers";var _y=mt.createContext(null);_y.displayName="Await";var Ii=mt.createContext(null);Ii.displayName="Navigation";var Ko=mt.createContext(null);Ko.displayName="Location";var ca=mt.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var Ud=mt.createContext(null);Ud.displayName="RouteError";function vy(s,{relative:t}={}){je(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=mt.useContext(Ii),{hash:l,pathname:u,search:f}=Jo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),r.createHref({pathname:d,search:f,hash:l})}function Qo(){return mt.useContext(Ko)!=null}function Er(){return je(Qo(),"useLocation() may be used only in the context of a <Router> component."),mt.useContext(Ko).location}var kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xv(s){mt.useContext(Ii).static||mt.useLayoutEffect(s)}function xy(){let{isDataRoute:s}=mt.useContext(ca);return s?Ly():Sy()}function Sy(){je(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=mt.useContext(Ns),{basename:t,navigator:i}=mt.useContext(Ii),{matches:r}=mt.useContext(ca),{pathname:l}=Er(),u=JSON.stringify(Fv(r)),f=mt.useRef(!1);return Xv(()=>{f.current=!0}),mt.useCallback((m,p={})=>{if(Oi(f.current,kv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=Hv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:oa([t,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[t,i,u,l,s])}mt.createContext(null);function Jo(s,{relative:t}={}){let{matches:i}=mt.useContext(ca),{pathname:r}=Er(),l=JSON.stringify(Fv(i));return mt.useMemo(()=>Hv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function yy(s,t){return Wv(s,t)}function Wv(s,t,i,r){je(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=mt.useContext(Ii),{matches:u}=mt.useContext(ca),f=u[u.length-1],d=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",_=f&&f.route;{let g=_&&_.path||"";qv(m,!_||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let v=Er(),x;if(t){let g=typeof t=="string"?Ls(t):t;je(p==="/"||g.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${g.pathname}" was given in the \`location\` prop.`),x=g}else x=v;let M=x.pathname||"/",E=M;if(p!=="/"){let g=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(g.length).join("/")}let A=Bv(s,{pathname:E});Oi(_||A!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Oi(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Ay(A&&A.map(g=>Object.assign({},g,{params:Object.assign({},d,g.params),pathname:oa([p,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?p:oa([p,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),u,i,r);return t&&S?mt.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function My(){let s=Uy(),t=py(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=mt.createElement(mt.Fragment,null,mt.createElement("p",null,"💿 Hey developer 👋"),mt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",mt.createElement("code",{style:u},"ErrorBoundary")," or"," ",mt.createElement("code",{style:u},"errorElement")," prop on your route.")),mt.createElement(mt.Fragment,null,mt.createElement("h2",null,"Unexpected Application Error!"),mt.createElement("h3",{style:{fontStyle:"italic"}},t),i?mt.createElement("pre",{style:l},i):null,f)}var Ey=mt.createElement(My,null),Ty=class extends mt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?mt.createElement(ca.Provider,{value:this.props.routeContext},mt.createElement(Ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function by({routeContext:s,match:t,children:i}){let r=mt.useContext(Ns);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),mt.createElement(ca.Provider,{value:s},i)}function Ay(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i?.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);je(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:_,errors:v}=i,x=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,_)=>{let v,x=!1,M=null,E=null;i&&(v=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||Ey,f&&(d<0&&_===0?(qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):d===_&&(x=!0,E=p.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,_+1)),S=()=>{let g;return v?g=M:x?g=E:p.route.Component?g=mt.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,mt.createElement(by,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:g})};return i&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?mt.createElement(Ty,{location:i.location,revalidation:i.revalidation,component:M,error:v,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function Ld(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ry(s){let t=mt.useContext(Ns);return je(t,Ld(s)),t}function wy(s){let t=mt.useContext(Zu);return je(t,Ld(s)),t}function Cy(s){let t=mt.useContext(ca);return je(t,Ld(s)),t}function Nd(s){let t=Cy(s),i=t.matches[t.matches.length-1];return je(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Dy(){return Nd("useRouteId")}function Uy(){let s=mt.useContext(Ud),t=wy("useRouteError"),i=Nd("useRouteError");return s!==void 0?s:t.errors?.[i]}function Ly(){let{router:s}=Ry("useNavigate"),t=Nd("useNavigate"),i=mt.useRef(!1);return Xv(()=>{i.current=!0}),mt.useCallback(async(l,u={})=>{Oi(i.current,kv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var N_={};function qv(s,t,i){!t&&!N_[s]&&(N_[s]=!0,Oi(!1,i))}mt.memo(Ny);function Ny({routes:s,future:t,state:i}){return Wv(s,void 0,i,t)}function Yv(s){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Oy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){je(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=mt.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Ls(i));let{pathname:m="/",search:p="",hash:_="",state:v=null,key:x="default"}=i,M=mt.useMemo(()=>{let E=ua(m,f);return E==null?null:{location:{pathname:E,search:p,hash:_,state:v,key:x},navigationType:r}},[f,m,p,_,v,x,r]);return Oi(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:mt.createElement(Ii.Provider,{value:d},mt.createElement(Ko.Provider,{children:t,value:M}))}function Py({children:s,location:t}){return yy(Gh(s),t)}function Gh(s,t=[]){let i=[];return mt.Children.forEach(s,(r,l)=>{if(!mt.isValidElement(r))return;let u=[...t,l];if(r.type===mt.Fragment){i.push.apply(i,Gh(r.props.children,u));return}je(r.type===Yv,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Gh(r.props.children,u)),i.push(f)}),i}var Pu="get",Bu="application/x-www-form-urlencoded";function ju(s){return s!=null&&typeof s.tagName=="string"}function By(s){return ju(s)&&s.tagName.toLowerCase()==="button"}function Iy(s){return ju(s)&&s.tagName.toLowerCase()==="form"}function zy(s){return ju(s)&&s.tagName.toLowerCase()==="input"}function Fy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Hy(s,t){return s.button===0&&(!t||t==="_self")&&!Fy(s)}var fu=null;function Gy(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var Vy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uh(s){return s!=null&&!Vy.has(s)?(Oi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bu}"`),null):s}function ky(s,t){let i,r,l,u,f;if(Iy(s)){let d=s.getAttribute("action");r=d?ua(d,t):null,i=s.getAttribute("method")||Pu,l=uh(s.getAttribute("enctype"))||Bu,u=new FormData(s)}else if(By(s)||zy(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ua(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Pu,l=uh(s.getAttribute("formenctype"))||uh(d.getAttribute("enctype"))||Bu,u=new FormData(d,s),!Gy()){let{name:p,type:_,value:v}=s;if(_==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(ju(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Pu,r=null,l=Bu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Od(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Xy(s,t,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&ua(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function Wy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Yy(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await Wy(u,i);return f.links?f.links():[]}return[]}));return Qy(r.flat(1).filter(qy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function O_(s,t,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Zy(s,t,{includeHydrateFallback:i}={}){return jy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function jy(s){return[...new Set(s)]}function Ky(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Qy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(Ky(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Zv(){let s=mt.useContext(Ns);return Od(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Jy(){let s=mt.useContext(Zu);return Od(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Pd=mt.createContext(void 0);Pd.displayName="FrameworkContext";function jv(){let s=mt.useContext(Pd);return Od(s,"You must render this element inside a <HydratedRouter> element"),s}function $y(s,t){let i=mt.useContext(Pd),[r,l]=mt.useState(!1),[u,f]=mt.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=t,x=mt.useRef(null);mt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=g=>{g.forEach(B=>{f(B.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),mt.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Po(d,M),onBlur:Po(m,E),onMouseEnter:Po(p,M),onMouseLeave:Po(_,E),onTouchStart:Po(v,M)}]:[!1,x,{}]}function Po(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function tM({page:s,...t}){let{router:i}=Zv(),r=mt.useMemo(()=>Bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?mt.createElement(nM,{page:s,matches:r,...t}):null}function eM(s){let{manifest:t,routeModules:i}=jv(),[r,l]=mt.useState([]);return mt.useEffect(()=>{let u=!1;return Yy(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function nM({page:s,matches:t,...i}){let r=Er(),{manifest:l,routeModules:u}=jv(),{basename:f}=Zv(),{loaderData:d,matches:m}=Jy(),p=mt.useMemo(()=>O_(s,t,m,l,r,"data"),[s,t,m,l,r]),_=mt.useMemo(()=>O_(s,t,m,l,r,"assets"),[s,t,m,l,r]),v=mt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(g=>{let B=l.routes[g.route.id];!B||!B.hasLoader||(!p.some(L=>L.route.id===g.route.id)&&g.route.id in d&&u[g.route.id]?.shouldRevalidate||B.hasClientLoader?A=!0:E.add(g.route.id))}),E.size===0)return[];let S=Xy(s,f,"data");return A&&E.size>0&&S.searchParams.set("_routes",t.filter(g=>E.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,p,t,s,u]),x=mt.useMemo(()=>Zy(_,l),[_,l]),M=eM(_);return mt.createElement(mt.Fragment,null,v.map(E=>mt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>mt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>mt.createElement("link",{key:E,...A})))}function iM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kv&&(window.__reactRouterVersion="7.7.1")}catch{}function aM({basename:s,children:t,window:i}){let r=mt.useRef();r.current==null&&(r.current=WS({window:i,v5Compat:!0}));let l=r.current,[u,f]=mt.useState({action:l.action,location:l.location}),d=mt.useCallback(m=>{mt.startTransition(()=>f(m))},[f]);return mt.useLayoutEffect(()=>l.listen(d),[l,d]),mt.createElement(Oy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jv=mt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:_,viewTransition:v,...x},M){let{basename:E}=mt.useContext(Ii),A=typeof p=="string"&&Qv.test(p),S,g=!1;if(typeof p=="string"&&A&&(S=p,Kv))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),z=ua(w.pathname,E);w.origin===C.origin&&z!=null?p=z+w.search+w.hash:g=!0}catch{Oi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=vy(p,{relative:l}),[L,D,O]=$y(r,x),G=lM(p,{replace:f,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:v});function H(C){t&&t(C),C.defaultPrevented||G(C)}let X=mt.createElement("a",{...x,...O,href:S||B,onClick:g||u?t:H,ref:iM(M,D),target:m,"data-discover":!A&&i==="render"?"true":void 0});return L&&!A?mt.createElement(mt.Fragment,null,X,mt.createElement(tM,{page:B})):X});Jv.displayName="Link";var rM=mt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},_){let v=Jo(f,{relative:p.relative}),x=Er(),M=mt.useContext(Zu),{navigator:E,basename:A}=mt.useContext(Ii),S=M!=null&&dM(v)&&d===!0,g=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,B=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(B=B.toLowerCase(),L=L?L.toLowerCase():null,g=g.toLowerCase()),L&&A&&(L=ua(L,A)||L);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let O=B===g||!l&&B.startsWith(g)&&B.charAt(D)==="/",G=L!=null&&(L===g||!l&&L.startsWith(g)&&L.charAt(g.length)==="/"),H={isActive:O,isPending:G,isTransitioning:S},X=O?t:void 0,C;typeof r=="function"?C=r(H):C=[r,O?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(H):u;return mt.createElement(Jv,{...p,"aria-current":X,className:C,ref:_,style:w,to:f,viewTransition:d},typeof m=="function"?m(H):m)});rM.displayName="NavLink";var sM=mt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Pu,action:d,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:v,...x},M)=>{let E=fM(),A=hM(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",g=typeof d=="string"&&Qv.test(d),B=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,O=D?.getAttribute("formmethod")||f;E(D||L.currentTarget,{fetcherKey:t,method:O,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:v})};return mt.createElement("form",{ref:M,method:S,action:A,onSubmit:r?m:B,...x,"data-discover":!g&&s==="render"?"true":void 0})});sM.displayName="Form";function oM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $v(s){let t=mt.useContext(Ns);return je(t,oM(s)),t}function lM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=xy(),m=Er(),p=Jo(s,{relative:u});return mt.useCallback(_=>{if(Hy(_,t)){_.preventDefault();let v=i!==void 0?i:Xo(m)===Xo(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,r,t,s,l,u,f])}var uM=0,cM=()=>`__${String(++uM)}__`;function fM(){let{router:s}=$v("useSubmit"),{basename:t}=mt.useContext(Ii),i=Dy();return mt.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=ky(r,t);if(l.navigate===!1){let _=l.fetcherKey||cM();await s.fetch(_,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function hM(s,{relative:t}={}){let{basename:i}=mt.useContext(Ii),r=mt.useContext(ca);je(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Jo(s||".",{relative:t})},f=Er();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),Xo(u)}function dM(s,{relative:t}={}){let i=mt.useContext(Vv);je(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$v("useViewTransitionState"),l=Jo(s,{relative:t});if(!i.isTransitioning)return!1;let u=ua(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ua(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ku(l.pathname,f)!=null||ku(l.pathname,u)!=null}const ti={GameOverview:"game-overview",Features:"features",Media:"media",FAQ:"faq",Feedback:"feedback",About:"about"},pM=[{name:"Game Overview",linkTo:ti.GameOverview},{name:"Features",linkTo:ti.Features},{name:"Media",linkTo:ti.Media},{name:"FAQ",linkTo:ti.FAQ,tooltip:"Frequently Asked Questions"},{name:"Feedback",linkTo:ti.Feedback},{name:"About",linkTo:ti.About}];function mM({className:s="",children:t}){return se.jsx("section",{className:s,children:t})}function gM({size:s="100%",className:t=""}){return se.jsx("img",{src:"exovitae_logo.png",alt:"Logo",width:s,height:s,style:{objectFit:"contain",borderRadius:8},className:t})}function _M({className:s="",children:t}){return se.jsx("aside",{className:s,children:t})}function vM({name:s,onClick:t,disabled:i=!1,tooltip:r,className:l}){return se.jsx("div",{style:{paddingBottom:30,width:"100%"},children:se.jsx("button",{className:l,onClick:t,disabled:i,title:r,children:s})})}function xM(){return se.jsxs(se.Fragment,{children:[se.jsx("h1",{children:"Game Overview"}),se.jsx("h1",{children:"Exovitae is a multiplayer survival game set on a mysterious, Earth-like world inhabited by dinosaurs and original, otherworldly creatures. Players must gather resources, craft tools and shelters, and tame powerful beasts to thrive in both PvE and PvP scenarios. The game features a vibrant, animated visual style and blends tribal survival elements with futuristic lore. Explore diverse biomes, forge alliances, and carve your path in a dynamic, living world where survival is only the beginning."})]})}function SM(){return se.jsx("h1",{children:"Features"})}function yM(){return se.jsx("h1",{children:"Media"})}function MM(){return se.jsx("h1",{children:"Frequently Asked Questions"})}function EM(){const s=()=>{alert("Not Implemented")};return se.jsxs("div",{className:"formContainer",children:[se.jsx("h1",{children:"Feedback"}),se.jsx("input",{className:"inputField",placeholder:"Name",type:"text"}),se.jsx("textarea",{className:"inputFieldLarge",placeholder:"Your feedback..."}),se.jsx("button",{onClick:s,className:"detailsButton",children:"Submit"})]})}function TM(){return se.jsx("h1",{children:"About"})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="179",bM=0,P_=1,AM=2,t0=1,RM=2,aa=3,Xa=0,Un=1,ra=2,Va=0,Ts=1,Go=2,B_=3,I_=4,wM=5,_r=100,CM=101,DM=102,UM=103,LM=104,NM=200,OM=201,PM=202,BM=203,Vh=204,kh=205,IM=206,zM=207,FM=208,HM=209,GM=210,VM=211,kM=212,XM=213,WM=214,Xh=0,Wh=1,qh=2,Rs=3,Yh=4,Zh=5,jh=6,Kh=7,e0=0,qM=1,YM=2,ka=0,ZM=1,jM=2,KM=3,QM=4,JM=5,$M=6,tE=7,n0=300,ws=301,Cs=302,Qh=303,Jh=304,Ku=306,$h=1e3,xr=1001,td=1002,Mi=1003,eE=1004,hu=1005,Ui=1006,ch=1007,Sr=1008,Pi=1009,i0=1010,a0=1011,Wo=1012,Id=1013,yr=1014,sa=1015,$o=1016,zd=1017,Fd=1018,qo=1020,r0=35902,s0=1021,o0=1022,yi=1023,Yo=1026,Zo=1027,l0=1028,Hd=1029,u0=1030,Gd=1031,Vd=1033,Iu=33776,zu=33777,Fu=33778,Hu=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,Sd=37820,yd=37821,Gu=36492,Md=36494,Ed=36495,c0=36283,Td=36284,bd=36285,Ad=36286,nE=3200,iE=3201,f0=0,aE=1,Ga="",ui="srgb",Ds="srgb-linear",Xu="linear",Fe="srgb",rs=7680,z_=519,rE=512,sE=513,oE=514,h0=515,lE=516,uE=517,cE=518,fE=519,F_=35044,H_="300 es",Li=2e3,Wu=2001;class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let G_=1234567;const Vo=Math.PI/180,jo=180/Math.PI;function Ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function ye(s,t,i){return Math.max(t,Math.min(i,s))}function kd(s,t){return(s%t+t)%t}function hE(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function dE(s,t,i){return s!==t?(i-s)/(t-s):0}function ko(s,t,i){return(1-i)*s+i*t}function pE(s,t,i,r){return ko(s,t,1-Math.exp(-i*r))}function mE(s,t=1){return t-Math.abs(kd(s,t*2)-t)}function gE(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function _E(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function vE(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xE(s,t){return s+Math.random()*(t-s)}function SE(s){return s*(.5-Math.random())}function yE(s){s!==void 0&&(G_=s);let t=G_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ME(s){return s*Vo}function EE(s){return s*jo}function TE(s){return(s&s-1)===0&&s!==0}function bE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function AE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function RE(s,t,i,r,l){const u=Math.cos,f=Math.sin,d=u(i/2),m=f(i/2),p=u((t+r)/2),_=f((t+r)/2),v=u((t-r)/2),x=f((t-r)/2),M=u((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(d*_,m*v,m*x,d*p);break;case"YZY":s.set(m*x,d*_,m*v,d*p);break;case"ZXZ":s.set(m*v,m*x,d*_,d*p);break;case"XZX":s.set(d*_,m*E,m*M,d*p);break;case"YXY":s.set(m*M,d*_,m*E,d*p);break;case"ZYZ":s.set(m*E,m*M,d*_,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Vo,RAD2DEG:jo,generateUUID:Ps,clamp:ye,euclideanModulo:kd,mapLinear:hE,inverseLerp:dE,lerp:ko,damp:pE,pingpong:mE,smoothstep:gE,smootherstep:_E,randInt:vE,randFloat:xE,randFloatSpread:SE,seededRandom:yE,degToRad:ME,radToDeg:EE,isPowerOfTwo:TE,ceilPowerOfTwo:bE,floorPowerOfTwo:AE,setQuaternionFromProperEuler:RE,normalize:Pn,denormalize:Ss};class Ce{constructor(t=0,i=0){Ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const x=u[f+0],M=u[f+1],E=u[f+2],A=u[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(v!==A||m!==x||p!==M||_!==E){let S=1-d;const g=m*x+p*M+_*E+v*A,B=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const O=Math.sqrt(L),G=Math.atan2(O,g*B);S=Math.sin(S*G)/O,d=Math.sin(d*G)/O}const D=d*B;if(m=m*S+x*D,p=p*S+M*D,_=_*S+E*D,v=v*S+A*D,S===1-d){const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=u[f],x=u[f+1],M=u[f+2],E=u[f+3];return t[i]=d*E+_*v+m*M-p*x,t[i+1]=m*E+_*x+p*v-d*M,t[i+2]=p*E+_*M+d*x-m*v,t[i+3]=_*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"YZX":this._x=x*_*v+p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v-x*M*E;break;case"XZY":this._x=x*_*v-p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*d+l*p-u*m,this._y=l*_+f*m+u*d-r*p,this._z=u*_+f*p+r*m-l*d,this._w=f*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),_=2*(d*i-u*l),v=2*(u*r-f*i);return this.x=i+m*p+f*v-d*_,this.y=r+m*_+d*p-u*v,this.z=l+m*v+u*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new nt,V_=new Bs;class ce{constructor(t,i,r,l,u,f,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p)}set(t,i,r,l,u,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],x=r[2],M=r[5],E=r[8],A=l[0],S=l[3],g=l[6],B=l[1],L=l[4],D=l[7],O=l[2],G=l[5],H=l[8];return u[0]=f*A+d*B+m*O,u[3]=f*S+d*L+m*G,u[6]=f*g+d*D+m*H,u[1]=p*A+_*B+v*O,u[4]=p*S+_*L+v*G,u[7]=p*g+_*D+v*H,u[2]=x*A+M*B+E*O,u[5]=x*S+M*L+E*G,u[8]=x*g+M*D+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-r*u*_+r*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,x=d*m-_*u,M=p*u-f*m,E=i*v+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-_*r)*A,t[2]=(d*r-l*f)*A,t[3]=x*A,t[4]=(_*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(f*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(hh.makeScale(t,i)),this}rotate(t){return this.premultiply(hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new ce;function d0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wE(){const s=qu("canvas");return s.style.display="block",s}const k_={};function bs(s){s in k_||(k_[s]=!0,console.warn(s))}function CE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const X_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Xu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:r,transfer:Xu,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const we=DE();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class UE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=qu("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=la(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LE=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(dh(l[f].image)):u.push(dh(l[f]))}else u=dh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function dh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?UE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NE=0;const ph=new nt;class Xn extends Os{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=xr,l=xr,u=Ui,f=Sr,d=yi,m=Pi,p=Xn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Ps(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==n0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=n0;Xn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],E=m[9],A=m[2],S=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,O=(g+1)/2,G=(_+x)/4,H=(v+A)/4,X=(E+S)/4;return L>D&&L>O?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=G/r,u=H/r):D>O?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=G/l,u=X/l):O<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(O),r=H/u,l=X/u),this.set(r,l,u,i),this}let B=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(x-_)*(x-_));return Math.abs(B)<.001&&(B=1),this.x=(S-E)/B,this.y=(v-A)/B,this.z=(x-_)/B,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends Os{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Xn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends OE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class p0 extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,_i):_i.fromBufferAttribute(u,f),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),du.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),du.copy(r.boundingBox)),du.applyMatrix4(t.matrixWorld),this.union(du)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),pu.subVectors(this.max,Bo),ls.subVectors(t.a,Bo),us.subVectors(t.b,Bo),cs.subVectors(t.c,Bo),Pa.subVectors(us,ls),Ba.subVectors(cs,us),ur.subVectors(ls,cs);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-ur.z,ur.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,ur.z,0,-ur.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-ur.y,ur.x,0];return!mh(i,ls,us,cs,pu)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,ls,us,cs,pu))?!1:(mu.crossVectors(Pa,Ba),i=[mu.x,mu.y,mu.z],mh(i,ls,us,cs,pu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],_i=new nt,du=new tl,ls=new nt,us=new nt,cs=new nt,Pa=new nt,Ba=new nt,ur=new nt,Bo=new nt,pu=new nt,mu=new nt,cr=new nt;function mh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){cr.fromArray(s,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),_=r.dot(cr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const BE=new tl,Io=new nt,gh=new nt;class Qu{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):BE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(gh)),this.expandByPoint(Io.copy(t.center).sub(gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new nt,_h=new nt,gu=new nt,Ia=new nt,vh=new nt,_u=new nt,xh=new nt;class m0{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){_h.copy(t).add(i).multiplyScalar(.5),gu.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(_h);const u=t.distanceTo(i)*.5,f=-this.direction.dot(gu),d=Ia.dot(this.direction),m=-Ia.dot(gu),p=Ia.lengthSq(),_=Math.abs(1-f*f);let v,x,M,E;if(_>0)if(v=f*m-d,x=f*d-m,E=u*_,v>=0)if(x>=-E)if(x<=E){const A=1/_;v*=A,x*=A,M=v*(v+f*x+2*d)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(_h).addScaledVector(gu,x),M}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){vh.subVectors(i,t),_u.subVectors(r,t),xh.crossVectors(vh,_u);let f=this.direction.dot(xh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(_u.crossVectors(Ia,_u));if(m<0)return null;const p=d*this.direction.dot(vh.cross(Ia));if(p<0||m+p>f)return null;const _=-d*Ia.dot(xh);return _<0?null:this.at(_/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,r,l,u,f,d,m,p,_,v,x,M,E,A,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p,_,v,x,M,E,A,S)}set(t,i,r,l,u,f,d,m,p,_,v,x,M,E,A,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=f,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=f*_,M=f*v,E=d*_,A=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,E=p*_,A=p*v;i[0]=x+A*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=M*d-E,i[6]=A+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,E=p*_,A=p*v;i[0]=x-A*d,i[4]=-f*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*_,i[9]=A-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*_,M=f*v,E=d*_,A=d*v;i[0]=m*_,i[4]=E*p-M,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*_,i[4]=A-x*v,i[8]=E*v+M,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+E,i[10]=x-A*v}else if(t.order==="XZY"){const x=f*m,M=f*p,E=d*m,A=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+A,i[5]=f*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*_,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IE,t,zE)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),za.crossVectors(r,Jn),za.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),za.crossVectors(r,Jn)),za.normalize(),vu.crossVectors(Jn,za),l[0]=za.x,l[4]=vu.x,l[8]=Jn.x,l[1]=za.y,l[5]=vu.y,l[9]=Jn.y,l[2]=za.z,l[6]=vu.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],x=r[9],M=r[13],E=r[2],A=r[6],S=r[10],g=r[14],B=r[3],L=r[7],D=r[11],O=r[15],G=l[0],H=l[4],X=l[8],C=l[12],w=l[1],z=l[5],at=l[9],ot=l[13],lt=l[2],ct=l[6],P=l[10],j=l[14],q=l[3],yt=l[7],U=l[11],J=l[15];return u[0]=f*G+d*w+m*lt+p*q,u[4]=f*H+d*z+m*ct+p*yt,u[8]=f*X+d*at+m*P+p*U,u[12]=f*C+d*ot+m*j+p*J,u[1]=_*G+v*w+x*lt+M*q,u[5]=_*H+v*z+x*ct+M*yt,u[9]=_*X+v*at+x*P+M*U,u[13]=_*C+v*ot+x*j+M*J,u[2]=E*G+A*w+S*lt+g*q,u[6]=E*H+A*z+S*ct+g*yt,u[10]=E*X+A*at+S*P+g*U,u[14]=E*C+A*ot+S*j+g*J,u[3]=B*G+L*w+D*lt+O*q,u[7]=B*H+L*z+D*ct+O*yt,u[11]=B*X+L*at+D*P+O*U,u[15]=B*C+L*ot+D*j+O*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],E=t[3],A=t[7],S=t[11],g=t[15];return E*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+u*f*x-l*f*M+l*p*_-u*m*_)+S*(+i*p*v-i*d*M-u*f*v+r*f*M+u*d*_-r*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*f*v-r*f*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],E=t[12],A=t[13],S=t[14],g=t[15],B=v*S*p-A*x*p+A*m*M-d*S*M-v*m*g+d*x*g,L=E*x*p-_*S*p-E*m*M+f*S*M+_*m*g-f*x*g,D=_*A*p-E*v*p+E*d*M-f*A*M-_*d*g+f*v*g,O=E*v*m-_*A*m-E*d*x+f*A*x+_*d*S-f*v*S,G=i*B+r*L+l*D+u*O;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/G;return t[0]=B*H,t[1]=(A*x*u-v*S*u-A*l*M+r*S*M+v*l*g-r*x*g)*H,t[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*g+r*m*g)*H,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*H,t[4]=L*H,t[5]=(_*S*u-E*x*u+E*l*M-i*S*M-_*l*g+i*x*g)*H,t[6]=(E*m*u-f*S*u-E*l*p+i*S*p+f*l*g-i*m*g)*H,t[7]=(f*x*u-_*m*u+_*l*p-i*x*p-f*l*M+i*m*M)*H,t[8]=D*H,t[9]=(E*v*u-_*A*u-E*r*M+i*A*M+_*r*g-i*v*g)*H,t[10]=(f*A*u-E*d*u+E*r*p-i*A*p-f*r*g+i*d*g)*H,t[11]=(_*d*u-f*v*u-_*r*p+i*v*p+f*r*M-i*d*M)*H,t[12]=O*H,t[13]=(_*A*l-E*v*l+E*r*x-i*A*x-_*r*S+i*v*S)*H,t[14]=(E*d*l-f*A*l-E*r*m+i*A*m+f*r*S-i*d*S)*H,t[15]=(f*v*l-_*d*l+_*r*m-i*v*m-f*r*x+i*d*x)*H,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,d=t.y,m=t.z,p=u*f,_=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*f,0,p*m-l*d,_*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,_=f+f,v=d+d,x=u*p,M=u*_,E=u*v,A=f*_,S=f*v,g=d*v,B=m*p,L=m*_,D=m*v,O=r.x,G=r.y,H=r.z;return l[0]=(1-(A+g))*O,l[1]=(M+D)*O,l[2]=(E-L)*O,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(x+g))*G,l[6]=(S+B)*G,l[7]=0,l[8]=(E+L)*H,l[9]=(S-B)*H,l[10]=(1-(x+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/u,_=1/f,v=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),r.x=u,r.y=f,r.z=d,this}makePerspective(t,i,r,l,u,f,d=Li,m=!1){const p=this.elements,_=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),M=(r+l)/(r-l);let E,A;if(m)E=u/(f-u),A=f*u/(f-u);else if(d===Li)E=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===Wu)E=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,d=Li,m=!1){const p=this.elements,_=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),M=-(r+l)/(r-l);let E,A;if(m)E=1/(f-u),A=f/(f-u);else if(d===Li)E=-2/(f-u),A=-(f+u)/(f-u);else if(d===Wu)E=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new nt,vi=new en,IE=new nt(0,0,0),zE=new nt(1,1,1),za=new nt,vu=new nt,Jn=new nt,q_=new en,Y_=new Bs;class Bi{constructor(t=0,i=0,r=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FE=0;const Z_=new nt,hs=new Bs,ea=new en,xu=new nt,zo=new nt,HE=new nt,GE=new Bs,j_=new nt(1,0,0),K_=new nt(0,1,0),Q_=new nt(0,0,1),J_={type:"added"},VE={type:"removed"},ds={type:"childadded",child:null},Sh={type:"childremoved",child:null};class Tn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new nt,i=new Bi,r=new Bs,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ce}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(j_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return Z_.copy(t).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(j_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?xu.copy(t):xu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(zo,xu,this.up):ea.lookAt(xu,zo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VE),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,HE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,GE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new nt(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new nt,na=new nt,yh=new nt,ia=new nt,ps=new nt,ms=new nt,$_=new nt,Mh=new nt,Eh=new nt,Th=new nt,bh=new tn,Ah=new tn,Rh=new tn;class Si{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){xi.subVectors(l,i),na.subVectors(r,i),yh.subVectors(t,i);const f=xi.dot(xi),d=xi.dot(na),m=xi.dot(yh),p=na.dot(na),_=na.dot(yh),v=f*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,E=(f*_-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,f,d,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(f,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,r),Rh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(bh,u.x),f.addScaledVector(Ah,u.y),f.addScaledVector(Rh,u.z),f}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),na.subVectors(t,i),xi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,d;ps.subVectors(l,r),ms.subVectors(u,r),Mh.subVectors(t,r);const m=ps.dot(Mh),p=ms.dot(Mh);if(m<=0&&p<=0)return i.copy(r);Eh.subVectors(t,l);const _=ps.dot(Eh),v=ms.dot(Eh);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(ps,f);Th.subVectors(t,u);const M=ps.dot(Th),E=ms.dot(Th);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ms,d);const S=_*E-M*v;if(S<=0&&v-_>=0&&M-E>=0)return $_.subVectors(u,l),d=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector($_,d);const g=1/(S+A+x);return f=A*g,d=x*g,i.copy(r).addScaledVector(ps,f).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},Su={h:0,s:0,l:0};function wh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=kd(t,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=wh(f,u,t+1/3),this.g=wh(f,u,t),this.b=wh(f,u,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=_0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return we.workingToColorSpace(Dn.copy(this),t),Math.round(ye(Dn.r*255,0,255))*65536+Math.round(ye(Dn.g*255,0,255))*256+Math.round(ye(Dn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ui){we.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(Su);const r=ko(Fa.h,Su.h,i),l=ko(Fa.s,Su.s,i),u=ko(Fa.l,Su.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new be;be.NAMES=_0;let kE=0;class Is extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Ts,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yu extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new nt,yu=new Ce;let XE=0;class Ni{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=F_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(t),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ss(i,this.array)),i}setX(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ss(i,this.array)),i}setY(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ss(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ss(i,this.array)),i}setW(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==F_&&(t.usage=this.usage),t}}class v0 extends Ni{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class x0 extends Ni{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class zn extends Ni{constructor(t,i,r){super(new Float32Array(t),i,r)}}let WE=0;const li=new en,Ch=new Tn,gs=new nt,$n=new tl,Fo=new tl,xn=new nt;class fi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d0(t)?x0:v0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors($n.min,Fo.min),$n.expandByPoint(xn),xn.addVectors($n.max,Fo.max),$n.expandByPoint(xn)):($n.expandByPoint(Fo.min),$n.expandByPoint(Fo.max))}$n.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(gs.fromBufferAttribute(t,p),xn.add(gs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new nt,m[X]=new nt;const p=new nt,_=new nt,v=new nt,x=new Ce,M=new Ce,E=new Ce,A=new nt,S=new nt;function g(X,C,w){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,C),E.fromBufferAttribute(u,w),_.sub(p),v.sub(p),M.sub(x),E.sub(x);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(z),S.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(z),d[X].add(A),d[C].add(A),d[w].add(A),m[X].add(S),m[C].add(S),m[w].add(S))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let X=0,C=B.length;X<C;++X){const w=B[X],z=w.start,at=w.count;for(let ot=z,lt=z+at;ot<lt;ot+=3)g(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const L=new nt,D=new nt,O=new nt,G=new nt;function H(X){O.fromBufferAttribute(l,X),G.copy(O);const C=d[X];L.copy(C),L.sub(O.multiplyScalar(O.dot(C))).normalize(),D.crossVectors(G,C);const z=D.dot(m[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,z)}for(let X=0,C=B.length;X<C;++X){const w=B[X],z=w.start,at=w.count;for(let ot=z,lt=z+at;ot<lt;ot+=3)H(t.getX(ot+0)),H(t.getX(ot+1)),H(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new nt,u=new nt,f=new nt,d=new nt,m=new nt,p=new nt,_=new nt,v=new nt;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let g=0;g<_;g++)x[E++]=p[M++]}return new Ni(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tv=new en,fr=new m0,Mu=new Qu,ev=new nt,Eu=new nt,Tu=new nt,bu=new nt,Dh=new nt,Au=new nt,nv=new nt,Ru=new nt;class In extends Tn{constructor(t=new fi,i=new Yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Au.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(Dh.fromBufferAttribute(v,t),f?Au.addScaledVector(Dh,_):Au.addScaledVector(Dh.sub(i),_))}i.add(Au)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mu.copy(r.boundingSphere),Mu.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(Mu.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Mu,ev)===null||fr.origin.distanceToSquared(ev)>(t.far-t.near)**2))&&(tv.copy(u).invert(),fr.copy(t.ray).applyMatrix4(tv),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],g=f[S.materialIndex],B=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=B,O=L;D<O;D+=3){const G=d.getX(D),H=d.getX(D+1),X=d.getX(D+2);l=wu(this,g,t,r,p,_,v,G,H,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const B=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=wu(this,f,t,r,p,_,v,B,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],g=f[S.materialIndex],B=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=B,O=L;D<O;D+=3){const G=D,H=D+1,X=D+2;l=wu(this,g,t,r,p,_,v,G,H,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const B=S,L=S+1,D=S+2;l=wu(this,f,t,r,p,_,v,B,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function qE(s,t,i,r,l,u,f,d){let m;if(t.side===Un?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,t.side===Xa,d),m===null)return null;Ru.copy(d),Ru.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ru);return p<i.near||p>i.far?null:{distance:p,point:Ru.clone(),object:s}}function wu(s,t,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Eu),s.getVertexPosition(m,Tu),s.getVertexPosition(p,bu);const _=qE(s,t,i,r,Eu,Tu,bu,nv);if(_){const v=new nt;Si.getBarycoord(nv,Eu,Tu,bu,v),l&&(_.uv=Si.getInterpolatedAttribute(l,d,m,p,v,new Ce)),u&&(_.uv1=Si.getInterpolatedAttribute(u,d,m,p,v,new Ce)),f&&(_.normal=Si.getInterpolatedAttribute(f,d,m,p,v,new nt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new nt,materialIndex:0};Si.getNormal(Eu,Tu,bu,x.normal),_.face=x,_.barycoord=v}return _}class el extends fi{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new zn(p,3)),this.setAttribute("normal",new zn(_,3)),this.setAttribute("uv",new zn(v,2));function E(A,S,g,B,L,D,O,G,H,X,C){const w=D/H,z=O/X,at=D/2,ot=O/2,lt=G/2,ct=H+1,P=X+1;let j=0,q=0;const yt=new nt;for(let U=0;U<P;U++){const J=U*z-ot;for(let vt=0;vt<ct;vt++){const Mt=vt*w-at;yt[A]=Mt*B,yt[S]=J*L,yt[g]=lt,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[S]=0,yt[g]=G>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(vt/H),v.push(1-U/X),j+=1}}for(let U=0;U<X;U++)for(let J=0;J<H;J++){const vt=x+J+ct*U,Mt=x+J+ct*(U+1),Dt=x+(J+1)+ct*(U+1),tt=x+(J+1)+ct*U;m.push(vt,Mt,tt),m.push(Mt,Dt,tt),q+=6}d.addGroup(M,q,C),M+=q,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Bn(s){const t={};for(let i=0;i<s.length;i++){const r=Us(s[i]);for(const l in r)t[l]=r[l]}return t}function YE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function S0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const ZE={clone:Us,merge:Bn};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=YE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class y0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new nt,iv=new Ce,av=new Ce;class ci extends y0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,iv,av),i.subVectors(av,iv)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class QE extends Tn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new ci(_s,vs,t,i);u.layers=this.layers,this.add(u);const f=new ci(_s,vs,t,i);f.layers=this.layers,this.add(f);const d=new ci(_s,vs,t,i);d.layers=this.layers,this.add(d);const m=new ci(_s,vs,t,i);m.layers=this.layers,this.add(m);const p=new ci(_s,vs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class M0 extends Xn{constructor(t=[],i=ws,r,l,u,f,d,m,p,_){super(t,i,r,l,u,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class JE extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new M0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new el(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Va});u.uniforms.tEquirect.value=i;const f=new In(l,u),d=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Ui),new QE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class ys extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),g=this._getHandJoint(p,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($E)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ys;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class tT extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Lh=new nt,eT=new nt,nT=new ce;class mr{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Lh.subVectors(r,i).cross(eT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||nT.getNormalMatrix(t),l=this.coplanarPoint(Lh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Qu,iT=new Ce(.5,.5),Cu=new nt;class Wd{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,f=new mr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Li,r=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],_=u[4],v=u[5],x=u[6],M=u[7],E=u[8],A=u[9],S=u[10],g=u[11],B=u[12],L=u[13],D=u[14],O=u[15];if(l[0].setComponents(p-f,M-_,g-E,O-B).normalize(),l[1].setComponents(p+f,M+_,g+E,O+B).normalize(),l[2].setComponents(p+d,M+v,g+A,O+L).normalize(),l[3].setComponents(p-d,M-v,g-A,O-L).normalize(),r)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,M-x,g-S,O-D).normalize();else if(l[4].setComponents(p-m,M-x,g-S,O-D).normalize(),i===Li)l[5].setComponents(p+m,M+x,g+S,O+D).normalize();else if(i===Wu)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);const i=iT.distanceTo(t.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?t.max.x:t.min.x,Cu.y=l.normal.y>0?t.max.y:t.min.y,Cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rd extends Is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rv=new en,wd=new m0,Du=new Qu,Uu=new nt;class sv extends Tn{constructor(t=new fi,i=new Rd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Du.copy(r.boundingSphere),Du.applyMatrix4(l),Du.radius+=u,t.ray.intersectsSphere(Du)===!1)return;rv.copy(l).invert(),wd.copy(t.ray).applyMatrix4(rv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=x,A=M;E<A;E++){const S=p.getX(E);Uu.fromBufferAttribute(v,S),ov(Uu,S,m,l,t,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let E=x,A=M;E<A;E++)Uu.fromBufferAttribute(v,E),ov(Uu,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function ov(s,t,i,r,l,u,f){const d=wd.distanceSqToPoint(s);if(d<i){const m=new nt;wd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class E0 extends Xn{constructor(t,i,r=yr,l,u,f,d=Mi,m=Mi,p,_=Yo,v=1){if(_!==Yo&&_!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,f,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qd extends fi{constructor(t=1,i=1,r=1,l=32,u=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const _=[],v=[],x=[],M=[];let E=0;const A=[],S=r/2;let g=0;B(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(x,3)),this.setAttribute("uv",new zn(M,2));function B(){const D=new nt,O=new nt;let G=0;const H=(i-t)/r;for(let X=0;X<=u;X++){const C=[],w=X/u,z=w*(i-t)+t;for(let at=0;at<=l;at++){const ot=at/l,lt=ot*m+d,ct=Math.sin(lt),P=Math.cos(lt);O.x=z*ct,O.y=-w*r+S,O.z=z*P,v.push(O.x,O.y,O.z),D.set(ct,H,P).normalize(),x.push(D.x,D.y,D.z),M.push(ot,1-w),C.push(E++)}A.push(C)}for(let X=0;X<l;X++)for(let C=0;C<u;C++){const w=A[C][X],z=A[C+1][X],at=A[C+1][X+1],ot=A[C][X+1];(t>0||C!==0)&&(_.push(w,z,ot),G+=3),(i>0||C!==u-1)&&(_.push(z,at,ot),G+=3)}p.addGroup(g,G,0),g+=G}function L(D){const O=E,G=new Ce,H=new nt;let X=0;const C=D===!0?t:i,w=D===!0?1:-1;for(let at=1;at<=l;at++)v.push(0,S*w,0),x.push(0,w,0),M.push(.5,.5),E++;const z=E;for(let at=0;at<=l;at++){const lt=at/l*m+d,ct=Math.cos(lt),P=Math.sin(lt);H.x=C*P,H.y=S*w,H.z=C*ct,v.push(H.x,H.y,H.z),x.push(0,w,0),G.x=ct*.5+.5,G.y=P*.5*w+.5,M.push(G.x,G.y),E++}for(let at=0;at<l;at++){const ot=O+at,lt=z+at;D===!0?_.push(lt,lt+1,ot):_.push(lt+1,lt,ot),X+=3}p.addGroup(g,X,D===!0?1:2),g+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ju extends fi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,M=[],E=[],A=[],S=[];for(let g=0;g<_;g++){const B=g*x-f;for(let L=0;L<p;L++){const D=L*v-u;E.push(D,-B,0),A.push(0,0,1),S.push(L/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<d;B++){const L=B+p*g,D=B+p*(g+1),O=B+1+p*(g+1),G=B+1+p*g;M.push(L,D,G),M.push(D,O,G)}this.setIndex(M),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ms extends fi{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new nt,x=new nt,M=[],E=[],A=[],S=[];for(let g=0;g<=r;g++){const B=[],L=g/r;let D=0;g===0&&f===0?D=.5/i:g===r&&m===Math.PI&&(D=-.5/i);for(let O=0;O<=i;O++){const G=O/i;v.x=-t*Math.cos(l+G*u)*Math.sin(f+L*d),v.y=t*Math.cos(f+L*d),v.z=t*Math.sin(l+G*u)*Math.sin(f+L*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),S.push(G+D,1-L),B.push(p++)}_.push(B)}for(let g=0;g<r;g++)for(let B=0;B<i;B++){const L=_[g][B+1],D=_[g][B],O=_[g+1][B],G=_[g+1][B+1];(g!==0||f>0)&&M.push(L,D,G),(g!==r-1||m<Math.PI)&&M.push(D,O,G)}this.setIndex(M),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lv extends Is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f0,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aT extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rT extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class T0 extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new en,uv=new nt,cv=new nt;class sT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),i.position.copy(uv),cv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(cv),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class b0 extends y0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oT extends sT{constructor(){super(new b0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lT extends T0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new oT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uT extends T0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class cT extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function fv(s,t,i,r){const l=fT(r);switch(i){case s0:return s*t;case l0:return s*t/l.components*l.byteLength;case Hd:return s*t/l.components*l.byteLength;case u0:return s*t*2/l.components*l.byteLength;case Gd:return s*t*2/l.components*l.byteLength;case o0:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case Vd:return s*t*4/l.components*l.byteLength;case Iu:case zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fu:case Hu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gu:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16;case c0:case Td:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fT(s){switch(s){case Pi:case i0:return{byteLength:1,components:1};case Wo:case a0:case $o:return{byteLength:2,components:1};case zd:case Fd:return{byteLength:2,components:4};case yr:case Id:case sa:return{byteLength:4,components:1};case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function hT(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],A=v[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const A=v[M];s.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var dT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pT=`#ifdef USE_ALPHAHASH
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
#endif`,mT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_T=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xT=`#ifdef USE_AOMAP
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
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yT=`#ifdef USE_BATCHING
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
#endif`,MT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ET=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AT=`#ifdef USE_IRIDESCENCE
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
#endif`,RT=`#ifdef USE_BUMPMAP
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
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BT=`#define PI 3.141592653589793
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
} // validated`,IT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zT=`vec3 transformedNormal = objectNormal;
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
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kT="gl_FragColor = linearToOutputTexel( gl_FragColor );",XT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
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
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cb=`PhysicalMaterial material;
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
#endif`,fb=`struct PhysicalMaterial {
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
}`,hb=`
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
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
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qb=`float getShadowMask() {
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
}`,Jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,tA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eA=`#ifdef USE_SKINNING
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
#endif`,nA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sA=`#ifdef USE_TRANSMISSION
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
#endif`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dA=`uniform sampler2D t2D;
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
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
}`,xA=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,yA=`#define DISTANCE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`uniform float scale;
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
}`,bA=`uniform vec3 diffuse;
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
}`,AA=`#include <common>
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
}`,RA=`uniform vec3 diffuse;
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
}`,wA=`#define LAMBERT
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
}`,CA=`#define LAMBERT
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
}`,DA=`#define MATCAP
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
}`,UA=`#define MATCAP
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
}`,LA=`#define NORMAL
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
}`,NA=`#define NORMAL
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
}`,OA=`#define PHONG
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
}`,PA=`#define PHONG
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
}`,BA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,FA=`#define TOON
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
}`,HA=`uniform float size;
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
}`,GA=`uniform vec3 diffuse;
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
}`,VA=`#include <common>
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
}`,kA=`uniform vec3 color;
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
}`,XA=`uniform float rotation;
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
}`,WA=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:dT,alphahash_pars_fragment:pT,alphamap_fragment:mT,alphamap_pars_fragment:gT,alphatest_fragment:_T,alphatest_pars_fragment:vT,aomap_fragment:xT,aomap_pars_fragment:ST,batching_pars_vertex:yT,batching_vertex:MT,begin_vertex:ET,beginnormal_vertex:TT,bsdfs:bT,iridescence_fragment:AT,bumpmap_pars_fragment:RT,clipping_planes_fragment:wT,clipping_planes_pars_fragment:CT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:UT,color_fragment:LT,color_pars_fragment:NT,color_pars_vertex:OT,color_vertex:PT,common:BT,cube_uv_reflection_fragment:IT,defaultnormal_vertex:zT,displacementmap_pars_vertex:FT,displacementmap_vertex:HT,emissivemap_fragment:GT,emissivemap_pars_fragment:VT,colorspace_fragment:kT,colorspace_pars_fragment:XT,envmap_fragment:WT,envmap_common_pars_fragment:qT,envmap_pars_fragment:YT,envmap_pars_vertex:ZT,envmap_physical_pars_fragment:rb,envmap_vertex:jT,fog_vertex:KT,fog_pars_vertex:QT,fog_fragment:JT,fog_pars_fragment:$T,gradientmap_pars_fragment:tb,lightmap_pars_fragment:eb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:ab,lights_toon_fragment:sb,lights_toon_pars_fragment:ob,lights_phong_fragment:lb,lights_phong_pars_fragment:ub,lights_physical_fragment:cb,lights_physical_pars_fragment:fb,lights_fragment_begin:hb,lights_fragment_maps:db,lights_fragment_end:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:_b,logdepthbuf_vertex:vb,map_fragment:xb,map_pars_fragment:Sb,map_particle_fragment:yb,map_particle_pars_fragment:Mb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:bb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:wb,morphtarget_vertex:Cb,normal_fragment_begin:Db,normal_fragment_maps:Ub,normal_pars_fragment:Lb,normal_pars_vertex:Nb,normal_vertex:Ob,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Fb,opaque_fragment:Hb,packing:Gb,premultiplied_alpha_fragment:Vb,project_vertex:kb,dithering_fragment:Xb,dithering_pars_fragment:Wb,roughnessmap_fragment:qb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:jb,shadowmap_vertex:Kb,shadowmask_pars_fragment:Qb,skinbase_vertex:Jb,skinning_pars_vertex:$b,skinning_vertex:tA,skinnormal_vertex:eA,specularmap_fragment:nA,specularmap_pars_fragment:iA,tonemapping_fragment:aA,tonemapping_pars_fragment:rA,transmission_fragment:sA,transmission_pars_fragment:oA,uv_pars_fragment:lA,uv_pars_vertex:uA,uv_vertex:cA,worldpos_vertex:fA,background_vert:hA,background_frag:dA,backgroundCube_vert:pA,backgroundCube_frag:mA,cube_vert:gA,cube_frag:_A,depth_vert:vA,depth_frag:xA,distanceRGBA_vert:SA,distanceRGBA_frag:yA,equirect_vert:MA,equirect_frag:EA,linedashed_vert:TA,linedashed_frag:bA,meshbasic_vert:AA,meshbasic_frag:RA,meshlambert_vert:wA,meshlambert_frag:CA,meshmatcap_vert:DA,meshmatcap_frag:UA,meshnormal_vert:LA,meshnormal_frag:NA,meshphong_vert:OA,meshphong_frag:PA,meshphysical_vert:BA,meshphysical_frag:IA,meshtoon_vert:zA,meshtoon_frag:FA,points_vert:HA,points_frag:GA,shadow_vert:VA,shadow_frag:kA,sprite_vert:XA,sprite_frag:WA},Pt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Bn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Bn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Bn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Bn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Bn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Bn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Bn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Bn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Bn([Pt.common,Pt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Bn([Pt.lights,Pt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Lu={r:0,b:0,g:0},dr=new Bi,qA=new en;function YA(s,t,i,r,l,u,f){const d=new be(0);let m=u===!0?0:1,p,_,v=null,x=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function A(L){let D=!1;const O=E(L);O===null?g(d,m):O&&O.isColor&&(g(O,1),D=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const O=E(D);O&&(O.isCubeTexture||O.mapping===Ku)?(_===void 0&&(_=new In(new el(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Us(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,H,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),dr.copy(D.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qA.makeRotationFromEuler(dr)),_.material.toneMapped=we.getTransfer(O.colorSpace)!==Fe,(v!==O||x!==O.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=O,x=O.version,M=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new In(new Ju(2,2),new Wa({name:"BackgroundMaterial",uniforms:Us(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(Lu,S0(s)),r.buffers.color.setClear(Lu.r,Lu.g,Lu.b,D,f)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:A,addToRenderList:S,dispose:B}}function ZA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function d(w,z,at,ot,lt){let ct=!1;const P=v(ot,at,z);u!==P&&(u=P,p(u.object)),ct=M(w,ot,at,lt),ct&&E(w,ot,at,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,D(w,z,at,ot),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function v(w,z,at){const ot=at.wireframe===!0;let lt=r[w.id];lt===void 0&&(lt={},r[w.id]=lt);let ct=lt[z.id];ct===void 0&&(ct={},lt[z.id]=ct);let P=ct[ot];return P===void 0&&(P=x(m()),ct[ot]=P),P}function x(w){const z=[],at=[],ot=[];for(let lt=0;lt<i;lt++)z[lt]=0,at[lt]=0,ot[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:at,attributeDivisors:ot,object:w,attributes:{},index:null}}function M(w,z,at,ot){const lt=u.attributes,ct=z.attributes;let P=0;const j=at.getAttributes();for(const q in j)if(j[q].location>=0){const U=lt[q];let J=ct[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;P++}return u.attributesNum!==P||u.index!==ot}function E(w,z,at,ot){const lt={},ct=z.attributes;let P=0;const j=at.getAttributes();for(const q in j)if(j[q].location>=0){let U=ct[q];U===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),lt[q]=J,P++}u.attributes=lt,u.attributesNum=P,u.index=ot}function A(){const w=u.newAttributes;for(let z=0,at=w.length;z<at;z++)w[z]=0}function S(w){g(w,0)}function g(w,z){const at=u.newAttributes,ot=u.enabledAttributes,lt=u.attributeDivisors;at[w]=1,ot[w]===0&&(s.enableVertexAttribArray(w),ot[w]=1),lt[w]!==z&&(s.vertexAttribDivisor(w,z),lt[w]=z)}function B(){const w=u.newAttributes,z=u.enabledAttributes;for(let at=0,ot=z.length;at<ot;at++)z[at]!==w[at]&&(s.disableVertexAttribArray(at),z[at]=0)}function L(w,z,at,ot,lt,ct,P){P===!0?s.vertexAttribIPointer(w,z,at,lt,ct):s.vertexAttribPointer(w,z,at,ot,lt,ct)}function D(w,z,at,ot){A();const lt=ot.attributes,ct=at.getAttributes(),P=z.defaultAttributeValues;for(const j in ct){const q=ct[j];if(q.location>=0){let yt=lt[j];if(yt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const U=yt.normalized,J=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const Mt=vt.buffer,Dt=vt.type,tt=vt.bytesPerElement,dt=Dt===s.INT||Dt===s.UNSIGNED_INT||yt.gpuType===Id;if(yt.isInterleavedBufferAttribute){const Et=yt.data,St=Et.stride,Bt=yt.offset;if(Et.isInstancedInterleavedBuffer){for(let Qt=0;Qt<q.locationSize;Qt++)g(q.location+Qt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Qt=0;Qt<q.locationSize;Qt++)S(q.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Qt=0;Qt<q.locationSize;Qt++)L(q.location+Qt,J/q.locationSize,Dt,U,St*tt,(Bt+J/q.locationSize*Qt)*tt,dt)}else{if(yt.isInstancedBufferAttribute){for(let Et=0;Et<q.locationSize;Et++)g(q.location+Et,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Et=0;Et<q.locationSize;Et++)S(q.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Et=0;Et<q.locationSize;Et++)L(q.location+Et,J/q.locationSize,Dt,U,J*tt,J/q.locationSize*Et*tt,dt)}}else if(P!==void 0){const U=P[j];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}B()}function O(){X();for(const w in r){const z=r[w];for(const at in z){const ot=z[at];for(const lt in ot)_(ot[lt].object),delete ot[lt];delete z[at]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const at in z){const ot=z[at];for(const lt in ot)_(ot[lt].object),delete ot[lt];delete z[at]}delete r[w.id]}function H(w){for(const z in r){const at=r[z];if(at[w.id]===void 0)continue;const ot=at[w.id];for(const lt in ot)_(ot[lt].object),delete ot[lt];delete at[w.id]}}function X(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:G,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:S,disableUnusedAttributes:B}}function jA(s,t,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,v){v!==0&&(s.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];i.update(M,r,1)}function m(p,_,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=_[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function KA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==yi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const X=H===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Pi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==sa&&!X)}function m(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:O,maxSamples:G}}function QA(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new mr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,g=s.get(v);if(!l||E===null||E.length===0||u&&!S)u?_(null):p();else{const B=u?0:r,L=B*4;let D=g.clippingState||null;m.value=D,D=_(E,x,L,M);for(let O=0;O!==L;++O)D[O]=i[O];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,x,M,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const g=M+A*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,D=M;L!==A;++L,D+=4)f.copy(v[L]).applyMatrix4(B,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function JA(s){let t=new WeakMap;function i(f,d){return d===Qh?f.mapping=ws:d===Jh&&(f.mapping=Cs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qh||d===Jh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new JE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Es=4,hv=[.125,.215,.35,.446,.526,.582],vr=20,Oh=new b0,dv=new be;let Ph=null,Bh=0,Ih=0,zh=!1;const gr=(1+Math.sqrt(5))/2,xs=1/gr,pv=[new nt(-gr,xs,0),new nt(gr,xs,0),new nt(-xs,0,gr),new nt(xs,0,gr),new nt(0,gr,-xs),new nt(0,gr,xs),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],$A=new nt;class mv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=$A}=u;Ph=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Bh,Ih),this._renderer.xr.enabled=zh,t.scissorTest=!1,Nu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:$o,format:yi,colorSpace:Ds,depthBuffer:!1},l=gv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(u)),this._blurMaterial=e1(u,t,i)}return l}_compileMaterial(t){const i=new In(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,r,l,u){const m=new ci(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(dv),v.toneMapping=ka,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new Yu({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),S=new In(new el,A);let g=!1;const B=t.background;B?B.isColor&&(A.color.copy(B),t.background=null,g=!0):(A.color.copy(dv),g=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const O=this._cubeSize;Nu(l,D*O,L>2?O:0,O,O),v.setRenderTarget(l),g&&v.render(S,m),v.render(t,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=B}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_v());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new In(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Nu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Oh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=pv[(l-u-1)%pv.length];this._blur(t,u-1,u,f,d)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new In(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),A=u/E,S=isFinite(u)?1+Math.floor(_*A):vr;S>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vr}`);const g=[];let B=0;for(let H=0;H<vr;++H){const X=H/A,C=Math.exp(-X*X/2);g.push(C),H===0?B+=C:H<S&&(B+=2*C)}for(let H=0;H<g.length;H++)g[H]=g[H]/B;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const D=this._sizeLods[l],O=3*D*(l>L-Es?l-L+Es:0),G=4*(this._cubeSize-D);Nu(i,O,G,3*D,2*D),m.setRenderTarget(i),m.render(v,Oh)}}function t1(s){const t=[],i=[],r=[];let l=s;const u=s-Es+1+hv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Es?m=hv[f-s+Es-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,A=3,S=2,g=1,B=new Float32Array(A*E*M),L=new Float32Array(S*E*M),D=new Float32Array(g*E*M);for(let G=0;G<M;G++){const H=G%3*2/3-1,X=G>2?0:-1,C=[H,X,0,H+2/3,X,0,H+2/3,X+1,0,H,X,0,H+2/3,X+1,0,H,X+1,0];B.set(C,A*E*G),L.set(x,S*E*G);const w=[G,G,G,G,G,G];D.set(w,g*E*G)}const O=new fi;O.setAttribute("position",new Ni(B,A)),O.setAttribute("uv",new Ni(L,S)),O.setAttribute("faceIndex",new Ni(D,g)),t.push(O),l>Es&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function gv(s,t,i){const r=new Mr(s,t,i);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function e1(s,t,i){const r=new Float32Array(vr),l=new nt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function _v(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function vv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function n1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,_=m===ws||m===Cs;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new mv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new mv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function i1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&bs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function a1(s,t,i,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let A=0;if(M!==null){const B=M.array;A=M.version;for(let L=0,D=B.length;L<D;L+=3){const O=B[L+0],G=B[L+1],H=B[L+2];x.push(O,G,G,H,H,O)}}else if(E!==void 0){const B=E.array;A=E.version;for(let L=0,D=B.length/3-1;L<D;L+=3){const O=L+0,G=L+1,H=L+2;x.push(O,G,G,H,H,O)}}else return;const S=new(d0(x)?x0:v0)(x,1);S.version=A;const g=u.get(v);g&&t.remove(g),u.set(v,S)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function r1(s,t,i){let r;function l(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*f),i.update(M,r,1)}function p(x,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,x*f,E),i.update(M,r,E))}function _(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,r,1)}function v(x,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)p(x[g]/f,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,A,0,E);let g=0;for(let B=0;B<E;B++)g+=M[B]*A[B];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function s1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function o1(s,t,i){const r=new WeakMap,l=new tn;function u(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let O=d.attributes.position.count*D,G=1;O>t.maxTextureSize&&(G=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const H=new Float32Array(O*G*4*v),X=new p0(H,O,G,v);X.type=sa,X.needsUpdate=!0;const C=D*4;for(let z=0;z<v;z++){const at=g[z],ot=B[z],lt=L[z],ct=O*G*4*z;for(let P=0;P<at.count;P++){const j=P*C;E===!0&&(l.fromBufferAttribute(at,P),H[ct+j+0]=l.x,H[ct+j+1]=l.y,H[ct+j+2]=l.z,H[ct+j+3]=0),A===!0&&(l.fromBufferAttribute(ot,P),H[ct+j+4]=l.x,H[ct+j+5]=l.y,H[ct+j+6]=l.z,H[ct+j+7]=0),S===!0&&(l.fromBufferAttribute(lt,P),H[ct+j+8]=l.x,H[ct+j+9]=l.y,H[ct+j+10]=l.z,H[ct+j+11]=lt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new Ce(O,G)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function l1(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const R0=new Xn,xv=new E0(1,1),w0=new p0,C0=new PE,D0=new M0,Sv=[],yv=[],Mv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Sv[l];if(u===void 0&&(u=new Float32Array(l),Sv[l]=u),t!==0){r.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function $u(s,t){let i=yv[t];i===void 0&&(i=new Int32Array(t),yv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function u1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function c1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function f1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function h1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function d1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Tv.set(r),s.uniformMatrix2fv(this.addr,!1,Tv),pn(i,r)}}function p1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Ev.set(r),s.uniformMatrix3fv(this.addr,!1,Ev),pn(i,r)}}function m1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Mv.set(r),s.uniformMatrix4fv(this.addr,!1,Mv),pn(i,r)}}function g1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function v1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function x1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function S1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function M1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function E1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function T1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(xv.compareFunction=h0,u=xv):u=R0,i.setTexture2D(t||u,l)}function b1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||C0,l)}function A1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||D0,l)}function R1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||w0,l)}function w1(s){switch(s){case 5126:return u1;case 35664:return c1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return S1;case 36294:return y1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function C1(s,t){s.uniform1fv(this.addr,t)}function D1(s,t){const i=zs(t,this.size,2);s.uniform2fv(this.addr,i)}function U1(s,t){const i=zs(t,this.size,3);s.uniform3fv(this.addr,i)}function L1(s,t){const i=zs(t,this.size,4);s.uniform4fv(this.addr,i)}function N1(s,t){const i=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function O1(s,t){const i=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function P1(s,t){const i=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function B1(s,t){s.uniform1iv(this.addr,t)}function I1(s,t){s.uniform2iv(this.addr,t)}function z1(s,t){s.uniform3iv(this.addr,t)}function F1(s,t){s.uniform4iv(this.addr,t)}function H1(s,t){s.uniform1uiv(this.addr,t)}function G1(s,t){s.uniform2uiv(this.addr,t)}function V1(s,t){s.uniform3uiv(this.addr,t)}function k1(s,t){s.uniform4uiv(this.addr,t)}function X1(s,t,i){const r=this.cache,l=t.length,u=$u(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||R0,u[f])}function W1(s,t,i){const r=this.cache,l=t.length,u=$u(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||C0,u[f])}function q1(s,t,i){const r=this.cache,l=t.length,u=$u(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||D0,u[f])}function Y1(s,t,i){const r=this.cache,l=t.length,u=$u(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||w0,u[f])}function Z1(s){switch(s){case 5126:return C1;case 35664:return D1;case 35665:return U1;case 35666:return L1;case 35674:return N1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return B1;case 35667:case 35671:return I1;case 35668:case 35672:return z1;case 35669:case 35673:return F1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}class j1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=w1(i.type)}}class K1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Z1(i.type)}}class Q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function bv(s,t){s.seq.push(t),s.map[t.id]=t}function J1(s,t,i){const r=s.name,l=r.length;for(Fh.lastIndex=0;;){const u=Fh.exec(r),f=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){bv(i,p===void 0?new j1(d,s,t):new K1(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new Q1(d),bv(i,v)),i=v}}}class Vu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);J1(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Av(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const $1=37297;let tR=0;function eR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Rv=new ce;function nR(s){we._getMatrix(Rv,we.workingColorSpace,s);const t=`mat3( ${Rv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case Xu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+eR(s.getShaderSource(t),d)}else return u}function iR(s,t){const i=nR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aR(s,t){let i;switch(t){case ZM:i="Linear";break;case jM:i="Reinhard";break;case KM:i="Cineon";break;case QM:i="ACESFilmic";break;case $M:i="AgX";break;case tE:i="Neutral";break;case JM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new nt;function rR(){we.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),t=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function oR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Ho(s){return s!==""}function Cv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(uR,fR)}const cR=new Map;function fR(s,t){let i=de[t];if(i===void 0){const r=cR.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(s){return s.replace(hR,dR)}function dR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Lv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===t0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===RM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function mR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ku:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function _R(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case e0:t="ENVMAP_BLENDING_MULTIPLY";break;case qM:t="ENVMAP_BLENDING_MIX";break;case YM:t="ENVMAP_BLENDING_ADD";break}return t}function vR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function xR(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=pR(i),p=mR(i),_=gR(i),v=_R(i),x=vR(i),M=sR(i),E=oR(u),A=l.createProgram();let S,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(S=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?de.tonemapping_pars_fragment:"",i.toneMapping!==ka?aR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,iR("linearToOutputTexel",i.outputColorSpace),rR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),f=Cd(f),f=Cv(f,i),f=Dv(f,i),d=Cd(d),d=Cv(d,i),d=Dv(d,i),f=Uv(f),d=Uv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=B+S+f,D=B+g+d,O=Av(l,l.VERTEX_SHADER,L),G=Av(l,l.FRAGMENT_SHADER,D);l.attachShader(A,O),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(z){if(s.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(O)||"",lt=l.getShaderInfoLog(G)||"",ct=at.trim(),P=ot.trim(),j=lt.trim();let q=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,O,G);else{const U=wv(l,O,"vertex"),J=wv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ct+`
`+U+`
`+J)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(P===""||j==="")&&(yt=!1);yt&&(z.diagnostics={runnable:q,programLog:ct,vertexShader:{log:P,prefix:S},fragmentShader:{log:j,prefix:g}})}l.deleteShader(O),l.deleteShader(G),X=new Vu(l,A),C=lR(l,A)}let X;this.getUniforms=function(){return X===void 0&&H(this),X};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,$1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tR++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=G,this}let SR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new MR(t),i.set(t,r)),r}}class MR{constructor(t){this.id=SR++,this.code=t,this.usedTimes=0}}function ER(s,t,i,r,l,u,f){const d=new g0,m=new yR,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,z,at,ot){const lt=at.fog,ct=ot.geometry,P=C.isMeshStandardMaterial?at.environment:null,j=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),q=j&&j.mapping===Ku?j.image.height:null,yt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const U=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,J=U!==void 0?U.length:0;let vt=0;ct.morphAttributes.position!==void 0&&(vt=1),ct.morphAttributes.normal!==void 0&&(vt=2),ct.morphAttributes.color!==void 0&&(vt=3);let Mt,Dt,tt,dt;if(yt){const Te=Di[yt];Mt=Te.vertexShader,Dt=Te.fragmentShader}else Mt=C.vertexShader,Dt=C.fragmentShader,m.update(C),tt=m.getVertexShaderID(C),dt=m.getFragmentShaderID(C);const Et=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Bt=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Ee=!!C.map,oe=!!C.matcap,F=!!j,xe=!!C.aoMap,jt=!!C.lightMap,Se=!!C.bumpMap,zt=!!C.normalMap,Oe=!!C.displacementMap,Ht=!!C.emissiveMap,re=!!C.metalnessMap,ke=!!C.roughnessMap,Xe=C.anisotropy>0,N=C.clearcoat>0,T=C.dispersion>0,$=C.iridescence>0,ft=C.sheen>0,xt=C.transmission>0,ut=Xe&&!!C.anisotropyMap,It=N&&!!C.clearcoatMap,wt=N&&!!C.clearcoatNormalMap,Wt=N&&!!C.clearcoatRoughnessMap,Yt=$&&!!C.iridescenceMap,Tt=$&&!!C.iridescenceThicknessMap,Nt=ft&&!!C.sheenColorMap,Kt=ft&&!!C.sheenRoughnessMap,Xt=!!C.specularMap,Ut=!!C.specularColorMap,le=!!C.specularIntensityMap,k=xt&&!!C.transmissionMap,Rt=xt&&!!C.thicknessMap,Ct=!!C.gradientMap,Ft=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,kt=!!C.extensions;let ae=ka;C.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Ue={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Dt,defines:C.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&ot.instanceColor!==null,instancingMorph:Bt&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Et===null?s.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ds,alphaToCoverage:!!C.alphaToCoverage,map:Ee,matcap:oe,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:q,aoMap:xe,lightMap:jt,bumpMap:Se,normalMap:zt,displacementMap:x&&Oe,emissiveMap:Ht,normalMapObjectSpace:zt&&C.normalMapType===aE,normalMapTangentSpace:zt&&C.normalMapType===f0,metalnessMap:re,roughnessMap:ke,anisotropy:Xe,anisotropyMap:ut,clearcoat:N,clearcoatMap:It,clearcoatNormalMap:wt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:$,iridescenceMap:Yt,iridescenceThicknessMap:Tt,sheen:ft,sheenColorMap:Nt,sheenRoughnessMap:Kt,specularMap:Xt,specularColorMap:Ut,specularIntensityMap:le,transmission:xt,transmissionMap:k,thicknessMap:Rt,gradientMap:Ct,opaque:C.transparent===!1&&C.blending===Ts&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:Ee&&A(C.map.channel),aoMapUv:xe&&A(C.aoMap.channel),lightMapUv:jt&&A(C.lightMap.channel),bumpMapUv:Se&&A(C.bumpMap.channel),normalMapUv:zt&&A(C.normalMap.channel),displacementMapUv:Oe&&A(C.displacementMap.channel),emissiveMapUv:Ht&&A(C.emissiveMap.channel),metalnessMapUv:re&&A(C.metalnessMap.channel),roughnessMapUv:ke&&A(C.roughnessMap.channel),anisotropyMapUv:ut&&A(C.anisotropyMap.channel),clearcoatMapUv:It&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:wt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&A(C.sheenRoughnessMap.channel),specularMapUv:Xt&&A(C.specularMap.channel),specularColorMapUv:Ut&&A(C.specularColorMap.channel),specularIntensityMapUv:le&&A(C.specularIntensityMap.channel),transmissionMapUv:k&&A(C.transmissionMap.channel),thicknessMapUv:Rt&&A(C.thicknessMap.channel),alphaMapUv:Ft&&A(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(zt||Xe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ct.attributes.uv&&(Ee||Ft),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:St,skinning:ot.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ee&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&we.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ra,flipSided:C.side===Un,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:kt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&C.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)w.push(z),w.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(B(w,C),L(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function B(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=E[C.type];let z;if(w){const at=Di[w];z=ZE.clone(at.uniforms)}else z=C.uniforms;return z}function O(C,w){let z;for(let at=0,ot=_.length;at<ot;at++){const lt=_[at];if(lt.cacheKey===w){z=lt,++z.usedTimes;break}}return z===void 0&&(z=new xR(s,w,C,u),_.push(z)),z}function G(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function H(C){m.remove(C)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:O,releaseProgram:G,releaseShaderCache:H,programs:_,dispose:X}}function TR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function bR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ov(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,M,E,A,S){let g=s[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},s[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=A,g.group=S),t++,g}function d(v,x,M,E,A,S){const g=f(v,x,M,E,A,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,E,A,S){const g=f(v,x,M,E,A,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||bR),r.length>1&&r.sort(x||Nv),l.length>1&&l.sort(x||Nv)}function _(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function AR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Ov,s.set(r,[f])):l>=u.length?(f=new Ov,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function RR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new be};break;case"SpotLight":i={position:new nt,direction:new nt,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=i,i}}}function wR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let CR=0;function DR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UR(s){const t=new RR,i=wR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new en,f=new en;function d(p){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,A=0,S=0,g=0,B=0,L=0,D=0,O=0,G=0,H=0;p.sort(DR);for(let C=0,w=p.length;C<w;C++){const z=p[C],at=z.color,ot=z.intensity,lt=z.distance,ct=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=at.r*ot,v+=at.g*ot,x+=at.b*ot;else if(z.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(z.sh.coefficients[P],ot);H++}else if(z.isDirectionalLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,q=i.get(z);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=z.shadow.matrix,B++}r.directional[M]=P,M++}else if(z.isSpotLight){const P=t.get(z);P.position.setFromMatrixPosition(z.matrixWorld),P.color.copy(at).multiplyScalar(ot),P.distance=lt,P.coneCos=Math.cos(z.angle),P.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),P.decay=z.decay,r.spot[A]=P;const j=z.shadow;if(z.map&&(r.spotLightMap[O]=z.map,O++,j.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[A]=j.matrix,z.castShadow){const q=i.get(z);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=ct,D++}A++}else if(z.isRectAreaLight){const P=t.get(z);P.color.copy(at).multiplyScalar(ot),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=P,S++}else if(z.isPointLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),P.distance=z.distance,P.decay=z.decay,z.castShadow){const j=z.shadow,q=i.get(z);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=z.shadow.matrix,L++}r.point[E]=P,E++}else if(z.isHemisphereLight){const P=t.get(z);P.skyColor.copy(z.color).multiplyScalar(ot),P.groundColor.copy(z.groundColor).multiplyScalar(ot),r.hemi[g]=P,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==B||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==O||X.numLightProbes!==H)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+O-G,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=H,X.directionalLength=M,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=B,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=O,X.numLightProbes=H,r.version=CR++)}function m(p,_){let v=0,x=0,M=0,E=0,A=0;const S=_.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const L=p[g];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Pv(s){const t=new UR(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function LR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Pv(s),t.set(l,[d])):u>=f.length?(d=new Pv(s),f.push(d)):d=f[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OR=`uniform sampler2D shadow_pass;
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
}`;function PR(s,t,i){let r=new Wd;const l=new Ce,u=new Ce,f=new tn,d=new aT({depthPacking:iE}),m=new rT,p={},_=i.maxTextureSize,v={[Xa]:Un,[Un]:Xa,[ra]:ra},x=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:NR,fragmentShader:OR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new fi;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new In(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t0;let g=this.type;this.render=function(G,H,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),at=s.state;at.setBlending(Va),at.buffers.depth.getReversed()?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ot=g!==aa&&this.type===aa,lt=g===aa&&this.type!==aa;for(let ct=0,P=G.length;ct<P;ct++){const j=G[ct],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),u.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/yt.x),l.x=u.x*yt.x,q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/yt.y),l.y=u.y*yt.y,q.mapSize.y=u.y)),q.map===null||ot===!0||lt===!0){const J=this.type!==aa?{minFilter:Mi,magFilter:Mi}:{};q.map!==null&&q.map.dispose(),q.map=new Mr(l.x,l.y,J),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const U=q.getViewportCount();for(let J=0;J<U;J++){const vt=q.getViewport(J);f.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),at.viewport(f),q.updateMatrices(j,J),r=q.getFrustum(),D(H,X,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&B(q,X),q.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,z)};function B(G,H){const X=t.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(H,null,X,x,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(H,null,X,M,A,null)}function L(G,H,X,C){let w=null;const z=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(z!==void 0)w=z;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const at=w.uuid,ot=H.uuid;let lt=p[at];lt===void 0&&(lt={},p[at]=lt);let ct=lt[ot];ct===void 0&&(ct=w.clone(),lt[ot]=ct,H.addEventListener("dispose",O)),w=ct}if(w.visible=H.visible,w.wireframe=H.wireframe,C===aa?w.side=H.shadowSide!==null?H.shadowSide:H.side:w.side=H.shadowSide!==null?H.shadowSide:v[H.side],w.alphaMap=H.alphaMap,w.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,w.map=H.map,w.clipShadows=H.clipShadows,w.clippingPlanes=H.clippingPlanes,w.clipIntersection=H.clipIntersection,w.displacementMap=H.displacementMap,w.displacementScale=H.displacementScale,w.displacementBias=H.displacementBias,w.wireframeLinewidth=H.wireframeLinewidth,w.linewidth=H.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=s.properties.get(w);at.light=X}return w}function D(G,H,X,C,w){if(G.visible===!1)return;if(G.layers.test(H.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===aa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const ot=t.update(G),lt=G.material;if(Array.isArray(lt)){const ct=ot.groups;for(let P=0,j=ct.length;P<j;P++){const q=ct[P],yt=lt[q.materialIndex];if(yt&&yt.visible){const U=L(G,yt,C,w);G.onBeforeShadow(s,G,H,X,ot,U,q),s.renderBufferDirect(X,null,ot,U,G,q),G.onAfterShadow(s,G,H,X,ot,U,q)}}}else if(lt.visible){const ct=L(G,lt,C,w);G.onBeforeShadow(s,G,H,X,ot,ct,null),s.renderBufferDirect(X,null,ot,ct,G,null),G.onAfterShadow(s,G,H,X,ot,ct,null)}}const at=G.children;for(let ot=0,lt=at.length;ot<lt;ot++)D(at[ot],H,X,C,w)}function O(G){G.target.removeEventListener("dispose",O);for(const X in p){const C=p[X],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const BR={[Xh]:Wh,[qh]:jh,[Yh]:Kh,[Rs]:Zh,[Wh]:Xh,[jh]:qh,[Kh]:Yh,[Zh]:Rs};function IR(s,t){function i(){let k=!1;const Rt=new tn;let Ct=null;const Ft=new tn(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!k&&(s.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){k=bt},setClear:function(bt,_t,kt,ae,Ue){Ue===!0&&(bt*=ae,_t*=ae,kt*=ae),Rt.set(bt,_t,kt,ae),Ft.equals(Rt)===!1&&(s.clearColor(bt,_t,kt,ae),Ft.copy(Rt))},reset:function(){k=!1,Ct=null,Ft.set(-1,0,0,0)}}}function r(){let k=!1,Rt=!1,Ct=null,Ft=null,bt=null;return{setReversed:function(_t){if(Rt!==_t){const kt=t.get("EXT_clip_control");_t?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Rt=_t;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return Rt},setTest:function(_t){_t?Et(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!k&&(s.depthMask(_t),Ct=_t)},setFunc:function(_t){if(Rt&&(_t=BR[_t]),Ft!==_t){switch(_t){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case jh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=_t}},setLocked:function(_t){k=_t},setClear:function(_t){bt!==_t&&(Rt&&(_t=1-_t),s.clearDepth(_t),bt=_t)},reset:function(){k=!1,Ct=null,Ft=null,bt=null,Rt=!1}}}function l(){let k=!1,Rt=null,Ct=null,Ft=null,bt=null,_t=null,kt=null,ae=null,Ue=null;return{setTest:function(Te){k||(Te?Et(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!k&&(s.stencilMask(Te),Rt=Te)},setFunc:function(Te,hi,un){(Ct!==Te||Ft!==hi||bt!==un)&&(s.stencilFunc(Te,hi,un),Ct=Te,Ft=hi,bt=un)},setOp:function(Te,hi,un){(_t!==Te||kt!==hi||ae!==un)&&(s.stencilOp(Te,hi,un),_t=Te,kt=hi,ae=un)},setLocked:function(Te){k=Te},setClear:function(Te){Ue!==Te&&(s.clearStencil(Te),Ue=Te)},reset:function(){k=!1,Rt=null,Ct=null,Ft=null,bt=null,_t=null,kt=null,ae=null,Ue=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,A=!1,S=null,g=null,B=null,L=null,D=null,O=null,G=null,H=new be(0,0,0),X=0,C=!1,w=null,z=null,at=null,ot=null,lt=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=j>=2);let yt=null,U={};const J=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),Mt=new tn().fromArray(J),Dt=new tn().fromArray(vt);function tt(k,Rt,Ct,Ft){const bt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Ct;kt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Rt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return _t}const dt={};dt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(s.DEPTH_TEST),f.setFunc(Rs),Se(!1),zt(P_),Et(s.CULL_FACE),xe(Va);function Et(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function St(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function Bt(k,Rt){return v[k]!==Rt?(s.bindFramebuffer(k,Rt),v[k]=Rt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Rt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(k,Rt){let Ct=M,Ft=!1;if(k){Ct=x.get(Rt),Ct===void 0&&(Ct=[],x.set(Rt,Ct));const bt=k.textures;if(Ct.length!==bt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,kt=bt.length;_t<kt;_t++)Ct[_t]=s.COLOR_ATTACHMENT0+_t;Ct.length=bt.length,Ft=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Ct)}function Ee(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const oe={[_r]:s.FUNC_ADD,[CM]:s.FUNC_SUBTRACT,[DM]:s.FUNC_REVERSE_SUBTRACT};oe[UM]=s.MIN,oe[LM]=s.MAX;const F={[NM]:s.ZERO,[OM]:s.ONE,[PM]:s.SRC_COLOR,[Vh]:s.SRC_ALPHA,[GM]:s.SRC_ALPHA_SATURATE,[FM]:s.DST_COLOR,[IM]:s.DST_ALPHA,[BM]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[HM]:s.ONE_MINUS_DST_COLOR,[zM]:s.ONE_MINUS_DST_ALPHA,[VM]:s.CONSTANT_COLOR,[kM]:s.ONE_MINUS_CONSTANT_COLOR,[XM]:s.CONSTANT_ALPHA,[WM]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(k,Rt,Ct,Ft,bt,_t,kt,ae,Ue,Te){if(k===Va){A===!0&&(St(s.BLEND),A=!1);return}if(A===!1&&(Et(s.BLEND),A=!0),k!==wM){if(k!==S||Te!==C){if((g!==_r||D!==_r)&&(s.blendEquation(s.FUNC_ADD),g=_r,D=_r),Te)switch(k){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.ONE,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case B_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,L=null,O=null,G=null,H.set(0,0,0),X=0,S=k,C=Te}return}bt=bt||Rt,_t=_t||Ct,kt=kt||Ft,(Rt!==g||bt!==D)&&(s.blendEquationSeparate(oe[Rt],oe[bt]),g=Rt,D=bt),(Ct!==B||Ft!==L||_t!==O||kt!==G)&&(s.blendFuncSeparate(F[Ct],F[Ft],F[_t],F[kt]),B=Ct,L=Ft,O=_t,G=kt),(ae.equals(H)===!1||Ue!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Ue),H.copy(ae),X=Ue),S=k,C=!1}function jt(k,Rt){k.side===ra?St(s.CULL_FACE):Et(s.CULL_FACE);let Ct=k.side===Un;Rt&&(Ct=!Ct),Se(Ct),k.blending===Ts&&k.transparent===!1?xe(Va):xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ft=k.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Et(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function zt(k){k!==bM?(Et(s.CULL_FACE),k!==z&&(k===P_?s.cullFace(s.BACK):k===AM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),z=k}function Oe(k){k!==at&&(P&&s.lineWidth(k),at=k)}function Ht(k,Rt,Ct){k?(Et(s.POLYGON_OFFSET_FILL),(ot!==Rt||lt!==Ct)&&(s.polygonOffset(Rt,Ct),ot=Rt,lt=Ct)):St(s.POLYGON_OFFSET_FILL)}function re(k){k?Et(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function ke(k){k===void 0&&(k=s.TEXTURE0+ct-1),yt!==k&&(s.activeTexture(k),yt=k)}function Xe(k,Rt,Ct){Ct===void 0&&(yt===null?Ct=s.TEXTURE0+ct-1:Ct=yt);let Ft=U[Ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},U[Ct]=Ft),(Ft.type!==k||Ft.texture!==Rt)&&(yt!==Ct&&(s.activeTexture(Ct),yt=Ct),s.bindTexture(k,Rt||dt[k]),Ft.type=k,Ft.texture=Rt)}function N(){const k=U[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function Kt(k){Dt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Xt(k,Rt){let Ct=p.get(Rt);Ct===void 0&&(Ct=new WeakMap,p.set(Rt,Ct));let Ft=Ct.get(k);Ft===void 0&&(Ft=s.getUniformBlockIndex(Rt,k.name),Ct.set(k,Ft))}function Ut(k,Rt){const Ft=p.get(Rt).get(k);m.get(Rt)!==Ft&&(s.uniformBlockBinding(Rt,Ft,k.__bindingPointIndex),m.set(Rt,Ft))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,U={},v={},x=new WeakMap,M=[],E=null,A=!1,S=null,g=null,B=null,L=null,D=null,O=null,G=null,H=new be(0,0,0),X=0,C=!1,w=null,z=null,at=null,ot=null,lt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Et,disable:St,bindFramebuffer:Bt,drawBuffers:Qt,useProgram:Ee,setBlending:xe,setMaterial:jt,setFlipSided:Se,setCullFace:zt,setLineWidth:Oe,setPolygonOffset:Ht,setScissorTest:re,activeTexture:ke,bindTexture:Xe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Yt,texImage3D:Tt,updateUBOMapping:Xt,uniformBlockBinding:Ut,texStorage2D:wt,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:It,scissor:Nt,viewport:Kt,reset:le}}function zR(s,t,i,r,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return M?new OffscreenCanvas(N,T):qu("canvas")}function A(N,T,$){let ft=1;const xt=Xe(N);if((xt.width>$||xt.height>$)&&(ft=$/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ft*xt.width),It=Math.floor(ft*xt.height);v===void 0&&(v=E(ut,It));const wt=T?E(ut,It):v;return wt.width=ut,wt.height=It,wt.getContext("2d").drawImage(N,0,0,ut,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+It+")."),wt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function S(N){return N.generateMipmaps}function g(N){s.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,T,$,ft,xt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=T;if(T===s.RED&&($===s.FLOAT&&(ut=s.R32F),$===s.HALF_FLOAT&&(ut=s.R16F),$===s.UNSIGNED_BYTE&&(ut=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.R8UI),$===s.UNSIGNED_SHORT&&(ut=s.R16UI),$===s.UNSIGNED_INT&&(ut=s.R32UI),$===s.BYTE&&(ut=s.R8I),$===s.SHORT&&(ut=s.R16I),$===s.INT&&(ut=s.R32I)),T===s.RG&&($===s.FLOAT&&(ut=s.RG32F),$===s.HALF_FLOAT&&(ut=s.RG16F),$===s.UNSIGNED_BYTE&&(ut=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RG8UI),$===s.UNSIGNED_SHORT&&(ut=s.RG16UI),$===s.UNSIGNED_INT&&(ut=s.RG32UI),$===s.BYTE&&(ut=s.RG8I),$===s.SHORT&&(ut=s.RG16I),$===s.INT&&(ut=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),$===s.UNSIGNED_INT&&(ut=s.RGB32UI),$===s.BYTE&&(ut=s.RGB8I),$===s.SHORT&&(ut=s.RGB16I),$===s.INT&&(ut=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),$===s.UNSIGNED_INT&&(ut=s.RGBA32UI),$===s.BYTE&&(ut=s.RGBA8I),$===s.SHORT&&(ut=s.RGBA16I),$===s.INT&&(ut=s.RGBA32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),T===s.RGBA){const It=xt?Xu:we.getTransfer(ft);$===s.FLOAT&&(ut=s.RGBA32F),$===s.HALF_FLOAT&&(ut=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ut=It===Fe?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(N,T){let $;return N?T===null||T===yr||T===qo?$=s.DEPTH24_STENCIL8:T===sa?$=s.DEPTH32F_STENCIL8:T===Wo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yr||T===qo?$=s.DEPTH_COMPONENT24:T===sa?$=s.DEPTH_COMPONENT32F:T===Wo&&($=s.DEPTH_COMPONENT16),$}function O(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function G(N){const T=N.target;T.removeEventListener("dispose",G),X(T),T.isVideoTexture&&_.delete(T)}function H(N){const T=N.target;T.removeEventListener("dispose",H),w(T)}function X(N){const T=r.get(N);if(T.__webglInit===void 0)return;const $=N.source,ft=x.get($);if(ft){const xt=ft[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(N),Object.keys(ft).length===0&&x.delete($)}r.remove(N)}function C(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const $=N.source,ft=x.get($);delete ft[T.__cacheKey],f.memory.textures--}function w(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let xt=0;xt<T.__webglFramebuffer[ft].length;xt++)s.deleteFramebuffer(T.__webglFramebuffer[ft][xt]);else s.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)s.deleteFramebuffer(T.__webglFramebuffer[ft]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=N.textures;for(let ft=0,xt=$.length;ft<xt;ft++){const ut=r.get($[ft]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),f.memory.textures--),r.remove($[ft])}r.remove(N)}let z=0;function at(){z=0}function ot(){const N=z;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),z+=1,N}function lt(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ct(N,T){const $=r.get(N);if(N.isVideoTexture&&re(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt($,N,T);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function P(N,T){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){dt($,N,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function j(N,T){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){dt($,N,T);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function q(N,T){const $=r.get(N);if(N.version>0&&$.__version!==N.version){Et($,N,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const yt={[$h]:s.REPEAT,[xr]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},U={[Mi]:s.NEAREST,[eE]:s.NEAREST_MIPMAP_NEAREST,[hu]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},J={[rE]:s.NEVER,[fE]:s.ALWAYS,[sE]:s.LESS,[h0]:s.LEQUAL,[oE]:s.EQUAL,[cE]:s.GEQUAL,[lE]:s.GREATER,[uE]:s.NOTEQUAL};function vt(N,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===ch||T.magFilter===hu||T.magFilter===Sr||T.minFilter===Ui||T.minFilter===ch||T.minFilter===hu||T.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,yt[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,yt[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,yt[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==hu&&T.minFilter!==Sr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(N,T){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",G));const ft=T.source;let xt=x.get(ft);xt===void 0&&(xt={},x.set(ft,xt));const ut=lt(T);if(ut!==N.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),xt[ut].usedTimes++;const It=xt[N.__cacheKey];It!==void 0&&(xt[N.__cacheKey].usedTimes--,It.usedTimes===0&&C(T)),N.__cacheKey=ut,N.__webglTexture=xt[ut].texture}return $}function Dt(N,T,$){return Math.floor(Math.floor(N/$)/T)}function tt(N,T,$,ft){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,$,ft,T.data);else{ut.sort((Tt,Nt)=>Tt.start-Nt.start);let It=0;for(let Tt=1;Tt<ut.length;Tt++){const Nt=ut[It],Kt=ut[Tt],Xt=Nt.start+Nt.count,Ut=Dt(Kt.start,T.width,4),le=Dt(Nt.start,T.width,4);Kt.start<=Xt+1&&Ut===le&&Dt(Kt.start+Kt.count-1,T.width,4)===Ut?Nt.count=Math.max(Nt.count,Kt.start+Kt.count-Nt.start):(++It,ut[It]=Kt)}ut.length=It+1;const wt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Nt=ut.length;Tt<Nt;Tt++){const Kt=ut[Tt],Xt=Math.floor(Kt.start/4),Ut=Math.ceil(Kt.count/4),le=Xt%T.width,k=Math.floor(Xt/T.width),Rt=Ut,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,le,k,Rt,Ct,$,ft,T.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,wt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function dt(N,T,$){let ft=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=s.TEXTURE_3D);const xt=Mt(N,T),ut=T.source;i.bindTexture(ft,N.__webglTexture,s.TEXTURE0+$);const It=r.get(ut);if(ut.version!==It.__version||xt===!0){i.activeTexture(s.TEXTURE0+$);const wt=we.getPrimaries(we.workingColorSpace),Wt=T.colorSpace===Ga?null:we.getPrimaries(T.colorSpace),Yt=T.colorSpace===Ga||wt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Tt=A(T.image,!1,l.maxTextureSize);Tt=ke(T,Tt);const Nt=u.convert(T.format,T.colorSpace),Kt=u.convert(T.type);let Xt=L(T.internalFormat,Nt,Kt,T.colorSpace,T.isVideoTexture);vt(ft,T);let Ut;const le=T.mipmaps,k=T.isVideoTexture!==!0,Rt=It.__version===void 0||xt===!0,Ct=ut.dataReady,Ft=O(T,Tt);if(T.isDepthTexture)Xt=D(T.format===Zo,T.type),Rt&&(k?i.texStorage2D(s.TEXTURE_2D,1,Xt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Nt,Kt,null));else if(T.isDataTexture)if(le.length>0){k&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Xt,le[0].width,le[0].height);for(let bt=0,_t=le.length;bt<_t;bt++)Ut=le[bt],k?Ct&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,Nt,Kt,Ut.data):i.texImage2D(s.TEXTURE_2D,bt,Xt,Ut.width,Ut.height,0,Nt,Kt,Ut.data);T.generateMipmaps=!1}else k?(Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Xt,Tt.width,Tt.height),Ct&&tt(T,Tt,Nt,Kt)):i.texImage2D(s.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Nt,Kt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Xt,le[0].width,le[0].height,Tt.depth);for(let bt=0,_t=le.length;bt<_t;bt++)if(Ut=le[bt],T.format!==yi)if(Nt!==null)if(k){if(Ct)if(T.layerUpdates.size>0){const kt=fv(Ut.width,Ut.height,T.format,T.type);for(const ae of T.layerUpdates){const Ue=Ut.data.subarray(ae*kt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*kt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,ae,Ut.width,Ut.height,1,Nt,Ue)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Ut.width,Ut.height,Tt.depth,Nt,Ut.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Xt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Ut.width,Ut.height,Tt.depth,Nt,Kt,Ut.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Xt,Ut.width,Ut.height,Tt.depth,0,Nt,Kt,Ut.data)}else{k&&Rt&&i.texStorage2D(s.TEXTURE_2D,Ft,Xt,le[0].width,le[0].height);for(let bt=0,_t=le.length;bt<_t;bt++)Ut=le[bt],T.format!==yi?Nt!==null?k?Ct&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,Nt,Ut.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Xt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,Nt,Kt,Ut.data):i.texImage2D(s.TEXTURE_2D,bt,Xt,Ut.width,Ut.height,0,Nt,Kt,Ut.data)}else if(T.isDataArrayTexture)if(k){if(Rt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,Xt,Tt.width,Tt.height,Tt.depth),Ct)if(T.layerUpdates.size>0){const bt=fv(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const kt=Tt.data.subarray(_t*bt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*bt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Nt,Kt,kt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Nt,Kt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,Tt.width,Tt.height,Tt.depth,0,Nt,Kt,Tt.data);else if(T.isData3DTexture)k?(Rt&&i.texStorage3D(s.TEXTURE_3D,Ft,Xt,Tt.width,Tt.height,Tt.depth),Ct&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Nt,Kt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Xt,Tt.width,Tt.height,Tt.depth,0,Nt,Kt,Tt.data);else if(T.isFramebufferTexture){if(Rt)if(k)i.texStorage2D(s.TEXTURE_2D,Ft,Xt,Tt.width,Tt.height);else{let bt=Tt.width,_t=Tt.height;for(let kt=0;kt<Ft;kt++)i.texImage2D(s.TEXTURE_2D,kt,Xt,bt,_t,0,Nt,Kt,null),bt>>=1,_t>>=1}}else if(le.length>0){if(k&&Rt){const bt=Xe(le[0]);i.texStorage2D(s.TEXTURE_2D,Ft,Xt,bt.width,bt.height)}for(let bt=0,_t=le.length;bt<_t;bt++)Ut=le[bt],k?Ct&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt,Kt,Ut):i.texImage2D(s.TEXTURE_2D,bt,Xt,Nt,Kt,Ut);T.generateMipmaps=!1}else if(k){if(Rt){const bt=Xe(Tt);i.texStorage2D(s.TEXTURE_2D,Ft,Xt,bt.width,bt.height)}Ct&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Kt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Xt,Nt,Kt,Tt);S(T)&&g(ft),It.__version=ut.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Et(N,T,$){if(T.image.length!==6)return;const ft=Mt(N,T),xt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const ut=r.get(xt);if(xt.version!==ut.__version||ft===!0){i.activeTexture(s.TEXTURE0+$);const It=we.getPrimaries(we.workingColorSpace),wt=T.colorSpace===Ga?null:we.getPrimaries(T.colorSpace),Wt=T.colorSpace===Ga||It===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let _t=0;_t<6;_t++)!Yt&&!Tt?Nt[_t]=A(T.image[_t],!0,l.maxCubemapSize):Nt[_t]=Tt?T.image[_t].image:T.image[_t],Nt[_t]=ke(T,Nt[_t]);const Kt=Nt[0],Xt=u.convert(T.format,T.colorSpace),Ut=u.convert(T.type),le=L(T.internalFormat,Xt,Ut,T.colorSpace),k=T.isVideoTexture!==!0,Rt=ut.__version===void 0||ft===!0,Ct=xt.dataReady;let Ft=O(T,Kt);vt(s.TEXTURE_CUBE_MAP,T);let bt;if(Yt){k&&Rt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,le,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){bt=Nt[_t].mipmaps;for(let kt=0;kt<bt.length;kt++){const ae=bt[kt];T.format!==yi?Xt!==null?k?Ct&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,ae.width,ae.height,Xt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,le,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,0,0,ae.width,ae.height,Xt,Ut,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt,le,ae.width,ae.height,0,Xt,Ut,ae.data)}}}else{if(bt=T.mipmaps,k&&Rt){bt.length>0&&Ft++;const _t=Xe(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt[_t].width,Nt[_t].height,Xt,Ut,Nt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Nt[_t].width,Nt[_t].height,0,Xt,Ut,Nt[_t].data);for(let kt=0;kt<bt.length;kt++){const Ue=bt[kt].image[_t].image;k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Ue.width,Ue.height,Xt,Ut,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,le,Ue.width,Ue.height,0,Xt,Ut,Ue.data)}}else{k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Ut,Nt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Xt,Ut,Nt[_t]);for(let kt=0;kt<bt.length;kt++){const ae=bt[kt];k?Ct&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,0,0,Xt,Ut,ae.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,kt+1,le,Xt,Ut,ae.image[_t])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),ut.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function St(N,T,$,ft,xt,ut){const It=u.convert($.format,$.colorSpace),wt=u.convert($.type),Wt=L($.internalFormat,It,wt,$.colorSpace),Yt=r.get(T),Tt=r.get($);if(Tt.__renderTarget=T,!Yt.__hasExternalTextures){const Nt=Math.max(1,T.width>>ut),Kt=Math.max(1,T.height>>ut);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Wt,Nt,Kt,T.depth,0,It,wt,null):i.texImage2D(xt,ut,Wt,Nt,Kt,0,It,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,xt,Tt.__webglTexture,0,Oe(T)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,xt,Tt.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(N,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ft=T.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,ut=D(T.stencilBuffer,xt),It=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=Oe(T);Ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ut,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,N)}else{const ft=T.textures;for(let xt=0;xt<ft.length;xt++){const ut=ft[xt],It=u.convert(ut.format,ut.colorSpace),wt=u.convert(ut.type),Wt=L(ut.internalFormat,It,wt,ut.colorSpace),Yt=Oe(T);$&&Ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Wt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const xt=ft.__webglTexture,ut=Oe(T);if(T.depthTexture.format===Yo)Ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(T.depthTexture.format===Zo)Ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Ee(N){const T=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ft}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Qt(T.__webglFramebuffer[0],N):Qt(T.__webglFramebuffer,N)}else if($){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=s.createRenderbuffer(),Bt(T.__webglDepthbuffer[ft],N,!1);else{const xt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ut)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Bt(T.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(N,T,$){const ft=r.get(N);T!==void 0&&St(ft.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ee(N)}function F(N){const T=N.texture,$=r.get(N),ft=r.get(T);N.addEventListener("dispose",H);const xt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,It=xt.length>1;if(It||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=T.version,f.memory.textures++),ut){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)$.__webglFramebuffer[wt][Wt]=s.createFramebuffer()}else $.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)$.__webglFramebuffer[wt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(It)for(let wt=0,Wt=xt.length;wt<Wt;wt++){const Yt=r.get(xt[wt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Ht(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const Wt=xt[wt];$.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[wt]);const Yt=u.convert(Wt.format,Wt.colorSpace),Tt=u.convert(Wt.type),Nt=L(Wt.internalFormat,Yt,Tt,Wt.colorSpace,N.isXRRenderTarget===!0),Kt=Oe(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Nt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,$.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)St($.__webglFramebuffer[wt][Wt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Wt);else St($.__webglFramebuffer[wt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let wt=0,Wt=xt.length;wt<Wt;wt++){const Yt=xt[wt],Tt=r.get(Yt);let Nt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Tt.__webglTexture),vt(Nt,Yt),St($.__webglFramebuffer,N,Yt,s.COLOR_ATTACHMENT0+wt,Nt,0),S(Yt)&&g(Nt)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,ft.__webglTexture),vt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)St($.__webglFramebuffer[Wt],N,T,s.COLOR_ATTACHMENT0,wt,Wt);else St($.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,wt,0);S(T)&&g(wt),i.unbindTexture()}N.depthBuffer&&Ee(N)}function xe(N){const T=N.textures;for(let $=0,ft=T.length;$<ft;$++){const xt=T[$];if(S(xt)){const ut=B(N),It=r.get(xt).__webglTexture;i.bindTexture(ut,It),g(ut),i.unbindTexture()}}}const jt=[],Se=[];function zt(N){if(N.samples>0){if(Ht(N)===!1){const T=N.textures,$=N.width,ft=N.height;let xt=s.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(N),wt=T.length>1;if(wt)for(let Yt=0;Yt<T.length;Yt++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<T.length;Yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Tt=r.get(T[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,$,ft,0,0,$,ft,xt,s.NEAREST),m===!0&&(jt.length=0,Se.length=0,jt.push(s.COLOR_ATTACHMENT0+Yt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(jt.push(ut),Se.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let Yt=0;Yt<T.length;Yt++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Tt=r.get(T[Yt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Oe(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const T=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(N){const T=f.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function ke(N,T){const $=N.colorSpace,ft=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Ds&&$!==Ga&&(we.getTransfer($)===Fe?(ft!==yi||xt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=at,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=oe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ht}function FR(s,t){function i(r,l=Ga){let u;const f=we.getTransfer(l);if(r===Pi)return s.UNSIGNED_BYTE;if(r===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===r0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===i0)return s.BYTE;if(r===a0)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Id)return s.INT;if(r===yr)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===s0)return s.ALPHA;if(r===o0)return s.RGB;if(r===yi)return s.RGBA;if(r===Yo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===l0)return s.RED;if(r===Hd)return s.RED_INTEGER;if(r===u0)return s.RG;if(r===Gd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===Iu||r===zu||r===Fu||r===Hu)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Iu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Iu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ed)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rd||r===sd)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===od)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ld)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gu||r===Md||r===Ed)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Gu)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===c0||r===Td||r===bd||r===Ad)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Gu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class U0 extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const HR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GR=`
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

}`;class VR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new U0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:HR,fragmentShader:GR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new Ju(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kR extends Os{constructor(t,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,E=null;const A=new VR,S={},g=i.getContextAttributes();let B=null,L=null;const D=[],O=[],G=new Ce;let H=null;const X=new ci;X.viewport=new tn;const C=new ci;C.viewport=new tn;const w=[X,C],z=new cT;let at=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=D[tt];return dt===void 0&&(dt=new Uh,D[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=D[tt];return dt===void 0&&(dt=new Uh,D[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=D[tt];return dt===void 0&&(dt=new Uh,D[tt]=dt),dt.getHandSpace()};function lt(tt){const dt=O.indexOf(tt.inputSource);if(dt===-1)return;const Et=D[dt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,p||f),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function ct(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",P);for(let tt=0;tt<D.length;tt++){const dt=O[tt];dt!==null&&(O[tt]=null,D[tt].disconnect(dt))}at=null,ot=null,A.reset();for(const tt in S)delete S[tt];t.setRenderTarget(B),M=null,x=null,v=null,l=null,L=null,Dt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,St=null,Bt=null;g.depth&&(Bt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=g.stencil?Zo:Yo,St=g.stencil?qo:yr);const Qt={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:u};x=v.createProjectionLayer(Qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new Mr(x.textureWidth,x.textureHeight,{format:yi,type:Pi,depthTexture:new E0(x.textureWidth,x.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Mr(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function P(tt){for(let dt=0;dt<tt.removed.length;dt++){const Et=tt.removed[dt],St=O.indexOf(Et);St>=0&&(O[St]=null,D[St].disconnect(Et))}for(let dt=0;dt<tt.added.length;dt++){const Et=tt.added[dt];let St=O.indexOf(Et);if(St===-1){for(let Qt=0;Qt<D.length;Qt++)if(Qt>=O.length){O.push(Et),St=Qt;break}else if(O[Qt]===null){O[Qt]=Et,St=Qt;break}if(St===-1)break}const Bt=D[St];Bt&&Bt.connect(Et)}}const j=new nt,q=new nt;function yt(tt,dt,Et){j.setFromMatrixPosition(dt.matrixWorld),q.setFromMatrixPosition(Et.matrixWorld);const St=j.distanceTo(q),Bt=dt.projectionMatrix.elements,Qt=Et.projectionMatrix.elements,Ee=Bt[14]/(Bt[10]-1),oe=Bt[14]/(Bt[10]+1),F=(Bt[9]+1)/Bt[5],xe=(Bt[9]-1)/Bt[5],jt=(Bt[8]-1)/Bt[0],Se=(Qt[8]+1)/Qt[0],zt=Ee*jt,Oe=Ee*Se,Ht=St/(-jt+Se),re=Ht*-jt;if(dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(re),tt.translateZ(Ht),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Bt[10]===-1)tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const ke=Ee+Ht,Xe=oe+Ht,N=zt-re,T=Oe+(St-re),$=F*oe/Xe*ke,ft=xe*oe/Xe*ke;tt.projectionMatrix.makePerspective(N,T,$,ft,ke,Xe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function U(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let dt=tt.near,Et=tt.far;A.texture!==null&&(A.depthNear>0&&(dt=A.depthNear),A.depthFar>0&&(Et=A.depthFar)),z.near=C.near=X.near=dt,z.far=C.far=X.far=Et,(at!==z.near||ot!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),at=z.near,ot=z.far),z.layers.mask=tt.layers.mask|6,X.layers.mask=z.layers.mask&3,C.layers.mask=z.layers.mask&5;const St=tt.parent,Bt=z.cameras;U(z,St);for(let Qt=0;Qt<Bt.length;Qt++)U(Bt[Qt],St);Bt.length===2?yt(z,X,C):z.projectionMatrix.copy(X.projectionMatrix),J(tt,z,St)};function J(tt,dt,Et){Et===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=jo*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(tt){m=tt,x!==null&&(x.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(z)},this.getCameraTexture=function(tt){return S[tt]};let vt=null;function Mt(tt,dt){if(_=dt.getViewerPose(p||f),E=dt,_!==null){const Et=_.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let St=!1;Et.length!==z.cameras.length&&(z.cameras.length=0,St=!0);for(let oe=0;oe<Et.length;oe++){const F=Et[oe];let xe=null;if(M!==null)xe=M.getViewport(F);else{const Se=v.getViewSubImage(x,F);xe=Se.viewport,oe===0&&(t.setRenderTargetTextures(L,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(L))}let jt=w[oe];jt===void 0&&(jt=new ci,jt.layers.enable(oe),jt.viewport=new tn,w[oe]=jt),jt.matrix.fromArray(F.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(F.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(z.matrix.copy(jt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),St===!0&&z.cameras.push(jt)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const oe=v.getDepthInformation(Et[0]);oe&&oe.isValid&&oe.texture&&A.init(oe,l.renderState)}if(Bt&&Bt.includes("camera-access")&&(t.state.unbindTexture(),v))for(let oe=0;oe<Et.length;oe++){const F=Et[oe].camera;if(F){let xe=S[F];xe||(xe=new U0,S[F]=xe);const jt=v.getCameraImage(F);xe.sourceTexture=jt}}}for(let Et=0;Et<D.length;Et++){const St=O[Et],Bt=D[Et];St!==null&&Bt!==void 0&&Bt.update(St,dt,p||f)}vt&&vt(tt,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Dt=new A0;Dt.setAnimationLoop(Mt),this.setAnimationLoop=function(tt){vt=tt},this.dispose=function(){}}}const pr=new Bi,XR=new en;function WR(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,S0(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,B,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,D)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),A(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,B,L):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Un&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Un&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const B=t.get(g),L=B.envMap,D=B.envMapRotation;L&&(S.envMap.value=L,pr.copy(D),pr.x*=-1,pr.y*=-1,pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),S.envMapRotation.value.setFromMatrix4(XR.makeRotationFromEuler(pr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,B,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*B,S.scale.value=L*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,B){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const B=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function qR(s,t,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const D=L.program;r.uniformBlockBinding(B,D)}function p(B,L){let D=l[B.id];D===void 0&&(E(B),D=_(B),l[B.id]=D,B.addEventListener("dispose",S));const O=L.program;r.updateUBOMapping(B,O);const G=t.render.frame;u[B.id]!==G&&(x(B),u[B.id]=G)}function _(B){const L=v();B.__bindingPointIndex=L;const D=s.createBuffer(),O=B.__size,G=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function v(){for(let B=0;B<d;B++)if(f.indexOf(B)===-1)return f.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const L=l[B.id],D=B.uniforms,O=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let G=0,H=D.length;G<H;G++){const X=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,w=X.length;C<w;C++){const z=X[C];if(M(z,G,C,O)===!0){const at=z.__offset,ot=Array.isArray(z.value)?z.value:[z.value];let lt=0;for(let ct=0;ct<ot.length;ct++){const P=ot[ct],j=A(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,at+lt,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):(P.toArray(z.__data,lt),lt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,at,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(B,L,D,O){const G=B.value,H=L+"_"+D;if(O[H]===void 0)return typeof G=="number"||typeof G=="boolean"?O[H]=G:O[H]=G.clone(),!0;{const X=O[H];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return O[H]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function E(B){const L=B.uniforms;let D=0;const O=16;for(let H=0,X=L.length;H<X;H++){const C=Array.isArray(L[H])?L[H]:[L[H]];for(let w=0,z=C.length;w<z;w++){const at=C[w],ot=Array.isArray(at.value)?at.value:[at.value];for(let lt=0,ct=ot.length;lt<ct;lt++){const P=ot[lt],j=A(P),q=D%O,yt=q%j.boundary,U=q+yt;D+=yt,U!==0&&O-U<j.storage&&(D+=O-U),at.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=j.storage}}}const G=D%O;return G>0&&(D+=O-G),B.__size=D,B.__cache={},this}function A(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function S(B){const L=B.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const B in l)s.deleteBuffer(l[B]);f=[],l={},u={}}return{bind:m,update:p,dispose:g}}class YR{constructor(t={}){const{canvas:i=wE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=ui;let G=0,H=0,X=null,C=-1,w=null;const z=new tn,at=new tn;let ot=null;const lt=new be(0);let ct=0,P=i.width,j=i.height,q=1,yt=null,U=null;const J=new tn(0,0,P,j),vt=new tn(0,0,P,j);let Mt=!1;const Dt=new Wd;let tt=!1,dt=!1;const Et=new en,St=new nt,Bt=new tn,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function oe(){return X===null?q:1}let F=r;function xe(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",bt,!1),F===null){const W="webgl2";if(F=xe(W,R),F===null)throw xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let jt,Se,zt,Oe,Ht,re,ke,Xe,N,T,$,ft,xt,ut,It,wt,Wt,Yt,Tt,Nt,Kt,Xt,Ut,le;function k(){jt=new i1(F),jt.init(),Xt=new FR(F,jt),Se=new KA(F,jt,t,Xt),zt=new IR(F,jt),Se.reversedDepthBuffer&&x&&zt.buffers.depth.setReversed(!0),Oe=new s1(F),Ht=new TR,re=new zR(F,jt,zt,Ht,Se,Xt,Oe),ke=new JA(D),Xe=new n1(D),N=new hT(F),Ut=new ZA(F,N),T=new a1(F,N,Oe,Ut),$=new l1(F,T,N,Oe),Tt=new o1(F,Se,re),wt=new QA(Ht),ft=new ER(D,ke,Xe,jt,Se,Ut,wt),xt=new WR(D,Ht),ut=new AR,It=new LR(jt),Yt=new YA(D,ke,Xe,zt,$,M,m),Wt=new PR(D,$,Se),le=new qR(F,Oe,Se,zt),Nt=new jA(F,jt,Oe),Kt=new r1(F,jt,Oe),Oe.programs=ft.programs,D.capabilities=Se,D.extensions=jt,D.properties=Ht,D.renderLists=ut,D.shadowMap=Wt,D.state=zt,D.info=Oe}k();const Rt=new kR(D,F);this.xr=Rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,W,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),rt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*q,j*q).floor()},this.setDrawingBufferSize=function(R,W,rt){P=R,j=W,q=rt,i.width=Math.floor(R*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,W,rt,st){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,W,rt,st),zt.viewport(z.copy(J).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,W,rt,st){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,W,rt,st),zt.scissor(at.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){zt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,rt=!0){let st=0;if(R){let Z=!1;if(X!==null){const At=X.texture.format;Z=At===Vd||At===Gd||At===Hd}if(Z){const At=X.texture.type,Lt=At===Pi||At===yr||At===Wo||At===qo||At===zd||At===Fd,Gt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),$t=Gt.r,ee=Gt.g,qt=Gt.b;Lt?(E[0]=$t,E[1]=ee,E[2]=qt,E[3]=Ot,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=$t,A[1]=ee,A[2]=qt,A[3]=Ot,F.clearBufferiv(F.COLOR,0,A))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),rt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Yt.dispose(),ut.dispose(),It.dispose(),Ht.dispose(),ke.dispose(),Xe.dispose(),$.dispose(),Ut.dispose(),le.dispose(),ft.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",un),Rt.removeEventListener("sessionend",cn),Ke.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=Oe.autoReset,W=Wt.enabled,rt=Wt.autoUpdate,st=Wt.needsUpdate,Z=Wt.type;k(),Oe.autoReset=R,Wt.enabled=W,Wt.autoUpdate=rt,Wt.needsUpdate=st,Wt.type=Z}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const W=R.target;W.removeEventListener("dispose",_t),kt(W)}function kt(R){ae(R),Ht.remove(R)}function ae(R){const W=Ht.get(R).programs;W!==void 0&&(W.forEach(function(rt){ft.releaseProgram(rt)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,rt,st,Z,At){W===null&&(W=Qt);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=fa(R,W,rt,st,Z);zt.setMaterial(st,Lt);let Ot=rt.index,$t=1;if(st.wireframe===!0){if(Ot=T.getWireframeAttribute(rt),Ot===void 0)return;$t=2}const ee=rt.drawRange,qt=rt.attributes.position;let fe=ee.start*$t,Ae=(ee.start+ee.count)*$t;At!==null&&(fe=Math.max(fe,At.start*$t),Ae=Math.min(Ae,(At.start+At.count)*$t)),Ot!==null?(fe=Math.max(fe,0),Ae=Math.min(Ae,Ot.count)):qt!=null&&(fe=Math.max(fe,0),Ae=Math.min(Ae,qt.count));const qe=Ae-fe;if(qe<0||qe===1/0)return;Ut.setup(Z,st,Gt,rt,Ot);let Pe,he=Nt;if(Ot!==null&&(Pe=N.get(Ot),he=Kt,he.setIndex(Pe)),Z.isMesh)st.wireframe===!0?(zt.setLineWidth(st.wireframeLinewidth*oe()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(Z.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),zt.setLineWidth(Jt*oe()),Z.isLineSegments?he.setMode(F.LINES):Z.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else Z.isPoints?he.setMode(F.POINTS):Z.isSprite&&he.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))he.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,We=Z._multiDrawCounts,ge=Z._multiDrawCount,bn=Ot?N.get(Ot).bytesPerElement:1,di=Ht.get(st).currentProgram.getUniforms();for(let Ln=0;Ln<ge;Ln++)di.setValue(F,"_gl_DrawID",Ln),he.render(Jt[Ln]/bn,We[Ln])}else if(Z.isInstancedMesh)he.renderInstances(fe,qe,Z.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,We=Math.min(rt.instanceCount,Jt);he.renderInstances(fe,qe,We)}else he.render(fe,qe)};function Ue(R,W,rt){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,Ti(R,W,rt),R.side=Xa,R.needsUpdate=!0,Ti(R,W,rt),R.side=ra):Ti(R,W,rt)}this.compile=function(R,W,rt=null){rt===null&&(rt=R),g=It.get(rt),g.init(W),L.push(g),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const st=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Gt=At[Lt];Ue(Gt,rt,Z),st.add(Gt)}else Ue(At,rt,Z),st.add(At)}),g=L.pop(),st},this.compileAsync=function(R,W,rt=null){const st=this.compile(R,W,rt);return new Promise(Z=>{function At(){if(st.forEach(function(Lt){Ht.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){Z(R);return}setTimeout(At,10)}jt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Te=null;function hi(R){Te&&Te(R)}function un(){Ke.stop()}function cn(){Ke.start()}const Ke=new A0;Ke.setAnimationLoop(hi),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(R){Te=R,Rt.setAnimationLoop(R),R===null?Ke.stop():Ke.start()},Rt.addEventListener("sessionstart",un),Rt.addEventListener("sessionend",cn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(W),W=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,X),g=It.get(R,L.length),g.init(W),L.push(g),Et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Dt.setFromProjectionMatrix(Et,Li,W.reversedDepth),dt=this.localClippingEnabled,tt=wt.init(this.clippingPlanes,dt),S=ut.get(R,B.length),S.init(),B.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&Ei(At,W,-1/0,D.sortObjects)}Ei(R,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(yt,U),Ee=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ee&&Yt.addToRenderList(S,R),this.info.render.frame++,tt===!0&&wt.beginShadows();const rt=g.state.shadowsArray;Wt.render(rt,R,W),tt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(g.setupLights(),W.isArrayCamera){const At=W.cameras;if(Z.length>0)for(let Lt=0,Gt=At.length;Lt<Gt;Lt++){const Ot=At[Lt];nl(st,Z,R,Ot)}Ee&&Yt.render(R);for(let Lt=0,Gt=At.length;Lt<Gt;Lt++){const Ot=At[Lt];Tr(S,R,Ot,Ot.viewport)}}else Z.length>0&&nl(st,Z,R,W),Ee&&Yt.render(R),Tr(S,R,W);X!==null&&H===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,W),Ut.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],tt===!0&&wt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?S=B[B.length-1]:S=null};function Ei(R,W,rt,st){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Dt.intersectsSprite(R)){st&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Lt=$.update(R),Gt=R.material;Gt.visible&&S.push(R,Lt,Gt,rt,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Dt.intersectsObject(R))){const Lt=$.update(R),Gt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Bt.copy(Lt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Gt)){const Ot=Lt.groups;for(let $t=0,ee=Ot.length;$t<ee;$t++){const qt=Ot[$t],fe=Gt[qt.materialIndex];fe&&fe.visible&&S.push(R,Lt,fe,rt,Bt.z,qt)}}else Gt.visible&&S.push(R,Lt,Gt,rt,Bt.z,null)}}const At=R.children;for(let Lt=0,Gt=At.length;Lt<Gt;Lt++)Ei(At[Lt],W,rt,st)}function Tr(R,W,rt,st){const Z=R.opaque,At=R.transmissive,Lt=R.transparent;g.setupLightsView(rt),tt===!0&&wt.setGlobalState(D.clippingPlanes,rt),st&&zt.viewport(z.copy(st)),Z.length>0&&br(Z,W,rt),At.length>0&&br(At,W,rt),Lt.length>0&&br(Lt,W,rt),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function nl(R,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Mr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?$o:Pi,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const At=g.state.transmissionRenderTarget[st.id],Lt=st.viewport||z;At.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(lt),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),Ee&&Yt.render(rt);const ee=D.toneMapping;D.toneMapping=ka;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),tt===!0&&wt.setGlobalState(D.clippingPlanes,st),br(R,rt,st),re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At),jt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ae=0,qe=W.length;Ae<qe;Ae++){const Pe=W[Ae],he=Pe.object,Jt=Pe.geometry,We=Pe.material,ge=Pe.group;if(We.side===ra&&he.layers.test(st.layers)){const bn=We.side;We.side=Un,We.needsUpdate=!0,Fs(he,rt,st,Jt,We,ge),We.side=bn,We.needsUpdate=!0,fe=!0}}fe===!0&&(re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At))}D.setRenderTarget(Gt,Ot,$t),D.setClearColor(lt,ct),qt!==void 0&&(st.viewport=qt),D.toneMapping=ee}function br(R,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,At=R.length;Z<At;Z++){const Lt=R[Z],Gt=Lt.object,Ot=Lt.geometry,$t=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&st!==null&&(ee=st),Gt.layers.test(rt.layers)&&Fs(Gt,W,rt,Ot,ee,$t)}}function Fs(R,W,rt,st,Z,At){R.onBeforeRender(D,W,rt,st,Z,At),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,W,rt,st,R,At),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=Un,Z.needsUpdate=!0,D.renderBufferDirect(rt,W,st,Z,R,At),Z.side=Xa,Z.needsUpdate=!0,D.renderBufferDirect(rt,W,st,Z,R,At),Z.side=ra):D.renderBufferDirect(rt,W,st,Z,R,At),R.onAfterRender(D,W,rt,st,Z,At)}function Ti(R,W,rt){W.isScene!==!0&&(W=Qt);const st=Ht.get(R),Z=g.state.lights,At=g.state.shadowsArray,Lt=Z.state.version,Gt=ft.getParameters(R,Z.state,At,W,rt),Ot=ft.getProgramCacheKey(Gt);let $t=st.programs;st.environment=R.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(R.isMeshStandardMaterial?Xe:ke).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",_t),$t=new Map,st.programs=$t);let ee=$t.get(Ot);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Lt)return zi(R,Gt),ee}else Gt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Gt,D),ee=ft.acquireProgram(Gt,Ot),$t.set(Ot,ee),st.uniforms=Gt.uniforms;const qt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=wt.uniform),zi(R,Gt),st.needsLights=ha(R),st.lightsStateVersion=Lt,st.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function Ar(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function zi(R,W){const rt=Ht.get(R);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function fa(R,W,rt,st,Z){W.isScene!==!0&&(W=Qt),re.resetTextureUnits();const At=W.fog,Lt=st.isMeshStandardMaterial?W.environment:null,Gt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ds,Ot=(st.isMeshStandardMaterial?Xe:ke).get(st.envMap||Lt),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let qe=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,he=Pe!==void 0?Pe.length:0,Jt=Ht.get(st),We=g.state.lights;if(tt===!0&&(dt===!0||R!==w)){const Qe=R===w&&st.id===C;wt.setState(st,R,Qe)}let ge=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==Gt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Ot||st.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==wt.numPlanes||Jt.numIntersection!==wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==fe||Jt.morphColors!==Ae||Jt.toneMapping!==qe||Jt.morphTargetsCount!==he)&&(ge=!0):(ge=!0,Jt.__version=st.version);let bn=Jt.currentProgram;ge===!0&&(bn=Ti(st,W,Z));let di=!1,Ln=!1,mn=!1;const He=bn.getUniforms(),Nn=Jt.uniforms;if(zt.useProgram(bn.program)&&(di=!0,Ln=!0,mn=!0),st.id!==C&&(C=st.id,Ln=!0),di||w!==R){zt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(F,"projectionMatrix",R.projectionMatrix),He.setValue(F,"viewMatrix",R.matrixWorldInverse);const Sn=He.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,St.setFromMatrixPosition(R.matrixWorld)),Se.logarithmicDepthBuffer&&He.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ln=!0,mn=!0)}if(Z.isSkinnedMesh){He.setOptional(F,Z,"bindMatrix"),He.setOptional(F,Z,"bindMatrixInverse");const Qe=Z.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),He.setValue(F,"boneTexture",Qe.boneTexture,re))}Z.isBatchedMesh&&(He.setOptional(F,Z,"batchingTexture"),He.setValue(F,"batchingTexture",Z._matricesTexture,re),He.setOptional(F,Z,"batchingIdTexture"),He.setValue(F,"batchingIdTexture",Z._indirectTexture,re),He.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(F,"batchingColorTexture",Z._colorsTexture,re));const An=rt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Tt.update(Z,rt,bn),(Ln||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,He.setValue(F,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Ln&&(He.setValue(F,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&qa(Nn,mn),At&&st.fog===!0&&xt.refreshFogUniforms(Nn,At),xt.refreshMaterialUniforms(Nn,st,q,j,g.state.transmissionRenderTarget[R.id]),Vu.upload(F,Ar(Jt),Nn,re)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Vu.upload(F,Ar(Jt),Nn,re),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(F,"center",Z.center),He.setValue(F,"modelViewMatrix",Z.modelViewMatrix),He.setValue(F,"normalMatrix",Z.normalMatrix),He.setValue(F,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let Sn=0,Rr=Qe.length;Sn<Rr;Sn++){const Fn=Qe[Sn];le.update(Fn,bn),le.bind(Fn,bn)}}return bn}function qa(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,rt){const st=Ht.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=W,Ht.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const rt=Ht.get(R);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const rn=F.createFramebuffer();this.setRenderTarget=function(R,W=0,rt=0){X=R,G=W,H=rt;let st=!0,Z=null,At=!1,Lt=!1;if(R){const Ot=Ht.get(R);if(Ot.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ot.__hasExternalTextures)re.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ee=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?Z=ee[W][rt]:Z=ee[W],At=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Z=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[rt]:Z=ee,z.copy(R.viewport),at.copy(R.scissor),ot=R.scissorTest}else z.copy(J).multiplyScalar(q).floor(),at.copy(vt).multiplyScalar(q).floor(),ot=Mt;if(rt!==0&&(Z=rn),zt.bindFramebuffer(F.FRAMEBUFFER,Z)&&st&&zt.drawBuffers(R,Z),zt.viewport(z),zt.scissor(at),zt.setScissorTest(ot),At){const Ot=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,rt)}else if(Lt){const Ot=W;for(let $t=0;$t<R.textures.length;$t++){const ee=Ht.get(R.textures[$t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,Ot)}}else if(R!==null&&rt!==0){const Ot=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,rt)}C=-1},this.readRenderTargetPixels=function(R,W,rt,st,Z,At,Lt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){zt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const $t=R.textures[Gt],ee=$t.format,qt=$t.type;if(!Se.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-st&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Gt),F.readPixels(W,rt,st,Z,Xt.convert(ee),Xt.convert(qt),At))}finally{const $t=X!==null?Ht.get(X).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,W,rt,st,Z,At,Lt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(W>=0&&W<=R.width-st&&rt>=0&&rt<=R.height-Z){zt.bindFramebuffer(F.FRAMEBUFFER,Ot);const $t=R.textures[Gt],ee=$t.format,qt=$t.type;if(!Se.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Gt),F.readPixels(W,rt,st,Z,Xt.convert(ee),Xt.convert(qt),0);const Ae=X!==null?Ht.get(X).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Ae);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await CE(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(fe),F.deleteSync(qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(R.image.width*st),At=Math.floor(R.image.height*st),Lt=W!==null?W.x:0,Gt=W!==null?W.y:0;re.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Lt,Gt,Z,At),zt.unbindTexture()};const il=F.createFramebuffer(),al=F.createFramebuffer();this.copyTextureToTexture=function(R,W,rt=null,st=null,Z=0,At=null){At===null&&(Z!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Lt,Gt,Ot,$t,ee,qt,fe,Ae,qe;const Pe=R.isCompressedTexture?R.mipmaps[At]:R.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Gt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const An=Math.pow(2,-Z);Lt=Math.floor(Pe.width*An),Gt=Math.floor(Pe.height*An),R.isDataArrayTexture?Ot=Pe.depth:R.isData3DTexture?Ot=Math.floor(Pe.depth*An):Ot=1,$t=0,ee=0,qt=0}st!==null?(fe=st.x,Ae=st.y,qe=st.z):(fe=0,Ae=0,qe=0);const he=Xt.convert(W.format),Jt=Xt.convert(W.type);let We;W.isData3DTexture?(re.setTexture3D(W,0),We=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),We=F.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ge=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),di=F.getParameter(F.UNPACK_SKIP_PIXELS),Ln=F.getParameter(F.UNPACK_SKIP_ROWS),mn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const He=R.isDataArrayTexture||R.isData3DTexture,Nn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const An=Ht.get(R),Qe=Ht.get(W),Sn=Ht.get(An.__renderTarget),Rr=Ht.get(Qe.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Fn=0;Fn<Ot;Fn++)He&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,Z,qt+Fn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,At,qe+Fn)),F.blitFramebuffer($t,ee,Lt,Gt,fe,Ae,Lt,Gt,F.DEPTH_BUFFER_BIT,F.NEAREST);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ht.has(R)){const An=Ht.get(R),Qe=Ht.get(W);zt.bindFramebuffer(F.READ_FRAMEBUFFER,il),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,al);for(let Sn=0;Sn<Ot;Sn++)He?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,An.__webglTexture,Z,qt+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,An.__webglTexture,Z),Nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,At,qe+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,At),Z!==0?F.blitFramebuffer($t,ee,Lt,Gt,fe,Ae,Lt,Gt,F.COLOR_BUFFER_BIT,F.NEAREST):Nn?F.copyTexSubImage3D(We,At,fe,Ae,qe+Sn,$t,ee,Lt,Gt):F.copyTexSubImage2D(We,At,fe,Ae,$t,ee,Lt,Gt);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(We,At,fe,Ae,qe,Lt,Gt,Ot,he,Jt,Pe.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(We,At,fe,Ae,qe,Lt,Gt,Ot,he,Pe.data):F.texSubImage3D(We,At,fe,Ae,qe,Lt,Gt,Ot,he,Jt,Pe):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,fe,Ae,Lt,Gt,he,Jt,Pe.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,fe,Ae,Pe.width,Pe.height,he,Pe.data):F.texSubImage2D(F.TEXTURE_2D,At,fe,Ae,Lt,Gt,he,Jt,Pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,di),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mn),At===0&&W.generateMipmaps&&F.generateMipmap(We),zt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,rt=null,st=null,Z=0){return bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,rt,st,Z)},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),zt.unbindTexture()},this.resetState=function(){G=0,H=0,X=null,zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}function ZR({className:s="",height:t="60vh"}){const i=mt.useRef(null),r=mt.useRef(null),l=mt.useRef(null);return mt.useEffect(()=>{const u=i.current;if(!u)return;const f=u.clientWidth,d=typeof t=="number"?t:u.clientHeight||400,m=new tT;m.background=new be(16);const p=new ci(60,f/d,.1,1e3);p.position.set(0,1,16);let _=r.current;_||(_=new YR({antialias:!0,alpha:!0}),r.current=_,u.appendChild(_.domElement)),_.setSize(f,d);const v=new uT(6724044,.6);m.add(v);const x=new lT(16777215,.8);x.position.set(5,10,7),m.add(x);const M=new fi,E=[];for(let St=0;St<5e3;St++)E.push(ss.randFloatSpread(1e3),ss.randFloatSpread(1e3),ss.randFloatSpread(1e3));M.setAttribute("position",new zn(E,3));const A=new Rd({color:16777215,size:.5}),S=new sv(M,A);m.add(S);const g=new ys,B=2,L=40,D=B*L,O=.3,G=1.5,H=new Ms(.4,32,32),X=new qd(.05,.05,1.2,8),C=new lv({color:49151,metalness:.8,roughness:.2,emissive:2245734,emissiveIntensity:.4});for(let St=0;St<D;St++){const Bt=St/L*2*Math.PI,Qt=St*O-D*O/2,Ee=Math.cos(Bt)*G,oe=Math.sin(Bt)*G,F=Math.cos(Bt+Math.PI)*G,xe=Math.sin(Bt+Math.PI)*G,jt=new In(H,C);jt.position.set(Ee,Qt,oe),g.add(jt);const Se=new In(H,C);if(Se.position.set(F,Qt,xe),g.add(Se),St%4===0&&St<D-1){const zt=new In(X,C),Oe=(Ee+F)/2,Ht=Qt,re=(oe+xe)/2;zt.position.set(Oe,Ht,re);const ke=new nt(F-Ee,0,xe-oe).normalize(),Xe=new nt(0,1,0).normalize(),N=new Bs().setFromUnitVectors(Xe,ke);zt.quaternion.copy(N),g.add(zt)}}g.position.set(0,0,0),g.scale.set(1.8,1.8,1.8),m.add(g);const w=new ys,z=new Ms(1.2,64,64),at=new lv({color:5,roughness:.3,metalness:1,emissive:34,emissiveIntensity:.7}),ot=new In(z,at);w.add(ot);const lt=new Ms(1.7,32,32),ct=new Yu({color:3381759,transparent:!0,opacity:.5,blending:Go,side:Un}),P=new In(lt,ct);w.add(P);const j=new Ms(2.4,32,32),q=new Yu({color:1122884,transparent:!0,opacity:.2,blending:Go,side:Un}),yt=new In(j,q);w.add(yt);const U=100,J=new fi,vt=[];for(let St=0;St<U;St++){const Bt=ss.randFloat(1.8,2.5),Qt=Math.acos(ss.randFloatSpread(2)),Ee=ss.randFloat(0,2*Math.PI),oe=Bt*Math.sin(Qt)*Math.cos(Ee),F=Bt*Math.sin(Qt)*Math.sin(Ee),xe=Bt*Math.cos(Qt);vt.push(oe,F,xe)}J.setAttribute("position",new zn(vt,3));const Mt=new Rd({color:6732799,size:.05,transparent:!0,opacity:.8,blending:Go}),Dt=new sv(J,Mt);w.add(Dt),w.position.set(0,0,0),w.scale.set(1.8,1.8,1.8),m.add(w);let tt=1;const dt=()=>{g.rotation.y+=.0015,w.rotation.y-=.002,Mt.opacity>=1?tt=-1:Mt.opacity<=.5&&(tt=1),Mt.opacity+=tt*.005,_.render(m,p),l.current=requestAnimationFrame(dt)};dt();const Et=()=>{if(!u)return;const St=u.clientWidth,Bt=typeof t=="number"?t:u.clientHeight||400;_.setSize(St,Bt),p.aspect=St/Bt,p.updateProjectionMatrix()};return window.addEventListener("resize",Et),()=>{l.current&&cancelAnimationFrame(l.current),window.removeEventListener("resize",Et),g.children.forEach(St=>{St.geometry&&St.geometry.dispose(),Array.isArray(St.material)?St.material.forEach(Bt=>Bt.dispose()):St.material&&St.material.dispose(),m.remove(St)}),m.remove(g),M.dispose(),A.dispose(),m.remove(S),w.children.forEach(St=>{St.geometry&&St.geometry.dispose(),Array.isArray(St.material)?St.material.forEach(Bt=>Bt.dispose()):St.material&&St.material.dispose(),w.remove(St)}),m.remove(w),r.current&&(r.current.dispose(),u.contains(r.current.domElement)&&u.removeChild(r.current.domElement),r.current=null)}},[t]),se.jsx("header",{className:s,style:{position:"relative",width:"100%",height:t},children:se.jsx("div",{ref:i,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})})}function jR(){const[s,t]=mt.useState(ti.GameOverview),i=l=>{t(l)},r=()=>{switch(s){case ti.GameOverview:return se.jsx(xM,{});case ti.Features:return se.jsx(SM,{});case ti.Media:return se.jsx(yM,{});case ti.FAQ:return se.jsx(MM,{});case ti.Feedback:return se.jsx(EM,{});case ti.About:return se.jsx(TM,{});default:return se.jsx("h1",{children:"Not Found"})}};return se.jsxs("div",{className:"main-layout",children:[se.jsxs(_M,{className:"side-bar",children:[se.jsx("div",{style:{marginBottom:"3rem",display:"flex",justifyContent:"center"},children:se.jsx(gM,{size:"100%"})}),pM.map(l=>se.jsx(vM,{className:"sideBarItemButton",name:l.name,onClick:()=>{i(l.linkTo)},disabled:l.disabled,tooltip:l.tooltip},l.name))]}),se.jsxs("div",{className:"info-panel",children:[se.jsx(ZR,{height:"40vh"}),se.jsx(mM,{className:"details-view",children:r()})]})]})}function KR(){return se.jsx(se.Fragment,{children:se.jsx(jR,{})})}const QR={Homepage:"/exovitae-page/"};function JR(){return se.jsx(aM,{children:se.jsx(Py,{children:se.jsx(Yv,{path:QR.Homepage,element:se.jsx(KR,{})})})})}XS.createRoot(document.getElementById("root")).render(se.jsx(mt.StrictMode,{children:se.jsx(JR,{})}));
