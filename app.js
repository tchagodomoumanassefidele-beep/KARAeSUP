
/* ---------- Réglages à modifier ---------- */
const CONFIG = {
  whatsapp: "22892928833",              // numéro WhatsApp qui reçoit les commandes (indicatif + numéro, sans +)
  whatsappAffiche: "+228 92 92 88 33",
  indicatif: "228",                     // ajouté aux numéros à 8 chiffres
  devise: "FCFA",
  dossierImages: "images/",             // photos hébergées avec le site : images/<slug>.jpg (ex. images/tomates.jpg)
  pinGestion: "1234",                   // code de l'espace gestion en mode local (protection légère, à changer)
  boutique: {nom:"KARASUP", lat:6.1725, lng:1.2314},   // position de départ des livraisons (exemple : centre de Lomé, à remplacer)
  frais: {actif:true, base:500, parKm:150, coef:1.3},  // estimation : base + km x tarif, distance à vol d'oiseau x coef (exemple à ajuster)
  carteIntegree: false                  // true : affiche une carte Google intégrée (fonctionne sur votre hébergement, pas dans l'aperçu Claude)
};

/* Catalogue d'exemple : adaptez noms, unités, prix et descriptions. Les photos se règlent depuis Gestion > Produits. */
const PRODUCTS = [
  {id:"p01",slug:"tomates",cat:"Fruits et légumes",name:"Tomates fraîches",unit:"1 kg",price:800,e:"🍅",shape:"fruit",color:0xE0301E,cap:0x3F8F3A,capType:"flat",kcal:18,
   desc:"Tomates rouges fermes et juteuses, idéales pour les sauces, les ragoûts et les salades.",cons:"À température ambiante, à l'abri du soleil. Au frais, elles se gardent plus longtemps mais perdent en saveur.",idee:"Sauce tomate, riz gras, salade."},
  {id:"p02",slug:"oignons",cat:"Fruits et légumes",name:"Oignons",unit:"1 kg",price:700,e:"🧅",shape:"fruit",color:0xA84A66,cap:0xD9C8A0,capType:"cone",scale:[1,.86,1],kcal:40,
   desc:"Oignons secs, base de la plupart des sauces et des grillades.",cons:"Dans un endroit sec, aéré et sombre.",idee:"Sauces, brochettes, accompagnement de poisson grillé."},
  {id:"p03",slug:"igname",cat:"Fruits et légumes",name:"Igname",unit:"1 tubercule",price:1500,e:"🍠",shape:"ellipsoid",color:0x8B5E3C,scale:[1.7,.62,.62],kcal:118,
   desc:"Tubercule farineux qui se prépare bouilli, frit ou pilé.",cons:"Dans un endroit sec et aéré, à l'abri de la lumière. Ne pas la réfrigérer entière.",idee:"Igname bouillie avec sauce, frites d'igname, igname pilée."},
  {id:"p04",slug:"plantain",cat:"Fruits et légumes",name:"Banane plantain",unit:"le tas",price:1000,e:"🍌",shape:"bananas",color:0xF2C230,kcal:122,
   desc:"Plantains à cuire, à consommer mûrs (frits) ou verts (bouillis ou en chips).",cons:"À température ambiante. Le mûrissement se fait en quelques jours.",idee:"Alloco (plantain frit), plantain bouilli, chips."},
  {id:"p05",slug:"ananas",cat:"Fruits et légumes",name:"Ananas",unit:"1 pièce",price:700,e:"🍍",shape:"pineapple",color:0xF2A516,cap:0x3E8E41,kcal:50,
   desc:"Ananas frais, sucré et parfumé.",cons:"À température ambiante jusqu'à maturité, puis quelques jours au frais.",idee:"En tranches, en jus frais, en salade de fruits."},
  {id:"p06",slug:"piment",cat:"Fruits et légumes",name:"Piment frais",unit:"le sachet",price:250,e:"🌶️",shape:"cone",color:0xD92B1F,cone:[.15,1.3],kcal:40,
   desc:"Piment frais très relevé, à utiliser avec modération.",cons:"Au réfrigérateur quelques jours, ou broyé puis congelé.",idee:"Sauce pimentée, assaisonnement des grillades."},
  {id:"p07",slug:"gombo",cat:"Fruits et légumes",name:"Gombo",unit:"le tas",price:300,e:"🌿",shape:"cone",color:0x6FA43A,cone:[.2,1.2],kcal:33,
   desc:"Gombo frais, utilisé pour les sauces gluantes traditionnelles.",cons:"Au frais, dans un sac perforé, 2 à 3 jours.",idee:"Sauce gombo."},
  {id:"p08",slug:"carottes",cat:"Fruits et légumes",name:"Carottes",unit:"1 kg",price:900,e:"🥕",shape:"cone",color:0xF07A12,cone:[.24,1.7],kcal:41,
   desc:"Carottes croquantes et sucrées.",cons:"Au frais, dans le bac à légumes.",idee:"Crudités, riz sauté, soupe."},
  {id:"p09",slug:"riz-local",cat:"Épicerie",name:"Riz local",unit:"1 kg",price:600,e:"🍚",shape:"bag",color:0xE8D9B5,kcal:360,
   desc:"Riz de production locale, à cuire à l'eau ou à la vapeur.",cons:"Dans un récipient fermé, au sec.",idee:"Riz blanc, riz gras, riz au poisson."},
  {id:"p10",slug:"riz-parfume",cat:"Épicerie",name:"Riz parfumé",unit:"sac de 5 kg",price:4500,e:"🍚",shape:"bag",color:0xC9DDB8,dim:[1.6,2.1,.7],kcal:360,
   desc:"Riz parfumé en sac de 5 kg, aux grains longs et légers.",cons:"Dans un récipient fermé, au sec.",idee:"Riz blanc, riz pilaf, riz sauté."},
  {id:"p11",slug:"huile-palme",cat:"Épicerie",name:"Huile de palme",unit:"1 litre",price:1200,e:"🛢️",shape:"bottle",color:0xC8420A,liquid:0xC8420A,capColor:0x2A2A2A,kcal:880,
   desc:"Huile de palme rouge pour la cuisine traditionnelle.",cons:"À l'abri de la chaleur et de la lumière. Elle peut figer par temps frais.",idee:"Sauce graine, sauces, beignets."},
  {id:"p12",slug:"huile-vegetale",cat:"Épicerie",name:"Huile végétale",unit:"1 litre",price:1500,e:"🧴",shape:"bottle",color:0xE9B825,liquid:0xE9B825,capColor:0xD13B1B,h:1.7,kcal:880,
   desc:"Huile végétale raffinée pour la friture et l'assaisonnement.",cons:"À l'abri de la lumière, bien refermée.",idee:"Friture, sauces, salades."},
  {id:"p13",slug:"gari",cat:"Épicerie",name:"Gari",unit:"1 kg",price:500,e:"🥣",shape:"bag",color:0xEBD9A0,kcal:360,
   desc:"Semoule de manioc grillée, à consommer avec de l'eau, du sucre et du lait, ou en pâte.",cons:"Au sec, dans un récipient fermé.",idee:"Gari au sucre et au lait, gari à l'eau, gari foto."},
  {id:"p14",slug:"farine-mais",cat:"Épicerie",name:"Farine de maïs",unit:"1 kg",price:500,e:"🌾",shape:"bag",color:0xF0DA7A,kcal:360,
   desc:"Farine de maïs pour la pâte de maïs et les bouillies.",cons:"Au sec, bien fermée.",idee:"Pâte de maïs, bouillie."},
  {id:"p15",slug:"concentre-tomate",cat:"Épicerie",name:"Concentré de tomate",unit:"boîte de 400 g",price:350,e:"🥫",shape:"can",color:0xC7281A,kcal:80,
   desc:"Concentré de tomate pour colorer et parfumer les sauces.",cons:"Après ouverture, à transférer dans un récipient couvert au frais et à consommer sous 5 jours.",idee:"Sauces, riz gras, ragoûts."},
  {id:"p16",slug:"spaghetti",cat:"Épicerie",name:"Spaghetti",unit:"paquet de 500 g",price:450,e:"🍝",shape:"box",color:0xF2B632,dim:[1.0,1.9,.4],kcal:350,
   desc:"Pâtes alimentaires à cuisson rapide.",cons:"Au sec, dans leur emballage fermé.",idee:"Spaghetti sauce tomate, sauté aux légumes."},
  {id:"p17",slug:"sucre",cat:"Épicerie",name:"Sucre",unit:"1 kg",price:800,e:"🍬",shape:"bag",color:0xF1F1F1,kcal:400,
   desc:"Sucre blanc cristallisé.",cons:"Au sec, dans un récipient fermé.",idee:"Boissons chaudes, pâtisserie, bouillies."},
  {id:"p18",slug:"sel",cat:"Épicerie",name:"Sel",unit:"1 kg",price:250,e:"🧂",shape:"bag",color:0xD6E4F2,
   desc:"Sel de cuisine fin.",cons:"Au sec.",idee:"Assaisonnement, conservation."},
  {id:"p19",slug:"sardines",cat:"Épicerie",name:"Sardines à l'huile",unit:"boîte",price:600,e:"🐟",shape:"can",color:0x2F6DB5,dim:[.62,.7],kcal:210,
   desc:"Sardines à l'huile en boîte, prêtes à consommer.",cons:"Boîte fermée à l'abri de la chaleur. Après ouverture, au frais et à consommer sous 24 h.",idee:"Avec du pain, en sauce, avec du riz."},
  {id:"p20",slug:"lait-poudre",cat:"Épicerie",name:"Lait en poudre",unit:"boîte de 400 g",price:2800,e:"🥛",shape:"can",color:0x1F5FA8,dim:[.75,1.3],kcal:500,
   desc:"Lait en poudre entier, à reconstituer avec de l'eau.",cons:"Au sec, bien refermé. À consommer dans le mois qui suit l'ouverture.",idee:"Boisson chaude, bouillies, pâtisserie."},
  {id:"p21",slug:"poulet",cat:"Viandes et poissons",name:"Poulet entier",unit:"1 pièce",price:3500,e:"🍗",shape:"ellipsoid",color:0xE8B58B,scale:[1.25,.95,.9],kcal:215,
   desc:"Poulet entier à cuire : grillé, braisé ou en sauce.",cons:"Au réfrigérateur et à cuire rapidement, ou congelé.",idee:"Poulet braisé, en sauce, avec du riz."},
  {id:"p22",slug:"tilapia",cat:"Viandes et poissons",name:"Tilapia frais",unit:"1 kg",price:2500,e:"🐟",shape:"fish",color:0xA7B4B8,kcal:96,
   desc:"Poisson d'eau douce à la chair tendre.",cons:"Au réfrigérateur et à cuire dans la journée, ou congelé.",idee:"Grillé, frit, en sauce."},
  {id:"p23",slug:"oeufs",cat:"Viandes et poissons",name:"Œufs",unit:"plateau de 30",price:2500,e:"🥚",shape:"tray",color:0xF4E7D3,kcal:143,
   desc:"Œufs frais, en plateau de 30.",cons:"Au frais, loin des produits à forte odeur.",idee:"Omelette, œufs durs, pâtisserie."},
  {id:"p24",slug:"eau-1-5l",cat:"Boissons",name:"Eau minérale",unit:"bouteille de 1,5 L",price:400,e:"💧",shape:"bottle",color:0x4FB3E8,liquid:0x8FD3F4,capColor:0x1F6FB5,h:1.8,r:.5,kcal:0,
   desc:"Eau minérale en bouteille de 1,5 litre.",cons:"À l'abri du soleil et de la chaleur.",idee:"Pour toute la famille, au frais."},
  {id:"p25",slug:"eau-pack",cat:"Boissons",name:"Eau minérale",unit:"pack de 6 × 1,5 L",price:2200,e:"💧",shape:"pack",color:0x4FB3E8,dim:[2.0,1.7,1.3],kcal:0,
   desc:"Pack de 6 bouteilles d'eau minérale de 1,5 litre.",cons:"À l'abri du soleil et de la chaleur.",idee:"Réserve pour la maison ou le bureau."},
  {id:"p26",slug:"bissap",cat:"Boissons",name:"Jus de bissap",unit:"1 litre",price:1000,e:"🧃",shape:"bottle",color:0x8E1B3A,liquid:0x8E1B3A,capColor:0xFFFFFF,
   desc:"Boisson à base de fleurs d'hibiscus, fraîche et acidulée.",cons:"Au frais, et à consommer rapidement après ouverture.",idee:"Bien frais, avec des glaçons."},
  {id:"p27",slug:"cafe",cat:"Boissons",name:"Café soluble",unit:"pot de 100 g",price:2500,e:"☕",shape:"jar",color:0x5A3825,
   desc:"Café soluble en pot.",cons:"Pot bien fermé, au sec.",idee:"À préparer avec de l'eau chaude."},
  {id:"p28",slug:"savon",cat:"Maison et hygiène",name:"Savon de ménage",unit:"1 pain",price:300,e:"🧼",shape:"soap",color:0x3C82C4,
   desc:"Pain de savon pour le linge et la vaisselle.",cons:"Au sec entre deux usages.",idee:"Lessive à la main, nettoyage."},
  {id:"p29",slug:"lessive",cat:"Maison et hygiène",name:"Lessive en poudre",unit:"1 kg",price:1500,e:"🧴",shape:"bag",color:0x2D8E5A,
   desc:"Lessive en poudre pour le linge.",cons:"Au sec, hors de portée des enfants.",idee:"Lavage à la main ou en machine."},
  {id:"p30",slug:"papier",cat:"Maison et hygiène",name:"Papier toilette",unit:"4 rouleaux",price:1000,e:"🧻",shape:"rolls",color:0xFFFFFF,
   desc:"Papier toilette, lot de 4 rouleaux.",cons:"Au sec.",idee:"Usage quotidien."}
];
const CATS = ["Tout","Fruits et légumes","Épicerie","Viandes et poissons","Boissons","Maison et hygiène"];
const STATUS = [
  {k:"nouvelle",l:"Nouvelle"},{k:"confirmee",l:"Confirmée"},{k:"preparation",l:"En préparation"},
  {k:"livraison",l:"En livraison"},{k:"livree",l:"Livrée"},{k:"annulee",l:"Annulée"}
];
const PACKAGED = ["bottle","can","jar","box","bag","soap","pack"];

