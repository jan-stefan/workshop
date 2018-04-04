export const actionNames = {
    MAKE_LOGIN: 'MAKE_LOGIN',
    START_SEND_REGISTRAION: 'START_SEND_REGISTRAION'
}

export const actions = {
    makeLogin: loginData => ({
        type: actionNames.MAKE_LOGIN,
        payload: loginData
    }),
    startSendRegistration: registrationData => ({
        type: actionNames.START_SEND_REGISTRAION,
        payload: registrationData
    })
}