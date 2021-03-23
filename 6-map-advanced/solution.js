const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below
let tvShowsTitle = tvShows.map((tvShow) => {
  return tvShow.title;
});
console.log(tvShowsTitle);

let titleRating = tvShows.map((tvShow) => {
  return `Title: ${tvShow.title} Rating: ${tvShow.rating}`;
});
console.log(titleRating);

let x = tvShows.map((tvShow) => {
  if (tvShow.rating >= 9) {
    return tvShow.title.toUpperCase();
  } else {
    return tvShow.title.toLowerCase();
  }
});
console.log(x);
