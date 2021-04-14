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
// 1st way with do-while:

// let i = 0, fstAnswer, sndAnswer;

// do {
//       fstAnswer = prompt('One of your last looked movies?', '');
//       sndAnswer = +prompt('What score do you give that movie?', '');
//       if (fstAnswer != null && sndAnswer != null &&
//           fstAnswer != '' && sndAnswer != '' &&
//           fstAnswer.length < 50) {

//             personalMovieDB.movies[fstAnswer] = sndAnswer;
//             console.log();
//       } else {
//         console.log('Error..');
//         --i;
//       }
//         ++i;

//       } while (i <= 1);

// // result in browser console..
// console.log(personalMovieDB);

// 2nd way with for:

for (let i = 0; i <= 1; ++i) {

    const fstAnswer = prompt('One of your last looked movies?', ''),
          sndAnswer = +prompt('What score do you give that movie?', '');

    if (fstAnswer !== '' && fstAnswer !== null && fstAnswer.length < 50 &&
        sndAnswer !== '' && sndAnswer !== null) {

        personalMovieDB.movies[fstAnswer] = sndAnswer;
        console.log('Done!');

    } else {

        console.log('Error..');
        --i;

    }
}

console.log(personalMovieDB.movies);

if (numberOfFilms < 10) {
    console.log('Not many movies was watched..');

} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {

    console.log('You\'re normal, regular viewer..');
} else if (numberOfFilms > 30) {

    console.log('You\'re movie-maniak, my dear!')
} else {

    console.log('Some Error.. Check your code..');
}
