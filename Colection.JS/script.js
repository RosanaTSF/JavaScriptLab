const getAnime = (map) => {
    let Anime = [];
  for ([Key, value] of map) {
      if(value === 'Anime'){
          Anime.push(key);
      } 
  }
  return Anime;
};

const personagens = new Map();

personagens.set('Kotaro', 'Anime');
personagens.set('Cheshire', 'cat');
personagens.set('Tanjiro', 'Anime');
personagens.set('Nezuco', 'Anime');

console.log(getAnime(personagens));