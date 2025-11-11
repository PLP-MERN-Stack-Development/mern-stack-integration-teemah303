import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [postsData, setPostsData] = useState({ posts: [] });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => { fetch(); }, [page, search]);

  const fetch = async () => {
    const res = await api.get('/posts', { params: { page, search } });
    setPostsData(res.data);
  };

  return (
    <div>
      <h2>Posts</h2>
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      {postsData.posts?.map(p => (
        <article key={p._id}>
          <h3><Link to={`/posts/${p._id}`}>{p.title}</Link></h3>
          <p>{p.excerpt}</p>
        </article>
      ))}
      <div>
        <button onClick={() => setPage(p => Math.max(1, p-1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p+1)}>Next</button>
      </div>
    </div>
  );
}
