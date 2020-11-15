const db = require("./db");
const Movie = require("./movie");

async function seed() {
  await db.sync({ force: true });

  await Movie.create({ imdbID: "tt0848228", upvotes: 2 });

  // add seed data later
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