/* ---------- Outils ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
const money = n => Number(n).toLocaleString("fr-FR").replace(/[  ]/g," ") + " " + CONFIG.devise;
const first = s => String(s || "").trim().split(/\s+/)[0] || "";
const clean = o => JSON.parse(JSON.stringify(o));
const store = {
  get(k,d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const intl = ph => { let d = String(ph||"").replace(/\D/g,""); if(d.indexOf("00")===0) d = d.slice(2); if(d.length===8) d = CONFIG.indicatif + d; return d; };
const mapsUrl = g => "https://www.google.com/maps?q=" + Number(g.lat).toFixed(6) + "," + Number(g.lng).toFixed(6);
const validGeo = g => !!(g && g.lat != null && g.lng != null && isFinite(g.lat) && isFinite(g.lng));
const ll = g => Number(g.lat).toFixed(6) + "," + Number(g.lng).toFixed(6);
const routeUrl = g => "https://www.google.com/maps/dir/?api=1&destination=" + ll(g) + (validGeo(CONFIG.boutique) ? "&origin=" + ll(CONFIG.boutique) : "") + "&travelmode=driving";
const navUrl = g => "https://www.google.com/maps/dir/?api=1&destination=" + ll(g) + "&travelmode=driving&dir_action=navigate";
const toRad = d => d * Math.PI / 180;
function distKm(a, b){
  const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
  const x = Math.sin(dLat/2)**2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng/2)**2;
  return 2 * 6371 * Math.asin(Math.sqrt(x));
}
function deliveryEstimate(g){
  if(!CONFIG.frais.actif || !validGeo(g) || !validGeo(CONFIG.boutique)) return null;
  const km = distKm(CONFIG.boutique, g) * CONFIG.frais.coef;
  return {km: Math.round(km * 10) / 10, fee: Math.round((CONFIG.frais.base + km * CONFIG.frais.parKm) / 50) * 50};
}
function mapEmbed(g){
  if(!CONFIG.carteIntegree || !validGeo(g)) return "";
  return '<iframe class="mapframe" loading="lazy" title="Carte de livraison" src="https://maps.google.com/maps?q=' + ll(g) + '&z=16&output=embed"></iframe>';
}
const fmtTime = ts => new Date(ts).toLocaleString("fr-FR",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"});
const stLabel = (k,mode) => {
  if(mode === "Retrait en magasin"){ if(k==="livraison") return "Prête à retirer"; if(k==="livree") return "Retirée"; }
  const s = STATUS.find(x => x.k === k); return s ? s.l : k;
};
let toastTimer = null;
function toast(msg){ const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 3800); }

/* ---------- Stockage : base partagée si disponible, sinon navigateur ---------- */
const Store = {
  mode:"local", db:null, ready:false, listeners:{}, uid:null,
  async init(){
    try{ if(window.claude && window.claude.use){ this.db = await window.claude.use("db"); } }catch(e){ this.db = null; }
    this.mode = this.db ? "cloud" : "local"; this.ready = true;
  },
  _all(c){ return store.get("karasup-db-"+c, {}); },
  watch(c, cb){
    if(this.db){
      return this.db.collection(c).onSnapshot(
        s => cb(s.docs.map(d => Object.assign({id:d.id}, d.data()))),
        e => cb(null, e));
    }
    const fire = () => cb(Object.keys(this._all(c)).map(id => Object.assign({id}, this._all(c)[id])));
    (this.listeners[c] = this.listeners[c] || []).push(fire); fire();
    return () => {};
  },
  async set(c, id, data){
    data = clean(data);
    if(this.db){ return this.db.doc(c+"/"+id).set(data); }
    const o = this._all(c); o[id] = data; store.set("karasup-db-"+c, o);
    (this.listeners[c] || []).forEach(f => f());
  },
  async del(c, id){
    if(this.db){ return this.db.doc(c+"/"+id).delete(); }
    const o = this._all(c); delete o[id]; store.set("karasup-db-"+c, o);
    (this.listeners[c] || []).forEach(f => f());
  },
  async get(c, id){
    if(this.db){ const s = await this.db.doc(c+"/"+id).get(); return s.exists ? Object.assign({id}, s.data()) : null; }
    const v = this._all(c)[id]; return v ? Object.assign({id}, v) : null;
  }
};

/* ---------- État ---------- */
let catalog = {}, orders = [], drivers = [];
let shops = {}, approved = {}, shopItems = {}, shopUnsub = {}, tracks = {}, myJobs = [], jobsSeen = null;
let selDriver = store.get("karasup-seldrv", ""), userNS = null, booted = false, ordersWatching = false;
const SHAPES = [["box","Boîte"],["bottle","Bouteille"],["can","Boîte de conserve"],["bag","Sac"],["jar","Pot"],["fruit","Fruit rond"],["cone","Légume allongé"],["fish","Poisson"],["soap","Savon"],["ellipsoid","Forme arrondie"]];
const CAT_EMO = {"Fruits et légumes":"🥬","Épicerie":"🛒","Viandes et poissons":"🍖","Boissons":"🥤","Maison et hygiène":"🧼"};
let staff = false, photoOk = false, pinOk = false, syncErr = false;
let cart = store.get("karasup-cart", {});
let client = Object.assign({name:"",phone:"",mode:"Livraison à domicile",addr:"",pay:"Espèces",note:"",geo:null}, store.get("karasup-client", {}));
let activeCat = "Tout", query = "", geoMsg = "";
let session = {code:null, saved:false};
let adminTab = "commandes", orderFilter = "actives", adminDirty = false, lastView = "";
let modalId = null, modalTab = "photo";

const photoOf = (p, o) => {
  if(o.photoId) return "/_blob/" + o.photoId;
  if(o.photoData) return o.photoData;
  if(Store.ready && Store.mode === "local" && CONFIG.dossierImages) return CONFIG.dossierImages + p.slug + ".jpg";
  return "";
};
function prod(p){
  const o = catalog[p.id] || {};
  return Object.assign({}, p, {
    price: isFinite(o.price) && o.price > 0 ? Number(o.price) : p.price,
    soldOut: !!o.soldOut,
    desc: o.desc || p.desc,
    photo: photoOf(p, o)
  });
}
function shopProd(uid, it){
  return {id:uid+"~"+it.id, slug:"", cat:it.cat || "Épicerie", name:it.name || "Produit", unit:it.unit || "", price:Number(it.price) || 0,
    e:CAT_EMO[it.cat] || "🛒", shape:it.shape || "box", color:/^#[0-9a-f]{6}$/i.test(it.color || "") ? it.color : "#D14600",
    desc:it.desc || "", cons:it.cons || "", idee:"", photo:it.photo || "", soldOut:!!it.soldOut, shopId:uid,
    shopName:(shops[uid] && shops[uid].name) || "Boutique"};
}
function shopList(){
  const out = [];
  Object.keys(shopItems).forEach(uid => { if(approved[uid]) (shopItems[uid] || []).forEach(it => out.push(shopProd(uid, it))); });
  return out;
}
const allProds = () => PRODUCTS.map(prod).concat(shopList());
const byId = id => {
  if(id.indexOf("~") > 0){
    const uid = id.split("~")[0], pid = id.slice(uid.length + 1);
    const it = (shopItems[uid] || []).find(x => x.id === pid);
    return it && approved[uid] ? shopProd(uid, it) : null;
  }
  const p = PRODUCTS.find(x => x.id === id); return p ? prod(p) : null;
};
const isDelivery = () => client.mode === "Livraison à domicile";
const lines = () => Object.keys(cart).map(id => ({p:byId(id), q:cart[id]})).filter(l => l.p);
const count = () => lines().reduce((a,l) => a + l.q, 0);
const total = () => lines().reduce((a,l) => a + l.q * l.p.price, 0);
const saveCart = () => store.set("karasup-cart", cart);
const saveClient = () => store.set("karasup-client", client);
const thumb = (p, cls) => '<div class="'+cls+'" aria-hidden="true"><span class="emo">'+p.e+'</span>' + (p.photo ? '<img data-fb src="'+esc(p.photo)+'" alt="" loading="lazy">' : '') + '</div>';
document.addEventListener("error", e => { if(e.target && e.target.tagName === "IMG" && e.target.hasAttribute("data-fb")) e.target.remove(); }, true);

