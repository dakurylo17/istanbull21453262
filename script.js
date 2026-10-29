/* ===== Instellingen ===== */

const CONFIG = {
  openMin: 14 * 60,        // 14:00
  closeMin: 24 * 60,       // 00:00
  lastOrderMin: 23 * 60 + 40,
  basePrep: 8,             // minuten voor de eerste portie
  perItem: 2,              // extra minuten per extra portie
  maxPrep: 30,
  slotStep: 15,
  welcomeDiscount: 0.10,   // korting op de eerste bestelling met een account
  // Vul hier een URL in die bestellingen ontvangt (POST, JSON). Leeg = demo-modus.
  orderEndpoint: "",
};

const IMG = {
  doner: "img/photos/doner.jpg",
  doner2: "img/photos/doner-2.jpg",
  kapsalon: "img/photos/kapsalon.jpg",
  gozleme: "img/photos/gozleme.jpg",
  patat: "img/photos/patat.jpg",
  cola: "img/photos/cola.jpg",
  fanta: "img/photos/fanta.jpg",
  sprite: "img/photos/sprite.jpg",
  redbull: "img/photos/redbull.jpg",
  ayran: "img/photos/ayran.jpg",
  baklava: "img/photos/baklava.webp",
};

// Drankjes die bij een deal gekozen kunnen worden
const DRINK = {
  key: "drink",
  label: "Kies je drankje",
  choices: [
    { name: "Cola", img: IMG.cola },
    { name: "Fanta", img: IMG.fanta },
    { name: "Sprite", img: IMG.sprite },
    { name: "Ayran", img: IMG.ayran },
  ],
};

// kind: "food" = hoofdgerecht (daarna bijbestellen voorstellen), "side" = bijgerecht/dessert, "drink" = drankje
const PRODUCTS = [
  { id: "doner", name: "Broodje döner", desc: "Vers van het spit in Turks brood, met salade en saus.", price: 5, img: IMG.doner, units: 1, kind: "food" },
  { id: "kapsalon", name: "Kapsalon", desc: "Friet, döner, gesmolten kaas, salade en saus.", price: 7.5, img: IMG.kapsalon, units: 1, kind: "food" },
  { id: "gozleme", name: "Gözleme", desc: "Traditioneel bereid Turks plaatbrood.", price: 2.99, img: IMG.gozleme, units: 1, kind: "side" },
  { id: "patat", name: "Patat", desc: "Krokante friet met saus naar keuze.", price: 3, img: IMG.patat, units: 1, kind: "food" },
  { id: "baklava", name: "Baklava", desc: "Bladerdeeg met pistache en siroop. Per stuk.", price: 1.5, img: IMG.baklava, units: 0, kind: "side" },
  { id: "cola", name: "Cola", desc: "Gekoeld blikje.", price: 2, img: IMG.cola, units: 0, kind: "drink" },
  { id: "fanta", name: "Fanta", desc: "Gekoeld blikje.", price: 2, img: IMG.fanta, units: 0, kind: "drink" },
  { id: "sprite", name: "Sprite", desc: "Gekoeld.", price: 2, img: IMG.sprite, units: 0, kind: "drink" },
  { id: "redbull", name: "Red Bull", desc: "Energiedrank.", price: 2, img: IMG.redbull, units: 0, kind: "drink" },
  { id: "ayran", name: "Ayran", desc: "Turkse yoghurtdrank.", price: 2, img: IMG.ayran, units: 0, kind: "drink" },
];

const MENU = [
  { slug: "eten", title: "Eten", ids: ["doner", "kapsalon", "patat"] },
  { slug: "erbij", title: "Erbij & zoet", ids: ["gozleme", "baklava"] },
  { slug: "dranken", title: "Dranken", ids: ["cola", "fanta", "sprite", "redbull", "ayran"], compact: true },
];

const DEALS = [
  { id: "deal-doner", name: "Döner + drankje", desc: "Broodje döner met een drankje naar keuze.", price: 5.99, tag: "Populair", img: IMG.doner, units: 1, kind: "food", options: [DRINK] },
  { id: "deal-2doner", name: "2 broodjes döner", desc: "Twee broodjes döner. Voor jou en een vriend, of gewoon voor jou.", price: 10, tag: "Samen", img: IMG.doner2, units: 2, kind: "food" },
  { id: "deal-kapsalon", name: "Kapsalon + drankje", desc: "Friet, döner, gesmolten kaas en salade, met een drankje naar keuze.", price: 9.99, tag: "Bestseller", img: IMG.kapsalon, units: 1, kind: "food", options: [DRINK] },
];

// Wat we voorstellen na het toevoegen van een hoofdgerecht
const UPSELL = {
  drinks: ["cola", "fanta", "sprite", "redbull", "ayran"],
  extras: ["baklava", "gozleme"],
};

