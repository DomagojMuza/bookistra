import{_ as v,o as n,c as l,a as t,F as p,e as h,n as _,g as d,h as f,t as u,v as m,m as g}from"./index-02648472.js";const y={props:["formData"],methods:{submit(){let o={};this.formData.forEach(a=>{console.log(a.name,a.value),a.type=="number"&&a.value>0&&(o[a.name]=a.value),a.type=="checkbox"&&a.value,o[a.name]=a.value}),this.$emit("submit",o)},resetForm(){this.formData.forEach(o=>{o.type=="checkbox"?o.value=!1:o.value=""}),this.$emit("submit",{})}},mounted(){let a=location.hash.substr(1).split("&").reduce(function(s,i){var r=i.split("=");return s[r[0]]=r[1],s},{});this.formData.forEach(s=>{s.type=="number"&&a[s.name]>0&&(s.value=a[s.name]),s.type=="checkbox"&&a[s.name]?s.value=!0:a[s.name]&&(s.value=a[s.name])})}},x={class:"navbar navbar-expand-lg d-block bg-light sidebar-search mb-lg-0 mb-4 h-100"},k=t("button",{class:"navbar-toggler mx-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#secondNavbar","aria-controls":"secondNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse px-2",id:"secondNavbar"},D={class:"navbar-nav flex-column w-100"},V={class:"row"},U={class:"col-12 mt-3"},F={class:"row g-0"},N={class:"col-lg-6 col-12"},$={class:"col-lg-6 col-12"},C={key:0,type:"checkbox",class:"d-flex align-items-end mb-2"},E=["name","onUpdate:modelValue"],B={key:1,type:"number",class:"d-none"},M=["name","onUpdate:modelValue"],j={key:2},z={for:"objectName",class:"form-label mb-0 mt-2 text-dark"},T=["type","name","onUpdate:modelValue"];function L(o,a,s,i,r,b){return n(),l("nav",x,[k,t("div",w,[t("ul",D,[t("div",V,[t("div",U,[t("div",F,[t("div",N,[t("button",{class:"btn btn-secondary text-white find-btn fw-bold border-0",onClick:a[0]||(a[0]=e=>b.submit())}," Pretraga ")]),t("div",$,[t("button",{class:"btn btn-warning text-secondary find-btn fw-bold border-0",onClick:a[1]||(a[1]=e=>b.resetForm())}," Reset ")])])]),(n(!0),l(p,null,h(s.formData,e=>(n(),l("div",{class:_(["mt-3 sadrzaj",[e.type=="text"?"col-12":e.label?"col-lg-6 col-12":"d-none mt-0"]])},[e.type=="checkbox"&&e.label?(n(),l("label",C,[d(t("input",{type:"checkbox",name:e.name,id:"","onUpdate:modelValue":c=>e.value=c},null,8,E),[[f,e.value]]),t("div",null,u(e.label),1)])):e.type&&!e.label?(n(),l("label",B,[d(t("input",{type:"number",name:e.name,id:"","onUpdate:modelValue":c=>e.value=c},null,8,M),[[m,e.value]])])):(n(),l("div",j,[t("label",z,u(e.label),1),d(t("input",{type:e.type,placeholder:"",name:e.name,id:"","onUpdate:modelValue":c=>e.value=c,class:"form-control"},null,8,T),[[g,e.value]])]))],2))),256))])])])])}const R=v(y,[["render",L]]);export{R as s};