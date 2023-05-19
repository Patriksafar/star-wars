import { NextApiRequest, NextApiResponse } from "next";
import { Actors, actors } from "../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Actors>
) {
  res.status(200).json(actors);
}
