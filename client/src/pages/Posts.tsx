import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer development-token`, // Incluye el token con el prefijo "Bearer"
            },
          });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

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
