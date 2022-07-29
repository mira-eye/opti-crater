var ie=Object.defineProperty;var W=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var Z=(m,n,e)=>n in m?ie(m,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[n]=e,ee=(m,n)=>{for(var e in n||(n={}))de.call(n,e)&&Z(m,e,n[e]);if(W)for(var e of W(n))me.call(n,e)&&Z(m,e,n[e]);return m};import{g as H,u as ce,am as te,r as d,o as C,s as F,w as u,b as l,y as t,v as D,x as $,A as M,i as x,c as z,a_ as pe,B as se,j as le,k as h,aJ as _e,m as k,n as A,aV as fe,q as ye,t as O,a0 as oe,H as ve,z as G,F as Ce,an as be,a5 as ge}from"./vendor.e9042f2c.js";import{i as Fe,u as Te,l as K,d as ae,g as Y,e as P,n as T}from"./main.c4ed6aa9.js";const we={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(m){const n=m,e=Fe();Te();const{t:i}=H(),v=K();ce();const f=ae(),c=Y();te("utils");async function p(b){await v.fetchCustomField(b),c.openModal({title:i("settings.custom_fields.edit_custom_field"),componentName:"CustomFieldModal",size:"sm",data:b,refreshData:n.loadData})}async function V(b){e.openDialog({title:i("general.are_you_sure"),message:i("settings.custom_fields.custom_field_confirm_delete"),yesLabel:i("general.ok"),noLabel:i("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async g=>{g&&(await v.deleteCustomFields(b),n.loadData&&n.loadData())})}return(b,g)=>{const y=d("BaseIcon"),I=d("BaseDropdownItem"),B=d("BaseDropdown");return C(),F(B,null,{activator:u(()=>[l(y,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:u(()=>[t(f).hasAbilities(t(P).EDIT_CUSTOM_FIELDS)?(C(),F(I,{key:0,onClick:g[0]||(g[0]=o=>p(m.row.id))},{default:u(()=>[l(y,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+$(b.$t("general.edit")),1)]),_:1})):M("",!0),t(f).hasAbilities(t(P).DELETE_CUSTOM_FIELDS)?(C(),F(I,{key:1,onClick:g[1]||(g[1]=o=>V(m.row.id))},{default:u(()=>[l(y,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+$(b.$t("general.delete")),1)]),_:1})):M("",!0)]),_:1})}}},$e={class:"flex items-center mt-1"},Ie={emits:["onAdd"],setup(m,{emit:n}){const e=x(null);function i(){if(e.value==null||e.value==""||e.value==null)return!0;n("onAdd",e.value),e.value=null}return(v,f)=>{const c=d("BaseInput"),p=d("BaseIcon");return C(),z("div",$e,[l(c,{modelValue:e.value,"onUpdate:modelValue":f[0]||(f[0]=V=>e.value=V),type:"text",class:"w-full md:w-96",placeholder:v.$t("settings.custom_fields.press_enter_to_add"),onClick:i,onKeydown:pe(se(i,["prevent","stop"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),l(p,{name:"PlusCircleIcon",class:"ml-1 text-primary-500 cursor-pointer",onClick:i})])}}};function Be(m){switch(m){case"../../custom-fields/types/DateTimeType.vue":return T(()=>import("./DateTimeType.885ed58f.js"),["assets/DateTimeType.885ed58f.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/DateType.vue":return T(()=>import("./DateType.7fd6d385.js"),["assets/DateType.7fd6d385.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/DropdownType.vue":return T(()=>import("./DropdownType.84b4a057.js"),["assets/DropdownType.84b4a057.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/InputType.vue":return T(()=>import("./InputType.abbc9e84.js"),["assets/InputType.abbc9e84.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/NumberType.vue":return T(()=>import("./NumberType.bae67e72.js"),["assets/NumberType.bae67e72.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/PhoneType.vue":return T(()=>import("./PhoneType.f1778217.js"),["assets/PhoneType.f1778217.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/SwitchType.vue":return T(()=>import("./SwitchType.56df61e7.js"),["assets/SwitchType.56df61e7.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/TextAreaType.vue":return T(()=>import("./TextAreaType.a1bccab5.js"),["assets/TextAreaType.a1bccab5.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/TimeType.vue":return T(()=>import("./TimeType.82e5beb3.js"),["assets/TimeType.82e5beb3.js","assets/vendor.e9042f2c.js"]);case"../../custom-fields/types/UrlType.vue":return T(()=>import("./UrlType.803fb838.js"),["assets/UrlType.803fb838.js","assets/vendor.e9042f2c.js"]);default:return new Promise(function(n,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+m)))})}}const De={class:"flex justify-between w-full"},he=["onSubmit"],Ve={class:"overflow-y-auto max-h-[550px]"},Se={class:"px-4 md:px-8 py-8 overflow-y-auto sm:p-6"},Ee={class:"z-0 flex justify-end p-4 border-t border-solid border-gray-light border-modal-bg"},qe={setup(m){const n=Y(),e=K(),{t:i}=H();let v=x(!1);const f=le(["Customer","Invoice","Estimate","Expense","Payment"]),c=le([{label:"Text",value:"Input"},{label:"Textarea",value:"TextArea"},{label:"Phone",value:"Phone"},{label:"URL",value:"Url"},{label:"Number",value:"Number"},{label:"Select Field",value:"Dropdown"},{label:"Switch Toggle",value:"Switch"},{label:"Date",value:"Date"},{label:"Time",value:"Time"},{label:"Date & Time",value:"DateTime"}]);let p=x(c[0]);const V=h(()=>n.active&&n.componentName==="CustomFieldModal"),b=h(()=>p.value&&p.value.label==="Switch Toggle"),g=h(()=>p.value&&p.value.label==="Select Field"),y=h(()=>e.currentCustomField.type?_e(()=>Be(`../../custom-fields/types/${e.currentCustomField.type}Type.vue`)):!1),I=h({get:()=>e.currentCustomField.is_required===1,set:s=>{const a=s?1:0;e.currentCustomField.is_required=a}}),B=h(()=>({currentCustomField:{type:{required:k.withMessage(i("validation.required"),A)},name:{required:k.withMessage(i("validation.required"),A)},label:{required:k.withMessage(i("validation.required"),A)},model_type:{required:k.withMessage(i("validation.required"),A)},order:{required:k.withMessage(i("validation.required"),A),numeric:k.withMessage(i("validation.numbers_only"),fe)},type:{required:k.withMessage(i("validation.required"),A)}}})),o=ye(B,h(()=>e));function S(){e.isEdit?p.value=c.find(s=>s.value==e.currentCustomField.type):(e.currentCustomField.model_type=f[0],e.currentCustomField.type=c[0].value)}async function L(){if(o.value.currentCustomField.$touch(),o.value.currentCustomField.$invalid)return!0;v.value=!0;let s=ee({},e.currentCustomField);if(e.currentCustomField.options&&(s.options=e.currentCustomField.options.map(E=>E.name)),s.type=="Time"&&typeof s.default_answer=="object"){let E=s&&s.default_answer&&s.default_answer.HH?s.default_answer.HH:null,q=s&&s.default_answer&&s.default_answer.mm?s.default_answer.mm:null;s&&s.default_answer&&s.default_answer.ss&&s.default_answer.ss,s.default_answer=`${E}:${q}`}await(e.isEdit?e.updateCustomField:e.addCustomField)(s),v.value=!1,n.refreshData&&n.refreshData(),R()}function j(s){e.currentCustomField.options=[{name:s},...e.currentCustomField.options]}function _(s){if(e.isEdit&&e.currentCustomField.in_use)return;e.currentCustomField.options[s].name===e.currentCustomField.default_answer&&(e.currentCustomField.default_answer=null),e.currentCustomField.options.splice(s,1)}function N(s){e.currentCustomField.type=s.value}function R(){n.closeModal(),setTimeout(()=>{e.resetCurrentCustomField(),o.value.$reset()},300)}return(s,a)=>{const E=d("BaseIcon"),q=d("BaseInput"),w=d("BaseInputGroup"),J=d("BaseMultiselect"),re=d("BaseSwitch"),ne=d("BaseInputGrid"),X=d("BaseButton"),ue=d("BaseModal");return C(),F(ue,{show:t(V),onOpen:S},{header:u(()=>[O("div",De,[D($(t(n).title)+" ",1),l(E,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:R})])]),default:u(()=>[O("form",{action:"",onSubmit:se(L,["prevent"])},[O("div",Ve,[O("div",Se,[l(ne,{layout:"one-column"},{default:u(()=>[l(w,{label:s.$t("settings.custom_fields.name"),required:"",error:t(o).currentCustomField.name.$error&&t(o).currentCustomField.name.$errors[0].$message},{default:u(()=>[l(q,{ref:(r,U)=>{U.name=r},modelValue:t(e).currentCustomField.name,"onUpdate:modelValue":a[0]||(a[0]=r=>t(e).currentCustomField.name=r),invalid:t(o).currentCustomField.name.$error,onInput:a[1]||(a[1]=r=>t(o).currentCustomField.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),l(w,{label:s.$t("settings.custom_fields.model"),error:t(o).currentCustomField.model_type.$error&&t(o).currentCustomField.model_type.$errors[0].$message,"help-text":t(e).currentCustomField.in_use?s.$t("settings.custom_fields.model_in_use"):"",required:""},{default:u(()=>[l(J,{modelValue:t(e).currentCustomField.model_type,"onUpdate:modelValue":a[2]||(a[2]=r=>t(e).currentCustomField.model_type=r),options:t(f),"can-deselect":!1,invalid:t(o).currentCustomField.model_type.$error,searchable:!0,disabled:t(e).currentCustomField.in_use,onInput:a[3]||(a[3]=r=>t(o).currentCustomField.model_type.$touch())},null,8,["modelValue","options","invalid","disabled"])]),_:1},8,["label","error","help-text"]),l(w,{class:"flex items-center space-x-4",label:s.$t("settings.custom_fields.required")},{default:u(()=>[l(re,{modelValue:t(I),"onUpdate:modelValue":a[4]||(a[4]=r=>oe(I)?I.value=r:null)},null,8,["modelValue"])]),_:1},8,["label"]),l(w,{label:s.$t("settings.custom_fields.type"),error:t(o).currentCustomField.type.$error&&t(o).currentCustomField.type.$errors[0].$message,"help-text":t(e).currentCustomField.in_use?s.$t("settings.custom_fields.type_in_use"):"",required:""},{default:u(()=>[l(J,{modelValue:t(p),"onUpdate:modelValue":[a[5]||(a[5]=r=>oe(p)?p.value=r:p=r),N],options:t(c),invalid:t(o).currentCustomField.type.$error,disabled:t(e).currentCustomField.in_use,searchable:!0,"can-deselect":!1,object:""},null,8,["modelValue","options","invalid","disabled"])]),_:1},8,["label","error","help-text"]),l(w,{label:s.$t("settings.custom_fields.label"),required:"",error:t(o).currentCustomField.label.$error&&t(o).currentCustomField.label.$errors[0].$message},{default:u(()=>[l(q,{modelValue:t(e).currentCustomField.label,"onUpdate:modelValue":a[6]||(a[6]=r=>t(e).currentCustomField.label=r),invalid:t(o).currentCustomField.label.$error,onInput:a[7]||(a[7]=r=>t(o).currentCustomField.label.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),t(g)?(C(),F(w,{key:0,label:s.$t("settings.custom_fields.options")},{default:u(()=>[l(Ie,{onOnAdd:j}),(C(!0),z(Ce,null,ve(t(e).currentCustomField.options,(r,U)=>(C(),z("div",{key:U,class:"flex items-center mt-5"},[l(q,{modelValue:r.name,"onUpdate:modelValue":Q=>r.name=Q,class:"w-64"},null,8,["modelValue","onUpdate:modelValue"]),l(E,{name:"MinusCircleIcon",class:G(["ml-1 cursor-pointer",t(e).currentCustomField.in_use?"text-gray-300":"text-red-300"]),onClick:Q=>_(U)},null,8,["class","onClick"])]))),128))]),_:1},8,["label"])):M("",!0),l(w,{label:s.$t("settings.custom_fields.default_value"),class:"relative"},{default:u(()=>[(C(),F(be(t(y)),{modelValue:t(e).currentCustomField.default_answer,"onUpdate:modelValue":a[8]||(a[8]=r=>t(e).currentCustomField.default_answer=r),options:t(e).currentCustomField.options,"default-date-time":t(e).currentCustomField.dateTimeValue},null,8,["modelValue","options","default-date-time"]))]),_:1},8,["label"]),t(b)?M("",!0):(C(),F(w,{key:1,label:s.$t("settings.custom_fields.placeholder")},{default:u(()=>[l(q,{modelValue:t(e).currentCustomField.placeholder,"onUpdate:modelValue":a[9]||(a[9]=r=>t(e).currentCustomField.placeholder=r)},null,8,["modelValue"])]),_:1},8,["label"])),l(w,{label:s.$t("settings.custom_fields.order"),error:t(o).currentCustomField.order.$error&&t(o).currentCustomField.order.$errors[0].$message,required:""},{default:u(()=>[l(q,{modelValue:t(e).currentCustomField.order,"onUpdate:modelValue":a[10]||(a[10]=r=>t(e).currentCustomField.order=r),type:"number",invalid:t(o).currentCustomField.order.$error,onInput:a[11]||(a[11]=r=>t(o).currentCustomField.order.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),_:1})])]),O("div",Ee,[l(X,{class:"mr-3",type:"button",variant:"primary-outline",onClick:R},{default:u(()=>[D($(s.$t("general.cancel")),1)]),_:1}),l(X,{variant:"primary",loading:t(v),disabled:t(v),type:"submit"},{left:u(r=>[t(v)?M("",!0):(C(),F(E,{key:0,class:G(r.class),name:"SaveIcon"},null,8,["class"]))]),default:u(()=>[D(" "+$(t(e).isEdit?s.$t("general.update"):s.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,he)]),_:1},8,["show"])}}},ke={class:"text-xs text-gray-500"},Pe={setup(m){const n=Y(),e=K(),i=ae(),v=te("utils"),{t:f}=H(),c=x(null),p=h(()=>[{key:"name",label:f("settings.custom_fields.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"model_type",label:f("settings.custom_fields.model")},{key:"type",label:f("settings.custom_fields.type")},{key:"is_required",label:f("settings.custom_fields.required")},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function V({page:y,filter:I,sort:B}){let o={orderByField:B.fieldName||"created_at",orderBy:B.order||"desc",page:y},S=await e.fetchCustomFields(o);return{data:S.data.data,pagination:{totalPages:S.data.meta.last_page,currentPage:y,limit:5,totalCount:S.data.meta.total}}}function b(){n.openModal({title:f("settings.custom_fields.add_custom_field"),componentName:"CustomFieldModal",size:"sm",refreshData:c.value&&c.value.refresh})}async function g(){c.value&&c.value.refresh()}return(y,I)=>{const B=d("BaseIcon"),o=d("BaseButton"),S=d("BaseBadge"),L=d("BaseTable"),j=d("BaseSettingCard");return C(),F(j,{title:y.$t("settings.menu_title.custom_fields"),description:y.$t("settings.custom_fields.section_description")},{action:u(()=>[t(i).hasAbilities(t(P).CREATE_CUSTOM_FIELDS)?(C(),F(o,{key:0,variant:"primary-outline",onClick:b},{left:u(_=>[l(B,{class:G(_.class),name:"PlusIcon"},null,8,["class"]),D(" "+$(y.$t("settings.custom_fields.add_custom_field")),1)]),_:1})):M("",!0)]),default:u(()=>[l(qe),l(L,{ref:(_,N)=>{N.table=_,c.value=_},data:V,columns:t(p),class:"mt-16"},ge({"cell-name":u(({row:_})=>[D($(_.data.name)+" ",1),O("span",ke," ("+$(_.data.slug)+")",1)]),"cell-is_required":u(({row:_})=>[l(S,{"bg-color":t(v).getBadgeStatusColor(_.data.is_required?"YES":"NO").bgColor,color:t(v).getBadgeStatusColor(_.data.is_required?"YES":"NO").color},{default:u(()=>[D($(_.data.is_required?y.$t("settings.custom_fields.yes"):y.$t("settings.custom_fields.no").replace("_"," ")),1)]),_:2},1032,["bg-color","color"])]),_:2},[t(i).hasAbilities([t(P).DELETE_CUSTOM_FIELDS,t(P).EDIT_CUSTOM_FIELDS])?{name:"cell-actions",fn:u(({row:_})=>[l(we,{row:_.data,table:c.value,"load-data":g},null,8,["row","table"])])}:void 0]),1032,["columns"])]),_:1},8,["title","description"])}}};export{Pe as default};
