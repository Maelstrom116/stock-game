import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.js';
import Users from './User.js';

const App = () => {
  return (
    <div id='app'>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Hello World! Let's buy some stocks!
      </h1>
      <MainContainer />
      <Users />
    </div>
  );
};

export default App;
