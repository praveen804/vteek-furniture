"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import AboutHero from "../AboutComponents/AboutHero";

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Send Us a Message
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        required
        rows={5}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

// Contact Information Component
const ContactInfo = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">
      Contact Information
    </h2>
    <div className="space-y-4">
      <p className="flex items-center text-gray-700">
        <FaPhone className="mr-3 text-pink-600" /> +123 456 7890
      </p>
      <p className="flex items-center text-gray-700">
        <FaEnvelope className="mr-3 text-pink-600" /> support@furnitureshop.com
      </p>
      <p className="flex items-center text-gray-700">
        <FaMapMarkerAlt className="mr-3 text-pink-600" /> 123 Furniture St,
        Design City
      </p>
    </div>
  </div>
);

// Social Links Component
const SocialLinks = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
    <div className="flex space-x-6">
      <Link href="#" className="hover:opacity-80 transition duration-300">
        <FaFacebook className="text-pink-600 text-3xl" />
      </Link>
      <Link href="#" className="hover:opacity-80 transition duration-300">
        <FaInstagram className="text-pink-600 text-3xl" />
      </Link>
      <Link href="#" className="hover:opacity-80 transition duration-300">
        <FaTwitter className="text-pink-400 text-3xl" />
      </Link>
      <Link href="#" className="hover:opacity-80 transition duration-300">
        <FaLinkedin className="text-pink-700 text-3xl" />
      </Link>
    </div>
  </div>
);

// Map Section Component
const MapSection = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h2>
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

// FAQ Section Component
const FAQSection = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">FAQs</h2>
    <div className="space-y-4">
      <details className="p-4 border rounded-lg">
        <summary className="cursor-pointer font-semibold text-gray-800">
          What is your return policy?
        </summary>
        <p className="mt-2 text-gray-700">
          We offer a 30-day return policy for unused furniture in original
          condition.
        </p>
      </details>
      <details className="p-4 border rounded-lg">
        <summary className="cursor-pointer font-semibold text-gray-800">
          Do you offer international shipping?
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, we ship worldwide with various delivery options.
        </p>
      </details>
    </div>
  </div>
);

// Main Contact Container
const ContactContainer = () => {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Main Content */}
      <div className="container mx-auto p-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Contact Form Section */}
        <div className="lg:col-span-2">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Contact Info and Social Links Section */}
        <div className="space-y-8">
          <div className="">
            <ContactInfo />
          </div>
          <div className="">
            <SocialLinks />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="lg:col-span-3">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <FAQSection />
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:col-span-3">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <MapSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
