<template>
  <div class="home">
    <Time />
    <div class="home__form">
      <Form @data="setData" />
    </div>

    <div class="home__results" v-if="Object.keys(data).length > 0">
      <div class="home__controls">
        <button @click="previous" :disabled="currentIndex === 0">
          Previous
        </button>
        <h2>
          {{ showName }} <span v-if="webChannelName">{{ webChannelName }}</span>
        </h2>
        <button
          @click="next"
          :disabled="data?.genres?.length === currentIndex + 1"
        >
          Next
        </button>
      </div>

      <Show
        v-for="i in 1"
        :key="i"
        v-show="Object.keys(data).length > 0"
        :data="data"
        :currentIndex="currentIndex"
        :animation="animation"
      />
    </div>
    <div class="home__results__empty" v-else>
      <h1>No Results Found</h1>

      <small>Try as key word search of TV shows...</small>
    </div>
  </div>
</template>

<script>
import { Time, Form, Show } from "../../components";

// import json from 'json'
export default {
  name: "Home",
  components: { Time, Form, Show },
  data() {
    return {
      data: {},
      currentIndex: 0,
      animation: false,
    };
  },
  computed: {
    showName() {
      return this.data?.name;
    },
    webChannelName() {
      return this.data?.webChannel?.name;
    },
    genresType() {
      return this.data?.genres;
    },
  },
  methods: {
    next() {
      this.currentIndex === this.genresType?.length - 1
        ? this.currentIndex === this.genresType?.length - 1
        : this.currentIndex++;
      this.animation = !false;
      const self = this;
      setTimeout(function() {
        self.animation = false;
      }, 1000);
    },
    previous() {
      this.currentIndex === 0 ? this.currentIndex === 0 : this.currentIndex--;
      this.animation = !false;
      const self = this;
      setTimeout(function() {
        self.animation = false;
      }, 1000);
    },
    setData(data) {
      this.data = data;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.home {
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.home__form {
  width: 100%;
  display: grid;
  place-items: center;
  height: 20vh;
}
.home__results {
  /* flex: 1; */
  /* height: 40vh; */
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  max-width: 500px;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 20px;
  margin: 5px auto;
  border-radius: 5px;
}
.home__results::-webkit-scrollbar {
  display: none;
}
.home__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.home__controls > h2 {
  margin: 0 5px;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
}
.home__controls > h2 > span {
  font-size: 12px;
  background: green;
  padding: 2px 5px;
  border-radius: 999px;
  height: fit-content;
  margin-left: 2px;
  font-weight: 400;
}
.home__controls > button {
  width: 70px;
  padding: 3px 2px;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.home__controls > button:active {
  background: lightseagreen;
  color: white;
  transition: 100ms;
}
.home__results__empty {
  width: 100%;
  max-width: 500px;
  height: 30vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  user-select: none;
  user-zoom: none;
  margin: auto;
}
.home__results__empty > small {
  color: gray;
}
</style>
