
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ rates: [] });
  const api_url = "https://www.nrb.org.np/api/forex/v1/rates?page=1&from=2024-05-20&to=2024-05-20&per_page=100";

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    axios.get(api_url)
      .then(response => {
        const responseFromNRB = response.data;
        setData(responseFromNRB.data.payload[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  const extra = {
    "currency_symbols": {
      "INR": "₹",
      "USD": "$",
      "EUR": "€",
      "GBP": "£",
      "CHF": "CHF",
      "AUD": "A$",
      "CAD": "C$",
      "SGD": "S$",
      "JPY": "¥",
      "CNY": "¥",
      "SAR": "ر.س",
      "QAR": "ر.ق",
      "THB": "฿",
      "AED": "د.إ",
      "MYR": "RM",
      "KRW": "₩",
      "SEK": "kr",
      "DKK": "kr",
      "HKD": "HK$",
      "KWD": "د.ك",
      "BHD": "د.ب"
    },
    "currency_flags": {
      "INR": "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
      "USD": "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
      "EUR": "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg",
      "GBP": "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
      "CHF": "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png",
      "AUD": "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg",
      "CAD": "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
      "SGD": "https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png",
      "JPY": "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
      "CNY": "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
      "SAR": "https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png",
      "QAR": "https://www.countryflags.com/wp-content/uploads/qatar-flag-png-large.png",
      "THB": "https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png",
      "AED": "https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png",
      "MYR": "https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png",
      "KRW": "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png",
      "SEK": "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png",
      "DKK": "https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png",
      "HKD": "https://www.countryflags.com/wp-content/uploads/hongkong-flag-jpg-xl.jpg",
      "KWD": "https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png",
      "BHD": "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-13-2048x1229.jpg"
    }
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl text-blue-900 mb-4 flex font-sans font-bold justify-center">Foreign Exchange App -Sanjay</h2>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-black-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 bg-gray-600 text-left text-white">Currency</th>
              <th className="py-3 px-6 bg-green-600 text-left text-white">Buy</th>
              <th className="py-3 px-6 bg-red-600 text-left text-white">Sell</th>
            </tr>
          </thead>
          <tbody className="text-black-600 text-sm font-light">
            {data.rates.map((rate, key) => (
              <tr key={key} className="border-b border-grey-400">
                <td className="py-3 px-6 bg-gray-300 text-left text-black-600 flex gap-4 items-center font-bold">
                  <img src={extra.currency_flags[rate.currency.iso3]} alt="" srcset="" width={80} />
                  {rate.currency.name} &nbsp;
                  ({extra.currency_symbols[rate.currency.iso3]}&nbsp;{rate.currency.unit})
                  </td>
                <td className="py-3 px-6 bg-green-300 text-left text-black-600 font-sans font-bold">
                  NRs. {rate.buy}</td>
                <td className="py-3 px-6 bg-red-300 text-left text-black-600 font-sans font-bold">
                  NRs. {rate.sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

