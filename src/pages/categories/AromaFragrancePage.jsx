import CategoryPageTemplate from "../../templates/CategoryPageTemplate";
import { categories } from "../../data/siteData";

const AromaFragrancePage = () => <CategoryPageTemplate category={categories.find((c) => c.slug === "aroma-fragrance")} />;

export default AromaFragrancePage;
