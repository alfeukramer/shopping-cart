const fetchItem = async (addCard) => {
  try {
    if (addCard) {
  const itemFetch = await fetch(`https://api.mercadolibre.com/items/${addCard}`);
  const returnItem = await itemFetch.json();
  // const destructuringObj = {
  //   sku: returnItem.id,
  //   name: returnItem.title,
  //   price: returnItem.price,
  // };
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
