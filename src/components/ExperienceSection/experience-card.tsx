import React from 'react';
import { motion } from 'framer-motion';

const ComparisonSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium mb-4 tracking-wider">
            COMPARISON
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            BITCOIN VS TRADITIONAL
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mt-2">
            FINANCES
          </h1>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Traditional Finance Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-3xl p-8 h-48 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <p className="text-white text-sm font-medium mb-2 opacity-90">
                TRADITIONAL
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light">
                Finances
              </h2>
            </div>
          </motion.div>

          {/* Bitcoin Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-blue-600 via-purple-500 to-purple-400 rounded-3xl p-8 h-48 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <p className="text-white text-sm font-medium mb-2 opacity-90">
                CRYPTO
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-light">
                Bitcoin
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Accessibility Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="border border-gray-600 rounded-full w-32 h-32 flex items-center justify-center">
            <span className="text-gray-400 text-sm font-medium">
              Accessibility
            </span>
          </div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Operating Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-3xl p-8 h-48 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <h3 className="text-white text-xl md:text-2xl font-light leading-tight">
                OPERATE WITHIN CERTAIN HOURS
              </h3>
            </div>
          </motion.div>

          {/* 24/7 Operation Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-blue-600 via-purple-500 to-purple-400 rounded-3xl p-8 h-48 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <h3 className="text-white text-xl md:text-2xl font-light leading-tight">
                OPERATE 24/7 WITHOUT INTERRUPTION
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;