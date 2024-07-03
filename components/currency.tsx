import { useCurrency, useCurrencyList } from "@store";
import { type CSSProperties, useEffect } from "react";
import { loadCurrencyList } from "../utils/loadData";
import t from "@css/app.module.scss";

export const CurrencyBtn = () => {
  const [list, setList] = useCurrencyList();
  const [currency, setCurrency] = useCurrency();
  const len = list.length;
  return (
    <div className={t.btnCurrency}>
      {list
        .filter((a) => a.key !== currency.key)
        .map((c, i) => {
          const style = {
            "--t": `${-120 * (len - i - 1)}%`,
          } as CSSProperties;
          return (
            <button
              data-test={"currency"}
              key={c.key}
              style={style}
              onPointerUp={() => setCurrency(c.key)}
            >
              <span className={"font-700"}>{c.symbol}</span>
              <span className={"uppercase"}>{c.key}</span>
            </button>
          );
        })}
      <button className={"cur"} key={"-"} data-test={"currency-trigger"}>
        <span>{currency.symbol}</span>
        <span className={"uppercase font-size-3 font-400"}>{currency.key}</span>
      </button>
    </div>
  );
};
