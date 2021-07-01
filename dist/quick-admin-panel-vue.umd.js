!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).QuickAdminPanelVue={},e.Vue)}(this,(function(e,t){"use strict";t.pushScopeId("data-v-2da76726");const a={style:{display:"flex","flex-direction":"column",height:"100vh"}},i={style:{display:"flex","flex-direction":"row","align-items":"center"}},o=t.createVNode("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),r={style:{display:"flex",flex:"1"}},s={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},l={class:"sidebar-item"},c={class:"content"};t.popScopeId();const n={expose:[],props:{sidebarItems:Array},setup(e){const n=e,d=t.ref(""),h=t.computed((()=>d.value?n.sidebarItems.filter((e=>e.name.toLowerCase().includes(d.value.toLowerCase()))):n.sidebarItems)),g=t.ref(null);return(e,n)=>(t.openBlock(),t.createBlock("div",a,[t.createVNode("nav",i,[t.renderSlot(e.$slots,"navbar",{},(()=>[o]),{},!0)]),t.createVNode("div",r,[t.createVNode("aside",null,[t.createVNode("div",s,[t.withDirectives(t.createVNode("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":n[1]||(n[1]=e=>d.value=e)},null,512),[[t.vModelText,d.value]])]),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(t.unref(h),(a=>(t.openBlock(),t.createBlock("div",l,[t.renderSlot(e.$slots,"sidebar-item",{sidebarItem:a,selectSidebarItem:()=>g.value=a,isActive:g.value&&g.value.name===a.name},void 0,!0)])))),256))]),t.createVNode("div",c,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-2da76726"};const d={props:{route:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{route(){this.route&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(e,t,a){var i;return function(){var o=this,r=arguments,s=function(){i=null,a||e.apply(o,r)},l=a&&!i;clearTimeout(i),i=setTimeout(s,t),l&&e.apply(o,r)}},debouncedFetch:(h=function(){this.fetchItemsForPage(1,!1,!0)},g=250,function(){var e=this,t=arguments,a=function(){u=null,p||h.apply(e,t)},i=p&&!u;clearTimeout(u),u=setTimeout(a,g),i&&h.apply(e,t)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(e){this.sortField=e,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(e,t=!1,a=!1){if(e===this.paginator.currentPage&&!a)return;if(e===this.paginator.firstPage&&(this.pageSwitch=4),e===this.paginator.lastPage){let e=this.paginator.lastPage-2;e>=4&&(this.pageSwitch=e)}if(e===this.paginator.lastPage-1){let e=this.paginator.lastPage-1-1;e>=4&&(this.pageSwitch=e)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),t||(e==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),e<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,e===this.pageSwitch-3&&e>1&&this.pageSwitch--)),this.paginator.currentPage=e,this.loading=!0;var i=this.route.split("?");if(i=i.length>1?this.route+"&":this.route+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let t=0;t<20;t++){let a={};this.fields.forEach(((i,o)=>{a[i.field]=`Row ${t+1+(1===e?0:10*e)} Column ${o+1}`})),this.items.push(a)}return this.paginator.currentPage=e,this.paginator.lastPage=8,this.paginator.from=1===e?1:10*e+1,this.paginator.to=1===e?20:10*e+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let o=(new Date).getTime();axios.get(`${i}page=${e}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((e=>{(e=e.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>o||(this.currentDataFreshnessTimestamp=o,this.items=e.paginator.data,this.paginator.currentPage=e.paginator.current_page,this.paginator.lastPage=e.paginator.last_page,this.paginator.from=e.paginator.from,this.paginator.to=e.paginator.to,this.paginator.total=e.paginator.total,this.paginator.unfilteredTotal=e.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given route does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(e){this.selectedCheckboxesVirtual=[],e.target.checked&&this.items.forEach((e=>{this.selectedCheckboxesVirtual.push(e[this.checkboxField])}))}},created(){this.route&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",(()=>{this.refreshDataTable()})),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])}};var h,g,p,u;const m=t.withScopeId("data-v-51041034");t.pushScopeId("data-v-51041034");const k={class:"datatable"},f={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},b=t.createTextVNode(" Refresh"),P=t.createVNode("br",null,null,-1),S={key:0,style:{width:"45px","min-width":"45px"}},y={key:0},v=t.createVNode("td",{colspan:"100%",class:"ta-c"},"Loading",-1),x={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},V={key:2,class:"ta-c"},C={key:0},w=t.createVNode("td",{colspan:"100%",class:"ta-c"},"No records found",-1),B=t.createVNode("br",null,null,-1),N={class:"f-l"},F=t.createVNode("span",null,"...",-1);t.popScopeId();const I=m(((e,a,i,o,r,s)=>(t.openBlock(),t.createBlock("div",k,[t.createVNode("div",f,[t.createVNode("div",null,[t.renderSlot(e.$slots,"actions",{},void 0,!0)]),t.createVNode("div",null,[t.createVNode("button",{onClick:a[1]||(a[1]=(...e)=>s.refreshDataTable&&s.refreshDataTable(...e))},[t.createVNode("i",{class:["fas fa-sync-alt",{"fa-spin":r.refreshingDataTable}]},null,2),b]),t.withDirectives(t.createVNode("input",{type:"search","onUpdate:modelValue":a[2]||(a[2]=e=>r.filter=e),onInput:a[3]||(a[3]=(...e)=>s.filterItems&&s.filterItems(...e)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[t.vModelText,r.filter]])])]),P,t.createVNode("div",{class:"table-container",style:{height:i.tableHeight}},[t.createVNode("table",null,[t.createVNode("thead",null,[t.createVNode("tr",null,[i.checkboxes?(t.openBlock(),t.createBlock("th",S,[r.items.length>0?(t.openBlock(),t.createBlock("input",{key:0,type:"checkbox",onChange:a[4]||(a[4]=(...e)=>s.selectAllCheckboxes&&s.selectAllCheckboxes(...e)),ref:"selectAllCheckboxesInput"},null,544)):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0),s.itemActionsSlotExists?(t.openBlock(),t.createBlock("th",{key:1,style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},"Actions",4)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(i.fields,(e=>{var a;return t.openBlock(),t.createBlock("th",{class:{active:r.sortField===e.field},style:{width:null!=(a=e.width)&&a},onClick:t=>s.sortColumn(e.field)},[t.createTextVNode(t.toDisplayString(e.label)+" ",1),t.createVNode("span",{class:["arrow","asc"===r.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),t.createVNode("tbody",null,[!i.route||r.loading?(t.openBlock(),t.createBlock("tr",y,[v])):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(r.items,((o,l)=>(t.openBlock(),t.createBlock("tr",null,[i.checkboxes?(t.openBlock(),t.createBlock("td",x,[t.withDirectives(t.createVNode("input",{type:"checkbox",value:o[i.checkboxField],"onUpdate:modelValue":a[5]||(a[5]=e=>r.selectedCheckboxesVirtual=e)},null,8,["value"]),[[t.vModelCheckbox,r.selectedCheckboxesVirtual]])])):t.createCommentVNode("",!0),s.itemActionsSlotExists&&0===l?(t.openBlock(),t.createBlock("td",{key:1,class:"ta-c",style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},[t.renderSlot(e.$slots,"item-actions",{item:o},void 0,!0)],4)):t.createCommentVNode("",!0),s.itemActionsSlotExists&&0!==l?(t.openBlock(),t.createBlock("td",V,[t.renderSlot(e.$slots,"item-actions",{item:o},void 0,!0)])):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(i.fields,(e=>(t.openBlock(),t.createBlock("td",null,t.toDisplayString(o[e.field]),1)))),256))])))),256)),0===r.items.length?(t.openBlock(),t.createBlock("tr",C,[w])):t.createCommentVNode("",!0)],64))])])],4),B,t.createVNode("div",N,[r.paginator.total>0?(t.openBlock(),t.createBlock(t.Fragment,{key:0},[t.createTextVNode(" From "+t.toDisplayString(r.paginator.from)+" to "+t.toDisplayString(r.paginator.to)+" of "+t.toDisplayString(r.paginator.total)+" entries (filtered from "+t.toDisplayString(r.paginator.unfilteredTotal)+" total records) "+t.toDisplayString(s.selectedItemsCountText),1)],64)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(" No records were found (filtered from "+t.toDisplayString(r.paginator.unfilteredTotal)+" total records) ",1)],64))]),t.createVNode("div",{class:["paginator f-r",{"disable-all":r.loading}]},[t.createVNode("button",{onClick:a[6]||(a[6]=e=>s.fetchItemsForPage(r.paginator.firstPage)),disabled:r.paginator.firstPage===r.paginator.currentPage},"First",8,["disabled"]),t.createVNode("button",{onClick:a[7]||(a[7]=e=>s.fetchItemsForPage(r.paginator.currentPage-1)),disabled:r.paginator.firstPage===r.paginator.currentPage},"<",8,["disabled"]),r.paginator.lastPage>=r.pageSwitch-3?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[8]||(a[8]=e=>s.fetchItemsForPage(r.pageSwitch-3)),class:{active:r.pageSwitch-3===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-3),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch-2?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[9]||(a[9]=e=>s.fetchItemsForPage(r.pageSwitch-2)),class:{active:r.pageSwitch-2===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-2),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch-1?(t.openBlock(),t.createBlock("button",{key:2,onClick:a[10]||(a[10]=e=>s.fetchItemsForPage(r.pageSwitch-1)),class:{active:r.pageSwitch-1===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch-1),3)):t.createCommentVNode("",!0),r.paginator.lastPage>=r.pageSwitch?(t.openBlock(),t.createBlock("button",{key:3,onClick:a[11]||(a[11]=e=>s.fetchItemsForPage(r.pageSwitch)),class:{active:r.pageSwitch===r.paginator.currentPage}},t.toDisplayString(r.pageSwitch),3)):t.createCommentVNode("",!0),r.paginator.lastPage>4?(t.openBlock(),t.createBlock(t.Fragment,{key:4},[F,r.paginator.lastPage-1>0&&r.paginator.firstPage!==r.paginator.lastPage-1&&r.paginator.lastPage-1>4?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[12]||(a[12]=e=>s.fetchItemsForPage(r.paginator.lastPage-1)),class:{active:r.paginator.lastPage-1===r.paginator.currentPage}},t.toDisplayString(r.paginator.lastPage-1),3)):t.createCommentVNode("",!0),r.paginator.lastPage!==r.paginator.firstPage?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[13]||(a[13]=e=>s.fetchItemsForPage(r.paginator.lastPage)),class:{active:r.paginator.lastPage===r.paginator.currentPage}},t.toDisplayString(r.paginator.lastPage),3)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0),t.createVNode("button",{onClick:a[14]||(a[14]=e=>s.fetchItemsForPage(r.paginator.currentPage+1)),disabled:r.paginator.lastPage===r.paginator.currentPage},">",8,["disabled"]),t.createVNode("button",{onClick:a[15]||(a[15]=e=>s.fetchItemsForPage(r.paginator.lastPage)),disabled:r.paginator.lastPage===r.paginator.currentPage},"Last",8,["disabled"])],2)]))));d.render=I,d.__scopeId="data-v-51041034",e.Container=n,e.DataTable=d,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
