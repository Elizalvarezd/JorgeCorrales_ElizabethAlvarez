import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(undefined);
  const [{ theme }] = useContext(ContextGlobal);

  useEffect(() => {
    // Obtener datos reales de una API o de otra fuente de datos
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <>
      <h2 className={theme}>Detalle del odontologo ID: {id} </h2>
      {users ? (
        <table className={theme}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>{users.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        'Cargando...'
      )}
    </>
  );
};

export default Detail;
