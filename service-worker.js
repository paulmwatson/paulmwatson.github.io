if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let d=Promise.resolve();return a[e]||(d=new Promise((async d=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=d}else importScripts(e),d()}))),d.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},d=(d,a)=>{Promise.all(d.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(d)};self.define=(d,b,i)=>{a[d]||(a[d]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+d.slice(1)};return Promise.all(b.map((d=>{switch(d){case"exports":return a;case"module":return r;default:return e(d)}}))).then((e=>{const d=i(...e);return a.default||(a.default=d),a}))})))}}define("./service-worker.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"CNAME",revision:"ade2d48b9b0b007b6db121b6b7cff016"},{url:"asset-manifest.json",revision:"452fcebfb96bfd5c6f3dc6ec14790d57"},{url:"critical.js",revision:"149cfe36637ced397dd8856ad21b3f12"},{url:"favicon.ico",revision:"ca1052294de999ff19fcb81f94d9297a"},{url:"icon_1024x1024.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_128x128.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_192x192.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_256x256.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_384x384.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_512x512.41756a09d1dcccec485d594bf7ab626c.png",revision:"41756a09d1dcccec485d594bf7ab626c"},{url:"icon_512x512.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"icon_96x96.cbaaab86d202f0683d93d27d25e5d1b6.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"images/icon_512.png",revision:"74e9a5212a39551339d1e10c7babaa16"},{url:"images/photo-flowers-1-397w.webp",revision:"825ac53d81fbf45bc8d9ea3b9e0194fc"},{url:"images/photo-flowers-1-583w.webp",revision:"cbaaab86d202f0683d93d27d25e5d1b6"},{url:"images/photo-flowers-1-672w.webp",revision:"62120cd325c1453057a2f19b6b8a3357"},{url:"index.css",revision:"1275037699750cace382e0bbacd3d154"},{url:"index.html",revision:"a365c597e79b8afd1970ba4c8a6b2eb4"},{url:"index.js",revision:"b84fb0c0e2c2d5baf9e858942ea84a7a"},{url:"manifest.4e21d8bfaaa611dc001349aec823fd1b.json",revision:"4e21d8bfaaa611dc001349aec823fd1b"},{url:"robots.txt",revision:"7565111eaaa8d27307bd0467822743f7"}],{})}));
