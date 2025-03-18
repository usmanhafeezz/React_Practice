
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import UseData from './Components/UseData';
import Practice from './Components/Practice';
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
    <UseData/>
    <Practice/>

    </>
  )
}

export default App
