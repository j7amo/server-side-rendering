import React from 'react';

const HomePage = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these features</p>
    </div>
  );
};

// We wrap the component inside an object for simplifying its usage later on (in the Routes)
export default { component: HomePage };
