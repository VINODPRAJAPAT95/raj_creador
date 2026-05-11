import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => (
  <Link
    to={`/categories/${category.slug}`}
    className="group relative overflow-hidden rounded-2xl border border-gold/25 shadow-[0_10px_25px_rgba(123,16,32,0.08)]"
  >
    <img
      src={category.image}
      alt={category.name}
      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#7b1020]/75 via-[#7b1020]/20 to-transparent p-5">
      <p className="mt-44 text-sm uppercase tracking-[0.2em] text-[#fff4db]">{category.name}</p>
    </div>
  </Link>
);

export default CategoryCard;
