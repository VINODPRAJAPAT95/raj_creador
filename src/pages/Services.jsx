import SectionTitle from "../components/SectionTitle";

const services = [
  "Wholesale Supply",
  "Export Packaging",
  "Private Label Consultation",
  "Fragrance Profiling",
  "Bulk & Distributor Support",
];

const Services = () => (
  <section className="mx-auto max-w-7xl px-4 py-16">
    <SectionTitle eyebrow="Services" title="Premium Business Support Services" />
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => (
        <article key={service} className="rounded-2xl border border-gold/20 bg-black/40 p-6">
          <h3 className="text-lg text-gold-soft">{service}</h3>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
