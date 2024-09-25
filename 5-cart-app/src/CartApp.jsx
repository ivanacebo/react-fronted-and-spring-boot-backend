import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(inititalCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);
    if (hasItem) {
      setCartItems([
        ...cartItems.filter((i) => i.product.id !== product.id),
        {
          product,
          quantity: hasItem.quantity + 1,
        },
      ]);
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  const handlerDeleteProductCart = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>
        <CatalogView handler={handlerAddProductCart} />

        {cartItems?.length <= 0 || (
          <div className="my-4 w-50">
            <CartView
              items={cartItems}
              handlerDelete={handlerDeleteProductCart}
            />
          </div>
        )}
      </div>
    </>
  );
};
