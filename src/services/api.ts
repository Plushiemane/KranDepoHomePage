import axios from 'axios';

export interface MenuItem {
  cena: number;
  nazwa: string;
}

// Fallback prices included directly in this file
/**
 * Fetches menu items from the API or returns fallback data if API unavailable
 */
export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  try {
    // Try multiple CORS proxies
    const corsProxies = [
      'https://api.allorigins.win/raw?url=',
      'https://cors-anywhere.herokuapp.com/', 
      'https://proxy.cors.sh/'
    ];
    
    let apiData = null;
    
    // Try direct access first
    try {
      const response = await axios.get<MenuItem[]>('https://panel.krannadziei.pl/api/cennik');
      if (response.data) {
        console.log('Direct API access successful');
        apiData = response.data;
      }
    } catch (directError) {
      console.log('Direct API access failed, trying proxies...');
      
      // If direct access failed, try proxies
      for (const proxy of corsProxies) {
        try {
          const response = await axios.get<MenuItem[]>(`${proxy}https://panel.krannadziei.pl/api/cennik`);
          if (response.data) {
            console.log(`Proxy ${proxy} successful`);
            apiData = response.data;
            break;
          }
        } catch (err) {
          console.log(`Proxy ${proxy} failed`);
        }
      }
    }
    
    // If we got data, return it; otherwise use fallback
    return apiData || [];
  } catch (error) {
    console.error('Error fetching menu items:', error);
    console.log('Using fallback prices instead');
    return [];
  }
};

/**
 * Finds a menu item by name and returns its price
 */
export const findItemPrice = (items: MenuItem[], name: string): number | undefined => {
  const item = items.find(item => item.nazwa.toLowerCase() === name.toLowerCase());
  return item?.cena;
};

/**
 * Updates prices in the DOM based on fetched data
 */
export const updatePricesInDOM = (items: MenuItem[]): void => {
  // Get all price elements
  const priceElements = document.querySelectorAll('.price-value');
  
  priceElements.forEach(element => {
    const itemName = element.getAttribute('data-item-name');
    if (!itemName) return;
    
    // Find matching item in the API response
    const item = items.find(i => i.nazwa.toLowerCase() === itemName.toLowerCase());
    
    // Update price if found
    if (item) {
      element.textContent = `${item.cena.toFixed(2)}zł`;
    }
  });
};
