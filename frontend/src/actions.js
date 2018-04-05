export const actionNames = {
    START_SEND_LOGIN: 'START_SEND_LOGIN',
    SET_LOGIN_LOADING_STATUS: 'SET_LOGIN_LOADING_STATUS',
    SET_LOGIN_ERROR_STATUS: 'SET_LOGIN_ERROR_STATUS',
    SET_LOGIN_SUCCESS_STATUS: 'SET_LOGIN_SUCCESS_STATUS',

    //Registry
    START_SEND_REGISTRAION: 'START_SEND_REGISTRAION',
    SET_REGISTRY_LOADING_STATUS: 'SET_REGISTRY_LOADING_STATUS',
    SET_REGISTRY_ERROR_STATUS: 'SET_REGISTRY_ERROR_STATUS',
    SET_REGISTRY_SUCCESS_STATUS: 'SET_REGISTRY_SUCCESS_STATUS'
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
    })
}