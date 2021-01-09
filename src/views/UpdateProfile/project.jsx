import {useEffect} from "react";

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>Test Project</div>
    )
}

export default Project