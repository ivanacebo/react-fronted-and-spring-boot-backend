import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientDetail } from "./components/ClientDetail";
import { CompanyDetail } from "./components/CompanyDetail";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
    address: "New York",
  },
  items: [],
};

export const InvoiceApp = () => {
  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { id, name, client, company } = invoice;

  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    // console.log('el precio cambio!')
  }, [price]);

  useEffect(() => {
    // console.log('el formItemsState cambio!')
  }, [formItemsState]);

  useEffect(() => {
    // console.log('el counter cambio!')
  }, [counter]);

  useEffect(() => {
    setTotal(calculateTotal(items));
    // console.log('el items cambio!')
  }, [items]);

  const onInputChange = ({ target: { name, value } }) => {
    // console.log(name);
    // console.log(value);

    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) {
      alert("Error la precio no es un numero");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Error la cantidad tiene que ser mayor a 0");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("Error la cantidad no es un numero");
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

    setFormItemsState({
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

            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                onChange={(event) => onInputChange(event)}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onInputChange}
              />

              <button type="submit" className="btn btn-primary m-3">
                Nuevo Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
