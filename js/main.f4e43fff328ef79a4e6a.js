!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=92)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(48))},function(t,e,n){var r=n(0),o=n(27),i=n(2),c=n(29),a=n(33),s=n(66),u=o("wks"),l=r.Symbol,f=s?l:l&&l.withoutSetter||c;t.exports=function(t){return i(u,t)||(a&&i(l,t)?u[t]=l[t]:u[t]=f("Symbol."+t)),u[t]}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(5),o=n(10),i=n(19);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(53),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(5),o=n(23),i=n(7),c=n(22),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5),o=n(49),i=n(19),c=n(13),a=n(22),s=n(2),u=n(23),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(20),o=n(21);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(8),i=n(2),c=n(15),a=n(16),s=n(26),u=s.get,l=s.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var s=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),l(n).source=f.join("string"==typeof e?e:"")),t!==r?(s?!p&&t[e]&&(u=!0):delete t[e],u?t[e]=n:o(t,e,n)):u?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},function(t,e,n){var r=n(0),o=n(8);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(25),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(3),o=n(6),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(5),o=n(3),i=n(24);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,c=n(50),a=n(0),s=n(4),u=n(8),l=n(2),f=n(51),p=n(30),d=a.WeakMap;if(c){var h=new d,v=h.get,g=h.has,m=h.set;r=function(t,e){return m.call(h,t,e),e},o=function(t){return v.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var y=f("state");p[y]=!0,r=function(t,e){return u(t,y,e),e},o=function(t){return l(t,y)?t[y]:{}},i=function(t){return l(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(28),o=n(25);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==u||n!=s&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(0),a=n(3),s=n(6),u=n(18),l=n(83),f=n(24),p=n(36),d=c.location,h=c.setImmediate,v=c.clearImmediate,g=c.process,m=c.MessageChannel,y=c.Dispatch,_=0,b={},x=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},S=function(t){return function(){x(t)}},w=function(t){x(t.data)},L=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};h&&v||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++_]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(_),_},v=function(t){delete b[t]},"process"==s(g)?r=function(t){g.nextTick(S(t))}:y&&y.now?r=function(t){y.now(S(t))}:m&&!p?(i=(o=new m).port2,o.port1.onmessage=w,r=u(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(L)||"file:"===d.protocol?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),x(t)}}:function(t){setTimeout(S(t),0)}:(r=L,c.addEventListener("message",w,!1))),t.exports={set:h,clear:v}},function(t,e,n){var r=n(37);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(9);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(11),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";e.a=class{constructor(t,e){this.header=t,this.pageKey=e}render(){const{isLoggedIn:t,userName:e}=localStorage,n=this.header.querySelector(".header__button"),r=this.header.querySelector(".navigation__item_secondary");n.textContent="",t?(n.insertAdjacentHTML("beforeend",`\n      ${e}\n      <svg class="button__image" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z" />\n      </svg>\n      `),"articles"===this.pageKey&&n.querySelector(".button__image").classList.add("button__image_dark"),r.style.display="flex"):(n.textContent="Авторизоваться",r.style.display="none")}}},function(t,e,n){"use strict";var r=n(41),o=n.n(r);e.a=class{constructor(t,e,n){this.container=t,this.preloader=n,this.articleMethod=e}renderResults(){const{container:t,articleMethod:e,cards:n}=this;t.parentElement.classList.add("articles_active");const r=t.childElementCount;for(let o=r;o<=r+2;o+=1){const r=e.create(n[o]);if(!r)return;t.appendChild(r)}}renderLoader(t){this.preloader.innerHTML="",this.preloader.insertAdjacentHTML("beforeend",'\n      <i class="preloader__circle"></i>\n      <h2 class="preloader__text">Идет поиск новостей...</h2>\n    '),"active"===t?this.preloader.classList.add("preloader_active"):"inactive"===t&&this.preloader.classList.remove("preloader_active")}renderError(){this.preloader.innerHTML="",this.preloader.insertAdjacentHTML("beforeend",`\n      <img class="preloader__image" src="${o.a}" alt="not-found">\n      <h2 class="preloader__title">Ничего не найдено</h2>\n      <h3 class="preloader__text">К сожалению по вашему запросу ничего не найдено.</h3>\n    `)}showMore(){this.renderResults(this.articles)}addCard(t,e,n,r,o,i,c,a){const s={link:t,image:e,date:n,title:r,text:o,source:i,keyword:c,_id:a};this.cards.push(s)}}},function(t,e,n){t.exports=n.p+"images/not-found.svg"},function(t,e,n){"use strict";n(47);var r=t=>{switch(t.status){case 409:throw new Error("Такой пользователь уже существует");case 401:throw new Error("Неправильная почта или пароль");case 400:throw new Error("Неправильный запрос")}};e.a=class{constructor(t){this.baseUrl=t.baseUrl,this.headers=t.headers}signup(t,e,n){return fetch(this.baseUrl+"/signup",{method:"POST",headers:this.headers,body:JSON.stringify({email:t,password:e,name:n})}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}signout(){return fetch(this.baseUrl+"/signout",{method:"POST",headers:this.headers,credentials:"include"}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}signin(t,e){return fetch(this.baseUrl+"/signin",{method:"POST",headers:this.headers,body:JSON.stringify({email:t,password:e}),credentials:"include"}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}getArticles(){return fetch(this.baseUrl+"/articles",{headers:this.headers,credentials:"include"}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}createArticle(t){return fetch(this.baseUrl+"/articles",{method:"POST",headers:this.headers,body:JSON.stringify({link:t.link,image:t.image,date:t.date,title:t.title,text:t.text,source:t.source,keyword:t.keyword}),credentials:"include"}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}deleteArticle(t){return fetch(`${this.baseUrl}/articles/${t._id}`,{method:"DELETE",headers:this.headers,credentials:"include"}).then(t=>{if(t.ok)return t.json();r(t)}).catch(t=>Promise.reject(t))}}},function(t,e,n){"use strict";e.a=class{constructor(t,e,n){this.pageKey=t,this.apiMethod=e,this.titleMethod=n}create(t){if(!t)return;const e=document.createElement("div");return e.className="article",e.insertAdjacentHTML("beforeend",`\n      <a class="article__link" href="${t.link}" target="_blank">\n        <img  class="article__image" src="${t.image}" alt="article-image">\n        <time class="article__data" datetime="${t.date}">${function(t){const e=Date.parse(t),n=new Date(e),r=n.getFullYear(),o=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][n.getMonth()];return`${n.getDate()} ${o},${r}`}(t.date)}</time>\n        <h2 class="article__title">${t.title}</h2>\n        <p class="article__text">${t.text}</p>\n        <span class="article__source">${t.source}</span>\n      </a>\n    `),e.append(this.renderIcon(t)),"articles"===this.pageKey&&e.append(this.renderKeyword(t)),e}renderKeyword(t){const e=document.createElement("div");return e.className="article__keys",e.insertAdjacentHTML("beforeend",`\n      <span class="article__key">${t.keyword}</span>\n    `),e}renderIcon(t){const e=document.createElement("button"),n=document.createElement("p");return e.className="article__button",n.className="article__message",n.classList.add("article__message_active"),"index"===this.pageKey?(n.innerText="Войдите, чтобы сохранять статьи",e.insertAdjacentHTML("beforeend",'\n        <svg class="article__icon" width="14px" height="19px" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" />\n        </svg>\n      '),e.classList.add("article__button_flag")):"articles"===this.pageKey&&(n.innerText="Убрать из сохранённых",e.insertAdjacentHTML("beforeend",'\n        <svg class="article__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" />\n        </svg>\n      '),e.classList.add("article__button_trash")),e.appendChild(n),this._setEvent(e,t),e}_setEvent(t,e){const{apiMethod:n}=this;t.addEventListener("click",()=>{const r=t.querySelector(".article__icon"),o=r.classList.contains("article__icon_marked");localStorage.isLoggedIn&&(!o&&t.classList.contains("article__button_flag")?n.createArticle(e).then(t=>{e._id=t._id,r.classList.add("article__icon_marked")}):(n.deleteArticle(e),"articles"===this.pageKey?t.parentElement.remove():r.classList.remove("article__icon_marked")))}),t.addEventListener("mouseover",()=>{localStorage.isLoggedIn&&t.classList.contains("article__button_flag")&&t.querySelector(".article__message").classList.remove("article__message_active")})}}},function(t,e,n){var r=n(0),o=n(12).f,i=n(8),c=n(14),a=n(15),s=n(45),u=n(32);t.exports=function(t,e){var n,l,f,p,d,h=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[h]||a(h,{}):(r[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(d=o(n,l))&&d.value:n[l],!u(v?l:h+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(n,l,p,t)}}},function(t,e,n){var r=n(2),o=n(52),i=n(12),c=n(10);t.exports=function(t,e){for(var n=o(e),a=c.f,s=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,s(e,l))}}},function(t,e,n){var r=n(0),o=n(60),i=n(61),c=n(8);for(var a in o){var s=r[a],u=s&&s.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e,n){"use strict";var r,o,i,c,a=n(44),s=n(28),u=n(0),l=n(9),f=n(70),p=n(14),d=n(71),h=n(72),v=n(73),g=n(4),m=n(11),y=n(74),_=n(6),b=n(16),x=n(75),S=n(81),w=n(82),L=n(35).set,j=n(84),E=n(85),T=n(86),k=n(38),M=n(87),O=n(26),P=n(32),A=n(1),C=n(88),H=A("species"),V="Promise",$=O.get,q=O.set,I=O.getterFor(V),N=f,D=u.TypeError,U=u.document,K=u.process,R=l("fetch"),F=k.f,G=F,B="process"==_(K),Z=!!(U&&U.createEvent&&u.dispatchEvent),z=P(V,(function(){if(!(b(N)!==String(N))){if(66===C)return!0;if(!B&&"function"!=typeof PromiseRejectionEvent)return!0}if(s&&!N.prototype.finally)return!0;if(C>=51&&/native code/.test(N))return!1;var t=N.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[H]=e,!(t.then((function(){}))instanceof e)})),J=z||!S((function(t){N.all(t).catch((function(){}))})),W=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},Y=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;j((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,s,u,l=r[c++],f=i?l.ok:l.fail,p=l.resolve,d=l.reject,h=l.domain;try{f?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===f?a=o:(h&&h.enter(),a=f(o),h&&(h.exit(),u=!0)),a===l.promise?d(D("Promise-chain cycle")):(s=W(a))?s.call(a,p,d):p(a)):d(o)}catch(t){h&&!u&&h.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Q(t,e)}))}},X=function(t,e,n){var r,o;Z?((r=U.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},(o=u["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",n)},Q=function(t,e){L.call(u,(function(){var n,r=e.value;if(tt(e)&&(n=M((function(){B?K.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),e.rejection=B||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){L.call(u,(function(){B?K.emit("rejectionHandled",t):X("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Y(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw D("Promise can't be resolved itself");var o=W(n);o?j((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,Y(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};z&&(N=function(t){y(this,N,V),m(t),r.call(this);var e=$(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){q(this,{type:V,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(N.prototype,{then:function(t,e){var n=I(this),r=F(w(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=B?K.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Y(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=$(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},k.f=F=function(t){return t===N||t===i?new o(t):G(t)},s||"function"!=typeof f||(c=f.prototype.then,p(f.prototype,"then",(function(t,e){var n=this;return new N((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof R&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(N,R.apply(u,arguments))}}))),a({global:!0,wrap:!0,forced:z},{Promise:N}),h(N,V,!1,!0),v(V),i=l(V),a({target:V,stat:!0,forced:z},{reject:function(t){var e=F(this);return e.reject.call(void 0,t),e.promise}}),a({target:V,stat:!0,forced:s||z},{resolve:function(t){return E(s&&this===i?N:this,t)}}),a({target:V,stat:!0,forced:J},{all:function(t){var e=this,n=F(e),r=n.resolve,o=n.reject,i=M((function(){var n=m(e.resolve),i=[],c=0,a=1;x(t,(function(t){var s=c++,u=!1;i.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,i[s]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=F(e),r=n.reject,o=M((function(){var o=m(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(16),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(27),o=n(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(9),o=n(54),i=n(59),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(55),o=n(58).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(13),i=n(56).indexOf,c=n(30);t.exports=function(t,e){var n,a=o(t),s=0,u=[];for(n in a)!r(c,n)&&r(a,n)&&u.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var r=n(13),o=n(17),i=n(57),c=function(t){return function(e,n,c){var a,s=r(e),u=o(s.length),l=i(c,u);if(t&&n!=n){for(;u>l;)if((a=s[l++])!=a)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(62).forEach,o=n(67),i=n(68),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(18),o=n(20),i=n(63),c=n(17),a=n(64),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f;return function(d,h,v,g){for(var m,y,_=i(d),b=o(_),x=r(h,v,3),S=c(b.length),w=0,L=g||a,j=e?L(d,S):n?L(d,0):void 0;S>w;w++)if((p||w in b)&&(y=x(m=b[w],w,_),t))if(e)j[w]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:s.call(j,m)}else if(l)return!1;return f?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e,n){var r=n(21);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(65),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(6);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(33);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(5),o=n(3),i=n(2),c=Object.defineProperty,a={},s=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:s,f=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,l,f)}))}},function(t,e,n){},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(10).f,o=n(2),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(9),o=n(10),i=n(1),c=n(5),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(7),o=n(76),i=n(17),c=n(18),a=n(77),s=n(80),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var p,d,h,v,g,m,y,_=c(e,n,l?2:1);if(f)p=t;else{if("function"!=typeof(d=a(t)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,v=i(t.length);v>h;h++)if((g=l?_(r(y=t[h])[0],y[1]):_(t[h]))&&g instanceof u)return g;return new u(!1)}p=d.call(t)}for(m=p.next;!(y=m.call(p)).done;)if("object"==typeof(g=s(p,_,y.value,l))&&g&&g instanceof u)return g;return new u(!1)}).stop=function(t){return new u(!0,t)}},function(t,e,n){var r=n(1),o=n(34),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(78),o=n(34),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(79),o=n(6),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(7);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(7),o=n(11),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r=n(9);t.exports=r("document","documentElement")},function(t,e,n){var r,o,i,c,a,s,u,l,f=n(0),p=n(12).f,d=n(6),h=n(35).set,v=n(36),g=f.MutationObserver||f.WebKitMutationObserver,m=f.process,y=f.Promise,_="process"==d(m),b=p(f,"queueMicrotask"),x=b&&b.value;x||(r=function(){var t,e;for(_&&(t=m.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},_?c=function(){m.nextTick(r)}:g&&!v?(a=!0,s=document.createTextNode(""),new g(r).observe(s,{characterData:!0}),c=function(){s.data=a=!a}):y&&y.resolve?(u=y.resolve(void 0),l=u.then,c=function(){l.call(u,r)}):c=function(){h.call(f,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(7),o=n(4),i=n(38);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),c=n(37),a=i.process,s=a&&a.versions,u=s&&s.v8;u?o=(r=u.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(44),o=n(5),i=n(0),c=n(2),a=n(4),s=n(10).f,u=n(45),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var d=p.prototype=l.prototype;d.constructor=p;var h=d.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(c(f,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(89),n(46),n(90),n(69);var r=n(39),o=class{constructor(t){this.popup=t,this.setEventListener()}toggle(){this.popup.classList.toggle("popup_is-opened")}setContentSucceful(){const t=this.popup.querySelector(".popup__form"),e=this.popup.querySelector(".popup__title"),n=this.popup.querySelector(".popup__checkout-text");t.style.display="none",e.textContent="Пользователь успешно зарегистрирован!",n.textContent="",n.classList.add("popup__checkout-text_success"),n.insertAdjacentHTML("beforeend",'\n      <button class="popup__checkout">Выполнить вход</button>\n    ')}setEventListener(){this.popup.addEventListener("click",t=>{t.target.classList.contains("popup__close")&&this.toggle()}),this.popup.addEventListener("keydown",t=>{"Escape"===t.key&&this.toggle()})}},i=n(42),c=(n(47),function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const e=new Date;e.setDate(e.getDate()+t);const n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return`${n}-${r}-${o}`}),a=n(43),s=n(40);!function(){const t=document.querySelector(".header__button"),e=document.querySelector(".header__menu"),n=document.querySelector(".articles__button"),u=document.querySelector(".navigation__menu_header"),l=document.querySelector(".preloader"),f=new i.a({baseUrl:"https://api.jswa.online",headers:{"Content-Type":"application/json"}}),p=new class{constructor(t){this.baseUrl=t.baseUrl,this.headers=t.headers}getNews(t){const e=this.baseUrl+"/everything?"+`q=${t}&`+`from=${c(-7)}&`+`to=${c()}&pageSize=100&apiKey=b6f680c65e9f44fbb3fdd0031c6694d0`;return fetch(e,{headers:this.headers}).then(t=>t.json()).catch(t=>console.log(t))}}({baseUrl:"https://praktikum.tk/news/v2",headers:{"X-Api-Key":"b6f680c65e9f44fbb3fdd0031c6694d0"}}),d=new r.a(document.querySelector(".header")),h=new o(document.querySelector(".popup_signin")),v=new o(document.querySelector(".popup_signup")),g=new class{constructor(t){this.api=t}inputValidation(t){this._checkInputValidity(t),this._setSubmitButtonState(t)}setServerError(t){document.querySelectorAll(".error").forEach(e=>{e.textContent=t})}_checkInputValidity(t){const e=t.nextElementSibling;if(t.validity.valid)e.innerText="",e.className="popup__error";else if("password"===t.name)e.innerText=t.validity.tooShort?`Пароль должен быть больше ${t.minLength} символов`:"",e.classList.add("popup__error_active");else{let n;switch(!0){case t.validity.typeMismatch:n="Неправильный формат "+t.type;break;case t.validity.tooLong:n=`Поле должно содержать от ${t.minLength} до ${t.maxLength} символов`;break;case t.validity.tooShort:n=`Поле должно содержать больше ${t.minLength} символов`;break;default:n="Обязательное поле"}e.innerText=n,e.classList.add("popup__error_active")}}_setSubmitButtonState(t){const e=t.closest(".popup__form"),n=e.querySelector(".popup__button");n.removeAttribute("disabled"),e.elements.forEach(t=>{t.validity.valid||n.setAttribute("disabled","")})}}(f,{popupSignin:h,popupSignup:v}),m=new a.a("index",f),y=document.querySelector(".articles__grid"),_=new s.a(y,m,l);e.addEventListener("click",()=>{u.classList.toggle("navigation__menu_open")}),t.addEventListener("click",()=>{localStorage.isLoggedIn?(localStorage.clear(),f.signout(),window.location.reload()):h.toggle()}),n.addEventListener("click",()=>{_.showMore()}),document.addEventListener("click",t=>{t.target.classList.contains("popup__checkout")&&(h.toggle(),v.toggle(),g.setServerError(""))}),document.addEventListener("submit",t=>{t.preventDefault();const e=t.target;if(e.classList.contains("popup__form_signin")&&f.signin(e.email.value,e.password.value).then(t=>{localStorage.isLoggedIn=!0,localStorage.userName=t.user.name,h.toggle(),d.render()}).catch(t=>{g.setServerError(t.message)}),e.classList.contains("popup__form_signup")&&f.signup(e.email.value,e.password.value,e.name.value).then(()=>v.setContentSucceful()).catch(t=>{g.setServerError(t.message)}),e.classList.contains("search__form")){const t=e.keyword.value;_.renderLoader("active"),p.getNews(t).then(e=>{y.innerHTML="",y.parentElement.classList.remove("articles_active"),0!==e.totalResults?(_.renderLoader("inactive"),_.cards=[],e.articles.forEach(e=>{!function(t){switch(null){case t.urlToImage:t.urlToImage="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152_960_720.jpg";break;case t.title:t.title="Неизвестный заголовок";break;case t.description:t.description="Неизвестный заголовок";break;case t.source.name:t.source.name="Неизвестный источник"}}(e),_.addCard(e.url,e.urlToImage,e.publishedAt,e.title,e.description,e.source.name,t)}),_.renderResults()):_.renderError()}).catch(t=>console.log(t))}}),document.addEventListener("input",t=>{t.target.classList.contains("search__input")||(g.inputValidation(t.target),g.setServerError(""))}),d.render()}()}]);