import { Dispatch } from 'redux';
import axios from 'axios';
import { USER_DETAIL_SUCCESS, USER_DETAIL_FAIL, USER_LOADING, UserDispatchTypes } from './userActionType';

export const getUserAction = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: USER_LOADING
    })

    const response = await axios.get('https://next.json-generator.com/api/json/get/EyoKInVlc');

    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: response.data.data
    })

  } catch(e) {
      dispatch({
        type: USER_DETAIL_FAIL,
      })
  }
};