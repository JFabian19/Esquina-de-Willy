import menuData from '../data/menu.json';

// Define types based on the new JSON structure
type Variant = {
    tamano: string;
    precio: number;
};

type Item = {
    nombre: string;
    descripcion?: string;
    precio?: number;
    precios?: {
        media_jarra: number;
        jarra: number;
    };
    variantes?: Variant[];
};

type MenuCategory = {
    categoria: string;
    opciones_precio?: string[];
    items: Item[];
};

// Map categories to images (using previous Unsplash URLs as fallbacks)
const categoryImages: Record<string, string> = {
    "Pollos a la Brasa": "/pollo a la brasa.png",
    "Pollos Broaster": "/broaster.png",
    "Chaufa": "/chaufa.png",
    "Platos Criollos": "/criollos.png",
    "Salchipapas": "/salchipapa.png",
    "Bebidas Frías": "/frias.png",
    "Gaseosas": "/gaseosa.png",
    "Bebidas Calientes": "/frias.png"
};

export default function Menu() {
    // Access the 'menu' array from the imported JSON object
    const categories = menuData.menu.map((c: MenuCategory) => c.categoria);

    const scrollToCategory = (category: string) => {
        const element = document.getElementById(category);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-20 bg-brand-dark" id="menu">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-12 uppercase tracking-wider">
                    Nuestra <span className="text-brand-orange">Carta</span>
                </h2>

                {/* Category sticky nav */}
                <div className="sticky top-20 z-40 bg-brand-dark/95 backdrop-blur py-4 mb-12 border-b border-white/5 overflow-x-auto">
                    <div className="flex gap-4 min-w-max px-4">
                        <button
                            onClick={scrollToTop}
                            className="px-6 py-2 rounded-full font-bold text-sm md:text-base border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
                        >
                            Todos
                        </button>
                        {categories.map((cat: string) => (
                            <button
                                key={cat}
                                onClick={() => scrollToCategory(cat)}
                                className="px-6 py-2 rounded-full font-bold text-sm md:text-base bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 whitespace-nowrap"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Sections */}
                <div className="space-y-20">
                    {menuData.menu.map((category: MenuCategory) => (
                        <div key={category.categoria} id={category.categoria} className="scroll-mt-40">

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-brand-orange pl-4 shadow-black drop-shadow-lg">
                                {category.categoria}
                            </h3>

                            {/* Category Image */}
                            <div className="mb-8 relative rounded-2xl overflow-hidden aspect-[3/2] shadow-[0_0_20px_rgba(251,146,60,0.3)] border-4 border-brand-orange/50">
                                <img
                                    src={categoryImages[category.categoria] || categoryImages["Pollos a la Brasa"]}
                                    alt={category.categoria}
                                    className="w-full h-full object-cover"
                                />
                                {/* Vignette & Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60"></div>
                            </div>

                            {/* Table Header for Price Options if applicable */}
                            {category.opciones_precio && (
                                <div className="flex justify-end mb-4 px-6 text-brand-orange font-bold text-sm uppercase tracking-wider">
                                    {category.opciones_precio.map((opt, i) => (
                                        <span key={i} className="w-24 text-right">{opt}</span>
                                    ))}
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-4">
                                {category.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-brand-dark/50 border border-white/5 rounded-xl p-6 hover:border-brand-orange/30 transition-all duration-300 hover:bg-white/5 group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                                                    {item.nombre}
                                                </h4>
                                                {item.descripcion && (
                                                    <p className="text-gray-400 text-sm mt-1 max-w-md group-hover:text-gray-300 transition-colors">
                                                        {item.descripcion}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Price Rendering Logic */}
                                            <div className="flex flex-col gap-2 min-w-[120px] items-end">
                                                {/* Case 1: Simple Price */}
                                                {item.precio !== undefined && (
                                                    <span className="text-xl font-bold text-brand-yellow">
                                                        S/ {item.precio.toFixed(2)}
                                                    </span>
                                                )}

                                                {/* Case 2: Multi-size Prices (Precios Object) */}
                                                {item.precios && (
                                                    <div className="flex gap-4">
                                                        <span className="w-24 text-right text-lg font-bold text-brand-yellow">
                                                            S/ {item.precios.media_jarra.toFixed(2)}
                                                        </span>
                                                        <span className="w-24 text-right text-lg font-bold text-brand-yellow">
                                                            S/ {item.precios.jarra.toFixed(2)}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Case 3: Variants (Variantes Array) */}
                                                {item.variantes && (
                                                    <div className="flex flex-col gap-1 w-full md:w-auto">
                                                        {item.variantes.map((v, i) => (
                                                            <div key={i} className="flex justify-between items-center gap-4 text-sm md:text-base border-b border-white/5 pb-1 last:border-0 last:pb-0">
                                                                <span className="text-gray-400">{v.tamano}</span>
                                                                <span className="font-bold text-brand-yellow">S/ {v.precio.toFixed(2)}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
