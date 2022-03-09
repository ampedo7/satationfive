import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ color = '#fff', size, type }) => {
  return (
    <div className="loader-container">
      {type === 'pacman' ? (
        <PacmanLoader color={color} loading={true} size={size || 10} />
      ) : (
        <PropagateLoader color={color} loading={true} size={size || 10} />
      )}
    </div>
  );
};

export default Loader;
