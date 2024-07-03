import { ApiItemsResponse, Currency } from "@types";
import { usdCoefMap } from "@store";

const handleFetch = async <T>(result: Response) => {
  if (result.status === 200) {
    return (await result.json()) as T;
  } else {
    // todo error tips
    throw new Error(result.statusText);
  }
};

export const loadCurrencyList = async () => {
  let result = await fetch("/api/currencies");
  return await handleFetch<Currency[]>(result);
};

export const loadItems = (page = 1, search = "", size = 6) => {
  const offset = (page - 1) * size;
  const controller = new AbortController();
  const signal = controller.signal;
  return {
    result: fetch(`/api/items?offset=${offset}&limit=${size}&query=${search}`, {
      signal,
    })
      .then((a) => {
        return handleFetch<ApiItemsResponse>(a);
      })
      .then(async (a) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        // Align currency units
        a.items.forEach((a) => {
          if (a.priceCurrency !== "usd") {
            const rate = usdCoefMap[a.priceCurrency];
            if (!rate) throw new Error("unknown currency");
            a.price = a.price / rate;
          }
        });
        return {
          total: Math.ceil(a.total / size),
          items: a.items,
        };
        // @ts-ignore
      }),
    cancel: () => controller.abort("o"),
  };
};
