<template>
  <li class="movie-list__item">
    <div class="movie-list__item-poster">
      <img
        width="150"
        :src="poster === 'N/A' ? '/popcorn.png' : poster"
        alt="poster"
      />
    </div>
    <div>
      <p>{{ title }}</p>
      <p>{{ year }} / {{ type }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true },
      year: { type: String, required: true },
      movieId: { type: String, required: true },
      type: { type: String, required: true },
      poster: { type: String, required: true },
    },
  }
</script>

<style lang="scss" scoped>
  .movie-list__item {
    width: 150px;

    &-poster {
      width: 150px;
      min-height: 223px;
      
      & > img {
        cursor: pointer;
        z-index: 1;
        
        &:hover {
          transform: scale(1.15);
          transition: 0.4s;
        }
      }
    }
  }
</style>
