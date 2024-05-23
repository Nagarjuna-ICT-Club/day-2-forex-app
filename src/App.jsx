
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

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl text-blue-500 mb-4 flex font-sans font-bold justify-center">Day 2 | Forex-App -Sanjay ({data?.date})</h2>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-black-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 bg-red-600 text-left text-white">Currency</th>
              <th className="py-3 px-6 bg-green-600 text-left text-white">Buy</th>
              <th className="py-3 px-6 bg-blue-600 text-left text-white">Sell</th>
            </tr>
          </thead>
          <tbody className="text-black-600 text-sm font-light">
            {data.rates.map((rate, key) => (
              <tr key={key} className="border-b border-grey-400">
                <td className="py-3 px-6 bg-red-300 text-left text-black-600">{rate.currency.name}</td>
                <td className="py-3 px-6 bg-green-300 text-left text-black-600">{rate.buy}</td>
                <td className="py-3 px-6 bg-blue-300 text-left text-black-600">{rate.sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

