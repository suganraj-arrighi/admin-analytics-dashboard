import React from 'react';
import { DASHBOARD_STATS, LANGUAGE_STATS } from '../../data/mockData';
import './Dashboard.scss';
import { useUsers } from "../../context/UserContext";

const Dashboard: React.FC = () => {
  const { displayName } = useUsers();
  const maxVal = Math.max(...LANGUAGE_STATS.flatMap(s => [s.javascript, s.python, s.go]));

  return (
    <div className="dashboard-container">
      <header className="dashboard-welcome">
        <h2>Hi {displayName}</h2>
        <p>Welcome back to your analytics overview.</p>
      </header>
      <section className="kpi-row">
        <StatCard 
          title="Total Users" 
          value={DASHBOARD_STATS.totalUsers.toLocaleString()} 
          icon="👥" 
        />
        <StatCard 
          title="Active Learners" 
          value={DASHBOARD_STATS.activeLearners.toLocaleString()} 
          icon="🔥" 
        />
        <StatCard 
          title="Learning Hours" 
          value={DASHBOARD_STATS.totalHours.toLocaleString()} 
          icon="⏱️" 
        />
      </section>

      <section className="charts-row">
        <div className="material-chart-card">
          <div className="chart-header-dark">
            <div className="bar-viz-container">
              {LANGUAGE_STATS.map((stat) => (
                <div key={stat.month} className="month-column">
                  <div className="bar-set">
                    <div 
                      className="bar-item js" 
                      style={{ height: `${(stat.javascript / maxVal) * 100}%` }}
                      title={`Javascript: ${stat.javascript}`}
                    ></div>
                    <div 
                      className="bar-item py" 
                      style={{ height: `${(stat.python / maxVal) * 100}%` }}
                      title={`Python: ${stat.python}`}
                    ></div>
                    <div 
                      className="bar-item go" 
                      style={{ height: `${(stat.go / maxVal) * 100}%` }}
                      title={`Go: ${stat.go}`}
                    ></div>
                  </div>
                  <span className="month-label">{stat.month}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="chart-body">
            <h5>Language Growth</h5>
            <p className="description">Monthly distribution of primary languages.</p>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot js"></span> JS</span>
              <span className="legend-item"><span className="dot py"></span> PY</span>
              <span className="legend-item"><span className="dot go"></span> GO</span>
            </div>
            <hr className="divider" />
            <div className="footer-note">🕒 data updated from local mock source</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ title, value, icon }: { title: string, value: string, icon: string }) => (
  <div className="material-stat-card">
    <div className="icon-overlap-dark">{icon}</div>
    <div className="stat-content">
      <p className="stat-title">{title}</p>
      <h4 className="stat-value">{value}</h4>
    </div>
  </div>
);

export default Dashboard;