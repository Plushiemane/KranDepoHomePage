import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchMenuItems, MenuItem } from '../services/api';

interface MenuContextType {
  menuItems: MenuItem[];
  loading: boolean;
  error: string | null;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (err) {
        setError('Failed to fetch menu items');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMenuItems();
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
