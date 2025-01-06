const favoriteFilm = {
  title: "Die Hard",
  year: 1988,
  genre: "action",
  star: "Bruce Willis",
  director: "John McTiernan",
};

const { title, year, genre, star, director } = favoriteFilm;

console.log(
  `My favorite film is ${title} starring ${star}. It's an ${genre} film from ${year} directed by ${director}`,
);

const dreamHoliday = {
  destination: "Japan",
  activity: "Sight Seeing",
  accommodation: "5 star hotel",
  companion: "Girlfriend",
};

const { destination, activity, accommodation, companion } = dreamHoliday;

console.log(
  `I would love to go to ${destination} to do some ${activity}, while staying at a ${accommodation} with my ${companion}`,
);

/*
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add
   extra properties or change the existing ones.
2. Destructure the object and use the individual
   variables to log out one or more sentences about
   your dream holiday.

E.g. "I would love to go to Austin, Texas to visit the Tesla HQ.
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/
