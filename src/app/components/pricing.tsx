"use client";
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <div className="bg-white py-6 px-8 mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Simple Transparent <span className="text-orange-500">Pricing</span>
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Basic Plan */}
        <motion.div 
          className="bg-gray-100 p-6 text-center rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-gray-800">Basic Plan</h3>
          <p className="text-lg mt-2">$0/month</p>
          <p className="mt-4 text-gray-600">
            Perfect for beginners. Get access to essential meal plans and nutrition tracking features to kickstart your healthy lifestyle.
          </p>
          <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Get Started
          </button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div 
          className="bg-orange-500 text-white p-6 text-center rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-xl font-bold">Premium Plan</h3>
          <p className="text-lg mt-2">$9.99/month</p>
          <p className="mt-4">
            Unlock advanced features! Get personalized meal plans, expert nutrition advice, and in-depth progress tracking to achieve your wellness goals faster.
          </p>
          <button className="mt-6 bg-white text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all">
            Join Now
          </button>
        </motion.div>

        {/* Business Plan */}
        <motion.div 
          className="bg-gray-100 p-6 text-center rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-xl font-bold text-gray-800">Business Plan</h3>
          <p className="text-lg mt-2">Custom Pricing</p>
          <p className="mt-4 text-gray-600">
            For fitness coaches and health professionals. Provide multi-user access, custom meal plans for clients, API integration, and dedicated support.
          </p>
          <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
