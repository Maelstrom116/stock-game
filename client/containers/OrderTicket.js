import React, { useEffect, useState } from 'react';

const OrderTicket = (props) => {
  const [data, setData] = useState([]);

  const handleClickSearch = (event) => {
    event.preventDefault();
    const ticker = document.getElementById('tickerForm').value.toUpperCase();
    fetch(`/api/${ticker}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`the price of ${ticker} is:`, data);
        setData(data);
      });
    console.log(ticker);
  };

  const handleBuy = (event) => {
    event.preventDefault();
    console.log("HEY, I'M BUYING HERE");
    const amount = document.getElementById('quantity').value;
    const stock = document.getElementById('tickerForm').value.toUpperCase();
    const total = data * amount;
    console.log(
      `You bought ${amount} ${stock} shares for $${data} per share and in total spent $${total}`
    );
    alert(
      `You bought ${amount} ${stock} shares for $${data} per share and in total spent $${total}.\n\n Press OK to continue.`
    );
  };

  // useEffect(() => {
  //   fetch(`/api/aapl`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });

  return (
    <div>
      <form>
        <label
          style={{
            marginLeft: '10px',
          }}
        >
          Ticker
          <input type='text' id='tickerForm' name='stock' placeholder='AAPL' />
          <button
            style={{ marginLeft: '10px' }}
            id='searchBtn'
            onClick={handleClickSearch}
          >
            Search
          </button>
        </label>
        <label
          style={{
            marginLeft: '40px',
            marginRight: '40px',
          }}
        >
          Price ${data}
          {/* <input
            type='text'
            name='stockPrice'
            placeholder='----------'
            disabled='true'
          /> */}
        </label>
        <label
          style={{
            margin: '10px',
          }}
        >
          Quantity
          <input
            type='text'
            id='quantity'
            name='quantity'
            placeholder='100.50'
          />
        </label>
        <button
          style={{
            marginLeft: '10px',
          }}
          id='buyBtn'
          onClick={handleBuy}
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default OrderTicket;
