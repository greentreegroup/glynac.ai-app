"use client";

import React from "react";
import { motion } from "framer-motion";

export function Qualitative() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-50"></div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative z-10 text-center px-4"
          >
            <div className="glass-panel p-8 rounded-2xl backdrop-blur-lg border border-white/20 shadow-xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Analysis
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered analysis provides a comprehensive view of workplace communication through advanced NLP and sentiment analysis.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Analysis Categories */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Qualitative Analysis Metrics
            </h2>
          </motion.div>

          {[
            {
              title: "Positive Language",
              icon: "⭐",
              image: "/img/positive-language.png",
              content: "Detects encouraging statements and solution-focused communication...",
            },
            {
              title: "Complaint Language",
              icon: "⚠️",
              image: "/img/complaint-language.png",
              content: "Identifies workplace concerns and dissatisfaction patterns...",
            },
            {
              title: "Negative Language",
              icon: "🚩",
              image: "/img/negative-language.png",
              content: "Flags problem-focused communication without solutions...",
            },
            {
              title: "Unclear Language",
              icon: "❓",
              image: "/img/unclear-language.png",
              content: "Detects ambiguous or redundant statements...",
            },
            {
              title: "Harassment Language",
              icon: "🚨",
              image: "/img/harassment-language.png",
              content: "Identifies potentially hostile or inappropriate language...",
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="glass-panel mb-12 p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-4xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {item.content}
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <span>📈</span> Business Impact
                      </h4>
                      <p className="text-gray-700">How this metric affects organizational health...</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <span>🔍</span> Measurement
                      </h4>
                      <p className="text-gray-700">AI-powered frequency analysis per 10k words...</p>
                    </div>
                  </div>
                </div>
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto rounded-2xl transform transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Training Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <img
                    src="/img/training-image.png"
                    alt="AI Training"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Adaptive AI Training
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our machine learning models continuously evolve through user feedback loops. Validate or refine AI classifications to create custom communication profiles tailored to your organization's unique culture.
                </p>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span>🔄</span> Continuous Learning Cycle
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Real-time feedback integration</li>
                    <li>• Context-aware pattern recognition</li>
                    <li>• Custom sentiment weighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Workplace Communication
            </h2>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Leverage our AI-driven insights to cultivate a communication ecosystem that boosts productivity, enhances employee satisfaction, and mitigates organizational risk through data-driven cultural optimization.
              </p>
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-20"></div>
                <img
                  src="/img/inclusive.png"
                  alt="Workplace Analytics"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
      
    </>
  );
}

export default Qualitative;