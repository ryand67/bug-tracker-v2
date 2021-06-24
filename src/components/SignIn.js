import React, { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errFlag, setErrFlag] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    return (
        <form>
            <label htmlFor="">Email:</label>
            <input placeholder="Email Address..." type="text" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password:</label>
            <input placeholder="Password..." type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignIn
