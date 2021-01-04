import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from "../utils/API";
import {catchError, getHeader} from "../helpers/api";
import {getBannerPic, getProfilePic} from "../helpers/profile";
import ProfileType from "../constants/ProfileTypes";
import MusicTypes from "../constants/MusicTypes";
import moment from "moment"
const UserProfile = () => {
    let {id} = useParams()
    let profilesType;
    let musicsType;
    const [profile, setProfile] = useState({})
    const [displayingEmail, setDisplayingEmail] = useState(false)
    useEffect(() => {
        let isSubscribed = true;
        (async function getProfile() {
            await API.get(`users/${id}`, {
                method: 'GET',
                headers: getHeader()
            }).then((response) => {
                console.log(response.data)
                setProfile(response.data)
            }).catch(error => catchError(error.response.data))
        })()
        return () => isSubscribed = false
    }, []);

    if(profile.profilesTypes && Object.keys(profile.profilesTypes).length !== 0) {
        profilesType = profile.profilesTypes.map( (type, index) => {
            const typeOfProfile = ProfileType.find(profile => profile.name === type)
            return (
                <span key={type} className="font-bold text-xl text-white">
                    {typeOfProfile.label}{profile.profilesTypes.length === index + 1 ? ' ' : ', '}
                </span>
            )
        })
    } else profilesType = <span>Pas de profil pour le moment</span>
    if(profile.musicsTypes && Object.keys(profile.musicsTypes).length !== 0) {
        musicsType = profile.musicsTypes.map( (type, index) => {
            const typeOfMusic = MusicTypes.find(music => music.name === type)
            return (
                <span key={type} className="font-bold text-xl text-white">
                    {typeOfMusic.label}{profile.musicsTypes.length === index + 1 ? ' ' : ', '}
                </span>
            )
        })
    } else musicsType = <span>Pas de type musical pour le moment</span>

    const getAge = function (date) {
        return moment().diff(moment(date),'year')
    }

    const displayEmail = function (e) {
        e.preventDefault()
        setDisplayingEmail(true)
    }

    return (
        <>
            <div className="mb-40 sm:mb-72">
                <div className="absolute bg-center bg-cover flex items-center justify-center top-0 left-0 right-0 bg-gray-400 h-40 sm:h-72" style={{backgroundImage: `url(${getBannerPic(profile)})`}}>
                    <div className="absolute -bottom-22 flex flex-col justify-center">
                        <img src={getProfilePic(profile)} alt="profile"
                             className="h-52 rounded-full border-solid border-main border-7 -mt-3"/>
                    </div>
                    <h1 className="absolute -bottom-25 text-white text-3xl font-black font-sans uppercase">
                        {profile.username}
                    </h1>
                </div>
            </div>
            <div className="mt-96 h-16 container">
                <p>Like</p>
            </div>
            <div className="flex justify-between flex-col lg:flex-row">
                <div className="infos py-2 px-8 bg-ym-black order-2 w-full lg:w-1/6 lg:order-1">
                    <h2 className="text-main uppercase font-black italic text-2xl">Profil</h2>
                    <div className="flex flex-row lg:flex-col">
                        <div className="w-1/2 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Type(s)</span>
                            <div>
                                {profilesType}
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Style(s)</span>
                            <div>
                                {musicsType}
                            </div>
                        </div>
                    </div>
                    <h2 className="text-main uppercase font-black italic text-2xl">Infos</h2>
                    <div className="flex flex-row lg:flex-col w-full flex-wrap">
                        <div className="w-2/5 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Nom</span>
                            <div>
                                <span className="font-bold text-xl text-white">{profile.lastname}</span>
                            </div>
                        </div>
                        <div className="w-2/5 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Prénom</span>
                            <div>
                                <span className="font-bold text-xl text-white">{profile.firstname}</span>
                            </div>
                        </div>
                        <div className="w-1/5 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Âge</span>
                            <div>
                                <span className="font-bold text-xl text-white">{getAge(profile.birthday)} ans</span>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-full">
                            <span className="italic font-thin text-sm text-white">Ville/Pays</span>
                            <div>
                                <span className="font-bold text-xl text-white">{profile.location}</span>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-full">
                            <span className="italic font-thin text-sm text-white">E-mail :  {displayingEmail === true}</span>
                            <div>
                                {displayingEmail ?
                                    <span className="font-bold text-lg text-white">{profile.email}</span> :
                                    <button onClick={e => displayEmail(e)} className="uppercase text-sm italic font-bold w-auto btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-main text-white font-normal py-2 px-4 rounded">Voir</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full order-1 py-2 px-8 bg-ym-black lg:w-3/6 lg:order-2">
                    <h2 className="text-main uppercase font-black italic text-2xl">Description</h2>
                    <p className="text-white text-lg font-thin">{profile.description}</p>
                </div>
                <div className="w-full order-3 py-2 px-8 bg-ym-black lg:w-1/6 lg:order-3">
                    <h2 className="text-main uppercase font-black italic text-2xl">Réseaux sociaux</h2>
                </div>
            </div>
        </>
    )
};

export default UserProfile