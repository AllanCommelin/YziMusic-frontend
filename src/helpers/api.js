export function getHeader() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN)) {
        return {
            'authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN)}`,
            'Content-Type': 'application/json'
        }
    } else return {'Content-Type': 'application/json'}
}

export function catchError(error) {
    console.log('CatchError', error)
    if(error.code === 401) {
        if(error.message === 'Expired JWT Token') {
            localStorage.removeItem(process.env.REACT_APP_TOKEN)
            //TODO Redirect to LOGIN page
        }
    }
}

export function getUsersApi() {
    return process.env.REACT_APP_URL_API+'/api/users'
}

export function getLoginApi() {
    return process.env.REACT_APP_URL_API+'/api/login'
}