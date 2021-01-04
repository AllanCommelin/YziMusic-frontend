import {useEffect} from "react";

const UpdateProfile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h1>Update infos</h1>
            <div>Profil</div>
            <div>Description</div>
            <div>Ajouter un projet</div>
            <div>Social</div>
        </div>
    )
}

export default UpdateProfile