<template>
  <div class="list">
    <h2>Top WRs</h2>
    <div class ="results" v-bind:key="player.name" v-for="player in $store.state.wrResults">
      <div class="player-profile" id="player-name">{{player.name}}</div>
      <div class="player-profile">Position:{{player.position}}</div>
      <div class="player-profile">Position Rank:{{player.position_rank}}</div>
      <div class="player-profile">Reception Yards:{{player.reception_yards}}</div>
      <div class="player-profile">Reception Tds:{{player.reception_tds}}</div>
      <div class="player-profile">Total Fantasy Points:{{player.total_fantasy_points}}</div>
      <div class="player-profile">Total PPR Points:{{player.total_ppr_points}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WrList",
};
</script>

<style>
.results {
  padding: 5px;
  border-width: 5px;
  border-radius: 5px;
  width: 25%;
  border-radius: 25px;
  border:solid gray;
  text-align: center;
}

.list{
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;

}

#player-name {
  font-weight: bold;
}

</style>
