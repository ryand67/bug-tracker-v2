import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { db } from '../util/firebase';

import BugCard from '../components/BugCard';

function Home() {

    const [bugs, setBugs] = useState([]);
    const [sortQuery, setSortQuery] = useState('id');

    const fetchBugs = () => {
        let holder = [];
        db.collection('bugs').get().then(res => {
            res.docs.forEach(item => {
                holder.push(item.data());
            })
        })
        .then(() => {
            setBugs(holder);
        })
    }

    const sortingQuery = query => {
        switch(query) {
            case 'id':
                setBugs(bugs.sort(function(a, b){
                    if(a.id < b.id) { return -1; }
                    if(a.id > b.id) { return 1; }
                    return 0;
                }))
                break;

            case 'title':
                console.log('asdf');
                let holder = bugs;
                setBugs(holder.sort(function(a, b){
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                }))
                break;

            default: 
                console.log('default');
        }
    }

    useEffect(() => {
        fetchBugs();
    }, [])

    return (
        <MainTable>
            <thead>
                <tr>
                    <th onClick={() => sortingQuery('id')}>ID</th>
                    <th onClick={() => sortingQuery('title')}>Title</th>
                    <th onClick={() => sortingQuery('bugDesc')}>Description</th>
                    <th onClick={() => sortingQuery('category')}>Category</th>
                    <th onClick={() => sortingQuery('dueDate')}>Due Date</th>
                    <th onClick={() => sortingQuery('date')}>Date Posted</th>
                    <th onClick={() => sortingQuery('assignee')}>Assignee</th>
                    <th onClick={() => sortingQuery('status')}>Status</th>
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
    margin-top: 1rem;
    table-layout: fixed;

    th, td {
        padding: 1rem 0;
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

export default Home
