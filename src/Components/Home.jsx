import React from 'react'
import logo from './logo.svg';

const Home = (props) =>(
   
   <div className="App-header">
   
        <h1 >ACTOSOFT</h1>
   
        <img src={logo} className="App-logo" alt="logo" />

        { props.user ? 
            <div>
            <h2>Nombre: {props.user.displayName}</h2>
            <h2>Correo: {props.user.email}</h2>

            
            </div>
            : null
        }
        
  </div>
)

export default Home;