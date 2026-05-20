// ─── LOCAL IMAGE IMPORTS ───────────────────────────────────────────────────
import React, { useEffect, useRef, useState } from "react";

// ── Category images ─────────────────────────────────────────────────────────
import imgCategoryIncenseSticks   from "../assets/images/categories/incense-sticks.jpg";
import imgCategoryDhoopSticks     from "../assets/images/categories/dhoop-sticks.jpg";
import imgCategoryPremiumIncense  from "../assets/images/categories/premium-incense.jpg";
import imgCategoryPerfumedIncense from "../assets/images/categories/perfumed-incense.jpg";
import imgCategoryAromaFragrance  from "../assets/images/categories/aroma-fragrance.jpg";
import imgCategoryPoojaDeep       from "../assets/images/categories/pooja-deep.jpg";
import imgCategoryKhadiSoaps      from "../assets/images/categories/khadi-soaps.jpg";
import imgCategoryLongSticks      from "../assets/images/categories/long-sticks.jpg";

// ── Incense Sticks ──────────────────────────────────────────────────────────
import imgSacredChandan              from "../assets/images/incense-sticks/sacred-chandan.jpg";
import imgSacredChandanHover         from "../assets/images/incense-sticks/sacred-chandan-hover.jpg";
import imgSacredOudh                 from "../assets/images/incense-sticks/sacred-oudh.jpg";
import imgSacredOudhHover            from "../assets/images/incense-sticks/sacred-oudh-hover.jpg";
import imgSacredRose                 from "../assets/images/incense-sticks/sacred-rose.jpg";
import imgSacredRoseHover            from "../assets/images/incense-sticks/sacred-rose-hover.jpg";

import imgExoticAmber                from "../assets/images/incense-sticks/exotic-amber.jpg";
import imgExoticAmberHover           from "../assets/images/incense-sticks/exotic-amber-hover.jpg";
import imgExoticBakhoor              from "../assets/images/incense-sticks/exotic-bakhoor.jpg";
import imgExoticBakhoorHover         from "../assets/images/incense-sticks/exotic-bakhoor-hover.jpg";
import imgExoticHeena                from "../assets/images/incense-sticks/exotic-heena.jpg";
import imgExoticHeenaHover           from "../assets/images/incense-sticks/exotic-heena-hover.jpg";
import imgExoticChandan              from "../assets/images/incense-sticks/exotic-chandan.jpg";
import imgExoticChandanHover         from "../assets/images/incense-sticks/exotic-chandan-hover.jpg";
import imgExoticMusk                 from "../assets/images/incense-sticks/exotic-musk.jpg";
import imgExoticMuskHover            from "../assets/images/incense-sticks/exotic-musk-hover.jpg";
import imgExoticOudh                 from "../assets/images/incense-sticks/exotic-oudh.jpg";
import imgExoticOudhHover            from "../assets/images/incense-sticks/exotic-oudh-hover.jpg";
import imgExoticSaffron              from "../assets/images/incense-sticks/exotic-saffron.jpg";
import imgExoticSaffronHover         from "../assets/images/incense-sticks/exotic-saffron-hover.jpg";
import imgExoticRose                 from "../assets/images/incense-sticks/exotic-rose.jpg";
import imgExoticRoseHover            from "../assets/images/incense-sticks/exotic-rose-hover.jpg";

