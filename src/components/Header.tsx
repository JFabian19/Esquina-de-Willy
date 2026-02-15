import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-red/20 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Pollos y Parrillas La Estación Willy" className="h-12 w-auto object-contain" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#hero" className="text-gray-300 hover:text-brand-orange transition-colors font-medium">Inicio</a>
                    <a href="#menu" className="text-gray-300 hover:text-brand-orange transition-colors font-medium">Carta</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label="Menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-red/20 shadow-xl animate-in fade-in slide-in-from-top-5">
                    <nav className="flex flex-col p-4 gap-4 items-center">
                        <a href="#hero" onClick={toggleMenu} className="text-lg text-gray-200 hover:text-brand-orange w-full text-center py-2 border-b border-white/5">Inicio</a>
                        <a href="#menu" onClick={toggleMenu} className="text-lg text-gray-200 hover:text-brand-orange w-full text-center py-2 border-b border-white/5">Carta</a>
                        <a href="#contact" onClick={toggleMenu} className="w-full text-center py-3 bg-brand-red rounded-lg font-bold shadow-lg mt-2">
                            Contáctanos
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
