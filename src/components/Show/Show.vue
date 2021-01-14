<template>
  <div :class="`show ${animation && 'show--animation'}`">
    <div class="show__info">
      <small>{{ status }}</small
      ><small>{{ currentIndex + 1 }} of {{ genresType?.length }}</small
      ><small>{{ genresType?.length > 0 && genresType[currentIndex] }}</small>
    </div>
    <div class="show__image">
      <img :src="imageUrl" alt="show" />
    </div>
    <p v-html="description"></p>
    <small>~~ {{ language }}</small>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: {
    data: Object,
    currentIndex: Number,
    animation: Boolean,
  },
  computed: {
    imageUrl() {
      return this.data?.image?.original;
    },
    description() {
      return this.data?.summary;
    },
    language() {
      return this.data?.language;
    },
    status() {
      return this.data?.status;
    },
    genresType() {
      return this.data?.genres;
    },
  },
};
</script>

<style scoped>
.show {
  width: 100% !important;
  margin: 5px;
  max-width: 500px;
  user-zoom: none;
  user-select: none;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 100ms ease-out;
}
.show__image {
  width: 100%;
  display: flex;
  justify-content: center;
}
.show__image > img {
  height: 30vh;
  object-fit: contain;
}
.show__info {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
}
.show > p {
  font-size: 12px;
  margin-bottom: 10px;
  margin: 10px 0 5px 0;
}
.show > small {
  color: gray;
  text-align: center;
  width: 100%;
}
.show:hover {
  transform: scale(1.02);
  animation: rotate-card 1s linear;
}
.show:active {
  animation: none;
}
.show--animation {
  transform: scale(1.02);
  animation: rotate-card 1s linear;
}
@keyframes rotate-card {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
