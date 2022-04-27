const fetchProducts = async (search) => {
  const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);
  const returnFetch = await fetchApi.json();
  return returnFetch.results;
};
  
console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
