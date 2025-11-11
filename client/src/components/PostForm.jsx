import React, { useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PostForm({ initial = {}, edit=false }) {
  const [title, setTitle] = useState(initial.title || '');
  const [content, setContent] = useState(initial.content || '');
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', title);
    form.append('content', content);
    if (file) form.append('featuredImage', file);

    try {
      const res = edit
        ? await api.put(`/posts/${initial._id}`, form, { headers: { 'Content-Type': 'multipart/form-data' }})
        : await api.post('/posts', form, { headers: { 'Content-Type': 'multipart/form-data' }});
      navigate(`/posts/${res.data._id}`);
    } catch (err) { console.error(err); }
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">{edit ? 'Update' : 'Create'}</button>
    </form>
  );
}
