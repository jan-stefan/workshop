import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import axios from 'axios';
import {
    actions,
    actionNames
} from './actions';


const apiBasePath = '/api';

const apiPaths = {
    register: apiBasePath + '/register'
}

const api = {
    register: registerData => axios.post(apiPaths.register, registerData)
}

function* register(action) {
    yield put(actions.setRegistryLoadingStatus(true));
    yield put(actions.setRegistrySuccessStatus(false));
    try {
        const response = yield call(() => api.register(action.payload));
        yield put(actions.setRegistryLoadingStatus(false));
        yield put(actions.setRegistryErrorStatus(false));
        yield put(actions.setRegistrySuccessStatus(true));
    } catch (e) {
        yield put(actions.setRegistryErrorStatus(true))
    }
}

function* mySaga() {
    yield takeLatest(actionNames.START_SEND_REGISTRAION, register);
}

export default mySaga;