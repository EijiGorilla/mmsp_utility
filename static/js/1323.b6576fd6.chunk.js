"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[1323],{55107:(e,t,n)=>{var r,o;n.d(t,{B:()=>o,P:()=>r}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}))},71323:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>R,dracoDecompressPointCloudData:()=>b,filterObbsForModifications:()=>y,filterObbsForModificationsSync:()=>L,initialize:()=>P,interpretObbModificationResults:()=>N,process:()=>m,project:()=>v,setLegacySchema:()=>g,setModifications:()=>p,setModificationsSync:()=>E,test:()=>F,transformNormals:()=>w});var r=n(16889),o=n(78952),i=n(86372),s=n(8623),a=n(50250),c=n(11186),l=n(55107),f=n(65905);function d(e){return(0,f.V)("esri/libs/i3s/".concat(e))}let u;var h=n(95964);async function m(e){I=await U();const t=[e.geometryBuffer];return{result:M(I,e,t),transferList:t}}async function b(e){var t;I=await U();const n=[e.geometryBuffer],{geometryBuffer:r}=e,o=r.byteLength,i=I._malloc(o),s=new Uint8Array(I.HEAPU8.buffer,i,o);s.set(new Uint8Array(r));const a=I.dracoDecompressPointCloudData(i,s.byteLength);if(I._free(i),a.error.length>0)throw new Error("i3s.wasm: ".concat(a.error));const c=(null===(t=a.featureIds)||void 0===t?void 0:t.length)>0?a.featureIds.slice():null,l=a.positions.slice();return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function y(e){await U(),L(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function p(e){await U(),E(e)}async function g(e){I=await U(),I.setLegacySchema(e.context,e.jsonSchema)}async function v(e){const{localMatrix:t,origin:r,positions:c,vertexSpace:l,localMode:f}=e,d=o.Z.fromJSON(e.inSpatialReference),u=o.Z.fromJSON(e.outSpatialReference);let h;const[{projectBuffer:m},{initializeProjection:b}]=await Promise.all([Promise.resolve().then(n.bind(n,50628)),Promise.resolve().then(n.bind(n,79803))]);await b(d,u);const y=[0,0,0];if(!m(r,d,0,y,u,0,1))throw new Error("Failed to project");if("georeferenced"===l.type&&null==l.origin){if(h=new Float64Array(c.length),!m(c,d,0,h,u,0,h.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===l.type?s.Z.fromJSON(l):a.Z.fromJSON(l),{project:r}=await Promise.resolve().then(n.bind(n,11700)),o=r({positions:c,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:d,outSpatialReference:u,localMode:f});if(!o)throw new Error("Failed to project");h=(0,i.mB)(o)}const p=h.length,[g,v,w]=y;for(let n=0;n<p;n+=3)h[n]-=g,h[n+1]-=v,h[n+2]-=w;return{result:{projected:h,original:c,projectedOrigin:y},transferList:[h.buffer,c.buffer]}}async function w(e){let{normalMatrix:t,normals:n}=e;const o=new Float32Array(n.length);return(0,c.t)(o,n,t),(0,r.oc)(t)&&(0,c.n)(o,o),{result:{transformed:o,original:n},transferList:[o.buffer,n.buffer]}}function R(e){O(e)}let S,I;function E(e){if(!I)return;const t=e.modifications,n=I._malloc(8*t.length),r=new Float64Array(I.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];I.setModifications(e.context,n,t.length,e.isGeodetic),I._free(n)}function M(e,t,n){const{context:r,globalTrafo:o,mbs:i,obbData:s,elevationOffset:a,geometryBuffer:c,geometryDescriptor:f,indexToVertexProjector:d,vertexToRenderProjector:u}=t,h=e._malloc(c.byteLength),m=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(e.HEAPU8.buffer,h,c.byteLength);b.set(new Uint8Array(c));const y=new Float64Array(e.HEAPU8.buffer,m,33);A(y,[NaN,NaN,NaN]);let p=y.byteOffset+3*y.BYTES_PER_ELEMENT,g=new Float64Array(y.buffer,p);A(g,o),p+=16*y.BYTES_PER_ELEMENT,g=new Float64Array(y.buffer,p),A(g,i),p+=4*y.BYTES_PER_ELEMENT,s&&(g=new Float64Array(y.buffer,p),A(g,s));const v=f,w={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:v.featureIndex},R=e.process(r,!!t.obbData,h,b.byteLength,v,w,m,a,d,u,t.normalReferenceFrame);if(e._free(m),e._free(h),R.error.length>0)throw new Error("i3s.wasm: ".concat(R.error));if(R.discarded)return null;const S=R.componentOffsets.length>0?R.componentOffsets.slice():null,I=R.featureIds.length>0?R.featureIds.slice():null,E=R.anchorIds.length>0?Array.from(R.anchorIds):null,M=R.anchors.length>0?Array.from(R.anchors):null,N=R.interleavedVertedData.slice().buffer,L=R.indicesType===l.P.Int16?new Uint16Array(R.indices.buffer,R.indices.byteOffset,R.indices.byteLength/2).slice():new Uint32Array(R.indices.buffer,R.indices.byteOffset,R.indices.byteLength/4).slice(),O=R.positions.slice(),P=R.positionIndicesType===l.P.Int16?new Uint16Array(R.positionIndices.buffer,R.positionIndices.byteOffset,R.positionIndices.byteLength/2).slice():new Uint32Array(R.positionIndices.buffer,R.positionIndices.byteOffset,R.positionIndices.byteLength/4).slice(),U={layout:t.layouts[0],interleavedVertexData:N,indices:L,hasColors:R.hasColors,hasModifications:R.hasModifications,positionData:{data:O,indices:P}};return I&&n.push(I.buffer),S&&n.push(S.buffer),n.push(N),n.push(L.buffer),n.push(O.buffer),n.push(P.buffer),{componentOffsets:S,featureIds:I,anchorIds:E,anchors:M,transformedGeometry:U,obb:R.obb,globalTrafo:o}}function N(e){return 0===e?h.O4.Unmodified:1===e?h.O4.PotentiallyModified:2===e?h.O4.Culled:h.O4.Unknown}function L(e){if(!I)return;const{context:t,buffer:n}=e,r=I._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(I.HEAPU8.buffer,r,o),s=new Float64Array(n);i.set(s),I.filterOBBs(t,r,o),s.set(i),I._free(r)}function O(e){I&&0===I.destroy(e)&&(I=null)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function P(){I||await U()}function U(){return I?Promise.resolve(I):(S||(S=(u||(u=new Promise((e=>n.e(7552).then(n.bind(n,57552)).then((e=>e.i)).then((t=>{let{default:n}=t;const r=n({locateFile:d,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),u).then((e=>(I=e,S=null,I)))),S)}const F={transform:(e,t)=>I&&M(I,e,t),destroy:O}},95964:(e,t,n)=>{n.d(t,{$i:()=>h,FE:()=>a,Hw:()=>i,NB:()=>m,O4:()=>o,U_:()=>r,oQ:()=>b,w5:()=>s});var r,o,i,s,a,c,l=n(86361),f=n(23470),d=n(44011),u=n(2985);class h extends u.r{constructor(e,t){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=t,this.serviceMbsInRenderSR=(0,f.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){var e;(0,d.WD)(this.serviceMbsInRenderSR),null===(e=this.serviceObbInRenderSR)||void 0===e||e.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}(c=r||(r={}))[c.Unmodified=0]="Unmodified",c[c.Culled=1]="Culled",c[c.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(o||(o={}));class m extends h{constructor(e,t,n,r,s,a,c,f,d,u){super(e,n),this.index=t,this.childCount=r,this.level=s,this.resources=a,this.version=c,this.lodMetric=f,this.maxError=d,this.numFeatures=u,this.failed=!1,this.cacheState=i.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=o.NotChecked,this.elevationAgnosticBoundingVolume=(0,l.al)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={}));class b{constructor(e,t,n,r){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=r}}}}]);
//# sourceMappingURL=1323.b6576fd6.chunk.js.map