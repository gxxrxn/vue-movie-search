<template>
  <ul class="movie-list">
    <MovieItem
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie-id="movie.imdbID"
      :title="movie.Title"
      :year="movie.Year"
      :type="movie.Type"
      :poster="movie.Poster"
    >
      {{ movie }}
    </MovieItem>
  </ul>
</template>

<script>
  import MovieItem from "@/components/MovieItem.vue";

  export default {
    components: { MovieItem },
    props: {
      movies: { type: Array, required: true }
    }
  }
</script>

<style lang="scss" scoped>
  .movie-list {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    padding: 10px;
    gap: 10px;
  }

  @media (min-width: 400px) {
    .movie-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 550px) {
    .movie-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
