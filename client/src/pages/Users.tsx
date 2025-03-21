import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
