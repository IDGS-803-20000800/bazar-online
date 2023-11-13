import products from './products.json';

export const searchItems = (query) =>
  Promise.resolve(products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  ));

export const getItemById = (id) =>
  Promise.resolve(products.find((product) => product.id === id));