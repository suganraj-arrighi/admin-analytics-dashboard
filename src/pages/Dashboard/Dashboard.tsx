import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/Card/Card';
import { DASHBOARD_STATS, LANGUAGE_STATS } from '../../data/mockData';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <h1>Analytics Overview</h1>
        <button onClick={logout} className="logout-btn" aria-label="Log out of application">
          Logout
        </button>
      </header>

      <section className="stats-grid" aria-label="Key Performance Indicators">
        <Card title="Total Users" value={DASHBOARD_STATS.totalUsers.toLocaleString()} />
        <Card title="Active Learners" value={DASHBOARD_STATS.activeLearners.toLocaleString()} />
        <Card title="Learning Hours" value={`${DASHBOARD_STATS.totalHours.toLocaleString()}h`} />
      </section>

      <section className="chart-container" aria-labelledby="chart-heading">
        <h2 id="chart-heading">Monthly Language Growth</h2>
        <div className="bar-chart" role="img" aria-label="Bar chart showing JavaScript vs Python growth">
          {LANGUAGE_STATS.map((stat) => (
            <div key={stat.month} className="chart-column">
              <div className="bar-group">
                <div 
                  className="bar js" 
                  style={{ height: `${stat.javascript / 5}px` }} 
                  title={`JS: ${stat.javascript}`}
                ></div>
                <div 
                  className="bar py" 
                  style={{ height: `${stat.python / 5}px` }} 
                  title={`Python: ${stat.python}`}
                ></div>
              </div>
              <span className="month-label">{stat.month}</span>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <span className="legend-item"><span className="dot js"></span> JavaScript</span>
          <span className="legend-item"><span className="dot py"></span> Python</span>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;