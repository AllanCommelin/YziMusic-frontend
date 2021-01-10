import {useSelector} from "react-redux";
import React, { useEffect, useState } from 'react';
import Input from "../../components/form/input";
import Textarea from "../../components/form/textarea";
import Checkbox from "../../components/form/checkbox";
import MusicTypes from '../../constants/MusicTypes'
import ProfileType from '../../constants/ProfileTypes'
import {catchError, getHeader, getUsersApi} from "../../helpers/api";
import axios from "axios/index";
import moment from "moment"
import API from "../../utils/API";

const Profile = () => {
    //Get user auth on state
    const {user} = useSelector(state=>state.user)
    let userState = JSON.parse(user)
    // Init userProfile
    let userProfile = null;
    // Get constant type of Musics and Profiles
    let profilesTypes = ProfileType
    let musicsTypes = MusicTypes
    // Init updateInfos state
    const [updateInfos, setUpdateInfos] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        description: '',
        location: '',
        birthday: '',
        musicsTypes: [],
        profilesTypes: []
    });
    // Init loading state
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let isSubscribed = true;
        // Get most recent data of current profile
        (async function getProfile() {
            await API.get(`users/${userState.id}`, {
                method: 'GET',
                headers: getHeader()
            }).then((response) => {
                userProfile = response.data
                if (userProfile) {
                    // Check profilesTypes of the user and checked it on list of ProfilesTypes
                    if (userProfile.profilesTypes && Object.keys(userProfile.profilesTypes).length !== 0) {
                        profilesTypes.forEach( profileConst => {
                            const haveProfile = userProfile.profilesTypes.find( profile => profile === profileConst.name)
                            if (haveProfile) profileConst.isChecked = true
                        })
                    }
                    // Check musicTypes of the user and checked it on list of MusicTypes
                    if (userProfile.profilesTypes && Object.keys(userProfile.profilesTypes).length !== 0) {
                        musicsTypes.forEach(musicConst => {
                            const haveProfile = userProfile.musicsTypes.find(music => music === musicConst.name)
                            if (haveProfile) musicConst.isChecked = true
                        })
                    }
                    // Update initial musicsTypes and profilesTypes of the user by complete list whith isChecked
                    userProfile.musicsTypes = musicsTypes
                    userProfile.profilesTypes = profilesTypes
                    //Format date to the right format
                    userProfile.birthday = moment(userProfile.birthday).format('yyyy-MM-DD')
                    // Set user infos in the state
                    setUpdateInfos(userProfile)
                }
            }).catch(error => catchError(error.response.data))
        })()
        return () => isSubscribed = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[profilesTypes, musicsTypes, userProfile])


    // Update field on the state
    const updateField = ({type, payload}) => {
        setUpdateInfos({...updateInfos, [type]: payload})
    }
    // Update isChecked in the list of ProfilesTypes
    const handleChangeProfilesTypes = ({ target: { value } }) => {
        const newProfilesTypes = updateInfos.profilesTypes.map(profile => {
            if (profile.name === value) {
                return ({
                    ...profile,
                    isChecked: !profile.isChecked
                })
            }
            return profile;
        });
        updateField({ type: "profilesTypes", payload: newProfilesTypes })
    }
    // Update isChecked in the list of MusicsTypes
    const handleChangeMusicsTypes = ({ target: { value } }) => {
        const newMusicsTypes = updateInfos.musicsTypes.map(music => {
            if (music.name === value) {
                return ({
                    ...music,
                    isChecked: !music.isChecked
                })
            }
            return music;
        });
        updateField({ type: "musicsTypes", payload: newMusicsTypes })
    }
    // Format data to API
    const formatData = () => {
        let data = {
            firstname: updateInfos.firstname,
            lastname: updateInfos.lastname,
            email: updateInfos.email,
            username: updateInfos.username,
            description: updateInfos.description,
            location: updateInfos.location,
            birthday: updateInfos.birthday,
            musicsTypes: [],
            profilesTypes: []
        }
        // Keep only musics types thant is checked
        updateInfos.musicsTypes.forEach( type => {
            if (type.isChecked) data.musicsTypes = [...data.musicsTypes, type.name]
        });
        // Keep only profiles types thant is checked
        updateInfos.profilesTypes.forEach( type => {
            if (type.isChecked) data.profilesTypes = [...data.profilesTypes, type.name]
        });

        return data
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // Send data to API
        await axios.patch(getUsersApi()+`/${updateInfos.id}`, formatData(), {
            headers: getHeader('application/merge-patch+json')
        }).then(res => {
            console.log('Result update', res.data)
            //TODO: Update the store user
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            catchError(error.response.data)
        });
    }

    if(!loading) {
        return (
            <div>
                <h1>Profil</h1>
                <h2 className="text-3xl mb-6 font-bold text-white">Vos informations de compte</h2>
                <form className="flex flex-wrap text-ym-grey">
                    <div className="grid gap-4 grid-cols-2 w-full">
                        <Input label="Prénom" name="firstname" placeholder="Prénom"
                               handleChange={e => updateField({ type: 'firstname', payload: e.target.value })}
                               value={updateInfos.firstname}/>
                        <Input label="Nom" name="lastname" placeholder="Nom"
                               handleChange={e => updateField({ type: "lastname", payload: e.target.value })}
                               value={updateInfos.lastname}/>
                    </div>
                    <div className="grid gap-4 grid-cols-2 w-full">
                        <Input label="Adresse email" name="email" type="email" style="w-full" placeholder="exemple@gmail.com"
                               handleChange={e => updateField({ type: "email", payload: e.target.value })}
                               value={updateInfos.email}/>
                        <Input label="Pseudo" name="pseudo" style="w-1/2" placeholder="Pseudo"
                               handleChange={e => updateField({ type: "username", payload: e.target.value })}
                               value={updateInfos.username}/>
                    </div>
                    <h2 className="text-3xl mb-6 font-bold text-white">Vos information de profil</h2>
                    <div className="w-full">
                    <Textarea label="Ma description" name="description" placeholder="Ma bio"
                              handleChange={e => updateField({ type: "description", payload: e.target.value })}
                              value={updateInfos.description}/>
                    </div>
                    <div className="grid gap-4 grid-cols-2 w-full my-6">
                        <Input label="Ville, Pays" name="location" placeholder="Paris, France"
                               handleChange={e => updateField({ type: "location", payload: e.target.value })}
                               value={updateInfos.location}/>
                        <Input label="Date de naissance" name="birthday" type="date"
                               handleChange={e => updateField({ type: "birthday", payload: e.target.value })}
                               value={updateInfos.birthday}/>
                    </div>
                    <div className="grid gap-4 grid-cols-2 w-full my-6">
                        <Checkbox label="Type(s) de musique" values={updateInfos.musicsTypes} handleChange={ handleChangeMusicsTypes }/>
                        <Checkbox label="Type(s) de profil" values={updateInfos.profilesTypes} handleChange={ handleChangeProfilesTypes }/>
                    </div>
                    <button onClick={e => handleSubmit(e)} className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-ym-blue text-white font-normal py-2 px-4 mr-1 rounded">
                        Enregistrer
                    </button>
                </form>
            </div>
        )
    } else return (<div><p>Loading...</p></div>);
}

export default Profile