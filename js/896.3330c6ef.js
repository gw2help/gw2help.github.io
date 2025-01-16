"use strict";(self["webpackChunkgw2help_github_io"]=self["webpackChunkgw2help_github_io"]||[]).push([[896],{2896:function(e,t,n){n.d(t,{A:function(){return mh}});var i={};n.r(i);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+s.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},h=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],h=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(1023&h))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,h=a?e[s+2]:0,l=t>>2,c=(3&t)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,r||(u=64)),i.push(n[l],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,h=a?n[e.charAt(s)]:64;++s;const l=s<e.length,u=l?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==h||null==u)throw new c;const d=t<<2|o>>4;if(i.push(d),64!==h){const e=o<<4&240|h>>2;if(i.push(e),64!==u){const e=h<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=a(e);return l.encodeByteArray(t,!0)},d=function(e){return u(e).replace(/\./g,"")},p=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=f(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return!0===s.NODE_CLIENT||!0===s.NODE_ADMIN}function b(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(zt){t(zt)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?k(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new S(i,o,n);return a}}function k(e,t){return e.replace(N,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=R(p(r[0])||""),n=R(p(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:t,claims:n,data:i,signature:s}},x=function(e){const t=D(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=D(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],h=this.chain_[3],l=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(i=h^o&(a^h),s=1518500249):(i=o^a^h,s=1859775393):c<60?(i=o&a|h&(o|a),s=2400959708):(i=o^a^h,s=3395469782);const e=(r<<5|r>>>27)+i+l+s+n[c]&4294967295;l=h,h=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<t){if(0===r)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<t)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function B(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},H=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}class V{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=[];var $;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})($||($={}));const K={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Y=$.INFO,G={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Q=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=G[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class J{constructor(e){this.name=e,this._logLevel=Y,this._logHandler=Q,this._userLogHandler=null,z.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?K[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const X=(e,t)=>t.some((t=>e instanceof t));let Z,ee;function te(){return Z||(Z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ne(){return ee||(ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ie=new WeakMap,se=new WeakMap,re=new WeakMap,oe=new WeakMap,ae=new WeakMap;function he(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(_e(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ie.set(t,e)})).catch((()=>{})),ae.set(t,e),t}function le(e){if(se.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));se.set(e,t)}let ce={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||re.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ue(e){ce=e(ce)}function de(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ne().includes(e)?function(...t){return e.apply(fe(this),t),_e(ie.get(this))}:function(...t){return _e(e.apply(fe(this),t))}:function(t,...n){const i=e.call(fe(this),t,...n);return re.set(i,t.sort?t.sort():[t]),_e(i)}}function pe(e){return"function"===typeof e?de(e):(e instanceof IDBTransaction&&le(e),X(e,te())?new Proxy(e,ce):e)}function _e(e){if(e instanceof IDBRequest)return he(e);if(oe.has(e))return oe.get(e);const t=pe(e);return t!==e&&(oe.set(e,t),ae.set(t,e)),t}const fe=e=>ae.get(e);function ge(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=_e(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(_e(o.result),e.oldVersion,e.newVersion,_e(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const me=["get","getKey","getAll","getAllKeys","count"],ye=["put","add","delete","clear"],ve=new Map;function Ce(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(ve.get(t))return ve.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=ye.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!me.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return ve.set(t,r),r}ue((e=>({...e,get:(t,n,i)=>Ce(t,n)||e.get(t,n,i),has:(t,n)=>!!Ce(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(be(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function be(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Te="@firebase/app",Ie="0.10.17",Se=new J("@firebase/app"),Ee="@firebase/app-compat",ke="@firebase/analytics-compat",Ne="@firebase/analytics",Re="@firebase/app-check-compat",Pe="@firebase/app-check",De="@firebase/auth",xe="@firebase/auth-compat",Ae="@firebase/database",Oe="@firebase/data-connect",Me="@firebase/database-compat",Le="@firebase/functions",Fe="@firebase/functions-compat",qe="@firebase/installations",We="@firebase/installations-compat",Be="@firebase/messaging",Ue="@firebase/messaging-compat",He="@firebase/performance",je="@firebase/performance-compat",Ve="@firebase/remote-config",ze="@firebase/remote-config-compat",$e="@firebase/storage",Ke="@firebase/storage-compat",Ye="@firebase/firestore",Ge="@firebase/vertexai",Qe="@firebase/firestore-compat",Je="firebase",Xe="11.1.0",Ze={[Te]:"fire-core",[Ee]:"fire-core-compat",[Ne]:"fire-analytics",[ke]:"fire-analytics-compat",[Pe]:"fire-app-check",[Re]:"fire-app-check-compat",[De]:"fire-auth",[xe]:"fire-auth-compat",[Ae]:"fire-rtdb",[Oe]:"fire-data-connect",[Me]:"fire-rtdb-compat",[Le]:"fire-fn",[Fe]:"fire-fn-compat",[qe]:"fire-iid",[We]:"fire-iid-compat",[Be]:"fire-fcm",[Ue]:"fire-fcm-compat",[He]:"fire-perf",[je]:"fire-perf-compat",[Ve]:"fire-rc",[ze]:"fire-rc-compat",[$e]:"fire-gcs",[Ke]:"fire-gcs-compat",[Ye]:"fire-fst",[Qe]:"fire-fst-compat",[Ge]:"fire-vertex","fire-js":"fire-js",[Je]:"fire-js-all"},et=new Map,tt=new Map,nt=new Map;function it(e,t){try{e.container.addComponent(t)}catch(n){Se.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function st(e){const t=e.name;if(nt.has(t))return Se.debug(`There were multiple attempts to register component ${t}.`),!1;nt.set(t,e);for(const n of et.values())it(n,e);for(const n of tt.values())it(n,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ot=new E("app","Firebase",rt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=Xe;function ht(e,t,n){var i;let s=null!==(i=Ze[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Se.warn(e.join(" "))}st(new V(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt="firebase-heartbeat-database",ct=1,ut="firebase-heartbeat-store";let dt=null;function pt(){return dt||(dt=ge(lt,ct,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ut)}catch(n){console.warn(n)}}}}).catch((e=>{throw ot.create("idb-open",{originalErrorMessage:e.message})}))),dt}async function _t(e){try{const t=await pt(),n=t.transaction(ut),i=await n.objectStore(ut).get(gt(e));return await n.done,i}catch(t){if(t instanceof S)Se.warn(t.message);else{const e=ot.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});Se.warn(e.message)}}}async function ft(e,t){try{const n=await pt(),i=n.transaction(ut,"readwrite"),s=i.objectStore(ut);await s.put(t,gt(e)),await i.done}catch(n){if(n instanceof S)Se.warn(n.message);else{const e=ot.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});Se.warn(e.message)}}}function gt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=1024,yt=2592e6;class vt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),s=Ct();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((e=>e.date===s)))return;return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=yt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){Se.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ct(),{heartbeatsToSend:n,unsentEntries:i}=wt(this._heartbeatsCache.heartbeats),s=d(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Se.warn(t),""}}}function Ct(){const e=new Date;return e.toISOString().substring(0,10)}function wt(e,t=mt){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Tt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class bt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!b()&&T().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await _t(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Tt(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){st(new V("platform-logger",(e=>new we(e)),"PRIVATE")),st(new V("heartbeat",(e=>new vt(e)),"PRIVATE")),ht(Te,Ie,e),ht(Te,Ie,"esm2017"),ht("fire-js","")}It("");var St="firebase",Et="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ht(St,Et,"app");const kt="@firebase/database",Nt="1.0.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rt="";function Pt(e){Rt=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:R(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return O(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Dt(t)}}catch(t){}return new xt},Ot=At("localStorage"),Mt=At("sessionStorage"),Lt=new J("@firebase/database"),Ft=function(){let e=1;return function(){return e++}}(),qt=function(e){const t=U(e),n=new W;n.update(t);const i=n.digest();return l.encodeByteArray(i)},Wt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=Wt.apply(null,i):t+="object"===typeof i?P(i):i,t+=" "}return t};let Bt=null,Ut=!0;const Ht=function(e,t){r(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Lt.logLevel=$.VERBOSE,Bt=Lt.log.bind(Lt),t&&Mt.set("logging_enabled",!0)):"function"===typeof e?Bt=e:(Bt=null,Mt.remove("logging_enabled"))},jt=function(...e){if(!0===Ut&&(Ut=!1,null===Bt&&!0===Mt.get("logging_enabled")&&Ht(!0)),Bt){const t=Wt.apply(null,e);Bt(t)}},Vt=function(e){return function(...t){jt(e,...t)}},zt=function(...e){const t="FIREBASE INTERNAL ERROR: "+Wt(...e);Lt.error(t)},$t=function(...e){const t=`FIREBASE FATAL ERROR: ${Wt(...e)}`;throw Lt.error(t),new Error(t)},Kt=function(...e){const t="FIREBASE WARNING: "+Wt(...e);Lt.warn(t)},Yt=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gt=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Qt=function(e){if(w()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},Jt="[MIN_NAME]",Xt="[MAX_NAME]",Zt=function(e,t){if(e===t)return 0;if(e===Jt||t===Xt)return-1;if(t===Jt||e===Xt)return 1;{const n=dn(e),i=dn(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},en=function(e,t){return e===t?0:e<t?-1:1},tn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+P(t))},nn=function(e){if("object"!==typeof e||null===e)return P(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=P(t[i]),n+=":",n+=nn(e[t[i]]);return n+="}",n},sn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function rn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const on=function(e){r(!Gt(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,h,l;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=h+i,a=Math.round(e*Math.pow(2,n-h)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(u.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},an=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},hn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const ln=new RegExp("^-?(0*)\\d{1,10}$"),cn=-2147483648,un=2147483647,dn=function(e){if(ln.test(e)){const t=Number(e);if(t>=cn&&t<=un)return t}return null},pn=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Kt("Exception was thrown by user callback.",e),t}),Math.floor(0))}},_n=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fn=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class yn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="5",Cn="v",wn="s",bn="r",Tn="f",In=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sn="ls",En="p",kn="ac",Nn="websocket",Rn="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ot.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Dn(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function xn(e,t,n){let i;if(r("string"===typeof t,"typeof type must == string"),r("object"===typeof n,"typeof params must == object"),t===Nn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Rn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Dn(e)&&(n["ns"]=e.namespace);const s=[];return rn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.counters_={}}incrementCounter(e,t=1){O(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return _(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={},Mn={};function Ln(e){const t=e.toString();return On[t]||(On[t]=new An),On[t]}function Fn(e,t){const n=e.toString();return Mn[n]||(Mn[n]=t()),Mn[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&pn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="start",Bn="close",Un="pLPCommand",Hn="pRTLPCB",jn="id",Vn="pw",zn="ser",$n="cb",Kn="seg",Yn="ts",Gn="d",Qn="dframe",Jn=1870,Xn=30,Zn=Jn-Xn,ei=25e3,ti=3e4;class ni{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vt(e),this.stats_=Ln(t),this.urlFn=e=>(this.appCheckToken&&(e[kn]=this.appCheckToken),xn(t,Rn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(ti)),Qt((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ii(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Wn)this.id=n,this.password=i;else{if(t!==Bn)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Wn]="t",e[zn]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[$n]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Cn]=vn,this.transportSessionId&&(e[wn]=this.transportSessionId),this.lastSessionId&&(e[Sn]=this.lastSessionId),this.applicationId&&(e[En]=this.applicationId),this.appCheckToken&&(e[kn]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&In.test(location.hostname)&&(e[bn]=Tn);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return!w()&&(!!ni.forceAllow_||!ni.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!an()&&!hn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=u(t),i=sn(n,Zn);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(w())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Qn]="t",n[jn]=e,n[Vn]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ii{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,w())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Ft(),window[Un+this.uniqueCallbackIdentifier]=e,window[Hn+this.uniqueCallbackIdentifier]=t,this.myIFrame=ii.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){jt("frame writing exception"),s.stack&&jt(s.stack),jt(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||jt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jn]=this.myID,e[Vn]=this.myPW,e[zn]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Xn+n.length<=Jn))break;{const e=this.pendingSegs.shift();n=n+"&"+Kn+i+"="+e.seg+"&"+Yn+i+"="+e.ts+"&"+Gn+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(ei)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){w()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=16384,ri=45e3;let oi=null;"undefined"!==typeof MozWebSocket?oi=MozWebSocket:"undefined"!==typeof WebSocket&&(oi=WebSocket);class ai{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vt(this.connId),this.stats_=Ln(t),this.connURL=ai.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[Cn]=vn,!w()&&"undefined"!==typeof location&&location.hostname&&In.test(location.hostname)&&(r[bn]=Tn),t&&(r[wn]=t),n&&(r[Sn]=n),i&&(r[kn]=i),s&&(r[En]=s),xn(e,Nn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ot.set("previous_websocket_failure",!0);try{let e;if(w()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${vn}/${Rt}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new oi(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==oi&&!ai.forceDisallow_}static previouslyFailed(){return Ot.isInMemoryStorage||!0===Ot.get("previous_websocket_failure")}markConnectionHealthy(){Ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=R(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(r(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=sn(t,si);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(ri))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ai.responsesRequiredToBeHealthy=2,ai.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{static get ALL_TRANSPORTS(){return[ni,ai]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ai&&ai["isAvailable"]();let n=t&&!ai.previouslyFailed();if(e.webSocketOnly&&(t||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ai];else{const e=this.transports_=[];for(const t of hi.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hi.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li=6e4,ci=5e3,ui=10240,di=102400,pi="t",_i="d",fi="s",gi="r",mi="e",yi="o",vi="a",Ci="n",wi="p",bi="h";class Ti{constructor(e,t,n,i,s,r,o,a,h,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vt("c:"+this.id+":"),this.transportManager_=new hi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=fn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>di?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ui?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pi in e){const t=e[pi];t===vi?this.upgradeIfSecondaryHealthy_():t===gi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===yi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=tn("t",e),n=tn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ci,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=tn("t",e),n=tn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=tn(pi,e);if(_i in e){const n=e[_i];if(t===bi){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ci){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===fi?this.onConnectionShutdown_(n):t===gi?this.onReset_(n):t===mi?zt("Server Error: "+n):t===yi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vn!==n&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),fn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(li))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(ci))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.allowedEvents_=e,this.listeners_={},r(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){r(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Si{static getInstance(){return new Ei}constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||v()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}getInitialEvent(e){return r("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=32,Ni=768;class Ri{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Pi(){return new Ri("")}function Di(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xi(e){return e.pieces_.length-e.pieceNum_}function Ai(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ri(e.pieces_,t)}function Oi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Mi(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Li(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Fi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ri(t,0)}function qi(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Ri)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ri(n,0)}function Wi(e){return e.pieceNum_>=e.pieces_.length}function Bi(e,t){const n=Di(e),i=Di(t);if(null===n)return t;if(n===i)return Bi(Ai(e),Ai(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ui(e,t){if(xi(e)!==xi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Hi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(xi(e)>xi(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ji{constructor(e,t){this.errorPrefix_=t,this.parts_=Li(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=H(this.parts_[n]);$i(this)}}function Vi(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=H(t),$i(e)}function zi(e){const t=e.parts_.pop();e.byteLength_-=H(t),e.parts_.length>0&&(e.byteLength_-=1)}function $i(e){if(e.byteLength_>Ni)throw new Error(e.errorPrefix_+"has a key path longer than "+Ni+" bytes ("+e.byteLength_+").");if(e.parts_.length>ki)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ki+") or object contains a cycle "+Ki(e))}function Ki(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Si{static getInstance(){return new Yi}constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}getInitialEvent(e){return r("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=1e3,Qi=3e5,Ji=3e4,Xi=1.3,Zi=3e4,es="server_kill",ts=3;class ns extends Ii{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ns.nextPersistentConnectionId_++,this.log_=Vt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=Qi,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!w())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yi.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(P(s)),r(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new m,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),r(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];ns.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&O(e,"w")){const n=M(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||A(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ji)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=x(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):zt("Unrecognized action received from server: "+P(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){r(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Zi&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xi)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ns.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const h=function(){a?a.close():(o=!0,n())},l=function(e){r(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:h,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=h&&h.token,a=new Ti(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Kt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(es)}),s))}catch(zt){this.log_("Failed to get token: "+zt),o||(this.repoInfo_.nodeAdmin&&Kt(zt),h())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],L(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>nn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ri(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ts&&(this.reconnectDelay_=Ji,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ts&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";w()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Rt.replace(/\./g,"-")]=1,v()?e["framework.cordova"]=1:C()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return L(this.interruptReasons_)&&e}}ns.nextPersistentConnectionId_=0,ns.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new is(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new is(Jt,e),i=new is(Jt,t);return 0!==this.compare(n,i)}minPost(){return is.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class os extends ss{static get __EMPTY_NODE(){return rs}static set __EMPTY_NODE(e){rs=e}compare(e,t){return Zt(e.name,t.name)}isDefinedOn(e){throw o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return is.MIN}maxPost(){return new is(Xt,rs)}makePost(e,t){return r("string"===typeof e,"KeyIndex indexValue must always be a string."),new is(e,rs)}toString(){return".key"}}const as=new os;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ls{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:ls.RED,this.left=null!=i?i:us.EMPTY_NODE,this.right=null!=s?s:us.EMPTY_NODE}copy(e,t,n,i,s){return new ls(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return us.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return us.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ls.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ls.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ls.RED=!0,ls.BLACK=!1;class cs{copy(e,t,n,i,s){return this}insert(e,t,n){return new ls(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class us{constructor(e,t=us.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new us(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ls.BLACK,null,null))}remove(e){return new us(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ls.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ds(e,t){return Zt(e.name,t.name)}function ps(e,t){return Zt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;function fs(e){_s=e}us.EMPTY_NODE=new cs;const gs=function(e){return"number"===typeof e?"number:"+on(e):"string:"+e},ms=function(e){if(e.isLeafNode()){const t=e.val();r("string"===typeof t||"number"===typeof t||"object"===typeof t&&O(t,".sv"),"Priority must be a string or number.")}else r(e===_s||e.isEmpty(),"priority of unexpected type.");r(e===_s||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ys,vs,Cs;class ws{static set __childrenNodeConstructor(e){ys=e}static get __childrenNodeConstructor(){return ys}constructor(e,t=ws.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,r(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ms(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ws(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ws.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Wi(e)?this:".priority"===Di(e)?this.priorityNode_:ws.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ws.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Di(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(r(".priority"!==n||1===xi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ws.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ai(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?on(this.value_):this.value_,this.lazyHash_=qt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ws.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ws.__childrenNodeConstructor?-1:(r(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ws.VALUE_TYPE_ORDER.indexOf(t),s=ws.VALUE_TYPE_ORDER.indexOf(n);return r(i>=0,"Unknown leaf type: "+t),r(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function bs(e){vs=e}function Ts(e){Cs=e}ws.VALUE_TYPE_ORDER=["object","boolean","number","string"];class Is extends ss{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Zt(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return is.MIN}maxPost(){return new is(Xt,new ws("[PRIORITY-POST]",Cs))}makePost(e,t){const n=vs(e);return new is(t,new ws("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ss=new Is,Es=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){const t=e=>parseInt(Math.log(e)/Es,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ns=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new ls(a,o.node,ls.BLACK,null,null);{const h=parseInt(r/2,10)+t,l=s(t,h),c=s(h+1,i);return o=e[h],a=n?n(o):o,new ls(a,o.node,ls.BLACK,l,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),c=e[r],u=n?n(c):c;h(new ls(u,c.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ls.BLACK):(a(i,ls.BLACK),a(i,ls.RED))}return r},o=new ks(e.length),a=r(o);return new us(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;const Ps={};class Ds{static get Default(){return r(Ps&&Ss,"ChildrenNode.ts has not been loaded"),Rs=Rs||new Ds({".priority":Ps},{".priority":Ss}),Rs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=M(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof us?t:null}hasIndex(e){return O(this.indexSet_,e.toString())}addIndex(e,t){r(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(is.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?Ns(n,e.getCompare()):Ps;const h=e.toString(),l=Object.assign({},this.indexSet_);l[h]=e;const c=Object.assign({},this.indexes_);return c[h]=o,new Ds(c,l)}addToIndexes(e,t){const n=F(this.indexes_,((n,i)=>{const s=M(this.indexSet_,i);if(r(s,"Missing index implementation for "+i),n===Ps){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(is.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Ns(n,s.getCompare())}return Ps}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new is(e.name,i))),s.insert(e,e.node)}}));return new Ds(n,this.indexSet_)}removeFromIndexes(e,t){const n=F(this.indexes_,(n=>{if(n===Ps)return n;{const i=t.get(e.name);return i?n.remove(new is(e.name,i)):n}}));return new Ds(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;class As{static get EMPTY_NODE(){return xs||(xs=new As(new us(ps),null,Ds.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ms(this.priorityNode_),this.children_.isEmpty()&&r(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xs}updatePriority(e){return this.children_.isEmpty()?this:new As(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?xs:t}}getChild(e){const t=Di(e);return null===t?this:this.getImmediateChild(t).getChild(Ai(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(r(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new is(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?xs:this.priorityNode_;return new As(i,r,s)}}updateChild(e,t){const n=Di(e);if(null===n)return t;{r(".priority"!==Di(e)||1===xi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ai(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ss,((r,o)=>{t[r]=o.val(e),n++,s&&As.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+gs(this.getPriority().val())+":"),this.forEachChild(Ss,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":qt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new is(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new is(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new is(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,is.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,is.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ms?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new As(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ss),n=t.getIterator(Ss);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}As.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Os extends As{constructor(){super(new us(ps),As.EMPTY_NODE,Ds.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return As.EMPTY_NODE}isEmpty(){return!1}}const Ms=new Os;Object.defineProperties(is,{MIN:{value:new is(Jt,As.EMPTY_NODE)},MAX:{value:new is(Xt,Ms)}}),os.__EMPTY_NODE=As.EMPTY_NODE,ws.__childrenNodeConstructor=As,fs(Ms),Ts(Ms);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ls=!0;function Fs(e,t=null){if(null===e)return As.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),r(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new ws(n,Fs(t))}if(e instanceof Array||!Ls){let n=As.EMPTY_NODE;return rn(e,((t,i)=>{if(O(e,t)&&"."!==t.substring(0,1)){const e=Fs(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Fs(t))}{const n=[];let i=!1;const s=e;if(rn(s,((e,t)=>{if("."!==e.substring(0,1)){const s=Fs(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new is(e,s)))}})),0===n.length)return As.EMPTY_NODE;const r=Ns(n,ds,(e=>e.name),ps);if(i){const e=Ns(n,Ss.getCompare());return new As(r,Fs(t),new Ds({".priority":e},{".priority":Ss}))}return new As(r,Fs(t),Ds.Default)}}bs(Fs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs extends ss{constructor(e){super(),this.indexPath_=e,r(!Wi(e)&&".priority"!==Di(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Zt(e.name,t.name):s}makePost(e,t){const n=Fs(e),i=As.EMPTY_NODE.updateChild(this.indexPath_,n);return new is(t,i)}maxPost(){const e=As.EMPTY_NODE.updateChild(this.indexPath_,Ms);return new is(Xt,e)}toString(){return Li(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends ss{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Zt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return is.MIN}maxPost(){return is.MAX}makePost(e,t){const n=Fs(e);return new is(t,n)}toString(){return".value"}}const Bs=new Ws;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e){return{type:"value",snapshotNode:e}}function Hs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function js(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Vs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function zs(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ss}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return r(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return r(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jt}hasEnd(){return this.endSet_}getIndexEndValue(){return r(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return r(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return r(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ss}copy(){const e=new $s;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ks(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ss?n="$priority":e.index_===Bs?n="$value":e.index_===as?n="$key":(r(e.index_ instanceof qs,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=P(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=P(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+P(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=P(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+P(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ys(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==Ss&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Ii{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(r(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Vt("p:rest:"),this.listens_={}}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Gs.getListenId_(e,n),o={};this.listens_[r]=o;const a=Ks(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),M(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Gs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ks(e._queryParams),n=e._path.toString(),i=new m;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+q(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=R(o.responseText)}catch(e){Kt("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Kt("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.rootNode_=As.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){return{value:null,children:new Map}}function Xs(e,t,n){if(Wi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Di(t);e.children.has(i)||e.children.set(i,Js());const s=e.children.get(i);t=Ai(t),Xs(s,t,n)}}function Zs(e,t,n){null!==e.value?n(t,e.value):er(e,((e,i)=>{const s=new Ri(t.toString()+"/"+e);Zs(i,s,n)}))}function er(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&rn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=1e4,ir=3e4,sr=3e5;class rr{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tr(e);const n=nr+(ir-nr)*Math.random();fn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;rn(e,((e,i)=>{i>0&&O(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),fn(this.reportStats_.bind(this),Math.floor(2*Math.random()*sr))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or;function ar(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(or||(or={}));class cr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=or.ACK_USER_WRITE,this.source=ar()}operationForChild(e){if(Wi(this.path)){if(null!=this.affectedTree.value)return r(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ri(e));return new cr(Pi(),t,this.revert)}}return r(Di(this.path)===e,"operationForChild called for unrelated child."),new cr(Ai(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=or.OVERWRITE}operationForChild(e){return Wi(this.path)?new ur(this.source,Pi(),this.snap.getImmediateChild(e)):new ur(this.source,Ai(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=or.MERGE}operationForChild(e){if(Wi(this.path)){const t=this.children.subtree(new Ri(e));return t.isEmpty()?null:t.value?new ur(this.source,Pi(),t.value):new dr(this.source,Pi(),t)}return r(Di(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dr(this.source,Ai(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Wi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Di(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(zs(t.childName,t.snapshotNode))})),fr(e,s,"child_removed",t,i,n),fr(e,s,"child_added",t,i,n),fr(e,s,"child_moved",r,i,n),fr(e,s,"child_changed",t,i,n),fr(e,s,"value",t,i,n),s}function fr(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>mr(e,t,n))),o.forEach((n=>{const i=gr(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function gr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function mr(e,t,n){if(null==t.childName||null==n.childName)throw o("Should only compare child_ events.");const i=new is(t.childName,t.snapshotNode),s=new is(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t){return{eventCache:e,serverCache:t}}function vr(e,t,n,i){return yr(new pr(t,n,i),e.serverCache)}function Cr(e,t,n,i){return yr(e.eventCache,new pr(t,n,i))}function wr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function br(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;const Ir=()=>(Tr||(Tr=new us(en)),Tr);class Sr{static fromObject(e){let t=new Sr(null);return rn(e,((e,n)=>{t=t.set(new Ri(e),n)})),t}constructor(e,t=Ir()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Pi(),value:this.value};if(Wi(e))return null;{const n=Di(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Ai(e),t);if(null!=s){const e=qi(new Ri(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Wi(e))return this;{const t=Di(e),n=this.children.get(t);return null!==n?n.subtree(Ai(e)):new Sr(null)}}set(e,t){if(Wi(e))return new Sr(t,this.children);{const n=Di(e),i=this.children.get(n)||new Sr(null),s=i.set(Ai(e),t),r=this.children.insert(n,s);return new Sr(this.value,r)}}remove(e){if(Wi(e))return this.children.isEmpty()?new Sr(null):new Sr(null,this.children);{const t=Di(e),n=this.children.get(t);if(n){const i=n.remove(Ai(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Sr(null):new Sr(this.value,s)}return this}}get(e){if(Wi(e))return this.value;{const t=Di(e),n=this.children.get(t);return n?n.get(Ai(e)):null}}setTree(e,t){if(Wi(e))return t;{const n=Di(e),i=this.children.get(n)||new Sr(null),s=i.setTree(Ai(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Sr(this.value,r)}}fold(e){return this.fold_(Pi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(qi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Pi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Wi(e))return null;{const i=Di(e),s=this.children.get(i);return s?s.findOnPath_(Ai(e),qi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Pi(),t)}foreachOnPath_(e,t,n){if(Wi(e))return this;{this.value&&n(t,this.value);const i=Di(e),s=this.children.get(i);return s?s.foreachOnPath_(Ai(e),qi(t,i),n):new Sr(null)}}foreach(e){this.foreach_(Pi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(qi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.writeTree_=e}static empty(){return new Er(new Sr(null))}}function kr(e,t,n){if(Wi(t))return new Er(new Sr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Bi(s,t);return r=r.updateChild(o,n),new Er(e.writeTree_.set(s,r))}{const i=new Sr(n),s=e.writeTree_.setTree(t,i);return new Er(s)}}}function Nr(e,t,n){let i=e;return rn(n,((e,n)=>{i=kr(i,qi(t,e),n)})),i}function Rr(e,t){if(Wi(t))return Er.empty();{const n=e.writeTree_.setTree(t,new Sr(null));return new Er(n)}}function Pr(e,t){return null!=Dr(e,t)}function Dr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Bi(n.path,t)):null}function xr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ss,((e,n)=>{t.push(new is(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new is(e,n.value))})),t}function Ar(e,t){if(Wi(t))return e;{const n=Dr(e,t);return new Er(null!=n?new Sr(n):e.writeTree_.subtree(t))}}function Or(e){return e.writeTree_.isEmpty()}function Mr(e,t){return Lr(Pi(),e.writeTree_,t)}function Lr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(r(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Lr(qi(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(qi(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e,t){return ro(t,e)}function qr(e,t,n,i,s){r(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=kr(e.visibleWrites,t,n)),e.lastWriteId=i}function Wr(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Br(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));r(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ur(t,i.path)?s=!1:Hi(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return Hr(e),!0;if(i.snap)e.visibleWrites=Rr(e.visibleWrites,i.path);else{const t=i.children;rn(t,(t=>{e.visibleWrites=Rr(e.visibleWrites,qi(i.path,t))}))}return!0}return!1}function Ur(e,t){if(e.snap)return Hi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Hi(qi(e.path,n),t))return!0;return!1}function Hr(e){e.visibleWrites=Vr(e.allWrites,jr,Pi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function jr(e){return e.visible}function Vr(e,t,n){let i=Er.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Hi(n,e)?(t=Bi(n,e),i=kr(i,t,r.snap)):Hi(e,n)&&(t=Bi(e,n),i=kr(i,Pi(),r.snap.getChild(t)));else{if(!r.children)throw o("WriteRecord should have .snap or .children");if(Hi(n,e))t=Bi(n,e),i=Nr(i,t,r.children);else if(Hi(e,n))if(t=Bi(e,n),Wi(t))i=Nr(i,Pi(),r.children);else{const e=M(r.children,Di(t));if(e){const n=e.getChild(Ai(t));i=kr(i,Pi(),n)}}}}}return i}function zr(e,t,n,i,s){if(i||s){const r=Ar(e.visibleWrites,t);if(!s&&Or(r))return n;if(s||null!=n||Pr(r,Pi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Hi(e.path,t)||Hi(t,e.path))},o=Vr(e.allWrites,r,t),a=n||As.EMPTY_NODE;return Mr(o,a)}return null}{const i=Dr(e.visibleWrites,t);if(null!=i)return i;{const i=Ar(e.visibleWrites,t);if(Or(i))return n;if(null!=n||Pr(i,Pi())){const e=n||As.EMPTY_NODE;return Mr(i,e)}return null}}}function $r(e,t,n){let i=As.EMPTY_NODE;const s=Dr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ss,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Ar(e.visibleWrites,t);return n.forEachChild(Ss,((e,t)=>{const n=Mr(Ar(s,new Ri(e)),t);i=i.updateImmediateChild(e,n)})),xr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=Ar(e.visibleWrites,t);return xr(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Kr(e,t,n,i,s){r(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=qi(t,n);if(Pr(e.visibleWrites,o))return null;{const t=Ar(e.visibleWrites,o);return Or(t)?s.getChild(n):Mr(t,s.getChild(n))}}function Yr(e,t,n,i){const s=qi(t,n),r=Dr(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=Ar(e.visibleWrites,s);return Mr(t,i.getNode().getImmediateChild(n))}return null}function Gr(e,t){return Dr(e.visibleWrites,t)}function Qr(e,t,n,i,s,r,o){let a;const h=Ar(e.visibleWrites,t),l=Dr(h,Pi());if(null!=l)a=l;else{if(null==n)return[];a=Mr(h,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=n.getNext();while(h&&e.length<s)0!==t(h,i)&&e.push(h),h=n.getNext();return e}}function Jr(){return{visibleWrites:Er.empty(),allWrites:[],lastWriteId:-1}}function Xr(e,t,n,i){return zr(e.writeTree,e.treePath,t,n,i)}function Zr(e,t){return $r(e.writeTree,e.treePath,t)}function eo(e,t,n,i){return Kr(e.writeTree,e.treePath,t,n,i)}function to(e,t){return Gr(e.writeTree,qi(e.treePath,t))}function no(e,t,n,i,s,r){return Qr(e.writeTree,e.treePath,t,n,i,s,r)}function io(e,t,n){return Yr(e.writeTree,e.treePath,t,n)}function so(e,t){return ro(qi(e.treePath,t),e.writeTree)}function ro(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;r("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),r(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Vs(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,js(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Hs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw o("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Vs(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ho=new ao;class lo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return io(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:br(this.viewCache_),s=no(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t){r(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),r(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function uo(e,t,n,i,s){const a=new oo;let h,l;if(n.type===or.OVERWRITE){const o=n;o.source.fromUser?h=go(e,t,o.path,o.snap,i,s,a):(r(o.source.fromServer,"Unknown source."),l=o.source.tagged||t.serverCache.isFiltered()&&!Wi(o.path),h=fo(e,t,o.path,o.snap,i,s,l,a))}else if(n.type===or.MERGE){const o=n;o.source.fromUser?h=yo(e,t,o.path,o.children,i,s,a):(r(o.source.fromServer,"Unknown source."),l=o.source.tagged||t.serverCache.isFiltered(),h=Co(e,t,o.path,o.children,i,s,l,a))}else if(n.type===or.ACK_USER_WRITE){const r=n;h=r.revert?To(e,t,r.path,i,s,a):wo(e,t,r.path,r.affectedTree,i,s,a)}else{if(n.type!==or.LISTEN_COMPLETE)throw o("Unknown operation type: "+n.type);h=bo(e,t,n.path,i,a)}const c=a.getChanges();return po(t,h,c),{viewCache:h,changes:c}}function po(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=wr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Us(wr(t)))}}function _o(e,t,n,i,s,o){const a=t.eventCache;if(null!=to(i,n))return t;{let h,l;if(Wi(n))if(r(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=br(t),s=n instanceof As?n:As.EMPTY_NODE,r=Zr(i,s);h=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Xr(i,br(t));h=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Di(n);if(".priority"===c){r(1===xi(n),"Can't have a priority with additional path components");const s=a.getNode();l=t.serverCache.getNode();const o=eo(i,n,s,l);h=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=Ai(n);let u;if(a.isCompleteForChild(c)){l=t.serverCache.getNode();const e=eo(i,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(c).updateChild(r,e):a.getNode().getImmediateChild(c)}else u=io(i,c,t.serverCache);h=null!=u?e.filter.updateChild(a.getNode(),c,u,r,s,o):a.getNode()}}return vr(t,h,a.isFullyInitialized()||Wi(n),e.filter.filtersNodes())}}function fo(e,t,n,i,s,r,o,a){const h=t.serverCache;let l;const c=o?e.filter:e.filter.getIndexedFilter();if(Wi(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){const e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{const e=Di(n);if(!h.isCompleteForPath(n)&&xi(n)>1)return t;const s=Ai(n),r=h.getNode().getImmediateChild(e),o=r.updateChild(s,i);l=".priority"===e?c.updatePriority(h.getNode(),o):c.updateChild(h.getNode(),e,o,s,ho,null)}const u=Cr(t,l,h.isFullyInitialized()||Wi(n),c.filtersNodes()),d=new lo(s,u,r);return _o(e,u,n,s,d,a)}function go(e,t,n,i,s,r,o){const a=t.eventCache;let h,l;const c=new lo(s,t,r);if(Wi(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=vr(t,l,!0,e.filter.filtersNodes());else{const s=Di(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),h=vr(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=Ai(n),l=a.getNode().getImmediateChild(s);let u;if(Wi(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Oi(r)&&e.getChild(Fi(r)).isEmpty()?e:e.updateChild(r,i):As.EMPTY_NODE}if(l.equals(u))h=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,c,o);h=vr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function mo(e,t){return e.eventCache.isCompleteForChild(t)}function yo(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,h)=>{const l=qi(n,i);mo(t,Di(l))&&(a=go(e,a,l,h,s,r,o))})),i.foreach(((i,h)=>{const l=qi(n,i);mo(t,Di(l))||(a=go(e,a,l,h,s,r,o))})),a}function vo(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Co(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h,l=t;h=Wi(n)?i:new Sr(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const h=t.serverCache.getNode().getImmediateChild(n),c=vo(e,h,i);l=fo(e,l,new Ri(n),c,s,r,o,a)}})),h.children.inorderTraversal(((n,i)=>{const h=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!h){const h=t.serverCache.getNode().getImmediateChild(n),c=vo(e,h,i);l=fo(e,l,new Ri(n),c,s,r,o,a)}})),l}function wo(e,t,n,i,s,r,o){if(null!=to(s,n))return t;const a=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(Wi(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return fo(e,t,n,h.getNode().getChild(n),s,r,a,o);if(Wi(n)){let i=new Sr(null);return h.getNode().forEachChild(as,((e,t)=>{i=i.set(new Ri(e),t)})),Co(e,t,n,i,s,r,a,o)}return t}{let l=new Sr(null);return i.foreach(((e,t)=>{const i=qi(n,e);h.isCompleteForPath(i)&&(l=l.set(e,h.getNode().getChild(i)))})),Co(e,t,n,l,s,r,a,o)}}function bo(e,t,n,i,s){const r=t.serverCache,o=Cr(t,r.getNode(),r.isFullyInitialized()||Wi(n),r.isFiltered());return _o(e,o,n,i,ho,s)}function To(e,t,n,i,s,o){let a;if(null!=to(i,n))return t;{const h=new lo(i,t,s),l=t.eventCache.getNode();let c;if(Wi(n)||".priority"===Di(n)){let n;if(t.serverCache.isFullyInitialized())n=Xr(i,br(t));else{const e=t.serverCache.getNode();r(e instanceof As,"serverChildren would be complete if leaf node"),n=Zr(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const s=Di(n);let r=io(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=l.getImmediateChild(s)),c=null!=r?e.filter.updateChild(l,s,r,Ai(n),h,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,As.EMPTY_NODE,Ai(n),h,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Xr(i,br(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=to(i,Pi()),vr(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e,t){const n=br(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Wi(t)&&!n.getImmediateChild(Di(t)).isEmpty())?n.getChild(t):null}function So(e,t,n,i){t.type===or.MERGE&&null!==t.source.queryId&&(r(br(e.viewCache_),"We should always have a full cache before handling merges"),r(wr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=uo(e.processor_,s,t,n,i);return co(e.processor_,o.viewCache),r(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Eo(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Eo(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return _r(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko,No;function Ro(e){r(!ko,"__referenceConstructor has already been defined"),ko=e}function Po(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return r(null!=o,"SyncTree gave us an op for an invalid query."),So(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(So(r,t,n,i));return s}}function Do(e,t){let n=null;for(const i of e.views.values())n=n||Io(i,t);return n}function xo(e){r(!No,"__referenceConstructor has already been defined"),No=e}class Ao{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Sr(null),this.pendingWriteTree_=Jr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Oo(e,t,n,i,s){return qr(e.pendingWriteTree_,t,n,i,s),s?Uo(e,new ur(ar(),t,n)):[]}function Mo(e,t,n=!1){const i=Wr(e.pendingWriteTree_,t),s=Br(e.pendingWriteTree_,t);if(s){let t=new Sr(null);return null!=i.snap?t=t.set(Pi(),!0):rn(i.children,(e=>{t=t.set(new Ri(e),!0)})),Uo(e,new cr(i.path,t,n))}return[]}function Lo(e,t,n){return Uo(e,new ur(hr(),t,n))}function Fo(e,t,n){const i=Sr.fromObject(n);return Uo(e,new dr(hr(),t,i))}function qo(e,t,n,i){const s=Vo(e,i);if(null!=s){const i=zo(s),r=i.path,o=i.queryId,a=Bi(r,t),h=new ur(lr(o),a,n);return $o(e,r,h)}return[]}function Wo(e,t,n,i){const s=Vo(e,i);if(s){const i=zo(s),r=i.path,o=i.queryId,a=Bi(r,t),h=Sr.fromObject(n),l=new dr(lr(o),a,h);return $o(e,r,l)}return[]}function Bo(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Bi(e,t),s=Do(n,i);if(s)return s}));return zr(s,t,r,n,i)}function Uo(e,t){return Ho(t,e.syncPointTree_,null,Fr(e.pendingWriteTree_,Pi()))}function Ho(e,t,n,i){if(Wi(e.path))return jo(e,t,n,i);{const s=t.get(Pi());null==n&&null!=s&&(n=Do(s,Pi()));let r=[];const o=Di(e.path),a=e.operationForChild(o),h=t.children.get(o);if(h&&a){const e=n?n.getImmediateChild(o):null,t=so(i,o);r=r.concat(Ho(a,h,e,t))}return s&&(r=r.concat(Po(s,e,i,n))),r}}function jo(e,t,n,i){const s=t.get(Pi());null==n&&null!=s&&(n=Do(s,Pi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=so(i,t),h=e.operationForChild(t);h&&(r=r.concat(jo(h,s,o,a)))})),s&&(r=r.concat(Po(s,e,i,n))),r}function Vo(e,t){return e.tagToQueryMap.get(t)}function zo(e){const t=e.indexOf("$");return r(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ri(e.substr(0,t))}}function $o(e,t,n){const i=e.syncPointTree_.get(t);r(i,"Missing sync point for query tag that we're tracking");const s=Fr(e.pendingWriteTree_,t);return Po(i,n,s,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ko(t)}node(){return this.node_}}class Yo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qi(this.path_,e);return new Yo(this.syncTree_,t)}node(){return Bo(this.syncTree_,this.path_)}}const Go=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Qo=function(e,t,n){return e&&"object"===typeof e?(r(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Jo(e[".sv"],t,n):"object"===typeof e[".sv"]?Xo(e[".sv"],t):void r(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Jo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:r(!1,"Unexpected server value: "+e)}},Xo=function(e,t,n){e.hasOwnProperty("increment")||r(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&r(!1,"Unexpected increment value: "+i);const s=t.node();if(r(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},Zo=function(e,t,n,i){return ta(t,new Yo(n,e),i)},ea=function(e,t,n){return ta(e,new Ko(t),n)};function ta(e,t,n){const i=e.getPriority().val(),s=Qo(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Qo(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new ws(r,Fs(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new ws(s))),i.forEachChild(Ss,((e,i)=>{const s=ta(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ia(e,t){let n=t instanceof Ri?t:new Ri(t),i=e,s=Di(n);while(null!==s){const e=M(i.node.children,s)||{children:{},childCount:0};i=new na(s,i,e),n=Ai(n),s=Di(n)}return i}function sa(e){return e.node.value}function ra(e,t){e.node.value=t,da(e)}function oa(e){return e.node.childCount>0}function aa(e){return void 0===sa(e)&&!oa(e)}function ha(e,t){rn(e.node.children,((n,i)=>{t(new na(n,e,i))}))}function la(e,t,n,i){n&&!i&&t(e),ha(e,(e=>{la(e,t,!0,i)})),n&&i&&t(e)}function ca(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function ua(e){return new Ri(null===e.parent?e.name:ua(e.parent)+"/"+e.name)}function da(e){null!==e.parent&&pa(e.parent,e.name,e)}function pa(e,t,n){const i=aa(n),s=O(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,da(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,da(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=/[\[\].#$\/\u0000-\u001F\u007F]/,fa=/[\[\].#$\u0000-\u001F\u007F]/,ga=10485760,ma=function(e){return"string"===typeof e&&0!==e.length&&!_a.test(e)},ya=function(e){return"string"===typeof e&&0!==e.length&&!fa.test(e)},va=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ya(e)},Ca=function(e,t,n){const i=n instanceof Ri?new ji(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ki(i));if("function"===typeof t)throw new Error(e+"contains a function "+Ki(i)+" with contents = "+t.toString());if(Gt(t))throw new Error(e+"contains "+t.toString()+" "+Ki(i));if("string"===typeof t&&t.length>ga/3&&H(t)>ga)throw new Error(e+"contains a string greater than "+ga+" utf8 bytes "+Ki(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(rn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ma(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ki(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Vi(i,t),Ca(e,r,i),zi(i)})),n&&s)throw new Error(e+' contains ".value" child '+Ki(i)+" in addition to actual children.")}},wa=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!ma(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!va(n))throw new Error(B(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ta(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Ui(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Ia(e,t,n){Ta(e,n),Sa(e,(e=>Hi(e,t)||Hi(t,e)))}function Sa(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Ea(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ea(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Bt&&jt("event: "+n.toString()),pn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="repo_interrupt",Na=25;class Ra{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ba,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Js(),this.transactionQueueTree_=new na,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pa(e,t,n){if(e.stats_=Ln(e.repoInfo_),e.forceRestClient_||_n())e.server_=new Gs(e.repoInfo_,((t,n,i,s)=>{Aa(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Oa(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new ns(e.repoInfo_,t,((t,n,i,s)=>{Aa(e,t,n,i,s)}),(t=>{Oa(e,t)}),(t=>{Ma(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Fn(e.repoInfo_,(()=>new rr(e.stats_,e.server_))),e.infoData_=new Qs,e.infoSyncTree_=new Ao({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Lo(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),La(e,"connected",!1),e.serverSyncTree_=new Ao({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Ia(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Da(e){const t=e.infoData_.getNode(new Ri(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function xa(e){return Go({timestamp:Da(e)})}function Aa(e,t,n,i,s){e.dataUpdateCount++;const r=new Ri(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=F(n,(e=>Fs(e)));o=Wo(e.serverSyncTree_,r,t,s)}else{const t=Fs(n);o=qo(e.serverSyncTree_,r,t,s)}else if(i){const t=F(n,(e=>Fs(e)));o=Fo(e.serverSyncTree_,r,t)}else{const t=Fs(n);o=Lo(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Va(e,r)),Ia(e.eventQueue_,a,o)}function Oa(e,t){La(e,"connected",t),!1===t&&qa(e)}function Ma(e,t){rn(t,((t,n)=>{La(e,t,n)}))}function La(e,t,n){const i=new Ri("/.info/"+t),s=Fs(n);e.infoData_.updateSnapshot(i,s);const r=Lo(e.infoSyncTree_,i,s);Ia(e.eventQueue_,i,r)}function Fa(e){return e.nextWriteId_++}function qa(e){Ba(e,"onDisconnectEvents");const t=xa(e),n=Js();Zs(e.onDisconnect_,Pi(),((i,s)=>{const r=Zo(i,s,e.serverSyncTree_,t);Xs(n,i,r)}));let i=[];Zs(n,Pi(),((t,n)=>{i=i.concat(Lo(e.serverSyncTree_,t,n));const s=Qa(e,t);Va(e,s)})),e.onDisconnect_=Js(),Ia(e.eventQueue_,Pi(),i)}function Wa(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ka)}function Ba(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),jt(n,...t)}function Ua(e,t,n){return Bo(e.serverSyncTree_,t,n)||As.EMPTY_NODE}function Ha(e,t=e.transactionQueueTree_){if(t||Ga(e,t),sa(t)){const n=Ka(e,t);r(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&ja(e,ua(t),n)}else oa(t)&&ha(t,(t=>{Ha(e,t)}))}function ja(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Ua(e,t,i);let o=s;const a=s.hash();for(let c=0;c<n.length;c++){const e=n[c];r(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Bi(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const h=o.val(!0),l=t;e.server_.put(l.toString(),h,(i=>{Ba(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Mo(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ga(e,ia(e.transactionQueueTree_,t)),Ha(e,e.transactionQueueTree_),Ia(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)pn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Kt("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Va(e,t)}}),a)}function Va(e,t){const n=$a(e,t),i=ua(n),s=Ka(e,n);return za(e,s,i),i}function za(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let h=0;h<t.length;h++){const o=t[h],l=Bi(n,o.path);let c,u=!1;if(r(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,c=o.abortReason,s=s.concat(Mo(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Na)u=!0,c="maxretry",s=s.concat(Mo(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Ua(e,o.path,a);o.currentInputSnapshot=n;const i=t[h].update(n.val());if(void 0!==i){Ca("transaction failed: Data returned ",i,o.path);let t=Fs(i);const r="object"===typeof i&&null!=i&&O(i,".priority");r||(t=t.updatePriority(n.getPriority()));const h=o.currentWriteId,l=xa(e),c=ea(t,n,l);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=c,o.currentWriteId=Fa(e),a.splice(a.indexOf(h),1),s=s.concat(Oo(e.serverSyncTree_,o.path,c,o.currentWriteId,o.applyLocally)),s=s.concat(Mo(e.serverSyncTree_,h,!0))}else u=!0,c="nodata",s=s.concat(Mo(e.serverSyncTree_,o.currentWriteId,!0))}Ia(e.eventQueue_,n,s),s=[],u&&(t[h].status=2,function(e){setTimeout(e,Math.floor(0))}(t[h].unwatcher),t[h].onComplete&&("nodata"===c?i.push((()=>t[h].onComplete(null,!1,t[h].currentInputSnapshot))):i.push((()=>t[h].onComplete(new Error(c),!1,null)))))}Ga(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)pn(i[r]);Ha(e,e.transactionQueueTree_)}function $a(e,t){let n,i=e.transactionQueueTree_;n=Di(t);while(null!==n&&void 0===sa(i))i=ia(i,n),t=Ai(t),n=Di(t);return i}function Ka(e,t){const n=[];return Ya(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ya(e,t,n){const i=sa(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ha(t,(t=>{Ya(e,t,n)}))}function Ga(e,t){const n=sa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ra(t,n.length>0?n:void 0)}ha(t,(t=>{Ga(e,t)}))}function Qa(e,t){const n=ua($a(e,t)),i=ia(e.transactionQueueTree_,t);return ca(i,(t=>{Ja(e,t)})),Ja(e,i),la(i,(t=>{Ja(e,t)})),n}function Ja(e,t){const n=sa(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(r(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(r(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Mo(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ra(t,void 0):n.length=o+1,Ia(e.eventQueue_,ua(t),s);for(let e=0;e<i.length;e++)pn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Za(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Kt(`Invalid query segment '${n}' in query '${e}'`)}return t}const eh=function(e,t){const n=th(e),i=n.namespace;"firebase.com"===n.domain&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Yt();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Pn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new Ri(n.pathString)}},th=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",h=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=Xa(e.substring(c,u)));const d=Za(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},nh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Wi(this._path)?null:Oi(this._path)}get ref(){return new sh(this._repo,this._path)}get _queryIdentifier(){const e=Ys(this._queryParams),t=nn(e);return"{}"===t?"default":t}get _queryObject(){return Ys(this._queryParams)}isEqual(e){if(e=j(e),!(e instanceof ih))return!1;const t=this._repo===e._repo,n=Ui(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mi(this._path)}}class sh extends ih{constructor(e,t){super(e,t,new $s,!1)}get parent(){const e=Fi(this._path);return null===e?null:new sh(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}Ro(sh),xo(sh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rh="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let ah=!1;function hh(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=eh(r,s),l=h.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[rh]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,h=eh(r,s),l=h.repoInfo):o=!h.repoInfo.secure;const c=s&&o?new yn(yn.OWNER):new mn(e.name,e.options,t);wa("Invalid Firebase Database URL",h),Wi(h.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ch(l,e,c,new gn(e.name,n));return new uh(u,e)}function lh(e,t){const n=oh[t];n&&n[e.key]===e||$t(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Wa(e),delete n[e.key]}function ch(e,t,n,i){let s=oh[t.name];s||(s={},oh[t.name]=s);let r=s[e.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ra(e,ah,n,i),s[e.toURLString()]=r,r}class uh{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pa(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new sh(this._repo,Pi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(lh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&$t("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dh(e){Pt(at),st(new V("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hh(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),ht(kt,Nt,e),ht(kt,Nt,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ns.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};dh();let ph={apiKey:"AIzaSyDdICBzFRSHuU_JKFUgY4VbSLEooNpVJx4",authDomain:"gw2db-6cb51.firebaseapp.com",databaseURL:"https://gw2db-6cb51-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gw2db-6cb51",storageBucket:"gw2db-6cb51.appspot.com",messagingSenderId:"1004135867206",appId:"1:1004135867206:web:7aa2f45e288ea64deb7b47"};i["default"].initializeApp(ph);var _h=i["default"].database();let fh=_h.ref("/array");class gh{getAll(){var e,t=[];return fh=_h.ref("/array/builds"),fh.on("value",(function(n){n.forEach((function(n){e=n.val(),t.push(e)}))})),console.log("CRUDSERVICE"),console.log(t),t}getAllText(){return fh=_h.ref("/array/accounts"),fh}create(e){switch(console.log(e),e.class){case"guardian":fh=_h.ref("/array/builds/0/guardian/0");break;case"revenant":fh=_h.ref("/array/builds/0/revenant/0");break;case"ranger":fh=_h.ref("/array/builds/0/ranger/0");break;case"engineer":fh=_h.ref("/array/builds/0/engineer/0");break;case"mesmer":fh=_h.ref("/array/builds/0/mesmer/0");break;case"thief":fh=_h.ref("/array/builds/0/thief/0");break;case"necromancer":fh=_h.ref("/array/builds/0/necromancer/0");break;case"warrior":fh=_h.ref("/array/builds/0/warrior/0");break;case"elementalist":fh=_h.ref("/array/builds/0/elementalist/0");break}return fh.push(e)}createPerson(e){return fh=_h.ref("/array/accounts"),fh.push(e)}getAccounts(){var e,t=[];fh=_h.ref("/array/accounts"),console.log("DATABASE ACCOUNTS"),console.log(fh),fh.on("value",(function(n){return n.forEach((function(n){e=n.val(),t.push(e)})),console.log("CRUDSERVICE =>> get Accounts"),console.log(t),t}))}}var mh=new gh}}]);
//# sourceMappingURL=896.3330c6ef.js.map