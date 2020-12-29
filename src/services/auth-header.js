export function authHeader() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN)) {
        return {
            'authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN)}`,
            'Content-Type': 'application/json'
        }
    } else return {'Content-Type': 'application/json'}
}