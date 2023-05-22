import { Actors, Movies } from "./types";

// star wars main 3 actors per movie
export const actors: Actors = [
  {
    id: "1",
    name: "Mark Hamill",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "2",
    name: "Harrison Ford",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "3",
    name: "Carrie Fisher",
    movies: [{ id: "4" }, { id: "5" }, { id: "6" }],
  },
  {
    id: "4",
    name: "Natalie Portman",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "5",
    name: "Ewan McGregor",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "6",
    name: "Hayden Christensen",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "7",
    name: "Liam Neeson",
    movies: [{ id: "1" }],
  },
  {
    id: "8",
    name: "Samuel L. Jackson",
    movies: [{ id: "1" }, { id: "2" }, { id: "3" }],
  },
  {
    id: "9",
    name: "Daisy Ridley",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "10",
    name: "John Boyega",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "11",
    name: "Oscar Isaac",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
  {
    id: "12",
    name: "Adam Driver",
    movies: [{ id: "7" }, { id: "8" }, { id: "9" }],
  },
];

// the list of star wars movies with movie descriptions
// and rating (out of 5)
export let movies: Movies = [
  {
    id: "1",
    title: "The Phantom Menace",
    year: "1999",
    rating: 2.5,
    actors: [{ id: "7" }, { id: "5" }, { id: "6" }, { id: "4" }],
    description:
      "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
  },
  {
    id: "2",
    title: "Attack of the Clones",
    year: "2002",
    rating: 2.5,
    actors: [{ id: "5" }, { id: "6" }, { id: "4" }, { id: "8" }],
    description:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
  },
  {
    id: "3",
    title: "Revenge of the Sith",
    year: "2005",
    rating: 3,
    actors: [{ id: "5" }, { id: "6" }, { id: "4" }, { id: "8" }],
    description:
      "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
  },
  {
    id: "4",
    title: "A New Hope",
    year: "1977",
    rating: 4,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },
  {
    id: "5",
    title: "The Empire Strikes Back",
    year: "1980",
    rating: 4.5,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
  },
  {
    id: "6",
    title: "Return of the Jedi",
    year: "1983",
    rating: 4,
    actors: [{ id: "1" }, { id: "2" }, { id: "3" }],
    description:
      "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
  },
  {
    id: "7",
    title: "The Force Awakens",
    year: "2015",
    rating: 4,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  },
  {
    id: "8",
    title: "The Last Jedi",
    year: "2017",
    rating: 3.5,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
  },
  {
    id: "9",
    title: "The Rise of Skywalker",
    year: "2019",
    rating: 3,
    actors: [{ id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }],
    description:
      "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
  },
];
