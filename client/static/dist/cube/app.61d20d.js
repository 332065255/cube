!function(t){function e(e){for(var r,a,i=e[0],c=e[1],s=e[2],d=0,f=[];d<i.length;d++)a=i[d],u[a]&&f.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==u[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},u={0:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/dist/cube";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;o.push([218,1]),n()}([,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(226)),u=i(n(101)),o=i(n(243)),a=i(n(328));function i(t){return t&&t.__esModule?t:{default:t}}var c={isDeepEqual:i(n(331)).default,isNumber:function(t){return"number"==typeof t&&isFinite(t)},isUndefined:function(t){return void 0===t},isArray:function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isFunction:function(t){return"function"==typeof t},isString:function(t){return"[object String]"===Object.prototype.toString.call(t)},md5:function(t){return o.default.createHash("md5").update(t+"","utf8").digest("hex")},getPageID:function(){return window.location.pathname.split("?")[0].replace(/^\//,"").split("/").join("-")},getRouterMeta:function(t){var e={};return Array.prototype.slice.call(t).forEach(function(t){t.meta&&(e=c.extend(e,t.meta))}),e},queryURL:function(t,e){var n={};return(t=t.replace(/^[^?=]*\?/gi,"").split("#")[0]).replace(/(^|&)([^&=]+)=([^&]*)/g,function(t,e,r,u){try{r=decodeURIComponent(r)}catch(t){}try{u=decodeURIComponent(u)}catch(t){}r in n?n[r]instanceof Array?n[r].push(u):n[r]=[n[r],u]:n[r]=/\[\]$/.test(r)?[u]:u}),e?n[e]:n},encodeURIJson:function(t){var e=[];for(var n in t)if(null!==t[n])if(t[n]instanceof Array)for(var r=0;r<t[n].length;r++)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n][r]));else e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")},extend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=0,n=arguments.length<=1?0:arguments.length-1,r=void 0,u=void 0,o=void 0,a=void 0;for(t||(t=c.isArray(arguments.length<=1?void 0:arguments[1])?[]:{});e<n;e++)if(r=arguments.length<=e+1?void 0:arguments[e+1])for(u in r)o=t[u],a=r[u],o&&o===a||(c.isArray(a)?t[u]=c.extend([],a):c.isObject(a)?t[u]=c.extend(o&&c.isObject(o)?o:{},a):t[u]=a);return t},getDestructResult:function(t,e){var n={},r={};return t=(t=Array.isArray(t)?t:[t]).map(function(t){return t.indexOf(":")>-1&&(r[t.split(":")[0]]=t.split(":")[1]),t.split(":")[0]}),(0,u.default)(e).forEach(function(u){t.indexOf(u)>-1&&(n[r[u]||u]=e[u])}),n},getQueryJoin:function(t){return a.default.stringify(t)},getTrimedResult:function(t){var e=this;return"string"==typeof t?t.trim():"[object Object]"===Object.prototype.toString.call(t)?((0,u.default)(t).forEach(function(n){t[n]=e.getTrimedResult(t[n])}),t):"[object Array]"===Object.prototype.toString.call(t)?t.map(function(t){return e.getTrimedResult(t)}):t},renameKeys:function(t,e,n){if(!e||"object"!==(void 0===e?"undefined":(0,r.default)(e)))return t;if(Array.isArray(t)){for(var u=[],o=0;o<t.length;o++)u.push(c.renameKeys(t[o],e));return u}if("object"!==(void 0===t?"undefined":(0,r.default)(t)))return t;var a={},i=c.extend({},t);for(var s in e)if("object"===(0,r.default)(e[s])&&i.hasOwnProperty(s))i[s]=c.renameKeys(i[s],e[s]),a[s]=c.renameKeys(i[s],e[s]);else if(i.hasOwnProperty(s)&&s!==e[s]){var l=i[s];i[e[s]]=l,a[e[s]]=l,delete i[s]}return n?a:i},dateTimeFormat:function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e},get uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},interop:function(t){return t&&t.__esModule?t.default:t}};e.default=c},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(24)),u=a(n(55)),o=a(n(355));function a(t){return t&&t.__esModule?t:{default:t}}r.default.use(u.default);e.default=new u.default.Store({state:{},mutations:{},actions:{},getters:{},modules:o.default,plugins:[],strict:!1})},,function(t,e,n){"use strict";n.r(e);var r=n(57),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{r:String,rr:{rrr:String}},components:{},data:function(){return{}},methods:{},computed:{},mounted:function(){}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(60),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{a:String},components:{},data:function(){return{}},methods:{clickTest:function(){console.info(this.a)}},computed:{},mounted:function(){}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(63),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{b:String},components:{},data:function(){return{}},methods:{},computed:{},mounted:function(){console.info("b123456")}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(66),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{c:String},components:{},data:function(){return{}},methods:{},computed:{},mounted:function(){}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(69),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{d:String},components:{},data:function(){return{}},methods:{},computed:{},mounted:function(){}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(72),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{e:String},components:{},data:function(){return{}},methods:{},computed:{},mounted:function(){}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(75),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,n){"use strict";n.r(e);var r=n(77),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(80),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(29)),u=d(n(16)),o=d(n(54)),a=n(55),i=d(n(363)),c=d(n(367)),s=d(n(210)),l=d(n(382));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CubeList:i.default,CubeStruct:c.default,CubePreview:s.default,CubeProp:l.default},data:function(){return{treeId:null,saveLoading:!1}},methods:{boradcastStructChange:function(){console.debug("structChange..."),this.$root.bus.$emit("structChange")},saveCacheTree:function(){var t=this;this.saveLoading=!0,setTimeout(function(){t.treeInst.setCacheTree(t.treeId),t.boradcastStructChange(),t.saveLoading=!1},300)}},computed:(0,r.default)({},(0,a.mapGetters)("cube",["tree","struct"]),(0,a.mapState)("cube",["isTreeSaved"])),mounted:function(){var t=this;this.treeId=this.currentRouteData.query.id;var e=this.treeInst.getCacheTree(this.treeId);e.id||((e=u.default.extend({},this.tree)).id=this.treeId,this.treeInst.setCacheTree(this.treeId)),o.default.commit("cube/updateTree",e),this.$store.watch(this.$store.getters["cube/structChange"],function(n,r){u.default.isDeepEqual(n,r)||t.boradcastStructChange(),o.default.commit("cube/updateTreeSaved",u.default.isDeepEqual(e,t.tree))}),this.boradcastStructChange()}}},function(t,e,n){"use strict";n.r(e);var r=n(82),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(29)),u=a(n(132)),o=n(55);function a(t){return t&&t.__esModule?t:{default:t}}e.default={props:{},components:{},data:function(){return{}},methods:{bindDragEvent:function(){document.querySelectorAll(".block-component-item").forEach(function(t,e){t.ondragstart=null,t.ondrag=null,t.ondragend=null}),document.querySelectorAll(".block-component-item").forEach(function(t,e){t.ondragstart=function(t){var e={uuid:null,tag:t.target.getAttribute("data-block-tag"),label:t.target.getAttribute("data-block-label")};window.localStorage.setItem("drag-info",(0,u.default)(e))},t.ondrag=function(t){},t.ondragend=function(t){}})}},computed:(0,r.default)({},(0,o.mapGetters)("cube",["packages"])),mounted:function(){this.bindDragEvent()}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(85),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(29)),u=s(n(368)),o=s(n(132)),a=s(n(16)),i=n(55),c=s(n(371));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"MenuVue",props:{menu:{type:Object,default:function(){return{}}}},components:{},data:function(){return{}},methods:{setSelectedNode:function(t){this.treeInst.selectNodeByUid(t.uuid)},deleteNode:function(t){this.treeInst.deleteNodeByUid(t.uuid)},getPackageSlots:function(t){var e=this.packages.filter(function(e){return e.tag===t})[0]||{};return e.config.slots||(e.config.slots=!1),e.config.slots},removeAllDragOver:function(){c.default.findAll(".cube-seat").forEach(function(t){c.default.removeClass(t,"drag-over")})},closest:function(t,e){var n=void 0;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(t){return"function"==typeof document.body[t]&&(n=t,!0)});for(var r=void 0;t;){if((r=t.parentElement)&&r[n](e))return r;t=r}return null},bindDragEvent:function(){document.querySelectorAll(".cube-struct").forEach(function(t,e){t.ondragstart=null,t.ondrag=null,t.ondragend=null}),document.querySelectorAll(".cube-struct").forEach(function(t,e){t.ondragstart=function(t){var e={uuid:t.target.getAttribute("data-uuid")};window.localStorage.setItem("drag-info",(0,o.default)(e))},t.ondrag=function(t){},t.ondragend=function(t){}})},bindDropEvent:function(){document.querySelectorAll(".cube-seat").forEach(function(t,e){t.ondragenter=null,t.ondragover=null,t.ondragleave=null,t.ondrop=null});var t=this;document.querySelectorAll(".cube-seat").forEach(function(e,n){e.ondragenter=function(t){t.preventDefault()},e.ondragover=function(n){n.preventDefault(),n.stopPropagation(),t.removeAllDragOver();var r=n.toElement||n.relatedTarget,u=JSON.parse(window.localStorage.getItem("drag-info")).uuid;u&&document.querySelectorAll('.cube-struct[data-uuid="'+u+'"]')[0].contains(r)||c.default.addClass(e,"drag-over")},e.ondragleave=function(n){n.preventDefault(),n.stopPropagation();var r=n.fromElement||n.relatedTarget,u=n.toElement||n.relatedTarget;t.closest(r,".cube-seat")?this.contains(u)&&u.getAttribute("class").indexOf("cube-seat")>-1&&(t.removeAllDragOver(),c.default.addClass(e,"drag-over")):t.removeAllDragOver()},e.ondrop=function(e){e.stopPropagation(),e.preventDefault();var n=document.querySelectorAll(".drag-over")[0];if(t.removeAllDragOver(),n){var r=JSON.parse(window.localStorage.getItem("drag-info")),o=n.getAttribute("data-put-before"),i=n.getAttribute("data-uuid"),c=n.getAttribute("data-slot-name"),s=null;if(o&&(c=(t.treeInst.getNodeByUid(i).properties||{}).slot||"default"),r.uuid)i!==r.uuid&&(s=t.treeInst.deleteNodeByUid(r.uuid),c&&(s.properties=s.properties||{},s.properties.slot=c));else{var l=a.default.uuid;s={tag:r.tag,uuid:l,label:r.label,selected:!0,properties:{props:(0,u.default)({},r.tag.split("-")[1],"新建节点"+r.label),attrs:{id:l},slot:c},ref:l}}t.treeInst[o?"insertNodeBefore":"addNode"](i,s),setTimeout(function(){t.bindDragDropEvent()},50)}else console.warn("没有获取到目标位置")}})},bindDragDropEvent:function(){this.bindDragEvent(),this.bindDropEvent()}},computed:(0,r.default)({},(0,i.mapGetters)("cube",["packages"])),mounted:function(){this.bindDragDropEvent()}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(88),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},computed:{},watch:{},mounted:function(){var t=this;this.$root.$data.bus.$on("structChange",function(){t.treeInst.renderTree()})}}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(92),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(16)),u=o(n(383));function o(t){return t&&t.__esModule?t:{default:t}}var a=new(o(n(134)).default);e.default={data:function(){return{bindProps:a.getSeletedNode().properties.props}},components:{PropItemVue:u.default},methods:{},computed:{selectedNode:function(){return this.treeInst.getSeletedNode()},selectedProps:function(){return r.default.extend({},this.selectedNode.properties.props)},selectedUid:function(){return this.selectedNode.uuid}},watch:{selectedNode:{deep:!0,handler:function(t,e){t.uuid!==e.uuid&&(this.bindProps=this.selectedProps)}},bindProps:{deep:!0,handler:function(t,e){this.treeInst.matchUpdateNodeByUid(this.selectedUid,function(e){e.properties.props=r.default.extend({},t)})}}},mounted:function(){}}},function(t,e,n){"use strict";n.r(e);var r=n(94),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(16));e.default={name:"PropItemVue",props:{attrs:Object},methods:{isObject:function(t){return r.default.isObject(t)}},mounted:function(){}}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(99),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=u.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(210)),u=o(n(134));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CubePreview:r.default},data:function(){return{}},mounted:function(){var t=this.currentRouteData.query.id,e=this.treeInst.getCacheTree(t);new u.default(e).renderTree()}}},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=v(n(386)),u=v(n(211)),o=v(n(396)),a=v(n(132)),i=v(n(203)),c=v(n(397)),s=v(n(398)),l=v(n(399)),d=v(n(54)),f=v(n(16)),p=v(n(24));function v(t){return t&&t.__esModule?t:{default:t}}var b=new l.default,h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c.default)(this,t),e.id&&(this.setCacheTree(e.id,e.struct),d.default.commit("cube/updateTree",e))}return(0,s.default)(t,[{key:"getTreeId",value:function(){return d.default.state.cube.tree.id}},{key:"getCacheId",value:function(t){return"tree"+t}},{key:"getStruct",value:function(){return f.default.extend({},d.default.state.cube.tree.struct)}},{key:"getUsedComponents",value:function(){var t=this.getStruct(),e=new l.default;return function t(n){n.tag&&e.add(n.tag),n.slots&&n.slots.forEach(function(e){t(e)})}(t),[].concat((0,i.default)(e))}},{key:"setCacheTree",value:function(t,e){var n=this.getCacheId(t);window.localStorage.setItem(n,(0,a.default)({id:t,struct:e||this.getStruct()})),d.default.commit("cube/updateTreeSaved",!0)}},{key:"getCacheTree",value:function(t){var e=this.getCacheId(t);return JSON.parse(window.localStorage.getItem(e)||"{}")}},{key:"getRootUid",value:function(){return this.getStruct().uuid}},{key:"getRandomUid",value:function(){var t=[];return function e(n){t.push(n.uuid),n.slots&&n.slots.forEach(function(t){e(t)})}(this.getStruct()),t[Math.floor(Math.random()*t.length)]}},{key:"getNodeByUid",value:function(t){var e=null;return function n(r){r.uuid===t?e=r:!e&&r.slots&&r.slots.forEach(function(t){n(t)})}(this.getStruct()),e}},{key:"selectNodeByUid",value:function(t){var e=this.getStruct(),n=null;return function e(r){r.uuid===t?(n=r,r.selected=!0):r.selected=!1,r.slots&&r.slots.forEach(function(t){e(t)})}(e),d.default.commit("cube/updateTreeStruct",e),n}},{key:"getSeletedNode",value:function(){var t=!1;return function e(n){n.selected?t=n:!t&&n.slots&&n.slots.forEach(function(t){e(t)})}(this.getStruct()),t}},{key:"addNode",value:function(t,e){var n=this.getStruct(),r=!1;!function n(u){r||u.uuid!==t||(r=!0,u.slots=u.slots||[],u.slots.push(e)),!r&&u.slots&&u.slots.forEach(function(t){n(t)})}(n),d.default.commit("cube/updateTreeStruct",n),this.selectNodeByUid(e.uuid)}},{key:"insertNodeBefore",value:function(t,e){var n=this.getStruct(),r=null;!function n(u){u.slots&&u.slots.forEach(function(o,a){r||(o.uuid===t?(r=o,u.slots.splice(a,0,e)):n(o))})}(n),d.default.commit("cube/updateTreeStruct",n),this.selectNodeByUid(e.uuid)}},{key:"deleteNodeByUid",value:function(t){var e=this.getStruct(),n=!1,r=!1;return function e(u){if(u.uuid===t&&u.root)throw new Error("根节点不允许删除");!r&&u.slots&&u.slots.forEach(function(o,a){o.uuid===t?(r=o,n=o.selected,u.slots.splice(a,1)):e(o)})}(e),d.default.commit("cube/updateTreeStruct",e),!n&&this.getSeletedNode()||this.selectNodeByUid(this.getRootUid()),r}},{key:"travelUpdateNodeByUid",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=this.getStruct();!function r(u){u.uuid===t?e(u):n(u),u.slots&&u.slots.forEach(function(t){r(t)})}(r),d.default.commit("cube/updateTreeStruct",r)}},{key:"matchUpdateNodeByUid",value:function(t,e){var n=this.getStruct(),r=!1;!function n(u){r||u.uuid!==t||(r=!0,e(u)),!r&&u.slots&&u.slots.forEach(function(t){n(t)})}(n),d.default.commit("cube/updateTreeStruct",n)}},{key:"renderTree",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cube-preview",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cube-preview-inner";if(!document.getElementById(e))throw new Error("外部容器不存在");var i=this.getUsedComponents().map(function(e){if(!b.has(e))return b.add(e),Promise.resolve().then((0,o.default)(r.default.mark(function o(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p.default.component(e,p.default.extend(n(414)("./"+e+".vue").default)),t.abrupt("return",u.default.resolve(e));case 2:case"end":return t.stop()}},o,t)})).bind(null,n)).catch(n.oe)});u.default.all(i).then(function(){var n=t.getStruct(),r=p.default.component("root-component",{render:function(t){return function t(e,n){var r=e.tag,u=e.properties||{},o=e.slots||[];return e.selected&&(e.properties.class=e.properties.class||{},e.properties.class["cube-selected"]=!0),n(r,u,o.map(function(e){return t(e,n)}))}(n,t)}});document.getElementById(a)||(document.getElementById(e).outerHTML='<div id="'+e+'"><div id="'+a+'"></div></div>'),(new r).$mount("#"+a)})}}]),t}();e.default=h},,,,function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  e: "+this._s(this.e)+"\n")])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blank"},[e("router-view")],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  b: "+this._s(this.b)+"\n")])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"click-btn",on:{click:this.clickTest}},[this._v(" a: "+this._s(this.a)+" ")]),this._v(" "),this._t("header")],2)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  c: "+this._s(this.c)+"\n")])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  d: "+this._s(this.d)+"\n")])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("r: "+t._s(t.r))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("rrr: "+t._s(t.rr.rrr))]),t._v(" "),t._t("default")],2)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},u=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error-wrap"},[e("img",{staticClass:"error-404",attrs:{src:"/static/img/common/error-404.png"}})])}];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole-container"},[n("el-row",[n("el-col",{staticStyle:{float:"right","text-align":"right"},attrs:{span:6}},[n("el-button",{attrs:{type:t.isTreeSaved?"success":"danger",loading:t.saveLoading},on:{click:t.saveCacheTree}},[t._v("\n        "+t._s(t.isTreeSaved?"已保存":"点击保存")+"\n      ")])],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:3}},[n("h4",{staticClass:"col-title"},[t._v("组件列表")]),t._v(" "),n("div",{staticClass:"grid-content cube-list-grid"},[n("CubeList")],1)]),t._v(" "),n("el-col",{attrs:{span:5}},[n("h4",{staticClass:"col-title"},[t._v("组件操作")]),t._v(" "),n("div",{staticClass:"grid-content cube-tree-grid"},[n("CubeStruct",{attrs:{menu:t.struct}})],1)]),t._v(" "),n("el-col",{attrs:{span:9}},[n("h4",{staticClass:"col-title"},[t._v("预览展示")]),t._v(" "),n("div",{staticClass:"grid-content cube-preview-grid"},[n("CubePreview")],1)]),t._v(" "),n("el-col",{attrs:{span:7}},[n("h4",{staticClass:"col-title"},[t._v("属性编辑")]),t._v(" "),n("div",{staticClass:"grid-content cube-prop-grid"},[n("CubeProp")],1)])],1)],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview-page"},[e("div",{attrs:{id:"cube-preview"}},[e("CubePreview")],1)])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cube-struct",attrs:{"data-uuid":t.menu.uuid,draggable:"true"}},[n("div",{staticClass:"menu-item-group"},[t.menu.root?t._e():n("div",{staticClass:"cube-seat before",attrs:{"data-uuid":t.menu.uuid,"data-put-before":!0}}),t._v(" "),n("div",{class:{"menu-item":!0,normal:!t.menu.root,root:t.menu.root,selected:t.menu.selected},attrs:{"data-tag":t.menu.tag},on:{click:function(e){t.setSelectedNode(t.menu)}}},[t._v("\n\n      "+t._s(t.menu.label)+"\n\n      "),t._v(" "),t.menu.root?t._e():n("i",{staticClass:"el-icon-close menu-item__del",on:{click:function(e){e.stopPropagation(),t.deleteNode(t.menu)}}})])]),t._v(" "),!0===t.getPackageSlots(t.menu.tag)?n("ul",{staticClass:"slot-container"},[n("li",{staticClass:"slot-item"},[t._l(t.menu.slots,function(e){return"default"!==e.properties.slot&&e.properties.slot?t._e():[n("MenuVue",{key:e.uuid,attrs:{menu:e}})]}),t._v(" "),n("div",{staticClass:"cube-seat slot",attrs:{"data-uuid":t.menu.uuid,title:"匿名卡槽","data-slot-name":"default","data-slot-title":"匿名卡槽"}})],2)]):t._e(),t._v(" "),t.getPackageSlots(t.menu.tag)&&t.getPackageSlots(t.menu.tag).length>0?n("ul",{staticClass:"slot-container"},t._l(t.getPackageSlots(t.menu.tag),function(e,r){return n("li",{key:r,staticClass:"slot-item"},[t._l(t.menu.slots,function(r){return r.properties.slot===e.sname?[n("MenuVue",{key:r.uuid,attrs:{menu:r}})]:t._e()}),t._v(" "),n("div",{staticClass:"cube-seat slot",attrs:{"data-uuid":t.menu.uuid,title:e.slabel,"data-slot-name":e.sname,"data-slot-title":e.slabel}})],2)})):t._e()])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"grid-content cube-tree-preview",attrs:{id:"cube-preview"}})},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"cube-prop"}},[e("PropItemVue",{attrs:{attrs:this.bindProps}})],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cube-list"}},[n("ul",t._l(t.packages,function(e){return e.config.visible?n("li",{key:e.tag,staticClass:"block-component-item",attrs:{draggable:"true","data-block-tag":e.tag,"data-block-label":e.label}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("\n        "+t._s(e.label)+"\n      ")])],1):t._e()}))])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.attrs,function(e,r){return n("li",{key:r},[t.isObject(t.attrs[r])?n("span",[[n("div",{staticStyle:{"margin-left":"12px"}},[n("p",{staticStyle:{margin:"5px 0 0"}},[t._v(t._s(r)+"包含的属性")]),t._v(" "),n("PropItemVue",{attrs:{attrs:t.attrs[r]}})],1)]],2):n("span",[t._v("\n        "+t._s(r)+": "),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.attrs[r],callback:function(e){t.$set(t.attrs,r,e)},expression:"attrs[key]"}})],1)])}))])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(144),u=n(56);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(334);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"25efba31",null);i.options.__file="src/app/cube/packages/block-root.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(141),u=n(59);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(336);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"20d873bc",null);i.options.__file="src/app/cube/packages/block-a.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(140),u=n(62);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(338);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"20bc44ba",null);i.options.__file="src/app/cube/packages/block-b.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(142),u=n(65);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(340);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"20a015b8",null);i.options.__file="src/app/cube/packages/block-c.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(143),u=n(68);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(342);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"2083e6b6",null);i.options.__file="src/app/cube/packages/block-d.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(138),u=n(71);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(344);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"2067b7b4",null);i.options.__file="src/app/cube/packages/block-e.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(139),u=n(74);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,null,null);i.options.__file="src/app/cube/scope/layouts/blank.vue",e.default=i.exports},,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(149),u=n(87);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(378),n(380);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"1f6fb9ae",null);i.options.__file="src/app/cube/dashboard/cube-preview.vue",e.default=i.exports},,,,,,,,function(t,e,n){"use strict";var r=s(n(101)),u=s(n(24)),o=s(n(225)),a=s(n(202)),i=s(n(346)),c=s(n(54));function s(t){return t&&t.__esModule?t:{default:t}}n(423),n(425),n(444),n(446),u.default.config.devtools=!1,u.default.config.silent=!0,u.default.config.errorHandler=function(t,e){console.warn(t,e)};var l=[];(0,r.default)(o.default).forEach(function(t){l.push({tag:t,label:o.default[t].label,config:o.default[t].config})}),c.default.commit("cube/addPackages",l);var d=new u.default({el:"#root",router:i.default,store:c.default,data:{bus:new u.default},render:function(t){return t(a.default)}});u.default.use(d)},,,,,,,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(16));t.exports={"block-root":{label:"根组件",component:r.default.interop(n(196)),config:{visible:!1,slots:!0}},"block-a":{label:"组件a",component:r.default.interop(n(197)),config:{visible:!0,slots:[{sname:"header",slabel:"头部卡槽"}]}},"block-b":{label:"组件b",component:r.default.interop(n(198)),config:{visible:!0,slots:!1}},"block-c":{label:"组件c",component:r.default.interop(n(199)),config:{visible:!0,slots:!1}},"block-d":{label:"组件d",component:r.default.interop(n(200)),config:{visible:!0,slots:!1}},"block-e":{label:"组件e",component:r.default.interop(n(201)),config:{visible:!0,slots:!1}}}},,,,,,,,,,,,,,,,,,,,,function(t,e){},,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(58);n.n(r).a},,function(t,e,n){"use strict";var r=n(61);n.n(r).a},,function(t,e,n){"use strict";var r=n(64);n.n(r).a},,function(t,e,n){"use strict";var r=n(67);n.n(r).a},,function(t,e,n){"use strict";var r=n(70);n.n(r).a},,function(t,e,n){"use strict";var r=n(73);n.n(r).a},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n(29)),u=l(n(24)),o=l(n(351)),a=l(n(202)),i=l(n(352)),c=l(n(16)),s=l(n(54));function l(t){return t&&t.__esModule?t:{default:t}}u.default.use(o.default);var d=new o.default({mode:"hash",base:"/",linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",routes:[{path:"",redirect:"dashboard",component:a.default,children:[n(361),n(419)]},{path:"*",component:i.default}]});d.beforeEach(function(t,e,n){var u=c.default.getRouterMeta(t.matched);s.default.commit("cube/updateRouteMeta",(0,r.default)({},u)),n()}),d.afterEach(function(t){}),e.default=d},,,,,,function(t,e,n){"use strict";n.r(e);var r=n(145),u=n(76);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(353);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"52b166e4",null);i.options.__file="src/app/cube/scope/layouts/404.vue",e.default=i.exports},function(t,e,n){"use strict";var r=n(78);n.n(r).a},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(356));e.default={cube:r.default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(203)),u=a(n(29)),o=a(n(16));function a(t){return t&&t.__esModule?t:{default:t}}e.default={namespaced:!0,state:{packages:[],routeMeta:{},isTreeSaved:!1,tree:{id:null,struct:{tag:"block-root",uuid:o.default.uuid,label:"页面容器",root:!0,selected:!0,properties:{props:{r:"根节点的属性",rr:{rrr:"根节点嵌套属性"}}},slots:[]}}},getters:{tree:function(t){return(0,u.default)({},t.tree)},struct:function(t){return(0,u.default)({},t.tree.struct)},packages:function(t){return[].concat((0,r.default)(t.packages))},routeMeta:function(t){return(0,u.default)({},t.routeMeta)},structChange:function(t){return function(){return(0,u.default)({},t.tree.struct)}}},mutations:{updateRouteMeta:function(t,e){t.routeMeta=(0,u.default)({},e)},addPackages:function(t,e){t.packages=[].concat((0,r.default)(e))},updateTree:function(t,e){t.tree=(0,u.default)({},e)},updateTreeSaved:function(t,e){t.isTreeSaved=e},updateTreeStruct:function(t,e){t.tree.struct=(0,u.default)({},e)}},actions:{}}},,,,,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(362));t.exports={path:"dashboard",meta:{},component:r.default}},function(t,e,n){"use strict";n.r(e);var r=n(146),u=n(79);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(417);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"50ab0246",null);i.options.__file="src/app/cube/dashboard/home.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(151),u=n(81);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(365);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"02c6e0b0",null);i.options.__file="src/app/cube/dashboard/cube-list.vue",e.default=i.exports},,function(t,e,n){"use strict";var r=n(83);n.n(r).a},,function(t,e,n){"use strict";n.r(e);var r=n(148),u=n(84);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(376);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"04383a42",null);i.options.__file="src/app/cube/dashboard/cube-struct.vue",e.default=i.exports},,,,,,,,,function(t,e,n){"use strict";var r=n(86);n.n(r).a},,function(t,e,n){"use strict";var r=n(89);n.n(r).a},,function(t,e,n){"use strict";var r=n(90);n.n(r).a},,function(t,e,n){"use strict";n.r(e);var r=n(150),u=n(91);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(415);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"732d97ed",null);i.options.__file="src/app/cube/dashboard/cube-prop.vue",e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(152),u=n(93);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(384);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"90bbd1ba",null);i.options.__file="src/app/cube/dashboard/cube-prop-item.vue",e.default=i.exports},function(t,e,n){"use strict";var r=n(95);n.n(r).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r={"./block-a.vue":197,"./block-b.vue":198,"./block-c.vue":199,"./block-d.vue":200,"./block-e.vue":201,"./block-root.vue":196};function u(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}u.keys=function(){return Object.keys(r)},u.resolve=o,t.exports=u,u.id=414},function(t,e,n){"use strict";var r=n(96);n.n(r).a},,function(t,e,n){"use strict";var r=n(97);n.n(r).a},,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(420));t.exports={path:"preview",meta:{},component:r.default}},function(t,e,n){"use strict";n.r(e);var r=n(147),u=n(98);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n(421);var a=n(2),i=Object(a.a)(u.default,r.a,r.b,!1,null,"7428d22e",null);i.options.__file="src/app/cube/preview/home.vue",e.default=i.exports},function(t,e,n){"use strict";var r=n(100);n.n(r).a},,function(t,e,n){"use strict";var r=a(n(101)),u=a(n(24)),o=a(n(424));function a(t){return t&&t.__esModule?t:{default:t}}(0,r.default)(o.default).forEach(function(t){u.default.filter(t,o.default[t])})},function(t,e,n){"use strict";t.exports={_addSuffix:function(t,e){return t+e}}},function(t,e,n){"use strict";c(n(426));var r=c(n(428)),u=(c(n(429)),c(n(431))),o=(c(n(436)),c(n(438))),a=(c(n(439)),c(n(441)));n(442);var i=c(n(24));function c(t){return t&&t.__esModule?t:{default:t}}i.default.prototype.$ELEMENT={size:"small",zIndex:3e3},i.default.use(a.default),i.default.use(o.default),i.default.use(u.default),i.default.use(r.default)},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=i(n(24)),u=i(n(16)),o=i(n(445)),a=i(n(134));function i(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{treeInst:new a.default}},computed:{}};r.default.mixin(u.default.extend({},c,o.default))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(29));e.default={methods:{},computed:{currentRouteData:function(){var t=this.$router.history.current,e=(0,r.default)({},t);return e.matched=e.matched.map(function(t){return{name:t.name,path:t.path,regex:t.regex}}),e}}}},function(t,e,n){}]);