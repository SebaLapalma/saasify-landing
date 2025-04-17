"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className='bg-white py-24'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12'>
                {/* Texto */}
                <motion.div
                    className='flex-1'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Aumentá tus conversiones con nuestra solucion Saas
                    </h1>
                    <p className='text-gray-600 text-lg mb-8'>
                        Optimizá tus procesos, atraé más clientes y llevá tu negocio digital al siguiente nivel.
                    </p>
                    <div className='flex gap-4'>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition'>
                            Empezar ahora
                        </button>
                        <button className='text-blue-600 border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition'>
                            Ver demo
                        </button>
                    </div>
                </motion.div>

                {/* Imagen */}
                <motion.div
                    className='flex-1 flex justify-center'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/mockup-app.png"
                        alt="App mockup"
                        width={500}
                        height={400}
                        className="rounded-xl shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}