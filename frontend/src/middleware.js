import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {actions, actionNames} from './actions';


const apiBasePath = '/api';

const apiPaths = {
    register: apiBasePath + '/register'
}

const api = {
    register: registerData => axios.post(apiPaths.register, registerData)
}

function* register(action) {
    console.log(action)
   try {
      const response = yield call(() => {api.register(action.payload)});
      console.log(response.data)
   } catch (e) {
   }
}

function* mySaga() {
  yield takeLatest(actionNames.START_SEND_REGISTRAION, register);
}

export default mySaga;