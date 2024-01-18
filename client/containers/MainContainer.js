import React from 'react';
import OrderTicket from './OrderTicket.js';
import Portfolio from './Portfolio.js';

const MainContainer = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <OrderTicket  />
      <Portfolio />
    </div>
  );
};

export default MainContainer;
