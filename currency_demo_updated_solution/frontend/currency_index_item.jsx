import React from 'react';

const CurrencyIndexItem = (props) => {
  console.log(props);
  const { currency, rate } = props;
  const color = rate < 1 ? 'red' : 'green';
  return (
    <li className={color}>{currency}: {rate}</li>
  );
};

export default CurrencyIndexItem;