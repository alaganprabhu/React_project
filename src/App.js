
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Form from './Components/Contact';

import {Routes, Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <ul>
          <li>
            <Link to='/' id='link'>Home</Link>
            
            <Link to='/service' id='link'>Services</Link> 
            <Link to='/about' id='link'>About</Link>
           <Link to='/form' id='link'>Contact</Link>
            
            
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='/service' element={<Service />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<Form />} />
        
      </Routes>

      {/* <Home />   */}
      
    </div>
   
    
  );
}

export default App;
