import{s as $}from"./sidebar-134a019a.js";import{g as N,p as C,s as g,a as h}from"./pagination-48c94f3a.js";import{d as E,c as x,u as z,a as U}from"./customers-e67023af.js";import{_ as u,o as i,c as n,a as e,k as y,t as j,d as m,r as b,F as L,e as S,f as v,l as V,i as M,g as c,v as r,M as k,b as f,j as I}from"./index-a0a8cee5.js";const A={props:["object"],methods:{openModal(o){this.$emit("showDetailsCard",o)},getImage(o){this.image=N(o)},async deleteObject(){confirm("Do you really want to delete object")&&(await E(this.object._id)).data&&this.$emit("objectDeleted",this.object._id)}},data(){return{image:null}},created(){}},P={key:0,class:"row border-dark mx-3 mt-3 shadow border-botom mb-4 px-2 py-2 bg-light"},q={class:"col-lg-3"},T=e("span",{class:"small fw-bold d-lg-none d-block mb-0 lh-1 mt-2"},"Ima/Prezime:",-1),B={class:"col-lg-3"},F=e("span",{class:"small fw-bold d-lg-none d-block mb-0 lh-1 mt-2"},"Email:",-1),R={class:"col-lg col-12 text-end"},Z={class:"row h-100 g-0 align-items-center justify-content-lg-end justify-content-between"},K={class:"col-lg-auto col text-center pointer bg-warning px-3 py-2",title:"Uredi"},G=e("i",{class:"las la-pen la-lg"},null,-1),H=[G],J={class:"col-lg-auto col text-center pointer bg-warning px-3 py-2",title:"Obrisi objekt"},Q=e("i",{class:"las la-trash la-lg"},null,-1),W=[Q];function X(o,t,d,_,s,l){return d.object?(i(),n("div",P,[e("div",q,[T,y(" "+j(d.object.firstName)+" "+j(d.object.lastName),1)]),e("div",B,[F,y(" "+j(d.object.email.toLowerCase()),1)]),e("div",R,[e("div",Z,[e("div",K,[e("div",null,[e("div",{onClick:t[0]||(t[0]=a=>l.openModal(d.object._id))},H)])]),e("div",J,[e("div",null,[e("div",{onClick:t[1]||(t[1]=a=>l.deleteObject(d.object._id))},W)])])])])])):m("",!0)}const Y=u(A,[["render",X]]),ee={props:["customers"],components:{customer_list_card:Y},data(){return{}},created(){console.log(this.customers)},methods:{openModal(o){this.$emit("showDetails",o)},passDeletedToList(o){this.$emit("emitDeleteObject",o)}}},te={key:0,class:"object-list"},oe=V('<div class="row mx-3 mt-3 d-lg-flex d-none"><div class="col-lg-3"><div class="fw-bold">Ime/Prezime</div></div><div class="col-lg-3"><div class="fw-bold">Email</div></div></div>',1);function se(o,t,d,_,s,l){const a=b("customer_list_card");return d.customers?(i(),n("div",te,[oe,(i(!0),n(L,null,S(d.customers,p=>(i(),v(a,{object:p,onShowDetailsCard:l.openModal,onObjectDeleted:l.passDeletedToList},null,8,["object","onShowDetailsCard","onObjectDeleted"]))),256))])):m("",!0)}const ae=u(ee,[["render",se]]),le={props:["_id"],data(){return{object:null}},async mounted(){let o=await x({_id:this._id});this.object=o.data.customers[0],console.log(this.object)},methods:{async updateObject(){let o=await z(this.object);this.$emit("postUpdate",o.data)}}},de={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ie={class:"modal-dialog"},ne=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"Izmjeni podake o kupcu"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ce={class:"modal-body"},re={key:0},me={class:"row"},be={class:"mt-3 sadrzaj col-lg-6 col-12"},ue=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Ime",-1),_e={class:"mt-3 sadrzaj col-lg-6 col-12"},pe=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Prezime",-1),he={class:"mt-3 sadrzaj col-12"},je=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Email",-1),fe=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Zatvori"),e("button",{type:"submit",class:"btn btn-primary"},"Spremi izmjene")],-1);function ve(o,t,d,_,s,l){return i(),n("div",de,[e("div",ie,[e("form",{class:"modal-content",onSubmit:t[3]||(t[3]=M((...a)=>l.updateObject&&l.updateObject(...a),["prevent"]))},[ne,e("div",ce,[s.object?(i(),n("div",re,[e("div",me,[e("div",be,[e("div",null,[ue,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>s.object.firstName=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.firstName]])])]),e("div",_e,[e("div",null,[pe,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>s.object.lastName=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.lastName]])])]),e("div",he,[e("div",null,[je,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=a=>s.object.email=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.email]])])])])])):m("",!0)]),fe],32)])])}const ge=u(le,[["render",ve]]),ye={data(){return{object:{}}},async mounted(){},methods:{async addObject(){let o=await U(this.object);o.data._id&&this.$emit("objectAdded",{name:o.data.object_id}),this.object={}}}},ke={class:"modal fade",id:"addObjectModal",tabindex:"-1","aria-labelledby":"addObjectModalLabel","aria-hidden":"true"},xe={class:"modal-dialog"},Me=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"Dodaj novog kupca"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Oe={class:"modal-body"},we={key:0},De={class:"row"},$e={class:"mt-3 sadrzaj col-lg-6 col-12"},Ne=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Ime",-1),Ce={class:"mt-3 sadrzaj col-lg-6 col-12"},Ee=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Prezime",-1),ze={class:"mt-3 sadrzaj col-12"},Ue=e("label",{for:"objectName",class:"form-label mb-0 mt-2 text-dark"}," Email",-1),Le=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Zatvori"),e("button",{type:"submit",class:"btn btn-primary"},"Spremi izmjene")],-1);function Se(o,t,d,_,s,l){return i(),n("div",ke,[e("div",xe,[e("form",{class:"modal-content",onSubmit:t[3]||(t[3]=M((...a)=>l.addObject&&l.addObject(...a),["prevent"]))},[Me,e("div",Oe,[s.object?(i(),n("div",we,[e("div",De,[e("div",$e,[e("div",null,[Ne,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>s.object.firstName=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.firstName]])])]),e("div",Ce,[e("div",null,[Ee,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>s.object.lastName=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.lastName]])])]),e("div",ze,[e("div",null,[Ue,c(e("input",{type:"text",required:"","onUpdate:modelValue":t[2]||(t[2]=a=>s.object.email=a),name:"name",id:"",class:"form-control border border-dark"},null,512),[[r,s.object.email]])])])])])):m("",!0)]),Le],32)])])}const Ve=u(ye,[["render",Se]]),Ie={data(){return{formData:[{name:"name",label:"Naziv",value:"",type:"text"},{name:"email",label:"Email",value:"",type:"text"}],customers:[],count:0,skip:1,_openEditModal:null,_addObjectModal:null,_id:null}},components:{sidebar:$,objectList:ae,pagination:C,editModal:ge,addModal:Ve},methods:{formChange(o){o.skip=1,g(o),this.getObjects(o)},pageChange(o){let t=h();t.skip=o.skip,g(t),this.getObjects(t)},async getObjects(o={}){o.skip&&(this.skip=+o.skip),this.customers=[];let t=await x(o);this.count=t.data.count,this.customers=t.data.customers},updateObjectInDOM(o){o&&o._id&&this.customers.forEach((t,d)=>{t._id===o._id&&(this.customers[d]=o)})},openAddObjectModal(){let o=this.$refs.addObjectModalRef.$el;this._addObjectModal=new k(o,{}),this._addObjectModal.show()},closeAddObjectModal(o){this._addObjectModal.hide(),this.formChange(o)},openEditModal(o){this._openEditModal=null,this._openEditModal="editModal",this._id=o,setTimeout(()=>{let t=this.$refs.modal.$el;console.log(t),new k(t,{}).show(),t.addEventListener("hidden.bs.modal",()=>{this._openEditModal=null})},100)},async removeObjectFromDom(o){let t=h();await this.getObjects(t)}},async mounted(){let o=h();this.formData.forEach(t=>{t.type=="number"&&o[t.name]>0&&(t.value=o[t.name]),t.type=="checkbox"&&o[t.name]?t.value=!0:o[t.name]&&(t.value=o[t.name])}),await this.getObjects(o)}},Ae={class:"row g-0"},Pe={class:"col-lg-2 pe-lg-0 col-12"},qe={class:"col"},Te={class:"d-flex justify-content-between my-2 px-3"};function Be(o,t,d,_,s,l){const a=b("sidebar"),p=b("pagination"),O=b("objectList"),w=b("addModal");return i(),n("div",Ae,[e("div",Pe,[f(a,{onSubmit:l.formChange,formData:s.formData},null,8,["onSubmit","formData"])]),e("div",qe,[e("div",Te,[e("button",{class:"col-lg-auto col btn btn-sm btn-primary py-lg-0 py-3 px-2",onClick:t[0]||(t[0]=(...D)=>l.openAddObjectModal&&l.openAddObjectModal(...D))},"Dodaj kupca"),s.customers.length?(i(),v(p,{key:0,class:"col-lg-auto col-12 mt-lg-0 mt-3",count:s.count,skip:s.skip,limit:20,onPageChange:l.pageChange},null,8,["count","skip","onPageChange"])):m("",!0)]),f(O,{customers:s.customers,onShowDetails:l.openEditModal,onEmitDeleteObject:l.removeObjectFromDom},null,8,["customers","onShowDetails","onEmitDeleteObject"])]),s._openEditModal?(i(),v(I(s._openEditModal),{key:0,ref:"modal",_id:s._id,onPostUpdate:l.updateObjectInDOM},null,40,["_id","onPostUpdate"])):m("",!0),f(w,{ref:"addObjectModalRef",onObjectAdded:l.closeAddObjectModal},null,8,["onObjectAdded"])])}const Ge=u(Ie,[["render",Be]]);export{Ge as default};