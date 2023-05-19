import { actors } from "../../data";

export async function GET(req: Request, context: any) {
  const id = context.params.id;

  const actor = actors.find((actor) => actor.id === id);

  return new Response(JSON.stringify({ ...actor }));
}
