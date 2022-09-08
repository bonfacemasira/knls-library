import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUP";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function Landingpage() {
    return (
        <div className="Landingpage">
            <Router>
                <div>
                    <nav>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to={'/login'}>
                                        <button className="landingButton">Login</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sign-up'}>
                                        <button className="landingButton">Sign up</button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                        <Routes>
                            <Route exact path='/login' element={<Login />} />
                            <Route exact path='/sign-up' element={<SignUp />} />
                            <Route exact path='/' element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Landingpage;