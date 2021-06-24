import React from 'react'

import styled from 'styled-components';

import { auth } from '../util/firebase';

function Nav() {
    return (
        <NavBar>
            <button onClick={() => auth.signOut()}>Logout</button>
        </NavBar>
    )
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    padding-top: 1rem;
`;

export default Nav
