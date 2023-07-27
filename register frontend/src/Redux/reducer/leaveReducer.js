import { ADD_LEAVE_REQUEST, SET_USER_NAME } from '../actions/leaveactions';

const initialState = {
  leaveRequests: [],
  name: '', // Add the 'name' field to the initial state
};

const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEAVE_REQUEST:
      return {
        ...state,
        leaveRequests: [...state.leaveRequests, action.payload],
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default leaveReducer;
