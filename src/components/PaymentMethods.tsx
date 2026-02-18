import { useState } from 'react';

export default function PaymentMethods() {

    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setAlertMessage(`${label} copiado: ${text}`);

        // Hide alert after animation duration (2s)
        setTimeout(() => {
            setAlertMessage(null);
        }, 2000);
    };

    return (
        <section className="bg-brand-dark py-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>

            {/* Custom Alert */}
            {alertMessage && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-fade-in-out">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-bold">{alertMessage}</span>
                </div>
            )}

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">

                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                        Métodos de <span className="text-brand-orange">Pago</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* Digital Wallets (Yape & Plin) */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-2xl">📱</span> Billeteras Digitales
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Yape Box */}
                                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-brand-purple/50 transition-colors h-[120px]">
                                    <div className="w-16 h-16 rounded-lg flex items-center justify-center p-1">
                                        <img src="/yape.png" alt="Yape" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Yape</span>
                                </div>

                                {/* Plin Box */}
                                <div className="bg-brand-dark rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-cyan-500/50 transition-colors h-[120px]">
                                    <div className="w-16 h-16 rounded-lg flex items-center justify-center p-1">
                                        <img src="/plin.png" alt="Plin" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Plin</span>
                                </div>
                            </div>

                            {/* Unified Phone Number Button */}
                            <button
                                onClick={() => copyToClipboard('900643526', 'Número')}
                                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between group transition-all duration-300"
                            >
                                <div className="flex flex-col items-start">
                                    <span className="text-xs uppercase text-gray-500 tracking-wider">Número para Yape/Plin</span>
                                    <span className="text-brand-orange font-mono text-xl font-bold group-hover:text-white transition-colors">900 643 526</span>
                                    <span className="text-xs text-gray-400">A nombre de Willy</span>
                                </div>
                                <div className="bg-brand-orange/20 text-brand-orange p-2 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Traditional Banking */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-2xl">🏦</span> Bancos y Tarjetas
                            </h3>

                            {/* Cards */}
                            <div className="bg-brand-dark rounded-xl p-6 border border-white/5 flex items-center gap-4 h-[120px]">
                                <div className="text-4xl bg-gradient-to-br from-gray-700 to-gray-900 w-16 h-16 rounded-lg flex items-center justify-center text-white shadow-lg shrink-0">
                                    💳
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-lg">Tarjetas</span>
                                    <span className="text-gray-400 text-sm">Aceptamos todas las tarjetas Visa y Mastercard</span>
                                </div>
                            </div>

                            {/* Bank Transfer */}
                            <div className="bg-brand-dark rounded-xl p-6 border border-white/5 hover:border-brand-orange/30 transition-colors flex flex-col gap-3 group">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-lg shrink-0">
                                        🏦
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-lg">Transferencia BCP</span>
                                        <span className="text-gray-400 text-sm">Cuenta Corriente</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => copyToClipboard('00228510661710400950', 'CCI')}
                                    className="mt-2 bg-black/20 hover:bg-black/40 rounded-lg p-3 flex items-center justify-between border border-white/5 w-full group-hover:border-brand-orange/30 transition-all"
                                >
                                    <div className="flex flex-col items-start overflow-hidden">
                                        <span className="text-[10px] uppercase text-gray-500 tracking-wider">Número de CCI</span>
                                        <span className="text-brand-orange font-mono text-sm md:text-base truncate group-hover:text-white transition-colors">00228510661710400950</span>
                                    </div>
                                    <div className="text-gray-500 group-hover:text-brand-orange transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
