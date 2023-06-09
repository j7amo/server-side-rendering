export const FETCH_USERS = 'fetch_users';
// After configuring Redux thunk to receive Axios instance as a 3rd argument(here we use by the name of 'api')
// we now can use it inside the middleware:
export const fetchUsers = () => async (dispatch, getState, api) => {
  // Now we don't need this URL
  // const res = await api.get('https://react-ssr-api.herokuapp.com/users');
  // Instead we use just '/users' and it will work fine because:
  // Axios instance for the client side has 'baseURL' set to '/api' so it will prepend that part
  // and the intermediate resulting path will be '/api/users'. And we have a proxy Express middleware set up
  // to listen for '/api' and redirect to 'https://react-ssr-api.herokuapp.com/'. So the final resulting
  // URL will be 'https://react-ssr-api.herokuapp.com/users'
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
