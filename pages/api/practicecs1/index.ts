import createHandler from "../middleware";

import Practicecs1 from "../models/practicecs1";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = createHandler();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  var practicecs1 = new Practicecs1(req.body);

  try {
    const result = await practicecs1.save();
    return res.status(200).json({ result });
  } catch (err) {
    res.status(500).send(err);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await Practicecs1.find();
  return res.status(200).json(result);
});

export default handler;
