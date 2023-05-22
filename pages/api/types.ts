export type Movie = {
  id: string;
  title: string;
  description: string;
  year: string;
  rating: number;
  actors: Array<Record<"id", string>>;
};

export type Movies = Movie[];

export type Actor = {
  id: string;
  name: string;
  movies: Array<Record<"id", string>>;
};

export type Actors = Actor[];
