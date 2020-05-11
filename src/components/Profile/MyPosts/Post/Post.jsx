import React from "react";
import s from './Post.module.css';

const Post = () => {
    return  <div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVDxx4vEYVtGL2jwoXfai9HrzEaDNtGgDULVxSKCvDX0R2iF0&s" alt=""/>
                post 1
            </div>
        </div>
    </div>        


}

export default Post;