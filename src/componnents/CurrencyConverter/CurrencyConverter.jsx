import React, { useState } from "react";

export default function CurrencyConverter({ rates }) {
  const [channel, setChannel] = useState("cash"); // "cash" | "nonCash"
  const [haveCurrency, setHaveCurrency] = useState("AMD");
  const [needCurrency, setNeedCurrency] = useState("AMD");
  const [haveAmount, setHaveAmount] = useState("");
  const [needAmount, setNeedAmount] = useState("");

  const currencies = ["AMD", ...rates.map((r) => r.code)];

  const getRateToAmd = (code, type) => {
    if (code === "AMD") return 1;
    const found = rates.find((r) => r.code === code);
    if (!found) return 1;

    if (channel === "cash") {
      return type === "buy"
        ? found.cashBuy || found.cashSell || 1
        : found.cashSell || found.cashBuy || 1;
    }

    return type === "buy"
      ? found.nonCashBuy || found.nonCashSell || found.cashBuy || 1
      : found.nonCashSell || found.nonCashBuy || found.cashSell || 1;
  };

  const convert = (valStr, fromCurr, toCurr, direction) => {
    const num = parseFloat(valStr);
    if (valStr === "" || Number.isNaN(num)) return "";

    if (direction === "fromHave") {
      const amdValue = fromCurr === "AMD" ? num : num * getRateToAmd(fromCurr, "buy");
      const result = toCurr === "AMD" ? amdValue : amdValue / getRateToAmd(toCurr, "sell");
      return result.toFixed(2);
    } else {
      const amdValue = toCurr === "AMD" ? num : num * getRateToAmd(toCurr, "sell");
      const result = fromCurr === "AMD" ? amdValue : amdValue / getRateToAmd(fromCurr, "buy");
      return result.toFixed(2);
    }
  };

  const handleHaveChange = (e) => {
    const val = e.target.value;
    setHaveAmount(val);
    setNeedAmount(convert(val, haveCurrency, needCurrency, "fromHave"));
  };

  const handleNeedChange = (e) => {
    const val = e.target.value;
    setNeedAmount(val);
    setHaveAmount(convert(val, haveCurrency, needCurrency, "fromNeed"));
  };

  const handleHaveCurrencyChange = (e) => {
    const nextCurr = e.target.value;
    setHaveCurrency(nextCurr);
    if (haveAmount !== "") {
      setNeedAmount(convert(haveAmount, nextCurr, needCurrency, "fromHave"));
    }
  };

  const handleNeedCurrencyChange = (e) => {
    const nextCurr = e.target.value;
    setNeedCurrency(nextCurr);
    if (haveAmount !== "") {
      setNeedAmount(convert(haveAmount, haveCurrency, nextCurr, "fromHave"));
    }
  };

  return (
    <div className="currency-converter">
      <h2 className="currency-section__title">Տարադրամի հաշվիչ</h2>

      <div className="currency-converter__switch">
        <label className="currency-radio">
          <input
            type="radio"
            name="converterChannel"
            checked={channel === "cash"}
            onChange={() => setChannel("cash")}
          />
          <span>ԿԱՆԽԻԿ</span>
        </label>

        <label className="currency-radio">
          <input
            type="radio"
            name="converterChannel"
            checked={channel === "nonCash"}
            onChange={() => setChannel("nonCash")}
          />
          <span>ԱՆԿԱՆԽԻԿ</span>
        </label>
      </div>

      <div className="currency-converter__field">
        <label className="currency-converter__label" htmlFor="have-input">
          Ես ունեմ
        </label>
        <div className="currency-converter__row">
          <input
            id="have-input"
            type="number"
            min="0"
            step="any"
            placeholder=""
            value={haveAmount}
            onChange={handleHaveChange}
            className="currency-converter__input"
          />
          <select
            value={haveCurrency}
            onChange={handleHaveCurrencyChange}
            className="currency-converter__select"
          >
            {currencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="currency-converter__field">
        <label className="currency-converter__label" htmlFor="need-input">
          Ինձ պետք է
        </label>
        <div className="currency-converter__row">
          <input
            id="need-input"
            type="number"
            min="0"
            step="any"
            placeholder=""
            value={needAmount}
            onChange={handleNeedChange}
            className="currency-converter__input"
          />
          <select
            value={needCurrency}
            onChange={handleNeedCurrencyChange}
            className="currency-converter__select"
          >
            {currencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}