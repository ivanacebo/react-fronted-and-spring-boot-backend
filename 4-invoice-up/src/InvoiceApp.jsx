import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientDetail } from "./components/ClientDetail";
import { CompanyDetail } from "./components/CompanyDetail";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";
import { FormItemsView } from "./components/FormItemsView";

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
  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    // console.log('el counter cambio!')
  }, [counter]);

  useEffect(() => {
    setTotal(calculateTotal(items));
    // console.log('el items cambio!')
  }, [items]);

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
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

            <ListItemsView
              items={items}
              title={"Productos de la factura"}
              handlerDeleteItem={handlerDeleteItem}
            />
            <TotalView total={total} />

            <button className="btn btn-success m-3" onClick={onActiveForm}>
              {!activeForm ? "Activar formulario" : "Ocultar formulario"}
            </button>
            {!activeForm || <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
