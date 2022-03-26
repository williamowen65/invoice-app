// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { test } from "../../controllers/users.js";

type Data = {
    name: string;
};

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const user = test();

    res.status(200).json({ name: user });
}

export default handler;
