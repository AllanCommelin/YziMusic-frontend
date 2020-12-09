import {combineReducers, createStore} from 'redux';
import {ProfilesReducer} from "./profiles/profilesReducer";


export default createStore(combineReducers({
    profiles: ProfilesReducer
}))