/* ---------- Commande et message WhatsApp ---------- */
function newCode(){
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; let s = "";
  try{ const r = new Uint32Array(5); crypto.getRandomValues(r); r.forEach(n => { s += A[n % A.length]; }); }
  catch(e){ for(let i=0;i<5;i++) s += A[Math.floor(Math.random()*A.length)]; }
  return "KS-" + s;
}
function buildMessage(){
  const L = [];
  L.push("*Nouvelle commande KARASUP*");
  if(session.code) L.push("Code : " + session.code);
  L.push("");
  L.push("Client : " + (client.name.trim() || "-"));
  L.push("Téléphone : " + (client.phone.trim() || "-"));
  L.push("Réception : " + client.mode);
  if(isDelivery()){
    if(client.addr.trim()) L.push("Adresse : " + client.addr.trim());
    if(validGeo(client.geo)) L.push("Position : " + mapsUrl(client.geo));
  }
  L.push("Paiement : " + client.pay);
  L.push("");
  L.push("*Articles*");
  lines().forEach(l => L.push("- " + l.q + " x " + l.p.name + " (" + l.p.unit + ")" + (l.p.shopId ? " [" + l.p.shopName + "]" : "") + " : " + money(l.q * l.p.price)));
  L.push("");
  L.push("*Sous-total : " + money(total()) + "*");
  if(isDelivery()){
    const est = deliveryEstimate(client.geo);
    L.push(est ? "Distance estimée : " + est.km + " km. Frais de livraison estimés : " + money(est.fee) + " (à confirmer)" : "Frais de livraison : à confirmer");
  }
  if(client.note.trim()){ L.push(""); L.push("Précision : " + client.note.trim()); }
  return L.join("\n");
}
function renderFee(){
  const el = $("#feeNote"); if(!el) return;
  const est = isDelivery() ? deliveryEstimate(client.geo) : null;
  el.textContent = est ? "Distance estimée " + est.km + " km. Frais de livraison estimés : " + money(est.fee) + " (confirmés sur WhatsApp)." : "Frais de livraison confirmés avec vous sur WhatsApp.";
}
function refreshLink(){ renderFee(); $("#waLink").href ="https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(buildMessage()); }
function buildOrder(){
  const ls = lines();
  return {
    id:session.code, code:session.code, ts:Date.now(), status:"nouvelle",
    name:client.name.trim(), phone:client.phone.trim(), mode:client.mode,
    addr:isDelivery() ? client.addr.trim() : "", geo:isDelivery() && validGeo(client.geo) ? {lat:client.geo.lat,lng:client.geo.lng,acc:client.geo.acc||null} : null,
    pay:client.pay, note:client.note.trim(),
    items:ls.map(l => ({id:l.p.id,name:l.p.name,unit:l.p.unit,q:l.q,price:l.p.price,shopId:l.p.shopId || "",shopName:l.p.shopId ? l.p.shopName : ""})),
    km:(isDelivery() && deliveryEstimate(client.geo)) ? deliveryEstimate(client.geo).km : null,
    fee:(isDelivery() && deliveryEstimate(client.geo)) ? deliveryEstimate(client.geo).fee : null,
    total:total(), driverId:"", driverName:"", history:[{s:"nouvelle",ts:Date.now()}]
  };
}
function setErr(f, msg){ $("#err-"+f).textContent = msg || ""; }
function validate(){
  let firstBad = null;
  const bad = (f, msg, el) => { setErr(f, msg); if(!firstBad) firstBad = el; };
  setErr("name"); setErr("phone"); setErr("addr");
  if(!client.name.trim()) bad("name", "Indiquez votre nom.", $("#c-name"));
  if(client.phone.replace(/\D/g,"").length < 8) bad("phone", "Indiquez un numéro de téléphone valide (8 chiffres minimum).", $("#c-phone"));
  if(isDelivery() && !client.addr.trim() && !validGeo(client.geo)) bad("addr", "Indiquez votre quartier ou partagez votre position.", $("#c-addr"));
  return firstBad;
}
function showStatus(html){ const s = $("#status"); s.innerHTML = html; s.hidden = false; }
/* Valide le formulaire, fixe le code et enregistre la commande. Retourne false si le formulaire est incomplet. */
function commit(){
  if(!count()) return false;
  syncForm();
  const bad = validate();
  if(bad){ bad.focus(); return false; }
  if(!session.code) session.code = newCode();
  refreshLink();
  if(!session.saved){
    session.saved = true;
    const o = buildOrder();
    store.set("karasup-last", o.code);
    Store.set("orders", o.code, o).catch(() => {});
    Store.set("tracking", o.code, {id:o.code,status:"nouvelle",driver:"",mode:o.mode,ts:o.ts}).catch(() => {});
  }
  return true;
}

/* ---------- Position de livraison ---------- */
function renderGeo(){
  const g = client.geo, note = $("#geoNote"), btn = $("#geoBtn");
  if(validGeo(g)){
    note.innerHTML = 'Position enregistrée' + (g.acc ? ' (précision environ ' + Math.round(g.acc) + ' m)' : '') + '. <a href="'+mapsUrl(g)+'" target="_blank" rel="noopener">Voir sur la carte</a> · <button type="button" class="link" data-act="geoclear">Retirer</button>';
    btn.textContent = "Mettre à jour ma position";
  } else {
    note.textContent = geoMsg || "Partagez votre position pour aider le livreur à vous trouver.";
    btn.textContent = "Utiliser ma position";
  }
}
function locate(){
  const btn = $("#geoBtn");
  try{
    if(!navigator.geolocation){ geoMsg = "La localisation n'est pas disponible ici. Décrivez votre quartier ci-dessus."; renderGeo(); return; }
    btn.disabled = true; geoMsg = "Recherche de votre position..."; renderGeo();
    navigator.geolocation.getCurrentPosition(pos => {
      client.geo = {lat:pos.coords.latitude, lng:pos.coords.longitude, acc:pos.coords.accuracy};
      geoMsg = ""; saveClient(); btn.disabled = false; renderGeo(); refreshLink(); setErr("addr");
    }, err => {
      geoMsg = err && err.code === 1
        ? "Accès à la position refusé. Autorisez-le dans votre navigateur, ou décrivez votre quartier."
        : "Position introuvable pour le moment. Décrivez votre quartier ou réessayez.";
      btn.disabled = false; renderGeo();
    }, {enableHighAccuracy:true, timeout:15000, maximumAge:60000});
  }catch(e){ btn.disabled = false; geoMsg = "La localisation n'est pas disponible ici. Décrivez votre quartier ci-dessus."; renderGeo(); }
}

/* ---------- Affichage boutique ---------- */
function stepper(id){
  return '<div class="step"><button type="button" data-act="dec" data-id="'+id+'" aria-label="Retirer un">−</button>' +
         '<output>'+cart[id]+'</output>' +
         '<button type="button" data-act="inc" data-id="'+id+'" aria-label="Ajouter un">+</button></div>';
}
function renderChips(){
  $("#chips").innerHTML = CATS.map(c => '<button type="button" class="chip" data-act="cat" data-cat="'+esc(c)+'" aria-pressed="'+(c===activeCat)+'">'+esc(c)+'</button>').join("");
}
function renderGrid(){
  const q = norm(query.trim());
  const items = allProds().filter(p => (activeCat==="Tout" || p.cat===activeCat) && (!q || norm(p.name+" "+p.cat+" "+(p.shopName || "")).includes(q)));
  $("#listTitle").textContent = activeCat === "Tout" ? "Tous les produits" : activeCat;
  $("#listCount").textContent = items.length + (items.length>1 ? " produits" : " produit");
  if(!items.length){
    $("#grid").innerHTML = '<div class="empty" style="grid-column:1/-1">Aucun produit ne correspond à « '+esc(query.trim())+' ».<br><button type="button" class="ghost" data-act="reset">Afficher tous les produits</button></div>';
    return;
  }
  $("#grid").innerHTML = items.map(p =>
    '<article class="card"><button type="button" class="tile" data-act="detail" data-id="'+p.id+'" aria-label="Voir la fiche de '+esc(p.name)+'">' +
    '<span class="emo">'+p.e+'</span>' + (p.photo ? '<img data-fb src="'+esc(p.photo)+'" alt="" loading="lazy">' : '') +
    '<span class="badge3d">3D</span>' + (p.soldOut ? '<span class="out">Rupture</span>' : '') + '</button>' +
    '<div class="info"><button type="button" class="nm" data-act="detail" data-id="'+p.id+'">'+esc(p.name)+'</button><span class="unit">'+esc(p.unit)+'</span>' + (p.shopId ? '<span class="shopnm">'+esc(p.shopName)+'</span>' : '') +
    '<div class="buy"><span class="price">'+money(p.price)+'</span>' +
    (p.soldOut ? '<button type="button" class="add" disabled>Indisponible</button>'
      : cart[p.id] ? stepper(p.id)
      : '<button type="button" class="add" data-act="add" data-id="'+p.id+'" aria-label="Ajouter '+esc(p.name)+' au panier">Ajouter</button>') +
    '</div></div></article>').join("");
}
function renderCart(){
  const ls = lines(), has = ls.length > 0;
  $("#orderForm").hidden = !has;
  $("#drawerFoot").hidden = !has;
  if(!has){
    $("#cartList").innerHTML = '<div class="empty">Votre panier est vide.<br>Ajoutez des produits depuis le catalogue.<br><button type="button" class="ghost" data-act="close">Voir les produits</button></div>';
    return;
  }
  $("#cartList").innerHTML = ls.map(l =>
    '<div class="line">'+thumb(l.p,"t")+
    '<div><div class="n">'+esc(l.p.name)+'</div><div class="s">'+esc(l.p.unit)+' · '+money(l.p.price)+'</div></div>' +
    '<div class="r">'+stepper(l.p.id)+'<span class="s">'+money(l.q*l.p.price)+'</span><button type="button" class="link" data-act="del" data-id="'+l.p.id+'">Retirer</button></div></div>').join("");
  $("#subtotal").textContent = money(total());
  refreshLink();
}
function renderBars(){
  const n = count();
  $("#cartCount").textContent = n;
  $("#cartBar").hidden = n === 0;
  $("#barLabel").textContent = "Voir le panier · " + n + (n>1 ? " articles" : " article");
  $("#barTotal").textContent = money(total());
}
function renderAll(){ renderGrid(); renderCart(); renderBars(); if(modalId) renderPInfo(); }
function setQty(id, q){
  const p = byId(id); if(!p || (p.soldOut && q > (cart[id]||0))) return;
  if(q <= 0) delete cart[id]; else cart[id] = Math.min(q, 99);
  session = {code:null, saved:false};
  saveCart(); renderAll(); $("#status").hidden = true;
}

/* ---------- Tiroir panier ---------- */
let lastFocus = null;
function openCart(){
  closeProduct();
  lastFocus = document.activeElement;
  $("#scrim").hidden = false; $("#drawer").hidden = false;
  document.documentElement.classList.add("lock");
  $("#closeBtn").focus();
}
function closeCart(){
  $("#scrim").hidden = true; $("#drawer").hidden = true;
  document.documentElement.classList.remove("lock");
  if(lastFocus && lastFocus.focus) lastFocus.focus();
}
async function copyMsg(){
  if(!commit()) return;
  try{ await navigator.clipboard.writeText(buildMessage()); showStatus("Message copié. Collez-le dans WhatsApp au " + esc(CONFIG.whatsappAffiche) + ". Code de suivi : <b>" + esc(session.code) + "</b>."); }
  catch(e){ showStatus("La copie n'a pas fonctionné. Utilisez le bouton Commander sur WhatsApp."); }
}
function syncForm(){
  client.name = $("#c-name").value; client.phone = $("#c-phone").value;
  client.addr = $("#c-addr").value; client.note = $("#c-note").value;
  const m = document.querySelector('input[name="mode"]:checked'); if(m) client.mode = m.value;
  const p = document.querySelector('input[name="pay"]:checked'); if(p) client.pay = p.value;
  $("#addrField").hidden = !isDelivery();
  saveClient(); refreshLink();
}

/* ---------- Fiche produit ---------- */
function renderPInfo(){
  const p = byId(modalId); if(!p) return;
  const rows = [["Conditionnement", p.unit], ["Rayon", p.cat]];
  if(p.shopId) rows.unshift(["Vendu par", p.shopName]);
  if(p.cons) rows.push(["Conservation", p.cons]);
  if(p.idee) rows.push(["Idées d'utilisation", p.idee]);
  if(isFinite(p.kcal)) rows.push(["Énergie moyenne", "environ " + p.kcal + " kcal pour 100 g"]);
  rows.push(["Disponibilité", p.soldOut ? "Rupture de stock" : "En stock"]);
  $("#pInfo").innerHTML =
    '<span class="pm-cat">'+esc(p.cat)+'</span><h2 id="pTitle">'+esc(p.name)+'</h2>' +
    '<div class="pm-price">'+money(p.price)+' <small>/ '+esc(p.unit)+'</small></div>' +
    '<p>'+esc(p.desc)+'</p>' +
    '<dl class="facts">'+rows.map(r => '<dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd>').join("")+'</dl>' +
    (isFinite(p.kcal) ? '<p class="note">Valeurs nutritionnelles moyennes et indicatives, variables selon la variété ou la marque.</p>' : '') +
    '<div class="pm-buy">' + (cart[p.id] ? stepper(p.id) : '') +
    (p.soldOut ? '<button type="button" class="btn" disabled>Indisponible</button>'
      : '<button type="button" class="btn" data-act="add" data-id="'+p.id+'">' + (cart[p.id] ? 'Ajouter encore un' : 'Ajouter au panier') + '</button>') + '</div>';
}
function showPhotoTab(){
  const p = byId(modalId); if(!p) return;
  stop3D();
  $("#pStage").innerHTML = '<span class="emo">'+p.e+'</span>' + (p.photo ? '<img data-fb src="'+esc(p.photo)+'" alt="'+esc(p.name)+'">' : '');
  $("#pHint").textContent = p.photo ? "" : "Photo bientôt disponible. Essayez la vue 3D.";
}
function setTab(t){
  modalTab = t;
  document.querySelectorAll("[data-act=ptab]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.tab === t)));
  if(t === "3d") show3D(byId(modalId)); else showPhotoTab();
}
function openProduct(id){
  if(!byId(id)) return;
  lastFocus = document.activeElement;
  modalId = id;
  $("#pscrim").hidden = false; $("#pmodal").hidden = false;
  document.documentElement.classList.add("lock");
  renderPInfo(); setTab("photo");
  $("#pCloseBtn").focus();
}
function closeProduct(){
  if(!modalId) return;
  stop3D(); modalId = null;
  $("#pscrim").hidden = true; $("#pmodal").hidden = true;
  document.documentElement.classList.remove("lock");
  if(lastFocus && lastFocus.focus) lastFocus.focus();
}

/* ---------- Vue 3D (three.js) ---------- */
let g3 = null;
function stop3D(){
  if(!g3) return;
  cancelAnimationFrame(g3.raf);
  if(g3.ro) g3.ro.disconnect();
  g3.scene.traverse(o => {
    if(o.geometry) o.geometry.dispose();
    if(o.material){ (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { if(m.map) m.map.dispose(); m.dispose(); }); }
  });
  g3.renderer.dispose();
  try{ g3.renderer.forceContextLoss(); }catch(e){}
  g3 = null;
}
function makeLabel(p, w, h){
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const x = c.getContext("2d"), tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  const base = "#" + new THREE.Color(p.color).getHexString();
  const wrap = (t, max) => { const words = t.split(" "), out = []; let cur = ""; words.forEach(wd => { const n = cur ? cur + " " + wd : wd; if(x.measureText(n).width > max && cur){ out.push(cur); cur = wd; } else cur = n; }); out.push(cur); return out.slice(0,2); };
  const draw = img => {
    x.globalAlpha = 1; x.fillStyle = "#FFFFFF"; x.fillRect(0,0,w,h);
    if(img){ const r = Math.max(w/img.width, h/img.height); x.drawImage(img,(w-img.width*r)/2,(h-img.height*r)/2,img.width*r,img.height*r); }
    else { x.fillStyle = base; x.globalAlpha = .18; x.fillRect(0,0,w,h); x.globalAlpha = 1; x.font = Math.round(h*.3)+"px system-ui, sans-serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(p.e, w/2, h*.42); }
    x.fillStyle = "#D14600"; x.fillRect(0,0,w,h*.13);
    x.fillStyle = "#FFFFFF"; x.font = "800 "+Math.round(h*.075)+"px Sora, system-ui, sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("KARASUP", w/2, h*.067);
    x.fillStyle = "rgba(255,255,255,.93)"; x.fillRect(0,h*.72,w,h*.28);
    x.fillStyle = "#201208"; x.font = "800 "+Math.round(h*.07)+"px Sora, system-ui, sans-serif";
    const ls = wrap(p.name, w*.86); ls.forEach((t,i) => x.fillText(t, w/2, h*(.775 + i*.08)));
    x.font = "600 "+Math.round(h*.052)+"px system-ui, sans-serif"; x.fillStyle = "#5A4A3E";
    x.fillText(p.unit, w/2, h*(.775 + ls.length*.08 + .02));
    tex.needsUpdate = true;
  };
  draw(null);
  if(p.photo){ const im = new Image(); im.onload = () => draw(im); im.src = p.photo; }
  return tex;
}
function buildModel(p){
  const g = new THREE.Group(), C = new THREE.Color(p.color), S = p.shape;
  const M = (c,o) => new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.55,metalness:.05},o||{}));
  const add = (geo,mat,x,y,z) => { const m = new THREE.Mesh(geo,mat); m.position.set(x||0,y||0,z||0); g.add(m); return m; };
  const lab = (w,h) => new THREE.MeshStandardMaterial({map:makeLabel(p,w,h),roughness:.5,metalness:.05,side:THREE.DoubleSide});
  if(S === "fruit" || S === "ellipsoid"){
    const sc = p.scale || [1,.92,1];
    const m = add(new THREE.SphereGeometry(1,48,32), M(C,{roughness:.35}));
    m.scale.set(sc[0],sc[1],sc[2]);
    if(p.cap){
      if(p.capType === "cone"){ add(new THREE.ConeGeometry(.2,.4,16), M(p.cap), 0, sc[1]+.12, 0); }
      else { const c = add(new THREE.SphereGeometry(.36,16,10), M(p.cap), 0, sc[1]*.93, 0); c.scale.y = .28; }
    }
  } else if(S === "cone"){
    const cn = p.cone || [.2,1.5];
    for(let i=0;i<3;i++){ const m = add(new THREE.ConeGeometry(cn[0],cn[1],20), M(C,{roughness:.4}), 0,(i-1)*cn[0]*2.3,(i-1)*.12); m.rotation.z = -Math.PI/2 + (i-1)*.12; m.rotation.y = (i-1)*.2; }
  } else if(S === "pineapple"){
    const m = add(new THREE.SphereGeometry(1,40,28), M(C,{roughness:.6})); m.scale.set(.78,1.05,.78);
    for(let k=0;k<8;k++){ const a = k/8*Math.PI*2; const c = add(new THREE.ConeGeometry(.16,1,6), M(p.cap), Math.cos(a)*.2, 1.55, Math.sin(a)*.2); c.rotation.z = -Math.cos(a)*.35; c.rotation.x = Math.sin(a)*.35; }
    add(new THREE.ConeGeometry(.16,1.1,6), M(p.cap), 0, 1.6, 0);
  } else if(S === "bananas"){
    for(let i=0;i<5;i++){ const t = add(new THREE.TorusGeometry(1.5,.17,12,40,Math.PI*.62), M(C,{roughness:.45}), 0,-1.1,(i-2)*.34); t.rotation.z = Math.PI*.19; t.scale.set(1,1,1); }
  } else if(S === "fish"){
    const b = add(new THREE.SphereGeometry(1,40,24), M(C,{metalness:.35,roughness:.3})); b.scale.set(1.5,.55,.32);
    const t = add(new THREE.ConeGeometry(.5,.8,3), M(C,{metalness:.35,roughness:.3}), -1.6,0,0); t.rotation.z = -Math.PI/2; t.scale.z = .3;
    const f = add(new THREE.ConeGeometry(.3,.5,3), M(C,{metalness:.35,roughness:.3}), -.1,.62,0); f.scale.z = .25;
    add(new THREE.SphereGeometry(.07,12,8), M(0x111111), 1.05,.12,.27);
  } else if(S === "bottle"){
    const h = p.h || 1.6, r = p.r || .55;
    add(new THREE.CylinderGeometry(r,r,h,40), M(p.liquid || C,{transparent:true,opacity:.88,roughness:.15,metalness:0}));
    add(new THREE.CylinderGeometry(r+.012,r+.012,h*.5,40,1,true), lab(1024,512));
    add(new THREE.CylinderGeometry(r*.4,r*.98,.34,28), M(p.liquid || C,{transparent:true,opacity:.88,roughness:.15}), 0, h/2+.17, 0);
    add(new THREE.CylinderGeometry(r*.42,r*.42,.24,24), M(p.capColor || 0xffffff), 0, h/2+.46, 0);
  } else if(S === "can"){
    const d = p.dim || [.6,1.2];
    add(new THREE.CylinderGeometry(d[0],d[0],d[1],44), M(0xcfd3d6,{metalness:.6,roughness:.35}));
    add(new THREE.CylinderGeometry(d[0]+.006,d[0]+.006,d[1]*.84,44,1,true), lab(1024,512));
    add(new THREE.CylinderGeometry(d[0]*.88,d[0]*.88,.04,44), M(0xe9ecee,{metalness:.7,roughness:.3}), 0, d[1]/2+.01, 0);
  } else if(S === "jar"){
    add(new THREE.CylinderGeometry(.62,.62,1.1,40), M(0x4a2e1c,{roughness:.2}));
    add(new THREE.CylinderGeometry(.626,.626,.62,40,1,true), lab(1024,512));
    add(new THREE.CylinderGeometry(.66,.66,.28,40), M(0x181818), 0, .69, 0);
  } else if(S === "box" || S === "bag" || S === "pack"){
    const d = p.dim || [1.3,1.8,.6];
    const side = S === "pack" ? M(C,{transparent:true,opacity:.86,roughness:.25}) : M(C,{roughness:.6});
    const L = lab(640,960);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(d[0],d[1],d[2]), [side,side,side,side,L,L]));
    if(S === "bag") add(new THREE.BoxGeometry(d[0],.16,d[2]+.06), M(C.clone().multiplyScalar(.72),{roughness:.7}), 0, d[1]/2, 0);
  } else if(S === "soap"){
    const side = M(C,{roughness:.4}), L = lab(900,600);
    g.add(new THREE.Mesh(new THREE.BoxGeometry(1.5,.55,.95), [side,side,L,side,side,side]));
  } else if(S === "tray"){
    add(new THREE.BoxGeometry(2.5,.2,2.1), M(0xb9a27a,{roughness:.9}));
    for(let i=0;i<6;i++) for(let j=0;j<5;j++){ const e = add(new THREE.SphereGeometry(.19,16,12), M(0xF4E7D3,{roughness:.4}), (i-2.5)*.4, .3, (j-2)*.4); e.scale.y = 1.3; }
  } else if(S === "rolls"){
    [[-.52,-.52],[.52,-.52],[-.52,.52],[.52,.52]].forEach(q => add(new THREE.CylinderGeometry(.5,.5,.9,32), M(0xffffff,{roughness:.9}), q[0], 0, q[1]));
  } else {
    add(new THREE.BoxGeometry(1.2,1.2,1.2), M(C));
  }
  return g;
}
function show3D(p){
  const stage = $("#pStage"); stop3D(); stage.innerHTML = "";
  const fail = msg => { stage.innerHTML = '<div class="pm-fallback">'+msg+'</div>'; $("#pHint").textContent = ""; };
  if(!p) return;
  if(!window.THREE){ fail("La vue 3D n'est pas disponible sur cet appareil."); return; }
  let renderer;
  try{ renderer = new THREE.WebGLRenderer({antialias:true, alpha:true}); }
  catch(e){ fail("La vue 3D n'est pas disponible sur cet appareil."); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  stage.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 60); camera.position.set(0,.5,6.6); camera.lookAt(0,0,0);
  scene.add(new THREE.HemisphereLight(0xffffff,0xffd9bf,.95));
  const key = new THREE.DirectionalLight(0xffffff,.9); key.position.set(3,5,4); scene.add(key);
  const back = new THREE.DirectionalLight(0xffffff,.35); back.position.set(-4,2,-3); scene.add(back);
  const model = buildModel(p), box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  const s = 2.5 / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(s); model.position.set(-ctr.x*s, -ctr.y*s, -ctr.z*s);
  const pivot = new THREE.Group(); pivot.add(model); pivot.rotation.set(.12,-.6,0); scene.add(pivot);
  const sc = document.createElement("canvas"); sc.width = sc.height = 128;
  const sx = sc.getContext("2d"), gr = sx.createRadialGradient(64,64,4,64,64,60);
  gr.addColorStop(0,"rgba(0,0,0,.35)"); gr.addColorStop(1,"rgba(0,0,0,0)"); sx.fillStyle = gr; sx.fillRect(0,0,128,128);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(3.4,3.4), new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sc),transparent:true,depthWrite:false}));
  sh.rotation.x = -Math.PI/2; sh.position.y = -(size.y*s)/2 - .06; scene.add(sh);
  const still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const st = {scene, renderer, drag:false, lx:0, ly:0, raf:0, ro:null};
  g3 = st;
  const size2 = () => { const w = stage.clientWidth || 300, h = stage.clientHeight || 300; renderer.setSize(w,h,false); camera.aspect = w/h; camera.updateProjectionMatrix(); };
  size2();
  if(window.ResizeObserver){ st.ro = new ResizeObserver(size2); st.ro.observe(stage); }
  const cv = renderer.domElement;
  cv.addEventListener("pointerdown", e => { st.drag = true; st.lx = e.clientX; st.ly = e.clientY; try{ cv.setPointerCapture(e.pointerId); }catch(x){} cv.style.cursor = "grabbing"; });
  cv.addEventListener("pointermove", e => { if(!st.drag) return; pivot.rotation.y += (e.clientX - st.lx)*.012; pivot.rotation.x = Math.max(-.7, Math.min(.7, pivot.rotation.x + (e.clientY - st.ly)*.008)); st.lx = e.clientX; st.ly = e.clientY; });
  const up = () => { st.drag = false; cv.style.cursor = "grab"; };
  cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
  const loop = () => { st.raf = requestAnimationFrame(loop); if(!st.drag && !still) pivot.rotation.y += .008; renderer.render(scene, camera); };
  loop();
  $("#pHint").textContent = "Faites glisser pour tourner le produit.";
}

