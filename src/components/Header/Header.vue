<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/history">History</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scopped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  user-select: none;
  user-zoom: none;
  z-index: 15;
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}
.header > a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 100ms ease-in-out linear;
}
.header > a:hover {
  transform: scale(1.09);
}
</style>
