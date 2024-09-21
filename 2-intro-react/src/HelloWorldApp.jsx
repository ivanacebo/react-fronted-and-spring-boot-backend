import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

export const HelloWorldApp = ({ user, id, activo, book}) => {
  // const name = 'Pepe';

  return (
    <>
      <Title title = 'Hola mundo!' />
      <UserDetails user = {user} id = {id} activo = {activo} />
      
      <Book book = {book} />
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  activo: PropTypes.bool,
};

HelloWorldApp.defaultProps = {
  title : 'Hola mundo por defecto',
  book : 'UML gota a gota'
};