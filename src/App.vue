<template>
  <div id="app">
    <h1>Fantasy Football Top 100</h1>
    <FilterAll/>
    <List/>
  </div>
</template>

<script>
import FilterAll from "./components/FilterAll";
import List from "./components/List";

export default {
  name: "app",
  components: {
    List,
    FilterAll,
  },
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
