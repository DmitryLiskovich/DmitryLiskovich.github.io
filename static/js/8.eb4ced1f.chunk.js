(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{121:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(43),r=a.n(n),l=a(37),c=a(44),s=a(9),i=a(0),o=a.n(i),u=(a(121),a(54)),m=a.n(u),f=a(15);function p(){document.title="Contact";var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],u=Object(i.useState)({message:"",status:!0}),p=Object(s.a)(u,2),b=p[0],d=p[1];function E(){return(E=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!localStorage.getItem("dateOfSend")){e.next=5;break}if(!(Date.now()-localStorage.getItem("dateOfSend")<12e5)){e.next=5;break}return d({message:"Fail, Try in ".concat(Math.ceil(20-(Date.now()-+localStorage.getItem("dateOfSend"))/6e4)," min "),status:!1}),e.abrupt("return");case 5:return n(!0),e.prev=6,e.next=9,m.a.post("https://rocky-reef-68087.herokuapp.com/email",{text:t.target.emailText.value,them:t.target.emailSubject.value});case 9:200===e.sent.status&&(window.localStorage.setItem("dateOfSend",Date.now()),d(Object(l.a)({},b,{message:"Success, Thank you",status:!0}))),n(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),n(!1);case 17:case"end":return e.stop()}},e,null,[[6,14]])}))).apply(this,arguments)}return o.a.createElement("div",{className:"contact"},a?o.a.createElement(f.a,null):"",o.a.createElement("div",{className:"contact-image"}),o.a.createElement("div",{className:"contact-form"},o.a.createElement("form",{onSubmit:function(e){return E.apply(this,arguments)}},o.a.createElement("label",null,"Enter your theme"),o.a.createElement("br",null),o.a.createElement("input",{required:!0,type:"text",name:"emailSubject",className:"form-control z-depth-1",rows:"3",placeholder:"Write your them"}),o.a.createElement("br",null),o.a.createElement("label",null,"Enter your message"),o.a.createElement("br",null),o.a.createElement("textarea",{type:"textarea",name:"emailText",className:"form-control z-depth-1",rows:"3",placeholder:"Write your message"}),o.a.createElement("br",null),o.a.createElement("input",{className:"submitButton",type:"submit",color:"info",value:"Send"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",{style:{color:b.status?"green":"red",fontStyle:"italic",textAlign:"center"}},b.message),o.a.createElement("div",{className:"underline"}),o.a.createElement("ul",{className:"contact-list"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://vk.com/shine_a_light_lis"},o.a.createElement("i",{className:"fab fa-vk"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/dmitry-liskovich-175470174/"},o.a.createElement("i",{className:"fab fa-linkedin-in"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/DmitryLiskovich"},o.a.createElement("i",{className:"fab fa-github-alt"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"skype:dimalisko"},o.a.createElement("i",{className:"fab fa-skype"})))))))}},37:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach(function(t){n(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}a.d(t,"a",function(){return l})}}]);
//# sourceMappingURL=8.eb4ced1f.chunk.js.map