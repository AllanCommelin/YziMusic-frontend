import React from 'react';
import {useRegisterFormState} from "../../../contexts/RegisterFormContext";
import Input from '../../../components/form/input'

export const RegisterStep1 =  () =>   {
    const {
        state: { firstName, lastName, email, pseudo, password } ,
        dispatch
    } = useRegisterFormState();

    return (
        <div>
            <h2 className="text-3xl mb-6 font-bold text-white">Vos informations</h2>
            <form className="flex flex-wrap text-ym-grey">
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Prénom" name="firstName" placeholder="Prénom"
                           handleChange={e => dispatch({ type: "FIRST_NAME_CHANGE", payload: e.target.value })}
                           value={firstName}/>
                    <Input label="Nom" name="lastName" placeholder="Nom"
                           handleChange={e => dispatch({ type: "LAST_NAME_CHANGE", payload: e.target.value })}
                           value={lastName}/>
                </div>
                <div className="w-full my-6">
                    <Input label="Adresse email" name="email" type="email" style="w-full" placeholder="exemple@gmail.com"
                           handleChange={e => dispatch({ type: "EMAIL_CHANGE", payload: e.target.value })}
                           value={email}/>
                </div>
                <div className="grid gap-4 grid-cols-2 w-full">
                    <Input label="Pseudo" name="pseudo" style="w-1/2" placeholder="Pseudo"
                           handleChange={e => dispatch({ type: "PSEUDO_CHANGE", payload: e.target.value })}
                           value={pseudo}/>
                <Input label="Mot de passe" name="password" type="password" style="w-1/2"
                       handleChange={e => dispatch({ type: "PASSWORD_CHANGE", payload: e.target.value })}
                       value={password}/>
                </div>
            </form>
        </div>
    );
}