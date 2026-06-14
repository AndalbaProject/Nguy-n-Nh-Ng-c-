/* ============================================================
   Happy Birthday • interaksi
   Atur semua isi di CONFIG ini lalu simpan.
   ============================================================ */
const CONFIG = {
  name: "Nguyễn Như Ngọc",
  dateLabel: "16 JUNE",
  stamp: "June 16",
  // kode rahasia (jumlah angka = jumlah titik di layar = 6). clue: tanggal spesial
  password: "150612",

  // ---------- surat ----------
  letter: [
    "Happy Birthday, Nguyễn Như Ngọc (Ana Salvadora) ❤️",
    "I'm really happy that I get to celebrate your birthday, even though we've only been together for a short time. These past days have already been special to me, and I'm grateful to have met you.",
    "I hope your birthday is filled with happiness, laughter, and all the things you love. May this new year of your life bring you beautiful memories, success, good health, and endless reasons to smile.",
    "Thank you for being part of my life. I look forward to creating many more memories with you.",
    "Happy Birthday, Nguyễn Như Ngọc. Enjoy your special day! 🎂❤️",
    "I'm lucky to have you, and I'm excited to see where our story takes us. ❤️",
  ],
  letterSign: "",

  // ---------- photo memories ----------
  photos: [
    { img: "foto1.jpeg", cap: "every moment with you ❤️" },
    { img: "foto2.jpeg", cap: "my favourite person 🤍" },
    { img: "foto3.jpeg", cap: "here's to many more 🎂" },
  ],

  // ---------- timeline ----------
  timeline: [
    { icon: "🎵", tag: "tentang lagu ini", title: "haii sayang…", text: "tau ada apa dengan lagu ini? setiap kali denger lagu ini yang aku inget cuma moment pertama kita kenal, jauh dari hari kita tukeran nomer, kamu yang masih cuek banget dan gaa ngasih atensi apapun ke aku haha, kamu yang mungkin nganggep aku 'just friend' waktu itu dan kamu yang nganggep aku sama kayak orang orang yang pernah deketin kamu (sekedar penasaran) padahal aku deketin kamu karena emang ngerasa nyaman bukan karena penasaran kayak orang orang di masa lalu kamu, tapi gatau kenapa saat itu malem malem aku kepikiran buat stalk akun kamu dan tiba tiba yakin aja kalo adanya kamu gamungkin cuma jadi temen buat aku. butuh waktu lumayan lama buat ngeyakinin kamu, kalo aku bukan orang yang sama seperti masa lalu kamu… butuh tenagaa banyak bangett buat bikin kamu ngelihat aku dan usahaku… bahkan butuh 3 kali confes baru kamu mau nerima aku… aku selalu usahain untuk yakinin kamu sampe akhirnya di titik ini aku bisaa bikin kamu percaya kalo aku bukan cuma 'strangers yang penasaran tentang kehidupan kamu'. intinya setiap lagu ini terputar yang aku inget cuma kamu dan usahaku ngeyakinin kamu." },
    { icon: "🤍", tag: "all about u!", title: "untuk kamu", text: "hidup lebih lama lagi manusia baik, sabar dan penyayang… tumbuh lebih baik dari hari hari sebelumnya sayang!!! ada terus buat orang orang yang sayang sama kamu ya, bahagia dan senyum terus terlepas dari segala masalah yang mungkin pernah kamu lewatin… i will always support u! kamu pernah bilang kamu berharap hubungan ini tetap dan tetap aku yang nemenin kamu sampe masuk univ impian kamu kan? aku usahain yaaa! aku usahain dan buktiin kalo aku bukan manusia yang sama kayak orang orang di masa lalu kamu… aku usahain untuk temenin kamu selalu… makasi udah hadir di kehidupan aku yang lumayan rumit ini haha jk. pokoknya kamu harus teruss ada, dan bahagiaa biar kamu bisa eksplor dunia luarr lebih luas… dan biar km bisaa eksplor dunia luar bareng aku… dan biar kamu bisa masuk ke dunia aku yaitu datengin banyak tempat tempat yang belom pernah kita datengin bareng." },
  ],

  // ---------- playlist ----------
  songs: [
    { title: "Dunia Yang Nanti", artist: "Raim Laode",      src: "lagu1.mp3" },
    { title: "Cornelia Street",  artist: "Taylor Swift",    src: "lagu2.mp3" },
    { title: "Shape of My Heart", artist: "Backstreet Boys", src: "lagu3.mp3" },
  ],

  // ---------- jar notes ----------
  jarNotes: [
    "Your presence alone is enough to make any room feel warmer.",
    "The way you laugh at your own jokes makes my whole day.",
    "You listen — really listen — and that means everything to me.",
    "You make the most ordinary moments feel like something special.",
    "Your kindness reaches people you don't even realize.",
    "Just being near you feels like coming home.",
    "You remind me, again and again, of what truly matters.",
  ],

  // ---------- final wish ----------
  wish: "Happy birthday, {name}. May your days always be filled with love, happiness, and all the beautiful things you deserve. I am grateful every single day to know you.",
};

