(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[0],{206:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),d=n(69),r=n.n(d),o=(n(79),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,d=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),d(t),r(t)}))}),u=n(2),s=n(4),j=(n(40),n(0));function l(t){var e=t.withdrawMoney,n=t.handleWithdraw,c=t.withdraw;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Withdraw"})}),Object(j.jsxs)("h3",{children:["Amount: $",c]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Quick Cash"}),Object(j.jsxs)("div",{id:"addStuff",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return e(20)},children:"$20"}),Object(j.jsx)("button",{onClick:function(){return e(80)},children:"$80"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return e(40)},children:"$40"}),Object(j.jsx)("button",{onClick:function(){return e(100)},children:"$100"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return e(60)},children:"$60"}),Object(j.jsx)("button",{onClick:function(){return e(200)},children:"$200"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"number",id:"withdraw",onChange:n}),Object(j.jsx)("button",{onClick:function(){return e(Number(document.getElementById("withdraw").value))},children:"Other Amount"})]})]})]})]})}function a(t){var e=t.handleDeposit,n=t.depositMoney,c=t.deposit;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Deposit"}),Object(j.jsxs)("h3",{children:["Amount: $",c]}),Object(j.jsx)("input",{type:"number",id:"deposit",onChange:e}),Object(j.jsx)("button",{type:"button",onClick:n,children:"Deposit"})]})}var b=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],i=e[1],d=Object(c.useState)(0),r=Object(s.a)(d,2),o=r[0],b=r[1],h=Object(c.useState)(0),O=Object(s.a)(h,2),x=O[0],w=O[1],v=Object(c.useState)([]),m=Object(s.a)(v,2),g=m[0],y=m[1],p=Object(c.useState)(!1),f=Object(s.a)(p,2),C=f[0],k=f[1],B=Object(c.useState)(!1),I=Object(s.a)(B,2),E=I[0],S=I[1],$=function(t){"red"===t.target.style.backgroundColor?(t.target.style.backgroundColor="white",k(!1),S(!1)):(t.target.style.backgroundColor="red",t.target===document.getElementById("withdrawBtn")&&"red"===document.getElementById("withdrawBtn").style.backgroundColor?(document.getElementById("depositBtn").style.backgroundColor="white",k(!0),S(!1)):(document.getElementById("depositBtn").style.backgroundColor="red",document.getElementById("withdrawBtn").style.backgroundColor="white",k(!1),S(!0)))},D=g.map((function(t){return Object(j.jsx)("li",{children:JSON.stringify(t)})}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:["Account Balance: $",n]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Would you like to"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:$,id:"withdrawBtn",children:"Withdraw"}),Object(j.jsx)("button",{onClick:$,id:"depositBtn",children:"Deposit"}),"?"]}),C&&Object(j.jsx)(l,{withdrawMoney:function(t){if(n-t<0)return alert("You don't have the funds!");var e=n-t;b(t),i(e),y([].concat(Object(u.a)(g),[{withdraw:t,account:e}])),document.getElementById("withdraw").value=0},handleWithdraw:function(){var t=document.getElementById("withdraw").value;b(t)},withdraw:o}),E&&Object(j.jsx)(a,{depositMoney:function(){var t=Number(document.getElementById("deposit").value),e=n+t;i(e),y([].concat(Object(u.a)(g),[{deposit:t,account:e}])),w(0),document.getElementById("deposit").value=0},handleDeposit:function(){var t=document.getElementById("deposit").value;w(t)},deposit:x}),Object(j.jsx)("div",{id:"history",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("h3",{children:"Account History"}),D]})})]})]})};n(38),n(70),n(71),n(74);r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),o()},40:function(t,e,n){},79:function(t,e,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.4534a02d.chunk.js.map