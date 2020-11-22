const db = require("./db");
const Movie = require("./movie");

async function seed() {
  await db.sync({ force: true });
  const movie = await Movie.create({ imdbID: "tt0451279" });
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