/* ---------- Suivi client ---------- */
function timelineHtml(status, mode){
  if(status === "annulee") return '<p class="status">Cette commande a été annulée. Écrivez-nous sur WhatsApp pour en savoir plus.</p>';
  const steps = STATUS.slice(0,5), idx = steps.findIndex(s => s.k === status);
  return '<ol class="tl">' + steps.map((s,i) => '<li class="'+(i<idx?'done':i===idx?'now':'')+'"><span class="dot"></span>'+esc(stLabel(s.k,mode))+'</li>').join("") + '</ol>';
}
async function doTrack(){
  let code = $("#trackCode").value.trim().toUpperCase();
  const out = $("#trackOut");
  if(!code){ out.innerHTML = '<p class="err">Saisissez le code de votre commande.</p>'; return; }
  if(code.indexOf("KS-") !== 0) code = "KS-" + code;
  out.innerHTML = '<div class="panel">Recherche en cours...</div>';
  let t = null;
  try{ t = await Store.get("tracking", code); }catch(e){ out.innerHTML = '<div class="panel">Le suivi n\'est pas joignable pour le moment. Réessayez ou écrivez-nous sur WhatsApp.</div>'; return; }
  const wa = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent("Bonjour, je voudrais des nouvelles de ma commande " + code + ".");
  if(!t){
    out.innerHTML = '<div class="panel"><b>Commande introuvable</b><p class="note">Vérifiez le code. Si vous venez de commander, patientez un instant. Le suivi en ligne n\'est disponible que pour les commandes enregistrées sur ce site.</p><p><a href="'+wa+'" target="_blank" rel="noopener">Nous écrire sur WhatsApp</a></p></div>';
    return;
  }
  out.innerHTML = '<div class="panel"><div class="ord-h"><b>'+esc(code)+'</b><span class="pill s-'+esc(t.status)+'">'+esc(stLabel(t.status,t.mode))+'</span></div>' +
    timelineHtml(t.status, t.mode) +
    (t.driver && t.status === "livraison" ? '<p class="note" style="margin-top:.9rem">Votre livreur : <b>'+esc(t.driver)+'</b></p>' : '') +
    '<p class="note" style="margin-top:.9rem">Dernière mise à jour : '+esc(fmtTime(t.ts))+'</p>' +
    '<div class="row" style="margin-top:.7rem"><button type="button" class="ghost" data-act="track">Actualiser</button><a class="ghost" href="'+wa+'" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">Écrire sur WhatsApp</a></div></div>';
}
function initTrack(){
  const inp = $("#trackCode");
  if(!inp.value){ const l = store.get("karasup-last", ""); if(l){ inp.value = l; doTrack(); } }
}

