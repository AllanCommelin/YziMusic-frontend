import React, { createContext, useReducer, useContext } from 'react'
import MusicTypes from '../constants/MusicTypes'
import ProfileType from '../constants/ProfileTypes'

const formReducer = (state, action) => {
    switch (action.type) {
        case "FIRST_NAME_CHANGE":
            return { ...state, firstname: action.payload };
        case "LAST_NAME_CHANGE":
            return { ...state, lastname: action.payload };
        case "PSEUDO_CHANGE":
            return { ...state, username: action.payload };
        case "EMAIL_CHANGE":
            return { ...state, email: action.payload };
        case "FACEBOOK_LINK_CHANGE":
            return { ...state, facebookLink: action.payload };
        case "TWITTER_LINK_CHANGE":
            return { ...state, twitterLink: action.payload };
        case "INSTAGRAM_LINK_CHANGE":
            return { ...state, instagramLink: action.payload };
        case "YOUTUBE_LINK_CHANGE":
            return { ...state, youtubeLink: action.payload };
        case "SPOTIFY_LINK_CHANGE":
            return { ...state, spotifyLink: action.payload };
        case "DEEZER_LINK_CHANGE":
            return { ...state, deezerLink: action.payload };
        case "APPLE_MUSIC_LINK_CHANGE":
            return { ...state, appleMusicLink: action.payload };
        case "SOUNDCLOUD_LINK_CHANGE":
            return { ...state, soundcloudLink: action.payload };
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
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",

    profilesTypes: ProfileType,
    musicsTypes: MusicTypes,
    description: "",
    location: "",
    birthday: "",

    facebookLink: '',
    twitterLink: '',
    instagramLink: '',
    youtubeLink: '',
    spotifyLink: '',
    deezerLink: '',
    appleMusicLink: '',
    soundcloudLink: '',

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