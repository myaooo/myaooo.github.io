(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{H0SL:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("cMU6");return{page:e.default||e}}])},KDze:function(e,t,a){"use strict";a.d(t,"a",function(){return y});var n=a("kOwS"),r=a("0iUn"),l=a("sLSF"),c=a("MI3g"),i=a("a7VT"),s=a("Tit0"),u=a("q1tI"),m=a.n(u),o=a("DlQD"),d=a.n(o),p=(a("n25B"),a("zzrc")),E=a("wd/R"),f=a("fh6R"),b=a("L6NH");a("O5Kp");function h(e,t){var a=E(e,E.ISO_8601,!1);return a.isValid()?a.format("MMM YYYY"):t}function v(e){var t=e.experience,a=e.detail,n=t.job;return t.advisor&&(n="".concat(n," (advised by ").concat(t.advisor,")")),m.a.createElement("tr",null,m.a.createElement("td",{className:"date"},m.a.createElement("span",{className:"date-from"},h(t.from,t.from)),m.a.createElement("span",{className:"date-to"},h(t.to,t.to))),m.a.createElement("td",{className:"content"},m.a.createElement("span",{className:"institute",dangerouslySetInnerHTML:{__html:Object(b.a)(t.company)}}),t.location,m.a.createElement("br",null),m.a.createElement("span",{className:"title",dangerouslySetInnerHTML:{__html:Object(b.a)(n)}}),t.department&&m.a.createElement(m.a.Fragment,null,", ",m.a.createElement("span",{className:"department",dangerouslySetInnerHTML:{__html:Object(b.a)(t.department)}})),a&&t.content&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:d()(t.content)}}))))}var _=function(e){function t(){return Object(r.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.experiences,n=e.detail;return m.a.createElement(p.a,{id:"experiences"},m.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(b.a)(t)}}),a&&m.a.createElement("table",{className:"experiences"},m.a.createElement("tbody",null,a.map(function(e,t){return m.a.createElement(v,{experience:e,detail:n,key:t})}))))}}]),t}(m.a.Component);function y(e){var t=f.a.experience||[];return m.a.createElement(_,Object(n.a)({title:"Research / Work Experience",experiences:t},e))}},Wc4G:function(e,t,a){"use strict";var n=a("qNsG"),r=a("q1tI"),l=a.n(r),c=(a("4/Qh"),a("L6NH"));function i(e){var t=e.publication;return l.a.createElement("div",{className:"pub mb-4"},l.a.createElement("div",{className:"shadow-sm rounded px-3 py-1 row no-gutters"},l.a.createElement("div",{className:"pub-teaser-container mx-auto col-10 col-md-3 col-sm-4 py-2"},t.teaser?l.a.createElement("img",{src:Object(c.b)(".".concat(t.teaser)),className:"pub-teaser"}):l.a.createElement("a",null,l.a.createElement("p",{className:"pub-teaser",dangerouslySetInnerHTML:{__html:t.short&&Object(c.a)(t.short)||""}}))),l.a.createElement("div",{className:"pub-info col-12 col-md-9 col-sm-8 py-2"},l.a.createElement("h5",null,l.a.createElement("a",{href:t.link,className:"pub-title",dangerouslySetInnerHTML:{__html:Object(c.a)(t.title)}})),l.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(c.a).join(", ")+"."}}),l.a.createElement("div",{className:"pub-venue"},l.a.createElement("span",null,l.a.createElement("span",{className:"pub-venue-type"},t.venue.tag),t.venue.title,", ",t.date,t.note&&l.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(t.note)}}),".")),l.a.createElement("div",null,l.a.createElement("ul",null,t.resources.map(function(e,t){return l.a.createElement("li",{key:t,className:"pub-resource"},l.a.createElement("a",{href:e.url},e.type))}))))))}function s(e){var t=e.publication;return l.a.createElement("div",{className:"pub mt-3 mb-1"},l.a.createElement("div",{className:"pub-info"},l.a.createElement("h5",null,l.a.createElement("span",{className:"pub-title",dangerouslySetInnerHTML:{__html:Object(c.a)(t.title)}})),l.a.createElement("div",{className:"pub-author",dangerouslySetInnerHTML:{__html:t.authors.map(c.a).join(", ")+"."}}),l.a.createElement("div",{className:"pub-venue"},l.a.createElement("span",null,l.a.createElement("i",null,t.venue.title),", ",t.date,t.note&&l.a.createElement("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(t.note)}}),"."))))}t.a=function(e){var t=e.detail,a=Object(n.a)(e,["detail"]),r=t?i:s;return l.a.createElement(r,a)}},cMU6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("2nGb"),c=a("0iUn"),i=a("sLSF"),s=a("MI3g"),u=a("a7VT"),m=a("Tit0"),o=a("L6Je"),d=a("kOwS"),p=a("DlQD"),E=a.n(p),f=(a("X3CP"),a("xdRC"));function b(e){var t=e.info;return r.a.createElement("section",{className:"m-info",id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-5 col-8 mx-auto mt-2",style:{textAlign:"center"}},r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("a",{href:t.profile_img},r.a.createElement("img",{src:t.profile_img,alt:""}))),r.a.createElement("div",{className:"mt-2"},r.a.createElement(f.a,{detail:!0}))),r.a.createElement("div",{className:"col-lg-9 col-md-8 col-sm-7 col-12"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:E.a.inlineLexer(t.full_name,[])}}),t.job_title&&r.a.createElement("h5",{dangerouslySetInnerHTML:{__html:E.a.inlineLexer(t.job_title,[])}}),t.headline&&r.a.createElement("h5",{dangerouslySetInnerHTML:{__html:E.a.inlineLexer(t.headline,[])}}),t.affiliation&&r.a.createElement("h5",{dangerouslySetInnerHTML:{__html:E.a.inlineLexer(t.affiliation,[])}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E()(t.about)}})))))}var h=Object(l.b)(function(e){var t=e.config.info;return r.a.createElement(b,Object(d.a)({info:t},e))}),v=a("zrwo"),_=a("fh6R"),y=(a("n25B"),a("zzrc")),N=a("wd/R"),g=N().subtract(12,"months"),j=function(e){function t(){return Object(c.default)(this,t),Object(s.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.news;return r.a.createElement(y.a,{id:"news"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:E()(t)}}),r.a.createElement("ul",{className:"news"},a.map(function(e){return Object(v.a)({},e,{date:N(e.date)})}).sort(function(e,t){return t.date-e.date}).slice(0,8).filter(function(e){return e.date>g}).map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"news-date"},e.date.format("MMM YYYY"),".  "),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:E.a.inlineLexer(e.content,[])}}))})))}}]),t}(r.a.Component);function O(e){var t=_.a.news||[];return r.a.createElement(j,Object(d.a)({title:"News",news:t},e))}a("blYf");var w=a("L6NH"),L=a("Wc4G");function S(e){var t=e.publications,a=e.title,l=e.description,c=e.isSubCategory;return r.a.createElement(n.Fragment,null,c?r.a.createElement("h5",null,a):r.a.createElement("h4",null,a),l&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(w.a)(l)}}),t&&t.length>0&&r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(L.a,{publication:e,key:t,detail:!0})})))}function M(e){var t=e.research,a=e.papers,l=e.title,c=e.description,i={};return a.forEach(function(e){return i[e.name]=e}),r.a.createElement("section",{id:"research"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,l||"Research"),c&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:Object(w.a)(c)}}),t.map(function(e,t){return r.a.createElement(n.Fragment,{key:t},r.a.createElement(S,{title:e.title,description:e.description,publications:e.publications&&e.publications.map(function(e){return i[e]})}),e.categories&&e.categories.map(function(e,t){return r.a.createElement(S,{key:t,title:"".concat(t+1,". ").concat(e.title),description:e.description,publications:e.publications&&e.publications.map(function(e){return i[e]}),isSubCategory:!0})}))})))}function I(e){var t=_.a.research||[],a=_.a.papers||[];return r.a.createElement(M,Object(d.a)({title:"Featured Research",research:t,papers:a},e))}var T=a("KDze"),H=a("rbqd"),k=function(e){function t(){return Object(c.default)(this,t),Object(s.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(T.a,null),r.a.createElement(H.a,null))}}]),t}(r.a.Component);t.default=function(){return n.createElement(k,{config:l.a})}},rbqd:function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a("kOwS"),r=a("0iUn"),l=a("sLSF"),c=a("MI3g"),i=a("a7VT"),s=a("Tit0"),u=a("q1tI"),m=a.n(u),o=a("DlQD"),d=a.n(o),p=(a("n25B"),a("zzrc")),E=a("wd/R"),f=a("fh6R"),b=a("L6NH");a("jdU2");function h(e){var t,a,n,r=e.award;return m.a.createElement("tr",null,m.a.createElement("td",{className:"date"},m.a.createElement("span",{className:"award-date"},(t=r.date,a=r.date,(n=E(t,E.ISO_8601,!1)).isValid()?n.format("YYYY"):a))),m.a.createElement("td",{className:"content"},m.a.createElement("span",{className:"award-name",dangerouslySetInnerHTML:{__html:Object(b.a)(r.name)}}),r.content&&m.a.createElement(m.a.Fragment,null,m.a.createElement("br",null),m.a.createElement("div",{className:"award-content",dangerouslySetInnerHTML:{__html:d()(r.content)}}))))}var v=function(e){function t(){return Object(r.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.awards;return m.a.createElement(p.a,{id:"awards"},m.a.createElement("h2",{dangerouslySetInnerHTML:{__html:Object(b.a)(t)}}),a&&m.a.createElement("table",{className:"awards"},m.a.createElement("tbody",null,a.map(function(e,t){return m.a.createElement(h,{award:e,key:t})}))))}}]),t}(m.a.Component);function _(e){var t=f.a.awards||[];return m.a.createElement(v,Object(n.a)({title:"Honors and Awards",awards:t},e))}},zzrc:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("qNsG"),r=a("q1tI"),l=a.n(r);function c(e){var t=e.children,a=Object(n.a)(e,["children"]);return l.a.createElement("section",a,l.a.createElement("div",{className:"container"},t))}}},[["H0SL","5d41","9da1","ad9d"]]]);