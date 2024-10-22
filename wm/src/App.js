import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Profile from './pages/profile'
import Destination from './pages/destination';
import Galery from  './pages/galery';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/pofile' element = {<Profile/>}/>
        <Route path='/destinasi' element = {<Destination/>}/>
        <Route path='/galery' element = {<Galery/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
