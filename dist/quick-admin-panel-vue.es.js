import{pushScopeId as t,popScopeId as e,ref as a,computed as i,openBlock as s,createBlock as l,createVNode as n,renderSlot as r,withDirectives as o,vModelText as c,Fragment as h,renderList as d,unref as g,toDisplayString as u,withScopeId as p,createCommentVNode as b,createTextVNode as m,vModelCheckbox as f,withModifiers as v}from"vue";t("data-v-07f129fb");const y={style:{display:"flex","flex-direction":"column",height:"100vh"}},P={style:{display:"flex","align-items":"center"}},k=n("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),C={style:{display:"flex",flex:"1"}},w={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},x={class:"sidebar-item"},S={class:"content"};e();const I={expose:[],props:{sidebarItems:Array},setup(t){const e=t,u=a(""),p=i((()=>u.value?e.sidebarItems.filter((t=>t.name.toLowerCase().includes(u.value.toLowerCase()))):e.sidebarItems)),b=a(null);return(t,e)=>(s(),l("div",y,[n("nav",P,[r(t.$slots,"navbar",{},(()=>[k]),{},!0)]),n("div",C,[n("aside",null,[n("div",w,[o(n("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t)},null,512),[[c,u.value]])]),(s(!0),l(h,null,d(g(p),(e=>(s(),l("div",x,[r(t.$slots,"sidebar-item",{sidebarItem:e,selectSidebarItem:()=>b.value=e,isActive:b.value&&b.value.name===e.name},void 0,!0)])))),256))]),n("div",S,[r(t.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-07f129fb"};const F={props:{title:String}},T=p("data-v-1a59f045");t("data-v-1a59f045");const $={style:{height:"calc(100vh - 5.5rem)"}},A={class:"page"},D={class:"heading-underline"};e();const L=T(((t,e,a,i,o,c)=>(s(),l("div",$,[n("div",A,[n("div",D,[n("h2",null,u(a.title),1),n("div",null,[r(t.$slots,"title-right-content",{},void 0,!0)])]),n("div",null,[r(t.$slots,"default",{},void 0,!0)])])]))));F.render=L,F.__scopeId="data-v-1a59f045";const _={props:{url:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1},buttonClass:{type:String,required:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{url(){this.url&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(t,e,a){var i;return function(){var s=this,l=arguments,n=function(){i=null,a||t.apply(s,l)},r=a&&!i;clearTimeout(i),i=setTimeout(n,e),r&&t.apply(s,l)}},debouncedFetch:(V=function(){this.fetchItemsForPage(1,!1,!0)},O=250,function(){var t=this,e=arguments,a=function(){E=null,N||V.apply(t,e)},i=N&&!E;clearTimeout(E),E=setTimeout(a,O),i&&V.apply(t,e)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(t){this.sortField=t,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(t,e=!1,a=!1){if(t===this.paginator.currentPage&&!a)return;if(t===this.paginator.firstPage&&(this.pageSwitch=4),t===this.paginator.lastPage){let t=this.paginator.lastPage-2;t>=4&&(this.pageSwitch=t)}if(t===this.paginator.lastPage-1){let t=this.paginator.lastPage-1-1;t>=4&&(this.pageSwitch=t)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),e||(t==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),t<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,t===this.pageSwitch-3&&t>1&&this.pageSwitch--)),this.paginator.currentPage=t,this.loading=!0;let i=this.url.split("?");if(i=i.length>1?this.url+"&":this.url+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let e=0;e<20;e++){let a={};this.fields.forEach(((i,s)=>{a[i.field]=`Row ${e+1+(1===t?0:10*t)} Column ${s+1}`})),this.items.push(a)}return this.paginator.currentPage=t,this.paginator.lastPage=8,this.paginator.from=1===t?1:10*t+1,this.paginator.to=1===t?20:10*t+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let s=(new Date).getTime();axios.get(`${i}page=${t}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((t=>{(t=t.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>s||(this.currentDataFreshnessTimestamp=s,this.items=t.paginator.data,this.paginator.currentPage=t.paginator.current_page,this.paginator.lastPage=t.paginator.last_page,this.paginator.from=t.paginator.from,this.paginator.to=t.paginator.to,this.paginator.total=t.paginator.total,this.paginator.unfilteredTotal=t.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given url does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(t){this.selectedCheckboxesVirtual=[],t.target.checked&&this.items.forEach((t=>{this.selectedCheckboxesVirtual.push(t[this.checkboxField])}))}},created(){this.url&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",(()=>{this.refreshDataTable()})),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])}};var V,O,N,E;const M=p("data-v-1931ef3c");t("data-v-1931ef3c");const W={class:"datatable"},X={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},j=m(" Refresh"),B=n("br",null,null,-1),U={key:0,style:{width:"45px","min-width":"45px"}},z={key:0},H=n("td",{colspan:"100%",class:"ta-c"},"Loading",-1),R={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},q={key:2,class:"ta-c"},G={key:0},J=n("td",{colspan:"100%",class:"ta-c"},"No records found",-1),K=n("br",null,null,-1),Q={class:"f-l"},Y=n("span",null,"...",-1);e();const Z=M(((t,e,a,i,g,p)=>{var v,y,P,k,C,w;return s(),l("div",W,[n("div",X,[n("div",null,[r(t.$slots,"actions",{},void 0,!0)]),n("div",null,[n("button",{onClick:e[1]||(e[1]=(...t)=>p.refreshDataTable&&p.refreshDataTable(...t)),class:a.buttonClass},[n("i",{class:["fas fa-sync-alt",{"fa-spin":g.refreshingDataTable}]},null,2),j],2),o(n("input",{type:"search","onUpdate:modelValue":e[2]||(e[2]=t=>g.filter=t),onInput:e[3]||(e[3]=(...t)=>p.filterItems&&p.filterItems(...t)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[c,g.filter]])])]),B,n("div",{class:"table-container",style:{height:a.tableHeight}},[n("table",null,[n("thead",null,[n("tr",null,[a.checkboxes?(s(),l("th",U,[g.items.length>0?(s(),l("input",{key:0,type:"checkbox",onChange:e[4]||(e[4]=(...t)=>p.selectAllCheckboxes&&p.selectAllCheckboxes(...t)),ref:"selectAllCheckboxesInput"},null,544)):b("",!0)])):b("",!0),p.itemActionsSlotExists?(s(),l("th",{key:1,style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},"Actions",4)):b("",!0),(s(!0),l(h,null,d(a.fields,(t=>{var e;return s(),l("th",{class:{active:g.sortField===t.field},style:{width:null!=(e=t.width)&&e},onClick:e=>p.sortColumn(t.field)},[m(u(t.label)+" ",1),n("span",{class:["arrow","asc"===g.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),n("tbody",null,[!a.url||g.loading?(s(),l("tr",z,[H])):(s(),l(h,{key:1},[(s(!0),l(h,null,d(g.items,((i,c)=>(s(),l("tr",null,[a.checkboxes?(s(),l("td",R,[o(n("input",{type:"checkbox",value:i[a.checkboxField],"onUpdate:modelValue":e[5]||(e[5]=t=>g.selectedCheckboxesVirtual=t)},null,8,["value"]),[[f,g.selectedCheckboxesVirtual]])])):b("",!0),p.itemActionsSlotExists&&0===c?(s(),l("td",{key:1,class:"ta-c",style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},[r(t.$slots,"item-actions",{item:i},void 0,!0)],4)):b("",!0),p.itemActionsSlotExists&&0!==c?(s(),l("td",q,[r(t.$slots,"item-actions",{item:i},void 0,!0)])):b("",!0),(s(!0),l(h,null,d(a.fields,(t=>(s(),l("td",null,u(i[t.field]),1)))),256))])))),256)),0===g.items.length?(s(),l("tr",G,[J])):b("",!0)],64))])])],4),K,n("div",Q,[g.paginator.total>0?(s(),l(h,{key:0},[m(" From "+u(g.paginator.from)+" to "+u(g.paginator.to)+" of "+u(g.paginator.total)+" entries (filtered from "+u(g.paginator.unfilteredTotal)+" total records) "+u(p.selectedItemsCountText),1)],64)):(s(),l(h,{key:1},[m(" No records were found (filtered from "+u(g.paginator.unfilteredTotal)+" total records) ",1)],64))]),n("div",{class:["paginator f-r",{"disable-all":g.loading}]},[n("button",{class:a.buttonClass,onClick:e[6]||(e[6]=t=>p.fetchItemsForPage(g.paginator.firstPage)),disabled:g.paginator.firstPage===g.paginator.currentPage},"First",10,["disabled"]),n("button",{class:a.buttonClass,onClick:e[7]||(e[7]=t=>p.fetchItemsForPage(g.paginator.currentPage-1)),disabled:g.paginator.firstPage===g.paginator.currentPage},"<",10,["disabled"]),g.paginator.lastPage>=g.pageSwitch-3?(s(),l("button",{key:0,onClick:e[8]||(e[8]=t=>p.fetchItemsForPage(g.pageSwitch-3)),class:{active:g.pageSwitch-3===g.paginator.currentPage,[a.buttonClass]:null!=(v=a.buttonClass)&&v}},u(g.pageSwitch-3),3)):b("",!0),g.paginator.lastPage>=g.pageSwitch-2?(s(),l("button",{key:1,onClick:e[9]||(e[9]=t=>p.fetchItemsForPage(g.pageSwitch-2)),class:{active:g.pageSwitch-2===g.paginator.currentPage,[a.buttonClass]:null!=(y=a.buttonClass)&&y}},u(g.pageSwitch-2),3)):b("",!0),g.paginator.lastPage>=g.pageSwitch-1?(s(),l("button",{key:2,onClick:e[10]||(e[10]=t=>p.fetchItemsForPage(g.pageSwitch-1)),class:{active:g.pageSwitch-1===g.paginator.currentPage,[a.buttonClass]:null!=(P=a.buttonClass)&&P}},u(g.pageSwitch-1),3)):b("",!0),g.paginator.lastPage>=g.pageSwitch?(s(),l("button",{key:3,onClick:e[11]||(e[11]=t=>p.fetchItemsForPage(g.pageSwitch)),class:{active:g.pageSwitch===g.paginator.currentPage,[a.buttonClass]:null!=(k=a.buttonClass)&&k}},u(g.pageSwitch),3)):b("",!0),g.paginator.lastPage>4?(s(),l(h,{key:4},[Y,g.paginator.lastPage-1>0&&g.paginator.firstPage!==g.paginator.lastPage-1&&g.paginator.lastPage-1>4?(s(),l("button",{key:0,onClick:e[12]||(e[12]=t=>p.fetchItemsForPage(g.paginator.lastPage-1)),class:{active:g.paginator.lastPage-1===g.paginator.currentPage,[a.buttonClass]:null!=(C=a.buttonClass)&&C}},u(g.paginator.lastPage-1),3)):b("",!0),g.paginator.lastPage!==g.paginator.firstPage?(s(),l("button",{key:1,onClick:e[13]||(e[13]=t=>p.fetchItemsForPage(g.paginator.lastPage)),class:{active:g.paginator.lastPage===g.paginator.currentPage,[a.buttonClass]:null!=(w=a.buttonClass)&&w}},u(g.paginator.lastPage),3)):b("",!0)],64)):b("",!0),n("button",{class:a.buttonClass,onClick:e[14]||(e[14]=t=>p.fetchItemsForPage(g.paginator.currentPage+1)),disabled:g.paginator.lastPage===g.paginator.currentPage},">",10,["disabled"]),n("button",{class:a.buttonClass,onClick:e[15]||(e[15]=t=>p.fetchItemsForPage(g.paginator.lastPage)),disabled:g.paginator.lastPage===g.paginator.currentPage},"Last",10,["disabled"])],2)])}));_.render=Z,_.__scopeId="data-v-1931ef3c";const tt={props:{items:Array,label:String,value:String,selectedItem:String|Object}},et=p("data-v-6e9046d5");t("data-v-6e9046d5");const at={class:"tabs"};e();const it=et(((t,e,a,i,n,r)=>(s(),l("div",at,[(s(!0),l(h,null,d(a.items,(e=>(s(),l("div",{onClick:v((i=>t.$emit("update:selectedItem",e[a.value])),["prevent"]),class:{active:a.selectedItem===e[a.value]}},u(e[a.label]),11,["onClick"])))),256))]))));tt.render=it,tt.__scopeId="data-v-6e9046d5";var st={install:(t,e)=>{t.config.globalProperties.$loading={show(){let t=document.createElement("div");return t.innerHTML='\n                    <style>\n                    .vld-overlay {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        align-items: center;\n                        display: none;\n                        justify-content: center;\n                        overflow: hidden;\n                        z-index: 1\n                    }\n\n                    .vld-overlay.is-active {\n                        display: flex\n                    }\n\n                    .vld-overlay.is-full-page {\n                        z-index: 999;\n                        position: fixed\n                    }\n\n                    .vld-overlay .vld-background {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        background: #fff;\n                        opacity: 0.5\n                    }\n\n                    .vld-overlay .vld-icon, .vld-parent {\n                        position: relative\n                    }\n                    </style>\n                    <div tabindex="0" aria-label="Loading" class="vld-overlay is-active is-full-page" aria-busy="true" style="">\n                        <div class="vld-background" style="background: black; opacity: 0.5;"></div>\n                        <div class="vld-icon">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="128" width="128" fill="white">\n                                <rect x="0" y="13" width="4" height="5">\n                                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ',document.body.appendChild(t),t.hide=t.remove,t}},t.provide("$loading",t.config.globalProperties.$loading)}};export{I as Container,_ as DataTable,F as Page,tt as Tabs,st as loading};
