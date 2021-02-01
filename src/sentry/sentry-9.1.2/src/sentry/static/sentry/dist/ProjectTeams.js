(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2288:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a.n(n),r=a(6),c=a.n(r),s=a(7),i=a.n(s),d=a(5),l=a.n(d),m=a(8),u=a.n(m),p=a(0),f=a.n(p),h=a(3),j=a(66),g=a(71),b=a(134),v=a(39),T=a(2),w=a(153),O=a(61),y=a(99),C=a(615),z=a(29),A=a(15),E=function(e){function t(){var e,a;o()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=i()(this,(e=l()(t)).call.apply(e,[this].concat(r)))).canCreateTeam=function(){var e=a.props.organization,t=Object(j.b)(e).getAccess();return t.has("org:write")&&t.has("team:write")&&t.has("project:write")},a.handleRemove=function(e){if(!a.state.loading){var t=a.props.params,n=t.orgId,o=t.projectId;Object(b.f)(a.api,n,o,e).then(function(){return a.handleRemovedTeam(e)}).catch(function(){Object(v.addErrorMessage)(Object(T.t)("Could not remove the %s team",e)),a.setState({loading:!1})})}},a.handleRemovedTeam=function(e){a.setState(function(t){return{projectTeams:a.state.projectTeams.filter(function(t){return t.slug!==e})}})},a.handleAddedTeam=function(e){a.setState(function(t){return{projectTeams:a.state.projectTeams.concat([e])}})},a.handleAdd=function(e){if(!a.state.loading){var t=a.props.params,n=t.orgId,o=t.projectId;Object(b.a)(a.api,n,o,e).then(function(){a.handleAddedTeam(e)},function(){a.setState({error:!0,loading:!1})})}},a.handleCreateTeam=function(e){var t=a.props,n=t.project,o=t.organization;a.canCreateTeam()&&(e.stopPropagation(),e.preventDefault(),Object(g.d)({project:n,organization:o,onClose:function(e){Object(b.a)(a.api,o.slug,n.slug,e).then(a.remountComponent,a.remountComponent)}}))},a}return u()(t,e),c()(t,[{key:"getEndpoints",value:function(){var e=this.props.params,t=e.orgId,a=e.projectId;return[["projectTeams","/projects/".concat(t,"/").concat(a,"/teams/")]]}},{key:"renderBody",value:function(){var e=this.props,t=e.params,a=e.organization,n=this.canCreateTeam(),o=a.access.includes("project:write"),r=Object(T.t)("This is the last team with access to this project. Removing it will mean only owners and managers will be able to access the project pages. Are you sure you want to remove this team from the project %s?",t.projectId),c=this.state.projectTeams.map(function(e){return e.slug}),s=f.a.createElement(I,null,Object(T.t)("Teams"),f.a.createElement(z.default,{disabled:n,title:Object(T.t)("You must be a project admin to create teams"),tooltipOptions:{placement:"top"}},f.a.createElement(R,{disabled:!n,onClick:this.handleCreateTeam},Object(T.t)("Create Team"))));return f.a.createElement("div",null,f.a.createElement(y.default,{title:Object(T.t)("%s Teams",t.projectId)}),f.a.createElement(C.a,{organization:a,selectedTeams:c,onAddTeam:this.handleAdd,onRemoveTeam:this.handleRemove,menuHeader:s,confirmLastTeamRemoveMessage:r,disabled:!o}))}}]),t}(w.default),I=Object(h.default)("div",{target:"e1oyzggu0"})("font-size:0.875em;padding:",Object(A.default)(.5),";text-transform:uppercase;"),R=Object(h.default)(O.a,{target:"e1oyzggu1"})("float:right;text-transform:none;",function(e){return e.disabled&&Object(h.css)("cursor:not-allowed;color:",e.theme.gray2,";opacity:0.6;")},";");t.default=E}}]);
//# sourceMappingURL=ProjectTeams.js.map