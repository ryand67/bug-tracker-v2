import React, { useState } from 'react'

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');

    return (
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Confirm Password:</label>
            <input type="password" onChange={(e) => setPassConfirm(e.target.value)} />
        </div>
    )
}

export default SignUp
