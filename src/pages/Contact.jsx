import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";

const Contact = () => (
  <section className="mx-auto max-w-7xl px-4 py-16">
    <SectionTitle
      eyebrow="Contact"
      title="Connect With RAJPAL PRODUCTS"
      subtitle="UI-only premium inquiry form with map and business contact details."
    />
    <div className="grid gap-8 md:grid-cols-2">
      <ContactForm />
      <div className="space-y-5 rounded-2xl border border-silver/70 bg-white/80 p-6">
        <p>Address: Rajpal Products, India</p>
        <p>Email: info@rajpalproducts.in</p>
        <p>Phone: +91-99999-99999</p>
        <iframe
          className="h-72 w-full rounded-xl border-0"
          title="Google map"
          src="https://www.google.com/maps?q=India&output=embed"
        />
      </div>
    </div>
  </section>
);

export default Contact;
