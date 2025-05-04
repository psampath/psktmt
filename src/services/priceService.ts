
// Price Service to handle price data centrally
// In a real application, this would make API calls to a backend

// Define price item interface
export interface PriceItem {
  id: number;
  size: string;
  price: string;
}

// Initial price data
const initialPriceData: PriceItem[] = [
  { id: 1, size: '8 mm', price: '₹383/-' },
  { id: 2, size: '10 mm', price: '₹594/-' },
  { id: 3, size: '12 mm', price: '₹837/-' },
  { id: 4, size: '16 mm', price: '₹1497/-' },
  { id: 5, size: '20 mm', price: '₹2340/-' },
  { id: 6, size: '25 mm', price: '₹3656/-' },
  { id: 8, size: '32 mm', price: '₹6132/-' },
];

// Local storage key
const PRICE_DATA_KEY = 'psktmt_price_data';

// Load data from local storage or use initial data
const loadPriceData = (): PriceItem[] => {
  try {
    const savedData = localStorage.getItem(PRICE_DATA_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
  } catch (error) {
    console.error('Error loading price data:', error);
  }
  
  // If nothing in storage or error parsing, use initial data
  return initialPriceData;
};

// Save data to local storage
const savePriceData = (data: PriceItem[]): void => {
  try {
    localStorage.setItem(PRICE_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving price data:', error);
  }
};

// Get all prices
export const getPrices = (): PriceItem[] => {
  return loadPriceData();
};

// Update a single price
export const updatePrice = (id: number, newPrice: string): boolean => {
  try {
    const prices = loadPriceData();
    const updatedPrices = prices.map(item => 
      item.id === id ? { ...item, price: newPrice } : item
    );
    
    savePriceData(updatedPrices);
    
    // Create backup (in a real app, this would be on the server)
    const backup = {
      timestamp: new Date().toISOString(),
      data: updatedPrices
    };
    localStorage.setItem(`${PRICE_DATA_KEY}_backup_${Date.now()}`, JSON.stringify(backup));
    
    return true;
  } catch (error) {
    console.error('Error updating price:', error);
    return false;
  }
};

// Reset to initial data (for testing)
export const resetPrices = (): void => {
  savePriceData(initialPriceData);
};

// Formatting utilities
export const formatPrice = (value: number): string => {
  return `₹${value}/-`;
};

export const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^0-9.]/g, ''));
};
