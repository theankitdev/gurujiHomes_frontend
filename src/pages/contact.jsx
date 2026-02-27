import React from 'react'
import ContactSection from '../components/ContactSection'

const Contact = () => {
    return (
        <div>
            {/* Header Image section */}
            <section
                className="relative w-full lg:h-[600px] h-[60vh] bg-cover bg-center flex items-center justify-start"
                style={{ backgroundImage: "url('https://gurujihomes.in/about-2.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 bg-opacity-30 backdrop-blur-[2px]"></div>

                {/* Content */}
                <div className="relative z-10 text-white px-20">
                    <h1 className="max-w-6xl mb-8 text-4xl font-semibold md:text-5xl">
                        Contact
                    </h1>
                </div>
            </section>
            {/* Contact us */}
            <ContactSection />
        </div>
    )
}

export default Contact
