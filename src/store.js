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
          const { data: players } = await axios.get("http://localhost:8000/api/players") 

        const wrResults = players.filter((item)=>item.position === "WR")
        const rbResults = players.filter((item)=>item.position === "RB")
        const qbResults = players.filter((item)=>item.position === "QB")
        
        //console.log("Data From Server Side; ", { data: players });

        commit("setRbResults", rbResults);
        commit("setWrResults", wrResults);
        commit("setQbResults", qbResults);


        //commit("setPlayers", playerResults);
      } catch (err) {
        //console.log(err);
      }
    },
  },
});
