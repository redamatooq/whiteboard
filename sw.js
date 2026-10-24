/* سبورة رمزي — Service Worker: offline-first (stale-while-revalidate). Bump VERSION on each release. */
const VERSION="ramzi-board-v1.0.0",CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/favicon.svg","./icons/apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("ramzi-board-")&&x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 const key=r.mode==="navigate"?"./index.html":r;
 e.respondWith(caches.open(VERSION).then(async c=>{const hit=await c.match(key,{ignoreSearch:true});
  const net=fetch(r).then(res=>{if(res&&res.ok)c.put(key,res.clone());return res}).catch(()=>null);
  if(hit){e.waitUntil(net);return hit}
  return (await net)||(r.mode==="navigate"?c.match("./index.html"):Response.error())}))});
