"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[5367],{25219:(t,e,n)=>{n.d(e,{A:()=>o,E:()=>a});n(59486);var r=n(76046),s=n(848);function o(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new s.Z({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return new r.Z({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}},75367:(t,e,n)=>{n.r(e),n.d(e,{assetMapFromAssetMapsJSON:()=>Z,extractMesh:()=>h,meshFeatureSetFromJSON:()=>g});var r=n(52639),s=n(32718),o=n(77427),a=n(53866),i=n(94395),l=n(78952),u=n(17493),c=n(18277),f=n(49818),p=n(25219);const m=()=>s.Z.getLogger("esri.rest.support.meshFeatureSet");function g(t,e,n){var s;const o=n.features;n.features=[],delete n.geometryType;const a=f.Z.fromJSON(n);if(a.geometryType="mesh",!n.assetMaps)return a;const i=Z(e,n.assetMaps),u=null!==(s=t.sourceSpatialReference)&&void 0!==s?s:l.Z.WGS84,c=n.globalIdFieldName,{outFields:p}=t,m=null!=p&&p.length>0?(g=p.includes("*")?null:new Set(p),t=>{let{attributes:e}=t;if(!e)return{};if(!g)return e;for(const n in e)g.has(n)||delete e[n];return e}):()=>({});var g;for(const l of o){const t=h(l,c,u,e,i);a.features.push(new r.Z({geometry:t,attributes:m(l)}))}return a}function h(t,e,n,r,s){const o=t.attributes[e],l=s.get(o);if(null==l||!t.geometry)return null;const c=(0,p.A)(t.attributes,n,r.transformFieldRoles),f=a.Z.fromJSON(t.geometry);f.spatialReference=n;const m=(0,p.E)(t.attributes,r.transformFieldRoles),g=n.isGeographic?"local":"georeferenced",h=function(t){const e=Array.from(t.files.values()),n=new Array;for(const r of e){if(r.status!==d.COMPLETED)return null;const t=new Array;for(const e of r.parts){if(!e)return null;t.push(new u.LL(e.url,e.hash))}n.push(new u.CP(r.name,r.mimeType,t))}return n}(l);return h?i.Z.createWithExternalSource(c,h,{extent:f,transform:m,vertexSpace:g,unitConversionDisabled:!0}):i.Z.createIncomplete(c,{extent:f,transform:m,vertexSpace:g})}var d,E;function Z(t,e){const n=new Map;for(const r of e){const e=r.parentGlobalId;if(null==e)continue;const s=r.assetName,a=r.assetType,i=r.assetHash,l=r.assetURL,u=r.conversionStatus,f=r.seqNo,p=(0,c.d1)(a,t.supportedFormats);if(!p){m().error("mesh-feature-set:unknown-format","Service returned an asset of type ".concat(a,", but it does not list it as a supported type"));continue}const g=(0,o.s1)(n,e,(()=>({files:new Map})));(0,o.s1)(g.files,s,(()=>({name:s,type:a,mimeType:p,status:y(u),parts:[]}))).parts[f]={hash:i,url:l}}return n}function y(t){switch(t){case"COMPLETED":case"SUBMITTED":return d.COMPLETED;case"INPROGRESS":return d.PENDING;default:return d.FAILED}}(E=d||(d={}))[E.FAILED=0]="FAILED",E[E.PENDING=1]="PENDING",E[E.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=5367.7a62a41e.chunk.js.map