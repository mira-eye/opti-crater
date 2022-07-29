import{g as j,j as C,i as b,h as r,k as M,D as L,M as F,r as i,o as I,c as N,t as c,b as t,w as m,y as p,v as U,x as P,B as z,s as K,z as X}from"./vendor.e9042f2c.js";import{m as W,c as H}from"./main.c4ed6aa9.js";const Z={class:"grid gap-8 md:grid-cols-12 pt-10"},ee={class:"col-span-8 md:col-span-4"},te={class:"flex flex-col my-6 lg:space-x-3 lg:flex-row"},ae=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),oe={class:"col-span-8"},re=["src"],ne={setup(G){const{t:h}=j(),v=W();v.downloadReport=x;const u=C([h("dateRange.today"),h("dateRange.this_week"),h("dateRange.this_month"),h("dateRange.this_quarter"),h("dateRange.this_year"),h("dateRange.previous_week"),h("dateRange.previous_month"),h("dateRange.previous_quarter"),h("dateRange.previous_year"),h("dateRange.custom")]),$=b(["By Customer","By Item"]),o=b("By Customer"),k=b(h("dateRange.this_month"));let w=b(new Date),D=b(null),e=b(null),y=b(null),s=C({from_date:r().startOf("month").format("YYYY-MM-DD").toString(),to_date:r().endOf("month").format("YYYY-MM-DD").toString()});const O=H(),n=M(()=>D.value),d=M(()=>O.selectedCompany),V=M(()=>`${e.value}?from_date=${r(s.from_date).format("YYYY-MM-DD")}&to_date=${r(s.to_date).format("YYYY-MM-DD")}`),T=M(()=>`${y.value}?from_date=${r(s.from_date).format("YYYY-MM-DD")}&to_date=${r(s.to_date).format("YYYY-MM-DD")}`);L(w,f=>{s.from_date=r(f).startOf("year").toString(),s.to_date=r(f).endOf("year").toString()}),F(()=>{e.value=`/reports/sales/customers/${d.value.unique_hash}`,y.value=`/reports/sales/items/${d.value.unique_hash}`,l()});function _(f,Y){return r()[f](Y).format("YYYY-MM-DD")}function B(f,Y){return r().subtract(1,Y)[f](Y).format("YYYY-MM-DD")}function a(){switch(k.value){case"Today":s.from_date=r().format("YYYY-MM-DD"),s.to_date=r().format("YYYY-MM-DD");break;case"This Week":s.from_date=_("startOf","isoWeek"),s.to_date=_("endOf","isoWeek");break;case"This Month":s.from_date=_("startOf","month"),s.to_date=_("endOf","month");break;case"This Quarter":s.from_date=_("startOf","quarter"),s.to_date=_("endOf","quarter");break;case"This Year":s.from_date=_("startOf","year"),s.to_date=_("endOf","year");break;case"Previous Week":s.from_date=B("startOf","isoWeek"),s.to_date=B("endOf","isoWeek");break;case"Previous Month":s.from_date=B("startOf","month"),s.to_date=B("endOf","month");break;case"Previous Quarter":s.from_date=B("startOf","quarter"),s.to_date=B("endOf","quarter");break;case"Previous Year":s.from_date=B("startOf","year"),s.to_date=B("endOf","year");break}}async function l(){return o.value==="By Customer"?(D.value=V.value,!0):(D.value=T.value,!0)}async function S(){let f=await R();return window.open(n.value,"_blank"),f}function R(){return o.value==="By Customer"?(D.value=V.value,!0):(D.value=T.value,!0)}function x(){if(!R())return!1;window.open(n.value+"&download=true"),setTimeout(()=>o.value==="By Customer"?(D.value=V.value,!0):(D.value=T.value,!0),200)}return(f,Y)=>{const g=i("BaseMultiselect"),Q=i("BaseInputGroup"),E=i("BaseDatePicker"),A=i("BaseButton"),J=i("BaseIcon");return I(),N("div",Z,[c("div",ee,[t(Q,{label:f.$t("reports.sales.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[t(g,{modelValue:k.value,"onUpdate:modelValue":[Y[0]||(Y[0]=q=>k.value=q),a],options:p(u)},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",te,[t(Q,{label:f.$t("reports.sales.from_date")},{default:m(()=>[t(E,{modelValue:p(s).from_date,"onUpdate:modelValue":Y[1]||(Y[1]=q=>p(s).from_date=q)},null,8,["modelValue"])]),_:1},8,["label"]),ae,t(Q,{label:f.$t("reports.sales.to_date")},{default:m(()=>[t(E,{modelValue:p(s).to_date,"onUpdate:modelValue":Y[2]||(Y[2]=q=>p(s).to_date=q)},null,8,["modelValue"])]),_:1},8,["label"])]),t(Q,{label:f.$t("reports.sales.report_type"),class:"col-span-12 md:col-span-8"},{default:m(()=>[t(g,{modelValue:o.value,"onUpdate:modelValue":[Y[3]||(Y[3]=q=>o.value=q),l],options:$.value,placeholder:f.$t("reports.sales.report_type"),class:"mt-1"},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),t(A,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:z(R,["prevent"])},{default:m(()=>[U(P(f.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",oe,[c("iframe",{src:p(n),class:"hidden w-full h-screen h-screen-ios border-gray-100 border-solid rounded md:flex"},null,8,re),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:S},[t(J,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,P(f.$t("reports.view_pdf")),1)])])])}}},se={class:"grid gap-8 md:grid-cols-12 pt-10"},le={class:"col-span-8 md:col-span-4"},de={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},ue=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),ie={class:"col-span-8"},ce=["src"],me={setup(G){const h=W(),v=H(),{t:u}=j();h.downloadReport=B;const $=C([u("dateRange.today"),u("dateRange.this_week"),u("dateRange.this_month"),u("dateRange.this_quarter"),u("dateRange.this_year"),u("dateRange.previous_week"),u("dateRange.previous_month"),u("dateRange.previous_quarter"),u("dateRange.previous_year"),u("dateRange.custom")]),o=b(u("dateRange.this_month"));let k=b(new Date),w=b(null),D=b(null);const e=C({from_date:r().startOf("month").toString(),to_date:r().endOf("month").toString()}),y=M(()=>w.value),s=M(()=>v.selectedCompany),O=M(()=>`${D.value}?from_date=${r(e.from_date).format("YYYY-MM-DD")}&to_date=${r(e.to_date).format("YYYY-MM-DD")}`);F(()=>{D.value=`/reports/expenses/${s.value.unique_hash}`,w.value=O.value}),L(()=>k,a=>{e.from_date=r(a).startOf("year").toString(),e.to_date=r(a).endOf("year").toString()});function n(a,l){return r()[a](l).format("YYYY-MM-DD")}function d(a,l){return r().subtract(1,l)[a](l).format("YYYY-MM-DD")}function V(){switch(o.value){case"Today":e.from_date=r().format("YYYY-MM-DD"),e.to_date=r().format("YYYY-MM-DD");break;case"This Week":e.from_date=n("startOf","isoWeek"),e.to_date=n("endOf","isoWeek");break;case"This Month":e.from_date=n("startOf","month"),e.to_date=n("endOf","month");break;case"This Quarter":e.from_date=n("startOf","quarter"),e.to_date=n("endOf","quarter");break;case"This Year":e.from_date=n("startOf","year"),e.to_date=n("endOf","year");break;case"Previous Week":e.from_date=d("startOf","isoWeek"),e.to_date=d("endOf","isoWeek");break;case"Previous Month":e.from_date=d("startOf","month"),e.to_date=d("endOf","month");break;case"Previous Quarter":e.from_date=d("startOf","quarter"),e.to_date=d("endOf","quarter");break;case"Previous Year":e.from_date=d("startOf","year"),e.to_date=d("endOf","year");break}}async function T(){let a=await _();return window.open(y.value,"_blank"),a}function _(){return w.value=O.value,!0}function B(){!_(),window.open(y.value+"&download=true"),setTimeout(()=>{w.value=O.value},200)}return(a,l)=>{const S=i("BaseMultiselect"),R=i("BaseInputGroup"),x=i("BaseDatePicker"),f=i("BaseButton"),Y=i("BaseIcon");return I(),N("div",se,[c("div",le,[t(R,{label:a.$t("reports.sales.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[t(S,{modelValue:o.value,"onUpdate:modelValue":[l[0]||(l[0]=g=>o.value=g),V],options:p($)},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",de,[t(R,{label:a.$t("reports.expenses.from_date")},{default:m(()=>[t(x,{modelValue:p(e).from_date,"onUpdate:modelValue":l[1]||(l[1]=g=>p(e).from_date=g)},null,8,["modelValue"])]),_:1},8,["label"]),ue,t(R,{label:a.$t("reports.expenses.to_date")},{default:m(()=>[t(x,{modelValue:p(e).to_date,"onUpdate:modelValue":l[2]||(l[2]=g=>p(e).to_date=g)},null,8,["modelValue"])]),_:1},8,["label"])]),t(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:z(_,["prevent"])},{default:m(()=>[U(P(a.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",ie,[c("iframe",{src:p(y),class:"hidden w-full h-screen h-screen-ios border-gray-100 border-solid rounded md:flex"},null,8,ce),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500 cursor-pointer",onClick:T},[t(Y,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,P(a.$t("reports.view_pdf")),1)])])])}}},pe={class:"grid gap-8 md:grid-cols-12 pt-10"},fe={class:"col-span-8 md:col-span-4"},_e={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},ge=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),he={class:"col-span-8"},ve=["src"],Ye={setup(G){const h=W(),v=H(),{t:u}=j();h.downloadReport=B;const $=C([u("dateRange.today"),u("dateRange.this_week"),u("dateRange.this_month"),u("dateRange.this_quarter"),u("dateRange.this_year"),u("dateRange.previous_week"),u("dateRange.previous_month"),u("dateRange.previous_quarter"),u("dateRange.previous_year"),u("dateRange.custom")]),o=b(u("dateRange.this_month"));let k=b(null),w=b(null),D=b(new Date);const e=C({from_date:r().startOf("month").toString(),to_date:r().endOf("month").toString()}),y=M(()=>k.value),s=M(()=>v.selectedCompany),O=M(()=>`${w.value}?from_date=${r(e.from_date).format("YYYY-MM-DD")}&to_date=${r(e.to_date).format("YYYY-MM-DD")}`);L(D,a=>{e.from_date=r(a).startOf("year").toString(),e.to_date=r(a).endOf("year").toString()}),F(()=>{w.value=`/reports/profit-loss/${s.value.unique_hash}`,k.value=O.value});function n(a,l){return r()[a](l).format("YYYY-MM-DD")}function d(a,l){return r().subtract(1,l)[a](l).format("YYYY-MM-DD")}function V(){switch(o.value){case"Today":e.from_date=r().format("YYYY-MM-DD"),e.to_date=r().format("YYYY-MM-DD");break;case"This Week":e.from_date=n("startOf","isoWeek"),e.to_date=n("endOf","isoWeek");break;case"This Month":e.from_date=n("startOf","month"),e.to_date=n("endOf","month");break;case"This Quarter":e.from_date=n("startOf","quarter"),e.to_date=n("endOf","quarter");break;case"This Year":e.from_date=n("startOf","year"),e.to_date=n("endOf","year");break;case"Previous Week":e.from_date=d("startOf","isoWeek"),e.to_date=d("endOf","isoWeek");break;case"Previous Month":e.from_date=d("startOf","month"),e.to_date=d("endOf","month");break;case"Previous Quarter":e.from_date=d("startOf","quarter"),e.to_date=d("endOf","quarter");break;case"Previous Year":e.from_date=d("startOf","year"),e.to_date=d("endOf","year");break}}async function T(){let a=await _();return window.open(y.value,"_blank"),a}function _(){return k.value=O.value,!0}function B(){!_(),window.open(y.value+"&download=true"),setTimeout(()=>{k.value=O.value},200)}return(a,l)=>{const S=i("BaseMultiselect"),R=i("BaseInputGroup"),x=i("BaseDatePicker"),f=i("BaseButton"),Y=i("BaseIcon");return I(),N("div",pe,[c("div",fe,[t(R,{label:a.$t("reports.profit_loss.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[t(S,{modelValue:o.value,"onUpdate:modelValue":[l[0]||(l[0]=g=>o.value=g),V],options:p($)},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",_e,[t(R,{label:a.$t("reports.profit_loss.from_date")},{default:m(()=>[t(x,{modelValue:p(e).from_date,"onUpdate:modelValue":l[1]||(l[1]=g=>p(e).from_date=g)},null,8,["modelValue"])]),_:1},8,["label"]),ge,t(R,{label:a.$t("reports.profit_loss.to_date")},{default:m(()=>[t(x,{modelValue:p(e).to_date,"onUpdate:modelValue":l[2]||(l[2]=g=>p(e).to_date=g)},null,8,["modelValue"])]),_:1},8,["label"])]),t(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:z(_,["prevent"])},{default:m(()=>[U(P(a.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",he,[c("iframe",{src:p(y),class:"hidden w-full h-screen h-screen-ios border-gray-100 border-solid rounded md:flex"},null,8,ve),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:T},[t(Y,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,P(a.$t("reports.view_pdf")),1)])])])}}},be={class:"grid gap-8 md:grid-cols-12 pt-10"},ye={class:"col-span-8 md:col-span-4"},ke={class:"flex flex-col mt-6 lg:space-x-3 lg:flex-row"},De=c("div",{class:"hidden w-5 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"2.5rem"}},null,-1),we={class:"col-span-8"},Re=["src"],Be={setup(G){const h=W();h.downloadReport=B;const{t:v}=j(),u=C([v("dateRange.today"),v("dateRange.this_week"),v("dateRange.this_month"),v("dateRange.this_quarter"),v("dateRange.this_year"),v("dateRange.previous_week"),v("dateRange.previous_month"),v("dateRange.previous_quarter"),v("dateRange.previous_year"),v("dateRange.custom")]),$=b(v("dateRange.this_month")),o=C({from_date:r().startOf("month").format("YYYY-MM-DD").toString(),to_date:r().endOf("month").format("YYYY-MM-DD").toString()});let k=b(null);const w=M(()=>k.value),D=H(),e=M(()=>D.selectedCompany);let y=b(null);F(()=>{y.value=`/reports/tax-summary/${e.value.unique_hash}`,k.value=s.value});const s=M(()=>`${y.value}?from_date=${r(o.from_date).format("YYYY-MM-DD")}&to_date=${r(o.to_date).format("YYYY-MM-DD")}`);let O=b(new Date);L(O.value,a=>{o.from_date=r(a).startOf("year").toString(),o.to_date=r(a).endOf("year").toString()});function n(a,l){return r()[a](l).format("YYYY-MM-DD")}function d(a,l){return r().subtract(1,l)[a](l).format("YYYY-MM-DD")}function V(){switch($.value){case"Today":o.from_date=r().format("YYYY-MM-DD"),o.to_date=r().format("YYYY-MM-DD");break;case"This Week":o.from_date=n("startOf","isoWeek"),o.to_date=n("endOf","isoWeek");break;case"This Month":o.from_date=n("startOf","month"),o.to_date=n("endOf","month");break;case"This Quarter":o.from_date=n("startOf","quarter"),o.to_date=n("endOf","quarter");break;case"This Year":o.from_date=n("startOf","year"),o.to_date=n("endOf","year");break;case"Previous Week":o.from_date=d("startOf","isoWeek"),o.to_date=d("endOf","isoWeek");break;case"Previous Month":o.from_date=d("startOf","month"),o.to_date=d("endOf","month");break;case"Previous Quarter":o.from_date=d("startOf","quarter"),o.to_date=d("endOf","quarter");break;case"Previous Year":o.from_date=d("startOf","year"),o.to_date=d("endOf","year");break}}async function T(){let a=await _();return window.open(w.value,"_blank"),a}function _(){return k.value=s.value,!0}function B(){!_(),window.open(w.value+"&download=true"),setTimeout(()=>{k.value=s.value},200)}return(a,l)=>{const S=i("BaseMultiselect"),R=i("BaseInputGroup"),x=i("BaseDatePicker"),f=i("BaseButton"),Y=i("BaseIcon");return I(),N("div",be,[c("div",ye,[t(R,{label:a.$t("reports.taxes.date_range"),class:"col-span-12 md:col-span-8"},{default:m(()=>[t(S,{modelValue:$.value,"onUpdate:modelValue":[l[0]||(l[0]=g=>$.value=g),V],options:p(u)},null,8,["modelValue","options"])]),_:1},8,["label"]),c("div",ke,[t(R,{label:a.$t("reports.taxes.from_date")},{default:m(()=>[t(x,{modelValue:p(o).from_date,"onUpdate:modelValue":l[1]||(l[1]=g=>p(o).from_date=g)},null,8,["modelValue"])]),_:1},8,["label"]),De,t(R,{label:a.$t("reports.taxes.to_date")},{default:m(()=>[t(x,{modelValue:p(o).to_date,"onUpdate:modelValue":l[2]||(l[2]=g=>p(o).to_date=g)},null,8,["modelValue"])]),_:1},8,["label"])]),t(f,{variant:"primary-outline",class:"content-center hidden mt-0 w-md md:flex md:mt-8",type:"submit",onClick:z(_,["prevent"])},{default:m(()=>[U(P(a.$t("reports.update_report")),1)]),_:1},8,["onClick"])]),c("div",we,[c("iframe",{src:p(w),class:"hidden w-full h-screen h-screen-ios border-gray-100 border-solid rounded md:flex"},null,8,Re),c("a",{class:"flex items-center justify-center h-10 px-5 py-1 text-sm font-medium leading-none text-center text-white rounded whitespace-nowrap md:hidden bg-primary-500",onClick:T},[t(Y,{name:"DocumentTextIcon",class:"h-5 mr-2"}),c("span",null,P(a.$t("reports.view_pdf")),1)])])])}}},$e={setup(G){const h=W();function v(){h.downloadReport()}return(u,$)=>{const o=i("BaseBreadcrumbItem"),k=i("BaseBreadcrumb"),w=i("BaseIcon"),D=i("BaseButton"),e=i("BasePageHeader"),y=i("BaseTab"),s=i("BaseTabGroup"),O=i("BasePage");return I(),K(O,null,{default:m(()=>[t(e,{title:u.$tc("reports.report",2)},{actions:m(()=>[t(D,{variant:"primary",class:"ml-4",onClick:v},{left:m(n=>[t(w,{name:"DownloadIcon",class:X(n.class)},null,8,["class"])]),default:m(()=>[U(" "+P(u.$t("reports.download_pdf")),1)]),_:1})]),default:m(()=>[t(k,null,{default:m(()=>[t(o,{title:u.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),t(o,{title:u.$tc("reports.report",2),to:"/admin/reports",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),t(s,{class:"p-2"},{default:m(()=>[t(y,{title:u.$t("reports.sales.sales"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[t(ne,{ref:(n,d)=>{d.report=n}},null,512)]),_:1},8,["title"]),t(y,{title:u.$t("reports.profit_loss.profit_loss"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[t(Ye,{ref:(n,d)=>{d.report=n}},null,512)]),_:1},8,["title"]),t(y,{title:u.$t("reports.expenses.expenses"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[t(me,{ref:(n,d)=>{d.report=n}},null,512)]),_:1},8,["title"]),t(y,{title:u.$t("reports.taxes.taxes"),"tab-panel-container":"px-0 py-0"},{default:m(()=>[t(Be,{ref:(n,d)=>{d.report=n}},null,512)]),_:1},8,["title"])]),_:1})]),_:1})}}};export{$e as default};
