import actionTypes from "../constants/actionTypes";

const { LOG_IN, LOG_OUT } = actionTypes;

const initialState = {
  isLoggedIn: false,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      const { firstname, lastname, department } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        firstname: firstname,
        lastname: lastname,
        department: department,
      }
    case LOG_OUT:
      return {
        isLoggedIn: false
      }
    default:
      return state
  }
}