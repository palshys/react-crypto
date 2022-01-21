import React from 'react'

const Coin = (props) => {

    return (
        <div className='coinContainer'>
            <h3 className='coinElement' id='coinSymbol'>
                <img src={props.image} alt='coin-icon'/>
                {props.name}<span className='coinElement-smallerFont' style={{color: "grey"}}> ({props.symbol.toUpperCase()})</span>
            </h3>
            <h3 className='coinElement' id='currentPrice'>€{props.currentPrice.toLocaleString('en-US')}</h3>
            <h3 className='coinElement' style={{color: props.priceChange > 0 ? "green" : "red"}}>{props.priceChange}%</h3>
            <h3 className='coinElement coinElement-smallerFont'>€{props.marketCap.toLocaleString('en-US')}</h3>
            <h3 className='coinElement coinElement-smallerFont supply'>{props.circulatingSupply.toLocaleString('en-US')} <span style={{color:"grey"}}>{props.symbol.toUpperCase()}</span></h3>
            <h3 className='coinElement coinElement-smallerFont totalVolume'>{props.totalVolume.toLocaleString('en-US')}</h3>
        </div>
    )
}

export default Coin
