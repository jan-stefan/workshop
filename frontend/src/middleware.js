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
    login: apiBasePath + '/login',
    posts: apiBasePath + '/posts'
}

const api = {
    register: registerData => axios.post(apiPaths.register, registerData),
    login: loginData => axios.post(apiPaths.login, loginData),
    sendPost: postData => axios.post(apiPaths.posts, postData.data, {
        headers: {
            username: postData.cridentials.username,
            password: postData.cridentials.password
        }
    })
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
    //remove this if backend is validating the Login-----------------
    yield put(actions.setLoginData(action.payload));
    return;
    //----------------------------------------------
    yield put(actions.setloginLoadingStatus(true));
    yield put(actions.setloginSuccessStatus(false));
    try {
        yield call(() => api.login(action.payload));
        yield put(actions.setloginLoadingStatus(false));
        yield put(actions.setloginErrorStatus(false));
        yield put(actions.setloginSuccessStatus(true));
        yield put(actions.setLoginData(action.payload));
    } catch (e) {
        yield put(actions.setloginLoadingStatus(false));
        yield put(actions.setloginErrorStatus(true))
    }
}


function* sendPost(action) {
    try {
        yield call(() => api.sendPost(action.payload));
    } catch (e) {
    }
}

function* reloadPosts(action) {
    try {
        yield call(() => api.loadPosts());
    } catch (e) {

    }
}
function* mySaga() {
    yield takeLatest(actionNames.START_SEND_REGISTRAION, register);
    yield takeLatest(actionNames.START_SEND_LOGIN, login)
    yield takeLatest(actionNames.SEND_POST, sendPost)
    yield takeLatest(actionNames.RELOAD_POSTS, reloadPosts)
}

export default mySaga;