import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [{ theme }] = useContext(ContextGlobal);
  return (
    <div className={theme}>
      <h2 className="center-text">Want to know more?</h2>
      <p className="center-text">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
