import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { RegisterStep1, RegisterStep2, RegisterStep3 } from './steps'
import {useRegisterFormState} from "../../contexts/RegisterFormContext";
import {getUsersApi, getHeader} from "../../helpers/api";
import welcomeImg from "../../assets/images/welcome.svg";

// Steps progress
const useRegisterProgress = () => {
    const [currentStep, setCurrentStep] = useState(0)

    function goNext() {
        setCurrentStep(currentStep + 1);
    }

    function goPrevious() {
        setCurrentStep(currentStep - 1)
    }

    return [currentStep, goNext, goPrevious]
}

const RegisterForm = () => {
    const { dispatch, state } = useRegisterFormState();
    const steps = [<RegisterStep1/>, <RegisterStep2/>, <RegisterStep3/>];

    const [currentStep, goNext, goPrevious] = useRegisterProgress();
    const isFirst = currentStep === 0;
    const isLast = currentStep === steps.length - 1;

    const handleSubmit = async () => {
        dispatch({type: "SUBMIT"})

    // TODO : Refacto
    // Organize data to send to api
    const formatData = () => {
        // Organize data to send to api
        let musicTypes = [];
        let profilesTypes = [];
        state.musicsTypes.forEach( type => {
            if (type.isChecked) musicTypes = [...musicTypes, type.name]
        });
        state.profilesTypes.forEach( type => {
            if (type.isChecked) profilesTypes = [...profilesTypes, type.name]
        });
        dispatch({type: "PROFILES_TYPES_CHANGE", payload: profilesTypes})
        dispatch({type: "MUSICS_TYPES_CHANGE", payload: musicTypes})
        let formatState = {...state};
        delete formatState['isSubmitLoading']
        delete formatState['isSubmissionReceived']
        return formatState
    }

        await axios.post(getUsersApi(), formatData(), {
            headers: getHeader()
        }).then(res => {
            console.log('Result', res)
            dispatch({type: "SUBMISSION_RECEIVED"});
        })
            .catch(err => console.log('erreur', err));
    }

    if (state.isSubmitLoading) return (<div><p>Loading...</p></div>);
    if (state.isSubmissionReceived) {
        return (
            <div>
                <h3 className="mt-12 font-semibold text-white text-2xl">
                    <i className="far fa-check-circle text-green-400"></i>
                    Votre inscription s'est déroulé avec succès
                </h3>
                <div className="flex justify-around">
                    <img src={welcomeImg} className="h-96 mt-10" alt="Image de bienvenue"/>
                    <div className="py-10 flex flex-col justify-center">
                        <h2 className="font-extrabold text-5xl text-main">
                            Bienvenue sur YziMusic <span className="font-black">{state.username}</span>
                            <i className="fas fa-compact-disc ml-4"></i>
                        </h2>
                        <p className="font-medium text-white text-xl mb-10">
                            Vous pouvez désormais vous connecter en cliquant sur le bouton ci-dessous
                        </p>
                        <div>
                            <Link to="/login" className="uppercase italic font-bold inline-block mt-2 btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-main text-white font-normal py-4 px-4 rounded">
                                Se connecter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {steps[currentStep]}
            <div className="my-4 flex flex-wrap justify-end items-center">
                <div className="text-ym-grey font-light italic px-6">
                    Étape {currentStep + 1} sur {steps.length}
                </div>
                {!isFirst && <button className="float-right btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-main hover:border-ym-blue text-main font-normal py-2 px-4 mr-1 rounded" onClick={() => goPrevious()}>Précedent</button>}
                <button className="float-right btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-ym-blue text-white font-normal py-2 px-4 mr-1 rounded" type="submit"
                    onClick={e => {
                        e.preventDefault();
                        if (isLast) handleSubmit();
                        else goNext();
                    }}
                >
                    {isLast ? "S'incrire" : "Suivant"}
                </button>
            </div>
        </div>
    )
}

export default RegisterForm;