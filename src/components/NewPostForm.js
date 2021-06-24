import React, { useState } from 'react'

import { db } from '../util/firebase';

function NewPostForm() {

    const [dueDate, setDueDate] = useState('');
    const [bugDesc, setBugDesc] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handlePostSubmit(e)}>
            <label htmlFor="">Due Date:</label>
            <input type="date" name="" id="" onChange={(e) => setDueDate(e.target.value)} />
            <label htmlFor="">Bug Description:</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setBugDesc(e.target.value)}></textarea>
            <label htmlFor="">Category</label>
            <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                <option value="Development">Development</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Tech Support">Tech Support</option>
            </select>
            <label htmlFor="">Status:</label>
            <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Unassigned">Unassigned</option>
            </select>
            <button type="submit" onClick={(e) => handlePostSubmit(e)}>Submit Bug</button>
        </form>
    )
}

export default NewPostForm
