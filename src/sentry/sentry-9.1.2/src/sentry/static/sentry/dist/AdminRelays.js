(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1591:function(e,t,r){"use strict";(function(e){var a=r(11),n=r.n(a),s=r(4),o=r.n(s),i=r(6),l=r.n(i),u=r(7),c=r.n(u),p=r(5),h=r.n(p),m=r(8),d=r.n(m),f=r(1),y=r.n(f),g=r(0),E=r.n(g),v=r(17),S=r.n(v),b=r(48),q=r.n(b),w=r(10),R=r(37),N=r(76),k=r(58),L=r(107),x=function(e){function t(){var e,r;o()(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=c()(this,(e=h()(t)).call.apply(e,[this].concat(n)))).getCurrentLabel=function(){var e=r.props.options.filter(function(e){return e[0]===(r.props.value||"")})[0];return e?r.props.name+": "+e[1]:r.props.name+": Any"},r.getDefaultItem=function(){var e=q.a.extend({},r.props.location.query,{cursor:""});return delete e[r.props.queryKey],E.a.createElement(k.default,{key:"",isActive:""===r.props.value||!r.props.value,to:r.props.path,query:e},"Any")},r.getSelector=function(){return E.a.createElement(N.default,{title:r.getCurrentLabel()},r.getDefaultItem(),r.props.options.map(function(e){var t={};t[r.props.queryKey]=e[0],t.cursor="";var a=q.a.extend({},r.props.location.query,t);return E.a.createElement(k.default,{key:e[0],isActive:r.props.value===e[0],to:r.props.path,query:a},e[1])}))},r}return d()(t,e),l()(t,[{key:"render",value:function(){return E.a.createElement("div",{className:"filter-options"},1===this.props.options.length?E.a.createElement("strong",null,this.getCurrentLabel()):this.getSelector())}}]),t}(E.a.Component);x.propTypes={name:y.a.string.isRequired,queryKey:y.a.string.isRequired,options:y.a.array.isRequired,path:y.a.string.isRequired,value:y.a.any};var A=function(e){function t(){var e,r;o()(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=c()(this,(e=h()(t)).call.apply(e,[this].concat(n)))).getCurrentSortLabel=function(){return r.props.options.filter(function(e){return e[0]===r.props.value})[0][1]},r.getSortBySelector=function(){return E.a.createElement(N.default,{title:r.getCurrentSortLabel(),className:"sorted-by"},r.props.options.map(function(e){var t=q.a.extend({},r.props.location.query,{sortBy:e[0],cursor:""});return E.a.createElement(k.default,{isActive:r.props.value===e[0],key:e[0],to:r.props.path,query:t},e[1])}))},r}return d()(t,e),l()(t,[{key:"render",value:function(){return 0===this.props.options.length?null:E.a.createElement("div",{className:"sort-options"},"Showing results sorted by",1===this.props.options.length?E.a.createElement("strong",{className:"sorted-by"},this.getCurrentSortLabel()):this.getSortBySelector())}}]),t}(E.a.Component);A.propTypes={options:y.a.array.isRequired,path:y.a.string.isRequired,location:y.a.object,value:y.a.any};var C=S()({displayName:"ResultGrid",propTypes:{columns:y.a.array,columnsForRow:y.a.func,defaultSort:y.a.string,defaultParams:y.a.object,endpoint:y.a.string,filters:y.a.object,hasPagination:y.a.bool,hasSearch:y.a.bool,keyForRow:y.a.func,location:y.a.object,method:y.a.string,options:y.a.array,path:y.a.string,sortOptions:y.a.array},mixins:[R.default],getDefaultProps:function(){return{path:"",endpoint:"",method:"GET",columns:[],sortOptions:[],filters:{},defaultSort:"",keyForRow:function(e){return e.id},columnsForRow:function(e){return[]},defaultParams:{per_page:50},hasPagination:!0,hasSearch:!1}},getInitialState:function(){var e=(this.props.location||{}).query||{};return{rows:[],loading:!0,error:!1,pageLinks:null,query:e.query||"",sortBy:e.sortBy||this.props.defaultSort,filters:Object.assign({},e)}},componentWillMount:function(){this.fetchData()},componentWillReceiveProps:function(e){var t=(e.location||{}).query||{};this.setState({query:t.query||"",sortBy:t.sortBy||this.props.defaultSort,filters:Object.assign({},t),pageLinks:null,loading:!0,error:!1},this.fetchData)},remountComponent:function(){this.setState(this.getInitialState(),this.fetchData)},refresh:function(){this.setState({loading:!0},this.fetchData())},fetchData:function(){var e=this,t=q.a.extend({},this.props.defaultParams,{sortBy:this.state.sortBy},(this.props.location||{}).query||{});this.api.request(this.props.endpoint,{method:this.props.method,data:t,success:function(t,r,a){e.setState({loading:!1,error:!1,rows:t,pageLinks:a.getResponseHeader("Link")})},error:function(){e.setState({loading:!1,error:!0})}})},onSearch:function(t){var r=this.props.location||{},a=this.state.query,n=e.extend({},r.query||{},{query:a,cursor:""});t.preventDefault(),w.browserHistory.push({pathname:this.props.path,query:n})},onQueryChange:function(e){this.setState({query:e.target.value})},renderLoading:function(){return E.a.createElement("tr",null,E.a.createElement("td",{colSpan:this.props.columns.length},E.a.createElement("div",{className:"loading"},E.a.createElement("div",{className:"loading-indicator"}),E.a.createElement("div",{className:"loading-message"},"Hold on to your butts!"))))},renderError:function(){return E.a.createElement("tr",null,E.a.createElement("td",{colSpan:this.props.columns.length},E.a.createElement("div",{className:"alert-block alert-error"},"Something bad happened :(")))},renderNoResults:function(){return E.a.createElement("tr",null,E.a.createElement("td",{colSpan:this.props.columns.length},"No results found."))},renderResults:function(){var e=this;return this.state.rows.map(function(t){return E.a.createElement("tr",{key:e.props.keyForRow(t)},e.props.columnsForRow(t))})},render:function(){var e=this,t=this.props.filters;return E.a.createElement("div",{className:"result-grid"},E.a.createElement("div",{className:"table-options"},this.props.hasSearch&&E.a.createElement("div",{className:"result-grid-search"},E.a.createElement("form",{onSubmit:this.onSearch},E.a.createElement("div",{className:"form-group"},E.a.createElement("input",{type:"text",className:"form-control input-search",placeholder:"search",style:{width:300},name:"query",autoComplete:"off",value:this.state.query,onChange:this.onQueryChange}),E.a.createElement("button",{type:"submit",className:"btn btn-sm btn-primary"},E.a.createElement("span",{className:"icon-search"}))))),E.a.createElement(A,{options:this.props.sortOptions,value:this.state.sortBy,path:this.props.path,location:this.props.location}),Object.keys(t).map(function(r){return E.a.createElement(x,n()({key:r,queryKey:r,value:e.state.filters[r],path:e.props.path,location:e.props.location},t[r]))})),E.a.createElement("table",{className:"table table-grid"},E.a.createElement("thead",null,E.a.createElement("tr",null,this.props.columns)),E.a.createElement("tbody",null,this.state.loading?this.renderLoading():this.state.error?this.renderError():0===this.state.rows.length?this.renderNoResults():this.renderResults())),this.props.hasPagination&&this.state.pageLinks&&E.a.createElement(L.default,{pageLinks:this.state.pageLinks}))}});t.a=C}).call(this,r(48))},2314:function(e,t,r){"use strict";r.r(t);var a=r(11),n=r.n(a),s=r(0),o=r.n(s),i=r(46),l=r.n(i),u=r(17),c=r.n(u),p=r(2),h=r(37),m=r(325),d=r(1591),f=r(227),y=function(e){return l()(e).format("ll LTS")},g=c()({displayName:"GroupEventDetails",mixins:[h.default],getInitialState:function(){return{loading:!1}},onDelete:function(e){var t=this;this.setState({loading:!0}),this.api.request("/relays/".concat(e,"/"),{method:"DELETE",success:function(){t.setState({loading:!1})},error:function(){t.setState({loading:!1})}})},getRow:function(e){var t=this;return[o.a.createElement("td",null,o.a.createElement("strong",null,e.relayId)),o.a.createElement("td",null,e.publicKey),o.a.createElement("td",{style:{textAlign:"right"}},y(e.firstSeen)),o.a.createElement("td",{style:{textAlign:"right"}},y(e.lastSeen)),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement("span",{className:"editor-tools"},o.a.createElement(f.a,{className:"danger",title:"Remove",message:Object(p.t)("Are you sure you wish to delete this relay?"),onConfirm:function(){return t.onDelete(e.id)}},Object(p.t)("Remove"))))]},render:function(){var e=[o.a.createElement("th",{style:{width:350,textAlign:"left"}},"Relay"),o.a.createElement("th",null,"Public Key"),o.a.createElement("th",{style:{width:150,textAlign:"right"}},"First seen"),o.a.createElement("th",{style:{width:150,textAlign:"right"}},"Last seen"),o.a.createElement("th",null)];return o.a.createElement("div",null,o.a.createElement("h3",null,Object(p.t)("Relays")),o.a.createElement(d.a,n()({path:"/manage/relays/",endpoint:"/relays/",method:"GET",columns:e,columnsForRow:this.getRow,hasSearch:!1,sortOptions:[["firstSeen","First seen"],["lastSeen","Last seen"],["relayId","Relay ID"]],defaultSort:"firstSeen"},this.props)))}});t.default=Object(m.a)(g)}}]);
//# sourceMappingURL=AdminRelays.js.map