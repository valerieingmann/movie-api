const Movie = require("../db/movie");

const router = require("express").Router();

router.put("/:imdbID/", async (req, res, next) => {
  try {
    const { imdbID } = req.params;
    const [movie] = await Movie.findOrCreate({ where: { imdbID } });

    // req.body.add will tell me what I need to add. Value will be either null, "upvotes", or "downvotes"
    if (req.body.add) {
      let field = req.body.add;
      movie[field] = movie[field] + 1;
      await movie.save();
    }

    // req.body.remove will tell me what I need to remove. Value will be either null, "upvotes", or "downvotes"
    if (req.body.remove) {
      let field = req.body.remove;
      // check if greater than zero before removal, because we shouldn't have negative votes
      if (movie[field] > 0) {
        movie[field] = movie[field] - 1;
        await movie.save();
      }
    }

    res.json(movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
