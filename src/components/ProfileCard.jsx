import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import {getHeader} from "../helpers/api";
import DefaultBannerProfile from '../assets/images/default-banner.png';
import DefaultPictureProfile from '../assets/images/default-profile.jpg';
import ProfileType from '../constants/ProfileTypes';
import MusicTypes from '../constants/MusicTypes';

const ProfileCard = ({profile}) => {
    const [profilePicture, setProfilePicture] = useState()
    const [bannerPicture, setBannerPicture] = useState()
    useEffect(() => {
        if (profile.profilePic) {
            axios(process.env.REACT_APP_URL_API+profile.profilePic, {
                method: 'GET',
                headers: getHeader()
            }).then((response) => {
                    setProfilePicture(process.env.REACT_APP_URL_API+response.data['contentUrl'])
                }).catch()
        } else {
            setProfilePicture(DefaultPictureProfile)
        }
        if (profile.bannerPic) {
            axios(process.env.REACT_APP_URL_API+profile.bannerPic, {
                method: 'GET',
                headers: getHeader()
            }).then((response) => {
                setBannerPicture(process.env.REACT_APP_URL_API+response.data['contentUrl'])
            }).catch()
        } else {
            setBannerPicture(DefaultBannerProfile)
        }
    });

    let profilesType;
    if(Object.keys(profile.profilesTypes).length !== 0) {
        profilesType = profile.profilesTypes.map(type => {
            const typeOfProfile = ProfileType.find(profile => profile.name === type)
            return (
                <li key={type} className="inline-block font-bold italic px-4 text-main text-sm py-1 m-1 rounded-full bg-white">
                    {typeOfProfile.label}
                </li>
            )
        })
    } else profilesType = <span>Pas de profil pour le moment</span>

    let musicsType;
    if(Object.keys(profile.musicsTypes).length !== 0) {
        musicsType = profile.musicsTypes.map(type => {
            const typeOfMusic = MusicTypes.find(music => music.name === type)
            return (
                <li key={type} className="inline-block px-4 text-xs py-1 m-1 rounded-full bg-main text-white">
                    {typeOfMusic.label}
                </li>
            )
        })
    } else musicsType = <span>Pas de type musical pour le moment</span>
    return (
        <div className=" w-full md:w-1/2 lg:w-1/3 relative rounded text-center rounded-t-lg bg-ym-black text-white overflow-hidden shadow max-w-xs my-3">
            <img src={bannerPicture} alt="banner" className="h-28"/>
            <div className="flex justify-center -mt-10">
                <img src={profilePicture} alt="profile"
                     className="h-24 rounded-full border-solid border-main border-5 -mt-3"/>
            </div>
            <div className="text-center px-3 pb-3 pt-2">
                <h3 className="-mt-6 text-white text-xl font-black font-sans uppercase">{profile.username}</h3>
                <ul className="mt-2 font-sans font-light">
                    {profilesType}
                </ul>
            </div>
            <div className="flex justify-center px-3 pb-3 text-grey-dark">
                <ul className="flex flex-wrap justify-center items-center">
                    {musicsType}
                </ul>
            </div>
            <div className="flex justify-center pb-3 text-grey-dar mb-16">
                <div className="text-right mr-3 pr-3 w-1/3">
                    <h3 className="font-black text-xl">14 <i className="fas fa-thumbs-up text-xl text-main"/></h3>
                </div>
            </div>
            <div className="flex justify-center left-0 right-0 absolute bottom-0">
                <Link to={'/profile/'+ profile.id} className="uppercase italic font-bold w-full mt-4 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-main text-white font-normal py-4 px-4 rounded-b">
                    Découvrir
                </Link>
            </div>
        </div>
    )
}

export default ProfileCard;