export function getHeader(contentType = null) {
    // Put the token if it exist
    if (localStorage.getItem(process.env.REACT_APP_TOKEN)) {
        return {
            'authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN)}`,
            'Content-Type': contentType ? contentType : 'application/json'
        }
    } else return {'Content-Type': contentType ? contentType : 'application/json'}
}

export function catchError(error) {
    if(error.code === 401) {
        // Clear local storage
        localStorage.removeItem(process.env.REACT_APP_TOKEN)
        localStorage.removeItem('user')
        //Redirect to LOGIN page
        window.location = "/login";
    }
}

export function getUsersApi() {
    return process.env.REACT_APP_URL_API+'/api/users'
}

export function getLoginApi() {
    return process.env.REACT_APP_URL_API+'/api/login'
}