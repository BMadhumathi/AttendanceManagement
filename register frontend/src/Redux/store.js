import { createStore } from 'redux';
import rootReducer from './reducer'; // Import the rootReducer instead of the reducer

const initialState = {
  // Define your initial state here
  leave: {
    leaveRequests: [],
    name: '', // Add the 'name' field to the initial state
  },
};

const store = createStore(rootReducer, initialState); // Use rootReducer here

export default store;
