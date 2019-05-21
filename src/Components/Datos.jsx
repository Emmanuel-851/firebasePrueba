import React,{Component} from 'react'
import {Input,Button, Row,Col,Icon,DatePicker} from 'antd'

class Datos extends Component{
  constructor(props){
    super(props)
    this.state={
      first_name:null,
      last_name:null,
      rol_user:null
    }
  }
  changeFirstName=(e)=>{
    this.setState({first_name:e.target.value})
}
changeLastName=(e)=>{
    this.setState({last_name:e.target.value})
}
changerol=(e)=>{
    this.setState({rol_user:e.target.value})
}
updateUserInfo=async()=>{
  await this.props.db.collection('usuarios').doc(this.props.user.uid).set(this.state)
  .then((docRef)=>alert('Se actualizo la informacion del usuario'))
  window.location.assign("/")
  .catch((err)=>alert('Error al guardar datos'))
}

render(){
  return(
      <div style={{height:'80vh',
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around'
      }}>
          <Row>
              <Col span={24}>
              <p>Introdusca tus datos personales</p>
              </Col>
          </Row>
          <Row>
              <Col span={12} offset={6}>
              <Input 
              placeholder='Nombre'
              prefix={<Icon type='user'/>}
              value={this.state.first_name}
              onChange={(e)=>this.changeFirstName(e)}
              />

              </Col>

          </Row>
          <Row>
              <Col span={12} offset={6}>
              <Input 
              placeholder='Apellidos'
              prefix={<Icon type='user'/>}
              value={this.state.last_name}
              onChange={(e)=>this.changeLastName(e)}
              />

              </Col>

          </Row>
          <Row>
              <Col span={12} offset={6}>
              <Input 
              placeholder='rol'
              prefix={<Icon type='user'/>}
              value={this.state.rol_user}
              onChange={(e)=>this.changerol(e)}
              />

              </Col>

          </Row>
          <Row>
              <Col span={12} offset={6}>
              <Button
              type='primary'
              icon='user-add'
              shape='round'
              size={'smail'}
              onClick={this.updateUserInfo}
              >
                 Actualizar datos 
              </Button>
              </Col>

          </Row>
      </div>
  )
}
}

export default Datos;
