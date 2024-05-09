import{av as e,p as r,m as t,aQ as l}from"./chunks/framework.D1UtGIsq.js";const f=JSON.parse('{"title":"propsService方法","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/propsServiceMethods.md","filePath":"api/editor/propsServiceMethods.md"}'),a={name:"api/editor/propsServiceMethods.md"},o=l('<h1 id="propsservice方法" tabindex="-1">propsService方法 <a class="header-anchor" href="#propsservice方法" aria-label="Permalink to &quot;propsService方法&quot;">​</a></h1><h2 id="fillconfig" tabindex="-1">fillConfig <a class="header-anchor" href="#fillconfig" aria-label="Permalink to &quot;fillConfig&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li>{<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a>} config</li></ul></li><li><p><strong>返回：</strong></p><ul><li>{Promise&lt;<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a>&gt;}</li></ul></li><li><p><strong>详情：</strong></p><p>扩展属性表单配置DSL，用于为所有表单配置添加公共配置</p></li></ul><h2 id="setpropsconfigs" tabindex="-1">setPropsConfigs <a class="header-anchor" href="#setpropsconfigs" aria-label="Permalink to &quot;setPropsConfigs&quot;">​</a></h2><ul><li><p><strong>参数：</strong></p><ul><li>{Record&lt;string, <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a>&gt;} configs</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>详情：</strong></p><p>设置组件与属性表单配置DSL的对应关系</p></li></ul><h2 id="setpropsconfig" tabindex="-1">setPropsConfig <a class="header-anchor" href="#setpropsconfig" aria-label="Permalink to &quot;setPropsConfig&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li><code>{string}</code> type 组件类型</li><li>{<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a>} config 属性表单配置DSL</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p><p>为指定类型组件设置组件属性表单配置</p></li></ul><h2 id="getpropsconfig" tabindex="-1">getPropsConfig <a class="header-anchor" href="#getpropsconfig" aria-label="Permalink to &quot;getPropsConfig&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li><code>{string}</code> type 组件类型</li></ul></li><li><p><strong>返回：</strong></p><ul><li>{Promise&lt;<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/form/src/schema.ts#L706" target="_blank" rel="noreferrer">FormConfig</a>&gt;}</li></ul></li><li><p><strong>详情：</strong></p><p>获取指点类型的组件属性表单配置</p></li></ul><h2 id="setpropsvalues" tabindex="-1">setPropsValues <a class="header-anchor" href="#setpropsvalues" aria-label="Permalink to &quot;setPropsValues&quot;">​</a></h2><ul><li><p><strong>参数：</strong></p><ul><li>{Record&lt;string, <a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>&gt;} values</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{void}</code></li></ul></li><li><p><strong>详情：</strong></p><p>设置组件与属性表单默认值的对应关系</p></li></ul><h2 id="setpropsvalue" tabindex="-1">setPropsValue <a class="header-anchor" href="#setpropsvalue" aria-label="Permalink to &quot;setPropsValue&quot;">​</a></h2><ul><li><p><strong>参数：</strong></p><ul><li><code>{string}</code> type 组件类型</li><li>{<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>} value 组件初始值</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p><p>设置组件与属性表单默认值的对应关系</p></li></ul><h2 id="getpropsvalue" tabindex="-1">getPropsValue <a class="header-anchor" href="#getpropsvalue" aria-label="Permalink to &quot;getPropsValue&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li><code>{string}</code> type 组件类型</li><li>{<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>} value 组件默认值，可选</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p><p>获取指定类型的组件初始值</p></li></ul><h2 id="createid" tabindex="-1">createId <a class="header-anchor" href="#createid" aria-label="Permalink to &quot;createId&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li>{string} type 组件列席</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;string&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p><p>生成组件id</p></li></ul><h2 id="setnewitemid" tabindex="-1">setNewItemId <a class="header-anchor" href="#setnewitemid" aria-label="Permalink to &quot;setNewItemId&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li>{<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>} config</li></ul></li><li><p><strong>返回：</strong></p><ul><li>{Promise&lt;<a href="https://github.com/Tencent/tmagic-editor/blob/c143a5f7670ae61d80c1a2cfcc780cfb5259849d/packages/schema/src/index.ts#L99" target="_blank" rel="noreferrer">MNode</a>&gt;}</li></ul></li><li><p><strong>详情：</strong></p><p>将组件与组件的子元素配置中的id都设置成一个新的ID</p></li></ul><h2 id="getdefaultpropsvalue" tabindex="-1">getDefaultPropsValue <a class="header-anchor" href="#getdefaultpropsvalue" aria-label="Permalink to &quot;getDefaultPropsValue&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li><code>{string}</code> type 组件类型</li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p><p>获取默认属性配置</p></li></ul><h2 id="resetstate" tabindex="-1">resetState <a class="header-anchor" href="#resetstate" aria-label="Permalink to &quot;resetState&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>情况所有组件的属性配置与初始值</p><h2 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h2><ul><li><p><strong>详情：</strong></p><p>销毁propsService</p></li></ul><h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h2><p>使用中间件的方式扩展方法，上述方法中标记有<code>扩展支持： 是</code>的方法都支持使用use扩展</p><h2 id="useplugin" tabindex="-1">usePlugin <a class="header-anchor" href="#useplugin" aria-label="Permalink to &quot;usePlugin&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>相对于<a href="#use">use</a>, usePlugin支持更加灵活更加细致的扩展， 上述方法中标记有<code>扩展支持： 是</code>的方法都支持使用usePlugin扩展</p><p>每个支持扩展的方法都支持定制before、after两个hook来干预原有方法的行为，before可以用于修改传入参数，after可以用于修改返回的值</p><h2 id="removeallplugins" tabindex="-1">removeAllPlugins <a class="header-anchor" href="#removeallplugins" aria-label="Permalink to &quot;removeAllPlugins&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>删掉当前设置的所有扩展</p>',35),i=[o];function s(n,c,p,g,d,u){return t(),r("div",null,i)}const m=e(a,[["render",s]]);export{f as __pageData,m as default};
