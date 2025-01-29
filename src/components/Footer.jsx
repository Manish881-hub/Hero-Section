import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            console.log("Email Submitted:", email);
        }
    };

    return (
        <footer
        className={`transition-all relative ${isDarkMode
            ? "bg-gradient-to-b from-gray-800 to-black text-gray-300"
            : "bg-gradient-to-b from-violet-50 to-violet-100 text-gray-900"
        } py-8`}
    >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6
            md:space-y-0">
            {/* Left Section */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">Vision Creatives</h1>
                <p className="text-sm mt-2">
                    “Look into The Mirror Yeah, That's Your Competition”
                </p>
            </div>
    
            {/* Middle Section */}
            <div className="flex justify-center space-x-6 text-2xl">
                <a
                    href="https://www.instagram.com/manishbhakti._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.facebook.com/manish.bhakti.3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.youtube.com/@manishbhaktisagar1803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                >
                    <FaYoutube />
                </a>
                <a
                    href="mailto:manishbahkti881@gmail.com"
                    className="hover:text-green-500 transition-colors"
                >
                    <FaEnvelope />
                </a>
            </div>
    
            {/* Right Section */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`px-4 py-2 rounded-r-3xl w-full sm:w-auto focus:outline-none ${isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-900"
                    }`}
                    required
                />
                <button
                    type="submit"
                    className={`px-4 py-2 rounded-l-3xl w-full sm:w-auto transition-all ${isDarkMode
                        ? "bg-gray-800 hover:bg-gray-900 text-white"
                        : "bg-violet-600 hover:bg-violet-700 text-white"
                    }`}
                >
                    Submit
                </button>
            </form>
        </div>
    
        {/* Divider and Copyright */}
        <div className="mt-6 border-t pt-4 text-center">
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Copyright © 2025{" "}
                <br />
                <a
                  href="https://www.linkedin.com/in/manish-bhakti-sagar-823404234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-purple-800"
                   >
                   Created By Manish Bhakti Sagar
                </a>

            </p>
        </div>
    </footer>
    
    );
};

export default Footer;
