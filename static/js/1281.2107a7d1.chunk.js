"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[1281],{63231:(t,e,n)=>{function s(t){return null!=a(t)||null!=o(t)}function i(t){return l.test(t)}function r(t){var e;return null!==(e=a(t))&&void 0!==e?e:o(t)}function o(t){const e=new Date(t);return function(t,e){if(Number.isNaN(t.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(e)){const t=e.match(/[a-zA-Z]{2,}/);if(t){let e=!1,s=0;for(;!e&&s<=t.length;)e=!u.test(t[s]),s++;n=!e}}return n}(e,t)?Number.isNaN(e.getTime())?null:e.getTime()-6e4*e.getTimezoneOffset():null}function a(t){var e,n,s,i;const r=l.exec(t);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,u=+o.month-1,d=+o.day,c=+(null!==(e=o.hours)&&void 0!==e?e:"0"),h=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),p=+(null!==(s=o.seconds)&&void 0!==s?s:"0");if(c>23)return null;if(h>59)return null;if(p>59)return null;const f=null!==(i=o.ms)&&void 0!==i?i:"0",m=f?+f.padEnd(3,"0").slice(0,3):0;let g;if(o.isUTC||!o.offsetSign)g=Date.UTC(a,u,d,c,h,p,m);else{const t=+o.offsetHours,e=+o.offsetMinutes;g=6e4*("+"===o.offsetSign?-1:1)*(60*t+e)+Date.UTC(a,u,d,c,h,p,m)}return Number.isNaN(g)?null:g}n.d(e,{mu:()=>i,of:()=>s,sG:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},13491:(t,e,n)=>{n.d(e,{Q:()=>o,b:()=>w});var s=n(63780),i=(n(93169),n(10199)),r=n(36231);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=h,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),v.prune(),I.prune(),b.prune(),B.prune()}all(t){a(this._data,t)}search(t,e){let n=this._data;const s=this._toBBox;if(_(t,n))for(v.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;_(t,o)&&(n.leaf?e(r):y(t,o)?a(r,e):v.push(r))}n=v.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!_(t,e))return!1;for(v.clear();e;){for(let s=0,i=e.children.length;s<i;s++){const i=e.children[s],r=e.leaf?n(i):i;if(_(t,r)){if(e.leaf||y(t,r))return!0;v.push(i)}}e=v.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(t){if(!t)return this;let e,n=this._data,i=null,r=0,o=!1;const a=this._toBBox(t);for(b.clear(),B.clear();n||b.length>0;){var l;if(n||(n=b.pop(),i=b.data[b.length-1],r=null!==(l=B.pop())&&void 0!==l?l:0,o=!0),n.leaf&&(e=(0,s.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),b.push(n),this._condense(b),this;o||n.leaf||!y(n,a)?i?(r++,n=i.children[r],o=!1):n=null:(b.push(n),B.push(r),r=0,i=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,s){const i=n-e+1;let r=this._maxEntries;if(i<=r){const s=new S(t.slice(e,n+1));return l(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new N([]);o.height=s;const a=Math.ceil(i/r),u=a*Math.ceil(Math.sqrt(r));x(t,e,n,u,this._compareMinX);for(let l=e;l<=n;l+=u){const e=Math.min(l+u-1,n);x(t,l,e,a,this._compareMinY);for(let n=l;n<=e;n+=a){const i=Math.min(n+a-1,e);o.children.push(this._build(t,n,i,s-1))}}return l(o,this._toBBox),o}_insert(t,e,n){const s=this._toBBox,i=n?t:s(t);b.clear();const r=function(t,e,n,s){for(;s.push(e),!0!==e.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=p(o),l=m(t,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}e=n||e.children[0]}return e}(i,this._data,e,b);for(r.children.push(t),d(r,i);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;!function(t,e,n){for(let s=n;s>=0;s--)d(e.data[s],t)}(i,b,e)}_split(t,e){const n=t.data[e],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new S(o):new N(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this._data=new N([t,e]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let s,i,r;s=i=1/0;for(let o=e;o<=n-e;o++){const e=u(t,0,o,this._toBBox),a=u(t,o,n,this._toBBox),l=g(e,a),d=p(e)+p(a);l<s?(s=l,r=o,i=d<i?d:i):l===s&&d<i&&(i=d,r=o)}return r}_chooseSplitAxis(t,e,n){const s=t.leaf?this._compareMinX:c,i=t.leaf?this._compareMinY:h;this._allDistMargin(t,e,n,s)<this._allDistMargin(t,e,n,i)&&t.children.sort(s)}_allDistMargin(t,e,n,s){t.children.sort(s);const i=this._toBBox,r=u(t,0,e,i),o=u(t,n-e,n,i);let a=f(r)+f(o);for(let l=e;l<n-e;l++){const e=t.children[l];d(r,t.leaf?i(e):e),a+=f(r)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];d(o,t.leaf?i(e):e),a+=f(o)}return a}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],r=i.children;r.splice((0,s.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){let n=t;for(I.clear();n;){var s;if(!0===n.leaf)for(const t of n.children)e(t);else I.pushArray(n.children);n=null!==(s=I.pop())&&void 0!==s?s:null}}function l(t,e){u(t,0,t.children.length,e,t)}function u(t,e,n,s,i){i||(i=new S([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],d(i,t.leaf?s(r):r);return i}function d(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function y(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function _(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,s,i){const o=[e,n];for(;o.length;){const e=o.pop(),n=o.pop();if(e-n<=s)continue;const a=n+Math.ceil((e-n)/s/2)*s;(0,r.q)(t,a,n,e,i),o.push(n,a,a,e)}}const v=new i.Z,I=new i.Z,b=new i.Z,B=new i.Z({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class F extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class S extends F{constructor(t){super(),this.children=t,this.leaf=!0}}class N extends F{constructor(t){super(),this.children=t,this.leaf=!1}}},29616:(t,e,n)=>{n.d(e,{Qc:()=>d,WU:()=>a,lt:()=>u});var s=n(643),i=n(36257);const r={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i.Kd)(),e=(t=t.toLowerCase())in r;if(!e){const n=t.split("-");n.length>1&&n[0]in r&&(t=n[0],e=!0),e||(t="en")}const[n,s,o="#,##0.###"]=r[t];return{decimal:n,group:s,pattern:o}}function a(t,e){const n=o((e={...e}).locale);e.customs=n;const s=e.pattern||n.pattern;return isNaN(t)||Math.abs(t)===1/0?null:function(t,e,n){const s=(n=n||{}).customs.group,i=n.customs.decimal,r=e.split(";"),o=r[0];if((e=r[t<0?1:0]||"-"+o).includes("%"))t*=100;else if(e.includes("\u2030"))t*=1e3;else{if(e.includes("\xa4"))throw new Error("currency notation not supported");if(e.includes("E"))throw new Error("exponential notation not supported")}const a=l,u=o.match(a);if(!u)throw new Error("unable to find a number expression in pattern: "+e);return!1===n.fractional&&(n.places=0),e.replace(a,function(t,e,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const s=e.split("."),i="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;i?r=n.places.slice(i+1):+r>=0||(r=(s[1]||[]).length),n.round<0||(t=Number(t.toFixed(Number(r))));const o=String(Math.abs(t)).split("."),a=o[1]||"";if(s[1]||n.places){i&&(n.places=n.places.slice(0,Math.max(0,i)));const t=void 0!==n.places?n.places:s[1]&&s[1].lastIndexOf("0")+1;+t>a.length&&(o[1]=a.padEnd(Number(t),"0")),+r<a.length&&(o[1]=a.slice(0,Math.max(0,Number(r))))}else o[1]&&o.pop();const l=s[0].replace(",","");let u=l.indexOf("0");-1!==u&&(u=l.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),l.includes("#")||(o[0]=o[0].slice(-u)));let d,c,h=s[0].lastIndexOf(",");if(-1!==h){d=s[0].length-h-1;const t=s[0].slice(0,h);h=t.lastIndexOf(","),-1!==h&&(c=t.length-h-1)}const p=[];for(let f=o[0];f;){const t=f.length-d;p.push(t>0?f.slice(Math.max(0,t)):f),f=t>0?f.slice(0,t):"",c&&(d=c,c=void 0)}return o[0]=p.reverse().join(n.group||","),o.join(n.decimal||".")}(t,u[0],{decimal:i,group:s,places:n.places,round:n.round}))}(t,s,e)}const l=/[#0,]*[#0](?:\.0*#*)?/;function u(t){const e=o((t=t||{}).locale),n=t.pattern||e.pattern,i=e.group,r=e.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("\u2030"))a/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const u=n.split(";");1===u.length&&u.push("-"+u[0]);const d=h(u,(e=>(e="(?:"+(0,s.Qs)(e,".")+")").replace(l,(e=>{const n={signed:!1,separator:t.strict?i:[i,""],fractional:t.fractional,decimal:r,exponent:!1},s=e.split(".");let o=t.places;1===s.length&&1!==a&&(s[1]="###"),1===s.length||0===o?n.fractional=!1:(void 0===o&&(o=t.pattern?s[1].lastIndexOf("0")+1:1/0),o&&null==t.fractional&&(n.fractional=!0),!t.places&&+o<s[1].length&&(o+=","+s[1].length),n.places=o);const l=s[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(t){"places"in(t=t||{})||(t.places=1/0),"string"!=typeof t.decimal&&(t.decimal="."),"fractional"in t&&!String(t.places).startsWith("0")||(t.fractional=[!0,!1]),"exponent"in t||(t.exponent=[!0,!1]),"eSigned"in t||(t.eSigned=[!0,!1]);const e=c(t),n=h(t.fractional,(e=>{let n="";return e&&0!==t.places&&(n="\\"+t.decimal,t.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+t.places+"}"),n}),!0);let s=e+n;return n&&(s="(?:(?:"+s+")|(?:"+n+"))"),s+h(t.exponent,(e=>e?"([eE]"+c({signed:t.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:d.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:i,decimal:r,factor:a}}function d(t,e){const n=u(e),s=new RegExp("^"+n.regexp+"$").exec(t);if(!s)return NaN;let i=s[1];if(!s[1]){if(!s[2])return NaN;i=s[2],n.factor*=-1}return i=i.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(i)*n.factor}function c(t){return"signed"in(t=t||{})||(t.signed=[!0,!1]),"separator"in t?"groupSize"in t||(t.groupSize=3):t.separator="",h(t.signed,(t=>t?"[-+]":""),!0)+h(t.separator,(e=>{if(!e)return"(?:\\d+)";" "===(e=(0,s.Qs)(e))?e="\\s":"\xa0"===e&&(e="\\s\\xa0");const n=t.groupSize,i=t.groupSize2;if(i){const t="(?:0|[1-9]\\d{0,"+(i-1)+"}(?:["+e+"]\\d{"+i+"})*["+e+"]\\d{"+n+"})";return n-i>0?"(?:"+t+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":t}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+e+"]\\d{"+n+"})*)"}),!0)}const h=(t,e,n)=>{if(!Array.isArray(t))return e(t);const s=[];for(let i=0;i<t.length;i++)s.push(e(t[i]));return p(s.join("|"),Boolean(n))},p=(t,e)=>"("+(e?"?:":"")+t+")"},66020:(t,e,n)=>{n.d(e,{H:()=>l});var s=n(93169),i=n(13491),r=n(65156);const o={minX:0,minY:0,maxX:0,maxY:0};function a(t,e,n){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.Q(9,(0,s.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,s)=>{t[e++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),a(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},68928:(t,e,n)=>{n.d(e,{Z:()=>f});var s=n(63780),i=n(10064),r=n(91505),o=n(32718),a=n(41414),l=n(65156),u=n(83406),d=n(66020),c=n(3306),h=n(77835);const p=(0,a.Ue)();class f{constructor(t){this.geometryInfo=t,this._boundsStore=new d.H,this._featuresById=new Map,this.events=new r.Z,this.featureAdapter=h.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{null!=e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(null==this.fullBounds)return null;const[e,n,s,i]=this.fullBounds;return{xmin:e,ymin:n,xmax:s,ymax:i,spatialReference:(0,c.S2)(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map((t=>this._upsert(t)));return this._emitChanged(),e.filter(s.pC)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e){for(const n of t){const t=this._boundsStore.get(n.objectId);t&&e((0,a.JR)(p,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(t){var e;if(!t)return;const n=t.objectId;if(null==n)return void o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const s=this._featuresById.get(n);let r;if(s?(t.displayId=s.displayId,r=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),null===(e=t.geometry)||void 0===e||null===(e=e.coords)||void 0===e||!e.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,t);r=(0,u.$)(null!=r?r:(0,l.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(n,r),this._featuresById.set(n,t)}_upsert(t){var e;const n=null===t||void 0===t?void 0:t.objectId;if(null==n)return o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const s=this._featuresById.get(n);if(!s)return this._add(t),t;const{geometry:r,attributes:a}=t;for(const i in a)s.attributes[i]=a[i];return r&&(s.geometry=r,this._boundsStore.set(n,null!==(e=(0,u.$)((0,l.Ue)(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM))&&void 0!==e?e:null)),s}_remove(t){null!=this.onFeatureRemove&&this.onFeatureRemove(t);const e=t.objectId;return this._boundsStore.delete(e),this._featuresById.delete(e),t}}},77835:(t,e,n)=>{n.d(e,{n:()=>o});var s=n(85403),i=n(3182),r=n(80457);const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new i.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(null==t.centroid&&(t.centroid=(0,s.Y)(new r.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)}},31281:(t,e,n)=>{n.r(e),n.d(e,{default:()=>H});n(59486);var s=n(76200),i=n(14921),r=n(63231),o=n(10064),a=n(32718),l=n(66978),u=n(35995),d=n(79803),c=n(40237),h=n(92975),p=n(81753),f=n(3182),m=n(80457),g=n(68928),y=n(19995),_=n(51776),x=n(29616),v=n(37270);function I(t,e,n){var s,i;e=null===(s=(0,v.q6)(e))||void 0===s?void 0:s.toLowerCase(),n=null===(i=(0,v.q6)(n))||void 0===i?void 0:i.toLowerCase();const r=t.map((t=>t.toLowerCase())),o=e?t[r.indexOf(e)]:null,a=n?t[r.indexOf(n)]:null;return{longitudeFieldName:o||t[r.indexOf(B.find((t=>r.includes(t))))],latitudeFieldName:a||t[r.indexOf(b.find((t=>r.includes(t))))]}}const b=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],B=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],w=/^\s*"([\S\s]*)"\s*$/,F=/""/g,S="\n",N=[","," ",";","|","\t"];function*E(t,e,n){let s=0;for(;s<=t.length;){const i=t.indexOf(e,s),r=t.slice(s,i>-1?i:void 0);s+=r.length+e.length,n&&!r.trim()||(yield r)}}function M(t){const e=t.includes("\r\n")?"\r\n":S;return E(t,e,!0)}function T(t,e){return E(t,e,!1)}function C(t,e,n){var s;t=t.trim(),e=null===(s=e)||void 0===s?void 0:s.trim();const i=[],r=Array.from(new Set([null===n||void 0===n?void 0:n.delimiter,...N])).filter((t=>null!=t));for(const l of r){var o;const n=Y(t,l).length,s=null!==(o=Y(e,l).length)&&void 0!==o?o:n;n>1&&i.push({weight:Math.min(n,s),delimiter:l})}const a=i.sort(((t,e)=>{let{weight:n}=t,{weight:s}=e;return s-n})).map((t=>{let{delimiter:e}=t;return e}));for(const l of a){const e=I(O(t,l).names,null===n||void 0===n?void 0:n.longitudeField,null===n||void 0===n?void 0:n.latitudeField);if(e.longitudeFieldName&&e.latitudeFieldName)return{delimiter:l,locationInfo:e}}return{delimiter:a[0],locationInfo:null}}function A(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null);return function*(){const i=M(t);i.next();let r="",o="",a=0,l=s(),u=0;t:for(const t of i){const i=T(t,n);for(const t of i)if(r+=o+t,o="",a+=Z(t),a%2==0){if(a>0){const t=w.exec(r);if(!t){l=s(),u=0,r="",a=0;continue t}l[e[u]]=t[1].replaceAll(F,'"'),u++}else l[e[u]]=r,u++;r="",a=0}else o=n;0===a?(yield l,l=s(),u=0):o=S}}()}function O(t,e){const n=Y(t,e).filter((t=>null!=t)),s=n.map((t=>(0,v.q6)(t)));for(let i=s.length-1;i>=0;i--)s[i]||(s.splice(i,1),n.splice(i,1));return{names:s,aliases:n}}function Y(t,e){if(null===t||void 0===t||!t.length)return[];const n=[];let s="",i="",r=0;const o=T(t,e);for(const a of o)if(s+=i+a,i="",r+=Z(a),r%2==0){if(r>0){const t=w.exec(s);t&&n.push(t[1].replaceAll(F,'"'))}else n.push(s);s="",r=0}else i=e;return n}function Z(t){let e=0,n=0;for(n=t.indexOf('"',n);n>=0;)e++,n=t.indexOf('"',n+1);return e}function X(t,e,n,s,i){const r=[],o=A(t,n,e),a=[];for(const l of o){if(10===a.length)break;a.push(l)}for(let l=0;l<n.length;l++){const t=n[l],e=s[l];if(t===i.longitudeFieldName||t===i.latitudeFieldName)r.push({name:t,type:"esriFieldTypeDouble",alias:e});else{let n;switch(q(a.map((e=>e[t])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString"}r.push({name:t,type:n,alias:e,length:(0,v.ZR)(n)})}}return r}function q(t){if(!t.length)return"string";const e=/[^+\-.,0-9]/;return t.map((t=>{if(""!==t){if(!e.test(t)){let e=D(t);if(!isNaN(e))return/[.,]/.test(t)||!Number.isInteger(e)||e>214783647||e<-214783648?"double":"integer";if(t.includes("E")){if(e=Number(t),!Number.isNaN(e))return"double";if(t.includes(",")&&(t=t.replace(",","."),e=Number(t),!Number.isNaN(e)))return"double"}}return(0,r.of)(t)?"date":"string"}})).reduce(((t,e)=>void 0===t?e:void 0===e?t:t===e?e:"string"===t||"string"===e?"string":"double"===t||"double"===e?"double":void 0))}const D=function(){const t=(0,x.lt)(),e=new RegExp("^"+t.regexp+"$"),n=new RegExp("["+t.group+"\\s\\xa0]","g"),s=t.factor;return i=>{const r=e.exec(i);if(t.factor=s,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1}return o=o.replace(n,"").replace(t.decimal,"."),+o*t.factor}}();function R(t){return JSON.parse(JSON.stringify(t))}var j=n(61040),k=n(52410),Q=n(6701),U=n(78952);const z=(0,j.bU)("esriGeometryPoint"),L=["csv"],G=[0,0];class P{constructor(t,e){this.x=t,this.y=e}}class H{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;null!==(t=this._queryEngine)&&void 0!==t&&t.destroy(),this._queryEngine=null}async load(t){var e;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions=t;const[s]=await Promise.all([this._fetch(n.signal),this._checkProjection(null===t||void 0===t||null===(e=t.parsingOptions)||void 0===e?void 0:e.spatialReference)]),i=function(t,e){var n,s,i;const r=e.parsingOptions||{},a={delimiter:r.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:r.latitudeField,longitudeFieldName:r.longitudeField}},l=a.layerDefinition={name:(0,u.vt)(e.url,L)||"csv",dateFieldsTimeReference:{timeZoneIANA:Q.pt},drawingInfo:z,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:r.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:r.spatialReference||{wkid:4326}}},d=M(t),c=null===(n=d.next().value)||void 0===n?void 0:n.trim(),h=null===(s=d.next().value)||void 0===s?void 0:s.trim();if(!c)throw new o.Z("csv-layer:empty-csv","CSV is empty",{csv:t});const{delimiter:p,locationInfo:f}=C(c,h,r);if(!p)throw new o.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:c,secondLine:h,parsingOptions:r});if(!f)throw new o.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:c,secondLine:h,parsingOptions:r});a.locationInfo=f,a.delimiter=p;const{names:m,aliases:g}=O(c,p),y=X(t,a.delimiter,m,g,a.locationInfo);if(null!==(i=r.fields)&&void 0!==i&&i.length){const t=new k.Z(r.fields);for(const e of y){const n=t.get(e.name);n&&Object.assign(e,n)}}if(!y.some((t=>"esriFieldTypeOID"===t.type&&(l.objectIdField=t.name,!0)))){const t={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=t.name,y.unshift(t)}l.fields=y;const _=new k.Z(l.fields);if(a.locationInfo&&(a.locationInfo.latitudeFieldName=_.get(a.locationInfo.latitudeFieldName).name,a.locationInfo.longitudeFieldName=_.get(a.locationInfo.longitudeFieldName).name),l.timeInfo){const t=l.timeInfo;if(t.startTimeField){const e=_.get(t.startTimeField);e?(t.startTimeField=e.name,e.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const e=_.get(t.endTimeField);e?(t.endTimeField=e.name,e.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const e=_.get(t.trackIdField);t.trackIdField=e?e.name:null}t.startTimeField||t.endTimeField||(l.timeInfo=null)}return a}(s,t);this._locationInfo=i.locationInfo,this._delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const r=await this._createFeatures(s);this._queryEngine.featureStore.addMany(r);const{fullExtent:a,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=a,l){const{start:t,end:e}=l;i.layerDefinition.timeInfo.timeExtent=[t,e]}return i}async applyEdits(){throw new o.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;this._loadOptions.customParameters=t,null!==(e=this._snapshotTask)&&void 0!==e&&e.abort(),this._snapshotTask=(0,i.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),(0,l.D_)(t)||a.Z.getLogger("esri.layers.CSVLayer").error(new o.Z("csv-layer:refresh","An error occurred during refresh",{error:t}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:s}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:n}=this._loadOptions;if(!e)throw new o.Z("csv-layer:invalid-source","url not defined");const i=(0,u.mN)(e);return(await(0,s.Z)(i.path,{query:{...i.query,...n},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:n,extent:s,timeInfo:i}=t.layerDefinition,r=new g.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new _.q({fieldsIndex:k.Z.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:Q.pt}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:i,objectIdField:e,spatialReference:s.spatialReference||{wkid:4326},featureStore:r})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:n}=this._locationInfo,{objectIdField:s,fieldsIndex:i,spatialReference:o}=this._queryEngine;let a=[];const l=[],u=i.fields.filter((t=>t.name!==s)).map((t=>t.name));let g=0;const y={};for(const r of i.fields)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const t=(0,v.os)(r);void 0!==t&&(y[r.name]=t)}const _=A(t,u,this._delimiter,(0,j.Dm)(y,s));for(const d of _){const t=this._parseCoordinateValue(d[e]),o=this._parseCoordinateValue(d[n]);if(null!=o&&null!=t&&!isNaN(t)&&!isNaN(o)){d[e]=t,d[n]=o;for(const t in d)if(t!==e&&t!==n)if(i.isDateField(t))d[t]=(0,r.sG)(d[t]);else if(i.isNumericField(t)){const e=D(d[t]);isNaN(e)?d[t]=null:d[t]=e}else null!=d[t]&&(d[t]=R(d[t]));d[s]=g,g++,a.push(new P(o,t)),l.push(d)}}if(!(0,h.fS)({wkid:4326},o))if((0,h.sS)(o))for(const r of a)[r.x,r.y]=(0,p.hG)(r.x,r.y,G);else a=(0,d.projectMany)(c.N,a,U.Z.WGS84,o,null,null);const x=[];for(let r=0;r<a.length;r++){const{x:t,y:e}=a[r],n=l[r];n[s]=r+1,x.push(new f.u_(new m.Z([],[t,e]),n,null,n[s]))}return x}_parseCoordinateValue(t){if(null==t||""===t)return null;let e=D(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await(0,y._W)(h.YU,t)}catch{throw new o.Z("csv-layer:projection-not-supported","Projection not supported")}}}},61040:(t,e,n)=>{n.d(e,{Dm:()=>c,Hq:()=>p,MS:()=>f,bU:()=>l});var s=n(93169),i=n(84652),r=n(60480),o=n(96978),a=n(76115);function l(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?a.I4:"esriGeometryPolyline"===t?a.ET:a.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function c(t,e){if((0,s.Z)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let n="this".concat(h(e)," = null;");for(const e in t)n+="this".concat(h(e)," = ").concat(JSON.stringify(t[e]),";");const s=new Function("\n      return class AttributesClass$".concat(d++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new s}catch(n){return()=>({[e]:null,...t})}}function h(t){return u.test(t)?".".concat(t):'["'.concat(t,'"]')}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(t)}}]}function f(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:o.s,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},96978:(t,e,n)=>{n.d(e,{C:()=>i,s:()=>s});const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},i={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=1281.2107a7d1.chunk.js.map