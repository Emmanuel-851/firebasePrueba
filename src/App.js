import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Layout,Menu} from 'antd'
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Lojin'
import Datos from './Components/Datos'
import firebase from 'firebase'

class App extends Component{
 
 constructor(props){
    super(props)
    this.db=firebase.firestore()
    this.state={
      user:null,
      actualRouter:null
    }
  }


  componentDidMount= () =>{
    let path= window.location.pathname
    let path_only=path.replace('/','')
    if(path_only==='') path_only='home'
    this.setState({actualRouter:path_only})

    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
    })
  }
 
  logOut = () => {
    firebase.auth().signOut()
      .then(()=>alert("Tu sesión ha sido cerrada"))
      .catch((err)=>console.log(err))
    this.setState({user: null})
  }
  registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=>
        {
          alert("Usuario creado con éxito")
          window.location.assign("/datos")
        })
      .catch(err=>
        {
          console.log(err)
          alert("No se puedo crear usuario, contraseña de minimo 6 caracteres")
        })
  }

  loginWithEmail= (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      alert("Usuario loggeado con éxito")
      window.location.assign("/datos")
    })
    .catch(err=>
      {
        console.log(err)
        alert("No se puedo loggear usuario")
      })
  }

  render(){const{Header,Content,Footer}=Layout
  const{Item}=Menu
  return(

    //
    //

    <Layout>
      <Header className='header'>
        
      {this.state.actualRouter ?
        
        <Menu
        className='menu'
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={[this.state.actualRouter]}
        style={{lineHeight:'64px'}}
        >
          <Item key='home'>
            <NavLink to='/'>
            Inicio</NavLink></Item>
             {this.state.user ? 
         
         <Item onClick={this.logOut}>cerrar sesion</Item>
        
         :
         <Item key='login'><NavLink to='/login'>Login</NavLink></Item>
         // <Item key='datos'><NavLink to ='/datos'>Perfil</NavLink> </Item>
        }
          
        </Menu>

        
     
:null } 
      </Header>

      <Content className='content'>
        <div className='main-cotent'>
         
        <Switch>
          
           <Route exact path='/'
           render={()=> <Home user={this.state.user} />}  />
           
           <Route exact path='/login' 
           render={()=>
          <Login
          user={this.state.user} 
          register={this.registerUser}
          loginEmail={this.loginWithEmail}
          />}
           
           />

           <Route exact path='/datos' 
           render={()=> <Datos user={this.state.user} 
           db={this.db}
           />} />
         </Switch>

        </div>

      </Content>

      <Footer className='footer'>

        <p className='omg'>Derechos reservados Actosoft 2019</p>

      </Footer>
    </Layout>
    
  );
}
}

export default App;
