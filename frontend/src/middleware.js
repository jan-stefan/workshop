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
    register: apiBasePath + '/register',
    login: apiBasePath + '/login'
}

const api = {
    register: registerData => axios.post(apiPaths.register, registerData),
    login: loginData => axios.post(apiPaths.login, loginData)
}

function* register(action) {
    yield put(actions.setRegistryLoadingStatus(true));
    yield put(actions.setRegistrySuccessStatus(false));
    try {
        yield call(() => api.register(action.payload));
        yield put(actions.setRegistryLoadingStatus(false));
        yield put(actions.setRegistryErrorStatus(false));
        yield put(actions.setRegistrySuccessStatus(true));
    } catch (e) {
        yield put(actions.setRegistryLoadingStatus(false));
        yield put(actions.setRegistryErrorStatus(true))
    }
}

function* login(action) {
    yield put(actions.setloginLoadingStatus(true));
    yield put(actions.setloginSuccessStatus(false));
    try {
        yield call(() => api.login(action.payload));
        yield put(actions.setloginLoadingStatus(false));
        yield put(actions.setloginErrorStatus(false));
        yield put(actions.setloginSuccessStatus(true));
    } catch (e) {
        yield put(actions.setloginLoadingStatus(false));
        yield put(actions.setloginErrorStatus(true))
    }
}




function* mySaga() {
    yield takeLatest(actionNames.START_SEND_REGISTRAION, register);
    yield takeLatest(actionNames.START_SEND_LOGIN, login)
}

export default mySaga;