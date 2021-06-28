import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { db } from '../util/firebase';

import BugCard from '../components/BugCard';

function Home() {

    const [bugs, setBugs] = useState([]);

    const fetchBugs = () => {
        let holder = [];
        db.collection('bugs').get().then(res => {
            res.docs.forEach(item => {
                holder.push(item.data());
            })
        })
        .then(() => {
            console.log(holder);
            setBugs(holder);
        })
    }

    useEffect(() => {
        fetchBugs();
    }, [])

    return (
        <div>
            asdfasdf
        </div>
    )
}

export default Home
