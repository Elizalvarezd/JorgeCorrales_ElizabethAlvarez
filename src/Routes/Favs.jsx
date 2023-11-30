import { getFavFromStorage, isFavorited, removeFavInStorage } from '../Components/utils/localStorage';
import Card from '../Components/Card';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const [users, setUsers] = useState([]);
  const [localFavs, setLocalFavs] = useState(getFavFromStorage());
  const [{ theme }] = useContext(ContextGlobal);

  useEffect(() => {
    // Obtener datos reales de una API o de otra fuente de datos
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveFav = (id) => {
    setLocalFavs((localFavs) => {
      removeFavInStorage(id);
      return localFavs.filter((fav) => fav.id !== id);
      
    });
  };

  return (
    <>
      <main className={theme}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {localFavs.map((fav) => (
            <Card
              key={fav.id}
              dentist={fav}
              name={fav.name}
              username={fav.username}
              id={fav.id}
              onRemoveFav={() => handleRemoveFav(fav.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Favs;
