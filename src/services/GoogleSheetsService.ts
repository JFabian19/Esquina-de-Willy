
import Papa from 'papaparse';

const SPREADSHEET_ID = '13lGCIqqoAbjCXC9XhdMam2E3g7XZe9NuHCJ399N0Xns';

// Using gviz/tq for simple CSV export.
// Sheet names must match exactly what is in the spreadsheet.
// gid=0 is usually the first sheet created. If "Categorias" is first, use gid=0.
// But using sheet name is safer if supported.
// The export format: https://docs.google.com/spreadsheets/d/{spreadhseetId}/gviz/tq?tqx=out:csv&sheet={sheetName}

const CATEGORIES_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Categorias`;
const DISHES_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=Platos`;

export interface CategoryData {
    Nombre: string;
}

export interface DishData {
    Categoria: string;
    Nombre: string;
    Descripcion: string;
    Variante: string;
    Precio: string;
    Imagen: string;
}

export const fetchMenuData = async () => {
    try {
        console.log("Fetching Categories...");
        const categoriesResponse = await fetch(CATEGORIES_URL);
        const categoriesText = await categoriesResponse.text();
        const categories = Papa.parse(categoriesText, { header: true, skipEmptyLines: true }).data as CategoryData[];
        console.log("Categories fetched:", categories);

        console.log("Fetching Dishes...");
        const dishesResponse = await fetch(DISHES_URL);
        const dishesText = await dishesResponse.text();
        const dishes = Papa.parse(dishesText, { header: true, skipEmptyLines: true }).data as DishData[];
        console.log("Dishes fetched:", dishes);

        return { categories, dishes };
    } catch (error) {
        console.error("Error fetching menu data:", error);
        return null;
    }
};
