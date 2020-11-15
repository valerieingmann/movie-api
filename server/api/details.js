const router = require("express").Router();
const axios = require("axios").default;
const Movie = require("../db/movie");
require("../../secrets");

const apiKey = process.env.RAPID_API_KEY;

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = {
      method: "GET",
      url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
      params: { i: id, r: "json" },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    };

    const movie = await Movie.findOne({
      where: {
        imdbID: id
      }
    });

    let upvotes = 0;
    let downvotes = 0;

    if (movie) {
      upvotes = movie.upvotes;
      downvotes = movie.downvotes;
    }

    const { data } = await axios.request(options);
    data.upvotes = upvotes;
    data.downvotes = downvotes;
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
