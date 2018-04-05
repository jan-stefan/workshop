import {
    combineReducers
} from 'redux';
import app from './container/App/reducer';
import registry from './container/Registry/reducer';
import login from './container/Login/reducer';
import postList from './container/PostList/reducer';
import {
    actionNames
} from './actions';


const data = (state = {
    username: null,
    password: null,
    posts: [{
        id: 1,
        creatorName: "The Test Creator",
        title: "TestPost",
        content: "<p>I am Test Content</p>",
        relatedTo: null
    }]
}, action) => {
    switch (action.type) {
        case actionNames.SET_LOGIN_DATA:
            return {
                ...state,
                ...action.payload
            }
        case actionNames.REMOVE_LOGIN_DATA:
            return {
                ...state,
                username: null,
                password: null
            }
        case actionNames.SET_POST_DATA:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

const ui = combineReducers({
    app,
    registry,
    login,
    postList
})

export default combineReducers({
    data,
    ui
})