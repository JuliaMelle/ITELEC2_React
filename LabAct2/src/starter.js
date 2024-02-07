const data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    duration: 142, // in minutes
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    duration: 175, // in minutes
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 1990,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    duration: 148, // in minutes
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    duration: 154, // in minutes
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Maggie Gyllenhaal",
    ],
    duration: 152, // in minutes
  },
  // New Movie Objects
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    duration: 142, // in minutes
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    cast: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
    duration: 136, // in minutes
  },
  {
    id: 8,
    title: "Schindler's List",
    genre: "Biography",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Embeth Davidtz"],
    duration: 195, // in minutes
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    releaseYear: 2001,
    description:
      "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
    duration: 178, // in minutes
  },
  {
    id: 10,
    title: "Inglourious Basterds",
    genre: "Adventure",
    releaseYear: 2009,
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    director: "Quentin Tarantino",
    cast: [
      "Brad Pitt",
      "Diane Kruger",
      "Christoph Waltz",
      "Michael Fassbender",
    ],
    duration: 153, // in minutes
  },
];

//Destructuring

// function getMovies() {
//   return data;
// }
// function getMovie(id) {
//   return data.find((id) => d.id === id);
// }

// const movies = getMovies();
// console.log(movies);
// const title = movies[0].title;
// const director = movies[0].director;
// console.log(title, director);

// const movie = getMovie(3);
// movie;

//Object Desctructuring

// const title = movie.title;
// const director = movie.director;
// const releaseYear = movie.releaseYear;

// const { title, director, releaseYear, cast } = movie;

// console.log(title, director, releaseYear, cast);

// array destructuring

// const primaryCast = cast[0];
// const secondaryCast = cast[1];
// console.log(primaryCast, secondaryCast);

// Destructuring
function getMovies() {
  return data;
}
function getMovie(id) {
  return data.find((item) => item.id === id); // Corrected parameter name
}

const movies = getMovies();
const movie1 = getMovie(1);
const movie2 = getMovie(2);

console.log(movies);
// const firstTitle = movies[0].title;
// const firstDirector = movies[0].director;
// console.log(firstTitle, firstDirector);

const movie = getMovie(3);
// const { title, director, releaseYear, cast } = movie;

// console.log(title, director, releaseYear, cast);

// array destructuring

// const [primaryCast, ...otherCast] = cast; // Using array destructuring to get elements
// const primaryCast = cast[0];
// const secondaryCast = cast[1];
// console.log(primaryCast, otherCast);1

const updatedMovie = { ...movie, language: "English", releaseYear: 1990 };
console.log(updatedMovie);

// put together
const twomovies = { movies: { ...movie, ...movie1, ...movie2 } };
console.log(twomovies);

// ternary operator
// const newRelease = releaseYear > 2000 ? "New Release" : "Old";
// console.log(newRelease);

// arrow function

// function sum(num, num1) {
//   num *= num;
//   return num + num1;
// }
// console.log(sum(2, 4));

const sum = (num, num1) => {
  num *= num;
  return num + num1;
};

console.log(sum(2, 4));

// [1] Extract the title , genre, description properties from the movie
// with the id=4
const moviefour = getMovie(4);
const { title4, genre4, description } = moviefour;
console.log(moviefour);

// [2] Extract the title , genre, duration cast properties from the movie
// with the id = 5;
const movieWithId5 = getMovie(5);
const { title, genre, duration, cast } = movieWithId5;
console.log(movieWithId5);

// [3] Using spread operator , add new cast (Gab Montano)
// to the movie inception
const inceptionMovie = getMovie(3);
inceptionMovie.cast = [...inceptionMovie.cast, "Gab Montano"];
console.log(inceptionMovie.cast);

//  [4] Add another property - languages: English and Tagalog of the movie
// with id = 6
const movieWithId6 = getMovie(6);
movieWithId6.languages = ["English", "Tagalog"];
console.log(movieWithId6);

//  [5] Convert this function to arrow function
// function toCaps(fname, surname) {
//   const name = fname + surname;
//   return name.toUpperCase();
// }
const toCaps2 = (fname, surname) => {
  const name = fname + surname;
  return name.toUpperCase();
};
console.log(toCaps2("gab", " Montano"));
