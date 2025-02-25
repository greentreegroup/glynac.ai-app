"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Security & Trust
          </h1>
          <p className="text-xl text-gray-300">
            Your trust is our priority. Discover how we protect your data and maintain the highest security standards.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Security Key Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-400/10 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Military-Grade Encryption</h2>
            </div>
            <p className="text-gray-300 mb-4">
              All data is protected with AES-256 encryption, the same standard used by governments and financial institutions.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>End-to-end encrypted communications</li>
              <li>SSL/TLS 1.3 protected connections</li>
              <li>Regular security audits</li>
            </ul>
          </motion.div>

          {/* Privacy Safety Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-400/10 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Privacy First Approach</h2>
            </div>
            <p className="text-gray-300 mb-4">
              We adhere to strict privacy policies and compliance standards to ensure your data remains confidential.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>GDPR compliant data handling</li>
              <li>Zero-knowledge architecture</li>
              <li>Regular third-party audits</li>
            </ul>
          </motion.div>

          {/* Data Leak Prevention Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-400/10 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Data Leak Prevention</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced monitoring systems and protocols to prevent unauthorized access and data breaches.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Real-time anomaly detection</li>
              <li>Automated threat response systems</li>
              <li>Data encryption at rest and in transit</li>
            </ul>
          </motion.div>

          {/* Trusted Company Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400/10 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Trusted Worldwide</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Partnered with leading security organizations and trusted by enterprises across 45+ countries.
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>SOC 2 Type II certified</li>
              <li>ISO 27001 compliant infrastructure</li>
              <li>24/7 security monitoring team</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center text-gray-300"
        >
          <p className="text-lg">
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Glynac.ai
            </span> - Certified Secure Platform since 2025
          </p>
          <p className="mt-2">Regularly updated to meet evolving security standards</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Security;