/* ============================================================
   apply text content
   ============================================================ */
const $ = (id) => document.getElementById(id);
$("heroName").textContent = CONFIG.name;
$("letterName").textContent = CONFIG.name;
$("modalName").textContent = CONFIG.name;
$("heroDate").innerHTML = `${CONFIG.dateLabel} &nbsp;·&nbsp; THE MOST SPECIAL DAY`;
$("letterStamp").textContent = CONFIG.stamp;
$("wishText").textContent = CONFIG.wish.replace(/\{name\}/g, CONFIG.name);

$("letterBody").innerHTML =
  CONFIG.letter.map((p) => `<p>${p}</p>`).join("") +
  (CONFIG.letterSign ? `<p class="sign">${CONFIG.letterSign}</p>` : "");

$("polaroids").innerHTML = CONFIG.photos
  .map((p, i) => {
    const r = (i % 2 ? 1 : -1) * (2 + (i % 3));
    return `<figure class="pola" data-i="${i}" style="--r:${r}deg">
      <span class="pic" style="background-image:url('${p.img}')"></span>
      <figcaption class="cap">${p.cap}</figcaption>
    </figure>`;
  })
  .join("");

const timelineEl = $("timelineList");
if (timelineEl) {
  timelineEl.innerHTML = CONFIG.timeline
    .map(
      (t) => `<div class="tl-card" data-song="${t.song || "song1.mp3"}">
      <span class="tl-icon">${t.icon}</span>
      <p class="tl-tag">${t.tag}</p>
      <h3 class="tl-title">${t.title}</h3>
      <p class="tl-text">${t.text}</p>
      <p class="tl-play">▶ putar lagu ini</p>
    </div>`
    )
    .join("");

  /* klik kartu -> putar lagunya */
  timelineEl.addEventListener("click", (e) => {
    const card = e.target.closest(".tl-card");
    if (!card) return;
    const src = card.dataset.song;
    if (src && !bgm.src.endsWith(src)) bgm.src = src;
    bgm.play().then(() => { if (typeof setPlaying === "function") setPlaying(true); }).catch(() => {});
  });
}

/* ============================================================
   LOADER -> LOCK
   ============================================================ */
const loader = $("loader");
const lock = $("lock");
setTimeout(() => {
  loader.classList.add("fade");
  lock.classList.remove("hidden");
}, 2200);

/* ============================================================
   PASSWORD
   ============================================================ */
const pinDots = $("pinDots");
const keypad = $("keypad");
let pin = "";

function renderPin() {
  pinDots.querySelectorAll("span").forEach((d, i) => d.classList.toggle("filled", i < pin.length));
}
keypad.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.key === "del") pin = pin.slice(0, -1);
  else if (pin.length < CONFIG.password.length) pin += btn.dataset.key;
  renderPin();
  if (pin.length === CONFIG.password.length) setTimeout(checkPin, 160);
});
function checkPin() {
  if (pin === CONFIG.password) {
    lock.classList.add("hidden");
    showGift();
  } else {
    pinDots.classList.add("shake");
    setTimeout(() => { pinDots.classList.remove("shake"); pin = ""; renderPin(); }, 500);
  }
}

/* ============================================================
   GIFT OPENING
   ============================================================ */
const gift = $("gift");
const giftbox = $("giftbox");
const main = $("main");

function showGift() {
  gift.classList.remove("hidden");
  giftbox.classList.add("shake-it");
}
giftbox.addEventListener("click", () => {
  if (giftbox.classList.contains("open")) return;
  giftbox.classList.remove("shake-it");
  giftbox.classList.add("open");
  burstPetals(40);
  startMusicOnce();
  setTimeout(() => {
    gift.classList.add("hidden");
    showSunScreen();
  }, 1200);
});

