(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(10),r=n.n(s),a=(n(41),n(4)),o=n.n(a),i=n(7),u=n(5),l=(n(25),n(26),n(3)),d=n(6),j=n(77),h=n(78),m=n(17),b=n.n(m),p=n(0),O=function(e){var t=e.isOpen;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"hamburger",children:[Object(p.jsx)("div",{className:"burger burger1"}),Object(p.jsx)("div",{className:"burger burger2"}),Object(p.jsx)("div",{className:"burger burger3"})]}),Object(p.jsx)("style",{jsx:"true",children:"\n        // .hamburger {\n        //   width: 2rem;\n        //   height: 2rem;\n        //   display: flex;\n        //   justify-content: space-around;\n        //   flex-flow: column nowrap;\n        //   z-index: 10;\n        // }\n\n        .hamburger {\n          display: none;\n        }\n      \n        .burger {\n          width: 2rem;\n          height: 0.25rem;\n          border-radius: 10px;\n          background-color: white;\n          margin: 0.2rem;\n          transform-origin: 1px;\n          transition: all 0.3s linear;\n        }\n\n        .burger1 {\n          transform: ".concat(t?"rotate(45deg)":"rotate(0)",";\n        }\n\n        .burger2 {\n          transform: ").concat(t?"translateX(100%)":"translateX(0)",";\n          opacity: ").concat(t?0:1,";\n        }\n\n        .burger3 {\n          transform: ").concat(t?"rotate(-45deg)":"rotate(0)","\n        }\n        \n        @media (max-width: 767px) {\n          .hamburger {\n            // display: fixed;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            padding-top: 10px;\n            // margin-left: 10px;\n            z-index: 10;\n          }\n        }\n    ")})]})},g={color:"white",textDecoration:"none"},x=function(e){var t=e.handleHamburger,n=e.hamburgerOpen;return Object(p.jsxs)("div",{className:"navigation-container",children:[Object(p.jsxs)("div",{className:"navigation",children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)(l.b,{style:g,to:"/visimusic/about",onClick:t,className:"navigation__about",children:Object(p.jsx)("li",{children:"About us"})}),Object(p.jsx)(l.b,{style:g,to:"/visimusic/contact",onClick:t,children:Object(p.jsx)("li",{children:"Contact"})})]}),Object(p.jsx)("div",{className:"hamburger-container",onClick:t,children:Object(p.jsx)(O,{isOpen:n})})]}),Object(p.jsx)("style",{jsx:"true",children:"\n\n        .navigation-container {\n          position: absolute;\n          width: 50px;\n          margin: 0 0.5rem 0 0.5rem;\n        }\n\n        .navigation {\n          width: 100%;\n        }\n\n        .navigation ul {\n          display: ".concat(n?"inline":"none",";\n          color: white;\n          height: 100vh;\n          width: 25vw;\n          margin-top: 50px;\n          padding: 0;\n          position: absolute;\n        }\n        \n        .navigation ul li {\n          list-style-type: none;\n          // padding-right: 10px;\n        }\n\n        .hamburger-container {\n          margin: 0;\n          padding: 0;\n        }\n\n    ")})]})},f={color:"black",textDecoration:"none"},v=function(e){var t=e.username,n=e.handleBackground,c=(e.handleHamburger,e.setHamburgerOpen),s=function(){n({background:"#282727"}),c(!1)};return Object(p.jsx)(p.Fragment,{children:t?Object(p.jsx)(l.b,{style:f,to:"/visimusic/account",onClick:function(){s()},children:Object(p.jsxs)("div",{className:"header__login",children:[Object(p.jsx)("p",{className:"header__username",children:t}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#FFFFFF",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"})]})]})}):Object(p.jsx)(l.b,{style:f,to:"/visimusic/login",onClick:function(){s()},children:Object(p.jsx)("div",{className:"header__login",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#FFFFFF",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"})]})})})})},_=(n(33),{color:"black",textDecoration:"none"}),k=function(e){var t=e.cartProducts,n=e.handleBackground,c=e.setHamburgerOpen;return Object(p.jsxs)(l.b,{to:"/visimusic/cart",style:_,onClick:function(){n({background:"#282727"}),c(!1)},children:[t.length>0&&Object(p.jsx)("p",{className:"header__cart-num",children:t.length}),Object(p.jsx)("div",{className:"header__cart",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#FFFFFF",alt:"shopping cart icon",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})]})})]})},N=(n(49),{color:"black",textDecoration:"none"}),w=function(e){var t=e.handleProductState,n=e.cartProducts,c=e.username,s=e.headerBackground,r=e.handleBackground,a=e.handleHamburger,o=e.hamburgerOpen,i=e.setHamburgerOpen;return Object(p.jsx)("div",{className:"header",style:s,children:Object(p.jsxs)("div",{className:"header-container",children:[Object(p.jsx)(x,{handleHamburger:a,hamburgerOpen:o}),Object(p.jsx)(v,{username:c,handleBackground:r,setHamburgerOpen:i}),Object(p.jsx)(k,{cartProducts:n,username:c,handleBackground:r,setHamburgerOpen:i}),Object(p.jsx)(l.b,{style:N,to:"/visimusic",className:"header__logo",onClick:function(){t([]),i(!1)},children:Object(p.jsx)("img",{className:"header__logo--pic",src:"https://i.postimg.cc/43LH8zv1/logo-transparent-without-V.png",alt:"Visishop logo"})})]})})},C=(n(50),n(79)),S={color:"black",textDecoration:"none"},y=function(e){var t=e.handleOpen,n=e.handleClose,s=e.browseAnchorEl,r=e.handleFetchGroup,a=e.handleBackground,o=e.handleHeaderBackground,i=e.setHamburgerOpen,u=Boolean(s),d=function(e){r(e),n(null,null),a({background:"#282727"}),o({background:"#282727"}),i(!1)};return Object(c.useEffect)((function(){a({background:"no-repeat url('https://i.postimg.cc/D0nBd8h2/fiddle-background-edited-blur4.jpg')",backgroundSize:"cover"}),o({background:"transparent"})}),[]),Object(p.jsxs)("div",{className:"browse",children:[Object(p.jsxs)(C.a,{className:"browse__popover",anchorEl:s,open:u,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:[Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--headphones",onClick:function(){d("headphones")},children:Object(p.jsx)("span",{children:"Headphones"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--speakers",onClick:function(){d("speakers")},children:Object(p.jsx)("span",{children:"Speakers"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--speakers",onClick:function(){d("guitars")},children:Object(p.jsx)("span",{children:"Guitars"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--speakers",onClick:function(){d("violins")},children:Object(p.jsx)("span",{children:"Violins"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--speakers",onClick:function(){d("cellos")},children:Object(p.jsx)("span",{children:"Cellos"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--keyboards",onClick:function(){d("keyboards")},children:Object(p.jsx)("span",{children:"Keyboards"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--microphones",onClick:function(){d("microphones")},children:Object(p.jsx)("span",{children:"Microphones"})}),Object(p.jsx)(l.b,{style:S,to:"/visimusic/products",className:"browse__item browse__item--djcontrollers",onClick:function(){d("djcontrollers")},children:Object(p.jsx)("span",{children:"DJ Controllers"})}),Object(p.jsx)("button",{className:"browse__button-close",type:"button",onClick:n,children:"Close"})]}),Object(p.jsx)("button",{className:"browse__button",type:"button",onClick:function(e){t(e.target),i(!1)},children:"BROWSE PRODUCTS"}),Object(p.jsx)("div",{className:"landing-page-line"})]})},P=n(29),F=(n(51),function(e){var t=e.handleOpen,n=e.handleClose,s=e.recoAnchorEl,r=e.handleFetchAll,a=e.handleOptions,o=e.handleBackground,i=e.handleHeaderBackground,d=e.setHamburgerOpen,j=Object(c.useState)([]),h=Object(u.a)(j,2),m=h[0],b=h[1],O=function(e){var t=e.target.textContent.toLowerCase();m.includes(t)?b(m.filter((function(e){return e!==t}))):(a([].concat(Object(P.a)(m),[t])),b([].concat(Object(P.a)(m),[t]))),e.target.classList.toggle("selected")},g=Boolean(s);return Object(p.jsxs)("div",{className:"reco",children:[Object(p.jsxs)(C.a,{className:"reco__popover",anchorEl:s,open:g,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:[Object(p.jsx)("header",{className:"reco__header",children:"What are you looking for?"}),Object(p.jsx)("p",{className:"reco__description",children:"Choose one or more options"}),Object(p.jsx)("span",{className:"reco__option",onClick:O,children:"Home"}),Object(p.jsx)("span",{className:"reco__option",onClick:O,children:"Outdoor"}),Object(p.jsx)("span",{className:"reco__option",onClick:O,children:"Professional"}),Object(p.jsx)("span",{className:"reco__option",onClick:O,children:"Studio"}),Object(p.jsx)("span",{className:"reco__option",onClick:O,children:"Sport"}),m.length>0?Object(p.jsxs)(l.b,{to:"/visimusic/recommendation",className:"reco__button-searchcontainer",children:[" ",Object(p.jsx)("button",{className:"reco__button-search",onClick:function(){r(m),n(),o({background:"#282727"}),i({background:"#282727"}),d(!1)},children:"Search"})]}):Object(p.jsxs)("button",{className:"reco__button-search reco__button-searchcontainer",onClick:function(e){e.target.children[0].classList.add("validation-animation"),setTimeout((function(){e.target.children[0].classList.remove("validation-animation")}),2995)},children:[Object(p.jsx)("div",{className:"reco__button--warning",children:"Please select at least one option"}),"Search"]}),Object(p.jsx)("button",{className:"reco__button-close",onClick:function(){n(),b([])},children:"Close"})]}),Object(p.jsx)("button",{className:"reco__button",onClick:function(e){t(e.target),d(!1)},children:"CHOOSE SCENARIO"})]})}),H=n(14),B=n.n(H),E=function(e){var t=e.name,n=e.price,c=e.description,s=e.imgUrl,r=e.use,a=e.item,u=e.username,d=e.getCart,j=e.id,h=e.handleProductState,m=e.handleFetchSingle,b=e.setHamburgerOpen,O=c;!function(e){if(e.length>100){var t=e.match(/^[\d\D]{101}/);O=t+"..."}}(c);var g=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.idInCart=B()(),e.next=3,fetch("/visimusic/carts",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,item:a,method:"add"})});case 3:d(),t.target.children[0].classList.add("validation-animation"),setTimeout((function(){t.target.children[0].classList.remove("validation-animation")}),2980),console.log("".concat(a.name," added to the cart."));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e){switch(e){case"studio":"Best suited for a studio enviroment";break;case"home":"Best suited for a home enviroment";break;case"outdoors":"Best suited for outdoor activites";break;default:;}}(r);var x=function(){b(!1),h([]).then(m(j))};return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)(l.b,{to:"/visimusic/product",children:Object(p.jsx)("div",{className:"product__image-container",onClick:x,children:Object(p.jsx)("img",{className:"product__image",onLoad:function(e){e.target.height>240&&(e.target.height=240,e.target.width=180)},src:s,border:"0",alt:t})})}),Object(p.jsxs)("div",{className:"product__desc-container",children:[Object(p.jsx)("h3",{className:"product__name",children:t}),Object(p.jsx)("h3",{className:"product__desc",children:O}),Object(p.jsx)("h4",{className:"product__price",children:n}),Object(p.jsx)("div",{className:"product__desc-buttons"}),Object(p.jsxs)(l.b,{to:"/visimusic/product",children:[Object(p.jsx)("button",{onClick:x,className:"product__show-button",children:"Show"}),Object(p.jsx)("br",{})]}),u?Object(p.jsxs)("button",{onClick:g,className:"product__add-button",children:[Object(p.jsx)("div",{className:"product__item-added",children:"Added to cart"}),"Add to cart"]}):Object(p.jsx)(l.b,{to:"/visimusic/login",children:Object(p.jsx)("button",{className:"product__add-button",children:"Add to cart"})})]})]})},z=function(e){var t=e.products,n=e.cookies,s=e.username,r=e.getCart,a=e.handleFetchSingle,o=e.setProducts,i=e.handleProductState,u=e.setHamburgerOpen,l=(e.setPrevProductState,window.localStorage);return Object(c.useEffect)((function(){var e=l.getItem("products");o(JSON.parse(e))}),[]),t.map((function(e){return Object(p.jsx)(E,{id:e._id,name:e.name,price:e.price,use:e.use,specs:e.specs[0],description:e.description,imgUrl:e.img,item:e,cookies:n,username:s,getCart:r,handleFetchSingle:a,handleProductState:i,setHamburgerOpen:u},e._id)}))},T=(n(52),function(e){var t=e.productGroup,n=e.product,c=e.username,s=e.getCart,r=e.handleFetchSingle,a=e.setHamburgerOpen,u=[],d="",j=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.idInCart=B()(),e.next=3,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/carts"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,item:t,method:"add"})});case 3:s(),console.log("".concat(t.name," added to the cart."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"recoboard__groupheader",children:t}),Object(p.jsx)("section",{className:"recoboard__container",children:n.map((function(e){var t,n,s;return t=e.use[0],n=e.use[1],(s=e.use[2])?d="".concat(t,", ").concat(n,", ").concat(s,"."):n?d="".concat(t,", ").concat(n,"."):t&&(d="".concat(t,".")),u.includes(e)?null:(u.push(e),Object(p.jsxs)("article",{className:"recoproduct",children:[Object(p.jsx)(l.b,{to:"/visimusic/product",children:Object(p.jsx)("div",{onClick:function(){var t;t=e._id,a(!1),r(t)},className:"recoproduct__img-container",children:Object(p.jsx)("img",{className:"recoproduct__img",src:e.img,alt:e.name})})}),Object(p.jsx)("div",{className:"recoproduct__name",children:e.name}),Object(p.jsx)("div",{className:"recoproduct__use",children:d}),Object(p.jsx)("div",{className:"recoproduct__price",children:e.price}),c?Object(p.jsx)("button",{onClick:function(){return j(e)},className:"recoproduct__add",children:"Add to cart"}):Object(p.jsx)(l.b,{to:"/visimusic/login",children:Object(p.jsx)("button",{className:"recoproduct__add",children:"Add to cart"})})]},e._id))}))})]})}),D=function(e){var t=e.products,n=e.options,s=e.setProducts,r=e.setOptions,a=e.username,o=e.getCart,i=e.handleFetchSingle,u=e.setHamburgerOpen,l=(e.setPrevProductState,window.localStorage);Object(c.useEffect)((function(){var e=l.getItem("products"),t=l.getItem("options");if(t.length>2){var n=t.split(",");r(n)}s(JSON.parse(e))}),[]);var d=[];t.forEach((function(e){for(var t=0;t<e.use.length;t++)for(var c=0;c<n.length;c++)e.use[t]===n[c]&&d.push(e)}));var j="";n.forEach((function(e){return j+=e+", "}));var h=[],m={};d.forEach((function(e){h.includes(e.productGroup)||h.push(e.productGroup)})),h.forEach((function(e){m["".concat(e)]=[]})),d.forEach((function(e){Object.keys(m).includes(e.productGroup)&&m["".concat(e.productGroup)].push(e)}));var b={};for(var O in m){var g=m["".concat(O)].sort((function(e,t){return t.recRating-e.recRating}));b["".concat(O)]=g}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h3",{children:["Best options for ",j.replace(/, $/,".")]},B()()),Object.entries(b).map((function(e){return Object(p.jsx)(T,{productGroup:e[0],product:e[1],username:a,getCart:o,handleFetchSingle:i,setHamburgerOpen:u},B()())}))]})},L=(n(53),{color:"black",textDecoration:"none"}),A=function(e){var t=e.username,n=e.handleUsername,s=Object(c.useState)(""),r=Object(u.a)(s,2),a=r[0],j=r[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),O=m[0],g=m[1],x=function(e){"login__username"===e.target.className&&j(e.target.value),"login__password"===e.target.className&&g(e.target.value)},f=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:O})});case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,r=s.token,b.a.set("token",r),n(a),j(""),g(""),window.location.reload(!1),e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[t&&Object(p.jsx)(d.a,{to:"/visimusic"}),Object(p.jsxs)("section",{className:"login",children:[Object(p.jsx)("h2",{className:"login__header",children:"Login"}),Object(p.jsxs)("form",{className:"login__form",children:[Object(p.jsx)("input",{type:"text",placeholder:"username",className:"login__username",onChange:x}),Object(p.jsx)("input",{type:"password",placeholder:"password",className:"login__password",onChange:x}),Object(p.jsx)("input",{type:"submit",value:"Login",className:"login__button",onClick:f})]}),Object(p.jsx)(l.b,{style:L,to:"/visimusic/register",children:Object(p.jsxs)("div",{className:"login__register",children:["Not a member? ",Object(p.jsx)("div",{className:"login__register--signup",children:"Sign up!"})]})})]})]})},I=(n(54),function(e){var t=e.handleUserCookie,n=(e.cookies,e.thisUsername),s=Object(c.useState)(""),r=Object(u.a)(s,2),a=r[0],l=r[1],j=Object(c.useState)(""),h=Object(u.a)(j,2),m=h[0],O=h[1],g=Object(c.useState)(""),x=Object(u.a)(g,2),f=x[0],v=x[1],_=Object(c.useState)(""),k=Object(u.a)(_,2),N=k[0],w=k[1],C=function(){var e=Object(i.a)(o.a.mark((function e(n){var c,s,r,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:m,username:f,password:N})});case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,r=s.token,b.a.set("token",r),c.status,e.next=12,b.a.get("token");case 12:return i=e.sent,e.next=15,JSON.parse(atob(i.split(".")[1]));case 15:u=e.sent,t(u.username),l(""),O(""),v(""),w("");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){"register__name"===e.target.className&&l(e.target.value),"register__email"===e.target.className&&O(e.target.value),"register__username"===e.target.className&&v(e.target.value),"register__password"===e.target.className&&w(e.target.value)};return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(d.a,{to:"/visimusic"}),Object(p.jsxs)("section",{className:"register",children:[Object(p.jsx)("h2",{className:"register__header",children:"Sign up"}),Object(p.jsxs)("form",{className:"register__form",children:[Object(p.jsx)("input",{type:"text",placeholder:"name",className:"register__name",onChange:S,value:a}),Object(p.jsx)("input",{type:"text",placeholder:"email",className:"register__email",onChange:S,value:m}),Object(p.jsx)("input",{type:"text",placeholder:"username",className:"register__username",onChange:S,value:f}),Object(p.jsx)("input",{type:"password",placeholder:"password",className:"register__password",onChange:S,value:N}),Object(p.jsx)("input",{type:"submit",className:"register__button",value:"Create account",onClick:C})]})]})]})}),U=function(e){var t=e.name,n=e.item,c=e.username,s=e.getCart,r=e.handleFetchSingle,a=e.handleProductState,u=e.setHamburgerOpen,d=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/carts"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,item:n,method:"remove"})});case 2:s(),console.log("".concat(c,": ").concat(n.name," removed from your cart."));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("article",{className:"cart__product",children:[Object(p.jsx)(l.b,{to:"/visimusic/product",onClick:function(){u(!1),a([]).then(r(n._id))},children:Object(p.jsx)("div",{className:"cart__img-container",children:Object(p.jsx)("img",{className:"cart__img",src:n.img,alt:n.name})})}),Object(p.jsx)("div",{className:"cart__name",children:t}),Object(p.jsx)("div",{className:"cart__price",children:n.price}),Object(p.jsx)("button",{className:"cart__remove",onClick:d,children:"X"})]})},J={color:"white",textDecoration:"none"},M=function(e){var t=e.cartProducts,n=e.username,c=e.getCart,s=e.handleBackground,r=e.handleFetchSingle,a=e.handleProductState,o=e.setHamburgerOpen,i=[];t.forEach((function(e){var t=e.price.slice(0,-3);i.push(parseInt(t))}));var u=i.reduce((function(e,t){return e+t}),0);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"cart__title",children:"Cart"}),Object(p.jsx)("div",{className:"cart-board",children:t.map((function(e){return Object(p.jsx)(U,{name:e.name,item:e,username:n,getCart:c,handleFetchSingle:r,handleProductState:a,setHamburgerOpen:o},B()())}))}),Object(p.jsx)("h4",{className:"cart__total-amount-title",children:"total"}),Object(p.jsxs)("p",{className:"cart__total-amount",children:[u," SEK"]}),Object(p.jsx)(l.b,{style:J,to:"/visimusic/checkout",className:"checkout__link",onClick:function(){s({background:"#282727"})},children:Object(p.jsx)("button",{className:"checkout__link-button",children:"Checkout"})})]})},G=(n(55),function(e){var t=e.handleLogout,n=e.cookies,s=e.name,r=e.username,a=e.email,o=Object(c.useState)(""),i=Object(u.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){if(r){var e=s[0].toUpperCase(),t=s.slice(1,s.length);j(e+t)}}),[r]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"account-info",children:[Object(p.jsxs)("h2",{className:"account-info__name",children:["Hi, ",l]}),Object(p.jsx)("div",{className:"account-info__username--title",children:"username"}),Object(p.jsx)("div",{className:"account-info__username",children:r}),Object(p.jsx)("div",{className:"account-info__email--title",children:"email"}),Object(p.jsx)("div",{className:"account-info__email",children:a})]}),Object(p.jsx)("button",{onClick:function(){t(),window.location.reload(!1)},className:"logout-button",children:"Logout"}),!n.token&&Object(p.jsx)(d.a,{to:"/visimusic"})]})}),R=(n(56),function(e){var t=e.handleBackground,n=e.handleHeaderBackground;return Object(c.useEffect)((function(){t({background:"no-repeat url('https://i.postimg.cc/D0nBd8h2/fiddle-background-edited-blur4.jpg')",backgroundSize:"cover"}),n({background:"transparent"})}),[]),Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsx)("h2",{className:"contact__title",children:"Contact"}),Object(p.jsxs)("article",{className:"contact__content",children:[Object(p.jsx)("p",{children:"If you want to see your products in our platform, please reach us at:"}),Object(p.jsx)("p",{children:"contact@visimusicshop.com"})]})]})}),V=(n(57),function(e){var t=e.handleBackground,n=e.handleHeaderBackground;return Object(c.useEffect)((function(){t({background:"no-repeat url('https://i.postimg.cc/D0nBd8h2/fiddle-background-edited-blur4.jpg')",backgroundSize:"cover"}),n({background:"transparent"})}),[]),Object(p.jsxs)("div",{className:"about",children:[Object(p.jsx)("h2",{className:"about__title",children:"About our shop"}),Object(p.jsxs)("article",{className:"about__content",children:[Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis arcu mauris, eu posuere diam tempor at. Praesent ut tempus quam. Nullam at vehicula erat, et consequat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus tincidunt tempus diam, quis feugiat nisl. Integer est libero, faucibus eget tortor ac, condimentum gravida tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum, lorem consectetur viverra tincidunt, tellus ipsum viverra elit, quis vehicula leo mi non odio."})," ",Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"Development team:"}),Object(p.jsx)("p",{children:"Ricardo Leit\xe3o Pedro"}),Object(p.jsx)("p",{children:"Samuel Ekholm"})]})]})}),q=(n(58),function(e){var t,n,s,r,a,u,d=e.products,j=e.setProducts,h=e.username,m=e.getCart,b=e.handleHeaderBackground,O=window.localStorage;Object(c.useEffect)((function(){var e=O.getItem("products");j(JSON.parse(e)),b({background:"#282727"})}),[]),d.length>0&&(t=d[0],n=d[0].name,s=d[0].price,r=d[0].description,a=d[0].img,u=d[0].specs[0]);var g=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.idInCart=B()(),e.next=3,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/carts"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:h,item:t,method:"add"})});case 3:m(),console.log("".concat(t.name," added to the cart."));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d.length>0?Object(p.jsxs)("div",{className:"single-product",children:[Object(p.jsx)("div",{className:"single-product__image-container",children:Object(p.jsx)("img",{className:"single-product__image",src:a,border:"0",alt:n})}),Object(p.jsx)("h3",{className:"single-product__name",children:n}),Object(p.jsx)("p",{className:"single-product__price",children:s}),h?Object(p.jsx)("button",{onClick:g,className:"single-product__add-button",children:"ADD TO CART"}):Object(p.jsx)(l.b,{to:"/visimusic/login",children:Object(p.jsx)("button",{className:"single-product__add-button",children:"ADD TO CART"})}),Object(p.jsxs)("div",{className:"single-product__desc-container",children:[Object(p.jsx)("p",{className:"single-product__desc",children:r}),Object.entries(u).map((function(e){return Object(p.jsxs)("div",{className:"single-product__specs",children:[Object(p.jsx)("p",{className:"single-product__specs-title",children:e[0]}),Object(p.jsx)("p",{className:"single-product__specs-desc",children:e[1]})]},B()())}))]})]}):null}),K=(n(59),function(e){var t=e.cartProducts,n=[];t.forEach((function(e){var t=e.price.slice(0,-3);n.push(parseInt(t))}));var c=n.reduce((function(e,t){return e+t}),0);return Object(p.jsxs)("div",{className:"checkout",children:[Object(p.jsx)("h3",{className:"checkout__title",children:"Checkout"}),Object(p.jsx)("p",{style:{fontWeight:"bold"},children:"purchase"}),t.map((function(e){return Object(p.jsxs)("div",{className:"checkout__product",children:[Object(p.jsx)("span",{className:"checkout__product-name",children:e.name}),Object(p.jsx)("span",{className:"checkout__product-price",children:e.price})]},e.idInCart)})),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"checkout__total-amount-title",children:"total"}),Object(p.jsxs)("p",{className:"checkout__total-amount",children:[c," SEK"]})]}),Object(p.jsxs)("section",{className:"address",children:[Object(p.jsx)("p",{className:"checkout__address-title",children:"Please enter your delivery address below:"}),Object(p.jsxs)("form",{className:"address__form",children:[Object(p.jsx)("input",{type:"text",placeholder:"street and number",className:"address__street"}),Object(p.jsx)("input",{type:"text",placeholder:"postal code",className:"address__postal"}),Object(p.jsx)("input",{type:"text",placeholder:"city",className:"address__city"})]}),Object(p.jsxs)("button",{className:"checkout__pay-button",onClick:function(e){e.target.children[0].classList.add("validation-animation"),setTimeout((function(){e.target.children[0].classList.remove("validation-animation")}),2995)},children:["To payment",Object(p.jsx)("div",{className:"validation-message",children:"Coming soon!"})]})]})]})}),W=function(e){e.prevProductState,e.handleProductState;var t=Object(d.f)();return Object(p.jsx)("div",{className:"backbutton",onClick:function(){return t.goBack()}})},X=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),a=Object(u.a)(r,2),m=a[0],O=a[1],g=Object(c.useState)([]),x=Object(u.a)(g,2),f=x[0],v=x[1],_=Object(c.useState)([]),k=Object(u.a)(_,2),N=k[0],C=k[1],S=Object(c.useState)([]),P=Object(u.a)(S,2),H=P[0],B=P[1],E=Object(c.useState)(""),T=Object(u.a)(E,2),L=T[0],U=T[1],J=Object(c.useState)(""),X=Object(u.a)(J,2),$=X[0],Q=X[1],Y=Object(c.useState)(""),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(c.useState)({background:"#282727"}),ce=Object(u.a)(ne,2),se=ce[0],re=ce[1],ae=Object(c.useState)({background:"#282727"}),oe=Object(u.a)(ae,2),ie=oe[0],ue=oe[1],le=Object(j.a)(["token"]),de=Object(u.a)(le,3),je=de[0],he=de[1],me=de[2],be=Object(c.useState)(!1),pe=Object(u.a)(be,2),Oe=pe[0],ge=pe[1],xe=Object(c.useState)([]),fe=Object(u.a)(xe,2),ve=fe[0],_e=fe[1],ke=window.localStorage;Object(c.useEffect)((function(){ke.setItem("products",JSON.stringify(f))}),[f]),Object(c.useEffect)((function(){ke.setItem("options",N)}),[N]);var Ne=function(e){C(e)},we=function(){b.a.remove("token"),b.a.remove("user"),me("token")},Ce=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!je.token){e.next=12;break}return e.next=3,JSON.parse(atob(je.token.split(".")[1]));case 3:return t=e.sent,n=t.username,e.next=7,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/carts/").concat(n),{method:"GET"});case 7:return c=e.sent,e.next=10,c.json();case 10:s=e.sent,B(s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(je.token){var e=JSON.parse(atob(je.token.split(".")[1]));U(e.username),te(e.email),Q(e.name),Ce()}}),[je]);var Se=function(e){"browse__button"===e.className&&s(e),"reco__button"===e.className&&O(e)},ye=function(){s(null),O(null)},Pe=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/products/productGroup/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,v(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(t),e.next=3,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/products"));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,v(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://samsserver.herokuapp.com","/visimusic/products/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,v(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(e){he("user",e)},ze=function(e){U(e)},Te=function(e){re(e)},De=function(e){ue(e)};return Object(p.jsx)("div",{className:"app-container",style:se,children:Object(p.jsx)(h.a,{children:Object(p.jsx)(l.a,{children:Object(p.jsxs)("main",{className:"main-content",children:[Object(p.jsx)(w,{handleProductState:Be,cookies:je,cartProducts:H,username:L,getCart:Ce,headerBackground:ie,handleBackground:Te,hamburgerOpen:Oe,handleHamburger:function(){ge(!Oe)},setHamburgerOpen:ge}),Object(p.jsx)(d.b,{exact:!0,path:"/visimusic",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{handleOpen:Se,handleClose:ye,handleFetchGroup:Pe,browseAnchorEl:n,handleBackground:Te,handleHeaderBackground:De,setHamburgerOpen:ge}),Object(p.jsx)(F,{handleOpen:Se,handleClose:ye,handleFetchAll:Fe,recoAnchorEl:m,handleOptions:Ne,handleBackground:Te,handleHeaderBackground:De,setHamburgerOpen:ge}),Object(p.jsx)("h1",{className:"app-title",children:"VisiMusic"})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/products",render:function(){return Object(p.jsxs)("section",{className:"product-board",children:[Object(p.jsx)(W,{handleProductState:Be,prevProductState:ve}),Object(p.jsx)(z,{products:f,cookies:je,username:L,getCart:Ce,handleFetchSingle:He,setProducts:v,handleProductState:Be,setHamburgerOpen:ge,setPrevProductState:_e})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/recommendation",render:function(){return Object(p.jsxs)("section",{className:"recoboard",children:[Object(p.jsx)(W,{handleProductState:Be,prevProductState:ve}),Object(p.jsx)(D,{products:f,options:N,setProducts:v,setOptions:C,username:L,getCart:Ce,handleFetchSingle:He,setHamburgerOpen:ge,setPrevProductState:_e})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/login",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(A,{handleUserCookie:Ee,cookies:je,username:L,handleUsername:ze,getCart:Ce})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/register",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(I,{handleUserCookie:Ee,cookies:je,thisUsername:L})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/cart",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(M,{username:L,cartProducts:H,getCart:Ce,handleBackground:Te,handleFetchSingle:He,handleProductState:Be,setHamburgerOpen:ge})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/account",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(G,{handleLogout:we,cookies:je,username:L,email:ee,name:$})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/checkout",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(K,{cartProducts:H})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/contact",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(R,{handleBackground:Te,handleHeaderBackground:De})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/about",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{}),Object(p.jsx)(V,{handleBackground:Te,handleHeaderBackground:De})]})}}),Object(p.jsx)(d.b,{path:"/visimusic/product",render:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(W,{handleProductState:Be,prevProductState:ve}),Object(p.jsx)(q,{products:f,setProducts:v,username:L,getCart:Ce,handleHeaderBackground:De})]})}})]})})})})};r.a.render(Object(p.jsx)(X,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.19ed4478.chunk.js.map