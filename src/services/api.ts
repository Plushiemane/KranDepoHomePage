import axios from 'axios';

export interface MenuItem {
  cena: number;
  nazwa: string;
}

// Fallback prices included directly in this file
const fallbackPrices = [
  { nazwa: "Kawa czarna", cena: 10.00 },
  { nazwa: "Kawa biała", cena: 10.00 },
  { nazwa: "Herbata (wiele smaków)", cena: 10.00 },
  { nazwa: "Grzaniec", cena: 15.00 },
  { nazwa: "Coca Cola", cena: 6.00 },
  { nazwa: "Sprite", cena: 6.00 },
  { nazwa: "Fanta", cena: 6.00 },
  { nazwa: "Woda gazowana", cena: 5.00 },
  { nazwa: "Woda niegazowana", cena: 5.00 },
  { nazwa: "Soki Cappy", cena: 8.00 },
  { nazwa: "Oshee", cena: 9.00 },
  { nazwa: "Fuze Tea", cena: 8.00 },
  { nazwa: "Tiger", cena: 9.00 },
  { nazwa: "Nuggetsy z frytkami", cena: 28.00 },
  { nazwa: "Naleśniki na słodko", cena: 28.00 },
  { nazwa: "Sałatka Cezar", cena: 32.00 },
  { nazwa: "Sałatka z krewetkami", cena: 38.00 },
  { nazwa: "Sałatka Grecka", cena: 29.00 },
  { nazwa: "Mozzarella sticks", cena: 21.00 },
  { nazwa: "Deska serów", cena: 30.00 },
  { nazwa: "Deska wędlin", cena: 30.00 },
  { nazwa: "Mix orzechów", cena: 8.00 },
  { nazwa: "Frytki", cena: 8.00 },
  { nazwa: "Frytki Deluxe", cena: 15.00 },
  { nazwa: "Kapusta po chińsku", cena: 8.00 },
  { nazwa: "Surówka z pora", cena: 8.00 },
  { nazwa: "Ciapkapusta", cena: 8.00 },
  { nazwa: "Pita", cena: 6.00 },
  { nazwa: "Coleslaw z czerwonej kapusty", cena: 8.00 },
  { nazwa: "Grillowane warzywa", cena: 8.00 },
  { nazwa: "Buraczki", cena: 8.00 },
  { nazwa: "Tzatziki", cena: 6.00 },
  { nazwa: "Sos Remolada", cena: 3.00 },
  { nazwa: "Sos majonezowo-paprykowy", cena: 3.00 },
  { nazwa: "Ketchup", cena: 3.00 },
  { nazwa: "Musztarda", cena: 3.00 },
  { nazwa: "Kulki serowe", cena: 20.00 },
  { nazwa: "Smażone kawałki Mac&Cheese", cena: 22.00 },
  { nazwa: "Krążki cebulowe", cena: 18.00 },
];

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
    return apiData || fallbackPrices;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    console.log('Using fallback prices instead');
    return fallbackPrices;
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
