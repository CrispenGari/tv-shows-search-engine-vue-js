<template>
  <div
    :class="
      `app ${
        bannerIndex === 0
          ? 'app__banner--zero'
          : bannerIndex === 1
          ? 'app__banner--one'
          : bannerIndex === 2
          ? 'app__banner--two'
          : bannerIndex === 3
          ? 'app__banner--three'
          : bannerIndex === 4
          ? 'app__banner--four'
          : ''
      }`
    "
  >
    <div class="app__container">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import { Header } from "./components";

export default {
  name: "App",
  data() {
    return {
      bannerIndex: 0,
      isAdmin: false,
    };
  },

  components: {
    Header,
  },
  methods: {},
  computed: {},
  mounted() {
    const self = this;
    setInterval(function() {
      if (self.bannerIndex === 5) {
        self.bannerIndex = 0;
      } else {
        self.bannerIndex++;
      }
    }, 5000);
  },
  beforeUnmount() {},
  created() {},
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  background: url(./assets/1.jpg);
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  color: white;
}
.app__banner--zero {
  background: url(./assets/2.jpg);
}
.app__banner--one {
  background: url(./assets/3.jpg);
}
.app__banner--two {
  background: url(./assets/4.jpg);
}
.app__banner--three {
  background: url(./assets/5.jpg);
}
.app__banner--four {
  background: url(./assets/6.jpg);
}
.app__container {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  flex: 1;
}
</style>
