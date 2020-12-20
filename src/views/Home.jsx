import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard'
import HomeBanner from '../assets/images/home-banner.png';
import DefaultBannerProfile from '../assets/images/default-banner.png';
import DefaultPictureProfile from '../assets/images/default-profile.jpg';
import API from "../utils/API";

const Home =  () => {
    //const profiles = useSelector(profilesSelector);
    //const dispatch = useDispatch()
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        API.get('users')
            .then(res => {
                console.log('res', res.data)
                setProfiles(res.data)
            }).catch(err => {
                console.log('err', err)
            })
    }, []);
    return (
        <>
            <div className="absolute bg-center bg-cover flex items-center justify-center top-0 left-0 right-0 bg-gray-400 h-40 sm:h-72" style={{backgroundImage: `url(${HomeBanner})`}}>
                <span className="font-black text-6xl text-white">YziMusic</span>
            </div>
            <div className="mt-40 flex flex-wrap justify-around sm:mt-72">
                {profiles.map(profile => <ProfileCard key={profile.id} profile={profile}/>)}
            </div>
        </>
    );
};

export default Home;