import type { NextApiRequest, NextApiResponse } from "next";
import { items } from "@data";
import { ApiItemsRequest, ApiItemsResponse } from "@types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiItemsResponse>
) {
  const params = req.query as unknown as ApiItemsRequest;
  const limit = +(params.limit ?? 10);
  const offset = +(params.offset ?? 0);
  const query = params.query;

  const filtered = items
    .filter((item) =>
      query
        ? item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        : true
    )
    .slice(offset, limit + offset);

  res.status(200).json({
    total: items.length,
    perPage: limit,
    items: filtered,
  });
}
