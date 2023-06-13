import{u as I,d as y,a as D,p as w}from"./pricelist-19ea2bdd.js";import{_ as u,o as a,c as r,a as e,g as c,v as n,i as b,d as _,l as g,M,r as p,t as $,F as k,e as j,f as v}from"./index-ed6bebe6.js";const F={props:["item"],data(){return{orginalItem:null}},methods:{async updateItem(s){try{let t=await I(s)}catch(t){this.$emit("resetItemData",this.orginalItem),alert(t.data)}},async deleteItem(s){try{(await y(s)).data&&this.$emit("itemDeleted",s._id)}catch(t){console.log(t)}}},created(){this.item.dateFrom=new Date(this.item.dateFrom).toISOString().substring(0,10),this.item.dateTo=new Date(this.item.dateTo).toISOString().substring(0,10),this.orginalItem={...this.item}}},P={key:0,class:"col-12"},x={class:"col-lg-2 ps-lg-0"},T={class:"row g-0 align-items-center"},S=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Date from")],-1),V={class:"col"},A={class:"col-lg-2"},U={class:"row g-0 align-items-center"},q=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Date to")],-1),C={class:"col"},B={class:"col-lg-2"},L={class:"row g-0 align-items-center"},N=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Price (€)")],-1),O={class:"col"},E={class:"col-lg-2 col-12 mt-lg-0 mt-2"},R={class:"d-flex justify-content-lg-start justify-content-end"},z=e("button",{class:"btn btn-primary btn-sm",type:"submit"},"Update",-1);function G(s,t,d,h,i,l){return d.item?(a(),r("div",P,[e("form",{onSubmit:t[4]||(t[4]=b(o=>l.updateItem(d.item),["prevent"])),class:"row align-items-center bg-ligh py- border-botto border-to border-dark"},[e("div",x,[e("div",T,[S,e("div",V,[c(e("input",{class:"form-control rounded-0 border-dark",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>d.item.dateFrom=o),type:"date",name:"dateFrom",placeholder:"Date from"},null,512),[[n,d.item.dateFrom]])])])]),e("div",A,[e("div",U,[q,e("div",C,[c(e("input",{class:"form-control rounded-0 border-dark",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>d.item.dateTo=o),type:"date",name:"dateFrom",placeholder:"Date to"},null,512),[[n,d.item.dateTo]])])])]),e("div",B,[e("div",L,[N,e("div",O,[c(e("input",{type:"number",name:"price",required:"",class:"form-control rounded-0 border-dark",step:"0.1","onUpdate:modelValue":t[2]||(t[2]=o=>d.item.price=o),id:""},null,512),[[n,d.item.price]])])])]),e("div",E,[e("div",R,[z,e("div",{class:"btn btn-warning btn-sm ms-3",onClick:t[3]||(t[3]=o=>l.deleteItem(d.item))},"Delete")])])],32)])):_("",!0)}const H=u(F,[["render",G]]),J={props:["object_id"],data(){return{item:{dateFrom:null,dateTo:null,price:null,object_id:this.object_id}}},methods:{async addPricelistItem(){try{let s=await D(this.item);this.item.dateFrom=null,this.item.dateTo=null,this.item.price=null,this.$emit("itemAdded",s.data)}catch{}}}},K={class:"modal fade",id:"addPricelistItemModal",tabindex:"-1","aria-labelledby":"addPricelistItemModalLabel","aria-hidden":"true"},Q={class:"modal-content"},W=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"addPricelistItemModalLabel"},"Add new pricelist item"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y={class:"ps-2"},Z=g('<div class="col-12"><div class="row d-lg-flex d-none"><div class="col-4 ps-0">Date from</div><div class="col-4">Date to</div><div class="col-4">Price (€)</div></div></div>',1),ee={class:"row align-items-center bg-ligh py- border-botto border-to border-dark"},te={class:"col-lg-4 ps-lg-0"},se={class:"row g-0 align-items-center"},oe=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Date from")],-1),ie={class:"col"},de={class:"col-lg-4"},le={class:"row g-0 align-items-center"},ae=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Date to")],-1),re={class:"col"},ce={class:"col-lg-4"},ne={class:"row g-0 align-items-center"},me=e("div",{class:"col-lg-auto col-4"},[e("div",{class:"d-lg-none"},"Price (€)")],-1),_e={class:"col"},ue=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e("button",{type:"submit",class:"btn btn-primary"},"Save changes")],-1);function he(s,t,d,h,i,l){return a(),r("div",K,[e("form",{onSubmit:t[3]||(t[3]=b((...o)=>l.addPricelistItem&&l.addPricelistItem(...o),["prevent"])),class:"modal-dialog"},[e("div",Q,[W,e("div",X,[e("div",Y,[Z,e("div",ee,[e("div",te,[e("div",se,[oe,e("div",ie,[c(e("input",{class:"form-control rounded-0 border-dark",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>i.item.dateFrom=o),type:"date",name:"dateFrom",placeholder:"Date from"},null,512),[[n,i.item.dateFrom]])])])]),e("div",de,[e("div",le,[ae,e("div",re,[c(e("input",{class:"form-control rounded-0 border-dark",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>i.item.dateTo=o),type:"date",name:"dateFrom",placeholder:"Date to"},null,512),[[n,i.item.dateTo]])])])]),e("div",ce,[e("div",ne,[me,e("div",_e,[c(e("input",{type:"number",required:"",name:"price",step:"0.1",placeholder:"Price (€)",class:"form-control rounded-0 border-dark","onUpdate:modelValue":t[2]||(t[2]=o=>i.item.price=o),id:""},null,512),[[n,i.item.price]])])])])])])]),ue])],32)])}const pe=u(J,[["render",he]]),ve={props:["name"],components:{pricelist_item_card:H,addModal:pe},data(){return{pricelistItems:[],object:null,object_id:null,addItemModal:null}},async created(){this.object_id=this.$route.params._id;let s=await w(this.$route.params._id);this.pricelistItems=s.data,this.object=this.pricelistItems[0].object[0]},methods:{resetItem(s){this.pricelistItems.forEach((t,d)=>{t._id===s._id&&(this.pricelistItems[d]=s)})},openAddPricelistModal(){let s=this.$refs.addModal.$el;this.addItemModal=new M(s,{}),this.addItemModal.show()},removeItemFromDom(s){this.pricelistItems=this.pricelistItems.filter(t=>t._id!=s)},addItemToDom(s){this.pricelistItems.push(s),this.addItemModal.hide()}}},be={class:"container"},ge={class:"my-4"},fe={key:0},Ie={key:1,class:"row gy-4"},ye=g('<div class="col-12"><div class="row d-lg-flex d-none"><div class="col-2">Date from</div><div class="col-2">Date to</div><div class="col-2">Price (€)</div></div></div>',1),De={key:2},we=e("h1",{class:"text-center"},"Object has no pricelist",-1),Me=[we];function $e(s,t,d,h,i,l){const o=p("pricelist_item_card"),f=p("addModal");return a(),r("div",be,[e("div",ge,[i.object?(a(),r("h3",fe,"Pricelist for accommodation "+$(i.object.name),1)):_("",!0),e("div",{class:"btn btn-primary mb-2",onClick:t[0]||(t[0]=(...m)=>l.openAddPricelistModal&&l.openAddPricelistModal(...m))},"Add item"),i.pricelistItems.length?(a(),r("div",Ie,[ye,(a(!0),r(k,null,j(i.pricelistItems,m=>(a(),v(o,{class:"col-12",item:m,onResetItemData:l.resetItem,onItemDeleted:l.removeItemFromDom},null,8,["item","onResetItemData","onItemDeleted"]))),256))])):(a(),r("div",De,Me))]),i.object_id?(a(),v(f,{key:0,object_id:i.object_id,onItemAdded:l.addItemToDom,ref:"addModal"},null,8,["object_id","onItemAdded"])):_("",!0)])}const Fe=u(ve,[["render",$e]]);export{Fe as default};
