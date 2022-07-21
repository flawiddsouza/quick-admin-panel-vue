import{pushScopeId as e,popScopeId as t,ref as i,computed as a,openBlock as l,createBlock as s,createVNode as n,renderSlot as o,withDirectives as r,vModelText as d,Fragment as c,renderList as h,unref as u,createTextVNode as p,toDisplayString as m,createCommentVNode as g,withScopeId as f,vModelCheckbox as b,withModifiers as y,resolveDirective as v,resolveComponent as w,vModelSelect as k}from"vue";e("data-v-07f129fb");const x={style:{display:"flex","flex-direction":"column",height:"100vh"}},C={style:{display:"flex","align-items":"center"}},I=n("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),S={style:{display:"flex",flex:"1"}},D={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},$={class:"sidebar-item"},P={class:"content"};t();const T={expose:[],props:{sidebarItems:Array},setup(e){const t=e,p=i(""),m=a((()=>p.value?t.sidebarItems.filter((e=>e.name.toLowerCase().includes(p.value.toLowerCase()))):t.sidebarItems)),g=i(null);return(e,t)=>(l(),s("div",x,[n("nav",C,[o(e.$slots,"navbar",{},(()=>[I]),{},!0)]),n("div",S,[n("aside",null,[n("div",D,[r(n("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e)},null,512),[[d,p.value]])]),(l(!0),s(c,null,h(u(m),(t=>(l(),s("div",$,[o(e.$slots,"sidebar-item",{sidebarItem:t,selectSidebarItem:()=>g.value=t,isActive:g.value&&g.value.name===t.name},void 0,!0)])))),256))]),n("div",P,[o(e.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-07f129fb"};const F={props:{title:String}},V=f("data-v-74820b1e");e("data-v-74820b1e");const A={style:{height:"calc(100vh - 5.5rem)"}},E={class:"page"},O={class:"heading-underline"},U={key:0,style:{visibility:"hidden"}},M={class:"page-content"};t();const L=V(((e,t,i,a,r,d)=>(l(),s("div",A,[n("div",E,[n("div",O,[n("h2",null,[p(m(i.title)+" ",1),""===i.title?(l(),s("span",U,"Title")):g("",!0)]),n("div",null,[o(e.$slots,"title-right-content",{},void 0,!0)])]),n("div",M,[o(e.$slots,"default",{},void 0,!0)])])]))));F.render=L,F.__scopeId="data-v-74820b1e";function q(e){return"/"===e.substr(-1)?e.substr(0,e.length-1):e}const _={props:{url:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1},buttonClass:{type:String,required:!1},enableExport:{type:Boolean,default:!1},excludeFromExport:{type:Array,default:()=>[]},usePostExport:{type:Boolean,default:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{url(){this.url&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(e,t,i){var a;return function(){var l=this,s=arguments,n=function(){a=null,i||e.apply(l,s)},o=i&&!a;clearTimeout(a),a=setTimeout(n,t),o&&e.apply(l,s)}},debouncedFetch:(N=function(){this.fetchItemsForPage(1,!1,!0)},K=250,function(){var e=this,t=arguments,i=function(){B=null,R||N.apply(e,t)},a=R&&!B;clearTimeout(B),B=setTimeout(i,K),a&&N.apply(e,t)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(e){this.sortField=e,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(e,t=!1,i=!1){if(e===this.paginator.currentPage&&!i)return;if(e===this.paginator.firstPage&&(this.pageSwitch=4),e===this.paginator.lastPage){let e=this.paginator.lastPage-2;e>=4&&(this.pageSwitch=e)}if(e===this.paginator.lastPage-1){let e=this.paginator.lastPage-1-1;e>=4&&(this.pageSwitch=e)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),t||(e==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),e<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,e===this.pageSwitch-3&&e>1&&this.pageSwitch--)),this.paginator.currentPage=e,this.loading=!0;let a=this.url.split("?");if(a=a.length>1?this.url+"&":this.url+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let t=0;t<20;t++){let i={};this.fields.forEach(((a,l)=>{i[a.field]=`Row ${t+1+(1===e?0:10*e)} Column ${l+1}`})),this.items.push(i)}return this.paginator.currentPage=e,this.paginator.lastPage=8,this.paginator.from=1===e?1:10*e+1,this.paginator.to=1===e?20:10*e+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let l=(new Date).getTime();axios.get(`${a}page=${e}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((e=>{(e=e.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>l||(this.currentDataFreshnessTimestamp=l,this.items=e.paginator.data,this.paginator.currentPage=e.paginator.current_page,this.paginator.lastPage=e.paginator.last_page,this.paginator.from=e.paginator.from,this.paginator.to=e.paginator.to,this.paginator.total=e.paginator.total,this.paginator.unfilteredTotal=e.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given url does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(e){this.selectedCheckboxesVirtual=[],e.target.checked&&this.items.forEach((e=>{this.selectedCheckboxesVirtual.push(e[this.checkboxField])}))},getDisplayContent:(e,t)=>"transformValue"in e?e.transformValue(t):t,exportExcel(){let e=this.url.split("?");e=e.length>1?this.url+"&":this.url+"?";let t=JSON.parse(JSON.stringify(this.fields));if(t=t.filter((e=>!this.excludeFromExport.includes(e.field))),this.usePostExport){let i=this.$loading.show();fetch(`${q(baseURL)}${e}page=${this.paginator.currentPage}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}&export=true`,{method:"POST",body:JSON.stringify({fields:JSON.stringify(t)}),credentials:"include",headers:{"Content-Type":"application/json"}}).then((e=>e.blob())).then((e=>{var t=document.createElement("a");t.href=window.URL.createObjectURL(e),t.download="Export.xlsx",document.body.appendChild(t),t.click(),document.body.removeChild(t),i.hide()}))}else window.open(`${q(baseURL)}${e}page=${this.paginator.currentPage}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}&fields=${encodeURIComponent(JSON.stringify(t))}&export=true`,"_blank")}},created(){this.url&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",this.refreshDataTable),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])},unmounted(){this.bus&&this.bus.off("refreshDataTable",this.refreshDataTable)}};var N,K,R,B;const H=f("data-v-48a7ec8a");e("data-v-48a7ec8a");const j={class:"datatable"},W={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},z=p(" Refresh"),J=n("br",null,null,-1),X={key:0,style:{width:"45px","min-width":"45px"}},G={key:0},Q=n("td",{colspan:"100%",class:"ta-c"},"Loading",-1),Y={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},Z={key:2,class:"ta-c"},ee={key:0},te=n("td",{colspan:"100%",class:"ta-c"},"No records found",-1),ie=n("br",null,null,-1),ae={style:{display:"flex","justify-content":"space-between"}},le=n("span",null,"...",-1);t();const se=H(((e,t,i,a,u,f)=>{var y,v,w,k,x,C;return l(),s("div",j,[n("div",W,[n("div",null,[o(e.$slots,"actions",{},void 0,!0)]),n("div",null,[i.enableExport?(l(),s("button",{key:0,onClick:t[1]||(t[1]=(...e)=>f.exportExcel&&f.exportExcel(...e)),style:{"margin-right":"0.5rem"},class:i.buttonClass},"Export",2)):g("",!0),n("button",{onClick:t[2]||(t[2]=(...e)=>f.refreshDataTable&&f.refreshDataTable(...e)),class:i.buttonClass},[n("i",{class:["fas fa-sync-alt",{"fa-spin":u.refreshingDataTable}]},null,2),z],2),r(n("input",{type:"search","onUpdate:modelValue":t[3]||(t[3]=e=>u.filter=e),onInput:t[4]||(t[4]=(...e)=>f.filterItems&&f.filterItems(...e)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[d,u.filter]])])]),J,n("div",{class:"table-container",style:{height:i.tableHeight}},[n("table",null,[n("thead",null,[n("tr",null,[i.checkboxes?(l(),s("th",X,[u.items.length>0?(l(),s("input",{key:0,type:"checkbox",onChange:t[5]||(t[5]=(...e)=>f.selectAllCheckboxes&&f.selectAllCheckboxes(...e)),ref:"selectAllCheckboxesInput"},null,544)):g("",!0)])):g("",!0),f.itemActionsSlotExists?(l(),s("th",{key:1,style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},"Actions",4)):g("",!0),(l(!0),s(c,null,h(i.fields,(e=>{var t;return l(),s("th",{class:{active:u.sortField===e.field},style:{width:null!=(t=e.width)&&t},onClick:t=>f.sortColumn(e.field)},[p(m(e.label)+" ",1),n("span",{class:["arrow","asc"===u.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),n("tbody",null,[!i.url||u.loading?(l(),s("tr",G,[Q])):(l(),s(c,{key:1},[(l(!0),s(c,null,h(u.items,((a,d)=>(l(),s("tr",null,[i.checkboxes?(l(),s("td",Y,[r(n("input",{type:"checkbox",value:a[i.checkboxField],"onUpdate:modelValue":t[6]||(t[6]=e=>u.selectedCheckboxesVirtual=e)},null,8,["value"]),[[b,u.selectedCheckboxesVirtual]])])):g("",!0),f.itemActionsSlotExists&&0===d?(l(),s("td",{key:1,class:"ta-c",style:{width:i.itemActionsWidth,minWidth:i.itemActionsWidth}},[o(e.$slots,"item-actions",{item:a},void 0,!0)],4)):g("",!0),f.itemActionsSlotExists&&0!==d?(l(),s("td",Z,[o(e.$slots,"item-actions",{item:a},void 0,!0)])):g("",!0),(l(!0),s(c,null,h(i.fields,(e=>(l(),s("td",{innerHTML:f.getDisplayContent(e,a[e.field])},null,8,["innerHTML"])))),256))])))),256)),0===u.items.length?(l(),s("tr",ee,[te])):g("",!0)],64))])])],4),ie,n("div",ae,[n("div",null,[u.paginator.total>0?(l(),s(c,{key:0},[p(" From "+m(u.paginator.from)+" to "+m(u.paginator.to)+" of "+m(u.paginator.total)+" entries (filtered from "+m(u.paginator.unfilteredTotal)+" total records) "+m(f.selectedItemsCountText),1)],64)):(l(),s(c,{key:1},[p(" No records were found (filtered from "+m(u.paginator.unfilteredTotal)+" total records) ",1)],64))]),n("div",{class:["paginator",{"disable-all":u.loading}]},[n("button",{class:i.buttonClass,onClick:t[7]||(t[7]=e=>f.fetchItemsForPage(u.paginator.firstPage)),disabled:u.paginator.firstPage===u.paginator.currentPage},"First",10,["disabled"]),n("button",{class:i.buttonClass,onClick:t[8]||(t[8]=e=>f.fetchItemsForPage(u.paginator.currentPage-1)),disabled:u.paginator.firstPage===u.paginator.currentPage},"<",10,["disabled"]),u.paginator.lastPage>=u.pageSwitch-3?(l(),s("button",{key:0,onClick:t[9]||(t[9]=e=>f.fetchItemsForPage(u.pageSwitch-3)),class:{active:u.pageSwitch-3===u.paginator.currentPage,[i.buttonClass]:null!=(y=i.buttonClass)&&y}},m(u.pageSwitch-3),3)):g("",!0),u.paginator.lastPage>=u.pageSwitch-2?(l(),s("button",{key:1,onClick:t[10]||(t[10]=e=>f.fetchItemsForPage(u.pageSwitch-2)),class:{active:u.pageSwitch-2===u.paginator.currentPage,[i.buttonClass]:null!=(v=i.buttonClass)&&v}},m(u.pageSwitch-2),3)):g("",!0),u.paginator.lastPage>=u.pageSwitch-1?(l(),s("button",{key:2,onClick:t[11]||(t[11]=e=>f.fetchItemsForPage(u.pageSwitch-1)),class:{active:u.pageSwitch-1===u.paginator.currentPage,[i.buttonClass]:null!=(w=i.buttonClass)&&w}},m(u.pageSwitch-1),3)):g("",!0),u.paginator.lastPage>=u.pageSwitch?(l(),s("button",{key:3,onClick:t[12]||(t[12]=e=>f.fetchItemsForPage(u.pageSwitch)),class:{active:u.pageSwitch===u.paginator.currentPage,[i.buttonClass]:null!=(k=i.buttonClass)&&k}},m(u.pageSwitch),3)):g("",!0),u.paginator.lastPage>4?(l(),s(c,{key:4},[le,u.paginator.lastPage-1>0&&u.paginator.firstPage!==u.paginator.lastPage-1&&u.paginator.lastPage-1>4?(l(),s("button",{key:0,onClick:t[13]||(t[13]=e=>f.fetchItemsForPage(u.paginator.lastPage-1)),class:{active:u.paginator.lastPage-1===u.paginator.currentPage,[i.buttonClass]:null!=(x=i.buttonClass)&&x}},m(u.paginator.lastPage-1),3)):g("",!0),u.paginator.lastPage!==u.paginator.firstPage?(l(),s("button",{key:1,onClick:t[14]||(t[14]=e=>f.fetchItemsForPage(u.paginator.lastPage)),class:{active:u.paginator.lastPage===u.paginator.currentPage,[i.buttonClass]:null!=(C=i.buttonClass)&&C}},m(u.paginator.lastPage),3)):g("",!0)],64)):g("",!0),n("button",{class:i.buttonClass,onClick:t[15]||(t[15]=e=>f.fetchItemsForPage(u.paginator.currentPage+1)),disabled:u.paginator.lastPage===u.paginator.currentPage},">",10,["disabled"]),n("button",{class:i.buttonClass,onClick:t[16]||(t[16]=e=>f.fetchItemsForPage(u.paginator.lastPage)),disabled:u.paginator.lastPage===u.paginator.currentPage},"Last",10,["disabled"])],2)])])}));_.render=se,_.__scopeId="data-v-48a7ec8a";const ne={props:{items:Array,label:String,value:String,selectedItem:String|Object}},oe=f("data-v-6e9046d5");e("data-v-6e9046d5");const re={class:"tabs"};t();const de=oe(((e,t,i,a,n,o)=>(l(),s("div",re,[(l(!0),s(c,null,h(i.items,(t=>(l(),s("div",{onClick:y((a=>e.$emit("update:selectedItem",t[i.value])),["prevent"]),class:{active:i.selectedItem===t[i.value]}},m(t[i.label]),11,["onClick"])))),256))]))));ne.render=de,ne.__scopeId="data-v-6e9046d5";const ce={props:{modelValue:Boolean,title:String},methods:{closeModalOnBackgroundClick(e){null===e.target.closest(".modal__content")&&document.body.contains(e.target)&&this.$emit("update:modelValue",!1)}}},he=f("data-v-463997d2");e("data-v-463997d2");const ue={class:"modal__container"},pe={class:"modal__content"},me={class:"modal-main"},ge=p("No Modal Content"),fe={key:0};t();const be=he(((e,t,i,a,r,d)=>(l(),s("div",{class:"modal",tabindex:"0",onClick:t[2]||(t[2]=(...e)=>d.closeModalOnBackgroundClick&&d.closeModalOnBackgroundClick(...e))},[n("div",ue,[n("div",pe,[n("header",null,[n("h3",null,m(i.title),1),n("span",{onClick:t[1]||(t[1]=t=>e.$emit("update:modelValue",!1))},"close")]),n("div",me,[o(e.$slots,"default",{},(()=>[ge]),{},!0)]),e.$slots.footer?(l(),s("footer",fe,[o(e.$slots,"footer",{},void 0,!0)])):g("",!0)])])]))));ce.render=be,ce.__scopeId="data-v-463997d2";const ye={props:{items:Array,text:[String,Number],value:[String,Number],selectedItems:Array,collapsible:Boolean,containerHeight:String,innerContainerHeight:String,filterWidth:String,resetSelectedItemsOnItemsChange:{type:Boolean,default:!0}},computed:{filteredItems(){return this.filter?this.items.filter((e=>e[this.text].toLowerCase().includes(this.filter.toLowerCase()))):this.items}},data:function(){return{rootStyle:{display:"inline-block",padding:".429rem .929rem",border:"1px solid #767676","border-radius":".215rem",height:"12em","min-width":"10em",color:"inherit","font-family":"inherit",position:"relative"},collapsibleStyle:{borderRadius:"var(--default-border-radius)",border:"1px solid #a7a2a2",padding:"0.25em 0 0.25em 0.5em",userSelect:"none",background:"url(../images/arrow.png) right / 20px no-repeat #f3f3f3"},labelStyle:{display:"block"},selectedItemsVirtual:[],selectAll:!1,filter:null,expand:!0}},methods:{handleChange(){this.handleSelectAllCheckbox(),this.$emit("update:selectedItems",this.selectedItemsVirtual),this.$emit("change")},selectAllChanged(){this.selectAll?this.selectedItemsVirtual=this.filteredItems.map((e=>e[this.value])):this.selectedItemsVirtual=[],this.handleChange()},handleSelectAllCheckbox(){this.items&&(this.selectedItemsVirtual.length<this.items.length&&(this.selectAll=!1),this.selectedItemsVirtual.length>0&&this.selectedItemsVirtual.length===this.items.length&&(this.selectAll=!0))},clickOutside(e){this.collapsible&&Vue.nextTick((()=>{this.expand&&!e.target.classList.contains("checkbox-multiselect-selector")&&(this.expand=!1)}))}},watch:{selectedItems(){this.selectedItemsVirtual=this.selectedItems,this.handleSelectAllCheckbox()},items(e,t){this.resetSelectedItemsOnItemsChange&&t&&t.length>0&&(this.selectedItemsVirtual=[],this.handleChange())}},created(){"object"==typeof this.selectedItems?this.selectedItemsVirtual=this.selectedItems:this.selectedItemsVirtual=[],this.selectedItemsVirtual&&this.handleSelectAllCheckbox(),this.collapsible&&(this.rootStyle.position="absolute",this.rootStyle.backgroundColor="white",this.rootStyle.zIndex="2",this.expand=!1)},mounted(){this.$el.style.width&&(this.rootStyle.width=this.$el.style.width,this.containerHeight&&(this.rootStyle.height=this.containerHeight),this.$forceUpdate())},directives:{"click-outside":{bind(e,t,i){e.clickOutsideEvent=function(a){e==a.target||e.contains(a.target)||i.context[t.expression](a)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}}},ve=f("data-v-ed1cd508");e("data-v-ed1cd508");const we={class:"pos-r"},ke={key:0,class:"pos-a bc-white",style:{"padding-bottom":"0.2em"}},xe={key:0,style:{"padding-top":"0.5rem"},class:"bb-grey"},Ce=p(" Select All"),Ie={key:1,style:{"margin-top":"2.2rem","font-size":"0.9rem"}},Se={key:2,style:{"font-size":"0.9em"}};t();const De=ve(((e,t,i,a,o,u)=>{const f=v("click-outside");return l(),s("div",we,[i.collapsible?(l(),s("div",{key:0,onClick:t[1]||(t[1]=t=>e.expand=!e.expand),style:e.collapsibleStyle,class:"checkbox-multiselect-selector"},m((void 0).selectedItems.length)+" items selected",5)):g("",!0),e.expand?r((l(),s("div",{key:1,style:e.rootStyle},[i.items&&i.items.length>0?(l(),s("div",ke,[n("div",null,[r(n("input",{type:"search","onUpdate:modelValue":t[2]||(t[2]=t=>e.filter=t),placeholder:"Filter...",class:"va-s",style:{width:i.filterWidth?i.filterWidth:null}},null,4),[[d,e.filter]])]),u.filteredItems&&u.filteredItems.length>0?(l(),s("div",xe,[n("label",{style:e.labelStyle},[r(n("input",{type:"checkbox",value:"true","onUpdate:modelValue":t[3]||(t[3]=t=>e.selectAll=t),onChange:t[4]||(t[4]=(...e)=>u.selectAllChanged&&u.selectAllChanged(...e))},null,544),[[b,e.selectAll]]),Ce],4)])):g("",!0)])):g("",!0),i.items&&i.items.length>0&&u.filteredItems&&0===u.filteredItems.length?(l(),s("div",Ie," No Records Found ")):g("",!0),i.items&&0===i.items.length?(l(),s("div",Se," No Records Found ")):g("",!0),i.items&&i.items.length>0&&u.filteredItems&&u.filteredItems.length>0?(l(),s("div",{key:3,class:"o-a",style:{height:i.innerContainerHeight?i.innerContainerHeight:"7em",marginTop:"4em"}},[(l(!0),s(c,null,h(u.filteredItems,(a=>(l(),s("div",null,[n("label",{style:e.labelStyle},[r(n("input",{type:"checkbox",value:a[i.value],onChange:t[5]||(t[5]=(...e)=>u.handleChange&&u.handleChange(...e)),"onUpdate:modelValue":t[6]||(t[6]=t=>e.selectedItemsVirtual=t)},null,40,["value"]),[[b,e.selectedItemsVirtual]]),p(" "+m(a[i.text]),1)],4)])))),256))],4)):g("",!0)],4)),[[f,u.clickOutside]]):g("",!0)])}));function $e(e){const t=document.createElement("div");return t.innerHTML=`\n        <div style="position: fixed; height: 100vh; width: 100vw; display: grid; place-items: center; background: #00000052; top: 0; z-index: 2">\n            <div style="background-color: white; padding: 1rem">\n                <div style="font-size: 1rem">${e}</div>\n                <div style="margin-top: 1rem; text-align: right;">\n                    <button class="button button-green" id="p-confirm">Confirm</button>\n                    <button class="button" id="p-cancel" style="margin-left: 0.5rem">Cancel</button>\n                </div>\n            </div>\n        </div>\n    `,document.body.appendChild(t),new Promise((e=>{const i=a=>{"p-confirm"===a.target.id&&e(!0),"p-cancel"===a.target.id&&e(!1),"p-confirm"!==a.target.id&&"p-cancel"!==a.target.id||(document.removeEventListener("click",i),document.body.removeChild(t))};document.addEventListener("click",i)}))}ye.render=De,ye.__scopeId="data-v-ed1cd508";const Pe={props:{url:String,fields:Array,itemDescription:String,addItemOverride:{type:Function,required:!1},editItemOverride:{type:Function,required:!1},updateItemOverride:{type:Function,required:!1}},components:{DataTable:_,CheckboxMultiselect:ye},data:()=>({showAddModal:!1,showEditModal:!1,formData:{},editFormData:{},selectData:{}}),computed:{bus:()=>window.bus},watch:{showAddModal(){this.showAddModal&&(this.$nextTick((()=>{var e;null==(e=this.$el.querySelector("form input, form select"))||e.focus()})),this.fields.filter((e=>!e.viewOnly)).forEach((async e=>{"function"!=typeof e.selectData?this.selectData[e.field]=e.selectData:this.selectData[e.field]=await e.selectData(this.formData)})))},showEditModal(){this.showEditModal&&(this.$nextTick((()=>{var e;null==(e=this.$el.querySelector("form input, form select"))||e.focus()})),this.fields.filter((e=>!e.viewOnly)).forEach((async e=>{"function"!=typeof e.selectData?this.selectData[e.field]=e.selectData:this.selectData[e.field]=await e.selectData(this.editFormData)})))}},methods:{checkMaxLength(e,t){"Backspace"!==e.key&&"Delete"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key&&"Enter"!==e.key&&String(e.target.value).length>=t&&e.preventDefault()},async addItem(){let e=this.$loading.show(),t=null;if(t=this.addItemOverride?await this.addItemOverride(this.url,this.formData):await fetchy.post(this.url,this.formData),400===t.status)return e.hide(),void this.$notify.error(t.data);this.formData={},this.$notify.success(`${this.itemDescription} Added`),this.showAddModal=!1,this.bus.emit("refreshDataTable"),e.hide()},async editItem(e){this.editItemOverride?await this.editItemOverride(e,this):this.editFormData=JSON.parse(JSON.stringify(e)),this.showEditModal=!0},async updateItem(){let e=this.$loading.show(),t=null;if(t=this.updateItemOverride?await this.updateItemOverride(`${this.url}/${this.editFormData.id}`,this.editFormData):await fetchy.put(`${this.url}/${this.editFormData.id}`,this.editFormData),400===t.status)return e.hide(),void this.$notify.error(t.data);this.editFormData={},this.$notify.success(`${this.itemDescription} Updated`),this.showEditModal=!1,this.bus.emit("refreshDataTable"),e.hide()},async deleteItem(e){if(!(await $e("Are you sure you want to delete this item?")))return;let t=this.$loading.show();const i=await fetchy.delete(`${this.url}/${e}`);if(400===i.status)return t.hide(),void this.$notify.error(i.data);this.$notify.success(`${this.itemDescription} Deleted`),this.showAddModal=!1,this.bus.emit("refreshDataTable"),t.hide()}}},Te=f("data-v-814e1d34");e("data-v-814e1d34");const Fe={style:{height:"100%"}},Ve=n("i",{class:"fas fa-plus"},null,-1),Ae=p(" Add Item "),Ee=n("i",{class:"fas fa-edit"},null,-1),Oe=p(" Edit "),Ue=n("i",{class:"fas fa-trash"},null,-1),Me=p(" Delete "),Le={class:"mb-0_3rem"},qe={key:0,style:{color:"red"}},_e=n("button",{class:"button"},"Save",-1),Ne={class:"mb-0_3rem"},Ke={key:0,style:{color:"red"}},Re=n("button",{class:"button"},"Save",-1);t();const Be=Te(((e,t,i,a,u,f)=>{const b=w("DataTable"),v=w("CheckboxMultiselect"),x=w("Modal");return l(),s("div",Fe,[n(b,{url:i.url,fields:i.fields.filter((e=>!e.formOnly)),"item-actions-width":"12em","button-class":"button",bus:f.bus},{actions:Te((()=>[n("a",{class:"button",onClick:t[1]||(t[1]=e=>u.showAddModal=!0)},[Ve,Ae])])),"item-actions":Te((({item:t})=>[o(e.$slots,"item-actions",{item:t},void 0,!0),n("a",{class:"button",onClick:e=>f.editItem(t)},[Ee,Oe],8,["onClick"]),n("a",{class:"button button-red ml-1rem",onClick:e=>f.deleteItem(t.id)},[Ue,Me],8,["onClick"])])),_:1},8,["url","fields","bus"]),n("form",{onSubmit:t[3]||(t[3]=y(((...e)=>f.addItem&&f.addItem(...e)),["prevent"]))},[u.showAddModal?(l(),s(x,{key:0,modelValue:u.showAddModal,"onUpdate:modelValue":t[2]||(t[2]=e=>u.showAddModal=e),title:`Add ${i.itemDescription}`,ref:"modal"},{footer:Te((()=>[_e])),default:Te((()=>[o(e.$slots,"add-modal",{formData:u.formData},(()=>[(l(!0),s(c,null,h(i.fields.filter((e=>!e.viewOnly)),((e,t)=>(l(),s("div",null,[n("label",{class:[{"mt-0_5rem":t>0},"d-b"]},[n("div",Le,[p(m(e.label),1),e.required?(l(),s("span",qe," *")):g("",!0)]),"text"===e.inputType?r((l(),s("input",{key:0,type:"text","onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.formData[e.field]]]):g("",!0),"email"===e.inputType?r((l(),s("input",{key:1,type:"email","onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.formData[e.field]]]):g("",!0),"password"===e.inputType?r((l(),s("input",{key:2,type:"password","onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.formData[e.field]]]):g("",!0),"number"===e.inputType?r((l(),s("input",{key:3,type:"number","onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.formData[e.field]]]):g("",!0),"date"===e.inputType?r((l(),s("input",{key:4,type:"date","onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,class:"w-100p"},null,8,["onUpdate:modelValue","required"])),[[d,u.formData[e.field]]]):g("",!0),"select"===e.inputType?r((l(),s("select",{key:5,"onUpdate:modelValue":t=>u.formData[e.field]=t,required:e.required,class:"w-100p"},[(l(!0),s(c,null,h(u.selectData[e.field],(e=>(l(),s("option",{value:e.value},m(e.label),9,["value"])))),256))],8,["onUpdate:modelValue","required"])),[[k,u.formData[e.field]]]):g("",!0),"multiselect"===e.inputType?(l(),s(v,{key:6,items:u.selectData[e.field],value:"value",text:"label","selected-items":u.formData[e.field],"onUpdate:selected-items":t=>u.formData[e.field]=t,style:{width:"100%"}},null,8,["items","selected-items","onUpdate:selected-items"])):g("",!0)],2)])))),256))]),!0)])),_:3},8,["modelValue","title"])):g("",!0)],32),n("form",{onSubmit:t[5]||(t[5]=y(((...e)=>f.updateItem&&f.updateItem(...e)),["prevent"]))},[u.showEditModal?(l(),s(x,{key:0,modelValue:u.showEditModal,"onUpdate:modelValue":t[4]||(t[4]=e=>u.showEditModal=e),title:`Edit ${i.itemDescription}`,ref:"modal"},{footer:Te((()=>[Re])),default:Te((()=>[o(e.$slots,"edit-modal",{editFormData:u.editFormData,showEditModal:u.showEditModal},(()=>[(l(!0),s(c,null,h(i.fields.filter((e=>!e.viewOnly)),((e,t)=>(l(),s("div",null,[e.addOnly?g("",!0):(l(),s("label",{key:0,class:[{"mt-0_5rem":t>0},"d-b"]},[n("div",Ne,[p(m(e.label),1),e.required?(l(),s("span",Ke," *")):g("",!0)]),"text"===e.inputType?r((l(),s("input",{key:0,type:"text","onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.editFormData[e.field]]]):g("",!0),"email"===e.inputType?r((l(),s("input",{key:1,type:"email","onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.editFormData[e.field]]]):g("",!0),"password"===e.inputType?r((l(),s("input",{key:2,type:"password","onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.editFormData[e.field]]]):g("",!0),"number"===e.inputType?r((l(),s("input",{key:3,type:"number","onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,onKeydown:t=>f.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[d,u.editFormData[e.field]]]):g("",!0),"date"===e.inputType?r((l(),s("input",{key:4,type:"date","onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,class:"w-100p"},null,8,["onUpdate:modelValue","required"])),[[d,u.editFormData[e.field]]]):g("",!0),"select"===e.inputType?r((l(),s("select",{key:5,"onUpdate:modelValue":t=>u.editFormData[e.field]=t,required:e.required,class:"w-100p"},[(l(!0),s(c,null,h(u.selectData[e.field],(e=>(l(),s("option",{value:e.value},m(e.label),9,["value"])))),256))],8,["onUpdate:modelValue","required"])),[[k,u.editFormData[e.field]]]):g("",!0),"multiselect"===e.inputType?(l(),s(v,{key:6,items:u.selectData[e.field],value:"value",text:"label","selected-items":u.editFormData[e.field],"onUpdate:selected-items":t=>u.editFormData[e.field]=t,style:{width:"100%"},"reset-selected-items-on-items-change":!1},null,8,["items","selected-items","onUpdate:selected-items"])):g("",!0)],2))])))),256))]),!0)])),_:3},8,["modelValue","title"])):g("",!0)],32)])}));Pe.render=Be,Pe.__scopeId="data-v-814e1d34";var He={install:(e,t)=>{e.config.globalProperties.$loading={show(){let e=document.createElement("div");return e.innerHTML='\n                    <style>\n                    .vld-overlay {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        align-items: center;\n                        display: none;\n                        justify-content: center;\n                        overflow: hidden;\n                        z-index: 1\n                    }\n\n                    .vld-overlay.is-active {\n                        display: flex\n                    }\n\n                    .vld-overlay.is-full-page {\n                        z-index: 999;\n                        position: fixed\n                    }\n\n                    .vld-overlay .vld-background {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        background: #fff;\n                        opacity: 0.5\n                    }\n\n                    .vld-overlay .vld-icon, .vld-parent {\n                        position: relative\n                    }\n                    </style>\n                    <div tabindex="0" aria-label="Loading" class="vld-overlay is-active is-full-page" aria-busy="true" style="">\n                        <div class="vld-background" style="background: black; opacity: 0.5;"></div>\n                        <div class="vld-icon">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="128" width="128" fill="white">\n                                <rect x="0" y="13" width="4" height="5">\n                                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ',document.body.appendChild(e),e.hide=e.remove,e}},e.provide("$loading",e.config.globalProperties.$loading)}};function je(e,t){const i=document.createElement("div");i.innerHTML=t,i.style.padding="1.5rem 2rem";const a=document.createElement("div");a.style.cssText=`\n        z-index: 3;\n        position: fixed;\n        bottom: 40px;\n        right: 40px;\n        background-color: ${e};\n        color: white;\n        box-shadow: 0 0 3px black;\n        border-radius: 4px;\n        user-select: none;\n        cursor: pointer;\n        font-size: 1rem;\n    `;const l=document.createElement("div");l.style.height="1em",l.style.backgroundColor="white";let s=100;l.style.width=`${s}%`;let n=setInterval(d,15),o=new Date,r=3e3;function d(){if(0===s)clearInterval(n);else{const e=new Date-o;s=100*e/r,l.style.width=`${s}%`}}const c=document.createElement("div");c.style.backgroundColor="#00000033",c.style.height="1rem",c.appendChild(l),a.appendChild(c),a.appendChild(i),document.body.appendChild(a);let h=!1;function u(){h||(document.body.removeChild(a),h=!0)}a.onclick=()=>{document.body.removeChild(a),h=!0},a.onmouseenter=()=>{clearInterval(n),clearTimeout(p);const e=new Date-o;r-=e},a.onmouseleave=()=>{o=new Date,n=setInterval(d,15),p=setTimeout(u,r)};let p=setTimeout(u,r)}var We={install:(e,t)=>{e.config.globalProperties.$notify={custom(e,t){je(e,t)},error(e){je("#bf3131",e)},success(e){je("green",e)}},e.provide("$notify",e.config.globalProperties.$notify)}};async function ze(e,t){const i=await e.text();let a={};try{a={data:JSON.parse(i),status:e.status}}catch{a={data:i,status:e.status}}return t?t(a):a}function Je(e){if(!document.cookie)return null;const t=document.cookie.split(";").map((e=>e.trim())).filter((t=>t.startsWith(e+"=")));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}function Xe(){return{"Content-Type":"application/json",Accept:"application/json","X-XSRF-TOKEN":Je("XSRF-TOKEN")}}async function Ge(e,t,i,a,l){let s=null,n=Xe();return!1===a?s=await fetch(t,{method:e,headers:n,body:JSON.stringify(i)}):(delete n["Content-Type"],s=await fetch(t,{method:e,headers:n,body:i})),await ze(s,l)}var Qe={responseInterceptor:null,async get(e){const t=await fetch(e,{method:"GET",headers:Xe()});return await ze(t,this.responseInterceptor)},async post(e,t={},i=!1){return await Ge("POST",e,t,i,this.responseInterceptor)},async put(e,t={},i=!1){return await Ge("PUT",e,t,i,this.responseInterceptor)},async delete(e){const t=await fetch(e,{method:"DELETE",headers:Xe()});return await ze(t,this.responseInterceptor)}};export{Pe as CRUD,ye as CheckboxMultiselect,T as Container,_ as DataTable,ce as Modal,F as Page,ne as Tabs,$e as createConfirm,Qe as fetchy,He as loading,We as notify};
