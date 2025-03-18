
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';

function App() {
 

  return (
    <>
    <div className='app-container'>
    <Navbar/>

    </div>
    <div className="page-content">
          <h2>Welcome to Dashboard</h2>
          <p>This is where your main content will be displayed.</p>
        </div>
    
    <div>
      <SideBar/>
    </div>
    </>
  )
}

export default App
