/**
 * This script handles fetching prices and updating them in the DOM.
 * Add this script to HTML pages and mark price elements with:
 * <span class="price-value" data-item-name="Item Name">Default Price</span>
 */

(function() {
  // Fallback prices in case the API fails
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
    { nazwa: "Fuze Tea", cena: 8.00 },
    { nazwa: "Oshee", cena: 9.00 },
    { nazwa: "Tiger", cena: 9.00 },
    { nazwa: "Nuggetsy z frytkami", cena: 28.00 },
    { nazwa: "Naleśniki na słodko", cena: 28.00 }
  ];

  // Fetch prices from API
  async function fetchPrices() {
    try {
      // Try multiple CORS proxies
      const corsProxies = [
        'https://api.allorigins.win/raw?url=',
        'https://cors-anywhere.herokuapp.com/', // Requires registration
        'https://proxy.cors.sh/' // May require API key
      ];
      
      let apiData = null;
      
      // Try direct access first
      try {
        const response = await fetch('https://panel.krannadziei.pl/api/cennik');
        if (response.ok) {
          apiData = await response.json();
          console.log('Direct API access successful');
        }
      } catch (err) {
        console.log('Direct API access failed, trying proxies...');
      }
      
      // If direct access failed, try proxies
      if (!apiData) {
        for (const proxy of corsProxies) {
          try {
            const response = await fetch(`${proxy}https://panel.krannadziei.pl/api/cennik`);
            if (response.ok) {
              apiData = await response.json();
              console.log(`Proxy ${proxy} successful`);
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
      console.error('Error fetching prices:', error);
      return fallbackPrices;
    }
  }

  // Update prices in the DOM
  function updatePrices(items) {
    const priceElements = document.querySelectorAll('.price-value');
    
    priceElements.forEach(element => {
      const itemName = element.getAttribute('data-item-name');
      if (!itemName) return;
      
      const item = items.find(i => i.nazwa.toLowerCase() === itemName.toLowerCase());
      
      if (item) {
        element.textContent = `${item.cena.toFixed(2)}zł`;
      }
    });
  }

  // On page load, fetch and update prices
  document.addEventListener('DOMContentLoaded', async () => {
    const prices = await fetchPrices();
    updatePrices(prices);
  });
})();
