import { NextApiRequest, NextApiResponse } from "next";
import { Actor, actors } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Actor | undefined>
) {
  const query = req.query;
  const { id } = query;

  const actor = actors.find((actor) => actor.id === id);

  res.status(200).json(actor);
}
