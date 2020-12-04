import React, { useState } from 'react';
import { RegisterStep1, RegisterStep2, RegisterStep3 } from './steps'
import {useRegisterFormState} from "../../contexts/RegisterFormContext";

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

    const handleSubmit = () => {
        dispatch({type: "SUBMIT"})

        // Simulated network request :)
        setTimeout(() => {
            dispatch({type: "SUBMISSION_RECEIVED"});
        }, 1500);
    }
    if (state.isSubmitLoading) return (<div><p>Loading...</p></div>);
    if (state.isSubmissionReceived) {
        return (
            <div className="App">
                <h1>À envoyer à l'API</h1>
                <pre style={{ textAlign: "left" }}>
                  {JSON.stringify(state, null, 2)}
                </pre>
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