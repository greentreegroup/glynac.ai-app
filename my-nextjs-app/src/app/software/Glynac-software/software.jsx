"use client";

import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const softwareContent = {
  "cloud-vs-on-premise": {
    title: "Cloud vs. On-Premise Solutions",
    description: "Choosing between cloud-based and on-premise solutions depends on your business needs. Below is a comparison to help you decide:",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What is Cloud Computing",
        text: "Cloud computing delivers computing services—such as storage, databases, networking, and software—over the internet, allowing businesses to scale quickly without maintaining physical infrastructure."
      },
      {
        heading: "What is On-Premise Computing?",
        text: "On-premise solutions require businesses to host software and infrastructure on their own servers, giving them full control over security, compliance, and performance."
      }
    ],
    prosAndCons: {
      cloud: {
        title: "Advantages of Cloud Solutions",
        pros: [
          "Lower upfront costs (subscription-based pricing).",
          "Scalable resources that grow with your business.",
          "Remote accessibility from any location.",
          "Automatic updates and maintenance handled by providers."
        ],
        cons: [
          "Requires an internet connection to access services.",
          "Data security is managed by a third party.",
          "Subscription costs may add up over time."
        ]
      },
      onPremise: {
        title: "Advantages of On-Premise Solutions",
        pros: [
          "Greater control over security and compliance.",
          "One-time investment with no recurring subscription fees.",
          "Better performance for high-demand local applications.",
          "No reliance on internet connectivity for operation."
        ],
        cons: [
          "Higher upfront hardware and maintenance costs.",
          "Requires in-house IT expertise.",
          "Limited scalability compared to cloud solutions."
        ]
      }
    },
    comparisonTable: {
      headers: ["Feature", "Cloud-Based", "On-Premise"],
      rows: [
        ["Upfront Cost", "Low (Subscription)", "High (One-Time)"],
        ["Scalability", "Highly Scalable", "Limited by Hardware"],
        ["Maintenance", "Managed by Provider", "Managed by IT Team"],
        ["Security", "Provider-Managed", "Fully Controlled by Business"],
        ["Internet Dependency", "Required", "Not Required"]
      ]
    },
    useCases: [
      {
        title: "When to Choose Cloud?",
        points: [
          "Startups and small businesses needing cost-effective solutions.",
          "Companies with remote teams requiring access from anywhere.",
          "Organizations that want automatic software updates."
        ]
      },
      {
        title: "When to Choose On-Premise",
        points: [
          "Businesses with strict data security and compliance needs.",
          "Companies requiring full control over IT infrastructure.",
          "Organizations handling sensitive or confidential information."
        ]
      }
    ]
  },
  "integrated-tools": {
    title: "Integrated Tools",
    description: "Discover software that seamlessly integrates with your existing business systems.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Integrated Tools?",
        text: "Integrated tools are software solutions designed to work seamlessly with your existing business applications, ensuring smooth workflow automation and improved efficiency."
      },
      {
        heading: "Why Use Integrated Tools?",
        text: "Using integrated tools reduces manual data entry, enhances communication between departments, and allows businesses to scale more effectively."
      }
    ],
    prosAndCons: {
      pros: [
        "Improves workflow efficiency by automating tasks.",
        "Reduces errors caused by manual data entry.",
        "Enhances collaboration between different software tools.",
        "Allows businesses to scale without major system overhauls."
      ],
      cons: [
        "Some integrations require additional setup and maintenance.",
        "Not all software supports seamless integration.",
        "Security concerns when connecting third-party applications."
      ]
    },
    commonExamples: [
      {
        category: "Customer Relationship Management (CRM)",
        description: "Tools like Salesforce and HubSpot integrate with email, calendars, and marketing automation."
      },
      {
        category: "Enterprise Resource Planning (ERP)",
        description: "Software like SAP and Oracle integrates finance, HR, and operations into one system."
      },
      {
        category: "Communication Platforms",
        description: "Slack, Microsoft Teams, and Zoom integrate with project management and file-sharing tools."
      },
      {
        category: "E-Commerce Platforms",
        description: "Shopify and WooCommerce integrate with inventory management and payment gateways."
      }
    ],
    comparisonTable: {
      headers: ["Feature", "Integrated Tools", "Standalone Software"],
      rows: [
        ["Workflow Automation", "Yes", "Limited"],
        ["Data Sync Across Apps", "Yes", "No"],
        ["Scalability", "High", "Moderate"],
        ["Collaboration Features", "Yes", "Basic"],
        ["Custom Integrations", "Available", "Rare"]
      ]
    },
    useCases: [
      {
        title: "When to Use Integrated Tools?",
        points: [
          "When managing multiple applications that need to share data.",
          "For businesses looking to improve automation and reduce manual tasks.",
          "When teams need seamless communication between different software tools."
        ]
      },
      {
        title: "When to Avoid Integrated Tools?",
        points: [
          "If your business operates independently with minimal software dependencies.",
          "If security and data privacy concerns prevent third-party integration.",
          "When cost of integration outweighs the benefits for small operations."
        ]
      }
    ]
  },
  "communication-tools": {
    title: "Communication Tools",
    description: "Explore top communication tools designed to improve collaboration and productivity.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Communication Tools?",
        text: "Communication tools enable teams to collaborate efficiently, share information in real-time, and streamline workflow through various digital channels."
      }
    ],
    prosAndCons: {
      pros: [
        "Enhance team collaboration and productivity.",
        "Allows for real-time communication regardless of location.",
        "Reduces email clutter by offering instant messaging alternatives.",
        "Supports video conferencing and file sharing."
      ],
      cons: [
        "Some tools require training for effective use.",
        "Security concerns when sharing sensitive information.",
        "Can lead to communication overload if not managed properly."
      ]
    },
    commonExamples: [
      {
        category: "Instant Messaging",
        description: "Platforms like Slack, Microsoft Teams, and Discord provide real-time chat capabilities for teams."
      },
      {
        category: "Video Conferencing",
        description: "Zoom, Google Meet, and Microsoft Teams allow face-to-face virtual meetings for remote teams."
      },
      {
        category: "Project Collaboration",
        description: "Tools like Asana, Trello, and Monday.com integrate communication with task management."
      },
      {
        category: "Email and Business Communication",
        description: "Gmail, Outlook, and ProtonMail provide secure business communication."
      }
    ],
    comparisonTable: {
      headers: ["Feature", "Slack", "Zoom", "Google Meet"],
      rows: [
        ["Instant Messaging", "Yes", "No", "No"],
        ["Video Conferencing", "No", "Yes", "Yes"],
        ["File Sharing", "Yes", "Yes", "Yes"],
        ["Screen Sharing", "Yes", "Yes", "Yes"],
        ["Integration with Other Apps", "Extensive", "Moderate", "Limited"]
      ]
    },
    useCases: [
      {
        title: "When to Use Communication Tools?",
        points: [
          "For remote teams needing seamless real-time collaboration.",
          "To reduce reliance on email for quick updates and discussions.",
          "For hosting virtual meetings and screen-sharing sessions.",
          "When managing projects across different teams and departments."
        ]
      },
      {
        title: "Best Practices for Using Communication Tools",
        points: [
          "Set clear communication guidelines to avoid overload.",
          "Use appropriate channels for different types of communication.",
          "Leverage integrations to enhance productivity.",
          "Ensure data security and encryption when using communication tools."
        ]
      }
    ]
  },
  "email-tools": {
    title: "Email Tools",
    description: "Find email management tools to enhance business efficiency and organization.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Email Tools?",
        text: "Email tools help businesses and individuals manage their emails efficiently by organizing messages, automating tasks, and enhancing communication security."
      },
      {
        heading: "Why Are Email Tools Important?",
        text: "With the overwhelming amount of emails professionals receive daily, email tools streamline inbox organization, improve response times, and reduce clutter."
      }
    ],
    prosAndCons: {
      pros: [
        "Automates email sorting and prioritization.",
        "Enhances security with encryption and spam filtering.",
        "Integrates with calendars and task management apps.",
        "Improves productivity with scheduling and templates."
      ],
      cons: [
        "Some tools require a learning curve to set up effectively.",
        "Premium features may come with additional costs.",
        "Email automation may sometimes misclassify important messages."
      ]
    },
    commonExamples: [
      {
        category: "Email Clients",
        description: "Popular options like Gmail, Outlook, and Thunderbird provide efficient email management and integration with other tools."
      },
      {
        category: "Email Marketing Platforms",
        description: "Tools like Mailchimp, HubSpot, and Constant Contact help businesses automate and track email campaigns."
      },
      {
        category: "Security & Encryption",
        description: "Services like ProtonMail, Tutanota, and Zoho Mail offer encrypted email solutions for privacy-conscious users."
      },
      {
        category: "Inbox Organization & Productivity",
        description: "Apps like Superhuman, SaneBox, and Boomerang help users manage their email workflow and reduce inbox overload."
      }
    ],
    comparisonTable: {
      headers: ["Features", "Gmail", "Outlook", "ProtonMail"],
      rows: [
        ["AI-Powered Email Sorting", "Yes", "Yes", "No"],
        ["End-to-End Encryption", "No", "No", "Yes"],
        ["Integrated Calendar", "Yes", "Yes", "No"],
        ["Custom Email Template", "Limited", "Yes", "No"],
        ["Advanced Spam Filtering", "Yes", "Yes", "Yes"]
      ]
    },
    useCases: [
      {
        title: "When to Use Email Tools?",
        points: [
          "For managing high volumes of daily emails efficiently.",
          "To automate email marketing campaigns and follow-ups.",
          "For businesses needing secure, encrypted email communication.",
          "To reduce spam and improve inbox organization."
        ]
      },
      {
        title: "Best Practices for Using Email Tools",
        points: [
          "Use filters and labels to automatically categorize emails.",
          "Enable two-factor authentication for email security.",
          "Regularly clean up your inbox to maintain efficiency.",
          "Schedule emails for better time management."
        ]
      }
    ]
  }
};

