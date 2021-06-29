import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { db, auth } from '../util/firebase';

import BugCard from '../components/BugCard';

function MyBugs() {

    const [bugs, setBugs] = useState([]);
    const [name, setName] = useState('');
    const user = auth.currentUser;

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                db.collection('users').where('email', '==', user?.email).get().then(res => {
                    setName(res.docs[0].data().name)
                }).then(() => {
                    let bugHolder = [];
                    db.collection('bugs').where('assignee', '==', name).get().then(res => {
                        res.docs.forEach(bug => {
                            bugHolder.push(bug.data());
                        })
                    })
                    .then(() => {
                        setBugs(bugHolder);
                    })
                })
    
            } else {
              // User is signed out
              // ...
            }
          });
    }, [])

    return (
        <MainTable>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Date Posted</th>
                    <th>Due Date</th>
                    <th>Assignee</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {bugs.map(bug => {
                    return <BugCard key={bug.title} props={bug}/>
                })}
            </tbody>
        </MainTable>
    )
}

const MainTable = styled.table`
    width: 90%;
    margin: 0 auto;
    margin-top: 3em;
    table-layout: fixed;

    th, td {
        padding: 1rem 0;
        padding-left: .5rem;
    }

    th {
        text-align: left;
    }

    td {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;

export default MyBugs
