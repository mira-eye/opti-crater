var A=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var V=(n,e,i)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,k=(n,e)=>{for(var i in e||(e={}))Q.call(e,i)&&V(n,i,e[i]);if(q)for(var i of q(e))W.call(e,i)&&V(n,i,e[i]);return n},L=(n,e)=>J(n,K(e));import{r as s,o as g,c as j,b as o,y as t,w as c,g as X,u as Y,C as Z,i as M,k as y,m,n as I,a4 as ee,aU as ne,O as te,q as oe,D as ie,t as B,s as h,x as P,A as F,z as ae,v as se,B as ce,F as le}from"./vendor.e9042f2c.js";import{f as T,c as re,l as de}from"./main.c4ed6aa9.js";import{_ as ue,a as me,b as ve,c as ge,d as pe,e as fe}from"./ItemModal.550811d2.js";import{_ as _e}from"./ExchangeRateConverter.723e246f.js";import{_ as Ie}from"./CreateCustomFields.b3e72776.js";import{_ as be}from"./TaxTypeModal.e84ae727.js";import"./DragIcon.9fdb0cc4.js";import"./SelectNotePopup.957765bc.js";import"./NoteModal.ce9830bd.js";const we={class:"grid grid-cols-12 gap-8 mt-6 mb-8"},$e={props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1}},setup(n){const e=T();return(i,l)=>{const r=s("BaseCustomerSelectPopup"),b=s("BaseDatePicker"),p=s("BaseInputGroup"),f=s("BaseInput"),u=s("BaseInputGrid");return g(),j("div",we,[o(r,{modelValue:t(e).newInvoice.customer,"onUpdate:modelValue":l[0]||(l[0]=d=>t(e).newInvoice.customer=d),valid:n.v.customer_id,"content-loading":n.isLoading,type:"invoice",class:"col-span-12 lg:col-span-5 pr-0"},null,8,["modelValue","valid","content-loading"]),o(u,{class:"col-span-12 lg:col-span-7"},{default:c(()=>[o(p,{label:i.$t("invoices.invoice_date"),"content-loading":n.isLoading,required:"",error:n.v.invoice_date.$error&&n.v.invoice_date.$errors[0].$message},{default:c(()=>[o(b,{modelValue:t(e).newInvoice.invoice_date,"onUpdate:modelValue":l[1]||(l[1]=d=>t(e).newInvoice.invoice_date=d),"content-loading":n.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),o(p,{label:i.$t("invoices.due_date"),"content-loading":n.isLoading,required:"",error:n.v.due_date.$error&&n.v.due_date.$errors[0].$message},{default:c(()=>[o(b,{modelValue:t(e).newInvoice.due_date,"onUpdate:modelValue":l[2]||(l[2]=d=>t(e).newInvoice.due_date=d),"content-loading":n.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),o(p,{label:i.$t("invoices.invoice_number"),"content-loading":n.isLoading,error:n.v.invoice_number.$error&&n.v.invoice_number.$errors[0].$message,required:""},{default:c(()=>[o(f,{modelValue:t(e).newInvoice.invoice_number,"onUpdate:modelValue":l[3]||(l[3]=d=>t(e).newInvoice.invoice_number=d),"content-loading":n.isLoading,onInput:l[4]||(l[4]=d=>n.v.invoice_number.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),o(_e,{store:t(e),"store-prop":"newInvoice",v:n.v,"is-loading":n.isLoading,"is-edit":n.isEdit,"customer-currency":t(e).newInvoice.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1})])}}},ye=["onSubmit"],Be={class:"flex"},he={class:"block mt-10 invoice-foot lg:flex lg:justify-between lg:items-start"},Ce={class:"relative w-full lg:w-1/2 lg:mr-4"},xe={setup(n){const e=T(),i=re(),l=de(),{t:r}=X();let b=Y(),p=Z();const f="newInvoice";let u=M(!1);const d=M(["customer","company","customerCustom","invoice","invoiceCustom"]);let w=y(()=>e.isFetchingInvoice||e.isFetchingInitialSettings),x=y(()=>_.value?r("invoices.edit_invoice"):r("invoices.new_invoice")),_=y(()=>b.name==="invoices.edit");const N={invoice_date:{required:m.withMessage(r("validation.required"),I)},due_date:{required:m.withMessage(r("validation.required"),I)},reference_number:{maxLength:m.withMessage(r("validation.price_maxlength"),ee(255))},customer_id:{required:m.withMessage(r("validation.required"),I)},invoice_number:{required:m.withMessage(r("validation.required"),I)},exchange_rate:{required:ne(function(){return m.withMessage(r("validation.required"),I),e.showExchangeRate}),decimal:m.withMessage(r("validation.valid_exchange_rate"),te)}},$=oe(N,y(()=>e.newInvoice),{$scope:f});l.resetCustomFields(),$.value.$reset,e.resetCurrentInvoice(),e.fetchInvoiceInitialSettings(_.value),ie(()=>e.newInvoice.customer,a=>{a&&a.currency?e.newInvoice.selectedCurrency=a.currency:e.newInvoice.selectedCurrency=i.selectedCompanyCurrency});async function E(){if($.value.$touch(),$.value.$invalid)return!1;u.value=!0;let a=L(k({},e.newInvoice),{sub_total:e.getSubTotal,total:e.getTotal,tax:e.getTotalTax});try{const v=await(_.value?e.updateInvoice:e.addInvoice)(a);p.push(`/admin/invoices/${v.data.data.id}/view`)}catch(C){console.error(C)}u.value=!1}return(a,C)=>{const v=s("BaseBreadcrumbItem"),D=s("BaseBreadcrumb"),S=s("BaseButton"),U=s("router-link"),G=s("BaseIcon"),R=s("BasePageHeader"),z=s("BaseScrollPane"),H=s("BasePage");return g(),j(le,null,[o(ue),o(me),o(be),o(H,{class:"relative invoice-create-page"},{default:c(()=>[B("form",{onSubmit:ce(E,["prevent"])},[o(R,{title:t(x)},{actions:c(()=>[a.$route.name==="invoices.edit"?(g(),h(U,{key:0,to:`/invoices/pdf/${t(e).newInvoice.unique_hash}`,target:"_blank"},{default:c(()=>[o(S,{class:"mr-3",variant:"primary-outline",type:"button"},{default:c(()=>[B("span",Be,P(a.$t("general.view_pdf")),1)]),_:1})]),_:1},8,["to"])):F("",!0),o(S,{loading:t(u),disabled:t(u),variant:"primary",type:"submit"},{left:c(O=>[t(u)?F("",!0):(g(),h(G,{key:0,name:"SaveIcon",class:ae(O.class)},null,8,["class"]))]),default:c(()=>[se(" "+P(a.$t("invoices.save_invoice")),1)]),_:1},8,["loading","disabled"])]),default:c(()=>[o(D,null,{default:c(()=>[o(v,{title:a.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),o(v,{title:a.$tc("invoices.invoice",2),to:"/admin/invoices"},null,8,["title"]),a.$route.name==="invoices.edit"?(g(),h(v,{key:0,title:a.$t("invoices.edit_invoice"),to:"#",active:""},null,8,["title"])):(g(),h(v,{key:1,title:a.$t("invoices.new_invoice"),to:"#",active:""},null,8,["title"]))]),_:1})]),_:1},8,["title"]),o($e,{v:t($),"is-loading":t(w),"is-edit":t(_)},null,8,["v","is-loading","is-edit"]),o(z,null,{default:c(()=>[o(ve,{currency:t(e).newInvoice.selectedCurrency,"is-loading":t(w),"item-validation-scope":f,store:t(e),"store-prop":"newInvoice"},null,8,["currency","is-loading","store"]),B("div",he,[B("div",Ce,[o(ge,{store:t(e),"store-prop":"newInvoice",fields:d.value,type:"Invoice"},null,8,["store","fields"]),o(Ie,{type:"Invoice","is-edit":t(_),"is-loading":t(w),store:t(e),"store-prop":"newInvoice","custom-field-scope":f,class:"mb-6"},null,8,["is-edit","is-loading","store"]),o(pe,{store:t(e),"store-prop":"newInvoice","component-name":"InvoiceTemplate"},null,8,["store"])]),o(fe,{currency:t(e).newInvoice.selectedCurrency,"is-loading":t(w),store:t(e),"store-prop":"newInvoice","tax-popup-type":"invoice"},null,8,["currency","is-loading","store"])])]),_:1})],40,ye)]),_:1})],64)}}};export{xe as default};
