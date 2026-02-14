export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black to-brand-dark py-12 border-t border-brand-red/10 text-center md:text-left">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-2xl font-bold text-white">Pollos y Parrillas <span className="text-brand-orange">Willy</span></h3>
                    <p className="max-w-xs text-sm leading-relaxed">
                        La mejor experiencia en pollos a la brasa y parrillas.
                        Sabor, calidad y tradición en cada plato.
                    </p>
                    {/* Socials - Reused here for persistence */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">Fb</a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">Ig</a>
                        <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">Wa</a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h4 className="text-white font-bold text-lg mb-2">Enlaces</h4>
                    <a href="#hero" className="hover:text-brand-orange transition-colors">Inicio</a>
                    <a href="#menu" className="hover:text-brand-orange transition-colors">Carta</a>
                    <a href="#contact" className="hover:text-brand-orange transition-colors">Reservas</a>
                    <a href="#" className="hover:text-brand-orange transition-colors">Ubicación</a>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2 items-center md:items-start" id="contact">
                    <h4 className="text-white font-bold text-lg mb-2">Contacto</h4>
                    <p>📞 999 999 999</p>
                    <p>📧 contacto@laestacionwilly.com</p>
                    <p>📍 Av. Principal 123, Lima</p>
                    <p>⏰ Lun - Dom: 12:00pm - 11:00pm</p>
                </div>

            </div>

            <div className="mt-12 text-center text-xs text-brand-dark/50 border-t border-white/5 pt-8">
                © 2026 Pollos y Parrillas Willy. Todos los derechos reservados.
            </div>
        </footer>
    );
}
