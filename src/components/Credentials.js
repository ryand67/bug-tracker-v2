import React, { useState } from 'react'

import SignUp from './SignUp';
import SignIn from './SignIn';

function Credentials() {

    const [signInFlag, setSignInFlag] = useState(false);

    return (
        <div>
            <button onClick={() => setSignInFlag(!signInFlag)}>{signInFlag ? 'Have an account? Sign In' : "Don't have an account? Sign Up"}</button>
        </div>
    )
}

export default Credentials
