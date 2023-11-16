import{d as _,u as d,a as u,c as m,b as h,r as p,o as s,e as n,f as t,t as o,g as l,F as g,h as f,n as v,i as x,j as b,k as y,l as N,m as k,_ as P}from"./index-9cc3f8d6.js";import{N as w}from"./NoteDisplay-984c7e9f.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(C){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=h(()=>p.map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,r)=>(s(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,o(l(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(s(!0),n(g,null,f(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(l(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),M])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","/home/barais/git/courses/versionManagement/versionmanager/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
