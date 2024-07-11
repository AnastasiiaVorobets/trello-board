import React from 'react';
import Board from '../../components/Board/Board';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <Board />
    </div>
  );
};

export default Dashboard;
