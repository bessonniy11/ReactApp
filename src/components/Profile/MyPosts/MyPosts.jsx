import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likes: 9},
        {id: 2, message: 'It\'s my first post', likes: 12}
    ]

    return <div className={s.wall}>
        <div className={s.nameTitle}><h4>My posts</h4></div>
        <div className={s.newPost}>
            <div className={s.newpost}><h4>New post..</h4></div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div>
            <Post message={postData[0].message} likes={postData[0].likes}/>
            <Post message={postData[1].message} likes={postData[1].likes}/>
        </div>
    </div>


}

export default MyPosts;