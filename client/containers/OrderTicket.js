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
    const quantity = document.getElementById('quantity').value;
    const ticker = document.getElementById('tickerForm').value.toUpperCase();
    const price = data;
    const totalValue = data * quantity;

    // const sendMongo = { ticker, price, quantity, totalValue };

    // console.log(`sendMongo: `, sendMongo);

    fetch('/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ticker, price, quantity, totalValue }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in sendMongo');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data Received: ', data);
      });

    console.log(
      `You bought ${quantity} ${ticker} shares for $${data} per share and in total spent $${totalValue}`
    );
    alert(
      `You bought ${quantity} ${ticker} shares for $${data} per share and in total spent $${totalValue}.\n\n Press OK to continue.`
    );

    /*
    Next step is to create a post request to Mongo DB with the order information
    Then have fetch data to populate purchases in the portfolio section
    fetch()
    */
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
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          border: 'solid 3px black',
          padding: '15px',
          borderRadius: '15px',
          backgroundColor: 'lightblue',
        }}
      >
        <label>
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
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Price ${data}
        </label>
        <label
          style={{
            marginBottom: '25px',
          }}
        >
          Quantity
          <input
            type='text'
            id='quantity'
            name='quantity'
            placeholder='100 (no fractional shares)'
          />
        </label>
        <button id='buyBtn' onClick={handleBuy}>
          Buy
        </button>
      </form>
    </div>
  );
};

export default OrderTicket;
