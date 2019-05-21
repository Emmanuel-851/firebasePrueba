import React, {Component} from 'react'
import {Input,Row,Col,Icon,Button} from 'antd'
import './login.css'

class Login extends Component{

  constructor(props){
    super(props)
    this.state={
      correo_login:null,
      contraseña_login:null,
      correo:null,
      contraseña:null,
      confirmar_contraseña:null
    }
  }
  onChangeEmail=(e)=>{
    this.setState({correo: e.target.value})
  }
  onChangeEmailLogin=(e)=>{
    this.setState({correo_login: e.target.value})
  }
  onChangePassword=(e)=>{
    this.setState({contraseña: e.target.value})
  }
  onChangePasswordLogin=(e)=>{
    this.setState({contraseña_login: e.target.value})
  }
  onChangeConfirmePassword=(e)=>{
    this.setState({confirmar_contraseña: e.target.value})
  }

  confirmePasword=()=>{
    if(this.state.contraseña === this.state.confirmar_contraseña)
    {
        this.props.register(this.state.correo, this.state.contraseña)
    }
    else
    {
        alert("Tus contraseñas no coinciden")
    }
  }

  render(){
    const suffix=this.state.correo ? 
    <Icon type='close-circle' onClick={this.emitEmpyt} />
  :null;

  const{Password}=Input
  return(
    <div>
      <Row className='row'>

        <Col className='col' span={24}>
          <p>Inicia Sesion </p>
        </Col>
      </Row>
      <Row className='row'>
        <Col className='col form' span={12}>
          <p>Login</p>
          <Input
          placeholder="Correo electrónico"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={this.state.correo_login}
          onChange={e=>this.onChangeEmailLogin(e)}

          />
           <Password
           placeholder="Contraseña"
           onChange={e=>this.onChangePasswordLogin(e)}
           value={this.state.contraseña_login}
           >

           </Password>

           <Button 
           type="primary" 
           shape="round" 
           icon="user" 
           size={'small'}
           onClick={()=>this.props.loginEmail(this.state.correo_login, this.state.contraseña_login)}
           >Iniciar sesión</Button>

          
        </Col>

        <Col className="col form" span={12}>
                        <p>Crear cuenta</p>
                        <Input
                            placeholder="Correo electrónico"
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={this.state.correo}
                            onChange={e=>this.onChangeEmail(e)}
                        />
                        <Password
                            placeholder="Contraseña"
                            onChange={e=>this.onChangePassword(e)}
                            value={this.state.contraseña}
                        >
                        </Password>
                        <Password
                            placeholder="Confirmar Contraseña"
                            onChange={e=>this.onChangeConfirmePassword(e)}
                            value={this.state.confirmar_contraseña}
                        >
                        </Password>
                        <Button 
                            type="primary" 
                            shape="round" 
                            icon="user-add" 
                            size={'small'}
                            onClick={this.confirmePasword}
                            >Regístrate</Button>
                    </Col>


      </Row>
    </div>

  )
  
  
    
  }

 }



export default Login;