export function Software() {
  const { category = "cloud-vs-on-premise" } = useParams();
  const content = softwareContent[category];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <div className="bg-gradient-to-b from-[#1E3A8A] to-[#E0F2FE] min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center text-center text-white pt-24 px-6 bg-[#1E3A8A]/90 backdrop-blur-lg"
      >
        <Typography
          variant="h1"
          className="mb-6 font-extrabold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] tracking-wide uppercase drop-shadow-lg"
        >
          Software Solutions
        </Typography>
        <Typography
          variant="lead"
          className="max-w-3xl text-lg md:text-xl lg:text-2xl text-white font-light tracking-wider opacity-90"
        >
          Discover cutting-edge software tools that enhance efficiency, collaboration, and productivity for modern businesses.
        </Typography>
      </motion.div>

      {/* Dynamic Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto flex flex-col lg:flex-row items-center gap-12 p-8 -mt-20"
      >
        {/* Left Side - Text Content */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-left">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A8A] tracking-tight"
          >
            {content.title || "No Title Available"}
          </Typography>
          <Typography className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            {content.description || "No description available"}
          </Typography>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 flex justify-center"
          whileHover={hoverEffect}
        >
          {content?.image && (
            <motion.img
              src={content.image}
              alt="Software Visual"
              className="w-full h-auto rounded-xl shadow-2xl border border-[#3B82F6]/30 transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Additional Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto p-8 flex flex-col items-center text-center"
      >
        {content && (
          <>
            {/* Icons and Labels Section */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-12 py-12"
            >
              {[
                { img: "/img/i'm_watching_you.png", text: "Employee Monitoring" },
                { img: "/img/timer_icon.png", text: "Work Time Tracking" },
                { img: "/img/stats_icon.png", text: "Remote Access & Stats" },
                { img: "/img/list_icon.png", text: "Monitoring Guide" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center w-1/5 min-w-[150px]"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.text}
                    className="w-20 h-20 mb-4 rounded-full shadow-lg border border-[#3B82F6]/40"
                  />
                  <Typography className="text-lg font-bold text-[#1E3A8A]">{item.text}</Typography>
                </motion.div>
              ))}
            </motion.div>

            {/* Details Section */}
            {content.details && (
              <motion.div variants={itemVariants} className="mt-12 max-w-4xl">
                {content.details.map((section, index) => (
                  <motion.div key={index} variants={itemVariants} className="mb-8">
                    <Typography variant="h3" className="text-3xl font-bold text-[#1E3A8A] mb-4">
                      {section.heading}
                    </Typography>
                    <Typography className="text-lg text-[#64748B] leading-loose">
                      {section.text}
                    </Typography>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Pros and Cons Section */}
            {content.prosAndCons && (
              <motion.div variants={itemVariants} className="mt-12 max-w-5xl">
                {content.prosAndCons.cloud && (
                  <div className="mb-10">
                    <Typography variant="h3" className="text-3xl font-bold text-[#1E3A8A] mb-4">
                      {content.prosAndCons.cloud.title}
                    </Typography>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#64748B] text-lg">
                      {content.prosAndCons.cloud.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#3B82F6]">✔</span> {pro}
                        </li>
                      ))}
                      {content.prosAndCons.cloud.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500">✘</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.prosAndCons.onPremise && (
                  <div>
                    <Typography variant="h3" className="text-3xl font-bold text-[#1E3A8A] mb-4">
                      {content.prosAndCons.onPremise.title}
                    </Typography>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#64748B] text-lg">
                      {content.prosAndCons.onPremise.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#3B82F6]">✔</span> {pro}
                        </li>
                      ))}
                      {content.prosAndCons.onPremise.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500">✘</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}

            {/* Comparison Table */}
            {content.comparisonTable && (
              <motion.div variants={itemVariants} className="mt-12 max-w-5xl w-full">
                <Typography variant="h3" className="text-3xl font-bold text-[#1E3A8A] mb-6 text-center">
                  Feature Comparison
                </Typography>
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1E3A8A] text-white">
                        {content.comparisonTable.headers.map((header, index) => (
                          <th
                            key={index}
                            className="px-6 py-4 font-semibold text-base uppercase tracking-wider border-b border-[#3B82F6]/50"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.comparisonTable.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={`${
                            rowIndex % 2 === 0 ? "bg-white" : "bg-[#F7FAFC]"
                          } hover:bg-[#3B82F6]/10 transition-colors`}
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-6 py-4 text-[#64748B] text-base border-b border-[#E5E7EB]"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Use Cases Section */}
            {content.useCases && (
              <motion.div variants={itemVariants} className="mt-12 max-w-4xl">
                {content.useCases.map((useCase, index) => (
                  <motion.div key={index} variants={itemVariants} className="mb-10">
                    <Typography variant="h3" className="text-3xl font-bold text-[#1E3A8A] mb-4">
                      {useCase.title}
                    </Typography>
                    <ul className="list-none text-lg text-[#64748B] space-y-3">
                      {useCase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#3B82F6] font-bold">→</span> {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Software;