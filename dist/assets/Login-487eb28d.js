import{A as l,_ as d,s as c,o as m,c as p,a as o,g as n,v as i,i as u}from"./index-a0a8cee5.js";async function b(t){try{return await l.post("/user/login",t)}catch(e){throw e.response}}const _={name:"Login",data(){return{body:{email:"",password:""},store:c}},methods:{async signUp(){try{let t=await b(this.body);this.store.user=t.data.user,this.$store.token=t.data.token,localStorage.setItem("token",t.data.token),this.$router.push("/").then(()=>{this.$router.go()})}catch(t){this.error=t.data.error}}}},h={class:"container"},f={class:"col-lg-4 col-md-6 col-12"},y={class:"row"},g=o("div",{class:"col-12"},[o("div",{class:"text-center"},[o("h1",null,"Login")])],-1),v={class:"col-12"},w=o("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Email",-1),k={class:"col-12"},x=o("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Lozinka",-1),L=o("div",{class:"col-12 mt-3 text-center"},[o("button",{type:"submit",class:"btn btn-primary"},"Login")],-1);function U(t,e,j,B,r,a){return m(),p("div",h,[o("form",{onSubmit:e[2]||(e[2]=u((...s)=>a.signUp&&a.signUp(...s),["prevent"])),class:"row justify-content-center mt-5"},[o("div",f,[o("div",y,[g,o("div",v,[w,n(o("input",{type:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>r.body.email=s),name:"name",id:"email",class:"form-control border border-dark"},null,512),[[i,r.body.email]])]),o("div",k,[x,n(o("input",{type:"password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>r.body.password=s),name:"name",id:"password",class:"form-control border border-dark"},null,512),[[i,r.body.password]])]),L])])],32)])}const V=d(_,[["render",U]]);export{V as default};
