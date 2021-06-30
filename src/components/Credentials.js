import React, { useState } from 'react'
import styled from 'styled-components';

import SignUp from './SignUp';
import SignIn from './SignIn';

function Credentials() {

    const [signInFlag, setSignInFlag] = useState(false);

    return (
        <CredentialsPage>
            {!signInFlag ? <SignIn /> : <SignUp />}
            <button onClick={() => setSignInFlag(!signInFlag)}>{signInFlag ? 'Have an account? Sign In' : "Don't have an account? Sign Up"}</button>
        </CredentialsPage>
    )
}

const CredentialsPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export default Credentials
