import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Academy1 from './components/Academy1'
import Courses1 from './components/Courses1'
import Classes1 from './components/Classes1'
import Table from './components/Table'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Form from './components/Form';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/academy1' element={<Academy1/>}/>
    <Route path='/courses1' element={<Courses1/>}/>
    <Route path='/classes1' element={<Classes1/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/table' element={<Table/>}/>
    <Route path='/form' element={<Form/>}/>

    </Routes>
    </>
  );
}

export default App;
