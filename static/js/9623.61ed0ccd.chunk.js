"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[9623],{89623:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(27366),o=r(7138),i=r(10064),a=r(93169),s=r(66978),u=r(35995),l=r(49861),c=(r(25243),r(63780),r(69912)),d=r(18277),h=r(64020),f=r(23084),y=r(34211),p=(r(59486),r(5192)),m=r(21149),_=r(53866);var S=r(24246),g=r(77946),b=r(90851),x=r(49818);let F=class extends o.Z{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,u.mN)(this.url)}async execute(t,e){const r=await this.executeJSON(t,e);return this.featureSetFromJSON(t,r,e)}async executeJSON(t,e){var r;const n=this._normalizeQuery(t),o=null!=(null===(r=t.outStatistics)||void 0===r?void 0:r[0]),i=(0,a.Z)("featurelayer-pbf-statistics"),s=!o||i;let u;if(this.pbfSupported&&s)try{u=await(0,b.t)(this.url,n,e)}catch(l){if("query:parsing-pbf"!==l.name)throw l;this.pbfSupported=!1}return this.pbfSupported&&s||(u=await(0,g.F)(this.url,n,e)),this._normalizeFields(u.fields),u}async featureSetFromJSON(t,e,n){if(!this._queryIs3DObjectFormat(t)||null==this.infoFor3D||!e.features)return x.Z.fromJSON(e);const{meshFeatureSetFromJSON:o}=await(0,s.Hl)(r.e(465).then(r.bind(r,50465)),n);return o(t,this.infoFor3D,e)}executeForCount(t,e){return(0,y.P)(this.url,this._normalizeQuery(t),e)}executeForExtent(t,e){return async function(t,e,r){const n=(0,f.en)(t);return(0,p.Vr)(n,m.Z.from(e),{...r}).then((t=>({count:t.data.count,extent:_.Z.fromJSON(t.data.extent)})))}(this.url,this._normalizeQuery(t),e)}executeForIds(t,e){return(0,S.G)(this.url,this._normalizeQuery(t),e)}async executeRelationshipQuery(t,e){const[{default:n},{executeRelationshipQuery:o}]=await(0,s.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeRelationshipQueryForCount(t,e){const[{default:n},{executeRelationshipQueryForCount:o}]=await(0,s.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),e);return t=n.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),o(this.url,t,e)}async executeAttachmentQuery(t,e){const{executeAttachmentQuery:n,fetchAttachments:o,processAttachmentQueryResult:i}=await(0,s.Hl)(r.e(9301).then(r.bind(r,59301)),e),a=(0,f.en)(this.url);return i(a,await(this.queryAttachmentsSupported?n(a,t,e):o(a,t,e)))}async executeTopFeaturesQuery(t,e){const{executeTopFeaturesQuery:n}=await(0,s.Hl)(r.e(2200).then(r.bind(r,82200)),e);return n(this.parsedUrl,t,this.sourceSpatialReference,e)}async executeForTopIds(t,e){const{executeForTopIds:n}=await(0,s.Hl)(r.e(5182).then(r.bind(r,75182)),e);return n(this.parsedUrl,t,e)}async executeForTopExtents(t,e){const{executeForTopExtents:n}=await(0,s.Hl)(r.e(5641).then(r.bind(r,55641)),e);return n(this.parsedUrl,t,e)}async executeForTopCount(t,e){const{executeForTopCount:n}=await(0,s.Hl)(r.e(1239).then(r.bind(r,19406)),e);return n(this.parsedUrl,t,e)}_normalizeQuery(t){let e=m.Z.from(t);e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?h.n.from(t.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(t)){var n,o;e=e===t?e.clone():e,e.formatOf3DObjects=null;const{supportedFormats:a,queryFormats:s}=r,u=null!==(n=(0,d.S0)("model/gltf-binary",a))&&void 0!==n?n:(0,d.Ow)("glb",a),l=null!==(o=(0,d.S0)("model/gltf+json",a))&&void 0!==o?o:(0,d.Ow)("gtlf",a);for(const t of s){if(t===u){e.formatOf3DObjects=t;break}t!==l||e.formatOf3DObjects||(e.formatOf3DObjects=t)}if(!e.formatOf3DObjects)throw new i.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==e.outFields||!e.outFields.includes("*")){e=e===t?e.clone():e,null==e.outFields&&(e.outFields=[]);const{originX:n,originY:o,originZ:i,translationX:a,translationY:s,translationZ:u,scaleX:l,scaleY:c,scaleZ:d,rotationX:h,rotationY:f,rotationZ:y,rotationDeg:p}=r.transformFieldRoles;e.outFields.push(n,o,i,a,s,u,l,c,d,h,f,y,p)}}return e}_normalizeFields(t){if(null!=this.fieldsIndex&&null!=t)for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return null!=this.infoFor3D&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};(0,n._)([(0,l.Cb)({type:h.n})],F.prototype,"dynamicDataSource",void 0),(0,n._)([(0,l.Cb)()],F.prototype,"fieldsIndex",void 0),(0,n._)([(0,l.Cb)()],F.prototype,"gdbVersion",void 0),(0,n._)([(0,l.Cb)()],F.prototype,"infoFor3D",void 0),(0,n._)([(0,l.Cb)({readOnly:!0})],F.prototype,"parsedUrl",null),(0,n._)([(0,l.Cb)()],F.prototype,"pbfSupported",void 0),(0,n._)([(0,l.Cb)()],F.prototype,"queryAttachmentsSupported",void 0),(0,n._)([(0,l.Cb)()],F.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,l.Cb)({type:String})],F.prototype,"url",void 0),F=(0,n._)([(0,c.j)("esri.tasks.QueryTask")],F);const v=F},22585:(t,e,r)=>{function n(t){const e={};for(const r in t){if("declaredClass"===r)continue;const o=t[r];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){e[r]=[];for(let t=0;t<o.length;t++)e[r][t]=n(o[t])}else"object"==typeof o?o.toJSON&&(e[r]=JSON.stringify(o)):e[r]=o}return e}r.d(e,{A:()=>n})},34211:(t,e,r)=>{r.d(e,{P:()=>a});var n=r(23084),o=r(5192),i=r(21149);async function a(t,e,r){const a=(0,n.en)(t);return(0,o.hH)(a,i.Z.from(e),{...r}).then((t=>t.data.count))}},24246:(t,e,r)=>{r.d(e,{G:()=>a});var n=r(23084),o=r(5192),i=r(21149);async function a(t,e,r){const a=(0,n.en)(t);return(0,o.Ev)(a,i.Z.from(e),{...r}).then((t=>t.data.objectIds))}},77946:(t,e,r)=>{r.d(e,{F:()=>u,e:()=>s});var n=r(23084),o=r(5192),i=r(49818),a=r(21149);async function s(t,e,r){const n=await u(t,e,r);return i.Z.fromJSON(n)}async function u(t,e,r){const i=(0,n.en)(t),s={...r},u=a.Z.from(e),{data:l}=await(0,o.JT)(i,u,u.sourceSpatialReference,s);return l}},90851:(t,e,r)=>{r.d(e,{t:()=>m});var n=r(23084),o=r(92026),i=r(93501),a=r(83406);function s(t,e){return e}function u(t,e,r,n){switch(r){case 0:return h(t,e+n,0);case 1:return"lowerLeft"===t.originPosition?h(t,e+n,1):function(t,e,r){let{translate:n,scale:o}=t;return n[r]-e*o[r]}(t,e+n,1)}}function l(t,e,r,n){return 2===r?h(t,e,2):u(t,e,r,n)}function c(t,e,r,n){return 2===r?h(t,e,3):u(t,e,r,n)}function d(t,e,r,n){return 3===r?h(t,e,3):l(t,e,r,n)}function h(t,e,r){let{translate:n,scale:o}=t;return n[r]+e*o[r]}class f{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=s,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,i.k)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){const r=t.fields;(0,o.O3)(r),r.push(e);const n=r.map((t=>t.name));this._attributesConstructor=function(){for(const t of n)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,r){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:n}=e,o=(0,a.$g)(r.clone(),r,!1,!1,this._transform),i=(0,a.di)(o,n,!1,!1);t.queryGeometryType=n,t.queryGeometry={...i}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const n=this._transform;switch(e=this._applyTransform(n,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const n=this._transform;return this._applyTransform(n,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const n=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(e,r),o=t[t.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?d:e?l:r?c:u}}var y=r(5192),p=(r(49818),r(21149));async function m(t,e,r){const o=(0,n.en)(t),i={...r},a=p.Z.from(e),s=!a.quantizationParameters,{data:u}=await(0,y.qp)(o,a,new f({sourceSpatialReference:a.sourceSpatialReference,applyTransform:s}),i);return u}},5192:(t,e,r)=>{r.d(e,{Ev:()=>m,JT:()=>f,Vn:()=>g,Vr:()=>S,hH:()=>_,n7:()=>p,qp:()=>y});var n=r(76200),o=r(35995),i=r(77981),a=r(91340),s=r(92975),u=r(22585),l=r(27607),c=r(68620);const d="Layer does not support extent calculation.";function h(t,e){var r;const n=t.geometry,o=t.toJSON();delete o.compactGeometryEnabled,delete o.defaultSpatialReferenceEnabled;const a=o;let u,l,c;if(null!=n&&(l=n.spatialReference,c=(0,s.B9)(l),a.geometryType=(0,i.Ji)(n),a.geometry=function(t,e){if(e&&"extent"===t.type)return"".concat(t.xmin,",").concat(t.ymin,",").concat(t.xmax,",").concat(t.ymax);if(e&&"point"===t.type)return"".concat(t.x,",").concat(t.y);const r=t.toJSON();return delete r.spatialReference,JSON.stringify(r)}(n,t.compactGeometryEnabled),a.inSR=c),o.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(a.objectIds=o.objectIds.join(",")),o.orderByFields&&(a.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?delete a.outFields:o.outFields.includes("*")?a.outFields="*":a.outFields=o.outFields.join(","),o.outSR?(a.outSR=(0,s.B9)(o.outSR),u=t.outSpatialReference):n&&(o.returnGeometry||o.returnCentroid)&&(a.outSR=a.inSR,u=l),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(a.outStatistics=JSON.stringify(o.outStatistics)),o.fullText&&(a.fullText=JSON.stringify(o.fullText)),o.pixelSize&&(a.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=(null===(r=t.quantizationParameters)||void 0===r?void 0:r.extent)&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete o.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(a.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(a.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(a.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(a.time=e===r?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==r&&void 0!==r?r:"null")),delete o.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(a.defaultSR=a.inSR,delete a.inSR,delete a.outSR),a}async function f(t,e,r,n){const o=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await g(t,e,"json",n);return(0,c.p)(e,r,o.data),o}async function y(t,e,r,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:r.createFeatureResult()};const o=await p(t,e,n),i=o;return i.data=(0,l.C)(o.data,r),i}function p(t,e,r){return g(t,e,"pbf",r)}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(t,e,"json",r,{returnIdsOnly:!0})}function _(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}async function S(t,e,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const n=await g(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),o=n.data;if(o.hasOwnProperty("extent"))return n;if(o.features)throw new Error(d);if(o.hasOwnProperty("count"))throw new Error(d);return n}async function g(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const l="string"==typeof t?(0,o.mN)(t):t,c=e.geometry?[e.geometry]:[],d=await(0,a.aX)(c,null,{signal:i.signal}),f=null===d||void 0===d?void 0:d[0];null!=f&&((e=e.clone()).geometry=f);const y=(0,u.A)({...l.query,f:r,...s,...h(e,s)});return(0,n.Z)((0,o.v_)(l.path,(p=s,null==e.formatOf3DObjects||p.returnCountOnly||p.returnExtentOnly||p.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===r?"array-buffer":"json",query:{...y,...i.query}});var p}}}]);
//# sourceMappingURL=9623.61ed0ccd.chunk.js.map