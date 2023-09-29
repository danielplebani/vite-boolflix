<script>
import { state } from '../state.js';

export default{

    name: 'HeaderSearchbar',

    data(){
      return{
        state,
  
        searchedMovie: ''
      }
    },
  
    methods:{
      searchResults(){
        state.base_url =  `https://api.themoviedb.org/3/search/multi?api_key=d7e5bf42a15a20ec8d10fa9ee57b36fe&include_adult=false&language=it-IT&page=1&media_type=movie&query=${this.searchedMovie}`
        state.connectAPI();
        this.searchedMovie = '';
      }
    },
  
    created() {
      state.connectAPI();
    }
}

</script>


<template>
    <nav class="navbar me-3">
      <div class="container-fluid">
        <div class="d-flex">
          <input class="form-control me-1 border-1 bg-black text-white" type="search" placeholder="Search a movie" v-model="searchedMovie" @keyup.enter="searchResults()">
          <button class="btn btn-outline-light border-1" type="submit" @click="searchResults()"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </nav>
</template> 



<style lang="scss" scoped>
input::placeholder{
  color: white;
}
</style>