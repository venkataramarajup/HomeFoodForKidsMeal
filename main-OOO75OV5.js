import{A as h,E as P,F as O,G as x,H as v,e as c,k as f,l as C,o as _,p as M,q as e,r as o,s as i,u as s,w as p,z as l}from"./chunk-RYIDKKGS.js";var b=[{path:"homefood",loadChildren:()=>import("./chunk-LC6IYTQL.js").then(t=>t.HomefoodModule)},{path:"",redirectTo:"/homefood",pathMatch:"full"},{path:"**",redirectTo:"/homefood",pathMatch:"full"}];var y={providers:[h({eventCoalescing:!0}),v(b)]};var m=class t{constructor(a){this.router=a}menuValue=!1;menu_icon="bi bi-list";ngOnInit(){}openMenu(){this.menuValue=!this.menuValue,this.menu_icon=this.menuValue?"bi bi-x":"bi bi-list"}closeMenu(){this.menuValue=!1,this.menu_icon="bi bi-list"}redirectToCatalog(){this.router.navigate(["/homefood/catalog"])}redirectToHomePage(){window.scrollTo({top:0,left:0,behavior:"smooth"}),this.router.navigate(["/homefood"])}static \u0275fac=function(n){return new(n||t)(C(x))};static \u0275cmp=c({type:t,selectors:[["app-header"]],standalone:!0,features:[l],decls:13,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-md-3","col-sm-3","col-3"],[1,"logo"],["src","","alt","Home Food for Kids Meal",1,"logo",3,"click"],[1,"col-md-9","col-sm-9","col-9","text-end"],[1,"menu-icon",3,"click"],[1,"desktop_menu"],[3,"click"]],template:function(n,r){n&1&&(e(0,"header")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"img",4),s("click",function(){return r.redirectToHomePage()}),o()()(),e(6,"div",5)(7,"div",6),s("click",function(){return r.openMenu()}),i(8,"i"),o(),e(9,"div",7)(10,"ul")(11,"li",8),s("click",function(){return r.redirectToCatalog(),r.closeMenu()}),p(12,"Catalog"),o()()()()()()()),n&2&&(f(8),M(r.menu_icon),f(),_("mobile_menu",r.menuValue))},styles:["header[_ngcontent-%COMP%]{background:#02534d;position:fixed;top:0;left:0;width:100%;z-index:1000;box-shadow:0 2px 5px #0000001a;padding:10px 0}.logo[_ngcontent-%COMP%]{width:90px}.logo[_ngcontent-%COMP%]:hover{cursor:pointer}.desktop_menu[_ngcontent-%COMP%]{margin-top:24px}.desktop_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.desktop_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;color:#fff;display:inline-block;font-size:18px;margin-left:26px}.desktop_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{font-size:18px;font-weight:700;cursor:pointer;color:#abab9f}.menu-icon[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 128px) and (max-width: 900px){.desktop_menu[_ngcontent-%COMP%]{position:fixed!important;right:-280px;transition:.4s ease-in-out;top:64px;background:#02534d;width:280px;height:100%}.desktop_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;text-align:left;margin:0;padding:10px 0 10px 26px;border-bottom:1px solid grey}.menu-icon[_ngcontent-%COMP%]{display:block;color:#fff;font-size:40px;padding-top:10px}.mobile_menu[_ngcontent-%COMP%]{right:0;transition:.4s ease-in-out}}"]})};var d=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-footer"]],standalone:!0,features:[l],decls:19,vars:0,consts:[[1,"footerContainer"],[1,"socialIcons"],["href",""],[1,"bi","bi-instagram"],[1,"bi","bi-youtube"],["href","https://api.whatsapp.com/send?phone=916301865922&text=Hi%20%21%21%20I%20would%20like%20to%20opt%20the%20service%20for%20my%20kid%28s%29.","target","_blank"],[1,"bi","bi-whatsapp"],[1,"footerNav"],[1,"contact"],[1,"footerBottom"],[1,"designer"]],template:function(n,r){n&1&&(e(0,"footer")(1,"div",0)(2,"div",1)(3,"a",2),i(4,"i",3),o(),e(5,"a",2),i(6,"i",4),o(),e(7,"a",5),i(8,"i",6),o()(),e(9,"div",7)(10,"ul")(11,"li",8)(12,"a"),p(13,"Contact Us +91 6301865922"),o()()()()(),e(14,"div",9)(15,"p"),p(16,"Copyright \xA92025; Designed by "),e(17,"span",10),p(18,"Anand"),o()()()())},styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}footer[_ngcontent-%COMP%]{background-color:#02534d}.footerContainer[_ngcontent-%COMP%]{width:100%;padding:20px 0 0}.socialIcons[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:10px}.socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;padding:10px;background-color:#fff;margin:10px;border-radius:50%}.socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2em;color:#02534d;opacity:0,9}.socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#02534d;transition:.5s}.socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff;transition:.5s}.footerNav[_ngcontent-%COMP%]{margin:5px 0}.footerNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;list-style-type:none}.footerNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;margin:20px;text-decoration:none;font-size:1.3em;opacity:.7;transition:.5s}.footerNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1}.footerBottom[_ngcontent-%COMP%]{background-color:#02534d;padding:5px;text-align:right}.footerBottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.designer[_ngcontent-%COMP%]{opacity:.7;text-transform:uppercase;letter-spacing:1px;font-weight:400;margin:0 5px}@media (max-width: 700px){.footerNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column}.footerNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;text-align:center;margin:10px}.socialIcons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;margin:4px}}.contact[_ngcontent-%COMP%]{font-size:1.5rem}"]})};var g=class t{title="homefoodforkids";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[l],decls:4,vars:0,consts:[[1,"content"]],template:function(n,r){n&1&&(i(0,"app-header"),e(1,"div",0),i(2,"router-outlet"),o(),i(3,"app-footer"))},dependencies:[O,m,d]})};P(g,y).catch(t=>console.error(t));