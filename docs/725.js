(self.webpackChunksalt=self.webpackChunksalt||[]).push([[725],{43979:function(H){H.exports=function(c,e){return Array.prototype.slice.call(c,e)}},67031:function(H,Q,c){"use strict";var e=c(29746);H.exports=function(T,g,E){!T||e(function(){T.apply(E||null,g||[])})}},11503:function(H,Q,c){"use strict";var e=c(43979),m=c(67031);H.exports=function(g,E){var I=E||{},C={};return void 0===g&&(g={}),g.on=function(M,k){return C[M]?C[M].push(k):C[M]=[k],g},g.once=function(M,k){return k._once=!0,g.on(M,k),g},g.off=function(M,k){var N=arguments.length;if(1===N)delete C[M];else if(0===N)C={};else{var q=C[M];if(!q)return g;q.splice(q.indexOf(k),1)}return g},g.emit=function(){var M=e(arguments);return g.emitterSnapshot(M.shift()).apply(this,M)},g.emitterSnapshot=function(M){var k=(C[M]||[]).slice(0);return function(){var N=e(arguments),q=this||g;if("error"===M&&!1!==I.throws&&!k.length)throw 1===N.length?N[0]:N;return k.forEach(function(w){I.async?m(w,N,q):w.apply(q,N),w._once&&g.off(M,w)}),g}},g}},96185:function(H){var Q=global.CustomEvent;H.exports=function(){try{var e=new Q("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(m){}return!1}()?Q:"function"==typeof document.createEvent?function(m,T){var g=document.createEvent("CustomEvent");return T?g.initCustomEvent(m,T.bubbles,T.cancelable,T.detail):g.initCustomEvent(m,!1,!1,void 0),g}:function(m,T){var g=document.createEventObject();return g.type=m,T?(g.bubbles=Boolean(T.bubbles),g.cancelable=Boolean(T.cancelable),g.detail=T.detail):(g.bubbles=!1,g.cancelable=!1,g.detail=void 0),g}},50986:function(H,Q,c){"use strict";var e=c(96185),m=c(75616),T=global.document,g=function(b,O,B,F){return b.addEventListener(O,B,F)},E=function(b,O,B,F){return b.removeEventListener(O,B,F)},I=[];function te(b,O,B){var F=function(b,O,B){var F,X;for(F=0;F<I.length;F++)if((X=I[F]).element===b&&X.type===O&&X.fn===B)return F}(b,O,B);if(F){var X=I[F].wrapper;return I.splice(F,1),X}}global.addEventListener||(g=function(b,O,B){return b.attachEvent("on"+O,function(b,O,B){var F=te(b,O,B)||function(b,O,B){return function(X){var s=X||global.event;s.target=s.target||s.srcElement,s.preventDefault=s.preventDefault||function(){s.returnValue=!1},s.stopPropagation=s.stopPropagation||function(){s.cancelBubble=!0},s.which=s.which||s.keyCode,B.call(b,s)}}(b,0,B);return I.push({wrapper:F,element:b,type:O,fn:B}),F}(b,O,B))},E=function(b,O,B){var F=te(b,O,B);if(F)return b.detachEvent("on"+O,F)}),H.exports={add:g,remove:E,fabricate:function(b,O,B){var t,F=-1===m.indexOf(O)?new e(O,{detail:B}):(T.createEvent?(t=T.createEvent("Event")).initEvent(O,!0,!0):T.createEventObject&&(t=T.createEventObject()),t);b.dispatchEvent?b.dispatchEvent(F):b.fireEvent("on"+O,F)}}},75616:function(H){"use strict";var Q=[],c="",e=/^on/;for(c in global)e.test(c)&&Q.push(c.slice(2));H.exports=Q},44559:function(H){"use strict";var Q={};function m(E){var I=Q[E];return I?I.lastIndex=0:Q[E]=I=new RegExp("(?:^|\\s)"+E+"(?:\\s|$)","g"),I}H.exports={add:function(E,I){var C=E.className;C.length?m(I).test(C)||(E.className+=" "+I):E.className=I},rm:function(E,I){E.className=E.className.replace(m(I)," ").trim()}}},87804:function(H,Q,c){"use strict";var e=c(11503),m=c(50986),T=c(44559),g=document,E=g.documentElement;function C(t,u,i,r){global.navigator.pointerEnabled?m[u](t,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[i],r):global.navigator.msPointerEnabled?m[u](t,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[i],r):(m[u](t,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[i],r),m[u](t,i,r))}function M(t){if(void 0!==t.touches)return t.touches.length;if(void 0!==t.which&&0!==t.which)return t.which;if(void 0!==t.buttons)return t.buttons;var u=t.button;return void 0!==u?1&u?1:2&u?3:4&u?2:0:void 0}function k(t){var u=t.getBoundingClientRect();return{left:u.left+N("scrollLeft","pageXOffset"),top:u.top+N("scrollTop","pageYOffset")}}function N(t,u){return void 0!==global[u]?global[u]:E.clientHeight?E[t]:g.body[t]}function q(t,u,i){var n,r=t||{},a=r.className;return r.className+=" gu-hide",n=g.elementFromPoint(u,i),r.className=a,n}function W(){return!1}function w(){return!0}function te(t){return t.width||t.right-t.left}function j(t){return t.height||t.bottom-t.top}function b(t){return t.parentNode===g?null:t.parentNode}function O(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"SELECT"===t.tagName||B(t)}function B(t){return!(!t||"false"===t.contentEditable)&&("true"===t.contentEditable||B(b(t)))}function F(t){return t.nextElementSibling||function(){var i=t;do{i=i.nextSibling}while(i&&1!==i.nodeType);return i}()}function s(t,u){var i=function(t){return t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t}(u),r={pageX:"clientX",pageY:"clientY"};return t in r&&!(t in i)&&r[t]in i&&(t=r[t]),i[t]}H.exports=function(t,u){var i=arguments.length;1===i&&!1===Array.isArray(t)&&(u=t,t=[]);var r,a,n,l,d,x,y,U,L,S,R,K,J=null,f=u||{};void 0===f.moves&&(f.moves=w),void 0===f.accepts&&(f.accepts=w),void 0===f.invalid&&(f.invalid=Ee),void 0===f.containers&&(f.containers=t||[]),void 0===f.isContainer&&(f.isContainer=W),void 0===f.copy&&(f.copy=!1),void 0===f.copySortSource&&(f.copySortSource=!1),void 0===f.revertOnSpill&&(f.revertOnSpill=!1),void 0===f.removeOnSpill&&(f.removeOnSpill=!1),void 0===f.direction&&(f.direction="vertical"),void 0===f.ignoreInputTextSelection&&(f.ignoreInputTextSelection=!0),void 0===f.mirrorContainer&&(f.mirrorContainer=g.body);var Z=e({containers:f.containers,start:Ze,end:me,cancel:ye,remove:_e,destroy:P,canMove:le,dragging:!1});return!0===f.removeOnSpill&&Z.on("over",Me).on("out",Ae),p(),Z;function h(o){return-1!==Z.containers.indexOf(o)||f.isContainer(o)}function p(o){var _=o?"remove":"add";C(E,_,"mousedown",V),C(E,_,"mouseup",de)}function v(o){C(E,o?"remove":"add","mousemove",z)}function A(o){var _=o?"remove":"add";m[_](E,"selectstart",G),m[_](E,"click",G)}function P(){p(!0),de({})}function G(o){K&&o.preventDefault()}function V(o){if(x=o.clientX,y=o.clientY,1===M(o)&&!o.metaKey&&!o.ctrlKey){var D=o.target,Y=ce(D);!Y||(K=Y,v(),"mousedown"===o.type&&(O(D)?D.focus():o.preventDefault()))}}function z(o){if(K){if(0===M(o))return void de({});if(void 0===o.clientX||o.clientX!==x||void 0===o.clientY||o.clientY!==y){if(f.ignoreInputTextSelection){var _=s("clientX",o),D=s("clientY",o);if(O(g.elementFromPoint(_,D)))return}var ne=K;v(!0),A(),me(),he(ne);var $=k(n);l=s("pageX",o)-$.left,d=s("pageY",o)-$.top,T.add(S||n,"gu-transit"),Oe(),ge(o)}}}function ce(o){if(!(Z.dragging&&r||h(o))){for(var _=o;b(o)&&!1===h(b(o));)if(f.invalid(o,_)||!(o=b(o)))return;var D=b(o);if(D&&!f.invalid(o,_)&&f.moves(o,D,_,F(o)))return{item:o,source:D}}}function le(o){return!!ce(o)}function Ze(o){var _=ce(o);_&&he(_)}function he(o){De(o.item,o.source)&&(S=o.item.cloneNode(!0),Z.emit("cloned",S,o.item,"copy")),a=o.source,n=o.item,U=L=F(o.item),Z.dragging=!0,Z.emit("drag",n,a)}function Ee(){return!1}function me(){if(Z.dragging){var o=S||n;Ce(o,b(o))}}function pe(){K=!1,v(!0),A(!0)}function de(o){if(pe(),Z.dragging){var _=S||n,D=s("clientX",o),Y=s("clientY",o),$=be(q(r,D,Y),D,Y);$&&(S&&f.copySortSource||!S||$!==a)?Ce(_,$):f.removeOnSpill?_e():ye()}}function Ce(o,_){var D=b(o);S&&f.copySortSource&&_===a&&D.removeChild(n),ve(_)?Z.emit("cancel",o,a,a):Z.emit("drop",o,_,a,L),fe()}function _e(){if(Z.dragging){var o=S||n,_=b(o);_&&_.removeChild(o),Z.emit(S?"cancel":"remove",o,_,a),fe()}}function ye(o){if(Z.dragging){var _=arguments.length>0?o:f.revertOnSpill,D=S||n,Y=b(D),ne=ve(Y);!1===ne&&_&&(S?Y&&Y.removeChild(S):a.insertBefore(D,U)),ne||_?Z.emit("cancel",D,a,a):Z.emit("drop",D,Y,a,L),fe()}}function fe(){var o=S||n;pe(),Se(),o&&T.rm(o,"gu-transit"),R&&clearTimeout(R),Z.dragging=!1,J&&Z.emit("out",o,J,a),Z.emit("dragend",o),a=n=S=U=L=R=J=null}function ve(o,_){var D;return D=void 0!==_?_:r?L:F(S||n),o===a&&D===U}function be(o,_,D){for(var Y=o;Y&&!ne();)Y=b(Y);return Y;function ne(){if(!1===h(Y))return!1;var se=xe(Y,o),ee=Te(Y,se,_,D);return!!ve(Y,ee)||f.accepts(n,Y,a,ee)}}function ge(o){if(r){o.preventDefault();var _=s("clientX",o),D=s("clientY",o),ne=D-d;r.style.left=_-l+"px",r.style.top=ne+"px";var $=S||n,se=q(r,_,D),ee=be(se,_,D),ie=null!==ee&&ee!==J;(ie||null===ee)&&(J&&ae("out"),J=ee,ie&&ae("over"));var oe=b($);if(ee!==a||!S||f.copySortSource){var re,ue=xe(ee,se);if(null!==ue)re=Te(ee,ue,_,D);else{if(!0!==f.revertOnSpill||S)return void(S&&oe&&oe.removeChild($));re=U,ee=a}(null===re&&ie||re!==$&&re!==F($))&&(L=re,ee.insertBefore($,re),Z.emit("shadow",$,ee,a))}else oe&&oe.removeChild($)}function ae(ke){Z.emit(ke,$,J,a)}}function Me(o){T.rm(o,"gu-hide")}function Ae(o){Z.dragging&&T.add(o,"gu-hide")}function Oe(){if(!r){var o=n.getBoundingClientRect();(r=n.cloneNode(!0)).style.width=te(o)+"px",r.style.height=j(o)+"px",T.rm(r,"gu-transit"),T.add(r,"gu-mirror"),f.mirrorContainer.appendChild(r),C(E,"add","mousemove",ge),T.add(f.mirrorContainer,"gu-unselectable"),Z.emit("cloned",r,n,"mirror")}}function Se(){r&&(T.rm(f.mirrorContainer,"gu-unselectable"),C(E,"remove","mousemove",ge),b(r).removeChild(r),r=null)}function xe(o,_){for(var D=_;D!==o&&b(D)!==o;)D=b(D);return D===E?null:D}function Te(o,_,D,Y){var oe,ne="horizontal"===f.direction;return _!==o?(oe=_.getBoundingClientRect(),function(oe){return oe?F(_):_}(ne?D>oe.left+te(oe)/2:Y>oe.top+j(oe)/2)):function(){var re,ue,ae,oe=o.children.length;for(re=0;re<oe;re++)if(ae=(ue=o.children[re]).getBoundingClientRect(),ne&&ae.left+ae.width/2>D||!ne&&ae.top+ae.height/2>Y)return ue;return null}()}function De(o,_){return"boolean"==typeof f.copy?f.copy:f.copy(o,_)}}},63564:function(H,Q,c){"use strict";c.d(Q,{sW:function(){return X},pQ:function(){return F},qE:function(){return s}});var e=c(25884),m=c(47289),T=c(26205),g=c(75134),E=c(87804),I=c.n(E),C=c(57490),M=c(83559),k=c(87570),N=c(43835),q=c(79996),W=function i(r,a,n){(0,g.Z)(this,i),this.name=r,this.drake=a,this.options=n,this.initEvents=!1},w={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},te=Object.keys(w).map(function(i){return w[i]}),j=I()||E,b=function i(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;(0,g.Z)(this,i),this.build=r},O=function(r,a,n){return function(l){return l.pipe((0,N.h)(function(d){return d.event===r&&(void 0===a||d.name===a)}),(0,q.U)(function(d){return n(d.name,d.args)}))}},B=function(r,a){var n=(0,T.Z)(a,3);return{name:r,el:n[0],container:n[1],source:n[2]}},F=function(){var i=function(){function r(){var a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,g.Z)(this,r),this.drakeFactory=n,this.dispatch$=new M.xQ,this.drag=function(l){return a.dispatch$.pipe(O(w.Drag,l,function(d,x){var y=(0,T.Z)(x,2);return{name:d,el:y[0],source:y[1]}}))},this.dragend=function(l){return a.dispatch$.pipe(O(w.DragEnd,l,function(d,x){return{name:d,el:(0,T.Z)(x,1)[0]}}))},this.drop=function(l){return a.dispatch$.pipe(O(w.Drop,l,function(d,x){var y=(0,T.Z)(x,4);return{name:d,el:y[0],target:y[1],source:y[2],sibling:y[3]}}))},this.elContainerSource=function(l){return function(d){return a.dispatch$.pipe(O(l,d,B))}},this.cancel=this.elContainerSource(w.Cancel),this.remove=this.elContainerSource(w.Remove),this.shadow=this.elContainerSource(w.Shadow),this.over=this.elContainerSource(w.Over),this.out=this.elContainerSource(w.Out),this.cloned=function(l){return a.dispatch$.pipe(O(w.Cloned,l,function(d,x){var y=(0,T.Z)(x,3);return{name:d,clone:y[0],original:y[1],cloneType:y[2]}}))},this.dropModel=function(l){return a.dispatch$.pipe(O(w.DropModel,l,function(d,x){var y=(0,T.Z)(x,9);return{name:d,el:y[0],target:y[1],source:y[2],sibling:y[3],item:y[4],sourceModel:y[5],targetModel:y[6],sourceIndex:y[7],targetIndex:y[8]}}))},this.removeModel=function(l){return a.dispatch$.pipe(O(w.RemoveModel,l,function(d,x){var y=(0,T.Z)(x,6);return{name:d,el:y[0],container:y[1],source:y[2],item:y[3],sourceModel:y[4],sourceIndex:y[5]}}))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new b)}return(0,m.Z)(r,[{key:"add",value:function(n){if(this.find(n.name))throw new Error('Group named: "'+n.name+'" already exists.');return this.groups[n.name]=n,this.handleModels(n),this.setupEvents(n),n}},{key:"find",value:function(n){return this.groups[n]}},{key:"destroy",value:function(n){var l=this.find(n);!l||(l.drake&&l.drake.destroy(),delete this.groups[n])}},{key:"createGroup",value:function(n,l){return this.add(new W(n,this.drakeFactory.build([],l),l))}},{key:"handleModels",value:function(n){var U,L,S,l=this,d=n.name,x=n.drake,y=n.options;x.on("remove",function(R,J,K){if(x.models){var f=x.models[x.containers.indexOf(K)],Z=(f=f.slice(0)).splice(L,1)[0];l.dispatch$.next({event:w.RemoveModel,name:d,args:[R,J,K,Z,f,L]})}}),x.on("drag",function(R,J){!x.models||(U=R,L=l.domIndexOf(R,J))}),x.on("drop",function(R,J,K,f){if(x.models&&J){S=l.domIndexOf(R,J);var p,Z=x.models[x.containers.indexOf(K)],h=x.models[x.containers.indexOf(J)];if(J===K)p=(Z=Z.slice(0)).splice(L,1)[0],Z.splice(S,0,p),h=Z;else{var v=U!==R;if(p=Z[L],v){if(!y.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");p=y.copyItem(p)}if(v||(Z=Z.slice(0)).splice(L,1),(h=h.slice(0)).splice(S,0,p),v)try{J.removeChild(R)}catch(A){}}l.dispatch$.next({event:w.DropModel,name:d,args:[R,J,K,f,p,Z,h,L,S]})}})}},{key:"setupEvents",value:function(n){var l=this;if(!n.initEvents){n.initEvents=!0;var d=n.name;te.forEach(function(U){n.drake.on(U,function(){for(var L=arguments.length,S=new Array(L),R=0;R<L;R++)S[R]=arguments[R];l.dispatch$.next({event:U,name:d,args:S})})})}}},{key:"domIndexOf",value:function(n,l){return Array.prototype.indexOf.call(l.children,n)}}]),r}();return i.\u0275fac=function(a){return new(a||i)(C.LFG(b,8))},i.\u0275prov=C.Yz7({token:i,factory:i.\u0275fac}),i}(),X=function(){var i=function(){function r(a,n){(0,g.Z)(this,r),this.el=a,this.dragulaService=n,this.dragulaModelChange=new C.vpe}return(0,m.Z)(r,[{key:"container",get:function(){return this.el&&this.el.nativeElement}},{key:"ngOnChanges",value:function(n){if(n&&n.dragula){var l=n.dragula,d=l.previousValue,L=!!l.currentValue;!!d&&this.teardown(d),L&&this.setup()}else if(n&&n.dragulaModel){var S=n.dragulaModel,R=S.previousValue,J=S.currentValue,f=this.group.drake;if(this.dragula&&f){f.models=f.models||[];var Z=f.models.indexOf(R);-1!==Z?(f.models.splice(Z,1),J&&f.models.splice(Z,0,J)):J&&f.models.push(J)}}}},{key:"setup",value:function(){var U,n=this,d=this.dragulaService.find(this.dragula);d||(d=this.dragulaService.createGroup(this.dragula,{})),U=d,n.dragulaModel&&(U.drake.models?U.drake.models.push(n.dragulaModel):U.drake.models=[n.dragulaModel]),d.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=d}},{key:"subscribe",value:function(n){var l=this;this.subs=new k.w,this.subs.add(this.dragulaService.dropModel(n).subscribe(function(d){var y=d.target,L=d.targetModel;d.source===l.el.nativeElement?l.dragulaModelChange.emit(d.sourceModel):y===l.el.nativeElement&&l.dragulaModelChange.emit(L)})),this.subs.add(this.dragulaService.removeModel(n).subscribe(function(d){d.source===l.el.nativeElement&&l.dragulaModelChange.emit(d.sourceModel)}))}},{key:"teardown",value:function(n){this.subs&&this.subs.unsubscribe();var l=this.dragulaService.find(n);if(l){var d=l.drake.containers.indexOf(this.el.nativeElement);if(-1!==d&&l.drake.containers.splice(d,1),this.dragulaModel&&l.drake&&l.drake.models){var x=l.drake.models.indexOf(this.dragulaModel);-1!==x&&l.drake.models.splice(x,1)}}}},{key:"ngOnDestroy",value:function(){this.teardown(this.dragula)}}]),r}();return i.\u0275fac=function(a){return new(a||i)(C.Y36(C.SBq),C.Y36(F))},i.\u0275dir=C.lG2({type:i,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[C.TTD]}),i}(),s=function(){var i=function(){function r(){(0,g.Z)(this,r)}return(0,m.Z)(r,null,[{key:"forRoot",value:function(){return{ngModule:r,providers:[F]}}}]),r}();return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=C.oAB({type:i}),i.\u0275inj=C.cJS({}),i}(),u=(new b(function(i,r){return new u(i,r)}),function(){function i(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;(0,g.Z)(this,i),this.containers=r,this.options=a,this.models=n,this.dragging=!1,this.emitter$=new M.xQ,this.subs=new k.w}return(0,m.Z)(i,[{key:"start",value:function(a){this.dragging=!0}},{key:"end",value:function(){this.dragging=!1}},{key:"cancel",value:function(a){this.dragging=!1}},{key:"remove",value:function(){this.dragging=!1}},{key:"on",value:function(a,n){this.subs.add(this.emitter$.pipe((0,N.h)(function(l){return l.eventType===a})).subscribe(function(l){n.apply(void 0,(0,e.Z)(l.args))}))}},{key:"destroy",value:function(){this.subs.unsubscribe()}},{key:"emit",value:function(a){for(var n=arguments.length,l=new Array(n>1?n-1:0),d=1;d<n;d++)l[d-1]=arguments[d];this.emitter$.next({eventType:a,args:l})}}]),i}())},29746:function(H){var Q="function"==typeof setImmediate;H.exports=Q?function(m){setImmediate(m)}:function(m){setTimeout(m,0)}},49147:function(H,Q,c){"use strict";c.d(Q,{p:function(){return X}});var e=c(57490),m=c(11462),T=c(87570),g=function(){function s(){}return s.maxLength=function(t){return function(u){if(u instanceof m.Oe)return u.length>t?{arrayMaxLength:!0}:null}},s.minLength=function(t){return function(u){if(u instanceof m.Oe)return u.length<t?{arrayMinLength:!0}:null}},s}(),E=c(63564),I=c(5375),C=c(61116);function M(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1," Please insert values "),e.qZA())}function k(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1,"You did not enter a field"),e.qZA())}function N(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1,"Your field is too short"),e.qZA())}function q(s,t){if(1&s&&(e.TgZ(0,"div",29),e.YNc(1,k,2,0,"div",9),e.YNc(2,N,2,0,"div",9),e.qZA()),2&s){var u=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",null==u.get("text").errors?null:u.get("text").errors.required),e.xp6(1),e.Q6J("ngIf",null==u.get("text").errors?null:u.get("text").errors.minlength)}}function W(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1,"You did not enter a field"),e.qZA())}function w(s,t){1&s&&(e.TgZ(0,"div"),e._uU(1,"Your field is too short"),e.qZA())}function te(s,t){if(1&s&&(e.TgZ(0,"div",29),e.YNc(1,W,2,0,"div",9),e.YNc(2,w,2,0,"div",9),e.qZA()),2&s){var u=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",null==u.get("value").errors?null:u.get("value").errors.required),e.xp6(1),e.Q6J("ngIf",null==u.get("value").errors?null:u.get("value").errors.minlength)}}var j=function(s){return{"is-invalid":s}};function b(s,t){if(1&s){var u=e.EpF();e.TgZ(0,"div",21),e.TgZ(1,"div",2),e.TgZ(2,"div",22),e.TgZ(3,"div",12),e.TgZ(4,"input",23),e.NdJ("input",function(){return e.CHM(u),e.oxw(2).choiceChanged()}),e.qZA(),e.YNc(5,q,3,2,"div",24),e.qZA(),e.qZA(),e.TgZ(6,"div",22),e.TgZ(7,"div",12),e.TgZ(8,"input",25),e.NdJ("input",function(){return e.CHM(u),e.oxw(2).choiceChanged()}),e.qZA(),e.YNc(9,te,3,2,"div",24),e.qZA(),e.qZA(),e.TgZ(10,"div",3),e.TgZ(11,"button",26),e.NdJ("click",function(){var l=e.CHM(u).index;return e.oxw(2).removeContent(l)}),e._UZ(12,"i",27),e.qZA(),e.qZA(),e.TgZ(13,"div",3),e.TgZ(14,"span",28),e._uU(15," move "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){var i=t.$implicit;e.Q6J("formGroupName",t.index),e.xp6(4),e.Q6J("ngClass",e.VKq(5,j,i.get("text").invalid)),e.xp6(1),e.Q6J("ngIf",i.get("text").invalid||i.get("text").touched),e.xp6(3),e.Q6J("ngClass",e.VKq(7,j,i.get("value").invalid)),e.xp6(1),e.Q6J("ngIf",i.get("value").invalid||i.get("value").touched)}}function O(s,t){if(1&s){var u=e.EpF();e.ynx(0),e.TgZ(1,"div",16),e.NdJ("dragulaModelChange",function(a){return e.CHM(u),e.oxw().choices.controls=a}),e.YNc(2,b,16,9,"div",17),e.TgZ(3,"div",2),e.TgZ(4,"div",18),e.TgZ(5,"button",19),e.NdJ("click",function(){return e.CHM(u),e.oxw().cloneThis("value")}),e._uU(6," Clone Text to Values "),e.qZA(),e.qZA(),e.TgZ(7,"div",18),e.TgZ(8,"button",19),e.NdJ("click",function(){return e.CHM(u),e.oxw().cloneThis("text")}),e._uU(9," Clone Values To Text "),e.qZA(),e.qZA(),e.qZA(),e._UZ(10,"div",20),e.qZA(),e.BQk()}if(2&s){var i=e.oxw();e.xp6(1),e.Q6J("dragulaModel",i.choices.controls),e.xp6(1),e.Q6J("ngForOf",i.choices.controls)}}function B(s,t){if(1&s){var u=e.EpF();e.ynx(0,11),e.TgZ(1,"div",30),e.TgZ(2,"button",31),e.NdJ("click",function(){return e.CHM(u),e.oxw().cancel()}),e._uU(3,"Cancel"),e.qZA(),e.TgZ(4,"button",32),e.NdJ("click",function(){return e.CHM(u),e.oxw().save()}),e._uU(5,"Save"),e.qZA(),e.qZA(),e.BQk()}if(2&s){var i=e.oxw();e.xp6(4),e.Q6J("disabled",i.choiceForm.invalid)}}var F=function(s){return{"alert alert-danger":s}},X=function(){function s(t,u,i){this.formBuilder=t,this.dragulaService=u,this.modal=i,this.contentChoiceItemIdToUpdate=null,this.contentChoiceId=-1,this.text=new m.NI(""),this.subs=new T.w,this.emitData=new e.vpe,u.createGroup("sortableElements",{moves:function(r,a,n){return n.classList.contains("element-handle")}})}return s.prototype.ngOnInit=function(){var t=this,u=this.content&&this.content.html&&this.content.html.choices?this.content.html.choices:[];this.choiceForm=this.formBuilder.group({choices:this.formBuilder.array([],g.minLength(1))}),void 0!==this.parentFormGroup&&(this.choiceForm=this.parentFormGroup.get("html")),u.forEach(function(i){t.choiceForm.get("choices").push(t.createChoice(i.text,i.value))}),this.subs.add(this.dragulaService.dropModel("sortableChoices").subscribe(function(i){t.choices.controls=i.sourceModel,t.text.patchValue(t.elementToString())})),this.text.patchValue(this.elementToString()),this.text.valueChanges.subscribe(function(i){t.stringToElement()})},s.prototype.ngOnDestroy=function(){this.dragulaService.destroy("sortableElements")},s.prototype.choiceChanged=function(){this.text.patchValue(this.elementToString(),{emitEvent:!1})},s.prototype.addChoice=function(){this.choices.push(this.createChoice())},s.prototype.cancel=function(){this.modal.close()},s.prototype.save=function(){console.log(this.choices.value),this.emitData.emit(this.choiceForm.value),this.modal.close()},s.prototype.stringToElement=function(){if(this.choices.clear(),console.log("t",this.text),this.text.value.length>0)for(var t=this.text.value.split("\n"),u=0;u<t.length;u++){var i=t[u],r=i,a="";if(-1!==i.indexOf("|")){var n=i.split("|");a=i.substring((r=n[0]).length+1)}this.choices.push(this.createChoice(void 0!==r?r:"",void 0!==a?a:""))}},s.prototype.removeContent=function(t){this.choices.removeAt(t),this.text.patchValue(this.elementToString())},s.prototype.cloneThis=function(t){var u=this.choices.value.length;if(u>0){for(var i="value"===t?"text":"value",r=0;r<u;r++)this.choices.value[r][t]=this.choices.value[r][i];this.text.patchValue(this.elementToString()),this.stringToElement()}},s.prototype.elementToString=function(){var t=[];this.choices.updateValueAndValidity({onlySelf:!1,emitEvent:!0});var u=this.choices.value;if(void 0!==u&&u.length>0)for(var i=0;i<u.length;i++){var r=u[i],n={text:void 0!==r.text?r.text:"",value:void 0!==r.value?r.value:""};t.push(n.text+(""===r.value?"":"|")+n.value)}return t.join("\n")},s.prototype.createChoice=function(t,u){return void 0===t&&(t=""),void 0===u&&(u=""),this.formBuilder.group({text:[t,[m.kI.required,m.kI.minLength(1),m.kI.maxLength(2e3)]],value:[u,[m.kI.required,m.kI.minLength(1),m.kI.maxLength(2e3)]]})},Object.defineProperty(s.prototype,"f",{get:function(){return this.choiceForm},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"choices",{get:function(){return this.f.get("choices")},enumerable:!1,configurable:!0}),s.\u0275fac=function(u){return new(u||s)(e.Y36(m.qu),e.Y36(E.pQ),e.Y36(I.Kz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-config-choice-form"]],inputs:{content:"content",parentFormGroup:"parentFormGroup"},outputs:{emitData:"emitData"},decls:18,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"row"],[1,"col-md-2"],["type","button",1,"btn","btn-outline-primary","btn-sm","btn-block",3,"click"],["aria-hidden","true",1,"fa","fa-plus"],[1,"col-md-10"],[1,"card-body"],[3,"ngClass"],[4,"ngIf"],[3,"formGroup","ngClass"],[1,"mt-2"],[1,"form-group"],["for","fast-entry"],["id","fast-entry",1,"form-control",2,"resize","none","height","210px",3,"formControl"],["class","mt-2",4,"ngIf"],["dragula","sortableChoices","formArrayName","choices",3,"dragulaModel","dragulaModelChange"],["class","sortable-item-contents",3,"formGroupName",4,"ngFor","ngForOf"],[1,"col-md-5"],["type","button",1,"btn","btn-secondary","btn-sm","btn-block",3,"click"],[1,"border","border-bottom","border-primary","mt-3"],[1,"sortable-item-contents",3,"formGroupName"],[1,"col-md-4"],["type","text","formControlName","text",1,"form-control","form-control-sm",3,"ngClass","input"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","value",1,"form-control","form-control-sm",3,"ngClass","input"],["type","button",1,"btn","btn-outline-danger","btn-sm","btn-block",3,"click"],[1,"far","fa-trash-alt"],[1,"element-handle"],[1,"invalid-feedback"],[1,"btn-group","float-right"],[1,"btn","btn-outline-danger",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"]],template:function(u,i){var r;(1&u&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return i.addChoice()}),e._UZ(5,"i",5),e.qZA(),e.qZA(),e._UZ(6,"div",6),e.qZA(),e.qZA(),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.YNc(9,M,2,0,"div",9),e.qZA(),e.TgZ(10,"div",10),e.YNc(11,O,11,2,"ng-container",9),e.qZA(),e.TgZ(12,"section",11),e.TgZ(13,"div",12),e.TgZ(14,"label",13),e._uU(15,"Fast Entry"),e.qZA(),e._UZ(16,"textarea",14),e.qZA(),e.YNc(17,B,6,1,"ng-container",15),e.qZA(),e.qZA(),e.qZA()),2&u)&&(e.xp6(8),e.Q6J("ngClass",e.VKq(7,F,i.choiceForm.get("choices").errors)),e.xp6(1),e.Q6J("ngIf",null==i.choiceForm.get("choices").errors?null:i.choiceForm.get("choices").errors.arrayMinLength),e.xp6(1),e.Q6J("formGroup",i.choiceForm)("ngClass",e.VKq(9,j,i.choiceForm.invalid)),e.xp6(1),e.Q6J("ngIf",(null==(r=i.choiceForm.get("choices"))?null:r.controls.length)>0),e.xp6(5),e.Q6J("formControl",i.text),e.xp6(1),e.Q6J("ngIf",!i.parentFormGroup))},directives:[C.mk,C.O5,m.JL,m.sg,m.Fj,m.JJ,m.oH,E.sW,m.CE,C.sg,m.x0,m.u],styles:[""]}),s}()},49865:function(H,Q,c){"use strict";c.d(Q,{b:function(){return Z}});var e=c(57490),m=c(82854),T=c(49147),g={SELECT:{type:"select",value:3,icon:"fas fa-box-open"},RADIO:{type:"radio",value:1,icon:"fas fa-check-circle"},CHECKBOX:{type:"checkbox",value:2,icon:"fas fa-check-square"}},E=c(78512),I=c(56238),C=c(82628),M=c(79996),k=c(98720),N=c(44019),q=c(43835),W=c(41885),w=c(39976),te=c(75134),j=c(47289),b=c(96673),O=c(48870),F=function(){function h(p,v){(0,te.Z)(this,h),this.dueTime=p,this.scheduler=v}return(0,j.Z)(h,[{key:"call",value:function(v,A){return A.subscribe(new X(v,this.dueTime,this.scheduler))}}]),h}(),X=function(h){(0,W.Z)(v,h);var p=(0,w.Z)(v);function v(A,P,G){var V;return(0,te.Z)(this,v),(V=p.call(this,A)).dueTime=P,V.scheduler=G,V.debouncedSubscription=null,V.lastValue=null,V.hasValue=!1,V}return(0,j.Z)(v,[{key:"_next",value:function(P){this.clearDebounce(),this.lastValue=P,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(s,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var P=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(P)}}},{key:"clearDebounce",value:function(){var P=this.debouncedSubscription;null!==P&&(this.remove(P),P.unsubscribe(),this.debouncedSubscription=null)}}]),v}(b.L);function s(h){h.debouncedNext()}var t=c(44689),u=c(11462),i=c(63564),r=c(35327),a=c(5375),n=c(61116),l=c(29282);function d(h,p){1&h&&(e.TgZ(0,"div"),e.TgZ(1,"h1"),e._uU(2,"Loading..."),e.qZA(),e.qZA())}var x=function(){return{cursor:"pointer"}};function y(h,p){if(1&h){var v=e.EpF();e.TgZ(0,"li",31),e.NdJ("click",function(){var V=e.CHM(v).$implicit,z=e.oxw().$implicit;return e.oxw(2).setchoiceType(z,V.value)}),e.TgZ(1,"h6",21),e._UZ(2,"i"),e._uU(3),e.qZA(),e.qZA()}if(2&h){var A=p.$implicit;e.Q6J("ngStyle",e.DdM(5,x)),e.xp6(2),e.Tol(A.value.icon),e.xp6(1),e.hij(" ",A.value.type,"")}}function U(h,p){if(1&h&&(e.TgZ(0,"li",27),e.TgZ(1,"small",27),e._uU(2),e.qZA(),e.qZA()),2&h){var v=p.$implicit;e.xp6(2),e.Oqu(v.text)}}var L=function(){return{cursor:"move"}};function S(h,p){if(1&h){var v=e.EpF();e.TgZ(0,"div",12),e.ALo(1,"json"),e.TgZ(2,"section",13),e.TgZ(3,"div",14),e.TgZ(4,"div",15),e.TgZ(5,"button",16),e.NdJ("click",function(){var V=e.CHM(v),z=V.$implicit,ce=V.index;return e.oxw(2).edit(z,ce)}),e.TgZ(6,"small"),e._UZ(7,"i",17),e._uU(8," edit "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",18),e.TgZ(10,"div",19),e.TgZ(11,"a",20),e.TgZ(12,"span",21),e._UZ(13,"i"),e._uU(14),e.qZA(),e.qZA(),e.TgZ(15,"ul",22),e.YNc(16,y,4,6,"li",23),e.ALo(17,"keyvalue"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(18,"div",24),e.TgZ(19,"fieldset",25),e.TgZ(20,"legend",26),e.TgZ(21,"small",27),e._UZ(22,"i",28),e._uU(23),e.qZA(),e.qZA(),e.TgZ(24,"ul",29),e.YNc(25,U,3,1,"li",30),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&h){var A=p.$implicit,P=e.oxw(2);e.uIk("data-content",e.lcZ(1,10,A)),e.xp6(13),e.Tol(P.getChoiceType(A.html.tag).icon),e.xp6(1),e.hij(" ",P.getChoiceType(A.html.tag).type," "),e.xp6(2),e.Q6J("ngForOf",e.lcZ(17,12,P.choiceTypes)),e.xp6(3),e.Q6J("ngStyle",e.DdM(14,L)),e.xp6(4),e.hij(" ",A.description," "),e.xp6(1),e.Q6J("ngStyle",e.DdM(15,L)),e.xp6(1),e.Q6J("ngForOf",A.html.choices)}}var R=function(h,p,v){return{itemsPerPage:h,currentPage:p,totalItems:v}};function J(h,p){if(1&h){var v=e.EpF();e.TgZ(0,"div",9),e.NdJ("dragulaModelChange",function(G){return e.CHM(v).ngIf.data=G}),e.YNc(1,S,26,16,"div",10),e.ALo(2,"paginate"),e.TgZ(3,"pagination-controls",11),e.NdJ("pageChange",function(G){return e.CHM(v),e.oxw().pageChange(G)}),e.qZA(),e.qZA()}if(2&h){var A=p.ngIf;e.Q6J("dragulaModel",A.data),e.xp6(1),e.Q6J("ngForOf",e.xi3(2,2,A.data,e.kEZ(5,R,A.per_page,A.current_page,A.total)))}}var K=function(){return{cursor:"pointer"}},f=function(){function h(p,v,A,P){this.htmlElementService=p,this.dragulaService=v,this.router=A,this.modalService=P,this.queryField=new u.NI,this.options={size:"lg",backdrop:"static",keyboard:!1,centered:!0},this.loadingSubject=new E.X(!1),this.loading$=this.loadingSubject.asObservable()}return h.prototype.ngOnInit=function(){var p=this;this.choiceTypes=g,this.choices$=this.queryField.valueChanges.pipe((0,I.O)(""),(0,C.g)(0),(0,M.U)(function(v){return v.trim()}),(0,k.x)(),(0,N.b)(function(v){(v.length>1||""==v)&&p.loadingSubject.next(!0)}),(0,q.h)(function(v){return""==v||v.length>1}),function(h){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.P;return function(v){return v.lift(new F(h,p))}}(1e3),(0,t.w)(function(v){return console.log("value",v),""==v?p.htmlElementService.getOptionChoices():p.htmlElementService.getOptionChoices().pipe((0,N.b)(function(A){console.log("jogos",A)}),(0,M.U)(function(A){var P=A.paginate.data,G=[];return P.forEach(function(V){V.description.toLowerCase().includes(v.toLowerCase())&&G.push(V)}),console.log("paginateData",P,"newData",G),A.paginate.data=G,A}))}),(0,N.b)(function(){p.loadingSubject.next(!1)}))},h.prototype.edit=function(p,v){var A=this;void 0===p&&(p=null),void 0===v&&(v=null),null==p&&(p={description:"",html:{category:"form",content_choice_id:null,content_html_tag_id:2,choices:[],group:"",label:"Type your Text",tag:"radio"}});var P=this.modalService.open(T.p,this.options);P.componentInstance.content=p,P.componentInstance.index=v,P.componentInstance.emitData.subscribe(function(G){if(G.choices.length>0){var V=G.choices.map(function(z){return z.text});A.choices$=A.choices$.pipe((0,M.U)(function(z){return null==v?(p.html.choices=G.choices,p.description=V.join("|"),z.paginate.data.push(p),z):(z.paginate.data[v].html.choices=G.choices,z)}),(0,N.b)(function(z){return console.log(z)}))}P.dismiss()})},h.prototype.loadPage=function(p){this.choices$=this.htmlElementService.getOptionChoices()},h.prototype.pageChange=function(p){this.router.navigate([],{queryParams:{page:p}})},h.prototype.getChoiceType=function(p){return this.choiceTypes[p.toUpperCase()]},h.prototype.ngOnDestroy=function(){this.dragulaService.destroy("pages"),this.dragulaService.destroy("contents"),this.dragulaService.destroy("columns"),this.dragulaService.destroy("rowSortable"),this.dragulaService.destroy("sortableElements")},h.prototype.setchoiceType=function(p,v){p.html.tag=v.type},h.\u0275fac=function(v){return new(v||h)(e.Y36(m.f),e.Y36(i.pQ),e.Y36(r.F0),e.Y36(a.FF))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-config-choices-list"]],decls:16,vars:9,consts:[[1,"border-bottom","border-dark","p-1","text-uppercase",3,"ngStyle"],[1,"text-right"],[1,"btn","btn-link","text-dark",3,"click"],[1,"fas","fa-plus-square"],[1,"form-group"],["for","query__field"],["type","text","id","query__field",1,"form-control",3,"formControl"],[4,"ngIf"],["dragula","contents","class","menu-content-sortable no-gutters collapse m-1 show","aria-expanded","true",3,"dragulaModel","dragulaModelChange",4,"ngIf"],["dragula","contents","aria-expanded","true",1,"menu-content-sortable","no-gutters","collapse","m-1","show",3,"dragulaModel","dragulaModelChange"],["class","content-handle menu-content-sortable option-type-sortable",4,"ngFor","ngForOf"],[1,"mt-1",3,"pageChange"],[1,"content-handle","menu-content-sortable","option-type-sortable"],[1,"p-1","mb-1"],[1,"row"],[1,"col-md-4"],[1,"btn","btn-sm","btn-block","btn-link","text-dark",3,"click"],[1,"fas","fa-pen-square"],[1,"col-md-8"],[1,"dropdown"],["href","javascript:void(0)","id","dropdownMenuLink","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","btn-block","dropdown-toggle"],[1,"text-uppercase"],["aria-labelledby","dropdownMenuLink",1,"dropdown-menu","w-100"],["class","dropdown-item",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"border","border-bottom"],[1,"content-handle","border","border-dark",3,"ngStyle"],[1,"content-handle","text-center","w-auto"],[1,"content-handle"],[1,"fa","fa-arrows-alt","content-handle"],[1,"text-dark","text-capitalize","content-handle",3,"ngStyle"],["class","content-handle",4,"ngFor","ngForOf"],[1,"dropdown-item",3,"ngStyle","click"]],template:function(v,A){var P;(1&v&&(e.TgZ(0,"div"),e.TgZ(1,"div",0),e.TgZ(2,"span",1),e._uU(3," Option Group "),e.TgZ(4,"button",2),e.NdJ("click",function(){return A.edit()}),e.TgZ(5,"small"),e._UZ(6,"i",3),e._uU(7," create "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"label",5),e._uU(10,"Procurar"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.YNc(12,d,3,0,"div",7),e.ALo(13,"async"),e.YNc(14,J,4,9,"div",8),e.ALo(15,"async"),e.qZA()),2&v)&&(e.xp6(1),e.Q6J("ngStyle",e.DdM(8,K)),e.xp6(10),e.Q6J("formControl",A.queryField),e.xp6(1),e.Q6J("ngIf",e.lcZ(13,4,A.loading$)),e.xp6(2),e.Q6J("ngIf",null==(P=e.lcZ(15,6,A.choices$))?null:P.paginate))},directives:[n.PC,u.Fj,u.JJ,u.oH,n.O5,i.sW,n.sg,l.LS],pipes:[n.Ov,l._s,n.Ts,n.Nd],styles:[""]}),h}(),Z=function(){function h(){}return h.prototype.ngOnInit=function(){},h.\u0275fac=function(v){return new(v||h)},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-config-choices"]],decls:1,vars:0,template:function(v,A){1&v&&e._UZ(0,"app-config-choices-list")},directives:[f],styles:[""]}),h}()},63725:function(H,Q,c){"use strict";c.r(Q),c.d(Q,{ConfigChoicesModule:function(){return te}});var e=c(61116),m=c(35327),T=c(49865),g=c(49147),E=c(44164),I=c(57490),C=[{path:"",component:T.b,canActivate:[E.a]},{path:":id/edit",component:g.p,canActivate:[E.a]}],M=function(){function j(){}return j.\u0275fac=function(O){return new(O||j)},j.\u0275mod=I.oAB({type:j}),j.\u0275inj=I.cJS({imports:[[m.Bz.forChild(C)],m.Bz]}),j}(),k=c(11462),N=c(63564),q=c(75425),W=c(29282),w=c(5375),te=function(){function j(){}return j.\u0275fac=function(O){return new(O||j)},j.\u0275mod=I.oAB({type:j}),j.\u0275inj=I.cJS({imports:[[M,e.ez,q.m,k.UX,N.qE.forRoot(),W.JX,w.bz]]}),j}()},82854:function(H,Q,c){"use strict";c.d(Q,{f:function(){return I}});var e=c(40878),m=c(79996),T=c(57490),g=c(42693),E=function(){return(E=Object.assign||function(C){for(var M,k=1,N=arguments.length;k<N;k++)for(var q in M=arguments[k])Object.prototype.hasOwnProperty.call(M,q)&&(C[q]=M[q]);return C}).apply(this,arguments)},I=function(){function C(M){this.http=M,this.API_URL2="https://salty-suite.herokuapp.com/api/contents_choices",this.API_URL="/assets/_mock/",this.category="form"}return C.prototype.getTags=function(){var M=this;return this.getHtmlElements().pipe((0,m.U)(function(k){return k.reduce(function(q,W){return W.html&&W.html.category&&W.html.category===M.category&&(q[W.html.tag]=null),q},{})}),(0,m.U)(function(k){return Object.keys(k)}))},C.prototype.queryParams=function(M){var k={params:E({},M)};return this.http.get(this.API_URL2,k)},C.prototype.getTools=function(){return this.http.get(""+this.API_URL)},C.prototype.getContentChoices=function(){return this.http.get(""+this.API_URL2)},C.prototype.getOptionChoices=function(){return(0,e.of)({success:!0,message:"any",paginate:{current_page:1,data:[{description:"Escala Likert",html:{content_choice_id:1,content_html_tag_id:2,category:"form",tag:"radio",label:"Type your Text",choices:[{id:1,content_choice_id:1,text:"Discordo Totalmente",value:"1",position:1},{id:2,content_choice_id:1,text:"Discordo",value:"2",position:2},{id:3,content_choice_id:1,text:"Discordo Totalmente e Nem Discordo",value:"3",position:3},{id:4,content_choice_id:1,text:"Concordo",value:"4",position:4},{id:5,content_choice_id:1,text:"Concordo Totalmente",value:"5",position:5},{id:6,content_choice_id:1,text:"NA (N\xe3o Aplic\xe1vel)",value:"0",position:6}]}},{description:"Bass Players",html:{content_choice_id:2,content_html_tag_id:2,category:"form",tag:"radio",label:"Type your Text",choices:[{id:7,content_choice_id:2,text:"Les Claypool",value:"1",position:1},{id:8,content_choice_id:2,text:"Geddy Lee",value:"2",position:2}]}}],first_page_url:"http://127.0.0.1:8000/api/contents_choices?page=1",from:1,last_page:2,last_page_url:"http://127.0.0.1:8000/api/contents_choices?page=2",next_page_url:"http://127.0.0.1:8000/api/contents_choices?page=2",path:"http://127.0.0.1:8000/api/contents_choices",per_page:1e17,prev_page_url:null,to:2,total:3}})},C.prototype.getHtmlElements=function(){return this.http.get(this.API_URL+"html-elements.json")},C.\u0275fac=function(k){return new(k||C)(T.LFG(g.eN))},C.\u0275prov=T.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C}()}}]);