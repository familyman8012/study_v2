import type { NextApiRequest, NextApiResponse } from "next";
import createHandler from "../middleware";
import Simpleboard from "../models/simpleboard";

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("query값", req.query);
  const result = await Simpleboard.findOne({ _id: req.query._id });
  return res.status(200).json(result);
});

export default handler;
