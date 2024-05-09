import{av as c,ah as i,p as s,U as e,O as o,q as t,S as a,aQ as r,m as n}from"./chunks/framework.D1UtGIsq.js";const v=JSON.parse('{"title":"DateTimePicker 日期时间选择器","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/datetime-picker.md","filePath":"form-config/fields/datetime-picker.md"}'),m={name:"form-config/fields/datetime-picker.md"},h=t("h1",{id:"datetimepicker-日期时间选择器",tabindex:"-1"},[a("DateTimePicker 日期时间选择器 "),t("a",{class:"header-anchor",href:"#datetimepicker-日期时间选择器","aria-label":'Permalink to "DateTimePicker 日期时间选择器"'},"​")],-1),l=t("p",null,"在同一个选择器里选择日期和时间",-1),_=t("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),p=t("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),f=t("h2",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),b=t("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),u=r('<h2 id="日期格式" tabindex="-1">日期格式 <a class="header-anchor" href="#日期格式" aria-label="Permalink to &quot;日期格式&quot;">​</a></h2><p>使用<code>format</code>指定输入框的格式；使用<code>valueFormat</code>指定绑定值的格式。</p><p>默认情况下，组件接受并返回<code>Date</code>对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意大小写</p></div><table><thead><tr><th>格式</th><th>含义</th><th>备注</th><th>举例</th></tr></thead><tbody><tr><td><code>yyyy</code></td><td>年</td><td></td><td>2017</td></tr><tr><td><code>M</code></td><td>月</td><td>不补0</td><td>1</td></tr><tr><td><code>MM</code></td><td>月</td><td></td><td>01</td></tr><tr><td><code>W</code></td><td>周</td><td>仅周选择器的 <code>format</code> 可用；不补0</td><td>1</td></tr><tr><td><code>WW</code></td><td>周</td><td>仅周选择器的 <code>format</code> 可用</td><td>01</td></tr><tr><td><code>d</code></td><td>日</td><td>不补0</td><td>2</td></tr><tr><td><code>dd</code></td><td>日</td><td></td><td>02</td></tr><tr><td><code>H</code></td><td>小时</td><td>24小时制；不补0</td><td>3</td></tr><tr><td><code>HH</code></td><td>小时</td><td>24小时制</td><td>03</td></tr><tr><td><code>h</code></td><td>小时</td><td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用；不补0</td><td>3</td></tr><tr><td><code>hh</code></td><td>小时</td><td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用</td><td>03</td></tr><tr><td><code>m</code></td><td>分钟</td><td>不补0</td><td>4</td></tr><tr><td><code>mm</code></td><td>分钟</td><td></td><td>04</td></tr><tr><td><code>s</code></td><td>秒</td><td>不补0</td><td>5</td></tr><tr><td><code>ss</code></td><td>秒</td><td></td><td>05</td></tr><tr><td><code>A</code></td><td>AM/PM</td><td>仅 <code>format</code> 可用，大写</td><td>AM</td></tr><tr><td><code>a</code></td><td>am/pm</td><td>仅 <code>format</code> 可用，小写</td><td>am</td></tr><tr><td><code>timestamp</code></td><td>JS时间戳</td><td>仅 <code>valueFormat</code> 可用；组件绑定值为<code>number</code>类型</td><td>1483326245000</td></tr><tr><td><code>[MM]</code></td><td>不需要格式化字符</td><td>使用方括号标识不需要格式化的字符 (如 [A] [MM])</td><td>MM</td></tr></tbody></table>',5),g=t("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),k=r('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>text</td><td>表单标签</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean / <a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FilterFunction</a></td><td>—</td><td>false</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td><td>yyyy-MM-dd HH:mm:ss</td></tr><tr><td>value-format</td><td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td><td>string</td><td>见<a href="#/zh-CN/component/date-picker#ri-qi-ge-shi">日期格式</a></td><td>—</td></tr><tr><td>onChange</td><td>值变化时触发的函数</td><td><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">OnChangeHandler</a></td><td>—</td><td>-</td></tr></tbody></table>',2);function T(y,M,P,A,x,C){const d=i("demo-block");return n(),s("div",null,[h,l,_,e(d,{type:"form",config:[{type:"datetime",name:"dateTime",text:"日期时间选择器"}]},{source:o(()=>[p]),_:1}),f,e(d,{type:"form",config:[{type:"datetime",name:"dateTime",text:"日期时间选择器",disabled:()=>!0}]},{source:o(()=>[b]),_:1}),u,e(d,{type:"form",config:[{type:"datetime",name:"dateTime",text:"日期时间选择器",format:"yyyy-MM-dd",valueFormat:"timestamp"}]},{source:o(()=>[g]),_:1}),k])}const S=c(m,[["render",T]]);export{v as __pageData,S as default};
