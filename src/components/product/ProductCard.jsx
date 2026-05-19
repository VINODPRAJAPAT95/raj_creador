import { useCart } from "../../hooks/useCart";

// WhatsApp Icon
const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.664 4.942 1.926 7.103L2 30l7.093-1.884A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.471a11.434 11.434 0 0 1-5.842-1.603l-.418-.249-4.338 1.152 1.16-4.232-.273-.435A11.408 11.408 0 0 1 4.56 16.003c0-6.32 5.124-11.443 11.443-11.443 6.32 0 11.443 5.124 11.443 11.443 0 6.32-5.124 11.468-11.443 11.468zm6.282-8.576c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.401.258-.745.086-.344-.172-1.452-.535-2.765-1.708-1.022-.912-1.712-2.037-1.912-2.381-.2-.344-.021-.53.15-.702.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.777-1.876-1.065-2.567-.28-.672-.566-.581-.777-.592-.2-.01-.43-.013-.66-.013s-.603.086-.919.43c-.316.344-1.205 1.176-1.205 2.867s1.234 3.327 1.406 3.557c.172.23 2.428 3.706 5.882 5.196.823.355 1.464.567 1.965.726.826.263 1.578.226 2.172.137.663-.099 2.036-.832 2.323-1.635.287-.803.287-1.49.2-1.635-.085-.143-.315-.23-.659-.402z" />
  </svg>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const whatsappMessage = `Hello RAJPAL PRODUCTS, I want to order ${product.name}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-silver/80 bg-white/85 transition hover:-translate-y-1 hover:shadow-luxury">

      {/* ── IMAGE SECTION (FIXED HOVER SWAP) ── */}
      <div className="aspect-square w-full overflow-hidden relative">

        {/* DEFAULT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-500 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* HOVER IMAGE */}
        <img
          src={product.imageHover || product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
        />

      </div>

      {/* ── CONTENT ── */}
      <div className="p-3 sm:p-4">

        {/* Product Name */}
        <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-stone-800 group-hover:text-[#7a1020] transition-colors duration-200">
          {product.name}
        </h4>

        {/* Weight & Price */}
        <div className="mt-2 flex items-center justify-between gap-1">
          <span className="text-[11px] text-stone-400 truncate">
            {product.weight}
          </span>
          <span className="shrink-0 text-sm font-bold text-[#7a1020]">
            {product.price}
          </span>
        </div>

        {/* Variants */}
        {product.variants && (
          <p className="mt-1 truncate text-[11px] text-beige">
            {product.variants}
          </p>
        )}

        {/* Buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2">

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-gold px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-90 active:scale-95"
          >
            Add Cart
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/919930670044?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-[#25D366] py-2 text-white transition hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon size={18} />
          </a>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;