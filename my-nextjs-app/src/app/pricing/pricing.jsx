"use client";

import { Typography, Button, Card } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", 
  },
};

export function Pricing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // Particle settings
    const numParticles = 100;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: `hsla(${Math.random() * 360}, 100%, 100%, 1)`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around the edges
        if (particle.x > width) particle.x = 0;
        if (particle.x < 0) particle.x = width;
        if (particle.y > height) particle.y = 0;
        if (particle.y < 0) particle.y = height;

        // Draw glowing particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-72 content-center items-center justify-center overflow-hidden bg-gray-900">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/20 to-pink-500/10 backdrop-blur-xl"></div>

        <div className="container mx-auto text-center z-10 relative">
          <Typography
            variant="h1"
            className="mb-4 font-black text-5xl text-white drop-shadow-lg"
          >
            Plan & Package
          </Typography>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="bg-white px-4 py-10">
      <motion.div
      className="relative container mx-auto py-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {/* Basic Plan */}
        <motion.div variants={cardVariants}>
            <Card className="relative shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-gray-200 to-white flex flex-col items-center overflow-hidden">
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full"></div>
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full blur-lg"></div> 
                <Typography
                  variant="h3"
                  className="mt-10 mb-4 font-bold text-gray-800 text-center"
                >
                  BASIC
                </Typography>
                <Typography
                  variant="h4"
                  className="mb-6 text-center font-extrabold text-3xl text-blue-600"
                >
                  Free
                </Typography>
                <ul className="list-none text-center space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Basic Communication Monitoring
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Message Frequency Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Visualization
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 20 Devices
                  </li>
                </ul>
                <Button
                  variant="gradient"
                  size="md"
                  className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-1.5 transition-all duration-300 mt-auto"
                >
                  Learn More
                </Button>
                </Card>
            </motion.div>

            {/* Starter Plan */}
            
            <motion.div variants={cardVariants}>
            <Card className="relative shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-gray-200 to-white flex flex-col items-center overflow-hidden">
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full"></div>
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full blur-lg"></div> 
                {/* Glass effect */}
                <Typography
                  variant="h3"
                  className="mt-10 mb-4 font-bold text-gray-800 text-center"
                >
                  STARTER
                </Typography>
                <Typography
                  variant="h4"
                  className="mb-6 text-center font-extrabold text-3xl text-blue-600"
                >
                  $100/Month
                </Typography>
                <ul className="list-none text-center space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Relationship Mapping
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Department Mapping
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Keywords Trends
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Happiness Trends
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Responsiveness Metrics
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Trend Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 25 Devices
                  </li>
                </ul>
                <Button
                  variant="gradient"
                  size="md"
                  className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-1.5 transition-all duration-300 mt-auto"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>

            {/* Advanced Plan */}
            <motion.div variants={cardVariants}>
            <Card className="relative shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-gray-200 to-white flex flex-col items-center overflow-hidden">
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full"></div>
            <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full blur-lg"></div> 
                {/* Glass effect */}
                <Typography
                  variant="h3"
                  className="mt-10 mb-4 font-bold text-gray-800 text-center"
                >
                  ADVANCED
                </Typography>
                <Typography
                  variant="h4"
                  className="mb-6 text-center font-extrabold text-3xl text-blue-600"
                >
                  $200/Month
                </Typography>
                <ul className="list-none text-center space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Language Categorization
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Sentiment Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Sentiment Mapping
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Pay Issues Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Manager Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 Ownership Sentiment Analysis
                  </li>
                  <li className="flex items-center gap-2 text-blue-gray-600">
                    🔘 250 Devices
                  </li>
                </ul>
                <Button
                  variant="gradient"
                  size="md"
                  className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-1.5 transition-all duration-300 mt-auto"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>

            {/* Pro Plan - Dark Themed */}
            <motion.div variants={cardVariants}>
            <Card className="relative shadow-lg border border-gray-700 shadow-gray-500 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center overflow-hidden">
                <div className="absolute -top-10 left-0 w-full h-20 bg-gray-700 rounded-b-full"></div>
                <div className="absolute -top-10 left-0 w-full h-20 bg-gray-300 rounded-b-full blur-lg"></div> 
                {/* Glass effect */}
                <Typography
                  variant="h3"
                  className="mt-10 mb-4 font-bold text-white text-center"
                >
                  PRO
                </Typography>
                <Typography variant="h4" className="mb-6 text-center font-extrabold text-4xl">
                  $300/Month
                </Typography>
                <ul className="list-none text-center space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    🔘 All Advanced Features
                  </li>
                  <li className="flex items-center gap-2">
                    🔘 API Agent Integration
                  </li>
                  <li className="flex items-center gap-2">
                    🔘 Retention Insights
                  </li>
                  <li className="flex items-center gap-2">
                    🔘 Keyword Trends
                  </li>
                  <li className="flex items-center gap-2">
                    🔘 Happiness Trends
                  </li>
                  <li className="flex items-center gap-2">
                    🔘 350 Devices
                  </li>
                </ul>
                <Button
                  variant="gradient"
                  size="md"
                  className="w-3/4 bg-white text-blue-700 hover:text-white hover:bg-blue-600 border border-gray-300 rounded-full py-1.5 transition-all duration-300 mt-auto"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </>
  );
}

export default Pricing;
