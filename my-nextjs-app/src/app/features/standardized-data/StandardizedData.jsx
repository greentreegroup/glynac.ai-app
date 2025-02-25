"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from 'react';
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

export function StandardizedData() {
  const canvasRef = useRef(null);
  const emailCanvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

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
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > width) particle.x = 0;
        if (particle.x < 0) particle.x = width;
        if (particle.y > height) particle.y = 0;
        if (particle.y < 0) particle.y = height;

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

  useEffect(() => {
    const emailCanvas = emailCanvasRef.current;
    const ctx = emailCanvas.getContext('2d');

    const width = emailCanvas.width = emailCanvas.clientWidth;
    const height = emailCanvas.height = emailCanvas.clientHeight;

    const numSymbols = 50;
    const symbols = ['📧', '💡', '🤖', '📊', '✉️'];
    const particles = [];

    for (let i = 0; i < numSymbols; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = '20px Arial';
      ctx.fillStyle = 'rgba(230, 217, 217, 0.8)';

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > width) particle.x = 0;
        if (particle.x < 0) particle.x = width;
        if (particle.y > height) particle.y = 0;
        if (particle.y < 0) particle.y = height;

        ctx.fillText(particle.symbol, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animate);
  }, []);

  const tabs = [
    { title: "Responsiveness", content: "Diana’s consistent communication and reminders suggest that she is proactive and responsive." },
    { title: "Volume and Frequency", content: "Diana sent 10 emails between January 21 and February 2, averaging 1-2 per day, demonstrating consistent communication." },
    { title: "Positive vs. Complaint Language", content: "Most emails have a neutral tone, focusing on factual updates, while messages about team-building events have a slightly positive undertone." },
    { title: "Inactivity", content: "No indication of inactivity, as her emails were consistently sent over the given timeframe." },
    { title: "Management, Ownership & Pay Complaints", content: "No evidence of discussions about leadership, company direction, or pay-related complaints." },
    { title: "Professionalism & Action-Oriented Language", content: "Diana’s emails are concise, professional, and solution-focused, ensuring clarity without unnecessary details." },
    {
      title: "Key Themes and Topics",
      content: (
        <ul className="list-none pl-5">
          <li><i className="fas fa-check-circle mr-2"></i><strong>Facilitating Meetings (30%)</strong> – Organizing and coordinating meetings, particularly for Chicago-based clients, ensuring smooth communication and alignment.</li>
          <li><i className="fas fa-check-circle mr-2"></i><strong>Presentation Preparation (20%)</strong> – Emails related to preparing and refining presentations, including gathering materials, structuring content, and finalizing key talking points.</li>
          <li><i className="fas fa-check-circle mr-2"></i><strong>Sales Pricing Discussions (20%)</strong> – Discussions surrounding sales pricing, including negotiations, adjustments, and client queries.</li>
          <li><i className="fas fa-check-circle mr-2"></i><strong>Scheduling Internal Meetings (15%)</strong> – Coordinating internal team meetings, ensuring all necessary participants are available, and setting clear agendas for discussions.</li>
          <li><i className="fas fa-check-circle mr-2"></i><strong>General Team Communication (15%)</strong> – Covering a range of topics such as project updates, task assignments, and reminders, maintaining consistent and structured communication.</li>
        </ul>
      ),
    }
  ];

  return (
    <div className="font-sans">
      <div className="relative flex h-72 content-center items-center justify-center overflow-hidden bg-gray-900">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/20 to-pink-500/10 backdrop-blur-xl"></div>
        <div className="container mx-auto text-center z-10 relative">
          <Typography variant="h1" className="mb-4 font-black text-5xl text-white drop-shadow-lg">
            Standardized Data Analysis
          </Typography>
          <Typography variant="lead" className="text-xl text-white mb-8">
            Unlock meaningful insights with our AI-powered data standardization tools.
          </Typography>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        <Typography variant="h2" className="text-3xl font-bold text-center mb-12 text-gray-700">
          Key Features
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center">
              <div className="text-red-500 text-4xl mb-4">📊</div>
              <Typography variant="h5" className="text-gray-900 font-bold mb-2">
                Data Filtering
              </Typography>
              <Typography variant="paragraph" className="text-gray-800">
                Filters out irrelevant data to focus on meaningful insights.
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center">
              <div className="text-blue-500 text-4xl mb-4">🔒</div>
              <Typography variant="h5" className="text-gray-900 font-bold mb-2">
                Privacy Protection
              </Typography>
              <Typography variant="paragraph" className="text-gray-800">
                Maintains privacy by removing personally identifiable information.
              </Typography>
            </CardBody>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center">
              <div className="text-blue-500 text-4xl mb-4">🤖</div>
              <Typography variant="h5" className="text-gray-900 font-bold mb-2">
                AI Integration
              </Typography>
              <Typography variant="paragraph" className="text-gray-800">
                Prepares structured data sets for AI-driven analysis.
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="mt-16 relative overflow-hidden rounded-lg bg-gray-900 p-8">
          <canvas ref={emailCanvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50"></canvas>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <Typography variant="h2" className="text-3xl font-bold text-center mb-12 text-white">
              Summary of Emails Sent by Diana Prince
            </Typography>
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab, index) => (
                <Button
                  key={index}
                  color={activeTab === index ? "blue" : "grey"}
                  className={`w-35 h-12 text-xs p-2 transition-all ${
                    activeTab === index ? "bg-blue-900" : "bg-gray-800"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </Button>
              ))}
            </div>
            <Card className="shadow-lg bg-white/10 backdrop-blur-sm">
              <CardBody>
                <Typography variant="paragraph" className="text-white">
                  {tabs[activeTab].content}
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="container mx-auto px-8 py-16">
          <div className="flex items-center justify-between mb-16">
            <div className="w-full md:w-1/2 text-left mr-20">
              <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-9">
                Standardization
              </Typography>
              <Typography variant="paragraph" className="text-gray-800 mb-4">
                Our patented analysis formulas synthesize key categories and data into standardized scores on a scale of 1 to 100. Standardization allows an employee to be compared to other employees in the department with similar demographic data to find:
              </Typography>
              <ul className="text-gray-800 pl-5">
                <li>1) Untapped potential</li>
                <li>2) Retention concerns</li>
                <li>3) Performance challenges</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/img/standarization1.png" alt="Standardization Illustration" className="w-70 h-auto rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 w-full px-8 py-16">
          <div className="text-center mb-16">
            <Typography variant="h1" className="text-4xl font-bold text-gray-900 mb-4">
              Client’s Cases: Visualized Reports
            </Typography>
            <Typography variant="paragraph" className="text-lg text-gray-700">
              The AI Platform generates detailed reports to analyze communication patterns across various dimensions. Key examples from client cases include:
            </Typography>
          </div>

          <div className="flex items-center space-x-4 mb-16">
            <div className="text-4xl text-gray-500">📊</div>
            <Typography variant="h2" className="text-2xl font-semibold text-gray-800">
              Employee Reports
            </Typography>
          </div>

          <div className="space-y-16">
            <div>
              <Typography variant="h5" className="text-xl font-semibold text-gray-800">
                Activity Volume Report
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Purpose: Show activity levels by time block and day.
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Visualization: Via bar graph.
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Insights:
                <ul className="list-disc pl-5 mt-2">
                  <li>Identify the time blocks with the least activity (inactivity) and those with the most activity.</li>
                  <li>Compare these periods to the overall average activity to determine if they are significantly lower or higher.</li>
                </ul>
              </Typography>
            </div>

            <div>
              <Typography variant="h5" className="text-xl font-semibold text-gray-800">
                Inactivity Benchmarking Report
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Purpose: Compare individual or team inactivity periods to peer or organizational benchmarks.
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Visualization: Bar chart showing inactivity (lowest activity time blocks) vs. peer averages.
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Insights:
                <ul className="list-disc pl-5 mt-2">
                  <li>Determine if inactivity periods are normal or outliers compared to peers.</li>
                  <li>Identify if certain individuals or teams have unusual inactivity patterns.</li>
                </ul>
              </Typography>
            </div>

            <div>
              <Typography variant="h5" className="text-xl font-semibold text-gray-800">
                Activity-Inactivity Trend Report
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Purpose: Analyze trends in activity and inactivity over time (e.g., weeks or months).
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Visualization: Time-series graphs showing activity trends. Highlight recurring inactivity periods and any changes over time.
              </Typography>
            </div>

            <div className="flex items-center space-x-4 mb-16">
              <div className="text-4xl text-gray-500">👩‍🦱</div>
              <Typography variant="h2" className="text-2xl font-semibold text-gray-800">
                Demographic Report
              </Typography>
            </div>

            <div>
              <Typography variant="h5" className="text-xl font-semibold text-gray-800">
                Female vs. Male
              </Typography>
              <Typography variant="paragraph" className="text-gray-700 mb-4">
                Purpose: Compares response volume and pay-related communication trends.
              </Typography>
            </div>

            <div className="flex items-center space-x-4 mb-16">
              <div className="text-4xl text-gray-500">👨‍💼</div>
              <Typography variant="h2" className="text-2xl font-semibold text-gray-800">
                Manager Performance Report
              </Typography>
            </div>

            <div className="flex items-center space-x-4 mb-16">
              <div className="text-4xl text-gray-500">🔧</div>
              <Typography variant="h2" className="text-2xl font-semibold text-gray-800">
                Tool and Integration Report
              </Typography>
            </div>
          </div>
        </div>

        <div className="bg-white w-full px-8 py-16">
          <div className="text-center mb-16">
            <Typography variant="h1" className="text-4xl font-bold text-gray-900 mb-4">
              Areas of Opportunity
            </Typography>
            <Typography variant="paragraph" className="text-lg text-gray-700">
              Unlocking potential through data-driven insights into Retention, Untapped Talent, and Performance.
            </Typography>
          </div>

          <div className="mb-12">
            <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
              1) Retention
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Glynac in Numbers
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Employee Turnover Trends</li>
                  <li>Key Factors Influencing Retention</li>
                  <li>Predictive AI Models</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Charts & Insights
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Shows historical trends in employee departures</li>
                  <li>Categorize employees leaving by length of employment</li>
                  <li>Identify common themes behind resignation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
              2) Untapped Talent
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Glynac in Numbers
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Pay Disparities & Underutilized Employees</li>
                  <li>Potential for Promotion</li>
                  <li>Skill Alignment vs. Job Role</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Charts & Insights
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Correlate pay levels with performance ratings</li>
                  <li>Analyze whether higher-paid employees are delivering expected output</li>
                  <li>Flag employees who should be upskilled for better roles</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
              3) Performance Drags
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Glynac in Numbers
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Identifying Underperforming Teams & Individuals</li>
                  <li>Correlation Between Training & Performance</li>
                  <li>Actionable Steps to Improve Workforce Efficiency</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4" className="text-2xl font-semibold text-gray-800 mb-4">
                  Charts & Insights
                </Typography>
                <ul className="list-disc pl-5">
                  <li>Flag employees consistently underperforming</li>
                  <li>Compare training participation with measurable performance improvements</li>
                  <li>Analyze work habits and inefficiencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default StandardizedData;