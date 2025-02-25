"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

interface LogoItem {
  src: string;
  alt: string;
  info: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);

  const logoData: LogoItem[] = [
    {
      src: "/img/company1-logo.png",
      alt: "Company 1",
      info: "Glynac improved workforce efficiency by an average of 32% across six major corporations through advanced employee analytics."
    },
    {
      src: "/img/company2-logo.png",
      alt: "Company 2",
      info: "By leveraging Glynac's data-driven insights, Grammarly saw a 25% reduction in employee turnover within the first year."
    },
    {
      src: "/img/company3-logo.png",
      alt: "Company 3",
      info: "Our custom analytics solutions helped teams at Ferguson enhance collaboration leading to a 40% increase in cross-departmental productivity."
    },
    {
      src: "/img/company4-logo.png",
      alt: "Company 4",
      info: "Over 90% of managers reported greater confidence in decision-making after implementing Glynac's streamlined reporting tools."
    },
    {
      src: "/img/company5-logo.png",
      alt: "Company 5",
      info: "Within six months, Broadcom experienced an average of 18% reduction in operational costs related to workforce inefficiencies."
    },
    {
      src: "/img/company6-logo.png",
      alt: "Company 6",
      info: "With Glynac's expertise, Loom achieved a 50% improvement in employee engagement scores, fostering stronger workplace communities."
    },
  ];

  const handleLogoClick = (index: number) => {
    setSelectedLogo(selectedLogo === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-[#87CEEB] to-[#1E90FF] px-8 overflow-hidden">
        <motion.div
          className="max-w-6xl container mx-auto flex justify-between w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text Section */}
          <motion.div
            className="flex flex-col items-start w-1/2 relative z-10"
            variants={itemVariants}
          >
            <Typography
              variant="h1"
              className="mb-6 font-black text-6xl md:text-8xl text-white drop-shadow-lg"
            >
              Glynac.ai
            </Typography>
            <Typography
              variant="h2"
              className="mb-2 font-black text-5xl md:text-7xl text-white drop-shadow-lg"
            >
              Connecting you to
            </Typography>
            <Typography
              variant="h2"
              className="font-black text-5xl md:text-7xl text-white drop-shadow-lg"
            >
              the future of work
            </Typography>
            <Button
              variant="filled"
              size="lg"
              className="bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] text-white px-10 py-4 rounded-full shadow-lg mt-8 hover:from-[#1E90FF] hover:to-[#87CEEB] transform transition-all duration-300 ease-in-out hover:scale-105 animate-pulse"
            >
              CONNECT NOW
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="hidden md:block w-1/2 relative z-10"
            variants={itemVariants}
          >
            <img
              src="/img/landing_image.PNG"
              alt="Glynac.ai Team"
              className="w-full h-full object-cover rounded-lg shadow-2xl transform transition duration-300 ease-in-out hover:scale-105"
            />
          </motion.div>
        </motion.div>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-96 h-96 bg-white opacity-10 rounded-full absolute animate-ping"></div>
          <div className="w-72 h-72 bg-[#87CEEB] opacity-20 rounded-full absolute animate-pulse"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography variant="h2" className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]">
            Glynac – AI-Powered Employee Monitoring Software
          </Typography>
          <Typography variant="h3" className="text-3xl font-semibold mb-6 text-gray-800">
            Overview
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: "/img/insight-icon.png", title: "Optimizes Workflow Insights", desc: "Transforms raw data into meaningful analytics for performance improvements." },
              { icon: "/img/wellbeing-icon.png", title: "Enhanced Employee Well-Being", desc: "Identifies trends in engagement, workload balance, and satisfaction." },
              { icon: "/img/security-icon.png", title: "Advanced Security Encryption", desc: "Ensures strict data protection with anonymization and encryption." },
              { icon: "/img/ethical-icon.png", title: "Ethical and Transparent Usage", desc: "Prioritizes fair monitoring, privacy, and actionable insights." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-xl p-6 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-80 hover:bg-opacity-100 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-[#87CEEB]/20"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)" }}
              >
                <motion.img
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  className="mb-4 w-16 mx-auto"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <Typography variant="h5" className="mb-2 font-bold text-2xl text-[#1E90FF]">
                  {feature.title}
                </Typography>
                <Typography className="text-gray-600">
                  {feature.desc}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by 10,000 customers section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography variant="h3" className="text-4xl font-bold mb-4 text-[#1E90FF]">
            Trusted by 10,000 customers all over the world
          </Typography>
          <Typography className="text-xl mb-8 text-gray-600">
            Click logo to see more info
          </Typography>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logoData.map((logo, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-24 h-24 object-contain cursor-pointer mb-4 filter drop-shadow-lg"
                  onClick={() => handleLogoClick(index)}
                />
                {selectedLogo === index && (
                  <motion.div
                    className="bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] p-4 rounded-lg shadow-2xl w-full mt-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography className="text-sm font-medium">{logo.info}</Typography>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to unlock the full potential of your workforce Section */}
      <section className="py-16 bg-gray-50">
        <Typography
          variant="h3"
          className="text-center max-w-3xl mx-auto mb-12 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
        >
          Ready to unlock the full potential of your workforce? Glynac helps you:
        </Typography>

        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Headers with Text */}
          <motion.div
            className="w-1/2 space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: "/img/ai-icon.png", title: "Leverage AI", desc: "Leverage AI-driven insights for smarter workforce management." },
              { icon: "/img/patterns-icon.png", title: "Detect Patterns", desc: "Detect patterns in productivity, engagement, and collaboration." },
              { icon: "/img/data-icon.png", title: "Analyze Data", desc: "Securely analyze data while maintaining employee privacy." },
              { icon: "/img/benchmark-icon.png", title: "Benchmark", desc: "Benchmark performance with standardized scoring for growth." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start group"
                variants={itemVariants}
              >
                <img src={item.icon} alt={`${item.title} Icon`} className="mr-4 w-12 h-12" />
                <div>
                  <Typography variant="h5" className="font-bold text-2xl text-[#1E90FF] group-hover:text-[#87CEEB] transition-colors duration-300">
                    {item.title}
                  </Typography>
                  <Typography className="mt-2 text-gray-700">
                    {item.desc}
                  </Typography>
                  <motion.div
                    className="h-1 w-0 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] mt-2"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Large Image */}
          <motion.div
            className="w-1/2 pl-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/img/large-image-right.png"
              alt="Related to workforce"
              className="w-full h-[400px] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* From Monitoring to Empowerment: Glynac’s Feature Spotlight */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Image */}
          <motion.div
            className="w-1/2 pr-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/img/large-image-left.png"
              alt="Empowerment"
              className="w-full h-[400px] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Right Side: Title and Text */}
          <motion.div
            className="w-1/2"
            variants={itemVariants}
          >
            <Typography variant="h3" className="font-extrabold text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] drop-shadow-lg">
              From Monitoring to Empowerment: Glynac’s Feature Spotlight
            </Typography>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Glynac isn’t about tracking, it’s about understanding. Gain deep insights to enhance employee well-being, optimize workflows, and foster a data-driven, thriving workplace.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How Does Glynac.ai Work? Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography variant="h2" className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]">
            How Does Glynac.ai Work?
          </Typography>
          <Typography className="text-xl mb-12 max-w-3xl mx-auto text-gray-600">
            Glynac A.I. is an A.I. application that tracks the performance of employees by collecting data from common work applications such as Outlook, Microsoft Teams, and more. The data is analyzed by A.I. to determine overall productivity and employee attitude.
          </Typography>

          <motion.div
            className="flex justify-center items-center space-x-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { src: "/img/left-process.png", alt: "Left Process", size: "w-2/5" },
              { src: "/img/right-arrow.png", alt: "Right Arrow", size: "w-1/12" },
              { src: "/img/center-process.png", alt: "Center Process", size: "w-1/5" },
              { src: "/img/left-arrow.png", alt: "Left Arrow", size: "w-1/12" },
              { src: "/img/right-process.png", alt: "Right Process", size: "w-2/5" },
            ].map((img, index) => (
              <motion.div key={index} className={img.size} variants={itemVariants} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <img src={img.src} alt={img.alt} className="w-full object-contain rounded-lg shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]">
            Methodology
          </Typography>

          {[
            {
              step: 1,
              title: "Data Extraction",
              desc: [
                "Data is extracted from various workplace applications such as Outlook, Microsoft Teams, Slack, and other communication tools. The system then filters any irrelevant data and applies initial security measures to ensure privacy and protections.",
                "By extracting irrelevant data, Glynac creates a foundation for accurate insights into employee productivity and work efficiency.",
                "The system tracks the volume of extracted data, the accuracy of filtered information, and ensures privacy protocols are in place for correct analytics and high-quality data."
              ],
              img: "/img/data-extraction-image.png"
            },
            {
              step: 2,
              title: "Encryption",
              desc: [
                "After the data is extracted, it undergoes encryption before integration into the AI system. This ensures sensitive information is secured and maintains security standards.",
                "Encryption protects employee and company data, preventing unauthorized access while adhering to data protection laws.",
                "Encryption effectiveness is measured through security audits, checks, and penetration tests to safeguard against data breaches."
              ],
              img: "/img/encryption-image.png"
            },
            {
              step: 3,
              title: "Standardization",
              desc: [
                "Standardized metrics are applied to extracted data. The AI system organizes it into structured formats such as productivity scores, sentiment analysis, and performance benchmarks.",
                "Standardization enables fair compensation across employees and departments. It helps organizations identify trends and predict potential issues.",
                "The AI assigns standardized scores using historical performance data, making it easier to analyze workforce efficiency."
              ],
              img: "/img/standardization-image.png"
            }
          ].map((method, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Left Column: Text */}
              <motion.div className="w-2/3 text-left" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] text-white rounded-full flex items-center justify-center mr-4 text-2xl font-bold">
                    {method.step}
                  </div>
                  <Typography className="text-3xl font-bold text-[#1E90FF]">
                    {method.title}
                  </Typography>
                </div>
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  {method.desc.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div className="w-1/3" variants={itemVariants}>
                <img src={method.img} alt={method.title} className="w-full object-contain rounded-lg shadow-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}