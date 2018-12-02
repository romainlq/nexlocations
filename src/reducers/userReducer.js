import actionTypes from '../constants/actionTypes';

const {
  LOG_IN,
  LOG_OUT,
  GET_USER,
  START_LOGGIN,
  END_LOGGIN,
  ERROR_LOGIN
} = actionTypes;

const initialState = {
  isLoggedIn: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGGIN:
      return {
        ...state,
        loading: true,
        error: false
      };
    case END_LOGGIN:
      return {
        ...state,
        loading: false
      };
    case ERROR_LOGIN:
      return {
        ...state,
        error: true
      };
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        isLoggedIn: false
      };
    case GET_USER:
      const {
        name,
        departmentId,
        departmentName,
        nexstaffRole
      } = action.payload;
      return {
        ...state,
        name: name,
        nexstaffRole: nexstaffRole,
        departmentId: departmentId,
        departmentName: departmentName
      };
    default:
      return state;
  }
};
