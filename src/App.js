import * as React from 'react';
import Login from './login'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from "react-router-dom";
import Register from "./Register";
import Error from "./Error";
import DashBoardAdmin from "./AdminDashBoard"
import UserPage from "./UserPage";
import RegisterApplication from "./RegisterApplication"
import RegisterCompany from "./RegisterCompany"
import RegisterAdvertisement from "./RegisterAdvertisement"
import Frontage from "./Frontage";
import JobSeeker from './JobSeeker';
import ChampionSeeker from './ChampionSeeker.js';
import Redirection from './Redirection.js';
import LearnMore from './LearnMore'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Frontage/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/redirection">
                    <Redirection/>
                </Route>
                <Route exact path="/registerApplication">
                    <RegisterApplication/>
                </Route>
                <Route exact path="/registerCompany">
                    <RegisterCompany/>
                </Route>
                <Route exact path="/registerAdvertisement">
                    <RegisterAdvertisement/>
                </Route>
                <Route exact path="/admin">
                    <DashBoardAdmin/>
                </Route>
                <Route exact path="/user">
                    <UserPage/>
                </Route>
                <Route exact path="/championseeker">
                    <ChampionSeeker/>
                </Route>
                <Route exact path="/jobseeker">
                    <JobSeeker/>
                </Route>
                <Route exact path="/learnmore">
                    <LearnMore/>
                </Route>
              
                <Route exact path="/error">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;