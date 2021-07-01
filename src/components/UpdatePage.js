import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { db } from '../util/firebase';

function UpdatePage() {

    const { id } = useParams();
    const [docId, setDocId] = useState('');

    const [postData, setPostData] = useState({});
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [bugDesc, setBugDesc] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [assignee, setAssignee] = useState('');

    const [assignees, setAssignees] = useState([]);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        db.collection('bugs').doc(docId).update({
            title,
            dueDate,
            bugDesc,
            category,
            status,
            assignee
        })
        .then(() => {
            window.location.replace('/');
        })
        .catch((err) => {
            throw err;
        })
    }

    useEffect(() => {
        db.collection('bugs').where('id', '==', parseInt(id.substr(3))).get()
        .then((res) => {
            setDocId(res.docs[0].id);
            setPostData(res.docs[0].data());
            setTitle(res.docs[0].data().title);
            setDueDate(res.docs[0].data().dueDate);
            setBugDesc(res.docs[0].data().bugDesc);
            setCategory(res.docs[0].data().category);
            setStatus(res.docs[0].data().status);
            setAssignee(res.docs[0].data().assignee);
        })
        .then(() => {
            console.log(postData);
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

    return (
        <UpdatePageDiv>
            <form onSubmit={(e) => handlePostSubmit(e)}>
                <label htmlFor="">{`#${id.substr(3)} ${title}`}</label>
                <label>Bug Title:</label>
                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">Due Date:</label>
                <input value={dueDate} type="date" name="" id="" onChange={(e) => setDueDate(e.target.value)} />
                <label htmlFor="">Bug Description:</label>
                <textarea value={bugDesc} name="" id="" cols="30" rows="10" onChange={(e) => setBugDesc(e.target.value)}></textarea>
                <label htmlFor="">Category</label>
                <select value={category} name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Development">Development</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Tech Support">Tech Support</option>
                </select>
                <label htmlFor="">Status:</label>
                <select value={status} name="" id="" onChange={(e) => setStatus(e.target.value)}>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    {/* <option value="Unassigned">Unassigned</option> */}
                    <option value="Assigned">Assigned</option>
                </select>
                <label value={assignee} htmlFor="">Assignee:</label>
                <select value={assignee} name="" id="" onChange={e => setAssignee(e.target.value)}>
                    {assignees.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
                <button type="submit" onClick={(e) => handlePostSubmit(e)}>Update Bug</button>
                <DeleteButton><i class="fas fa-trash"></i>Delete</DeleteButton>
            </form>
        </UpdatePageDiv>
    )
}

const UpdatePageDiv = styled.div`
    margin-top: 5rem;
`;

const DeleteButton = styled.button`
    margin: 1rem 0;

    i {
        margin-right: 1rem;
    }
`;

export default UpdatePage
