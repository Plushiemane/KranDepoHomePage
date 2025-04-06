import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export enum MenuCategory {
  DaniaGlowne = 1,
  Salatki = 2,
  Zupy = 3,
  Przekaski = 4,
  DlaDzieci = 5,
  Desery = 6,
  Dodatki = 7,
  Alkohole = 8,
  NapojeCieple = 9,
  Napoje = 10
}

interface MenuItem {
  linkdofoto: string | undefined;
  id: number;
  nazwa: string;
  cena: number;
  opis?: string;
  kategoria: number;
}

interface MenuContextType {
  menuItems: MenuItem[];
  loading: boolean;
  error: string | null;
  getCategoryItems: (categoryId: number) => MenuItem[];
}

const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  loading: false,
  error: null,
  getCategoryItems: () => []
});

export const useMenu = () => useContext(MenuContext);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://panel.krannadziei.pl/api/cennik');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate and log the data structure for debugging
        console.log("API Response:", data);
        
        // Ensure all items have the required properties
        const validData = Array.isArray(data) ? data.filter(item => 
          item && 
          typeof item === 'object' && 
          'nazwa' in item && 
          'cena' in item && 
          typeof item.cena === 'number'
        ) : [];
        
        console.log("Filtered valid data:", validData);
        setMenuItems(validData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching menu items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Helper function to get items by category
  const getCategoryItems = (categoryId: number) => {
    return menuItems.filter(item => item.kategoria === categoryId);
  };

  return (
    <MenuContext.Provider value={{ menuItems, loading, error, getCategoryItems }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