/* ---------- Gestion ---------- */
const startOfDay = () => { const d = new Date(); d.setHours(0,0,0,0); return d.getTime(); };
const statusTs = o => (o.history && o.history.length ? o.history[o.history.length-1].ts : o.ts) || 0;
const linkIfUrl = t => /^https:\/\/\S+$/.test(t) ? '<a href="'+esc(t)+'" target="_blank" rel="noopener">'+esc(t)+'</a>' : esc(t);
function driverMsg(o){
  const L = ["*Livraison KARASUP " + o.code + "*", "Client : " + o.name, "Téléphone : " + o.phone];
  if(o.addr) L.push("Adresse : " + o.addr);
  if(validGeo(o.geo)) L.push("Position : " + mapsUrl(o.geo));
  L.push("Paiement : " + o.pay);
  L.push("Montant des articles : " + money(o.total));
  L.push("Articles : " + (o.items || []).map(i => i.q + " x " + i.name + (i.shopName ? " [" + i.shopName + "]" : "")).join(", "));
  if(validGeo(o.geo)) L.push("Navigation Google Maps : " + navUrl(o.geo));
  L.push("Merci de partager votre position en direct sur WhatsApp pendant la course.");
  return L.join("\n");
}
/* Commandes avec le statut le plus récent (le livreur peut marquer "livrée" depuis son espace) */
function ordersEff(){
  return orders.map(o => {
    const t = tracks[o.id];
    if(t && t.status && t.status !== o.status && (t.ts || 0) > statusTs(o)) return Object.assign({}, o, {status:t.status});
    return o;
  });
}
async function updateOrder(code, patch){
  const eff = ordersEff().find(x => x.id === code); if(!eff) return;
  const base = orders.find(x => x.id === code);
  const next = Object.assign({}, base, {status:eff.status}, patch);
  if(next.status !== base.status) next.history = (base.history || []).concat([{s:next.status, ts:Date.now()}]).slice(-12);
  if((patch.driverId !== undefined && patch.driverId !== base.driverId) || (next.status === "livraison" && eff.status !== "livraison")) next.alertedAt = null;
  try{
    await Store.set("orders", code, next);
    await Store.set("tracking", code, {id:code, status:next.status, driver:first(next.driverName), mode:next.mode, ts:Date.now()});
    await syncDispatch(base, next);
  }catch(e){ toast("Mise à jour impossible. Vérifiez vos droits d'accès."); }
}
/* Envoie la course à l'espace du livreur dès que la livraison est confirmée (statut En livraison) */
async function syncDispatch(prev, next){
  if(Store.mode !== "cloud") return;
  const pd = drivers.find(x => x.id === prev.driverId), nd = drivers.find(x => x.id === next.driverId), code = next.code;
  const keep = ["livraison","livree"].indexOf(next.status) >= 0;
  if(pd && pd.userId && (!nd || nd.id !== pd.id || !keep)) await Store.del("dispatch/" + pd.userId + "/jobs", code).catch(() => {});
  if(nd && nd.userId && next.status === "livraison"){
    await Store.set("dispatch/" + nd.userId + "/jobs", code, {code, name:next.name, phone:next.phone, addr:next.addr || "", geo:next.geo || null, pay:next.pay, total:next.total, items:next.items || [], mode:next.mode, note:next.note || "", status:"livraison", driver:first(nd.name), assignedTs:Date.now()});
  }
}
const q = {};
function saveCatalog(id, patch){
  const next = Object.assign({}, catalog[id] || {}, patch, {id});
  catalog[id] = next;
  q[id] = (q[id] || Promise.resolve()).then(() => Store.set("catalog", id, next)).catch(() => toast("Enregistrement impossible. Vérifiez vos droits d'accès."));
  return q[id];
}
function resizeImage(file, max){
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file), im = new Image();
    im.onload = () => {
      const r = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement("canvas");
      c.width = Math.round(im.width * r); c.height = Math.round(im.height * r);
      c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      c.toBlob(b => b ? res(b) : rej(new Error("image")), "image/jpeg", .85);
    };
    im.onerror = () => { URL.revokeObjectURL(url); rej(new Error("image")); };
    im.src = url;
  });
}
const blobToData = b => new Promise((res, rej) => { const f = new FileReader(); f.onload = () => res(f.result); f.onerror = rej; f.readAsDataURL(b); });
async function uploadPhoto(id, file){
  try{
    toast("Envoi de la photo...");
    const blob = await resizeImage(file, Store.mode === "cloud" ? 1000 : 640);
    if(Store.mode === "cloud"){
      const A = await window.claude.use("assets");
      if(!A){ toast("Seuls les éditeurs peuvent ajouter des photos."); return; }
      const r = await A.upload(blob, {type:"image/jpeg"});
      await saveCatalog(id, {photoId:r.id, photoData:null});
    } else {
      await saveCatalog(id, {photoData:await blobToData(blob), photoId:null});
    }
    toast("Photo enregistrée.");
  }catch(e){ toast("La photo n'a pas pu être enregistrée."); }
}

function adminStats(){
  const O = ordersEff(), t0 = startOfDay(), today = O.filter(o => o.ts >= t0);
  return {
    nouvelles: O.filter(o => o.status === "nouvelle").length,
    cours: O.filter(o => ["confirmee","preparation","livraison"].includes(o.status)).length,
    jour: today.length,
    ca: today.filter(o => o.status !== "annulee").reduce((a,o) => a + (o.total||0), 0)
  };
}
function ordersHtml(){
  const f = orderFilter;
  const list = ordersEff().slice().sort((a,b) => b.ts - a.ts).filter(o =>
    f === "toutes" ? true : f === "actives" ? !["livree","annulee"].includes(o.status) : o.status === (f === "livrees" ? "livree" : "annulee"));
  const chips = [["actives","Actives"],["livrees","Livrées"],["annulees","Annulées"],["toutes","Toutes"]]
    .map(c => '<button type="button" class="chip" data-act="filter" data-f="'+c[0]+'" aria-pressed="'+(f===c[0])+'">'+c[1]+'</button>').join("");
  if(!list.length) return '<div class="tabs">'+chips+'</div><div class="empty">Aucune commande dans cette liste.<br>Les commandes envoyées depuis la boutique apparaissent ici.</div>';
  const cards = list.map(o => {
    const d = drivers.find(x => x.id === o.driverId);
    const dOpts = '<option value="">Non assigné</option>' + drivers.filter(x => x.active !== false || x.id === o.driverId).map(x => '<option value="'+esc(x.id)+'"'+(x.id===o.driverId?' selected':'')+'>'+esc(x.name)+'</option>').join("");
    const sOpts = STATUS.map(s => '<option value="'+s.k+'"'+(s.k===o.status?' selected':'')+'>'+esc(stLabel(s.k,o.mode))+'</option>').join("");
    const drvLink = d && intl(d.phone) ? '<a class="ghost" href="https://wa.me/'+intl(d.phone)+'?text='+encodeURIComponent(driverMsg(o))+'" target="_blank" rel="noopener">Envoyer au livreur</a>' : '';
    const geo = (validGeo(o.geo) ? '<p><a href="'+mapsUrl(o.geo)+'" target="_blank" rel="noopener">Voir la position</a> · <a href="'+routeUrl(o.geo)+'" target="_blank" rel="noopener">Itinéraire</a> · <a href="'+navUrl(o.geo)+'" target="_blank" rel="noopener">Navigation</a></p>' + mapEmbed(o.geo) : '') +
      (o.km ? '<p class="note">Distance estimée '+esc(o.km)+' km · frais estimés '+money(o.fee || 0)+'</p>' : '');
    return '<article class="ord s-'+esc(o.status)+'"><div class="ord-h"><b>'+esc(o.code)+'</b><span class="pill s-'+esc(o.status)+'">'+esc(stLabel(o.status,o.mode))+'</span><time>'+esc(fmtTime(o.ts))+'</time></div>' +
      '<div class="ord-g"><div><span class="k">Client</span><p>'+esc(o.name)+' · '+esc(o.phone)+'</p>' +
      '<p><a href="https://wa.me/'+intl(o.phone)+'" target="_blank" rel="noopener">Écrire au client</a></p>' +
      '<span class="k">'+esc(o.mode)+'</span>' + (o.addr ? '<p>'+linkIfUrl(o.addr)+'</p>' : '') + geo +
      '<span class="k">Paiement</span><p>'+esc(o.pay)+'</p>' + (o.note ? '<span class="k">Précision</span><p>'+esc(o.note)+'</p>' : '') + '</div>' +
      '<div><span class="k">Articles</span><ul>'+(o.items||[]).map(i => '<li>'+esc(i.q)+' × '+esc(i.name)+' <span class="unit">('+esc(i.unit)+')</span></li>').join("")+'</ul>' +
      '<p style="margin-top:.4rem"><b>'+money(o.total||0)+'</b></p></div></div>' +
      '<div class="ord-f"><label>Statut<select data-oid="'+esc(o.id)+'" data-f="status">'+sOpts+'</select></label>' +
      (o.mode === "Retrait en magasin" ? '' : '<label>Livreur<select data-oid="'+esc(o.id)+'" data-f="driver">'+dOpts+'</select></label>' + drvLink) + '</div></article>';
  }).join("");
  return '<div class="tabs">'+chips+'</div><div class="ords">'+cards+'</div>';
}
function driversHtml(){
  const t0 = startOfDay();
  const form = '<form class="addform" id="drvForm" novalidate><label>Nom<input id="drvName" type="text" placeholder="Ex. Komi Agbo" autocomplete="off"></label>' +
    '<label>Téléphone<input id="drvPhone" type="tel" placeholder="Ex. 91 00 00 00" autocomplete="off"></label>' +
    '<label>Véhicule<select id="drvVeh"><option>Moto</option><option>Tricycle</option><option>Vélo</option><option>Voiture</option></select></label>' +
    '<button type="button" class="btn" data-act="drvadd">Ajouter le livreur</button></form>';
  if(!drivers.length) return form + '<div class="empty">Aucun livreur enregistré.<br>Ajoutez vos livreurs pour leur assigner des commandes.</div>';
  return form + '<div class="drivers">' + drivers.slice().sort((a,b) => String(a.name).localeCompare(String(b.name))).map(d => {
    const mine = ordersEff().filter(o => o.driverId === d.id);
    const cours = mine.filter(o => o.status === "livraison").length;
    const done = mine.filter(o => o.status === "livree" && statusTs(o) >= t0).length;
    const st = cours > 0 ? ["livraison","En course"] : d.active === false ? ["annulee","Hors service"] : ["livree","Disponible"];
    return '<article class="drv"><div class="ord-h"><b>'+esc(d.name)+'</b><span class="pill s-'+st[0]+'">'+st[1]+'</span></div>' +
      '<span class="m">'+esc(d.vehicle||"")+' · '+esc(d.phone)+'</span>' +
      '<span class="m">En cours : '+cours+' · Livrées aujourd\'hui : '+done+'</span>' +
      (Store.mode === "cloud"
        ? '<span class="m">' + (d.userId ? 'Compte lié : <span data-uidname="'+esc(d.userId)+'">...</span> <button type="button" class="link" data-act="drvunlink" data-id="'+esc(d.id)+'">Délier</button>' : 'Alertes dans l\'application : aucun compte lié') + '</span>' +
          '<input type="search" data-dsearch="'+esc(d.id)+'" placeholder="Lier un compte : tapez un nom" aria-label="Lier un compte au livreur '+esc(d.name)+'" autocomplete="off"><div class="row" data-res="'+esc(d.id)+'"></div>'
        : '') +
      '<div class="row"><button type="button" class="ghost" data-act="drvtog" data-id="'+esc(d.id)+'">'+(d.active === false ? 'Remettre en service' : 'Mettre hors service')+'</button>' +
      '<a class="ghost" style="text-decoration:none;color:inherit" href="https://wa.me/'+intl(d.phone)+'" target="_blank" rel="noopener">WhatsApp</a>' +
      '<button type="button" class="link" data-act="drvdel" data-id="'+esc(d.id)+'">'+(armed[d.id] ? 'Confirmer le retrait' : 'Retirer')+'</button></div></article>';
  }).join("") + '</div>';
}
function productsHtml(){
  return '<p class="note" style="margin-bottom:.8rem">Modifiez le prix, la disponibilité, la description et la photo de chaque produit. Les changements sont visibles tout de suite dans la boutique.</p><div class="prods">' +
    allProds().map(p => {
      const o = catalog[p.id] || {};
      return '<div class="prow">'+thumb(p,"pt")+
        '<div class="pm"><b>'+esc(p.name)+'</b><span>'+esc(p.unit)+' · '+esc(p.cat)+'</span></div>' +
        '<label class="field"><span class="note">Prix ('+esc(CONFIG.devise)+')</span><input type="number" min="0" step="50" value="'+esc(p.price)+'" data-pid="'+p.id+'" data-f="price"></label>' +
        '<label class="chk"><input type="checkbox" data-pid="'+p.id+'" data-f="soldOut"'+(o.soldOut?' checked':'')+'> Rupture</label>' +
        '<div class="row">' + (photoOk ? '<button type="button" class="ghost" data-act="photo" data-id="'+p.id+'">'+(p.photo?'Changer la photo':'Ajouter une photo')+'</button>' : '') +
        ((o.photoId||o.photoData) ? '<button type="button" class="link" data-act="photodel" data-id="'+p.id+'">Retirer</button>' : '') + '</div>' +
        '<label class="dsc field"><span class="note">Description</span><textarea data-pid="'+p.id+'" data-f="desc">'+esc(o.desc || "")+'</textarea></label></div>';
    }).join("") + '</div>';
}
const armed = {};
function renderAdmin(){
  adminDirty = false;
  const v = $("#view-gestion");
  if(Store.mode === "local" && !pinOk){
    v.innerHTML = '<h1>Gestion</h1><p class="lead">Espace réservé à l\'équipe KARASUP.</p><div class="panel"><div class="field"><label class="l" for="pinInput">Code d\'accès</label><input id="pinInput" type="text" inputmode="numeric" autocomplete="off" style="max-width:12rem"><p class="err" id="pinErr"></p></div><button type="button" class="btn" data-act="pinok" style="margin-top:.7rem">Entrer</button></div>';
    return;
  }
  const s = adminStats();
  const pending = Object.keys(shops).filter(u => !approved[u]).length;
  const tabs = [["commandes","Commandes"],["livreurs","Livreurs"],["boutiques","Boutiques"],["produits","Produits KARASUP"]]
    .map(t => '<button type="button" class="chip" data-act="tab" data-tab="'+t[0]+'" aria-pressed="'+(adminTab===t[0])+'">'+t[1]+(t[0]==="commandes"&&s.nouvelles?' ('+s.nouvelles+')':'')+(t[0]==="boutiques"&&pending?' ('+pending+')':'')+'</button>').join("");
  v.innerHTML = '<h1>Gestion</h1>' +
    '<p class="sync">' + (Store.mode === "cloud"
      ? (syncErr ? 'Synchronisation interrompue, données possiblement non à jour.' : 'Données partagées en direct entre les membres de l\'équipe.')
      : 'Mode local : les données sont enregistrées dans ce navigateur uniquement.') + '</p>' +
    '<div class="stats"><div class="stat hot"><b>'+s.nouvelles+'</b><span>Nouvelles commandes</span></div><div class="stat"><b>'+s.cours+'</b><span>En cours</span></div><div class="stat"><b>'+s.jour+'</b><span>Commandes aujourd\'hui</span></div><div class="stat"><b>'+money(s.ca)+'</b><span>Montant du jour</span></div></div>' +
    '<div class="tabs">'+tabs+'</div>' +
    (adminTab === "commandes" ? alertsHtml() + ordersHtml() : adminTab === "livreurs" ? driversHtml() : adminTab === "boutiques" ? shopsHtml() : productsHtml());
  fillNames();
}
function scheduleAdmin(){
  if($("#view-gestion").hidden){ adminDirty = true; return; }
  const a = document.activeElement;
  if(a && $("#view-gestion").contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)){ adminDirty = true; return; }
  renderAdmin();
}
$("#view-gestion").addEventListener("focusout", () => { if(adminDirty) setTimeout(() => { const a = document.activeElement; if(!(a && $("#view-gestion").contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))) renderAdmin(); }, 60); });
$("#view-gestion").addEventListener("change", e => {
  const t = e.target;
  if(t.dataset.oid){
    if(t.dataset.f === "status"){
      const o = orders.find(x => x.id === t.dataset.oid);
      if(t.value === "livraison" && o && o.mode !== "Retrait en magasin"){
        toast(o.driverId ? "Livraison confirmée : alertez le livreur depuis l'encadré en haut de la liste." : "Pensez à assigner un livreur à cette commande.");
      }
      updateOrder(t.dataset.oid, {status:t.value});
    } else if(t.dataset.f === "driver"){
      const d = drivers.find(x => x.id === t.value);
      updateOrder(t.dataset.oid, {driverId:t.value, driverName:d ? d.name : ""});
    }
  } else if(t.dataset.pid){
    const f = t.dataset.f;
    if(f === "price"){ const n = Number(t.value); saveCatalog(t.dataset.pid, {price:isFinite(n) && n > 0 ? Math.round(n) : null}); }
    else if(f === "soldOut") saveCatalog(t.dataset.pid, {soldOut:t.checked});
    else if(f === "desc") saveCatalog(t.dataset.pid, {desc:t.value.trim() || null});
  }
});

