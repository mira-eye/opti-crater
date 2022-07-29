import{g as k,u as T,am as j,r,o as p,s as f,w as t,y as c,b as u,v as z,x as S,A as C,i as E,k as O,c as F,z as P,F as G,j as V}from"./vendor.e9042f2c.js";import{i as x,u as I,r as A,d as M,g as $,e as D}from"./main.c4ed6aa9.js";import{_ as H}from"./NoteModal.ce9830bd.js";const L={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(g){const d=g,N=x(),_=I(),{t:a}=k(),o=A(),h=T(),y=M(),b=$();j("utils");function w(n){o.fetchNote(n),b.openModal({title:a("settings.customization.notes.edit_note"),componentName:"NoteModal",size:"md",refreshData:d.loadData})}function s(n){N.openDialog({title:a("general.are_you_sure"),message:a("settings.customization.notes.note_confirm_delete"),yesLabel:a("general.yes"),noLabel:a("general.no"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async()=>{(await o.deleteNote(n)).data.success?_.showNotification({type:"success",message:a("settings.customization.notes.deleted_message")}):_.showNotification({type:"error",message:a("settings.customization.notes.already_in_use")}),d.loadData&&d.loadData()})}return(n,e)=>{const i=r("BaseIcon"),m=r("BaseButton"),B=r("BaseDropdownItem"),l=r("BaseDropdown");return p(),f(l,null,{activator:t(()=>[c(h).name==="notes.view"?(p(),f(m,{key:0,variant:"primary"},{default:t(()=>[u(i,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),f(i,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[c(y).hasAbilities(c(D).MANAGE_NOTE)?(p(),f(B,{key:0,onClick:e[0]||(e[0]=v=>w(g.row.id))},{default:t(()=>[u(i,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),z(" "+S(n.$t("general.edit")),1)]),_:1})):C("",!0),c(y).hasAbilities(c(D).MANAGE_NOTE)?(p(),f(B,{key:1,onClick:e[1]||(e[1]=v=>s(g.row.id))},{default:t(()=>[u(i,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),z(" "+S(n.$t("general.delete")),1)]),_:1})):C("",!0)]),_:1})}}},J={setup(g){const{t:d}=k(),N=$();x();const _=A();I();const a=M(),o=E(""),h=O(()=>[{key:"name",label:d("settings.customization.notes.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"type",label:d("settings.customization.notes.type"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function y({page:s,filter:n,sort:e}){let i=V({orderByField:e.fieldName||"created_at",orderBy:e.order||"desc",page:s}),m=await _.fetchNotes(i);return{data:m.data.data,pagination:{totalPages:m.data.meta.last_page,currentPage:s,totalCount:m.data.meta.total,limit:5}}}async function b(){await N.openModal({title:d("settings.customization.notes.add_note"),componentName:"NoteModal",size:"md",refreshData:o.value&&o.value.refresh})}async function w(){o.value&&o.value.refresh()}return(s,n)=>{const e=r("BaseIcon"),i=r("BaseButton"),m=r("BaseTable"),B=r("BaseSettingCard");return p(),F(G,null,[u(H),u(B,{title:s.$t("settings.customization.notes.title"),description:s.$t("settings.customization.notes.description")},{action:t(()=>[c(a).hasAbilities(c(D).MANAGE_NOTE)?(p(),f(i,{key:0,variant:"primary-outline",onClick:b},{left:t(l=>[u(e,{class:P(l.class),name:"PlusIcon"},null,8,["class"])]),default:t(()=>[z(" "+S(s.$t("settings.customization.notes.add_note")),1)]),_:1})):C("",!0)]),default:t(()=>[u(m,{ref:(l,v)=>{v.table=l,o.value=l},data:y,columns:c(h),class:"mt-14"},{"cell-actions":t(({row:l})=>[u(L,{row:l.data,table:o.value,"load-data":w},null,8,["row","table"])]),_:1},8,["columns"])]),_:1},8,["title","description"])],64)}}};export{J as default};