const CREDITS = [
  ["Döner aan het spit", "Acabashi", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Slicing_a_lamb_doner_Mamma_Mia_Kebab_House,_Tottenham,_London,_England_1.jpg"],
  ["Broodje döner", "AleGranholm", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:D%C3%B6ner_Kebab,_Berlin,_2010_(01).jpg"],
  ["Döner met friet", "Almanta", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:D%C3%B6ner_Kebab_with_french_fries_and_chili_sauce_2022-12-28_-_1.jpg"],
  ["Kapsalon", "Stelaplex", "CC0", "https://commons.wikimedia.org/wiki/File:Kleine_kapsalon.jpg"],
  ["Gözleme", "Sakhalinio", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:G%C3%B6zleme_20181224.jpg"],
  ["Patat", "Ryan from Toronto", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Cone_full_o%27_fries_with_mayo,_Amsterdam_style_(2164277255).jpg"],
  ["Cola", "M0tty", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Coca-cola_50cl_can_-_Italia.jpg"],
  ["Fanta", "Emilian Robert Vicol", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Fanta-Orange-Can-330ml_84177_(7116950883).jpg"],
  ["Sprite", "J Bar", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Sprite_Australia.jpg"],
  ["Red Bull", "メイド理世", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Red_Bull_Energy_Drink,_Dongguan,_China_1_May_2024.jpg"],
  ["Ayran", "Manfred & Barbara Aulbach", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Selbst_gemachter_Ayran_im_original-t%C3%BCrkischen_Glas.jpg"],
];

const ITEMS = Object.fromEntries([...PRODUCTS, ...DEALS].map((p) => [p.id, p]));

/* ===== Hulpfuncties ===== */

const $ = (s) => document.querySelector(s);
const euroText = (n) => "€" + n.toFixed(2).replace(".", ",");
const pad = (n) => String(n).padStart(2, "0");
const fmtMin = (m) => `${pad(Math.floor(m / 60) % 24)}:${pad(Math.floor(m % 60))}`;
const ceilTo = (m, step) => Math.ceil(m / step) * step;

const store = {
  get(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};

const round2 = (n) => Math.round(n * 100) / 100;

/* ===== Accounts =====
   Demo-modus: accounts staan in localStorage van deze browser.
   Voor echte accounts (op elke telefoon/pc) moeten deze functies een server aanroepen. */

async function hashPassword(salt, password) {
  if (!window.crypto?.subtle) throw new Error("Inloggen werkt alleen via een beveiligde verbinding (https).");
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + password));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

const Auth = {
  users() { return store.get("ib-users", {}); },
  save(users) { store.set("ib-users", users); },
  current() {
    const email = store.get("ib-session", null);
    return email ? this.users()[email] || null : null;
  },
  async register({ name, email, phone, password }) {
    email = email.trim().toLowerCase();
    const users = this.users();
    if (users[email]) throw new Error("Er bestaat al een account met dit e-mailadres. Log in.");
    const salt = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
    users[email] = {
      name: name.trim(), email, phone: phone.trim(), salt,
      hash: await hashPassword(salt, password),
      firstOrderUsed: false, orders: [], createdAt: Date.now(),
    };
    this.save(users);
    store.set("ib-session", email);
    return users[email];
  },
  async login(email, password) {
    email = email.trim().toLowerCase();
    const user = this.users()[email];
    if (!user || (await hashPassword(user.salt, password)) !== user.hash) throw new Error("E-mailadres of wachtwoord klopt niet.");
    store.set("ib-session", email);
    return user;
  },
  logout() { store.del("ib-session"); },
  recordOrder(order) {
    const users = this.users();
    const user = users[order.account];
    if (!user) return;
    user.orders.unshift({
      number: order.number, placedAt: order.placedAt, total: order.total, discount: order.discount,
      items: order.items.map((i) => `${i.qty}× ${i.name}`),
    });
    if (order.discount > 0) user.firstOrderUsed = true;
    this.save(users);
  },
};

const hasWelcomeDiscount = () => { const u = Auth.current(); return !!u && !u.firstOrderUsed; };

// Huidige tijd in Groningen
function amsNow() {
  const t = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
  return { min: t.getHours() * 60 + t.getMinutes() + t.getSeconds() / 60, day: t.getDay() };
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

/* ===== Winkelmand ===== */

let cart = store.get("ib-cart", []).filter((l) => ITEMS[l.id]);

const lineKey = (id, opts) => id + "|" + Object.values(opts || {}).join(",");
const cartUnits = () => cart.reduce((s, l) => s + (ITEMS[l.id]?.units || 0) * l.qty, 0);
const cartCount = () => cart.reduce((s, l) => s + l.qty, 0);
const cartTotal = () => cart.reduce((s, l) => s + ITEMS[l.id].price * l.qty, 0);

function pricing() {
  const subtotal = round2(cartTotal());
  const discount = hasWelcomeDiscount() ? round2(subtotal * CONFIG.welcomeDiscount) : 0;
  return { subtotal, discount, total: round2(subtotal - discount) };
}

function renderDiscountRows(p) {
  document.querySelectorAll("[data-discount-row]").forEach((r) => (r.hidden = !p.discount));
  document.querySelectorAll("[data-discount-amt]").forEach((el) => (el.textContent = "−" + euroText(p.discount)));
}
const lineImg = (l) => ITEMS[l.id].img;
const inCart = (id) => cart.some((l) => l.id === id);
const cartHasDrink = () => cart.some((l) => ITEMS[l.id].kind === "drink" || l.opts?.drink);

function addToCart(id, opts = {}, qty = 1, { upsell = true } = {}) {
  const key = lineKey(id, opts);
  const line = cart.find((l) => l.key === key);
  if (line) line.qty += qty;
  else cart.push({ key, id, opts, qty });
  saveCart();
  const btn = $("#cart-btn");
  btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
  if (upsell && ITEMS[id].kind === "food" && openUpsell(ITEMS[id])) return;
  toast(`${qty}× ${ITEMS[id].name} toegevoegd`);
}

function changeQty(key, delta) {
  const line = cart.find((l) => l.key === key);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((l) => l !== line);
  saveCart();
}

function saveCart() {
  cart = cart.filter((l) => ITEMS[l.id]);
  store.set("ib-cart", cart);
  renderCart();
}

/* ===== Afhaaltijd ===== */

function prepMinutes() {
  const units = Math.max(1, cartUnits());
  return Math.min(CONFIG.maxPrep, CONFIG.basePrep + CONFIG.perItem * (units - 1));
}

// Vroegst mogelijke klaartijd: { day: 0 vandaag / 1 morgen, min: minuten na middernacht }
function earliestReady() {
  const now = amsNow().min;
  const prep = prepMinutes();
  if (now > CONFIG.lastOrderMin) return { day: 1, min: ceilTo(CONFIG.openMin + prep, 5) };
  const ready = ceilTo(Math.max(now, CONFIG.openMin) + prep, 5);
  if (ready > CONFIG.closeMin - 5) return { day: 1, min: ceilTo(CONFIG.openMin + prep, 5) };
  return { day: 0, min: ready };
}

function laterSlots(earliest) {
  const slots = [];
  for (let m = ceilTo(earliest.min + 1, CONFIG.slotStep); m <= CONFIG.closeMin - CONFIG.slotStep; m += CONFIG.slotStep) slots.push(m);
  return slots;
}

const dayLabel = (d) => (d === 0 ? "Vandaag" : "Morgen");

function readyAtMs(day, min) {
  return Date.now() + (day * 1440 + min - amsNow().min) * 60000;
}

/* ===== Render: aanbiedingen & producten ===== */

function priceHTML(n) {
  const [w, c] = n.toFixed(2).split(".");
  return `€${w}<sup>${c}</sup>`;
}

$("#deals").innerHTML = DEALS.map((d) => `
  <button class="deal" data-id="${d.id}">
    <div class="deal-media">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <span class="deal-tag">${d.tag}</span>
      ${d.options ? `<span class="deal-incl"><svg class="i" aria-hidden="true"><use href="#i-cup"/></svg>Incl. drankje</span>` : ""}
      <span class="deal-price">${priceHTML(d.price)}</span>
    </div>
    <div class="deal-body">
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <div class="add-line"><span class="add-pill"><svg class="i" aria-hidden="true"><use href="#i-plus"/></svg>Toevoegen</span></div>
    </div>
  </button>`).join("");

$("#products").innerHTML = MENU.map((cat) => `
  <h3 class="menu-cat" id="cat-${cat.slug}">${cat.title}</h3>
  <div class="products${cat.compact ? " compact" : ""}">
    ${cat.ids.map((id) => ITEMS[id]).map((p) => `
      <article class="product" id="p-${p.id}">
        <div class="product-media"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-foot">
            <span class="price">${euroText(p.price)}</span>
            <button class="add-btn" data-id="${p.id}"><svg class="i" aria-hidden="true"><use href="#i-plus"/></svg>Toevoegen</button>
          </div>
        </div>
      </article>`).join("")}
  </div>`).join("");

$("#credits").innerHTML = CREDITS.map(([what, who, lic, url]) =>
  `<li>${what}: <a href="${url}" target="_blank" rel="noopener">${who}</a>, ${lic}, via Wikimedia Commons</li>`).join("");

document.addEventListener("click", (e) => {
  const t = e.target.closest(".deal, .add-btn");
  if (!t) return;
  const item = ITEMS[t.dataset.id];
  if (item.options) openOptions(item);
  else addToCart(item.id);
});

/* ===== Opties-modal ===== */

let optItem = null, optQty = 1;
const optModal = $("#option-modal");

function openOptions(item) {
  optItem = item; optQty = 1;
  $("#option-photo").src = item.img;
  $("#option-photo").alt = item.name;
  $("#option-title").textContent = item.name;
  $("#option-desc").textContent = item.desc;
  $("#option-groups").innerHTML = item.options.map((g) => `
    <div class="option-group">
      <h4>${g.label}</h4>
      <div class="choice-row">
        ${g.choices.map((c, i) => `
          <label class="choice">
            <input type="radio" name="opt-${g.key}" value="${c.name}"${i === 0 ? " checked" : ""}>
            <img class="choice-img" src="${c.img}" alt="">
            <span><strong>${c.name}</strong></span>
          </label>`).join("")}
      </div>
    </div>`).join("");
  updateOptPrice();
  optModal.hidden = false;
  document.body.classList.add("locked");
  $("#opt-add").focus();
}
function closeOptions() {
  optModal.hidden = true;
  if (!drawer.classList.contains("open")) document.body.classList.remove("locked");
}
function updateOptPrice() {
  $("#opt-qty").textContent = optQty;
  $("#opt-price").textContent = euroText(optItem.price * optQty);
}
$("#opt-minus").onclick = () => { optQty = Math.max(1, optQty - 1); updateOptPrice(); };
$("#opt-plus").onclick = () => { optQty = Math.min(20, optQty + 1); updateOptPrice(); };
$("#opt-add").onclick = () => {
  const opts = {};
  optItem.options.forEach((g) => { opts[g.key] = optModal.querySelector(`input[name="opt-${g.key}"]:checked`).value; });
  closeOptions();
  addToCart(optItem.id, opts, optQty);
};
// Alleen sluiten als de klik ook op de achtergrond begon (voorkomt sluiten door de klik die de modal opende)
let downTarget = null;
document.addEventListener("pointerdown", (e) => (downTarget = e.target), true);
optModal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]") && downTarget && optModal.contains(downTarget)) closeOptions();
});

/* ===== Bijbestellen (na een hoofdgerecht) ===== */

const upModal = $("#upsell-modal");
const NO_UPSELL = "ib-no-upsell";
let upAdded = {};

function upsellDeclined() {
  try { return sessionStorage.getItem(NO_UPSELL) === "1"; } catch { return false; }
}

function upTile(id) {
  const p = ITEMS[id];
  return `
    <button class="up-tile" data-up="${id}">
      <img src="${p.img}" alt="">
      <span class="up-name">${p.name}</span>
      <span class="up-add">+ ${euroText(p.price)}</span>
    </button>`;
}

// Geeft true terug als de pop-up getoond wordt
function openUpsell(item) {
  if (upsellDeclined()) return false;
  const drinks = cartHasDrink() ? [] : UPSELL.drinks;
  const extras = UPSELL.extras.filter((id) => !inCart(id));
  if (!drinks.length && !extras.length) return false;

  upAdded = {};
  $("#upsell-added").textContent = `${item.name} zit in je mandje`;
  $("#upsell-groups").innerHTML =
    (drinks.length ? `<h4>Iets te drinken erbij?</h4><div class="up-row drinks">${drinks.map(upTile).join("")}</div>` : "") +
    (extras.length ? `<h4>Nog iets lekkers?</h4><div class="up-row">${extras.map(upTile).join("")}</div>` : "");
  upModal.hidden = false;
  document.body.classList.add("locked");
  $("#upsell-cart").focus();
  return true;
}

function closeUpsell() {
  upModal.hidden = true;
  if (!drawer.classList.contains("open")) document.body.classList.remove("locked");
}

$("#upsell-groups").addEventListener("click", (e) => {
  const tile = e.target.closest("[data-up]");
  if (!tile) return;
  const id = tile.dataset.up;
  addToCart(id, {}, 1, { upsell: false });
  upAdded[id] = (upAdded[id] || 0) + 1;
  tile.classList.add("added");
  tile.querySelector(".up-add").textContent = `${upAdded[id]}× erbij`;
});
$("#upsell-no").onclick = () => {
  try { sessionStorage.setItem(NO_UPSELL, "1"); } catch {}
  closeUpsell();
};
$("#upsell-more").onclick = () => closeUpsell();
$("#upsell-cart").onclick = () => { closeUpsell(); openDrawer("cart"); };
upModal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-upsell]") && downTarget && upModal.contains(downTarget)) closeUpsell();
});

/* ===== Drawer ===== */

const drawer = $("#drawer");
const views = { cart: $("#view-cart"), checkout: $("#view-checkout"), done: $("#view-done"), auth: $("#view-auth"), account: $("#view-account") };
const titles = { cart: "Je bestelling", checkout: "Afrekenen", done: "Bedankt!", auth: "Account", account: "Mijn account" };
let currentView = "cart";
let authReturn = null; // view om naar terug te gaan na inloggen (bijv. afrekenen)

function openDrawer(view = "cart") {
  showView(view);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}
function showView(name) {
  currentView = name;
  Object.entries(views).forEach(([k, el]) => (el.hidden = k !== name));
  $("#drawer-title").textContent = titles[name];
  $("#drawer-back").hidden = !(name === "checkout" || (name === "auth" && authReturn));
  if (name === "checkout") renderCheckout();
  if (name === "done") renderDone();
  if (name === "account") renderAccount();
}

$("#cart-btn").onclick = () => openDrawer("cart");
$("#cart-bar").onclick = () => openDrawer("cart");
$("#drawer-back").onclick = () => {
  if (currentView === "auth" && authReturn) showView(authReturn);
  else showView("cart");
};
drawer.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-drawer]") && downTarget && drawer.contains(downTarget)) closeDrawer();
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!optModal.hidden) closeOptions();
  else if (!upModal.hidden) closeUpsell();
  else if (drawer.classList.contains("open")) closeDrawer();
});

function renderCart() {
  const count = cartCount();
  const p = pricing();
  const total = euroText(p.total);
  renderDiscountRows(p);
  $("#cart-count").hidden = count === 0;
  $("#cart-count").textContent = count;
  $("#cart-btn-total").textContent = total;
  $("#cart-bar").hidden = count === 0;
  document.body.classList.toggle("has-cart", count > 0);
  $("#cart-bar-count").textContent = count;
  $("#cart-bar-total").textContent = total;
  $("#cart-total").textContent = total;
  $("#cart-empty").hidden = count > 0;
  $("#cart-foot").hidden = count === 0;
  $("#cart-eta").hidden = count === 0;

  $("#cart-list").innerHTML = cart.map((l) => {
    const it = ITEMS[l.id];
    const opts = Object.values(l.opts || {}).join(", ");
    return `
      <li class="cart-item">
        <img class="cart-item-img" src="${lineImg(l)}" alt="">
        <div class="cart-item-info">
          <strong>${it.name}</strong>
          ${opts ? `<small>${opts}</small>` : ""}
          <div class="qty">
            <button class="icon-btn" data-key="${l.key}" data-delta="-1" aria-label="Minder"><svg class="i" aria-hidden="true"><use href="#i-minus"/></svg></button>
            <span>${l.qty}</span>
            <button class="icon-btn" data-key="${l.key}" data-delta="1" aria-label="Meer"><svg class="i" aria-hidden="true"><use href="#i-plus"/></svg></button>
          </div>
        </div>
        <span class="cart-item-price">${euroText(it.price * l.qty)}</span>
      </li>`;
  }).join("");

  renderEta();
}

$("#cart-list").addEventListener("click", (e) => {
  const b = e.target.closest("[data-delta]");
  if (b) changeQty(b.dataset.key, Number(b.dataset.delta));
});

function renderEta() {
  const er = earliestReady();
  const now = amsNow().min;
  let text;
  if (er.day === 1) text = `Vandaag gesloten · bestel vooruit voor morgen ${fmtMin(er.min)}`;
  else if (now < CONFIG.openMin) text = `We openen om 14:00 · klaar om ${fmtMin(er.min)}`;
  else text = `Afhalen · klaar om ${fmtMin(er.min)} (± ${prepMinutes()} min)`;
  $("#cart-eta").textContent = text;

  $("#eta-label").textContent = er.day === 1 ? "Bestel vooruit, morgen klaar om" : now < CONFIG.openMin ? "Bestel vooruit, klaar om" : "Nu bestellen, klaar om";
  $("#eta-time").textContent = fmtMin(er.min);
  $("#how-time").textContent = fmtMin(er.min);
}

$("#to-checkout").onclick = () => showView("checkout");

/* ===== Afrekenen ===== */

const form = $("#view-checkout");

function renderCheckout() {
  const er = earliestReady();
  $("#asap-label").textContent = `${dayLabel(er.day)} klaar om ${fmtMin(er.min)}`;
  $("#later-day").textContent = `${dayLabel(er.day)}, tot 23:45`;
  const slot = $("#slot");
  const prev = slot.value;
  const slots = laterSlots(er);
  slot.innerHTML = slots.map((m) => `<option value="${m}">${dayLabel(er.day)} ${fmtMin(m)}</option>`).join("");
  if (slots.includes(Number(prev))) slot.value = prev;
  const laterRadio = form.querySelector('input[name="when"][value="later"]');
  laterRadio.disabled = slots.length === 0;
  if (slots.length === 0) form.querySelector('input[name="when"][value="asap"]').checked = true;
  slot.disabled = !laterRadio.checked;
  const p = pricing();
  renderDiscountRows(p);
  $("#checkout-total").textContent = euroText(p.total);
  $("#place-order").textContent = `Bestelling plaatsen · ${euroText(p.total)}`;
  $("#form-error").hidden = true;

  // Account: gegevens invullen en korting tonen
  const user = Auth.current();
  if (user) {
    if (!form.elements.name.value) form.elements.name.value = user.name;
    if (!form.elements.phone.value) form.elements.phone.value = user.phone;
  }
  const perk = $("#checkout-perk");
  perk.className = "perk-box";
  if (p.discount) {
    perk.classList.add("perk-on");
    perk.innerHTML = `<strong>−10%</strong> Je welkomstkorting van ${euroText(p.discount)} is toegepast.`;
  } else if (!user) {
    perk.innerHTML = `<strong>−10%</strong> op je eerste bestelling met een account. <button type="button" class="link-btn" data-open-auth="register">Account maken</button> of <button type="button" class="link-btn" data-open-auth="login">inloggen</button>`;
  }
  perk.hidden = !p.discount && !!user;
}

form.addEventListener("change", (e) => {
  if (e.target.name === "when") $("#slot").disabled = e.target.value !== "later";
});
form.addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("invalid"));

