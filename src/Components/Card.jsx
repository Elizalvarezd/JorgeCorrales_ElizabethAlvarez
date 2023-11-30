import { isFavorited, removeFavInStorage, setFavInStorage } from './utils/localStorage';
import { useState, useEffect } from 'react';
import doctorImg from '../img/doctor.jpg';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  // Agregamos a Favs
  const [isFavoritedCard, setIsFavoritedCard] = useState(isFavorited(id));

  useEffect(() => {
    setIsFavoritedCard(isFavorited(id));
  }, [id]);

  const toggleFav = () => {
    isFavoritedCard ? removeFavInStorage(id) : setFavInStorage({ name, username, id });
    setIsFavoritedCard(!isFavoritedCard);
  };

  return (
    <div className="card">
      <img className="foto" src={doctorImg} alt="foto" />
      <div>ID: {id}</div>
      <div>{name}</div>
      <div>{username}</div>
      <br />
      <button onClick={toggleFav} className="favButton">
        {isFavoritedCard ? 'I am a favorite' : 'Add fav'}
      </button>
      <Link to={`/detail/${id}`} className="favButton detail-btn">
        Detail
      </Link>
    </div>
  );
};

export default Card;
