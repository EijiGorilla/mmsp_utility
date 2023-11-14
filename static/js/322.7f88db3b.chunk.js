"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[322],{80322:(e,t,s)=>{s.r(t),s.d(t,{I3STreeDebugger:()=>y});var l=s(27366),i=(s(59486),s(63780)),o=s(49861),r=(s(25243),s(93169),s(69912)),n=s(14226),a=s(81949),h=s(11186),c=s(71353),u=s(50628),p=s(87287),b=s(80885);let y=class extends p.q{constructor(e){super(e)}getTiles(){const e=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,s=this.nodeSR;return e.map((e=>function(e,t,s){const l=e.serviceObb;if(null==l||null==t)return null;(0,n.F)(d,l.quaternion),(0,h.c)(f,l.center),(0,u.projectBuffer)(f,s,0,f,t,0,1),d[12]=f[0],d[13]=f[1],d[14]=f[2];const i=[[],[],[]];(0,h.c)(f,l.halfSize),(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,l.halfSize),f[0]=-f[0],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,l.halfSize),f[0]=-f[0],f[1]=-f[1],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[0].push([f[0],f[1]]),(0,h.c)(f,l.halfSize),f[1]=-f[1],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[0].push([f[0],f[1]]),i[1].push(i[0][0]),i[1].push(i[0][1]),(0,h.c)(f,l.halfSize),f[0]=-f[0],f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[1].push([f[0],f[1]]),(0,h.c)(f,l.halfSize),f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[1].push([f[0],f[1]]),i[2].push(i[0][0]),i[2].push(i[0][3]),(0,h.c)(f,l.halfSize),f[1]=-f[1],f[2]=-f[2],(0,h.e)(f,f,d),(0,u.projectBuffer)(f,t,0,f,s,0,1),i[2].push([f[0],f[1]]),i[2].push(i[1][3]);const o=new b.Z({rings:i,spatialReference:s});return{lij:[e.level,e.childCount,0],label:e.id,geometry:o}}(e,t,s))).filter(i.pC).sort(((e,t)=>e.lij[0]===t.lij[0]?e.label>t.label?-1:1:e.lij[0]-t.lij[0]))}};(0,l._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"lv",void 0),(0,l._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"nodeSR",void 0),y=(0,l._)([(0,r.j)("esri.views.3d.layers.support.I3STreeDebugger")],y);const d=(0,a.a)(),f=(0,c.c)()},87287:(e,t,s)=>{s.d(t,{q:()=>_});var l=s(27366),i=s(51995),o=s(52639),r=(s(51508),s(7138)),n=s(80987),a=s(16889),h=s(49861),c=(s(25243),s(63780),s(93169),s(69912)),u=s(62554),p=s(61459),b=s(58009),y=s(87037),d=s(61054),f=s(98351),g=s(21897);const w=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let _=class extends r.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=w.map((e=>new p.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,s=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,r)=>{const h=l.lij.toString();s.delete(h);const c=l.lij[0],p=l.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new o.Z({geometry:p,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),t.push(e)}if(this.enableLabels){const s=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(l),c=r/(e.length-1),w=(0,a.t7)(0,200,c),_=(0,a.t7)(20,6,c)/.75,v=null!=l.loadPriority&&l.loadPriority>=e.length,m=new i.Z([w,v?0:w,v?0:w]),j="3d"===this.view.type?()=>new u.Z({verticalOffset:new d.Z({screenLength:40/.75}),callout:new f.Z({color:new i.Z("white"),border:new g.Z({color:new i.Z("black")})}),symbolLayers:new n.Z([new y.Z({text:s,halo:{color:"white",size:1/.75},material:{color:m},size:_})])}):()=>new b.Z({text:s,haloColor:"white",haloSize:1/.75,color:m,size:_}),S=this._labels.get(h);if(S){const e=j();null!=S.symbol&&JSON.stringify(e)===JSON.stringify(S.symbol)||(S.symbol=e)}else{const e=new o.Z({geometry:p.extent.center,symbol:j()});this._labels.set(h,e),t.push(e)}}}));const l=new Array;s.forEach((e=>{const t=this._polygons.get(e);null!=t&&(l.push(t),this._polygons.delete(e));const s=this._labels.get(e);null!=s&&(l.push(s),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.Cb)({constructOnly:!0})],_.prototype,"view",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],_.prototype,"updating",void 0),(0,l._)([(0,h.Cb)()],_.prototype,"enabled",null),_=(0,l._)([(0,c.j)("esri.views.support.TileTreeDebugger")],_)}}]);
//# sourceMappingURL=322.7f88db3b.chunk.js.map