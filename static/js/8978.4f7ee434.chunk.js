"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[8978],{35582:(e,t,i)=>{i.d(t,{M:()=>_,b:()=>h});var s,r,n=i(30168),o=i(41012),a=i(95276),l=i(58406),c=i(98634),d=i(64201),u=i(4760);function h(e){const t=new d.kG,{vertex:i,fragment:h}=t;(0,o.Sv)(i,e),i.uniforms.add(new l.p("width",(e=>e.width))),t.attributes.add(u.T.POSITION,"vec3"),t.attributes.add(u.T.NORMAL,"vec3"),t.attributes.add(u.T.UV0,"vec2"),t.attributes.add(u.T.LENGTH,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add((0,c.H)(s||(s=(0,n.Z)(["void main(void) {\nvec3 bitangent = normal;\nvtc = uv0;\nvlength = length;\nvradius = 0.5 * width;\nvec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);\ngl_Position = proj * pos;\n}"])))),h.uniforms.add(new l.p("outlineSize",(e=>e.outlineSize)),new a.N("outlineColor",(e=>e.outlineColor)),new l.p("stripeLength",(e=>e.stripeLength)),new a.N("stripeEvenColor",(e=>e.stripeEvenColor)),new a.N("stripeOddColor",(e=>e.stripeOddColor)));const _=1/Math.sqrt(2);return h.code.add((0,c.H)(r||(r=(0,n.Z)(["\n    const float INV_SQRT2 = ",";\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d = INV_SQRT2 * (tc.x - abs(tc.y));\n      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d = min(d, 1.0 - abs(tc.y));\n\n      if (d < 0.0) {\n        return vec4(0.0);\n      } else if (d < outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc = vec2(vtc.x / vradius, vtc.y);\n      vec4 color = arrowColor(ntc, vlength / vradius);\n      if (color.a == 0.0) {\n        discard;\n      }\n      fragColor = color;\n    }\n  "])),c.H.float(_))),t}const _=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},88978:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Te});var s=i(27366),r=i(7138),n=(i(93169),i(92026)),o=i(49861),a=i(32718),l=(i(84936),i(69912)),c=i(77671),d=i(98074),u=i(51817),h=i(94172),_=i(33906),p=i(4914),g=i(13615),v=i(47072);let m=class extends r.Z{constructor(e){super(e)}initialize(){this.addHandles([(0,h.YP)((()=>({viewData:this.viewData,startPoint:this.analysis.startPoint})),(e=>{let{viewData:t,startPoint:i}=e;t.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(i)}),h.tX),(0,h.YP)((()=>({viewData:this.viewData,endPoint:this.analysis.endPoint})),(e=>{let{viewData:t,endPoint:i}=e;t.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(i)}),h.tX),(0,h.YP)((()=>({result:this._computedResult,viewData:this.viewData})),(e=>{let{result:t,viewData:i}=e;i.result=t}),h.tX)])}_applyProjectionAndElevationAlignment(e){if(null==e)return e;const{spatialReference:t,elevationProvider:i}=this.view,s=(0,_.G)(e,t,i);return null!==s&&void 0!==s?s:((0,_.e)(this.analysis,e.spatialReference,a.Z.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(null==e||null==t)return null;const s=(0,p.Uy)(e,t),r=(0,g.RT)(e,t);if(null==s)return null;let n,o;switch(i){case u.e.Auto:o=null!=r?"geodesic":"euclidean",n=null!==r&&void 0!==r?r:s.horizontal;break;case u.e.Geodesic:if(null==r)return null;o="geodesic",n=r;break;case u.e.Euclidean:o="euclidean",n=s.horizontal}return{mode:o,directDistance:s.direct,horizontalDistance:n,verticalDistance:s.vertical,distance:i===u.e.Euclidean||s.horizontal.value<=v.Yo?s.direct:null!==r&&void 0!==r?r:s.horizontal}}};(0,s._)([(0,o.Cb)()],m.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],m.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],m.prototype,"viewData",void 0),(0,s._)([(0,o.Cb)()],m.prototype,"_computedResult",null),m=(0,s._)([(0,l.j)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],m);i(59166);var y,b,w,C=i(86950),f=i(16889),O=i(58935),S=i(47898),P=i(17842),R=i(68860),L=i(13611),M=i(32035),A=i(12400);(w=y||(y={}))[w.None=0]="None",w[w.Direct=1]="Direct",w[w.Triangle=2]="Triangle",w[w.ProjectedGeodesic=3]="ProjectedGeodesic",function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(b||(b={}));var z=i(27210),E=i(33837),D=i(100),T=i(7025),V=i(19093),G=i(86361),x=i(51378),j=i(52168),U=i(60084),H=i(71917),N=i(70619),F=i(56529),k=i(55158),I=i(37081),W=i(23620),q=i(93822),Y=i(4760),Q=i(82144),Z=i(31132),B=i(33559),X=i(78041),K=i(27627),$=i(25920),J=i(8883),ee=i(35582),te=i(8548),ie=i(36207);class se extends Z.A{constructor(e,t,i){super(e,t,i)}initializeProgram(e){return new K.$(e.rctx,se.shader.get().build(this.configuration),ne)}_setPipelineState(e){const t=e===$.A.NONE,i=this.configuration;return(0,ie.sm)({blending:i.transparent?t?X.wu:(0,X.j7)(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:te.wb.LESS},depthWrite:ie.LZ,colorWrite:ie.BK})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return te.MX.TRIANGLE_STRIP}}se.shader=new Q.J(ee.M,(()=>i.e(4142).then(i.bind(i,14142))));class re extends J.W{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=$.A.NONE}}(0,s._)([(0,B.o)()],re.prototype,"polygonOffsetEnabled",void 0),(0,s._)([(0,B.o)()],re.prototype,"transparent",void 0),(0,s._)([(0,B.o)({count:$.A.COUNT})],re.prototype,"transparencyPassType",void 0);const ne=new Map([[Y.T.POSITION,0],[Y.T.NORMAL,1],[Y.T.UV0,2],[Y.T.LENGTH,3]]);class oe extends F.F5{constructor(e){super(e,new le),this._vertexAttributeLocations=ne,this.produces=new Map([[q.r.OPAQUE_MATERIAL,e=>!this._transparent&&e===I.H_.Color],[q.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>this._transparent&&e===I.H_.Color]]),this._configuration=new re}getConfiguration(e,t){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration}intersect(){}createGLMaterial(e){return new ae(e)}createBufferWriter(){return new ge}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class ae extends W.Z{beginSlot(e){return this.ensureTechnique(se,e)}}class le extends F.Mt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=(0,G.al)(1,.5,0,1),this.stripeEvenColor=(0,G.al)(1,1,1,1),this.stripeOddColor=(0,G.al)(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const ce=(0,k.U$)().vec3f(Y.T.POSITION).vec3f(Y.T.NORMAL).vec2f(Y.T.UV0).f32(Y.T.LENGTH),de=(0,A.Ue)(),ue=(0,A.Ue)(),he=(0,A.Ue)(),_e=(0,A.Ue)(),pe=(0,A.Ue)();class ge{constructor(){this.vertexBufferLayout=ce}elementCount(e){return 2*(e.attributes.get(Y.T.POSITION).indices.length/2+1)}write(e,t,i,s,r){const{data:n,indices:o}=i.attributes.get(Y.T.POSITION),a=i.attributes.get(Y.T.NORMAL).data,l=n.length/3;o&&o.length!==2*(l-1)&&console.warn("MeasurementArrowMaterial does not support indices");const c=de,d=ue,u=he,h=_e,_=pe,p=s.position,g=s.normal,v=s.uv0;let m=0;for(let b=0;b<l;++b){const i=3*b;if((0,M.s)(c,n[i],n[i+1],n[i+2]),b<l-1){const e=3*(b+1);(0,M.s)(d,n[e],n[e+1],n[e+2]),(0,M.s)(_,a[e],a[e+1],a[e+2]),(0,M.n)(_,_),(0,M.f)(u,d,c),(0,M.n)(u,u),(0,M.b)(h,_,u),(0,M.n)(h,h)}const s=(0,M.p)(c,d);e&&t&&((0,M.h)(c,c,e),(0,M.h)(d,d,e),(0,M.h)(h,h,t));const o=r+2*b,y=o+1;p.setVec(o,c),p.setVec(y,c),g.setVec(o,h),g.setVec(y,h),v.set(o,0,m),v.set(o,1,-1),v.set(y,0,m),v.set(y,1,1),b<l-1&&(m+=s)}const y=s.length;for(let b=0;b<2*l;++b)y.set(r+b,m)}}class ve extends j._{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=(0,A.Ue)(),this._originTransform=(0,T.Ue)(),this._arrowCenter=(0,A.Ue)(),this._renderOccluded=F.yD.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=(0,G.Ue)(),this._contrastColor=(0,G.Ue)(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:e})}}get color(){return this._color}set color(e){(0,C.Ht)(e,this._color)||((0,V.c)(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){(0,C.Ht)(e,this._color)||((0,V.c)(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e;this._arrowMaterial=new oe({outlineColor:e,stripeEvenColor:i,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new D.Z,this._handles.add((0,h.YP)((()=>this.view.state.camera),(()=>{this._viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles=(0,n.SC)(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){var t;if(null==(null===(t=this._geometry)||void 0===t?void 0:t.startRenderSpace)||null==this._geometry.endRenderSpace)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,t,i,s){const r=this.view,n=r.renderCoordsHelper,o=[],a=[],l=(e,t)=>{const s=x.WM.get();(0,M.f)(s,e,i),o.push(s),a.push(t)};if("euclidean"===s.type){s.eval(.5,this._arrowCenter);const i=x.WM.get();if(n.worldUpAtPosition(this._arrowCenter,i),function(e,t,i){const s=(0,M.z)(me,t,e),r=(0,M.b)(me,s,i);return 0===(0,M.H)(r)}(e,t,i)){const{heading:t,tilt:s}=r.camera,{direction:n}=(0,U.kE)(r,e,t,s,ye);(0,M.c)(i,n)}l(e,i),l(t,i)}else{s.eval(.5,this._arrowCenter);const e=this._arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),r=x.WM.get(),o=x.WM.get();s.eval(i,r),n.worldUpAtPosition(r,o),l(r,o)}}return(0,N.rh)(this._arrowMaterial,o,a)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&null!=this._geometry){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,t=this._contrastColor,i=this._stripesEnabled?t:e,s=e,r=e;this._arrowMaterial.setParameters({stripeEvenColor:i,outlineColor:s,stripeOddColor:r})}}const me=(0,A.Ue)(),ye=(0,H.d)();var be=i(98917),we=i(9052),Ce=i(86700),fe=i(11208),Oe=i(36257),Se=i(41201);let Pe=class extends r.Z{get _parameters(){const e=this.view.effectiveTheme,{accentColor:t,textColor:i}=e,s=(0,C.O)(t),r=(0,C.Ch)(t,.75),n=(0,C.O)((0,C.mj)(t)),o=(0,C.mj)(i,C.K6.Low);return{accentColor:s,contrastColor:n,translucentAccentColor:r,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:(0,C.G)(o,.6),textCalloutColor:(0,C.G)(o,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(null==e||null==t||e.equals(t))return y.None;const i=this.analysisView.result;if(null==i)return y.Direct;if("geodesic"===this.actualVisualizedMeasurement)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:r}=i,n=s.value,o=r.value;return Math.min(n/o,o/n)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){const{measurementMode:e,result:t}=this.analysisView;switch(e){case u.e.Auto:return null!=t&&t.horizontalDistance.value>v.Yo?"geodesic":"euclidean";case u.e.Euclidean:return"euclidean";case u.e.Geodesic:return"geodesic"}}get allowVisualElementsOrientationChange(){return null==this._triangleOrientationOverride}set allowVisualElementsOrientationChange(e){null==this._triangleOrientationOverride!==e&&(null==this._triangleOrientationOverride?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){return"geodesic"===this.actualVisualizedMeasurement?{direct:null,horizontal:this._segmentLabel,vertical:this._verticalLabel}:{direct:this._segmentLabel,horizontal:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=(0,A.Ue)(),this._endPosition=(0,A.Ue)(),this._cornerPosition=(0,A.Ue)(),this._startPositionAtSeaLevel=(0,A.Ue)(),this._endPositionAtSeaLevel=(0,A.Ue)(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=b.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._parameters,t={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:r,geodesicProjectionLineWidth:n,directLabelFontSize:o,verticalLabelFontSize:a,horizontalLabelFontSize:l}=e;this._segmentVisualElement=new ve({...t,geometry:null,renderOccluded:F.yD.OccludeAndTransparent}),this._triangleVisualElement=new E.r({...t,width:r,renderOccluded:F.yD.OccludeAndTransparent}),this._rightAngleQuad=new be.R({...t,renderOccluded:F.yD.OccludeAndTransparent});const c={...t,polygonOffset:!0,renderOccluded:F.yD.OccludeAndTransparent};this._projectedGeodesicLine=new E.r({...c,width:n,stipplePattern:(0,Ce.z5)(s)}),this._geodesicStartHint=new E.r({...c,width:i,stipplePattern:(0,Ce.z5)(s)}),this._geodesicEndHint=new E.r({...c,width:i,stipplePattern:(0,Ce.z5)(s)}),this._segmentLabel=new z.K({...t,fontSize:o}),this._verticalLabel=new z.K({...t,fontSize:a}),this._horizontalLabel=new z.K({...t,fontSize:l}),this.addHandles([(0,h.YP)((()=>{const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView,i=this.view;return{view:i,camera:i.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}}),(e=>this._updateGeometryAndViewMode(e)),h.tX),(0,h.YP)((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateVisualElementVisibility(e)),h.tX),(0,h.YP)((()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement})),(e=>this._updateLabelText(e)),h.tX),(0,h.YP)((()=>({visible:this.visible,viewMode:this.viewMode})),(e=>this._updateLabelVisibility(e)),h.tX),(0,h.YP)((()=>this._measurementArrowStripeLength),(e=>this._updateSegmentStripeLength(e)),h.tX),(0,Oe.qe)((async()=>this._updateMessageBundle())),(0,h.YP)((()=>this._parameters),(e=>{let{textBackgroundColor:t,textCalloutColor:i,textColor:s,translucentAccentColor:r,accentColor:n,contrastColor:o}=e;const{_segmentLabel:a,_verticalLabel:l,_horizontalLabel:c,_triangleVisualElement:d,_rightAngleQuad:u,_projectedGeodesicLine:h,_geodesicStartHint:_,_geodesicEndHint:p,_segmentVisualElement:g}=this;a.backgroundColor=t,a.calloutColor=i,a.textColor=s,l.backgroundColor=t,l.calloutColor=i,l.textColor=s,c.backgroundColor=t,c.calloutColor=i,c.textColor=s,d.color=r,u.color=r,h.color=r,_.color=r,p.color=r,g.color=n,g.contrastColor=o}),h.nn)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=(0,n.SC)(this._segmentVisualElement),this._triangleVisualElement=(0,n.SC)(this._triangleVisualElement),this._rightAngleQuad=(0,n.SC)(this._rightAngleQuad),this._projectedGeodesicLine=(0,n.SC)(this._projectedGeodesicLine),this._geodesicStartHint=(0,n.SC)(this._geodesicStartHint),this._geodesicEndHint=(0,n.SC)(this._geodesicEndHint),this._segmentLabel=(0,n.SC)(this._segmentLabel),this._verticalLabel=(0,n.SC)(this._verticalLabel),this._horizontalLabel=(0,n.SC)(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility(e){let{visible:t,viewMode:i}=e;if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(i){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode(e){let{view:t,camera:i,viewMode:s,elevationAlignedStartPoint:r,elevationAlignedEndPoint:n,orientation:o,visualizedMeasurement:a,stripeLength:l}=e;const c=t.renderCoordsHelper;if(null==c||null==r||null==n||r.equals(n))return;let d=this._startPosition,u=this._endPosition;c.toRenderCoords(r,d),c.toRenderCoords(n,u);const h=o===b.AboveSegment?1:-1,_=h*(c.getAltitude(u)-c.getAltitude(d));_<0&&(d=this._endPosition,u=this._startPosition);const p="geodesic"===a?new we.u(this._startPosition,this._endPosition,c.spatialReference):new we.y(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=p,this._updateSegmentStripeLength(l),s){case y.Direct:this._updateSegment(p,o);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:i,segment:p,orientation:o,startPosition:d,endPosition:u,deltaSign:h,altitudeDelta:_});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:o,startPosition:d,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===b.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle(e){let{view:{renderCoordsHelper:t},camera:i,segment:s,orientation:r,startPosition:n,endPosition:o,deltaSign:a,altitudeDelta:l}=e;const c=this._cornerPosition;t.worldUpAtPosition(n,c),(0,M.j)(c,c,a*Math.abs(l)),(0,M.g)(c,c,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[c[0],c[1],c[2]],[o[0],o[1],o[2]]]],this._rightAngleQuad.geometry={previous:n,center:c,next:o};const d=new we.y(n,c),u=new we.y(c,o),h=function(e,t,i,s,r){const n=Le,o=Me;r.projectToRenderScreen(i,n),r.projectToRenderScreen(t,o);const a={segment:"bottom",horizontal:"top",vertical:n[0]<o[0]?"left":"right"};{const s=Ae,n=ze;if((0,fe.CM)(e,i,r,s),(0,fe.CM)(e,t,r,n),(0,L.AK)(s,n)>=Re){const e=Math.sign(s[1])===Math.sign(n[1]);a.segment=e?(0,z.j)(a.vertical):a.vertical}else{const e=Ee;(0,fe.CM)(i,t,r,e),(0,L.AK)(e,n)>=Re&&(a.segment=Math.sign(e[0])===Math.sign(n[0])?(0,z.j)(a.horizontal):a.horizontal)}}if(s===b.BelowSegment){const e=e=>"top"===e?"bottom":"top";a.segment=e(a.segment),a.horizontal=e(a.horizontal),a.vertical=e(a.vertical)}return a}(n,o,c,r,i);this._segmentLabel.anchor=h.segment,this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._verticalLabel.anchor=h.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=h.horizontal}_updateSegmentAndProjection(e){let{view:{renderCoordsHelper:t},orientation:i,startPosition:s,endPosition:r}=e;t.setAltitude(this._startPositionAtSeaLevel,0,s),t.setAltitude(this._endPositionAtSeaLevel,0,r);const n=new we.u(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new we.y(this._startPositionAtSeaLevel,s)),this._geodesicEndHint.setGeometryFromSegment(new we.y(this._endPositionAtSeaLevel,r)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=i===b.AboveSegment?"top":"bottom"}_updateLabelText(e){let{text:t,visualizedMeasurement:i}=e;null!=t?(this._segmentLabel.text="euclidean"===i?t.directDistance:t.horizontalDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility(e){let{visible:t,viewMode:i}=e;const s=this._segmentLabel,r=this._horizontalLabel,n=this._verticalLabel;if(s.visible=!1,r.visible=!1,n.visible=!1,t)switch(i){case y.Direct:s.visible=!0;break;case y.Triangle:s.visible=!0,r.visible=!0,n.visible=!0;break;case y.ProjectedGeodesic:s.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(null==t||null==e)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:r}=t,n=this.analysisView.unit,o=e=>({directDistance:"",horizontalDistance:"",verticalDistance:"",...e});switch(n){case"metric":return o({directDistance:i&&(0,O.Rd)(e,i),horizontalDistance:s&&(0,O.Rd)(e,s),verticalDistance:r&&(0,O.Wv)(e,r)});case"imperial":return o({directDistance:i&&(0,O.Ud)(e,i),horizontalDistance:s&&(0,O.Ud)(e,s),verticalDistance:r&&(0,O.Zv)(e,r)});default:return o({directDistance:i&&(0,O.VG)(e,i,n),horizontalDistance:s&&(0,O.VG)(e,s,n),verticalDistance:r&&(0,O.VG)(e,r,n)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;null!=e?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(null!=this._triangleOrientationOverride)return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===b.Auto?this.view.state.camera.aboveGround?b.AboveSegment:b.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(null===t||void 0===t||!t.state)return!1;const i=t.state.camera,s=t.renderCoordsHelper;if(!s)return!1;const r=i.computeScreenPixelSizeAt(e);return s.getAltitude(e)/r>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(null==e)return null;let i=null;const s=e.directDistance;switch(t){case"metric":i=s&&(0,S.nn)(s,"meters");break;case"imperial":i=s&&(0,S.nn)(s,(0,R.Q7)(s.value,s.unit));break;default:i=s&&(0,S.nn)(s,t)}return null==i?null:(0,f.sk)(i.value/30)*(0,R.En)(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,(0,Se.ME)("esri/core/t9n/Units").then((e=>{this.messages=e})).finally((()=>{this.loadingMessages=!1}))}get testData(){}};(0,s._)([(0,o.Cb)()],Pe.prototype,"_parameters",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"_triangleOrientationOverride",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"messages",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"analysisView",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"loadingMessages",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"visible",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"viewMode",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"actualVisualizedMeasurement",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"visualElementOrientation",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"triangleCollapseRatioThreshold",void 0),(0,s._)([(0,o.Cb)()],Pe.prototype,"allowVisualElementsOrientationChange",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"labels",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"_labelsText",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"_actualVisualElementsOrientation",null),(0,s._)([(0,o.Cb)()],Pe.prototype,"_measurementArrowStripeLength",null),Pe=(0,s._)([(0,l.j)("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],Pe);const Re=Math.cos((0,f.Vl)(12)),Le=(0,P.J$)(),Me=(0,P.J$)(),Ae=(0,P.gX)(),ze=(0,P.gX)(),Ee=(0,P.gX)();let De=class extends((0,d.p)(r.Z)){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=u.e.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new Pe({view:e,analysis:t,analysisView:this}),this._analysisController=new m({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=(0,n.SC)(this._analysisController),this._analysisVisualization=(0,n.SC)(this._analysisVisualization)}get updating(){var e;return!(null===(e=this._analysisVisualization)||void 0===e||!e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.direct)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get horizontalLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.horizontal)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get verticalLabelText(){var e,t;return null!==(e=null===(t=this._analysisVisualization.labels.vertical)||void 0===t?void 0:t.text)&&void 0!==e?e:""}get unit(){var e;return null!==(e=this.analysis.unit)&&void 0!==e?e:this._defaultUnit}get testData(){}};(0,s._)([(0,o.Cb)()],De.prototype,"updating",null),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"type",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0,nonNullable:!0})],De.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"result",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"measurementMode",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"elevationAlignedStartPoint",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"elevationAlignedEndPoint",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"viewMode",null),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"actualVisualizedMeasurement",null),(0,s._)([(0,o.Cb)()],De.prototype,"visualElementOrientation",null),(0,s._)([(0,o.Cb)()],De.prototype,"allowVisualElementsOrientationChange",null),(0,s._)([(0,o.Cb)()],De.prototype,"triangleCollapseRatioThreshold",null),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"directLabelText",null),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"horizontalLabelText",null),(0,s._)([(0,o.Cb)({readOnly:!0})],De.prototype,"verticalLabelText",null),(0,s._)([(0,o.Cb)()],De.prototype,"_analysisVisualization",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"_analysisController",void 0),(0,s._)([(0,o.Cb)()],De.prototype,"unit",null),(0,s._)([(0,o.Cb)(c.Y)],De.prototype,"_defaultUnit",void 0),De=(0,s._)([(0,l.j)("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],De);const Te=De},19182:(e,t,i)=>{i.d(t,{i:()=>b});var s=i(27366),r=i(7138),n=i(79056),o=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),l=i(26279),c=i(78289),d=i(78485);class u{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=l.eZ.Outline}destroy(){this._destroyResources()}get resources(){return null!=this._resources?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){var t;this._renderGroup=e;const i=null===(t=this._resources)||void 0===t?void 0:t.layerView;i&&(i.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?null!=this._resources&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?null==this._resources&&this._createResources():this._destroyResources()}_createResources(){var e;this._destroyResources();const t=this._resourceFactory.createResources(),i=new h({view:this._resourceFactory.view,renderGroup:this._renderGroup}),s=null===(e=this._resourceFactory.view.basemapTerrain)||void 0===e?void 0:e.overlayManager;this._resources={layerView:new h({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:t,geometriesAdded:!1},s&&(this._resources.drapeSourceRenderer=s.registerGeometryDrapeSource(i)),this._syncGeometriesToRenderer()}_destroyResources(){var e;if(null==this._resources)return;this._ensureRenderGeometriesRemoved();const t=null===(e=this._resourceFactory.view.basemapTerrain)||void 0===e?void 0:e.overlayManager;t&&t.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){var e;null!=(null===(e=this._resources)||void 0===e?void 0:e.drapeSourceRenderer)&&this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,c.T.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){var e;null!=(null===(e=this._resources)||void 0===e?void 0:e.drapeSourceRenderer)&&(this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,c.T.UPDATE),this._resources.geometriesAdded=!0))}}let h=class extends((0,n.IG)(r.Z)){constructor(e){super(e),this.drapeSourceType=l.Lw.Features,this.updatePolicy=d.j.SYNC,this.renderGroup=l.eZ.Outline}};(0,s._)([(0,o.Cb)({constructOnly:!0})],h.prototype,"view",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],h.prototype,"drapeSourceType",void 0),(0,s._)([(0,o.Cb)()],h.prototype,"renderGroup",void 0),h=(0,s._)([(0,a.j)("esri.views.3d.interactive.visualElements.DrapedVisualElementResources")],h);var _=i(86244),p=i(94172),g=i(79100),v=i(66327),m=i(97882);class y{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return null!=this._resources?this._resources.object:null}get resources(){return null!=this._resources?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(null==this._resources||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type!==g.U.Mesh&&t.type!==g.U.Line&&t.type!==g.U.Point||e.remove(t)})),t.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer),this._resources.external.forEach((t=>{t.type!==g.U.Mesh&&t.type!==g.U.Line&&t.type!==g.U.Point||e.add(t)}))}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,t=e.view,i=t._stage;if(!i)return;const s=new m.F(i,{pickable:!1,updatePolicy:d.j.SYNC}),r=new v.T({castShadow:!1}),n=e.createResources(r,s);n.forEach((e=>{i.add(e),e.type===g.U.Texture&&e.load(i.renderView.renderingContext)})),i.add(r),s.add(r);const o=e.cameraChanged,a=o?(0,p.YP)((()=>t.state.camera),(e=>o(e)),p.nn):null;this._resources={layer:s,object:r,external:n,cameraHandle:a},this._syncVisible()}_destroyResources(){var e;if(null==this._resources)return;const t=this._resourceFactory.view._stage;t&&(t.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach((e=>{t.remove(e),e.type===g.U.Texture&&e.unload()}))),this._resources.object.dispose(),null!==(e=this._resources.cameraHandle)&&void 0!==e&&e.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){null!=this._resources&&(this._resources.object.visible=this._visible)}}class b extends _.l{constructor(e){var t;super(e),this._isDraped=!1,this.object3dResources=new y(this.createObject3DResourceFactory(e.view)),this.drapedResources=new u(this.createDrapedResourceFactory(e.view)),this.isDraped=null!==(t=e.isDraped)&&void 0!==t&&t}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}},98917:(e,t,i)=>{i.d(t,{R:()=>f});var s=i(94172),r=i(29134),n=i(7025),o=i(32035),a=i(12400),l=i(19093),c=i(86361),d=i(51378),u=i(55946),h=i(19182),_=i(19265),p=i(91526),g=i(40779),v=i(70619),m=i(56529),y=i(39077),b=i(4760),w=i(66832),C=i(58901);class f extends h.i{constructor(e){super(e),this._maxSize=0,this._position=(0,a.Ue)(),this._up=(0,a.Ue)(),this._right=(0,a.Ue)(),this._renderOccluded=m.yD.OccludeAndTransparent,this._color=(0,c.al)(1,0,0,1),this._outlineColor=(0,c.al)(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=m.yD.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:O}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){(0,l.c)(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){(0,l.c)(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry(e){let{previous:t,center:i,next:s}=e;this._maxSize=Math.min((0,o.p)(i,t),(0,o.p)(i,s))/3,(0,o.n)(this._up,(0,o.f)(this._up,t,i)),(0,o.n)(this._right,(0,o.f)(this._right,s,i)),(0,o.c)(this._position,i),this.recreateGeometry()}_createObject3DResources(e){const t=new w.E(this._quadMaterialParameters),i=0===this._outlineSize?void 0:new C.U(this._outlineMaterialParameters);return this._createObject3DGeometries(e,t,i),{quadMaterial:t,outlineMaterial:i,forEach:e=>{e(t),i&&e(i)}}}_createObject3DGeometries(e,t,i){if((0,o.e)(this._up,a.AG)&&(0,o.e)(this._right,a.AG))return;const s=this._createGeometries(t,i);for(const r of s)e.addGeometry(r);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new w.E(this._quadMaterialParameters),t=0===this._outlineSize?void 0:new C.U(this._outlineMaterialParameters),i=this._createGeometries(e,t).map((e=>new y.z(e)));return this._setTransformDraped(i),{quadMaterial:e,outlineMaterial:t,geometries:i,pixelRatioHandle:(0,s.YP)((()=>this.view.state.contentPixelRatio),(()=>{this.drapedResources.recreateGeometry()}))}}_createGeometries(e,t){const{up:i,right:s,corner:r}=this._getVertices(),n=function(e,t,i,s){return new g.Z(s,[[b.T.POSITION,new p.a([0,0,0,...t,...e,...i],[0,1,2,1,2,3],3,!0)]])}(i,s,r,e);return t?[n,(0,v.rh)(t,[i,r,s])]:[n]}_getVertices(){let e=this._up,t=this._right;const i=(0,o.g)(d.WM.get(),e,t);return this.isDraped&&(e=(0,o.c)(d.WM.get(),e),t=(0,o.c)(d.WM.get(),t),e[2]=0,t[2]=0,i[2]=0),{up:e,right:t,corner:i}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.object3dResources.object;if(!e)return;const t=this.view.state.camera,i=this._size*t.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,i);(0,r.vc)(S,this._position),(0,r.bA)(S,S,[s,s,s]),e.transformation=S}_setTransformDraped(e){if(0===e.length)return;const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:i}}}=this,{_position:s,_size:n}=this,a=(0,o.c)(d.WM.get(),s);a[2]=_.gi;const l=P;l.spatialReference=t.renderer.spatialReference,l.x=a[0],l.y=a[1];const c=n*(this.view.overlayPixelSizeInMapUnits(l)*i),u=Math.min(this._maxSize,c);(0,r.vc)(S,a),(0,r.bA)(S,S,[u,u,1]);for(const r of e)r.transformation=S}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,t;null!==(e=this.object3dResources.resources)&&void 0!==e&&e.quadMaterial.setParameters(this._quadMaterialParameters),null===(t=this.drapedResources.resources)||void 0===t||t.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,t;null!==(e=this.object3dResources.resources)&&void 0!==e&&null!==(e=e.outlineMaterial)&&void 0!==e&&e.setParameters(this._outlineMaterialParameters),null===(t=this.drapedResources.resources)||void 0===t||null===(t=t.outlineMaterial)||void 0===t||t.setParameters(this._outlineMaterialParameters)}}function O(e){e.pixelRatioHandle.remove(),e.geometries=[]}const S=(0,n.Ue)(),P=(0,u.T)(0,0,void 0,null)}}]);
//# sourceMappingURL=8978.4f7ee434.chunk.js.map