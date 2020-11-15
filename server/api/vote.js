const Movie = require("../db/movie");

const router = require("express").Router();

router.put("/:imdbID/", async (req, res, next) => {
  try {
    const imdbID = req.params.imdbID;
    console.log(req.params);
    const [movie] = await Movie.findOrCreate({ where: { imdbID } });

    if (req.body.add) {
      let field = req.body.add;
      movie[field] = movie[field] + 1;
      await movie.save();
    }

    if (req.body.remove) {
      let field = req.body.remove;
      if (movie[field] > 0) {
        movie[field] = movie[field] - 1;
        await movie.save();
      }
    }

    res.json({ upvotes: movie.upvotes, downvotes: movie.downvotes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
