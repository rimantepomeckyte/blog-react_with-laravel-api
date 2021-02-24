import React from 'react';

const Post = ({post, closePost}) => {
    let date = post.created_at.split(' ');
    return (
        <div className="w-75 mx-auto">
            <button onClick={closePost} className="btn btn-info text-white mb-3">Go back</button>
            <h1>{post.title}</h1>
            <p className="text-secondary mt-0 pt-0">Category: {post.category.category}</p>
            <p>{post.body}</p>
            <p className="text-secondary">Posted by <span className="text-dark">{post.user.name} </span>{date[0]} </p>
            <hr />
            {(post.comments) && <div className="comments">
                <h4>Comments:</h4>
                {post.comments.map(comment => {
                    let date = comment.created_at.split('T');
                    return (
                        <div key={comment.id}><p className="text-secondary">Commented at: {date[0]}</p>
                            <p>{comment.comment}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>}

        </div>
    );
};

export default Post;