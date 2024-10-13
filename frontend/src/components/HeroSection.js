// src/components/HeroSection.js
import React from 'react';
import theme from '../styles/theme';

function HeroSection() {
    return (
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/api/placeholder/1200/400)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className={`${theme.fonts.heading} text-5xl font-bold mb-4`}>Welcome to GlamBook</h1>
                <p className="text-xl mb-8">Book your beauty appointments with ease</p>
                <button className={theme.buttons.primary}>Book Now</button>
            </div>
        </section>
    );
}

export default HeroSection;
