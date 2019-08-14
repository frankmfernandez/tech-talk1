<template>
  <div class="list">
    <QbList v-if="this.$store.state.qb===true"/>
    <RbList v-if="this.$store.state.rb===true"/>
    <WrList v-if="this.$store.state.wr===true"/>
  </div>
</template>

<script>
import RbList from "./RbList";
import QbList from "./QbList";
import WrList from "./WrList";

export default {
  name: "List",
  components:{
      RbList,
      QbList,
      WrList,
  }
};
</script>

<style scoped>
</style>
