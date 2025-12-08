import { motion } from "framer-motion";
import { useState } from "react";

// *** আপনার Formspree URL এখানে বসানো হয়েছে ***
const FORMSPREE_URL = "https://formspree.io/f/xqarddzg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Formspree-তে ডেটা পাঠানোর জন্য fetch ব্যবহার করা হচ্ছে
    const submitForm = async () => {
      const data = new FormData(e.target);

      try {
        const response = await fetch(FORMSPREE_URL, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          // সফলভাবে Formspree-তে ডেটা পাঠানো হয়েছে
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 4000);
        } else {
          // Formspree থেকে এরর কোড পেলে
          setError(
            "Sorry, there was an issue sending your message. Please check the form data."
          );
        }
      } catch (fetchError) {
        // নেটওয়ার্ক বা অন্য কোনো সমস্যা হলে
        setError("A network error occurred. Please try again.");
        console.error("Network error:", fetchError);
      } finally {
        setIsSubmitting(false);
      }
    };

    submitForm();
  };

  return (
    <section className="flex flex-col gap-4 py-16 md:py-24" id="contact">
      <motion.h2
        className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-pink-500 w-fit"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="p-4 bg-surface-dark/80 backdrop-blur-sm border border-primary/30 rounded-lg"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {submitted ? (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-accent-green text-2xl font-bold mb-2">
              Message Sent! 🎉
            </h3>
            <p className="text-[#E0E0E0]">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </motion.div>
        ) : (
          <form
            className="flex flex-col gap-6"
            action={FORMSPREE_URL} // শুধুমাত্র Fallback হিসেবে
            method="POST"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-300 p-3 rounded-md">
                {error}
              </div>
            )}

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="text-sm font-medium text-white" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-md border border-primary/40 bg-background-dark p-3 text-white focus:border-accent-green focus:ring-2 focus:ring-accent-green/50 transition outline-none"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <label className="text-sm font-medium text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-md border border-primary/40 bg-background-dark p-3 text-white focus:border-accent-green focus:ring-2 focus:ring-accent-green/50 transition outline-none"
                id="email"
                name="_replyto"
                type="email"
                
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label
                className="text-sm font-medium text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-primary/40 bg-background-dark p-3 text-white focus:border-accent-green focus:ring-2 focus:ring-accent-green/50 transition outline-none resize-none"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              className="flex min-w-[84px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-pink-500 text-black text-base font-bold leading-normal tracking-[0.015em] transition-all hover:shadow-[0_0_12px_4px_rgba(236,72,153,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting}
            >
              <span className="truncate">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
