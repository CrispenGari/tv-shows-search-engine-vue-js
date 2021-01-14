<template>
  <div class="history">
    <h1>Your Search History</h1>
    <div class="history__container">
      <HistoryCard
        v-show="history?.length > 0"
        v-for="hist of history"
        :key="hist?.id"
        :history="hist"
      />
      <div class="history__not_found" v-show="history?.length === 1">
        Opps!!, No Search History Found
      </div>
    </div>
  </div>
</template>

<script>
import { HistoryCard } from "../../components";
export default {
  name: "History",
  components: {
    HistoryCard,
  },
  methods: {},

  data() {
    return {
      history: [
        {
          id: 1,
          query: "Game Of Thrones",
          date: "20 Dec 2020",
          time: "17:15:08",
        },
        {
          id: 2,
          query: "Into The Bad Lands",
          date: "20 Dec 2020",
          time: "17:15:07",
        },
        { id: 3, query: "Merlin", date: "20 Dec 2020", time: "17:14:08" },
        {
          id: 4,
          query: "Legend Of The Seeker",
          date: "20 Dec 2020",
          time: "17:12:54",
        },
        { id: 5, query: "Spatacus", date: "20 Dec 2020", time: "17:12:08" },
        {
          id: 6,
          query: "Game Of Thrones",
          date: "20 Dec 2020",
          time: "16:15:08",
        },
      ],
    };
  },
};
</script>

<style scoped>
.history {
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.history > h1 {
  width: 100%;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.history__container {
  width: 100%;
  margin: 10px 0;
  padding: 15px 0;
  border-top: 1px solid white;
}
.history__not_found {
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: gray;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}
.history__not_found:hover {
  animation: hover-animation 2s linear;
}

@keyframes hover-animation {
  0% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
