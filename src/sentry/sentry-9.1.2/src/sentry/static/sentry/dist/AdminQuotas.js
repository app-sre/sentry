(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1620:function(e,t,a){"use strict";var n=a(26),i=a.n(n),s=a(44),r=a.n(s),l=a(1),o=a.n(l),c=a(0),u=a.n(c),d=a(17),h=a.n(d),p=a(37),m=a(347),f=a(53),g=a(33);t.a=h()({displayName:"internalStatChart",propTypes:{since:o.a.number.isRequired,resolution:o.a.string.isRequired,stat:o.a.string.isRequired,label:o.a.string,height:o.a.number},mixins:[p.default],getDefaultProps:function(){return{height:150}},getInitialState:function(){return{error:!1,loading:!0,data:null}},componentWillMount:function(){this.fetchData()},componentWillReceiveProps:function(e){r()(e,this.props)||this.setState({loading:!0},this.fetchData)},shouldComponentUpdate:function(e,t){return this.state.loading!==t.loading},fetchData:function(){var e=this;this.api.request("/internal/stats/",{method:"GET",data:{since:this.props.since,resolution:this.props.resolution,key:this.props.stat},success:function(t){e.setState({data:t,loading:!1,error:!1})},error:function(t){e.setState({error:!0})}})},getChartPoints:function(){return this.state.data.map(function(e){var t=i()(e,2);return{x:t[0],y:t[1]}})},render:function(){return this.state.loading?u.a.createElement(g.default,null):this.state.error?u.a.createElement(f.default,{onRetry:this.fetchData}):u.a.createElement(m.default,{points:this.getChartPoints(),className:"standard-barchart",label:this.props.label,height:this.props.height})}})},2318:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return D});var n=a(12),i=a.n(n),s=a(4),r=a.n(s),l=a(6),o=a.n(l),c=a(7),u=a.n(c),d=a(5),h=a.n(d),p=a(96),m=a.n(p),f=a(8),g=a.n(f),v=a(0),E=a.n(v),b=a(153),y=a(41),x=a(1620),D=function(e){function t(){return r()(this,t),u()(this,h()(t).apply(this,arguments))}return g()(t,e),o()(t,[{key:"getDefaultState",value:function(){return i()({},m()(h()(t.prototype),"getDefaultState",this).call(this),{since:(new Date).getTime()/1e3-604800,resolution:"1h"})}},{key:"getEndpoints",value:function(){return[["config","/internal/quotas/"]]}},{key:"renderBody",value:function(){var e=this.state.config;return E.a.createElement("div",null,E.a.createElement("h3",null,"Quotas"),E.a.createElement("div",{className:"box"},E.a.createElement("div",{className:"box-header"},E.a.createElement("h4",null,"Config")),E.a.createElement("div",{className:"box-content with-padding"},E.a.createElement(y.TextField,{value:e.backend,label:"Backend",disabled:!0}),E.a.createElement(y.TextField,{value:e.options["system.rate-limit"],label:"Rate Limit",disabled:!0}))),E.a.createElement("div",{className:"box"},E.a.createElement("div",{className:"box-header"},E.a.createElement("h4",null,"Total Events")),E.a.createElement(x.a,{since:this.state.since,resolution:this.state.resolution,stat:"events.total",label:"Events"})),E.a.createElement("div",{className:"box"},E.a.createElement("div",{className:"box-header"},E.a.createElement("h4",null,"Dropped Events")),E.a.createElement(x.a,{since:this.state.since,resolution:this.state.resolution,stat:"events.dropped",label:"Events"})))}}]),t}(b.default)}}]);
//# sourceMappingURL=AdminQuotas.js.map