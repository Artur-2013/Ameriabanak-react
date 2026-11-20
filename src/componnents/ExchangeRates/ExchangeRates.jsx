import React, { useState } from "react";

export default function ExchangeRates({ rates }) {
  const [mode, setMode] = useState("rates"); // "rates" | "gold"

  return (
    <div className="currency-rates">
      <h2 className="currency-section__title">Տարադրամի փոխարժեքն այսօր</h2>
      <p className="currency-rates__hint">
        Ծանոթացի՛ր{" "}
        <a href="#rates-info" className="currency-rates__link">
          տարադրամի և ոսկու փոխարժեքին
        </a>
        :
      </p>

      <div className="currency-rates__switch">
        <label className="currency-radio">
          <input
            type="radio"
            name="exchangeType"
            checked={mode === "rates"}
            onChange={() => setMode("rates")}
          />
          <span>ՓՈԽԱՐԺԵՔ</span>
        </label>

        <label className="currency-radio">
          <input
            type="radio"
            name="exchangeType"
            checked={mode === "gold"}
            onChange={() => setMode("gold")}
          />
          <span>ՈՍԿԻ</span>
        </label>
      </div>

      {mode === "rates" ? (
        <div className="currency-rates__table-wrap">
          <table className="currency-rates__table">
            <thead>
              <tr>
                <th rowSpan="2"></th>
                <th colSpan="2">Կանխիկ</th>
                <th colSpan="2">Անկանխիկ</th>
              </tr>
              <tr>
                <th>առք</th>
                <th>վաճառք</th>
                <th>առք</th>
                <th>վաճառք</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((item) => (
                <tr key={item.code}>
                  <td className="currency-rates__code">{item.code}</td>
                  <td>{item.cashBuy ?? ""}</td>
                  <td>{item.cashSell ?? ""}</td>
                  <td>{item.nonCashBuy ?? ""}</td>
                  <td>{item.nonCashSell ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="currency-rates__gold-box">
          Ոսկու ձուլակտորների փոխարժեքները կարող ես ավելացնել այստեղ։
        </div>
      )}

      <p className="currency-rates__note">
        Քարտային փոխարժեքը սահմանվում է՝ գործարքի հաշվառման արժույթի
        անկանխիկ առքի փոխարժեքից նվազեցնելով 1 (մեկ) ՀՀ դրամ և
        անկանխիկ վաճառքի փոխարժեքին ավելացնելով 1 (մեկ) ՀՀ դրամ:
      </p>
    </div>
  );
}