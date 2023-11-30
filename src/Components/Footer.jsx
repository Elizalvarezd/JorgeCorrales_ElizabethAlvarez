import ArrayIconoFooter from './ArraryIconosFooter';
import ImagenFooter from './IconoFooter';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import DigitaHouse from '../img/DH.png';

const Footer = () => {
  const [{ theme }] = useContext(ContextGlobal);

  return (
    <>
      <div className={theme}>
        <h3 className="rojo-footer">Powered by</h3>
        <footer>
          <img className="icono-footer" src={DigitaHouse} alt="Logo-DH" />
          {ArrayIconoFooter.map((icono) => (
            <ImagenFooter key={icono.id} ruta={icono.ruta} descripcion={icono.descripcion} />
          ))}
        </footer>
      </div>
    </>
  );
};

export default Footer;
