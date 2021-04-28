(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{208:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(67),s=c.n(o),r=(c(76),c(6)),l=(c(77),c(71)),i=c(0),j=function(e){return Object(i.jsx)("div",{className:"table",children:Object(i.jsx)(l.a,{data:{labels:e.label.map((function(e){return e.substr(0,10)})),datasets:[{label:"Corona Virus across the country",data:e.yAxis,fill:!0,backgroundColor:"rgb(255, 99, 132, 0.5)",borderColor:"rgba(255, 99, 132, 0.7)"}]}})})},b=c(70),u=c.n(b).a.create({baseURL:"https://api.covid19api.com/"}),d=c(23),h=c.n(d),O=function(e){var t=e.totalConfirmed,c=e.totalRecovered,a=e.totalDeaths,n=e.country;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"country",style:{textTransform:"capitalize",color:"Grey"},children:""===n?"World Wide Corona Report":n})}),Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("div",{className:"confirm",children:[Object(i.jsx)("span",{style:{color:"white",opacity:"0.85"},children:"Total Confirmed"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{style:{color:"white"},children:Object(i.jsx)(h.a,{separator:",",end:t})})]}),Object(i.jsxs)("div",{className:"recover",children:[Object(i.jsx)("span",{style:{color:"white",opacity:"0.85"},children:"Total Recovered"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{style:{color:"white"},children:[" ",Object(i.jsx)(h.a,{separator:",",end:c})]})]}),Object(i.jsxs)("div",{className:"death",children:[Object(i.jsx)("span",{style:{color:"white",opacity:"0.85"},children:"Total Deaths"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{style:{color:"white"},children:Object(i.jsx)(h.a,{separator:",",end:a})})]})]})]})})};var v=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(0),s=Object(r.a)(o,2),l=s[0],b=s[1],d=Object(a.useState)(0),h=Object(r.a)(d,2),v=h[0],x=h[1],f=Object(a.useState)({}),g=Object(r.a)(f,2),p=g[0],m=g[1],y=Object(a.useState)(7),C=Object(r.a)(y,2),D=C[0],T=C[1],S=Object(a.useState)(""),w=Object(r.a)(S,2),N=w[0],R=w[1],L=Object(a.useState)([]),F=Object(r.a)(L,2),k=F[0],A=F[1],E=Object(a.useState)([]),G=Object(r.a)(E,2),I=G[0],B=G[1];Object(a.useEffect)((function(){document.title="Covid19 Tracker"}),[]),Object(a.useEffect)((function(){u.get("/summary").then((function(e){200===e.status&&(n(e.data.Global.TotalConfirmed),b(e.data.Global.NewRecovered),x(e.data.Global.TotalDeaths),m(e.data)),console.log(e)})).catch((function(e){console.log(e)}))}),[]);var J=function(e,t,c){u.get("/country/".concat(e,"/status/confirmed?from=").concat(t,"T00:00:00Z&to=").concat(c,"T00:00:00Z")).then((function(t){console.log(t);var c=t.data.map((function(e){return e.Cases})),a=t.data.map((function(e){return e.Date})),o=p.Countries.find((function(t){return t.Slug===e}));A(c),n(o.TotalConfirmed),b(o.TotalRecovered),x(o.TotalDeaths),B(a)})).catch((function(e){console.log(e)}))},M=function(e){var t=new Date(e),c=t.getFullYear(),a="".concat(t.getMonth()+1),n=t.getDate();return"".concat(c,"-").concat(a,"-").concat(n)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h2",{className:"covid",style:{color:"#fd7e99"},children:"COVID-19 TRACKER"}),Object(i.jsx)(O,{totalConfirmed:c,totalRecovered:l,totalDeaths:v,country:N}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{value:N,onChange:function(e){R(e.target.value);var t=new Date,c=M(t),a=M(t.setDate(t.getDate()-D));console.log(a,c),J(e.target.value,a,c)},children:[Object(i.jsx)("option",{value:"",children:"Select Country"}),p.Countries&&p.Countries.map((function(e){return Object(i.jsx)("option",{value:e.Slug,children:e.Country},e.Slug)}))]}),Object(i.jsxs)("select",{value:D,onChange:function(e){T(e.target.value);var t=new Date,c=M(t),a=M(t.setDate(t.getDate()-e.target.value));J(N,a,c)},children:[Object(i.jsx)("option",{value:"7",children:"Last 7 Days"}),Object(i.jsx)("option",{value:"30",children:"Last 30 Days"}),Object(i.jsx)("option",{value:"90",children:"Last 90 Days"})]})]}),Object(i.jsx)(j,{yAxis:k,label:I})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,209)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),o(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),x()},76:function(e,t,c){},77:function(e,t,c){}},[[208,1,2]]]);
//# sourceMappingURL=main.e1319e10.chunk.js.map