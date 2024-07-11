import React from 'react';
import Board from '../../components/Board/Board';
import './Dashboard.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <h1 className="dashboard__title">Dashboard</h1>
      <Board />
      <Footer />
    </div>
  );
};

export default Dashboard;
