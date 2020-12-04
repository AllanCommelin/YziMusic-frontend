import React, { createContext, useReducer, useContext } from 'react'
import MusicTypes from '../constants/MusicTypes'
import ProfileType from '../constants/ProfileTypes'

const formReducer = (state, action) => {
    switch (action.type) {
        case "FIRST_NAME_CHANGE":
            return { ...state, firstName: action.payload };
        case "LAST_NAME_CHANGE":
            return { ...state, lastName: action.payload };
        case "PSEUDO_CHANGE":
            return { ...state, pseudo: action.payload };
        case "EMAIL_CHANGE":
            return { ...state, email: action.payload };
        case "FACEBOOK_LINKS_CHANGE":
            return { ...state, facebookLinks: action.payload };
        case "TWITTER_LINKS_CHANGE":
            return { ...state, twitterLinks: action.payload };
        case "INSTAGRAM_LINKS_CHANGE":
            return { ...state, instagramLinks: action.payload };
        case "YOUTUBE_LINKS_CHANGE":
            return { ...state, youtubeLinks: action.payload };
        case "SPOTIFY_LINKS_CHANGE":
            return { ...state, spotifyLinks: action.payload };
        case "DEEZER_LINKS_CHANGE":
            return { ...state, deezerLinks: action.payload };
        case "APPLE_MUSIC_LINKS_CHANGE":
            return { ...state, appleMusicLinks: action.payload };
        case "SOUNDCLOUD_LINKS_CHANGE":
            return { ...state, soundcloudLinks: action.payload };
        case "PROFILES_TYPES_CHANGE":
            return { ...state, profilesTypes: action.payload };
        case "MUSICS_TYPES_CHANGE":
            return { ...state, musicsTypes: action.payload };
        case "DESCRIPTION_CHANGE":
            return { ...state, description: action.payload };
        case "LOCATION_CHANGE":
            return { ...state, location: action.payload };
        case "BIRTHDAY_CHANGE":
            return { ...state, birthday: action.payload };
        case "PASSWORD_CHANGE":
            return { ...state, password: action.payload };
        case "SUBMIT":
            return { ...state, isSubmitLoading: true };
        case "SUBMISSION_RECEIVED":
            return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
        default:
            throw new Error();
    }
}

const RegisterFormContext = createContext();

const initialState = {
    firstName: "",
    lastName: "",
    pseudo: "",
    email: "",
    password: "",

    profilesTypes: ProfileType,
    musicsTypes: MusicTypes,
    description: "",
    location: "",
    birthday: "",

    facebookLinks: '',
    twitterLinks: '',
    instagramLinks: '',
    youtubeLinks: '',
    spotifyLinks: '',
    deezerLinks: '',
    appleMusicLinks: '',
    soundcloudLinks: '',

    isSubmitLoading: false,
    isSubmissionReceived: false
};

export const RegisterFormProvider = function ({ children }) {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <RegisterFormContext.Provider value={{ state, dispatch }}>
            {children}
        </RegisterFormContext.Provider>
    )
}

export function useRegisterFormState() {
    const context = useContext(RegisterFormContext);

    if (context === undefined) throw new Error('UseRegisterFormState must be used within a RegsiterFormProvider')

    return context
}