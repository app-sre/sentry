(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1546:function(t,e){var n=Object.prototype.toString;t.exports=function(t){switch(n.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!=t?"nan":t&&1===t.nodeType?"element":typeof(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t))}},1549:function(t,e,n){"use strict";var i=n(11),r=n.n(i),o=n(13),a=n.n(o),u=n(4),c=n.n(u),s=n(6),l=n.n(s),f=n(7),d=n.n(f),h=n(5),p=n.n(h),m=n(8),y=n.n(m),b=n(16),v=n(1),g=n.n(v),w=n(0),E=n.n(w),O=n(28),k=n(1550),_=n.n(k),P=n(25),C=n(14),S=n(380),x=n(586),T=function(t){function e(t){var n,i;c()(this,e);for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(i=d()(this,(n=p()(e)).call.apply(n,[this,t].concat(o)))).getLocation=function(t){return t.location||i.context.location||{}},i.state={highlighted:i.getLocation(t).hash},i}return y()(e,t),l()(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentWillReceiveProps",value:function(t,e){if(this.getLocation(this.props).hash!==this.getLocation(t).hash){var n=this.getLocation(t).hash;this.scrollToHash(n),this.setState({highlighted:n})}}},{key:"scrollToHash",value:function(t){var e=t||this.getLocation(this.props).hash;if(e)try{_()(Object(x.a)(decodeURIComponent(e)),{align:"middle",offset:-100})}catch(t){O.captureException(t)}}},{key:"render",value:function(){var t=this.props,e=t.forms,n=t.title,i=t.fields,o=t.access,u=t.disabled,c=t.features,s=t.additionalFieldProps,l=t.renderFooter,f=t.renderHeader,d=(t.location,a()(t,["forms","title","fields","access","disabled","features","additionalFieldProps","renderFooter","renderHeader","location"])),h=Object(C.defined)(e),p={access:o,disabled:u,features:c,additionalFieldProps:s,renderFooter:l,renderHeader:f,highlighted:this.state.highlighted};return E.a.createElement(b.Box,d,h?e.map(function(t){return E.a.createElement(j,r()({key:t.title,title:t.title,fields:t.fields},p))}):E.a.createElement(j,r()({title:n,fields:i},p)))}}]),e}(E.a.Component);T.propTypes={forms:g.a.arrayOf(g.a.shape({title:g.a.string,fields:g.a.arrayOf(g.a.oneOfType([g.a.func,S.a.propTypes.field]))})),fields:g.a.arrayOf(g.a.oneOfType([g.a.func,S.a.propTypes.field])),title:g.a.string,access:g.a.object,features:g.a.object,additionalFieldProps:g.a.object,renderFooter:g.a.func,renderHeader:g.a.func,disabled:g.a.oneOfType([g.a.func,g.a.bool])},T.defaultProps={additionalFieldProps:{}},T.contextTypes={location:g.a.object},e.a=T;var j=function(t){function e(){return c()(this,e),d()(this,p()(e).apply(this,arguments))}return y()(e,t),l()(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,i=e.fields,o=e.access,u=e.disabled,c=e.additionalFieldProps,s=e.renderFooter,l=e.renderHeader,f=(e.location,a()(e,["title","fields","access","disabled","additionalFieldProps","renderFooter","renderHeader","location"])),d="function"==typeof s,h="function"==typeof l;return E.a.createElement(P.a,{key:n,id:Object(x.a)(n)},E.a.createElement(P.e,null,n),E.a.createElement(P.c,null,h&&l({title:n,fields:i}),i.map(function(e){if("function"==typeof e)return e();e.defaultValue;var n=a()(e,["defaultValue"]);return!0===u&&(n.disabled=!0,n.disabledReason=void 0),E.a.createElement(S.a,r()({access:o,disabled:u,key:e.name},f,c,{field:n,highlighted:t.props.highlighted==="#".concat(e.name)}))}),d&&s({title:n,fields:i})))}}]),e}(E.a.Component);j.propTypes={title:g.a.string,fields:g.a.arrayOf(g.a.oneOfType([g.a.func,S.a.propTypes.field])),access:g.a.object,additionalFieldProps:g.a.object,highlighted:g.a.string,renderHeader:g.a.func,renderFooter:g.a.func,disabled:g.a.oneOfType([g.a.func,g.a.bool])}},1550:function(t,e,n){var i=n(1551);t.exports=function(t,e){if(e=e||{},"string"==typeof t&&(t=document.querySelector(t)),t)return i(0,function(t,e,n){var i,r=document.body,o=document.documentElement,a=t.getBoundingClientRect(),u=o.clientHeight,c=Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);e=e||0,i="bottom"===n?a.bottom-u:"middle"===n?a.bottom-u/2-a.height/2:a.top;var s=c-u;return Math.min(i+e+window.pageYOffset,s)}(t,e.offset,e.align),e)}},1551:function(t,e,n){var i=n(1552),r=n(1556);t.exports=function(t,e,n){n=n||{};var o=function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;return{top:t,left:e}}(),a=i(o).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);function u(){r(u),a.update()}return a.update(function(t){window.scrollTo(0|t.left,0|t.top)}),a.on("end",function(){u=function(){}}),u(),a}},1552:function(t,e,n){var i=n(1553),r=n(1554),o=n(1546),a=n(1555);function u(t){if(!(this instanceof u))return new u(t);this._from=t,this.ease("linear"),this.duration(500)}t.exports=u,i(u.prototype),u.prototype.reset=function(){return this.isArray="array"===o(this._from),this._curr=r(this._from),this._done=!1,this._start=Date.now(),this},u.prototype.to=function(t){return this.reset(),this._to=t,this},u.prototype.duration=function(t){return this._duration=t,this},u.prototype.ease=function(t){if(!(t="function"==typeof t?t:a[t]))throw new TypeError("invalid easing function");return this._ease=t,this},u.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},u.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now();if(e-this._start>=t)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,i=this._to,r=this._curr,o=(0,this._ease)((e-this._start)/t);if(this.isArray){for(var a=0;a<n.length;++a)r[a]=n[a]+(i[a]-n[a])*o;return this._update(r),this}for(var u in n)r[u]=n[u]+(i[u]-n[u])*o;return this._update(r),this}},u.prototype.update=function(t){return 0==arguments.length?this.step():(this._update=t,this)}},1553:function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r=0;r<i.length;r++)if((n=i[r])===e||n.fn===e){i.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var i=0,r=(n=n.slice(0)).length;i<r;++i)n[i].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},1554:function(t,e,n){var i;try{i=n(1546)}catch(t){i=n(1546)}t.exports=function t(e){switch(i(e)){case"object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n;case"array":for(var n=new Array(e.length),o=0,a=e.length;o<a;o++)n[o]=t(e[o]);return n;case"regexp":var u="";return u+=e.multiline?"m":"",u+=e.global?"g":"",u+=e.ignoreCase?"i":"",new RegExp(e.source,u);case"date":return new Date(e.getTime());default:return e}}},1555:function(t,e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return.5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return 0==t?0:Math.pow(1024,t-1)},e.outExpo=function(t){return 1==t?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return 0==t?0:1==t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.outBack=function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},e.inOutBack=function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce},1556:function(t,e){e=t.exports=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),r=setTimeout(t,i);return n=e,r};var n=(new Date).getTime();var i=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout;e.cancel=function(t){i.call(window,t)}},2277:function(t,e,n){"use strict";n.r(e);var i=n(11),r=n.n(i),o=n(43),a=n.n(o),u=n(4),c=n.n(u),s=n(6),l=n.n(s),f=n(7),d=n.n(f),h=n(5),p=n.n(h),m=n(8),y=n.n(m),b=n(16),v=n(1),g=n.n(v),w=n(0),E=n.n(w),O=n(39),k=n(2),_=n(592),P=n(153),C=n(24),S=n(257),x=n(1549),T=n(25),j=n(99),F=n(205),R=n(841),q="/users/me/emails/",B=function(t){function e(){var t,n;c()(this,e);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=d()(this,(t=p()(e)).call.apply(t,[this].concat(r)))).handleSetPrimary=function(t){"function"==typeof n.props.onSetPrimary&&n.props.onSetPrimary(n.props.email,t)},n.handleRemove=function(t){n.props.onRemove(n.props.email,t)},n.handleVerify=function(t){n.props.onVerify(n.props.email,t)},n}return y()(e,t),l()(e,[{key:"render",value:function(){var t=this.props,e=t.email,n=t.isPrimary,i=t.isVerified,r=t.hideRemove;return E.a.createElement(T.f,{justify:"space-between"},E.a.createElement(b.Flex,{align:"center"},e,!i&&E.a.createElement(F.default,{ml:1,priority:"warning"},Object(k.t)("Unverified")),n&&E.a.createElement(F.default,{ml:1,priority:"success"},Object(k.t)("Primary"))),E.a.createElement(b.Flex,null,!n&&i&&E.a.createElement(C.default,{size:"small",onClick:this.handleSetPrimary},Object(k.t)("Set as primary")),!i&&E.a.createElement(C.default,{size:"small",onClick:this.handleVerify},Object(k.t)("Resend verification")),!r&&!n&&E.a.createElement(b.Box,{ml:1},E.a.createElement(C.default,{"data-test-id":"remove",priority:"danger",size:"small",icon:"icon-trash",onClick:this.handleRemove}))))}}]),e}(E.a.Component);B.propTypes={email:g.a.string.isRequired,onRemove:g.a.func.isRequired,onVerify:g.a.func.isRequired,isVerified:g.a.bool,isPrimary:g.a.bool,hideRemove:g.a.bool,onSetPrimary:g.a.func};var M=function(t){function e(){var t,n;c()(this,e);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=d()(this,(t=p()(e)).call.apply(t,[this].concat(r)))).handleSubmitSuccess=function(t,e,i){e.setValue(i,""),n.remountComponent()},n.handleError=function(t){n.remountComponent(),t&&t.responseJSON&&t.responseJSON.email&&Object(O.addErrorMessage)(t.responseJSON.email)},n.createApiCall=function(t,e){n.setState({loading:!0,emails:[]},function(){n.api.requestPromise(t,e).then(n.remountComponent.bind(a()(a()(n)))).catch(n.handleError)})},n.handleSetPrimary=function(t){n.createApiCall(q,{method:"PUT",data:{email:t}})},n.handleRemove=function(t){n.createApiCall(q,{method:"DELETE",data:{email:t}})},n.handleVerify=function(t){n.createApiCall("".concat(q,"confirm/"),{method:"POST",data:{email:t}})},n}return y()(e,t),l()(e,[{key:"getEndpoints",value:function(){return[["emails",q]]}},{key:"getTitle",value:function(){return"Emails"}},{key:"renderBody",value:function(){var t=this,e=this.state.emails,n=e.find(function(t){return t.isPrimary}),i=e.filter(function(t){return!t.isPrimary});return E.a.createElement("div",null,E.a.createElement(j.default,{title:"Emails"}),E.a.createElement(T.a,null,E.a.createElement(T.e,null,Object(k.t)("Emails")),E.a.createElement(T.c,null,n&&E.a.createElement(B,r()({onRemove:this.handleRemove,onVerify:this.handleVerify},n)),i&&i.map(function(e){return E.a.createElement(B,r()({key:e.email,onSetPrimary:t.handleSetPrimary,onRemove:t.handleRemove,onVerify:t.handleVerify},e))}))),E.a.createElement(S.default,{apiMethod:"POST",apiEndpoint:q,saveOnBlur:!0,allowUndo:!1,onSubmitSuccess:this.handleSubmitSuccess},E.a.createElement(x.a,{location:this.props.location,forms:R.default})),E.a.createElement(_.a,{to:"/settings/account/notifications",icon:"icon-stack"},Object(k.t)("Want to change how many emails you get? Use the notifications panel.")))}}]),e}(P.default);e.default=M}}]);
//# sourceMappingURL=AccountEmails.js.map