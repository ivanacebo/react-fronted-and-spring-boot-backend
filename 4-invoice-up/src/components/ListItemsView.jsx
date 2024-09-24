import { RowItem } from "./RowItem";
import PropTypes from "prop-types";

export const ListItemsView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h3>{title}</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItem
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
