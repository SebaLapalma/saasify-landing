"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xpwpeoby", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-gray-600 mb-12">
          Dejanos tu mensaje y nos pondremos en contacto a la brevedad.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl shadow-xl text-left"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="border rounded-xl px-4 py-3 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Tu correo"
            className="border rounded-xl px-4 py-3 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            placeholder="Tu mensaje"
            rows={5}
            className="border rounded-xl px-4 py-3 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            <Send className="w-4 h-4" />
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4">¡Mensaje enviado con éxito!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4">Hubo un error. Intentalo más tarde.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
