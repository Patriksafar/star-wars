export type Movie = {
  id: string;
  title: string;
  poster: string;
  description: string;
  year: string;
  rating: number;
  actors: Array<Record<"id", string>>;
};

export type Movies = Movie[];

export type Actor = {
  id: string;
  name: string;
  photo: string;
  movies: Array<Record<"id", string>>;
};

export type Actors = Actor[];

// star wars main 3 actors per movie
export const actors: Actors = [
  {
    id: "1",
    name: "Mark Hamill",
    photo: "http://localhost:3000/static/actors/1.jpeg",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "2",
    name: "Harrison Ford",
    photo: "http://localhost:3000/static/actors/2.jpeg",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "3",
    name: "Carrie Fisher",
    photo: "http://localhost:3000/static/actors/3.png",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "4",
    name: "Natalie Portman",
    photo: "http://localhost:3000/static/actors/4.jpeg",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "5",
    name: "Ewan McGregor",
    photo: "http://localhost:3000/static/actors/5.jpg",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "6",
    name: "Hayden Christensen",
    photo: "http://localhost:3000/static/actors/6.jpg",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "7",
    name: "Liam Neeson",
    photo: "http://localhost:3000/static/actors/7.jpg",
    movies: [{ id: "1" }],
  },
  {
    id: "8",
    name: "Samuel L. Jackson",
    photo: "http://localhost:3000/static/actors/8.jpg",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "9",
    name: "Daisy Ridley",
    photo: "http://localhost:3000/static/actors/9.jpeg",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "10",
    name: "John Boyega",
    photo: "http://localhost:3000/static/actors/10.jpg",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "11",
    name: "Oscar Isaac",
    photo: "http://localhost:3000/static/actors/11.jpeg",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "12",
    name: "Adam Driver",
    photo: "http://localhost:3000/static/actors/12.jpeg",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
];

// the list of star wars movies with movie descriptions
// and rating (out of 5)
export let movies: Movies = [
  {
    id: "1",
    title: "The Phantom Menace",
    poster: "http://localhost:3000/static/movies/episode-1.jpeg",
    year: "1999",
    rating: 2.5,
    actors: [{ id: "7" }, { id: "5" }, { id: "6" }, { id: "4" }],
    description:
      "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
  },
  {
    id: "2",
    title: "Attack of the Clones",
    poster: "http://localhost:3000/static/movies/episode-2.jpeg",
    year: "2002",
    rating: 2.5,
    actors: [{ id: "5" }, { id: "6" }, { id: "4" }, { id: "8" }],
    description:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
  },
  {
    id: "3",
    title: "Revenge of the Sith",
    poster: "http://localhost:3000/static/movies/episode-3.jpeg",
    year: "2005",
    rating: 3,
    actors: [{ id: "5" }, { id: "6" }, { id: "4" }, { id: "8" }],
    description:
      "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
  },
  {
    id: "4",
    title: "A New Hope",
    poster: "http://localhost:3000/static/movies/episode-4.jpeg",
    year: "1977",
    rating: 4,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },
  {
    id: "5",
    title: "The Empire Strikes Back",
    poster: "http://localhost:3000/static/movies/episode-5.jpg",
    year: "1980",
    rating: 4.5,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
  },
  {
    id: "6",
    title: "Return of the Jedi",
    poster: "http://localhost:3000/static/movies/episode-6.jpg",
    year: "1983",
    rating: 4,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
  },
  {
    id: "7",
    title: "The Force Awakens",
    poster: "http://localhost:3000/static/movies/episode-7.jpeg",
    year: "2015",
    rating: 4,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  },
  {
    id: "8",
    title: "The Last Jedi",
    poster: "http://localhost:3000/static/movies/episode-8.jpeg",
    year: "2017",
    rating: 3.5,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
  },
  {
    id: "9",
    title: "The Rise of Skywalker",
    poster: "http://localhost:3000/static/movies/episode-9.jpeg",
    year: "2019",
    rating: 3,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
  },
];
