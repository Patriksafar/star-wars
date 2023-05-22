import { NextApiRequest, NextApiResponse } from "next";
import { actors } from "../data";
import type { Actors } from "../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Actors>
) {
  res.status(200).json(actors);
}
