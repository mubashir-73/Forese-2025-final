"use client";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/forese/posts/?feedView=all",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ForeseTech",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/About" },
    { name: "Events", url: "/Event" },
    { name: "Team", url: "/Team" },
  ];

  const contactInfo = [
    { label: "Email", value: "forese@svce.ac.in", type: "email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-300 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">FORESE</h3>
            <p className="text-sm leading-relaxed">
             Preparing engineers for placements and higher education through mock, career workshops, and Foreign education fairs.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-center">
                  {info.type === "email" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )}
                  <a
                    href={
                      info.type === "email"
                        ? `mailto:${info.value}`
                        : info.value
                    }
                    className="text-sm hover:text-white transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location/Address (Optional) */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Location
            </h3>
            <p className="text-sm leading-relaxed">
              Post Bag No.1,Pennalur Village Chennai - Bangaluru High Road
              Sriperumbudur Tk, Tamil Nadu 602117{" "}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
          &copy; {year} FORESE. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
