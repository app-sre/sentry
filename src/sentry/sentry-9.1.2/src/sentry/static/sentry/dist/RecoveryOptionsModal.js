(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1533:function(e,t,a){"use strict";a.r(t);var n=a(42),o=a(4),c=a.n(o),r=a(6),s=a.n(r),i=a(7),u=a.n(i),l=a(5),d=a.n(l),m=a(8),p=a.n(m),f=a(1),y=a.n(f),h=a(0),b=a.n(h),E=a(2),k=a(81),v=a(114),w=a(24),g=a(113),O=a(15),j=function(e){function t(){var e,a;c()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=u()(this,(e=d()(t)).call.apply(e,[this].concat(o)))).handleSkipSms=function(){a.setState({skipSms:!0})},a.state={skipSms:!1},a}return p()(t,e),s()(t,[{key:"getEndpoints",value:function(){return[["authenticators","/users/me/authenticators/"]]}},{key:"renderBody",value:function(){var e=this.props,t=e.authenticatorName,a=e.closeModal,o=e.Body,c=e.Header,r=this.state,s=r.authenticators,i=r.skipSms,u=s.reduce(function(e,t){return e[t.id]=t,e},{}),l=u.recovery,d=u.sms,m=l&&l.isEnrolled,p=d&&!d.isEnrolled&&!i;return b.a.createElement(b.a.Fragment,null,b.a.createElement(c,{closeButton:!0,onHide:a},Object(E.t)("Two-Factor Authentication Enabled")),b.a.createElement(o,null,b.a.createElement(g.default,null,Object(E.t)("Two-factor authentication via %s has been enabled.",t)),b.a.createElement(g.default,null,Object(E.t)("You should now set up recovery options to secure your account.")),p?b.a.createElement(k.default,{type:"warning"},Object(E.t)("We recommend adding a phone number as a backup 2FA method.")):b.a.createElement(k.default,{type:"warning"},Object(E.t)("Recovery codes are the only way to access your account if you lose\n                  your device and cannot receive two-factor authentication codes."))),p?b.a.createElement("div",{className:"modal-footer"},b.a.createElement(w.default,{onClick:this.handleSkipSms,name:"skipStep",autoFocus:!0},Object(E.t)("Skip this step")),b.a.createElement(w.default,{priority:"primary",onClick:a,to:"/settings/account/security/mfa/".concat(d.id,"/enroll/"),name:"addPhone",className:Object(n.css)({marginLeft:Object(O.default)(1)}),autoFocus:!0},Object(E.t)("Add a Phone Number"))):b.a.createElement("div",{className:"modal-footer"},b.a.createElement(w.default,{priority:"primary",onClick:a,to:m?"/settings/account/security/mfa/".concat(l.authId,"/"):"/settings/account/security/",name:"getCodes",autoFocus:!0},Object(E.t)("Get Recovery Codes"))))}}]),t}(v.default);j.propTypes={closeModal:y.a.func,onClose:y.a.func,authenticatorName:y.a.string.isRequired,Body:y.a.oneOfType([y.a.func,y.a.node]).isRequired,Header:y.a.oneOfType([y.a.func,y.a.node]).isRequired},t.default=j}}]);
//# sourceMappingURL=RecoveryOptionsModal.js.map