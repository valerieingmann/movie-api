const Sequelize = require("sequelize");
const db = require("./db");

// use imdbID as primary key so that there are no duplicate movies

const Movie = db.define(
  "movie",
  {
    imdbID: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    upvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    downvotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },
  { timestamps: false }
);

module.exports = Movie;