function validate() {
  const name = form.elements.name;
  const phone = form.elements.phone;
  const digits = phone.value.replace(/\D/g, "");
  const nameOk = !!name.value.trim();
  const phoneOk = digits.length >= 9 && digits.length <= 15;
  name.closest(".field").classList.toggle("invalid", !nameOk);
  phone.closest(".field").classList.toggle("invalid", !phoneOk);
  if (!nameOk || !phoneOk) form.querySelector(".field.invalid .input").focus();
  return nameOk && phoneOk;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!cart.length || !validate()) return;

  const er = earliestReady();
  const when = form.elements.when.value;
  const readyMin = when === "later" ? Number($("#slot").value) : er.min;
  const p = pricing();
  const user = Auth.current();
  const order = {
    number: "#" + (100 + Math.floor(Math.random() * 900)),
    placedAt: Date.now(),
    readyAt: readyAtMs(er.day, readyMin),
    readyLabel: fmtMin(readyMin),
    readyDay: er.day,
    pickup: when,
    name: form.elements.name.value.trim(),
    phone: form.elements.phone.value.trim(),
    note: form.elements.note.value.trim(),
    pay: form.elements.pay.value,
    items: cart.map((l) => ({ id: l.id, name: ITEMS[l.id].name, options: l.opts, qty: l.qty, price: ITEMS[l.id].price })),
    subtotal: p.subtotal,
    discount: p.discount,
    total: p.total,
    account: user ? user.email : null,
    demo: !CONFIG.orderEndpoint,
  };

  const btn = $("#place-order");
  btn.disabled = true;
  btn.textContent = "Bezig met plaatsen…";
  try {
    if (CONFIG.orderEndpoint) {
      const res = await fetch(CONFIG.orderEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
    }
    store.set("ib-order", order);
    if (order.account) Auth.recordOrder(order);
    renderAuthUI();
    cart = [];
    saveCart();
    form.reset();
    showView("done");
    renderChip();
  } catch {
    $("#form-error").textContent = "Er ging iets mis bij het versturen. Probeer het opnieuw of kom langs aan de balie.";
    $("#form-error").hidden = false;
  } finally {
    btn.disabled = false;
    btn.textContent = `Bestelling plaatsen · ${euroText(pricing().total)}`;
  }
});

