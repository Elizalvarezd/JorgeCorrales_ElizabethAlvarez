import Card from '../Components/Card';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [{ theme }] = useContext(ContextGlobal);

  useEffect(() => {
    // Obtener datos reales de una API o de otra fuente de datos
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {users.map((user) => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
