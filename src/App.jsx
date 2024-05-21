import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState([]);
  const APIUrl =
    "https://www.nrb.org.np/api/forex/v1/rates?page=1&from=2024-05-20&to=2024-05-20&per_page=100";
  const callApi = () => {
    axios.get(APIUrl).then((response) => {
      const responseFromNRB = response.data;
      setData(responseFromNRB.data.payload[0]);
    });
  };
  React.useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <div className="ml-10 mt-5">
        <p>Date: {data?.date}</p>
        {data.rates?.map((rate, key) => {
          return (
            <div key={key} className="flex gap-2">
              <p>{rate.currency.name}</p>
              <p>{rate.buy}</p>
              <p>{rate.sell}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
