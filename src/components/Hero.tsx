export default function Hero() {

    // handleShare function removed as it is no longer used in this component

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden" id="hero">
            {/* Background Image */}
            <div className="absolute inset-0 bg-brand-dark z-0">
                <img
                    src="/hero.png"
                    alt="Parrillada Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent mix-blend-multiply opacity-40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
                <div className="w-16 h-1 bg-brand-orange mb-2 animate-bounce-short" />

                <div className="bg-brand-red/90 text-white px-6 py-2 rounded-full font-bold animate-pulse shadow-lg mb-4 border border-brand-yellow/30 text-sm md:text-base">
                    ¡Todo para llevar a S/ 1.00 extra!
                </div>

                <h2 className="text-brand-yellow font-medium tracking-wide uppercase text-sm md:text-base mb-1">Pollos y Parrillas</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
                    La Estación <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-red to-brand-orange">Willy</span>
                </h1>

                <div className="flex flex-col items-center gap-2 mt-2">
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light">
                        El auténtico sabor a la brasa y parrilla en cada bocado.
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Calle Vilcanota psje.cusco - San Salvador - Cuzco</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md">
                    <a href="#menu" className="flex-1 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-xl text-lg shadow-lg shadow-brand-red/30 transform hover:-translate-y-1 transition-all duration-300">
                        Ver Carta Digital
                    </a>
                    <a href="https://maps.app.goo.gl/jZiqwAivGDvrNspw6" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-lg backdrop-blur-sm border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
                        Encuentranos
                    </a>
                </div>

                {/* Social Buttons (Visible) */}
                <div className="flex gap-6 mt-8 items-center justify-center">
                    <a href="https://www.facebook.com/profile.php?id=61587981341363" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                        {/* Facebook Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/estacionwillyparrillas/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                        {/* Instagram Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5 3.425a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
                    </a>
                    <a href="https://www.tiktok.com/@laestacionwily" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/10">
                        {/* TikTok Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                    </a>
                    <a href="https://wa.me/51900643526" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                        {/* WhatsApp Icon */}
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
