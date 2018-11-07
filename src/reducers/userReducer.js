import actionTypes from "../constants/actionTypes";

const { LOG_IN, LOG_OUT, GET_USER } = actionTypes;

const initialState = {
  isLoggedIn: false,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOG_OUT:
      return {
        isLoggedIn: false
      }
    case GET_USER:
    const { name, departmentId, departmentName, nexstaffRole} = action.payload;
      return {
        ...state,
        name: name,
        nexstaffRole : nexstaffRole,
        departmentId: departmentId,
        departmentName: departmentName,
      }
    default:
      return state
  }
}