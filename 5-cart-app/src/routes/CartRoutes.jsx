import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({
  cartItems,
  handlerAddProductCart,
  handlerDeleteProductCart,
}) => {
  return (
    <Routes>
      <Route
        path="catalog"
        element={<CatalogView handler={handlerAddProductCart} />}
      />
      <Route
        path="cart"
        element={
          cartItems?.length <= 0 ? (
            <div className="alert alert-warning">
              No hay elementos en el carrito
            </div>
          ) : (
            <div className="my-4 w-50">
              <CartView
                items={cartItems}
                handlerDelete={handlerDeleteProductCart}
              />
            </div>
          )
        }
      />

      <Route path="/" element={<Navigate to={"/catalog"} />} />
    </Routes>
  );
};
