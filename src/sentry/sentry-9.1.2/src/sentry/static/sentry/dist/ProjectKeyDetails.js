(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1559:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(6),i=a.n(l),o=a(7),c=a.n(o),s=a(5),d=a.n(s),u=a(8),m=a.n(u),p=a(16),h=a(1),f=a.n(h),b=a(0),y=a.n(b),E=a(51),v=a.n(E),j=a(3),g=a(223),w=a(258),O=a(24),S=a(587),k=a(23),C=Object(j.default)(function(e){return y.a.createElement("input",e)},{target:"e1usehz70"})(g.a,";background-color:",function(e){return e.theme.offWhite},";border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0;&:hover,&:focus{background-color:",function(e){return e.theme.offWhite},";border-right-width:0;}"),x=Object(j.default)("div",{target:"e1usehz71"})("flex-grow:1;border:none;"),_=Object(j.default)(O.default,{target:"e1usehz72"})("flex-shrink:1;border-radius:0 0.25em 0.25em 0;box-shadow:none;"),D=function(e){function t(e){var a;return r()(this,t),(a=c()(this,d()(t).call(this,e))).handleCopyClick=function(e){if(a.textRef.current){var t=a.props.onCopy;a.handleSelectText(),t(a.props.children,e),e.stopPropagation()}},a.handleSelectText=function(){a.textRef.current&&Object(w.a)(v.a.findDOMNode(a.textRef.current))},a.textRef=y.a.createRef(),a}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.style,a=e.children;return y.a.createElement(p.Flex,null,y.a.createElement(x,null,y.a.createElement(C,{readOnly:!0,ref:this.textRef,style:t,value:a,onClick:this.handleSelectText})),y.a.createElement(S.a,{hideUnsupported:!0,onClick:this.handleCopyClick,value:a},y.a.createElement(_,{type:"button",size:"xsmall",onClick:this.handleCopyClick},y.a.createElement(k.default,{src:"icon-clipboard",size:"1.25em"}))))}}]),t}(y.a.Component);D.propTypes={children:f.a.string.isRequired,style:f.a.object,onCopy:f.a.func},D.defaultProps={onCopy:function(){}},t.a=D},1670:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(6),i=a.n(l),o=a(7),c=a.n(o),s=a(5),d=a.n(s),u=a(8),m=a.n(u),p=a(1),h=a.n(p),f=a(0),b=a.n(f),y=a(2),E=a(54),v=a(479),j=a(1559),g=a(9),w=a(165),O=function(e){function t(){return r()(this,t),c()(this,d()(t).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.projectId,a=e.data,n=e.showDsn,r=e.showDsnPublic,l=e.showSecurityEndpoint,i=e.showMinidump,o=e.showUnreal,c=e.showPublicKey,s=e.showSecretKey,d=e.showProjectId;return b.a.createElement(b.a.Fragment,null,r&&b.a.createElement(v.default,{label:Object(y.t)("DSN"),inline:!1,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.dsn.public,fixed:"__DSN__"}))),n&&b.a.createElement(v.default,{label:Object(y.t)("DSN (Deprecated)"),help:Object(y.t)("This DSN includes the secret which is no longer required by Sentry' newer versions of SDKs. If you are unsure which to use, follow installation instructions for your language."),inline:!1,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.dsn.secret,fixed:"__DSN_DEPRECATED__"}))),l&&b.a.createElement(v.default,{label:Object(y.t)("Security Header Endpoint"),help:Object(y.t)("Use your security header endpoint for features like CSP and Expect-CT reports."),inline:!1,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.dsn.security,fixed:"__SECURITY_HEADER_ENDPOINT__"}))),i&&b.a.createElement(v.default,{label:Object(y.t)("Minidump Endpoint"),help:Object(y.tct)("Use this endpoint to upload [link], for example with Electron, Crashpad or Breakpad.",{link:b.a.createElement(E.a,{href:"https://docs.sentry.io/clients/minidump/"},"minidump crash reports")}),inline:!1,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.dsn.minidump,fixed:"__MINIDUMP_ENDPOINT__"}))),o&&b.a.createElement(v.default,{label:Object(y.t)("Unreal Engine 4 Endpoint"),help:Object(y.t)("Use this endpoint to configure your UE4 Crash Reporter."),inline:!1,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.dsn.unreal||"",fixed:"__UNREAL_ENDPOINT__"}))),c&&b.a.createElement(v.default,{label:Object(y.t)("Public Key"),inline:!0,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.public,fixed:"__PUBLICKEY__"}))),s&&b.a.createElement(v.default,{label:Object(y.t)("Secret Key"),inline:!0,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:a.secret,fixed:"__SECRETKEY__"}))),d&&b.a.createElement(v.default,{label:Object(y.t)("Project ID"),inline:!0,flexibleControlStateSize:!0},b.a.createElement(j.a,null,Object(w.a)({value:t,fixed:"__PROJECTID__"}))))}}]),t}(b.a.Component);O.propTypes={projectId:h.a.string.isRequired,data:g.default.ProjectKey,showDsn:h.a.bool,showDsnPublic:h.a.bool,showSecurityEndpoint:h.a.bool,showMinidump:h.a.bool,showUnreal:h.a.bool,showPublicKey:h.a.bool,showSecretKey:h.a.bool,showProjectId:h.a.bool},O.defaultProps={showDsn:!0,showDsnPublic:!0,showSecurityEndpoint:!0,showMinidump:!0,showUnreal:!0,showPublicKey:!1,showSecretKey:!1,showProjectId:!1},t.a=O},2299:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return se});var n=a(42),r=a(13),l=a.n(r),i=a(12),o=a.n(i),c=a(4),s=a.n(c),d=a(6),u=a.n(d),m=a(7),p=a.n(m),h=a(5),f=a.n(h),b=a(8),y=a.n(b),E=a(26),v=a.n(E),j=a(16),g=a(10),w=a(1),O=a.n(w),S=a(0),k=a.n(S),C=a(17),x=a.n(C),_=a(25),D=a(39),I=a(2),R=a(95),P=a(37),T=a(153),K=a(486),N=a(24),L=a(110),U=a(190),z=a(106),M=a(54),q=a(117),A=a(318),B=a(479),F=a(257),W=a(482),J=a(289),Y=a(53),H=a(33),V=a(226),G=a(1670),Q=a(731),X=a(481),Z=a(9),$=a(99),ee=a(259),te=a(1559),ae=a(480),ne=a(165),re=new Map([[0,"None"],[60,"1 minute"],[300,"5 minutes"],[900,"15 minutes"],[3600,"1 hour"],[7200,"2 hours"],[14400,"4 hours"],[21600,"6 hours"],[43200,"12 hours"],[86400,"24 hours"]]),le=function(e){return re.get(e)},ie=x()({displayName:"KeyStats",mixins:[P.default],getInitialState:function(){var e=Math.floor((new Date).getTime()/1e3);return{since:e-2592e3,until:e,loading:!0,error:!1,stats:null,emptyStats:!1}},componentWillMount:function(){this.fetchData()},fetchData:function(){var e=this,t=this.props.params,a=t.keyId,n=t.orgId,r=t.projectId;this.api.request("/projects/".concat(n,"/").concat(r,"/keys/").concat(a,"/stats/"),{query:{since:this.state.since,until:this.state.until,resolution:"1d"},success:function(t){var a=!0,n=t.map(function(e){return e.total&&(a=!1),{x:e.ts,y:[e.accepted,e.dropped]}});e.setState({stats:n,emptyStats:a,error:!1,loading:!1})},error:function(){e.setState({error:!0,loading:!1})}})},renderTooltip:function(e,t,a){var n=a.getTimeLabel(e),r=v()(e.y,3),l=r[0],i=r[1],o=r[2],c="".concat(l.toLocaleString()," accepted");return i&&(c+="<br>".concat(i.toLocaleString()," rate limited")),o&&(c+="<br>".concat(o.toLocaleString()," filtered")),'<div style="width:150px">'+'<div class="time-label">'.concat(n,"</div>")+'<div class="value-label">'.concat(c,"</div>")+"</div>"},render:function(){return this.state.loading?k.a.createElement("div",{className:"box"},k.a.createElement(H.default,null)):this.state.error?k.a.createElement(Y.default,{onRetry:this.fetchData}):k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("Key usage in the last 30 days (by day)")),k.a.createElement(_.c,null,this.state.emptyStats?k.a.createElement(z.default,{title:Object(I.t)("Nothing recorded in the last 30 days."),description:Object(I.t)("Total events captured using these credentials.")}):k.a.createElement(ee.default,{points:this.state.stats,height:150,label:"events",barClasses:["accepted","rate-limited"],className:"standard-barchart",style:{border:"none"},tooltip:this.renderTooltip})))}}),oe=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=p()(this,(e=f()(t)).call.apply(e,[this].concat(r)))).handleChangeWindow=function(e,t,a,n,r){var l=o()({},a,{window:n});e(l,r),t(l,r)},a.handleChangeCount=function(e,t,a){e(o()({},t,{count:a.target.value}),a)},a}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,r=t.disabled,i=this.props.params,c=i.keyId,s=i.orgId,d=i.projectId,u="/projects/".concat(s,"/").concat(d,"/keys/").concat(c,"/"),m=function(e){var t=e.features;return k.a.createElement(A.a,{alert:_.b,features:t,featureName:Object(I.t)("Key Rate Limits")})};return k.a.createElement(F.default,{saveOnBlur:!0,apiEndpoint:u,apiMethod:"PUT",initialData:a},k.a.createElement(q.a,{features:["projects:rate-limits"],renderDisabled:function(e){var t=e.children,a=l()(e,["children"]);return t(o()({},a,{renderDisabled:m}))}},function(t){var a=t.hasFeature,l=t.features,i=t.organization,o=t.project,c=t.renderDisabled;return k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("Rate Limits")),k.a.createElement(_.c,null,k.a.createElement(_.b,{type:"info",icon:"icon-circle-exclamation"},Object(I.t)("Rate limits provide a flexible way to manage your event\n                      volume. If you have a noisy project or environment you\n                      can configure a rate limit for this key to reduce the\n                      number of events processed.")),!a&&c({organization:i,project:o,features:l}),k.a.createElement(W.a,{className:"rate-limit-group",name:"rateLimit",label:Object(I.t)("Rate Limit"),disabled:r||!a,validate:function(e){e.id;var t=e.form;e.model;return t&&t.rateLimit&&void 0!==t.rateLimit.count&&void 0!==t.rateLimit.window?[]:[["rateLimit",Object(I.t)("Fill in both fields first")]]},help:Object(I.t)("Apply a rate limit to this credential to cap the amount of events accepted during a time window."),inline:!1},function(t){var l=t.onChange,i=t.onBlur,o=t.value;return k.a.createElement(j.Flex,null,k.a.createElement(j.Flex,{flex:"2",align:"center"},k.a.createElement(J.a,{type:"number",name:"rateLimit.count",min:0,value:o&&o.count,placeholder:Object(I.t)("Count"),disabled:r||!a,onChange:e.handleChangeCount.bind(e,l,o),onBlur:e.handleChangeCount.bind(e,i,o)})),k.a.createElement(j.Flex,{justify:"center",align:"center",mx:10,flex:"1"},k.a.createElement("small",{className:Object(n.css)({whiteSpace:"nowrap"})},"event(s) in")),k.a.createElement(j.Box,{flex:"2"},k.a.createElement(Q.a,{name:"rateLimit.window",allowedValues:Array.from(re.keys()),value:o&&o.window,placeholder:Object(I.t)("Window"),formatLabel:le,disabled:r||!a,onChange:e.handleChangeWindow.bind(e,l,i,o)})))})))}))}}]),t}(k.a.Component);oe.propTypes={data:Z.default.ProjectKey.isRequired,disabled:O.a.bool};var ce=x()({displayName:"KeySettings",propTypes:{data:Z.default.ProjectKey.isRequired,onRemove:O.a.func.isRequired},mixins:[P.default],getInitialState:function(){return{loading:!1}},handleRemove:function(e){var t=this;if(!this.state.loading){var a=Object(D.addLoadingMessage)(Object(I.t)("Saving changes..")),n=this.props.params,r=n.keyId,l=n.orgId,i=n.projectId;this.api.request("/projects/".concat(l,"/").concat(i,"/keys/").concat(r,"/"),{method:"DELETE",success:function(e,n,r){t.props.onRemove(),Object(D.removeIndicator)(a),Object(D.addSuccessMessage)(Object(I.t)("Revoked key"))},error:function(){t.setState({error:!0,loading:!1}),Object(D.removeIndicator)(a),Object(D.addErrorMessage)(Object(I.t)("Unable to revoke key"))}})}},render:function(){var e=this,t=this.props.params,a=t.keyId,n=t.orgId,r=t.projectId,l=this.props.data,i="/projects/".concat(n,"/").concat(r,"/keys/").concat(a,"/"),o=Object(ne.a)({value:l.dsn.cdn,fixed:"__JS_SDK_LOADER_URL__"});return k.a.createElement(R.a,{access:["project:write"]},function(t){var a=t.hasAccess;return k.a.createElement(k.a.Fragment,null,k.a.createElement(F.default,{saveOnBlur:!0,allowUndo:!0,apiEndpoint:i,apiMethod:"PUT",initialData:l},k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("Details")),k.a.createElement(_.c,null,k.a.createElement(ae.default,{name:"name",label:Object(I.t)("Name"),disabled:!a,required:!1}),k.a.createElement(K.default,{name:"isActive",label:Object(I.t)("Enabled"),required:!1,disabled:!a,help:"Accept events from this key? This may be used to temporarily suspend a key."}),k.a.createElement(B.default,{label:Object(I.t)("Created")},k.a.createElement("div",{className:"controls"},k.a.createElement(U.default,{date:l.dateCreated})))))),k.a.createElement(oe,{params:e.props.params,data:l,disabled:!a}),k.a.createElement(q.a,{features:["organizations:js-loader"]},k.a.createElement(F.default,{saveOnBlur:!0,apiEndpoint:i,apiMethod:"PUT",initialData:l},k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("JavaScript Loader")),k.a.createElement(_.c,null,k.a.createElement(B.default,{help:Object(I.tct)("Copy this script into your website to setup our JavaScript SDK without any additional configuration. [link]",{link:k.a.createElement(M.a,{href:"https://docs.sentry.io/platforms/javascript/browser/"},"What does the script provide?")}),inline:!1,flexibleControlStateSize:!0},k.a.createElement(te.a,null,"<script src='".concat(o,'\' crossorigin="anonymous"><\/script>'))),k.a.createElement(X.default,{name:"browserSdkVersion",choices:l.browserSdk?l.browserSdk.choices:[],placeholder:Object(I.t)("4.x"),allowClear:!1,enabled:!a,help:Object(I.t)("Select the version of the SDK that should be loaded")}))))),k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("Credentials")),k.a.createElement(_.c,null,k.a.createElement(_.b,{type:"info",icon:"icon-circle-exclamation"},Object(I.t)("Your credentials are coupled to a public and secret key. Different clients will require different credentials, so make sure you check the documentation before plugging things in.")),k.a.createElement(G.a,{projectId:"".concat(l.projectId),data:l,showPublicKey:!0,showSecretKey:!0,showProjectId:!0}))),k.a.createElement(R.a,{access:["project:admin"]},k.a.createElement(_.a,null,k.a.createElement(_.e,null,Object(I.t)("Revoke Key")),k.a.createElement(_.c,null,k.a.createElement(B.default,{label:Object(I.t)("Revoke Key"),help:Object(I.t)("Revoking this key will immediately remove and suspend the credentials. This action is irreversible.")},k.a.createElement("div",null,k.a.createElement(L.default,{priority:"danger",message:Object(I.t)("Are you sure you want to revoke this key? This will immediately remove and suspend the credentials."),onConfirm:e.handleRemove,confirmText:Object(I.t)("Revoke Key")},k.a.createElement(N.default,{priority:"danger"},Object(I.t)("Revoke Key")))))))))})}}),se=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=p()(this,(e=f()(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){var t=a.props.params,n=t.orgId,r=t.projectId;g.browserHistory.push("/".concat(n,"/").concat(r,"/settings/keys/"))},a}return y()(t,e),u()(t,[{key:"getTitle",value:function(){return Object(I.t)("Key Details")}},{key:"getEndpoints",value:function(){var e=this.props.params,t=e.keyId,a=e.orgId,n=e.projectId;return[["data","/projects/".concat(a,"/").concat(n,"/keys/").concat(t,"/")]]}},{key:"renderBody",value:function(){var e=this.state.data,t=this.props.params;return k.a.createElement("div",{className:"ref-key-details"},k.a.createElement($.default,{title:Object(I.t)("Key Details")}),k.a.createElement(V.a,null),k.a.createElement(ie,{params:t}),k.a.createElement(ce,{params:t,data:e,onRemove:this.handleRemove}))}}]),t}(T.default)}}]);
//# sourceMappingURL=ProjectKeyDetails.js.map