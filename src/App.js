
import './App.css';
import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import Coin from './Components/Coin';



// setMyArray(oldArray => [...oldArray, newElement]);
function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then(res => {
      setCoins(res.data)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App flex flex-row bg-stone-800 p-10">
      <table className="table-auto w-screen text-slate-300 rounded-2xl">
        <thead className="text-lg bg-yellow-400 border-2 rounded">
          <tr>
            <th>Rank</th>
            <th>symbol</th>
            <th>Name</th>
            <th>price</th>
            <th>percentage</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-500">
            {coins.map(e => {
              
              return <Coin name={e.name}
              rank={e.market_cap_rank}
              image={e.image}
              cap={e.market_cap}
              percentage={e.price_change_percentage_24h}
              price={e.current_price}
              />

              })}
      </tbody>
      </table>
    </div>
  );
}

export default App;
