import actionTypes from '../constants/actionTypes';
import axios from 'axios';

const { LOG_IN, LOG_OUT, GET_USER } = actionTypes;

const URL = 'http://localhost:3004';

export const authenticateUserAction = () => {
  return dispatch => {
    return axios.post(`${URL}/test`, {params:{
      username: 'test',
      password:'test'
    }})
    .then(response => console.log(response))
    .then(() => axios.get(`${URL}/user/1`))
    .then(userInfos => {
      dispatch(getUser(userInfos.data))
      dispatch(loginAction())
    });
    }
}

const getUser = (userInfos) => (
  { type: GET_USER, payload: userInfos }
)

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