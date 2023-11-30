import Favs from "../../Routes/Favs";

const getFavFromStorage = () => {
  const localData = localStorage.getItem('favs');
  return localData ? JSON.parse(localData) : [];
};

const setFavInStorage = (dentist) => {
  const storageFavs = getFavFromStorage();
  const isFavOnList = storageFavs.filter((fav) => {
    return fav.id === dentist.id;
  });
  if (isFavOnList.length === 0) {
    storageFavs.push(dentist);
    localStorage.setItem('favs', JSON.stringify(storageFavs));
    alert('Dentista agregado a favoritos');
  } else {
    alert('Dentista ya se encuentra en favoritos');
    
  }
};

const removeFavInStorage = (id) => {
  let storageFavs = getFavFromStorage();
  const index = storageFavs.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    storageFavs.splice(index, 1);
    localStorage.setItem('favs', JSON.stringify(storageFavs));
    alert('Dentista eliminado de favoritos');
    isFavorited(id);
  } else {
    alert('A ocurrido un error');
  }
  
};

const isFavorited = (id) => {
  const localData = getFavFromStorage();
  const isFavOnList = localData.filter((fav) => {
    return fav.id === id;
  });
  return isFavOnList.length === 1;
};

export { isFavorited, removeFavInStorage, getFavFromStorage, setFavInStorage };
