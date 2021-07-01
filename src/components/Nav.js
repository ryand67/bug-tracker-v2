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

            <Link to='/new-bug'>
                <button>New Bug</button>
            </Link>

            <Link to='/my-bugs'>
                <button>My Bugs</button>
            </Link>

                <button onClick={() => auth.signOut()}>Logout</button>
        </NavBar>
    )
}

const NavBar = styled.nav`
    /* position: fixed; */
    right: 0;
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
