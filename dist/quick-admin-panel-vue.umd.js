!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).QuickAdminPanelVue={},e.Vue)}(this,(function(e,t){"use strict";t.pushScopeId("data-v-07f129fb");const a={style:{display:"flex","flex-direction":"column",height:"100vh"}},i={style:{display:"flex","align-items":"center"}},o=t.createVNode("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),r={style:{display:"flex",flex:"1"}},s={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},l={class:"sidebar-item"},n={class:"content"};t.popScopeId();const c={expose:[],props:{sidebarItems:Array},setup(e){const c=e,d=t.ref(""),h=t.computed((()=>d.value?c.sidebarItems.filter((e=>e.name.toLowerCase().includes(d.value.toLowerCase()))):c.sidebarItems)),g=t.ref(null);return(e,c)=>(t.openBlock(),t.createBlock("div",a,[t.createVNode("nav",i,[t.renderSlot(e.$slots,"navbar",{},(()=>[o]),{},!0)]),t.createVNode("div",r,[t.createVNode("aside",null,[t.createVNode("div",s,[t.withDirectives(t.createVNode("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":c[1]||(c[1]=e=>d.value=e)},null,512),[[t.vModelText,d.value]])]),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(t.unref(h),(a=>(t.openBlock(),t.createBlock("div",l,[t.renderSlot(e.$slots,"sidebar-item",{sidebarItem:a,selectSidebarItem:()=>g.value=a,isActive:g.value&&g.value.name===a.name},void 0,!0)])))),256))]),t.createVNode("div",n,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-07f129fb"};const d={props:{title:String}},h=t.withScopeId("data-v-820db2f0");t.pushScopeId("data-v-820db2f0");const g={style:{height:"calc(100vh - 5.5rem)"}},p={class:"page"},u={class:"heading-underline"};t.popScopeId();const m=h(((e,a,i,o,r,s)=>(t.openBlock(),t.createBlock("div",g,[t.createVNode("div",p,[t.createVNode("h2",u,[t.createTextVNode(t.toDisplayString(i.title)+" ",1),t.createVNode("div",null,[t.renderSlot(e.$slots,"title-right-content",{},void 0,!0)])]),t.createVNode("div",null,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])]))));d.render=m,d.__scopeId="data-v-820db2f0";const f={props:{route:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{route(){this.route&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(e,t,a){var i;return function(){var o=this,r=arguments,s=function(){i=null,a||e.apply(o,r)},l=a&&!i;clearTimeout(i),i=setTimeout(s,t),l&&e.apply(o,r)}},debouncedFetch:(b=function(){this.fetchItemsForPage(1,!1,!0)},k=250,function(){var e=this,t=arguments,a=function(){y=null,v||b.apply(e,t)},i=v&&!y;clearTimeout(y),y=setTimeout(a,k),i&&b.apply(e,t)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(e){this.sortField=e,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(e,t=!1,a=!1){if(e===this.paginator.currentPage&&!a)return;if(e===this.paginator.firstPage&&(this.pageSwitch=4),e===this.paginator.lastPage){let e=this.paginator.lastPage-2;e>=4&&(this.pageSwitch=e)}if(e===this.paginator.lastPage-1){let e=this.paginator.lastPage-1-1;e>=4&&(this.pageSwitch=e)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),t||(e==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),e<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,e===this.pageSwitch-3&&e>1&&this.pageSwitch--)),this.paginator.currentPage=e,this.loading=!0;var i=this.route.split("?");if(i=i.length>1?this.route+"&":this.route+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let t=0;t<20;t++){let a={};this.fields.forEach(((i,o)=>{a[i.field]=`Row ${t+1+(1===e?0:10*e)} Column ${o+1}`})),this.items.push(a)}return this.paginator.currentPage=e,this.paginator.lastPage=8,this.paginator.from=1===e?1:10*e+1,this.paginator.to=1===e?20:10*e+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let o=(new Date).getTime();axios.get(`${i}page=${e}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((e=>{(e=e.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>o||(this.currentDataFreshnessTimestamp=o,this.items=e.paginator.data,this.paginator.currentPage=e.paginator.current_page,this.paginator.lastPage=e.paginator.last_page,this.paginator.from=e.paginator.from,this.paginator.to=e.paginator.to,this.paginator.total=e.paginator.total,this.paginator.unfilteredTotal=e.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given route does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(e){this.selectedCheckboxesVirtual=[],e.target.checked&&this.items.forEach((e=>{this.selectedCheckboxesVirtual.push(e[this.checkboxField])}))}},created(){this.route&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",(()=>{this.refreshDataTable()})),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])}};var b,k,v,y;const S=t.withScopeId("data-v-51041034");t.pushScopeId("data-v-51041034");const P={class:"datatable"},x={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},w=t.createTextVNode(" Refresh"),C=t.createVNode("br",null,null,-1),V={key:0,style:{width:"45px","min-width":"45px"}},N={key:0},B=t.createVNode("td",{colspan:"100%",class:"ta-c"},"Loading",-1),F={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},T={key:2,class:"ta-c"},I={key:0},D=t.createVNode("td",{colspan:"100%",class:"ta-c"},"No records found",-1),$=t.createVNode("br",null,null,-1),A={class:"f-l"},L=t.createVNode("span",null,"...",-1);t.popScopeId();const _=S(((e,a,i,o,r,s)=>(t.openBlock(),t.createBlock("div",P,[t.createVNode("div",x,[t.createVNode("div",null,[t.renderSlot(e.$slots,"actions",{},void 0,!0)]),t.createVNode("div",null,[t.createVNode("button",{onClick:a[1]||(a[1]=(...e)=>s.refreshDataTable&&s.refreshDataTable(...e))},[t.createVNode("i",{class:["fas fa-sync-alt",{"fa-spin":r.refreshingDataTable}]},null,2),w]),t.withDirectives(t.createVNode("input",{type:"search","onUpdate:modelValue":a[2]||(a[2]=e=>r.filter=e),onInput:a[3]||(a[3]=(...e)=>s.filterItems&&s.filterItems(...e)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[t.vModelText,r.filter]])])]),C,t.createVNode("div",{class:"table-container",style:{height:i.tableHeight}},[t.createVNode("table",null,[t.createVNode("thead",null,[t.createVNode("tr",null,[i.checkboxes?(t.openBlock(),t.createBlock("th",V,[r.items.length>0?(t.openBlock(),t.createBlock("input",{key:0,type:"checkbox",onChange:a[4]||(a[4]=(...e)=>s.selectAllCheckboxes&&s.selectAllCheckboxes(...e)),ref:"selectAllCheckboxesInput"},null,544)):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0),s.itemActionsSlotExists?(t.openBlock(),t.createBlock("th",{key:1,style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},"Actions",4)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(i.fields,(e=>{var a;return t.openBlock(),t.createBlock("th",{class:{active:r.sortField===e.field},style:{width:null!=(a=e.width)&&a},onClick:t=>s.sortColumn(e.field)},[t.createTextVNode(t.toDisplayString(e.label)+" ",1),t.createVNode("span",{class:["arrow","asc"===r.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),t.createVNode("tbody",null,[!i.route||r.loading?(t.openBlock(),t.createBlock("tr",N,[B])):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(r.items,((o,l)=>(t.openBlock(),t.createBlock("tr",null,[i.checkboxes?(t.openBlock(),t.createBlock("td",F,[t.withDirectives(t.createVNode("input",{type:"checkbox",value:o[i.checkboxField],"onUpdate:modelValue":a[5]||(a[5]=e=>r.selectedCheckboxesVirtual=e)},null,8,["value"]),[[t.vModelCheckbox,r.selectedCheckboxesVirtual]])])):t.createCommentVNode("",!0),s.itemActionsSlotExists&&0===l?(t.openBlock(),t.createBlock("td",{key:1,class:"ta-c",style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},[t.renderSlot(e.$slots,"item-actions",{item:o},void 0,!0)],4)):t.createCommentVNode("",!0),s.itemActionsSlotExists&&0!==l?(t.openBlock(),t.createBlock("td",T,[t.renderSlot(e.$slots,"item-actions",{item:o},void 0,!0)])):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(i.fields,(e=>(t.openBlock(),t.createBlock("td",null,t.toDisplayString(o[e.field]),1)))),256))])))),256)),0===r.items.length?(t.openBlock(),t.createBlock("tr",I,[D])):t.createCommentVNode("",!0)],64))])])],4),$,t.createVNode("div",A,[r.paginator.total>0?(t.openBlock(),t.createBlock(t.Fragment,{key:0},[t.createTextVNode(" From "+t.toDisplayString(r.paginator.from)+" to "+t.toDisplayString(r.paginator.to)+" of "+t.toDisplayString(r.paginator.total)+" entries (filtered from "+t.toDisplayString(r.paginator.unfilteredTotal)+" total records) "+t.toDisplayString(s.selectedItemsCountText),1)],64)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(" No records were found (filtered from "+t.toDisplayString(r.paginator.unfilteredTotal)+" total records) ",1)],64))]),t.createVNode("div",{class:["paginator f-r",{"disable-all":r.loading}]},[t.createVNode("button",{onClick:a[6]||(a[6]=e=>s.fetchItemsForPage(r.paginator.firstPage)),disabled:r.paginator.firstPage===r.paginator.currentPage},"First",8,["disabled"]),t.createVNode("button",{onClick:a[7]||(a[7]=e=>s.fetchItemsForPage(r.paginator.currentPage-1)),disabled:r.paginator.firstPage===r.paginator.currentPage},"<",8,["disabled"]),r.paginator.lastPage>=r.pageSwitch-3?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[8]||(a[8]=e=>s.fetchItemsForPage(r.pageSwitch-3)),class:{active:r.pageSwitch-3===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-3),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch-2?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[9]||(a[9]=e=>s.fetchItemsForPage(r.pageSwitch-2)),class:{active:r.pageSwitch-2===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-2),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch-1?(t.openBlock(),t.createBlock("button",{key:2,onClick:a[10]||(a[10]=e=>s.fetchItemsForPage(r.pageSwitch-1)),class:{active:r.pageSwitch-1===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-1),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch?(t.openBlock(),t.createBlock("button",{key:3,onClick:a[11]||(a[11]=e=>s.fetchItemsForPage(r.pageSwitch)),class:{active:r.pageSwitch===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch),3)):t.createCommentVNode("",!0),r.paginator.lastPage>4?(t.openBlock(),t.createBlock(t.Fragment,{key:4},[L,r.paginator.lastPage-1>0&&r.paginator.firstPage!==r.paginator.lastPage-1&&r.paginator.lastPage-1>4?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[12]||(a[12]=e=>s.fetchItemsForPage(r.paginator.lastPage-1)),class:{active:r.paginator.lastPage-1===r.paginator.currentPage}},t.toDisplayString(r.paginator.lastPage-1),3)):t.createCommentVNode("",!0),r.paginator.lastPage!==r.paginator.firstPage?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[13]||(a[13]=e=>s.fetchItemsForPage(r.paginator.lastPage)),class:{active:r.paginator.lastPage===r.paginator.currentPage}},t.toDisplayString(r.paginator.lastPage),3)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0),t.createVNode("button",{onClick:a[14]||(a[14]=e=>s.fetchItemsForPage(r.paginator.currentPage+1)),disabled:r.paginator.lastPage===r.paginator.currentPage},">",8,["disabled"]),t.createVNode("button",{onClick:a[15]||(a[15]=e=>s.fetchItemsForPage(r.paginator.lastPage)),disabled:r.paginator.lastPage===r.paginator.currentPage},"Last",8,["disabled"])],2)]))));f.render=_,f.__scopeId="data-v-51041034";var M={install:(e,t)=>{e.config.globalProperties.$loading={show(){let e=document.createElement("div");return e.innerHTML='\n                    <style>\n                    .vld-overlay {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        align-items: center;\n                        display: none;\n                        justify-content: center;\n                        overflow: hidden;\n                        z-index: 1\n                    }\n\n                    .vld-overlay.is-active {\n                        display: flex\n                    }\n\n                    .vld-overlay.is-full-page {\n                        z-index: 999;\n                        position: fixed\n                    }\n\n                    .vld-overlay .vld-background {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        background: #fff;\n                        opacity: 0.5\n                    }\n\n                    .vld-overlay .vld-icon, .vld-parent {\n                        position: relative\n                    }\n                    </style>\n                    <div tabindex="0" aria-label="Loading" class="vld-overlay is-active is-full-page" aria-busy="true" style="">\n                        <div class="vld-background" style="background: black; opacity: 0.5;"></div>\n                        <div class="vld-icon">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="128" width="128" fill="white">\n                                <rect x="0" y="13" width="4" height="5">\n                                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ',document.body.appendChild(e),e.hide=e.remove,e}},e.provide("$loading",e.config.globalProperties.$loading)}};e.Container=c,e.DataTable=f,e.Page=d,e.loading=M,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
