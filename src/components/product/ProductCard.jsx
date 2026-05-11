import { useCart } from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-2xl border border-silver/80 bg-white/85 p-4 transition hover:-translate-y-1 hover:shadow-luxury">
    <img
      src={product.image}
      alt={product.name}
      className="h-44 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
    />
    <h4 className="mt-4 font-medium">{product.name}</h4>
    <p className="mt-1 text-sm text-beige/75">{product.description}</p>
    <div className="mt-3 flex items-center justify-between text-xs text-gold-soft">
      <span>{product.weight}</span>
      <span>{product.price}</span>
    </div>
    {product.variants && <p className="mt-1 text-xs text-beige">{product.variants}</p>}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => addToCart(product)}
          className="rounded-full bg-gold px-3 py-2 text-xs uppercase tracking-[0.15em] text-white"
        >
          Add Cart
        </button>
        <button className="rounded-full border border-gold/30 py-2 text-xs uppercase tracking-[0.2em] text-gold">
          Quick View
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
