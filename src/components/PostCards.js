import React from 'react';

const PostCards = ({posts, openSelected, loading}) => {
    if(loading){
        return <h2>Loading, please wait...</h2>
    }
    return (
        <div className="py-2 postDiv w-50 mx-auto">
            {posts.map(post => {
                let date = post.created_at.split(' ');
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p className="text-secondary mt-0 pt-0">Category: {post.category.category}</p>
                        <p id='postBody'>{post.body}</p>
                        <p className="text-secondary mb-0 pb-0">Posted by <span
                            className="text-dark">{post.user.name} </span>{date[0]} </p>
                        <p className="mt-0 pt-0">Comments ({post.comments.length})</p>
                        <button onClick={() => openSelected(post.id)}
                                className="btn bg-success text-white rounded ">Read more
                        </button>
                        <hr/>
                    </div>)
            })}

        </div>
    );
};

export default PostCards;