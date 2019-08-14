<template>
  <div class="list">
    <h2>Top RBs</h2>
    <div class="results" v-bind:key="player.name" v-for="player in $store.state.rbResults">
      <div class="player-profile" id="player-name">{{player.name}}</div>
      <div class="player-profile">Position:{{player.position}}</div>
      <div class="player-profile">Pos Rank:{{player.position_rank}}</div>
      <div class="player-profile">Rush Yards:{{player.rushing_yards}}</div>
      <div class="player-profile">Rush Tds:{{player.rushing_tds}}</div>
      <div class="player-profile">Reception Yards:{{player.reception_yards}}</div>
      <div class="player-profile">Reception Tds:{{player.reception_tds}}</div>
      <div class="player-profile">Total Fantasy Points:{{player.total_fantasy_points}}</div>
      <div class="player-profile">Total PPR Points:{{player.total_ppr_points}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RbList",
};
</script>

<style>


h2{
  text-align: center;
  padding:5px;
  margin-block-start: 0.4em;
  margin-block-end: 0.4em;
}

#player-name {
  font-weight: bold;
}
</style>
