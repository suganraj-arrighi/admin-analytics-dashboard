import React, { useState } from 'react';
import { useUsers } from '../../context/UserContext';
import './Users.scss';

const Users: React.FC = () => {
  const { users, deleteUser } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="users-page">
      <header className="page-header">
        <h1>User Management</h1>
        <div className="search-container">
          <label htmlFor="user-search" className="sr-only">Search users by name</label>
          <input
            id="user-search"
            type="search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <section className="table-responsive">
        <table className="users-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><span className="badge-role">{user.role}</span></td>
                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      onClick={() => deleteUser(user.id)}
                      className="delete-btn"
                      aria-label={`Delete user ${user.name}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="no-results">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Users;