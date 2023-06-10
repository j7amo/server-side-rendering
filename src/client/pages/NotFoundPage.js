import React from 'react';

// We receive 'staticContext' prop on the server-side-rendering side inside the StaticRouter.
// But on the client side we use BrowserRouter and in that case
// we do not receive 'staticContext' prop. So we need to default it.
const NotFoundPage = ({ staticContext = {} }) => {
  // Add error prop for later inspection before sending the response.
  staticContext.notFound = true;

  return <h1>Page not found!</h1>;
};

export default { component: NotFoundPage };
