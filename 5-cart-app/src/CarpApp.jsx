export const CarpApp = () => {
  return (
    <>
      <div className="container">
        <h1>Carp App</h1>
        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado Mecanico RGB</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 1000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Samsung Smart TV 55</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 3000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Audifono Bluetooh Sony</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 770</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Memoria Corsair 8 GB DDR5</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 3000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Asus Nvidia RTX</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 5000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CPU Intel i5</h5>
                <p className="card-text">
                  Teclado Mecanico con luces RGB y switches cherry red
                </p>
                <p className="card-text">$ 4000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 w-50">
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
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-start fw-bold">121345</td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
