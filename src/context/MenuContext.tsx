
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { fetchMenuData } from '../services/GoogleSheetsService';

// Transformed Data Structure for the App
export type Variant = {
    tamano: string;
    precio: number;
};

export type MenuItem = {
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

export type MenuCategory = {
    categoria: string;
    opciones_precio?: string[];
    items: MenuItem[];
};

interface MenuContextType {
    menu: MenuCategory[];
    loading: boolean;
    error: string | null;
    categoryImages: Record<string, string>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Map categories to images (Moved here to be available globally if needed, or just used in Context)
const categoryImages: Record<string, string> = {
    "Pollos a la Brasa": "/pollo a la brasa.png",
    "Pollos Broaster": "/broaster.png",
    "Chaufa": "/chaufa.png",
    "Platos Criollos": "/criollos.png",
    "Salchipapas": "/salchipapa.png",
    "Bebidas Frías": "/frias.png",
    "Gaseosas": "/gaseosa.png",
    "Bebidas Calientes": "/cafe.png"
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState<MenuCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchMenuData();
                if (!data) {
                    throw new Error("Failed to load data from Google Sheets");
                }

                const { categories, dishes } = data;

                // Transform flat CSV data into hierarchical menu structure
                const transformedMenu: MenuCategory[] = categories.map(cat => ({
                    categoria: cat.Nombre,
                    items: []
                }));

                // Helper to find category index
                const findCategoryIndex = (name: string) => transformedMenu.findIndex(c => c.categoria === name);

                dishes.forEach(dish => {
                    const catIndex = findCategoryIndex(dish.Categoria);
                    if (catIndex === -1) return; // Skip if category not found

                    const category = transformedMenu[catIndex];

                    // Specific logic for Drinks/Variants
                    // If dish has 'Variante', we need to group them under one item name
                    if (dish.Variante) {
                        // Check if item already exists in category
                        let existingItem = category.items.find(i => i.nombre === dish.Nombre);

                        if (!existingItem) {
                            // Initialize new item with variants array if not exists
                            existingItem = {
                                nombre: dish.Nombre,
                                descripcion: dish.Descripcion,
                                imagen: dish.Imagen,
                                variantes: [] // Initialize array
                            };
                            category.items.push(existingItem);
                        }

                        // Handle special case for "Bebidas Frías" needing "precios" object (Media Jarra/Jarra)
                        if (dish.Categoria === "Bebidas Frías" && (dish.Variante === "Media Jarra" || dish.Variante === "Jarra")) {
                            if (!existingItem.precios) {
                                // Initialize with default 0s, updated as variants come in
                                existingItem.precios = { media_jarra: 0, jarra: 0 };
                            }
                            if (dish.Variante === "Media Jarra") existingItem.precios.media_jarra = parseFloat(dish.Precio);
                            if (dish.Variante === "Jarra") existingItem.precios.jarra = parseFloat(dish.Precio);

                            // Also add to category options if not present (UI requirement)
                            if (!category.opciones_precio) category.opciones_precio = ["Media Jarra", "1 Jarra"];

                        } else {
                            // Standard variant logic (e.g. Gaseosas)
                            if (!existingItem.variantes) existingItem.variantes = [];
                            existingItem.variantes.push({
                                tamano: dish.Variante,
                                precio: parseFloat(dish.Precio)
                            });
                        }

                    } else {
                        // Simple Item
                        category.items.push({
                            nombre: dish.Nombre,
                            descripcion: dish.Descripcion,
                            imagen: dish.Imagen,
                            precio: parseFloat(dish.Precio)
                        });
                    }
                });

                setMenu(transformedMenu);
                setLoading(false);

            } catch (err: any) {
                console.error(err);
                setError(err.message || "Unknown error");
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <MenuContext.Provider value={{ menu, loading, error, categoryImages }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
