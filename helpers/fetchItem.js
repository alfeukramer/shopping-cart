const fetchItem = async (id) => {
  try {
    if (id) {
  const itemFetch = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const returnItem = await itemFetch.json();
  return returnItem;
}
throw new Error('You must provide an url');
  } catch (error) {
    return error.message;
  }
};
// console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
