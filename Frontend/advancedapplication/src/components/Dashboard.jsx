import React from 'react';
import './Dashboard.css';
import adminlogo from '../assets/adminlogo.png';
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar1">
        <div className="admin-logo1">
          <img src={adminlogo} alt="Admin Logo" />
        </div>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/table">Users</Link></li>
          <li><Link to="/form">Add Academy</Link></li>
          <li><Link to="/academy1">Show Academies</Link></li>
        </ul>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  

  handleAdd = () => {
    const newItem = {
      id: Math.random(), 
      name: "New Item", 
    };
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));
  }

  handleEdit = (id) => {
    
    console.log("Edit item with id:", id);
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  }

  render() {
    return (
      <div className="dashboard1">
        <Sidebar />
        <div className="main-content">
          <h1>Welcome to the Admin Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
