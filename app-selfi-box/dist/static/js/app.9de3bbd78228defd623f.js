webpackJsonp([1],{"7zck":function(t,e){},EF8Z:function(t,e){},JzOR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[n("v-list",{attrs:{dense:""}},[t._l(t.menuItems,function(e){return n("v-list-tile",{key:e.title,attrs:{router:"",to:e.link}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),n("v-list-tile",{attrs:{router:"",to:"/Panier"}},[n("v-list-tile-action",[n("v-icon",[t._v("shopping_cart")])],1),t._v(" "),n("v-list-tile-content",[t._v("Panier")])],1)],2)],1),t._v(" "),n("v-toolbar",[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}},[n("v-icon",[t._v("menu")])],1),t._v(" "),n("v-toolbar-title",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n        Selfy Box\n      ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,function(e){return n("v-btn",{key:e.title,attrs:{flat:"",router:"",to:e.link}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}))],1),t._v(" "),n("main",[n("router-view")],1),t._v(" "),n("v-footer",{attrs:{dark:"",height:"auto"}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"teal justify-center"},[n("strong",{staticClass:"subheading "},[t._v("Selfy Box")])]),t._v(" "),n("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n      ©2018 — "),n("strong",[t._v("Selfy Box")])])],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")({data:function(){return{sideNav:!1,menuItems:[{title:"Service",link:"/service"},{title:"Commande",link:"/commande"},{title:"Contact",link:"/contact"}],icons:["fab fa-facebook","fab fa-twitter ","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]}},name:"App"},a,!1,function(t){n("tb3w")},null,null).exports,s=n("/ocq"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-home"},[n("div",{staticClass:"presentation"},[n("h1",[t._v("Titre du concept Man")]),t._v(" "),n("p",[t._v("Aperiam, alias. Rem delectus ab reiciendis")]),t._v(" "),n("v-btn",[t._v("\r\n      Voir nos tarifs\r\n    ")])],1)]),t._v(" "),n("v-container",[n("div",[n("h2",[t._v("Concept")])]),t._v(" "),n("div",{staticClass:"content-concept"},[n("div",{staticClass:"concept"},[n("div",[n("v-icon",[t._v("\r\n          monochrome_photos\r\n        ")])],1),t._v(" "),n("h3",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),n("p",[t._v("Dolores non incidunt omnis voluptatum nam assumenda adipisci aperiam pariatur aliquid aliquam! Aperiam, alias. Rem delectus ab reiciendis.")])]),t._v(" "),n("div",{staticClass:"concept"},[n("div",[n("v-icon",[t._v("\r\n          photo\r\n        ")])],1),t._v(" "),n("h3",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),n("p",[t._v("Quae velit deserunt similique perferendis incidunt, magnam sit dolorem eveniet quam ipsam delectus ducimus vitae voluptas voluptatem exercitationem.")])]),t._v(" "),n("div",{staticClass:"concept"},[n("div",[n("v-icon",[t._v("\r\n          event\r\n        ")])],1),t._v(" "),n("h3",[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),n("p",[t._v("Nemo eveniet, sequi id adipisci harum unde dolor rem ad odio, inventore laboriosam neque sapiente facilis quibusdam deserunt porro molestiae culpa.")])])]),t._v(" "),n("v-carousel",t._l(t.images,function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t}})}))],1)],1)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{images:["https://images.unsplash.com/photo-1466686606061-5b5fd8310160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c235142536989f4926dd57145604d242&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9699a304159246af55ed7002f6ef7f8a&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3cf5198be760cf5b4920e08b14501a9&auto=format&fit=crop&w=1050&q=80"]}}},r,!1,function(t){n("EF8Z")},null,null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("v-container",[this._v("\n  borne\n  video\n  livre d'or\n\n")])},staticRenderFns:[]};var v=n("VU/8")({},l,!1,function(t){n("JzOR")},"data-v-018ecabe",null).exports,u=n("VU/8")(null,null,!1,null,null,null).exports,d=n("VU/8")(null,null,!1,null,null,null).exports;i.default.use(s.a);var m=new s.a({routes:[{path:"/",name:"Accueil",component:c},{path:"/service",name:"Service",component:v},{path:"/commande",name:"Commande",component:u},{path:"/contact",name:"Contact",component:d}]}),p=n("3EgV"),f=n.n(p);n("7zck");i.default.use(f.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:m,components:{App:o},template:"<App/>"})},tb3w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9de3bbd78228defd623f.js.map