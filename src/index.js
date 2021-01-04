import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import './assets/styles/style.css'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";
import Layout from "./layouts/Layout";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
{/*        <div className="loader-container">
            <div className="loader"></div>
        </div>*/}
      <Switch>
          <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
const navToggle = document.getElementById('nav-toggle')
if (navToggle) {
    navToggle.onclick = function(){
        document.getElementById("nav-content").classList.toggle("hidden");
    }

    let elements = document.getElementsByClassName('nav-toggle')
    for(let i=0; i<elements.length; i++) {
        elements[i].onclick = function () {
            document.getElementById("nav-content").classList.toggle("hidden");
        }
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
