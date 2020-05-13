import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return  <div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVDxx4vEYVtGL2jwoXfai9HrzEaDNtGgDULVxSKCvDX0R2iF0&s" alt=""/>
                <span>{props.message}</span>
                <div className={s.likesArea}>
                    <span>like </span>
                    <div className={s.likeImg}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5IaEY3s30Nd-QdoZbz0G6Uw5ENfgQ0JTy8hqer7tQst1EUcSF&usqp=CAU" alt=""/>
                    </div>
                    <span>{props.likes}</span>
                </div>
            </div>
        </div>
    </div>        


}

export default Post;