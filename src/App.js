
import './App.css';
import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import Coin from './Components/Coin';



// setMyArray(oldArray => [...oldArray, newElement]);
function App() {
  const [coins, setCoins] = useState([]);
  const [search,setSearch] = useState("");
  const [temp,setTemp] = useState([]);

  useEffect(() => {
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    )
    .then(res => {
      setCoins(res.data)
      setTemp(res.data);
    })
    .catch((err) => console.log(err));
  }, [])

  const setSearchCoins = () => {
    setCoins([])
        temp.forEach(element => {
          if(element.name.toLowerCase().includes(search)){
            setCoins(oldArray => [...oldArray, element]);
            console.log("hello");
          }
        });
  };


  return (
    <div className="Main-Container">
      <div className="search">
        <h1>Enter Crypto currency Name</h1>
        <div className="box_inp">
          <input type="text" value={search} onInput={e => setSearch(e.target.value)} />
          <button className="btn" onClick={()=> {setSearchCoins()}}>Search</button>
        </div>
      </div>
      <div className="table">
          <table className="table_container">
            <thead className="thead">
              <tr>
                <th>Rank</th>
                <th>symbol</th>
                <th>Name</th>
                <th>price</th>
                <th>percentage</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody className="">
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
    </div>
  );
}

export default App;
