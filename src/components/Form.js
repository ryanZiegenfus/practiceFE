import React, {useState} from 'react';
// import axios from 'axios';

function Form() {

    const [post, setPost] = useState({
        name: '',
        comment: '',
    })

    function changeHandler(event) {
        console.log(post)
        setPost({...post, [event.target.name]:event.target.value})
    }

    // function submitHandler() {
    //     axios.post("url", post)
    // }

    return (
        <div className="Form">
            <form >
                <input type="text" name="name" placeholder="Name" value={post.name} onChange={changeHandler}/>
                <input type="text" name="comment" placeholder="Comment" value={post.comment} onChange={changeHandler}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;