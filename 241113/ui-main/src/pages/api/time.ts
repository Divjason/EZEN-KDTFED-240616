import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date();
  res.status(200).json({
    time: date.toLocaleString(),
  });
};

export default handler;
