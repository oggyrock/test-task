(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(4),l=n.n(r),u=(n(10),n(2));n(11);var j=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),j=l[0],i=l[1],b=Object(a.useState)(""),o=Object(u.a)(b,2),h=o[0],p=o[1],O=Object(a.useState)(""),x=Object(u.a)(O,2),d=x[0],m=x[1],f=Object(a.useState)(!0),v=Object(u.a)(f,2),g=v[0],N=v[1],k=Object(a.useState)(!0),S=Object(u.a)(k,2),y=S[0],C=S[1];Object(a.useEffect)((function(){fetch("https://venbest-test.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var w=n.filter((function(e){return e.name.includes(j)&&e.lastname.includes(h)&&(e.age===+d||""===d)&&(e.sex===(g&&"m")||e.sex===(y&&"f"))}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{className:"title",children:"Filter for people from API"}),Object(c.jsxs)("div",{className:"filterbox",children:[Object(c.jsx)("input",{type:"text",className:"input",placeholder:"\u0418\u043c\u044f",value:j,onChange:function(e){var t=e.target;return i(t.value)}}),Object(c.jsx)("input",{type:"text",className:"input",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:h,onChange:function(e){var t=e.target;return p(t.value)}}),Object(c.jsx)("input",{type:"text",className:"input",placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",value:d,onChange:function(e){var t=e.target;return m(t.value)}}),Object(c.jsxs)("div",{className:"checkboxes",children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:g,onChange:function(){return N(!g)}}),"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:y,onChange:function(){return C(!y)}}),"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"]})]})]}),w.map((function(e){return Object(c.jsxs)("div",{className:"person",children:[Object(c.jsx)("span",{className:"name",children:e.name}),Object(c.jsx)("span",{className:"lastname",children:e.lastname}),Object(c.jsx)("span",{className:"age",children:e.age}),Object(c.jsx)("span",{className:"sex",children:"m"===e.sex?"\u041c\u0443\u0436\u0447\u0438\u043d\u0430":"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"})]},e.lastname)}))]})};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c9a6f363.chunk.js.map