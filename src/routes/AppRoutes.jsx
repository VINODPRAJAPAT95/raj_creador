import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AromaFragrancePage from "../pages/categories/AromaFragrancePage";
import DhoopSticksPage from "../pages/categories/DhoopSticksPage";
import IncenseSticksPage from "../pages/categories/IncenseSticksPage";
import KhadiSoapsPage from "../pages/categories/KhadiSoapsPage";
import LongSticksPage from "../pages/categories/LongSticksPage";
import PerfumedIncensePage from "../pages/categories/PerfumedIncensePage";
import PoojaDeepPage from "../pages/categories/PoojaDeepPage";
import PremiumIncensePage from "../pages/categories/PremiumIncensePage";

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/services" element={<Services />} />

      <Route path="/categories/incense-sticks" element={<IncenseSticksPage />} />
      <Route path="/categories/dhoop-sticks" element={<DhoopSticksPage />} />
      <Route path="/categories/premium-incense" element={<PremiumIncensePage />} />
      <Route path="/categories/perfumed-incense" element={<PerfumedIncensePage />} />
      <Route path="/categories/aroma-fragrance" element={<AromaFragrancePage />} />
      <Route path="/categories/pooja-deep" element={<PoojaDeepPage />} />
      <Route path="/categories/khadi-soaps" element={<KhadiSoapsPage />} />
      <Route path="/categories/long-sticks" element={<LongSticksPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default AppRoutes;
