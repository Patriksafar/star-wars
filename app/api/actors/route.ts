import { actors } from "../data";

export async function GET(req: Request, context: any) {
  return new Response(JSON.stringify({ actors }));
}
