import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { useParams, Link } from 'react-router-dom';

function BugPage() {

    const { id } = useParams();
    const [idState, setIdState] = useState(id.substr(4));

    return (
        <BugPageContainer>
            <Link to={`/update/id:${idState}`}>
                <button>Update</button>
            </Link>
        </BugPageContainer>
    )
}

const BugPageContainer = styled.div`
    margin-top: 3rem;
`;

export default BugPage
