import React from "react";
import ExploreProperty from "../components/ExploreProperty";
import Values from "../components/Values";
import OurBuilders from "../components/OurBuilders";
import Testimonials from "../components/Testimonail";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            {/* Header Image section */}
            <section
                className="relative w-full lg:h-[600px] h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('https://gurujihomes.in/Home.webp')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
                    <span className="text-sm tracking-[0.3em] mb-4 sm:mb-6">
                        Find, Love, Move In
                    </span>

                    <h1 className="max-w-6xl mb-6 sm:mb-8 text-4xl font-bold md:text-6xl">
                        GURUJI HOMES
                    </h1>

                    <p className="text-lg md:text-lg max-w-3xl mb-8 sm:mb-12 text-gray-200 lg:leading-[2.5rem]">
                        Invest in Your Future. Live Your Dream
                    </p>

                    <a className="cursor-pointer px-8 py-2.5 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                        EXPLORE IT
                    </a>
                </div>
            </section>

            {/* About Section */}
            <div className="mt-16 max-w-7xl mx-auto px-8 lg: px-0">
                <div className="flex flex-col md:flex-row items-center gap-20">

                    {/* Left side */}
                    <div
                        className="w-[380px] md:h-[420px] bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: "url('https://gurujihomes.in/About.jpg')" }}
                    >
                        {/* White Card */}
                        <div className="relative z-10 flex-col h-full lg:mt-5 lg:h-[90%] w-full lg:w-[90%] lg:ml-5 bg-white p-6 md:p-8 lg:p-12 mix-blend-lighten flex items-center justify-center">

                            {/* 14 */}
                            <span
                                className="text-[80px] md:text-[120px] lg:text-[160px] font-bold font-sans leading-none text-[#1a365d]"
                            >
                                14
                            </span>

                            {/* YEARS OF EXPERIENCE */}
                            <span
                                className="mt-4 text-sm md:text-base lg:text-xl uppercase tracking-[0.1em] text-[#1a365d] text-wrap"
                            >
                                YEARS OF EXPERIENCE
                            </span>
                        </div>
                    </div>

                    <div className="flex-col lg:w-1/2">
                        <h3 className="text-gray-600 mb-4 text-xs tracking-wider md:text-sm">ABOUT US</h3>
                        <h2 className="mb-6 text-2xl  font-bold leading-tight md:mb-8 md:text-4xl md:text-5xl">Unlocking Doors to Your Dream Home</h2>

                        <div>
                            <p className="text-gray-600 leading-7 mb-8">
                                At Guruji Homes, we take a client-centered approach, focused on transparency, integrity, and customer satisfaction. We understand that a home is not just a place—it’s a reflection of who you are, and we’re committed to helping you find the perfect fit.
                            </p>
                            <p className="text-gray-600 leading-7 mb-12">
                                Let Guruji Homes guide you toward your next real estate success.
                                Your dream home is waiting!
                            </p>
                        </div>

                        {/* STATS */}
                        <div className="flex gap-16 mb-10">
                            <div>
                                <h3 className="text-3xl font-bold text-[#1a365d]">500+</h3>
                                <p className="text-gray-600">Happy Customers</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#1a365d]">1000+</h3>
                                <p className="text-gray-600">Successful Sales</p>
                            </div>
                        </div>

                        <button className="px-8 py-2 border border-black hover:bg-black hover:text-white transition">
                            EXPLORE IT
                        </button>
                    </div>
                </div>
            </div>

            {/* Explore Projects */}
            <section className="mt-20 bg-gray-100 py-8 pb-12">

                {/* Top Title Area */}
                <div className="px-6 mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Explore Projects
                    </h2>
                </div>

                {/* Image Section */}
                <div
                    className="relative h-[650px] bg-cover bg-center flex items-center justify-center shadow-lg"
                    style={{
                        backgroundImage:
                            "url('https://node.gurujihomes.in/uploads/types/1743665745452-P-1.jpg')",
                    }}
                >

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Gradient bottom gray effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-50 opacity-50"></div>

                    {/* Center Content */}
                    <div className="relative z-10 text-center text-white px-4">

                        <h3 className="text-3xl md:text-5xl font-bold mb-4">
                            Residential
                        </h3>

                        <p className="text-lg text-gray-200 mb-6">
                            Explore our residential offerings
                        </p>

                        <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                            Learn More
                        </button>

                    </div>
                </div>

            </section>

            {/* Explore Properties */}
            <ExploreProperty />

            {/* Values Section */}
            <Values />

            {/* Our Builders */}
            <OurBuilders />

            {/* Testimonials */}
            <Testimonials />

        </div >
    );
};

export default Home;