import React from "react"
import App from "react";

const PostContainer = props => {
    console.log(props.post)
    return (
        <div>
            {props.post.username}
            <img src={props.post.thumbnailUrl} />
            <img src= {props.post.imageUrl} />
            {props.post.likes}
            {props.post.timestamp}

            <div>
                {props.post.map(post => {}
            </div>
        </div>
    )
}

export default PostContainer;