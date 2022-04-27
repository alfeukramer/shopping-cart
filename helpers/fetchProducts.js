const fetchProducts = async (search) => {
  try {
 if (search) {  
    const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
  const returnFetch = await fetchApi.json();
  return returnFetch;
 }
 throw new Error('You must provide an url');
  } catch (error) {
    return error.message;
  }
};
  
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
