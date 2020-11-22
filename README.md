# Search Movies by Title

A simple app to search movies by title, view movie details, and upvote or downvote the movie. 

Movie data from the [Movie Database (IMDb Alternative)](https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details) API.

View deployed app on [Heroku](https://search-movie-by-title.herokuapp.com)

## Running code

 Obtain an API key from https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative
 
 ```
 git clone https://github.com/valerieingmann/movie-api.git
 cd movie-api
 touch secrets.js
 
 // add this line to secrets.js
 process.env.RAPID_API_KEY = YOUR_API_KEY
 
 npm install
 npm run start-dev
 
 ```
Navigate to localhost:3000 in the broswer!

## Tech stack

React, Node.js, Express, Postgres, Sequelize
