(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1546:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1549:function(t,e,n){"use strict";var i=n(11),a=n.n(i),r=n(13),o=n.n(r),u=n(4),c=n.n(u),s=n(6),l=n.n(s),d=n(7),f=n.n(d),h=n(5),p=n.n(h),m=n(8),b=n.n(m),g=n(16),y=n(1),v=n.n(y),E=n(0),O=n.n(E),w=n(28),j=n(1550),k=n.n(j),_=n(25),x=n(14),q=n(380),S=n(586),T=function(t){function e(t){var n,i;c()(this,e);for(var a=arguments.length,r=new Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];return(i=f()(this,(n=p()(e)).call.apply(n,[this,t].concat(r)))).getLocation=function(t){return t.location||i.context.location||{}},i.state={highlighted:i.getLocation(t).hash},i}return b()(e,t),l()(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;if(e)try{k()(Object(S.a)(decodeURIComponent(e)),{align:"middle",offset:-100})}catch(t){w.captureException(t)}}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,i=t.fields,r=t.access,u=t.disabled,c=t.features,s=t.additionalFieldProps,l=t.renderFooter,d=t.renderHeader,f=(t.location,o()(t,["forms","title","fields","access","disabled","features","additionalFieldProps","renderFooter","renderHeader","location"])),h=Object(x.defined)(e),p={access:r,disabled:u,features:c,additionalFieldProps:s,renderFooter:l,renderHeader:d,highlighted:this.state.highlighted};return O.a.createElement(g.Box,f,h?e.map(function(t){return O.a.createElement(C,a()({key:t.title,title:t.title,fields:t.fields},p))}):O.a.createElement(C,a()({title:n,fields:i},p)))}}]),e}(O.a.Component);T.propTypes={forms:v.a.arrayOf(v.a.shape({title:v.a.string,fields:v.a.arrayOf(v.a.oneOfType([v.a.func,q.a.propTypes.field]))})),fields:v.a.arrayOf(v.a.oneOfType([v.a.func,q.a.propTypes.field])),title:v.a.string,access:v.a.object,features:v.a.object,additionalFieldProps:v.a.object,renderFooter:v.a.func,renderHeader:v.a.func,disabled:v.a.oneOfType([v.a.func,v.a.bool])},T.defaultProps={additionalFieldProps:{}},T.contextTypes={location:v.a.object},e.a=T;var C=function(t){function e(){return c()(this,e),f()(this,p()(e).apply(this,arguments))}return b()(e,t),l()(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,i=e.fields,r=e.access,u=e.disabled,c=e.additionalFieldProps,s=e.renderFooter,l=e.renderHeader,d=(e.location,o()(e,["title","fields","access","disabled","additionalFieldProps","renderFooter","renderHeader","location"])),f="function"==typeof s,h="function"==typeof l;return O.a.createElement(_.a,{key:n,id:Object(S.a)(n)},O.a.createElement(_.e,null,n),O.a.createElement(_.c,null,h&&l({title:n,fields:i}),i.map(function(e){if("function"==typeof e)return e();e.defaultValue;var n=o()(e,["defaultValue"]);return!0===u&&(n.disabled=!0,n.disabledReason=void 0),O.a.createElement(q.a,a()({access:r,disabled:u,key:e.name},d,c,{field:n,highlighted:t.props.highlighted==="#".concat(e.name)}))}),f&&s({title:n,fields:i})))}}]),e}(O.a.Component);C.propTypes={title:v.a.string,fields:v.a.arrayOf(v.a.oneOfType([v.a.func,q.a.propTypes.field])),access:v.a.object,additionalFieldProps:v.a.object,highlighted:v.a.string,renderHeader:v.a.func,renderFooter:v.a.func,disabled:v.a.oneOfType([v.a.func,v.a.bool])}},1550:function(t,e,n){var i=n(1551);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return i(0,function(t,e,n){var i,a=document.body,r=document.documentElement,o=t.getBoundingClientRect(),u=r.clientHeight,c=Math.max(a.scrollHeight,a.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight);e=e||0,i="bottom"===n?o.bottom-u:"middle"===n?o.bottom-u/2-o.height/2:o.top;var s=c-u;return Math.min(i+e+window.pageYOffset,s)}(t,e.offset,e.align),e)}},1551:function(t,e,n){var i=n(1552),a=n(1556);t.exports=function(t,e,n){n=n||{};var r=function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;return{top:t,left:e}}(),o=i(r).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);function u(){a(u),o.update()}return o.update(function(t){window.scrollTo(0|t.left,0|t.top)}),o.on("end",function(){u=function(){}}),u(),o}},1552:function(t,e,n){var i=n(1553),a=n(1554),r=n(1546),o=n(1555);function u(t){if(!(this instanceof u))return new u(t);this._from=t,this.ease("linear"),this.duration(500)}t.exports=u,i(u.prototype),u.prototype.reset=function(){return this.isArray="array"===r(this._from),this._curr=a(this._from),this._done=!1,this._start=Date.now(),this},u.prototype.to=function(t){return this.reset(),this._to=t,this},u.prototype.duration=function(t){return this._duration=t,this},u.prototype.ease=function(t){if(!(t="function"==typeof t?t:o[t]))throw new TypeError("invalid easing function");return this._ease=t,this},u.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},u.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,i=this._to,a=this._curr,r=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var o=0;o<n.length;++o)a[o]=n[o]+(i[o]-n[o])*r;return this._update(a),this}for(var u in n)a[u]=n[u]+(i[u]-n[u])*r;return this._update(a),this}},u.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1553:function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var a=0;a<i.length;a++)if((n=i[a])===e||n.fn===e){i.splice(a,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var i=0,a=(n=n.slice(0)).length;i<a;++i)n[i].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1554:function(t,e,n){var i;try{i=n(1546)}catch(t){i=n(1546)}t.exports=function t(e){switch(i(e)){case"object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=t(e[a]));return n;case"array":for(var n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r]);return n;case"regexp":var u="";return u+=e.multiline?"m":"",u+=e.global?"g":"",u+=e.ignoreCase?"i":"",new RegExp(e.source,u);case"date":return new Date(e.getTime());default:return e}}},1555:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1556:function(t,e){e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=setTimeout(t,i);return n=e,a};var n=(new Date).getTime();var i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){i.call(window,t)}},1575:function(t,e,n){"use strict";var i=n(4),a=n.n(i),r=n(6),o=n.n(r),u=n(7),c=n.n(u),s=n(5),l=n.n(s),d=n(8),f=n.n(d),h=n(0),p=n.n(h),m=n(1),b=n.n(m),g=n(3),y=function(t){return t.color?"background: ".concat(t.color,";"):"background: ".concat(t.enabled?t.theme.success:t.theme.error,";")},v=function(t){return"\n  height: ".concat(t.size,"px;\n  width: ").concat(t.size,"px;\n")},E=Object(g.default)("div",{target:"eljqieg0"})("display:inline-block;position:relative;border-radius:50%;",v,";",y,";"),O=function(t){function e(t){return a()(this,e),c()(this,l()(e).call(this,t))}return f()(e,t),o()(e,[{key:"render",value:function(){return p.a.createElement(E,this.props)}}]),e}(p.a.Component);O.propTypes={enabled:b.a.bool.isRequired,size:b.a.number.isRequired,color:b.a.string},O.defaultProps={enabled:!0,size:14},e.a=O},1606:function(t,e,n){"use strict";var i=n(3),a=Object(i.default)("div",{target:"e1ty3hc0"})("font-size:1.2em;margin-bottom:10px;");e.a=a},1618:function(t,e,n){"use strict";var i=n(11),a=n.n(i),r=n(4),o=n.n(r),u=n(6),c=n.n(u),s=n(7),l=n.n(s),d=n(5),f=n.n(d),h=n(8),p=n.n(h),m=n(0),b=n.n(m),g=n(2),y=n(1606),v=n(110),E=n(113),O=function(t){function e(){return o()(this,e),l()(this,f()(e).apply(this,arguments))}return p()(e,t),c()(e,[{key:"render",value:function(){return b.a.createElement(v.default,a()({message:b.a.createElement(b.a.Fragment,null,b.a.createElement(y.a,null,Object(g.t)("Do you want to remove this method?")),b.a.createElement(E.default,null,Object(g.t)("Removing the last authentication method will disable two-factor authentication completely.")))},this.props))}}]),e}(b.a.Component);e.a=O},2360:function(t,e,n){"use strict";n.r(e);var i=n(42),a=n(4),r=n.n(a),o=n(6),u=n.n(o),c=n(7),s=n.n(c),l=n(5),d=n.n(l),f=n(8),h=n.n(f),p=n(16),m=n(0),b=n.n(m),g=n(3),y=n(1),v=n.n(y),E=n(2),O=n(153),w=n(24),j=n(1575),k=n(106),_=n(479),x=n(79),q=n(146),S=n(25),T=n(99),C=n(113),F=n(29),B=n(81),M=n(114),R=n(181),A=n.n(R),P=n(54),H=n(15),Q=function(t){function e(){return r()(this,e),s()(this,d()(e).apply(this,arguments))}return h()(e,t),u()(e,[{key:"getEndpoints",value:function(){return[]}},{key:"renderBody",value:function(){return A.a.get("pending-invite")?b.a.createElement(z,{"data-test-id":"require-2fa",type:"error",icon:"icon-circle-exclamation"},Object(E.tct)("You have been invited to an organization that requires [link:two-factor authentication]. Setup two-factor authentication below to join your organization.",{link:b.a.createElement(P.a,{href:"https://docs.sentry.io/accounts/require-2fa/"})})):null}}]),e}(M.default),z=Object(g.default)(B.default,{target:"eflczvm0"})("margin:",Object(H.default)(3)," 0;"),D=Q,L=n(1618),N=n(39),I=n(257),$=n(32),Y=n(1549),J=n(842),U=function(t){function e(){var t,n;r()(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=s()(this,(t=d()(e)).call.apply(t,[this].concat(a)))).handleSubmitSuccess=function(t,e,n){e.resetForm(),Object(N.addSuccessMessage)("Password has been changed")},n.handleSubmitError=function(t,e,n){Object(N.addErrorMessage)("Error changing password")},n}return h()(e,t),u()(e,[{key:"render",value:function(){var t=$.default.get("user");return b.a.createElement(I.default,{apiMethod:"PUT",apiEndpoint:"/users/me/password/",initialData:{},onSubmitSuccess:this.handleSubmitSuccess,onSubmitError:this.handleSubmitError,hideFooter:!0},b.a.createElement(Y.a,{location:this.props.location,forms:J.default,additionalFieldProps:{user:t},renderFooter:function(t){t.title,t.fields;return b.a.createElement(S.f,{justify:"flex-end"},b.a.createElement(w.default,{type:"submit",priority:"primary"},Object(E.t)("Change password")))},renderHeader:function(){return b.a.createElement(S.b,{type:"info"},Object(E.t)("Changing your password will invalidate all logged in sessions."))}}))}}]),e}(b.a.Component),V=n(187),W=function(t){function e(){var t,n;r()(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=s()(this,(t=d()(e)).call.apply(t,[this].concat(a)))).handleSessionClose=function(){n.api.request("/auth/",{method:"DELETE",data:{all:!0},success:function(){window.location="/auth/login/"}})},n.formatOrgSlugs=function(){var t=n.props.orgsRequire2fa.map(function(t){return t.slug});return[t.slice(0,-1).join(", "),t.slice(-1)[0]].join(t.length>1?" and ":"")},n}return h()(e,t),u()(e,[{key:"getTitle",value:function(){return Object(E.t)("Security")}},{key:"getEndpoints",value:function(){return[]}},{key:"renderBody",value:function(){var t=this,e=this.props,n=e.authenticators,a=e.countEnrolled,r=e.deleteDisabled,o=e.onDisable,u=!n.length;return b.a.createElement("div",null,b.a.createElement(T.default,{title:"Security",tabs:b.a.createElement(q.default,{underlined:!0},b.a.createElement(x.default,{to:Object(V.a)("",this.props),index:!0},Object(E.t)("Settings")),b.a.createElement(x.default,{to:Object(V.a)("session-history/",this.props)},Object(E.t)("Session History")))}),!u&&0==a&&b.a.createElement(D,null),b.a.createElement(U,null),b.a.createElement(S.a,null,b.a.createElement(S.e,null,Object(E.t)("Sessions")),b.a.createElement(S.c,null,b.a.createElement(_.default,{alignRight:!0,flexibleControlStateSize:!0,label:Object(E.t)("Sign out of all devices"),help:Object(E.t)("Signing out of all devices will sign you out of this device as well.")},b.a.createElement(w.default,{"data-test-id":"signoutAll",onClick:this.handleSessionClose},Object(E.t)("Sign out of all devices"))))),b.a.createElement(S.a,null,b.a.createElement(S.e,null,b.a.createElement(p.Box,null,Object(E.t)("Two-Factor Authentication"))),u&&b.a.createElement(k.default,null,Object(E.t)("No available authenticators to add")),b.a.createElement(S.c,null,!u&&n.map(function(e){var n=e.id,a=e.authId,u=e.description,c=e.isBackupInterface,s=e.isEnrolled,l=e.configureButton,d=e.name;return b.a.createElement(S.f,{key:n,p:0,direction:"column"},b.a.createElement(p.Flex,{flex:"1",p:2,align:"center"},b.a.createElement(p.Box,{flex:"1"},b.a.createElement(j.a,{className:Object(i.css)({marginRight:6}),enabled:s}),b.a.createElement(X,null,d)),!c&&!s&&b.a.createElement(w.default,{to:"/settings/account/security/mfa/".concat(n,"/enroll/"),size:"small",priority:"primary",className:"enroll-button"},Object(E.t)("Add")),s&&a&&b.a.createElement(w.default,{to:"/settings/account/security/mfa/".concat(a,"/"),size:"small",className:"details-button"},l),!c&&s&&b.a.createElement(F.default,{title:Object(E.t)("Two-factor authentication is required for organization(s): ".concat(t.formatOrgSlugs(),".")),disabled:!r},b.a.createElement(L.a,{onConfirm:function(){return o(e)},disabled:r},b.a.createElement(w.default,{className:Object(i.css)({marginLeft:6}),size:"small"},b.a.createElement("span",{className:"icon icon-trash"})))),c&&!s?Object(E.t)("requires 2FA"):null),b.a.createElement(p.Box,{p:2,pt:0},b.a.createElement(C.default,{className:Object(i.css)({marginBottom:0})},u)))}))))}}]),e}(O.default);W.PropTypes={authenticators:v.a.arrayOf(v.a.object).isRequired,orgsRequire2fa:v.a.arrayOf(v.a.object).isRequired,countEnrolled:v.a.number.isRequired,deleteDisabled:v.a.bool.isRequired,onDisable:v.a.func.isRequired};var X=Object(g.default)("span",{target:"e1l50q5m0"})("font-size:1.2em;");e.default=W}}]);
//# sourceMappingURL=AccountSecurity.js.map