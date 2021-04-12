'use strict';

// 1
const numberOfFilms = +prompt('How many movies do you already looked?', '');

// 2
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// 3 >> two times need to be ask..
let i = 0, fstAnswer, sndAnswer;

do {
      fstAnswer = prompt('One of your last looked movies?', ''),
      sndAnswer = +prompt('What score do you give that movie?', '');
      personalMovieDB.movies[fstAnswer] = sndAnswer;
      ++i;

      } while (i <= 1);

// result in browser console..
console.log(personalMovieDB);