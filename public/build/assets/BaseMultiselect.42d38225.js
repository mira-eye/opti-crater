var Xe=Object.defineProperty,Ye=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var Be=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var qe=(e,n,a)=>n in e?Xe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,G=(e,n)=>{for(var a in n||(n={}))$e.call(n,a)&&qe(e,a,n[a]);if(Be)for(var a of Be(n))_e.call(n,a)&&qe(e,a,n[a]);return e},Te=(e,n)=>Ye(e,Ze(n));import{b5 as H,i as M,k as w,D as re,b6 as Ce,r as De,o as I,s as el,w as ll,b as al,c as B,z as O,B as ve,A as E,F as ae,H as se,W as C,v as tl,x as Q,t as P}from"./vendor.e9042f2c.js";import{_ as nl}from"./main.c4ed6aa9.js";function F(e){return[null,void 0,!1].indexOf(e)!==-1}function rl(e,n,a){const{object:i,valueProp:o,mode:v}=H(e),f=a.iv,g=p=>{f.value=c(p);const b=t(p);n.emit("change",b),n.emit("input",b),n.emit("update:modelValue",b)},t=p=>i.value||F(p)?p:Array.isArray(p)?p.map(b=>b[o.value]):p[o.value],c=p=>F(p)?v.value==="single"?{}:[]:p;return{update:g}}function sl(e,n){const{value:a,modelValue:i,mode:o,valueProp:v}=H(e),f=M(o.value!=="single"?[]:{}),g=n.expose!==void 0?i:a,t=w(()=>o.value==="single"?f.value[v.value]:f.value.map(p=>p[v.value])),c=w(()=>o.value!=="single"?f.value.map(p=>p[v.value]).join(","):f.value[v.value]);return{iv:f,internalValue:f,ev:g,externalValue:g,textValue:c,plainValue:t}}function ul(e,n,a){const{preserveSearch:i}=H(e),o=M(e.initialSearch)||M(null),v=M(null),f=()=>{i.value||(o.value="")},g=c=>{o.value=c.target.value},t=c=>{n.emit("paste",c)};return re(o,c=>{n.emit("search-change",c)}),{search:o,input:v,clearSearch:f,handleSearchInput:g,handlePaste:t}}function ol(e,n,a){const{groupSelect:i,mode:o,groups:v}=H(e),f=M(null),g=c=>{c===void 0||c!==null&&c.disabled||v.value&&c&&c.group&&(o.value==="single"||!i.value)||(f.value=c)};return{pointer:f,setPointer:g,clearPointer:()=>{g(null)}}}function Ee(e,n=!0){return n?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().trim()}function il(e){return Object.prototype.toString.call(e)==="[object Object]"}function cl(e,n){const a=n.slice().sort();return e.length===n.length&&e.slice().sort().every(function(i,o){return i===a[o]})}function dl(e,n,a){const{options:i,mode:o,trackBy:v,limit:f,hideSelected:g,createTag:t,label:c,appendNewTag:p,multipleLabel:b,object:q,loading:V,delay:D,resolveOnLoad:m,minChars:s,filterResults:x,clearOnSearch:Z,clearOnSelect:k,valueProp:d,canDeselect:R,max:L,strict:U,closeOnSelect:X,groups:$,groupLabel:ue,groupOptions:A,groupHideEmpty:pe,groupSelect:fe}=H(e),S=a.iv,z=a.ev,T=a.search,_=a.clearSearch,ee=a.update,ge=a.pointer,oe=a.clearPointer,K=a.blur,te=a.deactivate,r=M([]),h=M([]),j=M(!1),N=w(()=>{if($.value){let l=h.value||[],u=[];return l.forEach(y=>{ke(y[A.value]).forEach(J=>{u.push(Object.assign({},J,y.disabled?{disabled:!0}:{}))})}),u}else{let l=ke(h.value||[]);return r.value.length&&(l=l.concat(r.value)),l}}),Oe=w(()=>$.value?Je((h.value||[]).map(l=>{const u=ke(l[A.value]);return Te(G({},l),{group:!0,[A.value]:Se(u,!1).map(y=>Object.assign({},y,l.disabled?{disabled:!0}:{})),__VISIBLE__:Se(u).map(y=>Object.assign({},y,l.disabled?{disabled:!0}:{}))})})):[]),ie=w(()=>{let l=N.value;return me.value.length&&(l=me.value.concat(l)),l=Se(l),f.value>0&&(l=l.slice(0,f.value)),l}),be=w(()=>{switch(o.value){case"single":return!F(S.value[d.value]);case"multiple":case"tags":return!F(S.value)&&S.value.length>0}}),Ve=w(()=>b!==void 0&&b.value!==void 0?b.value(S.value):S.value&&S.value.length>1?`${S.value.length} options selected`:"1 option selected"),Re=w(()=>!N.value.length&&!j.value&&!me.value.length),je=w(()=>N.value.length>0&&ie.value.length==0&&(T.value&&$.value||!$.value)),me=w(()=>t.value===!1||!T.value?[]:ze(T.value)!==-1?[]:[{[d.value]:T.value,[c.value]:T.value,[v.value]:T.value}]),Ge=w(()=>{switch(o.value){case"single":return null;case"multiple":case"tags":return[]}}),xe=w(()=>V.value||j.value),ne=l=>{switch(typeof l!="object"&&(l=W(l)),o.value){case"single":ee(l);break;case"multiple":case"tags":ee(S.value.concat(l));break}n.emit("select",Le(l),l)},le=l=>{switch(typeof l!="object"&&(l=W(l)),o.value){case"single":Ie();break;case"tags":case"multiple":ee(Array.isArray(l)?S.value.filter(u=>l.map(y=>y[d.value]).indexOf(u[d.value])===-1):S.value.filter(u=>u[d.value]!=l[d.value]));break}n.emit("deselect",Le(l),l)},Le=l=>q.value?l:l[d.value],Pe=l=>{le(l)},Ae=(l,u)=>{if(u.button!==0){u.preventDefault();return}Pe(l)},Ie=()=>{n.emit("clear"),ee(Ge.value)},Y=l=>{if(l.group!==void 0)return o.value==="single"?!1:Fe(l[A.value])&&l[A.value].length;switch(o.value){case"single":return!F(S.value)&&S.value[d.value]==l[d.value];case"tags":case"multiple":return!F(S.value)&&S.value.map(u=>u[d.value]).indexOf(l[d.value])!==-1}},he=l=>l.disabled===!0,ye=()=>L===void 0||L.value===-1||!be.value&&L.value>0?!1:S.value.length>=L.value,Me=l=>{if(!he(l)){switch(o.value){case"single":if(Y(l)){R.value&&le(l);return}K(),ne(l);break;case"multiple":if(Y(l)){le(l);return}if(ye())return;ne(l),k.value&&_(),g.value&&oe(),X.value&&K();break;case"tags":if(Y(l)){le(l);return}if(ye())return;W(l[d.value])===void 0&&t.value&&(n.emit("tag",l[d.value]),p.value&&Ke(l),_()),k.value&&_(),ne(l),g.value&&oe(),X.value&&K();break}X.value&&te()}},Ne=l=>{if(!(he(l)||o.value==="single"||!fe.value)){switch(o.value){case"multiple":case"tags":He(l[A.value])?le(l[A.value]):ne(l[A.value].filter(u=>S.value.map(y=>y[d.value]).indexOf(u[d.value])===-1).filter(u=>!u.disabled).filter((u,y)=>S.value.length+1+y<=L.value||L.value===-1));break}X.value&&te()}},He=l=>l.find(u=>!Y(u)&&!u.disabled)===void 0,Fe=l=>l.find(u=>!Y(u))===void 0,W=l=>N.value[N.value.map(u=>String(u[d.value])).indexOf(String(l))],ze=(l,u=!0)=>N.value.map(y=>y[v.value]).indexOf(l),We=l=>["tags","multiple"].indexOf(o.value)!==-1&&g.value&&Y(l),Ke=l=>{r.value.push(l)},Je=l=>pe.value?l.filter(u=>T.value?u.__VISIBLE__.length:u[A.value].length):l.filter(u=>T.value?u.__VISIBLE__.length:!0),Se=(l,u=!0)=>{let y=l;return T.value&&x.value&&(y=y.filter(J=>Ee(J[v.value],U.value).indexOf(Ee(T.value,U.value))!==-1)),g.value&&u&&(y=y.filter(J=>!We(J))),y},ke=l=>{let u=l;return il(u)&&(u=Object.keys(u).map(y=>{let J=u[y];return{[d.value]:y,[v.value]:J,[c.value]:J}})),u=u.map(y=>typeof y=="object"?y:{[d.value]:y,[v.value]:y,[c.value]:y}),u},ce=()=>{F(z.value)||(S.value=de(z.value))},we=l=>{j.value=!0,i.value(T.value).then(u=>{h.value=u,typeof l=="function"&&l(u),j.value=!1})},Qe=()=>{if(!!be.value)if(o.value==="single"){let l=W(S.value[d.value])[c.value];S.value[c.value]=l,q.value&&(z.value[c.value]=l)}else S.value.forEach((l,u)=>{let y=W(S.value[u][d.value])[c.value];S.value[u][c.value]=y,q.value&&(z.value[u][c.value]=y)})},Ue=l=>{we(l)},de=l=>F(l)?o.value==="single"?{}:[]:q.value?l:o.value==="single"?W(l)||{}:l.filter(u=>!!W(u)).map(u=>W(u));if(o.value!=="single"&&!F(z.value)&&!Array.isArray(z.value))throw new Error(`v-model must be an array when using "${o.value}" mode`);return i&&typeof i.value=="function"?m.value?we(ce):q.value==!0&&ce():(h.value=i.value,ce()),D.value>-1&&re(T,l=>{l.length<s.value||(j.value=!0,Z.value&&(h.value=[]),setTimeout(()=>{l==T.value&&i.value(T.value).then(u=>{l==T.value&&(h.value=u,ge.value=ie.value.filter(y=>y.disabled!==!0)[0]||null,j.value=!1)})},D.value))},{flush:"sync"}),re(z,l=>{if(F(l)){S.value=de(l);return}switch(o.value){case"single":(q.value?l[d.value]!=S.value[d.value]:l!=S.value[d.value])&&(S.value=de(l));break;case"multiple":case"tags":cl(q.value?l.map(u=>u[d.value]):l,S.value.map(u=>u[d.value]))||(S.value=de(l));break}},{deep:!0}),typeof e.options!="function"&&re(i,(l,u)=>{h.value=e.options,Object.keys(S.value).length||ce(),Qe()}),{fo:ie,filteredOptions:ie,hasSelected:be,multipleLabelText:Ve,eo:N,extendedOptions:N,fg:Oe,filteredGroups:Oe,noOptions:Re,noResults:je,resolving:j,busy:xe,select:ne,deselect:le,remove:Pe,clear:Ie,isSelected:Y,isDisabled:he,isMax:ye,getOption:W,handleOptionClick:Me,handleGroupClick:Ne,handleTagRemove:Ae,refreshOptions:Ue,resolveOptions:we}}function vl(e,n,a){const{valueProp:i,showOptions:o,searchable:v,groupLabel:f,groups:g,mode:t,groupSelect:c}=H(e),p=a.fo,b=a.fg,q=a.handleOptionClick,V=a.handleGroupClick,D=a.search,m=a.pointer,s=a.setPointer,x=a.clearPointer,Z=a.multiselect,k=w(()=>p.value.filter(r=>!r.disabled)),d=w(()=>b.value.filter(r=>!r.disabled)),R=w(()=>t.value!=="single"&&c.value),L=w(()=>m.value&&m.value.group),U=w(()=>K(m.value)),X=w(()=>{const r=L.value?m.value:K(m.value),h=d.value.map(N=>N[f.value]).indexOf(r[f.value]);let j=d.value[h-1];return j===void 0&&(j=ue.value),j}),$=w(()=>{let r=d.value.map(h=>h.label).indexOf(L.value?m.value[f.value]:K(m.value)[f.value])+1;return d.value.length<=r&&(r=0),d.value[r]}),ue=w(()=>[...d.value].slice(-1)[0]),A=w(()=>m.value.__VISIBLE__.filter(r=>!r.disabled)[0]),pe=w(()=>{const r=U.value.__VISIBLE__.filter(h=>!h.disabled);return r[r.map(h=>h[i.value]).indexOf(m.value[i.value])-1]}),fe=w(()=>{const r=K(m.value).__VISIBLE__.filter(h=>!h.disabled);return r[r.map(h=>h[i.value]).indexOf(m.value[i.value])+1]}),S=w(()=>[...X.value.__VISIBLE__.filter(r=>!r.disabled)].slice(-1)[0]),z=w(()=>[...ue.value.__VISIBLE__.filter(r=>!r.disabled)].slice(-1)[0]),T=r=>{if(!!m.value)return r.group?m.value[f.value]==r[f.value]:m.value[i.value]==r[i.value]},_=()=>{s(k.value[0]||null)},ee=()=>{!m.value||m.value.disabled===!0||(L.value?V(m.value):q(m.value))},ge=()=>{if(m.value===null)s((g.value&&R.value?d.value[0]:k.value[0])||null);else if(g.value&&R.value){let r=L.value?A.value:fe.value;r===void 0&&(r=$.value),s(r||null)}else{let r=k.value.map(h=>h[i.value]).indexOf(m.value[i.value])+1;k.value.length<=r&&(r=0),s(k.value[r]||null)}Ce(()=>{te()})},oe=()=>{if(m.value===null){let r=k.value[k.value.length-1];g.value&&R.value&&(r=z.value,r===void 0&&(r=ue.value)),s(r||null)}else if(g.value&&R.value){let r=L.value?S.value:pe.value;r===void 0&&(r=L.value?X.value:U.value),s(r||null)}else{let r=k.value.map(h=>h[i.value]).indexOf(m.value[i.value])-1;r<0&&(r=k.value.length-1),s(k.value[r]||null)}Ce(()=>{te()})},K=r=>d.value.find(h=>h.__VISIBLE__.map(j=>j[i.value]).indexOf(r[i.value])!==-1),te=()=>{let r=Z.value.querySelector("[data-pointed]");if(!r)return;let h=r.parentElement.parentElement;g.value&&(h=L.value?r.parentElement.parentElement.parentElement:r.parentElement.parentElement.parentElement.parentElement),r.offsetTop+r.offsetHeight>h.clientHeight+h.scrollTop&&(h.scrollTop=r.offsetTop+r.offsetHeight-h.clientHeight),r.offsetTop<h.scrollTop&&(h.scrollTop=r.offsetTop)};return re(D,r=>{v.value&&(r.length&&o.value?_():x())}),{pointer:m,canPointGroups:R,isPointed:T,setPointerFirst:_,selectPointer:ee,forwardPointer:ge,backwardPointer:oe}}function pl(e,n,a){const{disabled:i}=H(e),o=M(!1);return{isOpen:o,open:()=>{o.value||i.value||(o.value=!0,n.emit("open"))},close:()=>{!o.value||(o.value=!1,n.emit("close"))}}}function fl(e,n,a){const{searchable:i,disabled:o}=H(e),v=a.input,f=a.open,g=a.close,t=a.clearSearch,c=M(null),p=M(!1),b=w(()=>i.value||o.value?-1:0),q=()=>{i.value&&v.value.blur(),c.value.blur()},V=()=>{i.value&&!o.value&&v.value.focus()},D=()=>{o.value||(p.value=!0,f())},m=()=>{p.value=!1,setTimeout(()=>{p.value||(g(),t())},1)};return{multiselect:c,tabindex:b,isActive:p,blur:q,handleFocus:V,activate:D,deactivate:m,handleCaretClick:()=>{p.value?(m(),q()):D()}}}function gl(e,n,a){const{mode:i,addTagOn:o,createTag:v,openDirection:f,searchable:g,showOptions:t,valueProp:c,groups:p}=H(e),b=a.iv,q=a.update,V=a.search,D=a.setPointer,m=a.selectPointer,s=a.backwardPointer,x=a.forwardPointer,Z=a.blur,k=a.fo,d=()=>{i.value==="tags"&&!t.value&&v.value&&g.value&&!p.value&&D(k.value[k.value.map(L=>L[c.value]).indexOf(V.value)])};return{handleKeydown:L=>{switch(L.keyCode){case 8:if(i.value==="single"||g.value&&[null,""].indexOf(V.value)===-1||b.value.length===0)return;q([...b.value].slice(0,-1));break;case 13:if(L.preventDefault(),i.value==="tags"&&o.value.indexOf("enter")===-1&&v.value)return;d(),m();break;case 32:if(g.value&&i.value!=="tags"&&!v.value||i.value==="tags"&&(o.value.indexOf("space")===-1&&v.value||!v.value))return;L.preventDefault(),d(),m();break;case 9:case 186:case 188:if(i.value!=="tags")return;const U={9:"tab",186:";",188:","};if(o.value.indexOf(U[L.keyCode])===-1||!v.value)return;d(),m(),L.preventDefault();break;case 27:Z();break;case 38:if(L.preventDefault(),!t.value)return;f.value==="top"?x():s();break;case 40:if(L.preventDefault(),!t.value)return;f.value==="top"?s():x();break}},preparePointer:d}}function bl(e,n,a){const i=H(e),{disabled:o,openDirection:v,showOptions:f,invalid:g}=i,t=a.isOpen,c=a.isPointed,p=a.isSelected,b=a.isDisabled,q=a.isActive,V=a.canPointGroups,D=a.resolving,m=a.fo,s=G({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",containerInvalid:"is-invalid",containerInvalidActive:"is-invalid-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},i.classes.value),x=w(()=>!!(t.value&&f.value&&(!D.value||D.value&&m.value.length)));return{classList:w(()=>({container:[s.container].concat(o.value?s.containerDisabled:[]).concat(x.value&&v.value==="top"?s.containerOpenTop:[]).concat(x.value&&v.value!=="top"?s.containerOpen:[]).concat(q.value?s.containerActive:[]).concat(g.value?s.containerInvalid:[]),spacer:s.spacer,singleLabel:s.singleLabel,multipleLabel:s.multipleLabel,search:s.search,tags:s.tags,tag:[s.tag].concat(o.value?s.tagDisabled:[]),tagRemove:s.tagRemove,tagRemoveIcon:s.tagRemoveIcon,tagsSearchWrapper:s.tagsSearchWrapper,tagsSearch:s.tagsSearch,tagsSearchCopy:s.tagsSearchCopy,placeholder:s.placeholder,caret:[s.caret].concat(t.value?s.caretOpen:[]),clear:s.clear,clearIcon:s.clearIcon,spinner:s.spinner,dropdown:[s.dropdown].concat(v.value==="top"?s.dropdownTop:[]).concat(!t.value||!f.value||!x.value?s.dropdownHidden:[]),options:[s.options].concat(v.value==="top"?s.optionsTop:[]),group:s.group,groupLabel:k=>{let d=[s.groupLabel];return c(k)?d.push(p(k)?s.groupLabelSelectedPointed:s.groupLabelPointed):p(k)&&V.value?d.push(b(k)?s.groupLabelSelectedDisabled:s.groupLabelSelected):b(k)&&d.push(s.groupLabelDisabled),V.value&&d.push(s.groupLabelPointable),d},groupOptions:s.groupOptions,option:(k,d)=>{let R=[s.option];return c(k)?R.push(p(k)?s.optionSelectedPointed:s.optionPointed):p(k)?R.push(b(k)?s.optionSelectedDisabled:s.optionSelected):(b(k)||d&&b(d))&&R.push(s.optionDisabled),R},noOptions:s.noOptions,noResults:s.noResults,fakeInput:s.fakeInput})),showDropdown:x}}const ml={name:"BaseMultiselect",props:{preserveSearch:{type:Boolean,default:!1},initialSearch:{type:String,default:null},contentLoading:{type:Boolean,default:!1},value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!1},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},invalid:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({container:"p-0 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-200 rounded-md bg-white text-sm leading-snug outline-none max-h-10",containerDisabled:"cursor-default bg-gray-200 bg-opacity-50 !text-gray-400",containerOpen:"",containerOpenTop:"",containerActive:"ring-1 ring-primary-400 border-primary-400",containerInvalid:"border-red-400 ring-red-400 focus:ring-red-400 focus:border-red-400",containerInvalidActive:"ring-1 border-red-400 ring-red-400",singleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",multipleLabel:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5",search:"w-full absolute inset-0 outline-none appearance-none box-border border-0 text-sm font-sans bg-white rounded-md pl-3.5",tags:"flex-grow flex-shrink flex flex-wrap mt-1 pl-2",tag:"bg-primary-500 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap",tagDisabled:"pr-2 !bg-gray-400 text-white",tagRemove:"flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group",tagRemoveIcon:"bg-multiselect-remove text-white bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60",tagsSearchWrapper:"inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full",tagsSearch:"absolute inset-0 border-0 focus:outline-none !shadow-none !focus:shadow-none appearance-none p-0 text-sm font-sans box-border w-full",tagsSearchCopy:"invisible whitespace-pre-wrap inline-block h-px",placeholder:"flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 text-sm",caret:"bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-5 relative mr-1 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform",caretOpen:"rotate-180 pointer-events-auto",clear:"pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80",clearIcon:"bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block",spinner:"bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0",dropdown:"max-h-60 shadow-lg absolute -left-px -right-px -bottom-1 transform translate-y-full border border-gray-300 mt-1 overflow-y-auto z-50 bg-white flex flex-col rounded-md",dropdownTop:"-translate-y-full -top-2 bottom-auto flex-col-reverse rounded-md",dropdownHidden:"hidden",options:"flex flex-col p-0 m-0 list-none",optionsTop:"flex-col-reverse",group:"p-0 m-0",groupLabel:"flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal",groupLabelPointable:"cursor-pointer",groupLabelPointed:"bg-gray-300 text-gray-700",groupLabelSelected:"bg-primary-600 text-white",groupLabelDisabled:"bg-gray-100 text-gray-300 cursor-not-allowed",groupLabelSelectedPointed:"bg-primary-600 text-white opacity-90",groupLabelSelectedDisabled:"text-primary-100 bg-primary-600 bg-opacity-50 cursor-not-allowed",groupOptions:"p-0 m-0",option:"flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3",optionPointed:"text-gray-800 bg-gray-100",optionSelected:"text-white bg-primary-500",optionDisabled:"text-gray-300 cursor-not-allowed",optionSelectedPointed:"text-white bg-primary-500 opacity-90",optionSelectedDisabled:"text-primary-100 bg-primary-500 bg-opacity-50 cursor-not-allowed",noOptions:"py-2 px-3 text-gray-600 bg-white",noResults:"py-2 px-3 text-gray-600 bg-white",fakeInput:"bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent",spacer:"h-9 py-px box-content"})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"}},emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],setup(e,n){const a=sl(e,n),i=ol(e),o=pl(e,n),v=ul(e,n),f=rl(e,n,{iv:a.iv}),g=fl(e,n,{input:v.input,open:o.open,close:o.close,clearSearch:v.clearSearch}),t=dl(e,n,{ev:a.ev,iv:a.iv,search:v.search,clearSearch:v.clearSearch,update:f.update,pointer:i.pointer,clearPointer:i.clearPointer,blur:g.blur,deactivate:g.deactivate}),c=vl(e,n,{fo:t.fo,fg:t.fg,handleOptionClick:t.handleOptionClick,handleGroupClick:t.handleGroupClick,search:v.search,pointer:i.pointer,setPointer:i.setPointer,clearPointer:i.clearPointer,multiselect:g.multiselect}),p=gl(e,n,{iv:a.iv,update:f.update,search:v.search,setPointer:i.setPointer,selectPointer:c.selectPointer,backwardPointer:c.backwardPointer,forwardPointer:c.forwardPointer,blur:g.blur,fo:t.fo}),b=bl(e,n,{isOpen:o.isOpen,isPointed:c.isPointed,canPointGroups:c.canPointGroups,isSelected:t.isSelected,isDisabled:t.isDisabled,isActive:g.isActive,resolving:t.resolving,fo:t.fo});return G(G(G(G(G(G(G(G(G(G({},a),o),g),i),f),v),t),c),p),b)}},hl=["id","tabindex"],yl=["type","modelValue","value","autocomplete"],Sl=["onMousedown"],kl=["type","modelValue","value","autocomplete"],wl={class:"w-full overflow-y-auto"},Ol=["data-pointed","onMouseenter","onClick"],Ll=["data-pointed","onMouseenter","onClick"],Pl=["data-pointed","onMouseenter","onClick"],Il=["innerHTML"],Bl=["innerHTML"],ql=["value"],Tl=["name","value"],Cl=["name","value"];function Dl(e,n,a,i,o,v){const f=De("BaseContentPlaceholdersBox"),g=De("BaseContentPlaceholders");return a.contentLoading?(I(),el(g,{key:0},{default:ll(()=>[al(f,{rounded:!0,class:"w-full",style:{height:"40px"}})]),_:1})):(I(),B("div",{key:1,id:a.id,ref:"multiselect",tabindex:e.tabindex,class:O(e.classList.container),onFocusin:n[6]||(n[6]=(...t)=>e.activate&&e.activate(...t)),onFocusout:n[7]||(n[7]=(...t)=>e.deactivate&&e.deactivate(...t)),onKeydown:n[8]||(n[8]=(...t)=>e.handleKeydown&&e.handleKeydown(...t)),onFocus:n[9]||(n[9]=(...t)=>e.handleFocus&&e.handleFocus(...t))},[a.mode!=="tags"&&a.searchable&&!a.disabled?(I(),B("input",{key:0,ref:"input",type:a.inputType,modelValue:e.search,value:e.search,class:O(e.classList.search),autocomplete:a.autocomplete,onInput:n[0]||(n[0]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onPaste:n[1]||(n[1]=ve((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"]))},null,42,yl)):E("",!0),a.mode=="tags"?(I(),B("div",{key:1,class:O(e.classList.tags)},[(I(!0),B(ae,null,se(e.iv,(t,c,p)=>C(e.$slots,"tag",{option:t,handleTagRemove:e.handleTagRemove,disabled:a.disabled},()=>[(I(),B("span",{key:p,class:O(e.classList.tag)},[tl(Q(t[a.label])+" ",1),a.disabled?E("",!0):(I(),B("span",{key:0,class:O(e.classList.tagRemove),onMousedown:ve(b=>e.handleTagRemove(t,b),["stop"])},[P("span",{class:O(e.classList.tagRemoveIcon)},null,2)],42,Sl))],2))])),256)),P("div",{class:O(e.classList.tagsSearchWrapper)},[P("span",{class:O(e.classList.tagsSearchCopy)},Q(e.search),3),a.searchable&&!a.disabled?(I(),B("input",{key:0,ref:"input",type:a.inputType,modelValue:e.search,value:e.search,class:O(e.classList.tagsSearch),autocomplete:a.autocomplete,style:{"box-shadow":"none !important"},onInput:n[2]||(n[2]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onPaste:n[3]||(n[3]=ve((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"]))},null,42,kl)):E("",!0)],2)],2)):E("",!0),a.mode=="single"&&e.hasSelected&&!e.search&&e.iv?C(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[P("div",{class:O(e.classList.singleLabel)},Q(e.iv[a.label]),3)]):E("",!0),a.mode=="multiple"&&e.hasSelected&&!e.search?C(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[P("div",{class:O(e.classList.multipleLabel)},Q(e.multipleLabelText),3)]):E("",!0),a.placeholder&&!e.hasSelected&&!e.search?C(e.$slots,"placeholder",{key:4},()=>[P("div",{class:O(e.classList.placeholder)},Q(a.placeholder),3)]):E("",!0),e.busy?C(e.$slots,"spinner",{key:5},()=>[P("span",{class:O(e.classList.spinner)},null,2)]):E("",!0),e.hasSelected&&!a.disabled&&a.canClear&&!e.busy?C(e.$slots,"clear",{key:6,clear:e.clear},()=>[P("span",{class:O(e.classList.clear),onMousedown:n[4]||(n[4]=(...t)=>e.clear&&e.clear(...t))},[P("span",{class:O(e.classList.clearIcon)},null,2)],34)]):E("",!0),a.caret?C(e.$slots,"caret",{key:7},()=>[P("span",{class:O(e.classList.caret),onMousedown:n[5]||(n[5]=ve((...t)=>e.handleCaretClick&&e.handleCaretClick(...t),["prevent","stop"]))},null,34)]):E("",!0),P("div",{class:O(e.classList.dropdown),tabindex:"-1"},[P("div",wl,[C(e.$slots,"beforelist",{options:e.fo}),P("ul",{class:O(e.classList.options)},[a.groups?(I(!0),B(ae,{key:0},se(e.fg,(t,c,p)=>(I(),B("li",{key:p,class:O(e.classList.group)},[P("div",{class:O(e.classList.groupLabel(t)),"data-pointed":e.isPointed(t),onMouseenter:b=>e.setPointer(t),onClick:b=>e.handleGroupClick(t)},[C(e.$slots,"grouplabel",{group:t},()=>[P("span",null,Q(t[a.groupLabel]),1)])],42,Ol),P("ul",{class:O(e.classList.groupOptions)},[(I(!0),B(ae,null,se(t.__VISIBLE__,(b,q,V)=>(I(),B("li",{key:V,class:O(e.classList.option(b,t)),"data-pointed":e.isPointed(b),onMouseenter:D=>e.setPointer(b),onClick:D=>e.handleOptionClick(b)},[C(e.$slots,"option",{option:b,search:e.search},()=>[P("span",null,Q(b[a.label]),1)])],42,Ll))),128))],2)],2))),128)):(I(!0),B(ae,{key:1},se(e.fo,(t,c,p)=>(I(),B("li",{key:p,class:O(e.classList.option(t)),"data-pointed":e.isPointed(t),onMouseenter:b=>e.setPointer(t),onClick:b=>e.handleOptionClick(t)},[C(e.$slots,"option",{option:t,search:e.search},()=>[P("span",null,Q(t[a.label]),1)])],42,Pl))),128))],2),e.noOptions?C(e.$slots,"nooptions",{key:0},()=>[P("div",{class:O(e.classList.noOptions),innerHTML:a.noOptionsText},null,10,Il)]):E("",!0),e.noResults?C(e.$slots,"noresults",{key:1},()=>[P("div",{class:O(e.classList.noResults),innerHTML:a.noResultsText},null,10,Bl)]):E("",!0),C(e.$slots,"afterlist",{options:e.fo})]),C(e.$slots,"action")],2),a.required?(I(),B("input",{key:8,class:O(e.classList.fakeInput),tabindex:"-1",value:e.textValue,required:""},null,10,ql)):E("",!0),a.nativeSupport?(I(),B(ae,{key:9},[a.mode=="single"?(I(),B("input",{key:0,type:"hidden",name:a.name,value:e.plainValue!==void 0?e.plainValue:""},null,8,Tl)):(I(!0),B(ae,{key:1},se(e.plainValue,(t,c)=>(I(),B("input",{key:c,type:"hidden",name:`${a.name}[]`,value:t},null,8,Cl))),128))],64)):E("",!0),P("div",{class:O(e.classList.spacer)},null,2)],42,hl))}var jl=nl(ml,[["render",Dl]]);export{jl as default};
