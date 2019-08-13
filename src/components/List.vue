<template>
  <div class="list">
    <h1>This is the List</h1>
    <div id ="player-results" v-for="player in $store.state.players">
      <div>{{player.name}}</div>
      <div>{{player.positionRank}}</div>
      <div>{{player.passingYards}}</div>
      <div>{{player.passingTds}}</div>
      <div>{{player.rushYards}}</div>
      <div>{{player.rushTds}}</div>
      <div>{{player.receptionYards}}</div>
      <div>{{player.receptionTds}}</div>
      <div>{{player.totalFantasyPoints}}</div>
      <div>{{player.totalPprPoints}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style scoped>
</style>
