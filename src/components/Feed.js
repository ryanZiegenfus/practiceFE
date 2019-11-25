import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Feed() {

    const [users, setUsers] = useState([
        {
            name: 'Ryan',
            comment: 'Hello',
        },
        {
            name: 'Jason',
            comment: 'World',
        },
        {
            name: 'Conary',
            comment: 'Uhhhhhh',
        },
    ]);

    // useEffect(() => {
    //     axios.get("url")
    //     .then(res => {
    //         console.log(res)
    //         setUsers(res)
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //     })
    // },[])

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