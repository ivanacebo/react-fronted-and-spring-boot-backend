export const CartView = () => {
  return (
    <>
      <h3>Carro de compras</h3>
      <table className="table table-hover table-triped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Total</td>
            <td>Eliminar</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              121345
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
