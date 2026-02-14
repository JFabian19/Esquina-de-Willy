import menuData from '../data/menu.json';

type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
};

type MenuCategory = {
    category: string;
    image: string;
    items: MenuItem[];
};

export default function Menu() {
    const categories = menuData.map((c: MenuCategory) => c.category);

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
                        {categories.map((cat) => (
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
                    {menuData.map((category: MenuCategory) => (
                        <div key={category.category} id={category.category} className="scroll-mt-40">
                            <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-brand-orange pl-4">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-brand-dark/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10 group"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-brand-yellow font-bold border border-brand-yellow/20">
                                                S/ {item.price.toFixed(2)}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">{item.name}</h4>
                                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>

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
