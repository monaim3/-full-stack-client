(this["webpackJsonprock-valley"]=this["webpackJsonprock-valley"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},81:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(39),a=c.n(r),s=(c(49),c(4)),o=(c(50),c(9)),i=c(6),l=c(40),d=c.n(l),j=c(25),b=(c(69),c(1)),u=function(){var e=Object(j.a)(),t=e.register,c=e.handleSubmit,r=(e.watch,e.errors),a=Object(n.useState)({}),o=Object(s.a)(a,2),i=o[0],l=o[1];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("div",{className:"rock",children:Object(b.jsx)("h3",{children:"Add Product"})})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsx)("div",{className:" d-flex justify-content-center text-center",children:Object(b.jsxs)("form",{className:"",action:"",onSubmit:c((function(e){var t={name:e.name,weight:e.weight,img:i,price:e.price,key:e.key};fetch("http://localhost:5000/addProduct",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e&&alert("Your Product has been added successfully")}))})),children:[Object(b.jsx)("label",{className:"col-form-label",children:Object(b.jsx)("b",{children:"Product Name :"})}),Object(b.jsx)("input",{className:"form-control ",name:"name",placeholder:"Enter product name",defaultValue:"",ref:t({required:!0})}),r.title&&Object(b.jsx)("span",{className:"error",children:"Name is required"}),Object(b.jsx)("label",{className:"col-form-label",children:Object(b.jsx)("b",{children:"Product Price :"})}),Object(b.jsx)("input",{className:"form-control",name:"price",placeholder:"Enter product price",defaultValue:"",ref:t({required:!0})}),r.price&&Object(b.jsx)("span",{className:"error",children:"Price is required"}),Object(b.jsx)("label",{className:"col-form-label",children:Object(b.jsx)("b",{children:"Product No :"})}),Object(b.jsx)("input",{className:"form-control",name:"key",defaultValue:"",placeholder:"Enter product No.",ref:t({required:!0})}),r.key&&Object(b.jsx)("span",{className:"error",children:"**Product No. is required to show your products on UI**"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{className:"col-form-label",children:Object(b.jsx)("b",{children:"Upload Product Image :"})}),Object(b.jsx)("input",{className:"form-control",name:"img",placeholder:"Upload Image",type:"file",onChange:function(e){var t=new FormData;t.set("key","51e0ee40006994fc21dafaa450445f33"),t.append("image",e.target.files[0]),d.a.post("https://api.imgbb.com/1/upload",t).then((function(e){l(e.data.data.display_url)})).catch((function(e){console.log(e)}))}}),r.img&&Object(b.jsx)("span",{className:"error",children:"Image is required"}),Object(b.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})})})]})})},h=(c.p,c(71),function(){var e=Object(n.useContext)(Y),t=Object(s.a)(e,2),c=t[0];t[1];return Object(b.jsxs)("nav",{className:"container navbar navbar-expand-lg navbar-light bg-transparent mb-5",children:[Object(b.jsx)(o.b,{to:"/home",children:Object(b.jsx)("h3",{children:"Rock Valley"})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{to:"/home",className:"nav-link",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{to:"/order",className:"nav-link",children:"Order"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{to:"/admin",className:"nav-link",children:"Admin"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{to:"/deals",className:"nav-link",children:"Deals"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{to:"/login",className:"nav-link",children:c.isSignedIn?Object(b.jsx)("img",{style:{height:"20px",width:"20px"},src:c.photo,alt:""}):Object(b.jsx)("span",{className:"btn btn-primary",children:"Log In"})})})]})})]})}),m=c(5),O=c(24),f=function(e){console.log(e);var t=e.product,c=t.img,n=t.price,r=t.name;return Object(b.jsx)("div",{className:"col-md-4 d-flex justify-content-center mb-3",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:c,alt:""}),Object(b.jsx)("div",{className:"card-body d-flex justify-content-around",children:Object(b.jsx)("p",{style:{fontWeight:"bold"},children:r})}),Object(b.jsxs)("div",{className:"card-footer d-flex justify-content-around",children:[Object(b.jsxs)("p",{style:{fontWeight:"bold"},children:["$ ",n]}),!0===e.showAddToCart&&Object(b.jsx)(o.b,{to:"/order",children:Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.handleAddProduct(e.product)},children:"BUY NOW"})})]})]})})},p=function(e){var t=e.cart;console.log(e.cart);for(var c=0,n=0;n<t.length;n++){var r=t[n];console.log(r.price,r.quantity),c=c+r.price*r.quantity||1}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Total Price: ",c]}),Object(b.jsx)("br",{}),e.children]})},x=function(){var e=function(){var e=N.getItem("userId");if(e)return e;var t="user-"+(new Date).getTime();return N.setItem("userId",t),t}();return"freValley/carts/".concat(e)},v=function(){var e=x(),t=g.getItem(e)||"{}";return JSON.parse(t)},g=window.localStorage||function(){var e={};return{getItem:function(t){return e[t]},setItem:function(t,c){e[t]=c.toString()},clear:function(){e={}}}}(),N=window.sessionStorage||function(){var e={};return{getItem:function(t){return e[t]},setItem:function(t,c){e[t]=c.toString()},clear:function(){e={}}}}(),y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),o=Object(s.a)(a,2),i=o[0],l=o[1];Object(n.useEffect)((function(){fetch("http://localhost:5000/products").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(n.useEffect)((function(){var e=v(),t=Object.keys(e);fetch("http://localhost:5000/productsByKeys",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);var d=function(e){var t,c=e.key,n=i.find((function(e){return e.key===c})),r=1;if(n){r=n.quantity+1,n.quantity=r;var a=i.filter((function(e){return e.key!==c}));t=[].concat(Object(m.a)(a),[n])}else e.quantity=1,t=[].concat(Object(m.a)(i),[e]);l(t),function(e,t){var c=v();c[e]=t,g.setItem(x(),JSON.stringify(c))}(e.key,r)};return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:c.map((function(e){return Object(b.jsx)(f,{showAddToCart:!0,handleAddProduct:d,product:e},e.key)}))})})},k=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{className:"text-center text-danger",children:"Sorry, page not found !!!"})})},S=function(e){console.log(e);var t=e.product,c=t.price,n=(t.quantity,t.key),r=t.name;return Object(b.jsxs)("div",{className:"container col-md-12 d-flex justify-content-between border-bottom ",children:[Object(b.jsx)("p",{className:"col-md-3",children:r}),Object(b.jsx)("p",{className:"col-md-3",children:"1"}),Object(b.jsxs)("p",{className:"col-md-3",children:[" $ ",c]}),Object(b.jsx)("button",{className:"btn btn-dark col-md-3",onClick:function(){return e.removeProduct(n)},children:"Remove "})]})},w=c.p+"static/media/giphy.46a86830.gif",P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),l=o[0],d=(o[1],Object(i.g)()),j=function(e){var t=c.filter((function(t){return t.key!==e}));r(t),function(e){var t=v();delete t[e],g.setItem(x(),JSON.stringify(t))}(e)};return Object(n.useEffect)((function(){var e=v(),t=Object.keys(e);fetch("http://localhost:5000/productsByKeys",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),l&&Object(b.jsx)("img",{src:w,alt:""}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{style:{color:"rgb(54,57,88)"},className:"col-md-12 mb-5",children:"Checkout"}),Object(b.jsxs)("div",{className:"col-md-12 d-flex justify-content-between border-bottom",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Name"})})}),Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Quantity"})})}),Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Price"})})}),Object(b.jsx)("div",{className:"col-md-3",children:" Delete"})]}),c.map((function(e){return Object(b.jsx)(S,{removeProduct:j,product:e},e.key)})),Object(b.jsx)("div",{className:"text-right col-md-12",children:Object(b.jsx)(p,{cart:c,children:Object(b.jsx)("button",{onClick:function(){d.push("/checkout")},className:"btn btn-primary mt-5  ",children:"Checkout"})})})]})},I=function(){var e=Object(i.i)().productKey,t=Object(n.useState)({}),c=Object(s.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/product/"+e).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]),Object(b.jsxs)("div",{className:"container justify-content-center",children:[Object(b.jsx)("h1",{className:" text-center mb-5",children:"Your Product Details."}),Object(b.jsx)(f,{showAddToCart:!1,product:r})]})},q=c(21),C=(c(81),function(){var e=Object(j.a)(),t=e.register,c=e.handleSubmit,r=e.watch,a=e.errors,o=Object(n.useContext)(Y),i=Object(s.a)(o,2),l=i[0];i[1];return console.log(r("example")),Object(b.jsx)("div",{className:"container d-flex justify-content-center text-center",children:Object(b.jsxs)("form",{className:"ship-form",onSubmit:c((function(e){var t=v(),c=Object(q.a)(Object(q.a)({},l),{},{products:t,checkout:e,orderTime:new Date});fetch("http://localhost:5000/addOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e&&(g.removeItem(x()),alert("your order has been placed successfully"))}))})),children:[Object(b.jsx)("input",{name:"name",defaultValue:l.name,ref:t({required:!0}),placeholder:"Your Name"}),a.name&&Object(b.jsx)("span",{className:"error",children:"Name is required"}),Object(b.jsx)("input",{name:"email",defaultValue:l.email,ref:t({required:!0}),placeholder:"Your Email"}),a.email&&Object(b.jsx)("span",{className:"error",children:"Email is required"}),Object(b.jsx)("input",{name:"address",ref:t({required:!0}),placeholder:"Your Address"}),a.address&&Object(b.jsx)("span",{className:"error",children:"Address is required"}),Object(b.jsx)("input",{name:"phone",ref:t({required:!0}),placeholder:"Your Phone Number"}),a.phone&&Object(b.jsx)("span",{className:"error",children:"Phone Number is required"}),Object(b.jsx)("button",{className:"btn btn-primary mt-4",type:"submit",children:"Place Order"})]})})}),T=c(42),A=c(17),E=(c(82),{apiKey:"AIzaSyAw3PSZOR07dkMtXZ7ei_Wp7mbz8_i925c",authDomain:"rock-valley-8e0f7.firebaseapp.com",projectId:"rock-valley-8e0f7",storageBucket:"rock-valley-8e0f7.appspot.com",messagingSenderId:"344295859269",appId:"1:344295859269:web:f170190301fc8c04eb6f2c"});var J=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=(t[0],t[1],Object(n.useState)({isSignedIn:!1,name:"",email:"",password:"",photo:""})),r=Object(s.a)(c,2),a=(r[0],r[1]);0===A.a.apps.length&&A.a.initializeApp(E);var o=Object(n.useContext)(Y),l=Object(s.a)(o,2),d=l[0],j=l[1],u=Object(i.g)(),h=(Object(i.h)().state||{from:{pathname:"/"}}).from,m=function(e,t){a(e),j(e),t&&u.replace(h)};return Object(b.jsx)("div",{className:"container d-flex justify-content-center",children:d.isSignedIn?Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){A.a.auth().signOut().then((function(e){return{isSignedIn:!1,name:"",email:"",photo:"",error:"",success:!1}})).catch((function(e){})).then((function(e){m(e,!1)}))},children:"Log Out"}):Object(b.jsxs)("button",{className:"btn btn-primary",onClick:function(){(function(){var e=new A.a.auth.GoogleAuthProvider;return A.a.auth().signInWithPopup(e).then((function(e){var t=e.user,c=t.displayName,n=t.photoURL;return{isSignedIn:!0,name:c,email:t.email,photo:n,success:!0}})).catch((function(e){console.log(e),console.log(e.message)}))})().then((function(e){m(e,!0)}))},children:[Object(b.jsx)(O.a,{className:"google-icon",icon:T.a})," Continue With Google"]})})},D=c(43),W=function(e){var t=e.children,c=Object(D.a)(e,["children"]),r=Object(n.useContext)(Y),a=Object(s.a)(r,2),o=a[0];a[1];return Object(b.jsx)(i.b,Object(q.a)(Object(q.a)({},c),{},{render:function(e){var c=e.location;return o.email?t:Object(b.jsx)(i.a,{to:{pathname:"/login",state:{from:c}}})}}))},V=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{class:"text-center text-danger mt-4",children:"THis is Deals Page "})})},Y=Object(n.createContext)();var B=function(e){var t=Object(n.useState)({}),c=Object(s.a)(t,2),r=c[0],a=c[1];return Object(b.jsxs)(Y.Provider,{value:[r,a],children:[Object(b.jsx)("div",{className:"container"}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/home",children:Object(b.jsx)(y,{})}),Object(b.jsx)(W,{path:"/order",children:Object(b.jsx)(P,{})}),Object(b.jsx)(i.b,{path:"/login",children:Object(b.jsx)(J,{})}),Object(b.jsx)(W,{path:"/admin",children:Object(b.jsx)(u,{})}),Object(b.jsx)(i.b,{path:"/deals",children:Object(b.jsx)(V,{})}),Object(b.jsx)(i.b,{path:"/login",children:Object(b.jsx)(V,{})}),Object(b.jsx)(i.b,{path:"/checkout",children:Object(b.jsx)(C,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(i.b,{path:"/product/:productKey",children:Object(b.jsx)(I,{})}),Object(b.jsx)(i.b,{path:"*",children:Object(b.jsx)(k,{})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c(84);a.a.render(Object(b.jsx)(B,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.993e1b72.chunk.js.map