/* ===== Bevestiging ===== */

const getOrder = () => store.get("ib-order", null);

function renderDone() {
  const o = getOrder();
  if (!o) return showView("cart");
  $("#done-number").textContent = o.number;
  $("#done-day").textContent = o.readyDay === 1 ? "Morgen klaar om" : "Klaar om";
  $("#done-time").textContent = o.readyLabel;
  $("#done-pay").textContent = o.pay === "cash" ? "Contant bij afhalen" : "Pinnen bij afhalen";
  $("#done-total").textContent = euroText(o.total);
  const ul = $("#done-items");
  ul.innerHTML = "";
  o.items.forEach((i) => {
    const li = document.createElement("li");
    const opts = Object.values(i.options || {}).join(", ");
    li.innerHTML = `<span></span><span>${euroText(i.price * i.qty)}</span>`;
    li.firstChild.textContent = `${i.qty}× ${i.name}${opts ? ` (${opts})` : ""}`;
    ul.appendChild(li);
  });
  if (o.discount) {
    const li = document.createElement("li");
    li.className = "discount";
    li.innerHTML = `<span>Welkomstkorting 10%</span><span>−${euroText(o.discount)}</span>`;
    ul.appendChild(li);
  }
  $("#demo-note").hidden = !o.demo;
  tickDone();
}

