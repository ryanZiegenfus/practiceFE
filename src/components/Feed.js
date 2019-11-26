import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                <div>
                    <div>{user.name}</div>
                    <div>{user.comment}</div>
                </div>
            )}
        </div>
    );
}

export default Feed;