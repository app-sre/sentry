(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1619:function(e,t,n){"use strict";n.d(t,"a",function(){return T});var a=n(26),r=n.n(a),o=n(50),c=n.n(o),i=n(4),l=n.n(i),u=n(6),s=n.n(u),p=n(7),h=n.n(p),f=n(5),d=n.n(f),m=n(8),b=n.n(m),w=n(16),y=n(1),g=n.n(y),v=n(0),k=n.n(v),E=n(3),C=n(14),O=Object(E.default)("div",{target:"e18jwynw0"})("display:flex;flex-wrap:wrap;"),j=Object(E.default)("label",{target:"e18jwynw1"})("font-weight:normal;white-space:nowrap;margin-right:10px;margin-bottom:10px;width:20%;"),S=Object(E.default)("span",{target:"e18jwynw2"})("margin-left:3px;"),T=function(e){function t(){var e,n;l()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=h()(this,(e=d()(t)).call.apply(e,[this].concat(r)))).onChange=function(e,t){var a=n.props,r=a.value,o=a.onChange;"function"==typeof o&&o(t.target.checked?r?[].concat(c()(r),[e]):[r]:r.filter(function(t){return t!==e}),t)},n}return b()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.disabled,a=t.choices,o=t.value;return k.a.createElement(O,null,a.map(function(t){var a=r()(t,2),c=a[0],i=a[1];return k.a.createElement(w.Box,{key:c,w:[1,.5,1/3,.25]},k.a.createElement(j,null,k.a.createElement("input",{type:"checkbox",value:c,onChange:e.onChange.bind(e,c),disabled:n,checked:Object(C.defined)(o)&&-1!==o.indexOf(c)}),k.a.createElement(S,null,i)))}))}}]),t}(k.a.Component);T.propTypes={value:g.a.arrayOf(g.a.oneOfType([g.a.string,g.a.number])),onChange:g.a.func,disabled:g.a.bool,choices:g.a.array.isRequired}},2283:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return A});var a=n(4),r=n.n(a),o=n(6),c=n.n(o),i=n(7),l=n.n(i),u=n(5),s=n.n(u),p=n(8),h=n.n(p),f=n(10),d=n(97),m=n.n(d),b=n(0),w=n.n(b),y=n(47),g=n(2),v=n(815),k=n(482),E=n(1619),C=n(25),O=n(99),j=n(113),S=y.i.sort(),T=y.f.map(function(e){return[e,e]}),x="/settings/account/api/auth-tokens/",A=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=l()(this,(e=s()(t)).call.apply(e,[this].concat(o)))).onCancel=function(){f.browserHistory.push(x)},n.onSubmitSuccess=function(){f.browserHistory.push(x)},n}return h()(t,e),c()(t,[{key:"render",value:function(){return w.a.createElement(m.a,{title:"Create API Token - Sentry"},w.a.createElement("div",null,w.a.createElement(O.default,{title:Object(g.t)("Create New Token")}),w.a.createElement(j.default,null,Object(g.t)("Authentication tokens allow you to perform actions against the Sentry API on behalf of your account. They're the easiest way to get started using the API.")),w.a.createElement(j.default,null,Object(g.tct)("For more information on how to use the web API, see our [link:documentation].",{link:w.a.createElement("a",{href:"https://docs.sentry.io/hosted/api/"})})),w.a.createElement(C.a,null,w.a.createElement(C.e,null,Object(g.t)("Create New Token")),w.a.createElement(v.default,{apiMethod:"POST",apiEndpoint:"/api-tokens/",initialData:{scopes:S},onSubmitSuccess:this.onSubmitSuccess,onCancel:this.onCancel,footerStyle:{marginTop:0,paddingRight:20},submitLabel:Object(g.t)("Create Token")},w.a.createElement(C.c,null,w.a.createElement(k.a,{name:"scopes",choices:T,label:Object(g.t)("Scopes"),inline:!1,required:!0},function(e){var t=e.value,n=e.onChange;return w.a.createElement(E.a,{onChange:n,value:t.peek(),choices:T})}))))))}}]),t}(w.a.Component)}}]);
//# sourceMappingURL=ApiTokenCreate.js.map