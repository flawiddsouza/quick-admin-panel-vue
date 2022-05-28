!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).QuickAdminPanelVue={},e.Vue)}(this,(function(e,t){"use strict";t.pushScopeId("data-v-07f129fb");const a={style:{display:"flex","flex-direction":"column",height:"100vh"}},o={style:{display:"flex","align-items":"center"}},i=t.createVNode("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),l={style:{display:"flex",flex:"1"}},n={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},s={class:"sidebar-item"},r={class:"content"};t.popScopeId();const c={expose:[],props:{sidebarItems:Array},setup(e){const c=e,d=t.ref(""),h=t.computed((()=>d.value?c.sidebarItems.filter((e=>e.name.toLowerCase().includes(d.value.toLowerCase()))):c.sidebarItems)),u=t.ref(null);return(e,c)=>(t.openBlock(),t.createBlock("div",a,[t.createVNode("nav",o,[t.renderSlot(e.$slots,"navbar",{},(()=>[i]),{},!0)]),t.createVNode("div",l,[t.createVNode("aside",null,[t.createVNode("div",n,[t.withDirectives(t.createVNode("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":c[1]||(c[1]=e=>d.value=e)},null,512),[[t.vModelText,d.value]])]),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(t.unref(h),(a=>(t.openBlock(),t.createBlock("div",s,[t.renderSlot(e.$slots,"sidebar-item",{sidebarItem:a,selectSidebarItem:()=>u.value=a,isActive:u.value&&u.value.name===a.name},void 0,!0)])))),256))]),t.createVNode("div",r,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-07f129fb"};const d={props:{title:String}},h=t.withScopeId("data-v-1a59f045");t.pushScopeId("data-v-1a59f045");const u={style:{height:"calc(100vh - 5.5rem)"}},p={class:"page"},m={class:"heading-underline"};t.popScopeId();const g=h(((e,a,o,i,l,n)=>(t.openBlock(),t.createBlock("div",u,[t.createVNode("div",p,[t.createVNode("div",m,[t.createVNode("h2",null,t.toDisplayString(o.title),1),t.createVNode("div",null,[t.renderSlot(e.$slots,"title-right-content",{},void 0,!0)])]),t.createVNode("div",null,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])]))));d.render=g,d.__scopeId="data-v-1a59f045";const f={props:{url:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1},buttonClass:{type:String,required:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{url(){this.url&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(e,t,a){var o;return function(){var i=this,l=arguments,n=function(){o=null,a||e.apply(i,l)},s=a&&!o;clearTimeout(o),o=setTimeout(n,t),s&&e.apply(i,l)}},debouncedFetch:(k=function(){this.fetchItemsForPage(1,!1,!0)},y=250,function(){var e=this,t=arguments,a=function(){v=null,b||k.apply(e,t)},o=b&&!v;clearTimeout(v),v=setTimeout(a,y),o&&k.apply(e,t)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(e){this.sortField=e,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(e,t=!1,a=!1){if(e===this.paginator.currentPage&&!a)return;if(e===this.paginator.firstPage&&(this.pageSwitch=4),e===this.paginator.lastPage){let e=this.paginator.lastPage-2;e>=4&&(this.pageSwitch=e)}if(e===this.paginator.lastPage-1){let e=this.paginator.lastPage-1-1;e>=4&&(this.pageSwitch=e)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),t||(e==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),e<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,e===this.pageSwitch-3&&e>1&&this.pageSwitch--)),this.paginator.currentPage=e,this.loading=!0;let o=this.url.split("?");if(o=o.length>1?this.url+"&":this.url+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let t=0;t<20;t++){let a={};this.fields.forEach(((o,i)=>{a[o.field]=`Row ${t+1+(1===e?0:10*e)} Column ${i+1}`})),this.items.push(a)}return this.paginator.currentPage=e,this.paginator.lastPage=8,this.paginator.from=1===e?1:10*e+1,this.paginator.to=1===e?20:10*e+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let i=(new Date).getTime();axios.get(`${o}page=${e}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((e=>{(e=e.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>i||(this.currentDataFreshnessTimestamp=i,this.items=e.paginator.data,this.paginator.currentPage=e.paginator.current_page,this.paginator.lastPage=e.paginator.last_page,this.paginator.from=e.paginator.from,this.paginator.to=e.paginator.to,this.paginator.total=e.paginator.total,this.paginator.unfilteredTotal=e.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given url does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(e){this.selectedCheckboxesVirtual=[],e.target.checked&&this.items.forEach((e=>{this.selectedCheckboxesVirtual.push(e[this.checkboxField])}))},getDisplayContent:(e,t)=>"transformValue"in e?e.transformValue(t):t},created(){this.url&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",this.refreshDataTable),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])},unmounted(){this.bus&&this.bus.off("refreshDataTable",this.refreshDataTable)}};var k,y,b,v;const w=t.withScopeId("data-v-b279d91e");t.pushScopeId("data-v-b279d91e");const V={class:"datatable"},C={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},S=t.createTextVNode(" Refresh"),x=t.createVNode("br",null,null,-1),B={key:0,style:{width:"45px","min-width":"45px"}},D={key:0},N=t.createVNode("td",{colspan:"100%",class:"ta-c"},"Loading",-1),I={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},T={key:2,class:"ta-c"},P={key:0},F=t.createVNode("td",{colspan:"100%",class:"ta-c"},"No records found",-1),$=t.createVNode("br",null,null,-1),M={style:{float:"left"}},A=t.createVNode("span",null,"...",-1);t.popScopeId();const L=w(((e,a,o,i,l,n)=>{var s,r,c,d,h,u;return t.openBlock(),t.createBlock("div",V,[t.createVNode("div",C,[t.createVNode("div",null,[t.renderSlot(e.$slots,"actions",{},void 0,!0)]),t.createVNode("div",null,[t.createVNode("button",{onClick:a[1]||(a[1]=(...e)=>n.refreshDataTable&&n.refreshDataTable(...e)),class:o.buttonClass},[t.createVNode("i",{class:["fas fa-sync-alt",{"fa-spin":l.refreshingDataTable}]},null,2),S],2),t.withDirectives(t.createVNode("input",{type:"search","onUpdate:modelValue":a[2]||(a[2]=e=>l.filter=e),onInput:a[3]||(a[3]=(...e)=>n.filterItems&&n.filterItems(...e)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[t.vModelText,l.filter]])])]),x,t.createVNode("div",{class:"table-container",style:{height:o.tableHeight}},[t.createVNode("table",null,[t.createVNode("thead",null,[t.createVNode("tr",null,[o.checkboxes?(t.openBlock(),t.createBlock("th",B,[l.items.length>0?(t.openBlock(),t.createBlock("input",{key:0,type:"checkbox",onChange:a[4]||(a[4]=(...e)=>n.selectAllCheckboxes&&n.selectAllCheckboxes(...e)),ref:"selectAllCheckboxesInput"},null,544)):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0),n.itemActionsSlotExists?(t.openBlock(),t.createBlock("th",{key:1,style:{width:o.itemActionsWidth,minWidth:o.itemActionsWidth}},"Actions",4)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.fields,(e=>{var a;return t.openBlock(),t.createBlock("th",{class:{active:l.sortField===e.field},style:{width:null!=(a=e.width)&&a},onClick:t=>n.sortColumn(e.field)},[t.createTextVNode(t.toDisplayString(e.label)+" ",1),t.createVNode("span",{class:["arrow","asc"===l.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),t.createVNode("tbody",null,[!o.url||l.loading?(t.openBlock(),t.createBlock("tr",D,[N])):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(l.items,((i,s)=>(t.openBlock(),t.createBlock("tr",null,[o.checkboxes?(t.openBlock(),t.createBlock("td",I,[t.withDirectives(t.createVNode("input",{type:"checkbox",value:i[o.checkboxField],"onUpdate:modelValue":a[5]||(a[5]=e=>l.selectedCheckboxesVirtual=e)},null,8,["value"]),[[t.vModelCheckbox,l.selectedCheckboxesVirtual]])])):t.createCommentVNode("",!0),n.itemActionsSlotExists&&0===s?(t.openBlock(),t.createBlock("td",{key:1,class:"ta-c",style:{width:o.itemActionsWidth,minWidth:o.itemActionsWidth}},[t.renderSlot(e.$slots,"item-actions",{item:i},void 0,!0)],4)):t.createCommentVNode("",!0),n.itemActionsSlotExists&&0!==s?(t.openBlock(),t.createBlock("td",T,[t.renderSlot(e.$slots,"item-actions",{item:i},void 0,!0)])):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.fields,(e=>(t.openBlock(),t.createBlock("td",{innerHTML:n.getDisplayContent(e,i[e.field])},null,8,["innerHTML"])))),256))])))),256)),0===l.items.length?(t.openBlock(),t.createBlock("tr",P,[F])):t.createCommentVNode("",!0)],64))])])],4),$,t.createVNode("div",M,[l.paginator.total>0?(t.openBlock(),t.createBlock(t.Fragment,{key:0},[t.createTextVNode(" From "+t.toDisplayString(l.paginator.from)+" to "+t.toDisplayString(l.paginator.to)+" of "+t.toDisplayString(l.paginator.total)+" entries (filtered from "+t.toDisplayString(l.paginator.unfilteredTotal)+" total records) "+t.toDisplayString(n.selectedItemsCountText),1)],64)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(" No records were found (filtered from "+t.toDisplayString(l.paginator.unfilteredTotal)+" total records) ",1)],64))]),t.createVNode("div",{class:["paginator",{"disable-all":l.loading}]},[t.createVNode("button",{class:o.buttonClass,onClick:a[6]||(a[6]=e=>n.fetchItemsForPage(l.paginator.firstPage)),disabled:l.paginator.firstPage===l.paginator.currentPage},"First",10,["disabled"]),t.createVNode("button",{class:o.buttonClass,onClick:a[7]||(a[7]=e=>n.fetchItemsForPage(l.paginator.currentPage-1)),disabled:l.paginator.firstPage===l.paginator.currentPage},"<",10,["disabled"]),l.paginator.lastPage>=l.pageSwitch-3?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[8]||(a[8]=e=>n.fetchItemsForPage(l.pageSwitch-3)),class:{active:l.pageSwitch-3===l.paginator.currentPage,[o.buttonClass]:null!=(s=o.buttonClass)&&s}},t.toDisplayString(l.pageSwitch-3),3)):t.createCommentVNode("",!0),l.paginator.lastPage>=l.pageSwitch-2?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[9]||(a[9]=e=>n.fetchItemsForPage(l.pageSwitch-2)),class:{active:l.pageSwitch-2===l.paginator.currentPage,[o.buttonClass]:null!=(r=o.buttonClass)&&r}},t.toDisplayString(l.pageSwitch-2),3)):t.createCommentVNode("",!0),l.paginator.lastPage>=l.pageSwitch-1?(t.openBlock(),t.createBlock("button",{key:2,onClick:a[10]||(a[10]=e=>n.fetchItemsForPage(l.pageSwitch-1)),class:{active:l.pageSwitch-1===l.paginator.currentPage,[o.buttonClass]:null!=(c=o.buttonClass)&&c}},t.toDisplayString(l.pageSwitch-1),3)):t.createCommentVNode("",!0),l.paginator.lastPage>=l.pageSwitch?(t.openBlock(),t.createBlock("button",{key:3,onClick:a[11]||(a[11]=e=>n.fetchItemsForPage(l.pageSwitch)),class:{active:l.pageSwitch===l.paginator.currentPage,[o.buttonClass]:null!=(d=o.buttonClass)&&d}},t.toDisplayString(l.pageSwitch),3)):t.createCommentVNode("",!0),l.paginator.lastPage>4?(t.openBlock(),t.createBlock(t.Fragment,{key:4},[A,l.paginator.lastPage-1>0&&l.paginator.firstPage!==l.paginator.lastPage-1&&l.paginator.lastPage-1>4?(t.openBlock(),t.createBlock("button",{key:0,onClick:a[12]||(a[12]=e=>n.fetchItemsForPage(l.paginator.lastPage-1)),class:{active:l.paginator.lastPage-1===l.paginator.currentPage,[o.buttonClass]:null!=(h=o.buttonClass)&&h}},t.toDisplayString(l.paginator.lastPage-1),3)):t.createCommentVNode("",!0),l.paginator.lastPage!==l.paginator.firstPage?(t.openBlock(),t.createBlock("button",{key:1,onClick:a[13]||(a[13]=e=>n.fetchItemsForPage(l.paginator.lastPage)),class:{active:l.paginator.lastPage===l.paginator.currentPage,[o.buttonClass]:null!=(u=o.buttonClass)&&u}},t.toDisplayString(l.paginator.lastPage),3)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0),t.createVNode("button",{class:o.buttonClass,onClick:a[14]||(a[14]=e=>n.fetchItemsForPage(l.paginator.currentPage+1)),disabled:l.paginator.lastPage===l.paginator.currentPage},">",10,["disabled"]),t.createVNode("button",{class:o.buttonClass,onClick:a[15]||(a[15]=e=>n.fetchItemsForPage(l.paginator.lastPage)),disabled:l.paginator.lastPage===l.paginator.currentPage},"Last",10,["disabled"])],2)])}));f.render=L,f.__scopeId="data-v-b279d91e";const q={props:{items:Array,label:String,value:String,selectedItem:String|Object}},O=t.withScopeId("data-v-6e9046d5");t.pushScopeId("data-v-6e9046d5");const E={class:"tabs"};t.popScopeId();const U=O(((e,a,o,i,l,n)=>(t.openBlock(),t.createBlock("div",E,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.items,(a=>(t.openBlock(),t.createBlock("div",{onClick:t.withModifiers((t=>e.$emit("update:selectedItem",a[o.value])),["prevent"]),class:{active:o.selectedItem===a[o.value]}},t.toDisplayString(a[o.label]),11,["onClick"])))),256))]))));q.render=U,q.__scopeId="data-v-6e9046d5";const _={props:{modelValue:Boolean,title:String},methods:{closeModalOnBackgroundClick(e){null===e.target.closest(".modal__content")&&document.body.contains(e.target)&&this.$emit("update:modelValue",!1)}}},K=t.withScopeId("data-v-463997d2");t.pushScopeId("data-v-463997d2");const H={class:"modal__container"},R={class:"modal__content"},W={class:"modal-main"},j=t.createTextVNode("No Modal Content"),z={key:0};t.popScopeId();const X=K(((e,a,o,i,l,n)=>(t.openBlock(),t.createBlock("div",{class:"modal",tabindex:"0",onClick:a[2]||(a[2]=(...e)=>n.closeModalOnBackgroundClick&&n.closeModalOnBackgroundClick(...e))},[t.createVNode("div",H,[t.createVNode("div",R,[t.createVNode("header",null,[t.createVNode("h3",null,t.toDisplayString(o.title),1),t.createVNode("span",{onClick:a[1]||(a[1]=t=>e.$emit("update:modelValue",!1))},"close")]),t.createVNode("div",W,[t.renderSlot(e.$slots,"default",{},(()=>[j]),{},!0)]),e.$slots.footer?(t.openBlock(),t.createBlock("footer",z,[t.renderSlot(e.$slots,"footer",{},void 0,!0)])):t.createCommentVNode("",!0)])])]))));_.render=X,_.__scopeId="data-v-463997d2";const J={props:{url:String,fields:Array,itemDescription:String,addItemOverride:{type:Function,required:!1},editItemOverride:{type:Function,required:!1},updateItemOverride:{type:Function,required:!1}},components:{DataTable:f},data:()=>({showAddModal:!1,showEditModal:!1,formData:{},editFormData:{},selectData:{}}),computed:{bus:()=>window.bus},watch:{showAddModal(){this.showAddModal&&(this.$nextTick((()=>{var e;null==(e=this.$el.querySelector("form input, form select"))||e.focus()})),this.fields.filter((e=>!e.viewOnly)).forEach((async e=>{"function"!=typeof e.selectData?this.selectData[e.field]=e.selectData:this.selectData[e.field]=await e.selectData(this.formData)})))},showEditModal(){this.showEditModal&&(this.$nextTick((()=>{var e;null==(e=this.$el.querySelector("form input, form select"))||e.focus()})),this.fields.filter((e=>!e.viewOnly)).forEach((async e=>{"function"!=typeof e.selectData?this.selectData[e.field]=e.selectData:this.selectData[e.field]=await e.selectData(this.editFormData)})))}},methods:{checkMaxLength(e,t){"Backspace"!==e.key&&"Delete"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key&&"Enter"!==e.key&&String(e.target.value).length>=t&&e.preventDefault()},async addItem(){let e=this.$loading.show(),t=null;if(t=this.addItemOverride?await this.addItemOverride(this.url,this.formData):await fetchy.post(this.url,this.formData),400===t.status)return e.hide(),void this.$notify.error(t.data);this.formData={},this.$notify.success(`${this.itemDescription} Added`),this.showAddModal=!1,this.bus.emit("refreshDataTable"),e.hide()},async editItem(e){this.editItemOverride?await this.editItemOverride(e,this):this.editFormData=JSON.parse(JSON.stringify(e)),this.showEditModal=!0},async updateItem(){let e=this.$loading.show(),t=null;if(t=this.updateItemOverride?await this.updateItemOverride(`${this.url}/${this.editFormData.id}`,this.editFormData):await fetchy.put(`${this.url}/${this.editFormData.id}`,this.editFormData),400===t.status)return e.hide(),void this.$notify.error(t.data);this.editFormData={},this.$notify.success(`${this.itemDescription} Updated`),this.showEditModal=!1,this.bus.emit("refreshDataTable"),e.hide()},async deleteItem(e){if(!confirm("Are you sure you want to delete this item?"))return;let t=this.$loading.show();const a=await fetchy.delete(`${this.url}/${e}`);if(400===a.status)return t.hide(),void this.$notify.error(a.data);this.$notify.success(`${this.itemDescription} Deleted`),this.showAddModal=!1,this.bus.emit("refreshDataTable"),t.hide()}}},G=t.withScopeId("data-v-4504d5a5");t.pushScopeId("data-v-4504d5a5");const Q=t.createVNode("i",{class:"fas fa-plus"},null,-1),Y=t.createTextVNode(" Add Item "),Z=t.createVNode("i",{class:"fas fa-edit"},null,-1),ee=t.createTextVNode(" Edit "),te=t.createVNode("i",{class:"fas fa-trash"},null,-1),ae=t.createTextVNode(" Delete "),oe={class:"mb-0_3rem"},ie=t.createVNode("button",{class:"button"},"Save",-1),le={class:"mb-0_3rem"},ne=t.createVNode("button",{class:"button"},"Save",-1);t.popScopeId();const se=G(((e,a,o,i,l,n)=>{const s=t.resolveComponent("DataTable"),r=t.resolveComponent("Modal");return t.openBlock(),t.createBlock("div",null,[t.createVNode(s,{url:o.url,fields:o.fields.filter((e=>!e.formOnly)),"item-actions-width":"12em","table-height":"calc(100vh - 18.5em)","button-class":"button",bus:n.bus},{actions:G((()=>[t.createVNode("a",{class:"button",onClick:a[1]||(a[1]=e=>l.showAddModal=!0)},[Q,Y])])),"item-actions":G((({item:a})=>[t.renderSlot(e.$slots,"item-actions",{item:a},void 0,!0),t.createVNode("a",{class:"button",onClick:e=>n.editItem(a)},[Z,ee],8,["onClick"]),t.createVNode("a",{class:"button button-red ml-1rem",onClick:e=>n.deleteItem(a.id)},[te,ae],8,["onClick"])])),_:1},8,["url","fields","bus"]),t.createVNode("form",{onSubmit:a[3]||(a[3]=t.withModifiers(((...e)=>n.addItem&&n.addItem(...e)),["prevent"]))},[l.showAddModal?(t.openBlock(),t.createBlock(r,{key:0,modelValue:l.showAddModal,"onUpdate:modelValue":a[2]||(a[2]=e=>l.showAddModal=e),title:`Add ${o.itemDescription}`,ref:"modal"},{footer:G((()=>[ie])),default:G((()=>[t.renderSlot(e.$slots,"add-modal",{formData:l.formData},(()=>[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.fields.filter((e=>!e.viewOnly)),((e,a)=>(t.openBlock(),t.createBlock("div",null,[t.createVNode("label",{class:[{"mt-0_5rem":a>0},"d-b"]},[t.createVNode("div",oe,t.toDisplayString(e.label),1),"text"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:0,type:"text","onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.formData[e.field]]]):t.createCommentVNode("",!0),"email"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:1,type:"email","onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.formData[e.field]]]):t.createCommentVNode("",!0),"password"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:2,type:"password","onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.formData[e.field]]]):t.createCommentVNode("",!0),"number"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:3,type:"number","onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.formData[e.field]]]):t.createCommentVNode("",!0),"date"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:4,type:"date","onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,class:"w-100p"},null,8,["onUpdate:modelValue","required"])),[[t.vModelText,l.formData[e.field]]]):t.createCommentVNode("",!0),"select"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("select",{key:5,"onUpdate:modelValue":t=>l.formData[e.field]=t,required:e.required,class:"w-100p"},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(l.selectData[e.field],(e=>(t.openBlock(),t.createBlock("option",{value:e.value},t.toDisplayString(e.label),9,["value"])))),256))],8,["onUpdate:modelValue","required"])),[[t.vModelSelect,l.formData[e.field]]]):t.createCommentVNode("",!0)],2)])))),256))]),!0)])),_:3},8,["modelValue","title"])):t.createCommentVNode("",!0)],32),t.createVNode("form",{onSubmit:a[5]||(a[5]=t.withModifiers(((...e)=>n.updateItem&&n.updateItem(...e)),["prevent"]))},[l.showEditModal?(t.openBlock(),t.createBlock(r,{key:0,modelValue:l.showEditModal,"onUpdate:modelValue":a[4]||(a[4]=e=>l.showEditModal=e),title:`Edit ${o.itemDescription}`,ref:"modal"},{footer:G((()=>[ne])),default:G((()=>[t.renderSlot(e.$slots,"edit-modal",{editFormData:l.editFormData,showEditModal:l.showEditModal},(()=>[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(o.fields.filter((e=>!e.viewOnly)),((e,a)=>(t.openBlock(),t.createBlock("div",null,[e.addOnly?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock("label",{key:0,class:[{"mt-0_5rem":a>0},"d-b"]},[t.createVNode("div",le,t.toDisplayString(e.label),1),"text"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:0,type:"text","onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.editFormData[e.field]]]):t.createCommentVNode("",!0),"email"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:1,type:"email","onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.editFormData[e.field]]]):t.createCommentVNode("",!0),"password"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:2,type:"password","onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.editFormData[e.field]]]):t.createCommentVNode("",!0),"number"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:3,type:"number","onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,onKeydown:t=>n.checkMaxLength(t,e.maxLength),class:"w-100p"},null,40,["onUpdate:modelValue","required","onKeydown"])),[[t.vModelText,l.editFormData[e.field]]]):t.createCommentVNode("",!0),"date"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("input",{key:4,type:"date","onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,class:"w-100p"},null,8,["onUpdate:modelValue","required"])),[[t.vModelText,l.editFormData[e.field]]]):t.createCommentVNode("",!0),"select"===e.inputType?t.withDirectives((t.openBlock(),t.createBlock("select",{key:5,"onUpdate:modelValue":t=>l.editFormData[e.field]=t,required:e.required,class:"w-100p"},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(l.selectData[e.field],(e=>(t.openBlock(),t.createBlock("option",{value:e.value},t.toDisplayString(e.label),9,["value"])))),256))],8,["onUpdate:modelValue","required"])),[[t.vModelSelect,l.editFormData[e.field]]]):t.createCommentVNode("",!0)],2))])))),256))]),!0)])),_:3},8,["modelValue","title"])):t.createCommentVNode("",!0)],32)])}));J.render=se,J.__scopeId="data-v-4504d5a5";const re={props:{items:Array,text:[String,Number],value:[String,Number],selectedItems:Array,collapsible:Boolean,containerHeight:String,innerContainerHeight:String,filterWidth:String},computed:{filteredItems(){return this.filter?this.items.filter((e=>e[this.text].toLowerCase().includes(this.filter.toLowerCase()))):this.items}},data:function(){return{rootStyle:{display:"inline-block",padding:".429rem .929rem",border:"1px solid #e0e0e0","border-radius":".215rem",height:"12em","min-width":"10em",color:"inherit","font-family":"inherit",position:"relative"},collapsibleStyle:{borderRadius:"var(--default-border-radius)",border:"1px solid #a7a2a2",padding:"0.25em 0 0.25em 0.5em",userSelect:"none",background:"url(../images/arrow.png) right / 20px no-repeat #f3f3f3"},labelStyle:{display:"block"},selectedItemsVirtual:[],selectAll:!1,filter:null,expand:!0}},methods:{handleChange(){this.handleSelectAllCheckbox(),this.$emit("update:selectedItems",this.selectedItemsVirtual),this.$emit("change")},selectAllChanged(){this.selectAll?this.selectedItemsVirtual=this.filteredItems.map((e=>e[this.value])):this.selectedItemsVirtual=[],this.handleChange()},handleSelectAllCheckbox(){this.items&&(this.selectedItemsVirtual.length<this.items.length&&(this.selectAll=!1),this.selectedItemsVirtual.length>0&&this.selectedItemsVirtual.length===this.items.length&&(this.selectAll=!0))},clickOutside(e){this.collapsible&&Vue.nextTick((()=>{this.expand&&!e.target.classList.contains("checkbox-multiselect-selector")&&(this.expand=!1)}))}},watch:{selectedItems(){this.selectedItemsVirtual=this.selectedItems,this.handleSelectAllCheckbox()},items(e,t){t&&t.length>0&&(this.selectedItemsVirtual=[],this.handleChange())}},created(){"object"==typeof this.selectedItems?this.selectedItemsVirtual=this.selectedItems:this.selectedItemsVirtual=[],this.selectedItemsVirtual&&this.handleSelectAllCheckbox(),this.collapsible&&(this.rootStyle.position="absolute",this.rootStyle.backgroundColor="white",this.rootStyle.zIndex="2",this.expand=!1)},mounted(){this.$el.style.width&&(this.rootStyle.width=this.$el.style.width,this.containerHeight&&(this.rootStyle.height=this.containerHeight),this.$forceUpdate())},directives:{"click-outside":{bind(e,t,a){e.clickOutsideEvent=function(o){e==o.target||e.contains(o.target)||a.context[t.expression](o)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}}},ce=t.withScopeId("data-v-c083b56c");t.pushScopeId("data-v-c083b56c");const de={class:"pos-r"},he={key:0,class:"pos-a bc-white",style:{"padding-bottom":"0.2em"}},ue={key:0,style:{"padding-top":"0.2em"},class:"bb-grey"},pe=t.createTextVNode(" Select All"),me={key:1,style:{"margin-top":"2.2em","font-size":"0.9em"}},ge={key:2,style:{"font-size":"0.9em"}};t.popScopeId();const fe=ce(((e,a,o,i,l,n)=>{const s=t.resolveDirective("click-outside");return t.openBlock(),t.createBlock("div",de,[o.collapsible?(t.openBlock(),t.createBlock("div",{key:0,onClick:a[1]||(a[1]=t=>e.expand=!e.expand),style:e.collapsibleStyle,class:"checkbox-multiselect-selector"},t.toDisplayString((void 0).selectedItems.length)+" items selected",5)):t.createCommentVNode("",!0),e.expand?t.withDirectives((t.openBlock(),t.createBlock("div",{key:1,style:e.rootStyle},[o.items&&o.items.length>0?(t.openBlock(),t.createBlock("div",he,[t.createVNode("div",null,[t.withDirectives(t.createVNode("input",{type:"search","onUpdate:modelValue":a[2]||(a[2]=t=>e.filter=t),placeholder:"Filter...",class:"va-s",style:{width:o.filterWidth?o.filterWidth:null}},null,4),[[t.vModelText,e.filter]])]),n.filteredItems&&n.filteredItems.length>0?(t.openBlock(),t.createBlock("div",ue,[t.createVNode("label",{style:e.labelStyle},[t.withDirectives(t.createVNode("input",{type:"checkbox",value:"true","onUpdate:modelValue":a[3]||(a[3]=t=>e.selectAll=t),onChange:a[4]||(a[4]=(...e)=>n.selectAllChanged&&n.selectAllChanged(...e)),style:{"vertical-align":"sub"}},null,544),[[t.vModelCheckbox,e.selectAll]]),pe],4)])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0),o.items&&o.items.length>0&&n.filteredItems&&0===n.filteredItems.length?(t.openBlock(),t.createBlock("div",me," No Records Found ")):t.createCommentVNode("",!0),o.items&&0===o.items.length?(t.openBlock(),t.createBlock("div",ge," No Records Found ")):t.createCommentVNode("",!0),o.items&&o.items.length>0&&n.filteredItems&&n.filteredItems.length>0?(t.openBlock(),t.createBlock("div",{key:3,class:"o-a",style:{height:o.innerContainerHeight?o.innerContainerHeight:"7em",marginTop:"4em"}},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(n.filteredItems,(i=>(t.openBlock(),t.createBlock("div",null,[t.createVNode("label",{style:e.labelStyle},[t.withDirectives(t.createVNode("input",{type:"checkbox",value:i[o.value],onChange:a[5]||(a[5]=(...e)=>n.handleChange&&n.handleChange(...e)),style:{"vertical-align":"sub"},"onUpdate:modelValue":a[6]||(a[6]=t=>e.selectedItemsVirtual=t)},null,40,["value"]),[[t.vModelCheckbox,e.selectedItemsVirtual]]),t.createTextVNode(" "+t.toDisplayString(i[o.text]),1)],4)])))),256))],4)):t.createCommentVNode("",!0)],4)),[[s,n.clickOutside]]):t.createCommentVNode("",!0)])}));re.render=fe,re.__scopeId="data-v-c083b56c";var ke={install:(e,t)=>{e.config.globalProperties.$loading={show(){let e=document.createElement("div");return e.innerHTML='\n                    <style>\n                    .vld-overlay {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        align-items: center;\n                        display: none;\n                        justify-content: center;\n                        overflow: hidden;\n                        z-index: 1\n                    }\n\n                    .vld-overlay.is-active {\n                        display: flex\n                    }\n\n                    .vld-overlay.is-full-page {\n                        z-index: 999;\n                        position: fixed\n                    }\n\n                    .vld-overlay .vld-background {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        background: #fff;\n                        opacity: 0.5\n                    }\n\n                    .vld-overlay .vld-icon, .vld-parent {\n                        position: relative\n                    }\n                    </style>\n                    <div tabindex="0" aria-label="Loading" class="vld-overlay is-active is-full-page" aria-busy="true" style="">\n                        <div class="vld-background" style="background: black; opacity: 0.5;"></div>\n                        <div class="vld-icon">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="128" width="128" fill="white">\n                                <rect x="0" y="13" width="4" height="5">\n                                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ',document.body.appendChild(e),e.hide=e.remove,e}},e.provide("$loading",e.config.globalProperties.$loading)}};function ye(e,t){const a=document.createElement("div");a.innerHTML=t,a.style.padding="1.5rem 2rem";const o=document.createElement("div");o.style.cssText=`\n        z-index: 3;\n        position: fixed;\n        bottom: 40px;\n        right: 40px;\n        background-color: ${e};\n        color: white;\n        box-shadow: 0 0 3px black;\n        border-radius: 4px;\n        user-select: none;\n        cursor: pointer;\n        font-size: 1rem;\n    `;const i=document.createElement("div");i.style.height="1em",i.style.backgroundColor="white";let l=100;i.style.width=`${l}%`;let n=setInterval(c,15),s=new Date,r=3e3;function c(){if(0===l)clearInterval(n);else{const e=new Date-s;l=100*e/r,i.style.width=`${l}%`}}const d=document.createElement("div");d.style.backgroundColor="#00000033",d.style.height="1rem",d.appendChild(i),o.appendChild(d),o.appendChild(a),document.body.appendChild(o);let h=!1;function u(){h||(document.body.removeChild(o),h=!0)}o.onclick=()=>{document.body.removeChild(o),h=!0},o.onmouseenter=()=>{clearInterval(n),clearTimeout(p);const e=new Date-s;r-=e},o.onmouseleave=()=>{s=new Date,n=setInterval(c,15),p=setTimeout(u,r)};let p=setTimeout(u,r)}var be={install:(e,t)=>{e.config.globalProperties.$notify={custom(e,t){ye(e,t)},error(e){ye("#bf3131",e)},success(e){ye("green",e)}},e.provide("$notify",e.config.globalProperties.$notify)}};async function ve(e,t){const a=await e.text();let o={};try{o={data:JSON.parse(a),status:e.status}}catch{o={data:a,status:e.status}}return t?t(o):o}function we(e){if(!document.cookie)return null;const t=document.cookie.split(";").map((e=>e.trim())).filter((t=>t.startsWith(e+"=")));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}function Ve(){return{"Content-Type":"application/json",Accept:"application/json","X-XSRF-TOKEN":we("XSRF-TOKEN")}}async function Ce(e,t,a,o,i){let l=null,n=Ve();return!1===o?l=await fetch(t,{method:e,headers:n,body:JSON.stringify(a)}):(delete n["Content-Type"],l=await fetch(t,{method:e,headers:n,body:a})),await ve(l,i)}var Se={responseInterceptor:null,async get(e){const t=await fetch(e,{method:"GET",headers:Ve()});return await ve(t,this.responseInterceptor)},async post(e,t={},a=!1){return await Ce("POST",e,t,a,this.responseInterceptor)},async put(e,t={},a=!1){return await Ce("PUT",e,t,a,this.responseInterceptor)},async delete(e){const t=await fetch(e,{method:"DELETE",headers:Ve()});return await ve(t,this.responseInterceptor)}};e.CRUD=J,e.CheckboxMultiselect=re,e.Container=c,e.DataTable=f,e.Modal=_,e.Page=d,e.Tabs=q,e.createConfirm=function(e){const t=document.createElement("div");return t.innerHTML=`\n        <div style="position: fixed; height: 100vh; width: 100vw; display: grid; place-items: center; background: #00000052; top: 0; z-index: 2">\n            <div style="background-color: white; padding: 1rem">\n                <div style="font-size: 1rem">${e}</div>\n                <div style="margin-top: 1rem; text-align: right;">\n                    <button class="button button-green" id="p-confirm">Confirm</button>\n                    <button class="button" id="p-cancel" style="margin-left: 0.5rem">Cancel</button>\n                </div>\n            </div>\n        </div>\n    `,document.body.appendChild(t),new Promise((e=>{const a=o=>{"p-confirm"===o.target.id&&e(!0),"p-cancel"===o.target.id&&e(!1),"p-confirm"!==o.target.id&&"p-cancel"!==o.target.id||(document.removeEventListener("click",a),document.body.removeChild(t))};document.addEventListener("click",a)}))},e.fetchy=Se,e.loading=ke,e.notify=be,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
