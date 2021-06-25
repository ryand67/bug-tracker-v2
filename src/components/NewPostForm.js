import React, { useState, useEffect } from 'react'

import { db, auth } from '../util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setCacheNameDetails } from 'workbox-core';
import { current } from 'immer';

function NewPostForm() {

    const [user] = useAuthState(auth);

    const currentDate = new Date();

    //Form states
    const [dueDate, setDueDate] = useState('');
    const [bugDesc, setBugDesc] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');

    //Firestore retrieved states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        db.collection('users').where('email', '==', user.email).get().then((res) => {
            setEmail(user.email);
            setName(res.docs[0].data().name)
        })
    }, [])

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if(dueDate && bugDesc && category && status) {
            db.collection('bugs').add({
                dueDate,
                bugDesc,
                status,
                category,
                date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
                name,
                email
            }).then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
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
