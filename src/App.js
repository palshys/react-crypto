import React from "react";
import Coin from "./Coin";
import "./index.css"
import  searchLogo from "./search.png"
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false


function App() {
  const [coins, setCoins] = React.useState([])
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false")
    .then((res) => res.json())
    .then((data) => {
      setCoins(data)
    })
    .catch(err => alert('Theres an error', err))

  }, [])

  const handleChange = e => {
    setSearch(e.target.value);
  }
  
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  })
         

  return (
    <>
    <div className="App">
    <form id='form'>
      <input id='input' type='text' placeholder='Search' className='coinSearch' onChange={handleChange}>
      </input>
    </form>
    <nav>
            <h4 className="navElement name">Name</h4>
            <h4 className="navElement">Current Price</h4>
            <h4 className="navElement">Price Change</h4>
            <h4 className="navElement">Market Cap</h4>
            <h4 className="navElement supply">Circulating Supply</h4>
            <h4 className="navElement totalVolume">Total Volume</h4>
      </nav>
      <div id='coinsArr'>
        {filteredCoins.map(coin => {
          return (
            <Coin
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            key={coin.id}
            currentPrice={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            totalVolume={coin.total_volume}
            circulatingSupply={coin.circulating_supply}
            marketCap={coin.market_cap}/>
          )
      })}
      </div>
    </div>
  </>
  );
}

export default App;
