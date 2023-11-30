import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  // Obtener el estado y la función de despacho directamente en una sola línea
  const [{ theme }, dispatch] = useContext(ContextGlobal);

  const toggleTheme = () => {
    // Despachar la acción para cambiar el tema
    dispatch({ type: 'SET_THEME', payload: { theme: theme === 'dark' ? '' : 'dark' } });
  };

  return (
    <nav className={`navBar ${theme}`}>
      {/* Aquí deberán agregarse los enlaces correspondientes a las rutas definidas */}
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>

      {/* Implementar la lógica para cambiar el tema con el componente ThemeButton */}
      <button onClick={toggleTheme}>
        {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </nav>
  );
};

export default Navbar;
