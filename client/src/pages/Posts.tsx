import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cookies] = useCookies(['token']); // Leer la cookie del token

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts', {
          headers: {
            Authorization: `Bearer ${cookies.token}`, // Enviar el token
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      }
    };
    if (cookies.token) {
        fetchPosts();
    }
  }, [cookies.token]);

  return (
    <div>
      <h1>Posts</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