/* ---------- Gestion : alertes livreurs, boutiques, noms ---------- */
function alertsHtml(){
  const need = ordersEff().filter(o => o.status === "livraison" && o.driverId && !o.alertedAt && o.mode !== "Retrait en magasin");
  if(!need.length) return "";
  return '<div class="alertbox" role="status"><b>Livreurs à alerter ('+need.length+')</b>' + need.map(o => {
    const d = drivers.find(x => x.id === o.driverId);
    const linked = d && d.userId && Store.mode === "cloud";
    const wa = d && intl(d.phone) ? '<a class="btn" data-act="alerted" data-id="'+esc(o.id)+'" href="https://wa.me/'+intl(d.phone)+'?text='+encodeURIComponent(driverMsg(o))+'" target="_blank" rel="noopener">Alerter sur WhatsApp</a>' : '';
    return '<div class="al"><span><b>'+esc(o.code)+'</b> · '+esc(o.driverName || (d && d.name) || "")+' · '+esc(o.addr || "position partagée")+(linked ? '<br><small>Alerte déjà envoyée dans son espace livreur.</small>' : '')+'</span>'+wa+
      '<button type="button" class="ghost" data-act="alerted" data-id="'+esc(o.id)+'">Marquer comme alerté</button></div>';
  }).join("") + '</div>';
}
function shopsHtml(){
  const ids = Object.keys(shops);
  if(!ids.length) return '<div class="empty">Aucune boutique pour le moment.<br>Partagez l\'application avec vos responsables de boutique (niveau Contributeur). Ils créent leur boutique depuis « Ma boutique », puis vous l\'approuvez ici.</div>';
  return '<p class="note" style="margin-bottom:.8rem">Une boutique approuvée affiche ses produits dans le catalogue. Suspendez-la pour les retirer.</p><div class="drivers">' + ids.map(uid => {
    const s = shops[uid], ok = !!approved[uid], n = (shopItems[uid] || []).length;
    return '<article class="drv"><div class="ord-h"><b>'+esc(s.name)+'</b><span class="pill s-'+(ok ? 'livree' : 'preparation')+'">'+(ok ? 'Active' : 'En attente')+'</span></div>' +
      '<span class="m">'+esc(s.phone || "")+(s.addr ? ' · '+esc(s.addr) : '')+'</span>' +
      '<span class="m">Responsable : <span data-uidname="'+esc(uid)+'">'+(uid === "local" ? "vous" : "...")+'</span> · '+n+' produit'+(n > 1 ? 's' : '')+'</span>' +
      '<div class="row"><button type="button" class="btn" data-act="shopok" data-id="'+esc(uid)+'">'+(ok ? 'Suspendre' : 'Approuver')+'</button></div></article>';
  }).join("") + '</div>';
}
async function fillNames(){
  if(Store.mode !== "cloud" || !userNS) return;
  const els = [].slice.call(document.querySelectorAll("#view-gestion [data-uidname]"));
  if(!els.length) return;
  const ids = els.map(e => e.dataset.uidname).filter((v, i, a) => a.indexOf(v) === i).slice(0, 32);
  try{
    const ps = await userNS.profiles(ids);
    els.forEach(e => { const p = ps[e.dataset.uidname]; e.textContent = (p && p.name) || "Nom non disponible"; });
  }catch(e){}
}
function toggleApproval(uid){
  const s = shops[uid]; if(!s) return;
  const p = approved[uid] ? Store.del("approvals", uid) : Store.set("approvals", uid, {id:uid, name:s.name || "", ts:Date.now()});
  p.catch(() => toast("Action impossible. Seuls les éditeurs peuvent approuver une boutique."));
}

