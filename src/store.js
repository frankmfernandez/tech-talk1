import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    rbResults:[],
    wrResults:[],
    qbResults:[],
    rb:false,
    qb:false,
    wr:false,
    sortBy:{
      totalFantasyPoints:false,
      totalPprPoints:false,
    }
  },
  mutations: {
    setPlayers(state, players) {
      state.players = players;
    },
    setRbResults(state, rbs) {
        state.rbResults = rbs;
    },
    setWrResults(state, wrs) {
        state.wrResults = wrs;
    },
    setQbResults(state, qbs) {
        state.qbResults = qbs;
      },
    setRb(state, flag) {
      state.rb = flag;
    },
    setWr(state, flag) {
      state.wr = flag;
    },
    setQb(state, flag) {
      state.qb = flag;
    },
    setTotalFantasyPoints(state, flag) {
      state.sortBy.totalFantasyPoints = flag;
    },
    setTotalPprPoints(state, flag) {
      state.sortBy.totalPprPoints = flag;
    },
    
  },
  actions: {

    async loadQueryParams({ commit }) {
      try {
        const params = {};
        Object.keys(this.state).forEach((property) => {
            if (property !== "players"){
                params[property] = this.state[property] 
            }
        })
        console.log("Data For loadQueryParams", JSON.stringify(params));
        const { data: players } = await axios.post("/api/players", {
          queryParams: params,
        });
        const playerResults = players.map((player) => ({
          name: player.name,
          positionRank: player.positionRank,
          passingYards: player.passingYards,
          passingTds: player.passingTds,
          rushYards: player.rushingYards,
          rushTds: player.rushingTds,
          receptionYards: player.receptionYards,
          receptionTds: player.receptionTds,
          totalFantasyPoints: player.totalFantasyPoints,
          totalPprPoints: player.totalPprPoints,
        }));

        playerResults.splice(20)

        console.log("Data From Server Side; ", { data: players });
        commit("setPlayers", playerResults);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
