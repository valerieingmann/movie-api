const router = require("express").Router();
const axios = require("axios").default;
const Movie = require("../db/movie");
if (process.env.NODE_ENV === "development") {
  require("../../secrets");
}

const apiKey = process.env.RAPID_API_KEY;

router.get("/:imdbID", async (req, res, next) => {
  try {
    const imdbID = req.params.imdbID;

    const options = {
      method: "GET",
      url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
      params: { i: imdbID, r: "json" },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    };

    // try to find movie in database
    const movie = await Movie.findOne({
      where: {
        imdbID
      }
    });

    // initialize upvotes and downvotes to zero, so that they will have values if we don't find the movie in the database
    let upvotes = 0;
    let downvotes = 0;

    if (movie) {
      upvotes = movie.upvotes;
      downvotes = movie.downvotes;
    }

    // make call to 3rd party API to get movie details
    const { data } = await axios.request(options);

    // set votes to values from my database (or 0 if movie isn't saved yet)
    data.upvotes = upvotes;
    data.downvotes = downvotes;

    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
