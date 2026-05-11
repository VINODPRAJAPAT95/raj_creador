import CategoryPageTemplate from "../../templates/CategoryPageTemplate";
import { categories } from "../../data/siteData";

const PremiumIncensePage = () => <CategoryPageTemplate category={categories.find((c) => c.slug === "premium-incense")} />;

export default PremiumIncensePage;
