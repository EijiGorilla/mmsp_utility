/*! For license information please see 85.377b88c1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[85],{20085:(e,t,i)=>{i.r(t),i.d(t,{CalciteValueList:()=>y,defineCustomElement:()=>C});var s=i(51554),l=i(13160),a=i(47242),n=i(46895),c=i(72021),r=i(52655),o=i(20348),d=i(38338),h=i(92358),u=i(55950),m=i(57601),f=i(38906),g=i(91438),p=i(87138),v=i(69874);const b="handle";var w;function I(e,t,i){const{items:s,messages:l}=i,a=s.length,n=(0,o.q)(i,e)+1;return function(e,t,i,s){const l=e.replace("{position}",i.toString());return l.replace("{itemLabel}",t).replace("{total}",s.toString())}("idle"===t?l.dragHandleIdle:"active"===t?l.dragHandleActive:"change"===t?l.dragHandleChange:l.dragHandleCommit,e.label,n,a)}function L(e){const t=e.composedPath().find((e=>{var t;return void 0!==(null===(t=e.dataset)||void 0===t?void 0:t.jsHandle)}));return{handle:t,item:e.composedPath().find((e=>{var t;return"calcite-value-list-item"===(null===(t=e.tagName)||void 0===t?void 0:t.toLowerCase())}))}}!function(e){e.grip="grip"}(w||(w={}));const E=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListChange=(0,s.yM)(this,"calciteListChange",6),this.calciteListOrderChange=(0,s.yM)(this,"calciteListOrderChange",6),this.calciteListFilter=(0,s.yM)(this,"calciteListFilter",6),this.lastSelectedItem=null,this.mutationObserver=(0,c.c)("mutation",o.m.bind(this)),this.handleSelector=".".concat(b),this.dragSelector="calcite-value-list-item",this.setFilterEl=e=>{this.filterEl=e},this.setFilteredItems=e=>{this.filteredItems=e},this.deselectRemovedItems=o.d.bind(this),this.deselectSiblingItems=o.a.bind(this),this.selectSiblings=o.s.bind(this),this.handleFilter=o.h.bind(this),this.handleFilterEvent=o.b.bind(this),this.getItemData=o.g.bind(this),this.keyDownHandler=e=>{if(e.defaultPrevented)return;const{handle:t,item:i}=L(e);if(t&&!i.handleActivated&&" "===e.key&&this.updateScreenReaderText(I(i,"commit",this)),!t||!i.handleActivated)return void o.k.call(this,e);e.preventDefault();const{items:s}=this;if(" "===e.key&&this.updateScreenReaderText(I(i,"active",this)),"ArrowUp"!==e.key&&"ArrowDown"!==e.key||s.length<=1)return;const{el:l}=this,a=(0,o.t)(this,i,"ArrowUp"===e.key?"up":"down");if(a===s.length-1)l.appendChild(i);else{const e=l.children[a],t=e===i.nextElementSibling?e.nextElementSibling:e;l.insertBefore(i,t)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map((e=>{let{value:t}=e;return t}))),requestAnimationFrame((()=>(0,h.k)(t))),i.handleActivated=!0,this.updateHandleAriaLabel(t,I(i,"change",this))},this.storeAssistiveEl=e=>{this.assistiveTextEl=e},this.handleFocusIn=e=>{const{handle:t,item:i}=L(e);null!==i&&void 0!==i&&i.handleActivated||!i||!t||this.updateHandleAriaLabel(t,I(i,"idle",this))},this.disabled=!1,this.canPull=void 0,this.canPut=void 0,this.dragEnabled=!1,this.filteredItems=[],this.filteredData=[],this.filterEnabled=!1,this.filterPlaceholder=void 0,this.filterText=void 0,this.group=void 0,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.messageOverrides=void 0,this.messages=void 0,this.dataForFilter=[],this.defaultMessages=void 0,this.effectiveLocale="",this.selectedValues=new Map}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,d.d)(this)||((0,l.c)(this),(0,n.c)(this),(0,r.c)(this),o.i.call(this),o.c.call(this),this.setUpSorting())}async componentWillLoad(){(0,a.a)(this),await(0,r.s)(this)}componentDidLoad(){(0,a.s)(this),o.f.call(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,d.d)(this)||((0,l.d)(this),(0,d.a)(this),(0,n.d)(this),(0,r.d)(this),o.e.call(this))}calciteListFocusOutHandler(e){o.n.call(this,e)}calciteListItemRemoveHandler(e){o.r.call(this,e)}calciteListItemChangeHandler(e){o.j.call(this,e)}calciteInternalListItemPropsChangeHandler(e){e.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(e){o.l.call(this,e),e.stopPropagation()}onDragStart(){o.e.call(this)}onDragEnd(){o.c.call(this)}onDragSort(){this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const e=this.items.map((e=>e.value));this.calciteListOrderChange.emit(e)}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){o.o.call(this,"calcite-value-list-item"),this.setUpSorting()}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpSorting(){const{dragEnabled:e}=this;e&&(0,d.c)(this)}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(e){return await(0,a.c)(this),o.p.call(this,e)}getIconType(){let e=null;return this.dragEnabled&&(e=w.grip),e}updateScreenReaderText(e){this.assistiveTextEl.textContent=e}updateHandleAriaLabel(e,t){e.ariaLabel=t}handleValueListItemBlur(e){const{item:t,handle:i}=e.detail;null!==t&&void 0!==t&&t.handleActivated||!t||this.updateHandleAriaLabel(i,I(t,"idle",this)),e.stopPropagation()}render(){return(0,s.h)(o.L,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-value-list",{disabled:[516],canPull:[16],canPut:[16],dragEnabled:[516,"drag-enabled"],filteredItems:[1040],filteredData:[1040],filterEnabled:[516,"filter-enabled"],filterPlaceholder:[513,"filter-placeholder"],filterText:[1537,"filter-text"],group:[513],loading:[516],multiple:[516],selectionFollowsFocus:[516,"selection-follows-focus"],messageOverrides:[1040],messages:[1040],dataForFilter:[32],defaultMessages:[32],effectiveLocale:[32],selectedValues:[32],getSelectedItems:[64],setFocus:[64]},[[0,"focusout","calciteListFocusOutHandler"],[0,"calciteListItemRemove","calciteListItemRemoveHandler"],[0,"calciteListItemChange","calciteListItemChangeHandler"],[0,"calciteInternalListItemPropsChange","calciteInternalListItemPropsChangeHandler"],[0,"calciteInternalListItemValueChange","calciteInternalListItemValueChangeHandler"],[0,"calciteValueListItemDragHandleBlur","handleValueListItemBlur"]]]);function x(){if("undefined"===typeof customElements)return;["calcite-value-list","calcite-filter","calcite-icon","calcite-input","calcite-loader","calcite-progress","calcite-scrim"].forEach((e=>{switch(e){case"calcite-value-list":customElements.get(e)||customElements.define(e,E);break;case"calcite-filter":customElements.get(e)||(0,u.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-input":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,g.d)();break;case"calcite-progress":customElements.get(e)||(0,p.d)();break;case"calcite-scrim":customElements.get(e)||(0,v.d)()}}))}x();const y=E,C=x},99095:(e,t,i)=>{i.d(t,{C:()=>s,I:()=>l,S:()=>a});const s={sticky:"sticky-pos"};var l;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(l||(l={}));const a={menuActions:"menu-actions"}},32484:(e,t,i)=>{i.d(t,{C:()=>s,S:()=>l});const s={heading:"heading",container:"container",indented:"container--indented"},l={parentItem:"parent-item"}},20348:(e,t,i)=>{i.d(t,{L:()=>O,a:()=>S,b:()=>P,c:()=>u,d:()=>k,e:()=>m,f:()=>D,g:()=>T,h:()=>V,i:()=>h,j:()=>f,k:()=>v,l:()=>g,m:()=>o,n:()=>p,o:()=>F,p:()=>C,q:()=>w,r:()=>x,s:()=>A,t:()=>b});var s=i(20226),l=i(92358),a=i(32484),n=i(76652),c=i(51554),r=i(99095);function o(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const d=["ArrowUp","ArrowDown"];function h(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,n.d)(E.bind(this),0),this.emitCalciteListFilter=(0,n.d)(L.bind(this),0)}function u(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}function m(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}function f(e){const{selectedValues:t}=this,{item:i,value:s,selected:a,shiftPressed:n}=e.detail;a?(this.multiple&&n&&this.selectSiblings(i),this.multiple||this.deselectSiblingItems(i),t.set(s,i)):(t.delete(s),this.multiple&&n&&this.selectSiblings(i,!0)),this.multiple||(y(i,a),a&&(0,l.k)(i)),this.lastSelectedItem=i,this.emitCalciteListChange()}function g(e){const t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){const s=i.get(t);i.delete(t),i.set(e.detail.newValue,s)}e.stopPropagation()}function p(e){const{el:t,items:i,multiple:s,selectedValues:l}=this;if(s)return;t.contains(e.relatedTarget)||I(i).forEach((t=>{y(t,0===l.size?t.contains(e.target)||e.target===t:t.selected)}))}function v(e){const{key:t,target:i}=e;if(!function(e){return!!d.find((t=>t===e))}(t))return;const{items:s,multiple:a,selectionFollowsFocus:n}=this,{length:c}=s,r=s.indexOf(i);if(!c||-1===r)return;e.preventDefault();const o=s[b(this,i,"ArrowUp"===t?"up":"down")];s.forEach((e=>y(e,e===o))),!a&&n&&(o.selected=!0),(0,l.k)(o)}function b(e,t,i){const{items:l}=e,{length:a}=l,n=l.indexOf(t),c="up"===i?-1:1;let r=1,o=(0,s.g)(n+c*r++,a);const d=o;for(;l[o].disabled&&(o=(0,s.g)(n+c*r++,a),o!==d););return o}function w(e,t){const{items:i}=e;return i.indexOf(t)}function I(e){return e.filter((e=>!e.disabled))}function L(){this.calciteListFilter.emit()}function E(){this.calciteListChange.emit(this.selectedValues)}function x(e){if(e.defaultPrevented)return;const t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName&&t.slot===a.S.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>i.delete(e.value)))):(t.remove(),i.delete(t.value)),this.emitCalciteListChange()}function y(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function C(e){if(this.filterEnabled&&"filter"===e)return void await(0,l.k)(this.filterEl);const{items:t,multiple:i,selectionFollowsFocus:s}=this;if(0===t.length)return;var a;if(i)return null===(a=I(t)[0])||void 0===a?void 0:a.setFocus();const n=I(t),c=n.find((e=>e.selected))||n[0];return s&&c&&(c.selected=!0),c.setFocus()}function F(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:i}=this;i.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.deselectDisabled=!0,y(e,!1)),e.selected&&(t=!0,y(e,!0),this.selectedValues.set(e.value,e))}));const[s]=i;t||!s||s.disabled||y(s,!0)}function k(){const e=this.selectedValues,t=this.items.map((e=>{let{value:t}=e;return t}));e.forEach((e=>{t.includes(e.value)||this.selectedValues.delete(e.value)}))}function S(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.lastSelectedItem)return;const{items:i}=this,s=i.findIndex((e=>e.value===this.lastSelectedItem.value)),l=i.findIndex((t=>t.value===e.value));i.slice(Math.min(s,l),Math.max(s,l)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let H;function V(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{filteredData:i,filterText:s}=this,a=i.map((e=>e.value));let n=!1;H||(H=new Set);const c=(null===(e=this.items)||void 0===e?void 0:e.filter((e=>{const t=e.parentElement;t.matches("calcite-pick-list-group")&&H.add(t);const i=!s||a.includes(e.value);return e.hidden=!i,n||(n=i&&e.selected),i})))||[];H.forEach((e=>{const t=c.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=(0,l.g)(e,"parent-item");i&&(i.hidden=!1,c.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),H.clear(),c.length>0&&!n&&!this.multiple&&y(c[0],!0),this.setFilteredItems(c),t&&this.emitCalciteListFilter()}function D(){var e;const t=null===(e=this.filterEl)||void 0===e?void 0:e.filteredItems;t&&(this.filteredData=t),this.handleFilter()}function P(e){e.stopPropagation();const{filteredItems:t,value:i}=e.currentTarget;this.filterText=i,this.filteredData=t,this.handleFilter(!0)}function T(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const O=e=>{let{props:{disabled:t,loading:i,filterEnabled:s,dataForFilter:a,handleFilterEvent:n,filterPlaceholder:o,filterText:d,setFilterEl:h,dragEnabled:u,storeAssistiveEl:m},...f}=e;const g=(0,c.h)("slot",null);return(0,c.h)(c.AA,{"aria-busy":(0,l.t)(i),role:"menu",...f},(0,c.h)("section",null,u?(0,c.h)("span",{"aria-live":"assertive",class:"assistive-text",ref:m}):null,(0,c.h)("header",{class:{[r.C.sticky]:!0}},s?(0,c.h)("calcite-filter",{"aria-label":o,disabled:i||t,items:a,onCalciteFilterChange:n,placeholder:o,value:d,ref:h}):null,(0,c.h)("slot",{name:r.S.menuActions})),i?(0,c.h)("calcite-scrim",{loading:i}):null,g))}}}]);
//# sourceMappingURL=85.377b88c1.chunk.js.map