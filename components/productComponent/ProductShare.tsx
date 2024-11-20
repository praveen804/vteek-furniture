import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const ProductShare = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com",
      label: "Share on Instagram",
      icon: <FaInstagram size={24} className="text-pink-500" />,
    },
    {
      href: "https://www.facebook.com",
      label: "Share on Facebook",
      icon: <FaFacebook size={24} className="text-blue-600" />,
    },
    {
      href: "https://www.twitter.com",
      label: "Share on Twitter",
      icon: <FaTwitter size={24} className="text-blue-400" />,
    },
    {
      href: "https://www.youtube.com",
      label: "Share on YouTube",
      icon: <FaYoutube size={24} className="text-red-600" />,
    },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-500 font-medium">Share:</span>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className=" transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default ProductShare;
