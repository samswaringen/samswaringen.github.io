(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a.p+"static/media/temple.7ccd322d.png"},148:function(e,t,a){e.exports=a(455)},152:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),o=(a(152),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,456)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})}),i=a(44),s=a(14),m=(a(98),a(153),a(142)),u=a.n(m),d=a(4);var E=function(e){var t=e.deposit,a=e.withdraw,l=Object(n.useContext)(H),r=l.accounts,o=l.user,i=[];return"withdraw"===a&&""===t?r[o].accountHistory.map(function(e){e.withdraw&&i.push(e)}):"deposit"===t&&""===a?r[o].accountHistory.map(function(e){e.deposit&&i.push(e)}):i=r[o].accountHistory,c.a.createElement("div",{className:"recent-trans"},i.length<5?i.map(function(e){return e.deposit?c.a.createElement("div",null,"Deposited: $".concat(e.deposit," | New Balance: $").concat(e.account)):c.a.createElement("div",null,"Withdraw: $".concat(e.withdraw," | New Balance: $").concat(e.account))}):i.slice(i.length-5,i.length).map(function(e){return e.deposit?c.a.createElement("div",null,"Deposited: $".concat(e.deposit," | New Balance: $").concat(e.account)):c.a.createElement("div",null,"Withdraw: $".concat(e.withdraw," | New Balance: $").concat(e.account))}))};var v=function(){var e=Object(n.useContext)(H),t=e.withdraw,a=e.accounts,l=e.user,r=Object(d.f)();return c.a.createElement("div",{id:"withdraw-div"},c.a.createElement("h2",{className:"account-balance"},"Account Balance",c.a.createElement("br",null),c.a.createElement("span",{className:"balance-amount"},"$",a[l].accountBalance.toLocaleString("en-us"))),c.a.createElement("h3",null,"Withdraw Amount: ",c.a.createElement("span",{className:"balance-amount"},"$",t)),c.a.createElement("button",{onClick:function(){r.push("/components/QuickCash")}},"Quick Cash"),c.a.createElement("button",{onClick:function(){r.push("/components/OtherWithdraw")}},"Other Amount"),c.a.createElement("div",null,"Recent Withdrawals",c.a.createElement(E,{deposit:"",withdraw:"withdraw"})))};var b=function(){var e=Object(n.useContext)(H),t=e.deposit,a=e.setDeposit,l=e.accounts,r=e.setAccounts,o=e.user;return c.a.createElement("div",{id:"deposit-div"},c.a.createElement("h2",{className:"account-balance"},"Account Balance",c.a.createElement("br",null),c.a.createElement("span",{className:"balance-amount"},"$",l[o].accountBalance.toLocaleString("en-us"))),c.a.createElement("div",{id:"deposit-amount-div"},c.a.createElement("h3",null,"Deposit Amount: ",c.a.createElement("span",{className:"balance-amount"},"$",t)),c.a.createElement("input",{type:"number",id:"deposit",onChange:function(){var e=document.getElementById("deposit").value;a(e)}}),c.a.createElement("button",{type:"button",id:"deposit-button",onClick:function(){var e=Number(document.getElementById("deposit").value),t=l[o].accountBalance+e;r(l,l[o].accountBalance=t),r(l,l[o].accountHistory.push({deposit:e.toLocaleString("en-us"),account:t.toLocaleString("en-us")})),console.log(l[o].accountHistory),a(0),document.getElementById("deposit").value=0}},"Deposit")),c.a.createElement("div",{id:"recent-deposit"},"Recent deposits ",c.a.createElement(E,{deposit:"deposit",withdraw:""})))},p=a(13),h=a(36);var w=function(){var e=Object(n.useContext)(H),t=e.isVerified,a=e.selected,l=e.setSelected,r=e.selectedDiv,o=e.setSelectedDiv,i=function(e){var t=e.target.innerHTML,n="".concat(e.target.innerHTML.toLowerCase(),"-nav-div");document.getElementById(a)?(document.getElementById(n).classList.add("title-background"),document.getElementById(r).classList.remove("title-background"),document.getElementById(a).classList.remove("marble"),document.getElementById(t).classList.add("marble"),document.getElementById(a).classList.remove("black-border-bottom"),document.getElementById(t).classList.add("black-border-bottom"),l(t),o(n)):(l("Home"),o("home-nav-div"))};return Object(n.useEffect)(function(){document.getElementById("Home").classList.add("marble"),document.getElementById("Home").classList.add("black-border-bottom")},[]),c.a.createElement("div",{id:"navbar-div"},c.a.createElement(h.a,{id:"nav-component",fill:!0,variant:"tabs",defaultActiveKey:"/home"},c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/Home",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Home"},c.a.createElement("div",{id:"home-nav-div"},"Home")))),!t&&c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/CreateAccount",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Create Account"},c.a.createElement("div",{id:"create account-nav-div"},"Create Account")))),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/Withdraw",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Withdraw"},c.a.createElement("div",{id:"withdraw-nav-div"},"Withdraw")))),c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/Deposit",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Deposit"},c.a.createElement("div",{id:"deposit-nav-div"},"Deposit")))),c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/AccountHistory",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Account History"},c.a.createElement("div",{id:"account history-nav-div"},"Account History")))),c.a.createElement(h.a.Item,null,c.a.createElement(p.b,{to:"/components/Logout",onClick:i},c.a.createElement("div",{className:"nav-title",id:"Logout"},c.a.createElement("div",{id:"logout-nav-div"},"Logout")))))))},y=a(71);var g=function(){var e=Object(n.useContext)(H),t=e.pinCode,a=e.setPinCode,l=e.pin,r=e.accountBalance,o=e.setAccountBalance,i=e.accountHistory,m=e.setAccountHistory,u=e.setIsVerified,d=Object(n.useState)(""),E=Object(s.a)(d,2),v=E[0],b=E[1],p=function(e){var n=v.length,c=Array(n).fill("*");c.push(e.target.value),b(Object(y.a)(c)),a([].concat(Object(y.a)(t),[e.target.value]))};return c.a.createElement("div",null,c.a.createElement("div",{id:"inner-verification"},c.a.createElement("div",{id:"verification-title"},c.a.createElement("h2",{id:"pin-title"},"Enter Pin")),c.a.createElement("div",{id:"pin-display"},c.a.createElement("h3",null,v)),c.a.createElement("div",{id:"keypad"},c.a.createElement("div",{className:"grid-row"},c.a.createElement("button",{key:"1",className:"keypad-btn",onClick:p,value:"1"},"1"),c.a.createElement("button",{key:"2",className:"keypad-btn",onClick:p,value:"2"},"2"),c.a.createElement("button",{key:"3",className:"keypad-btn",onClick:p,value:"3"},"3")),c.a.createElement("div",{className:"grid-row"},c.a.createElement("button",{key:"4",className:"keypad-btn",onClick:p,value:"4"},"4"),c.a.createElement("button",{key:"5",className:"keypad-btn",onClick:p,value:"5"},"5"),c.a.createElement("button",{key:"6",className:"keypad-btn",onClick:p,value:"6"},"6")),c.a.createElement("div",{className:"grid-row"},c.a.createElement("button",{key:"7",className:"keypad-btn",onClick:p,value:"7"},"7"),c.a.createElement("button",{key:"8",className:"keypad-btn",onClick:p,value:"8"},"8"),c.a.createElement("button",{key:"9",className:"keypad-btn",onClick:p,value:"9"},"9")),c.a.createElement("div",{className:"grid-row"},c.a.createElement("button",{key:"clear",className:"keypad-btn",onClick:function(){b(""),a([])}},"Clear"),c.a.createElement("button",{key:"0",className:"keypad-btn",onClick:p,value:"0"},"0"),c.a.createElement("button",{key:"<",className:"keypad-btn",onClick:function(){b(v.slice(0,v.length-1)),a(Object(y.a)(t.slice(0,t.length-1)))}},"<")),c.a.createElement("div",{id:"submit-pin"},c.a.createElement("button",{id:"submit-btn",onClick:function(){t.length<4?(document.getElementById("pin-title").innerHTML="Pin must be 4 or More",document.getElementById("pin-title").style.color="red"):(u(!0),r[l]?console.log(r[l]):o(r,r[l]=0),i[l]?console.log(i[l]):m(i,i[l]=[]),console.log(i),b(""))}},"Submit")))))};var f=function(){var e=Object(n.useContext)(H),t=e.accounts,a=e.user;return c.a.createElement("div",{className:"history-item"},t[a].accountHistory.map(function(e){return e.withdraw?c.a.createElement("li",{style:{color:"red"}},"Withdrew ",c.a.createElement("strong",null,"$",e.withdraw)," | New Balance:",c.a.createElement("strong",null,"$",e.account)):c.a.createElement("li",{style:{color:"green"}},"Deposited ",c.a.createElement("strong",null,"$",e.deposit)," | New Balance:",c.a.createElement("strong",null,"$",e.account))}))};var k=function(){return c.a.createElement("div",{key:"history",id:"history"},c.a.createElement("h3",{id:"history-title"},"Account History"),c.a.createElement("ul",{id:"history-list"},c.a.createElement(f,null)))},C=a(5),N=function(){var e=Object(n.useContext)(H),t=e.setIsVerified,a=e.accounts,l=e.setUser,r=e.setSelectedDiv,o=e.setSelected;return c.a.createElement("div",{id:"signin-form"},c.a.createElement(C.d,{initialValues:{username:"",password:""},onSubmit:function(e){console.log("values:",e),l(e.username),a[e.username].password===e.password?t(!0):alert("wrong password"),document.getElementById("home-nav-div").classList.add("title-background"),r("home-nav-div"),o("Home")},validate:function(e){var t={};return e.username||(t.username="Required"),a[e.username]||(t.username="Account doesn't exist"),e.password?e.password.length<8&&(t.password="Password must be 8 or More Characters"):t.password="Required",t}},c.a.createElement("div",{id:"sign-in"},c.a.createElement("h3",null,"Sign In"),c.a.createElement(C.c,null,c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"username",type:"input",placeholder:"Enter Username"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"username"}))),c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"password",type:"input",placeholder:"Enter Password"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"password"}))),c.a.createElement("button",{type:"submit"},"Submit")))))};var B=function(){var e=Object(n.useContext)(H),t=e.accounts,a=e.user,l=e.isVerified,r=Object(d.f)();return Object(n.useEffect)(function(){!l&&document.getElementById("home-nav-div").classList.add("title-background")},[]),c.a.createElement("div",null,l?c.a.createElement("div",{id:"home-div"},c.a.createElement("h1",{id:"greeting"},"Hello ",t[a].name,"!"),c.a.createElement("h2",{id:"account-balance"},"Account Balance",c.a.createElement("br",null),c.a.createElement("span",{className:"balance-amount"},"$",t[a].accountBalance.toLocaleString("en-us"))),c.a.createElement("button",{id:"quickcash-shortcut",onClick:function(){r.push("/components/QuickCash")}},"Quick Cash"),c.a.createElement("div",{id:"recent-transactions"},"Recent Transactions ",c.a.createElement(E,{withdraw:"withdraw",deposit:"deposit"}))):c.a.createElement("div",{id:"home-unverified"},c.a.createElement("h2",{id:"welcome"},"Welcome to the React Banking System"),c.a.createElement(N,null)))};a(164);var O=function(){var e=Object(n.useContext)(H),t=e.accounts,a=e.setAccounts,l=e.setSelectedDiv,r=Object(d.f)();return c.a.createElement("div",{id:"signup-form"},c.a.createElement(C.d,{initialValues:{username:"",name:"",email:"",password:"",verifyPassword:""},onSubmit:function(e){console.log("values:",e),a(t,t[e.username]={email:e.email,name:e.name,password:e.password,accountBalance:0,accountHistory:[]}),document.getElementById("home-nav-div").classList.add("title-background"),document.getElementById("Home").classList.add("marble"),document.getElementById("Home").classList.add("black-border-bottom"),document.getElementById("create account-nav-div").classList.remove("title-background"),document.getElementById("Create Account").classList.remove("marble"),document.getElementById("Create Account").classList.remove("black-border-bottom"),l("home-nav-div"),r.push("/components/Success")},validate:function(e){var a={};return e.username?t[e.username]&&(a.username="Username already exists!"):a.username="Required",e.name||(a.name="Required"),e.email?/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{2,4}$/.test(e.email)||(a.email="Not a valid email"):a.email="Required",e.password?e.password.length<8&&(a.password="Password must be 8 or More Characters"):a.password="Required",e.password?e.password!=e.verifyPassword&&(a.verifyPassword="Passwords don't match!"):a.verifyPassword="Required",a}},function(e){return c.a.createElement("div",{id:"sign-up"},c.a.createElement("h2",{id:"create-title"},"Create Account"),c.a.createElement(C.c,null,c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"username",type:"input",placeholder:"Create Username"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"username"}),c.a.createElement(C.a,{name:"checkUser"}))),c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"name",type:"input",placeholder:"Greeting Name"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"name"}))),c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"email",type:"email",placeholder:"Enter Email"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"email"}))),c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"password",type:"input",placeholder:"Create Password"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"password"}))),c.a.createElement("div",{className:"field-div"},c.a.createElement(C.b,{name:"verifyPassword",type:"input",placeholder:"Verify Password"}),c.a.createElement("div",{className:"error"},c.a.createElement(C.a,{name:"verifyPassword"}))),c.a.createElement("button",{type:"submit",disabled:!(e.dirty&&e.isValid)},"Submit")))}))};var j=function(){var e=Object(n.useContext)(H),t=e.setIsVerified,a=e.setSelectedDiv,l=e.setSelected,r=Object(d.f)();return a("home-nav-div"),l("Home"),t(!1),document.getElementById("Home").classList.add("marble"),document.getElementById("home-nav-div").classList.add("title-background"),setTimeout(function(){r.push("/components/Home")},3e3),c.a.createElement("div",null,"Youve Been Logged out")};var S=function(){var e=Object(n.useContext)(H),t=e.setWithdraw,a=e.accounts,l=e.setAccounts,r=e.user,o=Object(n.useState)(0),i=Object(s.a)(o,2),m=i[0],u=i[1],d=function(e){var n=e.target.value;if(a[r].accountBalance-n<0)return alert("You don't have the funds!");var c=m-n;l(a,a[r].accountBalance=c),l(a,a[r].accountHistory.push({withdraw:n.toLocaleString("en-us"),account:c.toLocaleString("en-us")})),t(n),u(c)};return Object(n.useEffect)(function(){u(a[r].accountBalance)},[]),c.a.createElement("div",{id:"addStuff"},c.a.createElement("h2",{className:"account-balance"},"Account Balance",c.a.createElement("br",null),c.a.createElement("span",{className:"balance-amount"},"$",m.toLocaleString("en-us"))),c.a.createElement("div",null,c.a.createElement("button",{className:"quick-btn",value:"20",onClick:d},"$20"),c.a.createElement("button",{className:"quick-btn",value:"80",onClick:d},"$80")),c.a.createElement("div",null,c.a.createElement("button",{className:"quick-btn",value:"40",onClick:d},"$40"),c.a.createElement("button",{className:"quick-btn",value:"100",onClick:d},"$100")),c.a.createElement("div",null,c.a.createElement("button",{className:"quick-btn",value:"60",onClick:d},"$60"),c.a.createElement("button",{className:"quick-btn",value:"200",onClick:d},"$200")),c.a.createElement("div",null,"Quick Cash"),c.a.createElement("div",null,"Recent Withdrawals",c.a.createElement(E,{deposit:"",withdraw:"withdraw"})))};var I=function(){var e=Object(n.useContext)(H),t=e.setWithdraw,a=e.accounts,l=e.setAccounts,r=e.user;return c.a.createElement("div",null,c.a.createElement("h2",{className:"account-balance"},"Account Balance",c.a.createElement("br",null),c.a.createElement("span",{className:"balance-amount"},"$",a[r].accountBalance.toLocaleString("en-us"))),c.a.createElement("div",{id:"other-withdraw"},c.a.createElement("input",{type:"number",id:"withdraw",onChange:function(){var e=document.getElementById("withdraw").value;t(e)}}),c.a.createElement("button",{id:"other-button",onClick:function(){return function(e){if(a[r].accountBalance-e<0)return alert("You don't have the funds!");var n=a[r].accountBalance-e;l(a,a[r].accountBalance=n),l(a,a[r].accountHistory.push({withdraw:e.toLocaleString("en-us"),account:n.toLocaleString("en-us")})),t(e),document.getElementById("withdraw").value=0}(Number(document.getElementById("withdraw").value))}},"Other Amount")),c.a.createElement("div",null,"Recent Withdrawals",c.a.createElement(E,{deposit:"",withdraw:"withdraw"})))};var A=function(){var e=Object(d.f)();return setTimeout(function(){e.push("/components/Home")},3e3),c.a.createElement("div",null,"Success!",c.a.createElement("br",null),"Redirecting to Sign In...")},L=a(147),H=c.a.createContext();var $=function(){var e,t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),E=m[0],h=m[1],y=Object(n.useState)({}),f=Object(s.a)(y,2),C=f[0],N=f[1],$=Object(n.useState)(0),D=Object(s.a)($,2),P=D[0],x=D[1],W=Object(n.useState)(0),R=Object(s.a)(W,2),q=R[0],V=R[1],T=Object(n.useState)({}),M=Object(s.a)(T,2),Q=M[0],U=M[1],F=Object(n.useState)(!1),z=Object(s.a)(F,2),Y=z[0],Z=z[1],J=Object(n.useState)("Home"),K=Object(s.a)(J,2),G=K[0],X=K[1],_=Object(n.useState)("home-nav-div"),ee=Object(s.a)(_,2),te=ee[0],ae=ee[1];return c.a.createElement(p.a,null,c.a.createElement("div",{id:"brick-wall"},c.a.createElement(L.a,{id:"atm-screen-div"},c.a.createElement("img",{src:u.a,id:"temple"}),c.a.createElement("div",{id:"atm-title"},"REACT BANK ATM"),c.a.createElement(H.Provider,{value:{isVerified:Y,selected:G,setSelected:X,selectedDiv:te,setSelectedDiv:ae}},c.a.createElement(w,null)),c.a.createElement(H.Provider,{value:(e={accounts:l,setAccounts:r,user:E,setUser:h,withdraw:P,setWithdraw:x,deposit:q,setDeposit:V,isVerified:Y,setIsVerified:Z,accountBalance:C,setAccountBalance:N},Object(i.a)(e,"setAccountBalance",N),Object(i.a)(e,"accountHistory",Q),Object(i.a)(e,"setAccountHistory",U),Object(i.a)(e,"setSelected",X),Object(i.a)(e,"setSelectedDiv",ae),e)},c.a.createElement("div",{id:"atm-screen"},c.a.createElement("div",{id:"interactive"},c.a.createElement(d.b,{exact:!0,path:""},c.a.createElement(d.a,{to:"/components/Home"})),c.a.createElement(d.b,{exact:!0,path:"/"},c.a.createElement(d.a,{to:"/components/Home"})),c.a.createElement(d.b,{path:"/components/EnterPin"},c.a.createElement(g,null)),c.a.createElement(d.b,{path:"/components/Home"},c.a.createElement(B,null)),c.a.createElement(d.b,{path:"/components/CreateAccount"},c.a.createElement(O,null)),c.a.createElement(d.b,{path:"/components/Success"},c.a.createElement(A,null)),c.a.createElement(d.b,{path:"/components/Withdraw"},c.a.createElement(v,null)),c.a.createElement(d.b,{path:"/components/QuickCash"},c.a.createElement(S,null)),c.a.createElement(d.b,{path:"/components/OtherWithdraw"},c.a.createElement(I,null)),c.a.createElement(d.b,{path:"/components/Deposit"},c.a.createElement(b,null)),c.a.createElement(d.b,{path:"/components/AccountHistory"},c.a.createElement(k,null)),c.a.createElement(d.b,{path:"/components/Logout"},c.a.createElement(j,null))))))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($,null)),document.getElementById("root")),o()},98:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.2c9799c7.chunk.js.map