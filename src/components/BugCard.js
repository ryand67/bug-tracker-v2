import React from 'react'
import { Link } from 'react-router-dom';

function BugCard({props}) {
    
    const { id, category, title, bugDesc, assignee, dueDate, date, status } = props;

    return (
        <tr>
            <td><Link to={`/bug/:id=${id}`}>#{id}</Link></td>
            <td>{title}</td>
            <td>{bugDesc}</td>
            <td>{category}</td>
            <td>{date}</td>
            <td>{dueDate}</td>
            <td>{assignee}</td>
            <td>{status}</td>
        </tr>
    )
}

export default BugCard
