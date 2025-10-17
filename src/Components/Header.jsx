import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import Typewriter from "typewriter-effect";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Header = () => {
    const textRef = useRef();

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    useEffect(() => {
        const textElement = textRef.current;
        const chars = textElement.textContent.split("");
        textElement.textContent = "";

        chars.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            textElement.appendChild(span);
        });

        gsap.fromTo(
            textElement.children,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.10,
                stagger: 0.10,
                ease: "power3.out",
                onComplete: handleAnimationComplete,
            }
        );
    }, []);

    const menuItems = [
        { icon: "fa-house", text: "Home", path: "/" },
        { icon: "fa-image", text: "About", path: "/about" },
        { icon: "fa-layer-group", text: "Portfolio", path: "/portfolio" },
        { icon: "fa-briefcase", text: "Resume", path: "/resume" },
        { icon: "fa-comment", text: "Contact", path: "/contact" },
    ];

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 bg-[#0a0a0a] min-h-screen">
                {/* Left Sidebar */}
                <div className="flex flex-col justify-between items-center bg-[#1d0808] w-full lg:w-80 h-auto lg:h-[560px] p-5 rounded-2xl shadow-xl">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center">
                        <img
                            className="w-32 mb-3 rounded-full p-1 border border-gray-600 bg-gray-800 object-cover hover:scale-105 transition-transform duration-300"
                            src={profile}
                            alt="Profile"
                        />
                        <h2 className="text-white text-lg font-semibold">Maruf Sheikh</h2>
                        <p className="text-sm text-gray-400">Full-Stack Developer</p>
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-4 w-full mt-5">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-all hover:bg-[#d31010] hover:translate-x-1"
                            >
                                <i className={`fa-solid ${item.icon} text-[#FF014F]`}></i>
                                <p className="text-white text-sm">{item.text}</p>
                            </Link>
                        ))}
                    </div>

                    <hr className="border-gray-600 w-full my-4" />

                    {/* Social Icons */}
                    <div className="text-center">
                        <h3 className="text-white text-lg mb-3 flex items-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/maruf-sheikh-699522351"
                                className="transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180"
                            >
                                <TbBrandLinkedin />
                            </a>
                            <a
                                href="#"
                                className="transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                href="#"
                                className="transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180"
                            >
                                <PiFacebookLogoBold />
                            </a>
                        </h3>
                        <div className="flex gap-4 justify-center">
                            {["facebook", "twitter", "instagram", "linkedin"].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-white text-lg transition-transform duration-300 hover:text-[#FF014F] hover:scale-125 cursor-pointer"
                                >
                                    <i className={`fa-brands fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between bg-[#060606] p-6 rounded-2xl shadow-xl w-full">
                    {/* Text Section */}
                    <div className="text-center lg:text-left flex-1">
                        <h3
                            ref={textRef}
                            className="text-2xl font-semibold  text-white mb-2"
                        >
                            Hello 👋
                        </h3>

                        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-relaxed">
                            I’m{" "}
                            <span className="text-[#FF014F]">
                                <Typewriter
                                    options={{
                                        strings: ["Maruf Sheikh", "Full-Stack-Developer", "Crezy Learner"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                            <br />
                        </h1>
                        <p className="text-gray-400 text-sm  max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            A passionate MERN Stack Developer crafting responsive, secure, and scalable web experiences using React, Node.js, Express, MongoDB, Firebase, and Tailwind CSS.
                        </p>
                        <div className="mt-5 flex justify-center lg:justify-start">
                            <button className="flex items-center gap-2 bg-[#FF014F] py-2 px-5 rounded-full text-white font-medium hover:bg-[#ff2d6a] hover:scale-105 transition-all duration-300">
                                View Portfolio <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex justify-center items-center mt-8 lg:mt-0">
                        <span className="absolute text-3xl sm:text-5xl font-bold text-gray-800 opacity-20 select-none">
                            Web Developer
                        </span>
                        <img
                            src={profile}
                            alt="Hero"
                            className="w-64 sm:w-80 lg:w-96 h-auto relative z-10 rounded-md drop-shadow-[0_0_10px_#FF014F]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
