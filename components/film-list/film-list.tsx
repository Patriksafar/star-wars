import { Article } from "../article";

import * as styles from "./film-list.styles";

const DUMMY_FILMS = [
  {
    id: "1",
    title: "Test 1",
    rating: 2.5,
    description:
      "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
  },
  {
    id: "2",
    title: "Test 2",
    rating: 3.5,
    description:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
  },
];

export const FilmList = () => {
  return (
    <section css={styles.section}>
      {DUMMY_FILMS.map((film) => (
        <Article
          key={film.id}
          id={film.id}
          title={film.title}
          rating={film.rating}
          description={film.description}
        />
      ))}
    </section>
  );
};
