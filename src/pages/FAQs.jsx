import FAQAccordion from "../components/FAQAccordion";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/siteData";

const FAQs = () => (
  <section className="mx-auto max-w-4xl px-4 py-16">
    <SectionTitle eyebrow="FAQs"  />
    <FAQAccordion items={faqs} />
  </section>
);

export default FAQs;
