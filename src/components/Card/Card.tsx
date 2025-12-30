import React from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, description }) => {
  return (
    <article className="stat-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {icon && <span className="card-icon">{icon}</span>}
      </div>
      <div className="card-body">
        <p className="card-value">{value}</p>
        {description && <p className="card-desc">{description}</p>}
      </div>
    </article>
  );
};

export default Card;