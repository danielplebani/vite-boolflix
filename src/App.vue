<script>

import { state } from './state.js';

export default{
  data(){
    return{
      state,

      searchedMovie: '',
    }
  },

  methods:{
    searchResults(){
      state.base_url = state.base_url + `&query=${this.searchedMovie}`
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
  <div class="p-5 d-flex flex-column align-items-center">

    <h1 class="mb-2">BOOLFLIX</h1>

    <nav class="navbar bg-body-tertiary mb-5">
      <div class="container-fluid">
        <div class="d-flex">
          <input class="form-control me-1" type="search" placeholder="Search a movie" v-model="searchedMovie" @keyup.enter="searchResults()">
          <button class="btn btn-outline-success border-2" type="submit" @click="searchResults()"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </nav>

    <div class="d-flex gap-3 flex-wrap justify-content-center">
      <ul class="list-group" v-for="movie in state.movies">
        <li class="list-group-item">TITOLO: {{movie.title}}</li>
        <li class="list-group-item">TITOLO ORIGINALE: {{movie.original_title}}</li>
        <li class="list-group-item">LINGUA: {{movie.original_language}}</li>
        <li class="list-group-item">VOTO: {{movie.vote_average}}</li>
      </ul>
    </div>
    

  </div>
</template> 

<style lang="scss" scoped>
ul{
  width: calc(100% / 3);

    li{
      background-color: aquamarine;
      border-color: black;
    }
  
}
</style>
