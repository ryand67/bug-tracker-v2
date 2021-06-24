import React from 'react'

import styled from 'styled-components';

import { auth } from '../util/firebase';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <NavBar>
            <Link to='/'>
                <button>Home</button>
            </Link>

            <Link to='/create-bug'>
                <button>New Bug</button>
            </Link>

                <button onClick={() => auth.signOut()}>Logout</button>
        </NavBar>
    )
}

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    * {
        margin: 0 1rem;
    }
`;

export default Nav
