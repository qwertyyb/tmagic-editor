import{av as s,p as i,m as a,aQ as l}from"./chunks/framework.D1UtGIsq.js";const c=JSON.parse('{"title":"Form组件属性 props","description":"","frontmatter":{},"headers":[],"relativePath":"api/form/form-props.md","filePath":"api/form/form-props.md"}'),n={name:"api/form/form-props.md"},t=l(`<h1 id="form组件属性-props" tabindex="-1">Form组件属性 props <a class="header-anchor" href="#form组件属性-props" aria-label="Permalink to &quot;Form组件属性 props&quot;">​</a></h1><h2 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 表单配置</p></li><li><p><strong>默认值：</strong> <code>[]</code></p></li><li><p><strong>类型：</strong> <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a></p></li><li><p><strong>示例：</strong></p></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-form-dialog</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-form-dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multiple&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;多行文本&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;switch&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="initvalues" tabindex="-1">initValues <a class="header-anchor" href="#initvalues" aria-label="Permalink to &quot;initValues&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 表单初始化值</p></li><li><p><strong>默认值：</strong> <code>{}</code></p></li><li><p><strong>类型：</strong> <code>Object</code></p></li><li><p><strong>示例：</strong></p></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-form-dialog</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :init-values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;initValues&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">m-form-dialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> initValues</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  multiply: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="labelwidth" tabindex="-1">labelWidth <a class="header-anchor" href="#labelwidth" aria-label="Permalink to &quot;labelWidth&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>表单域标签的宽度，例如 &#39;50px&#39;。 作为 Form 直接子元素的 form-item 会继承该值。 支持 auto</p><ul><li><p><strong>默认值：</strong> <code>&#39;200px&#39;</code></p></li><li><p><strong>类型：</strong> <code>string | number</code></p></li></ul><h2 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-label="Permalink to &quot;disabled&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 是否禁用该表单内的所有组件。 若设置为 true，则表单内组件上的 disabled 属性不再生效</p></li><li><p><strong>默认值：</strong> false</p></li><li><p><strong>类型：</strong> <code>boolean</code></p></li></ul><h2 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h2><ul><li><p><strong>详情：</strong></p></li><li><p><strong>默认值：</strong></p></li><li><p><strong>类型：</strong></p></li></ul><h2 id="stepactive" tabindex="-1">stepActive <a class="header-anchor" href="#stepactive" aria-label="Permalink to &quot;stepActive&quot;">​</a></h2><ul><li><p><strong>详情：</strong></p></li><li><p><strong>默认值：</strong></p></li><li><p><strong>类型：</strong></p></li></ul><h2 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 用于控制该表单内组件的尺寸</p></li><li><p><strong>类型：</strong> <code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></p></li></ul><h2 id="inline" tabindex="-1">inline <a class="header-anchor" href="#inline" aria-label="Permalink to &quot;inline&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 行内表单模式</p></li><li><p><strong>默认值：</strong> false</p></li><li><p><strong>类型：</strong> <code>boolean</code></p></li></ul><h2 id="labelposition" tabindex="-1">labelPosition <a class="header-anchor" href="#labelposition" aria-label="Permalink to &quot;labelPosition&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性</p></li><li><p><strong>默认值：</strong> ’right&#39;</p></li><li><p><strong>类型：</strong> <code>&#39;left&#39; | &#39;right&#39; | &#39;top</code></p></li></ul><h2 id="keyprop" tabindex="-1">keyProp <a class="header-anchor" href="#keyprop" aria-label="Permalink to &quot;keyProp&quot;">​</a></h2><ul><li><p><strong>详情：</strong> 作为表单项的组件实例的key</p></li><li><p><strong>默认值：</strong> <code>&#39;__key&#39;</code></p></li><li><p><strong>类型：</strong> <code>string</code></p></li></ul><h2 id="popperclass" tabindex="-1">popperClass <a class="header-anchor" href="#popperclass" aria-label="Permalink to &quot;popperClass&quot;">​</a></h2><ul><li><p><strong>详情：</strong> tooltip弹出层的class</p></li><li><p><strong>类型：</strong> <code>string</code></p></li></ul>`,27),p=[t];function e(h,r,k,o,E,g){return a(),i("div",null,p)}const y=s(n,[["render",e]]);export{c as __pageData,y as default};
