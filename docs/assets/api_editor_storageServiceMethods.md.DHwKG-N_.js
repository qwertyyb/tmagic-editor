import{av as e,p as l,m as t,aQ as i}from"./chunks/framework.D1UtGIsq.js";const m=JSON.parse('{"title":"storageService方法","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/storageServiceMethods.md","filePath":"api/editor/storageServiceMethods.md"}'),o={name:"api/editor/storageServiceMethods.md"},r=i('<h1 id="storageservice方法" tabindex="-1">storageService方法 <a class="header-anchor" href="#storageservice方法" aria-label="Permalink to &quot;storageService方法&quot;">​</a></h1><h2 id="getstorage" tabindex="-1">getStorage <a class="header-anchor" href="#getstorage" aria-label="Permalink to &quot;getStorage&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="getnamespace" tabindex="-1">getNamespace <a class="header-anchor" href="#getnamespace" aria-label="Permalink to &quot;getNamespace&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="getitem" tabindex="-1">getItem <a class="header-anchor" href="#getitem" aria-label="Permalink to &quot;getItem&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key&quot;">​</a></h2><ul><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="removeitem" tabindex="-1">removeItem <a class="header-anchor" href="#removeitem" aria-label="Permalink to &quot;removeItem&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="setitem" tabindex="-1">setItem <a class="header-anchor" href="#setitem" aria-label="Permalink to &quot;setItem&quot;">​</a></h2><ul><li><p><strong><a href="./../../guide/editor-expand.html#行为扩展">扩展支持</a>：</strong> 是</p></li><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h2><ul><li><p><strong>参数：</strong></p><ul><li></li></ul></li><li><p><strong>返回：</strong></p><ul><li><code>{Promise&lt;void&gt;}</code></li></ul></li><li><p><strong>详情：</strong></p></li></ul><h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h2><p>使用中间件的方式扩展方法，上述方法中标记有<code>扩展支持： 是</code>的方法都支持使用use扩展</p><h2 id="useplugin" tabindex="-1">usePlugin <a class="header-anchor" href="#useplugin" aria-label="Permalink to &quot;usePlugin&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>相对于<a href="#use">use</a>, usePlugin支持更加灵活更加细致的扩展， 上述方法中标记有<code>扩展支持： 是</code>的方法都支持使用usePlugin扩展</p><p>每个支持扩展的方法都支持定制before、after两个hook来干预原有方法的行为，before可以用于修改传入参数，after可以用于修改返回的值</p><h2 id="removeallplugins" tabindex="-1">removeAllPlugins <a class="header-anchor" href="#removeallplugins" aria-label="Permalink to &quot;removeAllPlugins&quot;">​</a></h2><ul><li><strong>详情：</strong></li></ul><p>删掉当前设置的所有扩展</p>',26),a=[r];function s(n,g,u,d,p,h){return t(),l("div",null,a)}const f=e(o,[["render",s]]);export{m as __pageData,f as default};
