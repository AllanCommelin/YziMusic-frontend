export function getHeader() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN)) {
        return {
            'authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN)}`,
            'Content-Type': 'application/json'
        }
    } else return {'Content-Type': 'application/json'}
}

export function getUsersApi() {
    return process.env.REACT_APP_URL_API+'/api/users'
}

export function getLoginApi() {
    return process.env.REACT_APP_URL_API+'/api/login'
}