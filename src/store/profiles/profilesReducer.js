import DefaultProfile from '../../assets/images/default-profile.jpg';
import DefaultBanner from '../../assets/images/default-banner.png';

const initialState = [
    {
        id: 1,
        firstName: 'Florian',
        lastName: 'Chignardet',
        pseudo: 'Gyüky Prod',
        email: 'allan@aono.fr',
        profilePic: DefaultProfile,
        bannerPic: DefaultBanner,
        facebookLinks: '#',
        twitterLinks: '#',
        instagramLinks: '#',
        youtubeLinks: '#',
        spotifyLinks: '#',
        deezerLinks: '#',
        appleMusicLinks: '#',
        soundcloudLinks: '#',
        profilesTypes: ['Beatmaker', 'Musicien'],
        musicsTypes: ['Rap', 'Rock', 'Hip-Hop', 'Reggae'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam earum in modi officia porro quaerat repudiandae! Explicabo harum illum ipsum officiis quae quis quisquam reprehenderit. Ducimus esse in tempore.',
        location: 'Vaux-sous-Aubigny, France',
        birthday: '03/05/1998'
    },
    {
        id: 2,
        firstName: 'Wiliam',
        lastName: 'Kalubi',
        pseudo: 'Damso',
        email: 'allan@aono.fr',
        profilePic: DefaultProfile,
        bannerPic: DefaultBanner,
        facebookLinks: '#',
        twitterLinks: '#',
        instagramLinks: '#',
        youtubeLinks: '#',
        spotifyLinks: '#',
        deezerLinks: '#',
        appleMusicLinks: '#',
        soundcloudLinks: '#',
        profilesTypes: ['Chanteur'],
        musicsTypes: ['Rap'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam earum in modi officia porro quaerat repudiandae! Explicabo harum illum ipsum officiis quae quis quisquam reprehenderit. Ducimus esse in tempore.',
        location: 'Bruxelle, Belgique',
        birthday: '10/05/1992'
    }
];

export const ADD_PROFILE_ACTION = "ADD_PROFILE_ACTION";

export function ProfilesReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_PROFILE_ACTION:
            return [...state, {...action.payload}];
        default:
            return state;
    }
}