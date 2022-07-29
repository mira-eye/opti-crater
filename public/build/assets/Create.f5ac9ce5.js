var W=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var k=(m,a,o)=>a in m?W(m,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):m[a]=o,G=(m,a)=>{for(var o in a||(a={}))Z.call(a,o)&&k(m,o,a[o]);if(S)for(var o of S(a))x.call(a,o)&&k(m,o,a[o]);return m},L=(m,a)=>X(m,Y(a));import{g as ee,u as ae,C as te,i as w,k as V,m as p,n as $,p as N,a2 as oe,aU as se,q as ne,r as d,o as b,s as h,w as i,b as s,y as e,t as q,c as re,H as le,V as ue,F as ie,z as de,A as me,v as ce,x as pe,B as ge}from"./vendor.e9042f2c.js";import{A as fe,c as ve}from"./main.c4ed6aa9.js";const $e=["onSubmit"],De={class:"grid grid-cols-12"},Be={class:"space-y-6"},Ve={setup(m){const a=fe(),{t:o}=ee(),y=ae(),P=te(),j=ve();let g=w(!1),l=w(!1);w([]);let I=w([]);const f=V(()=>y.name==="users.edit"),U=V(()=>f.value?o("users.edit_user"):o("users.new_user")),A=V(()=>({userData:{name:{required:p.withMessage(o("validation.required"),$),minLength:p.withMessage(o("validation.name_min_length",{count:3}),N(3))},email:{required:p.withMessage(o("validation.required"),$),email:p.withMessage(o("validation.email_incorrect"),oe)},password:{required:se(function(){return p.withMessage(o("validation.required"),$),!f.value}),minLength:p.withMessage(o("validation.password_min_length",{count:8}),N(8))},companies:{required:p.withMessage(o("validation.required"),$)}}})),E={role:{required:p.withMessage(o("validation.required"),$)}},n=ne(A,a,{$scope:!0});F(),a.resetUserData();async function F(){var u;l.value=!0;try{f.value&&await a.fetchUser(y.params.id);let t=await j.fetchUserCompanies();((u=t==null?void 0:t.data)==null?void 0:u.data)&&(I.value=t.data.data.map(c=>(c.role=null,c)))}catch{l.value=!1}l.value=!1}async function H(){if(n.value.$touch(),n.value.$invalid)return!0;try{g.value=!0;let u=L(G({},a.userData),{companies:a.userData.companies.map(c=>({role:c.role,id:c.id}))});await(f.value?a.updateUser:a.addUser)(u),P.push("/admin/users"),g.value=!1}catch{g.value=!1}}return(u,t)=>{const c=d("BaseBreadcrumbItem"),R=d("BaseBreadcrumb"),z=d("BasePageHeader"),D=d("BaseInput"),v=d("BaseInputGroup"),M=d("BaseMultiselect"),T=d("BaseInputGrid"),J=d("BaseIcon"),K=d("BaseButton"),O=d("BaseCard"),Q=d("BasePage");return b(),h(Q,null,{default:i(()=>[s(z,{title:e(U)},{default:i(()=>[s(R,null,{default:i(()=>[s(c,{title:u.$t("general.home"),to:"dashboard"},null,8,["title"]),s(c,{title:u.$tc("users.user",2),to:"/admin/users"},null,8,["title"]),s(c,{title:e(U),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),q("form",{action:"",autocomplete:"off",onSubmit:ge(H,["prevent"])},[q("div",De,[s(O,{class:"mt-6 col-span-12 md:col-span-8"},{default:i(()=>[s(T,{layout:"one-column"},{default:i(()=>[s(v,{"content-loading":e(l),label:u.$t("users.name"),error:e(n).userData.name.$error&&e(n).userData.name.$errors[0].$message,required:""},{default:i(()=>[s(D,{modelValue:e(a).userData.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(a).userData.name=r),modelModifiers:{trim:!0},"content-loading":e(l),invalid:e(n).userData.name.$error,onInput:t[1]||(t[1]=r=>e(n).userData.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error"]),s(v,{"content-loading":e(l),label:u.$t("users.email"),error:e(n).userData.email.$error&&e(n).userData.email.$errors[0].$message,required:""},{default:i(()=>[s(D,{modelValue:e(a).userData.email,"onUpdate:modelValue":t[2]||(t[2]=r=>e(a).userData.email=r),modelModifiers:{trim:!0},type:"email","content-loading":e(l),invalid:e(n).userData.email.$error,onInput:t[3]||(t[3]=r=>e(n).userData.email.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error"]),s(v,{"content-loading":e(l),label:u.$t("users.companies"),error:e(n).userData.companies.$error&&e(n).userData.companies.$errors[0].$message,required:""},{default:i(()=>[s(M,{modelValue:e(a).userData.companies,"onUpdate:modelValue":t[4]||(t[4]=r=>e(a).userData.companies=r),mode:"tags",object:!0,autocomplete:"new-password",label:"name",options:e(I),"value-prop":"id",invalid:e(n).userData.companies.$error,"content-loading":e(l),searchable:"","can-deselect":!1,class:"w-full"},null,8,["modelValue","options","invalid","content-loading"])]),_:1},8,["content-loading","label","error"]),(b(!0),re(ie,null,le(e(a).userData.companies,(r,B)=>(b(),h(e(ue),{key:B,state:r,rules:E},{default:i(({v:_})=>[q("div",Be,[s(v,{"content-loading":e(l),label:u.$t("users.select_company_role",{company:r.name}),error:_.role.$error&&_.role.$errors[0].$message,required:""},{default:i(()=>[s(M,{modelValue:e(a).userData.companies[B].role,"onUpdate:modelValue":C=>e(a).userData.companies[B].role=C,"value-prop":"name","track-by":"id",autocomplete:"off","content-loading":e(l),label:"name",options:e(a).userData.companies[B].roles,"can-deselect":!1,invalid:_.role.$invalid,onChange:C=>_.role.$touch()},null,8,["modelValue","onUpdate:modelValue","content-loading","options","invalid","onChange"])]),_:2},1032,["content-loading","label","error"])])]),_:2},1032,["state"]))),128)),s(v,{"content-loading":e(l),label:u.$tc("users.password"),error:e(n).userData.password.$error&&e(n).userData.password.$errors[0].$message,required:!e(f)},{default:i(()=>[s(D,{modelValue:e(a).userData.password,"onUpdate:modelValue":t[5]||(t[5]=r=>e(a).userData.password=r),name:"new-password",autocomplete:"new-password","content-loading":e(l),type:"password",invalid:e(n).userData.password.$error,onInput:t[6]||(t[6]=r=>e(n).userData.password.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["content-loading","label","error","required"]),s(v,{"content-loading":e(l),label:u.$t("users.phone")},{default:i(()=>[s(D,{modelValue:e(a).userData.phone,"onUpdate:modelValue":t[7]||(t[7]=r=>e(a).userData.phone=r),modelModifiers:{trim:!0},"content-loading":e(l)},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"])]),_:1}),s(K,{"content-loading":e(l),type:"submit",loading:e(g),disabled:e(g),class:"mt-6"},{left:i(r=>[e(g)?me("",!0):(b(),h(J,{key:0,name:"SaveIcon",class:de(r.class)},null,8,["class"]))]),default:i(()=>[ce(" "+pe(e(f)?u.$t("users.update_user"):u.$t("users.save_user")),1)]),_:1},8,["content-loading","loading","disabled"])]),_:1})])],40,$e)]),_:1})}}};export{Ve as default};
