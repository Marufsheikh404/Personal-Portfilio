
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import Typewriter from "typewriter-effect";

const Header = () => {
    const menuItems = [
        { icon: "fa-house", text: "Home", path: "/" },
        { icon: "fa-image", text: "About", path: "/about" },
        { icon: "fa-layer-group", text: "Portfolio", path: "/portfolio" },
        { icon: "fa-briefcase", text: "Resume", path: "/resume" },
        { icon: "fa-comment", text: "Contact", path: "/contact" },
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 bg-[#0a0a0a] min-h-screen">
            {/* Left Sidebar */}
            <div className="flex flex-col justify-between items-center bg-[#141414] w-full lg:w-80 h-auto lg:h-[560px] p-5 rounded-2xl shadow-xl">
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
                    <h3 className="text-white text-sm mb-3">Find With Me</h3>
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
                    <h3 className="font-semibold text-xl text-white mb-2">Hello 👋</h3>
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-relaxed">
                        I’m <span className="text-[#FF014F]"><Typewriter
                            options={{
                                strings: ['Maruf Sheikh', 'Full-Stack-Developer', 'Crezy Leaner'],
                                autoStart: true,
                                loop: true,
                            }}
                        >
                        </Typewriter></span><br />
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
    );
};

export default Header;
