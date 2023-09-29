<script>
import { state } from './state.js';

export default{
  data(){
    return{
      state,

      searchedMovie: ''
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
  <div class="p-2 d-flex flex-column align-items-center">

    <h1 class="mb-2 text-danger">BOOLFLIX</h1>

    <nav class="navbar mb-5 bg-primary-subtle">
      <div class="container-fluid bg-primary-subtle">
        <div class="d-flex bg-primary-subtle">
          <input class="form-control me-1 bg-info border-0 text-white" type="search" placeholder="Search a movie" v-model="searchedMovie" @keyup.enter="searchResults()">
          <button class="btn btn-info border-2" type="submit" @click="searchResults()"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </nav>

    <div class="d-flex gap-3 flex-wrap justify-content-center">
      <ul class="list-group" v-for="movie in state.movies" :class="state.movies.length === 1 ? 'w-100': '' ">
        <img class="poster" :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" v-if="movie.poster_path">
        <li class="list-group-item" v-if="movie.media_type != 'person'">
          <span v-if="movie.media_type == 'movie'">NOME: {{movie.title}}</span>
          <span v-if="movie.media_type == 'tv'">NOME: {{movie.name}}</span>
        </li>
      
        <li class="list-group-item">
          <span v-if="movie.media_type == 'movie'">NOME ORIGINALE: {{movie.original_title}}</span>
          <span v-if="movie.media_type == 'tv' || movie.media_type == 'person'">NOME ORIGINALE: {{movie.original_name}}</span>
        </li>

        <li class="list-group-item d-flex" v-if="movie.media_type != 'person'">
          <span class="me-2">LINGUA: </span>
          <span class="me-2" v-if="!['en', 'es', 'fr', 'it', 'ja', 'tr'].includes(movie.original_language)">{{movie.original_language}}</span>
          <img class="flags" :src="state.languageFlags[movie.original_language]">
        </li>

        <li class="list-group-item d-flex align-items-center" v-if="movie.media_type != 'person'">
          <span class="me-1">VOTO:</span>

          <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star text-warning"></i>
          <i v-for="i in (5 - Math.ceil((movie.vote_average / 2)))" class="fa-regular fa-star" v-if="movie.vote_average != 0"></i>
          <i v-for="i in 5" class="fa-regular fa-star" v-if="movie.vote_average == 0"></i>
        </li>
        
        <li class="list-group-item">TIPO: {{movie.media_type}}</li>
      </ul>
    </div>

  </div>
</template> 



<style lang="scss" scoped>
ul{
  width: calc(100% / 6);

    li{
      background-color: aquamarine;
      border-color: black;
    }
}

.flags{
  width: 40px;
}
</style>
