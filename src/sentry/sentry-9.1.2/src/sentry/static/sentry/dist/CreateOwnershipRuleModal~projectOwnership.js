(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1862:function(e,t,n){"use strict";var a=n(4),r=n.n(a),i=n(6),o=n.n(i),l=n(7),c=n.n(l),s=n(5),u=n.n(s),d=n(8),p=n.n(d),h=n(16),f=n(1),m=n.n(f),g=n(0),b=n.n(g),v=n(3),y=n(732),j=n.n(y),O=n(45),x=n(120),C=n(135),k=n(24),E=n(9),w=n(39),S=n(2),M=n(223),T=n(136),U=n(148),z=n(23),A=n(289),I=n(42),R=n(31),P=n.n(R),V=n(52),N=n.n(V),D=n(50),q=n.n(D),B=n(12),J=n.n(B),F=n(43),K=n.n(F),L=n(90),W=n.n(L),Y=n(51),H=n.n(Y),G=n(18),Q=n.n(G),X=n(134),Z=n(14),$=n(124),_=n(154),ee=n(11),te=n.n(ee),ne=n(102),ae=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){return b.a.createElement(ne.a,te()({},this.props,{multiple:!0}))}}]),t}(b.a.Component),re=n(324),ie=n(29),oe=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=c()(this,(e=u()(t)).call.apply(e,[this].concat(i)))).handleClick=function(){n.props.onRemove(n.props.value)},n}return p()(t,e),o()(t,[{key:"render",value:function(){return b.a.createElement("a",{onClick:this.handleClick},b.a.createElement(re.a,{actor:this.props.value.actor,size:28}))}}]),t}(b.a.Component);oe.propTypes={value:m.a.object,onRemove:m.a.func};var le=function(e){return"".concat(e.email&&e.email.toLowerCase()," ").concat(e.name&&e.name.toLowerCase())},ce=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=c()(this,(e=u()(t)).call.apply(e,[this].concat(i)))).state={loading:!1,inputValue:""},n.renderUserBadge=function(e){return b.a.createElement(_.a,{avatarSize:24,user:e,hideEmail:!0,useLink:!1})},n.createMentionableUser=function(e){return{value:Object(Z.buildUserId)(e.id),label:n.renderUserBadge(e),searchKey:le(e),actor:{type:"user",id:e.id,name:e.name}}},n.createUnmentionableUser=function(e){var t=e.user;return J()({},n.createMentionableUser(t),{disabled:!0,label:b.a.createElement(se,null,b.a.createElement(ie.default,{tooltipOptions:{container:"body",placement:"left"},title:Object(S.t)("%s is not a member of project",t.name||t.email)},n.renderUserBadge(t)))})},n.createMentionableTeam=function(e){return{value:Object(Z.buildTeamId)(e.id),label:b.a.createElement(_.a,{team:e}),searchKey:"#".concat(e.slug),actor:{type:"team",id:e.id,name:e.slug}}},n.createUnmentionableTeam=function(e){var t=n.props.organization.access.includes("project:write");return J()({},n.createMentionableTeam(e),{disabled:!0,label:b.a.createElement(h.Flex,{justify:"space-between"},b.a.createElement(se,null,b.a.createElement(ie.default,{tooltipOptions:{container:"body",placement:"left"},title:Object(S.t)("%s is not a member of project","#".concat(e.slug))},b.a.createElement(_.a,{team:e}))),b.a.createElement(ie.default,{title:t?Object(S.t)("Add %s to project","#".concat(e.slug)):Object(S.t)("You do not have permission to add team to project.")},b.a.createElement(ue,{size:"zero",borderless:!0,disabled:!t,onClick:n.handleAddTeamToProject.bind(K()(K()(n)),e)},b.a.createElement(z.default,{src:"icon-circle-add"}))))})},n.handleChange=function(e){n.props.onChange(e)},n.handleInputChange=function(e){n.setState({inputValue:e}),n.props.onInputChange&&n.props.onInputChange(e)},n.queryMembers=W()(function(e,t){var a=n.props.organization;return n.api?n.api.requestPromise("/organizations/".concat(a.slug,"/members/"),{query:{query:e}}).then(function(e){return t(null,e)},function(e){return t(e)}):null},250),n.handleLoadOptions=function(){var e=n.getMentionableUsers(),t=n.getMentionableTeams(),a=n.getTeamsNotInProject(t),r=e.map(function(e){return e.actor.id});return new Promise(function(e,t){n.queryMembers(n.state.inputValue,function(n,a){n?t(n):e(a)})}).then(function(e){return e?e.filter(function(e){var t=e.user;return t&&-1===r.indexOf(t.id)}).map(n.createUnmentionableUser):[]}).then(function(n){return{options:[].concat(q()(e),q()(t),q()(a),q()(n))}})},n.api=new O.Client,n.projectsStoreMixin=Q.a.listenTo(C.a,function(){n.closeSelectMenu()}),n}return p()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.projectsStoreMixin&&this.projectsStoreMixin.componentDidMount()}},{key:"componentWillUnmount",value:function(){this.api=null,this.projectsStoreMixin&&this.projectsStoreMixin.componentWillUnmount()}},{key:"getMentionableUsers",value:function(){return x.a.getAll().map(this.createMentionableUser)}},{key:"getMentionableTeams",value:function(){var e=this.props.project,t=C.a.getBySlug(e.slug);return t?t.teams.map(this.createMentionableTeam):[]}},{key:"getTeamsNotInProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=$.a.getAll()||[],n=e.map(function(e){return e.actor.id});return t.filter(function(e){return-1===n.indexOf(e.id)}).map(this.createUnmentionableTeam)}},{key:"closeSelectMenu",value:function(){if(this.selectRef){var e=H.a.findDOMNode(this.selectRef).querySelector(".Select-input input");e&&e.blur()}}},{key:"handleAddTeamToProject",value:function(){var e=N()(P.a.mark(function e(t){var n,a,r,i,o;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,a=n.organization,r=n.project,i=n.value,o=q()(i),this.props.onChange([].concat(q()(this.props.value),[this.createMentionableTeam(t)])),e.prev=3,e.next=6,Object(X.a)(this.api,a.slug,r.slug,t);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),this.props.onChange(o),this.closeSelectMenu();case 12:case"end":return e.stop()}},e,this,[[3,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return b.a.createElement(ae,{filterOptions:function(e,t){return e.filter(function(e){return e.searchKey.indexOf(t)>-1})},ref:function(t){return e.selectRef=t},loadOptions:this.handleLoadOptions,defaultOptions:!0,async:!0,clearable:!0,disabled:this.props.disabled,cache:!1,valueComponent:oe,placeholder:Object(S.t)("Add Owners"),onInputChange:this.handleInputChange,onChange:this.handleChange,value:this.props.value,className:Object(I.css)({width:200})})}}]),t}(b.a.Component);ce.propTypes={project:E.default.Project,organization:E.default.Organization,value:m.a.array,onChange:m.a.func,onInputChange:m.a.func,disabled:m.a.bool};var se=Object(v.default)("div",{target:"ez8xng90"})('opacity:0.5;overflow:hidden;/* Needed so that "Add to team" button can fit */'),ue=Object(v.default)(k.default,{target:"ez8xng91"})("flex-shrink:0;"),de=n(15),pe={text:"",type:"path",owners:[],isValid:!1},he=function(e){function t(e){var n;return r()(this,t),(n=c()(this,u()(t).call(this,e))).checkIsValid=function(){n.setState(function(e){return{isValid:!!e.text&&e.owners&&!!e.owners.length}})},n.handleTypeChange=function(e){n.setState({type:e}),n.checkIsValid()},n.handleChangeValue=function(e){n.setState({text:e.target.value}),n.checkIsValid()},n.handleChangeOwners=function(e){n.setState({owners:e}),n.checkIsValid()},n.handleAddRule=function(){var e=n.state,t=e.type,a=e.text,r=e.owners;if(e.isValid){var i=r.map(function(e){return"team"===e.actor.type?"#".concat(e.actor.name):x.a.getById(e.actor.id).email}).join(" "),o="".concat(t,":").concat(a," ").concat(i);n.props.onAddRule(o),n.setState(pe)}else Object(w.addErrorMessage)("A Rule needs a type, a value, and one or more owners.")},n.handleSelectCandidate=function(e,t){n.setState({text:e,type:t}),n.checkIsValid()},n.state=pe,n}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.urls,a=t.paths,r=t.disabled,i=t.project,o=t.organization,l=this.state,c=l.type,s=l.text,u=l.owners,d=l.isValid;return b.a.createElement(b.a.Fragment,null,(a||n)&&b.a.createElement(fe,null,a&&a.map(function(t){return b.a.createElement(be,{key:t,onClick:function(){return e.handleSelectCandidate(t,"path")}},b.a.createElement(ve,{src:"icon-circle-add"}),b.a.createElement(ge,null,t),b.a.createElement(me,null,"[PATH]"))}),n&&n.map(function(t){return b.a.createElement(be,{key:t,onClick:function(){return e.handleSelectCandidate(t,"url")}},b.a.createElement(ve,{src:"icon-circle-add"}),b.a.createElement(ge,null,t),b.a.createElement(me,null,"[URL]"))})),b.a.createElement(ye,null,b.a.createElement(je,{name:"select-type",value:c,showSearch:!1,onChange:this.handleTypeChange,options:[{value:"path",label:Object(S.t)("Path")},{value:"url",label:Object(S.t)("URL")}],style:{width:140},clearable:!1,disabled:r}),b.a.createElement(Oe,{controlled:!0,value:s,onChange:this.handleChangeValue,disabled:r,placeholder:"path"===c?"src/example/*":"https://example.com/settings/*"}),b.a.createElement(xe,{src:"icon-chevron-right"}),b.a.createElement(h.Flex,{flex:"1",align:"center",mr:1},b.a.createElement(ce,{organization:o,project:i,value:u,onChange:this.handleChangeOwners,disabled:r})),b.a.createElement(Ce,{priority:"primary",disabled:!d,onClick:this.handleAddRule,icon:"icon-circle-add",size:"small"})))}}]),t}(b.a.Component);he.propTypes={project:E.default.Project,organization:E.default.Organization,onAddRule:m.a.func,urls:m.a.arrayOf(m.a.string),paths:m.a.arrayOf(m.a.string),disabled:m.a.bool};var fe=Object(v.default)("div",{target:"e1hyuoc70"})("margin-bottom:10px;"),me=Object(v.default)("div",{target:"e1hyuoc71"})("color:",function(e){return e.theme.borderDark},";"),ge=Object(v.default)(U.a,{target:"e1hyuoc72"})("flex:1;"),be=Object(v.default)("div",{target:"e1hyuoc73"})("font-family:",function(e){return e.theme.text.familyMono},";border:1px solid ",function(e){return e.theme.borderDark},";background-color:#f8fafd;padding-left:5px;margin-bottom:3px;cursor:pointer;overflow:hidden;display:flex;align-items:center;"),ve=Object(v.default)(z.default,{target:"e1hyuoc74"})("color:",function(e){return e.theme.borderDark},";margin-right:5px;flex-shrink:0;"),ye=Object(v.default)("div",{target:"e1hyuoc75"})("display:flex;height:40px;align-items:center;margin-bottom:",Object(de.default)(2),";"),je=Object(v.default)(T.a,{target:"e1hyuoc76"})("margin-right:10px;width:80px;flex-shrink:0;"),Oe=Object(v.default)(A.a,{target:"e1hyuoc77"})("padding:",Object(de.default)(1),";line-height:19px;margin-right:5px;"),xe=Object(v.default)(z.default,{target:"e1hyuoc78"})("color:",function(e){return e.theme.borderDark},";flex-shrink:0;margin-right:5px;"),Ce=Object(v.default)(k.default,{target:"e1hyuoc79"})("padding:",Object(de.default)(.5),";/* this sizes the button up to align with the inputs */"),ke=he,Ee=function(e){function t(e){var n;return r()(this,t),(n=c()(this,u()(t).call(this,e))).handleUpdateOwnership=function(){var e=n.props,t=e.organization,a=e.project,r=n.state.text;n.setState({error:null});var i=(new O.Client).requestPromise("/projects/".concat(t.slug,"/").concat(a.slug,"/ownership/"),{method:"PUT",data:{raw:r||""}});return i.then(function(){Object(w.addSuccessMessage)(Object(S.t)("Updated ownership rules")),n.setState({initialText:r})}).catch(function(e){n.setState({error:e.responseJSON}),403===e.status?Object(w.addErrorMessage)(Object(S.t)("You don't have permission to modify ownership rules for this project")):400===e.status&&e.responseJSON.raw&&e.responseJSON.raw[0].startsWith("Invalid rule owners:")?Object(w.addErrorMessage)(Object(S.t)("Unable to save ownership rules changes: "+e.responseJSON.raw[0])):Object(w.addErrorMessage)(Object(S.t)("Unable to save ownership rules changes"))}),i},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleAddRule=function(e){n.setState(function(t){return{text:t.text+"\n"+e}},n.handleUpdateOwnership)},n.state={text:e.initialText,initialText:e.initialText,error:null},n}return p()(t,e),o()(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.initialText;t!=this.state.initialText&&this.setState({initialText:t})}},{key:"parseError",value:function(e){var t=e&&e.raw&&e.raw[0];return t?t.startsWith("Invalid rule owners:")?b.a.createElement(Te,null,t):b.a.createElement(we,{line:t.match(/line (\d*),/)[1]-1}):null}},{key:"mentionableUsers",value:function(){return x.a.getAll().map(function(e){return{id:e.id,display:e.email,email:e.email}})}},{key:"mentionableTeams",value:function(){var e=this.props.project;return(C.a.getBySlug(e.slug)||{teams:[]}).teams.map(function(e){return{id:e.id,display:"#".concat(e.slug),email:e.id}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.project,a=t.organization,r=t.disabled,i=t.urls,o=t.paths,l=this.state,c=l.text,s=l.error,u=l.initialText;return b.a.createElement(b.a.Fragment,null,b.a.createElement(ke,{urls:i,paths:o,organization:a,project:n,onAddRule:this.handleAddRule.bind(this),disabled:r}),b.a.createElement("div",{style:{position:"relative"},onKeyDown:function(t){t.metaKey&&"Enter"==t.key&&e.handleUpdateOwnership()}},b.a.createElement(Me,{placeholder:"#example usage\npath:src/example/pipeline/* person@sentry.io #infra\nurl:http://example.com/settings/* #product",onChange:this.handleChange,disabled:r,value:c,spellCheck:"false",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off"}),b.a.createElement(h.Flex,{align:"center",justify:"space-between"},b.a.createElement("div",null,this.parseError(s)),b.a.createElement(Se,null,b.a.createElement(k.default,{size:"small",priority:"primary",onClick:this.handleUpdateOwnership,disabled:r||c===u},Object(S.t)("Save Changes"))))))}}]),t}(b.a.Component);Ee.propTypes={organization:E.default.Organization,project:E.default.Project,initialText:m.a.string,urls:m.a.arrayOf(m.a.string),paths:m.a.arrayOf(m.a.string),disabled:m.a.bool};var we=Object(v.default)("div",{target:"en3n9di0"})(M.a,";width:100%;height:",24,"px;background-color:red;opacity:0.1;pointer-events:none;position:absolute;top:",function(e){return 4+24*e.line},"px;"),Se=Object(v.default)("div",{target:"en3n9di1"})("text-align:end;padding-top:10px;"),Me=Object(v.default)(j.a,{target:"en3n9di2"})(M.a,";min-height:140px;overflow:auto;outline:0;width:100%;resize:none;margin:0;font-family:",function(e){return e.theme.text.familyMono},";word-break:break-all;white-space:pre-wrap;padding-top:",4,"px;line-height:",24,"px;"),Te=Object(v.default)("div",{target:"en3n9di3"})("color:",function(e){return e.theme.error},";font-weight:bold;margin-top:12px;");t.a=Ee}}]);
//# sourceMappingURL=CreateOwnershipRuleModal~projectOwnership.js.map