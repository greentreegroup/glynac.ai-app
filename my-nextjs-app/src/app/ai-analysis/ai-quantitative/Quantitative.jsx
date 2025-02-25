"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Quantitative() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 shadow-lg rounded-lg">
        <motion.h1 
          className="text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AI Quantitative Analysis
        </motion.h1>
        <motion.p 
          className="text-xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our AI-powered quantitative analysis measures key communication metrics, including volume, response times, and inactivity patterns. Gain insights into employee engagement and workflow efficiency to improve team collaboration.
        </motion.p>
      </div>

      {/* Analysis Categories */}
      <div className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Quantitative Analysis Category</h2>

        {[ 
          {
            title: "Volume of Communication",
            image: "/img/communication-volume.png",
            description: "Our AI measures total words and characters exchanged across communication channels to assess engagement and workload distribution.",
            benefits: "Optimizing communication volume helps businesses ensure even workload distribution and improve team efficiency.",
            measure: "Measured by counting the total words and characters exchanged per employee across various platforms."
          },
          {
            title: "Responsiveness",
            image: "/img/responsiveness-volume.png",
            description: "We analyze response times to understand how quickly employees engage in conversations, ensuring timely collaboration.",
            benefits: "Tracking response rates helps businesses reduce delays and foster a more agile work environment.",
            measure: "Measured by calculating the average time taken to reply to a message."
          },
          {
            title: "Inactivity",
            image: "/img/inactivity-volume.png",
            description: "Tracks periods of inactivity in 15-minute intervals to identify engagement patterns and workflow inefficiencies.",
            benefits: "Identifying inactivity trends helps optimize meeting schedules, enhance productivity, and rebalance workloads.",
            measure: "Measured by tracking no communication or user activity in 15-minute intervals over a 40-hour workweek."
          }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-wrap justify-center items-center mb-16 bg-white p-8 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-1/2 p-6">
              <h4 className="text-2xl font-bold mb-4">✔ {item.title}</h4>
              <p className="mb-4">{item.description}</p>
              <h5 className="text-xl font-medium mt-6 mb-2">⭐ How can this be useful?</h5>
              <p>{item.benefits}</p>
              <h5 className="text-xl font-medium mt-6 mb-2">📊 How to measure?</h5>
              <p>{item.measure}</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[300px] object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Training Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 pr-12">
            <motion.img
              src="/img/training-quan.png"
              alt="Training"
              className="w-full h-[400px] object-contain rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography variant="h3" className="font-bold text-3xl mb-6">
              Training
            </Typography>
            <Typography className="text-xl">
              Users can review the AI-generated insights on communication volume, responsiveness, and inactivity to validate or refine the findings. By accepting or adjusting the data, organizations continuously improve the AI’s accuracy, ensuring it aligns with their unique operational needs.
            </Typography>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 text-center bg-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <Typography variant="h2" className="text-4xl font-bold mb-8">
            How can AI Quantitative Analysis be useful?
          </Typography>
          <Typography className="text-xl mb-12 max-w-3xl mx-auto">
            Understanding communication behaviors through data-driven insights is essential for optimizing efficiency and collaboration. AI-powered quantitative analysis allows businesses to enhance performance and create a more connected, responsive workplace.
          </Typography>
          <motion.img
            src="/img/efficiency.png"
            alt="Efficiency"
            className="w-1/2 object-contain rounded-lg shadow-lg mx-auto"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

    </>
  );
}

export default Quantitative;
