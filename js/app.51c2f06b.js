(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c4b1f25"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d1175965"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],v.parentNode.removeChild(v),r(i)},v.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"07fb":function(t,e,r){},1868:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticStyle:{"border-bottom":"1px solid #e7e7e7 !important"},attrs:{elevation:"0",app:"",height:"73px",color:"white",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mt-1 mr-2",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:r("7af8"),width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary",to:"rx-prescription",text:""}},[a("v-icon",[t._v("mdi-prescription")]),a("span",{staticClass:"mr-2"},[t._v("New Prescription")])],1)],1),a("side-nav"),a("v-main",[a("router-view")],1)],1)},o=[],i=r("1da1"),s=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{dark:"",app:"",permanent:"","expand-on-hover":""}},[r("v-list",[r("v-list-item",{staticClass:"px-2",attrs:{link:""}},[r("v-list-item-avatar",[r("v-img",{attrs:{src:"https://www.cdc.gov/drugoverdose/training/modules/module1/images/welcomeimage.png"}})],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" Dr. Tasnim Jara ")]),r("v-list-item-subtitle",[t._v("MBBS, Dhaka Medical College")])],1)],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:"",to:"/"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-creation")])],1),r("v-list-item-title",[t._v("Dashboard")])],1),r("v-list-item",{attrs:{link:"",to:"/rx-prescription"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-prescription")])],1),r("v-list-item-title",[t._v("Create Presciption")])],1),r("v-list-item",{attrs:{link:"",to:"/create-appointment"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-clipboard-plus")])],1),r("v-list-item-title",[t._v("Create Appointment")])],1),r("v-list-item",{attrs:{link:"",to:"appointment-list"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-clipboard-text")])],1),r("v-list-item-title",[t._v("Appointment List")])],1),r("v-list-item",{attrs:{link:"",to:"generic-controller"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-pill")])],1),r("v-list-item-title",[t._v("Generic Contoller")])],1),r("v-list-item",{attrs:{link:"",to:"settings"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-shape-circle-plus")])],1),r("v-list-item-title",[t._v("Settings")])],1)],1)],1)}),c=[],l=(r("deec"),r("2877")),u=r("6544"),d=r.n(u),v=r("ce7e"),m=r("132d"),p=r("adda"),f=r("8860"),g=r("da13"),h=r("8270"),b=r("5d23"),_=r("34c3"),y=r("f774"),w={},T=Object(l["a"])(w,s,c,!1,null,"20b0acc5",null),A=T.exports;d()(T,{VDivider:v["a"],VIcon:m["a"],VImg:p["a"],VList:f["a"],VListItem:g["a"],VListItemAvatar:h["a"],VListItemContent:b["a"],VListItemIcon:_["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VNavigationDrawer:y["a"]});var x=r("bc3a"),S=r.n(x),D=r("4ba3"),k=function(){return r("b81e")},C=k().default,I=new D["Connection"](new Worker(C));I.logStatus=!0;var E=function(){var t={name:"Drugs",columns:{drugId:{primaryKey:!0,autoIncrement:!1},name:{notNull:!0,dataType:D["DATA_TYPE"].String},type:{dataType:D["DATA_TYPE"].String},generic:{dataType:D["DATA_TYPE"].String},typbrandNamee:{dataType:D["DATA_TYPE"].String},packSize:{dataType:D["DATA_TYPE"].String},indications:{dataType:D["DATA_TYPE"].String},adultDose:{dataType:D["DATA_TYPE"].String},childDose:{dataType:D["DATA_TYPE"].String},renalDose:{dataType:D["DATA_TYPE"].String},administration:{dataType:D["DATA_TYPE"].String},contraindications:{dataType:D["DATA_TYPE"].String},sideEffects:{dataType:D["DATA_TYPE"].String},precautionsAndWarnings:{dataType:D["DATA_TYPE"].String},pregnancyAndLactation:{dataType:D["DATA_TYPE"].String},therapeuticClass:{dataType:D["DATA_TYPE"].String},modeOfAction:{dataType:D["DATA_TYPE"].String},interaction:{dataType:D["DATA_TYPE"].String},packSizeAndPrice:{dataType:D["DATA_TYPE"].String}}},e={name:"a2dms",tables:[t]};return e},N=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=E(),t.next=3,I.initDb(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=r("d4ec"),O=r("bee2"),V=(r("b0c0"),function(){function t(){Object(P["a"])(this,t),this.tableName="Drugs"}return Object(O["a"])(t,[{key:"getDrugs",value:function(){return I.select({from:this.tableName})}},{key:"addDrugs",value:function(t){return I.insert({into:this.tableName,values:[t],return:!0})}},{key:"getStudentById",value:function(t){return I.select({from:this.tableName,where:{id:t}})}},{key:"removeStudent",value:function(t){return I.remove({from:this.tableName,where:{id:t}})}},{key:"searchDrug",value:function(t){return I.select({from:this.tableName,where:{name:{like:"%".concat(t,"%")}}})}},{key:"updateStudentById",value:function(t){return I.update({in:this.tableName,set:{name:t.name,gender:t.gender,country:t.country,city:t.city},where:{id:t.id}})}}]),t}()),j=r("ade3"),L=function t(){Object(P["a"])(this,t)};Object(j["a"])(L,"isIndexedDbSupported",!0);var B={name:"App",components:{"side-nav":A},data:function(){return{students:[]}},beforeCreate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:r=e.sent,r?(console.log("db created"),t.syncDB()):(console.log("db opened"),console.log("loool"),t.searchDrugs()),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0),alert(e.t0.message),L.isIndexedDbSupported=!1;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},created:function(){},methods:{refreshStudent:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(new V).getDrugs();case 2:t.students=e.sent;case 3:case"end":return e.stop()}}),e)})))()},syncDB:function(){var t=new V;S.a.get("http://need-doctors-backend.southeastasia.cloudapp.azure.com:8100/drugs?pageNo=0&pageSize=20").then((function(e){e.data;for(var r=e.data.drugModelList,a=0;a<r.length;a++)t.addDrugs(r[a]);console.log(e)}))},searchDrugs:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,(new V).searchDrug("I");case 3:e=t.sent,console.table(e);case 5:case"end":return t.stop()}}),t)})))()},addDrugs:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.db.addDrugsToTable(t);case 2:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.refreshStudent()}},Y=B,M=r("7496"),R=r("40dc"),z=r("8336"),G=r("f6c4"),F=r("2fa4"),J=Object(l["a"])(Y,n,o,!1,null,null,null),q=J.exports;d()(J,{VApp:M["a"],VAppBar:R["a"],VBtn:z["a"],VIcon:m["a"],VImg:p["a"],VMain:G["a"],VSpacer:F["a"]});var $=r("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var H=r("8c4f"),K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{rounded:"0",elevation:"0",color:"#f2f5f8"}},[r("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1),t.userInfo?t._e():r("v-row",{staticStyle:{"margin-top":"20px","text-align":"center","vertical-align":"middle !important"}},[r("v-col",{staticStyle:{margin:"auto"}},[r("v-progress-circular",{attrs:{size:70,width:7,color:"#d4d6d8",indeterminate:""}})],1)],1),r("v-row",[r("v-col",{attrs:{lg:"3",md:"3",sm:"12",cols:"12"}},[r("v-card",{staticClass:"ma-5",attrs:{flat:"",elevation:"0"}},[r("h4",[t._v("Dashboard")]),r("br"),t._l(t.userInfo.dashboard,(function(e){return r("v-row",{key:e.text},[r("v-col",[r("v-card",{staticClass:"my-2",attrs:{elevation:"0",color:t.getRandomColor(),link:"",to:"project/"+e.id}},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-icon",{staticClass:"mx-5 my-7",attrs:{"x-large":""}},[t._v(t._s(e.icon))])],1),r("v-col",{attrs:{cols:"9"}},[r("strong",{staticStyle:{"font-size":"12",color:"gray"}},[t._v(t._s(e.text))]),r("br"),r("h1",{staticClass:"mt-4"},[t._v(t._s(e.count))])])],1)],1)],1)],1)}))],2)],1),r("v-divider",{staticClass:"mx-0",attrs:{vertical:""}}),r("v-col",{attrs:{lg:"",md:"9",sm:"12",cols:"12"}},[r("v-card",{staticClass:"ma-5",attrs:{elevation:"0"}},[r("v-row",[r("v-col",[r("v-card",{staticClass:"mt-2 pa-4",staticStyle:{border:"1px solid #e7e7e7"},attrs:{color:"teal lighten-5",outlined:"",elevation:"0",width:"100%"}},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-img",{staticClass:"ma-5 mx-15",staticStyle:{width:"160px",height:"160px",border:"1px solid gray","border-radius":"100px!important"},attrs:{sizes:"10",src:"https://www.cdc.gov/drugoverdose/training/modules/module1/images/welcomeimage.png"}})],1),r("v-col",{attrs:{cols:"4"}},[r("h2",{staticClass:"ma-4"},[r("b",[t._v("Dr. "+t._s(t.userInfo.firstName)+" "+t._s(t.userInfo.lastname))])]),r("v-chip",{staticClass:"ml-4",attrs:{small:"",outlined:""}},[t._v(t._s(t.userInfo.degree)+" , "+t._s(t.userInfo.institute))])],1),r("v-col",[r("v-row",[r("v-col",[r("v-card-subtitle",[r("b",[t._v("Email:")]),t._v(" "),r("br"),t._v(t._s(t.userInfo.email)+" ")])],1),r("v-col",{attrs:{"align-self":"center"}},[r("v-chip",{staticClass:"white--text",attrs:{color:"teal",small:"",link:""}},[r("b",[t._v(t._s(t.userInfo.role))])])],1)],1),r("v-row",[r("v-col",[r("v-card-subtitle",[r("b",[t._v("Phone Number:")]),t._v(" "),r("br"),t._v(t._s(t.userInfo.phone)+" ")])],1),r("v-col",[r("v-card-subtitle",[r("b",[t._v("Address:")]),t._v(" "),r("br"),t._v(" "+t._s(t.userInfo.address)+" ")])],1)],1)],1)],1)],1)],1)],1),r("v-row",[r("v-col",[r("v-card",{staticClass:"pa-4 mt-2",staticStyle:{border:"1px solid #e7e7e7"},attrs:{elevation:"0",width:"100%"}},[r("v-row",{staticClass:"pa-5"},[r("v-icon",{attrs:{large:""}},[t._v("mdi-clipboard-text")]),t._v(" "),r("h3",{staticClass:"mt-1 ml-2"},[t._v("Recent Appointment")])],1),r("v-row",{staticStyle:{"background-color":"#f2f5f8","border-radius":"8px","text-align":"center"}},[r("v-col",{attrs:{cols:"4"}},[r("b",[t._v("Name")])]),r("v-col",[r("b",[t._v("Age")])]),r("v-col",[r("b",[t._v("Phone Number")])]),r("v-col",[r("b",[t._v("Address")])]),r("v-col",[r("b",[t._v("Action")])])],1),t._l(t.appointmentList,(function(e){return r("v-row",{key:e.id,staticStyle:{"text-align":"center","border-bottom":"1px solid #e7e7e7"}},[r("v-col",{staticClass:"ml-2",staticStyle:{"text-align":"left"},attrs:{cols:"4"}},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-avatar",{staticClass:"ma-3 white--text",attrs:{color:t.getRandomColor(),size:"42"}},[r("h3",[t._v(t._s(e.firstName.charAt(0)))])])],1),r("v-col",[r("h4",{staticClass:"mt-5"},[t._v(" "+t._s(e.firstName)+" "+t._s(e.lastName)+" ")])])],1)],1),r("v-col",[r("v-chip",{staticClass:"mt-3",attrs:{small:"",outlined:"",color:"teal"}},[t._v(t._s(e.age))])],1),r("v-col",[r("v-card-subtitle",[t._v(" "+t._s(e.phoneNo)+" ")])],1),r("v-col",[r("v-card-subtitle",[t._v(" "+t._s(e.address)+" ")])],1),r("v-col",[r("v-card-subtitle",[r("v-btn",{attrs:{color:"info",depressed:"",small:""}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-prescription")])],1)],1)],1)],1)}))],2)],1)],1)],1)],1)],1)],1)},W=[],U={data:function(){return{idx:0,input:"",adddialog:!1,GET_LOGGED_IN_PROFILE_API:"https://buggie-backend.herokuapp.com/auth/user-info",user:{},auth:"Bearer "+localStorage.getItem("token"),userInfo:{firstName:"Tasnim",lastname:"Jara",institute:"Dhaka Medical College",degree:"MBBS",phone:"01734543027",email:"sandra.dr@gmail.com",role:"Doctor",address:"Dhaka, Bangladesh",dashboard:[{text:"Todays Appointment",count:80,icon:"mdi-playlist-minus"},{text:"Todays Earn",count:800,icon:"mdi-cash"},{text:"Total Appointment",count:320,icon:"mdi-playlist-check"},{text:"Total Earn",count:34e3,icon:"mdi-cash-multiple"}]},appointmentList:[{id:"1",firstName:"Injamamul Haque",lastName:"Sonet",age:"22",phoneNo:"017354635920",address:"Dhaka, Bangladesh"},{id:"2",firstName:"Faisul",lastName:"Islam",age:"19",phoneNo:"017354635920",address:"Dhaka, Bangladesh"}],items:[{text:"a2sDMS",disabled:!1,href:"/"},{text:"Dashboard",disabled:!0,href:"dashboard"}]}},methods:{getProfileInfo:function(){var t=this;console.log(this.auth),S()({method:"get",url:this.GET_LOGGED_IN_PROFILE_API,headers:{Authorization:this.auth,"Content-Type":"application/json"}}).then((function(e){console.log(e.data),t.userInfo=e.data,localStorage.setItem("userInfo",JSON.stringify(e.data)),t.userInfo=JSON.parse(localStorage.getItem("userInfo")),console.log(t.userInfo.firstName)})).catch((function(t){console.log(t)}))},getRandomColor:function(){return"rgb("+(Math.floor(56*Math.random())+200)+", "+(Math.floor(56*Math.random())+200)+", "+(Math.floor(56*Math.random())+200)+")"},show:function(){return 0}},mounted:function(){}},Q=U,X=(r("fa82"),r("8212")),Z=r("2bc5"),tt=r("b0af"),et=r("99d9"),rt=r("cc20"),at=r("62ad"),nt=r("490a"),ot=r("0fd9b"),it=Object(l["a"])(Q,K,W,!1,null,"ac9f2414",null),st=it.exports;d()(it,{VAvatar:X["a"],VBreadcrumbs:Z["a"],VBtn:z["a"],VCard:tt["a"],VCardSubtitle:et["a"],VChip:rt["a"],VCol:at["a"],VDivider:v["a"],VIcon:m["a"],VImg:p["a"],VProgressCircular:nt["a"],VRow:ot["a"]}),a["a"].use(H["a"]);var ct=[{path:"/",name:"Dashboard",component:st},{path:"/rx-prescription",name:"Prescription",component:function(){return r.e("about").then(r.bind(null,"fc74"))}},{path:"/generic-controller",name:"Generic Controller",component:function(){return r.e("about").then(r.bind(null,"1f27"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],lt=new H["a"]({mode:"history",base:"/",routes:ct}),ut=lt,dt=r("2f62");a["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),mt=r("f309");a["a"].use(mt["a"]);var pt=new mt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ut,store:vt,vuetify:pt,render:function(t){return t(q)}}).$mount("#app")},"7af8":function(t,e,r){t.exports=r.p+"img/hero-logo.524e60cd.png"},deec:function(t,e,r){"use strict";r("07fb")},fa82:function(t,e,r){"use strict";r("1868")}});
//# sourceMappingURL=app.51c2f06b.js.map