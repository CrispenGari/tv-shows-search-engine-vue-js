<template>
  <form class="form" @submit.prevent="submitHandler">
    <input
      @keydown="submitHandler"
      v-model.trim="query"
      type="text"
      placeholder="eg. Girls"
      class="form__input"
    />
  </form>
</template>

<script>
import axios from "../../data/axios";
export default {
  name: "Form",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    submitHandler(event) {
      if (
        (event.key === "Enter" &&
          event.code === "Enter" &&
          event.keyCode == 13 &&
          this.query) ||
        event.type === "submit"
      ) {
        const self = this;
        (async function() {
          const __ = await axios.get(`shows?q=${self.query ? self.query : ""}`);
          console.log(__);
          self.query && self.$emit("data", __.data);
          self.query = "";
        })();
      }
    },
  },
};
</script>

<style scopped>
.form {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin: 5px 0 0 0;
  display: flex;
  user-select: none;
  user-zoom: none;
  z-index: 100;
}

.form__input {
  flex: 1;
  padding: 8px 10px;
  outline: none;
  border: none;
  background: rgba(220, 220, 220, 0.8);
  text-align: center;
  caret-color: blue;
  border-radius: 8px 0px 8px 0px;
  font-size: 18px;
}
.form__input[name="placeholder"] {
  color: white !important;
}
.form__input:focus {
  background: rgba(220, 220, 220, 1);
  border-radius: 0px 8px 0px 8px;
}
</style>
