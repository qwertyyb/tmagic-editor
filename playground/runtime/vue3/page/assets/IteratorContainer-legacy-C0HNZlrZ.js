System.register(["./Container.vue_vue_type_script_setup_true_lang-legacy-DJ8DTrFM.js","./useApp-legacy-BWKTT0Fx.js","./Component.vue_vue_type_script_setup_true_lang-legacy-CAlQJQVk.js","./index-legacy-ofU10GQ1.js"],(function(e,t){"use strict";var n,o;return{setters:[e=>{n=e._},e=>{o=e.u},null,null],execute:function(){const t=["id"];e("default",Vue.defineComponent({__name:"IteratorContainer",props:{config:{},model:{default:()=>({})}},setup(e){const i=e,u=Vue.inject("app"),c=Vue.computed((()=>u?.transformStyle(i.config.style||{}))),r=Vue.computed((()=>{const{iteratorData:e=[]}=i.config;return"editor"!==u?.platform||e.length||e.push({}),e.map((e=>({items:u?.dataSourceManager?.compliedIteratorItems(e,i.config.items,i.config.dsField)??i.config.items,id:"",style:{...i.config.itemConfig.style,position:"relative",left:0,top:0}})))}));return o({config:i.config,methods:{}}),(e,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"magic-ui-iterator-container",id:`${e.config.id||""}`,style:Vue.normalizeStyle(c.value)},[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r.value,((e,t)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(n),{key:t,config:e},null,8,["config"])))),128))],12,t))}}))}}}));
//# sourceMappingURL=IteratorContainer-legacy-C0HNZlrZ.js.map
