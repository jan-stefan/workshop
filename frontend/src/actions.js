export const actionNames = {
    MAKE_LOGIN: 'MAKE_LOGIN',



    //Registry
    START_SEND_REGISTRAION: 'START_SEND_REGISTRAION',
    SET_REGISTRY_LOADING_STATUS: 'SET_REGISTRY_LOADING_STATUS',
    SET_REGISTRY_ERROR_STATUS: 'SET_REGISTRY_ERROR_STATUS',
    SET_REGISTRY_SUCCESS_STATUS: 'SET_REGISTRY_SUCCESS_STATUS'
}

export const actions = {
    makeLogin: loginData => ({
        type: actionNames.MAKE_LOGIN,
        payload: loginData
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