(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1640:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(13),i=n.n(o),s=n(4),c=n.n(s),u=n(6),l=n.n(u),p=n(7),d=n.n(p),f=n(5),g=n.n(f),h=n(8),m=n.n(h),b=n(16),v=n(1),y=n.n(v),j=n(0),k=n.n(j),x=n(12),O=n.n(x),E=n(3),z=n(9),w=n(10),C=n(484),I=n(393),N=n(205),P=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.badge,n=e.label,a=e.index,o=e.id,s=i()(e,["badge","label","index","id"]),c=Object(I.a)({hookName:"sidebar:item-label",defaultComponent:function(e){var t=e.children;return k.a.createElement(k.a.Fragment,null,t)}}),u="";return u="new"===t?k.a.createElement(T,{priority:"warning",size:"small",border:!0},t):k.a.createElement(C.default,{text:t}),k.a.createElement(R,r()({onlyActiveOnIndex:a,activeClassName:"active"},s),k.a.createElement(c,{id:o},n),t?u:null)}}]),t}(k.a.Component);P.propTypes={label:y.a.node.isRequired,badge:y.a.node,index:y.a.bool,id:y.a.string};var T=Object(E.default)(N.default,{target:"e1r0ei0g0"})("margin-left:0.25em;"),R=Object(E.default)(w.Link,{target:"e1r0ei0g1"})("display:block;color:",function(e){return e.theme.gray2},";font-size:14px;line-height:30px;position:relative;&.active{color:",function(e){return e.theme.gray5},";&:before{background:",function(e){return e.theme.purple},";}}&:hover,&:focus,&:active{color:",function(e){return e.theme.gray5},";}&:before{position:absolute;content:'';display:block;top:4px;left:-30px;height:20px;width:4px;background:transparent;border-radius:0 2px 2px 0;}"),S=P,q=n(160),A=Object(E.default)("div",{target:"e1xswuu60"})("margin-bottom:20px;"),F=Object(E.default)("div",{target:"e1xswuu61"})("color:",function(e){return e.theme.gray3},";font-size:12px;font-weight:600;text-transform:uppercase;margin-bottom:20px;"),J=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.organization,a=t.project,r=t.name,o=t.items;return k.a.createElement(A,{"data-test-id":r},k.a.createElement(F,null,r),o.map(function(t){var r=t.path,o=t.title,i=t.index,s=t.show,c=t.badge,u=t.id;if("function"==typeof s&&!s(e.props))return null;if(void 0!==s&&!s)return null;var l="function"==typeof c?c(e.props):null,p=Object(q.a)(r,{orgId:n&&n.slug,projectId:a&&a.slug});return k.a.createElement(S,{key:o,to:p,label:o,index:i,badge:l,id:u})}))}}]),t}(k.a.Component);J.propTypes=O()({},z.default.NavigationGroup,{organization:z.default.Organization,project:z.default.Project,access:y.a.object,features:y.a.object,id:y.a.string}),J.contextTypes={router:y.a.object,location:y.a.object};var B=function(e){function t(){return c()(this,t),d()(this,g()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.navigationObjects,n=e.hooks,a=e.hookConfigs,o=i()(e,["navigationObjects","hooks","hookConfigs"]),s=t.concat(a);return k.a.createElement(b.Box,null,s.map(function(e){return k.a.createElement(J,r()({key:e.name},o,e))}),n.map(function(e,t){return k.a.cloneElement(e,{key:"hook-".concat(t)})}))}}]),t}(k.a.Component);B.propTypes={hooks:y.a.array,hookConfigs:y.a.array,navigationObjects:y.a.arrayOf(z.default.NavigationObject).isRequired},B.defaultProps={hooks:[],hookConfigs:[]};t.a=B},2370:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(4),i=n.n(o),s=n(6),c=n.n(s),u=n(7),l=n.n(u),p=n(5),d=n.n(p),f=n(8),g=n.n(f),h=n(0),m=n.n(h),b=n(327),v=n(17),y=n.n(v),j=n(78),k=n(225),x=n(1640),O=n(740),E=y()({displayName:"ProjectSettingsNavigation",mixins:[k.a],getInitialState:function(){var e=this.getOrganization(),t=[];return j.default.get("project:settings-sidebar").forEach(function(n){t.push(n(e))}),{hooks:t}},render:function(){var e=this.getAccess(),t=this.getFeatures(),n=this.getOrganization(),a=this.getProject();return m.a.createElement(x.a,{navigationObjects:Object(O.a)({project:a,organization:n}),access:e,features:t,organization:n,project:a,hooks:this.state.hooks})}}),z=n(1666),w=n(9),C=function(e){function t(){return i()(this,t),l()(this,d()(t).apply(this,arguments))}return g()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.props.params,n=t.orgId,a=t.projectId;return m.a.createElement(b.a,r()({},this.props.params,{skipReload:!0,orgId:n,projectId:a}),m.a.createElement(z.a,r()({},this.props,{renderNavigation:function(){return m.a.createElement(E,e.props)}}),this.props.children&&m.a.cloneElement(this.props.children,{organization:this.context.organization,setProjectNavSection:function(){}})))}}]),t}(m.a.Component);C.contextTypes={organization:w.default.Organization};t.default=C}}]);
//# sourceMappingURL=ProjectSettingsLayout.js.map