function tickDone() {
  const o = getOrder();
  if (!o) return;
  const left = o.readyAt - Date.now();
  const pct = Math.min(100, Math.max(0, ((Date.now() - o.placedAt) / (o.readyAt - o.placedAt)) * 100));
  $("#done-bar").style.width = pct + "%";
  let text;
  if (left <= 0) text = "Je bestelling staat klaar. Kom maar halen!";
  else if (left > 60 * 60000) text = `Nog ${Math.floor(left / 3600000)} u ${Math.ceil((left % 3600000) / 60000)} min`;
  else text = `Nog ${Math.ceil(left / 60000)} min — we zijn ermee bezig`;
  $("#done-countdown").textContent = text;
}

function renderChip() {
  const o = getOrder();
  const chip = $("#order-chip");
  // Bestelling tonen tot een uur na de klaartijd
  if (!o || Date.now() > o.readyAt + 3600000) {
    chip.hidden = true;
    if (o) store.del("ib-order");
    return;
  }
  const ready = Date.now() >= o.readyAt;
  chip.hidden = false;
  chip.classList.toggle("ready", ready);
  $("#order-chip-text").textContent = ready
    ? `Bestelling ${o.number} staat klaar`
    : `Bestelling ${o.number} · klaar om ${o.readyLabel}`;
}

