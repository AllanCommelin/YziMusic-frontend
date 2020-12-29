import {combineReducers, createStore, applyMiddleware} from 'redux';
import {ProfilesReducer} from "./profiles/profilesReducer";
import auth from "../reducers/auth";
import message from "../reducers/message";
import thunk from "redux-thunk";

export default createStore(combineReducers({
    user: auth,
    message: message,
    profiles: ProfilesReducer,
}), applyMiddleware(thunk))