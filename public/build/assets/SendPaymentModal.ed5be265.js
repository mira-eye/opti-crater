import{i as R,u as Y,o as G,d as Q,g as O,e as S,c as Z,v as ee}from"./main.c4ed6aa9.js";import{g as F,u as te,C as ae,am as oe,r as d,o as m,s as p,w as o,y as e,b as a,v as y,x as v,A as B,i as x,j as ne,k as z,m as k,n as E,a2 as H,q as re,t as C,c as W,z as se}from"./vendor.e9042f2c.js";const be={props:{row:{type:Object,default:null},table:{type:Object,default:null},contentLoading:{type:Boolean,default:!1}},setup(w){const I=w,j=R(),_=Y(),{t:$}=F(),g=G(),l=te(),M=ae(),c=Q(),q=O(),r=oe("utils");function A(i){j.openDialog({title:$("general.are_you_sure"),message:$("payments.confirm_delete",1),yesLabel:$("general.ok"),noLabel:$("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(async t=>{if(t)return await g.deletePayment({ids:[i]}),M.push("/admin/payments"),I.table&&I.table.refresh(),!0})}function T(){var t;let i=`${window.location.origin}/payments/pdf/${(t=I.row)==null?void 0:t.unique_hash}`;r.copyTextToClipboard(i),_.showNotification({type:"success",message:$("general.copied_pdf_url_clipboard")})}async function D(i){q.openModal({title:$("payments.send_payment"),componentName:"SendPaymentModal",id:i.id,data:i,variant:"lg"})}return(i,t)=>{const b=d("BaseIcon"),U=d("BaseButton"),V=d("BaseDropdown-item"),f=d("BaseDropdownItem"),s=d("router-link"),n=d("BaseDropdown");return m(),p(n,{"content-loading":w.contentLoading},{activator:o(()=>[e(l).name==="payments.view"?(m(),p(U,{key:0,variant:"primary"},{default:o(()=>[a(b,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(m(),p(b,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:o(()=>[e(l).name==="payments.view"&&e(c).hasAbilities(e(S).VIEW_PAYMENT)?(m(),p(V,{key:0,class:"rounded-md",onClick:T},{default:o(()=>[a(b,{name:"LinkIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),y(" "+v(i.$t("general.copy_pdf_url")),1)]),_:1})):B("",!0),e(c).hasAbilities(e(S).EDIT_PAYMENT)?(m(),p(s,{key:1,to:`/admin/payments/${w.row.id}/edit`},{default:o(()=>[a(f,null,{default:o(()=>[a(b,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),y(" "+v(i.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):B("",!0),e(l).name!=="payments.view"&&e(c).hasAbilities(e(S).VIEW_PAYMENT)?(m(),p(s,{key:2,to:`/admin/payments/${w.row.id}/view`},{default:o(()=>[a(f,null,{default:o(()=>[a(b,{name:"EyeIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),y(" "+v(i.$t("general.view")),1)]),_:1})]),_:1},8,["to"])):B("",!0),w.row.status!=="SENT"&&e(l).name!=="payments.view"&&e(c).hasAbilities(e(S).SEND_PAYMENT)?(m(),p(f,{key:3,onClick:t[0]||(t[0]=h=>D(w.row))},{default:o(()=>[a(b,{name:"PaperAirplaneIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),y(" "+v(i.$t("payments.send_payment")),1)]),_:1})):B("",!0),e(c).hasAbilities(e(S).DELETE_PAYMENT)?(m(),p(f,{key:4,onClick:t[1]||(t[1]=h=>A(w.row.id))},{default:o(()=>[a(b,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),y(" "+v(i.$t("general.delete")),1)]),_:1})):B("",!0)]),_:1},8,["content-loading"])}}},le={class:"flex justify-between w-full"},ie={key:0,action:""},ue={class:"px-8 py-8 sm:p-6"},de={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},me={key:1},ce={class:"my-6 mx-4 border border-gray-200 relative"},pe=y(" Edit "),ye=["src"],fe={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},we={setup(w){const I=G(),j=Z(),_=O(),$=Y();ee(),R();const{t:g}=F();let l=x(!1);const M=x(""),c=x(!1),q=x(["customer","customerCustom","payments","paymentsCustom","company"]),r=ne({id:null,from:null,to:null,subject:"New Payment",body:null}),A=z(()=>_.active&&_.componentName==="SendPaymentModal"),T=z(()=>_.title),D=z(()=>_.data),i={from:{required:k.withMessage(g("validation.required"),E),email:k.withMessage(g("validation.email_incorrect"),H)},to:{required:k.withMessage(g("validation.required"),E),email:k.withMessage(g("validation.email_incorrect"),H)},subject:{required:k.withMessage(g("validation.required"),E)},body:{required:k.withMessage(g("validation.required"),E)}},t=re(i,r);function b(){c.value=!1}async function U(){let s=await j.fetchBasicMailConfig();r.id=_.id,s.data&&(r.from=s.data.from_mail),D.value&&(r.to=D.value.customer.email),r.body=j.selectedCompanySettings.payment_mail_body}async function V(){if(t.value.$touch(),t.value.$invalid)return!0;try{if(l.value=!0,!c.value){const h=await I.previewPayment(r);l.value=!1,c.value=!0;var s=new Blob([h.data],{type:"text/html"});M.value=URL.createObjectURL(s);return}if((await I.sendEmail(r)).data.success)return f(),!0}catch{l.value=!1,$.showNotification({type:"error",message:g("payments.something_went_wrong")})}}function f(){setTimeout(()=>{t.value.$reset(),c.value=!1,M.value=null,_.resetModalData()},300)}return(s,n)=>{const h=d("BaseIcon"),L=d("BaseInput"),N=d("BaseInputGroup"),X=d("BaseCustomInput"),J=d("BaseInputGrid"),P=d("BaseButton"),K=d("BaseModal");return m(),p(K,{show:e(A),onClose:f,onOpen:U},{header:o(()=>[C("div",le,[y(v(e(T))+" ",1),a(h,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:f})])]),default:o(()=>[c.value?(m(),W("div",me,[C("div",ce,[a(P,{class:"absolute top-4 right-4",disabled:e(l),variant:"primary-outline",onClick:b},{default:o(()=>[a(h,{name:"PencilIcon",class:"h-5 mr-2"}),pe]),_:1},8,["disabled"]),C("iframe",{src:M.value,frameborder:"0",class:"w-full",style:{"min-height":"500px"}},null,8,ye)]),C("div",fe,[a(P,{class:"mr-3",variant:"primary-outline",type:"button",onClick:f},{default:o(()=>[y(v(s.$t("general.cancel")),1)]),_:1}),a(P,{loading:e(l),disabled:e(l),variant:"primary",type:"button",onClick:n[7]||(n[7]=u=>V())},{default:o(()=>[e(l)?B("",!0):(m(),p(h,{key:0,name:"PaperAirplaneIcon",class:"h-5 mr-2"})),y(" "+v(s.$t("general.send")),1)]),_:1},8,["loading","disabled"])])])):(m(),W("form",ie,[C("div",ue,[a(J,{layout:"one-column",class:"col-span-7"},{default:o(()=>[a(N,{label:s.$t("general.from"),required:"",error:e(t).from.$error&&e(t).from.$errors[0].$message},{default:o(()=>[a(L,{modelValue:e(r).from,"onUpdate:modelValue":n[0]||(n[0]=u=>e(r).from=u),type:"text",invalid:e(t).from.$error,onInput:n[1]||(n[1]=u=>e(t).from.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(N,{label:s.$t("general.to"),required:"",error:e(t).to.$error&&e(t).to.$errors[0].$message},{default:o(()=>[a(L,{modelValue:e(r).to,"onUpdate:modelValue":n[2]||(n[2]=u=>e(r).to=u),type:"text",invalid:e(t).to.$error,onInput:n[3]||(n[3]=u=>e(t).to.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),a(N,{error:e(t).subject.$error&&e(t).subject.$errors[0].$message,label:s.$t("general.subject"),required:""},{default:o(()=>[a(L,{modelValue:e(r).subject,"onUpdate:modelValue":n[4]||(n[4]=u=>e(r).subject=u),type:"text",invalid:e(t).subject.$error,onInput:n[5]||(n[5]=u=>e(t).subject.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["error","label"]),a(N,{label:s.$t("general.body"),error:e(t).body.$error&&e(t).body.$errors[0].$message,required:""},{default:o(()=>[a(X,{modelValue:e(r).body,"onUpdate:modelValue":n[6]||(n[6]=u=>e(r).body=u),fields:q.value},null,8,["modelValue","fields"])]),_:1},8,["label","error"])]),_:1})]),C("div",de,[a(P,{class:"mr-3",variant:"primary-outline",type:"button",onClick:f},{default:o(()=>[y(v(s.$t("general.cancel")),1)]),_:1}),a(P,{loading:e(l),disabled:e(l),variant:"primary",type:"button",class:"mr-3",onClick:V},{left:o(u=>[e(l)?B("",!0):(m(),p(h,{key:0,class:se(u.class),name:"PhotographIcon"},null,8,["class"]))]),default:o(()=>[y(" "+v(s.$t("general.preview")),1)]),_:1},8,["loading","disabled"])])]))]),_:1},8,["show"])}}};export{we as _,be as a};
