import React, { useState, useEffect } from 'react';

const Holding = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/db`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const array = [];
  for (let i = data.length - 1; i >= 0; i--) {
    array.push(
      <div key={i} style={{ padding: '5px' }}>
        {data[i]}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
        border: 'solid 3px black',
        borderRadius: '15px',
        backgroundColor: 'lightblue',
      }}
    >
      {array}
    </div>
  );
};

export default Holding;
