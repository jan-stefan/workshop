export const actionNames = {
    MAKE_LOGIN: 'MAKE_LOGIN'
}

export const actions = {
    makeLogin: loginData => ({
        type: actionNames.MAKE_LOGIN,
        payload: loginData
    })
}