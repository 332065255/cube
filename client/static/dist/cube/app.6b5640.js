!function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,f=[];l<i.length;l++)u=i[l],a[u]&&f.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(e);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},u={0:0},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[];u[t]?e.push(u[t]):0!==u[t]&&{1:1,2:1,3:1,4:1,5:1,6:1}[t]&&e.push(u[t]=new Promise(function(e,n){for(var r=t+".style.css",u=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var c=(l=a[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===u))return e()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){var l;if((c=(l=s[o]).getAttribute("data-href"))===r||c===u)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||u,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},d.href=u,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){u[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+""+({}[t]||t)+".chunk.js"}(t),o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+u+")");o.type=r,o.request=u,n[1](o)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,c.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/dist/cube",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;o.push([187,7]),n()}({116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(n(343)),u=f(n(114)),a=f(n(173)),o=f(n(351)),i=f(n(352)),c=f(n(353)),s=f(n(54)),l=f(n(20)),d=f(n(24));function f(t){return t&&t.__esModule?t:{default:t}}var p=new c.default,v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.default)(this,t),e.id&&(this.setCacheTree(e.id,e.struct),s.default.commit("cube/updateTree",e))}return(0,i.default)(t,[{key:"getTreeId",value:function(){return s.default.state.cube.tree.id}},{key:"getCacheId",value:function(t){return"tree"+t}},{key:"getStruct",value:function(){return l.default.extend({},s.default.state.cube.tree.struct)}},{key:"getUsedComponents",value:function(){var t=this.getStruct(),e=new c.default;return function t(n){n.tag&&e.add(n.tag),n.slots&&n.slots.forEach(function(e){t(e)})}(t),[].concat((0,a.default)(e))}},{key:"setCacheTree",value:function(t,e){var n=this.getCacheId(t);window.localStorage.setItem(n,(0,u.default)({id:t,struct:e||this.getStruct()})),s.default.commit("cube/updateTreeSaved",!0)}},{key:"getCacheTree",value:function(t){var e=this.getCacheId(t);return JSON.parse(window.localStorage.getItem(e)||"{}")}},{key:"getRootUid",value:function(){return this.getStruct().uuid}},{key:"getRandomUid",value:function(){var t=[];return function e(n){t.push(n.uuid),n.slots&&n.slots.forEach(function(t){e(t)})}(this.getStruct()),t[Math.floor(Math.random()*t.length)]}},{key:"getNodeByUid",value:function(t){var e=null;return function n(r){r.uuid===t?e=r:!e&&r.slots&&r.slots.forEach(function(t){n(t)})}(this.getStruct()),e}},{key:"selectNodeByUid",value:function(t){var e=this.getStruct(),n=null;return function e(r){r.uuid===t?(n=r,r.selected=!0):r.selected=!1,r.slots&&r.slots.forEach(function(t){e(t)})}(e),s.default.commit("cube/updateTreeStruct",e),n}},{key:"getSeletedNode",value:function(){var t=!1;return function e(n){n.selected?t=n:!t&&n.slots&&n.slots.forEach(function(t){e(t)})}(this.getStruct()),t}},{key:"addNode",value:function(t,e){var n=this.getStruct(),r=!1;!function n(u){r||u.uuid!==t||(r=!0,u.slots=u.slots||[],u.slots.push(e)),!r&&u.slots&&u.slots.forEach(function(t){n(t)})}(n),s.default.commit("cube/updateTreeStruct",n),this.selectNodeByUid(e.uuid)}},{key:"insertNodeBefore",value:function(t,e){var n=this.getStruct(),r=null;!function n(u){u.slots&&u.slots.forEach(function(a,o){r||(a.uuid===t?(r=a,u.slots.splice(o,0,e)):n(a))})}(n),s.default.commit("cube/updateTreeStruct",n),this.selectNodeByUid(e.uuid)}},{key:"deleteNodeByUid",value:function(t){var e=this.getStruct(),n=!1,r=!1;return function e(u){if(u.uuid===t&&u.root)throw new Error("根节点不允许删除");!r&&u.slots&&u.slots.forEach(function(a,o){a.uuid===t?(r=a,n=a.selected,u.slots.splice(o,1)):e(a)})}(e),s.default.commit("cube/updateTreeStruct",e),!n&&this.getSeletedNode()||this.selectNodeByUid(this.getRootUid()),r}},{key:"travelUpdateNodeByUid",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=this.getStruct();!function r(u){u.uuid===t?e(u):n(u),u.slots&&u.slots.forEach(function(t){r(t)})}(r),s.default.commit("cube/updateTreeStruct",r)}},{key:"matchUpdateNodeByUid",value:function(t,e){var n=this.getStruct(),r=!1;!function n(u){r||u.uuid!==t||(r=!0,e(u)),!r&&u.slots&&u.slots.forEach(function(t){n(t)})}(n),s.default.commit("cube/updateTreeStruct",n)}},{key:"renderTree",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cube-preview",u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cube-preview-inner";if(!document.getElementById(e))throw new Error("外部容器不存在");var a=this.getUsedComponents().map(function(t){if(!p.has(t))return p.add(t),n(368)("./"+t+".vue").then(function(e){console.info(t),d.default.component(t,d.default.extend(e.default))})});r.default.all(a).then(function(){var n=t.getStruct(),r=d.default.component("root-component",{render:function(t){return function t(e,n){var r=e.tag,u=e.properties||{},a=e.slots||[];return e.selected&&(e.properties.class=e.properties.class||{},e.properties.class["cube-selected"]=!0),n(r,u,a.map(function(e){return t(e,n)}))}(n,t)}});document.getElementById(u)||(document.getElementById(e).outerHTML='<div id="'+e+'"><div id="'+u+'"></div></div>'),(new r).$mount("#"+u)})}}]),t}();e.default=v},120:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blank"},[e("router-view")],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},121:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole-container"},[n("el-row",[n("el-col",{staticStyle:{float:"right","text-align":"right"},attrs:{span:6}},[n("el-button",{attrs:{type:t.isTreeSaved?"success":"danger",loading:t.saveLoading},on:{click:t.saveCacheTree}},[t._v("\n        "+t._s(t.isTreeSaved?"已保存":"点击保存")+"\n      ")])],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:3}},[n("h4",{staticClass:"col-title"},[t._v("组件列表")]),t._v(" "),n("div",{staticClass:"grid-content cube-list-grid"},[n("CubeList")],1)]),t._v(" "),n("el-col",{attrs:{span:5}},[n("h4",{staticClass:"col-title"},[t._v("组件操作")]),t._v(" "),n("div",{staticClass:"grid-content cube-tree-grid"},[n("CubeStruct",{attrs:{menu:t.struct}})],1)]),t._v(" "),n("el-col",{attrs:{span:9}},[n("h4",{staticClass:"col-title"},[t._v("预览展示")]),t._v(" "),n("div",{staticClass:"grid-content cube-preview-grid"},[n("CubePreview")],1)]),t._v(" "),n("el-col",{attrs:{span:7}},[n("h4",{staticClass:"col-title"},[t._v("属性编辑")]),t._v(" "),n("div",{staticClass:"grid-content cube-prop-grid"},[n("CubeProp")],1)])],1)],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},122:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview-page"},[e("div",{attrs:{id:"cube-preview"}},[e("CubePreview")],1)])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},123:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},u=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error-wrap"},[e("img",{staticClass:"error-404",attrs:{src:"/static/img/common/error-404.png"}})])}];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},124:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"cube-prop"}},[e("PropItemVue",{attrs:{attrs:this.bindProps}})],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},125:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"grid-content cube-tree-preview",attrs:{id:"cube-preview"}})},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},126:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cube-struct",attrs:{"data-uuid":t.menu.uuid,draggable:"true"}},[n("div",{staticClass:"menu-item-group"},[t.menu.root?t._e():n("div",{staticClass:"cube-seat before",attrs:{"data-uuid":t.menu.uuid,"data-put-before":!0}}),t._v(" "),n("div",{class:{"menu-item":!0,normal:!t.menu.root,root:t.menu.root,selected:t.menu.selected},attrs:{"data-tag":t.menu.tag},on:{click:function(e){t.setSelectedNode(t.menu)}}},[t._v("\n\n      "+t._s(t.menu.label)+"\n\n      "),t._v(" "),t.menu.root?t._e():n("i",{staticClass:"el-icon-close menu-item__del",on:{click:function(e){e.stopPropagation(),t.deleteNode(t.menu)}}})])]),t._v(" "),!0===t.getPackageSlots(t.menu.tag)?n("ul",{staticClass:"slot-container"},[n("li",{staticClass:"slot-item"},[t._l(t.menu.slots,function(e){return"default"!==e.properties.slot&&e.properties.slot?t._e():[n("MenuVue",{key:e.uuid,attrs:{menu:e}})]}),t._v(" "),n("div",{staticClass:"cube-seat slot",attrs:{"data-uuid":t.menu.uuid,title:"匿名卡槽","data-slot-name":"default","data-slot-title":"匿名卡槽"}})],2)]):t._e(),t._v(" "),t.getPackageSlots(t.menu.tag)&&t.getPackageSlots(t.menu.tag).length>0?n("ul",{staticClass:"slot-container"},t._l(t.getPackageSlots(t.menu.tag),function(e,r){return n("li",{key:r,staticClass:"slot-item"},[t._l(t.menu.slots,function(r){return r.properties.slot===e.sname?[n("MenuVue",{key:r.uuid,attrs:{menu:r}})]:t._e()}),t._v(" "),n("div",{staticClass:"cube-seat slot",attrs:{"data-uuid":t.menu.uuid,title:e.slabel,"data-slot-name":e.sname,"data-slot-title":e.slabel}})],2)})):t._e()])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},127:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cube-list"}},[n("ul",t._l(t.packages,function(e){return e.config.visible?n("li",{key:e.tag,staticClass:"block-component-item",attrs:{draggable:"true","data-block-tag":e.tag,"data-block-label":e.label}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("\n        "+t._s(e.label)+"\n      ")])],1):t._e()}))])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},128:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.attrs,function(e,r){return n("li",{key:r},[t.isObject(t.attrs[r])?n("span",[[n("div",{staticStyle:{"margin-left":"12px"}},[n("p",{staticStyle:{margin:"5px 0 0"}},[t._v(t._s(r)+"包含的属性")]),t._v(" "),n("PropItemVue",{attrs:{attrs:t.attrs[r]}})],1)]],2):n("span",[t._v("\n        "+t._s(r)+": "),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.attrs[r],callback:function(e){t.$set(t.attrs,r,e)},expression:"attrs[key]"}})],1)])}))])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},132:function(t,e,n){"use strict";n.r(e);var r=n(120),u=n(56);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,null,null);i.options.__file="src/app/cube/scope/layouts/blank.vue",e.default=i.exports},180:function(t,e,n){"use strict";n.r(e);var r=n(125),u=n(69);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(335),n(337);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"1f6fb9ae",null);i.options.__file="src/app/cube/dashboard/cube-preview.vue",e.default=i.exports},187:function(t,e,n){"use strict";var r=s(n(83)),u=s(n(24)),a=s(n(194)),o=s(n(132)),i=s(n(195)),c=s(n(54));function s(t){return t&&t.__esModule?t:{default:t}}n(377),n(379),n(398),n(400),u.default.config.devtools=!1,u.default.config.silent=!0,u.default.config.errorHandler=function(t,e){console.warn(t,e)};var l=[];(0,r.default)(a.default).forEach(function(t){l.push({tag:t,label:a.default[t].label,config:a.default[t].config})}),c.default.commit("cube/addPackages",l);var d=new u.default({el:"#root",router:i.default,store:c.default,data:{bus:new u.default},render:function(t){return t(o.default)}});u.default.use(d)},194:function(t,e,n){"use strict";t.exports={"block-root":{label:"根组件",config:{visible:!1,slots:!0}},"block-a":{label:"组件a",config:{visible:!0,slots:[{sname:"header",slabel:"头部卡槽"}]}},"block-b":{label:"组件b",config:{visible:!0,slots:!1}},"block-c":{label:"组件c",config:{visible:!0,slots:!1}},"block-d":{label:"组件d",config:{visible:!0,slots:!1}},"block-e":{label:"组件e",config:{visible:!0,slots:!1}}}},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n(27)),u=l(n(24)),a=l(n(200)),o=l(n(132)),i=l(n(201)),c=l(n(20)),s=l(n(54));function l(t){return t&&t.__esModule?t:{default:t}}u.default.use(a.default);var d=new a.default({mode:"hash",base:"/",linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",routes:[{path:"",redirect:"dashboard",component:o.default,children:[n(318),n(373)]},{path:"*",component:i.default}]});d.beforeEach(function(t,e,n){var u=c.default.getRouterMeta(t.matched);s.default.commit("cube/updateRouteMeta",(0,r.default)({},u)),n()}),d.afterEach(function(t){}),e.default=d},20:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(204)),u=i(n(83)),a=i(n(221)),o=i(n(306));function i(t){return t&&t.__esModule?t:{default:t}}var c={isDeepEqual:i(n(309)).default,isNumber:function(t){return"number"==typeof t&&isFinite(t)},isUndefined:function(t){return void 0===t},isArray:function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isFunction:function(t){return"function"==typeof t},isString:function(t){return"[object String]"===Object.prototype.toString.call(t)},md5:function(t){return a.default.createHash("md5").update(t+"","utf8").digest("hex")},getPageID:function(){return window.location.pathname.split("?")[0].replace(/^\//,"").split("/").join("-")},getRouterMeta:function(t){var e={};return Array.prototype.slice.call(t).forEach(function(t){t.meta&&(e=c.extend(e,t.meta))}),e},queryURL:function(t,e){var n={};return(t=t.replace(/^[^?=]*\?/gi,"").split("#")[0]).replace(/(^|&)([^&=]+)=([^&]*)/g,function(t,e,r,u){try{r=decodeURIComponent(r)}catch(t){}try{u=decodeURIComponent(u)}catch(t){}r in n?n[r]instanceof Array?n[r].push(u):n[r]=[n[r],u]:n[r]=/\[\]$/.test(r)?[u]:u}),e?n[e]:n},encodeURIJson:function(t){var e=[];for(var n in t)if(null!==t[n])if(t[n]instanceof Array)for(var r=0;r<t[n].length;r++)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n][r]));else e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")},extend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=0,n=arguments.length<=1?0:arguments.length-1,r=void 0,u=void 0,a=void 0,o=void 0;for(t||(t=c.isArray(arguments.length<=1?void 0:arguments[1])?[]:{});e<n;e++)if(r=arguments.length<=e+1?void 0:arguments[e+1])for(u in r)a=t[u],o=r[u],a&&a===o||(c.isArray(o)?t[u]=c.extend([],o):c.isObject(o)?t[u]=c.extend(a&&c.isObject(a)?a:{},o):t[u]=o);return t},getDestructResult:function(t,e){var n={},r={};return t=(t=Array.isArray(t)?t:[t]).map(function(t){return t.indexOf(":")>-1&&(r[t.split(":")[0]]=t.split(":")[1]),t.split(":")[0]}),(0,u.default)(e).forEach(function(u){t.indexOf(u)>-1&&(n[r[u]||u]=e[u])}),n},getQueryJoin:function(t){return o.default.stringify(t)},getTrimedResult:function(t){var e=this;return"string"==typeof t?t.trim():"[object Object]"===Object.prototype.toString.call(t)?((0,u.default)(t).forEach(function(n){t[n]=e.getTrimedResult(t[n])}),t):"[object Array]"===Object.prototype.toString.call(t)?t.map(function(t){return e.getTrimedResult(t)}):t},renameKeys:function(t,e,n){if(!e||"object"!==(void 0===e?"undefined":(0,r.default)(e)))return t;if(Array.isArray(t)){for(var u=[],a=0;a<t.length;a++)u.push(c.renameKeys(t[a],e));return u}if("object"!==(void 0===t?"undefined":(0,r.default)(t)))return t;var o={},i=c.extend({},t);for(var s in e)if("object"===(0,r.default)(e[s])&&i.hasOwnProperty(s))i[s]=c.renameKeys(i[s],e[s]),o[s]=c.renameKeys(i[s],e[s]);else if(i.hasOwnProperty(s)&&s!==e[s]){var l=i[s];i[e[s]]=l,o[e[s]]=l,delete i[s]}return n?o:i},dateTimeFormat:function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e},get uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},interop:function(t){return t&&t.__esModule?t.default:t}};e.default=c},201:function(t,e,n){"use strict";n.r(e);var r=n(123),u=n(58);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(202);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"52b166e4",null);i.options.__file="src/app/cube/scope/layouts/404.vue",e.default=i.exports},202:function(t,e,n){"use strict";var r=n(60);n.n(r).a},224:function(t,e){},226:function(t,e){},259:function(t,e){},260:function(t,e){},312:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(313));e.default={cube:r.default}},313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(173)),u=o(n(27)),a=o(n(20));function o(t){return t&&t.__esModule?t:{default:t}}e.default={namespaced:!0,state:{packages:[],routeMeta:{},isTreeSaved:!1,tree:{id:null,struct:{tag:"block-root",uuid:a.default.uuid,label:"页面容器",root:!0,selected:!0,properties:{props:{r:"根节点的属性",rr:{rrr:"根节点嵌套属性"}}},slots:[]}}},getters:{tree:function(t){return(0,u.default)({},t.tree)},struct:function(t){return(0,u.default)({},t.tree.struct)},packages:function(t){return[].concat((0,r.default)(t.packages))},routeMeta:function(t){return(0,u.default)({},t.routeMeta)},structChange:function(t){return function(){return(0,u.default)({},t.tree.struct)}}},mutations:{updateRouteMeta:function(t,e){t.routeMeta=(0,u.default)({},e)},addPackages:function(t,e){t.packages=[].concat((0,r.default)(e))},updateTree:function(t,e){t.tree=(0,u.default)({},e)},updateTreeSaved:function(t,e){t.isTreeSaved=e},updateTreeStruct:function(t,e){t.tree.struct=(0,u.default)({},e)}},actions:{}}},318:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(319));t.exports={path:"dashboard",meta:{},component:r.default}},319:function(t,e,n){"use strict";n.r(e);var r=n(121),u=n(61);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(371);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"50ab0246",null);i.options.__file="src/app/cube/dashboard/home.vue",e.default=i.exports},320:function(t,e,n){"use strict";n.r(e);var r=n(127),u=n(63);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(322);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"02c6e0b0",null);i.options.__file="src/app/cube/dashboard/cube-list.vue",e.default=i.exports},322:function(t,e,n){"use strict";var r=n(65);n.n(r).a},324:function(t,e,n){"use strict";n.r(e);var r=n(126),u=n(66);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(333);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"04383a42",null);i.options.__file="src/app/cube/dashboard/cube-struct.vue",e.default=i.exports},333:function(t,e,n){"use strict";var r=n(68);n.n(r).a},335:function(t,e,n){"use strict";var r=n(71);n.n(r).a},337:function(t,e,n){"use strict";var r=n(72);n.n(r).a},339:function(t,e,n){"use strict";n.r(e);var r=n(124),u=n(73);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(369);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"732d97ed",null);i.options.__file="src/app/cube/dashboard/cube-prop.vue",e.default=i.exports},340:function(t,e,n){"use strict";n.r(e);var r=n(128),u=n(75);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(341);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"90bbd1ba",null);i.options.__file="src/app/cube/dashboard/cube-prop-item.vue",e.default=i.exports},341:function(t,e,n){"use strict";var r=n(77);n.n(r).a},368:function(t,e,n){var r={"./block-a.vue":[402,1],"./block-b.vue":[403,2],"./block-c.vue":[404,3],"./block-d.vue":[405,4],"./block-e.vue":[406,5],"./block-root.vue":[407,6]};function u(t){var e=r[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}u.keys=function(){return Object.keys(r)},u.id=368,t.exports=u},369:function(t,e,n){"use strict";var r=n(78);n.n(r).a},371:function(t,e,n){"use strict";var r=n(79);n.n(r).a},373:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(374));t.exports={path:"preview",meta:{},component:r.default}},374:function(t,e,n){"use strict";n.r(e);var r=n(122),u=n(80);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(375);var o=n(4),i=Object(o.a)(u.default,r.a,r.b,!1,null,"7428d22e",null);i.options.__file="src/app/cube/preview/home.vue",e.default=i.exports},375:function(t,e,n){"use strict";var r=n(82);n.n(r).a},377:function(t,e,n){"use strict";var r=o(n(83)),u=o(n(24)),a=o(n(378));function o(t){return t&&t.__esModule?t:{default:t}}(0,r.default)(a.default).forEach(function(t){u.default.filter(t,a.default[t])})},378:function(t,e,n){"use strict";t.exports={_addSuffix:function(t,e){return t+e}}},379:function(t,e,n){"use strict";c(n(380));var r=c(n(382)),u=(c(n(383)),c(n(385))),a=(c(n(390)),c(n(392))),o=(c(n(393)),c(n(395)));n(396);var i=c(n(24));function c(t){return t&&t.__esModule?t:{default:t}}i.default.prototype.$ELEMENT={size:"small",zIndex:3e3},i.default.use(o.default),i.default.use(a.default),i.default.use(u.default),i.default.use(r.default)},398:function(t,e,n){"use strict";var r=i(n(24)),u=i(n(20)),a=i(n(399)),o=i(n(116));function i(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{treeInst:new o.default}},computed:{}};r.default.mixin(u.default.extend({},c,a.default))},399:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(27));e.default={methods:{},computed:{currentRouteData:function(){var t=this.$router.history.current,e=(0,r.default)({},t);return e.matched=e.matched.map(function(t){return{name:t.name,path:t.path,regex:t.regex}}),e}}}},400:function(t,e,n){},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(24)),u=o(n(55)),a=o(n(312));function o(t){return t&&t.__esModule?t:{default:t}}r.default.use(u.default);e.default=new u.default.Store({state:{},mutations:{},actions:{},getters:{},modules:a.default,plugins:[],strict:!1})},56:function(t,e,n){"use strict";n.r(e);var r=n(57),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},58:function(t,e,n){"use strict";n.r(e);var r=n(59),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(62),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(27)),u=d(n(20)),a=d(n(54)),o=n(55),i=d(n(320)),c=d(n(324)),s=d(n(180)),l=d(n(339));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CubeList:i.default,CubeStruct:c.default,CubePreview:s.default,CubeProp:l.default},data:function(){return{treeId:null,saveLoading:!1}},methods:{boradcastStructChange:function(){console.debug("structChange..."),this.$root.bus.$emit("structChange")},saveCacheTree:function(){var t=this;this.saveLoading=!0,setTimeout(function(){t.treeInst.setCacheTree(t.treeId),t.boradcastStructChange(),t.saveLoading=!1},300)}},computed:(0,r.default)({},(0,o.mapGetters)("cube",["tree","struct"]),(0,o.mapState)("cube",["isTreeSaved"])),mounted:function(){var t=this;this.treeId=this.currentRouteData.query.id;var e=this.treeInst.getCacheTree(this.treeId);e.id||((e=u.default.extend({},this.tree)).id=this.treeId,this.treeInst.setCacheTree(this.treeId)),a.default.commit("cube/updateTree",e),this.$store.watch(this.$store.getters["cube/structChange"],function(n,r){u.default.isDeepEqual(n,r)||t.boradcastStructChange(),a.default.commit("cube/updateTreeSaved",u.default.isDeepEqual(e,t.tree))}),this.boradcastStructChange()}}},63:function(t,e,n){"use strict";n.r(e);var r=n(64),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(27)),u=o(n(114)),a=n(55);function o(t){return t&&t.__esModule?t:{default:t}}e.default={props:{},components:{},data:function(){return{}},methods:{bindDragEvent:function(){document.querySelectorAll(".block-component-item").forEach(function(t,e){t.ondragstart=null,t.ondrag=null,t.ondragend=null}),document.querySelectorAll(".block-component-item").forEach(function(t,e){t.ondragstart=function(t){var e={uuid:null,tag:t.target.getAttribute("data-block-tag"),label:t.target.getAttribute("data-block-label")};window.localStorage.setItem("drag-info",(0,u.default)(e))},t.ondrag=function(t){},t.ondragend=function(t){}})}},computed:(0,r.default)({},(0,a.mapGetters)("cube",["packages"])),mounted:function(){this.bindDragEvent()}}},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(67),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},67:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(27)),u=s(n(325)),a=s(n(114)),o=s(n(20)),i=n(55),c=s(n(328));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"MenuVue",props:{menu:{type:Object,default:function(){return{}}}},components:{},data:function(){return{}},methods:{setSelectedNode:function(t){this.treeInst.selectNodeByUid(t.uuid)},deleteNode:function(t){this.treeInst.deleteNodeByUid(t.uuid)},getPackageSlots:function(t){var e=this.packages.filter(function(e){return e.tag===t})[0]||{};return e.config.slots||(e.config.slots=!1),e.config.slots},removeAllDragOver:function(){c.default.findAll(".cube-seat").forEach(function(t){c.default.removeClass(t,"drag-over")})},closest:function(t,e){var n=void 0;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(t){return"function"==typeof document.body[t]&&(n=t,!0)});for(var r=void 0;t;){if((r=t.parentElement)&&r[n](e))return r;t=r}return null},bindDragEvent:function(){document.querySelectorAll(".cube-struct").forEach(function(t,e){t.ondragstart=null,t.ondrag=null,t.ondragend=null}),document.querySelectorAll(".cube-struct").forEach(function(t,e){t.ondragstart=function(t){var e={uuid:t.target.getAttribute("data-uuid")};window.localStorage.setItem("drag-info",(0,a.default)(e))},t.ondrag=function(t){},t.ondragend=function(t){}})},bindDropEvent:function(){document.querySelectorAll(".cube-seat").forEach(function(t,e){t.ondragenter=null,t.ondragover=null,t.ondragleave=null,t.ondrop=null});var t=this;document.querySelectorAll(".cube-seat").forEach(function(e,n){e.ondragenter=function(t){t.preventDefault()},e.ondragover=function(n){n.preventDefault(),n.stopPropagation(),t.removeAllDragOver();var r=n.toElement||n.relatedTarget,u=JSON.parse(window.localStorage.getItem("drag-info")).uuid;u&&document.querySelectorAll('.cube-struct[data-uuid="'+u+'"]')[0].contains(r)||c.default.addClass(e,"drag-over")},e.ondragleave=function(n){n.preventDefault(),n.stopPropagation();var r=n.fromElement||n.relatedTarget,u=n.toElement||n.relatedTarget;t.closest(r,".cube-seat")?this.contains(u)&&u.getAttribute("class").indexOf("cube-seat")>-1&&(t.removeAllDragOver(),c.default.addClass(e,"drag-over")):t.removeAllDragOver()},e.ondrop=function(e){e.stopPropagation(),e.preventDefault();var n=document.querySelectorAll(".drag-over")[0];if(t.removeAllDragOver(),n){var r=JSON.parse(window.localStorage.getItem("drag-info")),a=n.getAttribute("data-put-before"),i=n.getAttribute("data-uuid"),c=n.getAttribute("data-slot-name"),s=null;if(a&&(c=(t.treeInst.getNodeByUid(i).properties||{}).slot||"default"),r.uuid)i!==r.uuid&&(s=t.treeInst.deleteNodeByUid(r.uuid),c&&(s.properties=s.properties||{},s.properties.slot=c));else{var l=o.default.uuid;s={tag:r.tag,uuid:l,label:r.label,selected:!0,properties:{props:(0,u.default)({},r.tag.split("-")[1],"新建节点"+r.label),attrs:{id:l},slot:c},ref:l}}t.treeInst[a?"insertNodeBefore":"addNode"](i,s),setTimeout(function(){t.bindDragDropEvent()},50)}else console.warn("没有获取到目标位置")}})},bindDragDropEvent:function(){this.bindDragEvent(),this.bindDropEvent()}},computed:(0,r.default)({},(0,i.mapGetters)("cube",["packages"])),mounted:function(){this.bindDragDropEvent()}}},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var r=n(70),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},70:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},computed:{},watch:{},mounted:function(){var t=this;this.$root.$data.bus.$on("structChange",function(){t.treeInst.renderTree()})}}},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(74),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(20)),u=a(n(340));function a(t){return t&&t.__esModule?t:{default:t}}var o=new(a(n(116)).default);e.default={data:function(){return{bindProps:o.getSeletedNode().properties.props}},components:{PropItemVue:u.default},methods:{},computed:{selectedNode:function(){return this.treeInst.getSeletedNode()},selectedProps:function(){return r.default.extend({},this.selectedNode.properties.props)},selectedUid:function(){return this.selectedNode.uuid}},watch:{selectedNode:{deep:!0,handler:function(t,e){t.uuid!==e.uuid&&(this.bindProps=this.selectedProps)}},bindProps:{deep:!0,handler:function(t,e){this.treeInst.matchUpdateNodeByUid(this.selectedUid,function(e){e.properties.props=r.default.extend({},t)})}}},mounted:function(){}}},75:function(t,e,n){"use strict";n.r(e);var r=n(76),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(20));e.default={name:"PropItemVue",props:{attrs:Object},methods:{isObject:function(t){return r.default.isObject(t)}},mounted:function(){}}},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(81),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(180)),u=a(n(116));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CubePreview:r.default},data:function(){return{}},mounted:function(){var t=this.currentRouteData.query.id,e=this.treeInst.getCacheTree(t);new u.default(e).renderTree()}}},82:function(t,e,n){}});