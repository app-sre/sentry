(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1575:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(6),o=a.n(l),c=a(7),i=a.n(c),s=a(5),u=a.n(s),d=a(8),m=a.n(d),f=a(0),p=a.n(f),h=a(1),E=a.n(h),v=a(3),b=function(e){return e.color?"background: ".concat(e.color,";"):"background: ".concat(e.enabled?e.theme.success:e.theme.error,";")},g=function(e){return"\n  height: ".concat(e.size,"px;\n  width: ").concat(e.size,"px;\n")},y=Object(v.default)("div",{target:"eljqieg0"})("display:inline-block;position:relative;border-radius:50%;",g,";",b,";"),j=function(e){function t(e){return r()(this,t),i()(this,u()(t).call(this,e))}return m()(t,e),o()(t,[{key:"render",value:function(){return p.a.createElement(y,this.props)}}]),t}(p.a.Component);j.propTypes={enabled:E.a.bool.isRequired,size:E.a.number.isRequired,color:E.a.string},j.defaultProps={enabled:!0,size:14},t.a=j},1606:function(e,t,a){"use strict";var n=a(3),r=Object(n.default)("div",{target:"e1ty3hc0"})("font-size:1.2em;margin-bottom:10px;");t.a=r},1618:function(e,t,a){"use strict";var n=a(11),r=a.n(n),l=a(4),o=a.n(l),c=a(6),i=a.n(c),s=a(7),u=a.n(s),d=a(5),m=a.n(d),f=a(8),p=a.n(f),h=a(0),E=a.n(h),v=a(2),b=a(1606),g=a(110),y=a(113),j=function(e){function t(){return o()(this,t),u()(this,m()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"render",value:function(){return E.a.createElement(g.default,r()({message:E.a.createElement(E.a.Fragment,null,E.a.createElement(b.a,null,Object(v.t)("Do you want to remove this method?")),E.a.createElement(y.default,null,Object(v.t)("Removing the last authentication method will disable two-factor authentication completely.")))},this.props))}}]),t}(E.a.Component);t.a=j},2361:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(4),l=a.n(r),o=a(6),c=a.n(o),i=a(7),s=a.n(i),u=a(5),d=a.n(u),m=a(8),f=a.n(m),p=a(16),h=a(10),E=a(1),v=a.n(E),b=a(0),g=a.n(b),y=a(3),j=a(39),O=a(2),w=a(153),x=a(24),k=a(1575),C=a(190),R=a(11),B=a.n(R),q=a(587),z=a(110),F=a(106),D=a(23),T=a(25),U=Object(y.default)(function(e){return g.a.createElement(T.f,B()({p:2},e))},{target:"e1knlcse0"})("font-family:",function(e){return e.theme.text.familyMono},";"),A=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=s()(this,(e=d()(t)).call.apply(e,[this].concat(r)))).printCodes=function(){var e=window.frames.printable;e.document.write(a.props.codes.join("<br>")),e.print(),e.document.close()},a}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.isEnrolled,a=e.codes;if(!t||!a)return null;var r=a.join(" \n");return g.a.createElement(T.a,{className:Object(n.css)({marginTop:30})},g.a.createElement(T.e,{hasButtons:!0},g.a.createElement(p.Flex,{align:"center"},g.a.createElement(p.Box,null,Object(O.t)("Unused Codes"))),g.a.createElement(p.Flex,null,g.a.createElement(p.Box,{ml:1},g.a.createElement(q.a,{hideUnsupported:!0,value:r},g.a.createElement(x.default,{size:"small"},g.a.createElement(D.default,{src:"icon-copy"})))),g.a.createElement(p.Box,{ml:1},g.a.createElement(x.default,{size:"small",onClick:this.printCodes},g.a.createElement(D.default,{src:"icon-print"}))),g.a.createElement(p.Box,{ml:1},g.a.createElement(x.default,{size:"small",download:"sentry-recovery-codes.txt",href:"data:text/plain;charset=utf-8,".concat(r)},g.a.createElement(D.default,{src:"icon-download"}))),g.a.createElement(p.Box,{ml:1},g.a.createElement(z.default,{onConfirm:this.props.onRegenerateBackupCodes,message:Object(O.t)("Are you sure you want to regenerate recovery codes? Your old codes will no longer work.")},g.a.createElement(x.default,{priority:"danger",size:"small"},Object(O.t)("Regenerate Codes")))))),g.a.createElement(T.c,null,g.a.createElement(T.b,{type:"warning"},g.a.createElement(p.Flex,{align:"center",ml:1,flex:"1"},Object(O.t)("Make sure to save a copy of your recovery codes and store them in a safe place."))),g.a.createElement(p.Box,null,!!a.length&&a.map(function(e){return g.a.createElement(U,{key:e},e)})),!a.length&&g.a.createElement(F.default,null,Object(O.t)("You have no more recovery codes to use"))),g.a.createElement("iframe",{name:"printable",className:Object(n.css)({display:"none"})}))}}]),t}(g.a.Component);A.propTypes={isEnrolled:v.a.bool,codes:v.a.arrayOf(v.a.string),onRegenerateBackupCodes:v.a.func.isRequired};var N=A,S=a(1618),M=a(99),I=a(113),L=a(29),P=a(1606),Y=function(e){function t(){return l()(this,t),s()(this,d()(t).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.isEnrolled,a=e.devices,r=e.id,l=e.onRemoveU2fDevice;if("u2f"!==r||!t)return null;var o=a&&a.length,c=1===o;return g.a.createElement(T.a,{className:Object(n.css)({marginTop:30})},g.a.createElement(T.e,null,Object(O.t)("Device name")),g.a.createElement(T.c,null,!o&&g.a.createElement(F.default,null,Object(O.t)("You have not added any U2F devices")),o&&a.map(function(e){return g.a.createElement(T.f,{p:0,key:e.name},g.a.createElement(p.Flex,{p:2,pr:0,align:"center",flex:"1"},g.a.createElement(p.Box,{flex:"1"},e.name),g.a.createElement("div",{className:Object(n.css)({fontSize:"0.8em",opacity:.6})},g.a.createElement(C.default,{date:e.timestamp}))),g.a.createElement(p.Box,{p:2},g.a.createElement(z.default,{onConfirm:function(){return l(e)},disabled:c,message:g.a.createElement(g.a.Fragment,null,g.a.createElement(P.a,null,Object(O.t)("Do you want to remove U2F device?")),g.a.createElement(I.default,null,Object(O.t)('Are you sure you want to remove the U2F device "'.concat(e.name,'"?'))))},g.a.createElement(x.default,{size:"small",priority:"danger"},g.a.createElement(L.default,{disabled:!c,title:Object(O.t)("Can not remove last U2F device")},g.a.createElement("span",{className:"icon icon-trash"}))))))}),g.a.createElement(T.f,{justify:"flex-end",p:2},g.a.createElement(x.default,{type:"button",to:"/settings/account/security/mfa/u2f/enroll/"},Object(O.t)("Add Another Device")))))}}]),t}(g.a.Component);Y.propTypes={isEnrolled:v.a.bool,id:v.a.string,devices:v.a.arrayOf(v.a.shape({name:v.a.string,timestamp:v.a.any})),onRemoveU2fDevice:v.a.func.isRequired};var J=Y,_="/users/me/authenticators/",G=Object(y.default)("span",{target:"e1qcww6q0"})("font-weight:bold;margin-right:6px;width:100px;"),H=Object(y.default)("span",{target:"e1qcww6q1"})("font-weight:bold;margin-left:6px;"),K=function(e){function t(){return l()(this,t),s()(this,d()(t).apply(this,arguments))}return f()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.date;return g.a.createElement(p.Flex,{mb:1},g.a.createElement(G,null,t),g.a.createElement(p.Box,{flex:"1"},a?g.a.createElement(C.default,{date:a}):Object(O.t)("never")))}}]),t}(g.a.Component);K.propTypes={label:v.a.string,date:v.a.string};var Q=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=s()(this,(e=d()(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){var t=a.state.authenticator;if(t&&t.authId){var n=!!e,r=n?"".concat(e.key_handle,"/"):"";a.setState({loading:!0},function(){return a.api.requestPromise("".concat(_).concat(t.authId,"/").concat(r),{method:"DELETE"}).then(function(){a.props.router.push("/settings/account/security");var t=n?e.name:"Authenticator";Object(j.addSuccessMessage)(Object(O.t)("%s has been removed",t))},function(){var t=n?e.name:"authenticator";a.addError(Object(O.t)("Error removing %s",t))})})}},a.handleRemoveU2fDevice=function(){},a._form={},a}return f()(t,e),c()(t,[{key:"getTitle",value:function(){return Object(O.t)("Security")}},{key:"getEndpoints",value:function(){return[["authenticator","".concat(_).concat(this.props.params.authId,"/")]]}},{key:"addError",value:function(e){this.setState({loading:!1}),Object(j.addErrorMessage)(e)}},{key:"renderBody",value:function(){var e=this.state.authenticator,t=this.props,a=t.deleteDisabled,r=t.onRegenerateBackupCodes;return g.a.createElement("div",null,g.a.createElement(M.default,{title:g.a.createElement(g.a.Fragment,null,g.a.createElement("span",null,e.name),g.a.createElement(k.a,{className:Object(n.css)({marginLeft:6}),enabled:e.isEnrolled})),action:e.isEnrolled&&e.removeButton&&g.a.createElement(L.default,{title:Object(O.t)("Two-factor authentication is required for at least one organization you're a member of."),disabled:!a},g.a.createElement(S.a,{onConfirm:this.handleRemove,disabled:a},g.a.createElement(x.default,{priority:"danger"},e.removeButton)))}),g.a.createElement(I.default,null,e.description),g.a.createElement(K,{label:Object(O.t)("Created at"),date:e.createdAt}),g.a.createElement(K,{label:Object(O.t)("Last used"),date:e.lastUsedAt}),g.a.createElement(J,{isEnrolled:e.isEnrolled,id:e.id,devices:e.devices,onRemoveU2fDevice:this.handleRemove}),e.isEnrolled&&e.phone&&g.a.createElement("div",{className:Object(n.css)({marginTop:30})},Object(O.t)("Confirmation codes are sent to the following phone number"),":",g.a.createElement(H,null,e.phone)),g.a.createElement(N,{onRegenerateBackupCodes:r,isEnrolled:e.isEnrolled,codes:e.codes}))}}]),t}(w.default);Q.PropTypes={deleteDisabled:v.a.bool.isRequired,onRegenerateBackupCodes:v.a.func.isRequired};t.default=Object(h.withRouter)(Q)}}]);
//# sourceMappingURL=AccountSecurityDetails.js.map