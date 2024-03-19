import React from 'react';
import './Dashboard.css';
import adminlogo from '../assets/adminlogo.png';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar1">
        <div className="admin-logo1">
          <img src={adminlogo} alt="Admin Logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Academy</a></li>
          <li><a href="#">Classes</a></li>
          <li><a href="#">Course</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      numberOfUsers: 10, 
      numberOfAcademies: 6,
    };
  }

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
          <div className="stats-cards">
            <div className="card">
              <h2>Number of Users</h2>
              <p>{this.state.numberOfUsers}</p>
            </div>
            <div className="card">
              <h2>Number of Academies</h2>
              <p>{this.state.numberOfAcademies}</p>
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={this.handleAdd}>Add</button>
            
          </div>
          <div className="item-list">
            {this.state.items.map(item => (
              <div key={item.id} className="item">
                <span>{item.name}</span>
                <button onClick={() => this.handleEdit(item.id)}>Edit</button>
                <button onClick={() => this.handleDelete(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
