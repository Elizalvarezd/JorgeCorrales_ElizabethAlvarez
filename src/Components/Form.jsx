import { useState } from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const handleNombreChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    setNombreValido(/^[A-Za-z]+$/i.test(nuevoNombre) && nuevoNombre.trim().length >= 5);
  };

  const handleEmailChange = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);
    setEmailValido(
      nuevoEmail === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(nuevoEmail),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreValido) {
      if (emailValido) alert(`Gracias ${nombre} te contactaremos cuando antes vía mail`);
      else alert('Ingresar email valido');
    } else alert('EL nombre debe tener minimo 5 letras');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Ingresa el email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <input type="submit" value="Enviar" className="favButton detail-btn input-enviar" />
      </form>
    </main>
  );
};

export default Form;
