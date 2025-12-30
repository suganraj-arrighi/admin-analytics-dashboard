import React, { useState } from 'react';
import { useUsers } from '../../context/UserContext';
import './Settings.scss';

const Settings: React.FC = () => {
  const { displayName, setDisplayName } = useUsers();  
  const [localName, setLocalName] = useState(displayName);
  const [success, setSuccess] = useState(false);
  const userEmail = localStorage.getItem('userEmail') || 'admin@test.com';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setDisplayName(localName);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="settings-wrapper">
      <div className="settings-card">
        <div className="card-header-overlap dark-gradient">
          <h2 className="header-title">Profile Settings</h2>
          <p className="header-subtitle">Update your personal information</p>
        </div>

        <form onSubmit={handleSave} className="settings-form">
          <div className="form-content">
            <div className="input-field">
              <label htmlFor="display-name">Display Name</label>
              <div className="input-container">
                <input 
                  id="display-name"
                  type="text" 
                  value={localName}
                  onChange={(e) => setLocalName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email-readonly">Email Address</label>
              <div className="input-container readonly">
                <input 
                  id="email-readonly"
                  type="email" 
                  value={userEmail} 
                  readOnly 
                />
              </div>
              <small className="field-note">Your email is managed by your organization.</small>
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">
                SAVE CHANGES
              </button>
            </div>

            {success && (
              <div className="success-banner" role="status">
                ✓ Profile updated successfully!
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Settings;