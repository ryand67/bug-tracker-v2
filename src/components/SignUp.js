import React, { useState } from 'react'

import styled from 'styled-components';
import * as EmailValidator from 'email-validator';

import { auth, db } from '../util/firebase';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [errFlag, setErrFlag] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if(password === passConfirm && name && email && password && EmailValidator.validate(email)) {
            db.collection('users').add({name, email}).then((res) => {
                auth.createUserWithEmailAndPassword(email, password).then(() => {
                    auth.signInWithEmailAndPassword(email, password);
                })
            })
            .catch((err) => {
                console.log(err);
                errFlag(true);
                setErrMessage('Error');
            })
        } else {
            setErrFlag(true);
            setErrMessage('Fields Incomplete')
        }
    }

    const resetError = () => {
        setErrFlag(false);
        setErrMessage('');
    }

    return (
        <form onSubmit={(e) => handleSignUp(e)}>
            <ErrorMessage onClick={resetError}>{errFlag ? errMessage : null}</ErrorMessage>
            <label htmlFor="">Name:</label>
            <input placeholder="Name..." type="text" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Email:</label>
            <input placeholder="Email Address..." type="text" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password:</label>
            <input placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Confirm Password:</label>
            <input placeholder="Confirm Password..." type="password" onChange={(e) => setPassConfirm(e.target.value)} />
            <button type="submit" onClick={(e) => handleSignUp(e)}>Sign Up</button>
        </form>
    )
}

const ErrorMessage = styled.p`
    color: red;
`;

export default SignUp
