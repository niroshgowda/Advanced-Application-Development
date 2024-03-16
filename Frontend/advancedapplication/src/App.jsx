import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
{/*import Login from './components/Login'
import Signup from './components/Signup'*/}
import Home from './components/Home'
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <div>
      {/*<BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
  </BrowserRouter>*/}
  <Home/>
      </div>
    </>
  )
}

export default App
