"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5758],{5758:(sr,or,E)=>{var ft=E(9574),P=E(8779),y=E(1401),ye=E(5398),h=E(1631),l=E(467),dt=E(6749);const Ae="@firebase/installations",F="0.6.9",be=1e4,Se=`w:${F}`,ve="FIS_v2",pt="https://firebaseinstallations.googleapis.com/v1",gt=36e5,_=new y.FA("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Re(e){return e instanceof y.g&&e.code.includes("request-failed")}function U({projectId:e}){return`${pt}/projects/${e}/installations`}function Ne(e){return{token:e.token,requestStatus:2,expiresIn:Tt(e.expiresIn),creationTime:Date.now()}}function x(e,t){return D.apply(this,arguments)}function D(){return(D=(0,l.A)(function*(e,t){const r=(yield t.json()).error;return _.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})).apply(this,arguments)}function ke({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function L(e){return q.apply(this,arguments)}function q(){return(q=(0,l.A)(function*(e){const t=yield e();return t.status>=500&&t.status<600?e():t})).apply(this,arguments)}function Tt(e){return Number(e.replace("s","000"))}function V(){return(V=(0,l.A)(function*({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=U(e),i=ke(e),s=t.getImmediate({optional:!0});if(s){const d=yield s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={method:"POST",headers:i,body:JSON.stringify({fid:n,authVersion:ve,appId:e.appId,sdkVersion:Se})},g=yield L(()=>fetch(r,a));if(g.ok){const d=yield g.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ne(d.authToken)}}throw yield x("Create Installation",g)})).apply(this,arguments)}function we(e){return new Promise(t=>{setTimeout(t,e)})}const At=/^[cdef][\w-]{21}$/,B="";function bt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=function St(e){return function yt(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22)}(e);return At.test(n)?n:B}catch{return B}}function S(e){return`${e.appName}!${e.appId}`}const v=new Map;function Ce(e,t){const n=S(e);Me(n,t),function Nt(e,t){const n=function Oe(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=e=>{Me(e.data.key,e.data.fid)}),A}();n&&n.postMessage({key:e,fid:t}),function Fe(){0===v.size&&A&&(A.close(),A=null)}()}(n,t)}function Me(e,t){const n=v.get(e);if(n)for(const r of n)r(t)}let A=null;const kt="firebase-installations-database",Pt=1,b="firebase-installations-store";let j=null;function $(){return j||(j=(0,dt.P2)(kt,Pt,{upgrade:(e,t)=>{0===t&&e.createObjectStore(b)}})),j}function w(e,t){return z.apply(this,arguments)}function z(){return(z=(0,l.A)(function*(e,t){const n=S(e),i=(yield $()).transaction(b,"readwrite"),s=i.objectStore(b),o=yield s.get(n);return yield s.put(t,n),yield i.done,(!o||o.fid!==t.fid)&&Ce(e,t.fid),t})).apply(this,arguments)}function K(e){return G.apply(this,arguments)}function G(){return(G=(0,l.A)(function*(e){const t=S(e),r=(yield $()).transaction(b,"readwrite");yield r.objectStore(b).delete(t),yield r.done})).apply(this,arguments)}function R(e,t){return H.apply(this,arguments)}function H(){return(H=(0,l.A)(function*(e,t){const n=S(e),i=(yield $()).transaction(b,"readwrite"),s=i.objectStore(b),o=yield s.get(n),a=t(o);return void 0===a?yield s.delete(n):yield s.put(a,n),yield i.done,a&&(!o||o.fid!==a.fid)&&Ce(e,a.fid),a})).apply(this,arguments)}function W(e){return X.apply(this,arguments)}function X(){return X=(0,l.A)(function*(e){let t;const n=yield R(e.appConfig,r=>{const i=function wt(e){return xe(e||{fid:bt(),registrationStatus:0})}(r),s=function Ct(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(_.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function Mt(e,t){return J.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ot(e)}:{installationEntry:t}}(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===B?{installationEntry:yield t}:{installationEntry:n,registrationPromise:t}}),X.apply(this,arguments)}function J(){return J=(0,l.A)(function*(e,t){try{const n=yield function Et(e,t){return V.apply(this,arguments)}(e,t);return w(e.appConfig,n)}catch(n){throw Re(n)&&409===n.customData.serverCode?yield K(e.appConfig):yield w(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}),J.apply(this,arguments)}function Ot(e){return Y.apply(this,arguments)}function Y(){return(Y=(0,l.A)(function*(e){let t=yield Ue(e.appConfig);for(;1===t.registrationStatus;)yield we(100),t=yield Ue(e.appConfig);if(0===t.registrationStatus){const{installationEntry:n,registrationPromise:r}=yield W(e);return r||n}return t})).apply(this,arguments)}function Ue(e){return R(e,t=>{if(!t)throw _.create("installation-not-found");return xe(t)})}function xe(e){return function Ft(e){return 1===e.registrationStatus&&e.registrationTime+be<Date.now()}(e)?{fid:e.fid,registrationStatus:0}:e}function Q(){return(Q=(0,l.A)(function*({appConfig:e,heartbeatServiceProvider:t},n){const r=function xt(e,{fid:t}){return`${U(e)}/${t}/authTokens:generate`}(e,n),i=function Pe(e,{refreshToken:t}){const n=ke(e);return n.append("Authorization",function It(e){return`${ve} ${e}`}(t)),n}(e,n),s=t.getImmediate({optional:!0});if(s){const d=yield s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:Se,appId:e.appId}})},g=yield L(()=>fetch(r,a));if(g.ok)return Ne(yield g.json());throw yield x("Generate Auth Token",g)})).apply(this,arguments)}function Z(e){return ee.apply(this,arguments)}function ee(){return ee=(0,l.A)(function*(e,t=!1){let n;const r=yield R(e.appConfig,s=>{if(!Le(s))throw _.create("not-registered");const o=s.authToken;if(!t&&function qt(e){return 2===e.requestStatus&&!function Vt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gt}(e)}(o))return s;if(1===o.requestStatus)return n=function Dt(e,t){return te.apply(this,arguments)}(e,t),s;{if(!navigator.onLine)throw _.create("app-offline");const a=function Bt(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(s);return n=function Lt(e,t){return ne.apply(this,arguments)}(e,a),a}});return n?yield n:r.authToken}),ee.apply(this,arguments)}function te(){return(te=(0,l.A)(function*(e,t){let n=yield De(e.appConfig);for(;1===n.authToken.requestStatus;)yield we(100),n=yield De(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Z(e,t):r})).apply(this,arguments)}function De(e){return R(e,t=>{if(!Le(t))throw _.create("not-registered");return function jt(e){return 1===e.requestStatus&&e.requestTime+be<Date.now()}(t.authToken)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function ne(){return ne=(0,l.A)(function*(e,t){try{const n=yield function Ut(e,t){return Q.apply(this,arguments)}(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return yield w(e.appConfig,r),n}catch(n){if(!Re(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});yield w(e.appConfig,r)}else yield K(e.appConfig);throw n}}),ne.apply(this,arguments)}function Le(e){return void 0!==e&&2===e.registrationStatus}function re(){return(re=(0,l.A)(function*(e){const t=e,{installationEntry:n,registrationPromise:r}=yield W(t);return r?r.catch(console.error):Z(t).catch(console.error),n.fid})).apply(this,arguments)}function ie(){return ie=(0,l.A)(function*(e,t=!1){const n=e;return yield function Kt(e){return se.apply(this,arguments)}(n),(yield Z(n,t)).token}),ie.apply(this,arguments)}function se(){return(se=(0,l.A)(function*(e){const{registrationPromise:t}=yield W(e);t&&(yield t)})).apply(this,arguments)}function ce(e){return _.create("missing-app-config-values",{valueName:e})}const qe="installations",Jt=e=>{const t=e.getProvider("app").getImmediate(),n=function Wt(e){if(!e||!e.options)throw ce("App Configuration");if(!e.name)throw ce("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ce(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,h._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},Yt=e=>{const t=e.getProvider("app").getImmediate(),n=(0,h._getProvider)(t,qe).getImmediate();return{getId:()=>function $t(e){return re.apply(this,arguments)}(n),getToken:i=>function zt(e){return ie.apply(this,arguments)}(n,i)}};(function Qt(){(0,h._registerComponent)(new P.uA(qe,Jt,"PUBLIC")),(0,h._registerComponent)(new P.uA("installations-internal",Yt,"PRIVATE"))})(),(0,h.registerVersion)(Ae,F),(0,h.registerVersion)(Ae,F,"esm2017");const Ve="@firebase/performance",ue="0.6.9",Be=ue,le="FB-PERF-TRACE-MEASURE",Ge="@firebase/performance/config",He="@firebase/performance/configexpire",We="Performance",u=new y.FA("performance",We,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),m=new ye.Vy(We);let fe,Xe,Je,pe;m.logLevel=ye.$b.INFO;class c{constructor(t){if(this.window=t,!t)throw u.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,n,r){!this.performance||!this.performance.measure||this.performance.measure(t,n,r)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&(0,y.dM)()?!!(0,y.zW)()||(m.info("IndexedDB is not supported by current browser"),!1):(m.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,n){this.PerformanceObserver&&new this.PerformanceObserver(i=>{for(const s of i.getEntries())n(s)}).observe({entryTypes:[t]})}static getInstance(){return void 0===fe&&(fe=new c(Xe)),fe}}function de(){return Je}function Ye(e,t){const n=e.length-t.length;if(n<0||n>1)throw u.create("invalid String merger input");const r=[];for(let i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}class f{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Ye("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Ye("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===pe&&(pe=new f),pe}}var N=function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN",e}(N||{});const an=["firebase_","google_","ga_"],cn=new RegExp("^[a-zA-Z]\\w*$");function fn(){const e=c.getInstance().navigator;return e?.serviceWorker?e.serviceWorker.controller?2:3:1}function Qe(){switch(c.getInstance().document.visibilityState){case"visible":return N.VISIBLE;case"hidden":return N.HIDDEN;default:return N.UNKNOWN}}function dn(){const t=c.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Ze(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw u.create("no app id");return n}const _n="0.0.1",p={loggingEnabled:!0},Tn="FIREBASE_INSTALLATIONS_AUTH";const An="Could not fetch config, will use default configs";function et(e){if(!e)return e;const t=f.getInstance(),n=e.entries||{};return t.loggingEnabled=void 0!==n.fpr_enabled?"true"===String(n.fpr_enabled):p.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):p.logSource&&(t.logSource=p.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:p.logEndPointUrl&&(t.logEndPointUrl=p.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:p.transportKey&&(t.transportKey=p.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==p.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=p.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==p.tracesSamplingRate&&(t.tracesSamplingRate=p.tracesSamplingRate),t.logTraceAfterSampling=tt(t.tracesSamplingRate),t.logNetworkAfterSampling=tt(t.networkRequestsSamplingRate),e}function tt(e){return Math.random()<=e}let me,ge=1;function nt(e){return ge=2,me=me||function Rn(e){return function Nn(){const e=c.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){const n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}().then(()=>function sn(e){const t=e.getId();return t.then(n=>{Je=n}),t}(e.installations)).then(t=>function In(e,t){const n=function En(){const e=c.getInstance().localStorage;if(!e)return;const t=e.getItem(He);if(!t||!function Sn(e){return Number(e)>Date.now()}(t))return;const n=e.getItem(Ge);if(n)try{return JSON.parse(n)}catch{return}}();return n?(et(n),Promise.resolve()):function bn(e,t){return function on(e){const t=e.getToken();return t.then(n=>{}),t}(e.installations).then(n=>{const r=function mn(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw u.create("no project id");return n}(e.app),i=function hn(e){var t;const n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw u.create("no api key");return n}(e.app),o=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,{method:"POST",headers:{Authorization:`${Tn} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:Ze(e.app),app_version:Be,sdk_version:_n})});return fetch(o).then(a=>{if(a.ok)return a.json();throw u.create("RC response not ok")})}).catch(()=>{m.info(An)})}(e,t).then(et).then(r=>function yn(e){const t=c.getInstance().localStorage;!e||!t||(t.setItem(Ge,JSON.stringify(e)),t.setItem(He,String(Date.now()+60*f.getInstance().configTimeToLive*60*1e3)))}(r),()=>{})}(e,t)).then(()=>rt(),()=>rt())}(e),me}function rt(){ge=3}let _e,C=3,T=[],st=!1;function M(e){setTimeout(()=>{if(0!==C){if(!T.length)return M(1e4);!function Cn(){const e=T.splice(0,1e3),t=e.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)}));(function Mn(e,t){return function On(e){const t=f.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(e).then(n=>(n.ok||m.info("Call to Firebase backend failed."),n.json())).then(n=>{const r=Number(n.nextRequestWaitMillis);let i=1e4;isNaN(r)||(i=Math.max(r,i));const s=n.logResponseDetails;Array.isArray(s)&&s.length>0&&"RETRY_REQUEST_LATER"===s[0].responseAction&&(T=[...t,...T],m.info("Retry transport request later.")),C=3,M(i)})})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:f.getInstance().logSource,log_event:t},e).catch(()=>{T=[...e,...T],C--,m.info(`Tries left: ${C}.`),M(1e4)})}()}},e)}function ot(e,t){_e||(_e=function Un(e){return(...t)=>{!function Fn(e){if(!e.eventTime||!e.message)throw u.create("invalid cc log");T=[...T,e]}({message:e(...t),eventTime:Date.now()})}}(Dn)),_e(e,t)}function O(e){const t=f.getInstance();!t.instrumentationEnabled&&e.isAuto||!t.dataCollectionEnabled&&!e.isAuto||c.getInstance().requiredApisAvailable()&&(e.isAuto&&Qe()!==N.VISIBLE||(function vn(){return 3===ge}()?Te(e):nt(e.performanceController).then(()=>Te(e),()=>Te(e))))}function Te(e){if(!de())return;const t=f.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||setTimeout(()=>ot(e,1),0)}function Dn(e,t){return 0===t?function Ln(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:at(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}(e):function qn(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);const r={application_info:at(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}(e)}function at(e){return{google_app_id:Ze(e),app_instance_id:de(),web_app_info:{sdk_version:Be,page_url:c.getInstance().getUrl(),service_worker_status:fn(),visibility_state:Qe(),effective_connection_type:dn()},application_process_state:0}}const jn=["_fp","_fcp","_fid"];class I{constructor(t,n,r=!1,i){this.performanceController=t,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=c.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=i||`${le}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw u.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw u.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),O(this)}record(t,n,r){if(t<=0)throw u.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw u.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*n),this.startTimeUs=Math.floor(1e3*t),r&&r.attributes&&(this.customAttributes=Object.assign({},r.attributes)),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));O(this)}incrementMetric(t,n=1){this.putMetric(t,void 0===this.counters[t]?n:this.counters[t]+n)}putMetric(t,n){if(!function $n(e,t){return!(0===e.length||e.length>100)&&(t&&t.startsWith("_wt_")&&jn.indexOf(e)>-1||!e.startsWith("_"))}(t,this.name))throw u.create("invalid custom metric name",{customMetricName:t});this.counters[t]=function zn(e){const t=Math.floor(e);return t<e&&m.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}(n??0)}getMetric(t){return this.counters[t]||0}putAttribute(t,n){const r=function pn(e){return!(0===e.length||e.length>40||an.some(n=>e.startsWith(n))||!e.match(cn))}(t),i=function gn(e){return 0!==e.length&&e.length<=100}(n);if(r&&i)this.customAttributes[t]=n;else{if(!r)throw u.create("invalid attribute name",{attributeName:t});if(!i)throw u.create("invalid attribute value",{attributeValue:n})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),n=t&&t[0];n&&(this.durationUs=Math.floor(1e3*n.duration),this.startTimeUs=Math.floor(1e3*(n.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,n,r,i){const s=c.getInstance().getUrl();if(!s)return;const o=new I(t,"_wt_"+s,!0),a=Math.floor(1e3*c.getInstance().getTimeOrigin());if(o.setStartTime(a),n&&n[0]&&(o.setDuration(Math.floor(1e3*n[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*n[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*n[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*n[0].loadEventEnd))),r){const k=r.find(Ee=>"first-paint"===Ee.name);k&&k.startTime&&o.putMetric("_fp",Math.floor(1e3*k.startTime));const Ie=r.find(Ee=>"first-contentful-paint"===Ee.name);Ie&&Ie.startTime&&o.putMetric("_fcp",Math.floor(1e3*Ie.startTime)),i&&o.putMetric("_fid",Math.floor(1e3*i))}O(o)}static createUserTimingTrace(t,n){O(new I(t,n,!1,n))}}function ct(e,t){const n=t;if(!n||void 0===n.responseStart)return;const r=c.getInstance().getTimeOrigin(),i=Math.floor(1e3*(n.startTime+r)),s=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime));!function xn(e){const t=f.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n===r||n===i||!t.loggingEnabled||!t.logNetworkAfterSampling||setTimeout(()=>ot(e,0),0)}({performanceController:e,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:o})}function ut(e){de()&&(setTimeout(()=>function Hn(e){const t=c.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){let i=setTimeout(()=>{I.createOobTrace(e,n,r),i=void 0},5e3);t.onFirstInputDelay(s=>{i&&(clearTimeout(i),I.createOobTrace(e,n,r,s))})}else I.createOobTrace(e,n,r)}(e),0),setTimeout(()=>function Gn(e){const t=c.getInstance(),n=t.getEntriesByType("resource");for(const r of n)ct(e,r);t.setupObserver("resource",r=>ct(e,r))}(e),0),setTimeout(()=>function Wn(e){const t=c.getInstance(),n=t.getEntriesByType("measure");for(const r of n)lt(e,r);t.setupObserver("measure",r=>lt(e,r))}(e),0))}function lt(e,t){const n=t.name;n.substring(0,le.length)!==le&&I.createUserTimingTrace(e,n)}class Xn{constructor(t,n){this.app=t,this.installations=n,this.initialized=!1}_init(t){this.initialized||(void 0!==t?.dataCollectionEnabled&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==t?.instrumentationEnabled&&(this.instrumentationEnabled=t.instrumentationEnabled),c.getInstance().requiredApisAvailable()?(0,y.eX)().then(n=>{n&&(function wn(){st||(M(5500),st=!0)}(),nt(this).then(()=>ut(this),()=>ut(this)),this.initialized=!0)}).catch(n=>{m.info(`Environment doesn't support IndexedDB: ${n}`)}):m.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){f.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return f.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){f.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return f.getInstance().dataCollectionEnabled}}const Qn=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw u.create("FB not default");if(typeof window>"u")throw u.create("no window");!function rn(e){Xe=e}(window);const i=new Xn(n,r);return i._init(t),i};!function Zn(){(0,h._registerComponent)(new P.uA("performance",Qn,"PUBLIC")),(0,h.registerVersion)(Ve,ue),(0,h.registerVersion)(Ve,ue,"esm2017")}();class er{constructor(t,n){this.app=t,this._delegate=n}get instrumentationEnabled(){return this._delegate.instrumentationEnabled}set instrumentationEnabled(t){this._delegate.instrumentationEnabled=t}get dataCollectionEnabled(){return this._delegate.dataCollectionEnabled}set dataCollectionEnabled(t){this._delegate.dataCollectionEnabled=t}trace(t){return function Yn(e,t){return e=(0,y.Ku)(e),new I(e,t)}(this._delegate,t)}}function ir(e){const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("performance").getImmediate();return new er(t,n)}!function rr(e){e.INTERNAL.registerComponent(new P.uA("performance-compat",ir,"PUBLIC")),e.registerVersion("@firebase/performance-compat","0.2.9")}(ft.A)}}]);