"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion"; 

export function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-screen items-center justify-center bg-black text-white">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center opacity-20" />
        <div className="absolute top-0 h-full w-full backdrop-blur-xl bg-black/40" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="relative text-center"
        >
          <Typography variant="h1" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-black text-5xl md:text-7xl">
            Frequently Asked Questions
          </Typography>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="-mt-32 bg-gray-900 px-6 pb-20 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          {[
            {
              question: "How does Glynac.AI ensure security and privacy?",
              answer: "We use End-to-End Encryption (E2EE) and real-time anonymization, ensuring all data remains protected before AI analysis.",
            },
            {
              question: "How will I know which subscription is right for me?",
              answer: "We offer customized plans tailored to your needs, making sure you get the most value for your business.",
            },
            {
              question: "Is customer service available 24/7?",
              answer: "We provide automated replies for general inquiries and a detailed FAQ section for instant support outside business hours.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-400" />
                <Typography variant="h5" className="font-bold text-white mt-4">{faq.question}</Typography>
                <Typography className="text-gray-300 text-center mt-2">{faq.answer}</Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Client Feedback Section */}
    <section className="max-w-6xl mx-auto mt-16 px-4">
        <Typography variant="h2" className="text-4xl font-bold text-blue-gray-900 text-left mb-8">
            Client Feedback
        </Typography>

        {/* Business Feedback List */}
        <div className="flex flex-col space-y-8 items-center w-full">

            {/* Salesforce */}
            <div className="flex items-center space-x-6 w-full max-w-4xl">
                <div className="w-[160px] flex-shrink-0 flex justify-center">
                    <img src="/img/Salesforce-logo.png" alt="Salesforce Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
                </div>
                <Typography className="text-lg font-normal text-blue-gray-700">
                    Glynac successfully improved workforce efficiency by an average of 32% across six 
                    major corporations through advanced employee analytics.
                </Typography>
            </div>

        {/* Grammarly*/}
        <div className="flex items-center space-x-6 w-full max-w-4xl">
            <div className="w-[160px] flex-shrink-0 flex justify-center">
                <img src="/img/grammarly.png" alt="Grammarly Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
            </div>
            <Typography className="text-lg font-normal text-blue-gray-700">
                By leveraging Glynac’s data-driven insights, grammarly saw a 25% reduction 
                in employee turnover within the first year.
            </Typography>
        </div>

        {/*Ferguson*/}
        <div className="flex items-center space-x-6 w-full max-w-4xl">
            <div className="w-[160px] flex-shrink-0 flex justify-center">
                <img src="/img/Ferguson-Logo.png" alt="Ferguson Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
            </div>
            <Typography className="text-lg font-normal text-blue-gray-700">
                Our custom analytics solutions helped teams at Furguson enhance collaboration, 
                leading to a 40% increase in cross-departmental productivity.
            </Typography>
        </div>
        
        {/* General Electric */}
        <div className="flex items-center space-x-6 w-full max-w-4xl">
            <div className="w-[160px] flex-shrink-0 flex justify-center">
                <img src="/img/general-electric-ge-logo.png" alt="General Electric Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
            </div>
            <Typography className="text-lg font-normal text-blue-gray-700">
                Over 90% of managers reported greater confidence in decision-making after implementing Glynac’s 
                streamlined reporting tools.
            </Typography>
        </div>

        {/* Broadcom */}
        <div className="flex items-center space-x-6 w-full max-w-4xl mx-auto">
            <div className="w-[160px] flex-shrink-0 flex justify-center">
                <img src="/img/broadcom.png" alt="Broadcom Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
            </div>
                <Typography className="text-lg font-normal text-blue-gray-700">
                    Within six months, Broadcom experienced an average 18% reduction in operational 
                    costs related to workforce inefficiencies.
                </Typography>
        </div>

        {/* Loom */}
        <div className="flex items-center space-x-6 w-full max-w-4xl mx-auto">
            <div className="w-[160px] flex-shrink-0 flex justify-center">
                <img src="/img/Loom.png" alt="Loom Logo" className="h-auto max-h-16 w-auto max-w-[160px] flex-shrink-0" />
            </div>
                <Typography className="text-lg font-normal text-blue-gray-700">
                    With Glynac’s expertise, loom achieved a 50% improvement 
                    in employee engagement scores, fostering stronger workplace communities.
                </Typography>
        </div>
    </div>
    </section>
    
      {/* Case Study Section */}
      <section className="max-w-5xl mx-auto mt-20 px-4 text-white text-left">
        <Typography variant="h2" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
          Case Study
        </Typography>
        <Typography variant="h3" className="text-2xl text-black font-semibold mt-2">
          A Major US-headquartered TNC
        </Typography>
      </section>

      {/* Summary Section */}
      <section className="max-w-5xl mx-auto mt-16 text-center text-white">
        <Typography variant="h3" className="text-2xl font-bold text-black">
          The below table contains a summary it generated within seconds.
        </Typography>
        <div className="flex justify-center mt-4">
          <PlayCircleIcon className="h-14 w-14 text-blue-400 hover:scale-110 transition-transform" />
        </div>
      </section>

      {/* Graph & Insights Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4 flex flex-col md:flex-row items-center justify-between">
        <Typography className="text-lg font-semibold text-black max-w-lg">
            With a strong history of notable corporate clients, Glynac has been trusted by industry leaders to help 
            analyze and streamline their employee analytics, improving efficiency and helping foster stronger working 
            communities. 
        </Typography>

        {/* Line Graph */}
        <div className="w-full md:w-[50%] h-64 mt-8 md:mt-0">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                    { month: "Jan", efficiency: 60 },
                    { month: "Feb", efficiency: 65 },
                    { month: "Mar", efficiency: 70 },
                    { month: "Apr", efficiency: 72 },
                    { month: "May", efficiency: 75 },
                    { month: "Jun", efficiency: 78 },
                    { month: "Jul", efficiency: 80 },
                    { month: "Aug", efficiency: 83 },
                    { month: "Sep", efficiency: 85 },
                    { month: "Oct", efficiency: 88 },
                    { month: "Nov", efficiency: 90 },
                    { month: "Dec", efficiency: 92 },

                ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" padding={{left: 10, right:10}} />
                    <YAxis domain={[50, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </section>
    </>
  );
}
export default FAQ;