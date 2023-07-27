// formReducer.js

const initialState = {
    formData: null,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM':
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  