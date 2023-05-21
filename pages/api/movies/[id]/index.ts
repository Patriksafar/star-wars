import { NextApiRequest, NextApiResponse } from "next";
import { Movie, movies } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie | undefined>
) {
  const query = req.query;
  const { id } = query;

  if (req.method === "POST") {
    const body = req.body;
    const movie = movies.find((movie) => movie.id === id);

    if (movie && body) {
      const newDescription = body.description;
      const newTitle = body.title;

      movie.title = newTitle;
      movie.description = newDescription;
    }

    res.status(200).json(movie);
  } else {
    const movie = movies.find((movie) => movie.id === id);
    res.status(200).json(movie);
  }
}
