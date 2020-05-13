import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return  <div className={s.wall}>
        <div className={s.nameTitle}>My posts</div>
        <div className={s.newPost}>
            <div className={s.newpost}>New post..</div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div>
            <Post message='Hi, how are you?' likes='7' />
            <Post message="It's my first post" likes='12' />
        </div>
    </div>


}

export default MyPosts;