$("#order-chip").onclick = () => openDrawer("done");
$("#new-order").onclick = () => {
  showView("cart");
  closeDrawer();
  location.hash = "#menu";
};

/* ===== Account: UI ===== */

function renderAuthUI() {
  const user = Auth.current();
  $("#account-btn-text").textContent = user ? user.name.split(" ")[0] : "Inloggen";
  $("#account-btn").classList.toggle("logged-in", !!user);

  const promo = $("#promo");
  if (!user) {
    promo.hidden = false;
    $("#promo-text").innerHTML = "<strong>10% korting op je eerste bestelling</strong> als je een gratis account maakt.";
    $("#promo-btn").hidden = false;
  } else if (!user.firstOrderUsed) {
    promo.hidden = false;
    $("#promo-text").innerHTML = `<strong>Hoi ${escapeHTML(user.name.split(" ")[0])}!</strong> Je 10% welkomstkorting wordt automatisch toegepast bij je eerste bestelling.`;
    $("#promo-btn").hidden = true;
  } else {
    promo.hidden = true;
  }
  renderCart();
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function setAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach((t) => t.classList.toggle("is-active", t.dataset.tab === tab));
  $("#login-form").hidden = tab !== "login";
  $("#register-form").hidden = tab !== "register";
  document.querySelectorAll(".auth-form .form-error").forEach((e) => (e.hidden = true));
}