/* ============================================================
   SUNFLOWER SCREEN — banyak bunga matahari menutupi layar
   ============================================================ */
const sunScreen = document.getElementById("sunScreen");
const sunField = document.getElementById("sunField");
function showSunScreen() {
  sunScreen.classList.remove("hidden");
  sunField.innerHTML = "";
  const imgs = ["matahari1.png", "matahari2.png"];
  const n = 38;
  for (let k = 0; k < n; k++) {
    const s = document.createElement("span");
    s.className = "sf";
    const size = 140 + Math.random() * 160;     // 140-300px, beragam
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = (Math.random() * 110 - 5) + "%";  // boleh keluar tepi
    s.style.top = (Math.random() * 110 - 5) + "%";
    s.style.marginLeft = -size / 2 + "px";
    s.style.marginTop = -size / 2 + "px";
    s.style.setProperty("--rot", (Math.random() * 60 - 30).toFixed(1) + "deg");
    s.style.backgroundImage = `url('${imgs[k % 2]}')`;
    s.style.animationDelay = (Math.random() * 1.4).toFixed(2) + "s";
    sunField.appendChild(s);
  }
}
document.getElementById("sunNext").addEventListener("click", () => {
  sunScreen.classList.add("hidden");
  main.classList.remove("hidden");
  initReveal();
  window.scrollTo(0, 0);
});

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
    { threshold: 0.18 }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

/* ============================================================
   PHOTO LIGHTBOX
   ============================================================ */
const lightbox = $("lightbox");
const lbImg = $("lbImg");
const lbCap = $("lbCap");
$("polaroids").addEventListener("click", (e) => {
  const pola = e.target.closest(".pola");
  if (!pola) return;
  const p = CONFIG.photos[+pola.dataset.i];
  lbImg.src = p.img;
  lbCap.textContent = p.cap;
  lightbox.classList.remove("hidden");
});
function closeLightbox() { lightbox.classList.add("hidden"); }
$("lbClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

/* ============================================================
   DIGITAL BOUQUET
   ============================================================ */
const flowerMsg = $("flowerMsg");
const vaseStage = $("vaseStage");
document.querySelectorAll(".flower").forEach((f) => {
  f.addEventListener("click", () => {
    // fase 1: mencar
    vaseStage.classList.remove("gathered");
    vaseStage.classList.add("scatter");
    burstPetals(10, f);
    // fase 2: menyatu jadi buket + tangkai
    setTimeout(() => {
      vaseStage.classList.remove("scatter");
      vaseStage.classList.add("gathered");
    }, 480);
    // tampilkan pesan
    flowerMsg.style.opacity = "0";
    setTimeout(() => {
      flowerMsg.textContent = f.dataset.msg;
      flowerMsg.style.opacity = "1";
    }, 600);
  });
});

/* ============================================================
   PLAYLIST
   ============================================================ */
const bgm = $("bgm");
const songListEl = $("songList");
const npTitle = $("npTitle");
const npArtist = $("npArtist");
const disc = $("disc");
const playBtn = $("playBtn");
const progressEl = $("progress");
const progressFill = $("progressFill");
let current = -1;

function renderSongs() {
  songListEl.innerHTML = "";
  CONFIG.songs.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "song" + (i === current ? " playing" : "");
    li.innerHTML =
      `<span class="s-num">${i + 1}</span>` +
      `<span class="s-meta"><span class="s-title">${s.title}</span><span class="s-artist">${s.artist || ""}</span></span>` +
      `<span class="s-eq"><i></i><i></i><i></i></span>`;
    li.addEventListener("click", () => loadTrack(i, true));
    songListEl.appendChild(li);
  });
}
function loadTrack(i, play) {
  current = (i + CONFIG.songs.length) % CONFIG.songs.length;
  const s = CONFIG.songs[current];
  npTitle.textContent = s.title;
  npArtist.textContent = s.artist || "";
  const src = s.src || "song.mp3";
  if (!bgm.src.endsWith(src)) bgm.src = src;
  renderSongs();
  if (play) bgm.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
}
function setPlaying(on) {
  playBtn.textContent = on ? "⏸" : "▶";
  disc.classList.toggle("spin", on);
  songListEl.classList.toggle("is-playing", on);
}
function tryPlayMusic() {
  bgm.volume = 0.5;
  if (!bgm.currentSrc.endsWith("song.mp3")) bgm.src = "song.mp3";
  bgm.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
}

