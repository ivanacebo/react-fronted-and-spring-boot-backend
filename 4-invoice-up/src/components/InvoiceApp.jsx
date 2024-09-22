import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName, address } = client;
  const { country, city, street, number } = client.address;

  return (
    <>
      <h1>Ejemplo de una Factura</h1>
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
      </ul>

      <h3>Datos del cliente</h3>
      <ul>
        <li>
          nombre: {nameClient} {lastName}
        </li>
        <li>estado: {country}</li>
        <li>ciudad: {city}</li>
        <li>
          calle: {street} {number}
        </li>
      </ul>

      <h3>Datos de la Empresa</h3>
      <ul>
        <li>compañia: {company.name}</li>
        <li>numero fiscal: {company.fiscalNumber}</li>
      </ul>

      <h3>Productos de la factura</h3>
      <table>
        <thead>
          <tr>
            <th>Prodcuto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <tr key = {id}>
              <td>{product}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
