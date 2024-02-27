import { useEffect, useState } from 'react';
import './conventer.scss';
import { GoArrowSwitch } from 'react-icons/go';

import { toast } from 'react-toastify';
import axios from 'axios';

const currencyList = [
  {
    code: 'EUR',
    name: 'Euro',
  },
  {
    code: 'USD',
    name: 'US Dollar',
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
  },
  {
    code: 'BGN',
    name: 'Bulgarian Lev',
  },
  {
    code: 'CZK',
    name: 'Czech Republic Koruna',
  },
  {
    code: 'DKK',
    name: 'Danish Krone',
  },
  {
    code: 'GBP',
    name: 'British Pound Sterling',
  },
  {
    code: 'HUF',
    name: 'Hungarian Forint',
  },
  {
    code: 'PLN',
    name: 'Polish Zloty',
  },
  {
    code: 'RON',
    name: 'Romanian Leu',
  },
  {
    code: 'SEK',
    name: 'Swedish Krona',
  },
  {
    code: 'CHF',
    name: 'Swiss Franc',
  },
  {
    code: 'ISK',
    name: 'Icelandic Króna',
  },
  {
    code: 'NOK',
    name: 'Norwegian Krone',
  },
  {
    code: 'HRK',
    name: 'Croatian Kuna',
  },
  {
    code: 'RUB',
    name: 'Russian Ruble',
  },
  {
    code: 'TRY',
    name: 'Turkish Lira',
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
  },
  {
    code: 'BRL',
    name: 'Brazilian Real',
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
  },
  {
    code: 'CNY',
    name: 'Chinese Yuan',
  },
  {
    code: 'HKD',
    name: 'Hong Kong Dollar',
  },
  {
    code: 'IDR',
    name: 'Indonesian Rupiah',
  },
  {
    code: 'ILS',
    name: 'Israeli New Sheqel',
  },
  {
    code: 'INR',
    name: 'Indian Rupee',
  },
  {
    code: 'KRW',
    name: 'South Korean Won',
  },
  {
    code: 'MXN',
    name: 'Mexican Peso',
  },
  {
    code: 'MYR',
    name: 'Malaysian Ringgit',
  },
  {
    code: 'NZD',
    name: 'New Zealand Dollar',
  },
  {
    code: 'PHP',
    name: 'Philippine Peso',
  },
  {
    code: 'SGD',
    name: 'Singapore Dollar',
  },
  {
    code: 'THB',
    name: 'Thai Baht',
  },
  {
    code: 'ZAR',
    name: 'South African Rand',
  },
];

const Conventer = () => {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('PLN');
  const [toCurrency, setToCurrency] = useState('USD');

  useEffect(() => {
    if (
      amount === 0 ||
      fromCurrency === toCurrency ||
      !fromCurrency ||
      !toCurrency ||
      !amount
    ) {
      return;
    }
    axios('https://api.freecurrencyapi.com/v1/latest', {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        base_currency: fromCurrency,
        currencies: toCurrency,
      },
    })
      .then((res) => {
        setResult(res.data.data[toCurrency]);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="conventer-section">
      <div className="conventer">
        <div className="conventer__input">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="conventer__select">
          <label>From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyList.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div className="fast-switch">
          <button
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
          >
            <GoArrowSwitch className="icon-switch" />
          </button>
        </div>
        <div className="conventer__select">
          <label>To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyList.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="result">
        <h3>Result</h3>
        <p>
          {amount} {fromCurrency} = {(amount * result).toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default Conventer;
