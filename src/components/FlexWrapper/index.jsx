import React from 'react';

function FlexWrapper({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        fontWeight: 'bold',
        justifyContent: 'space-around',
      }}
    >
      {children}
    </div>
  );
}

export default FlexWrapper;
