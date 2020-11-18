const Sequelize = require("sequelize");
const db = require("./db");

const Movie = db.define(
  "movie",
  {
    imdbID: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
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
