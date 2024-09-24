import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

export const CarpApp = () => {
  return (
    <>
      <div className="container">
        <h1>Carp App</h1>
        <CatalogView />

        <div className="my-4 w-50">
          <CartView />
        </div>
      </div>
    </>
  );
};