/* ---------- mulai musik sejak awal ---------- */
let musicStarted = false;
function startMusicOnce() {
  if (musicStarted) return;
  musicStarted = true;
  tryPlayMusic();
}
window.addEventListener("load", () => {
  bgm.volume = 0.5;
  bgm.play().then(() => { musicStarted = true; setPlaying(true); }).catch(() => {});
});
["pointerdown", "touchstart", "keydown", "click"].forEach((ev) =>
  document.addEventListener(ev, startMusicOnce, { passive: true })
);
playBtn.addEventListener("click", () => {
  if (bgm.paused) bgm.play().then(() => setPlaying(true)).catch(() => {});
  else { bgm.pause(); setPlaying(false); }
});
$("prevBtn").addEventListener("click", () => loadTrack(current - 1, true));
$("nextBtn").addEventListener("click", () => loadTrack(current + 1, true));
bgm.addEventListener("timeupdate", () => {
  if (bgm.duration) progressFill.style.width = (bgm.currentTime / bgm.duration) * 100 + "%";
});
bgm.addEventListener("ended", () => loadTrack(current + 1, true));
progressEl.addEventListener("click", (e) => {
  if (!bgm.duration) return;
  const r = progressEl.getBoundingClientRect();
  bgm.currentTime = ((e.clientX - r.left) / r.width) * bgm.duration;
});
renderSongs();
npTitle.textContent = "—";
npArtist.textContent = "tap a song to play";

/* ============================================================
   SHAKE THE JAR
   ============================================================ */
const jar = $("jar");
const shakeBtn = $("shakeBtn");
const jarNote = $("jarNote");
let lastNote = -1;
shakeBtn.addEventListener("click", () => {
  jar.classList.add("shaking");
  jarNote.classList.remove("show");
  shakeBtn.disabled = true;
  setTimeout(() => {
    jar.classList.remove("shaking");
    let i;
    do { i = Math.floor(Math.random() * CONFIG.jarNotes.length); }
    while (i === lastNote && CONFIG.jarNotes.length > 1);
    lastNote = i;
    jarNote.textContent = "🫙 " + CONFIG.jarNotes[i];
    jarNote.classList.add("show");
    burstPetals(10);
    shakeBtn.disabled = false;
  }, 900);
});

/* ============================================================
   CELEBRATE MODAL
   ============================================================ */
const hbdModal = $("hbdModal");
$("celebrateBtn").addEventListener("click", () => {
  hbdModal.classList.remove("hidden");
  modalFlowerBurst();
  burstPetals(60);
});
$("closeModal").addEventListener("click", () => hbdModal.classList.add("hidden"));

/* ============================================================
   FLOWER PETALS
   ============================================================ */
const petals = $("petals");
const PETALS = ["🌸", "🌷", "🌼", "🌻", "🌹", "💮", "🏵️"];

function spawnPetal(x) {
  const p = document.createElement("span");
  p.className = "petal";
  p.textContent = PETALS[(Math.random() * PETALS.length) | 0];
  p.style.left = (x != null ? x : Math.random() * 100) + "%";
  p.style.fontSize = 14 + Math.random() * 18 + "px";
  p.style.animationDuration = 5 + Math.random() * 5 + "s";
  petals.appendChild(p);
  setTimeout(() => p.remove(), 11000);
}
function burstPetals(count, fromEl) {
  let x = null;
  if (fromEl) {
    const r = fromEl.getBoundingClientRect();
    x = ((r.left + r.width / 2) / window.innerWidth) * 100;
  }
  for (let i = 0; i < count; i++) setTimeout(() => spawnPetal(x), i * 40);
}
/* ambient */
setInterval(() => spawnPetal(), 1400);
spawnPetal();

/* modal flower burst */
function modalFlowerBurst() {
  const wrap = $("modalFlowers");
  wrap.innerHTML = "";
  for (let i = 0; i < 26; i++) {
    const f = document.createElement("span");
    f.textContent = PETALS[(Math.random() * PETALS.length) | 0];
    f.style.position = "absolute";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = "-30px";
    f.style.fontSize = 16 + Math.random() * 16 + "px";
    f.style.animation = `fall ${4 + Math.random() * 4}s linear forwards`;
    f.style.animationDelay = Math.random() * 1.5 + "s";
    wrap.appendChild(f);
  }
}

/* music toggle via floating not needed; play starts on gift open */
