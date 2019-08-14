<template>
  <div class="filter-position">
    <p>Filter By Position:</p>
    <div class="selection">
      <input type="checkbox" id="qb" v-model="checkQb" />
      <label for="qb">QB</label>
      <input type="checkbox" id="rb" v-model="checkRb" />
      <label for="rb">RB</label>
      <input type="checkbox" id="wr" v-model="checkWr" />
      <label for="wr">WR</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterAll",
  components: {},
  computed: {
    checkQb: {
      get() {
        return this.$store.state.qb;
      },
      set(flag) {
        this.$store.commit("setQb", flag);
        this.$store.dispatch("loadQueryParams");
      },
    },
    checkRb: {
      get() {
        return this.$store.state.rb;
      },
      set(flag) {
        this.$store.commit("setRb", flag);
        this.$store.dispatch("loadQueryParams");
      },
    },
    checkWr: {
      get() {
        return this.$store.state.wr;
      },
      set(flag) {
        this.$store.commit("setWr", flag);
        this.$store.dispatch("loadQueryParams");
      },
    },
    checkTotalFantasyPoints: {
      get() {
        return this.$store.state.sortBy.totalFantasyPoints;
      },
      set(flag) {
        this.$store.commit("setTotalFantasyPoints", flag);
        this.$store.dispatch("loadQueryParams");
      },
    },
    checkTotalPprPoints: {
      get() {
        return this.$store.state.sortBy.totalPprPoints;
      },
      set(flag) {
        this.$store.commit("setTotalPprPoints", flag);
        this.$store.dispatch("loadQueryParams");
      },
    },
  },
};
</script>

<style >
label{
  font-size:20px;
}
input{
  font-size:30px;
}
.selection{
  border-bottom: 2px dotted black;
  
}

p{
  text-align:left;
  border: solid black 2px;
  width: 130px;
}
</style>