import imgPremiumOudh                from "../assets/images/incense-sticks/premium-oudh.jpg";
import imgPremiumOudhHover           from "../assets/images/incense-sticks/premium-oudh-hover.jpg";
import imgPremiumKhus                from "../assets/images/incense-sticks/premium-khus.jpg";
import imgPremiumKhusHover           from "../assets/images/incense-sticks/premium-khus-hover.jpg";
import imgPremiumChandan             from "../assets/images/incense-sticks/premium-chandan.jpg";
import imgPremiumChandanHover        from "../assets/images/incense-sticks/premium-chandan-hover.jpg";
import imgPremiumRose                from "../assets/images/incense-sticks/premium-rose.jpg";
import imgPremiumRoseHover           from "../assets/images/incense-sticks/premium-rose-hover.jpg";
import imgUltraPremiumMajmua         from "../assets/images/incense-sticks/ultra-premium-majmua.jpg";
import imgUltraPremiumMajmuaHover    from "../assets/images/incense-sticks/ultra-premium-majmua-hover.jpg";
import imgUltraPremiumPatchouli      from "../assets/images/incense-sticks/ultra-premium-patchouli.jpg";
import imgUltraPremiumPatchouliHover from "../assets/images/incense-sticks/ultra-premium-patchouli-hover.jpg";
import imgUltraPremiumAgarwood       from "../assets/images/incense-sticks/ultra-premium-agarwood.jpg";
import imgUltraPremiumAgarwoodHover  from "../assets/images/incense-sticks/ultra-premium-agarwood-hover.jpg";
import imgUltraPremiumWhiteOudh      from "../assets/images/incense-sticks/ultra-premium-white-oudh.jpg";
import imgUltraPremiumWhiteOudhHover from "../assets/images/incense-sticks/ultra-premium-white-oudh-hover.jpg";

import imgDevdutt                    from "../assets/images/incense-sticks/devdutt.jpg";
import imgDevduttHover               from "../assets/images/incense-sticks/devdutt-hover.jpg";
import imgMahatejas                  from "../assets/images/incense-sticks/mahatejas.jpg";
import imgMahatejasHover             from "../assets/images/incense-sticks/mahatejas-hover.jpg";
import imgShrivardhan                from "../assets/images/incense-sticks/shrivardhan.jpg";
import imgShrivardhanHover           from "../assets/images/incense-sticks/shrivardhan-hover.jpg";
import imgSudarshan                  from "../assets/images/incense-sticks/sudarshan.jpg";
import imgSudarshanHover             from "../assets/images/incense-sticks/sudarshan-hover.jpg";
import imgShivansh                   from "../assets/images/incense-sticks/shivansh.jpg";
import imgShivanshHover              from "../assets/images/incense-sticks/shivansh-hover.jpg";
import imgTapodhan                   from "../assets/images/incense-sticks/tapodhan.jpg";
import imgTapodhanHover              from "../assets/images/incense-sticks/tapodhan-hover.jpg";
import imgDhyanrath                  from "../assets/images/incense-sticks/dhyanrath.jpg";
import imgDhyanrathHover             from "../assets/images/incense-sticks/dhyanrath-hover.jpg";
import imgTejomay                    from "../assets/images/incense-sticks/tejomay.jpg";
import imgTejomayHover               from "../assets/images/incense-sticks/tejomay-hover.jpg";

