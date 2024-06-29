import type { NextApiRequest, NextApiResponse } from "next";
import { currencies } from "@data";
import { ApiCurrenciesResponse } from "@types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiCurrenciesResponse>
) {
  res.status(200).json(currencies);
}
