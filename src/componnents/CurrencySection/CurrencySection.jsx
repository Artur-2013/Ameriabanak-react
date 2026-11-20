import React from "react";
import ExchangeRates from "../ExchangeRates/ExchangeRates";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import "./CurrencySection.css";

const defaultRates = [
  { code: "USD", cashBuy: 357.5, cashSell: 362.5, nonCashBuy: 357.5, nonCashSell: 362.5 },
  { code: "EUR", cashBuy: 389.5, cashSell: 403.5, nonCashBuy: 389.5, nonCashSell: 403.5 },
  { code: "GBP", cashBuy: 464.0, cashSell: 484.0, nonCashBuy: 464.0, nonCashSell: 484.0 },
  { code: "RUB", cashBuy: 4.13, cashSell: 4.45, nonCashBuy: 4.24, nonCashSell: 4.54 },
  { code: "GEL", cashBuy: 133.5, cashSell: 144.0, nonCashBuy: null, nonCashSell: null },
];

export default function CurrencySection({ rates = defaultRates }) {
  return (
    <section className="currency-section">
      <div className="currency-section__container">
        <ExchangeRates rates={rates} />
        <CurrencyConverter rates={rates} />
      </div>
    </section>
  );
}