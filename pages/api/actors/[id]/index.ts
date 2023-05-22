import { NextApiRequest, NextApiResponse } from "next";
import { actors } from "../../data";
import type { Actor } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Actor | undefined>
) {
  const query = req.query;
  const { id } = query;

  const actor = actors.find((actor) => actor.id === id);

  res.status(200).json(actor);
}
