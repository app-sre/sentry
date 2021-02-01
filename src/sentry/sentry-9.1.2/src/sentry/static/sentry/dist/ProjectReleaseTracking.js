(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1559:function(e,t,a){"use strict";var n=a(4),r=a.n(n),o=a(6),l=a.n(o),c=a(7),i=a.n(c),s=a(5),u=a.n(s),d=a(8),p=a.n(d),h=a(16),f=a(1),m=a.n(f),b=a(0),g=a.n(b),y=a(51),k=a.n(y),E=a(3),j=a(223),O=a(258),w=a(24),v=a(587),R=a(23),T=Object(E.default)(function(e){return g.a.createElement("input",e)},{target:"e1usehz70"})(j.a,";background-color:",function(e){return e.theme.offWhite},";border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0;&:hover,&:focus{background-color:",function(e){return e.theme.offWhite},";border-right-width:0;}"),x=Object(E.default)("div",{target:"e1usehz71"})("flex-grow:1;border:none;"),C=Object(E.default)(w.default,{target:"e1usehz72"})("flex-shrink:1;border-radius:0 0.25em 0.25em 0;box-shadow:none;"),_=function(e){function t(e){var a;return r()(this,t),(a=i()(this,u()(t).call(this,e))).handleCopyClick=function(e){if(a.textRef.current){var t=a.props.onCopy;a.handleSelectText(),t(a.props.children,e),e.stopPropagation()}},a.handleSelectText=function(){a.textRef.current&&Object(O.a)(k.a.findDOMNode(a.textRef.current))},a.textRef=g.a.createRef(),a}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.style,a=e.children;return g.a.createElement(h.Flex,null,g.a.createElement(x,null,g.a.createElement(T,{readOnly:!0,ref:this.textRef,style:t,value:a,onClick:this.handleSelectText})),g.a.createElement(v.a,{hideUnsupported:!0,onClick:this.handleCopyClick,value:a},g.a.createElement(C,{type:"button",size:"xsmall",onClick:this.handleCopyClick},g.a.createElement(R.default,{src:"icon-clipboard",size:"1.25em"}))))}}]),t}(g.a.Component);_.propTypes={children:m.a.string.isRequired,style:m.a.object,onCopy:m.a.func},_.defaultProps={onCopy:function(){}},t.a=_},2291:function(e,t,a){"use strict";a.r(t),a.d(t,"ProjectReleaseTracking",function(){return W});var n=a(4),r=a.n(n),o=a(6),l=a.n(o),c=a(7),i=a.n(c),s=a(5),u=a.n(s),d=a(8),p=a.n(d),h=a(1),f=a.n(h),m=a(0),b=a.n(m),g=a(25),y=a(39),k=a(2),E=a(81),j=a(153),O=a(280),w=a(24),v=a(110),R=a(275),T=a(479),x=a(33),C=a(617),_=a(9),U=a(99),P=a(1559),I=a(165),S=a(326),W=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=i()(this,(e=u()(t)).call.apply(e,[this].concat(o)))).handleRegenerateToken=function(){var e=a.props.params,t=e.orgId,n=e.projectId;a.api.request("/projects/".concat(t,"/").concat(n,"/releases/token/"),{method:"POST",data:{project:n},success:function(e){a.setState({token:e.token,webhookUrl:e.webhookUrl}),Object(y.addSuccessMessage)(Object(k.t)("Your deploy token has been regenerated. You will need to update any existing deploy hooks."))},error:function(){Object(y.addErrorMessage)(Object(k.t)("Unable to regenerate deploy token, please try again"))}})},a}return p()(t,e),l()(t,[{key:"getTitle",value:function(){return"Release Tracking"}},{key:"getEndpoints",value:function(){var e=this.props.params,t=e.orgId,a=e.projectId;return[["data","/projects/".concat(t,"/").concat(a,"/releases/token/"),{},{allowError:function(e){return e&&403===e.status}}]]}},{key:"getReleaseWebhookIntructions",value:function(){return"curl "+(this.state.data||{webhookUrl:"YOUR_WEBHOOK_URL"}).webhookUrl+" \\\n  -X POST \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"version\": \"abcdefg\"}'"}},{key:"renderBody",value:function(){var e=this.props,t=e.organization,a=e.project,n=e.plugins,r=t.access.includes("project:write");if(n.loading)return b.a.createElement(x.default,null);var o=n.plugins.filter(function(e){return"release-tracking"===e.type&&e.hasConfiguration}),l=this.state.data||{token:"YOUR_TOKEN",webhookUrl:"YOUR_WEBHOOK_URL"},c=l.token,i=l.webhookUrl;return c=c&&Object(I.a)({value:c,fixed:"__TOKEN__"}),i=i&&Object(I.a)({value:i,fixed:"__WEBHOOK_URL__"}),b.a.createElement("div",null,b.a.createElement(U.default,{title:Object(k.t)("Release Tracking")}),!r&&b.a.createElement(E.default,{icon:"icon-circle-exclamation",type:"warning"},Object(k.t)("You do not have sufficient permissions to access Release tokens, placeholders are displayed below.")),b.a.createElement("p",null,Object(k.t)("Configure release tracking for this project to automatically record new releases of your application.")),b.a.createElement(g.a,null,b.a.createElement(g.e,null,Object(k.t)("Client Configuration")),b.a.createElement(g.c,{disablePadding:!1,flex:!0},b.a.createElement("p",null,Object(k.tct)("Start by binding the [release] attribute in your application, take a look at [link] to see how to configure this for the SDK you are using.",{link:b.a.createElement("a",{href:"https://docs.sentry.io/workflow/releases/?platform=javascript#tag-errors"},"our docs"),release:b.a.createElement("code",null,"release")})),b.a.createElement("p",null,Object(k.t)("This will annotate each event with the version of your application, as well as automatically create a release entity in the system the first time it's seen.")),b.a.createElement("p",null,Object(k.t)("In addition you may configure a release hook (or use our API) to push a release and include additional metadata with it.")))),b.a.createElement(g.a,null,b.a.createElement(g.e,null,Object(k.t)("Deploy Token")),b.a.createElement(g.c,{flex:!0},b.a.createElement(T.default,{label:Object(k.t)("Token"),help:Object(k.t)("A unique secret which is used to generate deploy hook URLs")},b.a.createElement(P.a,null,c)),b.a.createElement(T.default,{label:Object(k.t)("Regenerate Token"),help:Object(k.t)("If a service becomes compromised, you should regenerate the token and re-configure any deploy hooks with the newly generated URL.")},b.a.createElement("div",null,b.a.createElement(v.default,{disabled:!r,priority:"danger",onConfirm:this.handleRegenerateToken,message:Object(k.t)("Are you sure you want to regenerate your token? Your current token will no longer be usable.")},b.a.createElement(w.default,{type:"button",priority:"danger",disabled:!r},Object(k.t)("Regenerate Token"))))))),b.a.createElement(g.a,null,b.a.createElement(g.e,null,Object(k.t)("Webhook")),b.a.createElement(g.c,{disablePadding:!1,flex:!0},b.a.createElement("p",null,Object(k.t)("If you simply want to integrate with an existing system, sometimes its easiest just to use a webhook.")),b.a.createElement(O.a,null,b.a.createElement("pre",null,i)),b.a.createElement("p",null,Object(k.t)('The release webhook accepts the same parameters as the "Create a new Release" API endpoint.')),b.a.createElement(R.default,{value:b.a.createElement(O.a,null,b.a.createElement("pre",null,this.getReleaseWebhookIntructions())),fixed:b.a.createElement("pre",null,"curl __WEBHOOK_URL__ \\\n  -X POST \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"version\": \"abcdefg\"}'")}))),b.a.createElement(C.a,{organization:t,project:a,pluginList:o}),b.a.createElement(g.a,null,b.a.createElement(g.e,null,Object(k.t)("API")),b.a.createElement(g.c,{disablePadding:!1,flex:!0},b.a.createElement("p",null,Object(k.t)("You can notify Sentry when you release new versions of your application via our HTTP API.")),b.a.createElement("p",null,Object(k.tct)("See the [link:releases documentation] for more information.",{link:b.a.createElement("a",{href:"https://docs.sentry.io/workflow/releases/"})})))))}}]),t}(j.default);W.propTypes={organization:f.a.object,project:f.a.object,plugins:_.default.PluginsStore},t.default=Object(S.a)(W)}}]);
//# sourceMappingURL=ProjectReleaseTracking.js.map