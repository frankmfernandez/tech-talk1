const playersJSON = require("./data/players.json");

exports.seed = function(knex, Promise) {
  return knex("players")
    .del()
    .then(() => {
      const playerHashMap ={
        name:'name',
        year:'year',
        positionRank:'position_rank',
        overallRank:'overall_rank',
        team:'team',
        position:'position',
        age:'age',
        passingYards:'passing_yards',
        passingTds:'passing_tds',
        rushingYardsPerAttempt:'rushing_yards_per_attempt',
        totalPprPoints: 'total_ppr_points',
        rushingYards: 'rushing_yards',
        rushingAttempts: 'rushing_attempts',
        rushingTds: 'rushing_tds',
        receptions: 'receptions',
        receptionYards: 'reception_yards',
        receptionTargets: 'reception_targets',
        receptionTds: 'reception_tds',
        totalFantasyPoints: 'total_fantasy_points'
      }
      const data = playersJSON.map((playerObj)=>{
        const newPlayerObj = {}
        for (const key in playerObj){
          newPlayerObj[playerHashMap[key]] = playerObj[key]
        }
        return newPlayerObj;
      })
      return knex("players").insert(data);
    });
};
