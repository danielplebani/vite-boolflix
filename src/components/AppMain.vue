<script>
import { state } from '../state.js';

export default {
  name: 'AppMain',

  data() {
    return {
      state,
      overImage: null,
    };
  },

  methods: {
    showInfo(index) {
      this.overImage = index;
      const movie = this.state.movies[index];

      this.state.getCast(movie.id, movie.media_type)
        .then((cast) => {
          movie.cast = cast;
        }
      )
    },
    
    hideInfo(index) {
      this.overImage = null;
    },
  },

  created() {
    this.state.connectAPI();
  },
};
</script>


<template>
  <div class="d-flex gap-2 flex-wrap pb-5">
    <div class="position-relative" v-for="(movie, index) in state.movies" :key="index">
      <ul class="list-group" v-if="movie.poster_path">
        <img class="coverMovie" :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path"
          @mouseenter="showInfo(index)" @mouseleave="hideInfo(index)">

        <div @mouseenter="showInfo(index)" @mouseleave="hideInfo(index)" class="info" v-if="overImage == index">
          <li class="list-group-item">
            <span v-if="movie.media_type == 'movie'"><strong>TITOLO:</strong> <br> {{ movie.title }}</span>
            <span v-if="movie.media_type == 'tv'"><strong>TITOLO:</strong> <br> {{ movie.name }}</span>
          </li>

          <li class="list-group-item">
            <span v-if="movie.media_type == 'movie'"><strong>TITOLO ORIGINALE:</strong> <br> {{ movie.original_title }}</span>
            <span v-if="movie.media_type == 'tv' || movie.media_type == 'person'"><strong>TITOLO ORIGINALE:</strong> <br> {{ movie.original_name }}</span>
          </li>

          <li class="list-group-item" v-if="movie.overview"><strong>TRAMA:</strong> <br> {{ movie.overview }}</li>

          <li class="list-group-item">
            <div class="d-flex align-items-center">
              <span class="me-2"><strong>LINGUA:</strong></span>
              <span v-if="!['en', 'es', 'fr', 'it', 'ja', 'tr'].includes(movie.original_language)">{{ movie.original_language }}</span>
              <img class="flags" :src="state.languageFlags[movie.original_language]"
                v-if="['en', 'es', 'fr', 'it', 'ja', 'tr'].includes(movie.original_language)">
            </div>
          </li>

          <li class="list-group-item">
            <div class="d-flex align-items-center">
              <span class="me-1"><strong>VOTO:</strong></span>
              <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star text-warning"></i>
              <i v-for="i in (5 - Math.ceil((movie.vote_average / 2)))" class="fa-regular fa-star"
                v-if="movie.vote_average != 0"></i>
              <i v-for="i in 5" class="fa-regular fa-star" v-if="movie.vote_average == 0"></i>
            </div>
          </li>

          <li class="list-group-item">
            <strong>CAST:</strong> <br>
            <ul>
              <li v-for="actor in movie.cast">{{actor.name}}</li>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: absolute;
  top: 0;
  cursor: pointer;

  li {
    background-color: rgba(0, 0, 0, 0.926);
    color: white;
    border: 0;

    strong {
      color: red;
    }
  }
}

.flags {
  width: 25px;
  height: 100%;
}

.coverMovie {
  cursor: pointer;
  width: 342px;
  height: 513px;
}
</style>
