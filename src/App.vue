<template>
  <div id="app">
    <img src = "http://www.duetsblog.com/files/2014/10/NFLShieldLogo.jpeg"/>
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
img {
    max-width:50%;
    height:auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

h1{
  font-size:50px;
  font-weight:bold;
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
  background-color: #000080;
  font-color: #00008B;
  color: white;
}
</style>
