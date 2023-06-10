import { FETCH_CURRENT_USER } from '../actions';

// null - we don't know if the user is authenticated
// false - user is not authenticated
const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

export default authReducer;
