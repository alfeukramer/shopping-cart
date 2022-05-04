// const { fetchItem } = require("./helpers/fetchItem");

const itemsList = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
  }
  
async function addSearch() {
  const searchResult = await fetchProducts('computador');
  const product = searchResult.results;
  product.filter((computer) => {
    const objectDestructuring = {
      sku: computer.id,
      name: computer.title,
      image: computer.thumbnail,
    };
    const add = itemsList.appendChild(createProductItemElement(objectDestructuring));
    return add;
  });
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const itemsCart = document.getElementsByClassName('cart__items');
  itemsCart[0].removeChild(event.target);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const moveCart = async () => {
  const itemsCart = document.getElementsByClassName('cart__items')[0];
  const btn = document.querySelectorAll('.item__add');
    
  btn.forEach((product) => {
    product.addEventListener('click', async (event) => {
      const getSku = getSkuFromProductItem(event.target.parentNode);
      const fetchSku = await fetchItem(getSku);
      itemsCart.appendChild(createCartItemElement(fetchSku));
      });
  });  
};

const emptyItems = () => {
  const clear = document.getElementsByClassName('cart__items')[0];
  clear.innerHTML = '';
};

const emptyBtn = document.querySelector('.empty-cart');
emptyBtn.addEventListener('click', emptyItems);

window.onload = async () => { 
  await addSearch();
  await moveCart(); 
};
