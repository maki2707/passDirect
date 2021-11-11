import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { reset_password} from "../actions/auth";
import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";


import showPwdImg from '../images/show-pass.svg';
import hidePwdImg from '../images/hide-pass.svg';




const ResetPassword = ({reset_password}) => {

    const [requestSent, setRequestSent] = useState(false);

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const [formData, setformData] =  useState({ 
        email: '', 
        
    })

    const {email} = formData;

    const onChange = e => setformData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);        
    };

    if (requestSent) {
        return <Redirect to='/' />
    }

    return(
        <div className='signIN'>
            <div className = 'login-naslov'>
                <h1>OBNOVA LOZINKE</h1>
                <p>Unesite potrebne podatke:</p>
            </div>
            <div className = 'form-box'>
                <form onSubmit={e => onSubmit(e)}>

                    <div className='email-form'>
                        <span className = 'icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    
                
                        <input
                            className = 'form-control'
                            type = 'email'
                            id = 'email-input'
                            placeholder = 'Upišite email adresu*'
                            name = 'email'
                            value = {email}
                            onChange = {e => onChange(e)}
                            required
                        />
                    </div>
                
                    <button className='button button-primary btn-login' type='submit'>Zatraži novu lozinku</button>
                </form>
            </div>

            

            <br />

            
        </div>
    )
}





export default connect(null, { reset_password}) (ResetPassword);

