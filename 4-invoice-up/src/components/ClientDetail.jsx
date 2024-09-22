import PropTypes from "prop-types";

export const ClientDetail = ({ title, client }) => {
  const {
    name: nameClient,
    lastName,
    address: { country, city, street, number },
  } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          nombre: {nameClient} {lastName}
        </li>
        <li className="list-group-item">
          estado: {country} ciudad:{city}
        </li>
        <li className="list-group-item">
          calle: {street} {number}
        </li>
      </ul>
    </>
  );
};

ClientDetail.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};
