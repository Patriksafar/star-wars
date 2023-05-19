import { movies } from "../../data";

export async function GET(req: Request, context: any) {
  const id = context.params.id;

  const movie = movies.find((movie) => movie.id === id);

  return new Response(JSON.stringify({ ...movie }));
}
