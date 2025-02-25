"use client";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Glynac.ai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;