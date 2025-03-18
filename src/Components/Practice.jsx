import React, { useState } from 'react'

const Navbar = () => {
    const [value ,setvalue] = useState("")
    const navbar = [
        { home: "Home Page" },
        { contact: "Contact Page" },
        { about: "About Page" },
        { service: "About Service" }
    ];
        function ChangeValue (){
            setvalue("col_Change")
        }
    return (
        <div>

            <header>
                <nav>
                    <h1>Logo</h1>
                    <ul>

                        {navbar.map((item, index) => (
                            <li  key={index} className= {index === 1 ? value || "black" : "red" }>
                                <a href="">{item[Object.keys(item)[0]]}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className='Btn' onClick={ChangeValue}>Change Color</button>
            </header>
        </div>

    );
};

export default Navbar;
