if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("fallback-BA8MFeNf8p5goJjc2gKOn.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"59d5e42a98983d463e941b1ed2d55427"},{url:"/_next/static/BA8MFeNf8p5goJjc2gKOn/_buildManifest.js",revision:"8c01309a1638e303ede8724c3a9a0f73"},{url:"/_next/static/BA8MFeNf8p5goJjc2gKOn/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/BA8MFeNf8p5goJjc2gKOn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/202.32d0cd6f2ba0b2a5.js",revision:"32d0cd6f2ba0b2a5"},{url:"/_next/static/chunks/959-07f057371a1d94e8.js",revision:"07f057371a1d94e8"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-257eb89fdcf5c348.js",revision:"257eb89fdcf5c348"},{url:"/_next/static/chunks/pages/_app-aeae44d213e1e3ca.js",revision:"aeae44d213e1e3ca"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/_offline-aacdc6b651e8226f.js",revision:"aacdc6b651e8226f"},{url:"/_next/static/chunks/pages/index-3907b8125940239e.js",revision:"3907b8125940239e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-a456cbe19fec059d.js",revision:"a456cbe19fec059d"},{url:"/_next/static/css/9ac64045a64db0fc.css",revision:"9ac64045a64db0fc"},{url:"/_next/static/css/cf94634e43489b40.css",revision:"cf94634e43489b40"},{url:"/_next/static/media/wasm_bg.d94602a2.wasm",revision:"d94602a2"},{url:"/_offline",revision:"BA8MFeNf8p5goJjc2gKOn"},{url:"/android-chrome-192x192.png",revision:"445f8ea352b8e9d334c5f6a4603a1351"},{url:"/android-chrome-512x512.png",revision:"415f4bf14e62c599ec4e1c5035a3639c"},{url:"/android-chrome-maskable-192x192.png",revision:"7b25641e0351de9544d0d9487e6eada1"},{url:"/android-chrome-maskable-512x512.png",revision:"90f29b48a8597532548001341734a393"},{url:"/apple-touch-icon.png",revision:"aa88ed9d4c6287b7d2c131ced933707d"},{url:"/browserconfig.xml",revision:"a93a05aecba58357fc012646f53df3fa"},{url:"/favicon.ico",revision:"edf230324c40ed85b81d0d4756064fe0"},{url:"/img/checkmark-icon.svg",revision:"4e26378bf5e81949b460558e5c8e111e"},{url:"/img/leak-logo.jpg",revision:"a9bfc76bcde04f90ef452a7ee05c504e"},{url:"/img/leak.jpg",revision:"705d2f91fc74c0f8d781f42245520ea4"},{url:"/img/leak.png",revision:"87d11adf87d036baccee149720b4e707"},{url:"/img/loading-wave.svg",revision:"3b2aff2dffd9f2ab639a9317380c6da2"},{url:"/img/loading.svg",revision:"8c887193eabc5d1e822c299b73c24434"},{url:"/img/octocat.svg",revision:"4058231b2905287a44d11584114d82ed"},{url:"/img/strip.svg",revision:"001a2d611d7ffb715f636fbf41a20af3"},{url:"/manifest.json",revision:"4ac95af80febfea32954e51bd8ef1298"},{url:"/sigs/bhinneka.lhash",revision:"1a4e6d22cb42fda59039e85d79edacef"},{url:"/sigs/kominfo_phonereg.lhash",revision:"d5ea53fe7fda599837ca1a59e565040a"},{url:"/sigs/metranet.lhash",revision:"c247968dc946b98272c9a0dcfb8f812f"},{url:"/sigs/unipanca.lhash",revision:"3f8771029229e5c795354a84911d30aa"},{url:"/site.webmanifest",revision:"ff6850d7e1c8bf7cf6c3212ba944ef7e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
