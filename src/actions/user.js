import actionTypes from '../constants/actionTypes';
import axios from 'axios';

const { LOG_IN, LOG_OUT, GET_USER } = actionTypes;

const URL = 'http://localhost:3004';

const authenticateUserAction = ({username, password}) => {
  let data = 'username=' + username + '&password=' + encodeURIComponent(password);
  const optionsPost = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
    url : `km/login`
  }
  const optionsGet = {
    method:'get',
    url:`km/services/user`
  }
  return dispatch => {
    return axios(optionsPost)
      .then(response => console.log(response)) // TODO: Gerer l'erreur d'authent
      .then(() => axios(optionsGet))
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