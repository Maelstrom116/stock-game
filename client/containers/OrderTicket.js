import React from 'react';

const OrderTicket = (props) => {
  return (
    <div>
      <form>
        <label
          style={{
            marginLeft: '10px',
          }}
        >
          Ticker
          <input type='text' name='stock' placeholder='AAPL' />
          <button id='searchBtn'>Search</button>
        </label>
        <label
          style={{
            marginLeft: '10px',
          }}
        >
          Price
          <input type='text' name='stockPrice' placeholder='----------' />
        </label>
        <label
          style={{
            margin: '10px',
          }}
        >
          Quantity
          <input type='text' name='quantity' placeholder='100.50' />
        </label>
        <button
          style={{
            marginLeft: '10px',
          }}
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default OrderTicket;
