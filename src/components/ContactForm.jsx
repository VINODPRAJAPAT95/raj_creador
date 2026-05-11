import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2rem] border border-[#7a1020]/20 bg-white/40 p-8 shadow-[0_0_40px_rgba(122,16,32,0.08)] backdrop-blur-2xl"
    >

      {/* GOLD GLOW */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#E2C88B]/20 blur-3xl" />

      {/* TITLE */}
      <div className="relative z-10 mb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-[#7a1020]">
          Contact Us
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-[#7a1020] via-[#b68a35] to-[#7a1020] bg-clip-text text-3xl font-black uppercase tracking-[0.12em] text-transparent">
          Send Inquiry
        </h2>
      </div>

      {/* FORM */}
      <div className="relative z-10 space-y-5">

        {/* NAME */}
        <input
          placeholder="Full Name"
          className="w-full rounded-2xl border border-[#7a1020]/15 bg-white/80 p-4 text-sm text-[#3d0911] outline-none backdrop-blur-xl transition focus:border-[#7a1020] focus:shadow-[0_0_20px_rgba(122,16,32,0.15)]"
        />

        {/* EMAIL */}
        <input
          placeholder="Email Address"
          className="w-full rounded-2xl border border-[#7a1020]/15 bg-white/80 p-4 text-sm text-[#3d0911] outline-none backdrop-blur-xl transition focus:border-[#7a1020] focus:shadow-[0_0_20px_rgba(122,16,32,0.15)]"
        />

        {/* PHONE */}
        <input
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-[#7a1020]/15 bg-white/80 p-4 text-sm text-[#3d0911] outline-none backdrop-blur-xl transition focus:border-[#7a1020] focus:shadow-[0_0_20px_rgba(122,16,32,0.15)]"
        />

        {/* MESSAGE */}
        <textarea
          rows={5}
          placeholder="Write Your Message..."
          className="w-full rounded-2xl border border-[#7a1020]/15 bg-white/80 p-4 text-sm text-[#3d0911] outline-none backdrop-blur-xl transition focus:border-[#7a1020] focus:shadow-[0_0_20px_rgba(122,16,32,0.15)]"
        />

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-2">

          {/* SEND INQUIRY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#E2C88B] to-[#C9A45C] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_rgba(226,200,139,0.35)]"
          >
            {/* HOVER EFFECT */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#7a1020] to-[#4a0712] transition duration-500 group-hover:translate-x-0" />

            {/* TEXT */}
            <span className="relative z-10 transition group-hover:text-[#F5D68A]">
              Send Inquiry
            </span>
          </motion.button>

          {/* WHATSAPP BUTTON */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-[#25D366]/30 bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)]"
          >
            {/* HOVER EFFECT */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#7a1020] to-[#4a0712] transition duration-500 group-hover:translate-x-0" />

            {/* CONTENT */}
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp Inquiry
            </span>
          </motion.a>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;