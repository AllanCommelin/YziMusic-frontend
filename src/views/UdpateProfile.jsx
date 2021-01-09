import { useState, useEffect } from "react";
import Profile from "./UpdateProfile/profile";
import Social from "./UpdateProfile/social";
import Streaming from "./UpdateProfile/streaming";
import Project from "./UpdateProfile/project";
import '../assets/styles/updatePages.css';

const UpdateProfile = () => {
    useEffect(() => {
        // Set scroll to the top when we arrive on the page
        window.scrollTo(0, 0);
    }, []);

    const updatesPages = [<Profile/>, <Social/>, <Streaming/>, <Project/>]
    const [currentPage, setPage] = useState(0)
    const [showAside, setShowAside] = useState(true)
    // When user click on button it set index of UpdatePage to display the right view and hid aside
    const linkToPage = (e, page) => {
        e.preventDefault();
        setPage(page)
        setShowAside(false)
    }
    // To hid or show the aside
    const toggleAside = (e, toggle) => {
        e.preventDefault();
        setShowAside(toggle)
    }

    return (
        <div className="flex">
            <aside className={!showAside ? 'hidden' : null}>
                <button onClick={e => toggleAside(e, false)} className="btn-close">
                    <i className="fas fa-times"/>
                </button>
                <ul>
                    <li>
                        <h3>Mettre à jour mon compte</h3>
                    </li>
                    <li onClick={e => linkToPage(e, 0)}>
                        Mon Profil</li>
                    <li onClick={e => linkToPage(e, 1)}>
                        Réseaux sociaux</li>
                    <li onClick={e => linkToPage(e, 2)}>
                        Streamings</li>
                    <li onClick={e => linkToPage(e, 3)}>
                        Mes projets
                    </li>
                </ul>
            </aside>
            <div className="w-full">
                <button onClick={e => toggleAside(e, true)}>
                    <i className="fas fa-long-arrow-alt-left"/>
                </button>
                { updatesPages[currentPage] }
            </div>
        </div>
    )
}

export default UpdateProfile