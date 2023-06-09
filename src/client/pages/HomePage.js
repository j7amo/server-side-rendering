import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Home!</div>
      <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
  );
};

// We wrap the component inside an object for simplifying its usage later on (in the Routes)
export default { component: HomePage };
