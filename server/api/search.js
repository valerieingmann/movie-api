const router = require("express").Router();
const axios = require("axios").default;
require("../../secrets");

const apiKey = process.env.RAPID_API_KEY;

router.get("/:title", async (req, res, next) => {
  try {
    const title = req.params.title;
    const options = {
      method: "GET",
      url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
      params: { s: title, page: "1", r: "json" },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    };
    let response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/details/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const options = {
      method: "GET",
      url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
      params: { i: "tt4154796", r: "json" },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
      }
    };

    const { data } = await axios.request(options);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
