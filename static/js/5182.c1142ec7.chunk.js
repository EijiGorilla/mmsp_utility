"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[5182],{75182:(t,e,n)=>{n.r(e),n.d(e,{executeForTopIds:()=>i});var r=n(23084),o=n(88031),l=n(54307);async function i(t,e,n){const i=(0,r.en)(t);return(await(0,o.w7)(i,l.Z.from(e),{...n})).data.objectIds}},88031:(t,e,n)=>{n.d(e,{IJ:()=>c,m5:()=>m,vB:()=>F,w7:()=>p});var r=n(76200),o=n(35995),l=n(77981),i=n(91340),u=n(92975),s=n(22585),d=n(68620);const y="Layer does not support extent calculation.";function a(t,e){var n,r;const o=t.geometry,i=t.toJSON(),s=i;if(null!=o&&(s.geometry=JSON.stringify(o),s.geometryType=(0,l.Ji)(o),s.inSR=(0,u.B9)(o.spatialReference)),null!==(n=i.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),null!==(r=i.topFilter)&&void 0!==r&&r.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=(0,u.B9)(i.outSR):o&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete i.timeExtent}return s}async function c(t,e,n,r){const o=await f(t,e,"json",r);return(0,d.p)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,o.mN)(t):t,y=e.geometry?[e.geometry]:[];return l.responseType="pbf"===n?"array-buffer":"json",(0,i.aX)(y,null,l).then((t=>{const i=null===t||void 0===t?void 0:t[0];null!=i&&((e=e.clone()).geometry=i);const y=(0,s.A)({...d.query,f:n,...u,...a(e,u)});return(0,r.Z)((0,o.v_)(d.path,"queryTopFeatures"),{...l,query:{...y,...l.query}})}))}}}]);
//# sourceMappingURL=5182.c1142ec7.chunk.js.map