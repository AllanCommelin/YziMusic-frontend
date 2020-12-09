import React from 'react'
import { Link } from 'react-router-dom';

const ProfileCard = ({profile}) => {
    return (
        <div className=" w-full md:w-1/2 lg:w-1/3 relative rounded text-center rounded-t-lg bg-ym-black text-white overflow-hidden shadow max-w-xs my-3">
            <img src={profile.bannerPic} alt="banner" className="h-28"/>
            <div className="flex justify-center -mt-10">
                <img src={profile.profilePic} alt="profile"
                     className="h-24 rounded-full border-solid border-main border-5 -mt-3"/>
            </div>
            <div className="text-center px-3 pb-3 pt-2">
                <h3 className="-mt-6 text-white text-xl font-black font-sans uppercase">{profile.pseudo}</h3>
                <ul className="mt-2 font-sans font-light">
                    {profile.profilesTypes.map(type =>
                        <li className="inline-block font-bold italic px-4 text-main text-sm py-1 m-1 rounded-full bg-white">
                            {type}
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex justify-center px-3 pb-3 text-grey-dark">
                <ul className="flex flex-wrap justify-center items-center">
                    {profile.musicsTypes.map(type =>
                        <li className="inline-block px-4 text-xs py-1 m-1 rounded-full bg-main text-white">
                            {type}
                        </li>
                    )}
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