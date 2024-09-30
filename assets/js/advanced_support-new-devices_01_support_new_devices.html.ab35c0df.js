"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64492],{48209:(n,e,s)=>{s.r(e),s.d(e,{comp:()=>i,data:()=>r});var a=s(73037);const t=s.p+"assets/img/generate_external_definition.2d7d3337.gif",o={class:"hint-container tip"},p={},i=(0,s(94533).A)(p,[["render",function(n,e){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[e[6]||(e[6]=(0,a.Fv)('<h1 id="support-new-devices" tabindex="-1"><a class="header-anchor" href="#support-new-devices"><span>Support new devices</span></a></h1><p>Zigbee2MQTT uses <a href="https://github.com/Koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a> to parse messages to and from devices.</p><p>This page will guide you through the process of adding support for new devices to <a href="https://github.com/Koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a>.</p><p>In case you require any help feel free to create an <a href="https://github.com/Koenkk/zigbee2mqtt/issues" target="_blank" rel="noopener noreferrer">issue</a>.</p><p><strong>Before</strong> starting, first check if your device is not already supported in the Zigbee2MQTT dev branch! This can be done by checking the <a href="https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices" target="_blank" rel="noopener noreferrer">changelog</a> of the dev branch.</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="_1-pairing-the-device-with-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#_1-pairing-the-device-with-zigbee2mqtt"><span>1. Pairing the device with Zigbee2MQTT</span></a></h3><p>The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any Zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.</p><p>Once you successfully paired the device you will see something like:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired</span>\n<span class="line">Zigbee2MQTT:warn  2019-11-09T12:19:56: Device &#39;0x00158d0001dc126a&#39; with Zigbee model &#39;lumi.sens&#39; and manufacturer name &#39;some_name&#39; is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Make sure that joining is enabled, otherwise new devices cannot join the network.</p></div><h3 id="_2-creating-the-external-definition" tabindex="-1"><a class="header-anchor" href="#_2-creating-the-external-definition"><span>2. Creating the external definition</span></a></h3><p>When pairing an unsupported device with Zigbee2MQTT, it will attempt to discover features supported by this device. To check what has already been discovered, go to the &quot;Zigbeee2MQTT frontend -&gt; device -&gt; Exposes tab&quot;. See if the exposed features work by checking if values are reported and/or it&#39;s controllable (in case of e.g. a light). Note that feature discovery is still WIP, not all features may be discovered or it may not be possible discovery all features due to a non-standard implementation of the device (commonly the case for Tuya devices).</p><p>Next generate the external definition by going to the device -&gt; &quot;Dev console&quot; tab and press &quot;Generate external definition&quot;.</p><img src="'+t+'" height="300"><p>By default, the external definition will use modern extends. This is done by mapping them to exposed Zigbee clusters. But this approach only works well when devices implement the Zigbee ZCL specification. If all features work and all the expected features are there, you are lucky and can continue with step 3. If not, we have to extend the external definition.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Depending on the device, it could be possible to extend the definition using other modern extends. This process is recommended and is generally easier.</p></div><h3 id="_2-1-extending-the-external-definition" tabindex="-1"><a class="header-anchor" href="#_2-1-extending-the-external-definition"><span>2.1. Extending the external definition</span></a></h3><p>To extend the generated external definition, save it next to the Zigbee2MQTT <code>configuration.yaml</code>. In this example we will call it <code>WSDCGQ01LM.js</code> (make sure it ends with <code>.js</code>). Add the lines like described below:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// Add the lines below</span></span>\n<span class="line"><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> ota <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/ota&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/store&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Update this with the real model of the device (written on the device itself or product page)</span></span>\n<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Update this with the real vendor of the device (written on the device itself or product page)</span></span>\n<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Description of the device, copy from vendor site. (only used for documentation and startup logging)</span></span>\n<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// We will add this later</span></span>\n<span class="line">    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Should be empty, unless device can be controlled (e.g. lights, switches).</span></span>\n<span class="line">    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now set the Zigbee2MQTT <code>log_level</code> to <code>debug</code> and enable the external definition by adding the following to your Zigbee2MQTT <code>configuration.yaml</code>.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> debug</span>\n<span class="line"><span class="token key atrule">external_converters</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token punctuation">-</span> WSDCGQ01LM.js</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once finished, restart Zigbee2MQTT and trigger some actions on the device. You will see messages like:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a <code>configure:</code> section. It may help to look at similar <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices" target="_blank" rel="noopener noreferrer">devices</a>.</p>',25)),(0,a.Lk)("div",o,[e[5]||(e[5]=(0,a.Lk)("p",{class:"hint-container-title"},"Tips",-1)),(0,a.Lk)("p",null,[e[1]||(e[1]=(0,a.eW)("If your device is advertised as Tuya compatible or reports anything with ")),e[2]||(e[2]=(0,a.Lk)("code",null,"manuSpecificTuya",-1)),e[3]||(e[3]=(0,a.eW)(" additional instructions for adding your device can be found ")),(0,a.bF)(s,{to:"/advanced/support-new-devices/02_support_new_tuya_devices.html"},{default:(0,a.k6)((()=>e[0]||(e[0]=[(0,a.eW)("here")]))),_:1}),e[4]||(e[4]=(0,a.eW)("."))])]),e[7]||(e[7]=(0,a.Fv)('<p>In case your device does not report anything out of the blue, the Clusters page at Zigbee2MQTT&#39;s frontend (found under the device in the dashboard) also exposes the clusters.</p><p>Some basic external converter examples:</p><ul><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.js" target="_blank" rel="noopener noreferrer">Bulb (light)</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.js" target="_blank" rel="noopener noreferrer">Plug (switch)</a></li><li><a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js" target="_blank" rel="noopener noreferrer">Advanced example</a></li><li>Definitions of already supported devices can be found <a href="https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices" target="_blank" rel="noopener noreferrer">here</a>. It may help to look at devices from the same vendor or type.</li></ul><h3 id="_2-2-adding-converter-s-for-your-device" tabindex="-1"><a class="header-anchor" href="#_2-2-adding-converter-s-for-your-device"><span>2.2. Adding converter(s) for your device</span></a></h3><p>In order to parse the messages of your Zigbee device we need to add converter(s). Existing converters can probably be reused, those can be found <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts" target="_blank" rel="noopener noreferrer">here</a>.</p><p>For e.g. the following message we could use the already existing <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/4a8d546d9c1150d81e42d56a85e2315c32c4ed11/src/converters/fromZigbee.ts#L397" target="_blank" rel="noopener noreferrer"><code>fz.temperature</code> converter</a>:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now update your external converter.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> ota <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/ota&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/utils&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> globalStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/store&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>fz<span class="token punctuation">.</span>temperature<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- added here all clusters reported from zigbee</span></span>\n<span class="line">    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- add here all clusters to send commands to zigbee</span></span>\n<span class="line">    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this will define which fields will be exposed in the definition message to configure a frontend (e.g. the Z2M frontend, Home Assistant, Domoticz)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Repeat until your device does not produce any more log messages like: <code>2018-5-1 18:19:41 WARN No converter available for &#39;WSDCGQ01LM&#39; with....</code></p><p>If none of the existing converters fit you can add custom ones, an external converter example for this can be found <a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="_2-3-using-modern-extend" tabindex="-1"><a class="header-anchor" href="#_2-3-using-modern-extend"><span>2.3 Using modern extend</span></a></h3><p>This exact same definition could be achieved using modern extends.</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>temperature<span class="token punctuation">,</span> humidity<span class="token punctuation">,</span> battery<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/modernExtend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// No other imports are necessary.</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">        <span class="token comment">// Modern extends are incapsulating fromZigbee, toZigbee, exposes and more.</span></span>\n<span class="line">        <span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-add-device-picture-to-zigbee2mqtt-io-documentation" tabindex="-1"><a class="header-anchor" href="#_3-add-device-picture-to-zigbee2mqtt-io-documentation"><span>3. Add device picture to zigbee2mqtt.io documentation</span></a></h3><p>To make sure a picture is available for this device on the supported devices page and in the frontend:</p><ol><li>Clone <a href="https://github.com/Koenkk/zigbee2mqtt.io" target="_blank" rel="noopener noreferrer">zigbee2mqtt.io</a></li><li>Add a device picture (<code>.png</code>, 512x512, transparent background) to <code>public/images/devices</code>. Use the <a href="https://new.express.adobe.com/tools/remove-background" target="_blank" rel="noopener noreferrer">Adobe Express Remove Background tool</a> to make the background transparent.</li><li><strong><em>Optional:</em></strong> Add a markdown file for your device to <code>docs/devices</code>, use the <code>model</code> property of your definition as the filename. Most of the contents of this file will be auto-generated through docgen but you can add your own notes in a notes section. Do not use h1 or h2 heading within &quot;## Notes&quot;-Section. <blockquote><blockquote><p>&lt;!-- Notes BEGIN --&gt;<br> &gt;&gt; ## Notes<br> ...<br> &gt;&gt; &lt;!-- Notes END --&gt;</p></blockquote></blockquote></li><li>Create a Pull Request to <a href="https://github.com/Koenkk/zigbee2mqtt.io" target="_blank" rel="noopener noreferrer">zigbee2mqtt.io</a>.</li></ol><p>On the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in <code>../../supported-devices.md</code> automatically.</p><h3 id="_4-done" tabindex="-1"><a class="header-anchor" href="#_4-done"><span>4. Done!</span></a></h3><p>Now it&#39;s time to submit a pull request to <a href="https://github.com/Koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a> so this device is supported out of the box by Zigbee2MQTT. This can be done by adding the definition to the <a href="https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices" target="_blank" rel="noopener noreferrer">vendor file</a> of your device. 😃</p>',20))])}]]),r=JSON.parse('{"path":"/advanced/support-new-devices/01_support_new_devices.html","title":"Support new devices","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Pairing the device with Zigbee2MQTT","slug":"_1-pairing-the-device-with-zigbee2mqtt","link":"#_1-pairing-the-device-with-zigbee2mqtt","children":[]},{"level":3,"title":"2. Creating the external definition","slug":"_2-creating-the-external-definition","link":"#_2-creating-the-external-definition","children":[]},{"level":3,"title":"2.1. Extending the external definition","slug":"_2-1-extending-the-external-definition","link":"#_2-1-extending-the-external-definition","children":[]},{"level":3,"title":"2.2. Adding converter(s) for your device","slug":"_2-2-adding-converter-s-for-your-device","link":"#_2-2-adding-converter-s-for-your-device","children":[]},{"level":3,"title":"2.3 Using modern extend","slug":"_2-3-using-modern-extend","link":"#_2-3-using-modern-extend","children":[]},{"level":3,"title":"3. Add device picture to zigbee2mqtt.io documentation","slug":"_3-add-device-picture-to-zigbee2mqtt-io-documentation","link":"#_3-add-device-picture-to-zigbee2mqtt-io-documentation","children":[]},{"level":3,"title":"4. Done!","slug":"_4-done","link":"#_4-done","children":[]}]}],"git":{"updatedTime":1727721888000},"filePathRelative":"advanced/support-new-devices/01_support_new_devices.md"}')}}]);