function openAuth(tab = "login", returnTo = null) {
  if (Auth.current()) return openDrawer("account");
  authReturn = returnTo;
  setAuthTab(tab);
  if (drawer.classList.contains("open")) showView("auth");
  else openDrawer("auth");
  ($(tab === "login" ? "#login-form" : "#register-form").querySelector("input")).focus();
}

$("#account-btn").onclick = () => (Auth.current() ? openDrawer("account") : openAuth("login"));
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-open-auth]");
  if (b) openAuth(b.dataset.openAuth, currentView === "checkout" && drawer.classList.contains("open") ? "checkout" : null);
});
document.querySelectorAll("#view-auth [data-tab]").forEach((b) => (b.onclick = () => setAuthTab(b.dataset.tab)));

function markField(input, ok) {
  input.closest(".field").classList.toggle("invalid", !ok);
  return ok;
}
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v) => { const d = v.replace(/\D/g, ""); return d.length >= 9 && d.length <= 15; };

async function submitAuth(formEl, action) {
  const err = formEl.querySelector(".form-error");
  const btn = formEl.querySelector('button[type="submit"]');
  err.hidden = true;
  btn.disabled = true;
  try {
    const user = await action();
    formEl.reset();
    renderAuthUI();
    toast(`Welkom${formEl.id === "login-form" ? " terug" : ""}, ${user.name.split(" ")[0]}!`);
    const back = authReturn;
    authReturn = null;
    showView(back || "account");
  } catch (e) {
    err.textContent = e.message;
    err.hidden = false;
  } finally {
    btn.disabled = false;
  }
}

$("#login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target.elements;
  const ok = [markField(f.email, emailOk(f.email.value)), markField(f.password, !!f.password.value)].every(Boolean);
  if (!ok) return e.target.querySelector(".field.invalid .input").focus();
  submitAuth(e.target, () => Auth.login(f.email.value, f.password.value));
});

$("#register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target.elements;
  const ok = [
    markField(f.name, !!f.name.value.trim()),
    markField(f.email, emailOk(f.email.value)),
    markField(f.phone, phoneOk(f.phone.value)),
    markField(f.password, f.password.value.length >= 8),
  ].every(Boolean);
  if (!ok) return e.target.querySelector(".field.invalid .input").focus();
  submitAuth(e.target, () => Auth.register({ name: f.name.value, email: f.email.value, phone: f.phone.value, password: f.password.value }));
});

document.querySelectorAll(".auth-form").forEach((f) =>
  f.addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("invalid")));

