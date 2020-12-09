import {ADD_PROFILE_ACTION} from "./profilesReducer";

export const addProfilesActions = (profile) => ({
    type: ADD_PROFILE_ACTION,
    payload: {...profile}
});