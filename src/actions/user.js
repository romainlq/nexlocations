import actionTypes from '../constants/actionTypes';
import axios from 'axios';

const { LOG_IN, LOG_OUT, GET_USER } = actionTypes;

const URL = 'http://localhost:3004';

const authenticateUserAction = () => {
  return dispatch => {
    return axios
      .post(`${URL}/test`, {
        params: {
          username: 'test',
          password: 'test'
        }
      })
      .then(response => console.log(response)) // TODO: Gerer l'erreur d'authent
      .then(() => axios.get(`${URL}/user/1`))
      .then(userInfos => {
        console.log(userInfos);
        dispatch(getUser(userInfos.data));
        dispatch(loginAction());
      });
  };
};

const getUser = (userInfos) => ({ type: GET_USER, payload: userInfos });

const loginAction = () => ({
  type: LOG_IN
});

const logoutAction = () => ({
  type: LOG_OUT
});

export default {
  authenticateUserAction,
  loginAction,
  logoutAction
};