// ── Dhoop Sticks ────────────────────────────────────────────────────────────
import imgHarmony3in1                from "../assets/images/dhoop-sticks/harmony-3in1.jpg";
import imgHarmony3in1Hover           from "../assets/images/dhoop-sticks/harmony-3in1-hover.jpg";
import imgMograBliss                 from "../assets/images/dhoop-sticks/mogra-bliss.jpg";
import imgMograBlissHover            from "../assets/images/dhoop-sticks/mogra-bliss-hover.jpg";
import imgRoseElegance               from "../assets/images/dhoop-sticks/rose-elegance.jpg";
import imgRoseEleganceHover          from "../assets/images/dhoop-sticks/rose-elegance-hover.jpg";
import imgLavenderCalm               from "../assets/images/dhoop-sticks/lavender-calm.jpg";
import imgLavenderCalmHover          from "../assets/images/dhoop-sticks/lavender-calm-hover.jpg";
import imgChandanDivine              from "../assets/images/dhoop-sticks/chandan-divine.jpg";
import imgChandanDivineHover         from "../assets/images/dhoop-sticks/chandan-divine-hover.jpg";
import imgKasturiMystique            from "../assets/images/dhoop-sticks/kasturi-mystique.jpg";
import imgKasturiMystiqueHover       from "../assets/images/dhoop-sticks/kasturi-mystique-hover.jpg";
import imgChampaGolden               from "../assets/images/dhoop-sticks/champa-golden.jpg";
import imgChampaGoldenHover          from "../assets/images/dhoop-sticks/champa-golden-hover.jpg";
import imgLobanRoyale                from "../assets/images/dhoop-sticks/loban-royale.jpg";
import imgLobanRoyaleHover           from "../assets/images/dhoop-sticks/loban-royale-hover.jpg";
import imgGuggalSacred               from "../assets/images/dhoop-sticks/guggal-sacred.jpg";
import imgGuggalSacredHover          from "../assets/images/dhoop-sticks/guggal-sacred-hover.jpg";
import imgHarmonyDhoop80g            from "../assets/images/dhoop-sticks/harmony-80g.jpg";
import imgHarmonyDhoop80gHover       from "../assets/images/dhoop-sticks/harmony-80g-hover.jpg";
import imgSpecialChandan             from "../assets/images/dhoop-sticks/special-chandan.jpg";
import imgSpecialChandanHover        from "../assets/images/dhoop-sticks/special-chandan-hover.jpg";
import imgSpecialRose                from "../assets/images/dhoop-sticks/special-rose.jpg";
import imgSpecialRoseHover           from "../assets/images/dhoop-sticks/special-rose-hover.jpg";
import imgPeace                      from "../assets/images/dhoop-sticks/peace.jpg";
import imgPeaceHover                 from "../assets/images/dhoop-sticks/peace-hover.jpg";
import imgAroma                      from "../assets/images/dhoop-sticks/aroma.jpg";
import imgAromaHover                 from "../assets/images/dhoop-sticks/aroma-hover.jpg";
import imgRichGold                   from "../assets/images/dhoop-sticks/rich-gold.jpg";
import imgRichGoldHover              from "../assets/images/dhoop-sticks/rich-gold-hover.jpg";
import imgDivineMeditation           from "../assets/images/dhoop-sticks/divine-meditation.jpg";
import imgDivineMeditationHover      from "../assets/images/dhoop-sticks/divine-meditation-hover.jpg";
import imgRedWoodDhoop               from "../assets/images/dhoop-sticks/red-wood.jpg";
import imgRedWoodDhoopHover          from "../assets/images/dhoop-sticks/red-wood-hover.jpg";
import imgMysoreChandan              from "../assets/images/dhoop-sticks/mysore-chandan.jpg";
import imgMysoreСhandanHover         from "../assets/images/dhoop-sticks/mysore-chandan-hover.jpg";
import imgKesarChandan               from "../assets/images/dhoop-sticks/kesar-chandan.jpg";
import imgKesarChandanHover          from "../assets/images/dhoop-sticks/kesar-chandan-hover.jpg";
import imgSaffronDhoop               from "../assets/images/dhoop-sticks/saffron.jpg";
import imgSaffronDhoopHover          from "../assets/images/dhoop-sticks/saffron-hover.jpg";
import imgRoyalKingDhoop           from "../assets/images/dhoop-sticks/royal-king.jpg";
import imgRoyalKingDhoopHover      from "../assets/images/dhoop-sticks/royal-king-hover.jpg";
import imgSignatureDhoop           from "../assets/images/dhoop-sticks/signature.jpg";
import imgSignatureDhoopHover      from "../assets/images/dhoop-sticks/signature-hover.jpg";

// ═══════════════════════════════════════════════════════════════════════════x
// ── CARD STYLES ────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

