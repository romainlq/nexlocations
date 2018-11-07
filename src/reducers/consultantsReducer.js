import actionTypes from "../constants/actionTypes";

const { GET_CONSULTANTS } = actionTypes;

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CONSULTANTS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
