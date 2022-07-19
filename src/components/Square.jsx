import React from 'react';

const Square = ({ value, children } = props) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Square;
