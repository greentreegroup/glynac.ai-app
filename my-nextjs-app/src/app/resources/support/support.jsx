"use client";

import React, { useState } from "react";
import { Input, Textarea, Checkbox, Button, Typography } from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      fullName,
      email,
      message,
      termsAccepted,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
      <div className="mb-8 flex gap-8">
        <Input
          variant="outlined"
          size="lg"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="flex-1"
        />
        <Input
          variant="outlined"
          size="lg"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
      </div>
      <Textarea
        variant="outlined"
        size="lg"
        label="Message"
        rows={8}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 mb-4"
      />
      <Checkbox
        label={
          <Typography variant="small" color="gray" className="flex items-center font-normal">
            I agree to the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
        checked={termsAccepted}
        onChange={() => setTermsAccepted(!termsAccepted)}
      />
      <Button variant="gradient" size="lg" className="mt-8" fullWidth type="submit">
        Send Message
      </Button>
    </form>
  );
};

export function Support() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/photo-Black background.avif')", 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute text-white text-4xl lg:text-6xl font-bold text-center"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>Need Help?</h1>
      </div>

     
      <div
        className="absolute top-[calc(40%+4cm)] left-0 right-0 bg-white"
        style={{
          minHeight: "130vh", 
        }}
      >
        <div className="container px-6 py-12 flex justify-between">
          
          <div
            className="flex flex-col justify-between"
            style={{ width: 'auto', minWidth: '300px', maxWidth: '50%' }} 
          >
            <div className="ml-9 mb-6">
              
              <h2 className="text-3xl font-bold">We Are Always Here For You</h2>
              
              <p className="text-lg text-gray-700">
                Complete this form and we will get back to you in 24 hours.
              </p>
            </div>
            
            <div className="h-full flex-grow">
              <ContactForm />
            </div>
          </div>

          
          <div
            className="flex flex-col justify-between"
            style={{ width: 'auto', minWidth: '250px', maxWidth: '30%' }} 
          >
            
            <h3 className="text-xl font-bold mb-4">FAQ</h3>
            
            <p className="text-sm text-gray-700 mb-2">
              Have questions? Check out our comprehensive FAQ section where we have answered the most common questions related to our services, policies, and general inquiries. We encourage you to explore the answers to see if we have already addressed any of your concerns.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              If you cannot find the answer to your question, feel free to contact us directly by filling out the form on the left, and our team will respond to you as soon as possible.
            </p>
           
            <div className="mb-4">
              <img
                src="/img/Think.jfif"  
                alt="FAQ"
                className="w-full h-auto"
              />
            </div>
          
            <Button
              variant="filled"
              color="gray"
              className="mt-4 bg-gray-800 text white hover:bg-gray-700"
              onClick={() => window.location.href = "/"}  
            >
              Go to FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
