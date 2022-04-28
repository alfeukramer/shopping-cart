require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchItem é uma função;', async () => {
    expect(typeof fetchItem).toBe('function');
});
it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
  await fetchItem('MLB1615760527'); expect(fetch).toHaveBeenCalled();
});
it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
const endpoint1 = 'https://api.mercadolibre.com/items/MLB1615760527';
await fetchItem('MLB1615760527');expect(fetch).toHaveBeenCalledWith(endpoint1);
});
it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
  expect(await fetchItem('MLB1615760527')).toEqual(item);
});
it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
  const fail = await fetchItem();
  expect(fail).toEqual('You must provide an url');
});
})
