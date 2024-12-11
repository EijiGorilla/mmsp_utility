"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[9887,1340,50],{91340:(e,t,n)=>{n.d(t,{it:()=>I,aX:()=>A,hR:()=>b});var a=n(42265),r=n(10064),o=n(32718),i=n(80885),s=n(29909),l=n(76335),u=n(92975),d=n(81753),c=(n(59486),n(76200)),p=n(77981),f=n(23084);var h=n(35995),y=n(35594);const m=()=>o.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function v(e){return"polyline"===e[0].type}function b(e,t){if(!(e instanceof s.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new r.Z(e)}const n=(0,l.x3)(e),a=[];for(const r of n){const e=[];a.push(e),e.push([r[0][0],r[0][1]]);for(let n=0;n<r.length-1;n++){const a=r[n][0],o=r[n][1],i=r[n+1][0],s=r[n+1][1],l=Math.sqrt((i-a)*(i-a)+(s-o)*(s-o)),u=(s-o)/l,d=(i-a)/l,c=l/t;if(c>1){for(let s=1;s<=c-1;s++){const n=s*t,r=d*n+a,i=u*n+o;e.push([r,i])}const n=(l+Math.floor(c-1)*t)/2,r=d*n+a,i=u*n+o;e.push([r,i])}e.push([i,s])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:a,spatialReference:e.spatialReference}):new s.Z({paths:a,spatialReference:e.spatialReference})}function w(e,t,n){if(t){const t=b(e,1e6);e=(0,d.Sx)(t,!0)}return n&&(e=(0,l.Sy)(e,n)),e}function F(e,t,n){if(Array.isArray(e)){const a=e[0];if(a>t){const n=(0,l.XZ)(a,t);e[0]=a+n*(-2*t)}else if(a<n){const t=(0,l.XZ)(a,n);e[0]=a+t*(-2*n)}}else{const a=e.x;if(a>t){const n=(0,l.XZ)(a,t);e=e.clone().offset(n*(-2*t),0)}else if(a<n){const t=(0,l.XZ)(a,n);e=e.clone().offset(t*(-2*n),0)}}return e}function Z(e,t){let n=-1;for(let a=0;a<t.cutIndexes.length;a++){const r=t.cutIndexes[a],o=t.geometries[a],i=(0,l.x3)(o);for(let e=0;e<i.length;e++){const t=i[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const a=t[e][0];n=a>n?a:n}n=Number(n.toFixed(9));const a=-360*(0,l.XZ)(n,180);for(let r=0;r<t.length;r++){const t=o.getPoint(e,r);o.setPoint(e,r,t.clone().offset(a,0))}return!0}}))}if(r===n){if(g(e))for(const t of(0,l.x3)(o))e[r]=e[r].addRing(t);else if(v(e))for(const t of(0,l.x3)(o))e[r]=e[r].addPath(t)}else n=r,e[r]=o}return e}async function A(e,t,n){var r;if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const o="string"==typeof t?t:null!==(r=null===t||void 0===t?void 0:t.url)&&void 0!==r?r:a.default.geometryServiceUrl;let g,v,b,I,S,R,E,x,L=0;const O=[],M=[];for(const a of e)if(null!=a)if(g||(g=a.spatialReference,v=(0,u.C5)(g),b=g.isWebMercator,R=b?102100:4326,I=l.UZ[R].maxX,S=l.UZ[R].minX,E=l.UZ[R].plus180Line,x=l.UZ[R].minus180Line),v)if("mesh"===a.type)M.push(a);else if("point"===a.type)M.push(F(a.clone(),I,S));else if("multipoint"===a.type){const e=a.clone();e.points=e.points.map((e=>F(e,I,S))),M.push(e)}else if("extent"===a.type){const e=a.clone()._normalize(!1,!1,v);M.push(e.rings?new i.Z(e):e)}else if(a.extent){const e=a.extent,t=(0,l.XZ)(e.xmin,S)*(2*I);let n=0===t?a.clone():(0,l.Sy)(a.clone(),t);e.offset(t,0);let{xmin:r,xmax:o}=e;r=Number(r.toFixed(9)),o=Number(o.toFixed(9)),e.intersects(E)&&o!==I?(L=o>L?o:L,n=w(n,b),O.push(n),M.push("cut")):e.intersects(x)&&r!==S?(L=o*(2*I)>L?o*(2*I):L,n=w(n,b,360),O.push(n),M.push("cut")):M.push(n)}else M.push(a.clone());else M.push(a);else M.push(a);let k=(0,l.XZ)(L,I),U=-90;const X=k,j=new s.Z;for(;k>0;){const e=360*k-180;j.addPath([[e,U],[e,-1*U]]),U*=-1,k--}if(O.length>0&&X>0){const t=Z(O,await async function(e,t,n,a){const r=(0,f.en)(e),o=t[0].spatialReference,i={...a,responseType:"json",query:{...r.query,f:"json",sr:(0,u.B9)(o),target:JSON.stringify({geometryType:(0,p.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},s=await(0,c.Z)(r.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=s.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,p.im)(e);return t.spatialReference=o,t}))}}(o,O,j,n)),a=[],r=[];for(let n=0;n<M.length;n++){const o=M[n];if("cut"!==o)r.push(o);else{const o=t.shift(),i=e[n];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&o.rings.length>=i.rings.length?(a.push(o),r.push("simplify")):r.push(b?(0,d.$)(o):o)}}if(!a.length)return r;const i=await async function(e,t,n){const a="string"==typeof e?(0,h.mN)(e):e,r=t[0].spatialReference,o=(0,p.Ji)(t[0]),i={...n,query:{...a.query,f:"json",sr:(0,u.B9)(r),geometries:JSON.stringify((0,y.F)(t))}},{data:s}=await(0,c.Z)(a.path+"/simplify",i);return(0,y.o)(s.geometries,o,r)}(o,a,n),s=[];for(let e=0;e<r.length;e++){const t=r[e];"simplify"!==t?s.push(t):s.push(b?(0,d.$)(i.shift()):i.shift())}return s}const T=[];for(let a=0;a<M.length;a++){const e=M[a];if("cut"!==e)T.push(e);else{const e=O.shift();T.push(!0===b?(0,d.$)(e):e)}}return T}function I(e,t,n){const a=(0,u.C5)(n);if(null==a)return e;const[r,o]=a.valid,i=2*o;let s=0,l=0;t>o?s=Math.ceil(Math.abs(t-o)/i):t<r&&(s=-Math.ceil(Math.abs(t-r)/i)),e>o?l=Math.ceil(Math.abs(e-o)/i):e<r&&(l=-Math.ceil(Math.abs(e-r)/i));let d=e+(s-l)*i;const c=d-t;return c>o?d-=i:c<r&&(d+=i),d}},76335:(e,t,n)=>{n.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>s,x3:()=>u});var a=n(29909),r=n(78952),o=n(77981);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:r.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:r.Z.WGS84})}};function s(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const n=u(e);for(const a of n)for(const e of a)e[0]+=t;return e}function u(e){return(0,o.oU)(e)?e.rings:e.paths}},29887:(e,t,n)=>{n.d(t,{Ey:()=>F,applyEdits:()=>Z,aw:()=>b,uploadAssets:()=>L});var a=n(52639),r=n(80987),o=n(10064),i=n(84652),s=n(32718),l=n(66978),u=n(35995),d=n(71907),c=n(91340),p=n(92975),f=n(56601),h=n(37270),y=n(18277),m=n(37933);function g(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function v(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(v)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function F(e){return e.every(w)}async function Z(e,t,n){var a;let u,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,h=null!==(a=c.gdbVersion)&&void 0!==a?a:p;if((0,f.lQ)(e)&&e.url)u=(0,f.jF)(e.url,e.layerId,h,"original-and-current-features"===c.returnServiceEditsOption);else{u=(0,l.hh)(),u.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:u.promise};e.emit("apply-edits",t)}try{var v;const{results:a,edits:l}=await async function(e,t,n,a){var i,l,u,c,p,f;if(await e.load(),!g(t))throw new o.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.ln)(e))throw new o.Z("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:h,options:v}=await async function(e,t,n){const a=(0,m.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,n,a,r,i){if(!e||!a&&!r)throw new o.Z("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==n&&void 0!==n&&n.globalIdUsed)throw new o.Z("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&r)throw new o.Z("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===n||void 0===n||!n.globalIdUsed)&&r)throw new o.Z("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,a,n,!!i,!!l,"".concat(e.type,"-layer")),!a.data.isVersioned&&null!==n&&void 0!==n&&n.gdbVersion)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&null!==n&&void 0!==n&&n.rollbackOnFailureEnabled)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...n};if(null!=c.rollbackOnFailureEnabled||a.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&s.Z.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,n){var a,i,s;const l=function(e){var t,n;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(n=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==n?n:[]),deleteFeatures:e&&r.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(a=l.addFeatures)&&void 0!==a&&a.length&&!t.operations.supportsAdd)throw new o.Z("".concat(n,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=l.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new o.Z("".concat(n,":unsupported-operation"),"Layer does not support updating features.");if(null!==(s=l.deleteFeatures)&&void 0!==s&&s.length&&!t.operations.supportsDelete)throw new o.Z("".concat(n,":unsupported-operation"),"Layer does not support deleting features.");return l.addFeatures=l.addFeatures.map(E),l.updateFeatures=l.updateFeatures.map(E),l.addAssetFeatures=[],l}(t,a,"".concat(e.type,"-layer")),f=(null===n||void 0===n?void 0:n.globalIdUsed)||u,h=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new o.Z("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:n}=e;null==n[t]&&(n[t]=(0,d.zS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,n,a){A(e,t,n,a),I(e,t)}(t,e,f,h))),p.updateFeatures.forEach((t=>function(e,t,n,a){A(e,t,n,a),I(e,t);const r=(0,m.S1)(t);if("geometry"in e&&null!=e.geometry&&(null===r||void 0===r||!r.editing.supportsGeometryUpdate))throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,f,h))),p.deleteFeatures.forEach((t=>function(e,t,n,a){A(e,t,n,a)}(t,e,f,h))),p.addAttachments.forEach((t=>S(t,e))),p.updateAttachments.forEach((t=>S(t,e))),u&&await async function(e,t){var n;const{infoFor3D:a}=t;if(null==a)return;if(!(0,y.Zq)(a))throw new o.Z("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(n=e.addAssetFeatures)&&void 0!==n||(e.addAssetFeatures=[]);const{addAssetFeatures:r}=e;for(const o of null!==(i=e.addFeatures)&&void 0!==i?i:[]){var i;x(o)&&r.push(o)}for(const o of null!==(s=e.updateFeatures)&&void 0!==s?s:[]){var s;x(o)&&r.push(o)}}(p,e),{edits:await R(p),options:c}}(e,n,a);return null!==(i=h.addFeatures)&&void 0!==i&&i.length||null!==(l=h.updateFeatures)&&void 0!==l&&l.length||null!==(u=h.deleteFeatures)&&void 0!==u&&u.length||null!==(c=h.addAttachments)&&void 0!==c&&c.length||null!==(p=h.updateAttachments)&&void 0!==p&&p.length||null!==(f=h.deleteAttachments)&&void 0!==f&&f.length?{edits:h,results:await t.applyEdits(h,v)}:{edits:h,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,n,c),p=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:l,addedFeatures:p(a.addFeatureResults),updatedFeatures:p(a.updateFeatureResults),deletedFeatures:p(a.deleteFeatureResults),addedAttachments:p(a.addAttachmentResults),updatedAttachments:p(a.updateAttachmentResults),deletedAttachments:p(a.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:a.editMoment?new Date(a.editMoment):null,globalIdToObjectId:c.globalIdToObjectId};return null!==(v=a.editedFeatureResults)&&void 0!==v&&v.length&&(f.editedFeatures=a.editedFeatureResults),u.resolve(f),a}catch(b){throw u.reject(b),b}}function A(e,t,n,a){if(n){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const s of a){const n=e.attributes[s.name];if(void 0!==n&&!(0,h.d2)(s,n))throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(s.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var r,i;if(e.geometry.hasZ&&!1===(null===(r=t.capabilities)||void 0===r?void 0:r.data.supportsZ))throw new o.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new o.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function I(e,t){var n;if("geometry"in e&&"mesh"===(null===(n=e.geometry)||void 0===n?void 0:n.type)&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:n}=e,{spatialReference:a,vertexSpace:r}=n,i=t.spatialReference,s="local"===r.type,l=(0,p.sT)(i),u=(0,p.fS)(i,a),d=u||(0,p.oR)(i)&&((0,p.oR)(a)||(0,p.sS)(a));if(!(s&&l&&d||!s&&!l&&u))throw new o.Z("".concat(t.type,"-layer:mesh-unsupported"),"Uploading a mesh with a ".concat(r.type," vertex space and a spatial reference wkid:").concat(a.wkid," to a layer with a spatial reference wkid:").concat(i.wkid," is not supported."))}}function S(e,t){var n;const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(n=t.capabilities)||void 0===n||!n.editing.supportsUploadWithItemId)&&r.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,u.sJ)(r.data);if(e&&!e.isBase64)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function R(e){var t,n;const a=null!==(t=e.addFeatures)&&void 0!==t?t:[],r=null!==(n=e.updateFeatures)&&void 0!==n?n:[],o=a.concat(r).map((e=>e.geometry)),i=await(0,c.aX)(o),s=a.length,l=r.length;return i.slice(0,s).forEach(((e,t)=>a[t].geometry=e)),i.slice(s,s+l).forEach(((e,t)=>r[t].geometry=e)),e}function E(e){const t=new a.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function x(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function L(e,t,n,a){if(!g(t))throw new o.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o.Z("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(n,a)}},18277:(e,t,n)=>{n.d(t,{$6:()=>F,$z:()=>o,F7:()=>r,S0:()=>i,Wr:()=>y,X4:()=>c,Zq:()=>p,d1:()=>l,dm:()=>u,eP:()=>d,fe:()=>f,sg:()=>h});const a=[["binary","application/octet-stream","bin",""]];function r(e,t){var n;return null!=g(t.name,null!==(n=null===e||void 0===e?void 0:e.supportedFormats)&&void 0!==n?n:[])}function o(e,t){var n;if(!e)return!1;const a=u(t,null!==(n=e.supportedFormats)&&void 0!==n?n:[]);return null!=a&&e.editFormats.includes(a)}function i(e,t){return v(function(e,t){const n=e.toLowerCase();return m(t).find((e=>b(e)===n))}(e,t))}function s(e,t){return v(g(e,t))}function l(e,t){return b(function(e,t){return m(t).find((t=>v(t)===e))}(e,t))}function u(e,t){var n;return null!==(n=s(e.name,t))&&void 0!==n?n:i(e.type,t)}function d(e,t,n){var a;return null!==(a=i(e,n))&&void 0!==a?a:s(t,n)}function c(e){let{supportedFormats:t}=e;return d("model/gltf-binary","glb",t)}function p(e){const t=c(e);return null!=t&&e.editFormats.includes(t)}function f(e){let{supportedFormats:t}=e;return d("model/gltf+json","gltf",t)}function h(e){let{supportedFormats:t}=e;return d("application/esri3do-SR_world","wld",t)}function y(e){let{supportedFormats:t}=e;return d("application/esri3do-SR_prj","prj",t)}function m(e){return[...a,...e]}function g(e,t){const n=e.toLowerCase();return m(t).find((e=>w(e).some((e=>n.endsWith(e)))))}function v(e){return null===e||void 0===e?void 0:e[0]}function b(e){return null===e||void 0===e?void 0:e[1].toLowerCase()}function w(e){var t;return null!==(t=null===e||void 0===e?void 0:e[2].split(",").map((e=>e.toLowerCase())))&&void 0!==t?t:[]}function F(e){var t;return null===(t=e.tables)||void 0===t?void 0:t.find((e=>"assetMaps"===e.role))}}}]);
//# sourceMappingURL=9887.56ff42e9.chunk.js.map