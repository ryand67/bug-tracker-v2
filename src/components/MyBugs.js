import React from 'react'
import styled from 'styled-components';



function MyBugs() {
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
