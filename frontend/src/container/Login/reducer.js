import {
    actionNames
} from "../../actions";

export default (state = {
    loading: false,
    error: false,
    success: false
}, action) => {
    switch (action.type) {
        case actionNames.SET_LOGIN_ERROR_STATUS:
            return {
                ...state,
                error: action.payload
            }
        case actionNames.SET_LOGIN_LOADING_STATUS:
            return {
                ...state,
                loading: action.payload
            }
        case actionNames.SET_LOGIN_SUCCESS_STATUS:
            return {
                ...state,
                success: action.payload
            }
        default:
            return state;
    }
}