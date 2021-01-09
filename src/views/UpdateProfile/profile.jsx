import {useSelector} from "react-redux";
import React, { useEffect, useState } from 'react';
import Input from "../../components/form/input";
import Textarea from "../../components/form/textarea";
import Checkbox from "../../components/form/checkbox";
import MusicTypes from '../../constants/MusicTypes'
import ProfileType from '../../constants/ProfileTypes'

const Profile = () => {
    const {user} = useSelector(state=>state.user)
    let userAuth = JSON.parse(user)
    let profilesTypes = ProfileType
    let musicsTypes = MusicTypes
    const [updateInfos, setUpdateInfos] = useState(userAuth);

    useEffect(() => {
        // Check profilesTypes of the user and checked it on list of ProfilesTypes
        profilesTypes.forEach( profileConst => {
            const haveProfile = userAuth.profilesTypes.find( profile => profile === profileConst.name)
            if (haveProfile) profileConst.isChecked = true
        })
        // Check musicTypes of the user and checked it on list of MusicTypes
        musicsTypes.forEach( musicConst => {
            const haveProfile = userAuth.musicsTypes.find( music => music === musicConst.name)
            if (haveProfile) musicConst.isChecked = true
        })

        //TODO: Reformat birthday date

        // Update initial musicsTypes and profilesTypes of the user by complete list whith isChecked
        userAuth.musicsTypes = musicsTypes
        userAuth.profilesTypes = profilesTypes
        // Set user infos in the state
        setUpdateInfos(userAuth)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[profilesTypes, musicsTypes])

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

    //TODO: Submiting form and formatted data
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
                           handleChange={e => updateField({ type: "LAST_NAME_CHANGE", payload: e.target.value })}
                           value={updateInfos.lastname}/>
                </div>
                <div className="w-full my-6">
                    <Input label="Adresse email" name="email" type="email" style="w-full" placeholder="exemple@gmail.com"
                           handleChange={e => updateField({ type: "EMAIL_CHANGE", payload: e.target.value })}
                           value={updateInfos.email}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Pseudo" name="pseudo" style="w-1/2" placeholder="Pseudo"
                           handleChange={e => updateField({ type: "PSEUDO_CHANGE", payload: e.target.value })}
                           value={updateInfos.username}/>
                    <Input label="Mot de passe" name="password" type="password" style="w-1/2"
                           handleChange={e => updateField({ type: "PASSWORD_CHANGE", payload: e.target.value })}
                           value=""/>
                </div>
                <h2 className="text-3xl mb-6 font-bold text-white">Vos information de profil</h2>
                <div className="w-full">
                    <Textarea label="Ma description" name="description" placeholder="Ma bio"
                              handleChange={e => updateField({ type: "DESCRIPTION_CHANGE", payload: e.target.value })}
                              value={updateInfos.description}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full my-6">
                    <Input label="Ville, Pays" name="location" placeholder="Paris, France"
                           handleChange={e => updateField({ type: "LOCATION_CHANGE", payload: e.target.value })}
                           value={updateInfos.location}/>
                    <Input label="Date de naissance" name="birthday" type="date"
                           handleChange={e => updateField({ type: "BIRTHDAY_CHANGE", payload: e.target.value })}
                           value={null}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full my-6">
                    <Checkbox label="Type(s) de musique" values={updateInfos.musicsTypes} handleChange={ handleChangeMusicsTypes }/>
                    <Checkbox label="Type(s) de profil" values={updateInfos.profilesTypes} handleChange={ handleChangeProfilesTypes }/>
                </div>
            </form>
        </div>
    )
}

export default Profile