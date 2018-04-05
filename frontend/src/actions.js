export const actionNames = {
    //Login
    START_SEND_LOGIN: 'START_SEND_LOGIN',
    SET_LOGIN_LOADING_STATUS: 'SET_LOGIN_LOADING_STATUS',
    SET_LOGIN_ERROR_STATUS: 'SET_LOGIN_ERROR_STATUS',
    SET_LOGIN_SUCCESS_STATUS: 'SET_LOGIN_SUCCESS_STATUS',

    //Registry
    START_SEND_REGISTRAION: 'START_SEND_REGISTRAION',
    SET_REGISTRY_LOADING_STATUS: 'SET_REGISTRY_LOADING_STATUS',
    SET_REGISTRY_ERROR_STATUS: 'SET_REGISTRY_ERROR_STATUS',
    SET_REGISTRY_SUCCESS_STATUS: 'SET_REGISTRY_SUCCESS_STATUS',

    //Login data
    REMOVE_LOGIN_DATA: 'REMOVE_LOGIN_DATA',
    SET_LOGIN_DATA: 'SET_LOGIN_DATA',


    //Posts
    SEND_POST: 'SEND_POST',
    RELOAD_POSTS: 'RELOAD_POSTS',
    SET_POST_DATA: 'SET_POST_DATA',
    SET_POST_ERROR_STATUS: 'SET_POST_ERROR_STATUS',
    SET_POST_LOADING_STATUS: 'SET_POST_LOADING_STATUS'
}

export const actions = {
    //Login
    startSendlogin: loginData => ({
        type: actionNames.START_SEND_LOGIN,
        payload: loginData
    }),
    setloginLoadingStatus: status => ({
        type: actionNames.SET_LOGIN_LOADING_STATUS,
        payload: status
    }),
    setloginErrorStatus: status => ({
        type: actionNames.SET_LOGIN_ERROR_STATUS,
        payload: status
    }),
    setloginSuccessStatus: status => ({
        type: actionNames.SET_LOGIN_SUCCESS_STATUS,
        payload: status
    }),





    //Registry
    startSendRegistration: registrationData => ({
        type: actionNames.START_SEND_REGISTRAION,
        payload: registrationData
    }),
    setRegistryLoadingStatus: status => ({
        type: actionNames.SET_REGISTRY_LOADING_STATUS,
        payload: status
    }),
    setRegistryErrorStatus: status => ({
        type: actionNames.SET_REGISTRY_ERROR_STATUS,
        payload: status
    }),
    setRegistrySuccessStatus: status => ({
        type: actionNames.SET_REGISTRY_SUCCESS_STATUS,
        payload: status
    }),


    //Login Data
    removeLoginData: () => ({
        type: actionNames.REMOVE_LOGIN_DATA
    }),
    setLoginData: loginData => ({
        type: actionNames.SET_LOGIN_DATA,
        payload: loginData
    }),
    sendPost: postData => ({
        type: actionNames.SEND_POST,
        payload: postData
    }),
    reloadPosts: () => ({
        type: actionNames.RELOAD_POSTS
    }),
    setPostData: postData => ({
        type: actionNames.SET_POST_DATA,
        payload: postData
    }),
    setPostErrorStatus: status => ({
        type: actionNames.SET_POST_ERROR_STATUS,
        payload: status
    }),
    setPostLoadingStatus: status => ({
        type: actionNames.SET_POST_LOADING_STATUS,
        payload: status
    })
}