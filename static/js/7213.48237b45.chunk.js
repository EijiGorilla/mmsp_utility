"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[7213],{63231:(e,t,n)=>{function o(e){return null!=l(e)||null!=s(e)}function i(e){return a.test(e)}function r(e){var t;return null!==(t=l(e))&&void 0!==t?t:s(e)}function s(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,o=0;for(;!t&&o<=e.length;)t=!u.test(e[o]),o++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function l(e){var t,n,o,i;const r=a.exec(e);if(null===r||void 0===r||!r.groups)return null;const s=r.groups,l=+s.year,u=+s.month-1,c=+s.day,d=+(null!==(t=s.hours)&&void 0!==t?t:"0"),p=+(null!==(n=s.minutes)&&void 0!==n?n:"0"),f=+(null!==(o=s.seconds)&&void 0!==o?o:"0");if(d>23)return null;if(p>59)return null;if(f>59)return null;const m=null!==(i=s.ms)&&void 0!==i?i:"0",y=m?+m.padEnd(3,"0").substring(0,3):0;let g;if(s.isUTC||!s.offsetSign)g=Date.UTC(l,u,c,d,p,f,y);else{const e=+s.offsetHours,t=+s.offsetMinutes;g=6e4*("+"===s.offsetSign?-1:1)*(60*e+t)+Date.UTC(l,u,c,d,p,f,y)}return Number.isNaN(g)?null:g}n.d(t,{mu:()=>i,of:()=>o,sG:()=>r});const a=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},47615:(e,t,n)=>{n.d(t,{O3:()=>I,lG:()=>S,my:()=>j,q9:()=>c});var o=n(63231),i=n(10064),r=n(92975),s=n(3182),l=n(80457),a=n(37270);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return u[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*p(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function m(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],i=e[(n+1)%e.length];t+=o[0]*i[1]-i[0]*o[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)b(e,o,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){h(e,o[0],n);for(let t=1;t<o.length;t++)w(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;h(e,o[0],n);for(let i=1;i<o.length;i++)w(e,o[i],n);return e}(e,t,n)}}function h(e,t,n){const o=y(t);!function(e){return!m(e)}(o)?b(e,o,n):v(e,o,n)}function w(e,t,n){const o=y(t);!function(e){return m(e)}(o)?b(e,o,n):v(e,o,n)}function b(e,t,n){for(const o of t)F(e,o,n);e.lengths.push(t.length)}function v(e,t,n){for(let o=t.length-1;o>=0;o--)F(e,t[o],n);e.lengths.push(t.length)}function F(e,t,n){const[o,i,r]=t;e.coords.push(o,i),n.hasZ&&e.coords.push(r||0)}function T(e){switch(typeof e){case"string":return(0,o.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,s=(0,r.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!o||!s.test(o))throw new i.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function j(e){var t,n;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[],r=new Set,s=new Set;let l,u=!1,m=null,y=!1,{geometryType:g=null}=o,h=!1;for(const b of d(e)){const{geometry:e,properties:t,id:n}=b;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(u||(u=f(p(e))),y||(y=null!=n,y&&(l=typeof n,t&&(m=Object.keys(t).filter((e=>t[e]===n))))),t&&m&&y&&null!=n&&(m.length>1?m=m.filter((e=>t[e]===n)):1===m.length&&(m=t[m[0]]===n?m:[])),!h&&t)){let e=!0;for(const n in t){if(r.has(n))continue;const o=t[n];if(null==o){e=!1,s.add(n);continue}const l=T(o);if("unknown"===l){s.add(n);continue}s.delete(n),r.add(n);const u=(0,a.q6)(n);u&&i.push({name:u,alias:n,type:l})}h=e}}const w=null!==(t=(0,a.q6)(1===(null===(n=m)||void 0===n?void 0:n.length)&&m[0]||null))&&void 0!==t?t:void 0;if(w)for(const c of i)if(c.name===w&&(0,a.H7)(c)){c.type="esriFieldTypeOID";break}return{fields:i,geometryType:g,hasZ:u,objectIdFieldName:w,objectIdFieldType:l,unknownFields:Array.from(s)}}function S(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:o}=t;for(const r of e){var i;const{geometry:e,properties:a,id:u}=r;if(e&&c(e.type)!==n)continue;const d=a||{};let p;o&&(p=d[o],null==u||p||(d[o]=p=u));const f=new s.u_(e?g(new l.Z,e,t):null,d,null,null!==(i=p)&&void 0!==i?i:void 0);yield f}}()}(d(e),t))}},63543:(e,t,n)=>{n.d(t,{Dm:()=>c,Hq:()=>d,MS:()=>p,bU:()=>l});var o=n(93169),i=n(84652),r=n(60480),s=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.I4:"esriGeometryPolyline"===e?s.ET:s.lF}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if((0,o.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(a.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const o=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new o}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},67213:(e,t,n)=>{n.d(t,{$9:()=>w,G4:()=>F,Lu:()=>h,WW:()=>Z,d:()=>j,eS:()=>I,gp:()=>T,j:()=>v,w9:()=>b,yN:()=>S});n(59486);var o=n(76200),i=n(10064),r=n(32718),s=n(92975),l=n(81753),a=n(83406),u=n(6908),c=n(47615),d=n(63543),p=n(52410),f=n(85249),m=n(6701),y=n(78952);const g=r.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),h="http://www.opengis.net/def/crs/",w="".concat(h,"OGC/1.3/CRS84");async function b(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:s}=e,l=x(s,"items","application/geo+json")||x(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==l)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:a}=await(0,o.Z)(l.href,{signal:n.signal,query:{limit:r,...n.customParameters,token:n.apiKey},headers:{accept:"application/geo+json"}});(0,c.O3)(a);const u=(0,c.my)(a,{geometryType:t.geometryType}),y=t.fields||u.fields||[],h=null!=t.hasZ?t.hasZ:u.hasZ,w=u.geometryType,b=t.objectIdField||u.objectIdFieldName||"OBJECTID";let v=t.timeInfo;const F=y.find((e=>{let{name:t}=e;return t===b}));if(F)F.editable=!1,F.nullable=!1;else{if(!u.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");y.unshift({name:b,alias:b,type:"number"===u.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==u.objectIdFieldName){const e=y.find((e=>{let{name:t}=e;return t===u.objectIdFieldName}));e&&(e.type="esriFieldTypeInteger")}y===u.fields&&u.unknownFields.length>0&&g.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});for(const o of y){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),"esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable),!o.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:o});if(!f.v.jsonValues.includes(o.type))throw new i.Z("ogc-feature-layer:invalid-field-type",'invalid type for field "'.concat(o.name,'"'),{field:o})}if(v){var T;const e=new p.Z(y);if(v.startTimeField){const t=e.get(v.startTimeField);t?(v.startTimeField=t.name,t.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const t=e.get(v.endTimeField);t?(v.endTimeField=t.name,t.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const t=e.get(v.trackIdField);t?v.trackIdField=t.name:(v.trackIdField=null,g.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}(T=v).timeReference||(T.timeReference={timeZoneIANA:m.pt}),v.startTimeField||v.endTimeField||(g.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)}return{drawingInfo:w?(0,d.bU)(w):null,extent:G(e),geometryType:w,fields:y,hasZ:!!h,objectIdField:b,timeInfo:v}}async function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n}=e,r=x(n,"data","application/json")||x(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(null==r)throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:l,signal:a}=t,{data:u}=await(0,o.Z)(r.href,{signal:a,headers:{accept:"application/json"},query:{...l,token:s}});return u}async function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:n}=e,r=x(n,"conformance","application/json")||x(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(null==r)throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:l,signal:a}=t,{data:u}=await(0,o.Z)(r.href,{signal:a,headers:{accept:"application/json"},query:{...l,token:s}});return u}async function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:n,customParameters:i,signal:r}=t,{data:s}=await(0,o.Z)(e,{signal:r,headers:{accept:"application/json"},query:{...i,token:n}});return s}async function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n="application/vnd.oai.openapi+json;version=3.0",i=x(e.links,"service-desc",n);if(null==i)return g.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:s,signal:l}=t,{data:a}=await(0,o.Z)(i.href,{signal:l,headers:{accept:n},query:{...s,token:r}});return a}function j(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=null===t||void 0===t?void 0:t.groups;if(!n)return null;const{authority:o,code:i}=n;switch(o.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return y.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return y.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(i,10);return Number.isNaN(e)?null:e}default:return null}}async function S(e,t,n){const o=await Z(e,t,n);return(0,a.cn)(o)}async function Z(e,t,n){var r;const{collection:d,layerDefinition:p,maxRecordCount:f,queryParameters:{apiKey:m,customParameters:g},spatialReference:h,supportedCrs:w}=e,{links:b}=d,v=x(b,"items","application/geo+json")||x(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(null==v)throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:F,num:T,start:I,timeExtent:j,where:S}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=y.Z.fromJSON(h),N=null!==(r=t.outSpatialReference)&&void 0!==r?r:Z,G=N.isWGS84?null:k(N,w),C=P(F,w),M=function(e){if(null==e)return null;const{start:t,end:n}=e;return"".concat(null!=t?t.toISOString():"..","/").concat(null!=n?n.toISOString():"..")}(j),O=null!=(R=S)&&R&&"1=1"!==R?R:null,A=null!==T&&void 0!==T?T:null!=I&&void 0!==I?10:f,{data:D}=await(0,o.Z)(v.href,{...n,query:{...g,...C,crs:G,datetime:M,query:O,limit:A,startindex:I,token:m},headers:{accept:"application/geo+json"}});var R;let q=!1;if(D.links){q=!!D.links.find((e=>"next"===e.rel))}!q&&Number.isInteger(D.numberMatched)&&Number.isInteger(D.numberReturned)&&(q=D.numberReturned<D.numberMatched);const{fields:W,geometryType:L,hasZ:U,objectIdField:E}=p,$=(0,c.lG)(D,{geometryType:L,hasZ:U,objectIdField:E});if(!G&&N.isWebMercator)for(const o of $)if(null!=o.geometry&&null!=L){const e=(0,a.di)(o.geometry,L,U,!1);e.spatialReference=y.Z.WGS84,o.geometry=(0,a.GH)((0,l.iV)(e,N))}for(const o of $)o.objectId=o.attributes[E];const H=G||!G&&N.isWebMercator?N.toJSON():s.Zn,z=new u.Z;return z.exceededTransferLimit=q,z.features=$,z.fields=W,z.geometryType=L,z.hasZ=U,z.objectIdFieldName=E,z.spatialReference=H,z}function k(e,t){var n,o,i;const{isWebMercator:r,wkid:s}=e;if(!s)return null;const l=r?null!==(n=null!==(o=null!==(i=t[3857])&&void 0!==i?i:t[102100])&&void 0!==o?o:t[102113])&&void 0!==n?n:t[900913]:t[e.wkid];return l?"".concat(h).concat(l):null}function N(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:o,ymax:i}=e;return"".concat(t,",").concat(n,",").concat(o,",").concat(i)}function P(e,t){if(!function(e){return null!=e&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:N(e)};const o=k(n,t);return null!=o?{bbox:N(e),"bbox-crs":o}:n.isWebMercator?{bbox:N((0,l.iV)(e,y.Z.WGS84))}:null}function G(e){var t;const n=null===(t=e.extent)||void 0===t?void 0:t.spatial;if(!n)return null;const o=n.bbox[0],i=4===o.length,r=o[0],s=o[1],l=i?void 0:o[2];return{xmin:r,ymin:s,xmax:i?o[2]:o[3],ymax:i?o[3]:o[4],zmin:l,zmax:i?void 0:o[5],spatialReference:y.Z.WGS84.toJSON()}}function x(e,t,n){return e.find((e=>e.rel===t&&e.type===n))||e.find((e=>e.rel===t&&!e.type))}}}]);
//# sourceMappingURL=7213.48237b45.chunk.js.map