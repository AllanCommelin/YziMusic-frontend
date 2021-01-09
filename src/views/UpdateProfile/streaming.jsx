import {useEffect} from "react";

const Streaming = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>Test Streaming</div>
    )
}

export default Streaming