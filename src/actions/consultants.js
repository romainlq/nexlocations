import actionTypes from '../constants/actionTypes';
import axios from 'axios';

const { GET_CONSULTANTS } = actionTypes;

const URL = 'http://localhost:3004';

const getConsultantsAction = () => {
  return dispatch => {
    return axios.get(`${URL}/consultants`).then(response =>
      dispatch({
        type: GET_CONSULTANTS,
        payload: response.data
      })
    );
  };
};

export default {
  getConsultantsAction
};
