System.register(["./Component.vue_vue_type_script_setup_true_lang-legacy-CAlQJQVk.js","./useApp-legacy-BWKTT0Fx.js","./index-legacy-ofU10GQ1.js"],(function(e,n){"use strict";var t,o;return{setters:[e=>{t=e._},e=>{o=e.u},null],execute:function(){const n=["id"];e("default",Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup(e){const c=e,l=Vue.inject("app"),u=Vue.computed((()=>l?.transformStyle(c.config.style||{})));return o({config:c.config,methods:{refresh:()=>{window.location.reload()}}}),(e,o)=>(Vue.openBlock(),Vue.createElementBlock("div",{id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-page magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(u.value)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(e=>(Vue.openBlock(),Vue.createBlock(t,{key:e.id,config:e},null,8,["config"])))),128))],14,n))}}))}}}));
//# sourceMappingURL=index-legacy-D5uJM0mQ.js.map
