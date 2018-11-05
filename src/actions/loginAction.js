import actionTypes from '../constants/actionTypes';

const { LOG_IN, LOG_OUT } = actionTypes;

export const loginAction = () => dispatch => {
  dispatch({
    type: LOG_IN
  })
}
export const logoutAction = () => dispatch => {
  dispatch({
    type: LOG_OUT
  })
}