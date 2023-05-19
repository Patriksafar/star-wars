import { movies } from "../../data";

export async function GET(req: Request, context: any) {
  const id = context.params.id;

  const movie = movies.find((movie) => movie.id === id);

  return new Response(JSON.stringify(movie));
}

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
