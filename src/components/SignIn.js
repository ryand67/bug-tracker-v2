import React, { useState } from 'react'

import styled from 'styled-components';
import * as EmailValidator from 'email-validator';

import { auth } from '../util/firebase';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errFlag, setErrFlag] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        if(email !== '' && password !== '' && EmailValidator.validate(email)) {
            auth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log(err);
            })
        } else {
            setErrFlag(true);
            setErrMessage('Error');
        }
    }

    const handleErrorClick = () => {
        setErrFlag(false);
        setErrMessage('');
    }

    return (
        <form onSubmit={(e) => handleSignIn(e)}>
            <ErrorMessage onClick={handleErrorClick}>{errFlag ? errMessage : ''}</ErrorMessage>
            <label htmlFor="">Email:</label>
            <input placeholder="Email Address..." type="text" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password:</label>
            <input placeholder="Password..." type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={(e) => handleSignIn(e)}>Sign In</button>
        </form>
    )
}

const ErrorMessage = styled.p`
    color: red;
`;

export default SignIn
