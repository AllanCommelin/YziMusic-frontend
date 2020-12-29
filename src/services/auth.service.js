import axios from "axios";
import {authHeader} from "./auth-header"
import {getLoginApi, getUsersApi} from "../helpers/api";
import { useDispatch } from "react-redux"


export const Login = (user) => {
    return axios
        .post(getLoginApi(), user, {headers: authHeader()})
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem(process.env.REACT_APP_TOKEN, response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
            }
            return response.data;
        }).catch(err => console.log('todo gestion erreur', err));
}

export const Logout = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN);
    localStorage.removeItem('user');
}

export const Register = (user) => {
    const dispatch = useDispatch()
    return axios.post(getUsersApi(), user, {headers: authHeader()})
        .then(res => {
            console.log('Result', res)
            dispatch({type: "SUBMISSION_RECEIVED"});
        }).catch(err => console.log('erreur', err));
}
