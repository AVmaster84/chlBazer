const REST_API_URL = process.env.REST_API_URL;
const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRET;

const fetchWooProducts = async () => {
  const auth = btoa(`${consumerKey}:${consumerSecret}`);
  
  const response = await fetch(`${REST_API_URL}/products`, {
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
  });
  
  return await response.json();
};

// Fetch categories
const fetchCategories = async () => {
  const auth = btoa(`${consumerKey}:${consumerSecret}`);
  
  const response = await fetch(`${REST_API_URL}/products/categories`, {
    headers: {
      'Authorization': `Basic ${auth}`,
    },
  });
  
  return await response.json();
};