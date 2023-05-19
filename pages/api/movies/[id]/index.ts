// import { movies } from "./data";

import { NextApiRequest, NextApiResponse } from "next";
import { Movie, movies } from "../../data";

// export async function GET(req: Request, context: any) {
//   const id = context.params.id;

//   const movie = movies.find((movie) => movie.id === id);

//   return new Response(JSON.stringify(movie));
// }

export async function POST(req: Request, context: any) {
  const id = context.params.id;
  const movie = movies.find((movie) => movie.id === id);

  const body = await req.json();
  if (movie && body) {
    const newDescription = body.description;
    const newTitle = body.title;

    movie.title = newTitle;
    movie.description = newDescription;
  }

  return new Response(JSON.stringify(movie));
}

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
