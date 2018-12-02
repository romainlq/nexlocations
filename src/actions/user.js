import actionTypes from '../constants/actionTypes';
import axios from 'axios';

const {
  LOG_IN,
  LOG_OUT,
  GET_USER,
  START_LOGGIN,
  END_LOGGIN,
  ERROR_LOGIN
} = actionTypes;

const authenticateUserAction = ({ username, password }) => {
  let data =
    'username=' + username + '&password=' + encodeURIComponent(password);
  const optionsPost = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
    url: `km/login`
  };
  const optionsGet = {
    method: 'get',
    url: `km/services/user`
  };
  return dispatch => {
    dispatch(startLoginAction());
    return axios(optionsPost)
      .then(response => console.log(response)) // TODO: Gerer l'erreur d'authent
      .catch(() => {
        dispatch(errorLoginAction());
      })
      .then(() => axios(optionsGet))
      .then(userInfos => {
        console.log(userInfos.data);
        let user = userInfos.data;
        sessionStorage.setItem('userRole', user.nexstaffRole);
        sessionStorage.setItem('userDepartmentName', user.departmentName);
        sessionStorage.setItem('userDepartmentId', user.departmentId);
        dispatch(getUser(userInfos.data));
        dispatch(loginAction());
      })
      .finally(() => {
        dispatch(endLoginAction());
      });
  };
};

const getUser = userInfos => ({
  type: GET_USER,
  payload: userInfos
});

const loginAction = () => ({
  type: LOG_IN
});

const logoutAction = () => ({
  type: LOG_OUT
});

const errorLoginAction = () => ({
  type: ERROR_LOGIN
});

const startLoginAction = () => ({
  type: START_LOGGIN
});
const endLoginAction = () => ({
  type: END_LOGGIN
});

export default {
  authenticateUserAction,
  loginAction,
  logoutAction
};
