import { getInvoice } from "./services/getInvoice";
import { ClientDetail } from "./components/ClientDetail";
import { CompanyDetail } from "./components/CompanyDetail";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/totalView";

export const InvoiceApp = () => {
  const {total, id, name, client, company, items } = getInvoice();

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
                <ClientDetail client={client} title={'Datos del cliente'} />
              </div>

              <div className="col">
                <CompanyDetail company={company} title={'Datos de la empresa'} />
              </div>
            </div>

            <ListItemsView items={items} title ={'Productos de la factura'} />
            <TotalView total = {total} />
          </div>
        </div>
      </div>
    </>
  );
};
