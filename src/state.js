import {reactive} from 'vue';
import axios from 'axios';

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/multi?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe&include_adult=false&language=it-IT&page=1&media_type=movie',
    movies: null,
  
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