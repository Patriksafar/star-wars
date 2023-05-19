import { NextApiRequest, NextApiResponse } from "next";
import { Movies, movies } from "../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  res.status(200).json(movies);
}
