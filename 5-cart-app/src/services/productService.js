export const getProducts = async () => {
  const response = await fetch("http://localhost:8080/api/products");

  const products = await response.json();
  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (accumulator, item) => accumulator + item.quantity * item.product.price,
    0
  );
};
