"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <>
      {/* Background Wrapper with Extreme Animation */}
      <motion.div
        className="relative flex min-h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]"
        style={{ scale, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-[#1E3A8A]/20 to-black/60 z-10" />
        <div className="max-w-8xl container relative mx-auto text-center z-20">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          >
            <Typography
              variant="h1"
              className="mb-6 font-black text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg tracking-wide uppercase"
            >
              About Us
            </Typography>
            <Typography
              variant="lead"
              className="opacity-90 text-lg md:text-2xl lg:text-3xl text-[#E0F2FE] font-light tracking-wider"
            >
              At Glynac.ai, we revolutionize the hybrid and remote work landscape with cutting-edge AI solutions.
            </Typography>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section with Extreme Effects */}
      <section className="-mt-32 bg-[#F1F5F9] px-4 pb-20 pt-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-lg p-6 rounded-xl border border-[#3B82F6]/30"
          >
            <Card className="shadow-2xl border-[#3B82F6] bg-white/95 p-8 rounded-xl transform transition-all duration-700 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:rotate-3">
              <CardBody>
                <Typography
                  variant="h4"
                  className="font-bold text-[#1E3A8A] flex items-center gap-3 text-3xl tracking-tight"
                >
                  <FingerPrintIcon className="h-8 w-8 text-[#3B82F6] animate-pulse" />
                  Our Mission
                </Typography>
                <Typography className="mt-4 font-medium text-[#64748B] text-lg leading-relaxed">
                  Traditional methods fall short in today’s dynamic workplaces. We leverage AI to decode communication patterns, uniting remote and office teams with precision and insight.
                </Typography>
              </CardBody>
            </Card>
          </motion.div>

          <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="flex-1 glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-md p-6 rounded-xl border border-[#3B82F6]/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-rotate-2"
            >
              <Typography variant="h2" className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight">
                Letters To Users
              </Typography>
              <Typography className="mt-4 font-normal text-[#64748B] text-lg leading-loose">
                Today’s workplace thrives on digital conversations. Our AI platform harnesses Large Language Models to process vast communication data from Slack, Teams, and more—delivering real-time, actionable insights.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="flex-1 glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-md p-6 rounded-xl border border-[#3B82F6]/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:rotate-2"
            >
              <Typography variant="h2" className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight">
                Our Solutions
              </Typography>
              <Typography className="mt-4 font-normal text-[#64748B] text-lg leading-loose">
                Tailored for every business, our scalable AI tools deliver deep analytics and sentiment tracking—empowering smarter decisions and stronger teams.
              </Typography>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-lg p-8 rounded-xl border border-[#3B82F6]/30 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
          >
            <Typography className="text-3xl font-semibold text-[#1E3A8A] text-center leading-relaxed">
              Welcome to Glynac.ai—where AI transforms hybrid work. We unite teams, boost productivity, and prioritize sustainability and collaboration.
              <br /><br />
              Our innovative tools drive meaningful change, optimize communication, and enhance well-being. Join us to thrive in the future of work.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-lg p-6 rounded-xl mt-12 max-w-4xl mx-auto border border-[#3B82F6]/30 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <Card className="bg-white/95 p-8 rounded-xl shadow-2xl">
              <CardBody>
                <Typography variant="h4" className="font-bold text-[#1E3A8A] text-center text-3xl tracking-wide">
                  Locations
                </Typography>
                <Typography className="mt-6 font-medium text-[#64748B] text-center text-lg">
                  <span className="block text-[#3B82F6] font-semibold">Headquarters:</span> Chicago
                  <br /><br />
                  <span className="block text-[#3B82F6] font-semibold">Sales & Development:</span> India
                  <br /><br />
                  <span className="block text-[#3B82F6] font-semibold">Development:</span> Israel
                  <br /><br />
                  <span className="block text-[#3B82F6] font-semibold">Sales:</span> Beijing, London
                </Typography>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section with Extreme Design */}
      <section className="mt-20 bg-gradient-to-b from-[#F1F5F9] to-[#E0F2FE] py-24">
        <Typography variant="h2" className="text-5xl font-extrabold text-[#1E3A8A] text-center mb-12 tracking-wider uppercase">
          Our Leadership
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { src: "/img/leadership1.jpg", name: "Andrew Rosenthal", description: "CEO & Founder with 20+ years in AI analytics." },
            { src: "/img/leadership2.jpg", name: "Bo Shi", description: "CFO mastering financial strategy and growth." },
            { src: "/img/leadership3.jpg", name: "Tanju Sharma", description: "CTO pioneering scalable tech innovations." },
          ].map(({ src, name, description }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 * (index + 1), type: "spring" }}
              viewport={{ once: true }}
              key={index}
              className="glassmorphism-extreme bg-[#1E3A8A]/10 backdrop-blur-md p-6 rounded-xl border border-[#3B82F6]/40 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:rotate-3"
            >
              <Card className="shadow-2xl bg-white/95 rounded-xl overflow-hidden">
                <motion.img
                  src={src}
                  alt={name}
                  className="h-64 w-full object-cover rounded-t-xl transition-transform duration-500 hover:scale-125"
                  whileHover={{ scale: 1.25 }}
                />
                <CardBody className="text-center">
                  <Typography variant="h5" className="text-[#1E3A8A] font-bold text-xl tracking-wide">
                    {name}
                  </Typography>
                  <Typography className="text-[#64748B] mt-2 text-lg font-medium">
                    {description}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;