/* ---------- Ma boutique (responsables de boutique) ---------- */
const vf = {name:"", cat:"Épicerie", unit:"", price:"", desc:"", shape:"box", color:"#D14600"};
let vfFile = null, vKey = "", vDirty = false;
const myShop = () => Store.uid ? shops[Store.uid] : null;
const keyOfVendor = () => (Store.uid || "") + "|" + (myShop() ? 1 : 0) + "|" + (approved[Store.uid] ? 1 : 0);
function shopFormHtml(s){
  return '<form class="addform" id="shopForm" novalidate>' +
    '<label>Nom de la boutique<input id="sName" type="text" maxlength="60" value="'+esc(s && s.name)+'"></label>' +
    '<label>WhatsApp de la boutique<input id="sPhone" type="tel" value="'+esc(s && s.phone)+'" placeholder="Ex. 90 00 00 00"></label>' +
    '<label>Quartier ou adresse<input id="sAddr" type="text" value="'+esc(s && s.addr)+'"></label>' +
    '<label class="full">Présentation (facultatif)<input id="sDesc" type="text" maxlength="140" value="'+esc(s && s.desc)+'"></label>' +
    '<button type="button" class="btn" data-act="shopsave">'+(s ? 'Enregistrer' : 'Créer ma boutique')+'</button></form>';
}
function productFormHtml(){
  return '<form class="addform" id="prodForm" novalidate>' +
    '<label>Nom du produit<input id="vName" type="text" maxlength="60" value="'+esc(vf.name)+'" placeholder="Ex. Pagne wax 6 yards"></label>' +
    '<label>Rayon<select id="vCat">'+CATS.slice(1).map(c => '<option'+(c===vf.cat?' selected':'')+'>'+esc(c)+'</option>').join("")+'</select></label>' +
    '<label>Conditionnement<input id="vUnit" type="text" maxlength="40" value="'+esc(vf.unit)+'" placeholder="Ex. 1 kg, boîte de 400 g"></label>' +
    '<label>Prix ('+esc(CONFIG.devise)+')<input id="vPrice" type="number" min="0" step="50" value="'+esc(vf.price)+'"></label>' +
    '<label>Forme en 3D<select id="vShape">'+SHAPES.map(s => '<option value="'+s[0]+'"'+(s[0]===vf.shape?' selected':'')+'>'+esc(s[1])+'</option>').join("")+'</select></label>' +
    '<label>Couleur du produit<input id="vColor" type="color" value="'+esc(vf.color)+'"></label>' +
    '<label class="full">Description<input id="vDesc" type="text" maxlength="300" value="'+esc(vf.desc)+'" placeholder="Quelques mots sur le produit"></label>' +
    '<label class="full">Photo (facultatif)<input id="vPhoto" type="file" accept="image/*"></label>' +
    '<button type="button" class="btn" data-act="vprodadd">Ajouter le produit</button></form>';
}
function renderVendor(){
  vDirty = false;
  const v = $("#view-vendeur");
  if(!booted){ v.innerHTML = '<h1>Ma boutique</h1><p class="lead">Chargement...</p>'; return; }
  if(!Store.uid){ v.innerHTML = '<h1>Ma boutique</h1><p class="lead">Cet espace est réservé aux responsables de boutique. Demandez au propriétaire de KARASUP de partager l\'application avec vous au niveau Contributeur, puis ouvrez-la depuis votre compte.</p>'; return; }
  const s = myShop(), ok = !!approved[Store.uid];
  vKey = keyOfVendor();
  let h = '<h1>Ma boutique</h1>';
  if(!s){
    v.innerHTML = h + '<p class="lead">Créez votre boutique pour vendre sur KARASUP. Le propriétaire l\'approuve, puis vos produits apparaissent dans le catalogue.</p>' + shopFormHtml(null);
    return;
  }
  h += '<p class="lead"><span class="pill s-'+(ok ? 'livree' : 'preparation')+'">'+(ok ? 'Boutique active' : 'En attente d\'approbation')+'</span> ' + (ok ? 'Vos produits sont visibles par les clients.' : 'Vous pouvez déjà préparer vos produits. Ils seront visibles après approbation.') + '</p>';
  h += '<details class="panel" style="max-width:none"><summary><b>'+esc(s.name)+'</b> · informations de la boutique</summary><div style="margin-top:.8rem">'+shopFormHtml(s)+'</div></details>';
  h += '<h2 class="sectitle">Ajouter un produit</h2>' + productFormHtml() + '<div id="vBody"></div>';
  v.innerHTML = h; renderVendorBody();
}
function renderVendorBody(){
  vDirty = false;
  const b = $("#vBody"); if(!b) return;
  const uid = Store.uid, items = (shopItems[uid] || []).slice().sort((x, y) => (y.ts || 0) - (x.ts || 0));
  let h = '<h2 class="sectitle">Mes produits ('+items.length+')</h2>';
  h += items.length ? '<div class="prods">' + items.map(it => {
    const p = shopProd(uid, it);
    return '<div class="prow">'+thumb(p,"pt")+
      '<div class="pm"><b>'+esc(p.name)+'</b><span>'+esc(p.unit)+' · '+esc(p.cat)+'</span></div>' +
      '<label class="field"><span class="note">Prix ('+esc(CONFIG.devise)+')</span><input type="number" min="0" step="50" value="'+esc(p.price)+'" data-vid="'+esc(it.id)+'" data-f="price"></label>' +
      '<label class="chk"><input type="checkbox" data-vid="'+esc(it.id)+'" data-f="soldOut"'+(it.soldOut ? ' checked' : '')+'> Rupture</label>' +
      '<div class="row"><button type="button" class="ghost" data-act="vphoto" data-id="'+esc(it.id)+'">'+(it.photo ? 'Changer la photo' : 'Ajouter une photo')+'</button>' +
      '<button type="button" class="link" data-act="vdel" data-id="'+esc(it.id)+'">'+(armed["v"+it.id] ? 'Confirmer la suppression' : 'Supprimer')+'</button></div>' +
      '<label class="dsc field"><span class="note">Description</span><textarea data-vid="'+esc(it.id)+'" data-f="desc">'+esc(it.desc || "")+'</textarea></label></div>';
  }).join("") + '</div>' : '<div class="empty">Aucun produit pour le moment.<br>Remplissez le formulaire ci-dessus pour ajouter le premier.</div>';
  const mine = ordersEff().filter(o => (o.items || []).some(i => i.shopId === uid)).sort((x, y) => y.ts - x.ts);
  h += '<h2 class="sectitle">Commandes contenant mes produits ('+mine.length+')</h2>';
  h += mine.length ? '<div class="ords">' + mine.map(o => {
    const its = o.items.filter(i => i.shopId === uid), sum = its.reduce((a, i) => a + i.q * i.price, 0);
    return '<article class="ord s-'+esc(o.status)+'"><div class="ord-h"><b>'+esc(o.code)+'</b><span class="pill s-'+esc(o.status)+'">'+esc(stLabel(o.status, o.mode))+'</span><time>'+esc(fmtTime(o.ts))+'</time></div>' +
      '<div><ul>'+its.map(i => '<li>'+esc(i.q)+' × '+esc(i.name)+'</li>').join("")+'</ul><p><b>'+money(sum)+'</b> · '+esc(o.mode)+'</p></div></article>';
  }).join("") + '</div>' : '<div class="empty">Aucune commande pour le moment.</div>';
  b.innerHTML = h;
}
function scheduleVendor(){
  const v = $("#view-vendeur");
  if(v.hidden){ vDirty = true; return; }
  if(keyOfVendor() !== vKey){ renderVendor(); return; }
  const a = document.activeElement, b = $("#vBody");
  if(a && b && b.contains(a) && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)){ vDirty = true; return; }
  renderVendorBody();
}
async function saveShop(){
  const name = $("#sName").value.trim();
  if(!name){ toast("Indiquez le nom de la boutique."); return; }
  const prev = myShop() || {};
  const doc = {id:Store.uid, name, phone:$("#sPhone").value.trim(), addr:$("#sAddr").value.trim(), desc:$("#sDesc").value.trim(), ts:prev.ts || Date.now()};
  try{
    await Store.set("shops", Store.uid, doc);
    if(Store.mode === "local" && !approved[Store.uid]) await Store.set("approvals", Store.uid, {id:Store.uid, name, ts:Date.now()});
    toast("Boutique enregistrée.");
  }catch(e){ toast("Enregistrement impossible. Vérifiez que l'accès Contributeur vous a été donné."); }
}
async function addProduct(){
  const uid = Store.uid, name = vf.name.trim(), price = Math.round(Number(vf.price));
  if(!name || !(price > 0)){ toast("Indiquez le nom du produit et un prix valide."); return; }
  const it = {id:"i"+Date.now().toString(36), name, cat:vf.cat, unit:vf.unit.trim(), price, desc:vf.desc.trim(), shape:vf.shape,
    color:/^#[0-9a-f]{6}$/i.test(vf.color) ? vf.color : "#D14600", soldOut:false, ts:Date.now()};
  try{
    if(vfFile){ it.photo = await blobToData(await resizeImage(vfFile, 520)); if(it.photo.length > 230000){ toast("La photo est trop lourde. Choisissez-en une plus légère."); return; } }
    await Store.set("shops/"+uid+"/items", it.id, it);
    vf.name = ""; vf.unit = ""; vf.price = ""; vf.desc = ""; vfFile = null;
    toast("Produit ajouté."); renderVendor();
  }catch(e){ toast("Le produit n'a pas pu être enregistré. Vérifiez vos droits d'accès."); }
}
const VMAP = {vName:"name", vCat:"cat", vUnit:"unit", vPrice:"price", vDesc:"desc", vShape:"shape", vColor:"color"};
$("#view-vendeur").addEventListener("input", e => { const k = VMAP[e.target.id]; if(k) vf[k] = e.target.value; });
$("#view-vendeur").addEventListener("change", e => {
  const t = e.target;
  if(t.id === "vPhoto"){ vfFile = t.files && t.files[0] ? t.files[0] : null; return; }
  if(VMAP[t.id]){ vf[VMAP[t.id]] = t.value; return; }
  if(t.dataset.vid){
    const it = (shopItems[Store.uid] || []).find(x => x.id === t.dataset.vid); if(!it) return;
    const n = Object.assign({}, it);
    if(t.dataset.f === "price"){ const x = Math.round(Number(t.value)); if(!(x > 0)){ toast("Prix invalide."); return; } n.price = x; }
    else if(t.dataset.f === "soldOut") n.soldOut = t.checked;
    else if(t.dataset.f === "desc") n.desc = t.value.trim();
    Store.set("shops/"+Store.uid+"/items", n.id, n).catch(() => toast("Enregistrement impossible."));
  }
});
$("#view-vendeur").addEventListener("focusout", () => { if(vDirty) setTimeout(scheduleVendor, 60); });
$("#vPhotoInput").addEventListener("change", async e => {
  const f = e.target.files && e.target.files[0], id = e.target.dataset.id;
  const it = (shopItems[Store.uid] || []).find(x => x.id === id);
  if(!f || !it) return;
  try{
    const data = await blobToData(await resizeImage(f, 520));
    if(data.length > 230000){ toast("La photo est trop lourde. Choisissez-en une plus légère."); return; }
    await Store.set("shops/"+Store.uid+"/items", id, Object.assign({}, it, {photo:data})); toast("Photo enregistrée.");
  }catch(x){ toast("La photo n'a pas pu être enregistrée."); }
});

/* ---------- Espace livreur ---------- */
let actx = null; const titleBase = document.title;
function beep(){
  try{
    if(!actx || actx.state !== "running") return;
    [0, .3, .6].forEach(t => {
      const o = actx.createOscillator(), g = actx.createGain(), at = actx.currentTime + t;
      o.frequency.value = 880; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(.25, at); g.gain.exponentialRampToValueAtTime(.001, at + .22);
      o.start(at); o.stop(at + .24);
    });
  }catch(e){}
}
function enableAudio(){
  try{ const C = window.AudioContext || window.webkitAudioContext; if(C){ actx = actx || new C(); actx.resume(); beep(); toast("Alertes sonores activées."); } }catch(e){}
  renderDriver();
}
function driverAlert(fresh){
  $("#drvAlertTxt").textContent = fresh.length > 1 ? fresh.length + " nouvelles courses confirmées" : "Nouvelle course confirmée : " + fresh[0].code;
  $("#drvAlert").hidden = false; beep();
  try{ if(navigator.vibrate) navigator.vibrate([300, 150, 300]); }catch(e){}
  document.title = "Nouvelle course | KARASUP";
}
function closeAlert(){ $("#drvAlert").hidden = true; document.title = titleBase; }
window.addEventListener("focus", () => { document.title = titleBase; });
function jobCard(j){
  const g = validGeo(j.geo) ? j.geo : null, done = j.status === "livree", cls = done ? "livree" : "livraison";
  return '<article class="ord s-'+cls+'"><div class="ord-h"><b>'+esc(j.code)+'</b><span class="pill s-'+cls+'">'+(done ? 'Livrée' : 'À livrer')+'</span><time>'+esc(fmtTime(j.assignedTs || j.ts || Date.now()))+'</time></div>' +
    '<div class="ord-g"><div><span class="k">Client</span><p>'+esc(j.name)+'</p><p>'+esc(j.phone)+' · <a href="https://wa.me/'+intl(j.phone)+'" target="_blank" rel="noopener">WhatsApp</a></p>' +
    (j.addr ? '<span class="k">Adresse</span><p>'+esc(j.addr)+'</p>' : '') +
    (g ? '<p><a href="'+navUrl(g)+'" target="_blank" rel="noopener">Lancer la navigation Google Maps</a><br><a href="'+mapsUrl(g)+'" target="_blank" rel="noopener">Voir la position sur la carte</a></p>' : '') + '</div>' +
    '<div><span class="k">Articles</span><p>'+(j.items || []).map(i => esc(i.q)+' × '+esc(i.name)).join(", ")+'</p>' +
    '<span class="k">Paiement</span><p>'+esc(j.pay)+' · articles '+money(j.total || 0)+(j.pay === "Espèces" && !done ? ' à encaisser (frais de livraison à confirmer)' : '')+'</p>' +
    (j.note ? '<span class="k">Précision</span><p>'+esc(j.note)+'</p>' : '') + '</div></div>' + mapEmbed(g) +
    (done ? '' : '<div class="ord-f"><button type="button" class="btn" data-act="jobdone" data-id="'+esc(j.code)+'">Marquer comme livrée</button></div>') + '</article>';
}
function localJobs(){
  return ordersEff().filter(o => o.driverId === selDriver && (o.status === "livraison" || o.status === "livree"))
    .map(o => ({code:o.code, name:o.name, phone:o.phone, addr:o.addr, geo:o.geo, pay:o.pay, total:o.total, items:o.items, mode:o.mode, note:o.note, status:o.status, ts:o.ts}));
}
function renderDriver(){
  const v = $("#view-livreur");
  let h = '<h1>Espace livreur</h1>', jobs;
  if(!booted){ v.innerHTML = h + '<p class="lead">Chargement...</p>'; return; }
  if(Store.mode === "cloud"){
    if(!Store.uid){ v.innerHTML = h + '<p class="lead">Ouvrez cette page depuis votre compte, après que le responsable vous a donné accès à l\'application.</p>'; return; }
    h += '<p class="lead">Dès qu\'une livraison vous est confirmée, elle apparaît ici avec une alerte. Gardez cette page ouverte. Pour être alerté ici, le responsable doit lier votre compte dans Gestion > Livreurs.</p>';
    jobs = myJobs;
  } else {
    h += '<p class="lead">Mode local : choisissez un livreur pour voir ses courses confirmées.</p>' +
      '<div class="field" style="max-width:18rem;margin-bottom:1rem"><label class="l" for="drvSel">Livreur</label><select id="drvSel" class="sel"><option value="">Choisir...</option>' +
      drivers.map(d => '<option value="'+esc(d.id)+'"'+(d.id === selDriver ? ' selected' : '')+'>'+esc(d.name)+'</option>').join("") + '</select></div>';
    jobs = selDriver ? localJobs() : [];
  }
  if(Store.mode === "cloud") h += '<div class="row" style="margin-bottom:1rem">' + (actx && actx.state === "running" ? '<span class="pill s-livree">Alertes sonores actives</span>' : '<button type="button" class="ghost" data-act="audioon">Activer les alertes sonores</button>') + '</div>';
  const act = jobs.filter(j => j.status === "livraison").sort((a, b) => (b.assignedTs || b.ts || 0) - (a.assignedTs || a.ts || 0));
  const fin = jobs.filter(j => j.status === "livree").sort((a, b) => (b.doneTs || 0) - (a.doneTs || 0)).slice(0, 10);
  h += '<h2 class="sectitle">À livrer ('+act.length+')</h2>' + (act.length ? '<div class="ords">'+act.map(jobCard).join("")+'</div>' : '<div class="empty">Aucune course confirmée pour le moment.</div>');
  if(fin.length) h += '<h2 class="sectitle">Livrées récemment</h2><div class="ords">'+fin.map(jobCard).join("")+'</div>';
  v.innerHTML = h;
}
function scheduleDriver(){ if(!$("#view-livreur").hidden) renderDriver(); }
async function jobDone(code){
  try{
    if(Store.mode === "cloud"){
      const j = myJobs.find(x => x.code === code); if(!j) return;
      await Store.set("dispatch/"+Store.uid+"/jobs", code, Object.assign({}, j, {status:"livree", doneTs:Date.now()}));
      await Store.set("tracking", code, {id:code, status:"livree", driver:j.driver || "", mode:j.mode, ts:Date.now()});
    } else await updateOrder(code, {status:"livree"});
    toast("Livraison enregistrée.");
  }catch(e){ toast("Mise à jour impossible. Réessayez."); }
}
$("#view-livreur").addEventListener("change", e => { if(e.target.id === "drvSel"){ selDriver = e.target.value; store.set("karasup-seldrv", selDriver); renderDriver(); } });
let dSearchTimer = null;
$("#view-gestion").addEventListener("input", e => {
  const did = e.target.dataset && e.target.dataset.dsearch; if(!did || !userNS) return;
  const val = e.target.value, res = $("#view-gestion").querySelector('[data-res="'+did+'"]');
  clearTimeout(dSearchTimer);
  dSearchTimer = setTimeout(async () => {
    if(!res) return;
    if(val.trim().length < 2){ res.innerHTML = ""; return; }
    try{
      const hits = await userNS.search(val);
      res.innerHTML = hits.length ? hits.map(h => '<button type="button" class="ghost" data-act="drvlink" data-id="'+esc(did)+'" data-uid="'+esc(h.id)+'">'+esc(h.name)+'</button>').join("") : '<span class="note">Aucun compte trouvé.</span>';
    }catch(x){ res.innerHTML = ""; }
  }, 250);
});
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if(!b) return;
  const act = b.dataset.act, id = b.dataset.id;
  if(act === "alerted") updateOrder(id, {alertedAt:Date.now()});
  else if(act === "shopsave") saveShop();
  else if(act === "vprodadd") addProduct();
  else if(act === "vdel"){
    const k = "v" + id;
    if(armed[k]){ delete armed[k]; Store.del("shops/"+Store.uid+"/items", id).catch(() => toast("Suppression impossible.")); }
    else { armed[k] = true; renderVendorBody(); setTimeout(() => { if(armed[k]){ delete armed[k]; scheduleVendor(); } }, 4000); }
  }
  else if(act === "vphoto"){ const i = $("#vPhotoInput"); i.dataset.id = id; i.value = ""; i.click(); }
  else if(act === "shopok") toggleApproval(id);
  else if(act === "drvlink"){ const d = drivers.find(x => x.id === id); if(d) Store.set("drivers", id, Object.assign({}, d, {userId:b.dataset.uid})).then(() => toast("Compte lié au livreur.")).catch(() => toast("Action impossible.")); }
  else if(act === "drvunlink"){ const d = drivers.find(x => x.id === id); if(d) Store.set("drivers", id, Object.assign({}, d, {userId:null})).catch(() => toast("Action impossible.")); }
  else if(act === "jobdone") jobDone(id);
  else if(act === "audioon") enableAudio();
  else if(act === "alertclose") closeAlert();
});

