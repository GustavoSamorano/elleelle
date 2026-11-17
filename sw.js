// Guarda a página e os arquivos no aparelho: abre mais rápido e aguenta rede fraca. Preços e orçamentos sempre vêm do banco.
const V='elle-1b6cd28766', PRE=["./", "index.html", "lib/supabase.4bc1644c.js", "fonts/f1.0693b254.woff2", "fonts/f2.faa68c1a.woff2", "fonts/f3.a65125bc.woff2", "fonts/f4.810fe6ac.woff2", "fonts/f5.f22b7feb.woff2", "fonts/f6.a61b232f.woff2", "fonts/f7.bd6ec6c6.woff2"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(PRE)).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  if(r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('index.html')){
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(k=>k.put('index.html',c));return x}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(k=>k.put(r,c))}return x})));
});
