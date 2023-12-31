// state.js
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
  base_url: 'https://api.themoviedb.org/3/search/multi?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe&include_adult=false&language=it-IT&page=1&query=a',
  cast_movie_url: 'https://api.themoviedb.org/3/movie/id/credits?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe',
  cast_tv_url: 'https://api.themoviedb.org/3/tv/id/credits&api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe',

  movies: null,

  languageFlags: {
    en: 'src/assets/img/Gran-bretagna.jpg',
    es: 'src/assets/img/spagna.jpg',
    fr: 'src/assets/img/Francia.jpg',
    it: 'src/assets/img/ita.png',
    ja: 'src/assets/img/bandiera-giappone.png',
    tr: 'src/assets/img/ger.png',
  },

  connectAPI() {
    axios
      .get(this.base_url)
      .then((response) => {
        console.log(response.data.results);
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  getCast(id, mediaType) {
    const castUrl =
      mediaType === 'movie'
        ? `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe`
        : `https://api.themoviedb.org/3/tv/${id}/credits?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe`;

    return axios
      .get(castUrl)
      .then((response) => {
        return response.data.cast.slice(0, 5);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

