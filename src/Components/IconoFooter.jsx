import '/src/index.css';

const IconoFooter = ({ ruta, descripcion }) => {
  return (
    <div>
      <img className="icono" src={ruta} alt={descripcion} />
    </div>
  );
};

export default IconoFooter;
