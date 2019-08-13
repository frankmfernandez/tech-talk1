exports.up = function(knex, Proimise) {
    return knex.schema.createTable("players", (t)=>{
        t.increments("id");
        t.string("name");
        t.string("year");
        t.string("position_rank");
        t.string("overall_rank");
        t.string("team");
        t.string("position");
        t.string("age");
        t.string("passing_yards");
        t.string("passing_tds");
        t.string("rushing_yards_per_attempt");
        t.string("total_ppr_points");
        t.string("rushing_yards");
        t.string("rushing_attempts");
        t.string("rushing_tds");
        t.string("receptions");
        t.string("reception_yards");
        t.string("reception_targets");
        t.string("reception_tds");
        t.string("total_fantasy_points");
    })
}


exports.down = function(knex) {
    return knex.schema.dropTable("players");
};
