
import React, { useState } from 'react'
const menuItems =[
    "Typography",
         "Base" ,
        "Button",
      "Charts",
       "Edition",
       "Forms" ,
        "Google Map", 
       "Icons" ,
   "Notifications", 
    "Plugins" 
    ]
const SideBar = () => {
   
const[selectedItem, setSelectedItem] = useState(null)
    const SideBarItems =[
        { name: "Colors" },
        { name: "Typography" }
        ]
    const ComponentsItems =[
        { name: "Colors" },
        { name: "Typography"},
        { name: "Base" },
        { name: "Button"},
        { name: "Charts"},
        { name: "Edition" },
        { name: "Forms" },
        { name: "Google Map" },
        { name: "Icons" },
        { name: "Notifications" },
        { name: "Plugins" },
    ]
  return (
    <div>
      <div className="sideBar">
        <h2>CoreUi React .js</h2>


        <h2>Themes</h2>
      <ul>
        {SideBarItems.map((item, index) => (
          <li key={index}>
            {/* <a href="#">{item.name}</a> */}
            <a href="#"onClick={()=> setSelectedItem (item.name)}>{item.name}</a>
            {/* <a href="#" onClick={() => setSelectedItem(item.name)}>{item.name}</a> */}
          </li>
        ))}
      </ul>

      <h2>Components</h2>
      <ul>
        {ComponentsItems.map((item, index) => (
          <li key={index}>
            <a href="#" onClick={()=>setSelectedItem(item.name)}>{item.name}

            </a>
            
          </li>
        ))}
      </ul>
      </div>



      {/* displaying the message */}
      <div className="content">
        {selectedItem && (
          <div className="selected-item">
            <h2>Selected Item:</h2>
            <p>{selectedItem}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SideBar