const CARD_CSS = `
.rp-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
  cursor: pointer;
  user-select: none;
}
.rp-card:hover {
  box-shadow: 0 10px 36px rgba(0,0,0,0.18);
  transform: translateY(-4px);
}

/* ── Image container ── */
.rp-card__img-wrap {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #f5f0ea;
}

/* Both images fill the container absolutely */
.rp-card__img-wrap img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: opacity, transform;
}

/* ─────────────────────────────────────────────────────
   DEFAULT IMAGE
   Normal  → visible (opacity 1), no zoom (scale 1), on top (z-index 2)
   Hovered → fades out (opacity 0), zooms in (scale 1.08), drops behind (z-index 1)
             z-index change is delayed 0.5s so it only swaps AFTER fade completes
             — this eliminates any mid-transition flash.
   ───────────────────────────────────────────────────── */
.rp-card__img-default {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
  transition:
    opacity   0.5s ease,
    transform 0.5s ease,
    z-index   0s   linear 0s;
}
.rp-card__img-default.hovered {
  opacity: 0;
  transform: scale(1.08);
  z-index: 1;
  transition:
    opacity   0.5s ease,
    transform 0.5s ease,
    z-index   0s   linear 0.5s;   /* swap AFTER fade done → no flash */
}

/* ─────────────────────────────────────────────────────
   HOVER IMAGE
   Normal  → hidden (opacity 0), already zoomed (scale 1.08), behind (z-index 1)
             Pre-zoomed so there is NO scale-jump pop when it first appears.
   Hovered → fades in (opacity 1), stays zoomed (scale 1.08), comes to front (z-index 2)
             z-index rises immediately so it's ready before opacity finishes.
   ───────────────────────────────────────────────────── */
.rp-card__img-hover {
  opacity: 0;
  transform: scale(1.08);   /* pre-zoomed → no pop/flash on first hover */
  z-index: 1;
  transition:
    opacity   0.5s ease,
    transform 0.5s ease,
    z-index   0s   linear 0s;
}
.rp-card__img-hover.hovered {
  opacity: 1;
  transform: scale(1.08);
  z-index: 2;
  transition:
    opacity   0.5s ease,
    transform 0.5s ease,
    z-index   0s   linear 0s;
}

/* ── Card body ── */
.rp-card__body {
  padding: 14px 16px 18px;
  position: relative;
  z-index: 3;
}
.rp-card__name {
  margin: 0 0 3px;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rp-card__weight {
  margin: 0 0 7px;
  font-size: 12px;
  color: #999;
}
.rp-card__price {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #b5451b;
}
.rp-card__desc {
  margin: 6px 0 0;
  font-size: 12px;
  color: #777;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

let _stylesInjected = false;
function injectCardStyles() {
  if (_stylesInjected || typeof document === "undefined") return;
  const el = document.createElement("style");
  el.setAttribute("data-rp-product-card", "1");
  el.textContent = CARD_CSS;
  document.head.appendChild(el);
  _stylesInjected = true;
}


// ═══════════════════════════════════════════════════════════════════════════
// ── ProductCard ────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

export function ProductCard({ product, onClick, className = "" }) {
  const mounted = useRef(false);
  const [hovered, setHovered] = useState(false);

  useEffect(function () {
    if (!mounted.current) {
      injectCardStyles();
      mounted.current = true;
    }
  }, []);

  const { name, weight, price, description, image, imageHover } = product;
  const hoverSrc = imageHover || image;

  return React.createElement(
    "div",
    {
      className: ("rp-card " + className).trim(),
      onClick:   onClick,
      role:      onClick ? "button" : undefined,
      tabIndex:  onClick ? 0        : undefined,
      onMouseEnter: function () { setHovered(true);  },
      onMouseLeave: function () { setHovered(false); },
      onKeyDown: onClick
        ? function (e) { if (e.key === "Enter") onClick(); }
        : undefined,
    },

    // ── Image wrap ──
    React.createElement(
      "div",
      { className: "rp-card__img-wrap" },

      // HOVER image — behind by default, pre-zoomed, fades IN on hover
      // loading="eager" preloads it immediately → zero flicker on very first hover
      React.createElement("img", {
        src:       hoverSrc,
        alt:       name + " - alternate view",
        className: "rp-card__img-hover" + (hovered ? " hovered" : ""),
        loading:   "eager",
        draggable: false,
      }),

      // DEFAULT image — on top by default, fades OUT on hover
      React.createElement("img", {
        src:       image,
        alt:       name,
        className: "rp-card__img-default" + (hovered ? " hovered" : ""),
        loading:   "lazy",
        draggable: false,
      })
    ),

    // ── Card body ──
    React.createElement(
      "div",
      { className: "rp-card__body" },
      React.createElement("p", { className: "rp-card__name"   }, name),
      weight      ? React.createElement("p", { className: "rp-card__weight" }, weight)      : null,
      React.createElement("p", { className: "rp-card__price"   }, price),
      description ? React.createElement("p", { className: "rp-card__desc"   }, description) : null
    )
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// ── STATIC DATA ────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════

export const topbarText = "Spreading Fragrance Since 1981";

export const navLinks = [
  { label: "Home",       path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "About",      path: "/about" },
  { label: "FAQs",       path: "/faqs" },
  { label: "Contact",    path: "/contact" },
];

const makeProduct = (name, weight, price, notes, image, imageHover) => ({
  name,
  weight,
  price,
  variants:    weight,
  description: notes || "Premium fragrance offering from RAJPAL PRODUCTS catalog.",
  image,
  imageHover:  imageHover || image,
});


// ── Product Catalog ──────────────────────────────────────────────────────────

export const productCatalog = {

  "incense-sticks": {
    sections: [
      {
        title: "Sacred Series",
        products: [
          makeProduct("Sacred Chandan", "50g", "₹1800", "", imgSacredChandan, imgSacredChandanHover),
          makeProduct("Sacred Oudh",    "50g", "₹1200", "", imgSacredOudh,    imgSacredOudhHover),
          makeProduct("Sacred Rose",    "50g", "₹900",  "", imgSacredRose,    imgSacredRoseHover),
        ],
      },
      {
        title: "Exotic Series",
        products: [
          makeProduct("Exotic Amber",   "50g / 250g", "₹135 / ₹575", "", imgExoticAmber,   imgExoticAmberHover),
          makeProduct("Exotic Bakhoor", "50g / 250g", "₹135 / ₹575", "", imgExoticBakhoor, imgExoticBakhoorHover),
          makeProduct("Exotic Heena",   "50g / 250g", "₹135 / ₹575", "", imgExoticHeena,   imgExoticHeenaHover),
          makeProduct("Exotic Chandan", "50g / 250g", "₹135 / ₹575", "", imgExoticChandan, imgExoticChandanHover),
          makeProduct("Exotic Musk",    "50g / 250g", "₹135 / ₹575", "", imgExoticMusk,    imgExoticMuskHover),
          makeProduct("Exotic Oudh",    "50g / 250g", "₹135 / ₹575", "", imgExoticOudh,    imgExoticOudhHover),
          makeProduct("Exotic Saffron", "50g / 250g", "₹135 / ₹575", "", imgExoticSaffron, imgExoticSaffronHover),
          makeProduct("Exotic Rose",    "50g / 250g", "₹135 / ₹575", "", imgExoticRose,    imgExoticRoseHover),
        ],
      },
      {
        title: "Premium & Ultra Premium",
        products: [
          makeProduct("Premium Oudh",             "50g / 250g", "₹325 / ₹1500", "", imgPremiumOudh,            imgPremiumOudhHover),
          makeProduct("Premium Khus",             "50g / 250g", "₹325 / ₹1500", "", imgPremiumKhus,            imgPremiumKhusHover),
          makeProduct("Premium Chandan",          "50g / 250g", "₹275 / ₹1250", "", imgPremiumChandan,         imgPremiumChandanHover),
          makeProduct("Premium Rose",             "50g / 250g", "₹275 / ₹1250", "", imgPremiumRose,            imgPremiumRoseHover),
          makeProduct("Ultra Premium Majmua",     "50g / 250g", "₹400 / ₹1800", "", imgUltraPremiumMajmua,     imgUltraPremiumMajmuaHover),
          makeProduct("Ultra Premium Patchouli",  "50g / 250g", "₹300 / ₹1500", "", imgUltraPremiumPatchouli,  imgUltraPremiumPatchouliHover),
          makeProduct("Ultra Premium Agarwood",   "50g / 250g", "₹300 / ₹1500", "", imgUltraPremiumAgarwood,   imgUltraPremiumAgarwoodHover),
          makeProduct("Ultra Premium White Oudh", "50g / 250g", "₹275 / ₹1250", "", imgUltraPremiumWhiteOudh,  imgUltraPremiumWhiteOudhHover),
        ],
      },
      {
        title: "Divya Mandir Series",
        products: [
          makeProduct("Devdutt Incense Stick",     "250g", "₹175", "Gift of the Gods",         imgDevdutt,     imgDevduttHover),
          makeProduct("Mahatejas Incense Stick",   "250g", "₹175", "Great Divine Radiance",    imgMahatejas,   imgMahatejasHover),
          makeProduct("Shrivardhan Incense Stick", "250g", "₹175", "Increases Prosperity",     imgShrivardhan, imgShrivardhanHover),
          makeProduct("Sudarshan Incense Stick",   "250g", "₹175", "Pure Vision",              imgSudarshan,   imgSudarshanHover),
          makeProduct("Shivansh Incense Stick",    "250g", "₹175", "A Part of Shiva",          imgShivansh,    imgShivanshHover),
          makeProduct("Tapodhan Incense Stick",    "250g", "₹175", "Absorbed in Meditation",   imgTapodhan,    imgTapodhanHover),
          makeProduct("Dhyanrath Incense Stick",   "250g", "₹175", "Absorbed in Meditation",   imgDhyanrath,   imgDhyanrathHover),
          makeProduct("Tejomay Incense Stick",     "250g", "₹175", "Filled with Divine Light", imgTejomay,     imgTejomayHover),
        ],
      },
    ],
  },

  "dhoop-sticks": {
    sections: [
      {
        title: "Nature's Bouquet",
        products: [
          makeProduct("Harmony (3-in-1)",   "200g", "₹200", "", imgHarmony3in1,     imgHarmony3in1Hover),
          makeProduct("Mogra (Bliss)",       "200g", "₹200", "", imgMograBliss,      imgMograBlissHover),
          makeProduct("Rose (Elegance)",     "200g", "₹200", "", imgRoseElegance,    imgRoseEleganceHover),
          makeProduct("Lavender (Calm)",     "200g", "₹200", "", imgLavenderCalm,    imgLavenderCalmHover),
          makeProduct("Chandan (Divine)",    "200g", "₹200", "", imgChandanDivine,   imgChandanDivineHover),
          makeProduct("Kasturi (Mystique)",  "200g", "₹200", "", imgKasturiMystique, imgKasturiMystiqueHover),
          makeProduct("Champa (Golden)",     "200g", "₹200", "", imgChampaGolden,    imgChampaGoldenHover),
          makeProduct("Loban (Royale)",      "200g", "₹200", "", imgLobanRoyale,     imgLobanRoyaleHover),
          makeProduct("Guggal (Sacred)",     "200g", "₹200", "", imgGuggalSacred,    imgGuggalSacredHover),
          makeProduct("Harmony Dhoop Stick", "80g",  "₹80",  "", imgHarmonyDhoop80g, imgHarmonyDhoop80gHover),
        ],
      },
      {
        title: "Premium Dhoop",
        products: [
          makeProduct("Special Chandan",   "50g", "₹75", "", imgSpecialChandan,   imgSpecialChandanHover),
          makeProduct("Special Rose",      "50g", "₹75", "", imgSpecialRose,      imgSpecialRoseHover),
          makeProduct("Peace",             "50g", "₹75", "", imgPeace,            imgPeaceHover),
          makeProduct("Aroma",             "50g", "₹75", "", imgAroma,            imgAromaHover),
          makeProduct("Rich Gold",         "50g", "₹75", "", imgRichGold,         imgRichGoldHover),
          makeProduct("Divine Meditation", "50g", "₹75", "", imgDivineMeditation, imgDivineMeditationHover),
          makeProduct("Red Wood",          "50g", "₹135", "", imgRedWoodDhoop,     imgRedWoodDhoopHover),
          makeProduct("Mysore Chandan",    "50g", "₹135", "", imgMysoreChandan,    imgMysoreСhandanHover),
          makeProduct("Kesar Chandan",     "50g", "₹135", "", imgKesarChandan,     imgKesarChandanHover),
          makeProduct("Saffron",           "50g", "₹150", "", imgSaffronDhoop,     imgSaffronDhoopHover),
          makeProduct("Royal King",             "100g",    "₹180", "", imgRoyalKingDhoop,     imgRoyalKingDhoopHover),
          makeProduct("Signature",              "100g",    "₹180", "", imgSignatureDhoop,     imgSignatureDhoopHover),
        ],
      },
    ],
  },

};


// ── Categories ───────────────────────────────────────────────────────────────

const categoryMeta = [
  { name: "Incense Sticks",      slug: "incense-sticks",   image: imgCategoryIncenseSticks   },
  { name: "Dhoop Sticks",        slug: "dhoop-sticks",     image: imgCategoryDhoopSticks     },
  { name: "Premium Incense",     slug: "premium-incense",  image: imgCategoryPremiumIncense  },
  { name: "Perfumed Incense",    slug: "perfumed-incense", image: imgCategoryPerfumedIncense },
  { name: "Aroma & Fragrance",   slug: "aroma-fragrance",  image: imgCategoryAromaFragrance  },
  { name: "Pooja Deep",          slug: "pooja-deep",       image: imgCategoryPoojaDeep       },
  { name: "Khadi Natural Soaps", slug: "khadi-soaps",      image: imgCategoryKhadiSoaps      },
  { name: "Long Sticks",         slug: "long-sticks",      image: imgCategoryLongSticks      },
];

export const categories = categoryMeta.map(function (item) {
  return Object.assign({}, item, {
    subcategories: (
      productCatalog[item.slug] && productCatalog[item.slug].sections || []
    ).map(function (s) { return s.title; }),
  });
});


// ── Testimonials & FAQs ──────────────────────────────────────────────────────

export const testimonials = [
  { name: "Export Buyer, UAE",       quote: "A premium fragrance profile with excellent consistency." },
  { name: "Retail Partner, Delhi",   quote: "Customers love the elegant packaging and rich aroma."   },
  { name: "Wellness Studio, Mumbai", quote: "Perfect for meditation and luxury ambience curation."    },
];

export const faqs = [
  { q: "How is product quality ensured?", a: "Each batch follows strict fragrance and burn-quality standards."            },
  { q: "Do you offer shipping support?",  a: "Yes, domestic and export dispatch support is available."                   },
  { q: "Can I get fragrance details?",    a: "Detailed fragrance notes and usage guidance are provided per product line." },
  { q: "Do you accept custom orders?",    a: "Yes, custom fragrance and packaging consultations are supported."          },
  { q: "Are bulk orders available?",      a: "Yes, we handle wholesale and distributor-grade quantities."                 },
  { q: "Do you export internationally?",  a: "Yes, export-ready documentation and product formats are available."        },
];