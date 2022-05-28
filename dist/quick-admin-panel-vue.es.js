import{pushScopeId as t,popScopeId as e,ref as a,computed as i,openBlock as s,createBlock as n,createVNode as l,renderSlot as o,withDirectives as r,vModelText as c,Fragment as d,renderList as h,unref as u,toDisplayString as g,withScopeId as p,createCommentVNode as m,createTextVNode as b,vModelCheckbox as f,withModifiers as v}from"vue";t("data-v-07f129fb");const y={style:{display:"flex","flex-direction":"column",height:"100vh"}},C={style:{display:"flex","align-items":"center"}},k=l("div",{style:{height:"100%",width:"200px","font-size":"1.5rem",display:"flex","justify-content":"center","align-items":"center"}}," Software Logo ",-1),w={style:{display:"flex",flex:"1"}},P={style:{position:"sticky",top:"0",padding:"0.7rem 0.5rem","background-color":"var(--sidebar-background-color, brown)"}},x={class:"sidebar-item"},S={class:"content"};e();const T={expose:[],props:{sidebarItems:Array},setup(t){const e=t,g=a(""),p=i((()=>g.value?e.sidebarItems.filter((t=>t.name.toLowerCase().includes(g.value.toLowerCase()))):e.sidebarItems)),m=a(null);return(t,e)=>(s(),n("div",y,[l("nav",C,[o(t.$slots,"navbar",{},(()=>[k]),{},!0)]),l("div",w,[l("aside",null,[l("div",P,[r(l("input",{type:"search",placeholder:"Search...",class:"sidebar-filter","onUpdate:modelValue":e[1]||(e[1]=t=>g.value=t)},null,512),[[c,g.value]])]),(s(!0),n(d,null,h(u(p),(e=>(s(),n("div",x,[o(t.$slots,"sidebar-item",{sidebarItem:e,selectSidebarItem:()=>m.value=e,isActive:m.value&&m.value.name===e.name},void 0,!0)])))),256))]),l("div",S,[o(t.$slots,"default",{},void 0,!0)])])]))},__scopeId:"data-v-07f129fb"};const I={props:{title:String}},$=p("data-v-1a59f045");t("data-v-1a59f045");const F={style:{height:"calc(100vh - 5.5rem)"}},D={class:"page"},A={class:"heading-underline"};e();const _=$(((t,e,a,i,r,c)=>(s(),n("div",F,[l("div",D,[l("div",A,[l("h2",null,g(a.title),1),l("div",null,[o(t.$slots,"title-right-content",{},void 0,!0)])]),l("div",null,[o(t.$slots,"default",{},void 0,!0)])])]))));I.render=_,I.__scopeId="data-v-1a59f045";const E={props:{url:String,fields:Array,itemActionsWidth:String,bus:Object,tableHeight:String,limit:Number,checkboxes:Boolean,checkboxField:String,selectedCheckboxes:Array,hideItemActionsColumn:Boolean,demo:{type:Boolean,default:!1},buttonClass:{type:String,required:!1}},data:()=>({filter:"",items:[],paginator:{currentPage:null,firstPage:1,lastPage:null,from:null,to:null,total:null,unfilteredTotal:null},pageSwitch:4,sortField:"",previousSortField:"",sortOrder:"asc",loading:!1,refreshingDataTable:!1,selectedCheckboxesVirtual:[],currentDataFreshnessTimestamp:null}),watch:{url(){this.url&&(this.sortField="",this.previousSortField="",this.sortOrder="asc",this.fetchItemsForPage(1,!0,!0))},selectedCheckboxesVirtual(){this.$emit("update:selectedCheckboxes",this.selectedCheckboxesVirtual)}},computed:{itemActionsSlotExists(){return this.$slots["item-actions"]&&!1===this.hideItemActionsColumn},selectedItemsCountText(){return this.selectedCheckboxes&&this.selectedCheckboxes.length>0?`(${this.selectedCheckboxes.length} selected)`:""}},methods:{debounce(t,e,a){var i;return function(){var s=this,n=arguments,l=function(){i=null,a||t.apply(s,n)},o=a&&!i;clearTimeout(i),i=setTimeout(l,e),o&&t.apply(s,n)}},debouncedFetch:(L=function(){this.fetchItemsForPage(1,!1,!0)},O=250,function(){var t=this,e=arguments,a=function(){V=null,M||L.apply(t,e)},i=M&&!V;clearTimeout(V),V=setTimeout(a,O),i&&L.apply(t,e)}),filterItems(){this.pageSwitch=4,this.debouncedFetch()},sortColumn(t){this.sortField=t,this.previousSortField!==this.sortField?this.sortOrder="asc":"asc"===this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.previousSortField=this.sortField,this.fetchItemsForPage(1,!1,!0)},fetchItemsForPage(t,e=!1,a=!1){if(t===this.paginator.currentPage&&!a)return;if(t===this.paginator.firstPage&&(this.pageSwitch=4),t===this.paginator.lastPage){let t=this.paginator.lastPage-2;t>=4&&(this.pageSwitch=t)}if(t===this.paginator.lastPage-1){let t=this.paginator.lastPage-1-1;t>=4&&(this.pageSwitch=t)}this.paginator.lastPage<=4&&this.pageSwitch<this.paginator.lastPage&&(this.pageSwitch=4),e||(t==this.pageSwitch&&(this.paginator.lastPage-2===this.pageSwitch||this.pageSwitch+1>this.paginator.lastPage||this.paginator.lastPage>5&&this.pageSwitch++),t<this.paginator.currentPage&&(this.pageSwitch-1>3&&this.pageSwitch-1<this.paginator.lastPage-3&&this.pageSwitch--,this.paginator.currentPage===this.paginator.lastPage-4&&this.pageSwitch-1>=4&&this.pageSwitch--,t===this.pageSwitch-3&&t>1&&this.pageSwitch--)),this.paginator.currentPage=t,this.loading=!0;let i=this.url.split("?");if(i=i.length>1?this.url+"&":this.url+"?",this.checkboxes&&(this.selectedCheckboxesVirtual=[],this.$emit("update:selectedCheckboxes",[]),this.$refs.selectAllCheckboxesInput&&(this.$refs.selectAllCheckboxesInput.checked=!1)),this.demo){this.items=[];for(let e=0;e<20;e++){let a={};this.fields.forEach(((i,s)=>{a[i.field]=`Row ${e+1+(1===t?0:10*t)} Column ${s+1}`})),this.items.push(a)}return this.paginator.currentPage=t,this.paginator.lastPage=8,this.paginator.from=1===t?1:10*t+1,this.paginator.to=1===t?20:10*t+20,this.paginator.total=160,this.paginator.unfilteredTotal=160,this.loading=!1,this.refreshingDataTable=!1,void this.$emit("loaded")}let s=(new Date).getTime();axios.get(`${i}page=${t}&filter=${encodeURIComponent(this.filter)}&sort_by=${this.sortField}&sort_order=${this.sortOrder}&limit=${this.limit?this.limit:""}`).then((t=>{(t=t.data).paginator?this.currentDataFreshnessTimestamp&&this.currentDataFreshnessTimestamp>s||(this.currentDataFreshnessTimestamp=s,this.items=t.paginator.data,this.paginator.currentPage=t.paginator.current_page,this.paginator.lastPage=t.paginator.last_page,this.paginator.from=t.paginator.from,this.paginator.to=t.paginator.to,this.paginator.total=t.paginator.total,this.paginator.unfilteredTotal=t.unfiltered_total,this.loading=!1,this.refreshingDataTable=!1,this.$emit("loaded")):console.error("%cDataTable","font-weight: bold","Given url does not implement laravel pagination")}))},refreshDataTable(){this.refreshingDataTable=!0,this.fetchItemsForPage(this.paginator.currentPage,!1,!0)},selectAllCheckboxes(t){this.selectedCheckboxesVirtual=[],t.target.checked&&this.items.forEach((t=>{this.selectedCheckboxesVirtual.push(t[this.checkboxField])}))},getDisplayContent:(t,e)=>"transformValue"in t?t.transformValue(e):e},created(){this.url&&this.fetchItemsForPage(1,!0),this.bus&&this.bus.on("refreshDataTable",this.refreshDataTable),this.checkboxes&&this.$emit("update:selectedCheckboxes",[])},unmounted(){this.bus&&this.bus.off("refreshDataTable",this.refreshDataTable)}};var L,O,M,V;const N=p("data-v-b279d91e");t("data-v-b279d91e");const X={class:"datatable"},B={style:{display:"flex","justify-content":"space-between","align-items":"flex-start"}},W=b(" Refresh"),j=l("br",null,null,-1),z={key:0,style:{width:"45px","min-width":"45px"}},H={key:0},R=l("td",{colspan:"100%",class:"ta-c"},"Loading",-1),U={key:0,class:"ta-c",style:{width:"45px","min-width":"45px"}},G={key:2,class:"ta-c"},J={key:0},K=l("td",{colspan:"100%",class:"ta-c"},"No records found",-1),q=l("br",null,null,-1),Q={style:{float:"left"}},Y=l("span",null,"...",-1);e();const Z=N(((t,e,a,i,u,p)=>{var v,y,C,k,w,P;return s(),n("div",X,[l("div",B,[l("div",null,[o(t.$slots,"actions",{},void 0,!0)]),l("div",null,[l("button",{onClick:e[1]||(e[1]=(...t)=>p.refreshDataTable&&p.refreshDataTable(...t)),class:a.buttonClass},[l("i",{class:["fas fa-sync-alt",{"fa-spin":u.refreshingDataTable}]},null,2),W],2),r(l("input",{type:"search","onUpdate:modelValue":e[2]||(e[2]=t=>u.filter=t),onInput:e[3]||(e[3]=(...t)=>p.filterItems&&p.filterItems(...t)),style:{"margin-left":"0.5em"},placeholder:"Search..."},null,544),[[c,u.filter]])])]),j,l("div",{class:"table-container",style:{height:a.tableHeight}},[l("table",null,[l("thead",null,[l("tr",null,[a.checkboxes?(s(),n("th",z,[u.items.length>0?(s(),n("input",{key:0,type:"checkbox",onChange:e[4]||(e[4]=(...t)=>p.selectAllCheckboxes&&p.selectAllCheckboxes(...t)),ref:"selectAllCheckboxesInput"},null,544)):m("",!0)])):m("",!0),p.itemActionsSlotExists?(s(),n("th",{key:1,style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},"Actions",4)):m("",!0),(s(!0),n(d,null,h(a.fields,(t=>{var e;return s(),n("th",{class:{active:u.sortField===t.field},style:{width:null!=(e=t.width)&&e},onClick:e=>p.sortColumn(t.field)},[b(g(t.label)+" ",1),l("span",{class:["arrow","asc"===u.sortOrder?"asc":"desc"]},null,2)],14,["onClick"])})),256))])]),l("tbody",null,[!a.url||u.loading?(s(),n("tr",H,[R])):(s(),n(d,{key:1},[(s(!0),n(d,null,h(u.items,((i,c)=>(s(),n("tr",null,[a.checkboxes?(s(),n("td",U,[r(l("input",{type:"checkbox",value:i[a.checkboxField],"onUpdate:modelValue":e[5]||(e[5]=t=>u.selectedCheckboxesVirtual=t)},null,8,["value"]),[[f,u.selectedCheckboxesVirtual]])])):m("",!0),p.itemActionsSlotExists&&0===c?(s(),n("td",{key:1,class:"ta-c",style:{width:a.itemActionsWidth,minWidth:a.itemActionsWidth}},[o(t.$slots,"item-actions",{item:i},void 0,!0)],4)):m("",!0),p.itemActionsSlotExists&&0!==c?(s(),n("td",G,[o(t.$slots,"item-actions",{item:i},void 0,!0)])):m("",!0),(s(!0),n(d,null,h(a.fields,(t=>(s(),n("td",{innerHTML:p.getDisplayContent(t,i[t.field])},null,8,["innerHTML"])))),256))])))),256)),0===u.items.length?(s(),n("tr",J,[K])):m("",!0)],64))])])],4),q,l("div",Q,[u.paginator.total>0?(s(),n(d,{key:0},[b(" From "+g(u.paginator.from)+" to "+g(u.paginator.to)+" of "+g(u.paginator.total)+" entries (filtered from "+g(u.paginator.unfilteredTotal)+" total records) "+g(p.selectedItemsCountText),1)],64)):(s(),n(d,{key:1},[b(" No records were found (filtered from "+g(u.paginator.unfilteredTotal)+" total records) ",1)],64))]),l("div",{class:["paginator",{"disable-all":u.loading}]},[l("button",{class:a.buttonClass,onClick:e[6]||(e[6]=t=>p.fetchItemsForPage(u.paginator.firstPage)),disabled:u.paginator.firstPage===u.paginator.currentPage},"First",10,["disabled"]),l("button",{class:a.buttonClass,onClick:e[7]||(e[7]=t=>p.fetchItemsForPage(u.paginator.currentPage-1)),disabled:u.paginator.firstPage===u.paginator.currentPage},"<",10,["disabled"]),u.paginator.lastPage>=u.pageSwitch-3?(s(),n("button",{key:0,onClick:e[8]||(e[8]=t=>p.fetchItemsForPage(u.pageSwitch-3)),class:{active:u.pageSwitch-3===u.paginator.currentPage,[a.buttonClass]:null!=(v=a.buttonClass)&&v}},g(u.pageSwitch-3),3)):m("",!0),u.paginator.lastPage>=u.pageSwitch-2?(s(),n("button",{key:1,onClick:e[9]||(e[9]=t=>p.fetchItemsForPage(u.pageSwitch-2)),class:{active:u.pageSwitch-2===u.paginator.currentPage,[a.buttonClass]:null!=(y=a.buttonClass)&&y}},g(u.pageSwitch-2),3)):m("",!0),u.paginator.lastPage>=u.pageSwitch-1?(s(),n("button",{key:2,onClick:e[10]||(e[10]=t=>p.fetchItemsForPage(u.pageSwitch-1)),class:{active:u.pageSwitch-1===u.paginator.currentPage,[a.buttonClass]:null!=(C=a.buttonClass)&&C}},g(u.pageSwitch-1),3)):m("",!0),u.paginator.lastPage>=u.pageSwitch?(s(),n("button",{key:3,onClick:e[11]||(e[11]=t=>p.fetchItemsForPage(u.pageSwitch)),class:{active:u.pageSwitch===u.paginator.currentPage,[a.buttonClass]:null!=(k=a.buttonClass)&&k}},g(u.pageSwitch),3)):m("",!0),u.paginator.lastPage>4?(s(),n(d,{key:4},[Y,u.paginator.lastPage-1>0&&u.paginator.firstPage!==u.paginator.lastPage-1&&u.paginator.lastPage-1>4?(s(),n("button",{key:0,onClick:e[12]||(e[12]=t=>p.fetchItemsForPage(u.paginator.lastPage-1)),class:{active:u.paginator.lastPage-1===u.paginator.currentPage,[a.buttonClass]:null!=(w=a.buttonClass)&&w}},g(u.paginator.lastPage-1),3)):m("",!0),u.paginator.lastPage!==u.paginator.firstPage?(s(),n("button",{key:1,onClick:e[13]||(e[13]=t=>p.fetchItemsForPage(u.paginator.lastPage)),class:{active:u.paginator.lastPage===u.paginator.currentPage,[a.buttonClass]:null!=(P=a.buttonClass)&&P}},g(u.paginator.lastPage),3)):m("",!0)],64)):m("",!0),l("button",{class:a.buttonClass,onClick:e[14]||(e[14]=t=>p.fetchItemsForPage(u.paginator.currentPage+1)),disabled:u.paginator.lastPage===u.paginator.currentPage},">",10,["disabled"]),l("button",{class:a.buttonClass,onClick:e[15]||(e[15]=t=>p.fetchItemsForPage(u.paginator.lastPage)),disabled:u.paginator.lastPage===u.paginator.currentPage},"Last",10,["disabled"])],2)])}));E.render=Z,E.__scopeId="data-v-b279d91e";const tt={props:{items:Array,label:String,value:String,selectedItem:String|Object}},et=p("data-v-6e9046d5");t("data-v-6e9046d5");const at={class:"tabs"};e();const it=et(((t,e,a,i,l,o)=>(s(),n("div",at,[(s(!0),n(d,null,h(a.items,(e=>(s(),n("div",{onClick:v((i=>t.$emit("update:selectedItem",e[a.value])),["prevent"]),class:{active:a.selectedItem===e[a.value]}},g(e[a.label]),11,["onClick"])))),256))]))));tt.render=it,tt.__scopeId="data-v-6e9046d5";const st={props:{modelValue:Boolean,title:String},methods:{closeModalOnBackgroundClick(t){null===t.target.closest(".modal__content")&&document.body.contains(t.target)&&this.$emit("update:modelValue",!1)}}},nt=p("data-v-463997d2");t("data-v-463997d2");const lt={class:"modal__container"},ot={class:"modal__content"},rt={class:"modal-main"},ct=b("No Modal Content"),dt={key:0};e();const ht=nt(((t,e,a,i,r,c)=>(s(),n("div",{class:"modal",tabindex:"0",onClick:e[2]||(e[2]=(...t)=>c.closeModalOnBackgroundClick&&c.closeModalOnBackgroundClick(...t))},[l("div",lt,[l("div",ot,[l("header",null,[l("h3",null,g(a.title),1),l("span",{onClick:e[1]||(e[1]=e=>t.$emit("update:modelValue",!1))},"close")]),l("div",rt,[o(t.$slots,"default",{},(()=>[ct]),{},!0)]),t.$slots.footer?(s(),n("footer",dt,[o(t.$slots,"footer",{},void 0,!0)])):m("",!0)])])]))));st.render=ht,st.__scopeId="data-v-463997d2";var ut={install:(t,e)=>{t.config.globalProperties.$loading={show(){let t=document.createElement("div");return t.innerHTML='\n                    <style>\n                    .vld-overlay {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        align-items: center;\n                        display: none;\n                        justify-content: center;\n                        overflow: hidden;\n                        z-index: 1\n                    }\n\n                    .vld-overlay.is-active {\n                        display: flex\n                    }\n\n                    .vld-overlay.is-full-page {\n                        z-index: 999;\n                        position: fixed\n                    }\n\n                    .vld-overlay .vld-background {\n                        bottom: 0;\n                        left: 0;\n                        position: absolute;\n                        right: 0;\n                        top: 0;\n                        background: #fff;\n                        opacity: 0.5\n                    }\n\n                    .vld-overlay .vld-icon, .vld-parent {\n                        position: relative\n                    }\n                    </style>\n                    <div tabindex="0" aria-label="Loading" class="vld-overlay is-active is-full-page" aria-busy="true" style="">\n                        <div class="vld-background" style="background: black; opacity: 0.5;"></div>\n                        <div class="vld-icon">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height="128" width="128" fill="white">\n                                <rect x="0" y="13" width="4" height="5">\n                                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n                                </rect>\n                            </svg>\n                        </div>\n                    </div>\n                ',document.body.appendChild(t),t.hide=t.remove,t}},t.provide("$loading",t.config.globalProperties.$loading)}};function gt(t,e){const a=document.createElement("div");a.innerHTML=e,a.style.padding="1.5rem 2rem";const i=document.createElement("div");i.style.cssText=`\n        z-index: 3;\n        position: fixed;\n        bottom: 40px;\n        right: 40px;\n        background-color: ${t};\n        color: white;\n        box-shadow: 0 0 3px black;\n        border-radius: 4px;\n        user-select: none;\n        cursor: pointer;\n        font-size: 1rem;\n    `;const s=document.createElement("div");s.style.height="1em",s.style.backgroundColor="white";let n=100;s.style.width=`${n}%`;let l=setInterval(c,15),o=new Date,r=3e3;function c(){if(0===n)clearInterval(l);else{const t=new Date-o;n=100*t/r,s.style.width=`${n}%`}}const d=document.createElement("div");d.style.backgroundColor="#00000033",d.style.height="1rem",d.appendChild(s),i.appendChild(d),i.appendChild(a),document.body.appendChild(i);let h=!1;function u(){h||(document.body.removeChild(i),h=!0)}i.onclick=()=>{document.body.removeChild(i),h=!0},i.onmouseenter=()=>{clearInterval(l),clearTimeout(g);const t=new Date-o;r-=t},i.onmouseleave=()=>{o=new Date,l=setInterval(c,15),g=setTimeout(u,r)};let g=setTimeout(u,r)}var pt={install:(t,e)=>{t.config.globalProperties.$notify={custom(t,e){gt(t,e)},error(t){gt("#bf3131",t)},success(t){gt("green",t)}},t.provide("$notify",t.config.globalProperties.$notify)}};async function mt(t,e){const a=await t.text();let i={};try{i={data:JSON.parse(a),status:t.status}}catch{i={data:a,status:t.status}}return e?e(i):i}function bt(t){if(!document.cookie)return null;const e=document.cookie.split(";").map((t=>t.trim())).filter((e=>e.startsWith(t+"=")));return 0===e.length?null:decodeURIComponent(e[0].split("=")[1])}function ft(){return{"Content-Type":"application/json",Accept:"application/json","X-XSRF-TOKEN":bt("XSRF-TOKEN")}}async function vt(t,e,a,i,s){let n=null,l=ft();return!1===i?n=await fetch(e,{method:t,headers:l,body:JSON.stringify(a)}):(delete l["Content-Type"],n=await fetch(e,{method:t,headers:l,body:a})),await mt(n,s)}var yt={responseInterceptor:null,async get(t){const e=await fetch(t,{method:"GET",headers:ft()});return await mt(e,this.responseInterceptor)},async post(t,e={},a=!1){return await vt("POST",t,e,a,this.responseInterceptor)},async put(t,e={},a=!1){return await vt("PUT",t,e,a,this.responseInterceptor)},async delete(t){const e=await fetch(t,{method:"DELETE",headers:ft()});return await mt(e,this.responseInterceptor)}};function Ct(t){const e=document.createElement("div");return e.innerHTML=`\n        <div style="position: fixed; height: 100vh; width: 100vw; display: grid; place-items: center; background: #00000052; top: 0; z-index: 2">\n            <div style="background-color: white; padding: 1rem">\n                <div style="font-size: 1rem">${t}</div>\n                <div style="margin-top: 1rem; text-align: right;">\n                    <button class="button button-green" id="p-confirm">Confirm</button>\n                    <button class="button" id="p-cancel" style="margin-left: 0.5rem">Cancel</button>\n                </div>\n            </div>\n        </div>\n    `,document.body.appendChild(e),new Promise((t=>{const a=i=>{"p-confirm"===i.target.id&&t(!0),"p-cancel"===i.target.id&&t(!1),"p-confirm"!==i.target.id&&"p-cancel"!==i.target.id||(document.removeEventListener("click",a),document.body.removeChild(e))};document.addEventListener("click",a)}))}export{T as Container,E as DataTable,st as Modal,I as Page,tt as Tabs,Ct as createConfirm,yt as fetchy,ut as loading,pt as notify};
