import React from 'react'
import { useParams } from 'react-router-dom'
import {profilesSelector} from "../store/profiles/profilesSelectors";
import {useSelector} from "react-redux";

const UserProfile = () => {
    let {id} = useParams()
    const profiles = useSelector(profilesSelector);
    const [profile] = profiles.filter(profile => profile.id === parseInt(id))
    return (
        <>
            <div className="mb-40 sm:mb-72">
                <div className="absolute bg-center bg-cover flex items-center justify-center top-0 left-0 right-0 bg-gray-400 h-40 sm:h-72" style={{backgroundImage: `url(${profile.bannerPic})`}}>
                    <div className="absolute -bottom-22 flex flex-col justify-center">
                        <img src={profile.profilePic} alt="profile"
                             className="h-52 rounded-full border-solid border-main border-7 -mt-3"/>
                    </div>
                    <h1 className="absolute -bottom-25 text-white text-3xl font-black font-sans uppercase">
                        {profile.pseudo}
                    </h1>
                </div>
            </div>
            <div className="mt-96 h-16 container">
                <p>Like</p>
            </div>
            <div className="flex justify-between flex-col sm:flex-row">
                <div className="infos p-2 bg-ym-black w-1/6">
                    <h2>Profil</h2>
                    <span className="italic font-light text-sm text-white">Type(s)</span>
                    <div>
                        {profile.profilesTypes.map( (type, index) =>
                            <span className="font-bold text-xl text-white">
                                {type}{profile.profilesTypes.length === index + 1 ? ' ' : ', '}
                            </span>
                        )}
                    </div>
                </div>
                <div className="w-3/6 p-2 bg-ym-black">
                    <p>Description</p>
                </div>
                <div className="w-1/6 p-2 bg-ym-black">
                    <h2>Réseaux sociaux</h2>
                </div>
            </div>
        </>
    )
};

export default UserProfile