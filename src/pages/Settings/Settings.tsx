import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Settings.scss';

const Settings: React.FC = () => {
  const userEmail = localStorage.getItem('userEmail') || 'admin@test.com';
  const [displayName, setDisplayName] = useState('Admin User');
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="settings-page">
      <h1>Profile Settings</h1>
      
      <form onSubmit={handleSave} className="settings-form">
        <div className="form-group">
          <label htmlFor="display-name">Display Name</label>
          <input 
            id="display-name"
            type="text" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-readonly">Email (ReadOnly)</label>
          <input 
            id="email-readonly"
            type="email" 
            value={userEmail} 
            readOnly 
            className="readonly-input"
          />
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
        
        {success && (
          <div className="success-toast" role="status">
            Settings updated successfully!
          </div>
        )}
      </form>
    </main>
  );
};

export default Settings;