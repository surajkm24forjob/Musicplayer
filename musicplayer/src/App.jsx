 import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { Player } from './pages/Player'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {


  return (
    <>
    <Router>
      <Routes>
    <Route exact path='/' Component={Player}/>
    <Route exact path='/Login' Component={Login}/>
    <Route exact path='/Signup' Component={Signup}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
