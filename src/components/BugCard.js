import React from 'react'

function BugCard({props}) {
    
    const { id, category, title, bugDesc, assignee, dueDate, date, status } = props;

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{bugDesc}</td>
            <td>{category}</td>
            <td>{dueDate}</td>
            <td>{date}</td>
            <td>{assignee}</td>
            <td>{status}</td>
        </tr>
    )
}

export default BugCard
