import type { NextApiRequest, NextApiResponse } from "next";
import createHandler from "../middleware";
import Simpleboard from "../models/simpleboard";

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("query값", req.query);
  const result = await Simpleboard.find();
  return res.status(200).json(result);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  var simpleboard = new Simpleboard(req.body);

  try {
    const result = await simpleboard.save();
    console.log(result);
    return res.status(200).json({ result });
  } catch (err) {
    res.status(500).send(err);
  }
});

export default handler;
