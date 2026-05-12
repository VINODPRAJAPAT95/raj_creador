export const topbarText = "Spreading Fragrance Since 1981";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

const defaultImage =
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59b80?auto=format&fit=crop&w=1200&q=80";

const makeProduct = (name, weight, price, notes = "", image = defaultImage) => ({
  name,
  weight,
  price,
  variants: weight,
  description: notes || "Premium fragrance offering from RAJPAL PRODUCTS catalog.",
  image,
});

export const productCatalog = {
  "incense-sticks": {
    sections: [
      {
        title: "Sacred Series",
        products: [
          makeProduct("Sacred Chandan", "50g", "₹1800"),
          makeProduct("Sacred Oudh", "50g", "₹1200"),
          makeProduct("Sacred Rose", "50g", "₹900"),
        ],
      },
      {
        title: "Exotic Series",
        products: [
          makeProduct("Exotic Amber", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Bakhoor", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Heena", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Chandan", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Musk", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Oudh", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Saffron", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Exotic Rose", "50g / 250g", "₹135 / ₹575"),
        ],
      },
      {
        title: "Premium & Ultra Premium",
        products: [
          makeProduct("Premium Oudh", "50g / 250g", "₹325 / ₹1500"),
          makeProduct("Premium Khus", "50g / 250g", "₹325 / ₹1500"),
          makeProduct("Premium Chandan", "50g / 250g", "₹275 / ₹1250"),
          makeProduct("Premium Rose", "50g / 250g", "₹275 / ₹1250"),
          makeProduct("Ultra Premium Majmua", "50g / 250g", "₹400 / ₹1800"),
          makeProduct("Ultra Premium Patchouli", "50g / 250g", "₹300 / ₹1500"),
          makeProduct("Ultra Premium Agarwood", "50g / 250g", "₹300 / ₹1500"),
          makeProduct("Ultra Premium White Oudh", "50g / 250g", "₹275 / ₹1250"),
        ],
      },
      {
        title: "Divya Mandir Series",
        products: [
          makeProduct("Devdutt Incense Stick", "250g", "₹175", "Gift of the Gods"),
          makeProduct("Mahatejas Incense Stick", "250g", "₹175", "Great Divine Radiance"),
          makeProduct("Shrivardhan Incense Stick", "250g", "₹175", "Increases Prosperity"),
          makeProduct("Sudarshan Incense Stick", "250g", "₹175", "Pure Vision"),
          makeProduct("Shivansh Incense Stick", "250g", "₹175", "A Part of Shiva"),
          makeProduct("Tapodhan Incense Stick", "250g", "₹175", "Absorbed in Meditation"),
          makeProduct("Dhyanrath Incense Stick", "250g", "₹175", "Absorbed in Meditation"),
          makeProduct("Tejomay Incense Stick", "250g", "₹175", "Filled with Divine Light"),
        ],
      },
    ],
  },
  "dhoop-sticks": {
    sections: [
      {
        title: "Nature's Bouquet",
        products: [
          makeProduct("Harmony (3-in-1)", "200g", "₹200"),
          makeProduct("Mogra (Bliss)", "200g", "₹200"),
          makeProduct("Rose (Elegance)", "200g", "₹200"),
          makeProduct("Lavender (Calm)", "200g", "₹200"),
          makeProduct("Chandan (Divine)", "200g", "₹200"),
          makeProduct("Kasturi (Mystique)", "200g", "₹200"),
          makeProduct("Champa (Golden)", "200g", "₹200"),
          makeProduct("Loban (Royale)", "200g", "₹200"),
          makeProduct("Guggal (Sacred)", "200g", "₹200"),
          makeProduct("Harmony Dhoop Stick", "80g", "₹80"),
        ],
      },
      {
        title: "Premium Dhoop",
        products: [
          makeProduct("Special Chandan", "50g", "₹75"),
          makeProduct("Special Rose", "50g", "₹75"),
          makeProduct("Peace", "50g", "₹75"),
          makeProduct("Aroma", "50g", "₹75"),
          makeProduct("Rich Gold", "50g", "₹75"),
          makeProduct("Divine Meditation", "50g", "₹75"),
          makeProduct("Red Wood", "50g", "₹135"),
          makeProduct("Mysore Chandan", "50g", "₹135"),
          makeProduct("Kesar Chandan", "50g", "₹135"),
          makeProduct("Saffron", "50g", "₹150"),
        ],
      },
      {
        title: "Long & Pure Dhoop",
        products: [
          makeProduct("Mysore Chandan", "100g", "₹180"),
          makeProduct("Khus", "100g", "₹180"),
          makeProduct("Royal King", "100g", "₹180"),
          makeProduct("Signature", "100g", "₹180"),
          makeProduct("Red Wood Dhoop Cups", "12 cups", "₹225"),
          makeProduct("Pure Sandal Dhoop Cups", "12 cups", "₹225"),
          makeProduct("Pure Guggal Dhoop Cups", "12 cups", "₹180"),
          makeProduct("Guggal Dhoop Sticks", "50g", "₹135"),
          makeProduct("Loban Dhoop Sticks", "50g", "₹90"),
        ],
      },
      {
        title: "Natural Raw Dhoop",
        products: [
          makeProduct("Kani Dhoop", "100g / 250g", "₹90 / ₹180"),
          makeProduct("Khada Dhoop", "100g / 250g", "₹120 / ₹300"),
          makeProduct("Pure Loban (Sambrani Powder)", "50g / 100g / 250g", "₹90 / ₹180 / ₹450"),
          makeProduct("Pure Guggal", "50g / 100g / 250g", "₹90 / ₹180 / ₹450"),
          makeProduct("Parsi Floaters", "50g / 100g / 250g", "₹120 / ₹240 / ₹600"),
          makeProduct("Bhimsen Kapoor", "50g / 100g / 250g", "₹150 / ₹300 / ₹750"),
        ],
      },
    ],
  },
  "premium-incense": {
    sections: [
      {
        title: "Aromatic Series",
        products: [
          makeProduct("Golden Petal", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Copper Magic", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Green Musk", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Saffron Bliss", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Blue Diamond", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Purple Pinch", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Silver Touch", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Divine 3 in 1", "250g", "₹250"),
          makeProduct("Pink Pearl", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Festival 5 in 1", "250g", "₹250"),
        ],
      },
      {
        title: "Natural Fruit Incense",
        products: [
          makeProduct("Pineapple", "100g", "₹110"),
          makeProduct("Strawberry", "100g", "₹110"),
          makeProduct("Peach", "100g", "₹110"),
          makeProduct("Watermelon", "100g", "₹110"),
          makeProduct("Grapes", "100g", "₹110"),
          makeProduct("Red Guava", "100g", "₹110"),
        ],
      },
      {
        title: "Ancient Incense Series",
        products: [
          makeProduct("Mysore Chandan", "50g / 250g", "₹95 / ₹300"),
          makeProduct("Rajnigandha", "50g / 250g", "₹80 / ₹275"),
          makeProduct("Pure Loban", "50g / 250g", "₹95 / ₹275"),
          makeProduct("Black Musk", "50g / 250g", "₹95 / ₹325"),
          makeProduct("Royal King", "50g / 250g", "₹95 / ₹325"),
          makeProduct("Pure Guggul", "50g", "₹120"),
          makeProduct("Saffron", "50g / 250g", "₹110 / ₹525"),
        ],
      },
      {
        title: "Premium Masala Series",
        products: [
          makeProduct("Azzaro", "50g / 250g", "₹95 / ₹325"),
          makeProduct("Tirumala", "50g / 250g", "₹110 / ₹425"),
          makeProduct("Fruit Forest", "50g / 250g", "₹120 / ₹510"),
          makeProduct("Prayer", "50g / 250g", "₹120 / ₹510"),
          makeProduct("White Sage", "50g / 250g", "₹120 / ₹510"),
          makeProduct("Divine Meditation", "50g / 250g", "₹120 / ₹510"),
          makeProduct("Nag Champa", "50g / 250g", "₹135 / ₹510"),
          makeProduct("Gold Sandal", "50g / 250g", "₹135 / ₹575"),
          makeProduct("Spanish Lavender", "50g / 250g", "₹135 / ₹650"),
          makeProduct("Mechanize Gold", "50g / 250g", "₹150 / ₹650"),
          makeProduct("Rich Gold", "50g / 250g", "₹150 / ₹650"),
        ],
      },
    ],
  },
  "perfumed-incense": {
    sections: [
      {
        title: "Premume Incense Sticks (₹80/₹190)",
        products: [
          makeProduct("Rose", "100g / 250g", "₹80 / ₹190", "Timeless Floral Grace"),
          makeProduct("Passion", "100g / 250g", "₹80 / ₹190", "Essence of Intensity"),
          makeProduct("Kasturi", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Attar Fantasia", "100g / 250g", "₹80 / ₹190", "The Magic of Attar"),
          makeProduct("Deepnandan", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Firdous", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Mogra", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Chandan", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Sringar Gold", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Fancy Flower", "100g / 250g", "₹80 / ₹190"),
          makeProduct("Champa", "100g / 250g", "₹80 / ₹190"),
          makeProduct("3 Fragrances", "100g / 250g", "₹80 / ₹190"),
        ],
      },
      {
        title: "Premume Incense Sticks (₹100/₹225)",
        products: [
          makeProduct("Violet", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Panadi", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Kesar Chandan", "100g / 250g", "₹100 / ₹225"),
          makeProduct("London Night", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Musk", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Tulip Garden", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Lavender", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Angel", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Pure Lilly", "100g / 250g", "₹100 / ₹225"),
          makeProduct("Musk Melon", "100g / 250g", "₹100 / ₹225"),
        ],
      },
      {
        title: "Higher Range & Black Series",
        products: [
          makeProduct("Rajpal Special", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Sandalum", "100g / 250g", "₹110 / ₹250"),
          makeProduct("Divine Meditation", "100g / 250g", "₹120 / ₹300"),
          makeProduct("Kasturi Gold", "100g / 250g", "₹120 / ₹300"),
          makeProduct("Mysore Chandan", "100g / 250g", "₹135 / ₹325"),
          makeProduct("Signature", "100g / 250g", "₹135 / ₹325"),
          makeProduct("Black Musk", "100g / 250g", "₹150 / ₹375"),
          makeProduct("Royal King", "100g / 250g", "₹150 / ₹375"),
          makeProduct("Red Hills", "100g / 250g", "₹50 / ₹120"),
          makeProduct("Blue Hills", "100g / 250g", "₹50 / ₹120"),
          makeProduct("New Mogra", "100g / 250g", "₹50 / ₹120"),
          makeProduct("New Rose", "100g / 250g", "₹50 / ₹120"),
          makeProduct("Rainbow Red", "250g", "₹150"),
          makeProduct("Rainbow Blue", "250g", "₹150"),
          makeProduct("Rainbow Green", "250g", "₹150"),
          makeProduct("Rainbow Violet", "250g", "₹150"),
        ],
      },
    ],
  },
  "long-sticks": {
    sections: [
      {
        title: "Longsticks Collection",
        products: [
          makeProduct("Red Wood", "5 Sticks", "₹150"),
          makeProduct("Blue Sapphire", "5 Sticks", "₹150"),
          makeProduct("Mechanize Gold", "5 Sticks", "₹150"),
          makeProduct("Bhumi Flora", "5 Sticks", "₹150"),
          makeProduct("Tirumala Flora", "10 Sticks", "₹150"),
          makeProduct("Herbal Leaf", "5 Sticks", "₹175"),
          makeProduct("Tathastul", "5 Sticks", "₹175"),
          makeProduct("Gold Sandal (Traditional Flora)", "5 Sticks", "₹175"),
          makeProduct("Kesar Kasturi", "1 Stick", "₹50"),
        ],
      },
    ],
  },
  "aroma-fragrance": {
    sections: [
      {
        title: "Fresh Aroma Organic Purity Pod",
        products: [
          makeProduct("Original", "60g", "₹199"),
          makeProduct("Rose Pink", "60g", "₹199"),
          makeProduct("Lavender", "60g", "₹199"),
          makeProduct("Jasmine", "60g", "₹199"),
          makeProduct("Sandal", "60g", "₹199"),
          makeProduct("Lemongrass", "60g", "₹199"),
          makeProduct("Aromatic", "60g", "₹199"),
        ],
      },
      {
        title: "Fresh Aroma Car Pod",
        products: [
          makeProduct("Solace", "12ml", "₹299"),
          makeProduct("Elan", "12ml", "₹299"),
          makeProduct("Hush", "12ml", "₹299"),
          makeProduct("Noir", "12ml", "₹299"),
          makeProduct("Pulse", "12ml", "₹299"),
          makeProduct("Drift", "12ml", "₹299"),
        ],
      },
      {
        title: "Perfume Roll-Ons",
        products: [
          makeProduct("Premium Majmua", "3ml / 8ml", "₹300 / ₹500"),
          makeProduct("Premium Oudh", "3ml / 8ml", "₹150 / ₹350"),
          makeProduct("Premium Khus", "3ml / 8ml", "₹150 / ₹350"),
          makeProduct("Premium Patchouli", "3ml / 8ml", "₹150 / ₹350"),
          makeProduct("Premium Agarwood", "3ml / 8ml", "₹150 / ₹350"),
          makeProduct("Premium Kasturi", "3ml / 8ml", "₹120 / ₹250"),
          makeProduct("Premium White Oudh", "3ml / 8ml", "₹120 / ₹250"),
          makeProduct("Premium Chandan", "3ml / 8ml", "₹120 / ₹250"),
          makeProduct("Premium Kesar", "3ml / 8ml", "₹120 / ₹250"),
          makeProduct("Premium Rose", "3ml / 8ml", "₹120 / ₹250"),
          makeProduct("Sacred Chandan", "3ml / 8ml", "₹750 / ₹1250"),
          makeProduct("Sacred Oudh", "3ml / 8ml", "₹600 / ₹900"),
          makeProduct("Sacred Rose", "3ml / 8ml", "₹500 / ₹750"),
        ],
      },
    ],
  },
  "pooja-deep": {
    sections: [
      {
        title: "Pooja Deep Pure Cow Ghee Diyas",
        products: [
          makeProduct("Pooja Deep Ghee Diyas", "30 Diya", "₹120"),
          makeProduct("Pooja Deep Ghee Diyas", "60 Diya", "₹240"),
          makeProduct("Pooja Deep Ghee Diyas", "50 Diya", "₹350"),
          makeProduct("Pooja Deep Ghee Diyas", "100 Diya", "₹350"),
        ],
      },
      {
        title: "Vanaspati Ghee Diyas",
        products: [
          makeProduct("Vanaspati Ghee Diya", "30 Diya", "₹90"),
          makeProduct("Vanaspati Ghee Diya", "60 Diya", "₹180"),
          makeProduct("Vanaspati Ghee Diya", "50 Diya", "₹250"),
          makeProduct("Vanaspati Ghee Diya", "100 Diya", "₹250"),
        ],
      },
      {
        title: "Pooja Vati (Wicks)",
        products: [
          makeProduct("Pooja Cotton Vati", "Pack", "₹25"),
          makeProduct("Pooja Cotton Vati", "Pack", "₹15"),
          makeProduct("Pooja Phool Vati", "Pack", "₹25"),
          makeProduct("Pooja Phool Vati", "Pack", "₹50"),
          makeProduct("Pooja Phool Vati", "Pack", "₹75"),
          makeProduct("Pooja Phool Vati", "Pack", "₹150"),
          makeProduct("Pooja Samai Vati", "Pack", "₹25", "Long cotton wicks for Samai and Deepam"),
          makeProduct("Pooja Samai Vati", "Pack", "₹15"),
        ],
      },
    ],
  },
  "khadi-soaps": {
    sections: [
      {
        title: "Premium Handmade Bathing Bar (125g)",
        products: [
          makeProduct("Aloe Vera", "125g", "₹100"),
          makeProduct("Apple Cider Vinegar", "125g", "₹100"),
          makeProduct("Aqua Fresh", "125g", "₹100"),
          makeProduct("Avocado", "125g", "₹100"),
          makeProduct("Basil Scrub", "125g", "₹100"),
          makeProduct("Blueberry", "125g", "₹100"),
          makeProduct("Chandan Haldi", "125g", "₹100"),
          makeProduct("Charcoal", "125g", "₹100"),
          makeProduct("Coffee", "125g", "₹100"),
          makeProduct("Goat Milk", "125g", "₹100"),
          makeProduct("Jasmine", "125g", "₹100"),
          makeProduct("Lavender", "125g", "₹100"),
          makeProduct("Neem", "125g", "₹100"),
          makeProduct("Rose", "125g", "₹100"),
          makeProduct("Sandalwood", "125g", "₹100"),
          makeProduct("Tea Tree", "125g", "₹100"),
        ],
      },
      {
        title: "Luxurious Handmade Bathing Bar (125g)",
        products: [
          makeProduct("Activated Bamboo Charcoal", "125g", "₹120"),
          makeProduct("Almond Milk & Saffron", "125g", "₹120"),
          makeProduct("Apricot Scrub", "125g", "₹120"),
          makeProduct("Aqua Cool", "125g", "₹120"),
          makeProduct("Black Musk", "125g", "₹120"),
          makeProduct("British Rose", "125g", "₹120"),
          makeProduct("Dead Sea", "125g", "₹120"),
          makeProduct("Green Apple", "125g", "₹120"),
          makeProduct("Green Tea & Lemongrass", "125g", "₹120"),
          makeProduct("Haldi Chandan", "125g", "₹120"),
          makeProduct("Mogra", "125g", "₹120"),
          makeProduct("Orange Ginger", "125g", "₹120"),
          makeProduct("Oud Wood", "125g", "₹120"),
          makeProduct("Royal Saffron", "125g", "₹120"),
          makeProduct("Sandalwood Saffron", "125g", "₹120"),
          makeProduct("Shea Butter", "125g", "₹120"),
        ],
      },
    ],
  },
};

const categoryMeta = [
  {
    name: "Incense Sticks",
    slug: "incense-sticks",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dhoop Sticks",
    slug: "dhoop-sticks",
    image:
      "https://images.unsplash.com/photo-1514355315815-2b64b0216b14?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Premium Incense",
    slug: "premium-incense",
    image:
      "https://images.unsplash.com/photo-1629196911518-4137ee95f6df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Perfumed Incense",
    slug: "perfumed-incense",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59b80?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aroma & Fragrance",
    slug: "aroma-fragrance",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pooja Deep",
    slug: "pooja-deep",
    image:
      "https://images.unsplash.com/photo-1573318542007-3efcb8f57dd1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Khadi Natural Soaps",
    slug: "khadi-soaps",
    image:
      "https://images.unsplash.com/photo-1607006483647-42f6f53f4f7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Long Sticks",
    slug: "long-sticks",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
  },
];

export const categories = categoryMeta.map((item) => ({
  ...item,
  subcategories: (productCatalog[item.slug]?.sections || []).map((section) => section.title),
}));

export const testimonials = [
  { name: "Export Buyer, UAE", quote: "A premium fragrance profile with excellent consistency." },
  { name: "Retail Partner, Delhi", quote: "Customers love the elegant packaging and rich aroma." },
  { name: "Wellness Studio, Mumbai", quote: "Perfect for meditation and luxury ambience curation." },
];

export const faqs = [
  { q: "How is product quality ensured?", a: "Each batch follows strict fragrance and burn-quality standards." },
  { q: "Do you offer shipping support?", a: "Yes, domestic and export dispatch support is available." },
  { q: "Can I get fragrance details?", a: "Detailed fragrance notes and usage guidance are provided per product line." },
  { q: "Do you accept custom orders?", a: "Yes, custom fragrance and packaging consultations are supported." },
  { q: "Are bulk orders available?", a: "Yes, we handle wholesale and distributor-grade quantities." },
  { q: "Do you export internationally?", a: "Yes, export-ready documentation and product formats are available." },
];
 