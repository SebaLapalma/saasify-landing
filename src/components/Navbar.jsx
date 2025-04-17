"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/", label: "Inicio" },
        { href: "#caracteristicas", label: "Características" },
        { href: "#precios", label: "Precios" },
        { href: "#contacto", label: "Contacto" },
    ]

    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    SaaSify
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <li key={link.href}>
                        <a href={link.href} className="text-gray-700 hover:text-blue-600 transition">
                            {link.label}
                        </a>
                    </li>
                    ))}
                </ul>

                {/* CTA button */}
                <div className="hidden md:block">
                    <a
                        href="#contacto"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        Empezar
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white px-6 py-4 border-t">
                    {links.map((link) =>(
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-gray-700 hover:text-blue-600"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="block mt-4 bg-blue-600 text-white text-center px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                        onClick={() => setOpen(false)}
                    >
                        Empezar
                    </a>
                </div>
            )}
        </header>
    )
}