function renderAccount() {
  const user = Auth.current();
  if (!user) return showView("auth");
  $("#acc-initial").textContent = user.name.trim().charAt(0).toUpperCase();
  $("#acc-name").textContent = user.name;
  $("#acc-meta").textContent = `${user.email} · ${user.phone}`;

  const perk = $("#acc-perk");
  perk.className = "perk-box" + (user.firstOrderUsed ? "" : " perk-on");
  perk.innerHTML = user.firstOrderUsed
    ? "Je welkomstkorting is gebruikt bij je eerste bestelling. Bedankt!"
    : "<strong>−10%</strong> Je welkomstkorting staat klaar en wordt automatisch toegepast bij je eerste bestelling.";

  const list = $("#acc-orders");
  list.innerHTML = "";
  if (!user.orders.length) {
    list.innerHTML = `<li class="acc-empty">Nog geen bestellingen.</li>`;
    return;
  }
  user.orders.forEach((o) => {
    const li = document.createElement("li");
    const date = new Date(o.placedAt).toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
    li.innerHTML = `
      <div class="acc-order-top"><strong></strong><span>${euroText(o.total)}</span></div>
      <small></small>`;
    li.querySelector("strong").textContent = `Bestelling ${o.number} · ${date}`;
    li.querySelector("small").textContent = o.items.join(", ") + (o.discount ? ` · 10% korting (−${euroText(o.discount)})` : "");
    list.appendChild(li);
  });
}

$("#logout").onclick = () => {
  Auth.logout();
  renderAuthUI();
  closeDrawer();
  toast("Je bent uitgelogd");
};
$("#acc-order").onclick = () => {
  closeDrawer();
  location.hash = "#menu";
};

/* ===== Open / gesloten ===== */

function updateStatus() {
  const { min, day } = amsNow();
  const open = min >= CONFIG.openMin && min < CONFIG.closeMin;
  $("#status").classList.toggle("closed", !open);
  $("#status-text").textContent = open ? "Nu open tot 00:00" : "Gesloten · opent 14:00";
  document.querySelectorAll("#hours tr").forEach((tr) => tr.classList.toggle("today", Number(tr.dataset.day) === day));
}

/* ===== Header & nav ===== */

const header = $("#header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

const burger = $("#burger");
const nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

$("#year").textContent = new Date().getFullYear();

/* ===== Beweging ===== */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Wisselend woord in de kop
const ROTATE_WORDS = ["döner", "kapsalon", "gözleme", "baklava"];
if (!reduceMotion) {
  const rot = $("#rotator");
  let wi = 0;
  setInterval(() => {
    wi = (wi + 1) % ROTATE_WORDS.length;
    const old = rot.firstElementChild;
    const next = document.createElement("span");
    next.textContent = ROTATE_WORDS[wi];
    next.className = "in";
    old.classList.remove("in");
    old.classList.add("out");
    rot.appendChild(next);
    setTimeout(() => old.remove(), 600);
  }, 2600);
}

// Lopende band: inhoud verdubbelen voor een naadloze lus
const track = $("#marquee-track");
track.innerHTML += track.innerHTML;

// Getal laten optellen (bijv. de beoordeling)
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / 1100);
    const v = target * (1 - Math.pow(1 - t, 3));
    el.textContent = v.toFixed(1).replace(".", ",");
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Elementen laten verschijnen bij het scrollen
const REVEAL = [
  ".section-head", ".deal", ".banner", ".menu-cat", ".product", ".how-intro", ".how-step",
  ".about-photo", ".about-copy > *", ".faq-wrap > div:first-child", ".faq details",
  ".contact-info > *", ".map", ".cats-row", ".footer-grid > *",
];
if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("anim");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      // Ook tonen als je er voorbij gesprongen bent (bijv. via een menulink)
      if (!en.isIntersecting && en.boundingClientRect.top > 0) return;
      const el = en.target;
      el.classList.add("in-view");
      el.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(el);
      // Na de animatie de klassen weghalen, zodat hover-effecten weer normaal werken
      setTimeout(() => el.classList.remove("reveal", "in-view"), 1400 + (parseInt(el.style.getPropertyValue("--d")) || 0));
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(REVEAL.join(",")).forEach((el) => {
    const i = [...el.parentElement.children].indexOf(el);
    el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`);
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Parallax bij scrollen en zwevende foto's die de muis volgen
if (!reduceMotion) {
  const heroBg = $(".hero-bg");
  const layers = [...document.querySelectorAll(".banner img, .about-photo img")];
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const vh = window.innerHeight;
    if (window.scrollY < vh * 1.2) heroBg.style.translate = `0 ${window.scrollY * 0.3}px`;
    layers.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const off = (r.top + r.height / 2 - vh / 2) * -0.08;
      img.style.translate = `0 ${off.toFixed(1)}px`;
    });
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  const hero = $(".hero");
  const floaters = [...document.querySelectorAll(".floater")];
  hero.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const r = hero.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    floaters.forEach((f) => {
      const d = Number(f.dataset.depth);
      f.style.translate = `${(mx * d).toFixed(1)}px ${(my * d).toFixed(1)}px`;
    });
  });
}

/* ===== Start ===== */

renderAuthUI();
updateStatus();
renderChip();
setInterval(() => {
  updateStatus();
  renderEta();
  renderChip();
  if (drawer.classList.contains("open") && currentView === "done") tickDone();
}, 1000);
