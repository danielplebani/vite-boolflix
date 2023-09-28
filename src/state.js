import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/multi?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe&include_adult=false&language=it-IT&page=1&media_type=movie',
    movies: null,

    languageFlags: {
      en: `<img src="./assets/img/Gran-bretagna.jpg" alt="en-flag">`,
      es: `<img src="./assets/img/usa.jpg" alt="es-flag">`,
      fr: `<img src="./assets/img/Francia.jpg" alt="fr-flag">`,
      it: `<img src="./assets/img/ita.png" alt="it-flag">`,
      ja: `<img src="./assets/img/bandiera-giappone.png" alt="ja-flag">`,
    },
  
    connectAPI(){
      axios
        .get(this.base_url)
        .then(response => {
          this.movies = response.data.results;
        })
        .catch(error => {
          console.log('Error:');
          console.error(error);
        })
    }
  })