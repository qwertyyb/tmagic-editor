import{av as r,ah as n,p as d,U as s,O as i,aQ as e,q as t,S as o,m as h}from"./chunks/framework.D1UtGIsq.js";const T=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/radio.md","filePath":"form-config/fields/radio.md"}'),l={name:"form-config/fields/radio.md"},p=e(`<h1 id="radio-单选框" tabindex="-1">Radio 单选框 <a class="header-anchor" href="#radio-单选框" aria-label="Permalink to &quot;Radio 单选框&quot;">​</a></h1><p>在一组备选项中进行单选</p><h2 id="ts-定义" tabindex="-1">TS 定义 <a class="header-anchor" href="#ts-定义" aria-label="Permalink to &quot;TS 定义&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RedioGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;redioGroup&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>点击查看<a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FormItem</a>的定义</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>`,7),c=t("p",null," 要使用 Radio 组件，只需要配置type: 'radio-group'。 ",-1),k=t("h2",{id:"禁用状态",tabindex:"-1"},[o("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),g=t("p",null,"单选框不可用的状态。",-1),_=t("p",null," 只要在配置中设置 disabled 属性即可，它接受一个 Boolean ， true 为禁用，也可以接受一个返回 Boolean 的函数。 ",-1),m=e('<h2 id="radiogroup-attributes" tabindex="-1">RadioGroup Attributes <a class="header-anchor" href="#radiogroup-attributes" aria-label="Permalink to &quot;RadioGroup Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>text</td><td>表单标签</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean / <a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FilterFunction</a></td><td>—</td><td>false</td></tr><tr><td>options</td><td>选项</td><td>Array</td><td>—</td><td>-</td></tr><tr><td>onChange</td><td>值变化时触发的函数</td><td><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">OnChangeHandler </a></td><td>—</td><td>-</td></tr></tbody></table>',2);function u(b,f,y,E,F,x){const a=n("demo-block");return h(),d("div",null,[p,s(a,{type:"form",config:[{type:"radio-group",name:"radio",text:"选项",options:[{text:"选项1",value:1},{text:"选项2",value:2}]}]},{source:i(()=>[c]),_:1}),k,g,s(a,{type:"form",config:[{type:"radio-group",name:"radio",text:"选项",options:[{text:"选项1",value:1},{text:"选项2",value:2}],disabled:()=>!0}]},{source:i(()=>[_]),_:1}),m])}const C=r(l,[["render",u]]);export{T as __pageData,C as default};
