import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likes: 9,},
        {id: 2, message: 'It\'s my first post', likes: 12},
        {id: 2, message: 'Its really your first project?', likes: 7},
        {id: 2, message: 'Yes, of course', likes: 25}
    ]
    let postsElements = posts.map(p => <Post message={p.message} likes={p.likes}/>);

    return <div className={s.wall}>
        <div className={s.nameTitle}><h4>My posts</h4></div>
        <div className={s.newPost}>
            <div className={s.newpost}><h4>New post..</h4></div>
            <div>
                <textarea>

                </textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div>
            {postsElements}
        </div>
    </div>


}

export default MyPosts;