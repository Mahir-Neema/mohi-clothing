import React from "react";
// import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from '../../assets/crown.svg';

// import {withRouter} from 'react-router';

import './header.styles.scss';

const Header = ({ currentUser}) => (
    <div className="header">
        <div>
            <NavLink className="logo-container" to='/' > 
            {/* //target="_blank" */}
                <Logo className="logo" />
            </NavLink>
        </div>
        <div className="options">
            <NavLink className="option" to='/shop' >
                SHOP
            </NavLink>
            <NavLink className="option" to='/shop' target="_blank">
                CONTACT
            </NavLink>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <NavLink className="option" to='/signin'>SIGN IN</NavLink>
            }

        </div>
    </div>
);

export default Header;