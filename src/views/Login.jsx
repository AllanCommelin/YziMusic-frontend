import React, {useState} from 'react'
import Input from '../components/form/input'
import axios from "axios";
import {getHeader, getLoginApi} from "../helpers/api";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password:""
    });

    const handleChange = function(e) {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = function () {
        //todo check data format
        axios.post(getLoginApi(), user,{
            headers: getHeader()
        }).then(res => {
            localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.token)
        }).catch(err => console.log('todo gestion erreur', err))
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="text-ym-grey">
                <Input label="Adresse email" name="email"
                       type="email"
                       required
                       handleChange={e => { handleChange(e)}}
                       value={user.email}/>
                <Input label="Mot de passe" name="password" type="password" style="w-1/2"
                       handleChange={e => { handleChange(e)}}
                       value={user.password}/>
                <button className="float-right btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-main hover:bg-ym-blue text-white font-normal py-2 px-4 mr-1 rounded" type="submit"
                        onClick={e => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                >
                    Se connecter
                </button>
            </div>
        </div>
    )
}

export default Login;