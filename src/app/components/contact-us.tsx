"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API or email)
    alert("Form Submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white py-16 px-8" id="contact">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in <span className="text-orange-400">Touch</span> with Us
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <motion.form
          className="bg-gray-700 p-8 rounded-2xl shadow-xl"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-4 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows={6}
              placeholder="Enter your message here"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-400 transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
