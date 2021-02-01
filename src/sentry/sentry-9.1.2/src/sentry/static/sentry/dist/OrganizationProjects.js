(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1671:function(e,t,a){"use strict";var n=a(3),o=a(0),r=a.n(o),i=a(17),c=a.n(i),s=a(37),l=a(424),u=a(61),p=a(613),d=a(9),g=a(15),m=c()({displayName:"ProjectItem",propTypes:{project:d.default.Project,organization:d.default.Organization},mixins:[s.default],getInitialState:function(){return{isBookmarked:this.props.project.isBookmarked}},handleToggleBookmark:function(e){this.setState({isBookmarked:e})},render:function(){var e=this.props,t=e.project,a=e.organization,n=new Set(a.features).has("sentry10");return r.a.createElement(h,{key:t.id},r.a.createElement(v,{organization:a,project:t,isBookmarked:this.state.isBookmarked,onToggle:this.handleToggleBookmark}),r.a.createElement(u.a,{to:n?"/settings/".concat(a.slug,"/projects/").concat(t.slug,"/"):"/".concat(a.slug,"/").concat(t.slug,"/")},r.a.createElement(p.a,{project:t})))}}),h=Object(n.default)("div",{target:"enngb6z0"})("display:flex;align-items:center;"),v=Object(n.default)(l.a,{target:"enngb6z1"})("margin-right:",Object(g.default)(1),";margin-top:-",Object(g.default)(.25),";");t.a=m},2383:function(e,t,a){"use strict";a.r(t);var n=a(11),o=a.n(n),r=a(42),i=a(12),c=a.n(i),s=a(4),l=a.n(s),u=a(6),p=a.n(u),d=a(7),g=a.n(d),m=a(5),h=a.n(m),v=a(96),j=a.n(v),f=a(8),y=a.n(f),k=a(16),E=a(1),b=a.n(E),z=a(0),O=a.n(z),P=a(66),q=a(14),w=a(2),x=a(24),B=a(106),S=a(153),T=a(107),L=a(25),I=a(1671),N=a(9),R=a(99),D=a(370),J=a.n(D),Q=a(17),W=a.n(Q),A=a(347),C=W()({displayName:"ProjectListItem",propTypes:{project:N.default.Project,stats:b.a.array},render:function(){var e=this.props.project,t=this.props.stats||e.stats,a=t&&t.map(function(e){return{x:e[0],y:e[1]}});return O.a.createElement("div",null,a&&O.a.createElement(J.a,{height:25,debounce:50},O.a.createElement(A.default,{height:25,minHeights:[3],gap:1,points:a,label:"events"})))}});a.d(t,"default",function(){return H});var H=function(e){function t(){return l()(this,t),g()(this,h()(t).apply(this,arguments))}return y()(t,e),p()(t,[{key:"componentWillReceiveProps",value:function(e,a){var n,o,r,i,c;j()(h()(t.prototype),"componentWillReceiveProps",this).call(this,e,a);var s=null==e?void 0:null===(n=e.location)||void 0===n?void 0:null===(o=n.query)||void 0===o?void 0:o.query;s!==(null===(r=this.props)||void 0===r?void 0:null===(i=r.location)||void 0===i?void 0:null===(c=i.query)||void 0===c?void 0:c.query)&&this.setState({searchQuery:s})}},{key:"getEndpoints",value:function(){var e,t,a,n=this.props.params.orgId;return[["projectList","/organizations/".concat(n,"/projects/"),{query:{query:null===(e=this.props)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:null===(a=t.query)||void 0===a?void 0:a.query}}],["projectStats","/organizations/".concat(n,"/stats/"),{query:{since:(new Date).getTime()/1e3-86400,stat:"generated",group:"project"}}]]}},{key:"getDefaultState",value:function(){var e,a,n;return c()({},j()(h()(t.prototype),"getDefaultState",this).call(this),{searchQuery:(null===(e=this.props)||void 0===e?void 0:null===(a=e.location)||void 0===a?void 0:null===(n=a.query)||void 0===n?void 0:n.query)||""})}},{key:"getTitle",value:function(){var e=this.context.organization;return"".concat(e.name," Projects")}},{key:"renderBody",value:function(){var e=this,t=this.state,a=t.projectList,n=t.projectListPageLinks,i=t.projectStats,c=this.context.organization,s=Object(P.b)(this.context.organization).getAccess().has("project:admin"),l=new Set(c.features).has("sentry10"),u=O.a.createElement(x.default,{priority:"primary",size:"small",disabled:!s,title:s?void 0:Object(w.t)("You do not have permission to create projects"),to:"/organizations/".concat(c.slug,"/projects/new/"),icon:"icon-circle-add"},Object(w.t)("Create Project"));return O.a.createElement("div",null,O.a.createElement(R.default,{title:"Projects",action:u}),O.a.createElement(L.a,null,O.a.createElement(L.e,{hasButtons:!0},Object(w.t)("Projects"),this.renderSearchInput({updateRoute:!0,placeholder:Object(w.t)("Search Projects"),className:"search"})),O.a.createElement(L.c,{className:Object(r.css)({width:"100%"})},Object(q.sortProjects)(a).map(function(t,a){return O.a.createElement(L.f,{p:0,key:t.id,align:"center"},O.a.createElement(k.Box,{p:2,flex:"1"},O.a.createElement(I.a,{project:t,organization:e.context.organization})),O.a.createElement(k.Box,{w:.25,p:2},O.a.createElement(C,{key:t.id,project:t,stats:i[t.id]})),!l&&O.a.createElement(k.Box,{p:2,align:"right"},O.a.createElement(x.default,{icon:"icon-settings",size:"small",to:"/settings/".concat(c.slug,"/projects/").concat(t.slug,"/")},Object(w.t)("Settings"))))}),0===a.length&&O.a.createElement(B.default,null,Object(w.t)("No projects found.")))),n&&O.a.createElement(T.default,o()({pageLinks:n},this.props)))}}]),t}(S.default);H.contextTypes={router:b.a.object.isRequired,organization:N.default.Organization}}}]);
//# sourceMappingURL=OrganizationProjects.js.map