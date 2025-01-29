import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = ({ darkMode }) => {
    return (
        <div
            className={`${
                darkMode ? "bg-gradient-to-b from-gray-800 to-black" : "bg-gradient-to-b from-violet-50 to-violet-100"
            } transition duration-300 py-10 h-screen`}>
            <section className="h-full  flex items-center">
                <div className="px-4 mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="grid items-center grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 w-full">
                        {/* Text Section */}
                        <div>
                            <h1
                                className={`text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                                    darkMode ? "text-white" : "text-violet-900"
                                }`}
                            >
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span
                                        className={`absolute inset-x-0 bottom-0 ${
                                            darkMode ? "border-yellow-400" : "border-violet-600[#4ADE80]"
                                        } border-b-[12px] sm:border-b-[20px] md:border-b-[30px]`}></span>
                                    <span
                                        className={`relative ${
                                            darkMode ? "text-white" : "text-black"
                                        }`}
                                    >
                                        Vision 881
                                    </span>
                                </div>
                            </h1>

                            <p
                                className={`mt-4 text-sm sm:mt-6 sm:text-lg lg:text-xl leading-relaxed ${
                                    darkMode ? "text-gray-300" : "text-black"
                                }`}
                            >
                               
                               Precision in Edits, Power in Gameplay. 🎬🎮
                            </p>

                            <p
                                className={`mt-4 text-sm sm:mt-6 sm:text-lg lg:text-xl leading-relaxed ${
                                    darkMode ? "text-gray-300" : "text-black"
                                }`}
                            >
                            
                            "From cinematic cuts to clutch moments, I craft smooth transitions and epic highlights.
                            Every frame tells a story, and every game is a masterpiece in motion.
                            Join me on this journey of creativity and skill—where gaming meets perfection"
                            </p>
                            <p
                                className={`mt-4 text-sm sm:mt-6 sm:text-lg lg:text-xl leading-relaxed ${
                                    darkMode ? "text-gray-300" : "text-black"
                                }`}
                            >
                               
                               Let me know if you want any tweaks! 🚀🔥
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                                <a
                                    href="#"
                                    title=""
                                    className={`inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-200 ${
                                        darkMode
                                            ? "text-black bg-yellow-400 hover:bg-yellow-500"
                                            : "text-white bg-violet-400 hover:bg-violet-600"
                                    } focus:outline-none`}
                                    role="button"
                                >
                                    Start Editing
                                </a>

                                <a
                                    href="https://youtu.be/ut5Rlla81O8?si=rFCUvFZPPI7FBro6"
                                    title=""
                                    className="inline-flex items-center mt-4 text-sm sm:mt-0 sm:text-base 
                                    font-semibold transition-all duration-200 hover:opacity-80 text-black dark:text-white"
                                >
                                    <AiOutlinePlayCircle
                                        className={`w-8 h-8 sm:w-10 sm:h-10 mr-2 ${
                                            darkMode ? "text-violet-400" : "text-yellow-500"
                                        }`}
                                    />
                                    Watch My First Edited Video
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}

                    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full mx-auto">
                         <iframe 
                       className="w-full h-64 sm:h-80 md:h-96" 
                     src="https://www.youtube.com/embed/Uev_S7_xUPc" 
                     title="YouTube Video" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen>
                      </iframe>
                    </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
