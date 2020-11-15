const router = require("express").Router();

router.use("/search", require("./search"));
router.use("/details", require("./details"));

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
