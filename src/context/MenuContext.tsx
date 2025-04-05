import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MenuItem {
  id: number;
  nazwa: string;
  cena: number;
  opis?: string;
  kategoria?: string;
}

interface MenuContextType {
  menuItems: MenuItem[];
  loading: boolean;
  error: string | null;
}

const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  loading: false,
  error: null
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
        setMenuItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching menu items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
