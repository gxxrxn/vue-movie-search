<template>
  <SearchHeader :on-search="searchMovies" />
  <div v-if="isLoading">
    로딩중...
  </div>
  <div v-else-if="!movies">
    영화를 검색해보세요.
  </div>
  <MovieList
    v-else
    :movies="movies"
  />
</template>

<script>
  import SearchHeader from "@/components/SearchHeader.vue";
  import MovieList from "@/components/MovieList.vue";
  import { API } from "@/api.js";

  export default {
    components: { SearchHeader, MovieList },
    data() {
      return {
        movies: null,
        isLoading: false
      }
    },
    methods: {
      async searchMovies(title) {
        this.isLoading = true;
        this.movies = await API.getMovieList(title);
        this.isLoading = false;
      },
    }
  };
</script>
