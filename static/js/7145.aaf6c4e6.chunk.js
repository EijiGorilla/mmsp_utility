"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[7145],{97145:(e,t,o)=>{o.d(t,{default:()=>B});var i=o(27366),s=o(80987),l=o(79056),a=o(18442),n=o(94172),r=o(49861),d=(o(93169),o(32718),o(84936),o(69912)),c=o(33565),p=o(91505),h=o(89500),u=o(9309);const m="layer-list-mode",y=s.Z.ofType(h.Z);let _=class extends p.Z.EventedAccessor{constructor(e){super(e),this.catalogItems=new y,this.checkPublishStatusEnabled=!1,this.catalogLayer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.view=null}initialize(){this.addHandles([(0,n.YP)((()=>{var e,t;return[null===(e=this.catalogLayer)||void 0===e?void 0:e.loaded,null===(t=this.view)||void 0===t?void 0:t.ready]}),(()=>this._compileList()),n.nn),(0,n.on)((()=>{var e;return null===(e=this.catalogLayer)||void 0===e?void 0:e.dynamicGroupLayer.layers}),"change",(()=>this._compileList())),(0,n.YP)((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._recompileList()))])}destroy(){this.view=null,this.catalogItems.removeAll()}get state(){const{view:e,catalogLayer:t}=this;return null!==e&&void 0!==e&&e.ready&&null!==t&&void 0!==t&&t.loaded?"ready":e&&t?"loading":"disabled"}get totalItems(){return this.catalogItems.flatten((e=>e.children)).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_createListItem(e){const{view:t,listItemCreatedFunction:o,checkPublishStatusEnabled:i,listModeDisabled:s}=this;return new h.Z({checkPublishStatusEnabled:i,listModeDisabled:s,layer:e,listItemCreatedFunction:o,view:t})}_removeAllItems(){this.catalogItems.removeAll()}_getViewableLayers(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,u.aV)(e))):void 0}_watchLayersListMode(e){this.removeHandles(m),e&&!this.listModeDisabled&&this.addHandles((0,n.YP)((()=>e.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>this._compileList())),m)}_compileList(){const{catalogLayer:e}=this;if(null===e||void 0===e||!e.loaded)return;const t=null===e||void 0===e?void 0:e.dynamicGroupLayer.layers;this._watchLayersListMode(t);const o=this._getViewableLayers(t);null!==o&&void 0!==o&&o.length?(this._createNewItems(o),this._removeItems(o),this._sortItems(o)):this._removeAllItems()}_createNewItems(e){const{catalogItems:t}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{catalogItems:t}=this,o=[];t.forEach((t=>{t&&(null===e||void 0===e?void 0:e.includes(t.layer))||o.push(t)})),t.removeMany(o)}_sortItems(e){const{catalogItems:t}=this;t.sort(((t,o)=>{const i=e.indexOf(t.layer),s=e.indexOf(o.layer);return i>s?-1:i<s?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};(0,i._)([(0,r.Cb)({type:y})],_.prototype,"catalogItems",void 0),(0,i._)([(0,r.Cb)()],_.prototype,"checkPublishStatusEnabled",void 0),(0,i._)([(0,r.Cb)()],_.prototype,"catalogLayer",void 0),(0,i._)([(0,r.Cb)()],_.prototype,"listItemCreatedFunction",void 0),(0,i._)([(0,r.Cb)({nonNullable:!0})],_.prototype,"listModeDisabled",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],_.prototype,"state",null),(0,i._)([(0,r.Cb)()],_.prototype,"totalItems",null),(0,i._)([(0,r.Cb)()],_.prototype,"view",void 0),_=(0,i._)([(0,d.j)("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")],_);const v=_;var b=o(7138);let g=class extends b.Z{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"closeButton",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"collapseButton",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"errors",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"filter",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"flow",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"heading",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"statusIndicators",void 0),(0,i._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],g.prototype,"temporaryLayerIndicators",void 0),g=(0,i._)([(0,d.j)("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")],g);const L=g,I="esri-catalog-layer-list",f="".concat(I,"__item"),w={base:I,actionMenu:"".concat(I,"__action-menu"),actionGroup:"".concat(I,"__action-group"),filterNoResults:"".concat(I,"__filter-no-results"),item:f,itemActive:"".concat(f,"--active"),itemContent:"".concat(f,"-content"),itemContentBottom:"".concat(f,"-content-bottom"),itemMessage:"".concat(f,"-message"),itemInvisible:"".concat(f,"--invisible"),itemActionIcon:"".concat(f,"-action-icon"),itemActionImage:"".concat(f,"-action-image"),itemTemporaryIcon:"".concat(f,"-temporary-icon"),itemTableIcon:"".concat(f,"-table-icon"),statusIndicator:"".concat(I,"__status-indicator"),publishing:"".concat(I,"__publishing"),updating:"".concat(I,"__updating"),connectionStatus:"".concat(I,"__connection-status"),connectionStatusConnected:"".concat(I,"__connection-status--connected"),visibleToggle:"".concat(I,"__visible-toggle"),visibleIcon:"".concat(I,"__visible-icon")};var C,M=o(35396),F=o(8905),O=o(7021),A=o(67144),T=o(80975),P=o(80532),k=o(28907),E=o(67005);const N=s.Z.ofType(h.Z);let R=C=class extends((0,l.IG)(c.Z)){constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new a.Z,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._focusLayerFlowItem=null,this._layerListMap=new a.Z,this._rootGroupUid="operational-".concat(this.uid),this._openedLayersController=null,this.catalogLayerList=null,this.catalogOptions=null,this.collapsed=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.knowledgeGraphOptions=null,this.layerTablesEnabled=new s.Z(["knowledge-graph"]),this.mapImageOptions=null,this.messages=null,this.messagesCommon=null,this.minFilterItems=u.Kp,this.openedLayers=new s.Z,this.openedLayerLists=new s.Z,this.selectedItems=new N,this.selectionMode="none",this.tableList=null,this.tileOptions=null,this.viewModel=new v,this.visibilityAppearance="default",this.visibleElements=new L,this._onTablesOpen=e=>{this.onTablesOpen?this.onTablesOpen(e):(this.openedLayers.push(e.layer),this._focusLayerFlowItem=e.layer.uid)},this._onCatalogOpen=e=>{this.onCatalogOpen?this.onCatalogOpen(e):(this.openedLayers.push(e.layer.parent),this._focusLayerFlowItem=e.layer.uid)},this._onPanelOpen=()=>{this._focusPanelFlowItem=!0},this._onTooltipReferenceChange=(e,t)=>{t?this._tooltipReferenceMap.set(e,t):this._tooltipReferenceMap.delete(e)},this._onTriggerAction=(e,t)=>{this.triggerAction(e,t)},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=e=>{if("default"!==this.visibilityAppearance)return;const t=Array.from(e.composedPath()).find((e=>{var t;return null===(t=e.classList)||void 0===t?void 0:t.contains(w.item)}));this._activeItem=(0,u.rV)(t)}}initialize(){this.addHandles((0,n.on)((()=>this.openedLayers),"change",(()=>this._handleOpenedLayersChange()),n.nn))}loadDependencies(){return(0,F.h)({button:()=>o.e(8690).then(o.bind(o,88690)),flow:()=>o.e(3049).then(o.bind(o,53049)),"flow-item":()=>o.e(8926).then(o.bind(o,48926)),list:()=>Promise.resolve().then(o.bind(o,27505)),notice:()=>o.e(5669).then(o.bind(o,15669)),tooltip:()=>o.e(4730).then(o.bind(o,94730))})}destroy(){this._destroyOpenedLayerLists(),this._tooltipReferenceMap.clear()}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get _renderedOpenLayerFlowItems(){return this.openedLayers.toArray().map((e=>this._renderLayerFlowItem(e)))}get catalogItems(){return this.viewModel.catalogItems}set catalogItems(e){this.viewModel.catalogItems=e}get catalogLayer(){return this.viewModel.catalogLayer}set catalogLayer(e){this.viewModel.catalogLayer=e}get icon(){return"catalog-dataset"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var e,t;const o=null===(e=this.viewModel)||void 0===e?void 0:e.state,i={[O.z.hidden]:"loading"===o,[O.z.disabled]:"disabled"===o},s=null===(t=this.catalogItems)||void 0===t?void 0:t.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return(0,E.u)("div",{class:this.classes(w.base,O.z.widget,O.z.panel,i)},null!==s&&void 0!==s&&s.length?[this._renderItemTooltips(s),this._renderItems(s)]:this._renderNoItems())}async _createFlowList(e,t){const{_layerListMap:o}=this,i=o.get(e);if(i)return i;const s="catalog"===e.type?await this._createCatalogLayerList(e):await this._createTableList(e);return t.aborted||o.set(e,s),s}async _handleOpenedLayersChange(){var e;const{_layerListMap:t,openedLayers:o,openedLayerLists:i}=this;null===(e=this._openedLayersController)||void 0===e||e.abort();const s=new AbortController,{signal:l}=s;this._openedLayersController=s,t.forEach(((e,i)=>{o.includes(i)||(e.destroy(),t.delete(i))}));const a=await Promise.all(o.map((e=>this._createFlowList(e,l))));if(l.aborted)return;i.removeAll(),i.addMany(a);const n=i.at(-1);n?"catalogLayer"in n?(this._set("catalogLayerList",n),this._set("tableList",null)):(this._set("catalogLayerList",null),this._set("tableList",n)):(this._set("catalogLayerList",null),this._set("tableList",null))}_destroyOpenedLayerLists(){this.openedLayerLists.destroyAll(),this.openedLayers.removeAll(),this._layerListMap.clear()}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:o}=this;return e?(0,E.u)("calcite-tooltip",{key:"tooltip-".concat(e.layer.uid),referenceElement:t.get(e.layer.uid)},o.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){var t;return e.incompatible?this._renderItemTooltip(e):null===(t=e.children)||void 0===t?void 0:t.filter((e=>!e.hidden)).toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderItemTooltips(e){return null===e||void 0===e?void 0:e.toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderNoItemsMessage(){return(0,E.u)("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return(0,E.u)("div",{class:w.itemMessage,key:"esri-layer-list__no-items"},(0,E.u)("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten((e=>e.children)).filter((e=>{let{hidden:t,panel:o}=e;return!t&&(null===o||void 0===o?void 0:o.open)&&!o.disabled&&o.flowEnabled})).toArray().map((e=>{let{title:t,panel:o}=e;const i=()=>this._handlePanelFlowItemBack(o);return(0,E.u)("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:o.title,headingLevel:this.headingLevel,key:"flow-panel-".concat(o.uid),onCalciteFlowItemBack:e=>{e.preventDefault(),i()}},o.render(),(0,E.u)("calcite-button",{appearance:"transparent",onclick:i,slot:"footer-actions",width:"full"},this.messagesCommon.back))})):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,(0,T.kW)(e))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,(0,T.kW)(e))}_renderItems(e){const{visible:t,collapsed:o,_filterEnabled:i,_rootGroupUid:s,visibleElements:{closeButton:l,collapseButton:a,heading:n,flow:r},selectionMode:d,filterText:c,filterPlaceholder:p,messages:h}=this,u=[(0,E.u)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!t,collapsed:o,collapsible:a,heading:n?h.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},(0,E.u)("calcite-list",{afterCreate:e=>{e.addEventListener("focusin",this._setActiveItem),e.addEventListener("focusout",this._clearActiveItem)},afterRemoved:e=>{e.removeEventListener("focusin",this._setActiveItem),e.removeEventListener("focusout",this._clearActiveItem)},"data-layer-type":s,filterEnabled:i,filterPlaceholder:p,filterProps:A.I,filterText:i?c:"",group:s,key:"root-list",label:h.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:d,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListFilter:e=>{var t,o;return this.filterText=null!==(t=null===(o=e.target)||void 0===o?void 0:o.filterText)&&void 0!==t?t:""}},null===e||void 0===e?void 0:e.toArray().map((e=>this._renderItem(e))),null!==e&&void 0!==e&&e.length&&i?(0,E.u)("div",{class:w.filterNoResults,slot:"filter-no-results"},(0,E.u)("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e),this._renderedOpenLayerFlowItems];return t?r?(0,E.u)("calcite-flow",{key:"root-flow"},u):u:null}_focusLayerFlowItemNode(e){this._focusLayerFlowItem===e.dataset.layerUid&&(this._focusLayerFlowItem=null,(0,T.kW)(e))}_renderLayerFlowItem(e){var t;const{messages:o,openedLayers:i}=this,s=e.title||this.messages.untitledLayer;return(0,E.u)("calcite-flow-item",{afterCreate:this._focusLayerFlowItemNode,afterUpdate:this._focusLayerFlowItemNode,bind:this,"data-layer-uid":e.uid,description:s,heading:o["catalog"===e.type?"catalogLayers":"tables"],headingLevel:this.headingLevel,key:"flow-layer-list-".concat(e.uid),onCalciteFlowItemBack:e=>{e.preventDefault(),i.pop();const t=i.at(-1);t?this._focusLayerFlowItem=t.uid:this._focusRootFlowItem=!0}},null===(t=this._layerListMap.get(e))||void 0===t?void 0:t.render())}async _createCatalogLayerList(e){const{headingLevel:t,catalogOptions:o,view:i,filterPlaceholder:s,listItemCreatedFunction:l,minFilterItems:a,selectionMode:n,visibilityAppearance:r,onCatalogOpen:d,onTablesOpen:c}=this;return new C({headingLevel:t,view:i,filterPlaceholder:s,listItemCreatedFunction:l,minFilterItems:a,selectionMode:n,visibilityAppearance:r,...o,catalogLayer:e,onCatalogOpen:d,onTablesOpen:c})}_getTableListParams(e){switch(e.type){case"knowledge-graph":return{...this.knowledgeGraphOptions,tables:e.tables};case"map-image":return{...this.mapImageOptions,tables:e.subtables};case"tile":return{...this.tileOptions,tables:e.subtables};default:return null}}async _createTableList(e){const{default:t}=await o.e(8904).then(o.bind(o,58904)),{headingLevel:i,selectionMode:s}=this;return new t({headingLevel:i,selectionMode:s,...this._getTableListParams(e)})}_renderItem(e,t,o){return(0,E.u)(M.Z,{activeItem:this._activeItem,css:w,dragEnabled:!1,item:e,key:"layerListItem-".concat(e.layer.uid),layerTablesEnabled:this.layerTablesEnabled,listModeDisabled:this.viewModel.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,parent:t,parentTitles:o,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:null,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibilityAppearance:this.visibilityAppearance,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onCatalogOpen:this._onCatalogOpen,onPanelOpen:this._onPanelOpen,onTablesOpen:this._onTablesOpen,onTooltipReferenceChange:this._onTooltipReferenceChange})}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:o}=this;if("none"===t)return;const i=e.target.selectedItems.map((e=>(0,u.rV)(e))).filter(Boolean);o.removeAll(),o.addMany(i)}};(0,i._)([(0,r.Cb)()],R.prototype,"_activeItem",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_tooltipReferenceMap",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_focusRootFlowItem",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_focusPanelFlowItem",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_focusLayerFlowItem",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_layerListMap",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"_filterEnabled",null),(0,i._)([(0,r.Cb)()],R.prototype,"_renderedOpenLayerFlowItems",null),(0,i._)([(0,r.Cb)()],R.prototype,"catalogItems",null),(0,i._)([(0,r.Cb)()],R.prototype,"catalogLayer",null),(0,i._)([(0,r.Cb)({readOnly:!0})],R.prototype,"catalogLayerList",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"catalogOptions",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"collapsed",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"filterPlaceholder",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"filterText",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"headingLevel",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"icon",null),(0,i._)([(0,r.Cb)()],R.prototype,"knowledgeGraphOptions",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"label",null),(0,i._)([(0,r.Cb)()],R.prototype,"layerTablesEnabled",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"listItemCreatedFunction",null),(0,i._)([(0,r.Cb)()],R.prototype,"mapImageOptions",void 0),(0,i._)([(0,r.Cb)(),(0,P.H)("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")],R.prototype,"messages",void 0),(0,i._)([(0,r.Cb)(),(0,P.H)("esri/t9n/common")],R.prototype,"messagesCommon",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"minFilterItems",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],R.prototype,"openedLayers",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],R.prototype,"openedLayerLists",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"onCatalogOpen",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"onTablesOpen",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"selectedItems",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"selectionMode",void 0),(0,i._)([(0,r.Cb)({readOnly:!0})],R.prototype,"tableList",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"tileOptions",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"view",null),(0,i._)([(0,k.s)("trigger-action"),(0,r.Cb)({type:v})],R.prototype,"viewModel",void 0),(0,i._)([(0,r.Cb)()],R.prototype,"visibilityAppearance",void 0),(0,i._)([(0,r.Cb)({type:L,nonNullable:!0})],R.prototype,"visibleElements",void 0),R=C=(0,i._)([(0,d.j)("esri.widgets.CatalogLayerList")],R);const B=R}}]);
//# sourceMappingURL=7145.aaf6c4e6.chunk.js.map