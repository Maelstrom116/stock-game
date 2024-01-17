import React, { Component, useEffect, useState } from 'react';
import MainContainer from './containers/MainContainer.js';

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api').then((response) =>
      response.json().then((data) => {
        setBackendData(data);
      })
    );
  }, []);

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
    </div>
  );
};

export default App;
