"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
      title: "Básico",
      price: "$9",
      frequency: "/mes",
      features: [
        "1 usuario",
        "5 proyectos",
        "Soporte por email",
        "Actualizaciones mensuales",
      ],
      highlight: false,
    },
    {
      title: "Profesional",
      price: "$29",
      frequency: "/mes",
      features: [
        "5 usuarios",
        "Proyectos ilimitados",
        "Soporte prioritario",
        "Actualizaciones semanales",
      ],
      highlight: true,
    },
    {
      title: "Empresarial",
      price: "$99",
      frequency: "/mes",
      features: [
        "Usuarios ilimitados",
        "Soporte dedicado",
        "Consultor personal",
        "Integraciones premium",
      ],
      highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="precios" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Planes para cada etapa
                </h2>
                <p className="text-gray-600 mb-12">
                    Escalá tu negocio con precios justos y simples. Sin contratos eternos.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`p-8 rounded-2xl border shadow-sm ${
                                plan.highlight
                                    ? "border-blue-600 bg-blue-50 scale-105"
                                    : "border-gray-200 bg-white"
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                            <div className="text-4xl font-extrabold text-blue-600 mb-1">
                                {plan.price}
                                <span className="text-base font-medium text-gray-600">{plan.frequency}</span>
                            </div>
                            <ul className="my-6 space-y-3 text-left">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contacto"
                                className={`block mt-4 px-5 py-2 rounded-xl text-white ${
                                    plan.highlight
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-gray-600 hover:bg-gray-700"
                                } transition`}
                            >
                                Empezar
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}