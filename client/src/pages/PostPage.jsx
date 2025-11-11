import React, { useEffect, useState, useContext } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function PostPage(){
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => { api.get(`/posts/${id}`).then(r => setPost(r.data)); }, [id]);

  const addComment = async (e) => {
    e.preventDefault();
    if (!user) return alert('Login to comment');
    const res = await api.post('/comments', { post: id, content: comment });
    setComment('');
    // optimistic: append comment on client
    setPost(p => ({ ...p, comments: [...(p.comments||[]), res.data] }));
  };

  if(!post) return <div>Loading...</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author?.username}</p>
      <img src={post.featuredImage} alt="" style={{maxWidth:'400px'}} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <section>
        <h3>Comments</h3>
        {(post.comments || []).map(c => <div key={c._id}><b>{c.author?.username}</b>: {c.content}</div>)}
        {user && <form onSubmit={addComment}><input value={comment} onChange={e => setComment(e.target.value)} /><button>Comment</button></form>}
      </section>
    </div>
  );
}
