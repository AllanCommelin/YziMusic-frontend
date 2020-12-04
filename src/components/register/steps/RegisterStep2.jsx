import React from 'react';
import {useRegisterFormState} from "../../../contexts/RegisterFormContext";
import Textarea from '../../../components/form/textarea'
import Input from '../../../components/form/input'
import Checkbox from '../../../components/form/checkbox'


export const RegisterStep2 =  () => {
    const {
        state: { profilesTypes, musicsTypes, description, location, birthday } ,
        dispatch
    } = useRegisterFormState();

    const handleChangeProfilesTypes = ({ target: { value } }) => {
        const newProfilesTypes = profilesTypes.map(profile => {
            if (profile.name === value) {
                return ({
                    ...profile,
                    isChecked: !profile.isChecked
                })
            }
            return profile;
        });
        dispatch({ type: "PROFILES_TYPES_CHANGE", payload: newProfilesTypes })
    }

    const handleChangeMusicsTypes = ({ target: { value } }) => {
        const newMusicsTypes = musicsTypes.map(music => {
            if (music.name === value) {
                return ({
                    ...music,
                    isChecked: !music.isChecked
                })
            }
            return music;
        });
        dispatch({ type: "MUSICS_TYPES_CHANGE", payload: newMusicsTypes })
    }

    return (
        <div>
            <h2 className="text-3xl mb-6 font-bold text-white">Votre profil</h2>
            <form className="flex flex-wrap text-ym-grey">
                <div className="w-full">
                    <Textarea label="Ma description" name="description" placeholder="Ma bio"
                           handleChange={e => dispatch({ type: "DESCRIPTION_CHANGE", payload: e.target.value })}
                           value={description}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full my-6">
                    <Input label="Ville, Pays" name="location" placeholder="Paris, France"
                           handleChange={e => dispatch({ type: "LOCATION_CHANGE", payload: e.target.value })}
                           value={location}/>
                    <Input label="Date de naissance" name="birthday" type="date"
                           handleChange={e => dispatch({ type: "BIRTHDAY_CHANGE", payload: e.target.value })}
                           value={birthday}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full my-6">
                    <Checkbox label="Type(s) de musique" values={musicsTypes} handleChange={ handleChangeMusicsTypes }/>
                    <Checkbox label="Type(s) de profil" values={profilesTypes} handleChange={ handleChangeProfilesTypes }/>
                </div>
            </form>
        </div>
    );
}
