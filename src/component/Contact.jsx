import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-slate-200 text-[22px] font-bold px-4 pb-3 pt-5 inline-block">
        <span className="text-accent">03.</span> Get In Touch
      </h2>
      <p className="max-w-md text-slate-400 mt-4">
        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-lg flex-col gap-4">
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full rounded-md border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all p-3"
            id="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full rounded-md border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all p-3"
            id="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            className="w-full rounded-md border border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all p-3"
            id="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></motion.textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex min-w-[84px] cursor-pointer items-center justify-center self-center overflow-hidden rounded-lg h-12 px-5 bg-primary/20 text-accent border border-accent hover:bg-primary/40 transition-colors text-base font-bold"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}