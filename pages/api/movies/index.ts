import { NextApiRequest, NextApiResponse } from "next";
import { movies } from "../data";
import type { Movies } from "../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  res.status(200).json(movies);
}
