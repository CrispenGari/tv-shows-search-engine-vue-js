<template>
  <div class="time">
    <time>{{ getDate }}</time>
    <time>{{ getTime }}</time>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {};
  },
  methods: {},
  computed: {
    getTime() {
      const date = new Date();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      return `${String(hours).length === 2 ? hours : "0" + hours}:${
        String(minutes).length === 2 ? minutes : "0" + minutes
      }:${String(seconds).length === 2 ? seconds : "0" + seconds}`;
    },
    getDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const date = new Date();
      const day = date.getDay();
      const date_ = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${days[day]} ${date_} ${months[month]} ${year}`;
    },
  },
};
</script>

<style scoped>
.time {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  user-select: none;
  padding: 10px 15px;
  border-radius: 5px;
  height: 10vh;
  display: grid;
  place-items: center;
}
.time > time {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
}
.time > time:last-child {
  font-size: 12px;
  color: gray;
}
</style>
