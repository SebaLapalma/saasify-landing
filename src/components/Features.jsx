"use client";

import { ShieldCheck, TrendingUp, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        title: "Seguridad de nivel empresarial",
        description: "Tus datos están protegidos con los más altos estándares del mercado.",
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
        title: "Escalabilidad sin límites",
        description: "Desde startups hasta grandes empresas, nuestra plataforma crece con vos.",
      },
      {
        icon: <Zap className="w-8 h-8 text-blue-600" />,
        title: "Integración rápida",
        description: "Integrá en minutos con tus herramientas favoritas y empezá a operar ya.",
      },
      {
        icon: <Clock className="w-8 h-8 text-blue-600" />,
        title: "Automatización total",
        description: "Ahorrá tiempo con flujos automáticos que simplifican tu día a día.",
      },
]

export default function Features() {
    return (
        <section id="caracteristicas" className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-600 mb-12">
                    Nuestro software SaaS está diseñado para potenciar tu crecimiento con herramientas modernas, seguras y fáciles de usar
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md text-left"
                            initial={{ opacity: 0, y:30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}