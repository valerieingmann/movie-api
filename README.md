# Search Movies by Title

A simple app to search movies by title, view movie details, and upvote or downvote the movie. 

![demo gif](https://github.com/valerieingmann/movie-api/blob/main/movie-api.gif)

View deployed app on Heroku [here](https://search-movie-by-title.herokuapp.com)!

Movie data from the [Movie Database (IMDb Alternative)](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details) API.

## Running code

 Obtain an API key from https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative
 
 ```
 git clone https://github.com/valerieingmann/movie-api.git
 cd movie-api
 touch secrets.js
 
 // add this line to secrets.js
 process.env.RAPID_API_KEY = YOUR_API_KEY
 
 // must have psql CLI installed for this step
 createdb movie-api
 
 npm install
 npm run seed
 npm run start-dev
 
 ```
Navigate to localhost:3000 in the broswer!

## Tech stack

React, Node.js, Express, Postgres, Sequelize
