<template>
  <div class="historycard">
    <h1>{{ history?.query }}</h1>
    <time
      ><span>{{ history?.date }}</span
      ><span>{{ history?.time }}</span></time
    >
  </div>
</template>

<script>
export default {
  name: "HistoryCard",
  props: {
    history: Object,
  },
};
</script>

<style scopped>
.historycard {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 5px 0;
  border-radius: 5px;
  padding: 10px;
  user-select: none;
  user-zoom: none;
}
.historycard > h1 {
  font-size: 15px;
  font-weight: 500;
}
.historycard > time {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  color: gray;
  font-size: small;
}
.historycard:hover {
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
