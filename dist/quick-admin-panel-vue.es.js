import{pushScopeId as t,popScopeId as e,ref as a,computed as i,openBlock as s,createBlock as l,createVNode as r,renderSlot as o,withDirectives as n,vModelText as c,Fragment as h,renderList as g,unref as d,toDisplayString as p,createCommentVNode as u,createTextVNode as m,vModelCheckbox as f,withScopeId as b}from"vue";t("data-v-9209d95a");const P={style:{display:"flex","flex-direction":"column",height:"100vh"}},k={style:{display:"flex","flex-direction":"row","align-items":"center"}},v=r("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),w={style:{display:"flex",flex:"1"}},x={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},y={class:"content"};e();const S={expose:[],props:{items:Array},setup(t){const e=t,u=a(""),m=i((()=>u.value?e.items.filter((t=>t.name.toLowerCase().includes(u.value.toLowerCase()))):e.items)),f=a(null);return(t,e)=>(s(),l("div",P,[r("nav",k,[o(t.$slots,"navbar",{},(()=>[v]),{},!0)]),r("div",w,[r("aside",null,[r("div",x,[n(r("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t)},null,512),[[c,u.value]])]),(s(!0),l(h,null,g(d(m),(t=>(s(),l("a",{href:t.link,class:["sidebar-item",{active:f.value&&f.value.name===t.name}],onClick:e=>f.value=t},p(t.name),11,["href","onClick"])))),256))]),r("div",y,[o(t.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-9209d95a"};const C={props:{route:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{route(){this.route&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(t,e,a){var i;return function(){var s=this,l=arguments,r=function(){i=null,a||t.apply(s,l)},o=a&&!i;clearTimeout(i),i=setTimeout(r,e),o&&t.apply(s,l)}},debouncedFetch:(F=function(){this.fetchItemsForPage(1,!1,!0)},I=250,function(){var t=this,e=arguments,a=function(){$=null,T||F.apply(t,e)},i=T&&!$;clearTimeout($),$=setTimeout(a,I),i&&F.apply(t,e)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(t){this.sortField=t,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(t,e=!1,a=!1){if(t===this.paginator.currentPage&&!a)return;if(t===this.paginator.firstPage&&(this.pageSwitch=4),t===this.paginator.lastPage){let t=this.paginator.lastPage-2;t>=4&&(this.pageSwitch=t)}if(t===this.paginator.lastPage-1){let t=this.paginator.lastPage-1-1;t>=4&&(this.pageSwitch=t)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),e||(t==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),t<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,t===this.pageSwitch-3&&t>1&&this.pageSwitch--)),this.paginator.currentPage=t,this.loading=!0;var i=this.route.split("?");if(i=i.length>1?this.route+"&":this.route+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let e=0;e<20;e++){let a={};this.fields.forEach(((i,s)=>{a[i.field]=`Row ${e+1+(1===t?0:10*t)} Column ${s+1}`})),this.items.push(a)}return this.paginator.currentPage=t,this.paginator.lastPage=8,this.paginator.from=1===t?1:10*t+1,this.paginator.to=1===t?20:10*t+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let s=(new Date).getTime();axios.get(`${i}page=${t}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((t=>{(t=t.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>s||(this.currentDataFreshnessTimestamp=s,this.items=t.paginator.data,this.paginator.currentPage=t.paginator.current_page,this.paginator.lastPage=t.paginator.last_page,this.paginator.from=t.paginator.from,this.paginator.to=t.paginator.to,this.paginator.total=t.paginator.total,this.paginator.unfilteredTotal=t.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given route does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(t){this.selectedCheckboxesVirtual=[],t.target.checked&&this.items.forEach((t=>{this.selectedCheckboxesVirtual.push(t[this.checkboxField])}))}},created(){this.route&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",(()=>{this.refreshDataTable()})),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])}};var F,I,T,$;const A=b("data-v-51041034");t("data-v-51041034");const D={class:"datatable"},V={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},O=m(" Refresh"),_=r("br",null,null,-1),W={key:0,style:{width:"45px","min-width":"45px"}},E={key:0},L=r("td",{colspan:"100%",class:"ta-c"},"Loading",-1),U={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},j={key:2,class:"ta-c"},B={key:0},N=r("td",{colspan:"100%",class:"ta-c"},"No records found",-1),R=r("br",null,null,-1),H={class:"f-l"},z=r("span",null,"...",-1);e();const G=A(((t,e,a,i,d,b)=>(s(),l("div",D,[r("div",V,[r("div",null,[o(t.$slots,"actions",{},void 0,!0)]),r("div",null,[r("button",{onClick:e[1]||(e[1]=(...t)=>b.refreshDataTable&&b.refreshDataTable(...t))},[r("i",{class:["fas fa-sync-alt",{"fa-spin":d.refreshingDataTable}]},null,2),O]),n(r("input",{type:"search","onUpdate:modelValue":e[2]||(e[2]=t=>d.filter=t),onInput:e[3]||(e[3]=(...t)=>b.filterItems&&b.filterItems(...t)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[c,d.filter]])])]),_,r("div",{class:"table-container",style:{height:a.tableHeight}},[r("table",null,[r("thead",null,[r("tr",null,[a.checkboxes?(s(),l("th",W,[d.items.length>0?(s(),l("input",{key:0,type:"checkbox",onChange:e[4]||(e[4]=(...t)=>b.selectAllCheckboxes&&b.selectAllCheckboxes(...t)),ref:"selectAllCheckboxesInput"},null,544)):u("",!0)])):u("",!0),b.itemActionsSlotExists?(s(),l("th",{key:1,style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},"Actions",4)):u("",!0),(s(!0),l(h,null,g(a.fields,(t=>{var e;return s(),l("th",{class:{active:d.sortField===t.field},style:{width:null!=(e=t.width)&&e},onClick:e=>b.sortColumn(t.field)},[m(p(t.label)+" ",1),r("span",{class:["arrow","asc"===d.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),r("tbody",null,[!a.route||d.loading?(s(),l("tr",E,[L])):(s(),l(h,{key:1},[(s(!0),l(h,null,g(d.items,((i,c)=>(s(),l("tr",null,[a.checkboxes?(s(),l("td",U,[n(r("input",{type:"checkbox",value:i[a.checkboxField],"onUpdate:modelValue":e[5]||(e[5]=t=>d.selectedCheckboxesVirtual=t)},null,8,["value"]),[[f,d.selectedCheckboxesVirtual]])])):u("",!0),b.itemActionsSlotExists&&0===c?(s(),l("td",{key:1,class:"ta-c",style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},[o(t.$slots,"item-actions",{item:i},void 0,!0)],4)):u("",!0),b.itemActionsSlotExists&&0!==c?(s(),l("td",j,[o(t.$slots,"item-actions",{item:i},void 0,!0)])):u("",!0),(s(!0),l(h,null,g(a.fields,(t=>(s(),l("td",null,p(i[t.field]),1)))),256))])))),256)),0===d.items.length?(s(),l("tr",B,[N])):u("",!0)],64))])])],4),R,r("div",H,[d.paginator.total>0?(s(),l(h,{key:0},[m(" From "+p(d.paginator.from)+" to "+p(d.paginator.to)+" of "+p(d.paginator.total)+" entries (filtered from "+p(d.paginator.unfilteredTotal)+" total records) "+p(b.selectedItemsCountText),1)],64)):(s(),l(h,{key:1},[m(" No records were found (filtered from "+p(d.paginator.unfilteredTotal)+" total records) ",1)],64))]),r("div",{class:["paginator f-r",{"disable-all":d.loading}]},[r("button",{onClick:e[6]||(e[6]=t=>b.fetchItemsForPage(d.paginator.firstPage)),disabled:d.paginator.firstPage===d.paginator.currentPage},"First",8,["disabled"]),r("button",{onClick:e[7]||(e[7]=t=>b.fetchItemsForPage(d.paginator.currentPage-1)),disabled:d.paginator.firstPage===d.paginator.currentPage},"<",8,["disabled"]),d.paginator.lastPage>=d.pageSwitch-3?(s(),l("button",{key:0,onClick:e[8]||(e[8]=t=>b.fetchItemsForPage(d.pageSwitch-3)),class:{active:d.pageSwitch-3===d.paginator.currentPage}},p(d.pageSwitch-3),3)):u("",!0),d.paginator.lastPage>=d.pageSwitch-2?(s(),l("button",{key:1,onClick:e[9]||(e[9]=t=>b.fetchItemsForPage(d.pageSwitch-2)),class:{active:d.pageSwitch-2===d.paginator.currentPage}},p(d.pageSwitch-2),3)):u("",!0),d.paginator.lastPage>=d.pageSwitch-1?(s(),l("button",{key:2,onClick:e[10]||(e[10]=t=>b.fetchItemsForPage(d.pageSwitch-1)),class:{active:d.pageSwitch-1===d.paginator.currentPage}},p(d.pageSwitch-1),3)):u("",!0),d.paginator.lastPage>=d.pageSwitch?(s(),l("button",{key:3,onClick:e[11]||(e[11]=t=>b.fetchItemsForPage(d.pageSwitch)),class:{active:d.pageSwitch===d.paginator.currentPage}},p(d.pageSwitch),3)):u("",!0),d.paginator.lastPage>4?(s(),l(h,{key:4},[z,d.paginator.lastPage-1>0&&d.paginator.firstPage!==d.paginator.lastPage-1&&d.paginator.lastPage-1>4?(s(),l("button",{key:0,onClick:e[12]||(e[12]=t=>b.fetchItemsForPage(d.paginator.lastPage-1)),class:{active:d.paginator.lastPage-1===d.paginator.currentPage}},p(d.paginator.lastPage-1),3)):u("",!0),d.paginator.lastPage!==d.paginator.firstPage?(s(),l("button",{key:1,onClick:e[13]||(e[13]=t=>b.fetchItemsForPage(d.paginator.lastPage)),class:{active:d.paginator.lastPage===d.paginator.currentPage}},p(d.paginator.lastPage),3)):u("",!0)],64)):u("",!0),r("button",{onClick:e[14]||(e[14]=t=>b.fetchItemsForPage(d.paginator.currentPage+1)),disabled:d.paginator.lastPage===d.paginator.currentPage},">",8,["disabled"]),r("button",{onClick:e[15]||(e[15]=t=>b.fetchItemsForPage(d.paginator.lastPage)),disabled:d.paginator.lastPage===d.paginator.currentPage},"Last",8,["disabled"])],2)]))));C.render=G,C.__scopeId="data-v-51041034";export{S as Container,C as DataTable};