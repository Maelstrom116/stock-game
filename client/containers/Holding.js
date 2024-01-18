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

  // fetch('/db')
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     const stocks = data;
  //   });

  // const stocksArray = stocks;
  // const array = [];
  // const runPortfolio = () => {
  //   fetch('/db')
  //     .then((data) => data.json())
  //     .then((data) => {
  //       data.forEach(obj => {
  //         array.push(obj);
  //       })
  //     });
  // };
  // console.log(array);

  const test = data[0];
  console.log(test);

  return <div>one</div>;
};

export default Holding;
