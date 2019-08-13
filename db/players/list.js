module.exports = (knex) => {
    return () => {
        console.log("im in list")
      return knex("players")
        .select()
        .catch((err) => {
          console.log(err);
        });
    };
  };
  