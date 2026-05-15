import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

const ContactForm = () => {
  return (
    <>
      {/* GOOGLE FONTS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className="
          relative overflow-hidden
          rounded-[36px]
          border border-[#7a1020]/10
          bg-gradient-to-br
          from-[#fff8f5]
          via-[#f9ece7]
          to-[#f3dfd7]
          p-6 md:p-10 lg:p-14
          shadow-[0_20px_80px_rgba(122,16,32,0.10)]
        "
        style={{
          fontFamily: "'Outfit', sans-serif",
        }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#7a1020]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7a1020]/10 blur-3xl" />

        {/* MANDALA BACKGROUND */}
        <div
          className="
            absolute inset-0 opacity-[0.04]
            bg-[radial-gradient(circle_at_center,_#7a1020_1px,_transparent_1px)]
            [background-size:28px_28px]
          "
        />

        {/* HEADER */}
        <div className="relative z-10 mb-12">

          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#7a1020]
              font-semibold
            "
          >
            Contact Us
          </p>

          <h2
            className="
              max-w-3xl
              text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              text-[#3a0d0d]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Let’s Connect With

            <span
              className="
                block
                bg-gradient-to-r
                from-[#7a1020]
                via-[#a01f34]
                to-[#5c0d18]
                bg-clip-text
                text-transparent
              "
            >
              Rajpal Products
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#7b4d4d]">
            We’re here to assist you with premium incense products,
            business inquiries, wholesale orders, and customer support.
          </p>

          <div className="mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-[#7a1020] via-[#a01f34] to-transparent" />
        </div>

        {/* MAIN GRID */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-[32px]
              border border-[#7a1020]/10
              bg-white/80
              p-6 md:p-8
              shadow-[0_15px_50px_rgba(122,16,32,0.08)]
              backdrop-blur-xl
            "
          >

            {/* FORM TITLE */}
            <div className="mb-7">

              <h3
                className="text-3xl text-[#3a0d0d]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                Send Your Inquiry
              </h3>

              <p className="mt-2 text-[15px] text-[#7b4d4d] leading-7">
                Fill out the form below and our team will contact you shortly.
              </p>
            </div>

            {/* INPUT GRID */}
            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  rounded-2xl
                  border border-[#7a1020]/15
                  bg-white
                  px-5 py-4
                  text-sm text-[#3a0d0d]
                  outline-none
                  transition-all duration-300
                  focus:border-[#7a1020]
                  focus:shadow-[0_0_0_4px_rgba(122,16,32,0.08)]
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  rounded-2xl
                  border border-[#7a1020]/15
                  bg-white
                  px-5 py-4
                  text-sm text-[#3a0d0d]
                  outline-none
                  transition-all duration-300
                  focus:border-[#7a1020]
                  focus:shadow-[0_0_0_4px_rgba(122,16,32,0.08)]
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  rounded-2xl
                  border border-[#7a1020]/15
                  bg-white
                  px-5 py-4
                  text-sm text-[#3a0d0d]
                  outline-none
                  transition-all duration-300
                  focus:border-[#7a1020]
                  focus:shadow-[0_0_0_4px_rgba(122,16,32,0.08)]
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  rounded-2xl
                  border border-[#7a1020]/15
                  bg-white
                  px-5 py-4
                  text-sm text-[#3a0d0d]
                  outline-none
                  transition-all duration-300
                  focus:border-[#7a1020]
                  focus:shadow-[0_0_0_4px_rgba(122,16,32,0.08)]
                "
              />
            </div>

            {/* TEXTAREA */}
            <textarea
              rows={6}
              placeholder="Write Your Message..."
              className="
                mt-5 w-full
                rounded-2xl
                border border-[#7a1020]/15
                bg-white
                px-5 py-4
                text-sm text-[#3a0d0d]
                outline-none
                transition-all duration-300
                focus:border-[#7a1020]
                focus:shadow-[0_0_0_4px_rgba(122,16,32,0.08)]
              "
            />

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-4">

              {/* SEND BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group relative overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#7a1020]
                  via-[#65101b]
                  to-[#3f060d]
                  px-8 py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  shadow-[0_12px_30px_rgba(122,16,32,0.25)]
                "
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#a32739] to-[#7a1020] transition-transform duration-500 group-hover:translate-y-0" />

                <span className="relative z-10">
                  Send Inquiry
                </span>
              </motion.button>

              {/* WHATSAPP */}
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex items-center gap-3
                  rounded-full
                  border border-[#25D366]/20
                  bg-[#25D366]
                  px-8 py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_12px_30px_rgba(37,211,102,0.25)]
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >

            {/* INFO CARDS */}
            {[
              {
                icon: <MapPin size={20} />,
                title: "Address",
                value: "Rajpal Products, India",
              },
              {
                icon: <Mail size={20} />,
                title: "Email",
                value: "info@rajpalproducts.in",
              },
              {
                icon: <Phone size={20} />,
                title: "Phone",
                value: "+91 99999 99999",
              },
              {
                icon: <Clock size={20} />,
                title: "Working Hours",
                value: "Mon - Sat : 9 AM to 7 PM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="
                  group
                  flex items-start gap-4
                  rounded-[26px]
                  border border-[#7a1020]/10
                  bg-white/80
                  p-5
                  shadow-[0_10px_30px_rgba(122,16,32,0.08)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[#7a1020]/30
                "
              >

                {/* ICON */}
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#7a1020]
                    to-[#5c0d18]
                    text-white
                    shadow-lg
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>

                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                      text-[#7a1020]
                      font-semibold
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className="mt-2 text-xl text-[#3a0d0d]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.value}
                  </h3>
                </div>
              </motion.div>
            ))}

            {/* MAP */}
            <div className="overflow-hidden rounded-[30px] border border-[#7a1020]/15 shadow-[0_10px_30px_rgba(122,16,32,0.12)]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=India&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM LINE */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#7a1020]
            to-transparent
            opacity-40
          "
        />
      </section>
    </>
  );
};

export default ContactForm;