import {
    actionNames
} from "../../actions";

export default (state = {
    loading: false,
    error: false,
}, action) => {
    switch (action.type) {
        case actionNames.SET_POST_ERROR_STATUS:
            return {
                ...state,
                error: action.payload
            }
        case actionNames.SET_POST_LOADING_STATUS:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}