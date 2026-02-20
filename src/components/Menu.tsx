import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';

// Define types based on the new JSON structure
type Variant = {
    tamano: string;
    precio: number;
};

type Item = {
    nombre: string;
    descripcion?: string;
    imagen?: string;
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




const AddButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="bg-brand-orange hover:bg-orange-600 text-white p-2 rounded-lg transition-colors flex items-center gap-1 group/btn shadow-lg shadow-orange-500/20 active:scale-95"
        title="Agregar al carrito"
    >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span className="font-bold text-sm hidden md:inline">Agregar</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:hidden">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    </button>
);

export default function Menu() {
    const { addToCart } = useCart();
    const { menu, loading, error, categoryImages } = useMenu();

    if (loading) return <div className="text-white text-center py-20">Cargando menú...</div>;
    if (error) return <div className="text-red-500 text-center py-20">Error al cargar el menú: {error}</div>;

    const categories = menu.map((c: MenuCategory) => c.categoria);

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
                    {menu.map((category: MenuCategory) => (
                        <div key={category.categoria} id={category.categoria} className="scroll-mt-40">

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-brand-orange pl-4 shadow-black drop-shadow-lg">
                                {category.categoria}
                            </h3>



                            {/* Category Image for Beverages only */}
                            {(category.categoria.includes("Bebidas") || category.categoria === "Gaseosas") && (
                                <div className="mb-8 relative rounded-2xl overflow-hidden aspect-[3/2] shadow-[0_0_20px_rgba(251,146,60,0.3)] border-4 border-brand-orange/50">
                                    <img
                                        src={categoryImages[category.categoria] || categoryImages["Pollos a la Brasa"]}
                                        alt={category.categoria}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60"></div>
                                </div>
                            )}

                            {/* Table Header for Price Options if applicable */}
                            {category.opciones_precio && (
                                <div className="flex justify-end mb-4 px-6 text-brand-orange font-bold text-sm uppercase tracking-wider">
                                    {category.opciones_precio.map((opt, i) => (
                                        <span key={i} className="w-32 text-center">{opt}</span>
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
                                            {/* Item Image or Placeholder - ONLY for non-beverage categories */}
                                            {!(category.categoria.includes("Bebidas") || category.categoria === "Gaseosas") && (
                                                <div className="w-full md:w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 relative group-hover:border-brand-orange/30 transition-colors flex items-center justify-center">
                                                    {item.imagen ? (
                                                        <img
                                                            src={item.imagen}
                                                            alt={item.nombre}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                                (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                                                                (e.target as HTMLImageElement).parentElement!.innerText = 'aca va imagen';
                                                            }}
                                                        />
                                                    ) : (
                                                        <span className="text-xs text-gray-500 font-medium p-2 text-center">aca va imagen</span>
                                                    )}
                                                </div>
                                            )}

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
                                            <div className="flex flex-col gap-2 min-w-[120px] items-end justify-center">
                                                {/* Case 1: Simple Price */}
                                                {item.precio !== undefined && (
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-xl font-bold text-brand-yellow">
                                                            S/ {item.precio.toFixed(2)}
                                                        </span>
                                                        <AddButton onClick={() => addToCart({
                                                            id: item.nombre,
                                                            name: item.nombre,
                                                            price: item.precio!
                                                        })} />
                                                    </div>
                                                )}

                                                {/* Case 2: Multi-size Prices (Precios Object) */}
                                                {item.precios && (
                                                    <div className="flex gap-4">
                                                        <div className="flex flex-col items-center gap-2 w-32">
                                                            <span className="text-lg font-bold text-brand-yellow">
                                                                S/ {item.precios.media_jarra.toFixed(2)}
                                                            </span>
                                                            <AddButton onClick={() => addToCart({
                                                                id: `${item.nombre} - Media Jarra`,
                                                                name: item.nombre,
                                                                variant: "Media Jarra",
                                                                price: item.precios!.media_jarra
                                                            })} />
                                                        </div>
                                                        <div className="flex flex-col items-center gap-2 w-32">
                                                            <span className="text-lg font-bold text-brand-yellow">
                                                                S/ {item.precios.jarra.toFixed(2)}
                                                            </span>
                                                            <AddButton onClick={() => addToCart({
                                                                id: `${item.nombre} - Jarra`,
                                                                name: item.nombre,
                                                                variant: "Jarra",
                                                                price: item.precios!.jarra
                                                            })} />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Case 3: Variants (Variantes Array) */}
                                                {item.variantes && (
                                                    <div className="flex flex-col gap-3 w-full md:w-auto">
                                                        {item.variantes.map((v, i) => (
                                                            <div key={i} className="flex justify-between items-center gap-4 text-sm md:text-base border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                                                <span className="text-gray-400">{v.tamano}</span>
                                                                <div className="flex items-center gap-3">
                                                                    <span className="font-bold text-brand-yellow">S/ {v.precio.toFixed(2)}</span>
                                                                    <AddButton onClick={() => addToCart({
                                                                        id: `${item.nombre} - ${v.tamano}`,
                                                                        name: item.nombre,
                                                                        variant: v.tamano,
                                                                        price: v.precio
                                                                    })} />
                                                                </div>
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
