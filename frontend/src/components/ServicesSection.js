
// src/components/ServicesSection.js
import React from 'react';
import theme from '../styles/theme';

const services = [
    { name: 'Haircut', description: 'Professional haircut services', icon: '✂️' },
    { name: 'Manicure', description: 'Nail care and beautification', icon: '💅' },
    { name: 'Facial', description: 'Rejuvenating skin treatments', icon: '🧖‍♀️' },
];

function ServicesSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className={`${theme.fonts.heading} text-3xl font-bold text-center mb-12 ${theme.colors.text}`}>Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className={`${theme.fonts.heading} text-xl font-semibold mb-2 ${theme.colors.text}`}>{service.name}</h3>
                            <p className={`${theme.colors.text}`}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;