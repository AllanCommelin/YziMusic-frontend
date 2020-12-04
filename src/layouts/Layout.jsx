import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Logo from '../assets/images/logo.svg'

import Home from '../views/Home'
import Search from '../views/Search'
import Profile from '../views/Profile'
import Register from "../views/Register";

const routes = [
    {
        label: "Accueil",
        path: "/",
        component: Home
    },
    {
        label: "Trouver un profil",
        path: "/search",
        component: Search
    },
    {
        label: "Mon profil",
        path: "/user/me",
        component: Profile,
    },
    {
        label: "Inscription",
        path: "/register",
        component: Register,
    },
];

export default function Layout() {
    return (
        <div className="bg-ym-light-black min-h-screen">
            <nav className="flex items-center justify-between flex-wrap bg-ym-black p-6 fixed w-full z-10 top-0">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
                        <img className="h-8" src={Logo} alt="YziMusic logo"/>
                    </a>
                </div>

                <div className="block lg:hidden">
                    <button id="nav-toggle"
                            className=" nav-toggle flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
                     id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        {routes.map((route) => (
                            <li key={route.label} className="mr-3">
                                <div className="nav-toggle inline-block py-2 px-4 text-white no-underline">
                                    <Link to={route.path}>{route.label}</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <div className="relative">
                <div className="container mx-auto bg-ym-light-black mt-20 md:mt-18 py-4 px-10">
                    <Switch>
                        {routes.map((route) => (
                            <Route key={route.label} path={route.path} exact component={route.component} />
                        ))}
                    </Switch>
                </div>
            </div>
            <div className="flex items-center justify-between flex-wrap bg-ym-black p-6 absolute w-full z-10 bottom-0">
                <p className="text-white">YziMusic</p>
                <p className="text-white">Allan Commelin</p>
            </div>
        </div>
    )
}