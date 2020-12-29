import DefaultBannerProfile from '../assets/images/default-banner.png';
import DefaultPictureProfile from '../assets/images/default-profile.jpg';

export function getProfilePic(profile) {
    return profile.profilePic ?
        process.env.REACT_APP_URL_API+'/media/'+profile.profilePic.filePath :
        DefaultPictureProfile
}

export function getBannerPic(profile) {
    return profile.bannerPic ?
        process.env.REACT_APP_URL_API+'/media/'+profile.bannerPic.filePath :
        DefaultBannerProfile
}