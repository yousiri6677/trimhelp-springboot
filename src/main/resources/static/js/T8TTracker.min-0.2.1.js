!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.T8TTracker=e()}(this,function(){"use strict";function t(t){for(var e in t)t.hasOwnProperty(e)&&"function"!==a(t[e]).toLowerCase()&&(this[e]=t[e])}function e(){for(var t=document.getElementsByTagName("meta"),e=null,n=0,r=t.length;r>n;n++){var i=t[n].name||"";i=i.replace(/^\s*\$/,""),i&&(e||(e={}),e[i]=t[n].content||"")}return e}function r(){var t=navigator.userAgent;if(/android/i.test(t))return"Android";if(/(iPhone|iPad|iPod|iOS)/i.test(t))return"iOS";var e="Win32"==navigator.platform||"Windows"==navigator.platform;if(e)return"Windows";var n="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(n)return"MacOs";var r="X11"==navigator.platform&&!e&&!n;if(r)return"Unix";var i=String(navigator.platform).indexOf("Linux")>-1;return i?"Linux":"Other"}function i(){var t=navigator.userAgent,e="Win32"==navigator.platform||"Windows"==navigator.platform,n="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(n)return"Mac";var r="X11"==navigator.platform&&!e&&!n;if(r)return"Unix";var i=String(navigator.platform).indexOf("Linux")>-1;if(i)return"Linux";if(e){var o=t.indexOf("Windows NT 5.0")>-1||t.indexOf("Windows 2000")>-1;if(o)return"Win2000";var s=t.indexOf("Windows NT 5.1")>-1||t.indexOf("Windows XP")>-1;if(s)return"WinXP";var a=t.indexOf("Windows NT 5.2")>-1||t.indexOf("Windows 2003")>-1;if(a)return"Win2003";var c=t.indexOf("Windows NT 6.0")>-1||t.indexOf("Windows Vista")>-1;if(c)return"WinVista";var u=t.indexOf("Windows NT 6.1")>-1||t.indexOf("Windows 7")>-1;if(u)return"Win7";var d=t.indexOf("Windows NT 10")>-1||t.indexOf("Windows 10")>-1;if(d)return"Win10"}return""}function o(t,e){switch("undefined"==typeof t?"undefined":a(t)){case"string":return t===e;case"object":return t instanceof RegExp&&t.test(e);case"function":return t.test&&t.exec?t.test(e):t(e)}return!1}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"function"==typeof IntersectionObserver?new IntersectionObserver(function(t){for(var e=0,n=t.length;n>e;e++){var r=t[e];r.isIntersecting&&r.target&&!r.target.hasAttribute("widget-has-shown")&&(r.target.setAttribute("widget-has-shown",!0),ot&&ot(r.target))}},{root:t,rootMargin:"0px",threshold:[.5,1]}):{observe:function(t){return t}}}!function(t,e){function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||d(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,i=r.width*r.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=o(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(){return t.performance&&performance.now&&performance.now()}function o(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function a(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),i=Math.max(t.left,e.left),o=Math.min(t.right,e.right),s=o-i,a=r-n;return s>=0&&a>=0&&{top:n,bottom:r,left:i,right:o,width:s,height:a}}function u(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):d()}function d(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=f(n)}return!1}function f(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}return"IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype?void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}})):(r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){var e=this._observationTargets.some(function(e){return e.element==t});if(!e){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||0>t||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():d();this._observationTargets.forEach(function(r){var o=r.element,s=u(o),a=this._rootContainsTarget(o),c=r.entry,d=t&&a&&this._computeTargetAndRootIntersection(o,e),h=r.entry=new n({time:i(),target:o,boundingClientRect:s,rootBounds:e,intersectionRect:d});c?t&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var i=u(n),o=i,s=f(n),a=!1;!a;){var d=null,h=1==s.nodeType?t.getComputedStyle(s):{};if("none"==h.display)return;if(s==this.root||s==e?(a=!0,d=r):s!=e.body&&s!=e.documentElement&&"visible"!=h.overflow&&(d=u(s)),d&&(o=c(d,o),!o))break;s=f(s)}return o}},r.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||n>o!=r>o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},r.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},r.prototype._registerInstance=function(){},r.prototype._unregisterInstance=function(){},t.IntersectionObserver=r,void(t.IntersectionObserverEntry=n))}(window,document);var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.prototype={params:function(){var t=[];for(var e in this)this.hasOwnProperty(e)&&"function"!==a(this[e]).toLowerCase()&&t.push(e);return t},define:function(t,e){return this[t]=e,this},update:function(t){var e=this;return this.params().forEach(function(n){t[n]&&(e[n]=t[n])}),this},clone:function(){var t=this,e={};return this.params().forEach(function(n){e[n]=t[n]}),e}};var c=e(),u=new t({name:"tracker",en_widget_show:!1,max_referrer_string_length:200,max_string_length:500,cross_subdomain:!0,show_log:!0,is_debug:!1,debug_mode:!1,debug_mode_upload:!1,session_time:0,use_client_time:!1,source_channel:[],send_type:"ajax",server_url:"https://usertracking.to8to.com/sendPcH5Data",vtrack_ignore:{},auto_init:!0,is_single_page:!1,source_type:{},callback_timeout:200,datasend_timeout:3e3,queue_timeout:300,is_track_device_id:!1,use_app_track:!1,ignore_oom:!0});void 0!==c.en_widget_show&&"false"!=c.en_widget_show&&u.define("en_widget_show",!0),void 0!==c.debug_mode&&"false"!=c.debug_mode&&(u.define("debug_mode",!0),console.log("[debug mode]config: %o",u));var d=Array.prototype,h=Function.prototype,f=Object.prototype,l=d.slice,g=f.toString,p=f.hasOwnProperty,m=(h.bind,d.forEach),v=Array.isArray,_=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},b=function(t){return"[object Object]"==g.call(t)&&null!=t},w=function(t){if("string"!=typeof t)return!1;var e=0,n=null;if(0==t.length)return e;for(var r=0;r<t.length;r++)n=t.charCodeAt(r),e=(e<<5)-e+n,e&=e;return e},y=function(t,e,n){if(null==t)return!1;if(m&&t.forEach===m)t.forEach(e,n);else if(t.length===+t.length){for(var r=0,i=t.length;i>r;r++)if(r in t&&e.call(n,t[r],r,t)==={})return!1}else for(var o in t)if(p.call(t,o)&&e.call(n,t[o],o,t)==={})return!1},k=function(t){var e={};return y(t,function(t,n){null!=t&&(e[n]=t)}),e},S=function(t){var e=t;try{e=decodeURIComponent(t)}catch(n){e=t}return e},C=function(){function t(){return new RegExp(/(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)}function e(t){return S(t.replace(/\+/g," "))}function n(t,e){var n=t.charAt(0),r=e.split(n);return n===t?r:(t=parseInt(t.substring(1),10),r[0>t?r.length+t:t-1])}function r(t,n){for(var r=t.charAt(0),i=n.split("&"),o=[],s={},a=[],c=t.substring(1),u=0,d=i.length;d>u;u++)if(o=i[u].match(/(.*?)=(.*)/),o||(o=[i[u],i[u],""]),""!==o[1].replace(/\s/g,"")){if(o[2]=e(o[2]||""),c===o[1])return o[2];a=o[1].match(/(.*)\[([0-9]+)\]/),a?(s[a[1]]=s[a[1]]||[],s[a[1]][a[2]]=o[2]):s[o[1]]=o[2]}return r===t?s:s[c]}return function(e,i){var o,s={};if("tld?"===e)return t();if(i=i||window.location.toString(),!e)return i;if(e=e.toString(),o=i.match(/^mailto:([^\/].+)/))s.protocol="mailto",s.email=o[1];else{if((o=i.match(/(.*?)\/#\!(.*)/))&&(i=o[1]+o[2]),(o=i.match(/(.*?)#(.*)/))&&(s.hash=o[2],i=o[1]),s.hash&&e.match(/^#/))return r(e,s.hash);if((o=i.match(/(.*?)\?(.*)/))&&(s.query=o[2],i=o[1]),s.query&&e.match(/^\?/))return r(e,s.query);if((o=i.match(/(.*?)\:?\/\/(.*)/))&&(s.protocol=o[1].toLowerCase(),i=o[2]),(o=i.match(/(.*?)(\/.*)/))&&(s.path=o[2],i=o[1]),s.path=(s.path||"").replace(/^([^\/])/,"/$1").replace(/\/$/,""),e.match(/^[\-0-9]+$/)&&(e=e.replace(/^([^\/])/,"/$1")),e.match(/^\//))return n(e,s.path.substring(1));if(o=n("/-1",s.path.substring(1)),o&&(o=o.match(/(.*?)\.(.*)/))&&(s.file=o[0],s.filename=o[1],s.fileext=o[2]),(o=i.match(/(.*)\:([0-9]+)$/))&&(s.port=o[2],i=o[1]),(o=i.match(/(.*?)@(.*)/))&&(s.auth=o[1],i=o[2]),s.auth&&(o=s.auth.match(/(.*)\:(.*)/),s.user=o?o[1]:s.auth,s.pass=o?o[2]:void 0),s.hostname=i.toLowerCase(),"."===e.charAt(0))return n(e,s.hostname);t()&&(o=s.hostname.match(t()),o&&(s.tld=o[3],s.domain=o[2]?o[2]+"."+o[3]:void 0,s.sub=o[1]||void 0)),s.port=s.port||("https"===s.protocol?"443":"80"),s.protocol=s.protocol||("443"===s.port?"https":"http")}return e in s?s[e]:"{}"===e?s:""}}(),x=function(t){return y(l.call(arguments,1),function(e){for(var n in e)e[n]&&(t[n]=e[n])}),t},I=function(t){function e(t){return 10>t?"0"+t:t}return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())+" "+e(t.getHours())+":"+e(t.getMinutes())+":"+e(t.getSeconds())+"."+e(t.getMilliseconds())},T=function(t){for(var e,n=[],r={},i=0;i<t.length;i++)e=t[i],e in r||(r[e]=!0,n.push(e));return n},O=function(t){t=(t+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");var e,n,r,i="",o=0;for(e=n=0,o=t.length,r=0;o>r;r++){var s=t.charCodeAt(r),a=null;128>s?n++:a=s>127&&2048>s?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==a&&(n>e&&(i+=t.substring(e,n)),i+=a,e=n=r+1)}return n>e&&(i+=t.substring(e,t.length)),i},A=function(t){var e,n,r,i,o,s,a,c,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=0,h=0,f="",l=[];if(!t)return t;t=O(t);do e=t.charCodeAt(d++),n=t.charCodeAt(d++),r=t.charCodeAt(d++),c=e<<16|n<<8|r,i=c>>18&63,o=c>>12&63,s=c>>6&63,a=63&c,l[h++]=u.charAt(i)+u.charAt(o)+u.charAt(s)+u.charAt(a);while(d<t.length);switch(f=l.join(""),t.length%3){case 1:f=f.slice(0,-2)+"==";break;case 2:f=f.slice(0,-1)+"="}return f},E=function(){var t=function r(){for(var r=1*new Date,t=0;r==1*new Date;)t++;return r.toString(16)+t.toString(16)},e=function(){return Math.random().toString(16).replace(".","")},n=function i(){function t(t,e){var n,i=0;for(n=0;n<e.length;n++)i|=r[n]<<8*n;return t^i}var i,e,n=navigator.userAgent,r=[],o=0;for(i=0;i<n.length;i++)e=n.charCodeAt(i),r.unshift(255&e),r.length>=4&&(o=t(o,r),r=[]);return r.length>0&&(o=t(o,r)),o.toString(16)};return function(){var r=String(screen.height*screen.width);r=r&&/\d{5,}/.test(r)?r.toString(16):String(31242*Math.random()).replace(".","").slice(0,8);var i=t()+"-"+e()+"-"+n()+"-"+r+"-"+t();return i?i:(String(Math.random())+String(Math.random())+String(Math.random())).slice(2,15)}}(),$=function(t,e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),t=S(t);var n="[\\?&]"+e+"=([^&#]*)",r=new RegExp(n),i=r.exec(t);return null===i||i&&"string"!=typeof i[1]&&i[1].length?"":S(i[1]).replace(/\+/g," ")},R=function(t){if(!t.target)return!1;var e=t.target,n=e.tagName.toLowerCase(),r={};r.$element_type=n,r.$element_name=e.getAttribute("name"),r.$element_id=e.getAttribute("id"),r.$element_class_name="string"==typeof e.className?e.className:null,r.$element_target_url=e.getAttribute("href");var i="";return e.textContent?i=_(e.textContent):e.innerText&&(i=_(e.innerText)),i&&(i=i.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),r.$element_content=i||"","input"===n&&("button"===e.type||"submit"===e.type?r.$element_content=e.value||"":u.para.heatmap&&"function"==typeof u.para.heatmap.collect_input&&u.para.heatmap.collect_input(e)&&(r.$element_content=e.value||"")),r=k(r),r.$url=location.href,r.$url_path=location.pathname,r.$title=document.title,r.$viewport_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,r},N=function(t){if(t){var e=new XMLHttpRequest;return"withCredentials"in e?e:"undefined"!=typeof XDomainRequest?new XDomainRequest:e}if(XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(n){}}},P=function(t){function e(t){if(!t)return"";try{return JSON.parse(t)}catch(e){return{}}}t.timeout=t.timeout||2e4,t.credentials="undefined"==typeof t.credentials||t.credentials;var n=N(t.cors);t.type||(t.type=t.data?"POST":"GET"),t=x({success:function(){},error:function(){}},t);try{"object"==("undefined"==typeof n?"undefined":a(n))&&"timeout"in n?n.timeout=t.timeout:setTimeout(function(){n.abort()},t.timeout+500)}catch(r){try{setTimeout(function(){n.abort()},t.timeout+500)}catch(i){}}n.onreadystatechange=function(){try{4==n.readyState&&(n.status>=200&&n.status<300||304==n.status?t.success(e(n.responseText)):t.error(e(n.responseText),n.status),n.onreadystatechange=null,n.onload=null)}catch(r){n.onreadystatechange=null,n.onload=null}},n.open(t.type,t.url,!0);try{if(t.credentials&&(n.withCredentials=!0),b(t.header))for(var o in t.header)n.setRequestHeader(o,t.header[o]);t.data&&(t.cors||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),"application/json"===t.contentType?n.setRequestHeader("Content-type","application/json; charset=UTF-8"):n.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8"))}catch(r){console.error(r)}n.send(t.data||null)},W=function(){for(var t=(new Date).getTime(),e=1;15e4>e;e++)for(var n=1;1e4>n;n++);return(new Date).getTime()-t},j={trim:_,each:y,strip_empty_properties:k,decodeURIComponent:S,url:C,extend:x,formatDate:I,unique:T,base64Encode:A,UUID:E,getQueryParam:$,getEleInfo:R,hashCode:w,coverExtend:function(t){return y(l.call(arguments,1),function(e){for(var n in e)void 0!==e[n]&&void 0===t[n]&&(t[n]=e[n])}),t},values:function(t){var e=[];return null==t?e:(n(t,function(t){e[e.length]=t}),e)},isArguments:function(t){return!(!t||!p.call(t,"callee"))},isJSONString:function(t){try{JSON.parse(t)}catch(e){return!1}return!0},isArray:v||function(t){return"[object Array]"===g.call(t)},toArray:function(t){return t?t.toArray?t.toArray():this.isArray(t)?l.call(t):this.isArguments(t)?l.call(t):this.values(t):[]},ajax:P,delay:W},M={width:Number(screen.width)||0,height:Number(screen.height)||0},L={name:r(),version:i()},U={id:"123",title:document.title,url:encodeURI(location.href),referer:encodeURI(document.referrer)},q={device:M,os:L,page:U},D={get:function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(e))return j.decodeURIComponent(i.substring(e.length,i.length))}return null},set:function(t,e,n,r,i){r="undefined"==typeof r?u.cross_subdomain:r;var o="",s="",a="";if(n=null==n?73e3:n,r){var c=j.url("domain",location.href);"url解析失败"===c&&(c=""),o=c?"; domain=."+c:""}if(0!==n){var d=new Date;d.setTime("s"===String(n).slice(-1)?d.getTime()+1e3*Number(String(n).slice(0,-1)):d.getTime()+24*n*60*60*1e3),s="; expires="+d.toGMTString()}i&&(a="; secure");var h=t+"="+encodeURIComponent(e)+s+"; path=/"+o+a;return document.cookie=h,h},remove:function(t,e){e="undefined"==typeof e?u.cross_subdomain:e,this.set(t,"",-1,e)}},F={_sessionState:{},_state:{},getProps:function(){return this._state.props||{}},getSessionProps:function(){return this._sessionState},getDistinctId:function(){return this._state.distinct_id},getFirstId:function(){return this._state.distinct_id},toState:function(t){var e=null;if(null!=t&&j.isJSONString(t))if(e=JSON.parse(t),this._state=j.extend(e),e.distinct_id){if("object"==a(e.props)){for(var n in e.props)"string"==typeof e.props[n]&&(e.props[n]=e.props[n].slice(0,u.max_referrer_string_length));this.save()}}else this.set("distinct_id",j.UUID());else this.set("distinct_id",j.UUID())},initSessionState:function(){var t=D.get("tracker2019session"),e=null;null!==t&&"object"==a(e=JSON.parse(t))?this._sessionState=e||{}:this.sessionSave({session:j.UUID()})},setOnce:function(t,e){t in this._state||this.set(t,e)},set:function(t,e){this._state=this._state||{},this._state[t]=e,this.save()},change:function(t,e){this._state[t]=e},setSessionProps:function(t){var e=this._sessionState;j.extend(e,t),this.sessionSave(e)},setSessionPropsOnce:function(t){var e=this._sessionState;j.coverExtend(e,t),this.sessionSave(e)},setProps:function(t,e){var n=this._state.props||{};e?this.set("props",t):(j.extend(n,t),this.set("props",n))},removeProps:function(t){if(!j.isArray(t))return!1;for(var e=this._state.props||{},n=0;n<t.length;n++)t[n]in e&&delete e[n];this.set("props",e)},setPropsOnce:function(t){var e=this._state.props||{};j.coverExtend(e,t),this.set("props",e)},clearAllProps:function(){this._sessionState={};for(var t in this._state.props)1!==t.indexOf("latest_")&&delete this._state.props[t];this.sessionSave({}),this.save()},sessionSave:function(t){this._sessionState=t,D.set("tracker2019session",JSON.stringify(this._sessionState),0)},save:function(){D.set(this.getCookieName(),JSON.stringify(this._state),73e3,u.cross_subdomain)},getCookieName:function(){var t="";return u.cross_subdomain?t="tracker2019jssdkcross":(t=j.url("sub",location.href),t="string"==typeof t&&""!==t?"tracker_jssdk_2019_"+t:"tracker_jssdk_2019_root"),t},init:function(){this.initSessionState();var t=j.UUID(),e=D.get(this.getCookieName());null===e?this.set("distinct_id",t):(this.toState(e),u.debug_mode&&console.log("[debug mode]cookies: %s",e)),u.debug_mode&&console.log("[debug mode]store: %o, %o",this._state,this._sessionState)}};F.init();var H={id:F.getProps().user_id||"",first_id:F.getFirstId(),session:F.getSessionProps().session,is_first_visit_time:!1,refreshFirstId:function(){this.first_id=j.UUID(),F.set("distinct_id",this.first_id)},refreshSession:function(){this.session=j.UUID(),F.setSessionProps({session:this.session})},signUp:function(t){this.id=t,F.set("user_id",t)},login:function(t){this.id=t,F.set("user_id",t)},logout:function(){},checkIsAddSign:function(t){"track"===t.type&&(t.properties.$is_first_day=j.cookie.getNewUser()?!0:!1)},checkIsFirstTime:function(t){"track"===t.type&&"$pageview"===t.event&&(this.is_first_visit_time?(t.properties.$is_first_time=!0,this.is_first_visit_time=!1):t.properties.$is_first_time=!1)},setDeviceId:function(t){var e=null,n=j.cookie.get("sensorsdata2015jssdkcross"),r={};null!=n&&j.isJSONString(n)&&(r=JSON.parse(n),r.$device_id&&(e=r.$device_id)),e=e||t,sd.para.cross_subdomain===!0?store.set("$device_id",e):(r.$device_id=e,j.cookie.set("sensorsdata2015jssdkcross",JSON.stringify(r),null,!0)),sd.para.is_track_device_id&&(j.info.currentProps.$device_id=e)},storeInitCheck:function(){if(is_first_visitor){var t=new Date,e={h:23-t.getHours(),m:59-t.getMinutes(),s:59-t.getSeconds()};j.cookie.set(j.cookie.getCookieName("new_user"),"1",3600*e.h+60*e.m+e.s+"s"),this.is_first_visit_time=!0}else j.cookie.getNewUser()||(this.checkIsAddSign=function(t){"track"===t.type&&(t.properties.$is_first_day=!1)}),this.checkIsFirstTime=function(t){"track"===t.type&&"$pageview"===t.event&&(t.properties.$is_first_time=!1)}},checkIsFirstLatest:function(){for(var t=j.info.pageProp.url_domain,e=j.info.pageProp.referrer_domain,n=["$utm_source","$utm_medium","$utm_campaign","$utm_content","$utm_term"],r=store.getProps(),i=0;i<n.length;i++)n[i]in r&&delete r[n[i]];store.setProps(r,!0),""===t&&(t="url解析失败"),"url解析失败"===t?sd.register({$latest_traffic_source_type:"url的domain解析失败",$latest_referrer:"url的domain解析失败",$latest_referrer_host:"url的domain解析失败",$latest_search_keyword:"url的domain解析失败"}):"referrer解析失败"===e?sd.register({$latest_traffic_source_type:"referrer的domain解析失败",$latest_referrer:"referrer的domain解析失败",$latest_referrer_host:"referrer的domain解析失败",$latest_search_keyword:"referrer的domain解析失败"}):t!==e&&sd.register({$latest_traffic_source_type:j.getSourceFromReferrer(),$latest_referrer:j.info.pageProp.referrer,$latest_referrer_host:j.info.pageProp.referrer_host,$latest_search_keyword:j.getKeywordFromReferrer()});var o=j.info.campaignParamsStandard("$latest_","_latest_"),s=o.$utms,a=o.otherUtms;j.isEmptyObject(s)||sd.register(s),j.isEmptyObject(a)||sd.register(a)}},z=function(t){var e=/javascript|file:/i,n=t;return e.test(t)&&(n=t.replace(/javascript|file:/gi,"")),n},X=new t({app_name:"",sdk_version:"0.3.4",screen_width:q.device.width,screen_height:q.device.height,os:q.os.name,os_version:q.os.version,page_uid:q.page.id,page_title:q.page.title,page_url:z(q.page.url),page_refer_url:z(q.page.referer),first_id:H.first_id,session:H.session,user_id:H.id});c&&X.update(c),c.debug_id&&X.define("debug_id",c.debug_id),u.debug_mode&&console.log("[debug mode]BaseData: %o",X);var B={};B.getSendUrl=function(t,e){var n=j.base64Encode(e),r="crc="+j.hashCode(n);return-1!==t.indexOf("?")?t+"&data="+encodeURIComponent(n)+"&ext="+encodeURIComponent(r):t+"?data="+encodeURIComponent(n)+"&ext="+encodeURIComponent(r)},B.getSendData=function(t){var e=j.base64Encode(t),n="crc="+j.hashCode(e);return"data="+encodeURIComponent(e)+"&ext="+encodeURIComponent(n)},B.getInstance=function(t){var e={};e=!t.config||"image"!==t.config.send_type&&"ajax"!==t.config.send_type&&"beacon"!==t.config.send_type?new this[u.send_type](t):new this[t.config.send_type](t);var n=e.start;return e.start=function(){var t=this;n.apply(this,arguments),setTimeout(function(){t.isEnd(!0)},u.callback_timeout)},e.end=function(t){this.callback&&this.callback(t);var e=this;setTimeout(function(){e.lastClear&&e.lastClear()},u.datasend_timeout-u.callback_timeout)},e.isEnd=function(t){if(!this.received){this.received=!0,this.end(t);var e=this;t?u.queue_timeout-u.callback_timeout<=0?e.close():setTimeout(function(){e.close()},u.queue_timeout-u.callback_timeout):e.close()}},e},B.image=function(t){this.callback=t.callback,this.img=document.createElement("img"),this.img.width=1,this.img.height=1,this.data=t.data,this.server_url=B.getSendUrl(t.server_url,t.data)},B.image.prototype.start=function(){var t=this;u.ignore_oom&&(this.img.onload=function(){this.onload=null,this.onerror=null,this.onabort=null,t.isEnd()},this.img.onerror=function(){this.onload=null,this.onerror=null,this.onabort=null,t.isEnd()},this.img.onabort=function(){this.onload=null,this.onerror=null,this.onabort=null,t.isEnd()}),this.img.src=this.server_url},B.image.prototype.lastClear=function(){this.img.src=""},B.ajax=function(t){this.callback=t.callback,this.server_url=t.server_url,this.data=t.data},B.ajax.prototype.start=function(){var t=this;j.ajax({url:this.server_url,type:"POST",header:{Accept:"application/json, text/javascript, */*; q=0.01"},data:this.data,credentials:!0,timeout:u.datasend_timeout,cors:!0,success:function(e){t.isEnd(e)},error:function(e){t.isEnd(e)}})},B.beacon=function(t){this.callback=t.callback,this.server_url=t.server_url,this.data=B.getSendData(t.data)},B.beacon.prototype.start=function(){var t=this;"object"==("undefined"==typeof navigator?"undefined":a(navigator))&&"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(this.server_url,this.data),setTimeout(function(){t.isEnd()},40)};var J=function(){this.tasks=[],this.isRun=!1};J.prototype={enqueue:function(t){this.tasks.push(t),this.start()},dequeue:function(){return this.tasks.shift()},getCurrentTask:function(){return this.tasks[0]},start:function(){this.tasks.length>0&&!this.isRun&&(this.isRun=!0,this.getCurrentTask().start())},close:function(){this.dequeue(),this.isRun=!1,this.start()}};var V=new J,K=function(t){var e=B.getInstance({contentType:"application/x-www-form-urlencoded",data:"data="+encodeURIComponent(JSON.stringify(t)),server_url:u.server_url,callback:function(t){u.debug_mode&&console.log("[debug mode]send callback: %o",t)}});e.close=function(){V.close()},V.enqueue(e)},Z=function(t){var e=new FormData;return e.append("data",encodeURIComponent(JSON.stringify(t))),navigator&&"sendBeacon"in navigator?navigator.sendBeacon(u.server_url,e):!1},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"webTrack";this.data=X.clone();var n=z(encodeURI(location.href));this.data.page_url!==n&&(this.data.page_url=n),this.data.type=e,this.data.event=t,this.data.time=(new Date).getTime()};G.prototype={checkOption:{regChecks:{regName:/^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},checkPropertiesKey:function(t){var e=this,n=!0;return j.each(t,function(t,r){e.regChecks.regName.test(r)||(n=!1)}),n},check:function(t,e){return"string"==typeof this[t]?this[this[t]](e):this[t](e)},str:function(t){return!!j.isString(t)||(logger.info("请检查参数格式,必须是字符串"),!0)},properties:function(t){return j.strip_sa_properties(t),!(t&&(j.isObject(t)?!this.checkPropertiesKey(t)&&(logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"),0):(logger.info("properties可以没有，但有的话必须是对象"),0)))},propertiesMust:function(t){return j.strip_sa_properties(t),void 0===t||!j.isObject(t)||j.isEmptyObject(t)?(logger.info("properties必须是对象且有值"),!0):!!this.checkPropertiesKey(t)||(logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"),!0)},event:function(t){return!(!j.isString(t)||!this.regChecks.regName.test(t))||(logger.info("请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字"),!0)},test_id:"str",group_id:"str",distinct_id:function(t){return!(!j.isString(t)||!/^.{1,255}$/.test(t))||(logger.info("distinct_id必须是不能为空，且小于255位的字符串"),!1)}},check:function(){},send:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=j.extend({},this.data);return e.properties=t,u.debug_mode&&console.log("[debug mode]send data: %o",e),"webPageHide"===e.event?void(Z(e)||(K(e),j.delay())):void K(e)}};var Q=function(){this.evts={},this.uid=-1};Q.prototype={emit:function(t,e){if(!this.evts[t])return!1;for(var n=this.evts[t],r=n?n.length:0;r--;)"function"==typeof n[r].handler&&n[r].handler(e);

return this},on:function(t,e){this.evts[t]||(this.evts[t]=[]);var n=(++this.uid).toString();return this.evts[t].push({token:n,handler:e}),n},off:function(t){for(eh in this.evts)if(this.evts[eh])for(var e=0,n=this.evts[eh].length;n>e;e++)if(this.evts[eh][e].token===t)return this.evts[eh].splice(e,1),t;return this}};var Y={getTextFromEle:function(t){var e="";t.textContent?e=t.textContent:t.innerText&&(e=t.innerText);var n=t.tagName.toLowerCase();return e||"input"!==n||(e=t.value||""),e&&(e=e.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),j.trim(e)},getEleXPath:function(t){var e=t.parentNode,n=e?e.children:"",r=t.tagName,i=0,o=0;if(""!==t.id)return"#"+t.id;if(t===document.body)return"html>"+t.tagName.toLowerCase();for(o=0;o<n.length;o++)if(n[o].tagName===r){if(n[o]===t)return this.getEleXPath(t.parentNode)+">"+t.tagName.toLowerCase()+"["+i+"]";i+=1}return t.tagName.toLowerCase()+"["+i+"]"},getDomIndex:function(t){if(!t.parentNode)return-1;for(var e=0,n=t.tagName,r=t.parentNode.children,i=0,o=r.length;o>i;i++)if(r[i].tagName===n){if(t===r[i])return e;e++}return-1},getAllAttributes:function(t){for(var e=t.attributes,n=null,r=0,i=e.length;i>r;r++){var o=e[r].name,s=t.getAttribute(o);s&&(n||(n={}),n[o.toLowerCase()]=s)}return n}},tt=function(t){this.filters=t||[]};tt.prototype={use:function(t){this.filters.push(t)},exec:function(t){if(!t||"object"!==("undefined"==typeof t?"undefined":a(t)))return{};for(var e={},n=0,r=this.filters.length;r>n;n++)for(var i in t)t.hasOwnProperty(i)&&o(this.filters[n],i)&&(e[i]=t[i]);return e}};var et=new tt(["id","name","src","href","title","target",/^widget_[a-zA-Z0-9]+$/,/^data-[a-zA-Z0-9_]+$/]),nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",rt={encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);128>r?e+=String.fromCharCode(r):r>127&&2048>r?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e},decode:function(t){for(var e="",n=0,r=0,i=0,o=0;n<t.length;)r=t.charCodeAt(n),128>r?(e+=String.fromCharCode(r),n++):r>191&&224>r?(i=t.charCodeAt(n+1),e+=String.fromCharCode((31&r)<<6|63&i),n+=2):(i=t.charCodeAt(n+1),o=t.charCodeAt(n+2),e+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o),n+=3);return e}},it={encode:function(t){var e="",n=void 0,r=void 0,i=void 0,o=void 0,s=void 0,a=void 0,c=void 0,u=0;for(t=rt.encode(t);u<t.length;)n=t.charCodeAt(u++),r=t.charCodeAt(u++),i=t.charCodeAt(u++),o=n>>2,s=(3&n)<<4|r>>4,a=(15&r)<<2|i>>6,c=63&i,isNaN(r)?a=c=64:isNaN(i)&&(c=64),e=e+nt.charAt(o)+nt.charAt(s)+nt.charAt(a)+nt.charAt(c);return e},decode:function(t){var e="",n=void 0,r=void 0,i=void 0,o=void 0,s=void 0,a=void 0,c=void 0,u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)o=nt.indexOf(t.charAt(u++)),s=nt.indexOf(t.charAt(u++)),a=nt.indexOf(t.charAt(u++)),c=nt.indexOf(t.charAt(u++)),n=o<<2|s>>4,r=(15&s)<<4|a>>2,i=(3&a)<<6|c,e+=String.fromCharCode(n),64!=a&&(e+=String.fromCharCode(r)),64!=c&&(e+=String.fromCharCode(i));return e=rt.decode(e)}},ot=null,st=function(){return s()}(),at={getWather:function(t){var e=s(t);return{watch:function(t){return e.observe(t)}}},onshow:function(t){ot=t},watch:function(t){st.observe(t)}},ct=new Q,ut=function(t){if(u.debug_mode&&console.log("[debug mode]findNearestAncestorWidget: %o",t),!t)return null;for(var e=t.tagName.toLowerCase();"body"!==e&&"a"!==e&&!t.hasAttribute("tracker-widget")&&(t=t.parentNode,e=t&&t.tagName&&t.tagName.toLowerCase()||"",e&&u.debug_mode&&console.log("[debug mode]ele.tagName.toLowerCase(): %s",e),e););return"body"!==e&&"html"!==e&&""!==e?t:null},dt=function(t){var e={};for(var n in t)/^data-[a-zA-Z0-9_]+$/.test(n)&&(e[n.split("-")[1]]=t[n]);return e},ht=function(t){var e=et.exec(Y.getAllAttributes(t)),n={widget_uid:e.widget_uid||e.id||it.encode(X.page_uid+Y.getEleXPath(t)),widget_tag:t.tagName.toLowerCase(),widget_target:e.widget_target||e.target||"",widget_src:e.widget_src||e.src||"",widget_href:e.widget_href||e.href||"",widget_title:e.widget_title||e.title||Y.getTextFromEle(t),widget_position:e.widget_position||"",widget_index:e.widget_index||Y.getDomIndex(t)};for(var r in n)n[r]&&(n[r]=z(n[r]));return n=j.extend(n,dt(e))},ft=function(){return document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}();if(ft(window,"load",function(t){ct.emit("webPageShow",t)}),ft(window,"unload",function(t){ct.emit("webPageHide",t)}),ft(document,"click",function(t){var e=t.target;if(e=ut(e)){u.debug_mode&&console.log("[debug mode]click event: %o",t);var n=e.tagName.toLowerCase(),r=Y.getAllAttributes(e),i=ht(e),o=new G("webWidgetClick").data;return o=j.extend({},o),o.properties=i,"a"===n&&r&&r.href&&"#"!==r.href&&-1===r.href.indexOf("void(0)")?void(Z(o)||(t.preventDefault(),K(o),setTimeout(function(){window.location.href=r.href},300))):void ct.emit("webWidgetClick",i)}}),u.en_widget_show){at.onshow(function(t){if(t){var e=ht(t);ct.emit("webWidgetShow",e),u.debug_mode&&console.log("[debug mode]webWidgetShow: %o",e)}});var lt=document.querySelectorAll("[tracker-widget]");u.debug_mode&&console.log("[debug mode]webWidgetShow watch: %o",lt);for(var gt=0,pt=lt.length;pt>gt;gt++)at.watch(lt[gt])}var mt={$onWebPageShow:function(t){ct.on("webPageShow",t)},$onWebPageHide:function(t){ct.on("webPageHide",t)},$onWebWidgetClick:function(t){ct.on("webWidgetClick",t)},$onWebWidgetShow:function(t){ct.on("webWidgetShow",t)}},vt="0.3.4",_t=function(t){this.init(t)};_t.version=vt;var bt=_t.prototype,wt=function(){var t=window.T8TTrackerLoaded||!1;return function(){t||(mt.$onWebPageHide(function(){return new G("webPageHide").send()}),mt.$onWebWidgetClick(function(t){return new G("webWidgetClick").send(t)}),mt.$onWebWidgetShow(function(t){return new G("webWidgetShow").send(t)}),t=!0,window.T8TTrackerLoaded=!0)}}();return _t.init=bt.init=function(t){("undefined"==typeof t?"undefined":a(t))===a("")?X.define("app_name",t):("undefined"==typeof t?"undefined":a(t))===a({})&&X.update(t);var e=window.runWebPageShow||!1;!e&&""!=X.app_name&&X.app_name.length>0&&(window.runWebPageShow=!0,new G("webPageShow").send()),wt()},_t.send=bt.send=function(t,e){u.debug_mode&&console.log("[debug mode]send event: %s properties: %o",t,e);try{new G(t).send(e)}catch(n){console.error(n)}},_t._=j,_t.cookie=D,_t.DataMap=t,_t.DataSend=B,_t.Base64=it,_t.EventCommonData=X,_t.watch=function(t){return at.watch(t)},_t.getWather=function(t){return at.getWather(t)},_t.init(),_t});