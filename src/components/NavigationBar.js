import React, {Fragment} from "react";
import novilogo from '../images/novi-logo.png';
import { logout } from "../actions/auth";
import { connect } from "react-redux";

const NavigationBar = ({logout, isAuthenticated}) => {
    const guestLinks = () => (
        <Fragment>
            <div className="button button-primary">
                <a href="/signup">
                    Registracija
                </a>
            </div>

            <div className="button button-primary">
                <a href="/login">
                    Prijava
                </a>
            </div>
        </Fragment>

    );

    const authLinks = () => (
        <Fragment>
            <div className="button button-primary">
                <a href="/account">
                    Upravljanje računom
                </a>
            </div>

            <div className="button button-primary" onClick={logout}>
                <a href='#'>
                    Odjava
                </a>
            </div>
        </Fragment>

    );


    return (
        <nav className="navbar-grid-container navbar">
            <div className="left-navbar">
                <div className="button button-primary">
                    <a href="/">
                        PassDirect
                    </a>
                </div>
            </div>
            <div>
                <img className="logo" src={novilogo} alt=""/>
            </div>
            <div className="right-navbar">
            {isAuthenticated ? authLinks() : guestLinks()}
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavigationBar);