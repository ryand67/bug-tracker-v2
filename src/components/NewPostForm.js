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
    const [category, setCategory] = useState('Development');
    const [status, setStatus] = useState('In Progress');
    const [assignee, setAssignee] = useState('Not Assigned');

    //Firestore retrieved states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //Array of possible employees to assign to
    const [assignees, setAssignees] = useState([])

    useEffect(() => {
        db.collection('users').where('email', '==', user.email).get().then((res) => {
            setEmail(user.email);
            setName(res.docs[0].data().name)
        })
        db.collection('users').get().then(res => {
            const holderArray = ['Not Assigned'];
            res.forEach(doc => {
                holderArray.push(doc.data().name);
            })
            setAssignees(holderArray);
        })
        .catch(err => {
            console.log(err);
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
                authorName: name,
                authorEmail: email,
                assignee
            }).then(res => {
                console.log(res);
                window.location.replace('/');
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log('asdf');
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
                <option value="Assigned">Assigned</option>
            </select>
            <label htmlFor="">Assignee:</label>
            <select name="" id="" onChange={e => setAssignee(e.target.value)}>
                {assignees.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
            <button type="submit" onClick={(e) => handlePostSubmit(e)}>Submit Bug</button>
        </form>
    )
}

export default NewPostForm
