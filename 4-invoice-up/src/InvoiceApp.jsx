import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientDetail } from "./components/ClientDetail";
import { CompanyDetail } from "./components/CompanyDetail";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";

export const InvoiceApp = () => {
  const {
    total,
    id,
    name,
    client,
    company,
    items: itemsInitial,
  } = getInvoice();

  const [formItensState, setFormItensState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItensState;

  const [items, setItems] = useState(itemsInitial);

  const [counter, setCounter] = useState(4);

  // Cambiar "onImputChange" a "onInputChange"
  const onInputChange = ({ target: { name, value } }) => {
    console.log(name);
    console.log(value);
    setFormItensState({
      ...formItensState,
      [name]: value,
    });
  };

  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) {
      alert("El producto no puede estar vacío");
      return;
    }
    if (price.trim().length <= 1) {
      alert("El precio no puede estar vacío");
      return;
    }
    if (isNaN(price.trim())) {
      alert("El precio debe ser un numero");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("La cantidad no puede estar vacía");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("La cantidad debe ser un numero");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setFormItensState({
      product: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h1>Ejemplo de una Factura</h1>
          </div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientDetail client={client} title={"Datos del cliente"} />
              </div>

              <div className="col">
                <CompanyDetail
                  company={company}
                  title={"Datos de la empresa"}
                />
              </div>
            </div>

            <ListItemsView items={items} title={"Productos de la factura"} />
            <TotalView total={total} />

            <form
              className="w-50"
              onSubmit={(event) => onInvoiceItemSubmit(event)}
            >
              <input
                type="text" // Cambiado "typer" a "type"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-2"
                onChange={onInputChange} // Cambiado "onImputChange" a "onInputChange"
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Price"
                className="form-control m-2"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Quantity"
                className="form-control m-2"
                onChange={onInputChange}
              />
              <button type="submit" className="btn btn-primary m-3">
                Nuevo item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
