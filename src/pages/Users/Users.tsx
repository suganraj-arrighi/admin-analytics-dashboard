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
    <div className="users-page-container">
      <div className="users-card-material">
        <div className="table-header-dark">
          <div className="header-flex">
            <h3>Authors Table</h3>
            <div className="search-wrapper">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="material-data-table">
            <thead>
              <tr>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>ID</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="author-cell">
                      <div className="avatar-square">{user.name.charAt(0)}</div>
                      <div className="info">
                        <span className="name-primary">{user.name}</span>
                        <span className="sub-text">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="function-cell">
                      <span className="role-primary">{user.role}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-pill ${user.status.toLowerCase()}`}>
                      {user.status === 'Active' ? 'ONLINE' : 'OFFLINE'}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="delete-action" 
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;