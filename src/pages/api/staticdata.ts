import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), "src/json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  res.status(200).json(JSON.parse(fileContents));
}
