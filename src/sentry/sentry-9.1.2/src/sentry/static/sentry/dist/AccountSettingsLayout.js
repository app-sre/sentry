(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1640:function(e,t,n){"use strict";var a=n(11),o=n.n(a),r=n(13),i=n.n(r),u=n(4),c=n.n(u),l=n(6),s=n.n(l),p=n(7),d=n.n(p),f=n(5),g=n.n(f),h=n(8),m=n.n(h),b=n(16),v=n(1),y=n.n(v),k=n(0),x=n.n(k),j=n(12),O=n.n(j),z=n(3),E=n(9),w=n(10),C=n(484),T=n(393),N=n(205),I=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.badge,n=e.label,a=e.index,r=e.id,u=i()(e,["badge","label","index","id"]),c=Object(T.a)({hookName:"sidebar:item-label",defaultComponent:function(e){var t=e.children;return x.a.createElement(x.a.Fragment,null,t)}}),l="";return l="new"===t?x.a.createElement(P,{priority:"warning",size:"small",border:!0},t):x.a.createElement(C.default,{text:t}),x.a.createElement(q,o()({onlyActiveOnIndex:a,activeClassName:"active"},u),x.a.createElement(c,{id:r},n),t?l:null)}}]),t}(x.a.Component);I.propTypes={label:y.a.node.isRequired,badge:y.a.node,index:y.a.bool,id:y.a.string};var P=Object(z.default)(N.default,{target:"e1r0ei0g0"})("margin-left:0.25em;"),q=Object(z.default)(w.Link,{target:"e1r0ei0g1"})("display:block;color:",function(e){return e.theme.gray2},";font-size:14px;line-height:30px;position:relative;&.active{color:",function(e){return e.theme.gray5},";&:before{background:",function(e){return e.theme.purple},";}}&:hover,&:focus,&:active{color:",function(e){return e.theme.gray5},";}&:before{position:absolute;content:'';display:block;top:4px;left:-30px;height:20px;width:4px;background:transparent;border-radius:0 2px 2px 0;}"),A=I,J=n(160),R=Object(z.default)("div",{target:"e1xswuu60"})("margin-bottom:20px;"),B=Object(z.default)("div",{target:"e1xswuu61"})("color:",function(e){return e.theme.gray3},";font-size:12px;font-weight:600;text-transform:uppercase;margin-bottom:20px;"),D=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.organization,a=t.project,o=t.name,r=t.items;return x.a.createElement(R,{"data-test-id":o},x.a.createElement(B,null,o),r.map(function(t){var o=t.path,r=t.title,i=t.index,u=t.show,c=t.badge,l=t.id;if("function"==typeof u&&!u(e.props))return null;if(void 0!==u&&!u)return null;var s="function"==typeof c?c(e.props):null,p=Object(J.a)(o,{orgId:n&&n.slug,projectId:a&&a.slug});return x.a.createElement(A,{key:r,to:p,label:r,index:i,badge:s,id:l})}))}}]),t}(x.a.Component);D.propTypes=O()({},E.default.NavigationGroup,{organization:E.default.Organization,project:E.default.Project,access:y.a.object,features:y.a.object,id:y.a.string}),D.contextTypes={router:y.a.object,location:y.a.object};var F=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.navigationObjects,n=e.hooks,a=e.hookConfigs,r=i()(e,["navigationObjects","hooks","hookConfigs"]),u=t.concat(a);return x.a.createElement(b.Box,null,u.map(function(e){return x.a.createElement(D,o()({key:e.name},r,e))}),n.map(function(e,t){return x.a.cloneElement(e,{key:"hook-".concat(t)})}))}}]),t}(x.a.Component);F.propTypes={hooks:y.a.array,hookConfigs:y.a.array,navigationObjects:y.a.arrayOf(E.default.NavigationObject).isRequired},F.defaultProps={hooks:[],hookConfigs:[]};t.a=F},2372:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n.n(a),r=n(4),i=n.n(r),u=n(6),c=n.n(u),l=n(7),s=n.n(l),p=n(5),d=n.n(p),f=n(8),g=n.n(f),h=n(0),m=n.n(h),b=n(1640),v=n(738),y=function(){return m.a.createElement(b.a,{navigationObjects:v.a})},k=n(260),x=n(9),j=n(1666),O=n(171),z=function(e){function t(){return i()(this,t),s()(this,d()(t).apply(this,arguments))}return g()(t,e),c()(t,[{key:"getChildContext",value:function(){return{organization:this.props.organization}}},{key:"componentDidUpdate",value:function(e){var t=this.props.organization;e.organization!==t&&t&&void 0===t.access&&Object(k.c)(t.slug,{setActive:!0,loadProjects:!0})}},{key:"render",value:function(){var e=this;return m.a.createElement(j.a,o()({},this.props,{renderNavigation:function(){return m.a.createElement(y,e.props)}}),this.props.children)}}]),t}(m.a.Component);z.propTypes={organization:x.default.Organization},z.childContextTypes={organization:x.default.Organization};t.default=Object(O.a)(z)}}]);
//# sourceMappingURL=AccountSettingsLayout.js.map