/* ---------- Navigation ---------- */
const VIEWS = ["boutique","suivi","vendeur","livreur","gestion"];
function route(){
  let h = (location.hash || "").slice(1);
  if(VIEWS.indexOf(h) < 0) h = "boutique";
  if(h === "gestion" && !staff) h = "boutique";
  VIEWS.forEach(v => { $("#view-"+v).hidden = v !== h; });
  document.querySelectorAll("#nav a").forEach(a => a.setAttribute("aria-current", a.dataset.v === h ? "page" : "false"));
  $("#searchBox").hidden = h !== "boutique";
  if(h === "gestion") renderAdmin();
  if(h === "vendeur") renderVendor();
  if(h === "livreur") renderDriver();
  if(h === "suivi") initTrack();
  if(h !== lastView) window.scrollTo(0,0);
  lastView = h;
}
window.addEventListener("hashchange", route);

/* ---------- Événements ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if(!b) return;
  const id = b.dataset.id, act = b.dataset.act;
  if(act === "add" || act === "inc") setQty(id, (cart[id]||0) + 1);
  else if(act === "dec") setQty(id, (cart[id]||0) - 1);
  else if(act === "del") setQty(id, 0);
  else if(act === "detail") openProduct(id);
  else if(act === "pclose") closeProduct();
  else if(act === "ptab") setTab(b.dataset.tab);
  else if(act === "cat"){ activeCat = b.dataset.cat; renderChips(); renderGrid(); }
  else if(act === "reset"){ query = ""; $("#q").value = ""; activeCat = "Tout"; renderChips(); renderGrid(); }
  else if(act === "catalog"){ $("#catalog").scrollIntoView({behavior:"smooth", block:"start"}); }
  else if(act === "open") openCart();
  else if(act === "close") closeCart();
  else if(act === "clear"){ cart = {}; session = {code:null, saved:false}; saveCart(); renderAll(); $("#status").hidden = true; }
  else if(act === "copy") copyMsg();
  else if(act === "geo") locate();
  else if(act === "geoclear"){ client.geo = null; geoMsg = ""; saveClient(); renderGeo(); refreshLink(); }
  else if(act === "track") doTrack();
  else if(act === "tab"){ adminTab = b.dataset.tab; renderAdmin(); }
  else if(act === "filter"){ orderFilter = b.dataset.f; renderAdmin(); }
  else if(act === "pinok"){ if($("#pinInput").value.trim() === CONFIG.pinGestion){ pinOk = true; try{ sessionStorage.setItem("karasup-pin","1"); }catch(x){} renderAdmin(); } else $("#pinErr").textContent = "Code incorrect."; }
  else if(act === "drvadd"){
    const name = $("#drvName").value.trim(), phone = $("#drvPhone").value.trim();
    if(!name || phone.replace(/\D/g,"").length < 8){ toast("Indiquez le nom et un numéro de téléphone valide."); return; }
    const d = {id:"d"+Date.now().toString(36), name, phone, vehicle:$("#drvVeh").value, active:true};
    Store.set("drivers", d.id, d).then(() => toast("Livreur ajouté.")).catch(() => toast("Ajout impossible. Vérifiez vos droits d'accès."));
  }
  else if(act === "drvtog"){ const d = drivers.find(x => x.id === id); if(d) Store.set("drivers", id, Object.assign({}, d, {active:d.active === false})).catch(() => toast("Mise à jour impossible.")); }
  else if(act === "drvdel"){
    if(armed[id]){ delete armed[id]; Store.del("drivers", id).catch(() => toast("Suppression impossible.")); }
    else { armed[id] = true; renderAdmin(); setTimeout(() => { if(armed[id]){ delete armed[id]; scheduleAdmin(); } }, 4000); }
  }
  else if(act === "photo"){ const inp = $("#photoInput"); inp.dataset.id = id; inp.value = ""; inp.click(); }
  else if(act === "photodel"){ saveCatalog(id, {photoId:null, photoData:null}); }
});
$("#photoInput").addEventListener("change", e => { const f = e.target.files && e.target.files[0]; if(f && e.target.dataset.id) uploadPhoto(e.target.dataset.id, f); });
document.addEventListener("keydown", e => {
  if(e.key !== "Escape") return;
  if(!$("#pmodal").hidden) closeProduct(); else if(!$("#drawer").hidden) closeCart();
});
$("#q").addEventListener("input", e => { query = e.target.value; renderGrid(); });
$("#orderForm").addEventListener("input", syncForm);
$("#orderForm").addEventListener("change", syncForm);
$("#orderForm").addEventListener("submit", e => e.preventDefault());
$("#trackForm").addEventListener("submit", e => { e.preventDefault(); doTrack(); });
$("#waLink").addEventListener("click", e => {
  if(!commit()){ e.preventDefault(); return; }
  showStatus("WhatsApp s'ouvre avec votre commande. Envoyez le message pour la valider. Code de suivi : <b>" + esc(session.code) + "</b>.");
});

/* ---------- Démarrage ---------- */
$("#c-name").value = client.name; $("#c-phone").value = client.phone; $("#c-addr").value = client.addr; $("#c-note").value = client.note;
$(isDelivery() ? "#mode-liv" : "#mode-ret").checked = true;
({"Espèces":"#pay-esp","TMoney":"#pay-tm","Flooz":"#pay-fl"}[client.pay] ? $({"Espèces":"#pay-esp","TMoney":"#pay-tm","Flooz":"#pay-fl"}[client.pay]) : $("#pay-esp")).checked = true;
$("#addrField").hidden = !isDelivery();
$("#footPhone").textContent = CONFIG.whatsappAffiche;
try{ pinOk = sessionStorage.getItem("karasup-pin") === "1"; }catch(e){}
renderChips(); renderGeo(); renderAll(); route();

(async function boot(){
  await Store.init();
  if(Store.mode === "cloud"){
    try{
      userNS = await window.claude.use("user");
      if(userNS){ staff = !!(await userNS.canEdit()); Store.uid = await userNS.id(); }
      const A = await window.claude.use("assets"); photoOk = !!A;
    }catch(e){}
  } else { staff = true; photoOk = true; Store.uid = "local"; }
  booted = true;
  const refresh = () => { renderAll(); scheduleAdmin(); scheduleVendor(); scheduleDriver(); };
  function ensureOrders(){
    if(ordersWatching || !(staff || myShop())) return;
    ordersWatching = true;
    Store.watch("orders", (list, err) => { if(err){ ordersWatching = false; return; } orders = list || []; scheduleAdmin(); scheduleVendor(); scheduleDriver(); });
  }
  function syncShopWatch(){
    const want = Object.keys(shops).filter(uid => approved[uid] || uid === Store.uid || staff);
    want.forEach(uid => {
      if(shopUnsub[uid]) return;
      shopUnsub[uid] = Store.watch("shops/" + uid + "/items", (l, err) => { if(err) return; shopItems[uid] = l || []; refresh(); });
    });
    Object.keys(shopUnsub).forEach(uid => { if(want.indexOf(uid) < 0){ try{ shopUnsub[uid](); }catch(e){} delete shopUnsub[uid]; delete shopItems[uid]; } });
  }
  Store.watch("catalog", (list, err) => {
    if(err){ syncErr = true; return; }
    syncErr = false; catalog = {}; (list || []).forEach(o => { catalog[o.id] = o; });
    refresh();
  });
  Store.watch("approvals", (list, err) => { if(err) return; approved = {}; (list || []).forEach(o => { approved[o.id] = o; }); syncShopWatch(); refresh(); });
  Store.watch("shops", (list, err) => { if(err) return; shops = {}; (list || []).forEach(o => { shops[o.id] = o; }); syncShopWatch(); ensureOrders(); refresh(); });
  if(staff){
    Store.watch("drivers", (list, err) => { if(err){ syncErr = true; return; } drivers = list || []; scheduleAdmin(); scheduleDriver(); });
    Store.watch("tracking", (list, err) => { if(err) return; tracks = {}; (list || []).forEach(o => { tracks[o.id] = o; }); scheduleAdmin(); scheduleVendor(); scheduleDriver(); });
    ensureOrders();
  }
  if(Store.mode === "cloud" && Store.uid){
    Store.watch("dispatch/" + Store.uid + "/jobs", (list, err) => {
      if(err) return;
      const active = (list || []).filter(j => j.status === "livraison");
      if(jobsSeen !== null){ const fresh = active.filter(j => !jobsSeen.has(j.code)); if(fresh.length) driverAlert(fresh); }
      jobsSeen = new Set(active.map(j => j.code)); myJobs = list || []; scheduleDriver();
    });
  }
  $("#navAdmin").hidden = !staff;
  $("#navShop").hidden = !Store.uid;
  $("#navDrv").hidden = !Store.uid;
  renderAll(); route();
})();
