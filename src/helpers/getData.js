export const getData = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const getProductById = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
};

