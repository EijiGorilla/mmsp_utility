/*! For license information please see 3329.2112f96a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmmsp_utility=self.webpackChunkmmsp_utility||[]).push([[3329],{93329:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var r=t(10913),d={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(e,a){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10===1?a[0]:a[1]:a[2]},relativeTimeFormatter:function(e,a,t,r){var m=d.words[t];if(1===t.length)return"y"===t&&a?"jedna godina":r||a?m[0]:m[1];var i=d.correctGrammarCase(e,m);return"yy"===t&&a&&"%d godinu"===i?e+" godina":i.replace("%d",e)}},m={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_\u010cetvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._\u010cet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:d.relativeTimeFormatter,mm:d.relativeTimeFormatter,h:d.relativeTimeFormatter,hh:d.relativeTimeFormatter,d:d.relativeTimeFormatter,dd:d.relativeTimeFormatter,M:d.relativeTimeFormatter,MM:d.relativeTimeFormatter,y:d.relativeTimeFormatter,yy:d.relativeTimeFormatter},ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};r.d.locale(m,null,!0);const i=m}}]);
//# sourceMappingURL=3329.2112f96a.chunk.js.map