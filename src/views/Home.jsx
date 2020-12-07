import React from 'react';
import HomeBanner from '../assets/images/home-banner.png';
import DefaultProfile from '../assets/images/default-profile.jpg';
import DefaultBanner from '../assets/images/default-banner.png';

const Home =  () => (
    <>
        <div className="absolute bg-center bg-cover flex items-center justify-center top-0 left-0 right-0 bg-gray-400 h-40 sm:h-72" style={{backgroundImage: `url(${HomeBanner})`}}>
            <span className="font-black text-6xl text-white">YziMusic</span>
        </div>
        <div className="mt-40 sm:mt-72">

            <div className="rounded text-center rounded-t-lg bg-ym-black text-white overflow-hidden shadow max-w-xs my-3">
                <img src={DefaultBanner} alt="banner" className="h-28"/>
                <div className="flex justify-center -mt-8">
                    <img src={DefaultProfile} alt="profile"
                         className="h-20 rounded-full border-solid border-white border-2 -mt-3"/>
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-main text-xl font-black font-sans">Gyuki Prod</h3>
                    <p className="mt-2 font-sans font-light text-grey-dark">
                        Beatmaker | Chanteur | Musicien
                    </p>
                </div>
                <div className="flex justify-center pb-3 text-grey-dark">
                    <div className="text-right mr-3 border-r pr-3 w-1/3">
                        <h3 className="font-black text-xl">14</h3>
                        <i className="fas fa-thumbs-up text-2xl text-ym-blue"/>
                    </div>
                    <div className="flex items-center text-left w-2/3">
                        <ul>
                            <li className="inline-block px-2 py-1 m-1 rounded bg-ym-blue">Rap</li>
                            <li className="inline-block px-2 py-1 m-1 rounded bg-ym-blue">hip-Hop</li>
                            <li className="inline-block px-2 py-1 m-1 rounded bg-ym-blue">RnB</li>
                            <li className="inline-block px-2 py-1 m-1 rounded bg-ym-blue">Reggae</li>
                            <li className="inline-block px-2 py-1 m-1 rounded bg-ym-blue">Classique</li>
                        </ul>
                    </div>
                </div>
                <div className="my-4">
                    <a href="#" className="my-10 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-main text-white font-normal py-2 px-4 rounded">Découvrir</a>
                </div>
            </div>

        </div>
    </>
);

export default Home;