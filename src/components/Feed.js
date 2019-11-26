import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

function Feed() {

    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get("https://practice-be.herokuapp.com/")
        .then(res => {
            console.log(res)
            setUsers(res.data.posts)
        })
        .catch(err => {
            console.log(err.message);
        })
    },[])

    if (!users) {
        return <div>Loading ...</div>
    }

    return (
        <div className="Feed">
            {users.map(user =>
                <Card
                className='card'
                header={user.name}
                description={user.comment}
                />
            )}
        </div>
    );
}

export default Feed;