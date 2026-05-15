export const topbarText = "Spreading Fragrance Since 1981";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  // { label: "Services", path: "/services" },
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
          makeProduct("Sacred Chandan", "50g", "₹1800", "", "https://images.unsplash.com/photo-1602928298849-e4b8b3bf9c12?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sacred Oudh", "50g", "₹1200", "", "https://images.unsplash.com/photo-1603905490932-09ba5f285a79?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sacred Rose", "50g", "₹900", "", "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Exotic Series",
        products: [
          makeProduct("Exotic Amber", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Bakhoor", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Heena", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Chandan", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Musk", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Oudh", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1588405748880-12d1d2a59b80?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Saffron", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Exotic Rose", "50g / 250g", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Premium & Ultra Premium",
        products: [
          makeProduct("Premium Oudh", "50g / 250g", "₹325 / ₹1500", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Khus", "50g / 250g", "₹325 / ₹1500", "", "https://images.unsplash.com/photo-1616791151821-b3c8a3af8e12?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Chandan", "50g / 250g", "₹275 / ₹1250", "", "https://images.unsplash.com/photo-1599839619526-03bd12d6d962?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Rose", "50g / 250g", "₹275 / ₹1250", "", "https://images.unsplash.com/photo-1490750967868-88df5691cc71?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Ultra Premium Majmua", "50g / 250g", "₹400 / ₹1800", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Ultra Premium Patchouli", "50g / 250g", "₹300 / ₹1500", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Ultra Premium Agarwood", "50g / 250g", "₹300 / ₹1500", "", "https://images.unsplash.com/photo-1544376936-ade9e0c45753?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Ultra Premium White Oudh", "50g / 250g", "₹275 / ₹1250", "", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Divya Mandir Series",
        products: [
          makeProduct("Devdutt Incense Stick", "250g", "₹175", "Gift of the Gods", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mahatejas Incense Stick", "250g", "₹175", "Great Divine Radiance", "https://images.unsplash.com/photo-1609501676732-3e50cda59b64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Shrivardhan Incense Stick", "250g", "₹175", "Increases Prosperity", "https://images.unsplash.com/photo-1582560469781-1f0bd6a0b3f4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sudarshan Incense Stick", "250g", "₹175", "Pure Vision", "https://images.unsplash.com/photo-1601490618684-f7b6fb14c09b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Shivansh Incense Stick", "250g", "₹175", "A Part of Shiva", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tapodhan Incense Stick", "250g", "₹175", "Absorbed in Meditation", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Dhyanrath Incense Stick", "250g", "₹175", "Absorbed in Meditation", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tejomay Incense Stick", "250g", "₹175", "Filled with Divine Light", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "dhoop-sticks": {
    sections: [
      {
        title: "Nature's Bouquet",
        products: [
          makeProduct("Harmony (3-in-1)", "200g", "₹200", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mogra (Bliss)", "200g", "₹200", "", "https://images.unsplash.com/photo-1484593831335-c3d2468d2c26?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rose (Elegance)", "200g", "₹200", "", "https://images.unsplash.com/photo-1495078429430-b9049e87abd4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Lavender (Calm)", "200g", "₹200", "", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Chandan (Divine)", "200g", "₹200", "", "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kasturi (Mystique)", "200g", "₹200", "", "https://images.unsplash.com/photo-1548082716-e8a13c2b48c1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Champa (Golden)", "200g", "₹200", "", "https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Loban (Royale)", "200g", "₹200", "", "https://images.unsplash.com/photo-1556765114-b527c8a19f04?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Guggal (Sacred)", "200g", "₹200", "", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Harmony Dhoop Stick", "80g", "₹80", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Premium Dhoop",
        products: [
          makeProduct("Special Chandan", "50g", "₹75", "", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Special Rose", "50g", "₹75", "", "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Peace", "50g", "₹75", "", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Aroma", "50g", "₹75", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rich Gold", "50g", "₹75", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Divine Meditation", "50g", "₹75", "", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Red Wood", "50g", "₹135", "", "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mysore Chandan", "50g", "₹135", "", "https://images.unsplash.com/photo-1599839619526-03bd12d6d962?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kesar Chandan", "50g", "₹135", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Saffron", "50g", "₹150", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Long & Pure Dhoop",
        products: [
          makeProduct("Mysore Chandan", "100g", "₹180", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Khus", "100g", "₹180", "", "https://images.unsplash.com/photo-1601490618684-f7b6fb14c09b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Royal King", "100g", "₹180", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Signature", "100g", "₹180", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Red Wood Dhoop Cups", "12 cups", "₹225", "", "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Sandal Dhoop Cups", "12 cups", "₹225", "", "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Guggal Dhoop Cups", "12 cups", "₹180", "", "https://images.unsplash.com/photo-1582560469781-1f0bd6a0b3f4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Guggal Dhoop Sticks", "50g", "₹135", "", "https://images.unsplash.com/photo-1556765114-b527c8a19f04?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Loban Dhoop Sticks", "50g", "₹90", "", "https://images.unsplash.com/photo-1548082716-e8a13c2b48c1?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Natural Raw Dhoop",
        products: [
          makeProduct("Kani Dhoop", "100g / 250g", "₹90 / ₹180", "", "https://images.unsplash.com/photo-1544376936-ade9e0c45753?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Khada Dhoop", "100g / 250g", "₹120 / ₹300", "", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Loban (Sambrani Powder)", "50g / 100g / 250g", "₹90 / ₹180 / ₹450", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Guggal", "50g / 100g / 250g", "₹90 / ₹180 / ₹450", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Parsi Floaters", "50g / 100g / 250g", "₹120 / ₹240 / ₹600", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Bhimsen Kapoor", "50g / 100g / 250g", "₹150 / ₹300 / ₹750", "", "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "premium-incense": {
    sections: [
      {
        title: "Aromatic Series",
        products: [
          makeProduct("Golden Petal", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1495078429430-b9049e87abd4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Copper Magic", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Green Musk", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Saffron Bliss", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Blue Diamond", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Purple Pinch", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Silver Touch", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Divine 3 in 1", "250g", "₹250", "", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pink Pearl", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1490750967868-88df5691cc71?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Festival 5 in 1", "250g", "₹250", "", "https://images.unsplash.com/photo-1602928298849-e4b8b3bf9c12?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Natural Fruit Incense",
        products: [
          makeProduct("Pineapple", "100g", "₹110", "", "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Strawberry", "100g", "₹110", "", "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Peach", "100g", "₹110", "", "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Watermelon", "100g", "₹110", "", "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Grapes", "100g", "₹110", "", "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Red Guava", "100g", "₹110", "", "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Ancient Incense Series",
        products: [
          makeProduct("Mysore Chandan", "50g / 250g", "₹95 / ₹300", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rajnigandha", "50g / 250g", "₹80 / ₹275", "", "https://images.unsplash.com/photo-1484593831335-c3d2468d2c26?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Loban", "50g / 250g", "₹95 / ₹275", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Black Musk", "50g / 250g", "₹95 / ₹325", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Royal King", "50g / 250g", "₹95 / ₹325", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Guggul", "50g", "₹120", "", "https://images.unsplash.com/photo-1582560469781-1f0bd6a0b3f4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Saffron", "50g / 250g", "₹110 / ₹525", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Premium Masala Series",
        products: [
          makeProduct("Azzaro", "50g / 250g", "₹95 / ₹325", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tirumala", "50g / 250g", "₹110 / ₹425", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Fruit Forest", "50g / 250g", "₹120 / ₹510", "", "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Prayer", "50g / 250g", "₹120 / ₹510", "", "https://images.unsplash.com/photo-1609501676732-3e50cda59b64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("White Sage", "50g / 250g", "₹120 / ₹510", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Divine Meditation", "50g / 250g", "₹120 / ₹510", "", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Nag Champa", "50g / 250g", "₹135 / ₹510", "", "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Gold Sandal", "50g / ₹575", "₹135 / ₹575", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Spanish Lavender", "50g / 250g", "₹135 / ₹650", "", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mechanize Gold", "50g / 250g", "₹150 / ₹650", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rich Gold", "50g / 250g", "₹150 / ₹650", "", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "perfumed-incense": {
    sections: [
      {
        title: "Premume Incense Sticks (₹80/₹190)",
        products: [
          makeProduct("Rose", "100g / 250g", "₹80 / ₹190", "Timeless Floral Grace", "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Passion", "100g / 250g", "₹80 / ₹190", "Essence of Intensity", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kasturi", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1548082716-e8a13c2b48c1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Attar Fantasia", "100g / 250g", "₹80 / ₹190", "The Magic of Attar", "https://images.unsplash.com/photo-1556765114-b527c8a19f04?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Deepnandan", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Firdous", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mogra", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1484593831335-c3d2468d2c26?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Chandan", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1599839619526-03bd12d6d962?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sringar Gold", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Fancy Flower", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1495078429430-b9049e87abd4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Champa", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"),
          makeProduct("3 Fragrances", "100g / 250g", "₹80 / ₹190", "", "https://images.unsplash.com/photo-1602928298849-e4b8b3bf9c12?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Premume Incense Sticks (₹100/₹225)",
        products: [
          makeProduct("Violet", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Panadi", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kesar Chandan", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("London Night", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Musk", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tulip Garden", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Lavender", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Angel", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pure Lilly", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1490750967868-88df5691cc71?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Musk Melon", "100g / 250g", "₹100 / ₹225", "", "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Higher Range & Black Series",
        products: [
          makeProduct("Rajpal Special", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sandalum", "100g / 250g", "₹110 / ₹250", "", "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Divine Meditation", "100g / 250g", "₹120 / ₹300", "", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kasturi Gold", "100g / 250g", "₹120 / ₹300", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mysore Chandan", "100g / 250g", "₹135 / ₹325", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Signature", "100g / 250g", "₹135 / ₹325", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Black Musk", "100g / 250g", "₹150 / ₹375", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Royal King", "100g / 250g", "₹150 / ₹375", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Red Hills", "100g / 250g", "₹50 / ₹120", "", "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Blue Hills", "100g / 250g", "₹50 / ₹120", "", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"),
          makeProduct("New Mogra", "100g / 250g", "₹50 / ₹120", "", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("New Rose", "100g / 250g", "₹50 / ₹120", "", "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rainbow Red", "250g", "₹150", "", "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rainbow Blue", "250g", "₹150", "", "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rainbow Green", "250g", "₹150", "", "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rainbow Violet", "250g", "₹150", "", "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "long-sticks": {
    sections: [
      {
        title: "Longsticks Collection",
        products: [
          makeProduct("Red Wood", "5 Sticks", "₹150", "", "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Blue Sapphire", "5 Sticks", "₹150", "", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mechanize Gold", "5 Sticks", "₹150", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Bhumi Flora", "5 Sticks", "₹150", "", "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tirumala Flora", "10 Sticks", "₹150", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Herbal Leaf", "5 Sticks", "₹175", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tathastul", "5 Sticks", "₹175", "", "https://images.unsplash.com/photo-1609501676732-3e50cda59b64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Gold Sandal (Traditional Flora)", "5 Sticks", "₹175", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Kesar Kasturi", "1 Stick", "₹50", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "aroma-fragrance": {
    sections: [
      {
        title: "Fresh Aroma Organic Purity Pod",
        products: [
          makeProduct("Original", "60g", "₹199", "", "https://images.unsplash.com/photo-1602928298849-e4b8b3bf9c12?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rose Pink", "60g", "₹199", "", "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Lavender", "60g", "₹199", "", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Jasmine", "60g", "₹199", "", "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sandal", "60g", "₹199", "", "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Lemongrass", "60g", "₹199", "", "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Aromatic", "60g", "₹199", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Fresh Aroma Car Pod",
        products: [
          makeProduct("Solace", "12ml", "₹299", "", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Elan", "12ml", "₹299", "", "https://images.unsplash.com/photo-1601490618684-f7b6fb14c09b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Hush", "12ml", "₹299", "", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Noir", "12ml", "₹299", "", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pulse", "12ml", "₹299", "", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Drift", "12ml", "₹299", "", "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Perfume Roll-Ons",
        products: [
          makeProduct("Premium Majmua", "3ml / 8ml", "₹300 / ₹500", "", "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Oudh", "3ml / 8ml", "₹150 / ₹350", "", "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Khus", "3ml / 8ml", "₹150 / ₹350", "", "https://images.unsplash.com/photo-1616791151821-b3c8a3af8e12?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Patchouli", "3ml / 8ml", "₹150 / ₹350", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Agarwood", "3ml / 8ml", "₹150 / ₹350", "", "https://images.unsplash.com/photo-1544376936-ade9e0c45753?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Kasturi", "3ml / 8ml", "₹120 / ₹250", "", "https://images.unsplash.com/photo-1548082716-e8a13c2b48c1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium White Oudh", "3ml / 8ml", "₹120 / ₹250", "", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Chandan", "3ml / 8ml", "₹120 / ₹250", "", "https://images.unsplash.com/photo-1599839619526-03bd12d6d962?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Kesar", "3ml / 8ml", "₹120 / ₹250", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Premium Rose", "3ml / 8ml", "₹120 / ₹250", "", "https://images.unsplash.com/photo-1490750967868-88df5691cc71?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sacred Chandan", "3ml / 8ml", "₹750 / ₹1250", "", "https://images.unsplash.com/photo-1602928298849-e4b8b3bf9c12?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sacred Oudh", "3ml / 8ml", "₹600 / ₹900", "", "https://images.unsplash.com/photo-1603905490932-09ba5f285a79?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sacred Rose", "3ml / 8ml", "₹500 / ₹750", "", "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "pooja-deep": {
    sections: [
      {
        title: "Pooja Deep Pure Cow Ghee Diyas",
        products: [
          makeProduct("Pooja Deep Ghee Diyas", "30 Diya", "₹120", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Deep Ghee Diyas", "60 Diya", "₹240", "", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Deep Ghee Diyas", "50 Diya", "₹350", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Deep Ghee Diyas", "100 Diya", "₹350", "", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Vanaspati Ghee Diyas",
        products: [
          makeProduct("Vanaspati Ghee Diya", "30 Diya", "₹90", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Vanaspati Ghee Diya", "60 Diya", "₹180", "", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Vanaspati Ghee Diya", "50 Diya", "₹250", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Vanaspati Ghee Diya", "100 Diya", "₹250", "", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Pooja Vati (Wicks)",
        products: [
          makeProduct("Pooja Cotton Vati", "Pack", "₹25", "", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Cotton Vati", "Pack", "₹15", "", "https://images.unsplash.com/photo-1609501676732-3e50cda59b64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Phool Vati", "Pack", "₹25", "", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Phool Vati", "Pack", "₹50", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Phool Vati", "Pack", "₹75", "", "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Phool Vati", "Pack", "₹150", "", "https://images.unsplash.com/photo-1609501676732-3e50cda59b64?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Samai Vati", "Pack", "₹25", "Long cotton wicks for Samai and Deepam", "https://images.unsplash.com/photo-1577083287854-b3e49bfc0f03?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Pooja Samai Vati", "Pack", "₹15", "", "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=600&q=80"),
        ],
      },
    ],
  },
  "khadi-soaps": {
    sections: [
      {
        title: "Premium Handmade Bathing Bar (125g)",
        products: [
          makeProduct("Aloe Vera", "125g", "₹100", "", "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Apple Cider Vinegar", "125g", "₹100", "", "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Aqua Fresh", "125g", "₹100", "", "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Avocado", "125g", "₹100", "", "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Basil Scrub", "125g", "₹100", "", "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Blueberry", "125g", "₹100", "", "https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Chandan Haldi", "125g", "₹100", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Charcoal", "125g", "₹100", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Coffee", "125g", "₹100", "", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Goat Milk", "125g", "₹100", "", "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Jasmine", "125g", "₹100", "", "https://images.unsplash.com/photo-1484593831335-c3d2468d2c26?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Lavender", "125g", "₹100", "", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Neem", "125g", "₹100", "", "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Rose", "125g", "₹100", "", "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sandalwood", "125g", "₹100", "", "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Tea Tree", "125g", "₹100", "", "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80"),
        ],
      },
      {
        title: "Luxurious Handmade Bathing Bar (125g)",
        products: [
          makeProduct("Activated Bamboo Charcoal", "125g", "₹120", "", "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Almond Milk & Saffron", "125g", "₹120", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Apricot Scrub", "125g", "₹120", "", "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Aqua Cool", "125g", "₹120", "", "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Black Musk", "125g", "₹120", "", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"),
          makeProduct("British Rose", "125g", "₹120", "", "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Dead Sea", "125g", "₹120", "", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Green Apple", "125g", "₹120", "", "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Green Tea & Lemongrass", "125g", "₹120", "", "https://images.unsplash.com/photo-1527462591673-e8c1a7d0f1c4?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Haldi Chandan", "125g", "₹120", "", "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Mogra", "125g", "₹120", "", "https://images.unsplash.com/photo-1484593831335-c3d2468d2c26?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Orange Ginger", "125g", "₹120", "", "https://images.unsplash.com/photo-1547476537-12b54e42c2ec?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Oud Wood", "125g", "₹120", "", "https://images.unsplash.com/photo-1544376936-ade9e0c45753?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Royal Saffron", "125g", "₹120", "", "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Sandalwood Saffron", "125g", "₹120", "", "https://images.unsplash.com/photo-1599839619526-03bd12d6d962?auto=format&fit=crop&w=600&q=80"),
          makeProduct("Shea Butter", "125g", "₹120", "", "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=600&q=80"),
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
      "https://arthcart.com/cdn/shop/files/Artboard20.jpg?v=1689790295",
  },
  {
    name: "Dhoop Sticks",
    slug: "dhoop-sticks",
    image:
      "https://www.swahaproducts.com/cdn/shop/products/Utsav1_1800x1800.jpg?v=1744938142",
  },
  {
    name: "Premium Incense",
    slug: "premium-incense",
    image:
      "https://m.media-amazon.com/images/I/81n-HyLqapL._AC_UF350,350_QL80_.jpg",
  },
  {
    name: "Perfumed Incense",
    slug: "perfumed-incense",
    image:
      "https://www.kambayaromatics.com/img/agarbatti-perfume-manufacturer.jpg",
  },
  {
    name: "Aroma & Fragrance",
    slug: "aroma-fragrance",
    image:
      "https://m.media-amazon.com/images/I/71OQ73TMR-L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Pooja Deep",
    slug: "pooja-deep",
    image:
      "https://rukminim2.flixcart.com/image/480/480/xif0q/diya/5/j/x/1-diya-685-aloof-2-original-imagt2rzjv88ydgs.jpeg?q=90",
  },
  {
    name: "Khadi Natural Soaps",
    slug: "khadi-soaps",
    image:
      "https://images.meesho.com/images/products/72937940/vcewr_512.webp?width=512",
  },
  {
    name: "Long Sticks",
    slug: "long-sticks",
    image:
      "https://www.soulflower.in/cdn/shop/files/Sandalwood_111324be-1350-4cb3-8805-c4f1631b1285_large.jpg?v=1759904845",
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