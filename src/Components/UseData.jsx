import React, { useState } from 'react'

const UseData = () => {
  const [change,setchange] = useState("change");


  function ChangeColor (){
    setchange("newColor")
  }
    return (
    <div>
        <h1 className={change}>Coding First</h1>
        <button onClick={ChangeColor}>Change color</button>
    </div>
  )
}

export default UseData
