<template>
  <header class="top-bar">
    <a
      class="top-bar__logo"
      href="/"
    >
      <img
        src="/popcorn.png"
        width="16"
        height="16"
        alt="logo"
      />
      <span>무비팝</span>
    </a>
    <div class="top-bar__search">
      <input
        v-model="value"
        placeholder="영화 제목을 검색해보세요"
        @change="onSearch(value)"
      />
      <img
        src="/search.svg"
        width="18"
        height="18"
        alt="search"
      />
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      onSearch: { type: Function, required: true },
    },
    data() {
      return {
        value: ""
      }
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    &__logo {
      display: flex;
      align-items: center;
      margin-right: 15px;
      cursor: pointer;

      & > img { margin-right: 3px; }
      & > span { font-weight: 700; }
    }

    &__search {
      flex-grow: 1;

      input {
        width: 100%;
        height: 25px;
        padding: 10px 10px 10px 28px;
        color: #f2f2f2;
        font-size: 0.7rem;
        background-color: #2f353a;
        border-radius: 5px;
        border: none;
        outline: none;
      }

      & > img {
        position: absolute;
        top: 5px;
        right: 0;
        bottom: 0;
        left: 6px;
      }
    }
  }
</style>
